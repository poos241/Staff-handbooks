// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  // TODO: Replace with your group's name
  title: 'Staff Handbooks',
  tagline: 'Staff handbooks for our Discord & VRChat little space community',
  favicon: 'img/favicon.svg',

  // TODO: Set these to your production values before deploying.
  // For GitHub Pages at https://<username>.github.io/<repo>/ :
  //   url: 'https://<username>.github.io',
  //   baseUrl: '/<repo>/',
  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'example',
  projectName: 'staff-handbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
