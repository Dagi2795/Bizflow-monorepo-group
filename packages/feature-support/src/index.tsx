"use client";
import { Card, CardContent, Table, THead, TBody, TR, TH, TD, Badge, Button, StatCard } from "@bizflow/ui-components";
import { timeAgo, truncate } from "@bizflow/utils";
import { LifeBuoy, Inbox, CheckCircle2 } from "lucide-react";

const TICKETS = [
  { id: "#218", subject: "Cannot complete checkout — 3DS challenge fails consistently in production environment", priority: "High", status: "Open", at: new Date(Date.now() - 1000 * 60 * 30) },
  { id: "#217", subject: "Where is my order shipment update", priority: "Medium", status: "Open", at: new Date(Date.now() - 1000 * 60 * 60 * 4) },
  { id: "#216", subject: "Refund processed but balance not updated", priority: "High", status: "Pending", at: new Date(Date.now() - 1000 * 60 * 60 * 8) },
  { id: "#215", subject: "Add second shipping address to account", priority: "Low", status: "Resolved", at: new Date(Date.now() - 1000 * 60 * 60 * 24) },
];
const tone = (s: string) => s === "Open" ? "destructive" : s === "Pending" ? "warning" : "success";
export function Support() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Open tickets" value={TICKETS.filter((t) => t.status === "Open").length} icon={Inbox} />
        <StatCard label="Avg response" value="1h 12m" icon={LifeBuoy} delta="↓ 14m" />
        <StatCard label="Resolved (24h)" value={12} icon={CheckCircle2} delta="↑ 3" />
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <THead><TR><TH>Ticket</TH><TH>Subject</TH><TH>Priority</TH><TH>Status</TH><TH>Updated</TH><TH /></TR></THead>
            <TBody>
              {TICKETS.map((t) => (
                <TR key={t.id}>
                  <TD className="font-mono text-xs">{t.id}</TD>
                  <TD>{truncate(t.subject, 60)}</TD>
                  <TD><Badge tone={t.priority === "High" ? "destructive" : t.priority === "Medium" ? "warning" : "default"}>{t.priority}</Badge></TD>
                  <TD><Badge tone={tone(t.status)}>{t.status}</Badge></TD>
                  <TD className="text-[hsl(var(--muted-foreground))]">{timeAgo(t.at)}</TD>
                  <TD><Button size="sm" variant="outline">Open</Button></TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
