# @bizflow/feature-auth

Authentication feature package for sign-in, sign-up, and session-oriented UI.

## Functionality

- Presents login and account access flows
- Supports authentication-oriented screens
- Reuses shared validation helpers instead of duplicating form logic

## Composition

- UI: `Button`, `Input`, `Card`
- Utilities: `validateEmail`
- Consumers: `apps/system-a`, `apps/system-b`

## Architecture

- Keeps authentication UI reusable across both systems
- Leaves app packages responsible only for assembly
