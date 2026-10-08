// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  // TODO: Replace with your group's name
  title: 'Staff Handbooks',
  tagline: 'Staff handbooks for our Discord & VRChat little space community',
  favicon: 'img/favicon.svg',

  // GitHub Pages deployment
  url: 'https://poos241.github.io',
  baseUrl: '/Staff-handbooks/',

  organizationName: 'poos241',
  projectName: 'Staff-handbooks',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/poos241/Staff-handbooks/edit/main/',
        },
        blog: {
          routeBasePath: 'updates',
          blogTitle: 'Handbook Updates',
          blogDescription: 'Changelog for the staff handbooks — what changed and when.',
          postsPerPage: 10,
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Dismissible banner for urgent notices. Edit `content` below to change
      // the message, or change `id` to make a new message reappear for everyone.
      // To hide the banner entirely, delete this whole announcementBar block.
      announcementBar: {
        id: 'handbook-updates-notice',
        content:
          'New here? Check the <a href="/Staff-handbooks/updates/">Handbook Updates</a> page to see what changed recently.',
        backgroundColor: '#a259f7',
        textColor: '#ffffff',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // TODO: Replace with your group's name
        title: 'Staff Handbooks',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'handbooks',
            position: 'left',
            label: 'Handbooks',
          },
          { to: '/updates', label: 'Updates', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contribute',
            items: [
              {
                label: 'Suggest a change',
                href: 'https://github.com/poos241/Staff-handbooks/issues/new?template=suggest-change.yml',
              },
              {
                label: 'GitHub repository',
                href: 'https://github.com/poos241/Staff-handbooks',
              },
            ],
          },
        ],
        copyright: `Staff handbooks — internal use only.`,
      },
      prism: {
        theme: undefined,
        darkTheme: undefined,
      },
    }),
};

export default config;
