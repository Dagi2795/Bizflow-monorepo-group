# @bizflow/feature-payments

Payments feature package for payment capture, status, and transaction views.

## Functionality

- Presents payment-related screens
- Supports customer-side payment flow composition
- Reuses shared formatting and feedback patterns

## Composition

- UI: `Card`, `Table`, `Badge`, `Button`
- Utilities: `formatCurrency`, `timeAgo`
- Consumers: `apps/system-a`

## Architecture

- Keeps payment presentation reusable and consistent
- Prevents app-specific duplication of payment UI logic
