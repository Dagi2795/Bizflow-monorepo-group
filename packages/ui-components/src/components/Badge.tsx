import { cn } from "../lib";
type Tone = "default" | "success" | "warning" | "destructive" | "info";
const tones: Record<Tone, string> = {
  default: "bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]",
  success: "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]",
  warning: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
  destructive: "bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))]",
  info: "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]",
};
export const Badge = ({ tone = "default", children, className }: { tone?: Tone; children: React.ReactNode; className?: string }) =>
  <span className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium", tones[tone], className)}>{children}</span>;
