# Daniel Baeza — Personal Website

A simple, professional one-page personal site. No build step required.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Customizing

Replace all `[bracketed]` placeholders in `index.html` with your real content:

- **Hero**: tagline, short bio, and call-to-action links
- **About**: longer bio and a photo (swap the placeholder div for an `<img>`)
- **Experience**: job titles, companies, dates, and descriptions
- **Projects**: names, descriptions, and Live/Code links
- **Skills**: list of technologies or skills
- **Contact**: email, LinkedIn, GitHub, and any other links

Update the contact section URLs (`your.email@example.com`, `yourprofile`, `yourusername`) with your actual handles.

## Structure

- `index.html` — content and structure
- `styles.css` — layout and typography (DM Sans + Fraunces, warm neutral palette)
- `script.js` — mobile menu and footer year
