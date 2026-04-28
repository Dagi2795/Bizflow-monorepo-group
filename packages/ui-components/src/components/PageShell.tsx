"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Search,
  LayoutDashboard,
  ShieldCheck,
  UserCircle,
  ShoppingCart,
  CreditCard,
  Bell,
  Settings2,
  Boxes,
  BarChart3,
  FileBarChart,
  LifeBuoy,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../lib";

export type NavIconKey =
  | "layout-dashboard"
  | "shield-check"
  | "user-circle"
  | "shopping-cart"
  | "credit-card"
  | "bell"
  | "settings-2"
  | "boxes"
  | "bar-chart-3"
  | "file-bar-chart"
  | "life-buoy";

const NAV_ICON_MAP: Record<NavIconKey, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  "shield-check": ShieldCheck,
  "user-circle": UserCircle,
  "shopping-cart": ShoppingCart,
  "credit-card": CreditCard,
  bell: Bell,
  "settings-2": Settings2,
  boxes: Boxes,
  "bar-chart-3": BarChart3,
  "file-bar-chart": FileBarChart,
  "life-buoy": LifeBuoy,
};

export interface NavItem { href: string; label: string; icon: NavIconKey; group?: string }
export interface PageShellProps {
  appName: string; appTagline: string; nav: NavItem[]; children: React.ReactNode;
}

export function PageShell({ appName, appTagline, nav, children }: PageShellProps) {
  const pathname = usePathname();
  const groups = Array.from(new Set(nav.map((n) => n.group ?? "Menu")));
  return (
    <div className="min-h-screen flex bg-[hsl(var(--background))]">
      <aside className="hidden md:flex w-64 flex-col border-r border-[hsl(var(--border))] bg-[hsl(var(--card))]">
        <div className="h-16 flex items-center gap-3 px-5 border-b border-[hsl(var(--border))]">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] text-white flex items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold tracking-tight">{appName}</div>
            <div className="text-xs text-[hsl(var(--muted-foreground))] -mt-0.5">{appTagline}</div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {groups.map((g) => (
            <div key={g}>
              <div className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">{g}</div>
              <ul className="space-y-1">
                {nav.filter((n) => (n.group ?? "Menu") === g).map((item) => {
                  const Icon = NAV_ICON_MAP[item.icon] ?? HelpCircle;
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={cn(
                        "flex items-center gap-3 rounded-md px-2.5 py-2 text-sm transition-colors",
                        active
                          ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-medium"
                          : "text-[hsl(var(--foreground))]/80 hover:bg-[hsl(var(--muted))]")}>
                        <Icon className="h-4 w-4" />{item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="border-t border-[hsl(var(--border))] p-4 text-xs text-[hsl(var(--muted-foreground))]">
          <div className="font-medium text-[hsl(var(--foreground))]">BizFlow v1.0</div>
          packages/* · apps/*
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur sticky top-0 z-10 flex items-center px-4 md:px-8 gap-4">
          <div className="flex items-center gap-2 flex-1 max-w-md text-sm text-[hsl(var(--muted-foreground))]">
            <Search className="h-4 w-4" />
            <input placeholder="Search…" className="bg-transparent outline-none w-full" />
          </div>
          <span className="hidden sm:inline-flex items-center text-xs px-2 py-1 rounded-md bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] font-medium">● Operational</span>
          <div className="h-9 w-9 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-sm font-semibold">JD</div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, actions }:
  { eyebrow?: string; title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))] mb-2">{eyebrow}</div>}
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="mt-2 text-[hsl(var(--muted-foreground))] max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
}
