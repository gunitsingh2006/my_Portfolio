export const profile = {
  name: 'Gunit Singh Duggal',
  shortName: 'Gunit',
  role: 'Full-stack developer · CSE student',
  location: 'Gurugram, India',
  email: 'gunitsingh.duggal@gmail.com',
  phone: '+91 8743004909',
  github: 'https://github.com/gunitsingh2006',
  linkedin: 'https://linkedin.com/in/gunit-singh-duggal',
  codolio: 'https://codolio.com/profile/EtHvTrTcjbnn',
  college: 'Guru Tegh Bahadur Institute of Technology',
}

export const projects = [
  {
    number: '01', title: 'ChatApp', label: 'Full-stack · Real-time',
    description: 'A full-stack communication app with secure sign-up, JWT authentication, protected routes, profiles, friend requests, and real-time chat and video calling.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stream'],
    href: 'https://github.com/gunitsingh2006/ChatApp-fullstack', accent: 'mint',
  },
  {
    number: '02', title: 'See Together', label: 'Realtime · WebRTC',
    description: 'A shared viewing experience built around rooms, so people can watch and browse content together from different places.',
    stack: ['React', 'TypeScript', 'WebRTC'],
    href: 'https://github.com/gunitsingh2006/see-together', accent: 'blue',
  },
  {
    number: '03', title: 'Movie Hub', label: 'Frontend · React',
    description: 'A modern movie discovery app with detail pages, navigation, and a favorites flow powered by shared React state.',
    stack: ['React', 'Vite', 'React Router'],
    href: 'https://github.com/gunitsingh2006/Movie-Hub', accent: 'peach',
  },
  {
    number: '04', title: 'CodeGamb', label: 'Competitive coding · Multiplayer',
    description: 'A multiplayer coding platform where users compete in real time to solve algorithm challenges head-to-head.',
    stack: ['TypeScript', 'React', 'Realtime'],
    href: 'https://github.com/gunitsingh2006/CodeGamb', accent: 'lilac',
  },
  {
    number: '05', title: 'Genix GTBIT', label: 'Community · Web',
    description: 'A website for GENIX, GTBIT’s technical society. Built with the community and focused on making its work easy to discover.',
    stack: ['TypeScript', 'Web', 'Community'],
    href: 'https://github.com/gunitsingh2006/genixgtbit', accent: 'blue',
  },
  {
    number: '06', title: 'REDIS Docker', label: 'Backend · DevOps',
    description: 'A hands-on repository exploring Redis and Docker workflows for backend development.',
    stack: ['Redis', 'Docker', 'JavaScript'],
    href: 'https://github.com/gunitsingh2006/REDIS-docker', accent: 'mint',
  },
]

export const skillGroups = [
  { title: 'Languages', note: 'The building blocks', skills: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'TypeScript', 'HTML', 'CSS', 'SQL'] },
  { title: 'Frontend', note: 'Interfaces & interaction', skills: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Figma'] },
  { title: 'Backend', note: 'APIs & real-time systems', skills: ['Node.js', 'Express.js', 'FastAPI', 'Socket.io', 'REST APIs'] },
  { title: 'Databases', note: 'Data & persistence', skills: ['MongoDB', 'MySQL', 'SQL', 'NoSQL', 'Redis'] },
  { title: 'Tools', note: 'Tools I work with', skills: ['VS Code', 'Cursor AI', 'Postman', 'Docker', 'Claude', 'ChatGPT'] },
  { title: 'Core concepts', note: 'Computer science foundations', skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS', 'System design fundamentals'] },
]

export const experience = [
  { date: '2025 — Present', org: 'GENIX · GTBIT', title: 'Technical Society President', body: 'Leading a campus technical community and helping organize hands-on tech events.' },
  { date: 'Oct 2024 — Present', org: 'Google Developer Group · GTBIT', title: 'Web Developer', body: 'Contributing to the GDG web team and collaborating on developer community projects.' },
  { date: 'Open for your next chapter', org: 'Internships', title: 'Experience to add', body: 'This space is ready for an internship, research, or industry role as your journey grows.', upcoming: true },
]
