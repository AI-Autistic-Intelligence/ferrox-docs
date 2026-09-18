"use strict";
exports.ids = ["9684"];
exports.modules = {
81758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_utils_md_644_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_utils_md_644_json__rspack_import_0 = __webpack_require__(54038);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'utils',
	title: 'Core Utilities, Helpers & Object Manipulation',
	sidebar_position: 16
};
const contentTitle = 'Core Utilities, Helpers & Object Manipulation';

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
  "value": "Concurrent Task Queue Execution Mechanics",
  "id": "concurrent-task-queue-execution-mechanics",
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
  "value": "5.1 Controlled Async Queue Worker (<code>runConcurrently</code>)",
  "id": "51-controlled-async-queue-worker-runconcurrently",
  "level": 3
}, {
  "value": "5.2 Deep Object Sanitization &amp; Hashing",
  "id": "52-deep-object-sanitization--hashing",
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
        id: "core-utilities-helpers--object-manipulation",
        children: "Core Utilities, Helpers & Object Manipulation"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/utils"
      }), " package is the core utility toolkit for the NestJS-Yalc ecosystem. It provides high-performance, type-safe utility functions for object manipulation, array operations, concurrent async processing, string transformations, class reflection helpers, and cryptographic hashing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Node.js enterprise applications frequently require low-level helper routines: deep merging configuration objects, concurrency-throttled array mapping, sanitizing circular references, generating deterministic hash signatures, or manipulating TypeScript types at runtime. Using uncontrolled third-party libraries (or duplicating un-tested snippets across services) introduces security vulnerabilities and code instability."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/utils"
      }), " aggregates optimized, zero-dependency, rigorously unit-tested utility routines specifically tailored for NestJS microservice environments."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "                               ┌─────────────────────────────┐\n                               │     @nestjs-yalc/utils      │\n                               └──────────────┬──────────────┘\n                                              │\n         ┌───────────────────────────┬────────┴───────────────────┬───────────────────────────┐\n         │                           │                            │                           │\n         ▼                           ▼                            ▼                           ▼\n┌──────────────────┐       ┌──────────────────┐         ┌──────────────────┐        ┌──────────────────┐\n│ Object & Deep    │       │ Async Queue &    │         │ Type & Class     │        │ Crypto & Hash    │\n│ Manipulation     │       │ Concurrency      │         │ Reflection       │        │ Sanitizers       │\n└──────────────────┘       └──────────────────┘         └──────────────────┘        └──────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "runConcurrently()"
          })
        }), ": Executes asynchronous task queues with strict concurrency concurrency limits and error collection strategy."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "deepMerge()"
          }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "deepClone()"
          })]
        }), ": Performs immutable, memory-efficient deep object merging and copying without prototype pollution vulnerabilities."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "sanitizeObject()"
          })
        }), ": Strips sensitive properties (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "password"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "secret"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "creditCard"
        }), "), circular references, and null/undefined values recursively."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Class & Reflection Helpers"
        }), ": Utility methods to inspect NestJS metadata keys, extract class property names, and manipulate decorators at runtime."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Deterministic Hashing"
        }), ": Fast SHA-256 and MD5 hashing helpers for object checksum comparison and caching keys."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "concurrent-task-queue-execution-mechanics",
      children: "Concurrent Task Queue Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant App as App Code\n    participant Worker as runConcurrently Manager\n    participant Pool as Active Task Slots (Limit: N)\n    participant Output as Consolidated Results\n\n    App->>Worker: runConcurrently(items, taskFn, { concurrency: 3 })\n    Worker->>Pool: Spawn Initial Batch (Tasks 1, 2, 3)\n    Pool-->>Worker: Task 2 Completes -> Fill Slot with Task 4\n    Pool-->>Worker: Task 1 Completes -> Fill Slot with Task 5\n    Pool-->>Worker: Task 3 Completes -> Fill Slot with Task 6\n    Worker->>Output: Collect Success & Settled Results Array\n    Output-->>App: Promise.all Settled Output Array\n"
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
            children: "Standard Lodash / Native JS"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@nestjs-yalc/utils"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "lodash.merge"
            }), " is vulnerable to prototype pollution."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Hardened against ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "__proto__"
            }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "constructor"
            }), " prototype manipulation."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Promise.all"
            }), " executes all items simultaneously, overloading DB pools."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Controlled concurrency limits (e.g., max 10 concurrent requests)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Type Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Loose ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "any"
            }), " typing in generic helpers."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fully typed TS generics preserving object schema inferencing."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "51-controlled-async-queue-worker-runconcurrently",
      children: ["5.1 Controlled Async Queue Worker (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "runConcurrently"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { runConcurrently } from '@nestjs-yalc/utils';\n\ninterface SyncTask { id: string; payload: string; }\n\nasync function processBatch(tasks: SyncTask[]) {\n  const results = await runConcurrently(\n    tasks,\n    async (task) => {\n      // Async database or external HTTP operation\n      return await updateExternalResource(task.id, task.payload);\n    },\n    { concurrency: 5, stopOnError: false }\n  );\n\n  console.log(`Processed ${results.length} tasks concurrently.`);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-deep-object-sanitization--hashing",
      children: "5.2 Deep Object Sanitization & Hashing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { sanitizeObject, hashObject } from '@nestjs-yalc/utils';\n\nconst rawUserData = {\n  id: 'usr_100',\n  username: 'johndoe',\n  passwordHash: 'secret_hash_123',\n  creditCard: { number: '4111-xxxx-xxxx-1111', cvv: '123' },\n  address: null,\n};\n\n// Strips sensitive fields recursively\nconst safeObject = sanitizeObject(rawUserData, ['passwordHash', 'cvv']);\n\n// Generates deterministic hash signature for cache keying\nconst cacheKey = hashObject(safeObject);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Unbounded Concurrency"
        }), "\nSetting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "concurrency: 1000"
        }), " in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "runConcurrently()"
        }), " defeats the purpose of queue throttling and will exhaust Node.js socket pools or TypeORM database connection limits."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Immutable Deep Merging"
        }), "\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "deepMerge(target, source)"
        }), " when building composite configuration objects in microservice factories to guarantee nested properties are merged cleanly without mutating original templates."]
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
54038(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/utils","title":"Core Utilities, Helpers & Object Manipulation","description":"The @nestjs-yalc/utils package is the core utility toolkit for the NestJS-Yalc ecosystem. It provides high-performance, type-safe utility functions for object manipulation, array operations, concurrent async processing, string transformations, class reflection helpers, and cryptographic hashing.","source":"@site/docs/nestjs-yalc/docs/modules/utils.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/utils","permalink":"/docs/nestjs-yalc/docs/modules/utils","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/utils.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"utils","title":"Core Utilities, Helpers & Object Manipulation","sidebar_position":16},"sidebar":"tutorialSidebar","previous":{"title":"Application Lifecycle, Bootstrap & Module Composition","permalink":"/docs/nestjs-yalc/docs/modules/app"},"next":{"title":"Logger","permalink":"/docs/nestjs-yalc/modules/logger"}}')

},

};
;