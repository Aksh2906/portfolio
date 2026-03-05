// AcademicsSection — CGPA, entrance ranks, board results, with color-coded stats
import { ACADEMICS } from '@/lib/data'

const STAT_COLORS = [
  { color: 'var(--blue)' },
  { color: 'var(--purple)' },
  { color: 'var(--green)' },
  { color: 'var(--orange)' },
]

export default function AcademicsSection() {
  return (
    <section id="academics" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-content mx-auto px-6">
        <p className="section-label" style={{ ['--label-color' as string]: 'var(--purple)' }}>
          Academics
        </p>

        {/* Institution */}
        <p className="text-[15px] font-medium" style={{ color: 'var(--text-head)' }}>
          {ACADEMICS.institution}
        </p>
        <p className="text-[13px] mt-0.5 mb-5" style={{ color: 'var(--muted)' }}>
          {ACADEMICS.degree}
        </p>

        {/* CGPA block */}
        <div
          className="inline-flex items-baseline gap-2 rounded-lg px-5 py-3 mb-5"
          style={{
            background: 'var(--blue-bg)',
            border: '1px solid var(--blue-border)',
          }}
        >
          <span
            className="font-mono text-[26px] font-semibold leading-none"
            style={{ color: 'var(--blue)' }}
          >
            {ACADEMICS.cgpa}
          </span>
          <span className="font-mono text-[12px]" style={{ color: 'var(--blue)', opacity: 0.65 }}>
            CGPA
          </span>
          <span style={{ color: 'var(--blue)', opacity: 0.3 }}>·</span>
          <span className="text-[12px]" style={{ color: 'var(--muted)' }}>
            {ACADEMICS.cgpaSub}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {ACADEMICS.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-lg px-4 py-3.5 transition-colors duration-150"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <p
                className="font-mono text-[14px] font-semibold mb-1"
                style={{ color: STAT_COLORS[i % STAT_COLORS.length].color }}
              >
                {stat.value}
              </p>
              <p className="text-[11px]" style={{ color: 'var(--muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
