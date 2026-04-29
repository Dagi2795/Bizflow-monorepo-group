"use client";
import { Card, CardContent, Table, THead, TBody, TR, TH, TD, Badge, StatCard, Button } from "@bizflow/ui-components";
import { formatNumber, aggregate } from "@bizflow/utils";
import { Boxes, Plus, AlertTriangle, Package } from "lucide-react";

const STOCK = [
  { sku: "SKU-A100", name: "Wireless Mouse", qty: 412, reorder: 50 },
  { sku: "SKU-A101", name: "Mechanical Keyboard", qty: 28, reorder: 40 },
  { sku: "SKU-A102", name: "USB-C Hub", qty: 156, reorder: 60 },
  { sku: "SKU-A103", name: "27\" Monitor", qty: 12, reorder: 20 },
  { sku: "SKU-A104", name: "Laptop Stand", qty: 89, reorder: 30 },
];
export function Inventory() {
  const agg = aggregate(STOCK, (s) => s.qty);
  const low = STOCK.filter((s) => s.qty < s.reorder);
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="SKUs in stock" value={formatNumber(agg.total)} icon={Boxes} />
        <StatCard label="Active SKUs" value={agg.count} icon={Package} />
        <StatCard label="Low stock" value={low.length} icon={AlertTriangle} trend="down" delta="Action needed" />
      </div>
      <Card>
        <div className="p-4 flex items-center justify-between border-b border-[hsl(var(--border))]">
          <h3 className="font-semibold">Inventory</h3>
          <Button size="sm"><Plus /> Add SKU</Button>
        </div>
        <CardContent className="p-0">
          <Table>
            <THead><TR><TH>SKU</TH><TH>Name</TH><TH>Quantity</TH><TH>Reorder at</TH><TH>Status</TH></TR></THead>
            <TBody>
              {STOCK.map((s) => (
                <TR key={s.sku}>
                  <TD className="font-mono text-xs">{s.sku}</TD>
                  <TD>{s.name}</TD>
                  <TD>{formatNumber(s.qty)}</TD>
                  <TD className="text-[hsl(var(--muted-foreground))]">{s.reorder}</TD>
                  <TD>{s.qty < s.reorder ? <Badge tone="destructive">Low</Badge> : <Badge tone="success">OK</Badge>}</TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
