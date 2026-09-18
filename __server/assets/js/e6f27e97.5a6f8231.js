"use strict";
exports.ids = ["8055"];
exports.modules = {
91081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_intro_md_e6f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_intro_md_e6f_json__rspack_import_0 = __webpack_require__(52376);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'intro',
	title: 'Introduction & Ferrox-Node Framework Architecture',
	sidebar_position: 1
};
const contentTitle = 'Introduction & Ferrox-Node Framework Architecture';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. Core Architectural Components",
  "id": "2-core-architectural-components",
  "level": 2
}, {
  "value": "3. Core Architectural Philosophy",
  "id": "3-core-architectural-philosophy",
  "level": 2
}, {
  "value": "1. High Performance &amp; Low Latency",
  "id": "1-high-performance--low-latency",
  "level": 3
}, {
  "value": "2. Built-in Resilience",
  "id": "2-built-in-resilience",
  "level": 3
}, {
  "value": "3. Comprehensive Observability",
  "id": "3-comprehensive-observability",
  "level": 3
}, {
  "value": "4. Execution Sequence Flow",
  "id": "4-execution-sequence-flow",
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
        id: "introduction--ferrox-node-framework-architecture",
        children: "Introduction & Ferrox-Node Framework Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Welcome to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox-Node"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), "), the high-performance enterprise Node.js framework designed for building ultra-resilient, event-driven microservices, multi-protocol API gateways, and distributed cloud applications."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Building production-ready microservices in Node.js requires integrating dozens of disconnected libraries: web frameworks (Fastify/Express), ORMs (TypeORM/Prisma), loggers (Pino), resilience tools (Circuit Breakers), tracing SDKs (OpenTelemetry), and job queues (BullMQ)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox-Node"
      }), " unifies these components into a single, cohesive microservice kernel. It eliminates glue code, enforces strict security boundaries, and provides production-grade operational features out of the box."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 YOUR FERROX MICROSERVICE                               │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  Routing Engine  │  CQRS Bus  │  Resilience Engine  │  Datagrid  │  Storage  │  Auth Guard │\n├──────────────────┴───────────┴────────────────────┴────────────┴───────────┴────────────┤\n│                                 FERROX-NODE CORE KERNEL                                │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  Pino Logger  │  AsyncLocalStorage Tracing  │  Zod Config  │  Self-Test Diagnostics    │\n└────────────────────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-core-architectural-components",
      children: "2. Core Architectural Components"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Component"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Category & Domain"
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
                children: "auth"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Security & Identity"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-strategy authentication (JWT, OAuth2, API Keys)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "config"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dynamic Settings"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zod schema environment validation & secrets manager caching."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "core"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Framework Kernel"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Application lifecycle bootstrap & dependency injection."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "cqrs"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pattern Architecture"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Command Bus, Query Bus, and Event Sourcing dispatchers."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "datagrid"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query Translation"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server-side AG-Grid / TanStack TypeORM query builder."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "guards"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Authorization"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Declarative RBAC / ABAC / Multi-Tenant security guards."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "i18n"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internationalization"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-language translation & localized string formatting."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "interfaces"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Core Contracts"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shared type definitions & standard response envelopes."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "jobs"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Background Queues"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Distributed queue processing powered by Redis & BullMQ."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "kernel"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Microservice Engine"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Context propagation & graceful shutdown orchestration."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "resilience"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fault Tolerance"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Circuit Breaker, Singleflight deduplication & retries."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "routing"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-Protocol"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Declarative REST, WebSocket & RPC route decorators."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "security"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Edge Protection"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Helmet CSP headers, rate limiters, payload bouncers."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "selftest"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Health Diagnostics"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OWASP security compliance runner & latency benchmarks."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "storage"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cloud Object Storage"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zero-buffer S3 streams & presigned download URLs."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "tracing"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Observability"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OpenTelemetry distributed tracing & W3C context headers."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "transports"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-Protocol"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fastify HTTP, Express HTTP & Kafka messaging engines."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-core-architectural-philosophy",
      children: "3. Core Architectural Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-high-performance--low-latency",
      children: "1. High Performance & Low Latency"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Built around Fastify and Pino, Ferrox-Node avoids synchronous blocking bottlenecks and uses zero-copy memory pipelines wherever possible."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-built-in-resilience",
      children: "2. Built-in Resilience"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Every external API call or database query can be wrapped in Circuit Breakers and Singleflight deduplicators to prevent thundering herd crashes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-comprehensive-observability",
      children: "3. Comprehensive Observability"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Every log entry, HTTP request, database query, and Kafka event automatically retains trace correlation IDs via Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AsyncLocalStorage"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-execution-sequence-flow",
      children: "4. Execution Sequence Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Gateway as API Gateway\n    participant Kernel as Ferrox Kernel\n    participant Guard as Security Guard\n    participant Bus as CQRS CommandBus\n    participant DB as Database / Resilience Engine\n    participant Trace as Tracing Engine\n\n    Gateway->>Kernel: Incoming Request HTTP / WebSocket\n    Kernel->>Trace: Bind W3C TraceContext to AsyncLocalStorage\n    Kernel->>Guard: Evaluate Authorization & Tenant Isolation\n    Guard-->>Kernel: Access Granted\n    Kernel->>Bus: Dispatch Command ('CreateOrderCommand')\n    Bus->>DB: Execute Query inside CircuitBreaker\n    DB-->>Bus: Return Saved Order Entity\n    Bus-->>Kernel: Command Result\n    Kernel-->>Gateway: Deliver Standard Response Envelope { success: true, data }\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-next-steps",
      children: "5. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Proceed to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox-node/docs/quickstart",
          children: "Quickstart Guide"
        }), " to bootstrap your first Ferrox-Node service."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Explore individual component guides in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Framework Components"
        }), " sidebar section."]
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
52376(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/intro","title":"Introduction & Ferrox-Node Framework Architecture","description":"Welcome to Ferrox-Node (@ferrox/node), the high-performance enterprise Node.js framework designed for building ultra-resilient, event-driven microservices, multi-protocol API gateways, and distributed cloud applications.","source":"@site/docs/ferrox-node/docs/intro.md","sourceDirName":"ferrox-node/docs","slug":"/ferrox-node/docs/intro","permalink":"/docs/ferrox-node/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"intro","title":"Introduction & Ferrox-Node Framework Architecture","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/ferrox-node/overview"},"next":{"title":"Quickstart Guide & Service Bootstrap","permalink":"/docs/ferrox-node/docs/quickstart"}}')

},

};
;