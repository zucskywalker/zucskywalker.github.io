import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "The most powerful real-time 3D creation tool - Unreal Engine",
  description: "Whatever your vision, bring it to life with Unreal Engine: the world's most advanced real-time 3D creation tool. Join our community of developers and get started today.",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://ext.same-assets.com/2555890890/174158608.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
