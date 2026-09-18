"use strict";
exports.ids = ["96"];
exports.modules = {
59552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_transports_md_fe0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_transports_md_fe0_json__rspack_import_0 = __webpack_require__(98765);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'transports',
	title: 'Dual Engine Transports (Fastify & Express)',
	sidebar_position: 3
};
const contentTitle = '⚡ Dual Engine Transports (FastifyAdapter & ExpressAdapter)';

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
  "value": "🧠 4. Why It Was Designed This Way (Swappable Dual Engine)",
  "id": "-4-why-it-was-designed-this-way-swappable-dual-engine",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "Swapping HTTP Engines during Bootstrap",
  "id": "swapping-http-engines-during-bootstrap",
  "level": 3
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
        id: "-dual-engine-transports-fastifyadapter--expressadapter",
        children: ["⚡ Dual Engine Transports (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FastifyAdapter"
        }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ExpressAdapter"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Dual Engine Transports"
      }), " represent the native HTTP abstraction architecture of Ferrox-Node. They empower developers to swap the underlying HTTP engine between ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Fastify"
      }), " (for extreme throughput, HTTP/2, and JSON Schema validation) and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Express"
      }), " (for compatibility with legacy middleware ecosystems), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "without altering a single line of business code in Controllers or Services"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Fastify Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "FastifyAdapter"
          }), ")"]
        }), ": High throughput (up to 75,000 req/sec on Node.js), native JSON Schema validation, and HTTP/2 support."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Express Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "ExpressAdapter"
          }), ")"]
        }), ": Maximum ecosystem compatibility to reuse traditional Node.js middleware (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "cors"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "morgan"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "multer"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Unified Request/Response Context"
        }), ": Ferrox-Node controllers consume a normalized interface abstracting differences between Fastify Request/Reply and Express Request/Response objects."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Ctrl[\"Ferrox Controller (@Controller)\"]\n    Adapter[\"Ferrox Transport Adapter Interface\"]\n    Fastify[\"Fastify Instance (Radix-Tree Router)\"]\n    Express[\"Express Instance (RegExp Layer Chain)\"]\n\n    Ctrl --> Adapter\n    Adapter -->|engine: 'fastify'| Fastify\n    Adapter -->|engine: 'express'| Express\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Routing Adapter Pattern"
        }), ": Upon bootstrap (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "new FerroxApp({ engine })"
        }), "), Ferrox-Node maps ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Get"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Post"
        }), " route decorators to Fastify's Radix-Tree router or Express's RegExp layer chain."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Normalized Lifecycle"
        }), ": Lifecycle hooks (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onAppStart"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onAppDestroy"
        }), ") and security guards are registered seamlessly in the chosen engine's native stack."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-swappable-dual-engine",
      children: "🧠 4. Why It Was Designed This Way (Swappable Dual Engine)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["⚡ Fastify Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "fastify"
            }), ")"]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🚂 Express Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "express"
            }), ")"]
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Routing Algorithm"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Radix-Tree (O(1) Path Lookup)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Linear Array / RegExp Matching"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Throughput (Req/sec)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "~75,000 req/sec"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "~28,000 req/sec"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "JSON Serialization"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "fast-json-stringify"
              }), " (Super Fast)"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "JSON.stringify"
            }), " (Standard V8)"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Middleware Compatibility"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Native Fastify Plugins"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Thousands of Legacy NPM Middleware"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "swapping-http-engines-during-bootstrap",
      children: "Swapping HTTP Engines during Bootstrap"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { FerroxApp, FerroxDIContainer } from '@ferrox-node/core';\nimport { ApiController } from './controllers/api.controller';\n\nasync function bootstrap() {\n  const di = FerroxDIContainer.getInstance();\n  \n  // Dynamic HTTP engine selection via environment variable\n  const selectedEngine = (process.env.HTTP_ENGINE as 'fastify' | 'express') || 'fastify';\n\n  const app = new FerroxApp({\n    engine: selectedEngine, // 'fastify' or 'express'\n    port: 8080,\n    controllers: [ApiController],\n  });\n\n  await app.start();\n  console.log(`⚡ Ferrox-Node running on port 8080 using [${selectedEngine.toUpperCase()}] engine`);\n}\n\nbootstrap().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT access Express-native Request methods directly when using Fastify"
        }), ": Using Express-specific methods (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.get()"
        }), ") breaks transport abstraction if the application is booted on Fastify (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.headers[...]"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT use incompatible Fastify plugins if you plan to switch to Express"
        }), ": Keep middleware definitions at the Ferrox-Node abstraction level (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "middlewares: [...]"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Production vs Development"
        }), ": Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "fastify"
        }), " in production to reduce p99 latency by 60% and lower Node.js server CPU consumption."]
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
98765(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/transports","title":"Dual Engine Transports (Fastify & Express)","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/ferrox-node/docs/components/transports.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/transports","permalink":"/docs/ferrox-node/docs/components/transports","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/transports.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"transports","title":"Dual Engine Transports (Fastify & Express)","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Kernel Sandbox (Seccomp & Landlock)","permalink":"/docs/ferrox-node/docs/components/kernel"},"next":{"title":"CQRS & Saga Process Managers","permalink":"/docs/ferrox-node/docs/components/cqrs"}}')

},

};
;