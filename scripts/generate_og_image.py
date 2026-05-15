#!/usr/bin/env python3
"""
generate_og_image.py — genera la imagen Open Graph del sitio (1200×630).

Toma los thumbnails de los 3 episodios más recientes y los compone en grid
arriba, con el wordmark "ES LA HORA DE APRENDER" + tagline abajo.

USO:
    python3 scripts/generate_og_image.py
    python3 scripts/generate_og_image.py --output public/og-image.jpg
    python3 scripts/generate_og_image.py --episodes 10 11 12

REQUISITOS:
    pip install Pillow

Las fonts (Archivo Black) se descargan a ~/.cache/elhda-fonts/ la primera vez.
"""
import argparse
import io
import re
import sys
import urllib.request
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
except ImportError:
    sys.exit("❌ falta Pillow: pip install Pillow")


REPO = Path(__file__).resolve().parent.parent
THUMBS_DIR = REPO / "public" / "thumbnails"
EPISODES_DIR = REPO / "src" / "content" / "episodes"
OG_OUTPUT = REPO / "public" / "og-image.jpg"

FONT_CACHE = Path.home() / ".cache" / "elhda-fonts"
FONT_URLS = {
    "ArchivoBlack-Regular.ttf": "https://github.com/google/fonts/raw/main/ofl/archivoblack/ArchivoBlack-Regular.ttf",
    "SpaceGrotesk-Bold.ttf":    "https://github.com/google/fonts/raw/main/ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf",
}

# Brand: theme-color del sitio (BaseLayout.astro) — azul corporativo
BRAND_BLUE = (45, 91, 255)        # #2d5bff
BG_TOP = (10, 10, 26)             # casi negro con tinte azul
BG_BOTTOM = (5, 5, 16)            # negro
WHITE = (255, 255, 255)
GREY = (180, 180, 200)


def fetch_font(name: str) -> Path:
    """Download font on demand to ~/.cache/elhda-fonts/."""
    FONT_CACHE.mkdir(parents=True, exist_ok=True)
    path = FONT_CACHE / name
    if not path.exists():
        url = FONT_URLS[name]
        print(f"  · downloading {name}")
        urllib.request.urlretrieve(url, path)
    return path


def latest_episodes(n: int = 3) -> list[int]:
    """Return the N most recent episode numbers from src/content/episodes/."""
    nums = []
    for f in EPISODES_DIR.glob("*.md"):
        m = re.match(r"^(\d{2})-", f.name)
        if m:
            nums.append(int(m.group(1)))
    nums.sort()
    return nums[-n:]


def vertical_gradient(w: int, h: int, top: tuple, bottom: tuple) -> Image.Image:
    img = Image.new("RGB", (w, h), top)
    px = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        r = int(top[0] * (1 - t) + bottom[0] * t)
        g = int(top[1] * (1 - t) + bottom[1] * t)
        b = int(top[2] * (1 - t) + bottom[2] * t)
        for x in range(w):
            px[x, y] = (r, g, b)
    return img


def rounded_rect_mask(size: tuple, radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def paste_thumbnail(canvas: Image.Image, thumb_path: Path, x: int, y: int, w: int, h: int, radius: int = 18):
    """Paste a thumbnail with rounded corners + subtle border glow."""
    src = Image.open(thumb_path).convert("RGB")
    # cover-fit
    src_ratio = src.width / src.height
    target_ratio = w / h
    if src_ratio > target_ratio:
        new_w = int(src.height * target_ratio)
        offset = (src.width - new_w) // 2
        src = src.crop((offset, 0, offset + new_w, src.height))
    else:
        new_h = int(src.width / target_ratio)
        offset = (src.height - new_h) // 2
        src = src.crop((0, offset, src.width, offset + new_h))
    src = src.resize((w, h), Image.LANCZOS)

    mask = rounded_rect_mask((w, h), radius)

    # subtle blue glow behind thumb
    glow = Image.new("RGB", (w + 24, h + 24), BG_TOP)
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.rounded_rectangle((0, 0, w + 24, h + 24), radius=radius + 8, fill=(30, 50, 120))
    glow = glow.filter(ImageFilter.GaussianBlur(8))
    canvas.paste(glow, (x - 12, y - 12))

    canvas.paste(src, (x, y), mask=mask)


def draw_text_centered(draw: ImageDraw.ImageDraw, text: str, y: int, font: ImageFont.FreeTypeFont,
                       canvas_w: int, color=WHITE):
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    draw.text(((canvas_w - text_w) // 2, y), text, font=font, fill=color)
    return bbox[3] - bbox[1]


def main():
    ap = argparse.ArgumentParser(description="Generate Open Graph image for the podcast site.")
    ap.add_argument("--episodes", nargs="*", type=int,
                    help="Specific episode numbers to feature (default: 3 latest)")
    ap.add_argument("--output", default=str(OG_OUTPUT), help=f"Output path (default: {OG_OUTPUT})")
    args = ap.parse_args()

    eps = args.episodes if args.episodes else latest_episodes(3)
    if len(eps) < 3:
        print(f"⚠️ only {len(eps)} episodes available — proceeding")

    # Resolve thumbnail paths
    thumb_paths = []
    for ep in eps:
        for suffix in ("", "-sm"):
            p = THUMBS_DIR / f"ep{ep:02d}{suffix}.webp"
            if p.exists():
                thumb_paths.append(p)
                break
        else:
            sys.exit(f"❌ no thumbnail found for episode {ep}")
    print(f"  · featuring episodes: {eps}")

    # Fonts
    archivo_path = fetch_font("ArchivoBlack-Regular.ttf")
    space_path = fetch_font("SpaceGrotesk-Bold.ttf")
    f_title = ImageFont.truetype(str(archivo_path), 72)
    f_tagline = ImageFont.truetype(str(space_path), 28)
    f_domain = ImageFont.truetype(str(space_path), 22)

    # Canvas
    W, H = 1200, 630
    canvas = vertical_gradient(W, H, BG_TOP, BG_BOTTOM)

    # Decorative blue accent line at top
    draw = ImageDraw.Draw(canvas)

    # Layout thumbnails: 3 cols, 380x214 each, gap 20, margin top 50
    thumb_w, thumb_h = 380, 214
    gap = 20
    total_w = thumb_w * len(thumb_paths) + gap * (len(thumb_paths) - 1)
    start_x = (W - total_w) // 2
    thumb_y = 50

    for i, p in enumerate(thumb_paths):
        x = start_x + i * (thumb_w + gap)
        paste_thumbnail(canvas, p, x, thumb_y, thumb_w, thumb_h, radius=18)

    # Title
    title = "ES LA HORA DE APRENDER"
    title_y = thumb_y + thumb_h + 60
    draw_text_centered(draw, title, title_y, f_title, W, color=WHITE)

    # Accent: small blue badge under title (like episode thumbnails badge)
    badge_y = title_y + 90
    tagline = "Podcast IA · Agentes · Estrategia tech · LATAM"
    bbox = draw.textbbox((0, 0), tagline, font=f_tagline)
    tag_w = bbox[2] - bbox[0]
    tag_h = bbox[3] - bbox[1]
    pad_x, pad_y = 22, 10
    badge_x0 = (W - tag_w) // 2 - pad_x
    badge_x1 = badge_x0 + tag_w + pad_x * 2
    badge_y1 = badge_y + tag_h + pad_y * 2
    draw.rounded_rectangle((badge_x0, badge_y, badge_x1, badge_y1), radius=10, fill=BRAND_BLUE)
    draw.text((badge_x0 + pad_x, badge_y + pad_y - 2), tagline, font=f_tagline, fill=WHITE)

    # Domain footer
    domain = "eslahoradeaprender.com"
    draw_text_centered(draw, domain, badge_y1 + 22, f_domain, W, color=GREY)

    # Save
    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out, "JPEG", quality=88, optimize=True, progressive=True)
    size_kb = out.stat().st_size / 1024
    print(f"  ✓ wrote {out}  ({W}×{H}, {size_kb:.1f} KB)")


if __name__ == "__main__":
    main()
