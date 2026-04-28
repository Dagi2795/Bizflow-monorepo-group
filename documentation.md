# BizFlow Enterprise Documentation

## 1. Project Overview

BizFlow Enterprise is a modular monorepo built with **pnpm workspaces** and **Turborepo**. The repository is organized to demonstrate component-based development, code reuse, and assembly-only application design.

The project contains:

- shared UI primitives in `packages/ui-components`
- shared utility functions in `packages/utils`
- feature packages in `packages/feature-*`
- two assembled applications in `apps/system-a` and `apps/system-b`

The main design rule is simple:

- reusable logic lives in packages
- applications only compose and assemble packages
- shared UI and helpers are not duplicated inside the apps

## 2. Repository Structure

```text
bizflow-enterprise/
├── apps/
│   ├── system-a/               # Customer system
│   └── system-b/               # Admin system
├── packages/
│   ├── ui-components/          # Shared UI primitives and app shell
│   ├── utils/                  # Shared pure utility functions
│   ├── feature-auth/           # Authentication feature package
│   ├── feature-profile/        # Customer profile feature package
│   ├── feature-orders/         # Orders feature package
│   ├── feature-payments/       # Payments feature package
│   ├── feature-notifications/  # Notifications feature package
│   ├── feature-admin/          # Admin management feature package
│   ├── feature-inventory/      # Inventory feature package
│   ├── feature-analytics/      # Analytics feature package
│   ├── feature-reporting/      # Reporting feature package
│   └── feature-support/        # Support feature package
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## 3. Monorepo Setup

### Package Manager

The repository uses **pnpm** as the package manager. The workspace definition in `pnpm-workspace.yaml` includes:

- `apps/*`
- `packages/*`

This allows all application and package folders to be managed together from the repository root.

### Build Orchestration

The repository uses **Turborepo** to coordinate scripts across the workspace. The root `turbo.json` defines the shared task model:

- `build` depends on upstream package builds and outputs `.next/**` and `dist/**`
- `dev` runs in persistent, uncached mode
- `lint` is available for workspace lint tasks
- `typecheck` depends on build outputs

### Root Scripts

The root `package.json` provides the main commands:

- `pnpm dev` - run both apps through Turbo
- `pnpm build` - build all packages and apps
- `pnpm lint` - run lint tasks across the workspace
- `pnpm typecheck` - type-check the workspace
- `pnpm dev:a` - run `system-a`
- `pnpm dev:b` - run `system-b`

## 4. System Architecture

### Layered Architecture

The codebase is split into three layers:

1. **Shared Foundation**
   - `packages/ui-components`
   - `packages/utils`

2. **Feature Packages**
   - `packages/feature-*`

3. **Assembled Systems**
   - `apps/system-a`
   - `apps/system-b`

### Responsibility Boundary

- Shared packages provide reusable primitives and logic.
- Feature packages combine UI and utilities into reusable domain features.
- Apps wire features into routes, page shells, and navigation.

### Composition Rule

The apps must remain assembly-only. That means they can:

- import shared components
- import feature packages
- define routes and page composition
- set up navigation and layout

They should not:

- duplicate business logic from packages
- rebuild utility functions already available in `packages/utils`
- rebuild shared UI that already exists in `packages/ui-components`

## 5. Shared Libraries

### 5.1 `packages/ui-components`

This package contains the shared visual system used by all apps and features.

#### Main Responsibilities

- app shell and page layout
- navigation container
- reusable cards, buttons, inputs, tables, badges, modals, and stat cards
- consistent styling and layout behavior across the repo

#### Key Components

- `PageShell`
- `PageHeader`
- `Button`
- `Card`
- `Input`
- `Table`
- `Badge`
- `StatCard`
- `EmptyState`
- `Modal`

#### Why It Exists

It prevents each feature or app from implementing its own visual system and keeps the interface consistent across both systems.

### 5.2 `packages/utils`

This package contains shared pure utility functions.

#### Main Responsibilities

- formatting numbers, currency, and dates
- string manipulation helpers
- request helpers
- aggregation helpers
- validation helpers

#### Exported Utility Groups

- formatting: `formatCurrency`, `formatNumber`, `formatDate`, `timeAgo`
- strings: `slugify`, `truncate`, `capitalize`
- data: `sumBy`, `groupBy`, `aggregate`
- validation: `validateEmail`, `validateRequired`
- api: `apiRequest`

#### Why It Exists

It keeps repeated logic out of the feature packages and apps, which improves reuse, testability, and consistency.

## 6. Feature Package Documentation

Each feature package is designed to demonstrate how shared UI components and utilities are composed into a domain feature.

### 6.1 Customer-Facing Features

#### `feature-auth`

Authentication feature package for sign-in, sign-up, and session-oriented UI.

- uses shared form and surface components
- uses `validateEmail` from `utils`
- consumed by both systems

#### `feature-profile`

Customer profile package for account details and profile management.

- focuses on profile-centric customer screens
- uses shared layout and form components
- consumed by `system-a`

#### `feature-orders`

Orders package for tracking, summaries, and order lifecycle views.

- uses shared tables, cards, and badges
- uses formatting helpers such as `formatCurrency`, `formatDate`, and `sumBy`
- consumed by `system-a`

#### `feature-payments`

Payments package for payment capture, status, and transaction views.

- uses shared cards, tables, badges, and buttons
- uses formatting and timing helpers
- consumed by `system-a`

#### `feature-notifications`

Notifications package for alerts, status updates, and messaging surfaces.

- uses shared cards, badges, and buttons
- uses `timeAgo` for recency display
- consumed by `system-a`

### 6.2 Admin-Facing Features

#### `feature-admin`

Administration package for users, roles, and system settings.

- uses shared tables, badges, and buttons
- uses `capitalize` from `utils`
- consumed by `system-b`

#### `feature-inventory`

Inventory package for stock levels, SKUs, and operational tracking.

- uses shared tables, badges, and stat cards
- uses `formatNumber` and `aggregate`
- consumed by `system-b`

#### `feature-analytics`

Analytics package for dashboards, KPI cards, and summary reporting.

- uses `Card` and `StatCard`
- uses `aggregate` and `formatCurrency`
- consumed by `system-b`

#### `feature-reporting`

Reporting package for exports, summaries, and structured business views.

- uses cards, tables, and buttons
- uses `formatCurrency` and `formatDate`
- consumed by `system-b`

#### `feature-support`

Support package for help-desk tickets, service levels, and customer assistance views.

- uses tables, badges, and buttons
- uses `timeAgo` and `truncate`
- consumed by `system-b`

## 7. System A Documentation

### 7.1 Purpose

`system-a` is the customer-facing application. It assembles customer-oriented features into a single UI without defining feature logic itself.

### 7.2 Consumed Packages

- `@bizflow/ui-components`
- `@bizflow/utils`
- `@bizflow/feature-auth`
- `@bizflow/feature-profile`
- `@bizflow/feature-orders`
- `@bizflow/feature-payments`
- `@bizflow/feature-notifications`

### 7.3 Pages and User Features

#### Home page

The home page acts as a customer system overview. It includes:

- summary stat cards
- composition badges showing imported feature packages
- feature tiles linking to each module

#### Authentication

- login and session-related access flow
- supports entry into the customer system

#### Profile

- account details
- customer preferences and profile management

#### Orders

- create and track orders
- customer order lifecycle views

#### Payments

- capture and refund-oriented payment views
- transaction and payment status display

#### Notifications

- alerts and messaging surfaces
- user-facing updates and notifications

### 7.4 Architecture

`system-a` follows a simple composition model:

- `src/app/layout.tsx` mounts the shared `PageShell`
- `src/assemble/nav.ts` defines navigation metadata
- `src/app/page.tsx` assembles the home dashboard tiles and summary cards
- route folders under `src/app/*` represent the feature pages

### 7.5 Assembly Rules for System A

- keep business logic inside packages
- use shared UI primitives for layout and cards
- use shared utilities for formatting and validation
- keep the app focused on routing and composition

## 8. System B Documentation

### 8.1 Purpose

`system-b` is the admin-facing application. It assembles operations, analytics, reporting, and support features into a separate system experience.

### 8.2 Consumed Packages

- `@bizflow/ui-components`
- `@bizflow/utils`
- `@bizflow/feature-auth`
- `@bizflow/feature-admin`
- `@bizflow/feature-inventory`
- `@bizflow/feature-analytics`
- `@bizflow/feature-reporting`
- `@bizflow/feature-support`

### 8.3 Pages and User Features

#### Home page

The home page acts as an admin system overview. It includes:

- summary stat cards
- composition badges showing imported feature packages
- feature tiles linking to each module

#### Authentication

- login and session entry point for admins
- access flow for protected administration areas

#### Admin

- user and role management
- administrative settings and team-related actions

#### Inventory

- SKU and stock management
- operational inventory tracking

#### Analytics

- KPI dashboards and trend views
- metric summaries and visual analysis

#### Reporting

- structured reports and export-style views
- business summaries for review

#### Support

- help-desk ticket and service tracking
- support workflow views and statuses

### 8.4 Architecture

`system-b` follows the same composition model as the customer system:

- `src/app/layout.tsx` mounts the shared `PageShell`
- `src/assemble/nav.ts` defines navigation metadata
- `src/app/page.tsx` assembles the admin dashboard tiles and summary cards
- route folders under `src/app/*` represent the feature pages

### 8.5 Assembly Rules for System B

- keep logic in packages, not in the app layer
- use shared UI for consistency
- use shared utilities for formatting, aggregation, and validation
- keep the app focused on routing, layout, and composition

## 9. System Navigation Model

Both systems use the shared `PageShell` component from `packages/ui-components`.

### Navigation Behavior

- navigation items are defined per system in `src/assemble/nav.ts`
- each nav item includes a route, label, icon key, and group
- the client shell renders the sidebar based on the provided nav data
- active routes are highlighted automatically

### Why This Matters

The navigation model is shared structurally but customized per system, which keeps the UI consistent while still allowing the customer and admin systems to have different module sets.

## 10. Feature Reuse Matrix

| Feature Package | System A | System B |
|---|---:|---:|
| `feature-auth` | Yes | Yes |
| `feature-profile` | Yes | No |
| `feature-orders` | Yes | No |
| `feature-payments` | Yes | No |
| `feature-notifications` | Yes | No |
| `feature-admin` | No | Yes |
| `feature-inventory` | No | Yes |
| `feature-analytics` | No | Yes |
| `feature-reporting` | No | Yes |
| `feature-support` | No | Yes |

## 11. Development Workflow

### Install

```bash
pnpm install
```

### Run Both Apps

```bash
pnpm dev
```

### Run Customer System Only

```bash
pnpm dev:a
```

### Run Admin System Only

```bash
pnpm dev:b
```

### Build All Packages and Apps

```bash
pnpm build
```

### Type Check

```bash
pnpm typecheck
```

## 12. Technology Stack

| Layer | Tooling |
|---|---|
| Workspace | pnpm workspaces |
| Task orchestration | Turborepo |
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react |

## 13. Submission Notes

This repository is structured to match the project brief:

- monorepo setup
- shared UI package
- shared utility package
- multiple feature packages
- two individual systems assembled from the shared packages
- documentation at the root and app level

If you are submitting this as a group project, the root README and this documentation file are the primary references for reviewers.

## 14. Recommended Reading Order

1. `README.md`
2. `documentation.md`
3. `apps/system-a/README.md`
4. `apps/system-b/README.md`
5. `packages/ui-components/README.md`
6. `packages/utils/README.md`
7. Individual `packages/feature-*/README.md` files
