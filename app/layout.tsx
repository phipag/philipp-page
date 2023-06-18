import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "Philipp Page",
    template: "%s | Philipp Page",
  },
  description: "Philipp Page's personal website.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
