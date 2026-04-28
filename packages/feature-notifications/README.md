# @bizflow/feature-notifications

Notifications feature package for alerts, status updates, and messaging surfaces.

## Functionality

- Shows system notifications and updates
- Supports lightweight list or alert-style UI
- Useful for customer-facing feedback and status visibility

## Composition

- UI: `Card`, `Badge`, `Button`
- Utilities: `timeAgo`
- Consumers: `apps/system-a`

## Architecture

- Keeps notification presentation portable across the customer system
- Lets the app layer assemble the experience without custom UI duplication
