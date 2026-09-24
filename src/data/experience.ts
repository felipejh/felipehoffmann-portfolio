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
      'Sole mobile engineer across 3 React Native apps: maintaining and improving an existing app in daily use by 10+ internal staff, taking a new app through to app store release, and currently leading a ground-up rebuild of a third.',
      'Chose a Turborepo-based monorepo architecture for the ground-up rebuild, improving code sharing and build performance from day one.',
      'Eliminated recurring bug complaints by taking full ownership of app stability and resolving a long-standing backlog of issues, turning a reputation for instability into zero reported bugs.',
      'Trained and integrated a custom ML model for real-time vehicle damage recognition, classifying damage type instantly from the phone camera feed, using Vision Camera and Reanimated for a smooth, low-latency experience.',
      'Engineered a real-time vehicle test-drive scheduling flow using WebSockets, ensuring instant availability updates and eliminating booking conflicts.',
      'Restructured personal workflow around AI-agent orchestration (Claude Code, MCP integrations with Jira and Figma), dramatically speeding up feature implementation and enabling a single engineer to fully own architecture, delivery, and maintenance across 3 production apps.',
      'Managed the full deployment pipeline (GitHub Actions, Fastlane, Expo EAS) for both stores, including signing and alpha/beta testing groups.',
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
  {
    company: 'Freelance Technician',
    role: 'Independent PC Maintenance Technician',
    location: 'Caxias do Sul, Brazil (Self-employed)',
    dates: '2010 – 2017',
    bullets: [
      'Provided freelance computer hardware and software maintenance services locally, while completing my degree and beginning self-directed study in software development.',
    ],
  },
];

export const education = {
  degree: 'Bachelor’s in Software Analysis and Development',
  school: 'Unopar',
  dates: '2008 – 2010',
};
