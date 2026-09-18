"use strict";
exports.ids = ["4020"];
exports.modules = {
48165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_macros_md_099_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_macros_md_099_json__rspack_import_0 = __webpack_require__(53987);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'macros',
	title: 'Procedural Macros, Component Annotations & Code Generation',
	sidebar_position: 3
};
const contentTitle = 'Procedural Macros, Component Annotations & Code Generation';

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
  "value": "Macro Parsing &amp; Expansion Sequence",
  "id": "macro-parsing--expansion-sequence",
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
  "value": "5.1 Writing Custom Components with <code>#[component]</code>",
  "id": "51-writing-custom-components-with-component",
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
        id: "procedural-macros-component-annotations--code-generation",
        children: "Procedural Macros, Component Annotations & Code Generation"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-macro"
      }), " crate provides Rust procedural macros (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[component]"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "view!"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "derive(Store)"
      }), ") that transform declarative UI components and reactive state structs into optimized WebAssembly execution code."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Writing WebAssembly DOM code in raw Rust using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "web_sys"
      }), " requires verbose boilerplate: creating element nodes, attaching event listeners via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Closure::wrap"
      }), ", casting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Element"
      }), " pointers, and manually managing signal subscription lifecycles."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-macro"
      }), " abstracts WebAssembly DOM complexity through procedural compile-time expansion. It allows developers to write clean, HTML-like component code that compiles into ultra-low-level Wasm DOM calls."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        Rust Source Code                                │\n├────────────────────────────────────────────────────────────────────────┤\n│  #[component]                                                          │\n│  pub fn Counter(initial: i32) -> impl IntoView { ... }                 │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Proc-Macro Compile-Time Expansion\n                                   ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                       Generated Wasm Code                              │\n├────────────────────────────────────────────────────────────────────────┤\n│  • Signal Subscription Graph Wiring                                    │\n│  • Static Node Memory Pre-allocation                                   │\n│  • Fine-Grained Listener Registration via web_sys                      │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#[component]"
          }), " Macro"]
        }), ": Annotates Rust functions as reusable UI components, automatically converting function parameters into strongly typed component props."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "view!"
          }), " Macro"]
        }), ": Parses JSX-style HTML syntax, attributes, dynamic signal closures, and event handlers into static DOM node clones."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "derive(Store)"
          }), " Macro"]
        }), ": Automatically derives reactive store traits for nested Rust data structs, turning struct fields into reactive signals."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Compile-Time Prop Validation"
        }), ": Catches missing or incorrectly typed component properties at Rust compile time."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "macro-parsing--expansion-sequence",
      children: "Macro Parsing & Expansion Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant rustc as Rust Compiler\n    participant ProcMacro as ferrox-front-macro (syn/quote)\n    participant Output as Expanded AST Code\n\n    rustc->>ProcMacro: Pass TokenStream of #[component] fn UserProfile()\n    ProcMacro->>ProcMacro: Parse Component Signature & JSX view! Block\n    ProcMacro->>ProcMacro: Validate HTML Tags & Dynamic Signal Closures\n    ProcMacro->>Output: Generate Static Node Builder + Signal Subscription Hooks\n    Output-->>rustc: Return Transformed Wasm TokenStream\n"
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
            children: "Raw web_sys DOM Calls"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Proc-Macros"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Boilerplate"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50+ lines of DOM element creation and memory management per button."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Single line HTML tag in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "view!"
            }), " macro."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Type Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Loose JavaScript strings for element IDs and event names."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Compiler validates event types and component prop schemas."
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
            children: "Dynamic string parsing at runtime."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zero-overhead compile-time code generation."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "51-writing-custom-components-with-component",
      children: ["5.1 Writing Custom Components with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[component]"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_core::prelude::*;\nuse ferrox_front_macro::component;\nuse ferrox_front_templates::view;\n\n#[component]\npub fn MetricCard(\n    title: String,\n    value: Signal<f64>,\n    #[prop(optional)] unit: Option<String>,\n) -> impl IntoView {\n    let formatted_value = create_memo(move |_| {\n        format!(\"{:.2}\", value.get())\n    });\n\n    view! {\n        <div class=\"metric-card\">\n            <span class=\"metric-title\">{title}</span>\n            <div class=\"metric-value-wrapper\">\n                <span class=\"metric-value\">{move || formatted_value.get()}</span>\n                {unit.map(|u| view! { <span class=\"metric-unit\">{u}</span> })}\n            </div>\n        </div>\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Mutating Props inside Components"
        }), "\nComponent parameters passed into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "#[component]"
        }), " functions should be treated as immutable. Mutate state exclusively through ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Signal<T>"
        }), " setters."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Pro-Tip 1: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#[prop(optional)]"
          }), " Annotations"]
        }), "\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "#[prop(optional)]"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "#[prop(default = 10)]"
        }), " on component parameters to allow optional props without requiring callers to pass ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Some(...)"
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
53987(module) {
module.exports = JSON.parse('{"id":"ferrox-front/macros","title":"Procedural Macros, Component Annotations & Code Generation","description":"The ferrox-front-macro crate provides Rust procedural macros (#[component], view!, derive(Store)) that transform declarative UI components and reactive state structs into optimized WebAssembly execution code.","source":"@site/docs/ferrox-front/macros.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/macros","permalink":"/docs/ferrox-front/macros","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/macros.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"macros","title":"Procedural Macros, Component Annotations & Code Generation","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Fine-Grained Reactive Primitives (Signals, Memos & Effects)","permalink":"/docs/ferrox-front/reactivity"},"next":{"title":"Client-Side Router, Route Guards & Lazy Loading","permalink":"/docs/ferrox-front/routing"}}')

},

};
;