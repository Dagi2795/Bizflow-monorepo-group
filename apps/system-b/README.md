# System B - Admin System

`system-b` is the admin-facing application in the monorepo. It is an assembly-only Next.js app that combines shared packages into a single operations and reporting experience.

## Purpose

This system demonstrates how a second application can reuse the same package layer while presenting a different business role and navigation model.

## Composed Packages

- `@bizflow/ui-components`
- `@bizflow/utils`
- `@bizflow/feature-auth`
- `@bizflow/feature-admin`
- `@bizflow/feature-inventory`
- `@bizflow/feature-analytics`
- `@bizflow/feature-reporting`
- `@bizflow/feature-support`

## Pages

- `/` - admin overview dashboard
- `/auth` - authentication entry point
- `/admin` - team and permission management
- `/inventory` - inventory and stock screen
- `/analytics` - analytics dashboard
- `/reporting` - reporting and export screen
- `/support` - support and service screen

## Architecture

- `src/app/*` contains route files and page composition only.
- `src/assemble/*` contains app wiring such as navigation metadata.
- `src/app/layout.tsx` mounts the shared `PageShell` from `@bizflow/ui-components`.
- No feature business logic is implemented in the app layer.

## Run

```bash
pnpm --filter system-b dev
```

The app runs at `http://localhost:3002`.

## Assembly Rules

- Import feature packages and shared helpers only.
- Keep reusable logic in packages.
- Keep this app focused on routing, layout, and composition.
