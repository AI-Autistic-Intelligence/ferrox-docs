"use strict";
exports.ids = ["2603"];
exports.modules = {
23882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_logger_md_c95_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_logger_md_c95_json__rspack_import_0 = __webpack_require__(86163);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'logger',
	title: '@node-yalc/logger',
	sidebar_position: 3
};
const contentTitle = '📝 Structured Pino Logger (@node-yalc/logger)';

const assets = {

};



const toc = [{
  "value": "💡 1. What It Is &amp; Architectural Purpose",
  "id": "-1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "⚙️ 2. What It Does &amp; Key Features",
  "id": "️-2-what-it-does--key-features",
  "level": 2
}, {
  "value": "🔬 3. How It Works Under the Hood",
  "id": "-3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "🧠 4. Why It Was Designed This Way (Rationale vs Winston)",
  "id": "-4-why-it-was-designed-this-way-rationale-vs-winston",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "⚠️ 6. Anti-Patterns: How NOT to Use It",
  "id": "️-6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "💡 7. Pro-Tips &amp; Best Practices",
  "id": "-7-pro-tips--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "-structured-pino-logger-node-yalclogger",
        children: ["📝 Structured Pino Logger (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/logger"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/logger"
      }), " is the high-performance structured logging package for the entire ecosystem. Built on top of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Pino"
      }), ", it was engineered to provide JSON-structured logging with minimal CPU overhead, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "automatic sensitive data redaction"
      }), " (GDPR/PCI-DSS compliance), and complete decoupling from web framework lifecycles."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "JSON Structured Logging"
        }), ": Native JSON output for ingestion into Datadog, ELK, Grafana Loki, or AWS CloudWatch."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Sensitive Data Redaction"
        }), ": Automatically masks passwords, authorization headers, credit cards, and secrets."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Trace Context Correlation"
        }), ": Propagates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Request-Id"
        }), " correlation IDs across asynchronous execution contexts."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zero Overhead"
        }), ": Up to 5x faster than traditional Node.js loggers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "winston"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "bunyan"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    LogCall[\"logger.info(msg, payload)\"]\n    RedactEngine[\"SonicBoom Redaction Filter\"]\n    JsonStream[\"Async JSON Stream\"]\n    Stdout[\"process.stdout / CloudWatch\"]\n\n    LogCall --> RedactEngine\n    RedactEngine --> JsonStream\n    JsonStream --> Stdout\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Async Logging via SonicBoom"
        }), ": Logs are serialized and written non-blockingly using high-speed memory buffers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "In-place Redaction"
        }), ": Pino directly overwrites keys matching redaction patterns prior to stringifying JSON to stdout."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-rationale-vs-winston",
      children: "🧠 4. Why It Was Designed This Way (Rationale vs Winston)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Metric"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["📝 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@node-yalc/logger"
            }), " (Pino)"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Winston / Bunyan"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Serialization Speed"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Up to 30,000 logs/sec"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "~6,000 logs/sec"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Event Loop Blocking"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Minimal (Non-Blocking SonicBoom)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "High (Synchronous Stringify on Event Loop)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "GDPR/PCI-DSS Redaction"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native Serialization-Level Masking"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Custom Slow Formatters"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createYalcLogger } from '@node-yalc/logger';\n\n// 1. Initialize Logger with Custom Redaction Rules\nconst logger = createYalcLogger({\n  level: 'debug',\n  redact: ['password', 'creditCard.number', 'authorization', 'apiKey']\n});\n\n// 2. Log with Contextual Metadata\nlogger.info('User authenticated successfully', {\n  userId: 'usr_99120',\n  ip: '192.168.1.50',\n  authorization: 'Bearer eyJhbGciOi...' // Automatically masked to \"[REDACTED]\"\n});\n\n// Output JSON on stdout:\n// {\"level\":30,\"time\":1695062400000,\"msg\":\"User authenticated successfully\",\"userId\":\"usr_99120\",\"ip\":\"192.168.1.50\",\"authorization\":\"[REDACTED]\"}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["DO NOT use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "console.log()"
          }), " in production"]
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "console.log"
        }), " is a synchronous blocking I/O operation that stalls the Node.js event loop and exposes un-redacted sensitive data."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT log raw request or database objects directly"
        }), ": Passing circular objects or active connection instances can cause memory exhaustion during JSON serialization."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Local Development Formatting"
        }), ": In local development, pipe JSON output into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "pino-pretty"
        }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "node app.js | npx pino-pretty"
        }), ") for colorized logs without impacting production performance."]
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
86163(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/logger","title":"@node-yalc/logger","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/node-yalc/docs/packages/logger.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/logger","permalink":"/docs/node-yalc/docs/packages/logger","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/logger.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"logger","title":"@node-yalc/logger","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Core Interfaces, Generic DTO Contracts & Envelopes","permalink":"/docs/node-yalc/docs/packages/interfaces"},"next":{"title":"Extended Type Definitions, Mixins & Meta-Type Extensions","permalink":"/docs/node-yalc/docs/packages/types-extends"}}')

},

};
;