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
  trailingSlash: false,

  // SEO related metadata
  customFields: {
    keywords: 'coding, programming, web development, javascript, tutorials',
    twitterCard: 'summary_large_image',
    twitterSite: '@govibecoding',
    ogType: 'website',
    ogImage: 'https://govibecoding.com/img/og-image.png',
    ogImageAlt: 'Go Vibe Coding',
    ogSiteName: 'Go Vibe Coding',
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3578e5',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/apple-touch-icon.png',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 2000,
        min: 640,
        steps: 4,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects: function(existingPath) {
          // Legacy URL redirects for SEO
          if (existingPath.includes('/docs/')) {
            return [
              existingPath.replace('/docs/', '/documentation/'),
              existingPath.replace('/docs/', '/doc/'),
            ];
          }
          return undefined;
        },
        redirects: [],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          feedOptions: {
            type: 'all',
            title: 'Go Vibe Coding Blog',
            description: 'Coding with Good Vibes - Latest articles',
            copyright: `Copyright © ${new Date().getFullYear()} Go Vibe Coding.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'coding, programming, web development, javascript, tutorials'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@govibecoding'},
      {name: 'og:type', content: 'website'},
      {name: 'og:image', content: 'https://govibecoding.com/img/og-image.png'},
      {name: 'og:image:alt', content: 'Go Vibe Coding'},
      {name: 'og:site_name', content: 'Go Vibe Coding'},
    ],
    image: 'img/og-image.png',
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  scripts: [
    {
      src: '/js/structured-data.js',
      async: true,
    },
  ],
};

module.exports = config;