import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UAE-Oman Border Wait Times",
  description: "Live estimated wait times at UAE-Oman border crossings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
