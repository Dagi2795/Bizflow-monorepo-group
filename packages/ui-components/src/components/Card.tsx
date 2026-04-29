import * as React from "react";
import { cn } from "../lib";
export const Card = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) =>
  <div className={cn("rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm", className)} {...p} />;
export const CardHeader = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) =>
  <div className={cn("p-6 pb-3 flex flex-col gap-1", className)} {...p} />;
export const CardTitle = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) =>
  <h3 className={cn("font-semibold tracking-tight", className)} {...p} />;
export const CardDescription = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) =>
  <p className={cn("text-sm text-[hsl(var(--muted-foreground))]", className)} {...p} />;
export const CardContent = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) =>
  <div className={cn("p-6 pt-3", className)} {...p} />;
