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
      label: 'Members',
      activeSidebarClassName: 'navbar__link--active',
      docsPluginId: 'members',
    },
    {
      type: 'doc',
      docId: 'main',
      position: 'left',
      label: 'Seniors',
      activeSidebarClassName: 'navbar__link--active',
      docsPluginId: 'seniors',
    },
    {
      type: 'doc',
      docId: 'main',
      position: 'left',
      label: 'Executives',
      activeSidebarClassName: 'navbar__link--active',
      docsPluginId: 'executives',
    },
    {
      href: 'http://api.touchlane.com/api/oauth/github/logout',
      label: 'Sign Out',
      position: 'right',
      target: '_self',
    },
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
        id: 'members',
        path: 'docs/Members',
        routeBasePath: 'members',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'seniors',
        path: 'docs/Seniors',
        routeBasePath: 'seniors',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'executives',
        path: 'docs/Executives',
        routeBasePath: 'executives',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
}