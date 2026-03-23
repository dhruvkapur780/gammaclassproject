#!/usr/bin/env python3
"""Circular-crop the profile source image and save as jaimin-shah-profile.png"""
from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "-q"])
    from PIL import Image, ImageDraw

def circular_crop(src_path: Path, out_path: Path) -> None:
    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    size = min(w, h)
    left = (w - size) // 2
    top = (h - size) // 2
    img = img.crop((left, top, left + size, top + size))

    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    img.putalpha(mask)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG")

if __name__ == "__main__":
    src = Path("/Users/sunehri/.cursor/projects/Users-sunehri-Jaimin-Shah/assets/Screenshot_2026-02-24_at_7.01.27_PM-f2a4cf92-5329-402a-b0dc-4d101242157f.png")
    out = Path("/Users/sunehri/Jaimin-Shah/assets/jaimin-shah-profile.png")
    circular_crop(src, out)
    print("Saved circular crop to", out)
