import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies DB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoritesProvider>
          <Header />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
