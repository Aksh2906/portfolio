// Achievements — warm orange card
import { ACHIEVEMENTS } from '@/lib/data'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-content mx-auto px-6">
        <p className="section-label" style={{ ['--label-color' as string]: 'var(--orange)' }}>
          Achievements
        </p>
        <div className="flex flex-col gap-4 max-w-lg">
          {ACHIEVEMENTS.map(a => {
            const isGreen = a.accent === 'green'
            const bg = isGreen ? 'var(--green-bg)' : 'var(--orange-bg)'
            const border = isGreen ? 'var(--green-border)' : 'var(--orange-border)'
            const color = isGreen ? 'var(--green)' : 'var(--orange)'
            return (
            <div
              key={a.title}
              className="flex items-start gap-4 rounded-lg px-6 py-5"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <span className="text-[22px] leading-none mt-0.5 flex-shrink-0" aria-hidden>🏆</span>
              <div>
                <p className="font-mono text-[13px] font-semibold mb-1" style={{ color }}>
                  {a.title}
                </p>
                <p className="text-[12px] mb-1" style={{ color: 'var(--muted)' }}>{a.event}</p>
                <p className="text-[13px] leading-[1.55]" style={{ color: 'var(--muted)' }}>{a.description}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
