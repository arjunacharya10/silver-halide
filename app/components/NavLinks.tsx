'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Memoir' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-7 text-sm text-zinc-300">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`transition-colors hover:text-white ${
            pathname === href
              ? 'border-b border-zinc-200 text-white pb-px'
              : ''
          }`}
        >
          {label}
        </Link>
      ))}
      <a
        href="https://www.linkedin.com/in/arjunacharya10/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors font-semibold"
        aria-label="LinkedIn"
      >
        in
      </a>
    </nav>
  );
}
