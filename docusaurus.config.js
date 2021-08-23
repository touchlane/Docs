const lightCodeTheme = require('prism-react-renderer/themes/github');

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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'Touchlane Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'main',
          position: 'left',
          label: 'Docs',
          activeSidebarClassName: 'navbar__link--active',
          docsPluginId: 'default',
        },
        {
          href: 'https://api.touchlane.com/api/oauth/github/login',
          label: 'Sign In',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `<div style="color:#d9d9d9";>Copyright © ${new Date().getFullYear()} Touchlane LLC. All rights reserved.</div>`,
    },
    prism: {
      theme: lightCodeTheme
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
};