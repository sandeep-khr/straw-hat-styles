import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Nav from "@/components/navigation/nav";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("px-6 md:px-12 max-w-7xl mx-auto", `${geistSans.variable} ${geistMono.variable} antialiased`)}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
