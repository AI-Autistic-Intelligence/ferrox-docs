// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ferroxFrontSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'overview',
        'overview/quickstart',
        'architectures/architecture',
      ],
    },
    {
      type: 'category',
      label: '🎨 Design System & Theming',
      collapsed: false,
      items: [
        'design-system/tokens',
        'design-system/theme-studio',
      ],
    },
    {
      type: 'category',
      label: '🧩 UI Component Library',
      collapsed: false,
      items: [
        'components',
        'components/buttons',
        'components/form-controls',
        'components/surfaces',
        'components/overlays',
        'components/icons',
      ],
    },
    {
      type: 'category',
      label: '📊 Data Visualization & Charts',
      collapsed: false,
      items: [
        'charts',
        'charts/chart-studio',
      ],
    },
    {
      type: 'category',
      label: '⚡ Enterprise Engines',
      collapsed: false,
      items: [
        'datagrid',
        'trading-desk',
        'transports/ws',
        'security/security',
      ],
    },
    {
      type: 'category',
      label: '🏛️ Core Framework Architecture',
      collapsed: false,
      items: [
        'fundamentals/core',
        'fundamentals/reactivity',
        'fundamentals/macros',
        'fundamentals/routing',
        'fundamentals/templates',
      ],
    },
  ],
};

export default sidebars;
