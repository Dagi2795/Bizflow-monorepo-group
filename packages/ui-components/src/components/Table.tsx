import * as React from "react";
import { cn } from "../lib";
export const Table = ({ className, ...p }: React.HTMLAttributes<HTMLTableElement>) =>
  <div className="w-full overflow-auto"><table className={cn("w-full caption-bottom text-sm", className)} {...p} /></div>;
export const THead = ({ className, ...p }: React.HTMLAttributes<HTMLTableSectionElement>) =>
  <thead className={cn("border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40", className)} {...p} />;
export const TBody = ({ className, ...p }: React.HTMLAttributes<HTMLTableSectionElement>) =>
  <tbody className={cn("[&_tr:last-child]:border-0", className)} {...p} />;
export const TR = ({ className, ...p }: React.HTMLAttributes<HTMLTableRowElement>) =>
  <tr className={cn("border-b border-[hsl(var(--border))] transition-colors hover:bg-[hsl(var(--muted))]/30", className)} {...p} />;
export const TH = ({ className, ...p }: React.ThHTMLAttributes<HTMLTableCellElement>) =>
  <th className={cn("h-11 px-4 text-left align-middle font-medium text-[hsl(var(--muted-foreground))] text-xs uppercase tracking-wider", className)} {...p} />;
export const TD = ({ className, ...p }: React.TdHTMLAttributes<HTMLTableCellElement>) =>
  <td className={cn("p-4 align-middle", className)} {...p} />;
