"use client";
import { Card, CardContent, Button, Badge } from "@bizflow/ui-components";
import { timeAgo } from "@bizflow/utils";
import { Bell, ShoppingCart, Boxes, CreditCard, LifeBuoy, type LucideIcon } from "lucide-react";

type Kind = "order" | "stock" | "payment" | "support";
const ICON: Record<Kind, LucideIcon> = { order: ShoppingCart, stock: Boxes, payment: CreditCard, support: LifeBuoy };

const NOTIFS: { id: string; kind: Kind; title: string; at: Date; unread: boolean }[] = [
  { id: "n1", kind: "order", title: "New order ORD-1042 from Acme Inc.", at: new Date(Date.now() - 1000 * 60 * 4), unread: true },
  { id: "n2", kind: "stock", title: "SKU-A103 below reorder threshold", at: new Date(Date.now() - 1000 * 60 * 27), unread: true },
  { id: "n3", kind: "payment", title: "Payment captured: $1,249.50", at: new Date(Date.now() - 1000 * 60 * 60), unread: false },
  { id: "n4", kind: "support", title: "Ticket #218 escalated to Tier 2", at: new Date(Date.now() - 1000 * 60 * 60 * 3), unread: false },
];

export function Notifications() {
  return (
    <Card>
      <div className="p-4 flex items-center justify-between border-b border-[hsl(var(--border))]">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <h3 className="font-semibold">Notifications</h3>
          <Badge tone="info">{NOTIFS.filter((n) => n.unread).length} new</Badge>
        </div>
        <Button variant="outline" size="sm">Mark all as read</Button>
      </div>
      <CardContent className="p-0 divide-y divide-[hsl(var(--border))]">
        {NOTIFS.map((n) => {
          const Icon = ICON[n.kind];
          return (
            <div key={n.id} className={`flex items-center gap-4 p-4 ${n.unread ? "bg-[hsl(var(--accent))]/40" : ""}`}>
              <div className="h-10 w-10 rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center"><Icon className="h-5 w-5" /></div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{n.title}</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">{timeAgo(n.at)}</div>
              </div>
              {n.unread && <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
