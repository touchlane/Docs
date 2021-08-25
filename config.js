module.exports = 


module.exports = {
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
      target: '_self',
      href: 'https://api.touchlane.com/api/oauth/github/login',
      label: 'Sign In',
      position: 'right',
    }
  ],
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
  plugins: [],
}