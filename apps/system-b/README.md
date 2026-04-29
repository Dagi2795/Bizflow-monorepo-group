# System B - Individual Contribution

**Developer:** [Type Your Name Here]

## Architecture & Configuration
System B is built strictly adhering to the monorepo assignment guidelines. No direct UI or business logic is written in this directory. Instead, this application acts purely as an **assembly layer**.

It pulls composite features from the shared monorepo workspace:
- `@bizflow/feature-auth`: Provides the Login composite system.
- `@bizflow/feature-profile`: Provides the User Profile composite system.

These features rely on the group-created `@bizflow/ui-components` and `@bizflow/utils`. 

## How it works
The `SystemB` main page imports `<Login />` and `<Profile />` and renders them. All state management, UI, and validation logic is completely encapsulated within their respective workspace packages, proving component-based development and code reusability.