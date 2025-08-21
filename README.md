# CU FIRST — Static Site

A minimal, fast, accessible static site for CU FIRST using **plain HTML/CSS/JS**. Designed for **GitHub Pages**.

## Local preview
Open `index.html` in a browser.

## Deploy on GitHub Pages
1. Create a new public repo on GitHub, e.g., `cu-first-site`.
2. Upload all files in this folder to the repo (or push via git).
3. In **Settings → Pages**, set:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or `master`) / root (`/`)
4. Save. Your site will be available at `https://<username>.github.io/<repo>/`.

### Custom domain (optional)
- Add your domain in **Settings → Pages** and create the required DNS `CNAME` record.
- If you know the domain now, create a `CNAME` file at the repo root containing it.

## Content guide
- Edit text in `index.html`.
- Colors are restricted to **red / black / white** with a **white page background** to match CU FIRST style.
- Replace `assets/img/sponsor-placeholder.svg` with real logos.
- Contact form uses **Formspree**; replace `your_form_id` in the form action with your endpoint.

## Accessibility & performance
- Semantic HTML, keyboard‑friendly nav, and reduced JS.
- Mobile‑first responsive CSS (no frameworks).
- Social/SEO meta tags included.

## License
MIT
