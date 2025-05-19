"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Popular", href: "/popular" },
  { name: "Top Rated", href: "/top-rated" },
  { name: "Now Playing", href: "/now-playing" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Movies DB
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  pathname === item.href ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/favorites"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                pathname === "/favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              Favorites
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
