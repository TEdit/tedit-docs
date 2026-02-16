// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TEdit Documentation',
  tagline: 'Terraria Map Editor - Official Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://docs.tedit.dev/',
  baseUrl: '/',

  organizationName: 'TEdit',
  projectName: 'tedit-docs',
  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

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
          editUrl: 'https://github.com/TEdit/tedit-docs/tree/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'TEdit 5',
              path: '/',
            },
            '4': {
              label: 'TEdit 4',
              banner: 'unmaintained',
            },
          },
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
      image: 'img/te5-logo-hero.png',
      navbar: {
        title: 'TEdit',
        logo: {
          alt: 'TEdit Logo',
          src: 'img/favicon-96x96.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            href: 'https://github.com/TEdit/Terraria-Map-Editor/releases/latest',
            label: 'Download',
            position: 'right',
          },
          {
            href: 'https://www.tedit.dev',
            label: 'Web Editor',
            position: 'right',
          },
          {
            href: 'https://discord.gg/SrwYZU2GDY',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/TEdit/Terraria-Map-Editor',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'Install Requirements',
                to: '/install-requirements',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/SrwYZU2GDY',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TEdit/Terraria-Map-Editor',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Download TEdit',
                href: 'https://github.com/TEdit/Terraria-Map-Editor/releases',
              },
              {
                label: 'Report Issues',
                href: 'https://github.com/TEdit/Terraria-Map-Editor/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TEdit. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['lua', 'javascript'],
      },
    }),
};

export default config;
