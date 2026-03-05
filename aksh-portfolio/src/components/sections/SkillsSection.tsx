// Skills — color-coded groups using CSS token vars
import { SKILLS } from '@/lib/data'

type GroupType = 'game' | 'ml' | 'tools'

const GROUP_META: Record<string, { type: GroupType; color: string; bg: string; border: string; skillBg: string }> = {
  'Game Dev': {
    type: 'game',
    color: 'var(--blue)',
    bg: 'var(--skill-game-bg)',
    border: 'var(--blue-border)',
    skillBg: 'var(--blue-bg)',
  },
  'ML / Vision': {
    type: 'ml',
    color: 'var(--purple)',
    bg: 'var(--skill-ml-bg)',
    border: 'var(--purple-border)',
    skillBg: 'var(--purple-bg)',
  },
  Tools: {
    type: 'tools',
    color: 'var(--green)',
    bg: 'var(--skill-tools-bg)',
    border: 'var(--green-border)',
    skillBg: 'var(--green-bg)',
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-content mx-auto px-6">
        <p className="section-label" style={{ ['--label-color' as string]: 'var(--green)' }}>
          Skills
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SKILLS.map(group => {
            const meta = GROUP_META[group.group] ?? GROUP_META['Tools']
            return (
              <div
                key={group.group}
                className="rounded-lg p-5"
                style={{
                  background: meta.bg,
                  border: `1px solid ${meta.border}`,
                }}
              >
                <p
                  className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase mb-4"
                  style={{ color: meta.color }}
                >
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[12px] px-2.5 py-1 rounded"
                      style={{
                        background: meta.skillBg,
                        border: `1px solid ${meta.border}`,
                        color: meta.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
