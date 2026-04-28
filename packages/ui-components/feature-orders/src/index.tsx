"use client";
import { Card, CardContent, Table, THead, TBody, TR, TH, TD, Badge, Button, StatCard } from "@bizflow/ui-components";
import { formatCurrency, formatDate, sumBy } from "@bizflow/utils";
import { Plus, ShoppingCart, DollarSign, Clock } from "lucide-react";

const ORDERS = [
  { id: "ORD-1042", customer: "Acme Inc.", total: 1249.5, status: "Paid", date: "2025-04-21" },
  { id: "ORD-1041", customer: "Globex Corp", total: 320.0, status: "Shipped", date: "2025-04-20" },
  { id: "ORD-1040", customer: "Initech LLC", total: 89.99, status: "Pending", date: "2025-04-20" },
  { id: "ORD-1039", customer: "Umbrella Co", total: 5400.0, status: "Paid", date: "2025-04-19" },
  { id: "ORD-1038", customer: "Wayne Ent.", total: 75.25, status: "Refunded", date: "2025-04-18" },
] as const;

const tone = (s: string) => s === "Paid" ? "success" : s === "Shipped" ? "info" : s === "Pending" ? "warning" : "destructive";

export function Orders() {
  const total = sumBy(ORDERS as unknown as { total: number }[], (o) => o.total);
  const pending = ORDERS.filter((o) => o.status === "Pending").length;
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Total revenue" value={formatCurrency(total)} icon={DollarSign} delta="↑ 12.4%" />
        <StatCard label="Orders" value={ORDERS.length} icon={ShoppingCart} delta="↑ 38 today" />
        <StatCard label="Pending" value={pending} icon={Clock} delta="↓ 2 vs yesterday" trend="down" />
      </div>
      <Card>
        <div className="p-4 flex items-center justify-between border-b border-[hsl(var(--border))]">
          <h3 className="font-semibold">Recent orders</h3>
          <Button size="sm"><Plus /> New order</Button>
        </div>
        <CardContent className="p-0">
          <Table>
            <THead><TR><TH>Order</TH><TH>Customer</TH><TH>Total</TH><TH>Status</TH><TH>Date</TH></TR></THead>
            <TBody>
              {ORDERS.map((o) => (
                <TR key={o.id}>
                  <TD className="font-medium">{o.id}</TD>
                  <TD>{o.customer}</TD>
                  <TD>{formatCurrency(o.total)}</TD>
                  <TD><Badge tone={tone(o.status)}>{o.status}</Badge></TD>
                  <TD className="text-[hsl(var(--muted-foreground))]">{formatDate(o.date)}</TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
