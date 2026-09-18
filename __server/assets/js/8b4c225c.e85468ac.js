"use strict";
exports.ids = ["51"];
exports.modules = {
53429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_utils_md_8b4_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_utils_md_8b4_json__rspack_import_0 = __webpack_require__(11019);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'utils',
	title: '@node-yalc/utils',
	sidebar_position: 5
};
const contentTitle = '🛠️ Core Utilities & Concurrency Control (@node-yalc/utils)';

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
  "value": "🧠 4. Why It Was Designed This Way (Controlled Concurrency vs Promise.all)",
  "id": "-4-why-it-was-designed-this-way-controlled-concurrency-vs-promiseall",
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
        id: "️-core-utilities--concurrency-control-node-yalcutils",
        children: ["🛠️ Core Utilities & Concurrency Control (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/utils"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/utils"
      }), " is the high-performance utility and concurrency execution library of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc"
      }), ". It was designed to provide memory-efficient ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "object mapping"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
        children: ["concurrency-limited task runners (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "runConcurrently"
        }), ")"]
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "deep object sanitization"
      }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "serialization helpers"
      }), " without introducing heavy third-party utility dependencies like ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "lodash"
      }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "async"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Concurrency Execution Runner (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "runConcurrently"
          }), ")"]
        }), ": Bounded asynchronous task runner preventing Event Loop queue overload."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Deep Object Sanitization (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "sanitizeObject"
          }), ")"]
        }), ": Strips ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "undefined"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "null"
        }), ", or sensitive keys recursively from data objects."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Deep Clone & Merge"
        }), ": Memory-optimized object cloning and merging."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    TaskQueue[\"Task Queue (10,000 items)\"]\n    WorkerPool[\"Concurrency Pool (Limit: 5)\"]\n    Worker1[\"Worker 1\"]\n    Worker2[\"Worker 2\"]\n    Worker3[\"Worker 3\"]\n    Worker4[\"Worker 4\"]\n    Worker5[\"Worker 5\"]\n    Results[\"Results Array\"]\n\n    TaskQueue --> WorkerPool\n    WorkerPool --> Worker1 & Worker2 & Worker3 & Worker4 & Worker5\n    Worker1 & Worker2 & Worker3 & Worker4 & Worker5 --> Results\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "runConcurrently"
          }), " Engine"]
        }), ": Uses an internal queue worker pool. When a task resolves, the worker immediately pulls the next item from the input array, ensuring that no more than $N$ promises run concurrently."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-controlled-concurrency-vs-promiseall",
      children: "🧠 4. Why It Was Designed This Way (Controlled Concurrency vs Promise.all)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Metric / Scenario"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🛠️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "runConcurrently"
            }), " (Limit: 10)"]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Promise.all(...)"
            })]
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Memory Allocation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Bounded Memory Pool"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Unbounded Memory Spike (10k Promises created at once)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Database Connection Pool"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Prevents Pool Exhaustion"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Crashes Connection Pool with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "ECONNRESET"
            })]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Error Handling"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Configurable (Fail-Fast or Settle All)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Rejects immediately on first error"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { runConcurrently, sanitizeObject } from '@node-yalc/utils';\n\nasync function processUserQueue() {\n  const userIds = Array.from({ length: 500 }, (_, i) => `usr_${i + 1}`);\n\n  // Process 500 items with a maximum concurrency limit of 5 parallel workers\n  const results = await runConcurrently(userIds, async (id) => {\n    return await fetchExternalAPIData(id);\n  }, { concurrency: 5 });\n\n  console.log(`Processed ${results.length} user records successfully.`);\n\n  // Deep sanitize an object to remove undefined values\n  const rawPayload = { name: 'Alice', age: undefined, role: null };\n  const cleanPayload = sanitizeObject(rawPayload, { removeUndefined: true });\n  console.log('Sanitized Payload:', cleanPayload); // { name: 'Alice', role: null }\n}\n\nprocessUserQueue().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["DO NOT use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Promise.all()"
          }), " over thousands of database queries or API calls"]
        }), ": Running ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Promise.all()"
        }), " over large arrays consumes all available database connection pool slots and leads to socket timeouts. Always use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "runConcurrently"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database Pool Sizing"
        }), ": Set ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "concurrency"
        }), " to match your database connection pool size (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "concurrency: 10"
        }), " for a Postgres connection pool of 10 connections) to maximize I/O throughput without queue wait times."]
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
11019(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/utils","title":"@node-yalc/utils","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/node-yalc/docs/packages/utils.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/utils","permalink":"/docs/node-yalc/docs/packages/utils","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/utils.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"utils","title":"@node-yalc/utils","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"@node-yalc/errors","permalink":"/docs/node-yalc/docs/packages/errors"},"next":{"title":"@node-yalc/event-manager","permalink":"/docs/node-yalc/docs/packages/event-manager"}}')

},

};
;