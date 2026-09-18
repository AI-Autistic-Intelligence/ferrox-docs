"use strict";
exports.ids = ["4913"];
exports.modules = {
20635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_overview_md_800_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_overview_md_800_json__rspack_import_0 = __webpack_require__(92931);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'overview',
	title: 'Overview',
	sidebar_position: 1
};
const contentTitle = 'Ferrox Front Overview';

const assets = {

};



const toc = [{
  "value": "Why Rust on the Frontend?",
  "id": "why-rust-on-the-frontend",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 3
}, {
  "value": "Quick Example",
  "id": "quick-example",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "ferrox-front-overview",
        children: "Ferrox Front Overview"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox Front"
      }), " is a high-performance, WebAssembly (WASM) based frontend framework written in Rust, leveraging the Yew framework under the hood. It provides a robust, type-safe environment for building complex User Interfaces while maintaining near-native performance."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "why-rust-on-the-frontend",
      children: "Why Rust on the Frontend?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "While JavaScript/TypeScript ecosystems are mature, Rust via WebAssembly offers several distinct advantages for heavy, data-intensive web applications:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Unparalleled Performance"
        }), ": WASM execution speeds are significantly faster than JS parsing and JIT compilation, especially for complex state calculations or data visualizations (like trading charts)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Type Safety & Correctness"
        }), ": Rust's ownership model and strict type system eliminate entire classes of bugs (like ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "undefined is not a function"
        }), ") at compile time."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Shared Business Logic"
        }), ": By using Rust on both the frontend (Ferrox Front) and backend (Ferrox Core), you can share models, validation rules, and business logic seamlessly without duplicating code in different languages."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Ferrox Front is structured around the Component architecture provided by Yew, but extended with Ferrox-specific patterns for state management and API communication."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Components"
        }), ": UI building blocks defined using the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "html!"
        }), " macro (similar to JSX)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "State Management"
        }), ": A robust, context-based state management system designed to handle high-frequency updates from WebSockets."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "WASM Interop"
        }), ": Seamless bindings to browser APIs (DOM, WebGL) via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "web-sys"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "js-sys"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "API Client"
        }), ": Auto-generated clients that communicate directly with Ferrox Core backends using optimized binary protocols or standard JSON/REST."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "quick-example",
      children: "Quick Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A simple Ferrox Front component looks like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use yew::prelude::*;\n\n#[derive(Properties, PartialEq)]\npub struct Props {\n    pub title: String,\n}\n\n#[function_component(MyComponent)]\npub fn my_component(props: &Props) -> Html {\n    let counter = use_state(|| 0);\n    let onclick = {\n        let counter = counter.clone();\n        move |_| {\n            let value = *counter + 1;\n            counter.set(value);\n        }\n    };\n\n    html! {\n        <div class=\"ferrox-panel\">\n            <h1>{ &props.title }</h1>\n            <p>{ \"Counter: \" }{ *counter }</p>\n            <button {onclick}>{ \"+1\" }</button>\n        </div>\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Explore the documentation to learn more about advanced state management, real-time WebSocket integration, and routing."
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
92931(module) {
module.exports = JSON.parse('{"id":"ferrox-front/overview","title":"Overview","description":"Ferrox Front is a high-performance, WebAssembly (WASM) based frontend framework written in Rust, leveraging the Yew framework under the hood. It provides a robust, type-safe environment for building complex User Interfaces while maintaining near-native performance.","source":"@site/docs/ferrox-front/overview.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/overview","permalink":"/docs/ferrox-front/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"overview","title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction & Ferrox-Front Architecture","permalink":"/docs/ferrox-front/intro"},"next":{"title":"Core Kernel, Context Providers & Resource Managers","permalink":"/docs/ferrox-front/core"}}')

},

};
;