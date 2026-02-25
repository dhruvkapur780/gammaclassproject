# Personal & Professional Website

A simple, modern one-page portfolio site built from your LinkedIn profile structure (About, Experience, Projects, Skills, and Contact).

Everything is **plain HTML, CSS, and a bit of JavaScript**, so you can host it anywhere (GitHub Pages, Netlify, Vercel, S3, etc.) without a build step.

## Structure

- **`index.html`** – Content and layout
- **`styles.css`** – Visual design and responsive styles
- **`script.js`** – Small enhancements (mobile nav toggle + auto year)

## How to run locally

1. Open the `personal-site` folder in your editor.
2. Double-click `index.html` to open it in your browser  
   – or –
3. Serve it with a simple HTTP server (for example, with Python):

   ```bash
   cd personal-site
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000` in your browser.

## What to customize

Search in `index.html` for the following placeholders and replace them with content from your LinkedIn profile:

- **"Your Name"**
- **"Your current role or headline..."**
- **"Your Role @ Company"**, descriptions, dates, and locations
- **Project names, descriptions, and bullet points**
- **Skills** under Core, Technical/Tools, and Leadership/Collaboration
- **`your.email@example.com`** with your real email
- Optional: replace the **avatar letter** in the small square with your initial, or swap it for a real image.

Your LinkedIn URL is already wired up to `https://www.linkedin.com/in/arajvan/` in several places.

## Deploying

- **GitHub Pages**: push this folder to a repo, enable Pages for the `main` branch, and set the root as the Pages source.
- **Netlify / Vercel**: drag-and-drop the folder into their dashboard, or connect the Git repo and choose this folder as the root.

Once deployed, you can link this site back from your LinkedIn profile and resume.

