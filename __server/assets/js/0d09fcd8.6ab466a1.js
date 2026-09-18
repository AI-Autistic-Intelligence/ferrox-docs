"use strict";
exports.ids = ["1492"];
exports.modules = {
52112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_intro_md_0d0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_intro_md_0d0_json__rspack_import_0 = __webpack_require__(42350);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'intro',
	title: 'Introduction & Ferrox-Front Architecture',
	sidebar_position: 1
};
const contentTitle = 'Introduction & Ferrox-Front Architecture';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. Crate Architecture Breakdown",
  "id": "2-crate-architecture-breakdown",
  "level": 2
}, {
  "value": "3. Core Architectural Philosophy",
  "id": "3-core-architectural-philosophy",
  "level": 2
}, {
  "value": "1. Zero-Virtual DOM Overhead",
  "id": "1-zero-virtual-dom-overhead",
  "level": 3
}, {
  "value": "2. Native Memory Performance",
  "id": "2-native-memory-performance",
  "level": 3
}, {
  "value": "3. End-to-End Type Integrity",
  "id": "3-end-to-end-type-integrity",
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
        id: "introduction--ferrox-front-architecture",
        children: "Introduction & Ferrox-Front Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Welcome to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox-Front"
      }), ", the high-performance WebAssembly (Wasm) frontend framework written in pure Rust. It combines fine-grained reactive signals, compile-time JSX HTML templates, zero-trust cryptographic security, real-time WebSocket state synchronization, and GPU-accelerated WebGL charts into a unified application suite."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Modern web applications require rendering complex, real-time user interfaces with high responsiveness. However, JavaScript frontend frameworks (React, Vue, Angular) struggle with heavy client-side computations (real-time telemetry charts, client-side encryption, large data grid rendering) due to single-threaded event-loop bottlenecks and garbage collection pauses."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox-Front"
      }), " leverages Rust and WebAssembly to eliminate runtime garbage collection entirely. It delivers native 60 FPS rendering performance, compile-time type safety, and fine-grained reactive state updates without Virtual DOM overhead."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                                YOUR FERROX-FRONT WASM APP                              │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  Fine-Grained Signals  │  Compile-Time JSX  │  Wasm Router  │  WebGL Charts  │  WebSockets │\n├────────────────────────┴────────────────────┴───────────────┴────────────────┴──────────┤\n│                                FERROX-FRONT CORE CRATES                                │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  Rust / WebAssembly  │  web-sys / js-sys Binding  │  Browser Web Cryptography API      │\n└────────────────────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-crate-architecture-breakdown",
      children: "2. Crate Architecture Breakdown"
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
            children: "Category & Purpose"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key Capabilities"
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
                children: "ferrox-front-core"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Framework Foundation"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Signal runtime, effect scheduler, resource context primitives."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-templates"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HTML / JSX Engine"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Compile-time ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "view!"
            }), " JSX macro, static node cloning, SSR."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-macro"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Procedural Macros"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Component procedural macros (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "#[component]"
            }), "), memo derives."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-router"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client Navigation"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Declarative Wasm client-side routing & route guard matching."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-ui"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Component Library"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Accessible UI primitives (buttons, modals, data tables)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-charts"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data Visualization"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GPU-accelerated WebGL charts (candlestick, line, bar)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-ws"
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
            children: "Reconnecting WebSocket manager with binary MsgPack support."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "ferrox-front-security"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zero-Trust Wasm"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "WebCrypto API integration, AES-256-GCM, XSS sanitizers."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-core-architectural-philosophy",
      children: "3. Core Architectural Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-zero-virtual-dom-overhead",
      children: "1. Zero-Virtual DOM Overhead"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Unlike VDOM frameworks that diff full object trees on state mutations, Ferrox-Front binds signals directly to individual DOM node pointers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-native-memory-performance",
      children: "2. Native Memory Performance"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Rust's affine type system and ownership model guarantee memory safety and zero garbage collection pauses during intensive rendering."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-end-to-end-type-integrity",
      children: "3. End-to-End Type Integrity"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Share identical Rust data models (structs, enums, validation rules) across your backend Ferrox microservices and WebAssembly frontend app."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-execution-sequence-flow",
      children: "4. Execution Sequence Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Browser as Browser Event Loop\n    participant Signal as Reactive Signal State\n    participant Scheduler as Ferrox Effect Scheduler\n    participant DOM as WebAssembly DOM Mutator\n\n    Browser->>Signal: User Clicks Button -> signal.set(new_val)\n    Signal->>Scheduler: Notify Subscribed Reactive Effects\n    Scheduler->>Scheduler: Batch & Deduplicate Pending Updates\n    Scheduler->>DOM: Execute Direct DOM Node Mutation (web_sys)\n    DOM-->>Browser: Updated UI Screen Rendered at 60 FPS\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-next-steps",
      children: "5. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Proceed to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox-front/quickstart",
          children: "Quickstart Guide"
        }), " to build your first Rust Wasm frontend app."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Explore individual crate guides in the sidebar documentation sections."
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
42350(module) {
module.exports = JSON.parse('{"id":"ferrox-front/intro","title":"Introduction & Ferrox-Front Architecture","description":"Welcome to Ferrox-Front, the high-performance WebAssembly (Wasm) frontend framework written in pure Rust. It combines fine-grained reactive signals, compile-time JSX HTML templates, zero-trust cryptographic security, real-time WebSocket state synchronization, and GPU-accelerated WebGL charts into a unified application suite.","source":"@site/docs/ferrox-front/intro.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/intro","permalink":"/docs/ferrox-front/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"intro","title":"Introduction & Ferrox-Front Architecture","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Core WebAssembly System Architecture","permalink":"/docs/ferrox-front/architecture"},"next":{"title":"Overview","permalink":"/docs/ferrox-front/overview"}}')

},

};
;