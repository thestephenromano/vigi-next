import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViGi 2.0",
  description: "Campaign-driven video intelligence platform skeleton"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
