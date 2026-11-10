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
    locales: [
      'en',
      'zh-Hans',
      'zh-Hant',
      'ar',
      'de',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt-BR',
      'ru',
    ],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      'zh-Hans': {
        label: '简体中文',
        htmlLang: 'zh-Hans',
      },
      'zh-Hant': {
        label: '繁體中文',
        htmlLang: 'zh-Hant',
      },
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar',
      },
      de: {
        label: 'Deutsch',
        htmlLang: 'de',
      },
      es: {
        label: 'Español',
        htmlLang: 'es',
      },
      fr: {
        label: 'Français',
        htmlLang: 'fr',
      },
      it: {
        label: 'Italiano',
        htmlLang: 'it',
      },
      ja: {
        label: '日本語',
        htmlLang: 'ja',
      },
      ko: {
        label: '한국어',
        htmlLang: 'ko',
      },
      pl: {
        label: 'Polski',
        htmlLang: 'pl',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
        htmlLang: 'pt-BR',
      },
      ru: {
        label: 'Русский',
        htmlLang: 'ru',
      },
    },
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
        language: ['en', 'zh'],
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
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://www.tedit.dev',
            label: 'Web Editor',
            position: 'right',
          },
          {
            href: 'https://www.patreon.com/join/BinaryConstruct',
            label: 'Sponsor',
            position: 'right',
            className: 'navbar__item--patreon',
          },
          {
            href: 'https://github.com/TEdit/Terraria-Map-Editor/releases/latest',
            'aria-label': 'Download',
            position: 'right',
            className: 'navbar__item--download',
          },
          {
            href: 'https://discord.gg/SrwYZU2GDY',
            'aria-label': 'Discord',
            position: 'right',
            className: 'navbar__item--discord',
          },
          {
            href: 'https://github.com/TEdit/Terraria-Map-Editor',
            'aria-label': 'GitHub',
            position: 'right',
            className: 'navbar__item--github',
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
