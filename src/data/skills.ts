export interface SkillGroup {
  label: string;
  items: string[];
  featured?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile Frameworks & State Management",
    featured: true,
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "Redux",
      "Context API",
      "TanStack Query",
    ],
  },
  {
    label: "Mobile Development",
    items: [
      "Vision Camera",
      "Reanimated",
      "Gesture Handling",
      "Animations",
      "In-App Purchases & Subscriptions",
      "Push Notifications",
      "Deep Linking",
    ],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Swift", "Java", "PL/SQL"],
  },
  {
    label: "Web & Backend",
    items: ["React", "Node.js/Fastify", "REST APIs", "WebSockets"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Supabase", "RealmDB", "SQLite"],
  },
  {
    label: "Testing",
    items: ["Jest", "Testing Library", "Cypress"],
  },
  {
    label: "AI-Assisted Development",
    items: [
      "Claude Code (daily)",
      "AI agent orchestration",
      "Model Context Protocol (MCP)",
      "Spec-driven workflow",
      "Jira and Figma integrations",
      "Image classification proof of concept (Create ML)",
    ],
  },
  {
    label: "Cloud/DevOps & Release Management",
    items: [
      "GitHub Actions",
      "Fastlane",
      "Expo EAS",
      "AppCenter",
      "App Store and Google Play release management",
    ],
  },
];
