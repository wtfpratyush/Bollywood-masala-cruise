#!/bin/bash
# Generate the 800px and 1600px JPEG copies of gallery photos used by src/lib/images.js.
# Originals in public/images/gallery are never modified. Re-run after adding photos.
# Requires macOS `sips`. Existing thumbnails are skipped unless FORCE=1.
set -euo pipefail
cd "$(dirname "$0")/../public/images"

count=0
while IFS= read -r -d '' f; do
  rel="${f%.*}.jpg"
  for w in 800 1600; do
    out="thumbs/$w/$rel"
    [ -f "$out" ] && [ "${FORCE:-0}" != "1" ] && continue
    mkdir -p "$(dirname "$out")"
    sips -s format jpeg -s formatOptions 72 -Z "$w" "$f" --out "$out" >/dev/null
    count=$((count + 1))
  done
done < <(find gallery -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' \) -print0)

echo "Generated $count thumbnail(s)."
