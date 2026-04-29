# @bizflow/feature-profile

Profile feature package for customer account details and profile management.

## Functionality

- Presents profile-centric customer screens
- Supports account summary and preference workflows
- Reuses the shared UI library for consistent presentation

## Composition

- UI: `Card`, `Field`, `Input`, `Button`, `Badge`
- Utilities: `capitalize`
- Consumers: `apps/system-a`

## Architecture

- Keeps profile presentation reusable across customer-facing routes
- Lets the app layer stay focused on assembly only
