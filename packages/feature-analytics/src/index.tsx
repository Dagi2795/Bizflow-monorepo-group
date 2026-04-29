"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, StatCard } from "@bizflow/ui-components";
import { aggregate, formatCurrency } from "@bizflow/utils";
import { TrendingUp, Users, Activity, ShoppingCart } from "lucide-react";

const REV = [
  { m: "Nov", v: 124 }, { m: "Dec", v: 142 }, { m: "Jan", v: 138 },
  { m: "Feb", v: 156 }, { m: "Mar", v: 171 }, { m: "Apr", v: 184 },
];
export function Analytics() {
  const max = Math.max(...REV.map((d) => d.v));
  const agg = aggregate(REV, (d) => d.v);
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-4 gap-4">
        <StatCard label="Revenue (6mo)" value={formatCurrency(agg.total * 1000)} icon={TrendingUp} delta="↑ 12.4%" />
        <StatCard label="Conversion" value="4.8%" icon={Activity} delta="↑ 0.6 pts" />
        <StatCard label="New users" value="312" icon={Users} delta="↑ 23" />
        <StatCard label="AOV" value={formatCurrency(143)} icon={ShoppingCart} trend="down" delta="↓ 1.2%" />
      </div>
      <Card>
        <CardHeader><CardTitle>Revenue trend</CardTitle><CardDescription>Last 6 months · thousands USD</CardDescription></CardHeader>
        <CardContent>
          <div className="flex items-end gap-3 h-64 pt-4">
            {REV.map((d) => (
              <div key={d.m} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex-1 flex items-end">
                  <div className="w-full rounded-t-md bg-gradient-to-t from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] transition-all hover:opacity-80" style={{ height: `${(d.v / max) * 100}%` }} />
                </div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">{d.m}</div>
                <div className="text-xs font-semibold">${d.v}k</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
