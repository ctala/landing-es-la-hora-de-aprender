#!/bin/bash

# IndexNow — notifica a Bing, Yandex, Naver, Seznam que ciertas URLs cambiaron.
#
# Modos de uso:
#   ./scripts/indexnow.sh                 # auto: episodios que cambiaron en el último commit
#   ./scripts/indexnow.sh 10 11           # explícito: notifica eps 10 y 11 + URLs fijas
#   ./scripts/indexnow.sh --dry-run       # imprime el payload sin enviar
#
# En cualquier modo se incluyen siempre: home, /episodios/, sitemaps y feed.
# Correr desde la raíz del repo (asume `src/content/episodes/` relativo al cwd).

set -e

SITE_URL="https://eslahoradeaprender.com"
HOST="eslahoradeaprender.com"
API_KEY="2cb0fd812a0b474a80889d2559703405"
INDEXNOW_ENDPOINT="https://api.indexnow.org/indexnow"

DRY_RUN=0
POSITIONAL=()
for arg in "$@"; do
    case "$arg" in
        --dry-run|-n) DRY_RUN=1 ;;
        --help|-h)
            sed -n '3,12p' "$0"
            exit 0
            ;;
        *) POSITIONAL+=("$arg") ;;
    esac
done
set -- "${POSITIONAL[@]}"

# Resuelve el slug de URL de un .md: usa `slug:` del frontmatter si existe, sino el filename.
slug_for_md() {
    local file="$1"
    local slug_line
    slug_line=$(grep -m1 '^slug:' "$file" 2>/dev/null || true)
    if [ -n "$slug_line" ]; then
        echo "$slug_line" | sed -E 's/^slug:[[:space:]]*"?([^"]+)"?[[:space:]]*$/\1/'
    else
        basename "$file" .md
    fi
}

# URLs fijas: siempre se notifican (cualquier episodio nuevo cambia home + listado + sitemaps).
FIXED_URLS=(
    "${SITE_URL}/"
    "${SITE_URL}/episodios/"
    "${SITE_URL}/sitemap-index.xml"
    "${SITE_URL}/video-sitemap.xml"
    "${SITE_URL}/feed.xml"
)

EPISODE_URLS=()

if [ "$#" -gt 0 ]; then
    # Modo explícito: números de episodio
    for num in "$@"; do
        padded=$(printf "%02d" "$num" 2>/dev/null || echo "$num")
        file=$(find src/content/episodes -name "${padded}-*.md" -type f | head -1)
        if [ -z "$file" ]; then
            echo "⚠️  Episodio $num no encontrado en src/content/episodes/"
            continue
        fi
        slug=$(slug_for_md "$file")
        EPISODE_URLS+=("${SITE_URL}/episodios/${slug}/")
    done
else
    # Modo auto: episodios que cambiaron en el último commit
    if ! git rev-parse HEAD^ >/dev/null 2>&1; then
        echo "ℹ️  No hay commit previo. Notifico solo URLs fijas."
    else
        changed=$(git diff --name-only HEAD^ HEAD -- 'src/content/episodes/*.md' 2>/dev/null || true)
        if [ -z "$changed" ]; then
            echo "ℹ️  No hay episodios que cambiaron en el último commit. Notifico solo URLs fijas."
        else
            while IFS= read -r file; do
                [ -f "$file" ] || continue
                slug=$(slug_for_md "$file")
                EPISODE_URLS+=("${SITE_URL}/episodios/${slug}/")
            done <<< "$changed"
        fi
    fi
fi

ALL_URLS=("${FIXED_URLS[@]}" "${EPISODE_URLS[@]}")

PAYLOAD=$(cat <<EOF
{
  "host": "${HOST}",
  "key": "${API_KEY}",
  "keyLocation": "${SITE_URL}/${API_KEY}.txt",
  "urlList": [
$(printf '    "%s",\n' "${ALL_URLS[@]}" | sed '$ s/,$//')
  ]
}
EOF
)

echo "🚀 IndexNow — ${#ALL_URLS[@]} URL(s) a notificar:"
printf '  - %s\n' "${ALL_URLS[@]}"
echo ""

if [ "$DRY_RUN" = "1" ]; then
    echo "--- DRY RUN (no se envía) ---"
    echo "${PAYLOAD}"
    exit 0
fi

RESPONSE=$(curl -s -X POST "${INDEXNOW_ENDPOINT}" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}" \
  -w "\nHTTP_STATUS:%{http_code}")

HTTP_STATUS=$(echo "$RESPONSE" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Response: ${HTTP_STATUS}"
echo ""

case "$HTTP_STATUS" in
    200) echo "✅ URLs enviadas a IndexNow (Bing, Yandex, Naver, Seznam.cz)" ;;
    202) echo "✅ URLs aceptadas (202 Accepted) — procesamiento en curso" ;;
    *)
        echo "⚠️  Status inesperado: ${HTTP_STATUS}"
        echo "Payload:"
        echo "${PAYLOAD}"
        exit 1
        ;;
esac

echo ""
echo "📊 Validar en:"
echo "  Bing:   https://www.bing.com/webmasters/"
echo "  Yandex: https://webmaster.yandex.com/"
