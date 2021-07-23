/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Touchlane Internal',
  url: 'http://d4jj4yp5m67kp.cloudfront.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Touchlane', 
  projectName: 'Docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Touchlane Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Welcome',
          position: 'left',
          label: 'Docs',
          activeSidebarClassName: 'navbar__link--active',
          docsPluginId: 'default',
        },
        {
          type: 'doc',
          docId: 'Overview',
          position: 'left',
          label: 'Interviews',
          activeSidebarClassName: 'navbar__link--active',
          docsPluginId: 'interviews',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Touchlane LLC. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs/Docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interviews',
        path: 'docs/Interviews',
        routeBasePath: 'interviews',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],
};const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Touchlane Internal',
  url: 'http://d4jj4yp5m67kp.cloudfront.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Touchlane', 
  projectName: 'Docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Touchlane Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Welcome',
          position: 'left',
          label: 'Docs',
          activeSidebarClassName: 'navbar__link--active',
          docsPluginId: 'default',
        },
        {
          type: 'doc',
          docId: 'Overview',
          position: 'left',
          label: 'Interviews',
          activeSidebarClassName: 'navbar__link--active',
          docsPluginId: 'interviews',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Touchlane LLC. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs/Docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interviews',
        path: 'docs/Interviews',
        routeBasePath: 'interviews',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],
};