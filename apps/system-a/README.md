# System A - Customer System

`system-a` is the customer-facing application in the monorepo. It is an assembly-only Next.js app that combines shared packages into a single customer experience.

## Purpose

This system demonstrates how reusable packages can be composed into a real application without duplicating UI or utility logic.

## Composed Packages

- `@bizflow/ui-components`
- `@bizflow/utils`
- `@bizflow/feature-auth`
- `@bizflow/feature-profile`
- `@bizflow/feature-orders`
- `@bizflow/feature-payments`
- `@bizflow/feature-notifications`

## Pages

- `/` - overview dashboard
- `/auth` - authentication entry point
- `/profile` - customer profile screen
- `/orders` - order management screen
- `/payments` - payments screen
- `/notifications` - notifications screen

## Architecture

- `src/app/*` contains route files and page composition only.
- `src/assemble/*` contains app wiring such as navigation metadata.
- `src/app/layout.tsx` mounts the shared `PageShell` from `@bizflow/ui-components`.
- No feature business logic is implemented in the app layer.

## Run

```bash
pnpm --filter system-a dev
```

The app runs at `http://localhost:3001`.

## Assembly Rules

- Import feature packages and shared helpers only.
- Keep reusable logic in packages.
- Keep this app focused on routing, layout, and composition.
