#!/usr/bin/env python3
"""
Generate favicons from og-image.jpg
Sizes: 512, 192, 180, 32, 16
"""

from PIL import Image
import os

# Paths
input_image = "/home/moltbot/clawd/projects/podcast-es-la-hora/public/og-image.jpg"
output_dir = "/home/moltbot/clawd/projects/podcast-es-la-hora/public"

# Load source image
img = Image.open(input_image)

# Crop to square (center crop)
width, height = img.size
if width > height:
    left = (width - height) / 2
    top = 0
    right = (width + height) / 2
    bottom = height
else:
    left = 0
    top = (height - width) / 2
    right = width
    bottom = (height + width) / 2

img_square = img.crop((left, top, right, bottom))

# Generate sizes
sizes = {
    "android-chrome-512x512.png": 512,
    "android-chrome-192x192.png": 192,
    "apple-touch-icon.png": 180,
    "favicon-32x32.png": 32,
    "favicon-16x16.png": 16
}

for filename, size in sizes.items():
    output_path = os.path.join(output_dir, filename)
    resized = img_square.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(output_path, optimize=True, quality=95)
    print(f"✅ Generated: {filename} ({size}x{size})")

# Generate ICO (multi-size)
ico_path = os.path.join(output_dir, "favicon.ico")
img_16 = img_square.resize((16, 16), Image.Resampling.LANCZOS)
img_32 = img_square.resize((32, 32), Image.Resampling.LANCZOS)
img_48 = img_square.resize((48, 48), Image.Resampling.LANCZOS)

img_16.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print(f"✅ Generated: favicon.ico (multi-size: 16, 32, 48)")

print("\n✅ All favicons generated successfully!")
