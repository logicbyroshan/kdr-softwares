"""
Generate dedicated 1200x630 OpenGraph social image for CardFlow.
"""
from PIL import Image, ImageDraw, ImageFont
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(BASE_DIR, "..", "frontend", "public", "og-cardflow.png")
LOGO_PATH = os.path.join(BASE_DIR, "..", "frontend", "public", "logo-512.png")

# Create 1200x630 canvas
W, H = 1200, 630
img = Image.new("RGBA", (W, H), (7, 13, 26, 255))
draw = ImageDraw.Draw(img)

# Gradient effect in background
for y in range(H):
    ratio = y / H
    r = int(7 + ratio * (10 - 7))
    g = int(13 + ratio * (37 - 13))
    b = int(26 + ratio * (88 - 26))
    draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

# Top decorative border line
draw.rectangle([(0, 0), (W, 6)], fill=(0, 98, 227, 255)) # Cobalt blue

# Paste Logo if available
if os.path.exists(LOGO_PATH):
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo = logo.resize((260, 260), Image.Resampling.LANCZOS)
    img.paste(logo, (850, 185), logo)

# Draw decorative grid / badge
# Badge: "PRODUCTION ACTIVE • 100,000+ CARDS PROCESSED"
draw.rounded_rectangle([(80, 80), (520, 125)], radius=12, fill=(0, 98, 227, 40), outline=(0, 132, 255, 180), width=2)
# Text inside badge
try:
    font_badge = ImageFont.truetype("arial.ttf", 18)
    font_title = ImageFont.truetype("arialbd.ttf", 64)
    font_subtitle = ImageFont.truetype("arial.ttf", 26)
    font_tag = ImageFont.truetype("arialbd.ttf", 20)
    font_footer = ImageFont.truetype("arial.ttf", 18)
except:
    font_badge = font_title = font_subtitle = font_tag = font_footer = ImageFont.load_default()

draw.text((105, 93), "PRODUCTION VERIFIED • 100,000+ RECORDS", font=font_badge, fill=(56, 189, 248, 255))

# Product Title: "CardFlow"
draw.text((80, 160), "CardFlow", font=font_title, fill=(255, 255, 255, 255))

# Tagline / Subtitle
draw.text((80, 255), "Bulk ID Card Data & OCR Automation Engine", font=font_subtitle, fill=(0, 132, 255, 255))

# Description paragraphs
draw.text((80, 315), "Eliminates chaotic spreadsheets, automates photo matching,", font=font_subtitle, fill=(203, 213, 225, 255))
draw.text((80, 355), "and provides clean batch export for CorelDRAW production.", font=font_subtitle, fill=(203, 213, 225, 255))

# Features bullet pills
pill1_x = 80
draw.rounded_rectangle([(pill1_x, 430), (pill1_x + 230, 475)], radius=8, fill=(15, 23, 42, 220), outline=(51, 65, 85, 255), width=1)
draw.text((pill1_x + 20, 442), "✓ OCR Slip Extraction", font=font_tag, fill=(16, 185, 129, 255))

pill2_x = 330
draw.rounded_rectangle([(pill2_x, 430), (pill2_x + 230, 475)], radius=8, fill=(15, 23, 42, 220), outline=(51, 65, 85, 255), width=1)
draw.text((pill2_x + 20, 442), "✓ Duplicate Filtering", font=font_tag, fill=(16, 185, 129, 255))

pill3_x = 580
draw.rounded_rectangle([(pill3_x, 430), (pill3_x + 230, 475)], radius=8, fill=(15, 23, 42, 220), outline=(51, 65, 85, 255), width=1)
draw.text((pill3_x + 20, 442), "✓ CorelDRAW Integrated", font=font_tag, fill=(16, 185, 129, 255))

# Footer
draw.line([(80, 550), (1120, 550)], fill=(30, 41, 59, 255))
draw.text((80, 570), "KDR Softwares • Navlakha, Indore, MP, India • https://kdrsoftwares.in", font=font_footer, fill=(148, 163, 184, 255))

# Save image
img = img.convert("RGB")
img.save(OUTPUT_PATH, "PNG", optimize=True)
print(f"Generated {OUTPUT_PATH} ({os.path.getsize(OUTPUT_PATH)} bytes)")

