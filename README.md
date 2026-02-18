# The Power Trio Studio Website

> A high-scale, animated studio website built with **Pure HTML, CSS, and Vanilla JavaScript**.

## ⚡ Project Overview
This project represents the digital presence of "The Power Trio" - a collective of three elite digital specialists. The site is designed to demonstrate mastery over web fundamentals without relying on heavy frameworks.

## 🛠️ Tech Stack & Justification
**Constraints:** No React, No Tailwind, No Build Steps.
**Choice:**
- **HTML5**: Semantic structure for SEO and accessibility.
- **CSS3 (Midnight Indigo Theme)**: Custom variables for consistent branding, Flexbox/Grid for layout, and high-performance CSS animations.
- **Vanilla JavaScript (ES6+)**: 
  - `fetch()` API for modular header/footer injection.
  - `IntersectionObserver` for scroll reveals.
  - `requestAnimationFrame` for the custom cursor.
  - No external dependencies ensure a lightweight footprint (approx 50KB total).

## 🎨 Design Philosophy
- **Cinematic Dark Mode**: Uses deep indigos and blacks to reduce eye strain and look premium.
- **Glassmorphism**: Translucent panels provide depth without clutter.
- **Motion**: Everything moves. From the hero load to the hover states, motion conveys life and interactivity.
- **Power of Three**: The triangle motif and 3-column layouts recur throughout to reinforce the brand identity.

## 📂 File Structure
```
/project-root
│
├── index.html          # Landing Page
├── studio.html         # Origin Story
├── minds.html          # Team Profiles
├── work.html           # Portfolio Grid
├── case-study.html     # Deep Dive
├── services.html       # Offerings
├── portal.html         # Client Dashboard
├── insights.html       # Blog
├── lab.html            # Experiments
├── contact.html        # Lead Gen
│
├── header.html         # Injected Nav
├── footer.html         # Injected Footer
│
└── /assets
    ├── /css            # base, typography, animations
    └── /js             # main, cursor, chatbot, animations
```

## 🚀 Deployment (GitHub Pages)
1. Commit all files to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select `main` branch and `/` root folder.
4. Save. The site will be live at `your-username.github.io/repo-name`.

## 🧪 Experiments
Check out `lab.html` for 3D CSS transforms and other experimental features that push the browser's rendering engine.

---
© 2026 The Power Trio. Built with code, sweat, and pixels.
