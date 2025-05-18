const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Vibe Coding Blog',
  tagline: 'Programming through AI-assisted natural language',
  favicon: 'img/favicon.svg',
  url: 'https://govibecoding.com',
  baseUrl: '/',
  organizationName: 'govibecoding',
  projectName: 'govibecoding',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // SEO related metadata
  customFields: {
    keywords: 'vibe coding, AI-assisted programming, LLM-generated code, natural language programming, prompt engineering, conversational coding, AI programming, Andrej Karpathy, LLM coding, LLM self-reflection, AI coding tools, Large Language Models limitations, AI in software development, AI Coding Assistant',
    twitterCard: 'summary_large_image',
    twitterSite: '@govibecoding',
    ogType: 'website',
    ogImage: 'https://govibecoding.com/img/og-image.png',
    ogImageAlt: 'The Vibe Coding Blog - Programming with AI assistance',
    ogSiteName: 'The Vibe Coding Blog',
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
          if (existingPath.includes('/docs/') && !existingPath.includes('/tags')) {
            return [
              existingPath.replace('/docs/', '/documentation/'),
              existingPath.replace('/docs/', '/doc/'),
            ];
          }
          return undefined;
        },
        redirects: [
          // Add explicit redirects if needed
        ],
      },
    ],
    'docusaurus-plugin-image-zoom',
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
          onUntruncatedBlogPosts: 'ignore',
          feedOptions: {
            type: 'all',
            title: 'The Vibe Coding Blog',
            description: 'Learn about AI-assisted programming using natural language prompts to generate code with LLMs',
            copyright: `Copyright © ${new Date().getFullYear()} The Vibe Coding Blog.`,
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
      {name: 'keywords', content: 'vibe coding, AI-assisted programming, LLM-generated code, natural language programming, prompt engineering, conversational coding, AI programming, Andrej Karpathy, LLM coding, LLM self-reflection, AI coding tools, Large Language Models limitations, AI in software development, AI Coding Assistant'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@govibecoding'},
      {name: 'og:type', content: 'website'},
      {name: 'og:image', content: 'https://govibecoding.com/img/og-image.png'},
      {name: 'og:image:alt', content: 'The Vibe Coding Blog - Programming with AI assistance'},
      {name: 'og:site_name', content: 'The Vibe Coding Blog'},
      {name: 'description', content: 'Learn about vibe coding - AI-assisted programming using natural language prompts to generate code. Discover effective prompt engineering and AI development techniques.'},
    ],
    image: 'img/og-image.png',
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // Options from medium-zoom library
      }
    },
    navbar: {
      title: 'The Vibe Coding Blog',
      logo: {
        alt: 'The Vibe Coding Blog Logo',
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
        {
          to: '/tags',
          label: 'Topics',
          position: 'left',
        },
        {
          to: '/tags/vibe-coding',
          label: 'Vibe Coding',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'AI Coding',
          position: 'right',
          items: [
            {
              label: 'AI Coding Tools',
              to: '/tags/ai-coding-tools',
            },
            {
              label: 'LLM Limitations',
              to: '/tags/large-language-models-limitations',
            },
            {
              label: 'LLM Self-Reflection',
              to: '/tags/llm-self-reflection',
            },
          ],
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
            {
              label: 'Topics',
              to: '/tags',
            },
          ],
        },
        {
          title: 'Vibe Coding Topics',
          items: [
            {
              label: 'AI-Assisted Programming',
              to: '/tags/ai-assisted-programming',
            },
            {
              label: 'LLM Self-Reflection',
              to: '/tags/llm-self-reflection',
            },
            {
              label: 'LLM Limitations',
              to: '/tags/large-language-models-limitations',
            },
            {
              label: 'AI Coding Tools',
              to: '/tags/ai-coding-tools',
            },
            {
              label: 'AI in Software Development',
              to: '/tags/ai-in-software-development',
            }
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
      copyright: `Copyright © ${new Date().getFullYear()} The Vibe Coding Blog. Built with Docusaurus.`,
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