import * as React from "react";
import { cn } from "../lib";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(
      "flex h-9 w-full rounded-md border border-[hsl(var(--input))] bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:opacity-50",
      className,
    )} {...props} />
  ),
);
Input.displayName = "Input";

export const Label = ({ className, ...p }: React.LabelHTMLAttributes<HTMLLabelElement>) =>
  <label className={cn("text-sm font-medium leading-none", className)} {...p} />;

export const Field = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <div className="space-y-1.5">
    <Label>{label}</Label>
    {children}
    {hint && <p className="text-xs text-[hsl(var(--muted-foreground))]">{hint}</p>}
  </div>
);
