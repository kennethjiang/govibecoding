const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Go Vibe Coding',
  tagline: 'Coding with Good Vibes',
  favicon: 'img/favicon.svg',
  url: 'https://govibecoding.com',
  baseUrl: '/',
  organizationName: 'govibecoding',
  projectName: 'govibecoding',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Go Vibe Coding',
      logo: {
        alt: 'Go Vibe Coding Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Blog',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/govibecoding',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Go Vibe Coding. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};

module.exports = config;