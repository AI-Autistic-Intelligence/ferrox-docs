"use strict";
exports.ids = ["2877"];
exports.modules = {
87872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_introduction_md_41d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_introduction_md_41d_json__rspack_import_0 = __webpack_require__(47277);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'introduction',
	title: 'Introduction & Ferrox Crate Architecture',
	sidebar_position: 1
};
const contentTitle = 'Introduction & Ferrox Crate Architecture';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. Comprehensive Crate Ecosystem Taxonomy",
  "id": "2-comprehensive-crate-ecosystem-taxonomy",
  "level": 2
}, {
  "value": "3. Core Architectural Philosophy",
  "id": "3-core-architectural-philosophy",
  "level": 2
}, {
  "value": "1. High Performance &amp; Zero-Cost Abstractions",
  "id": "1-high-performance--zero-cost-abstractions",
  "level": 3
}, {
  "value": "2. Built-in Fault Tolerance &amp; Resilience",
  "id": "2-built-in-fault-tolerance--resilience",
  "level": 3
}, {
  "value": "3. End-to-End Type Safety",
  "id": "3-end-to-end-type-safety",
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
        id: "introduction--ferrox-crate-architecture",
        children: "Introduction & Ferrox Crate Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Welcome to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox"
      }), ", the enterprise-grade Rust web framework designed for building ultra-resilient microservices, multi-protocol API gateways, high-frequency real-time applications, and WebAssembly frontend clients."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Building production-ready software in Rust requires assembling multiple asynchronous crates: web servers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Axum"
      }), " / ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Hyper"
      }), "), ORMs (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SeaORM"
      }), "), security modules, resilience tools, and logging engines. Without a unified framework, developers spend significant time configuring boilerplate code and managing dependency compatibility."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox"
      }), " provides a modular suite of 35+ specialized Rust crates. It delivers NestJS-style dependency injection ergonomics, zero-copy performance, end-to-end type safety, and production observability out of the box."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                                   YOUR FERROX APP                                      │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  ferrox-app  │  ferrox-cqrs  │  ferrox-sentinel  │  ferrox-transports  │  ferrox-sync  │\n├──────────────┴───────────────┴───────────────────┴─────────────────────┴───────────────┤\n│                                 FERROX FRAMEWORK KERNEL                                │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  Tokio Async Runtime  │  Hyper HTTP / Axum  │  SeaORM Database  │  Pino / Tracing Logs │\n└────────────────────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-comprehensive-crate-ecosystem-taxonomy",
      children: "2. Comprehensive Crate Ecosystem Taxonomy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Crate"
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
                children: "ferrox-app"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Application Kernel"
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
                children: "ferrox-circuit-breaker"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fault Tolerance"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["State machine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Closed"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Open"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "HalfOpen"
            }), ") for remote APIs."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-cli"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Command Line Tooling"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Code generator, module scaffolder, migration runner."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-config"
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
            children: "Environment variable parsing with schema validation."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-cqrs"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Architecture Pattern"
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
                children: "ferrox-crud-gen"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automated CRUD"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Auto-generates REST/GraphQL CRUD routes from SeaORM entities."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-datagrid"
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
            children: "Server-side AG-Grid / TanStack Table SeaORM query builder."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-errors"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "System Taxonomy"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Type-safe error taxonomies with localized messages."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-events"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Event Bus"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In-process and distributed Kafka/AMQP event bus."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-graphql"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transport"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Async-GraphQL schema stitching, scalars, and federation."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-guards"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Security & Auth"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Declarative RBAC / ABAC / Multi-Tenant access guards."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-health"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Diagnostics"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Health checks, readiness probes, and liveness endpoints."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-i18n"
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
            children: "Translation catalogs, fallback resolution, pluralization."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-integrations"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Third-Party Services"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mailer, Payments (Stripe), Notifications (FCM/Twilio), Flags."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-interceptors"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Middleware"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dynamic request/response pipeline interceptors."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-jobs"
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
            children: "Distributed Redis job queue worker engine."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-logger"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Structured Logging"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fast JSON logging with OpenTelemetry trace bindings."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-metrics"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Observability"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Prometheus metric exporter (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req/sec"
            }), ", latency histograms)."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-migrations"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Database Schema"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Versioned schema migration runner & SQL DDL generator."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-rate-limiter"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Security"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sliding Window Log & Token Bucket rate limiters."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-saga"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Distributed Sagas"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Distributed transaction orchestrator with compensations."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-schedule"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Task Scheduling"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Distributed Cron scheduler engine & heartbeat workers."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-search"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Search Integration"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full-text & vector search integration (Meilisearch/Qdrant)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-security"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cryptography"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JWT signing (Ed25519), AES-256-GCM, distributed Redlock locks."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-selftest"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Compliance"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OWASP security compliance scan & p95 latency runner."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-sentinel"
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
            children: "Helmet CSP headers, CORS regex matcher, payload bouncer."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-singleflight"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Thundering Herd Shield"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lock-free concurrent request deduplicator."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-sse"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Real-Time Transport"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server-Sent Events streaming with reconnect resume support."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-storage"
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
                children: "ferrox-sync"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "CRDT Real-Time Sync"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Collaborative CRDT state synchronization over WebSockets."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-tracing"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Distributed Tracing"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OpenTelemetry trace span exporter (OTLP gRPC)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-transports"
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
            children: "Unified HTTP, gRPC, and Kafka transport engine."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-types"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Type Primitives"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shared type primitives & value objects."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-utils"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shared Tools"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-performance helper routines & collections."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-validation"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Schema Validation"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zero-cost validation macros & JSON schema checks."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-core-architectural-philosophy",
      children: "3. Core Architectural Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-high-performance--zero-cost-abstractions",
      children: "1. High Performance & Zero-Cost Abstractions"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Ferrox uses Rust's affine type system and Tokio async runtime to deliver near-bare-metal performance with zero garbage collection pauses."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-built-in-fault-tolerance--resilience",
      children: "2. Built-in Fault Tolerance & Resilience"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Circuit breakers, singleflight deduplicators, and distributed Redlocks are built directly into the framework primitives."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-end-to-end-type-safety",
      children: "3. End-to-End Type Safety"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Share identical data models between backend Rust microservices and frontend WebAssembly applications (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-execution-sequence-flow",
      children: "4. Execution Sequence Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Client Request\n    participant Sentinel as ferrox-sentinel Shield\n    participant App as Ferrox Kernel\n    participant Guard as Security Guard\n    participant Bus as CQRS CommandBus\n    participant DB as Database (SeaORM)\n\n    Client->>Sentinel: Incoming HTTP / gRPC Request\n    Sentinel->>Sentinel: Verify CSP Headers, CORS & Payload Size Limit\n    Sentinel->>App: Forward Clean Request\n    App->>Guard: Evaluate Roles & Tenant Isolation\n    Guard-->>App: Access Granted\n    App->>Bus: Dispatch Command ('CreateOrderCommand')\n    Bus->>DB: Execute Query inside CircuitBreaker\n    DB-->>Bus: Return Saved Entity\n    Bus-->>App: Command Execution Success\n    App-->>Client: Standard Response Payload { success: true, data }\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-next-steps",
      children: "5. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Proceed to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox/overview/first-steps",
          children: "First Steps"
        }), " to build your first Ferrox application."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Explore individual crate guides in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Fundamentals"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Security"
        }), " sidebar sections."]
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
47277(module) {
module.exports = JSON.parse('{"id":"ferrox/overview/introduction","title":"Introduction & Ferrox Crate Architecture","description":"Welcome to Ferrox, the enterprise-grade Rust web framework designed for building ultra-resilient microservices, multi-protocol API gateways, high-frequency real-time applications, and WebAssembly frontend clients.","source":"@site/docs/ferrox/overview/introduction.md","sourceDirName":"ferrox/overview","slug":"/ferrox/overview/introduction","permalink":"/docs/ferrox/overview/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/overview/introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"introduction","title":"Introduction & Ferrox Crate Architecture","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"🕵️ OpenTelemetry & Distributed Tracing","permalink":"/docs/ferrox/observability/tracing"},"next":{"title":"🚀 First Steps: Getting Started","permalink":"/docs/ferrox/overview/first-steps"}}')

},

};
;