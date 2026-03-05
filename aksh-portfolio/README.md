# aksh-portfolio

Personal portfolio for Aksh Aggarwal — Game Developer & ML Enthusiast.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- IBM Plex Mono + IBM Plex Sans

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All portfolio content lives in `src/lib/data.ts`. Edit that file to change:

- Personal details (name, email, links)
- Skills and groups
- Projects
- Achievements

### Adding your resume link

In `src/lib/data.ts`, find the `resume` field in `PERSONAL` and replace `'#'` with your Google Drive sharing link:

```ts
// TODO: Replace with Google Drive resume link when available
resume: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Page assembly
│   └── globals.css      # Tailwind + global styles + button classes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── ProjectCard.tsx
└── lib/
    └── data.ts          ← edit this to update content
```

## Deployment

Works out of the box with Vercel. Just connect the repo and deploy.
