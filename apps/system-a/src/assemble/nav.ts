import type { NavItem } from "@bizflow/ui-components";
export const NAV: NavItem[] = [
  { href: "/",              label: "Overview",      icon: "layout-dashboard", group: "Platform" },
  { href: "/auth",          label: "Authentication",icon: "shield-check",     group: "Account" },
  { href: "/profile",       label: "Profile",       icon: "user-circle",      group: "Account" },
  { href: "/orders",        label: "Orders",        icon: "shopping-cart",    group: "Commerce" },
  { href: "/payments",      label: "Payments",      icon: "credit-card",      group: "Commerce" },
  { href: "/notifications", label: "Notifications", icon: "bell",             group: "Activity" },
];
