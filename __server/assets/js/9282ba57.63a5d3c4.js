"use strict";
exports.ids = ["5784"];
exports.modules = {
71258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_observability_md_928_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_observability_md_928_json__rspack_import_0 = __webpack_require__(76333);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'observability',
	title: '@nest-yalc-2/observability',
	sidebar_position: 5
};
const contentTitle = '🔭 OpenTelemetry & Sentry Observability (@nest-yalc-2/observability)';

const assets = {

};



const toc = [{
  "value": "🌟 Key Features",
  "id": "-key-features",
  "level": 2
}, {
  "value": "🔬 Internal Architecture &amp; Mechanics",
  "id": "-internal-architecture--mechanics",
  "level": 2
}, {
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/observability</code> vs Manual Telemetry",
  "id": "-architectural-comparison-nest-yalc-2observability-vs-manual-telemetry",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Initializing Observability Module in <code>main.ts</code> &amp; <code>AppModule</code>",
  "id": "1-initializing-observability-module-in-maints--appmodule",
  "level": 3
}, {
  "value": "2. Adding Custom Tracing Spans in Business Services",
  "id": "2-adding-custom-tracing-spans-in-business-services",
  "level": 3
}, {
  "value": "⚠️ Common Pitfalls &amp; Anti-Patterns",
  "id": "️-common-pitfalls--anti-patterns",
  "level": 2
}, {
  "value": "💡 Best Practices",
  "id": "-best-practices",
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
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h1, {
        id: "-opentelemetry--sentry-observability-nest-yalc-2observability",
        children: ["🔭 OpenTelemetry & Sentry Observability (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/observability"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/observability"
      }), " provides enterprise distributed tracing, metrics collection, and exception tracking for NestJS 11+. It integrates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "OpenTelemetry OTLP exporters"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Prometheus metric collectors"
      }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Sentry error reporting"
      }), " into a unified NestJS module."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "OpenTelemetry OTLP Tracing"
        }), ": Emits distributed trace spans for HTTP requests, TypeORM SQL queries, Redis calls, and Kafka messages."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Sentry Exception Reporter"
        }), ": Automatically captures unhandled exceptions, attaching trace IDs, user context, and environment breadcrumbs."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Prometheus Metrics Exporter"
        }), ": Exposes a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/metrics"
        }), " endpoint with request duration histograms, active connection counts, and memory metrics."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Trace Parent Propagation"
        }), ": Propagates W3C Trace Context headers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "traceparent"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "tracestate"
        }), ") across HTTP microservices and Kafka message headers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--mechanics",
      children: "🔬 Internal Architecture & Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Request[\"Incoming HTTP / Kafka Message\"]\n    OTELSDK[\"OpenTelemetry NodeSDK Instrumentation\"]\n    HttpSpan[\"HTTP Server Span Created\"]\n    DbSpan[\"TypeORM DB Query Sub-Span\"]\n    ErrorCheck{\"Unhandled Exception?\"}\n    Sentry[\"Sentry SDK Capture & Alert\"]\n    OtlpCollector[\"OTLP Collector (Jaeger / Datadog / NewRelic)\"]\n\n    Request --> OTELSDK\n    OTELSDK --> HttpSpan\n    HttpSpan --> DbSpan\n    DbSpan --> ErrorCheck\n    ErrorCheck -->|Yes| Sentry\n    ErrorCheck -->|No| OtlpCollector\n    Sentry --> OtlpCollector\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2observability-vs-manual-telemetry",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/observability"
      }), " vs Manual Telemetry"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🔭 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/observability"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Manual Telemetry Setup"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Trace Span Auto-Instrumentation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "HTTP, TypeORM, Redis, Kafka (Zero-Code)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Span Creation & Context Binding"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Sentry Error Correlation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Binds Sentry Events to W3C Trace IDs"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Isolated Uncorrelated Sentry Alerts"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "W3C Trace Parent Propagation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automatic Header Injection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Header Parsing & Formatting"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-initializing-observability-module-in-maints--appmodule",
      children: ["1. Initializing Observability Module in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.ts"
      }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { YalcObservabilityModule, initOpenTelemetrySDK } from '@nest-yalc-2/observability';\nimport { Module } from '@nestjs/common';\n\n// Initialize OpenTelemetry SDK before NestJS bootstrap\ninitOpenTelemetrySDK({\n  serviceName: 'order-service',\n  otlpEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://otel-collector:4318/v1/traces',\n});\n\n@Module({\n  imports: [\n    YalcObservabilityModule.forRoot({\n      serviceName: 'order-service',\n      sentryDsn: process.env.SENTRY_DSN,\n      enablePrometheusMetrics: true,\n      metricsPath: '/metrics',\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-adding-custom-tracing-spans-in-business-services",
      children: "2. Adding Custom Tracing Spans in Business Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { YalcTrace } from '@nest-yalc-2/observability';\n\n@Injectable()\nexport class OrderFulfillmentService {\n\n  @YalcTrace('fulfill_order_workflow')\n  async fulfillOrder(orderId: string): Promise<void> {\n    // Custom trace span automatically created for this method execution\n    console.log('Fulfilling order:', orderId);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "High Cardinality Metrics Labels"
        }), ": Avoid adding high-cardinality values (such as user IDs or order UUIDs) as labels in Prometheus metrics. High cardinality labels overwhelm Prometheus memory indexing. Use trace attributes in OpenTelemetry instead."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Jaeger & Grafana Integration"
        }), ": Route OTLP trace exports to an OpenTelemetry Collector daemon, which forwards spans to Jaeger for distributed trace visualization and Grafana for latency dashboards."]
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
76333(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/observability","title":"@nest-yalc-2/observability","description":"@nest-yalc-2/observability provides enterprise distributed tracing, metrics collection, and exception tracking for NestJS 11+. It integrates OpenTelemetry OTLP exporters, Prometheus metric collectors, and Sentry error reporting into a unified NestJS module.","source":"@site/docs/nestjs-yalc/docs/modules/observability.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/observability","permalink":"/docs/nestjs-yalc/docs/modules/observability","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/observability.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"observability","title":"@nest-yalc-2/observability","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/logger","permalink":"/docs/nestjs-yalc/docs/modules/logger"},"next":{"title":"@nest-yalc-2/sentinel","permalink":"/docs/nestjs-yalc/docs/modules/sentinel"}}')

},

};
;