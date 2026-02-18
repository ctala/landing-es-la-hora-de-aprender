#!/bin/bash

# 🔍 Validate Build Script - Es la Hora de Aprender
# Verifica que el sitio se vea correctamente antes de hacer push

set -e

echo "🚀 Validando build del sitio..."

# 1. Build
echo "📦 Step 1/4: Building..."
npm run build > /dev/null 2>&1

# 2. Verificar que dist/ existe
if [ ! -d "dist" ]; then
    echo "❌ ERROR: dist/ no fue generado"
    exit 1
fi

# 3. Verificar que index.html existe
if [ ! -f "dist/index.html" ]; then
    echo "❌ ERROR: dist/index.html no existe"
    exit 1
fi

# 4. Verificar que el CSS fue generado
CSS_COUNT=$(ls dist/_astro/*.css 2>/dev/null | wc -l)
if [ "$CSS_COUNT" -eq 0 ]; then
    echo "❌ ERROR: No se generó CSS en dist/_astro/"
    exit 1
fi

# 5. Verificar que el HTML tiene el link al CSS
if ! grep -q "stylesheet" dist/index.html; then
    echo "❌ ERROR: El HTML no tiene link a CSS"
    exit 1
fi

# 6. Verificar que el episodio 1 está integrado
if ! grep -q "OpenClaw y el Futuro del Trabajo" dist/index.html; then
    echo "❌ ERROR: Episodio 1 no encontrado en el HTML"
    exit 1
fi

# 7. Verificar que los embeddings/links están presentes
if ! grep -q "youtube.com/embed" dist/index.html; then
    echo "❌ ERROR: Embedding de YouTube no encontrado"
    exit 1
fi

if ! grep -q "spotify.com" dist/index.html; then
    echo "❌ ERROR: Link de Spotify no encontrado"
    exit 1
fi

echo "✅ Step 2/4: Build validado correctamente"

# 8. Preview local (opcional, comentado por defecto)
# echo "🌐 Step 3/4: Iniciando preview local..."
# echo "   👉 Abre http://localhost:4321 en tu navegador"
# echo "   👉 Presiona Ctrl+C cuando termines de revisar"
# npm run preview

echo "✅ Step 3/4: Skipped (preview manual)"

# 9. Resumen
echo ""
echo "✅ Step 4/4: Validación completa"
echo ""
echo "📊 Resumen:"
echo "   - Build: ✓"
echo "   - CSS generado: ✓ ($CSS_COUNT archivo(s))"
echo "   - Episodio 1: ✓"
echo "   - Embeddings: ✓"
echo ""
echo "🚀 El sitio está listo para deploy!"
echo ""
echo "💡 Para ver el sitio localmente:"
echo "   npm run preview"
echo ""
