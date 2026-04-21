# Portfolio Template

A clean, minimal, and professional developer portfolio template built with Next.js, Tailwind CSS v4, and Framer Motion.

> Free template — customize it in minutes by editing a single config file.

---

## Preview

![Portfolio Preview](public/preview.png)

---

## Features

- **One config file** — edit `src/config/portfolio.ts` to customize everything
- **4 pages** — Home, About, Projects, Contact
- **Dark mode** — full light/dark toggle with `next-themes`
- **Smooth animations** — Framer Motion fade-in, stagger, and scroll animations
- **Animated tech stack strip** — infinite CSS scroll with hover pause
- **Project filter** — filter projects by category (Web, Mobile, UI, Open Source)
- **Responsive** — mobile-first, works on all screen sizes
- **Sticky navbar** — with mobile hamburger menu
- **Contact form** — with success/loading states (plug in your own backend)
- **TypeScript strict** — fully typed throughout
- **Geist font** — clean, modern Vercel typeface

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | Framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icons |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |
| [Radix UI](https://radix-ui.com) | Accessible primitives |
| [TypeScript](https://typescriptlang.org) | Type safety |

---

## Getting Started

### Prerequisites

- Node.js `>=20.9.0`
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## Customization

**Everything you need to customize lives in one file:**

```
src/config/portfolio.ts
```

Edit this file to set your:

- Name, role, location, bio
- Avatar image path
- Email, GitHub, LinkedIn, Twitter, Ko-fi links
- Skills list
- Tech stack strip items
- Projects (title, description, image, tech tags, GitHub + live links, category, featured flag)
- Work experience
- Education

### Adding your avatar

Place your photo at `public/avatar.jpg`. The components use this path by default.

### Adding project images

Place images in `public/projects/`. Reference them in the config:

```ts
image: "/projects/my-project.jpg"
```

### Connecting the contact form

Open `src/components/contact/ContactForm.tsx` and replace the simulated delay with your preferred service:

- [Resend](https://resend.com) — email API
- [Formspree](https://formspree.io) — hosted forms
- [EmailJS](https://emailjs.com) — client-side email

---

## Folder Structure

```
├── app/
│   ├── page.tsx              ← Home
│   ├── about/page.tsx        ← About
│   ├── projects/page.tsx     ← Projects
│   ├── contact/page.tsx      ← Contact
│   ├── layout.tsx            ← Root layout + ThemeProvider
│   └── globals.css           ← Global styles + CSS variables
├── src/
│   ├── config/
│   │   └── portfolio.ts      ← ✏️ EDIT THIS FILE
│   ├── components/
│   │   ├── layout/           ← Navbar, Footer, ThemeProvider
│   │   ├── home/             ← Hero, TechStack, FeaturedProjects
│   │   ├── about/            ← Bio, Skills, Experience, Education
│   │   ├── projects/         ← ProjectCard, FilterBar, ProjectsClient
│   │   ├── contact/          ← ContactForm
│   │   └── ui/               ← Button, Badge, Card, Input, Textarea, Separator
│   └── lib/
│       └── utils.ts          ← cn() helper
└── public/
    ├── avatar.jpg            ← Your photo (add this)
    └── projects/             ← Project screenshots (add these)
```

---

## Deploy on Vercel

The easiest way to deploy:

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**

That's it — Vercel will automatically detect Next.js and deploy with optimal settings.

> **Tip:** Remove `unoptimized: true` from `next.config.ts` before deploying to Vercel to enable automatic image optimization.

---

## Support

If this template helped you land a job or saved you time, consider buying me a coffee:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-FF5E5B?logo=ko-fi)](https://ko-fi.com/yourusername)

---

## License

MIT — free to use for personal and commercial projects.
