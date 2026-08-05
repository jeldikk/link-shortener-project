<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Coding Standards

> [!CAUTION]
> ## MANDATORY: READ DOCS BEFORE ANY CODE
>
> **YOU MUST use `read_file` to read EVERY relevant file in the `docs/` directory BEFORE generating ANY code — including single lines, snippets, or edits.**
>
> This is a non-negotiable, absolute requirement. There are zero exceptions.
>
> - ❌ Do NOT write code and then check docs
> - ❌ Do NOT assume you know the conventions
> - ❌ Do NOT skip reading because the task seems simple
> - ✅ Read the relevant `docs/` file(s) FIRST, EVERY time, without fail
>
> Generating code without first reading the applicable doc(s) is a **critical violation** of these standards.

The `docs/` directory contains the authoritative standards for this project. Each file covers a specific domain — read the file(s) relevant to your task before writing anything:

- [Authentication](docs/auth.md) — Clerk-only auth, protected routes, modal sign-in/sign-up
- [UI Components](docs/ui-components.md) — shadcn/ui only, no custom components, Lucide icons


## Quick Rules

- **Never use the Pages Router.** This project is App Router only.
- **Never create `middleware.ts`.** Clerk middleware lives in `proxy.ts`.
- **Always authenticate** before any database mutation in a Server Action.
- **Use `@/` path alias** — never `../` relative imports across directories.
- **Do not create `tailwind.config.js`** — Tailwind v4 uses CSS-based config.
- **Strict TypeScript** — no `any`, no type assertions unless unavoidable.

