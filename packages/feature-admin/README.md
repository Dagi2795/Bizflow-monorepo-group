# @bizflow/feature-admin

Administration feature package for users, roles, and system settings.

## Functionality

- Presents admin management screens
- Supports user and role workflows
- Uses shared data and action components for consistent layout

## Composition

- UI: `Table`, `Badge`, `Button`
- Utilities: `capitalize`
- Consumers: `apps/system-b`

## Architecture

- Keeps admin-specific presentation isolated in a reusable package
- Avoids rebuilding management UI in the app layer
