# BizFlow Enterprise

BizFlow Enterprise is a monorepo built for the group project brief on modular system development. It uses **pnpm workspaces** and **Turborepo** to split shared libraries, feature packages, and two assembled systems into clear ownership boundaries.

## Project Goal

This repository demonstrates:

- component-based development through reusable UI primitives
- code reuse through shared utilities and feature packages
- composition-only assembly inside the system apps
- separate customer and admin experiences built from the same base packages

## Repository Layout

```
bizflow-enterprise/
├── apps/
│   ├── system-a/   # Customer system: assembly-only Next.js app
│   └── system-b/   # Admin system: assembly-only Next.js app
├── packages/
│   ├── ui-components/          # Shared UI primitives and layout shell
│   ├── utils/                  # Shared utility helpers
│   ├── feature-auth/           # Authentication feature package
│   ├── feature-profile/         # Customer profile feature package
│   ├── feature-orders/          # Orders feature package
│   ├── feature-payments/        # Payments feature package
│   ├── feature-notifications/   # Notifications feature package
│   ├── feature-admin/           # Admin management feature package
│   ├── feature-inventory/       # Inventory feature package
│   ├── feature-analytics/       # Analytics feature package
│   ├── feature-reporting/       # Reporting feature package
│   └── feature-support/         # Support feature package
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Assignment Mapping

### Group Component

- `packages/ui-components` provides reusable UI primitives and the shared page shell.
- `packages/utils` provides shared pure functions for formatting, validation, API requests, and string helpers.
- `packages/feature-*` provide feature-level demonstrations that compose UI components and utilities.

### Individual Component

- `apps/system-a` assembles customer-facing features only.
- `apps/system-b` assembles admin-facing features only.
- The apps do not contain feature business logic; they wire together shared packages.

## Package Overview

| Package | Responsibility |
|---|---|
| `ui-components` | Shared buttons, cards, tables, inputs, modals, stat cards, empty states, and the layout shell |
| `utils` | Date formatting, currency formatting, string helpers, request helpers, and validation helpers |
| `feature-auth` | Login and session-oriented UI |
| `feature-profile` | Customer profile UI |
| `feature-orders` | Order management UI |
| `feature-payments` | Payment UI |
| `feature-notifications` | Alerts and notifications UI |
| `feature-admin` | Roles and administration UI |
| `feature-inventory` | Stock and SKU UI |
| `feature-analytics` | Metrics and dashboard UI |
| `feature-reporting` | Reporting and export UI |
| `feature-support` | Help desk and support UI |

## How The Systems Are Assembled

`system-a` and `system-b` both follow the same rule: they import feature packages and shared primitives, then assemble them into routes and page shells.

Allowed in `apps/*`:

```ts
import { PageShell } from "@bizflow/ui-components";
import { Login } from "@bizflow/feature-auth";
import { formatCurrency } from "@bizflow/utils";
```

Not allowed in `apps/*`:

- defining reusable business logic that belongs in a package
- duplicating shared UI or utility code inside an app
- bypassing the shared libraries when a package already exists

## Requirements Checklist

- Monorepo setup with workspaces and Turborepo
- Shared UI library in `packages/ui-components`
- Shared utility library in `packages/utils`
- Feature packages for both systems
- Two assembled Next.js applications
- Documentation for the root repo and each system

## Setup

### Prerequisites

- Node.js 18 or later
- pnpm 9 or later

### Install Dependencies

```bash
pnpm install
```

### Run Development Servers

```bash
pnpm dev
```

Or run each system separately:

```bash
pnpm dev:a
pnpm dev:b
```

### Build

```bash
pnpm build
```

### Type Check

```bash
pnpm typecheck
```

## Technology Stack

| Layer | Tooling |
|---|---|
| Workspace | pnpm workspaces |
| Build orchestration | Turborepo |
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react |

## Documentation Index

- [documentation.md](documentation.md)
- [apps/system-a/README.md](apps/system-a/README.md)
- [apps/system-b/README.md](apps/system-b/README.md)
- [packages/ui-components/README.md](packages/ui-components/README.md)
- [packages/utils/README.md](packages/utils/README.md)
- `packages/feature-*/README.md` for individual feature packages

## Contribution Model

1. Extend shared primitives in `packages/ui-components` when the UI is reusable.
2. Add shared helpers to `packages/utils` when logic is reusable.
3. Build feature-specific UI in `packages/feature-*`.
4. Assemble finished systems in `apps/system-a` and `apps/system-b` only.
