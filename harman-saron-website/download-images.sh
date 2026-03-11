#!/bin/bash
# Run this once from Terminal to download images for the site.
# From anywhere: bash /Users/harmansaron/harman-saron-website/download-images.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p "$SCRIPT_DIR/images"
cd "$SCRIPT_DIR/images"
curl -sL -o interest-classic-cars.jpg "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80"
curl -sL -o interest-volleyball.jpg "https://images.unsplash.com/photo-1612872086440-88ac6c2a1e92?w=600&q=80"
curl -sL -o interest-football.jpg "https://images.unsplash.com/photo-1504450758481-7338bbe75b4b?w=600&q=80"
curl -sL -o interest-reading.jpg "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
curl -sL -o interest-polaroids.jpg "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80"
curl -sL -o project-budgeting.jpg "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85"
curl -sL -o project-deca.jpg "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=85"
curl -sL -o project-jllc.jpg "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85"
echo "Done. Images are in the images/ folder."
