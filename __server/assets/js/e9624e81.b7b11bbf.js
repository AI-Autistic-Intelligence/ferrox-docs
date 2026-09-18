"use strict";
exports.ids = ["2358"];
exports.modules = {
16123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_logger_md_e96_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_logger_md_e96_json__rspack_import_0 = __webpack_require__(93683);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'logger',
	title: '@nest-yalc-2/logger',
	sidebar_position: 4
};
const contentTitle = '📝 Contextual Pino Logging Module (@nest-yalc-2/logger)';

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
  "value": "Trace Correlation Pipeline",
  "id": "trace-correlation-pipeline",
  "level": 3
}, {
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/logger</code> vs NestJS Default Logger",
  "id": "-architectural-comparison-nest-yalc-2logger-vs-nestjs-default-logger",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Registering Logger Module in <code>AppModule</code>",
  "id": "1-registering-logger-module-in-appmodule",
  "level": 3
}, {
  "value": "2. Injecting and Using Logger inside Services",
  "id": "2-injecting-and-using-logger-inside-services",
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
    ol: "ol",
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
        id: "-contextual-pino-logging-module-nest-yalc-2logger",
        children: ["📝 Contextual Pino Logging Module (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/logger"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/logger"
      }), " provides a high-performance, structured Pino logging integration for NestJS 11+. It automatically correlates HTTP request IDs (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "X-Request-Id"
      }), ") across asynchronous execution contexts using Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AsyncLocalStorage"
      }), ", redacting sensitive payload data for GDPR and PCI-DSS compliance."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Asynchronous Context Correlation"
        }), ": Automatically injects request trace IDs into all log statements emitted during an HTTP or GraphQL request lifecycle."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "High-Performance Pino Engine"
        }), ": Up to 5x faster than standard NestJS console loggers or Winston."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Sensitive Data Masking"
        }), ": Configurable redaction rules for passwords, credit card numbers, authorization tokens, and API secrets."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "NestJS Logger Interface Replacement"
        }), ": Replaces NestJS's default ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "LoggerService"
        }), " globally across all modules."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--mechanics",
      children: "🔬 Internal Architecture & Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    InboundReq[\"Inbound Request (X-Request-Id: req_88192)\"]\n    AsyncStorage[\"AsyncLocalStorage Context Binding\"]\n    NestService[\"App Service / Interceptor Execution\"]\n    PinoEngine[\"Pino Logger Core (SonicBoom Stream)\"]\n    RedactFilter[\"In-place Redaction Filter\"]\n    Output[\"Stdout / CloudWatch / Datadog JSON Stream\"]\n\n    InboundReq --> AsyncStorage\n    AsyncStorage --> NestService\n    NestService --> PinoEngine\n    PinoEngine --> RedactFilter\n    RedactFilter --> Output\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "trace-correlation-pipeline",
      children: "Trace Correlation Pipeline"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Middleware Injection"
        }), ": When an HTTP request enters the application, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "YalcLoggerMiddleware"
        }), " checks for an existing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Request-Id"
        }), " header or generates a cryptographically random UUID v4 string."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Context Preservation"
        }), ": The request ID is stored in Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AsyncLocalStorage"
        }), ". Any log call invoked inside controller methods, services, or repositories automatically retrieves and appends ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "requestId: req_88192"
        }), " to the output JSON payload."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2logger-vs-nestjs-default-logger",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/logger"
      }), " vs NestJS Default Logger"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Metric / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["📝 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/logger"
            }), " (Pino)"]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🐢 NestJS Default ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "ConsoleLogger"
            })]
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Logging Format"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Structured JSON Output"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Unstructured Formatted Plaintext"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Async Context Correlation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Native ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "AsyncLocalStorage"
              }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "X-Request-Id"
              }), ")"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Parameter Passing"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Throughput (Logs/sec)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "> 35,000 logs/sec"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "~7,000 logs/sec"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Data Masking"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native Redaction Rules"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Sanitization Code"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-registering-logger-module-in-appmodule",
      children: ["1. Registering Logger Module in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcLoggerModule } from '@nest-yalc-2/logger';\n\n@Module({\n  imports: [\n    YalcLoggerModule.forRoot({\n      pinoOptions: {\n        level: process.env.LOG_LEVEL || 'info',\n        redact: [\n          'password',\n          'authorization',\n          '*.secret',\n          'creditCard.number',\n        ],\n      },\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-injecting-and-using-logger-inside-services",
      children: "2. Injecting and Using Logger inside Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { YalcLoggerService } from '@nest-yalc-2/logger';\n\n@Injectable()\nexport class PaymentProcessingService {\n  constructor(private readonly logger: YalcLoggerService) {\n    this.logger.setContext(PaymentProcessingService.name);\n  }\n\n  async processPayment(orderId: string, amount: number, paymentDetails: any): Promise<void> {\n    // Log statement automatically includes X-Request-Id and masks paymentDetails.creditCard\n    this.logger.info('Initiating payment processing for order', {\n      orderId,\n      amount,\n      paymentDetails, // Automatically redacted based on pinoOptions\n    });\n\n    try {\n      // Execute payment gateway call\n      this.logger.debug('Payment gateway call successful', { orderId });\n    } catch (error: any) {\n      this.logger.error('Payment processing failed', error.stack, { orderId });\n      throw error;\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Logging Raw Request / Response Objects"
        }), ": Avoid calling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "this.logger.info(req)"
        }), " directly. Logging raw Node.js HTTP request streams can cause circular reference errors or crash process memory during stringification."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Production Log Aggregation"
        }), ": In Kubernetes or Docker environments, pipe stdout logs to FluentBit or Datadog Agent. Pino's native JSON output requires zero extra parsing CPU cycles on log aggregators."]
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
93683(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/logger","title":"@nest-yalc-2/logger","description":"@nest-yalc-2/logger provides a high-performance, structured Pino logging integration for NestJS 11+. It automatically correlates HTTP request IDs (X-Request-Id) across asynchronous execution contexts using Node.js AsyncLocalStorage, redacting sensitive payload data for GDPR and PCI-DSS compliance.","source":"@site/docs/nestjs-yalc/docs/modules/logger.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/logger","permalink":"/docs/nestjs-yalc/docs/modules/logger","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/logger.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"logger","title":"@nest-yalc-2/logger","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/database","permalink":"/docs/nestjs-yalc/docs/modules/database"},"next":{"title":"@nest-yalc-2/observability","permalink":"/docs/nestjs-yalc/docs/modules/observability"}}')

},

};
;