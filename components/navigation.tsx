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
                  "text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors",
                  pathname === href ? "text-black dark:text-white" : ""
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
