import Link from "next/link";
import { siteConfig } from "./config/site";

export default function Footer() {
  return (
    <footer className='h-16 flex items-center justify-between'>
      <ul className='flex gap-4'>
        {siteConfig.links.map((link) => (
          <li
            key={link.label}
            className='font-medium transition-colors text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          >
            <Link href={link.label} target='_blank' rel='noreferrer noopener'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
