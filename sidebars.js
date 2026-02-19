/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'TEdit 5 Documentation',
    },
    {
      type: 'doc',
      id: 'install-requirements',
      label: 'Install Requirements',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Interface',
      items: [
        'interface/overview',
        'interface/toolbar',
        'interface/action-bar',
        'interface/paint-mode',
        'interface/brush-settings',
        'interface/status-bar',
      ],
    },
    {
      type: 'category',
      label: 'Sidebar Panels',
      items: [
        'sidebar-panels/overview',
        'sidebar-panels/world-properties',
        'sidebar-panels/special-tiles',
        'sidebar-panels/sprites',
        'sidebar-panels/clipboard',
        'sidebar-panels/npcs',
        'sidebar-panels/world-analysis',
        'sidebar-panels/bestiary',
        'sidebar-panels/banners',
        'sidebar-panels/tile-entity-debug',
        'sidebar-panels/creative-powers',
        'sidebar-panels/filter',
        'sidebar-panels/find',
        'sidebar-panels/scripting',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/settings',
        'configuration/keybindings',
        'configuration/saves-and-backups',
        'configuration/localization',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/scripting-guide',
        'advanced/api-reference',
        'advanced/image-schematics',
        'advanced/auto-update',
        'advanced/troubleshooting',
        'advanced/corrupted-world-recovery',
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        'migration/upgrading-from-tedit4',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/developing',
      ],
    },
  ],
};

export default sidebars;
