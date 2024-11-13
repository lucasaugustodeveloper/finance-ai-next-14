import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import NavBar from "./_components/navbar";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Financial App AI",
  description: "Dashboard for control your finance with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <div className="flex h-full flex-col overflow-hidden">
            <NavBar />
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
