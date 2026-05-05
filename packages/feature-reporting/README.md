# @bizflow/feature-reporting

Reporting feature package for exports, summaries, and structured business views.

## Functionality

- Presents reporting-oriented screens
- Supports summary and export-style workflows
- Designed for admin-facing information review

## Composition

- UI: `Card`, `Button`, `Table`
- Utilities: `formatCurrency`, `formatDate`
- Consumers: `apps/system-b`

## Architecture

- Keeps reporting logic portable and reusable
- Avoids rebuilding summary views inside the app layer
