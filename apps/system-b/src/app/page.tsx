import Link from "next/link";
import { PageHeader, StatCard, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Button } from "@bizflow/ui-components";
import { formatCurrency } from "@bizflow/utils";
import { Boxes, BarChart3, LifeBuoy, Settings2, FileBarChart, ShieldCheck, ArrowRight, Users, Package, TrendingUp } from "lucide-react";

const TILES = [
  { href: "/auth", title: "Authentication", desc: "Sessions & roles", icon: ShieldCheck },
  { href: "/admin", title: "Admin", desc: "Team & permissions", icon: Settings2 },
  { href: "/inventory", title: "Inventory", desc: "SKUs & stock", icon: Boxes },
  { href: "/analytics", title: "Analytics", desc: "KPIs & charts", icon: BarChart3 },
  { href: "/reporting", title: "Reporting", desc: "Exports & summaries", icon: FileBarChart },
  { href: "/support", title: "Support", desc: "Tickets & SLAs", icon: LifeBuoy },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="System B · Admin"
        title="BizFlow Admin"
        description="Composed entirely from feature packages — zero business logic in this app."
        actions={<Button><Link href="/analytics">Open analytics <ArrowRight /></Link></Button>}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Revenue (6mo)" value={formatCurrency(915000)} icon={TrendingUp} delta="↑ 18.2%" />
        <StatCard label="Team members" value="14" icon={Users} delta="↑ 2 this week" />
        <StatCard label="Active SKUs" value="912" icon={Package} delta="↓ 4 low" trend="down" />
        <StatCard label="Open tickets" value="6" icon={LifeBuoy} delta="↓ 3 vs yest" trend="down" />
      </div>
      <Card className="mb-8">
        <CardHeader><CardTitle>Composition</CardTitle><CardDescription>This system imports the following feature packages.</CardDescription></CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {["@bizflow/feature-auth","@bizflow/feature-admin","@bizflow/feature-inventory","@bizflow/feature-analytics","@bizflow/feature-reporting","@bizflow/feature-support"]
            .map((p) => <Badge key={p} tone="info">{p}</Badge>)}
        </CardContent>
      </Card>
      <h2 className="text-lg font-semibold tracking-tight mb-4">Modules</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t) => {
          const Icon = t.icon;
          return (
            <Link key={t.href} href={t.href} className="group">
              <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] text-white flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))] mt-0.5">{t.desc}</div>
                  <div className="mt-3 text-xs font-medium text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition">Open module →</div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
