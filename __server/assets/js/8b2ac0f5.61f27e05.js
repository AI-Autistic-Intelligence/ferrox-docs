"use strict";
exports.ids = ["5841"];
exports.modules = {
5967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_intro_md_8b2_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_intro_md_8b2_json__rspack_import_0 = __webpack_require__(22805);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'intro',
	title: 'Introduction & Ecosystem Architecture',
	sidebar_position: 1
};
const contentTitle = 'Introduction & Ecosystem Architecture';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. Monorepo Package Ecosystem Breakdown",
  "id": "2-monorepo-package-ecosystem-breakdown",
  "level": 2
}, {
  "value": "3. Core Architectural Philosophy",
  "id": "3-core-architectural-philosophy",
  "level": 2
}, {
  "value": "1. Zero Boilerplate Code",
  "id": "1-zero-boilerplate-code",
  "level": 3
}, {
  "value": "2. Strict Type Safety",
  "id": "2-strict-type-safety",
  "level": 3
}, {
  "value": "3. High Performance &amp; Low Overhead",
  "id": "3-high-performance--low-overhead",
  "level": 3
}, {
  "value": "4. Architectural Sequence Flow",
  "id": "4-architectural-sequence-flow",
  "level": 2
}, {
  "value": "5. Next Steps",
  "id": "5-next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
        id: "introduction--ecosystem-architecture",
        children: "Introduction & Ecosystem Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Welcome to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "NestJS-YALC"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "Yet Another Layer of Convenience for NestJS"
      }), "), the enterprise-grade foundation framework for building scalable, high-performance microservices and monorepo applications in TypeScript and Node.js."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "NestJS is an exceptional framework for structuring enterprise backend applications. However, when building distributed monorepos across multiple teams, developers spend hundreds of hours re-implementing core infrastructure: datagrid filter parsers, Avro/JSON Kafka deserializers, GraphQL federation directives, sentinel security headers, audit logging pipelines, and TypeORM connection lifecycle managers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "NestJS-YALC"
      }), " bridges this gap by offering a cohesive suite of modular packages that extend NestJS with battle-tested enterprise primitives. It provides standardized patterns that promote maintainability, strict security compliance, and zero-boilerplate development."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                                   YOUR ENTERPRISE APP                                  │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  AG-Grid  │  CRUD-Gen  │  Audit Log  │  Sentinel Sec  │  Kafka Bus  │  GraphQL DataLoader │\n├───────────┴────────────┴─────────────┴────────────────┴─────────────┴────────────────────┤\n│                                    NESTJS-YALC KERNEL                                  │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                   NestJS Core (Express / Fastify)                      │\n└────────────────────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-monorepo-package-ecosystem-breakdown",
      children: "2. Monorepo Package Ecosystem Breakdown"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Package"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Purpose & Domain"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key Feature"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/ag-grid"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server-side data grid handling"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Automated TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "QueryBuilder"
            }), " filter & sort translation."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/app"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Application bootstrap kernel"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automated shutdown hooks, global exception bouncers, logger."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/api-strategy"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Response wrapping & versioning"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Standardized ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "{ success, data, meta }"
            }), " response envelopes."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/audit"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audit trail & change tracking"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Entity mutation diff logging with user context retention."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/crud-gen"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automated CRUD API generation"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Auto-generates REST/GraphQL CRUD routes from entity schemas."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/data-loader"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GraphQL DataLoader helper"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eliminates N+1 query problems automatically in TypeORM."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/database"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-tenant TypeORM engine"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dynamic database connection pooling & migration runner."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/errors"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise HTTP/RPC exceptions"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unified error code taxonomy with localized messages."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/event-manager"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Local & distributed event bus"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hybrid in-memory EventEmitter2 + Kafka event outbox."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/field-middleware"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Property access control & masking"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GraphQL field-level masking & encryption decorators."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/graphql"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GraphQL Federation & Utilities"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Schema stitching, custom scalars, and Mercurius transport."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/jest"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Testing utilities & mockers"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automated DB sandbox factories & mock repository providers."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/kafka"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-throughput messaging"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Avro/JSON schema registry, DLQ retry routing, producer pool."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/logger"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Structured JSON logging"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-performance Pino logger with trace ID injection."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/observability"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Telemetry & Health Monitoring"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Prometheus metrics export & OpenTelemetry trace propagation."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/sentinel"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Edge security & bouncer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "CSP header protection, payload bouncer, CORS regex matchers."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@nestjs-yalc/utils"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shared utilities & queue pool"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "runConcurrently()"
            }), " queue, deep object sanitizers."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-core-architectural-philosophy",
      children: "3. Core Architectural Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-zero-boilerplate-code",
      children: "1. Zero Boilerplate Code"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Standardize repetitive operational routines (error mapping, logger initialization, request correlation tracking) into single-line module imports."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-strict-type-safety",
      children: "2. Strict Type Safety"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["All packages enforce strict TypeScript contracts. From AG-Grid filter models to Kafka message payloads, raw ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "any"
      }), " types are strictly prohibited."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-high-performance--low-overhead",
      children: "3. High Performance & Low Overhead"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Built on top of Fastify, Pino, and native SQL query building, NestJS-YALC introduces minimal runtime overhead while preventing common memory leaks."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-architectural-sequence-flow",
      children: "4. Architectural Sequence Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Gateway as Sentinel Gateway\n    participant App as YalcAppModule\n    participant Controller as CRUD Controller\n    participant Audit as Audit Middleware\n    participant DB as TypeORM Engine\n    participant Event as Event Manager (Kafka)\n\n    Gateway->>App: Incoming Request HTTP/GraphQL\n    App->>App: Trace Correlation Context Attached\n    App->>Controller: Route to Target Handler\n    Controller->>Audit: Capture Pre-Mutation State\n    Controller->>DB: Execute QueryBuilder Operation\n    DB-->>Controller: Return Updated Entity\n    Controller->>Audit: Log Mutation Diff (Before/After)\n    Controller->>Event: Emit Transactional Outbox Event ('entity.updated')\n    Event->>Kafka Broker: Async Dispatch to Kafka\n    Controller-->>Gateway: Standard Response Envelope { success: true, data }\n    Gateway-->>User: Deliver Response\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-next-steps",
      children: "5. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Proceed to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/nestjs-yalc/docs/quickstart",
          children: "Quickstart Guide"
        }), " to bootstrap your first NestJS-YALC microservice."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Explore individual package guides in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Monorepo Modules"
        }), " section."]
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
22805(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/intro","title":"Introduction & Ecosystem Architecture","description":"Welcome to NestJS-YALC (Yet Another Layer of Convenience for NestJS), the enterprise-grade foundation framework for building scalable, high-performance microservices and monorepo applications in TypeScript and Node.js.","source":"@site/docs/nestjs-yalc/docs/intro.md","sourceDirName":"nestjs-yalc/docs","slug":"/nestjs-yalc/docs/intro","permalink":"/docs/nestjs-yalc/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"intro","title":"Introduction & Ecosystem Architecture","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Architecture","permalink":"/docs/nestjs-yalc/architecture"},"next":{"title":"Quickstart & First Application Setup","permalink":"/docs/nestjs-yalc/docs/quickstart"}}')

},

};
;