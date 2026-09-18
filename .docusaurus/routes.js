import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ferrox-docs/markdown-page',
    component: ComponentCreator('/ferrox-docs/markdown-page', 'd95'),
    exact: true
  },
  {
    path: '/ferrox-docs/docs',
    component: ComponentCreator('/ferrox-docs/docs', '24a'),
    routes: [
      {
        path: '/ferrox-docs/docs',
        component: ComponentCreator('/ferrox-docs/docs', '652'),
        routes: [
          {
            path: '/ferrox-docs/docs',
            component: ComponentCreator('/ferrox-docs/docs', '984'),
            routes: [
              {
                path: '/ferrox-docs/docs/ferrox',
                component: ComponentCreator('/ferrox-docs/docs/ferrox', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/architecture',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/architecture', '3ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/components',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/components', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/core',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/core', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/intro',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/intro', '036'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/macros',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/macros', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/quickstart',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/quickstart', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/reactivity',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/reactivity', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/routing',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/routing', '83c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/security',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/security', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/templates',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/templates', 'd5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/ui-components',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/ui-components', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/docs/ws',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/docs/ws', 'd00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-front/overview',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-front/overview', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox-node/overview',
                component: ComponentCreator('/ferrox-docs/docs/ferrox-node/overview', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/abstractions/crud-generator',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/abstractions/crud-generator', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/abstractions/guards',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/abstractions/guards', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/abstractions/pipes',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/abstractions/pipes', '1c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/abstractions/validation',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/abstractions/validation', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/api-gateway',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/api-gateway', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/caching',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/caching', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/cqrs',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/cqrs', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/events',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/events', 'fbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/queues-jobs',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/queues-jobs', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/sagas',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/sagas', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/architectures/task-scheduling',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/architectures/task-scheduling', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/cli/code-factory',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/cli/code-factory', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/cli/commands-reference',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/cli/commands-reference', '048'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/community/donations',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/community/donations', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/databases/migrations',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/databases/migrations', 'e9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/databases/mongodb',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/databases/mongodb', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/databases/overview',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/databases/overview', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/databases/redis',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/databases/redis', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/databases/seaorm',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/databases/seaorm', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/deployment/ci-cd',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/deployment/ci-cd', '763'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/deployment/docker-kubernetes',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/deployment/docker-kubernetes', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/configuration',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/configuration', '504'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/controllers',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/controllers', '38e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/errors',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/errors', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/interceptors',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/interceptors', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/middlewares',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/middlewares', '7ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/providers',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/providers', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/fundamentals/testing',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/fundamentals/testing', 'c22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/feature-flags',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/feature-flags', '053'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/i18n',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/i18n', '0d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/mailer',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/mailer', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/notifications',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/notifications', '481'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/payments',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/payments', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/reports-and-cloud',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/reports-and-cloud', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/integrations/webhooks',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/integrations/webhooks', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/observability/health-checks',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/observability/health-checks', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/observability/logging',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/observability/logging', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/observability/metrics',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/observability/metrics', '088'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/observability/tracing',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/observability/tracing', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/overview/first-steps',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/overview/first-steps', '4de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/overview/introduction',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/overview/introduction', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/overview/lifecycle',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/overview/lifecycle', 'dfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/performance/benchmarks',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/performance/benchmarks', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/performance/profiling',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/performance/profiling', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/advanced-auth',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/advanced-auth', 'f4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/circuit-breaker',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/circuit-breaker', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/distributed-locks',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/distributed-locks', 'f73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/ferrox-selftest',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/ferrox-selftest', 'b69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/ferrox-sentinel',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/ferrox-sentinel', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/jwt',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/jwt', 'ee9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/rate-limiting',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/rate-limiting', '7fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/security/singleflight',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/security/singleflight', '374'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/transports/datagrid',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/transports/datagrid', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/transports/file-storage',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/transports/file-storage', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/transports/graphql',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/transports/graphql', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/transports/graphql-advanced',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/transports/graphql-advanced', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/transports/sse',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/transports/sse', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/transports/transports-overview',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/transports/transports-overview', '6ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/tutorial/building-the-core',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/tutorial/building-the-core', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/tutorial/code-factory',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/tutorial/code-factory', '560'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/docs/tutorial/setup',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/docs/tutorial/setup', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/ferrox/overview',
                component: ComponentCreator('/ferrox-docs/docs/ferrox/overview', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/nestjs-yalc/architecture',
                component: ComponentCreator('/ferrox-docs/docs/nestjs-yalc/architecture', '0f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/nestjs-yalc/modules/crud-gen',
                component: ComponentCreator('/ferrox-docs/docs/nestjs-yalc/modules/crud-gen', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/nestjs-yalc/modules/logger',
                component: ComponentCreator('/ferrox-docs/docs/nestjs-yalc/modules/logger', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/nestjs-yalc/overview',
                component: ComponentCreator('/ferrox-docs/docs/nestjs-yalc/overview', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ferrox-docs/docs/node-yalc/overview',
                component: ComponentCreator('/ferrox-docs/docs/node-yalc/overview', '991'),
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
    path: '/ferrox-docs/',
    component: ComponentCreator('/ferrox-docs/', '441'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
