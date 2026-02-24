# Lydia Rajadurai — Personal Website

A professional, single-page portfolio website.

## Quick Start

1. Open `index.html` in your browser, or
2. Run a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Or with Node.js (npx)
   npx serve .
   ```
3. Visit `http://localhost:8000`

## Customization

Replace all `[placeholder]` text in `index.html` with your content:

- **Hero**: Tagline and call-to-action buttons
- **About**: Bio, photo (replace the placeholder div with `<img src="your-photo.jpg" alt="Lydia Rajadurai">`), location, email, LinkedIn
- **Experience**: Job titles, companies, dates, descriptions
- **Skills**: Categories and skill lists
- **Projects**: Titles, descriptions, links, and project images
- **Contact**: Intro message and social links (email, LinkedIn, GitHub, resume)

## File Structure

```
lydia-website/
├── index.html    # Main page
├── styles.css    # Styling
├── script.js     # Navigation & interactions
└── README.md     # This file
```

## Adding Your Photo

Replace the about section image placeholder:

```html
<div class="about-image">
  <img src="your-photo.jpg" alt="Lydia Rajadurai" style="border-radius: 8px;">
</div>
```

Ensure the image file is in the same folder as `index.html` or update the path accordingly.
