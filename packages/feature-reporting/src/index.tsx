"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Table, THead, TBody, TR, TH, TD, Button, Badge } from "@bizflow/ui-components";
import { formatCurrency, formatDate } from "@bizflow/utils";
import { Download, FileBarChart } from "lucide-react";

const REPORTS = [
  { name: "Revenue summary — April 2025", kind: "Revenue", total: 184290, generated: "2025-04-22" },
  { name: "Order export — Q1 2025", kind: "Orders", total: 612400, generated: "2025-04-02" },
  { name: "Inventory aging report", kind: "Inventory", total: 0, generated: "2025-03-30" },
];
export function Reporting() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FileBarChart className="h-5 w-5 text-[hsl(var(--primary))]" />
                <CardTitle>Reports</CardTitle>
              </div>
              <CardDescription>Exportable summaries across business modules.</CardDescription>
            </div>
            <Button><Download /> Generate report</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <THead><TR><TH>Report</TH><TH>Type</TH><TH>Total</TH><TH>Generated</TH><TH /></TR></THead>
            <TBody>
              {REPORTS.map((r) => (
                <TR key={r.name}>
                  <TD className="font-medium">{r.name}</TD>
                  <TD><Badge tone="info">{r.kind}</Badge></TD>
                  <TD>{r.total ? formatCurrency(r.total) : "—"}</TD>
                  <TD className="text-[hsl(var(--muted-foreground))]">{formatDate(r.generated)}</TD>
                  <TD><Button size="sm" variant="outline"><Download /> CSV</Button></TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
