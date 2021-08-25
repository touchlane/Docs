const lightCodeTheme = require('prism-react-renderer/themes/github');
const items = require('./config.js').items;
const presets = require('./config.js').presets;
const plugins = require('./config.js').plugins;


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Touchlane Internal',
  url: 'http://docs.touchlane.com',
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
      items: items,
    },
    footer: {
      style: 'light',
      copyright: `<div style="color:#d9d9d9";>Copyright © ${new Date().getFullYear()} Touchlane LLC. All rights reserved.</div>`,
    },
    prism: {
      theme: lightCodeTheme
    },
  },
  presets: presets,
  plugins: plugins,
};