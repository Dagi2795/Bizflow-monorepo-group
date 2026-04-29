"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Table, THead, TBody, TR, TH, TD, Badge, Button, Modal, Field, Input, StatCard } from "@bizflow/ui-components";
import { formatCurrency, timeAgo } from "@bizflow/utils";
import { CreditCard, DollarSign, CheckCircle2 } from "lucide-react";

const TX = [
  { id: "tx_91", method: "Visa •• 4242", amount: 1249.5, status: "Succeeded", at: new Date(Date.now() - 1000 * 60 * 12) },
  { id: "tx_90", method: "ACH", amount: 5400, status: "Pending", at: new Date(Date.now() - 1000 * 60 * 60 * 2) },
  { id: "tx_89", method: "Mastercard •• 0007", amount: 89.99, status: "Succeeded", at: new Date(Date.now() - 1000 * 60 * 60 * 6) },
];
export function Payments() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Captured (24h)" value={formatCurrency(1339.49)} icon={DollarSign} delta="↑ 8.2%" />
        <StatCard label="Pending" value={formatCurrency(5400)} icon={CreditCard} />
        <StatCard label="Success rate" value="98.4%" icon={CheckCircle2} delta="↑ 0.3 pts" />
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div><CardTitle>Recent transactions</CardTitle><CardDescription>Capture, refund, reconcile.</CardDescription></div>
            <Button onClick={() => setOpen(true)}>Capture payment</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <THead><TR><TH>ID</TH><TH>Method</TH><TH>Amount</TH><TH>Status</TH><TH>When</TH></TR></THead>
            <TBody>
              {TX.map((t) => (
                <TR key={t.id}>
                  <TD className="font-mono text-xs">{t.id}</TD>
                  <TD>{t.method}</TD>
                  <TD>{formatCurrency(t.amount)}</TD>
                  <TD><Badge tone={t.status === "Succeeded" ? "success" : "warning"}>{t.status}</Badge></TD>
                  <TD className="text-[hsl(var(--muted-foreground))]">{timeAgo(t.at)}</TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)} title="Capture payment">
        <div className="space-y-3">
          <Field label="Amount"><Input defaultValue="1249.50" /></Field>
          <Field label="Customer"><Input defaultValue="Acme Inc." /></Field>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Capture</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
