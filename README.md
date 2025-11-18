# Achmad Fatkharrofiqi Portfolio




## Overview
- Personal site with a hero intro, resume sections, latest projects, and a simple blog.
- Data-driven: most content comes from `src/data/resume.tsx`.

## Tech Stack
- Next.js 14, React 18, TypeScript
- Tailwind CSS, Shadcn UI, Magic UI
- Framer Motion for subtle animations
- MDX for blog posts

## Getting Started
- Install: `pnpm install`
- Develop: `pnpm dev` then open `http://localhost:3000`
- Build: `pnpm  build`

## Configuration
- Edit `src/data/resume.tsx` to customize:
  - Profile: `name`, `nickname`, `description`, `avatarUrl`, `cvUrl`
  - Contact: `contact.email`, `contact.social.email.url`
  - Resume: `work[]`, `education[]`, `skills[]`
  - Projects: `projects[]` with `title`, `dates`, `description`, `technologies`, `links`

## Blog Content
- Add MDX files to `content/` (e.g., `hello-world.mdx`).
- Each post uses frontmatter: `title`, `publishedAt`, `summary`, optional `image`.

## Scripts
- `pnpm  dev` — start development server
- `pnpm  build` — production build
- `pnpm  lint` — lint the project

## Project Structure
- `src/app/` — routes and pages
- `src/components/` — UI components
- `src/data/` — site data (`resume.tsx`)
- `content/` — MDX blog posts
- `public/` — static assets (e.g., `img_profile.jpg`, `cv.pdf`)

## Deployment
- Recommended: Vercel (zero-config for Next.js).
- Ensure `public/cv.pdf` exists if using the Download CV button.

## Contact
- Email: `achmadfatkharrofiqi404@gmail.com` (configured in `src/data/resume.tsx`).
