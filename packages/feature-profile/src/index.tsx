"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Field, Input, Button, Badge } from "@bizflow/ui-components";
import { capitalize } from "@bizflow/utils";

export function Profile() {
  const [name, setName] = useState("Jane Doe");
  const [role] = useState("operations");
  const [email, setEmail] = useState("jane@bizflow.io");
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] text-white flex items-center justify-center text-2xl font-semibold">JD</div>
          <div className="mt-4 font-semibold">{name}</div>
          <div className="text-sm text-[hsl(var(--muted-foreground))]">{email}</div>
          <Badge tone="info" className="mt-3">{capitalize(role)}</Badge>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle>Account details</CardTitle><CardDescription>Update your profile information.</CardDescription></CardHeader>
        <CardContent className="space-y-4">
          <Field label="Full name"><Input value={name} onChange={(e) => setName(e.target.value)} /></Field>
          <Field label="Email"><Input value={email} onChange={(e) => setEmail(e.target.value)} /></Field>
          <Field label="Role" hint="Managed by admin"><Input value={capitalize(role)} disabled /></Field>
          <div className="pt-2"><Button>Save changes</Button></div>
        </CardContent>
      </Card>
    </div>
  );
}
