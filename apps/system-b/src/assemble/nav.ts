import type { NavItem } from "@bizflow/ui-components";
export const NAV: NavItem[] = [
  { href: "/",          label: "Overview",      icon: "layout-dashboard", group: "Platform" },
  { href: "/auth",      label: "Authentication",icon: "shield-check",     group: "Access" },
  { href: "/admin",     label: "Admin",         icon: "settings-2",       group: "Access" },
  { href: "/inventory", label: "Inventory",     icon: "boxes",            group: "Operations" },
  { href: "/analytics", label: "Analytics",     icon: "bar-chart-3",      group: "Insights" },
  { href: "/reporting", label: "Reporting",     icon: "file-bar-chart",   group: "Insights" },
  { href: "/support",   label: "Support",       icon: "life-buoy",        group: "Service" },
];
