export interface SkillGroup {
  label: string;
  items: string[];
  featured?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI-Assisted Development',
    featured: true,
    items: ['Claude Code', 'GitHub Copilot', 'AI Agent Orchestration', 'MCP', 'Jira/Figma integrations'],
  },
  {
    label: 'Mobile & Frontend',
    items: [
      'React Native',
      'Redux',
      'Context API',
      'Expo',
      'Vision Camera',
      'Reanimated',
      'RealmDB',
      'SQLite',
      'Swift',
      'Java',
      'PL/SQL',
    ],
  },
  {
    label: 'Product Engineering',
    items: [
      'In-App Purchases & Subscriptions',
      'Push Notifications',
      'Deep Linking',
      'Animations',
      'Gesture Handling',
      'Expo Router',
    ],
  },
  {
    label: 'Delivery & Release',
    items: ['GitHub Actions', 'Fastlane', 'Expo EAS', 'AppCenter', 'App Store & Google Play release management'],
  },
];
