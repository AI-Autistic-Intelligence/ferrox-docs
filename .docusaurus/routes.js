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
    component: ComponentCreator('/docs/ferrox-front', '2a0'),
    routes: [
      {
        path: '/docs/ferrox-front',
        component: ComponentCreator('/docs/ferrox-front', '80f'),
        routes: [
          {
            path: '/docs/ferrox-front',
            component: ComponentCreator('/docs/ferrox-front', '58d'),
            routes: [
              {
                path: '/docs/ferrox-front/architecture',
                component: ComponentCreator('/docs/ferrox-front/architecture', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/components',
                component: ComponentCreator('/docs/ferrox-front/components', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/core',
                component: ComponentCreator('/docs/ferrox-front/core', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/intro',
                component: ComponentCreator('/docs/ferrox-front/intro', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/macros',
                component: ComponentCreator('/docs/ferrox-front/macros', '778'),
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
                path: '/docs/ferrox-front/quickstart',
                component: ComponentCreator('/docs/ferrox-front/quickstart', '279'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/reactivity',
                component: ComponentCreator('/docs/ferrox-front/reactivity', '7dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/routing',
                component: ComponentCreator('/docs/ferrox-front/routing', '6ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/security',
                component: ComponentCreator('/docs/ferrox-front/security', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/templates',
                component: ComponentCreator('/docs/ferrox-front/templates', '7b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/ui-components',
                component: ComponentCreator('/docs/ferrox-front/ui-components', 'e95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/ws',
                component: ComponentCreator('/docs/ferrox-front/ws', 'ff8'),
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
    component: ComponentCreator('/docs/ferrox-node', '11a'),
    routes: [
      {
        path: '/docs/ferrox-node',
        component: ComponentCreator('/docs/ferrox-node', '254'),
        routes: [
          {
            path: '/docs/ferrox-node',
            component: ComponentCreator('/docs/ferrox-node', 'c01'),
            routes: [
              {
                path: '/docs/ferrox-node/architectures/onion',
                component: ComponentCreator('/docs/ferrox-node/architectures/onion', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/auth',
                component: ComponentCreator('/docs/ferrox-node/components/auth', '158'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/config',
                component: ComponentCreator('/docs/ferrox-node/components/config', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/core',
                component: ComponentCreator('/docs/ferrox-node/components/core', '2b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/cqrs',
                component: ComponentCreator('/docs/ferrox-node/components/cqrs', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/datagrid',
                component: ComponentCreator('/docs/ferrox-node/components/datagrid', '2e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/guards',
                component: ComponentCreator('/docs/ferrox-node/components/guards', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/i18n',
                component: ComponentCreator('/docs/ferrox-node/components/i18n', '234'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/interfaces',
                component: ComponentCreator('/docs/ferrox-node/components/interfaces', 'd17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/jobs',
                component: ComponentCreator('/docs/ferrox-node/components/jobs', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/kernel',
                component: ComponentCreator('/docs/ferrox-node/components/kernel', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/resilience',
                component: ComponentCreator('/docs/ferrox-node/components/resilience', 'bc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/routing',
                component: ComponentCreator('/docs/ferrox-node/components/routing', 'e37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/security',
                component: ComponentCreator('/docs/ferrox-node/components/security', '58f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/selftest',
                component: ComponentCreator('/docs/ferrox-node/components/selftest', '654'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/storage',
                component: ComponentCreator('/docs/ferrox-node/components/storage', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/tracing',
                component: ComponentCreator('/docs/ferrox-node/components/tracing', 'f1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/components/transports',
                component: ComponentCreator('/docs/ferrox-node/components/transports', '4a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/dummy-app-guide',
                component: ComponentCreator('/docs/ferrox-node/dummy-app-guide', '5fa'),
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
                path: '/docs/ferrox-node/intro',
                component: ComponentCreator('/docs/ferrox-node/intro', '3dd'),
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
                path: '/docs/ferrox-node/quickstart',
                component: ComponentCreator('/docs/ferrox-node/quickstart', 'a72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-node/security/paseto',
                component: ComponentCreator('/docs/ferrox-node/security/paseto', 'a94'),
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
    component: ComponentCreator('/docs/ferrox-py', '44e'),
    routes: [
      {
        path: '/docs/ferrox-py',
        component: ComponentCreator('/docs/ferrox-py', '66e'),
        routes: [
          {
            path: '/docs/ferrox-py',
            component: ComponentCreator('/docs/ferrox-py', '679'),
            routes: [
              {
                path: '/docs/ferrox-py/abstractions/pipes-interceptors',
                component: ComponentCreator('/docs/ferrox-py/abstractions/pipes-interceptors', '46b'),
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
                path: '/docs/ferrox-py/components/core',
                component: ComponentCreator('/docs/ferrox-py/components/core', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/components/cqrs',
                component: ComponentCreator('/docs/ferrox-py/components/cqrs', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/components/data',
                component: ComponentCreator('/docs/ferrox-py/components/data', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/components/observability',
                component: ComponentCreator('/docs/ferrox-py/components/observability', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/components/security',
                component: ComponentCreator('/docs/ferrox-py/components/security', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/components/web',
                component: ComponentCreator('/docs/ferrox-py/components/web', '275'),
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
                path: '/docs/ferrox-py/overview',
                component: ComponentCreator('/docs/ferrox-py/overview', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-py/quickstart',
                component: ComponentCreator('/docs/ferrox-py/quickstart', '440'),
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
    component: ComponentCreator('/docs/nestjs-yalc', '233'),
    routes: [
      {
        path: '/docs/nestjs-yalc',
        component: ComponentCreator('/docs/nestjs-yalc', 'b03'),
        routes: [
          {
            path: '/docs/nestjs-yalc',
            component: ComponentCreator('/docs/nestjs-yalc', 'a95'),
            routes: [
              {
                path: '/docs/nestjs-yalc/architecture',
                component: ComponentCreator('/docs/nestjs-yalc/architecture', '49a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/intro',
                component: ComponentCreator('/docs/nestjs-yalc/docs/intro', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/ag-grid',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/ag-grid', '2aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/api-strategy',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/api-strategy', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/app',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/app', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/audit',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/audit', '32c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/crud-gen',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/crud-gen', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/data-loader',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/data-loader', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/database',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/database', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/errors',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/errors', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/event-manager',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/event-manager', '273'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/field-middleware',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/field-middleware', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/graphql',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/graphql', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/jest',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/jest', '79c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/kafka',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/kafka', '9a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/logger',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/logger', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/observability',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/observability', 'b21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/sentinel',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/sentinel', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/modules/utils',
                component: ComponentCreator('/docs/nestjs-yalc/docs/modules/utils', 'dc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/docs/quickstart',
                component: ComponentCreator('/docs/nestjs-yalc/docs/quickstart', 'ec3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/modules/crud-gen',
                component: ComponentCreator('/docs/nestjs-yalc/modules/crud-gen', '056'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/modules/logger',
                component: ComponentCreator('/docs/nestjs-yalc/modules/logger', 'bab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nestjs-yalc/overview',
                component: ComponentCreator('/docs/nestjs-yalc/overview', '3b7'),
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
    component: ComponentCreator('/docs/node-yalc', '04f'),
    routes: [
      {
        path: '/docs/node-yalc',
        component: ComponentCreator('/docs/node-yalc', 'c5c'),
        routes: [
          {
            path: '/docs/node-yalc',
            component: ComponentCreator('/docs/node-yalc', '131'),
            routes: [
              {
                path: '/docs/node-yalc/docs/intro',
                component: ComponentCreator('/docs/node-yalc/docs/intro', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/aws-helpers',
                component: ComponentCreator('/docs/node-yalc/docs/packages/aws-helpers', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/common',
                component: ComponentCreator('/docs/node-yalc/docs/packages/common', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/errors',
                component: ComponentCreator('/docs/node-yalc/docs/packages/errors', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/event-manager',
                component: ComponentCreator('/docs/node-yalc/docs/packages/event-manager', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/interfaces',
                component: ComponentCreator('/docs/node-yalc/docs/packages/interfaces', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/logger',
                component: ComponentCreator('/docs/node-yalc/docs/packages/logger', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/types',
                component: ComponentCreator('/docs/node-yalc/docs/packages/types', 'c06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/types-extends',
                component: ComponentCreator('/docs/node-yalc/docs/packages/types-extends', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/packages/utils',
                component: ComponentCreator('/docs/node-yalc/docs/packages/utils', '0b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/docs/quickstart',
                component: ComponentCreator('/docs/node-yalc/docs/quickstart', '202'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/node-yalc/overview',
                component: ComponentCreator('/docs/node-yalc/overview', 'dc0'),
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
