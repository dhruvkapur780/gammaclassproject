# Arnav Pydimukkala — Personal Website

This is a lightweight, professional one-page website generated from public LinkedIn details.

## Folder layout

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
  - `profile.jpg` (add this — see below)
  - `profile.svg` (fallback placeholder)
  - `favicon.svg`

## Add Arnav’s LinkedIn profile picture

1. Open Arnav’s LinkedIn: `https://www.linkedin.com/in/arnavpyd/`
2. Download/save the profile picture.
3. Save it as:

`assets/profile.jpg`

The site already tries `assets/profile.jpg` first; if it’s missing, it will automatically fall back to `assets/profile.svg`.

## Run locally

Option A (simplest): double-click `index.html` to open it in your browser.

Option B (local server):

```bash
cd "Arnav-Pydimukkala"
python3 -m http.server 5500
```

Then open `http://localhost:5500`.

