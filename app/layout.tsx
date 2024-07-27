import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyBottomNavigation from "@/components/StickyBottomNavigation";
import Footer from "@/components/Footer";
import {About} from "@/components/About";
import { Features } from "@/components/Features";
import { NewFeaturesGrid } from "@/components/NewFeaturesGrid";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Sip",
  description: "Smart Sip ultimate water hydration bottle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <About/>
        <NewFeaturesGrid/>
        <Features/>
        <Footer/>
        <div className="flex justify-center items-center">
        <StickyBottomNavigation />
        </div>
      </body>
    </html>
  );
}
