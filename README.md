# Link Shortener Project

Link Shortener is a Next.js application for creating, sharing, and managing short links with a clean landing page experience and authenticated user flows.

## Project Summary

- Public marketing site for the product
- Clerk-powered authentication with modal sign-in and sign-up
- Protected dashboard route for signed-in users
- Neon Postgres + Drizzle ORM setup for database-backed features
- shadcn/ui-based interface styled with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19, shadcn/ui, Tailwind CSS v4, Lucide icons
- **Authentication:** Clerk
- **Database:** Neon Postgres
- **ORM / DB tooling:** Drizzle ORM, Drizzle Kit
- **Linting:** ESLint

## Repository Structure

```text
app/          App Router pages and layouts
components/   Shared UI and site components
db/           Database client and schema files
docs/         Project-specific development rules
lib/          Shared utilities
proxy.ts      Clerk middleware setup
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a local environment file:

```bash
cp .env.example .env.local
```

If `.env.example` does not exist in your local checkout, create `.env.local` manually and add the values below:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_postgres_connection_string
```

#### Environment details

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: from your Clerk application
- `CLERK_SECRET_KEY`: from your Clerk application
- `DATABASE_URL`: Neon Postgres connection string used by the app and Drizzle config

### 3. Start the local development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development Workflow

### Common commands

```bash
npm run dev    # start local development server
npm run lint   # run ESLint
npm run build  # create production build
npm run start  # start production build locally
```

### Working on the repo

1. Install dependencies with `npm install`
2. Add your local secrets to `.env.local`
3. Run `npm run dev`
4. Make changes in `app/`, `components/`, `db/`, or `lib/`
5. Run `npm run lint` before submitting changes

## Notes for Contributors

- This project uses the **App Router**
- Authentication is handled only through **Clerk**
- Route protection is configured in `/home/runner/work/link-shortener-project/link-shortener-project/proxy.ts`
- Database configuration is defined in `/home/runner/work/link-shortener-project/link-shortener-project/drizzle.config.ts`
- Project-specific implementation rules live in `/home/runner/work/link-shortener-project/link-shortener-project/docs/`
