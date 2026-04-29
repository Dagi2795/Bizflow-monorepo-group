import Link from "next/link";
import { PageHeader, StatCard, Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge } from "@bizflow/ui-components";
import { formatCurrency } from "@bizflow/utils";
import { ShoppingCart, CreditCard, Bell, ShieldCheck, UserCircle, ArrowRight, Package } from "lucide-react";

const TILES = [
  { href: "/auth", title: "Authentication", desc: "Login & sessions", icon: ShieldCheck },
  { href: "/profile", title: "Profile", desc: "Account & preferences", icon: UserCircle },
  { href: "/orders", title: "Orders", desc: "Create & track", icon: ShoppingCart },
  { href: "/payments", title: "Payments", desc: "Capture & refund", icon: CreditCard },
  { href: "/notifications", title: "Notifications", desc: "Alerts & messaging", icon: Bell },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="System A · Customer"
        title="BizFlow Customer"
        description="Composed entirely from feature packages — zero business logic in this app."
          actions={<Button><Link href="/orders">View orders <ArrowRight /></Link></Button>}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Revenue (MTD)" value={formatCurrency(184290)} icon={CreditCard} delta="↑ 12.4%" />
        <StatCard label="Active orders" value="1,284" icon={ShoppingCart} delta="↑ 38 today" />
        <StatCard label="Open notifs" value="2" icon={Bell} />
        <StatCard label="SKUs available" value="912" icon={Package} delta="↓ 4 low" trend="down" />
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Composition</CardTitle>
          <CardDescription>This system imports the following feature packages.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {["@bizflow/feature-auth","@bizflow/feature-profile","@bizflow/feature-orders","@bizflow/feature-payments","@bizflow/feature-notifications"]
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
