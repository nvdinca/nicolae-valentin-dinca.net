# Nicolae-Valentin Dincă – Portfolio

Site: **[nicolae-valentin-dinca.net](https://nicolae-valentin-dinca.net)**

---

## Română

Acest repository este **portofoliul meu** și este public doar pentru **informare și vizualizare**. Conținutul și codul sunt afișate ca demonstrație a muncii mele. Nu este permisă utilizarea, copierea sau redistribuirea fără acordul meu. Vezi [LICENSE](LICENSE).

Portfolio static cu Next.js 15 și React (fără CMS / fără baza de date). Conținutul proiectelor este hardcodat.

### Dezvoltare locală

1. **Dependențe:** `npm install`
2. **Aplicație:** `npm run dev` → [http://localhost:3000](http://localhost:3000)

### Modificarea portofoliului

- Editează **`src/data/projects.ts`**: adaugă, șterge sau modifică proiecte în array-ul `projectsData`.
- Imaginile de cover: pune fișierele în **`public/portfolio/covers/`** și setează în fiecare proiect `cover_path: "/portfolio/covers/nume-fisier.jpg"`.
- Pentru galerie: pune imaginile în `public/portfolio/` (ex. `public/portfolio/gallery/villa-1.jpg`) și adaugă path-urile în `gallery_paths: ["/portfolio/gallery/villa-1.jpg"]`.

### Deploy (Vercel sau alt host static)

1. Conectează repo-ul la Vercel (sau rulează `npm run build` și hostează output-ul din `.next` + `next start`).
2. Nu sunt necesare variabile de mediu pentru funcționarea de bază. Opțional: `NEXT_PUBLIC_SITE_URL` pentru URL-ul complet al site-ului (sitemap, Open Graph).

---

## English

This repository is **my portfolio** and is public for **information and viewing only**. The content and code are displayed as a showcase of my work. Use, copying, or redistribution without my permission is not allowed. See [LICENSE](LICENSE).

Static portfolio built with Next.js 15 and React (no CMS, no database). Project content is hardcoded.

### Local development

1. **Dependencies:** `npm install`
2. **Run:** `npm run dev` → [http://localhost:3000](http://localhost:3000)

### Editing the portfolio

- Edit **`src/data/projects.ts`**: add, remove, or update projects in the `projectsData` array.
- Cover images: place files in **`public/portfolio/covers/`** and set each project’s `cover_path: "/portfolio/covers/filename.jpg"`.
- For galleries: place images in `public/portfolio/` (e.g. `public/portfolio/gallery/villa-1.jpg`) and add paths to `gallery_paths: ["/portfolio/gallery/villa-1.jpg"]`.

### Deploy (Vercel or other static host)

1. Connect the repo to Vercel (or run `npm run build` and host the output from `.next` with `next start`).
2. No environment variables are required for basic operation. Optional: `NEXT_PUBLIC_SITE_URL` for the full site URL (sitemap, Open Graph).
