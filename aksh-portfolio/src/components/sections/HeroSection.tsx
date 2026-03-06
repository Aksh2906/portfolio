// Hero — name, colored role chips, tagline, link buttons
import { PERSONAL } from '@/lib/data'

export default function HeroSection() {
  return (
    <section id="hero" className="section-pad" style={{ paddingTop: '92px', paddingBottom: '72px' }}>
      <div className="max-w-content mx-auto px-6">

        {/* Eyebrow */}
        <p
          className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase mb-3"
          style={{ color: 'var(--blue)' }}
        >
          hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="font-mono font-semibold leading-none tracking-tight mb-4"
          style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            letterSpacing: '-0.02em',
            color: 'var(--text-head)',
          }}
        >
          {PERSONAL.name}
        </h1>

        {/* Role chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[12px] font-medium"
            style={{
              background: 'var(--purple-bg)',
              border: '1px solid var(--purple-border)',
              color: 'var(--purple)',
            }}
          >
            🎮 Game Developer
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[12px] font-medium"
            style={{
              background: 'var(--green-bg)',
              border: '1px solid var(--green-border)',
              color: 'var(--green)',
            }}
          >
            🧠 ML Enthusiast
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-[16px] leading-[1.65] max-w-[460px] mb-9"
          style={{ color: 'var(--text)' }}
        >
          {PERSONAL.tagline}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn-blue">
            ↗ GitHub
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn-purple">
            ↗ LinkedIn
          </a>
          <a href={PERSONAL.itchio} target="_blank" rel="noopener noreferrer" className="btn-base">
            ↗ Itch.io
          </a>
          <a href="#projects" className="btn-base">Projects</a>
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  )
}
