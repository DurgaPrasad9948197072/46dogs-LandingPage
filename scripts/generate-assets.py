#!/usr/bin/env python3
"""
Derive every image asset from one source file: public/logo.png

Outputs
  public/og.png          1200x630  Open Graph / Twitter card
  src/app/icon.png        512x512  favicon (Next serves it at /icon.png)
  src/app/apple-icon.png  180x180  iOS home screen

Run after replacing the logo:
    python3 scripts/generate-assets.py

If public/logo.png is missing, a monochrome wordmark placeholder is written
first so the site never renders a broken image.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "logo.png"
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
]


def load_font(size):
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def tracked_text(draw, center, text, font, tracking, fill=WHITE):
    """Draw letter-spaced text centred on `center`."""
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    ascent, descent = font.getmetrics()
    x = center[0] - total / 2
    y = center[1] - (ascent + descent) / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking


def write_placeholder():
    size = 1024
    img = Image.new("RGB", (size, size), BLACK)
    draw = ImageDraw.Draw(img)
    tracked_text(draw, (size / 2, size * 0.46), "46DOGS", load_font(150), 26)
    tracked_text(draw, (size / 2, size * 0.60), "RESCUE. CARE. LOVE.", load_font(38), 14)
    SOURCE.parent.mkdir(parents=True, exist_ok=True)
    img.save(SOURCE)
    print(f"placeholder logo written  -> {SOURCE.relative_to(ROOT)}")
    print("   replace it with the real artwork, then re-run this script.")


def flatten(img):
    """Composite any transparency onto black — the brand ground."""
    img = img.convert("RGBA")
    canvas = Image.new("RGBA", img.size, (*BLACK, 255))
    canvas.alpha_composite(img)
    return canvas.convert("RGB")


def contain(img, box, bg=BLACK):
    """Fit `img` inside `box` without cropping, centred on `bg`."""
    fitted = img.copy()
    fitted.thumbnail(box, Image.LANCZOS)
    canvas = Image.new("RGB", box, bg)
    canvas.paste(fitted, ((box[0] - fitted.width) // 2, (box[1] - fitted.height) // 2))
    return canvas


def main():
    if not SOURCE.exists():
        write_placeholder()

    logo = flatten(Image.open(SOURCE))

    targets = [
        (ROOT / "public" / "og.png", (1200, 630), 0.80),
        (ROOT / "src" / "app" / "icon.png", (512, 512), 1.0),
        (ROOT / "src" / "app" / "apple-icon.png", (180, 180), 1.0),
    ]

    for path, box, scale in targets:
        inner = (int(box[0] * scale), int(box[1] * scale))
        out = contain(logo, box) if scale == 1.0 else None
        if out is None:
            fitted = logo.copy()
            fitted.thumbnail(inner, Image.LANCZOS)
            out = Image.new("RGB", box, BLACK)
            out.paste(fitted, ((box[0] - fitted.width) // 2, (box[1] - fitted.height) // 2))
        path.parent.mkdir(parents=True, exist_ok=True)
        out.save(path, optimize=True)
        print(f"{box[0]}x{box[1]:<4} -> {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
