# @bizflow/feature-orders

Orders feature package for tracking, summaries, and order lifecycle views.

## Functionality

- Presents order-related screens and summaries
- Supports customer order review workflows
- Designed for composition inside the customer system

## Composition

- UI: `Table`, `Badge`, `Card`
- Utilities: `formatCurrency`, `formatDate`, `sumBy`
- Consumers: `apps/system-a`

## Architecture

- Keeps order UI reusable and consistent with the shared design system
- Avoids hard-coding order logic in the app layer
