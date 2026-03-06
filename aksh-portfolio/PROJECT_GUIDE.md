# Portfolio Project — Line-by-Line Guide

This document explains the entire codebase so you can understand, explain, and customize the portfolio.

---

## Project Overview

**Tech stack:** Next.js 15, React 19, TypeScript, Tailwind CSS  
**Structure:** Single-page portfolio with navbar, hero, sections, footer. Dark/light theme via CSS variables.

---

## 1. Configuration Files

### `package.json`
```json
"name": "aksh-portfolio"           // Project name
"scripts": {
  "dev": "next dev"                // Run dev server (localhost:3000)
  "build": "next build"            // Production build
  "start": "next start"            // Run production server
  "lint": "next lint"              // Run ESLint
}
"dependencies": {
  "next": "^15.3.3"                // Next.js framework
  "react": "^19.0.0"
  "react-dom": "^19.0.0"
}
```
**Edit:** Change `name` if you rename the project.

---

### `next.config.js`
```javascript
const nextConfig = {}
module.exports = nextConfig
```
**Edit:** Add redirects, env vars, image domains, etc. here.

---

### `tailwind.config.ts`
```typescript
content: ['./src/**/*.{ts,tsx}']   // Tailwind scans these files for class names
fontFamily: {
  mono: ['"IBM Plex Mono"', ...]   // Monospace font (code, labels)
  sans: ['"IBM Plex Sans"', ...]   // Sans-serif (body text)
}
colors: { ... }                    // Fallback colors (main colors live in globals.css)
maxWidth: { content: '780px' }     // max-w-content = 780px (section width)
```
**Edit:** Add custom Tailwind utilities or change `maxWidth.content`.

---

### `tsconfig.json`
```json
"paths": { "@/*": ["./src/*"] }    // @/ = src/ (e.g. @/lib/data)
```
**Edit:** Usually leave as-is. `@/` is the import alias.

---

## 2. App Entry & Layout

### `src/app/layout.tsx`
```tsx
import type { Metadata } from 'next'   // Type for SEO metadata
import './globals.css'                 // Global styles + design tokens

export const metadata: Metadata = {
  title: 'Aksh Aggarwal',              // Browser tab title
  description: '...',                  // SEO description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">  // data-theme controls dark/light; ThemeToggle updates it
      <body>{children}</body>
    </html>
  )
}
```
**Edit:** Change `title` and `description`. Default theme is `dark`.

---

### `src/app/page.tsx`
```tsx
export default function Home() {
  return (
    <>
      <Navbar />           // Sticky top bar
      <main>
        <HeroSection />    // "Hi, I'm [name]" + buttons
        <AboutSection />
        <AcademicsSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
```
**Edit:** Reorder sections, add new sections, remove ones you don't need.

---

## 3. Global Styles & Theme

### `src/app/globals.css`

#### Imports & Fonts (Lines 1–5)
```css
@tailwind base;    /* Tailwind reset + base styles */
@tailwind components;
@tailwind utilities;

@import url('...');   /* Google Fonts: IBM Plex Mono + IBM Plex Sans */
```

#### Dark Theme — `:root` (Lines 8–38)
These are the **default (dark)** colors:
```css
--bg:             #0f1117;    /* Page background */
--bg-card:        #161b27;    /* Cards, buttons */
--bg-hover:       #1c2333;    /* Hover state */
--border:         #252d3d;    /* Borders */
--text:           #d4dae8;    /* Body text */
--text-head:      #f0f4ff;    /* Headings */
--muted:          #6b7590;    /* Secondary text */
--dim:            #3d4561;    /* Dim elements */

--blue:           #4c9eff;    /* Accent: blue */
--blue-bg:        #122040;
--blue-border:    #1e3d6e;

--purple:         #a78bfa;    /* Accent: purple */
--purple-bg:      #1e1535;
--purple-border:  #3d2870;

--green:          #34d399;    /* Accent: green */
--orange:         #fb923c;    /* Accent: orange */
--pink:           #f472b6;    /* Accent: pink */

--nav-bg:         rgba(15,17,23,0.92);   /* Navbar (semi-transparent) */
--skill-game-bg:  #122040;    /* Game Dev skill card */
--skill-ml-bg:    #1e1535;    /* ML skill card */
--skill-tools-bg: #0b2e20;    /* Tools skill card */
```

#### Light Theme — `[data-theme="light"]` (Lines 40–71)
Same variable names, different hex values. When the user toggles to light mode, these override `:root`.

**Edit:** Change hex values to customize your palette. Dark = `:root`, light = `[data-theme="light"]`.

#### Base Styles (Lines 73–86)
```css
html { scroll-behavior: smooth; }   /* Smooth scroll for #anchor links */

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  transition: background 0.2s, color 0.2s;   /* Smooth theme switch */
}

a { text-decoration: none; color: inherit; }
```

#### Utility Classes
- **`.section-pad`** — Vertical padding for sections (`py-20`)
- **`.section-label`** — "About", "Skills", etc. — uppercase, with colored bar
- **`.btn-base`** — Base button style
- **`.btn-blue`** — Blue accent button
- **`.btn-purple`** — Purple accent button
- **`.nav-link`** — Nav item hover styles
- **`.project-card`** — Project card + hover
- **`.academic-stat`** — Academic stat card + hover
- **`.contact-link-row`** — Contact link row + hover

---

## 4. Data (Single Source of Truth)

### `src/lib/data.ts`

All editable content lives here. Change this file to update what appears on the site.

#### `PERSONAL`
```typescript
export const PERSONAL = {
  name: 'Aksh Aggarwal',
  role: 'Game Developer · ML Enthusiast',
  tagline: 'Game developer exploring AI, ...',
  email: 'akshaggarwal2909@gmail.com',
  github: 'https://github.com/Aksh2906',
  linkedin: '...',
  itchio: '...',
  resume: '#',   // Replace with real link when ready
}
```

#### `SKILLS`
Array of `{ group: string, items: string[] }`.  
Groups: Game Dev, Machine Learning, Computer Vision, Tools.  
**Edit:** Add/remove skills or groups.

#### `PROJECTS`
Array of:
```typescript
{
  title: string
  description: string
  whatIDid: string
  tech: string[]
  link?: string        // Optional external link
  linkLabel?: string   // e.g. "itch.io"
}
```

#### `ACADEMICS`
```typescript
{
  institution: string
  degree: string
  cgpa: string
  cgpaSub: string
  stats: { label: string, value: string }[]
}
```

#### `ACHIEVEMENTS`
```typescript
{ title: string, event: string, description: string }[]
```

---

## 5. Layout Components

### `src/components/layout/Navbar.tsx`
```tsx
'use client'   // Required because ThemeToggle uses React hooks (useState, useEffect)

const NAV_ITEMS = [
  { href: '#about', label: 'about' },
  { href: '#academics', label: 'academics' },
  // ...
]
```
- **Sticky nav:** `sticky top-0 z-50`
- **Name + dot:** Your name + small blue dot
- **Links:** Anchor links to sections; hidden on small screens (`hidden sm:flex`)
- **ThemeToggle:** Moon/sun button

**Edit:** Change the name text (line 30) or use `{PERSONAL.name}` for consistency. Edit `NAV_ITEMS` to add/remove/reorder nav links.

---

### `src/components/layout/Footer.tsx`
```tsx
<footer>
  <p>Built by Aksh Aggarwal</p>
</footer>
```
**Edit:** Change the footer text.

---

## 6. Section Components

### `src/components/sections/HeroSection.tsx`
- **Eyebrow:** "hi, I'm"
- **Name:** From `PERSONAL.name`
- **Role chips:** 🎮 Game Developer, 🧠 ML Enthusiast (hardcoded; can be derived from `PERSONAL.role`)
- **Tagline:** `PERSONAL.tagline`
- **Buttons:** GitHub, LinkedIn, Itch.io, Projects, Resume

**Edit:** Role chips are hardcoded; change text or wire to `PERSONAL.role`. Update button links via `PERSONAL`.

---

### `src/components/sections/AboutSection.tsx`
Paragraphs about you. **Edit:** Replace the `<p>` content with your own story.

---

### `src/components/sections/AcademicsSection.tsx`
- Uses `ACADEMICS` from data
- Institution, degree, CGPA block, stats grid (JEE, boards, etc.)
- Stats cycle through blue, purple, green, orange

**Edit:** Change `ACADEMICS` in `data.ts`.

---

### `src/components/sections/SkillsSection.tsx`
- Maps over `SKILLS` from data
- `GROUP_META` maps group names to colors:
  - `Game Dev` → blue
  - `ML / Vision` → purple (note: data has "Machine Learning" and "Computer Vision" — they fall back to Tools styling unless you add them to GROUP_META)
  - `Tools` → green

**Edit:** Add your skill groups to `SKILLS` in data. To add colors for new groups, extend `GROUP_META`.

---

### `src/components/sections/ProjectsSection.tsx`
- Maps over `PROJECTS` and renders a `ProjectCard` for each
- Passes `index` so ProjectCard can rotate accent colors (blue, purple, green, orange, pink)

**Edit:** Add/remove projects in `data.ts`.

---

### `src/components/sections/AchievementsSection.tsx`
- Maps over `ACHIEVEMENTS`
- Orange card style, trophy emoji

**Edit:** Add achievements in `data.ts`.

---

### `src/components/sections/ContactSection.tsx`
- Builds `LINKS` from `PERSONAL` (email, github, linkedin, itchio)
- Each link is a clickable row

**Edit:** Add/remove links by changing the `LINKS` array or `PERSONAL` in data.

---

## 7. UI Components

### `src/components/ui/ProjectCard.tsx`
```tsx
const ACCENT_COLORS = ['var(--blue)', 'var(--purple)', 'var(--green)', 'var(--orange)', 'var(--pink)']
const accent = ACCENT_COLORS[index % ACCENT_COLORS.length]  // Cycles per project
```
- Left border uses rotating accent color
- Title, description, whatIDid, tech chips
- Optional "View ↗" button if `project.link` exists

**Edit:** Change `ACCENT_COLORS` or layout.

---

### `src/components/ui/ThemeToggle.tsx`
```tsx
'use client'

const [theme, setTheme] = useState<'dark' | 'light'>('dark')

useEffect(() => {
  const saved = localStorage.getItem('theme') || 'dark'
  applyTheme(saved)
  setTheme(saved)
}, [])

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t)  // Switches CSS variables
  localStorage.setItem('theme', t)                         // Persists choice
}

function toggle() {
  const next = theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  setTheme(next)
}
```
- Reads `data-theme` from `<html>`
- Saves preference in `localStorage`
- Renders 🌙 or ☀️

**Edit:** Default theme in `layout.tsx` and in `useState('dark')` if you want a different default.

---

## Quick Reference: What to Edit Where

| What                          | File(s)                                      |
|-------------------------------|-----------------------------------------------|
| Your name, links, tagline     | `src/lib/data.ts` → `PERSONAL`               |
| Projects, skills, academics   | `src/lib/data.ts`                            |
| Navbar name                   | `src/components/layout/Navbar.tsx` (line 30) |
| Footer text                   | `src/components/layout/Footer.tsx`           |
| Page title, description       | `src/app/layout.tsx` → `metadata`            |
| Dark theme colors             | `src/app/globals.css` → `:root`              |
| Light theme colors            | `src/app/globals.css` → `[data-theme="light"]` |
| About section text            | `src/components/sections/AboutSection.tsx`   |
| Section order                 | `src/app/page.tsx`                           |

---

## Running the Project

```bash
npm install    # First time
npm run dev    # Development (http://localhost:3000)
npm run build  # Production build
npm run start  # Run production
```

---

## Adding a New Section

1. Create `src/components/sections/MySection.tsx` (copy structure from `AboutSection` or `AchievementsSection`).
2. Add `id="my-section"` to the section and a corresponding nav item in `Navbar.tsx`.
3. Import and render in `src/app/page.tsx`.

---

## Summary

- **Content** → `src/lib/data.ts`
- **Colors & theme** → `src/app/globals.css` (`:root` and `[data-theme="light"]`)
- **Layout & structure** → `src/app/page.tsx`, layout components, section components
- **Styling** → Tailwind classes + CSS variables in `globals.css`
