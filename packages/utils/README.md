# @bizflow/utils

Pure-function utility library shared across all feature packages.

## Purpose

This package centralizes reusable logic that should not live inside a specific feature package or app.

## Modules

- `formatCurrency`, `formatNumber` - locale-aware number formatting
- `formatDate`, `timeAgo` - date helpers
- `slugify`, `truncate`, `capitalize` - string helpers
- `apiRequest` - typed fetch wrapper with error handling
- `sumBy`, `groupBy`, `aggregate` - data processing
- `validateEmail`, `validateRequired` - form validation

## Why It Exists

- Keeps repeated logic out of feature packages
- Makes feature packages easier to test and reuse
- Gives both systems the same formatting and validation behavior

## Usage

```ts
import { formatCurrency, timeAgo, sumBy } from "@bizflow/utils";
```

## Notes

- Keep functions pure where possible.
- Prefer adding shared helpers here before duplicating logic inside a feature.
