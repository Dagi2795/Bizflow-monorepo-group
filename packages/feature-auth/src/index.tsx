"use client";
import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription, Field, Input, Badge } from "@bizflow/ui-components";
import { validateEmail, validateMinLength } from "@bizflow/utils";
import { ShieldCheck, LogIn, UserPlus } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("demo@bizflow.io");
  const [password, setPassword] = useState("••••••••");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [msg, setMsg] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) return setMsg("Invalid email");
    if (!validateMinLength(password, 6)) return setMsg("Password too short");
    setMsg(`✓ ${mode === "login" ? "Signed in" : "Account created"} as ${email}`);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[hsl(var(--primary))]" />
            <CardTitle>{mode === "login" ? "Sign in" : "Create account"}</CardTitle>
          </div>
          <CardDescription>Composed entirely from ui-components + utils.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <Field label="Email"><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></Field>
            <Field label="Password"><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></Field>
            <div className="flex items-center justify-between pt-2">
              <Button type="submit">{mode === "login" ? <><LogIn /> Sign in</> : <><UserPlus /> Sign up</>}</Button>
              <button type="button" onClick={() => setMode(mode === "login" ? "signup" : "login")} className="text-xs text-[hsl(var(--primary))] hover:underline">
                {mode === "login" ? "Need an account?" : "Have an account?"}
              </button>
            </div>
            {msg && <p className="text-sm text-[hsl(var(--muted-foreground))]">{msg}</p>}
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Sessions</CardTitle><CardDescription>Active sessions for this account.</CardDescription></CardHeader>
        <CardContent className="space-y-3">
          {[
            { d: "MacBook Pro · Safari", l: "San Francisco, CA", c: true },
            { d: "iPhone 15 · BizFlow App", l: "San Francisco, CA", c: false },
          ].map((s) => (
            <div key={s.d} className="flex items-center justify-between rounded-md border border-[hsl(var(--border))] p-3">
              <div>
                <div className="text-sm font-medium">{s.d}</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">{s.l}</div>
              </div>
              {s.c ? <Badge tone="success">Current</Badge> : <Button size="sm" variant="outline">Revoke</Button>}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
