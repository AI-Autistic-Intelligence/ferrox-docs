import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs/ferrox-front',
    component: ComponentCreator('/docs/ferrox-front', '03d'),
    routes: [
      {
        path: '/docs/ferrox-front',
        component: ComponentCreator('/docs/ferrox-front', '8de'),
        routes: [
          {
            path: '/docs/ferrox-front',
            component: ComponentCreator('/docs/ferrox-front', '513'),
            routes: [
              {
                path: '/docs/ferrox-front/architectures/architecture',
                component: ComponentCreator('/docs/ferrox-front/architectures/architecture', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/fundamentals/core',
                component: ComponentCreator('/docs/ferrox-front/fundamentals/core', '947'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/fundamentals/macros',
                component: ComponentCreator('/docs/ferrox-front/fundamentals/macros', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/fundamentals/reactivity',
                component: ComponentCreator('/docs/ferrox-front/fundamentals/reactivity', 'c18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/fundamentals/routing',
                component: ComponentCreator('/docs/ferrox-front/fundamentals/routing', 'cc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/fundamentals/templates',
                component: ComponentCreator('/docs/ferrox-front/fundamentals/templates', '42d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/overview',
                component: ComponentCreator('/docs/ferrox-front/overview', '8a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/overview/intro',
                component: ComponentCreator('/docs/ferrox-front/overview/intro', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/overview/quickstart',
                component: ComponentCreator('/docs/ferrox-front/overview/quickstart', '41d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/security',
                component: ComponentCreator('/docs/ferrox-front/security', 'c39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/transports/ws',
                component: ComponentCreator('/docs/ferrox-front/transports/ws', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/ui/components',
                component: ComponentCreator('/docs/ferrox-front/ui/components', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/ui/ui-components',
                component: ComponentCreator('/docs/ferrox-front/ui/ui-components', '14a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ferrox-node',
    component: ComponentCreator('/docs/ferrox-node', '208'),
    routes: [
      {
        path: '/docs/ferrox-node',
        component: ComponentCreator('/docs/ferrox-node', '8f1'),
        routes: [
          {
            path: '/docs/ferrox-node',
            component: ComponentCreator('/docs/ferrox-node', 'e0b'),
            routes: [
              {
                path: '/docs/ferrox-node/abstractions/guards',
                component: ComponentCreator('/docs/ferrox-node/abstractions/guards', '104'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/abstractions/interfaces',
                component: ComponentCreator('/docs/ferrox-node/abstractions/interfaces', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/architectures/cqrs',
                component: ComponentCreator('/docs/ferrox-node/architectures/cqrs', '887'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/architectures/jobs',
                component: ComponentCreator('/docs/ferrox-node/architectures/jobs', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/architectures/onion',
                component: ComponentCreator('/docs/ferrox-node/architectures/onion', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/fundamentals/config',
                component: ComponentCreator('/docs/ferrox-node/fundamentals/config', '3c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/fundamentals/core',
                component: ComponentCreator('/docs/ferrox-node/fundamentals/core', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/fundamentals/cqrs',
                component: ComponentCreator('/docs/ferrox-node/fundamentals/cqrs', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/fundamentals/kernel',
                component: ComponentCreator('/docs/ferrox-node/fundamentals/kernel', '73b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/fundamentals/routing',
                component: ComponentCreator('/docs/ferrox-node/fundamentals/routing', '662'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/integrations/i18n',
                component: ComponentCreator('/docs/ferrox-node/integrations/i18n', 'e9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/auth',
                component: ComponentCreator('/docs/ferrox-node/modules/auth', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/aws-helpers',
                component: ComponentCreator('/docs/ferrox-node/modules/aws-helpers', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/common',
                component: ComponentCreator('/docs/ferrox-node/modules/common', '128'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/config',
                component: ComponentCreator('/docs/ferrox-node/modules/config', 'da2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/cqrs',
                component: ComponentCreator('/docs/ferrox-node/modules/cqrs', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/datagrid',
                component: ComponentCreator('/docs/ferrox-node/modules/datagrid', 'ca0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/errors',
                component: ComponentCreator('/docs/ferrox-node/modules/errors', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/event-manager',
                component: ComponentCreator('/docs/ferrox-node/modules/event-manager', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/guards',
                component: ComponentCreator('/docs/ferrox-node/modules/guards', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/i18n',
                component: ComponentCreator('/docs/ferrox-node/modules/i18n', 'c16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/interfaces',
                component: ComponentCreator('/docs/ferrox-node/modules/interfaces', '08f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/jobs',
                component: ComponentCreator('/docs/ferrox-node/modules/jobs', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/kernel',
                component: ComponentCreator('/docs/ferrox-node/modules/kernel', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/logger',
                component: ComponentCreator('/docs/ferrox-node/modules/logger', '600'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/resilience',
                component: ComponentCreator('/docs/ferrox-node/modules/resilience', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/security',
                component: ComponentCreator('/docs/ferrox-node/modules/security', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/selftest',
                component: ComponentCreator('/docs/ferrox-node/modules/selftest', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/storage',
                component: ComponentCreator('/docs/ferrox-node/modules/storage', '218'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/tracing',
                component: ComponentCreator('/docs/ferrox-node/modules/tracing', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/transports',
                component: ComponentCreator('/docs/ferrox-node/modules/transports', 'eb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/types',
                component: ComponentCreator('/docs/ferrox-node/modules/types', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/types-extends',
                component: ComponentCreator('/docs/ferrox-node/modules/types-extends', 'e1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/modules/utils',
                component: ComponentCreator('/docs/ferrox-node/modules/utils', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/observability/tracing',
                component: ComponentCreator('/docs/ferrox-node/observability/tracing', '13a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/overview',
                component: ComponentCreator('/docs/ferrox-node/overview', '300'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/overview/dummy-app-guide',
                component: ComponentCreator('/docs/ferrox-node/overview/dummy-app-guide', 'fc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/overview/intro',
                component: ComponentCreator('/docs/ferrox-node/overview/intro', '4d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/overview/quickstart',
                component: ComponentCreator('/docs/ferrox-node/overview/quickstart', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/security',
                component: ComponentCreator('/docs/ferrox-node/security', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/security/auth',
                component: ComponentCreator('/docs/ferrox-node/security/auth', 'dec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/security/paseto',
                component: ComponentCreator('/docs/ferrox-node/security/paseto', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/security/resilience',
                component: ComponentCreator('/docs/ferrox-node/security/resilience', 'e83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/security/selftest',
                component: ComponentCreator('/docs/ferrox-node/security/selftest', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/transports/datagrid',
                component: ComponentCreator('/docs/ferrox-node/transports/datagrid', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/transports/storage',
                component: ComponentCreator('/docs/ferrox-node/transports/storage', '3aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/transports/transports',
                component: ComponentCreator('/docs/ferrox-node/transports/transports', '8f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ferrox-php',
    component: ComponentCreator('/docs/ferrox-php', '731'),
    routes: [
      {
        path: '/docs/ferrox-php',
        component: ComponentCreator('/docs/ferrox-php', 'b95'),
        routes: [
          {
            path: '/docs/ferrox-php',
            component: ComponentCreator('/docs/ferrox-php', 'd4b'),
            routes: [
              {
                path: '/docs/ferrox-php/abstractions/crud-generator',
                component: ComponentCreator('/docs/ferrox-php/abstractions/crud-generator', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/abstractions/result-monad',
                component: ComponentCreator('/docs/ferrox-php/abstractions/result-monad', '450'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/abstractions/validation-pipes',
                component: ComponentCreator('/docs/ferrox-php/abstractions/validation-pipes', 'a9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/api-reference',
                component: ComponentCreator('/docs/ferrox-php/api-reference', '60e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/architectures/cqrs-sagas',
                component: ComponentCreator('/docs/ferrox-php/architectures/cqrs-sagas', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/architectures/event-driven',
                component: ComponentCreator('/docs/ferrox-php/architectures/event-driven', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/architectures/outbox-pattern',
                component: ComponentCreator('/docs/ferrox-php/architectures/outbox-pattern', '355'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/databases/repository-pattern',
                component: ComponentCreator('/docs/ferrox-php/databases/repository-pattern', '497'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/databases/unit-of-work',
                component: ComponentCreator('/docs/ferrox-php/databases/unit-of-work', '85d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/fundamentals/configuration',
                component: ComponentCreator('/docs/ferrox-php/fundamentals/configuration', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/fundamentals/dependency-injection',
                component: ComponentCreator('/docs/ferrox-php/fundamentals/dependency-injection', '93a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/fundamentals/error-handling',
                component: ComponentCreator('/docs/ferrox-php/fundamentals/error-handling', '877'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/fundamentals/pipeline-middlewares',
                component: ComponentCreator('/docs/ferrox-php/fundamentals/pipeline-middlewares', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/observability/logging',
                component: ComponentCreator('/docs/ferrox-php/observability/logging', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/observability/metrics',
                component: ComponentCreator('/docs/ferrox-php/observability/metrics', 'fb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/observability/tracing',
                component: ComponentCreator('/docs/ferrox-php/observability/tracing', 'bab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/overview',
                component: ComponentCreator('/docs/ferrox-php/overview', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/overview/introduction',
                component: ComponentCreator('/docs/ferrox-php/overview/introduction', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/overview/lifecycle',
                component: ComponentCreator('/docs/ferrox-php/overview/lifecycle', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/auth/core',
                component: ComponentCreator('/docs/ferrox-php/packages/auth/core', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/auth/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/auth/overview', '466'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/broadcasting/adapters',
                component: ComponentCreator('/docs/ferrox-php/packages/broadcasting/adapters', 'f07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/broadcasting/core',
                component: ComponentCreator('/docs/ferrox-php/packages/broadcasting/core', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/broadcasting/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/broadcasting/overview', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/cli/core',
                component: ComponentCreator('/docs/ferrox-php/packages/cli/core', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/cli/generators',
                component: ComponentCreator('/docs/ferrox-php/packages/cli/generators', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/cli/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/cli/overview', 'c60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/config/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/config/overview', '7d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/app',
                component: ComponentCreator('/docs/ferrox-php/packages/core/app', 'b8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/container',
                component: ComponentCreator('/docs/ferrox-php/packages/core/container', '385'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/decorators',
                component: ComponentCreator('/docs/ferrox-php/packages/core/decorators', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/errors',
                component: ComponentCreator('/docs/ferrox-php/packages/core/errors', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/http',
                component: ComponentCreator('/docs/ferrox-php/packages/core/http', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/core/overview', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/core/security',
                component: ComponentCreator('/docs/ferrox-php/packages/core/security', '05e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/cqrs/core',
                component: ComponentCreator('/docs/ferrox-php/packages/cqrs/core', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/cqrs/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/cqrs/overview', '81c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/crud-gen/attributes',
                component: ComponentCreator('/docs/ferrox-php/packages/crud-gen/attributes', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/crud-gen/core',
                component: ComponentCreator('/docs/ferrox-php/packages/crud-gen/core', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/crud-gen/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/crud-gen/overview', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/data/concurrency',
                component: ComponentCreator('/docs/ferrox-php/packages/data/concurrency', 'c9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/data/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/data/overview', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/database-core/connection',
                component: ComponentCreator('/docs/ferrox-php/packages/database-core/connection', '9e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/database-core/core',
                component: ComponentCreator('/docs/ferrox-php/packages/database-core/core', '9a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/database-core/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/database-core/overview', '6ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/events/core',
                component: ComponentCreator('/docs/ferrox-php/packages/events/core', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/events/outbox',
                component: ComponentCreator('/docs/ferrox-php/packages/events/outbox', 'e6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/events/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/events/overview', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/front/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/front/overview', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/gateway/core',
                component: ComponentCreator('/docs/ferrox-php/packages/gateway/core', 'c75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/gateway/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/gateway/overview', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/iac/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/iac/overview', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/mailer/adapters',
                component: ComponentCreator('/docs/ferrox-php/packages/mailer/adapters', '4b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/mailer/core',
                component: ComponentCreator('/docs/ferrox-php/packages/mailer/core', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/mailer/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/mailer/overview', 'bea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/observability/metrics',
                component: ComponentCreator('/docs/ferrox-php/packages/observability/metrics', '567'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/observability/middleware',
                component: ComponentCreator('/docs/ferrox-php/packages/observability/middleware', 'd83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/observability/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/observability/overview', '29a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/queue/adapters',
                component: ComponentCreator('/docs/ferrox-php/packages/queue/adapters', '408'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/queue/core',
                component: ComponentCreator('/docs/ferrox-php/packages/queue/core', 'a88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/queue/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/queue/overview', 'a6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/rate-limiter/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/rate-limiter/overview', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/rpc/adapters',
                component: ComponentCreator('/docs/ferrox-php/packages/rpc/adapters', '4d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/rpc/core',
                component: ComponentCreator('/docs/ferrox-php/packages/rpc/core', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/rpc/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/rpc/overview', '3e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/scheduler/core',
                component: ComponentCreator('/docs/ferrox-php/packages/scheduler/core', '21b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/scheduler/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/scheduler/overview', 'c69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/security/auth',
                component: ComponentCreator('/docs/ferrox-php/packages/security/auth', '1c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/security/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/security/overview', 'd7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/security/sentinel',
                component: ComponentCreator('/docs/ferrox-php/packages/security/sentinel', 'd6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/storage/adapters',
                component: ComponentCreator('/docs/ferrox-php/packages/storage/adapters', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/storage/core',
                component: ComponentCreator('/docs/ferrox-php/packages/storage/core', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/storage/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/storage/overview', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/dates',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/dates', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/env',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/env', 'b25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/overview', '6b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/pagination',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/pagination', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/secrets',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/secrets', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/strings',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/strings', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/utils/types',
                component: ComponentCreator('/docs/ferrox-php/packages/utils/types', '8b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/validation/attributes',
                component: ComponentCreator('/docs/ferrox-php/packages/validation/attributes', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/validation/core',
                component: ComponentCreator('/docs/ferrox-php/packages/validation/core', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/packages/validation/overview',
                component: ComponentCreator('/docs/ferrox-php/packages/validation/overview', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/performance/memory-management',
                component: ComponentCreator('/docs/ferrox-php/performance/memory-management', 'c42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/performance/singleflight',
                component: ComponentCreator('/docs/ferrox-php/performance/singleflight', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/security/paseto-auth',
                component: ComponentCreator('/docs/ferrox-php/security/paseto-auth', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/security/rate-limiting',
                component: ComponentCreator('/docs/ferrox-php/security/rate-limiting', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/security/rbac-guards',
                component: ComponentCreator('/docs/ferrox-php/security/rbac-guards', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-php/security/sentinel-engine',
                component: ComponentCreator('/docs/ferrox-php/security/sentinel-engine', 'bd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ferrox-py',
    component: ComponentCreator('/docs/ferrox-py', '029'),
    routes: [
      {
        path: '/docs/ferrox-py',
        component: ComponentCreator('/docs/ferrox-py', '8b7'),
        routes: [
          {
            path: '/docs/ferrox-py',
            component: ComponentCreator('/docs/ferrox-py', '4c9'),
            routes: [
              {
                path: '/docs/ferrox-py/abstractions/pipes-interceptors',
                component: ComponentCreator('/docs/ferrox-py/abstractions/pipes-interceptors', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/architectures/cqrs',
                component: ComponentCreator('/docs/ferrox-py/architectures/cqrs', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/architectures/sagas',
                component: ComponentCreator('/docs/ferrox-py/architectures/sagas', '460'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/architectures/task-scheduling',
                component: ComponentCreator('/docs/ferrox-py/architectures/task-scheduling', 'd00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/auth/auth_service',
                component: ComponentCreator('/docs/ferrox-py/auth/auth_service', 'bbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/auth/gdpr_service',
                component: ComponentCreator('/docs/ferrox-py/auth/gdpr_service', 'a55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/auth/models',
                component: ComponentCreator('/docs/ferrox-py/auth/models', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/auth/overview',
                component: ComponentCreator('/docs/ferrox-py/auth/overview', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/auth/rbac',
                component: ComponentCreator('/docs/ferrox-py/auth/rbac', '6c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/commerce/controllers',
                component: ComponentCreator('/docs/ferrox-py/commerce/controllers', '20a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/commerce/gateways',
                component: ComponentCreator('/docs/ferrox-py/commerce/gateways', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/commerce/overview',
                component: ComponentCreator('/docs/ferrox-py/commerce/overview', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/commerce/transaction_state',
                component: ComponentCreator('/docs/ferrox-py/commerce/transaction_state', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/commerce/webhooks',
                component: ComponentCreator('/docs/ferrox-py/commerce/webhooks', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/concurrency/singleflight',
                component: ComponentCreator('/docs/ferrox-py/concurrency/singleflight', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/databases/data',
                component: ComponentCreator('/docs/ferrox-py/databases/data', '14b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/databases/sqlalchemy',
                component: ComponentCreator('/docs/ferrox-py/databases/sqlalchemy', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/fundamentals/core',
                component: ComponentCreator('/docs/ferrox-py/fundamentals/core', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/fundamentals/modules',
                component: ComponentCreator('/docs/ferrox-py/fundamentals/modules', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/fundamentals/providers',
                component: ComponentCreator('/docs/ferrox-py/fundamentals/providers', '211'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/observability',
                component: ComponentCreator('/docs/ferrox-py/observability', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/overview',
                component: ComponentCreator('/docs/ferrox-py/overview', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/overview/quickstart',
                component: ComponentCreator('/docs/ferrox-py/overview/quickstart', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/resilience/circuit-breaker',
                component: ComponentCreator('/docs/ferrox-py/resilience/circuit-breaker', '016'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/security',
                component: ComponentCreator('/docs/ferrox-py/security', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/security/distributed-locks',
                component: ComponentCreator('/docs/ferrox-py/security/distributed-locks', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/security/rate-limiting',
                component: ComponentCreator('/docs/ferrox-py/security/rate-limiting', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/transports/web',
                component: ComponentCreator('/docs/ferrox-py/transports/web', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/utils/connectors',
                component: ComponentCreator('/docs/ferrox-py/utils/connectors', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/utils/overview',
                component: ComponentCreator('/docs/ferrox-py/utils/overview', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/utils/pipelines',
                component: ComponentCreator('/docs/ferrox-py/utils/pipelines', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/utils/schemas',
                component: ComponentCreator('/docs/ferrox-py/utils/schemas', '3e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ferrox',
    component: ComponentCreator('/docs/ferrox', 'bc7'),
    routes: [
      {
        path: '/docs/ferrox',
        component: ComponentCreator('/docs/ferrox', 'f9b'),
        routes: [
          {
            path: '/docs/ferrox',
            component: ComponentCreator('/docs/ferrox', '8c5'),
            routes: [
              {
                path: '/docs/ferrox/abstractions/crud-generator',
                component: ComponentCreator('/docs/ferrox/abstractions/crud-generator', 'ca2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/abstractions/guards',
                component: ComponentCreator('/docs/ferrox/abstractions/guards', '640'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/abstractions/pipes',
                component: ComponentCreator('/docs/ferrox/abstractions/pipes', '02c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/abstractions/validation',
                component: ComponentCreator('/docs/ferrox/abstractions/validation', '018'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/api-gateway',
                component: ComponentCreator('/docs/ferrox/architectures/api-gateway', 'aa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/caching',
                component: ComponentCreator('/docs/ferrox/architectures/caching', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/cqrs',
                component: ComponentCreator('/docs/ferrox/architectures/cqrs', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/events',
                component: ComponentCreator('/docs/ferrox/architectures/events', 'f11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/queues-jobs',
                component: ComponentCreator('/docs/ferrox/architectures/queues-jobs', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/sagas',
                component: ComponentCreator('/docs/ferrox/architectures/sagas', 'a1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/architectures/task-scheduling',
                component: ComponentCreator('/docs/ferrox/architectures/task-scheduling', 'e88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/cli/code-factory',
                component: ComponentCreator('/docs/ferrox/cli/code-factory', 'a8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/cli/commands-reference',
                component: ComponentCreator('/docs/ferrox/cli/commands-reference', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/community/donations',
                component: ComponentCreator('/docs/ferrox/community/donations', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/databases/migrations',
                component: ComponentCreator('/docs/ferrox/databases/migrations', 'ed7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/databases/mongodb',
                component: ComponentCreator('/docs/ferrox/databases/mongodb', '829'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/databases/overview',
                component: ComponentCreator('/docs/ferrox/databases/overview', '4d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/databases/redis',
                component: ComponentCreator('/docs/ferrox/databases/redis', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/databases/seaorm',
                component: ComponentCreator('/docs/ferrox/databases/seaorm', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/deployment/ci-cd',
                component: ComponentCreator('/docs/ferrox/deployment/ci-cd', '0a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/deployment/docker-kubernetes',
                component: ComponentCreator('/docs/ferrox/deployment/docker-kubernetes', '026'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/configuration',
                component: ComponentCreator('/docs/ferrox/fundamentals/configuration', 'ecf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/controllers',
                component: ComponentCreator('/docs/ferrox/fundamentals/controllers', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/errors',
                component: ComponentCreator('/docs/ferrox/fundamentals/errors', 'ce0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/interceptors',
                component: ComponentCreator('/docs/ferrox/fundamentals/interceptors', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/middlewares',
                component: ComponentCreator('/docs/ferrox/fundamentals/middlewares', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/providers',
                component: ComponentCreator('/docs/ferrox/fundamentals/providers', '9a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/fundamentals/testing',
                component: ComponentCreator('/docs/ferrox/fundamentals/testing', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/feature-flags',
                component: ComponentCreator('/docs/ferrox/integrations/feature-flags', '391'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/i18n',
                component: ComponentCreator('/docs/ferrox/integrations/i18n', '14e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/mailer',
                component: ComponentCreator('/docs/ferrox/integrations/mailer', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/notifications',
                component: ComponentCreator('/docs/ferrox/integrations/notifications', '218'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/payments',
                component: ComponentCreator('/docs/ferrox/integrations/payments', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/reports-and-cloud',
                component: ComponentCreator('/docs/ferrox/integrations/reports-and-cloud', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/search',
                component: ComponentCreator('/docs/ferrox/integrations/search', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/integrations/webhooks',
                component: ComponentCreator('/docs/ferrox/integrations/webhooks', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/observability/health-checks',
                component: ComponentCreator('/docs/ferrox/observability/health-checks', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/observability/logging',
                component: ComponentCreator('/docs/ferrox/observability/logging', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/observability/metrics',
                component: ComponentCreator('/docs/ferrox/observability/metrics', '572'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/observability/tracing',
                component: ComponentCreator('/docs/ferrox/observability/tracing', '679'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/overview',
                component: ComponentCreator('/docs/ferrox/overview', '04f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/overview/first-steps',
                component: ComponentCreator('/docs/ferrox/overview/first-steps', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/overview/introduction',
                component: ComponentCreator('/docs/ferrox/overview/introduction', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/overview/lifecycle',
                component: ComponentCreator('/docs/ferrox/overview/lifecycle', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/performance/benchmarks',
                component: ComponentCreator('/docs/ferrox/performance/benchmarks', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/performance/profiling',
                component: ComponentCreator('/docs/ferrox/performance/profiling', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/advanced-auth',
                component: ComponentCreator('/docs/ferrox/security/advanced-auth', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/circuit-breaker',
                component: ComponentCreator('/docs/ferrox/security/circuit-breaker', '909'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/distributed-locks',
                component: ComponentCreator('/docs/ferrox/security/distributed-locks', '924'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/ferrox-selftest',
                component: ComponentCreator('/docs/ferrox/security/ferrox-selftest', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/ferrox-sentinel',
                component: ComponentCreator('/docs/ferrox/security/ferrox-sentinel', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/jwt',
                component: ComponentCreator('/docs/ferrox/security/jwt', '1b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/rate-limiting',
                component: ComponentCreator('/docs/ferrox/security/rate-limiting', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/security/singleflight',
                component: ComponentCreator('/docs/ferrox/security/singleflight', '355'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/datagrid',
                component: ComponentCreator('/docs/ferrox/transports/datagrid', '4be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/file-storage',
                component: ComponentCreator('/docs/ferrox/transports/file-storage', '4d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/graphql',
                component: ComponentCreator('/docs/ferrox/transports/graphql', 'f52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/graphql-advanced',
                component: ComponentCreator('/docs/ferrox/transports/graphql-advanced', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/sse',
                component: ComponentCreator('/docs/ferrox/transports/sse', 'f7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/sync',
                component: ComponentCreator('/docs/ferrox/transports/sync', '2e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/transports/transports-overview',
                component: ComponentCreator('/docs/ferrox/transports/transports-overview', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/tutorial/building-the-core',
                component: ComponentCreator('/docs/ferrox/tutorial/building-the-core', '6e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/tutorial/code-factory',
                component: ComponentCreator('/docs/ferrox/tutorial/code-factory', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/tutorial/setup',
                component: ComponentCreator('/docs/ferrox/tutorial/setup', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/nestjs-yalc',
    component: ComponentCreator('/docs/nestjs-yalc', '21b'),
    routes: [
      {
        path: '/docs/nestjs-yalc',
        component: ComponentCreator('/docs/nestjs-yalc', '612'),
        routes: [
          {
            path: '/docs/nestjs-yalc',
            component: ComponentCreator('/docs/nestjs-yalc', 'e49'),
            routes: [
              {
                path: '/docs/nestjs-yalc/abstractions/crud-gen',
                component: ComponentCreator('/docs/nestjs-yalc/abstractions/crud-gen', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/abstractions/field-middleware',
                component: ComponentCreator('/docs/nestjs-yalc/abstractions/field-middleware', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/databases/database',
                component: ComponentCreator('/docs/nestjs-yalc/databases/database', 'c90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/fundamentals/app',
                component: ComponentCreator('/docs/nestjs-yalc/fundamentals/app', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/fundamentals/errors',
                component: ComponentCreator('/docs/nestjs-yalc/fundamentals/errors', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/fundamentals/event-manager',
                component: ComponentCreator('/docs/nestjs-yalc/fundamentals/event-manager', 'b9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/fundamentals/jest',
                component: ComponentCreator('/docs/nestjs-yalc/fundamentals/jest', '801'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/fundamentals/utils',
                component: ComponentCreator('/docs/nestjs-yalc/fundamentals/utils', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/integrations/ag-grid',
                component: ComponentCreator('/docs/nestjs-yalc/integrations/ag-grid', '479'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/integrations/kafka',
                component: ComponentCreator('/docs/nestjs-yalc/integrations/kafka', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/observability',
                component: ComponentCreator('/docs/nestjs-yalc/observability', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/observability/audit',
                component: ComponentCreator('/docs/nestjs-yalc/observability/audit', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/observability/logger',
                component: ComponentCreator('/docs/nestjs-yalc/observability/logger', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/overview',
                component: ComponentCreator('/docs/nestjs-yalc/overview', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/overview/architecture',
                component: ComponentCreator('/docs/nestjs-yalc/overview/architecture', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/overview/intro',
                component: ComponentCreator('/docs/nestjs-yalc/overview/intro', 'ba9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/overview/quickstart',
                component: ComponentCreator('/docs/nestjs-yalc/overview/quickstart', '056'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/security/api-strategy',
                component: ComponentCreator('/docs/nestjs-yalc/security/api-strategy', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/security/sentinel',
                component: ComponentCreator('/docs/nestjs-yalc/security/sentinel', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/transports/data-loader',
                component: ComponentCreator('/docs/nestjs-yalc/transports/data-loader', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/transports/graphql',
                component: ComponentCreator('/docs/nestjs-yalc/transports/graphql', 'a75'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/node-yalc',
    component: ComponentCreator('/docs/node-yalc', '7e7'),
    routes: [
      {
        path: '/docs/node-yalc',
        component: ComponentCreator('/docs/node-yalc', 'f80'),
        routes: [
          {
            path: '/docs/node-yalc',
            component: ComponentCreator('/docs/node-yalc', '98f'),
            routes: [
              {
                path: '/docs/node-yalc/abstractions/interfaces',
                component: ComponentCreator('/docs/node-yalc/abstractions/interfaces', '65e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/architectures/event-manager',
                component: ComponentCreator('/docs/node-yalc/architectures/event-manager', '270'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/databases/prisma',
                component: ComponentCreator('/docs/node-yalc/databases/prisma', '1ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/deployment/ci-cd',
                component: ComponentCreator('/docs/node-yalc/deployment/ci-cd', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/fundamentals/common',
                component: ComponentCreator('/docs/node-yalc/fundamentals/common', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/fundamentals/errors',
                component: ComponentCreator('/docs/node-yalc/fundamentals/errors', '313'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/fundamentals/types',
                component: ComponentCreator('/docs/node-yalc/fundamentals/types', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/fundamentals/types-extends',
                component: ComponentCreator('/docs/node-yalc/fundamentals/types-extends', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/fundamentals/utils',
                component: ComponentCreator('/docs/node-yalc/fundamentals/utils', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/integrations/aws-helpers',
                component: ComponentCreator('/docs/node-yalc/integrations/aws-helpers', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/observability/logger',
                component: ComponentCreator('/docs/node-yalc/observability/logger', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/overview',
                component: ComponentCreator('/docs/node-yalc/overview', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/overview/intro',
                component: ComponentCreator('/docs/node-yalc/overview/intro', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/overview/quickstart',
                component: ComponentCreator('/docs/node-yalc/overview/quickstart', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/performance/caching',
                component: ComponentCreator('/docs/node-yalc/performance/caching', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/security/auth',
                component: ComponentCreator('/docs/node-yalc/security/auth', 'c14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/transports/http-client',
                component: ComponentCreator('/docs/node-yalc/transports/http-client', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
