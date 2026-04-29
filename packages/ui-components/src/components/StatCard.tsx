import { Card, CardContent } from "./Card";
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react";
import { cn } from "../lib";
export function StatCard({ label, value, delta, trend = "up", icon: Icon }:
  { label: string; value: string | number; delta?: string; trend?: "up" | "down"; icon?: LucideIcon }) {
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider font-medium text-[hsl(var(--muted-foreground))]">{label}</span>
          {Icon && <div className="h-8 w-8 rounded-md bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] flex items-center justify-center"><Icon className="h-4 w-4" /></div>}
        </div>
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        {delta && (
          <div className={cn("mt-2 flex items-center gap-1 text-xs font-medium",
            trend === "up" ? "text-[hsl(var(--success))]" : "text-[hsl(var(--destructive))]")}>
            <TrendIcon className="h-3 w-3" /> {delta}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
