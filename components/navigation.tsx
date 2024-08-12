"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Tags", href: "/tags" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <header>
      <nav className='h-12 flex justify-between items-center'>
        <Link href='/'>🗣️</Link>
        <ul className='flex gap-5'>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label.toLowerCase()}>
              <Link
                href={href}
                className={cn(
                  "text-black/60 hover:text-black transition-colors",
                  pathname === href ? "text-black" : ""
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
