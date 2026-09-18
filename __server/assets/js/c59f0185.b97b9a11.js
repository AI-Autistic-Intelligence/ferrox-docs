"use strict";
exports.ids = ["9963"];
exports.modules = {
55224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_routing_md_c59_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_routing_md_c59_json__rspack_import_0 = __webpack_require__(12913);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'routing',
	title: 'Client-Side Router, Route Guards & Lazy Loading',
	sidebar_position: 4
};
const contentTitle = 'Client-Side Router, Route Guards & Lazy Loading';

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
  "value": "Client Navigation Sequence",
  "id": "client-navigation-sequence",
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
  "value": "5.1 Defining Application Routes",
  "id": "51-defining-application-routes",
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
        id: "client-side-router-route-guards--lazy-loading",
        children: "Client-Side Router, Route Guards & Lazy Loading"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-router"
      }), " crate delivers client-side SPA navigation for WebAssembly apps. It features HTML5 History API integration, route path parameter matching, nested layout outlets, route protection guards, and code-split WebAssembly module lazy loading."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Single-page WebAssembly applications require seamless page transitions without full browser reloads. Client-side navigation must handle dynamic URL paths (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/users/:id"
      }), "), query string parsing, authenticated layout switching, and route protection guards in pure Rust."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-router"
      }), " provides a declarative client-side router. It hooks into the browser HTML5 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "History.pushState"
      }), " API and updates reactive route signals to render target views instantly."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                         ferrox-front-router                            │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  HTML5 History API Listener      │  Route Guard Evaluator              │\n│  (pushState / popstate)          │  (AuthGuard / RoleGuard)            │\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ Path Matcher (/users/:id)\n                 ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                        Dynamic View Router Outlet                      │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Declarative Route Definition"
        }), ": Provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<Router>"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<Routes>"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<Route>"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<Outlet>"
        }), " components."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Path Parameter Extraction"
        }), ": Extracts named route parameters (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/orders/:order_id"
        }), ") into typed Rust variables."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Route Authorization Guards"
        }), ": Blocks unauthorized client navigation via custom ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Guard"
        }), " traits before mounting views."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Nested Layout Outlets"
        }), ": Supports nested layout hierarchies (e.g., sidebar layout wrapping nested dashboard sub-pages)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "client-navigation-sequence",
      children: "Client Navigation Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant User as User Click (<Link>)\n    participant Router as ferrox-front-router\n    participant Guard as Navigation Guard\n    participant History as Browser History API\n    participant View as Target View Component\n\n    User->>Router: Click Link href=\"/dashboard\"\n    Router->>Guard: Evaluate can_activate(\"/dashboard\")\n    alt Guard Granted\n        Guard-->>Router: Authorized\n        Router->>History: pushState(null, \"\", \"/dashboard\")\n        Router->>View: Swap Router Outlet Content to <DashboardView />\n    else Guard Denied\n        Guard-->>Router: Redirect to \"/login\"\n        Router->>History: pushState(null, \"\", \"/login\")\n        Router->>View: Render <LoginView />\n    end\n"
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
            children: "Server-Side Full Page Reloads"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Client Router"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Transition Speed"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High latency. Full HTML/Wasm re-download on every click."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Instant 0ms page transitions. Re-renders only outlet views."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "State Retention"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In-memory Wasm state lost on page navigation."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reactive state preserved in memory across client routes."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unprotected frontend views flicker before JS redirects."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Route guards prevent unauthenticated view mounts entirely."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-defining-application-routes",
      children: "5.1 Defining Application Routes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_core::prelude::*;\nuse ferrox_front_router::*;\nuse ferrox_front_templates::view;\n\n#[component]\npub fn AppRouter() -> impl IntoView {\n    view! {\n        <Router>\n            <nav class=\"main-nav\">\n                <A href=\"/\">\"Home\"</A>\n                <A href=\"/dashboard\">\"Dashboard\"</A>\n                <A href=\"/settings\">\"Settings\"</A>\n            </nav>\n\n            <Routes>\n                <Route path=\"/\" view=HomeView />\n                <Route path=\"/dashboard\" view=DashboardView guard=AuthGuard />\n                <Route path=\"/users/:id\" view=UserProfileView />\n                <Route path=\"/*any\" view=NotFoundView />\n            </Routes>\n        </Router>\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Anti-Pattern 1: Standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "<a>"
          }), " Anchor Tags"]
        }), "\nAvoid using raw HTML ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<a href=\"/path\">"
        }), " tags for internal app navigation. Raw anchors trigger full browser page reloads. Always use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<A href=\"/path\">"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "use_navigate()"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Programmatic Navigation"
        }), "\nUse the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "use_navigate()"
        }), " hook to trigger client-side navigation inside event callbacks:\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "let navigate = use_navigate(); navigate(\"/login\", NavigateOptions::default());"
        })]
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
12913(module) {
module.exports = JSON.parse('{"id":"ferrox-front/routing","title":"Client-Side Router, Route Guards & Lazy Loading","description":"The ferrox-front-router crate delivers client-side SPA navigation for WebAssembly apps. It features HTML5 History API integration, route path parameter matching, nested layout outlets, route protection guards, and code-split WebAssembly module lazy loading.","source":"@site/docs/ferrox-front/routing.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/routing","permalink":"/docs/ferrox-front/routing","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/routing.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"routing","title":"Client-Side Router, Route Guards & Lazy Loading","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Procedural Macros, Component Annotations & Code Generation","permalink":"/docs/ferrox-front/macros"},"next":{"title":"Virtual DOM Templates, JSX Engine & HTML Macros","permalink":"/docs/ferrox-front/templates"}}')

},

};
;