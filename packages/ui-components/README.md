# @bizflow/ui-components

Shared, themeable UI primitives used by every feature package and assembled system.

## Purpose

This package contains reusable UI building blocks only. It keeps presentation concerns centralized so feature packages and apps can compose the same look and behavior.

## Components
- **Layout** - `PageShell`, `PageHeader`
- **Surfaces** - `Card`, `CardHeader`, `CardTitle`, `CardContent`
- **Forms** - `Button`, `Input`
- **Data** - `Table`, `StatCard`, `Badge`
- **Feedback** - `Modal`, `EmptyState`

## Design System
- Tailwind CSS with semantic tokens
- CSS variables for shared colors, spacing, and borders
- Neutral layout system that works across both apps
- Shared shell component for consistent navigation and layout

## Usage
```tsx
import { PageShell, Button, Card } from "@bizflow/ui-components";
```

## Notes

- Keep this package limited to shared primitives.
- System-specific pages belong in `apps/*`, not here.
