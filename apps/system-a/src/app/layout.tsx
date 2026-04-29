import "./globals.css";
import type { Metadata } from "next";
import { PageShell } from "@bizflow/ui-components";
import { NAV } from "../assemble/nav";

export const metadata: Metadata = {
  title: "Customer System — BizFlow Enterprise",
  description: "Customer-facing modules: auth, profile, orders, payments, notifications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell appName="BizFlow" appTagline="Customer · System A" nav={NAV}>
          {children}
        </PageShell>
      </body>
    </html>
  );
}
