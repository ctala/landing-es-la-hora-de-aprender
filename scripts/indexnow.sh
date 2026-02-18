#!/bin/bash

# IndexNow - Instant Indexing for Bing, Yandex, etc.
# Notifica a motores de búsqueda sobre URLs nuevas/actualizadas

set -e

# Configuración
SITE_URL="https://eslahoradeaprender.com"
API_KEY="2cb0fd812a0b474a80889d2559703405"
INDEXNOW_ENDPOINT="https://api.indexnow.org/indexnow"

# URLs a indexar (homepage + episodios)
URLS=(
    "${SITE_URL}/"
    "${SITE_URL}/episodios/01-openclaw-futuro-trabajo"
)

# Crear payload JSON
PAYLOAD=$(cat <<EOF
{
  "host": "eslahoradeaprender.com",
  "key": "${API_KEY}",
  "keyLocation": "${SITE_URL}/${API_KEY}.txt",
  "urlList": [
$(printf '    "%s",\n' "${URLS[@]}" | sed '$ s/,$//')
  ]
}
EOF
)

echo "🚀 IndexNow - Notificando URLs..."
echo ""
echo "URLs a indexar:"
printf '  - %s\n' "${URLS[@]}"
echo ""

# Enviar a IndexNow
RESPONSE=$(curl -s -X POST "${INDEXNOW_ENDPOINT}" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}" \
  -w "\nHTTP_STATUS:%{http_code}")

HTTP_STATUS=$(echo "$RESPONSE" | grep "HTTP_STATUS" | cut -d: -f2)

echo "Response HTTP Status: ${HTTP_STATUS}"
echo ""

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ URLs enviadas exitosamente a IndexNow"
    echo ""
    echo "Motores de búsqueda notificados:"
    echo "  - Bing"
    echo "  - Yandex"
    echo "  - Naver"
    echo "  - Seznam.cz"
    echo ""
    echo "⏱️  Indexación esperada: 1-48 horas"
elif [ "$HTTP_STATUS" = "202" ]; then
    echo "✅ URLs aceptadas (202 Accepted)"
    echo "⏱️  Procesamiento en curso..."
else
    echo "⚠️  Status inesperado: ${HTTP_STATUS}"
    echo "Payload enviado:"
    echo "${PAYLOAD}"
fi

echo ""
echo "📊 Validar indexación en:"
echo "  Bing: https://www.bing.com/webmasters/"
echo "  Yandex: https://webmaster.yandex.com/"
