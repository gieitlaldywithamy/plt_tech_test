import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLT Storefront",
  description: "PLT Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
          </div>
        </main>
      </body>
    </html>
  );
}
