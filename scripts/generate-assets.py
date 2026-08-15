#!/usr/bin/env python3
"""
Derive every image asset from one source file: public/logo.png

Outputs
  public/logo-lockup.png 1024x1024 on-page logo (trimmed, fills the frame)
  public/logo-mark.png    512x512  dog mark alone, for small placements
  public/og.png          1200x630  Open Graph / Twitter card (full lockup)
  src/app/icon.png        512x512  favicon        (dog mark only)
  src/app/apple-icon.png  180x180  iOS home screen (dog mark only)

Run after replacing the logo:
    python3 scripts/generate-assets.py

Source artwork usually sits inside a generous square margin, which makes it
render small on the page. logo-lockup.png is the same lockup trimmed and
re-centred so it fills its container; public/logo.png stays the untouched
master and is what the NGO schema points at.

The icons deliberately drop the wordmark. The full lockup is illegible at the
16-32px a favicon actually renders at, so the mark is isolated by finding the
horizontal band of artwork above the "46DOGS" text.

If public/logo.png is missing, a monochrome wordmark placeholder is written
first so the site never renders a broken image.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "logo.png"
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# a pixel counts as artwork above this luma; ignores JPEG noise in the ground
INK_THRESHOLD = 40

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


def ink_rows(img):
    """Per-row count of artwork pixels."""
    grey = img.convert("L")
    w, h = grey.size
    px = grey.load()
    return [sum(1 for x in range(w) if px[x, y] > INK_THRESHOLD) for y in range(h)]


def trim(img):
    """Crop away the empty ground around the artwork."""
    grey = img.convert("L")
    box = grey.point(lambda v: 255 if v > INK_THRESHOLD else 0).getbbox()
    return img.crop(box) if box else img


def isolate_mark(img):
    """
    Return just the dog mark: the first band of artwork, separated from the
    wordmark below it by a run of blank rows.
    """
    rows = ink_rows(img)
    filled = [i for i, c in enumerate(rows) if c > 0]
    if not filled:
        return img

    # a gap worth splitting on is ~2% of the image height
    min_gap = max(4, img.height // 50)

    start = filled[0]
    end = filled[0]
    for y in filled[1:]:
        if y - end > min_gap:
            break  # first band closed — that is the mark
        end = y

    if end - start < img.height * 0.15:
        return img  # nothing sensible found; keep the whole lockup

    return trim(img.crop((0, start, img.width, end + 1)))


def fit(img, box, scale):
    """Centre `img` inside `box`, occupying `scale` of the shorter side."""
    inner = (max(1, int(box[0] * scale)), max(1, int(box[1] * scale)))
    fitted = img.copy()
    fitted.thumbnail(inner, Image.LANCZOS)
    canvas = Image.new("RGB", box, BLACK)
    canvas.paste(fitted, ((box[0] - fitted.width) // 2, (box[1] - fitted.height) // 2))
    return canvas


def main():
    if not SOURCE.exists():
        write_placeholder()

    logo = flatten(Image.open(SOURCE))
    lockup = trim(logo)
    mark = isolate_mark(logo)

    print(f"lockup {lockup.size}   mark {mark.size}")

    targets = [
        (ROOT / "public" / "logo-lockup.png", (1024, 1024), 0.92, lockup),
        (ROOT / "public" / "logo-mark.png", (512, 512), 0.92, mark),
        (ROOT / "public" / "og.png", (1200, 630), 0.78, lockup),
        (ROOT / "src" / "app" / "icon.png", (512, 512), 0.88, mark),
        (ROOT / "src" / "app" / "apple-icon.png", (180, 180), 0.82, mark),
    ]

    for path, box, scale, art in targets:
        path.parent.mkdir(parents=True, exist_ok=True)
        fit(art, box, scale).save(path, optimize=True)
        print(f"{box[0]}x{box[1]:<4} -> {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
