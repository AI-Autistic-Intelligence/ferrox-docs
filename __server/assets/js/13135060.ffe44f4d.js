"use strict";
exports.ids = ["7871"];
exports.modules = {
59876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_app_md_131_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_app_md_131_json__rspack_import_0 = __webpack_require__(62629);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'app',
	title: 'Application Lifecycle, Bootstrap & Module Composition',
	sidebar_position: 15
};
const contentTitle = 'Application Lifecycle, Bootstrap & Module Composition';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. What It Does &amp; Key Capabilities",
  "id": "2-what-it-does--key-capabilities",
  "level": 2
}, {
  "value": "3. How It Works Under the Hood",
  "id": "3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "Application Bootstrap Sequence",
  "id": "application-bootstrap-sequence",
  "level": 3
}, {
  "value": "4. Why It Was Designed This Way",
  "id": "4-why-it-was-designed-this-way",
  "level": 2
}, {
  "value": "5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "5.1 Standard <code>main.ts</code> Application Setup",
  "id": "51-standard-maints-application-setup",
  "level": 3
}, {
  "value": "5.2 Declarative <code>YalcAppModule</code> Definition",
  "id": "52-declarative-yalcappmodule-definition",
  "level": 3
}, {
  "value": "6. Anti-Patterns: How NOT to Use It",
  "id": "6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "7. Pro-Tips &amp; Best Practices",
  "id": "7-pro-tips--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "application-lifecycle-bootstrap--module-composition",
        children: "Application Lifecycle, Bootstrap & Module Composition"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/app"
      }), " module provides a standardized, enterprise-ready application bootstrapping kernel for NestJS microservices and monolithic servers. It abstracts boilerplate startup routines—such as graceful shutdown signal handlers, unified configuration loading, global interceptors/filters registration, health-check lifecycle hooks, and multi-tenant context injection."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In enterprise NestJS architectures, microservices often duplicate complex bootstrapping logic across repositories: setting up CORS, configuring global validation pipes, registering custom exception filters, wiring up OpenTelemetry tracing, and managing graceful shutdown signals (SIGTERM / SIGINT)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/app"
      }), " encapsulates these cross-cutting bootstrap concerns into a declarative ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcApplicationFactory"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcAppModule"
      }), ". It ensures every service within the monorepo adheres to identical security, observability, and lifecycle standards out of the box."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        YalcApplicationFactory                          │\n├────────────────────────────────────────────────────────────────────────┤\n│  1. Init Global Logger (Pino / Winston)                                │\n│  2. Attach OpenTelemetry Tracing Context                              │\n│  3. Register Global ValidationPipes & ExceptionFilters                 │\n│  4. Mount Sentinel Security Headers & CORS                             │\n│  5. Setup Graceful Shutdown Listeners (SIGTERM/SIGINT)                 │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │\n                                   ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                         NestJS Express / Fastify                       │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Unified Application Factory"
        }), ": Provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "YalcApplicationFactory.create()"
        }), " to initialize HTTP, GraphQL, or RPC microservice instances with zero boilerplate."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Lifecycle Hooks"
        }), ": Hooks into NestJS ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OnModuleInit"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OnApplicationBootstrap"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OnModuleDestroy"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "BeforeApplicationShutdown"
        }), " lifecycle events to manage database connection pools, Kafka consumers, and background queue workers safely."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Global Context Middleware"
        }), ": Injects correlation IDs (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "x-correlation-id"
        }), ") and request tracking tokens into AsyncLocalStorage across all incoming requests."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Graceful Shutdown Engine"
        }), ": Ensures active HTTP connections finish processing and message queues drain before the process exits."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "application-bootstrap-sequence",
      children: "Application Bootstrap Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Main as main.ts\n    participant Factory as YalcApplicationFactory\n    participant App as YalcAppModule\n    participant Nest as NestFactory\n    participant Engine as Node.js Event Loop\n\n    Main->>Factory: YalcApplicationFactory.create(AppModule, options)\n    Factory->>Nest: NestFactory.create(AppModule, { logger: YalcLogger })\n    Nest->>App: Resolve Module Tree & Dependecies\n    App->>App: Register Global Interceptors, Pipes & Filters\n    Factory->>Nest: app.enableShutdownHooks(['SIGTERM', 'SIGINT'])\n    Factory->>Nest: app.listen(port)\n    Nest-->>Main: INestApplication Instance\n    Note over Engine: Running Service Loop...\n    Engine->>Factory: SIGTERM Signal Received\n    Factory->>Nest: Trigger BeforeApplicationShutdown\n    Nest->>App: Close Database Pools & Kafka Consumers\n    Nest-->>Engine: Process Exit (Code 0)\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-why-it-was-designed-this-way",
      children: "4. Why It Was Designed This Way"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard NestJS Bootstrap"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@nestjs-yalc/app Kernel"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Boilerplate"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["100+ lines of duplicate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "main.ts"
            }), " setup in every microservice."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Single call to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "YalcApplicationFactory.create()"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Shutdown Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Default NestJS requires explicit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "enableShutdownHooks()"
            }), "."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Built-in async resource cleanup and connection pool draining."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Configuration"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Hand-rolled ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "ConfigService"
            }), " bindings scattered across modules."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Centralized configuration validation with dotenv and Vault support."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Error Hardening"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unhandled promise rejections can crash worker processes silently."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Global uncaught exception bouncers with structured error logging."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "51-standard-maints-application-setup",
      children: ["5.1 Standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.ts"
      }), " Application Setup"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { YalcApplicationFactory } from '@nestjs-yalc/app';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await YalcApplicationFactory.create(AppModule, {\n    appName: 'user-service',\n    port: 3000,\n    cors: {\n      origin: ['https://example.com'],\n      credentials: true,\n    },\n    swagger: {\n      enabled: true,\n      path: '/api/docs',\n      title: 'User Service API',\n      version: '1.0.0',\n    },\n    gracefulShutdownTimeoutMs: 10000,\n  });\n\n  await app.listen();\n}\n\nbootstrap();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "52-declarative-yalcappmodule-definition",
      children: ["5.2 Declarative ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcAppModule"
      }), " Definition"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcAppModule } from '@nestjs-yalc/app';\nimport { DatabaseModule } from '@nestjs-yalc/database';\nimport { LoggerModule } from '@nestjs-yalc/logger';\nimport { UserModule } from './user/user.module';\n\n@Module({\n  imports: [\n    YalcAppModule.forRoot({\n      isGlobal: true,\n      envFilePath: ['.env.local', '.env'],\n    }),\n    LoggerModule.forRoot({ serviceName: 'user-service' }),\n    DatabaseModule.forRoot(),\n    UserModule,\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Bypassing the YalcApplicationFactory"
        }), "\nDirectly calling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "NestFactory.create()"
        }), " in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "main.ts"
        }), " bypasses global correlation tracking, centralized error filters, and graceful shutdown handlers, causing trace breaks in production."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ❌ WRONG: Standard NestFactory skips yalc enterprise middleware\nconst app = await NestFactory.create(AppModule);\n\n// ✅ CORRECT: Use YalcApplicationFactory\nconst app = await YalcApplicationFactory.create(AppModule, options);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 2: Blocking the Bootstrap Loop"
        }), "\nPerforming heavy CPU-bound computations or synchronous HTTP calls inside ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onModuleInit()"
        }), " blocks the NestJS dependency graph initialization. Always use non-blocking asynchronous promises."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Health Check Binding"
        }), "\nRegister custom liveness and readiness health indicators via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nestjs-yalc/app"
        }), " to integrate directly with Kubernetes ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/healthz"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/readyz"
        }), " probes."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!NOTE]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 2: Multi-Environment Config Profiles"
        }), "\nPass ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "envFilePath"
        }), " arrays to automatically overlay target environments (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".env.production"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".env.staging"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".env.local"
        }), ") cleanly."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},
62629(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/app","title":"Application Lifecycle, Bootstrap & Module Composition","description":"The @nestjs-yalc/app module provides a standardized, enterprise-ready application bootstrapping kernel for NestJS microservices and monolithic servers. It abstracts boilerplate startup routines—such as graceful shutdown signal handlers, unified configuration loading, global interceptors/filters registration, health-check lifecycle hooks, and multi-tenant context injection.","source":"@site/docs/nestjs-yalc/docs/modules/app.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/app","permalink":"/docs/nestjs-yalc/docs/modules/app","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/app.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"app","title":"Application Lifecycle, Bootstrap & Module Composition","sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/jest","permalink":"/docs/nestjs-yalc/docs/modules/jest"},"next":{"title":"Core Utilities, Helpers & Object Manipulation","permalink":"/docs/nestjs-yalc/docs/modules/utils"}}')

},

};
;