import "server-only";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata, Viewport } from "next";
import "./globals.css";
import StickyNav from "./sticky-nav";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "Philipp Page",
    template: "%s | Philipp Page",
  },
  description: "Philipp Page's personal website.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <StickyNav />
        </nav>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
