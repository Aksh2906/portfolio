// ─── Portfolio content ───────────────────────────────────────────────────────
// Edit this file to update any content shown on the site.

export const PERSONAL = {
  name: 'Aksh Aggarwal',
  role: 'Game Developer · ML Enthusiast',
  tagline: 'Game developer exploring AI, computer vision, and interactive systems.',
  email: 'akshaggarwal2909@gmail.com',
  github: 'https://github.com/Aksh2906',
  linkedin: 'https://www.linkedin.com/in/aksh-aggarwal-gd/',
  itchio: 'https://akshaggarwal.itch.io/',
  resume: '/resume.pdf',
}

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'Game Dev',
    items: ['Unity', 'C#', 'Game mechanics', 'Player movement', 'Multiplayer', 'Photon PUN'],
  },
  {
    group: 'Machine Learning',
    items: ['Python', 'PyTorch', 'CNN', 'ANN'],
  },
  {
    group: 'Computer Vision',
    items: ['MediaPipe', 'Computer vision'],
  },
  {
    group: 'Tools',
    items: ['Git', 'VS Code', 'Unity Editor'],
  }, 
]

export interface Project {
  title: string
  description: string
  whatIDid: string
  tech: string[]
  link?: string
  linkLabel?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Protocol Override',
    description:
      'A fast-paced game made for the Starcade Game Jam by Cosmology Club × Joystix DTU. It ended up winning the competition.',
    whatIDid: 'Focused on gameplay mechanics and rapid prototyping within the jam\'s time constraints.',
    tech: ['Unity', 'C#'],
    link: 'https://akshaggarwal.itch.io/protocol-override',
    linkLabel: 'itch.io',
  },
  {
    title: 'Remnant Reboot',
    description: 'A shooting game built during the BYOG Game Jam.',
    whatIDid:
      'My main contribution was implementing the player movement system and designing how the player interacts with the environment and obstacles.',
    tech: ['Unity', 'C#'],
    link: 'https://satvikkgupta.itch.io/remnant-reboot',
    linkLabel: 'itch.io',
  },
  {
    title: 'Multiplayer Monopoly',
    description: 'A 3D multiplayer Monopoly-style board game in Unity.',
    whatIDid:
      'Built turn management, dice mechanics, property buying, rent systems, and synchronized multiplayer gameplay using Photon PUN.',
    tech: ['Unity', 'C#', 'Photon PUN'],
  },
  {
    title: 'CricTwin',
    description:
      'A cricket simulation where a batsman can practice against real-time ball simulations of live matches.',
    whatIDid:
      'The player swings their phone like a bat using the gyroscope — phone orientation maps to bat movement and interacts with the ball trajectory.',
    tech: ['Unity', 'Mobile sensors', 'Gyroscope'],
  },
  {
    title: 'Gesture Recognition — ANN + MediaPipe',
    description:
      'A gesture recognition system that combines MediaPipe hand tracking with an ANN classifier.',
    whatIDid: 'The system recognizes hand gestures from a webcam feed and maps them to system commands.',
    tech: ['Python', 'MediaPipe', 'ANN'],
  },
  {
    title: 'Drone Control via CNN',
    description: 'A computer vision system that controls a drone using visual gesture inputs.',
    whatIDid:
      'A CNN model recognizes gestures or visual cues from a camera and translates them into drone control commands.',
    tech: ['Python', 'CNN', 'Computer vision'],
  },
  {
    title: 'DoJu',
    description: 'A small arcade game inspired by Doodle Jump. Built as a practice project.',
    whatIDid: 'Explored procedural platform spawning, simple physics, and endless gameplay loop design.',
    tech: ['Unity', 'C#'],
  },
]

export interface AcademicStat {
  label: string
  value: string
  sub?: string
}

export const ACADEMICS = {
  institution: 'Delhi Technological University',
  degree: 'B.Tech, Computer Science & Engineering',
  cgpa: '8.4',
  cgpaSub: 'after Semester 1',
  stats: [
    { label: 'JEE Advanced', value: 'AIR 7581' },
    { label: 'JEE Mains', value: 'AIR 6762' },
    { label: 'Class 12 Boards', value: '93.8%' },
    { label: 'Class 10 Boards', value: '93.5%' },
  ] as AcademicStat[],
}

export interface Achievement {
  title: string
  event: string
  description: string
  accent?: 'orange' | 'green'
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Starcade Game Jam — Winner',
    event: 'Cosmology Club × Joystix DTU',
    description: 'Won with Protocol Override, a fast-paced game built under jam conditions.',
    accent: 'green',
  },
]
