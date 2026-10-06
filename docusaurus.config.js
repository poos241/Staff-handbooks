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
        indexBlog: false,
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Staff handbooks — internal use only.`,
      },
      prism: {
        theme: undefined,
        darkTheme: undefined,
      },
    }),
};

export default config;
