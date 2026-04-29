# @bizflow/feature-support

Support feature package for help-desk tickets, service levels, and customer assistance views.

## Functionality

- Presents support and ticket management screens
- Supports service workflows and operational feedback
- Can be reused anywhere a support interface is needed

## Composition

- UI: `Table`, `Badge`, `Button`
- Utilities: `timeAgo`, `truncate`
- Consumers: `apps/system-b`

## Architecture

- Keeps support presentation reusable and system-agnostic
- Lets the admin system assemble the screen without duplicating logic
