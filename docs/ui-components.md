# UI Components

> Reference: [shadcn/ui Introduction](https://ui.shadcn.com/docs) · [components.json config](https://ui.shadcn.com/docs/components-json) · [CLI](https://ui.shadcn.com/docs/cli)

All UI in this project is built with **shadcn/ui**. Do not create custom components from scratch.

## Core Principles (from shadcn/ui)

- **Open Code** — component source lives in your repo under `@/components/ui/`. You own it; edit it directly when customisation is needed.
- **Composition** — every component shares a common, composable interface. Learn one API, use it everywhere.
- **Beautiful Defaults** — components look good out of the box and are designed to work together as a consistent system.
- **AI-Ready** — the open-code model means LLMs can read, understand, and extend components without guesswork.

## Rules

- **Always use shadcn/ui components** — never hand-roll buttons, inputs, dialogs, badges, or any other common UI element.
- **Add new components via the CLI** — `npx shadcn@latest add <component>`. Do not copy-paste component code manually.
- **Components live in `@/components/ui/`** — import from there, never from node_modules directly.
- **Icons use Lucide** — import from `lucide-react`. Do not add a separate icon library.
- **ALWAYS use Roboto font** — all component labels, text, and any other typography must use the Roboto font.

## DO NOT

- ❌ Do not create custom-built replacements for components shadcn/ui already provides.
- ❌ Do not install or use other component libraries (e.g. Radix primitives directly, MUI, Chakra, Mantine).
- ❌ Do not edit files in `@/components/ui/` unless making a project-wide intentional change.
- ❌ Do not inline raw HTML elements (`<button>`, `<input>`, etc.) where a shadcn/ui equivalent exists.

## Project Config

| Setting | Value |
|---|---|
| Style | `base-nova` |
| Base color | `neutral` |
| CSS variables | `true` |
| Icon library | `lucide` |
| Components alias | `@/components/ui` |

## Adding a Component

```bash
npx shadcn@latest add <component-name>
```

Then import it:

```tsx
import { Button } from "@/components/ui/button";
```
