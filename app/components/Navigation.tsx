'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Schema idag', icon: '📅' },
  { href: '/schema', label: 'Veckoschema', icon: '📋' },
  { href: '/messages', label: 'Meddelanden', icon: '💬' },
  { href: '/settings', label: 'Inställningar', icon: '⚙️' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 py-3 px-2 text-center text-sm font-medium transition-colors ${
              isActive
                ? 'text-emerald-600 bg-emerald-50 border-t-4 border-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="text-xs">{item.label}</div>
          </Link>
        );
      })}
    </nav>
  );
}
