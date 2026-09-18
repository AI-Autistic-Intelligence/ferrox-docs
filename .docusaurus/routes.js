import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '73b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f3a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '322'),
            routes: [
              {
                path: '/docs/ferrox',
                component: ComponentCreator('/docs/ferrox', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/architecture',
                component: ComponentCreator('/docs/ferrox-front/docs/architecture', '4fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/components',
                component: ComponentCreator('/docs/ferrox-front/docs/components', 'de4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/core',
                component: ComponentCreator('/docs/ferrox-front/docs/core', 'b5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/intro',
                component: ComponentCreator('/docs/ferrox-front/docs/intro', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/macros',
                component: ComponentCreator('/docs/ferrox-front/docs/macros', 'd25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/quickstart',
                component: ComponentCreator('/docs/ferrox-front/docs/quickstart', 'd8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/reactivity',
                component: ComponentCreator('/docs/ferrox-front/docs/reactivity', '7db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/routing',
                component: ComponentCreator('/docs/ferrox-front/docs/routing', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/security',
                component: ComponentCreator('/docs/ferrox-front/docs/security', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/templates',
                component: ComponentCreator('/docs/ferrox-front/docs/templates', '138'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/ui-components',
                component: ComponentCreator('/docs/ferrox-front/docs/ui-components', 'f8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox-front/docs/ws',
                component: ComponentCreator('/docs/ferrox-front/docs/ws', '096'),
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
                path: '/docs/ferrox-node/overview',
                component: ComponentCreator('/docs/ferrox-node/overview', '300'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/abstractions/crud-generator',
                component: ComponentCreator('/docs/ferrox/docs/abstractions/crud-generator', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/abstractions/guards',
                component: ComponentCreator('/docs/ferrox/docs/abstractions/guards', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/abstractions/pipes',
                component: ComponentCreator('/docs/ferrox/docs/abstractions/pipes', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/abstractions/validation',
                component: ComponentCreator('/docs/ferrox/docs/abstractions/validation', '969'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/api-gateway',
                component: ComponentCreator('/docs/ferrox/docs/architectures/api-gateway', 'f16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/caching',
                component: ComponentCreator('/docs/ferrox/docs/architectures/caching', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/cqrs',
                component: ComponentCreator('/docs/ferrox/docs/architectures/cqrs', '387'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/events',
                component: ComponentCreator('/docs/ferrox/docs/architectures/events', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/queues-jobs',
                component: ComponentCreator('/docs/ferrox/docs/architectures/queues-jobs', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/sagas',
                component: ComponentCreator('/docs/ferrox/docs/architectures/sagas', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/architectures/task-scheduling',
                component: ComponentCreator('/docs/ferrox/docs/architectures/task-scheduling', '56d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/cli/code-factory',
                component: ComponentCreator('/docs/ferrox/docs/cli/code-factory', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/cli/commands-reference',
                component: ComponentCreator('/docs/ferrox/docs/cli/commands-reference', 'b9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/community/donations',
                component: ComponentCreator('/docs/ferrox/docs/community/donations', '7a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/databases/migrations',
                component: ComponentCreator('/docs/ferrox/docs/databases/migrations', '201'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/databases/mongodb',
                component: ComponentCreator('/docs/ferrox/docs/databases/mongodb', 'e92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/databases/overview',
                component: ComponentCreator('/docs/ferrox/docs/databases/overview', '72d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/databases/redis',
                component: ComponentCreator('/docs/ferrox/docs/databases/redis', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/databases/seaorm',
                component: ComponentCreator('/docs/ferrox/docs/databases/seaorm', '356'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/deployment/ci-cd',
                component: ComponentCreator('/docs/ferrox/docs/deployment/ci-cd', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/deployment/docker-kubernetes',
                component: ComponentCreator('/docs/ferrox/docs/deployment/docker-kubernetes', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/configuration',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/configuration', 'e21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/controllers',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/controllers', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/errors',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/errors', '4f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/interceptors',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/interceptors', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/middlewares',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/middlewares', '71f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/providers',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/providers', '9f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/fundamentals/testing',
                component: ComponentCreator('/docs/ferrox/docs/fundamentals/testing', '737'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/feature-flags',
                component: ComponentCreator('/docs/ferrox/docs/integrations/feature-flags', '33b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/i18n',
                component: ComponentCreator('/docs/ferrox/docs/integrations/i18n', 'd59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/mailer',
                component: ComponentCreator('/docs/ferrox/docs/integrations/mailer', '63c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/notifications',
                component: ComponentCreator('/docs/ferrox/docs/integrations/notifications', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/payments',
                component: ComponentCreator('/docs/ferrox/docs/integrations/payments', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/reports-and-cloud',
                component: ComponentCreator('/docs/ferrox/docs/integrations/reports-and-cloud', '6af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/integrations/webhooks',
                component: ComponentCreator('/docs/ferrox/docs/integrations/webhooks', '277'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/observability/health-checks',
                component: ComponentCreator('/docs/ferrox/docs/observability/health-checks', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/observability/logging',
                component: ComponentCreator('/docs/ferrox/docs/observability/logging', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/observability/metrics',
                component: ComponentCreator('/docs/ferrox/docs/observability/metrics', '938'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/observability/tracing',
                component: ComponentCreator('/docs/ferrox/docs/observability/tracing', 'b5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/overview/first-steps',
                component: ComponentCreator('/docs/ferrox/docs/overview/first-steps', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/overview/introduction',
                component: ComponentCreator('/docs/ferrox/docs/overview/introduction', '138'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/overview/lifecycle',
                component: ComponentCreator('/docs/ferrox/docs/overview/lifecycle', '99e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/performance/benchmarks',
                component: ComponentCreator('/docs/ferrox/docs/performance/benchmarks', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/performance/profiling',
                component: ComponentCreator('/docs/ferrox/docs/performance/profiling', '717'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/advanced-auth',
                component: ComponentCreator('/docs/ferrox/docs/security/advanced-auth', '183'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/circuit-breaker',
                component: ComponentCreator('/docs/ferrox/docs/security/circuit-breaker', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/distributed-locks',
                component: ComponentCreator('/docs/ferrox/docs/security/distributed-locks', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/ferrox-selftest',
                component: ComponentCreator('/docs/ferrox/docs/security/ferrox-selftest', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/ferrox-sentinel',
                component: ComponentCreator('/docs/ferrox/docs/security/ferrox-sentinel', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/jwt',
                component: ComponentCreator('/docs/ferrox/docs/security/jwt', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/rate-limiting',
                component: ComponentCreator('/docs/ferrox/docs/security/rate-limiting', '21d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/security/singleflight',
                component: ComponentCreator('/docs/ferrox/docs/security/singleflight', 'ddb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/transports/datagrid',
                component: ComponentCreator('/docs/ferrox/docs/transports/datagrid', 'c49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/transports/file-storage',
                component: ComponentCreator('/docs/ferrox/docs/transports/file-storage', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/transports/graphql',
                component: ComponentCreator('/docs/ferrox/docs/transports/graphql', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/transports/graphql-advanced',
                component: ComponentCreator('/docs/ferrox/docs/transports/graphql-advanced', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/transports/sse',
                component: ComponentCreator('/docs/ferrox/docs/transports/sse', 'da4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/transports/transports-overview',
                component: ComponentCreator('/docs/ferrox/docs/transports/transports-overview', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/tutorial/building-the-core',
                component: ComponentCreator('/docs/ferrox/docs/tutorial/building-the-core', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/tutorial/code-factory',
                component: ComponentCreator('/docs/ferrox/docs/tutorial/code-factory', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ferrox/docs/tutorial/setup',
                component: ComponentCreator('/docs/ferrox/docs/tutorial/setup', '8c3'),
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
                path: '/docs/nestjs-yalc/architecture',
                component: ComponentCreator('/docs/nestjs-yalc/architecture', '49a'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
