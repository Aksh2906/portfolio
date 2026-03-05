// ContactSection — server component, hover handled by .contact-link-row CSS class
import { PERSONAL } from '@/lib/data'

const LINKS = [
  { label: 'email',    value: PERSONAL.email,             href: `mailto:${PERSONAL.email}` },
  { label: 'github',   value: 'github.com/Aksh2906',      href: PERSONAL.github },
  { label: 'linkedin', value: 'aksh-aggarwal-gd',         href: PERSONAL.linkedin },
  { label: 'itch.io',  value: 'akshaggarwal.itch.io',     href: PERSONAL.itchio },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="max-w-content mx-auto px-6">
        <p className="section-label" style={{ ['--label-color' as string]: 'var(--pink)' }}>
          Contact
        </p>
        <div className="flex flex-col gap-2 max-w-sm">
          {LINKS.map(link => (
            // .contact-link-row handles hover entirely in CSS
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-link-row"
            >
              <span className="font-mono text-[12px]" style={{ color: 'var(--muted)' }}>
                {link.label}
              </span>
              <span className="text-[13px]" style={{ color: 'var(--blue)' }}>
                {link.value}{' '}
                <span style={{ color: 'var(--dim)' }}>↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
