# Git Workflow

## Branch Naming

- **Always prefix** branch names with `copilot/feat/` — no exceptions.
- **Always use lower-kebab-case** — words separated by hyphens, all lowercase.
- **Always use human-readable, descriptive names** — the name must convey what the feature or fix does.
- **Never use** auto-generated IDs, hashes, timestamps, or gibberish as branch names.

### Format

```
copilot/feat/<short-descriptive-name>
```

### Examples

| ✅ Good | ❌ Bad |
|---|---|
| `copilot/feat/add-link-shortener-form` | `copilot/feat/f3a92bc1` |
| `copilot/feat/dashboard-link-table` | `copilot/feat/feature-12345` |
| `copilot/feat/clerk-auth-redirect` | `copilot/feat/new-branch-2` |
| `copilot/feat/improve-site-header-nav` | `copilot/feat/update` |

## Pull Requests

- **Always open a PR** with every set of code changes developed during a Copilot Cloud session.
- **PR titles** must be clear and human-readable — describe what changed, not how.
- **PR descriptions** must include a short summary of what was implemented and why.
- **Never use** auto-generated or placeholder titles like "feat: abc123" or "Update files".

## DO NOT

- ❌ Do not push directly to `master` — always use a branch and open a PR.
- ❌ Do not use computer-generated IDs, timestamps, or random strings in branch names.
- ❌ Do not leave PR titles or descriptions blank or auto-filled with gibberish.
- ❌ Do not use branch names that don't start with `copilot/feat/`.
