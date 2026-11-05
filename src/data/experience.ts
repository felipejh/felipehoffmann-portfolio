export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Integrated Automotive Experience",
    role: "Mobile Developer",
    location: "Remote, Brazil and Mississauga, ON, Canada (hybrid)",
    dates: "Nov 2023 – Current",
    bullets: [
      "Sole mobile engineer across three React Native apps: maintained one used daily by internal staff, took a second through app-store release, and now lead a ground-up rebuild of a third in a Turborepo monorepo.",
      "Shipped Node.js backend features on a production app, independently, to relieve pressure on the backend engineer.",
      "Wrote a small native module in Kotlin and Swift, exposed to React Native as a TurboModule, to detect TestFlight or internal distribution.",
      "Built in-app purchases and subscriptions with server-side receipt validation, and got the legacy app approved after repeated App Store rejections.",
      "Shipped about 30 releases between September 2024 and December 2025 with GitHub Actions, Fastlane and Expo EAS, and cleared the legacy app bug backlog.",
      "Built a WebSocket-based test-drive scheduling flow with real-time availability that prevents booking conflicts.",
      "On my own initiative, added animations (smooth opening and closing of cards, transitions) with Reanimated to improve the feel of the apps.",
      "Work every day with an AI-assisted workflow: Claude Code with Jira and Figma through MCP, specs first, and tests and type checks to verify the output.",
    ],
  },
  {
    company: "Stone Payments (STNE – NASDAQ)",
    role: "Software Engineer III",
    location: "Rio de Janeiro, Brazil (Remote)",
    dates: "May 2021 – Nov 2023",
    bullets: [
      "Built and maintained the web frontend for a fintech back-office platform used daily by 2,000+ customers, working with a 20-engineer team.",
      "Served as technical lead for a team of three for three months, providing mentorship and guiding technical decisions.",
      "Built account-recovery and identity-verification features, helping reduce the KYC review queue.",
      "Established unit and end-to-end testing with Cypress, improving confidence in platform changes.",
    ],
  },
  {
    company: "NL Informática",
    role: "Full Stack Developer",
    location: "Caxias do Sul, Brazil",
    dates: "Apr 2018 – May 2021",
    bullets: [
      "Independently proposed, designed and delivered the migration of a hybrid Angular web app to React Native, reaching 5,000+ users.",
      "Introduced push notifications for purchase-order approvals, alerting users to status changes and reducing reliance on manual checks to track turnaround.",
      "Delivered Java mobile features and PL/SQL backend functionality for ERP systems, and mentored trainee and junior developers.",
    ],
  },
  {
    company: "Focco Sistemas de Gestão S.A.",
    role: "Full Stack Developer",
    location: "Caxias do Sul, Brazil",
    dates: "Mar 2017 – Nov 2017",
    bullets: [],
  },
  {
    company: "Independent PC Maintenance Technician",
    role: "Freelance Technician",
    location: "Caxias do Sul, Brazil (Self-employed)",
    dates: "2010 – 2017",
    bullets: [],
  },
];

export const education = {
  degree: "Technologist Degree (Tecnólogo), Systems Analysis and Development",
  school: "Unopar",
  dates: "2008 – 2010",
};
