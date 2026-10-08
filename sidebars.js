/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbooks: [
    {
      type: 'category',
      label: 'General Handbook',
      link: { type: 'doc', id: 'general-handbook/index' },
      items: [
        'general-handbook/code-of-conduct',
        'general-handbook/roles-overview',
        'general-handbook/communication',
      ],
    },
    {
      type: 'category',
      label: 'Server Staff Handbook',
      link: { type: 'doc', id: 'server-staff/index' },
      items: [
        'server-staff/moderator-duties',
        'server-staff/trial-mod-program',
        'server-staff/moderation-procedures',
      ],
    },
    {
      type: 'category',
      label: 'Moderation Handbook',
      link: { type: 'doc', id: 'moderation/index' },
      items: [
        'moderation/rules-and-guidelines',
        'moderation/mod-commands',
        'moderation/procedures',
        'moderation/informing-members',
        'moderation/quick-reference',
        'moderation/onboarding-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Event Staff Handbook',
      link: { type: 'doc', id: 'event-staff/index' },
      items: [
        'event-staff/host-guide',
        'event-staff/security-guide',
      ],
    },
    {
      type: 'category',
      label: 'Server IT Handbook',
      link: { type: 'doc', id: 'it/index' },
      items: [
        'it/bots-and-tools',
        'it/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
