# Your Name — Portfolio

A single-page developer portfolio: Home, About, Skills, Projects,
Certifications, Services, Contact.

---

## 1. Open it in VS Code

1. Download/unzip this folder somewhere on your computer.
2. Open VS Code → **File → Open Folder** → select the `portfolio` folder.
3. Install the **Live Server** extension (by Ritwick Dey) from the
   Extensions panel (`Ctrl+Shift+X`, search "Live Server").
4. Right-click `index.html` → **Open with Live Server**.
   Your site opens at `http://127.0.0.1:5500` and auto-reloads as you edit.

## 2. Customize it (do this before deploying)

| What to change | Where |
|---|---|
| Your name, role, intro | `index.html` — Hero section, and the `<title>` tag |
| Email, phone, city | `index.html` — About section (`about__facts`) |
| Skills | `index.html` — Skills section `<span class="tag">` items |
| Projects | `index.html` — Projects section, one `<article class="project-card">` per project |
| Certifications | `index.html` — Certifications section (`gitlog__item`) |
| Social links | `index.html` — replace every `https://github.com/yourusername` etc. |
| Colors / fonts | `style.css` — the `:root { ... }` block at the top |
| Your photo | Save as `images/profile.jpg` |
| Project screenshots | Save as `images/project1.jpg`, `project2.jpg`, `project3.jpg` |
| Resume PDF | Save as `resume.pdf` in the root folder |
| Certificate PDFs | Save inside `certificates/` and link them in the gitlog items |

If an image file is missing, a placeholder box shows automatically so the
page never looks broken while you're working.

### Making the contact form actually send messages
Right now, submitting the form only shows a message — it doesn't email you.
Easiest fix: sign up free at **[formspree.io](https://formspree.io)**, get a
form endpoint, then in `index.html` change:
```html
<form class="contact-form" id="contactForm">
```
to:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/yourFormID" method="POST">
```
and remove the `e.preventDefault()` line in `script.js` (or just delete the
whole submit-handling JS block — Formspree handles it on its own).

---

## 3. Deploy it (pick one — all are free)

### Option A: GitHub Pages (matches the reference site you shared)
1. Create a GitHub account if you don't have one, and a new repository
   named exactly `yourusername.github.io`.
2. In VS Code's terminal (`` Ctrl+` ``), from inside the `portfolio` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Your site goes live at `https://yourusername.github.io` within a minute
   or two. (No settings changes needed for a repo named this way — GitHub
   Pages turns on automatically.)

### Option B: Netlify (drag-and-drop, fastest)
1. Go to [netlify.com](https://netlify.com) → sign up free.
2. Drag your whole `portfolio` folder onto the Netlify dashboard.
3. It deploys instantly with a URL like `yourname.netlify.app`.
4. You can connect a custom domain later from the site settings.

### Option C: Vercel
1. Go to [vercel.com](https://vercel.com) → sign up free.
2. Push the folder to a GitHub repo (any name), then **Import Project** in
   Vercel and select that repo.
3. Deploys automatically, and redeploys every time you `git push`.

---

## File structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── resume.pdf          (add this)
├── images/
│   ├── profile.jpg     (add this)
│   ├── project1.jpg    (add this)
│   ├── project2.jpg    (add this)
│   └── project3.jpg    (add this)
└── certificates/
    ├── cert1.pdf        (add this)
    ├── cert2.pdf        (add this)
    └── cert3.pdf        (add this)
```
