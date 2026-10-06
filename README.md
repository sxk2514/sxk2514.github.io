# Shivam Kumar — Personal Website

Personal portfolio site built from my CV. Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | All page content (hero, about, experience, projects, publications, awards, skills, contact) |
| `styles.css` | Design tokens, layout, dark/light themes, responsive rules |
| `script.js` | Theme toggle, mobile nav, scroll reveal, section highlighting |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Create a repository named `<your-username>.github.io` (this gives you `https://<your-username>.github.io`).
   For a project site, any repo name works and the URL becomes `https://<your-username>.github.io/<repo>`.
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Add personal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save and wait a minute for the first build.

## Before publishing — update these placeholders

In `index.html`, replace the `href="https://github.com/"` and `href="#"` placeholders with real URLs:

- Mini Pupper GitHub repository
- Grid-based Localisation GitHub repository
- Self-Balancing Bot video link
- ICRA 2024 RUNE workshop paper link

Optionally add `resume.pdf` to this folder and link it from the hero section.
