import os
import re
import fitz

source = r"c:\Users\NAYANENDHU\Documents\nayana report.pdf"
out_dir = r"c:\Users\NAYANENDHU\Desktop\porfolio\assets\projects\shristi"
os.makedirs(out_dir, exist_ok=True)
pdf = fitz.open(source)
lines = []
for index, page in enumerate(pdf):
    text = re.sub(r"\s+", " ", page.get_text()).strip()
    lines.append(f"{index + 1}: {text[:500]}")
    image = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    image.save(os.path.join(out_dir, f"report-page-{index + 1:02d}.png"))
with open(os.path.join(out_dir, "page-index.txt"), "w", encoding="utf-8") as index_file:
    index_file.write("\n".join(lines))
print(f"Rendered {len(pdf)} pages")
print("\n".join(lines))
