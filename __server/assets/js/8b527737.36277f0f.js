"use strict";
exports.ids = ["3421"];
exports.modules = {
10854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_tracing_md_8b5_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_tracing_md_8b5_json__rspack_import_0 = __webpack_require__(63525);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'tracing',
	title: 'OpenTelemetry Distributed Tracing & Correlation Identifiers',
	sidebar_position: 16
};
const contentTitle = 'OpenTelemetry Distributed Tracing & Correlation Identifiers';

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
  "value": "Distributed Trace Context Propagation",
  "id": "distributed-trace-context-propagation",
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
  "value": "5.1 Initializing Tracing Module in Microservices",
  "id": "51-initializing-tracing-module-in-microservices",
  "level": 3
}, {
  "value": "5.2 Creating Manual Custom Spans",
  "id": "52-creating-manual-custom-spans",
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
        id: "opentelemetry-distributed-tracing--correlation-identifiers",
        children: "OpenTelemetry Distributed Tracing & Correlation Identifiers"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " tracing component delivers zero-overhead distributed tracing, OpenTelemetry (OTel) instrumentation, correlation ID propagation across HTTP/gRPC/Kafka boundaries, and Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AsyncLocalStorage"
      }), " context retention."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In a distributed microservice ecosystem, a single user click can trigger a chain of multi-service HTTP requests, database queries, and asynchronous Kafka events. When an error occurs or latencies spike, diagnosing the root cause across log files requires distributed trace correlation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tracing"
      }), " module automatically creates OpenTelemetry trace spans, injects correlation identifiers into HTTP request headers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "x-correlation-id"
      }), ") and Kafka event headers, and binds trace state to Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AsyncLocalStorage"
      }), " so loggers automatically log the current trace ID without manual parameter passing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        Ferrox Tracing Pipeline                         │\n├────────────────────────────────────────────────────────────────────────┤\n│  • W3C TraceContext & B3 Header Extractor                              │\n│  • AsyncLocalStorage Trace Context Manager                             │\n│  • OpenTelemetry Exporter (Jaeger / Zipkin / OTLP gRPC)               │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Context Propagation\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ HTTP API Requests    ││ TypeORM SQL Queries  ││ Kafka Event Streams  │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Header Injection/Extraction"
        }), ": Reads/writes W3C ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "traceparent"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "x-correlation-id"
        }), " headers seamlessly across microservices."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "AsyncLocalStorage Context Retention"
        }), ": Preserves current trace span context across async execution threads without prop-drilling."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TypeORM & Redis Span Instrumentation"
        }), ": Automatically records SQL execution time and Redis cache query spans."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "OTLP Exporter Integration"
        }), ": Ships spans to OpenTelemetry collectors, Grafana Tempo, Jaeger, and Datadog via OTLP gRPC/HTTP."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "distributed-trace-context-propagation",
      children: "Distributed Trace Context Propagation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as API Gateway\n    participant ServiceA as Service A (Order)\n    participant ALS as AsyncLocalStorage Context\n    participant Kafka as Kafka Broker\n    participant ServiceB as Service B (Inventory)\n\n    Client->>ServiceA: HTTP POST /orders (x-correlation-id: \"corr_999\")\n    ServiceA->>ALS: Bind TraceID \"trace_123\" to AsyncLocalStorage Thread\n    ServiceA->>ServiceA: Execute Order Creation Handler\n    ServiceA->>Kafka: Publish Event 'OrderCreated' (Inject W3C traceparent header)\n    Kafka->>ServiceB: Consume Event 'OrderCreated'\n    ServiceB->>ALS: Extract traceparent -> Bind TraceID \"trace_123\" to Thread B\n    ServiceB->>ServiceB: Reserve Inventory (Logged under TraceID \"trace_123\")\n"
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
            children: "Manual Trace Parameter Passing"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Distributed Tracing"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Developer Ergonomics"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Manual ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "(traceId, span)"
            }), " passed to every function call."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Zero prop-drilling. Loggers automatically read ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AsyncLocalStorage"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Cross-Protocol"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Correlation breaks when jumping from HTTP to Kafka."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automatic header injection across REST, GraphQL, Kafka, and gRPC."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High allocation overheads."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sampling rates (e.g., 10% sampling) prevent log collector floods."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-initializing-tracing-module-in-microservices",
      children: "5.1 Initializing Tracing Module in Microservices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { TracingEngine } from '@ferrox/node';\n\nconst tracing = new TracingEngine({\n  serviceName: 'payment-service',\n  exporterUrl: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4317',\n  samplingRatio: 0.1, // Sample 10% of production transactions\n});\n\ntracing.start();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-creating-manual-custom-spans",
      children: "5.2 Creating Manual Custom Spans"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { TracingEngine } from '@ferrox/node';\n\nexport async function processPayment(paymentId: string, amount: number) {\n  return await TracingEngine.trace('processPaymentTask', async (span) => {\n    span.setAttribute('paymentId', paymentId);\n    span.setAttribute('amount', amount);\n\n    // Perform heavy payment processing logic\n    const result = await executePaymentGatewayCall(paymentId, amount);\n\n    span.setAttribute('status', result.status);\n    return result;\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Disabling AsyncLocalStorage"
        }), "\nAvoid manually extracting trace ID headers in controllers and storing them in global variables. Node.js event-loop concurrency will cause trace IDs to bleed between requests."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Automatic Pino Logger Integration"
        }), "\nPair Ferrox Tracing with Ferrox Logger so every JSON log output automatically includes ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"traceId\": \"...\""
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"spanId\": \"...\""
        }), "."]
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
63525(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/tracing","title":"OpenTelemetry Distributed Tracing & Correlation Identifiers","description":"The @ferrox/node tracing component delivers zero-overhead distributed tracing, OpenTelemetry (OTel) instrumentation, correlation ID propagation across HTTP/gRPC/Kafka boundaries, and Node.js AsyncLocalStorage context retention.","source":"@site/docs/ferrox-node/docs/components/tracing.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/tracing","permalink":"/docs/ferrox-node/docs/components/tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/tracing.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"tracing","title":"OpenTelemetry Distributed Tracing & Correlation Identifiers","sidebar_position":16},"sidebar":"tutorialSidebar","previous":{"title":"Cloud Storage, S3 Streams & Presigned URLs","permalink":"/docs/ferrox-node/docs/components/storage"},"next":{"title":"Overview","permalink":"/docs/nestjs-yalc/overview"}}')

},

};
;