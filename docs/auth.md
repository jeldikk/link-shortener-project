# Authentication

All authentication in this project is handled exclusively by **Clerk**. Do not implement any other auth method (e.g. NextAuth, custom JWT, session cookies).

## Rules

- **Only Clerk** — never add or suggest any alternative auth library or custom auth logic.
- **Middleware lives in `proxy.ts`** — never create `middleware.ts`. Route protection is configured there via `clerkMiddleware`.
- **Always call `auth()` or `currentUser()`** (from `@clerk/nextjs/server`) before any database mutation in a Server Action. Throw or return early if unauthenticated.
- **Sign-in and sign-up must always open as a Clerk modal** — use the `mode="modal"` prop on `<SignInButton>` and `<SignUpButton>`. Never navigate to a dedicated `/sign-in` or `/sign-up` page.

## DO NOT

- ❌ Do not use NextAuth, Auth.js, Lucia, Iron Session, or any other auth library.
- ❌ Do not create `middleware.ts` — all middleware belongs in `proxy.ts`.
- ❌ Do not create `/sign-in` or `/sign-up` route pages — auth must be modal only.
- ❌ Do not use `<SignIn />` or `<SignUp />` components as full-page embeds.
- ❌ Do not store auth tokens or session data manually (e.g. in cookies or localStorage).
- ❌ Do not skip the `auth()` check before database mutations in Server Actions.

## Route Behaviour

| Route | Behaviour |
|---|---|
| `/dashboard` | Protected — redirect unauthenticated users to sign-in modal |
| `/` (homepage) | If the user is already signed in, redirect them to `/dashboard` |

### Protecting `/dashboard`

Use Clerk's `auth()` helper inside the page component and redirect if unauthenticated:

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  // ...
}
```

### Redirecting signed-in users away from `/`

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");
  // ...
}
```

### Sign-in / Sign-up modal buttons

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <button>Sign in</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign up</button>
</SignUpButton>
```
