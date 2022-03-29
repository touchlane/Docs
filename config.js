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
      type: 'doc',
      docId: 'main',
      position: 'left',
      label: 'Company',
      activeSidebarClassName: 'navbar__link--active',
      docsPluginId: 'company',
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'company',
        path: 'docs/Company',
        routeBasePath: 'company',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ]
}