import "./globals.css";
import type { Metadata } from "next";
import { PageShell } from "@bizflow/ui-components";
import { NAV } from "../assemble/nav";

export const metadata: Metadata = {
  title: "Admin System — BizFlow Enterprise",
  description: "Admin modules: auth, admin, inventory, analytics, reporting, support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell appName="BizFlow" appTagline="Admin · System B" nav={NAV}>
          {children}
        </PageShell>
      </body>
    </html>
  );
}
