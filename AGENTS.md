# AGENTS.md

## Commands
- `pnpm dev` - start development server
- `pnpm build` - production build
- `pnpm lint` - lint with ESLint (next/core-web-vitals)
- No test framework configured - add tests if needed

## Code Style

### Imports
- Use `@/*` path alias for src imports (configured in tsconfig.json)
- Group imports: external libraries first, then internal `@/*`, then relative imports
- React imports: `import * as React from "react"` for forwardRef components

### Components
- Use functional components with TypeScript interfaces for props
- Follow Shadcn UI patterns: forwardRef with displayName, cva for variants
- Use `cn()` utility from `@/lib/utils` for conditional className merging
- File names: kebab-case (e.g., `project-card.tsx`, `mode-toggle.tsx`)

### TypeScript
- Strict mode enabled - all files must be properly typed
- Use `VariantProps<typeof buttonVariants>` pattern for component variants
- Interface names: PascalCase with `Props` suffix (e.g., `ButtonProps`)

### Styling
- Use Tailwind CSS with utility-first approach
- Components use `class-variance-authority` for variant systems
- Dark mode support via `next-themes` and proper dark: prefixes

### File Structure
- `src/app/` - Next.js App Router pages
- `src/components/` - reusable UI components
- `src/components/ui/` - base UI components (Shadcn)
- `src/components/magicui/` - enhanced UI components
- `src/data/` - site data and configuration
- `content/` - MDX blog posts