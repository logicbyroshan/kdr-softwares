import os
import io
import math
import base64
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def generate():
    root_logo = 'KDR Logo.png'
    if not os.path.exists(root_logo):
        # Fallback if already moved
        root_logo = 'frontend/public/logo.png'
        if not os.path.exists(root_logo):
            print("Error: Logo not found")
            return

    img = Image.open(root_logo).convert('RGBA')
    print(f"Master logo loaded: {img.size}")

    # Ensure directories exist
    os.makedirs('frontend/public', exist_ok=True)
    os.makedirs('frontend/src/assets', exist_ok=True)
    os.makedirs('backend/staticfiles', exist_ok=True)
    os.makedirs('backend/media', exist_ok=True)

    # 1. Master PNG copies
    img.save('frontend/public/logo.png', 'PNG')
    img.save('frontend/src/assets/logo.png', 'PNG')
    img.save('backend/staticfiles/logo.png', 'PNG')
    img.save('backend/media/logo.png', 'PNG')

    # 2. Modern WebP variants
    img.save('frontend/public/logo.webp', 'WEBP', quality=95)
    img.save('frontend/src/assets/logo.webp', 'WEBP', quality=95)

    # 3. Scaled PNG sizes for web, mobile, PWA, apple touch
    sizes = [512, 192, 180, 128, 96, 64, 48, 32, 16]
    for s in sizes:
        resized = img.resize((s, s), Image.Resampling.LANCZOS)
        resized.save(f'frontend/public/logo-{s}.png', 'PNG')
        if s == 180:
            resized.save('frontend/public/apple-touch-icon.png', 'PNG')
        elif s == 32:
            resized.save('frontend/public/favicon-32x32.png', 'PNG')
        elif s == 16:
            resized.save('frontend/public/favicon-16x16.png', 'PNG')

    # 4. Multi-resolution favicon.ico
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    img.save('frontend/public/favicon.ico', format='ICO', sizes=ico_sizes)

    # 5. High-resolution SVG embedding
    img_512 = img.resize((512, 512), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    img_512.save(buf, format='PNG', optimize=True)
    b64_data = base64.b64encode(buf.getvalue()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image width="512" height="512" href="data:image/png;base64,{b64_data}"/>
</svg>
'''
    with open('frontend/public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    with open('frontend/public/logo.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)

    # 6. High-end OpenGraph Banner (1200x630)
    W, H = 1200, 630
    bg = Image.new('RGBA', (W, H), (7, 13, 26, 255))
    glow_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)

    # Ambient radial glows matching the new brand colors
    cx1, cy1 = 280, 315
    for r in range(450, 0, -10):
        alpha = int(40 * (1 - r / 450))
        glow_draw.ellipse([cx1 - r, cy1 - r, cx1 + r, cy1 + r], fill=(0, 91, 234, alpha))

    cx2, cy2 = 920, 160
    for r in range(380, 0, -10):
        alpha = int(28 * (1 - r / 380))
        glow_draw.ellipse([cx2 - r, cy2 - r, cx2 + r, cy2 + r], fill=(0, 163, 255, alpha))

    bg = Image.alpha_composite(bg, glow_layer)

    # 3D Logo rendering in OG banner
    logo_size = 400
    logo_og = img.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    bg.paste(logo_og, (100, (H - logo_size) // 2), logo_og)

    # Typography
    draw = ImageDraw.Draw(bg)
    try:
        font_badge = ImageFont.truetype('arial.ttf', 17)
        font_title = ImageFont.truetype('arialbd.ttf', 60)
        font_sub = ImageFont.truetype('arial.ttf', 25)
        font_tag = ImageFont.truetype('arialbd.ttf', 19)
        font_foot = ImageFont.truetype('arial.ttf', 17)
    except Exception:
        font_badge = font_title = font_sub = font_tag = font_foot = ImageFont.load_default()

    text_x = 550
    # Badge
    draw.rounded_rectangle([text_x, 140, text_x + 310, 175], radius=8, fill=(13, 31, 62, 255), outline=(0, 145, 255, 180), width=1)
    draw.text((text_x + 14, 148), 'OFFICIAL TECHNOLOGY PLATFORM', fill=(56, 189, 248, 255), font=font_badge)

    # Brand Title
    draw.text((text_x, 195), 'KDR Softwares', fill=(255, 255, 255, 255), font=font_title)

    # Brand Tagline
    draw.text((text_x, 280), 'Practical Software Products &\nCustom Technology Solutions', fill=(203, 213, 225, 255), font=font_sub, spacing=8)

    # Products summary
    draw.text((text_x, 390), 'CardFlow  •  PrintFlow  •  EazeFlow  •  Custom Engineering', fill=(0, 163, 255, 255), font=font_tag)

    # Separator line & footer
    draw.line([(text_x, 445), (1100, 445)], fill=(30, 41, 59, 255), width=1)
    draw.text((text_x, 465), 'kdrsoftwares.in  •  Navlakha, Indore, Madhya Pradesh, India', fill=(148, 163, 184, 255), font=font_foot)

    bg.convert('RGB').save('frontend/public/og-image.png', 'PNG')
    print("All brand assets successfully generated!")

if __name__ == '__main__':
    generate()

