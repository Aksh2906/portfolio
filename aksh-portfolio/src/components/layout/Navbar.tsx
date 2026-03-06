'use client'

// Navbar — 'use client' required only for ThemeToggle import
import { PERSONAL } from '@/lib/data'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_ITEMS = [
  { href: '#about',        label: 'About' },
  { href: '#academics',    label: 'Academics' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-[5%] h-14"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.2s, border-color 0.2s',
      }}
    >
      {/* Name + colored dot */}
      <span
        className="font-mono text-sm font-semibold flex items-center gap-1.5"
        style={{ color: 'var(--text-head)' }}
      >
        {PERSONAL.name}
        <span
          className="w-[7px] h-[7px] rounded-full flex-shrink-0"
          style={{ background: 'var(--blue)' }}
        />
      </span>

      {/* Links + toggle */}
      <div className="flex items-center gap-6">
        <ul className="hidden sm:flex items-center gap-6 list-none">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              {/* nav-link class handles hover via CSS — no JS handler needed */}
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
