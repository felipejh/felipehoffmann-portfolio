export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Integrated Automotive Experience',
    role: 'Mobile Software Developer',
    location: 'Mississauga, ON, Canada',
    dates: 'Nov 2023 – Current',
    bullets: [
      'Sole mobile engineer for 3 production React Native apps used daily by 10+ staff; eliminated the recurring bug backlog down to zero reported bugs.',
      'Built camera-based vehicle damage documentation using Vision Camera and Reanimated.',
      'Built real-time test-drive scheduling via WebSockets.',
      'Restructured the team workflow around AI-agent orchestration (Claude Code, custom MCP servers), cutting multi-day features down to hours.',
      'Owns the full deployment pipeline: GitHub Actions, Fastlane, Expo EAS.',
    ],
  },
  {
    company: 'Stone Payments',
    role: 'Software Engineer III',
    location: 'Rio de Janeiro, Brazil (Remote)',
    dates: 'May 2021 – Nov 2023',
    bullets: [
      'Built and maintained the web frontend for a fintech back-office platform used by 2,000+ customers, on a 20-engineer team.',
      'Built access recovery / identity verification flows that reduced the KYC review queue.',
      'Enforced quality via Cypress unit and end-to-end testing.',
    ],
  },
  {
    company: 'NL Tech',
    role: 'Full Stack Developer',
    location: 'Caxias do Sul, Brazil',
    dates: 'Apr 2018 – May 2021',
    bullets: [
      'Proposed and delivered the migration of push notifications from a hybrid Angular app to React Native, serving 5,000+ users.',
      'Reduced purchase-order approval turnaround time.',
      'Delivered mobile (Java) and backend (PL/SQL) ERP features.',
    ],
  },
];

export const education = {
  degree: 'Bachelor’s in Software Analysis and Development',
  school: 'Unopar',
  dates: '2008 – 2010',
};
