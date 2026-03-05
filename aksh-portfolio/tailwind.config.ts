import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        bg:        '#0f1117',
        card:      '#161b27',
        hover:     '#1c2333',
        border:    '#252d3d',
        text:      '#d4dae8',
        muted:     '#6b7590',
        dim:       '#3d4561',
        accent:    '#4c9eff',
        'accent-dim': '#1a3a5c',
        green:     '#3ecf8e',
        'green-dim': '#14382a',
      },
      maxWidth: { content: '780px' },
    },
  },
  plugins: [],
}
export default config
