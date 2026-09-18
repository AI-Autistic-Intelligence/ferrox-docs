"use strict";
exports.ids = ["1172"];
exports.modules = {
84596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_overview_md_881_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_overview_md_881_json__rspack_import_0 = __webpack_require__(74029);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'overview',
	title: 'Overview',
	sidebar_position: 1
};
const contentTitle = 'Ferrox Node Overview';

const assets = {

};



const toc = [{
  "value": "Why Ferrox Node?",
  "id": "why-ferrox-node",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 2
}, {
  "value": "How it works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Performance Considerations",
  "id": "performance-considerations",
  "level": 2
}, {
  "value": "Getting Started",
  "id": "getting-started",
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
        id: "ferrox-node-overview",
        children: "Ferrox Node Overview"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox Node"
      }), " is the crucial bridge that connects the high-performance Rust core (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox"
      }), ") with the Node.js ecosystem (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "nestjs-yalc"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "node-yalc"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "why-ferrox-node",
      children: "Why Ferrox Node?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "While Node.js is excellent for routing, API design, and rapid development (especially with frameworks like NestJS), it is single-threaded and struggles with heavy computational tasks or extremely high-throughput data processing. Rust, on the other hand, excels in these areas but has a steeper learning curve for standard web development."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox Node gives you the best of both worlds by exposing Rust's performance capabilities directly to Node.js via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "N-API (Neon / NAPI-RS)"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox Node compiles the Rust ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox"
      }), " core into a native Node.js addon (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".node"
      }), " file). It then provides idiomatic TypeScript wrappers around these native functions."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Rust Core"
        }), ": The heavy lifting (e.g., complex calculations, Kafka stream processing, massive data serialization) is done in Rust."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "N-API Bindings"
        }), ": Rust functions are exposed to C-ABI via N-API."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TypeScript Interface"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ferrox-node"
        }), " provides strong TypeScript definitions (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "d.ts"
        }), ") that match the Rust exports."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Node.js Integration"
        }), ": Your NestJS application imports ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ferrox-node"
        }), " just like any standard npm package, but under the hood, it's executing native, highly optimized code."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "performance-considerations",
      children: "Performance Considerations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When crossing the boundary between V8 (JavaScript engine) and Rust, there is a small serialization/deserialization overhead. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-node"
      }), " is optimized to:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Pass pointers or Buffers instead of full JSON objects where possible."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Use asynchronous Rust functions that return Promises to Node.js, ensuring the main Event Loop is never blocked during heavy processing."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To use Ferrox Node within a NestJS-YALC application:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { FerroxEngine } from 'ferrox-node';\n\n@Injectable()\nexport class HighPerformanceService {\n  private engine: FerroxEngine;\n\n  constructor() {\n    this.engine = new FerroxEngine();\n  }\n\n  async processMassiveData(dataId: string) {\n    // This call executes natively in Rust, freeing the Node event loop\n    const result = await this.engine.computeComplexModels(dataId);\n    return result;\n  }\n}\n"
      })
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
74029(module) {
module.exports = JSON.parse('{"id":"ferrox-node/overview","title":"Overview","description":"Ferrox Node is the crucial bridge that connects the high-performance Rust core (ferrox) with the Node.js ecosystem (nestjs-yalc and node-yalc).","source":"@site/docs/ferrox-node/overview.md","sourceDirName":"ferrox-node","slug":"/ferrox-node/overview","permalink":"/docs/ferrox-node/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"overview","title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Real-Time WebSockets Engine (ferrox-front-ws)","permalink":"/docs/ferrox-front/ws"},"next":{"title":"Introduction & Ferrox-Node Framework Architecture","permalink":"/docs/ferrox-node/docs/intro"}}')

},

};
;