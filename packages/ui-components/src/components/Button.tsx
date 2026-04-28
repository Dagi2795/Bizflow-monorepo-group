import * as React from "react";
import { cn } from "../lib";
type Variant = "default" | "outline" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg" | "icon";
const variants: Record<Variant, string> = {
  default: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 shadow-sm",
  outline: "border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--muted))]",
  ghost: "hover:bg-[hsl(var(--muted))]",
  destructive: "bg-[hsl(var(--destructive))] text-white hover:opacity-90",
};
const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs", md: "h-9 px-4 text-sm", lg: "h-11 px-6 text-base", icon: "h-9 w-9",
};
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; size?: Size;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => (
    <button ref={ref} className={cn(
      "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:opacity-50 disabled:pointer-events-none [&_svg]:size-4",
      variants[variant], sizes[size], className,
    )} {...props} />
  ),
);
Button.displayName = "Button";
