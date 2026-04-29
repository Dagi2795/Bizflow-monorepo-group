# @bizflow/feature-inventory

Inventory feature package for stock levels, SKUs, and operational tracking.

## Functionality

- Presents inventory-oriented screens
- Supports product and stock visibility
- Designed for admin and operations workflows

## Composition

- UI: `Table`, `Badge`, `StatCard`
- Utilities: `formatNumber`, `aggregate`
- Consumers: `apps/system-b`

## Architecture

- Keeps inventory UI reusable across the admin system
- Avoids duplicating table and badge presentation logic in the app layer
