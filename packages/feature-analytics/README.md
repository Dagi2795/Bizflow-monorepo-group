# @bizflow/feature-analytics

Analytics feature package for dashboards, KPI cards, and summary reporting.

## Functionality

- Displays metric-driven overview screens
- Presents aggregated values and high-level trends
- Focuses on reusable dashboard composition

## Composition

- UI: `Card`, `StatCard`
- Utilities: `aggregate`, `formatCurrency`
- Consumers: `apps/system-b`

## Architecture

- Keeps reporting-style dashboard logic inside a reusable package
- Shares formatting helpers with the rest of the monorepo
