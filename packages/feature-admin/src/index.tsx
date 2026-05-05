"use client";
import { Card, CardContent, Table, THead, TBody, TR, TH, TD, Badge, Button } from "@bizflow/ui-components";
import { capitalize } from "@bizflow/utils";
import { UserPlus } from "lucide-react";

const USERS = [
  { name: "Jane Doe", email: "jane@bizflow.io", role: "admin", status: "active" },
  { name: "Mark Lee", email: "mark@bizflow.io", role: "manager", status: "active" },
  { name: "Sara Kim", email: "sara@bizflow.io", role: "agent", status: "invited" },
  { name: "Tom Park", email: "tom@bizflow.io", role: "agent", status: "disabled" },
];
const tone = (s: string) => s === "active" ? "success" : s === "invited" ? "warning" : "default";
export function Admin() {
  return (
    <Card>
      <div className="p-4 flex items-center justify-between border-b border-[hsl(var(--border))]">
        <h3 className="font-semibold">Team members</h3>
        <Button size="sm"><UserPlus /> Invite</Button>
      </div>
      <CardContent className="p-0">
        <Table>
          <THead><TR><TH>Name</TH><TH>Email</TH><TH>Role</TH><TH>Status</TH><TH /></TR></THead>
          <TBody>
            {USERS.map((u) => (
              <TR key={u.email}>
                <TD className="font-medium">{u.name}</TD>
                <TD className="text-[hsl(var(--muted-foreground))]">{u.email}</TD>
                <TD><Badge tone="info">{capitalize(u.role)}</Badge></TD>
                <TD><Badge tone={tone(u.status)}>{capitalize(u.status)}</Badge></TD>
                <TD><Button size="sm" variant="outline">Edit</Button></TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </CardContent>
    </Card>
  );
}
