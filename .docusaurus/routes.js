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
    component: ComponentCreator('/docs', '4bb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '981'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c61'),
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
              },
              {
                path: '/docs/ferrox-node/overview',
                component: ComponentCreator('/docs/ferrox-node/overview', '300'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
