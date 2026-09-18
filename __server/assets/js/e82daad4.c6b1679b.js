"use strict";
exports.ids = ["8037"];
exports.modules = {
76867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_cli_code_factory_md_e82_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_cli_code_factory_md_e82_json__rspack_import_0 = __webpack_require__(48012);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🛠️ The Code Factory';

const assets = {

};



const toc = [{
  "value": "1. Type Generation (<code>ts-rs</code>)",
  "id": "1-type-generation-ts-rs",
  "level": 2
}, {
  "value": "2. API Client Generation",
  "id": "2-api-client-generation",
  "level": 2
}, {
  "value": "The Generated Client (0 Dependencies)",
  "id": "the-generated-client-0-dependencies",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-the-code-factory",
        children: "🛠️ The Code Factory"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The defining feature of Ferrox is its ability to break the boundary between Backend and Frontend."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Traditionally, backend engineers write an API in Rust/Java/Go, and frontend engineers manually rewrite the exact same interfaces and API calls in TypeScript. This leads to massive synchronization bugs, broken builds, and wasted time."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox solves this permanently via the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Code Factory"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-type-generation-ts-rs",
      children: ["1. Type Generation (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ts-rs"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When you define a Data Transfer Object (DTO) in Rust, you decorate it with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[derive(TS)]"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use validator::Validate;\nuse ts_rs::TS;\n\n#[derive(Debug, Clone, Serialize, Deserialize, Validate, TS)]\n#[ts(export)]\npub struct CreateUserDto {\n    pub email: String,\n    pub age: u8,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["During compilation, Ferrox automatically exports a pristine ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CreateUserDto.ts"
      }), " file. If the backend engineer changes ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "age: u8"
      }), " to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "age: i32"
      }), " in Rust, the TypeScript interface updates automatically. The Frontend build will fail if it doesn't adapt to the new contract."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-api-client-generation",
      children: "2. API Client Generation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Beyond just types, Ferrox can generate the entire network logic."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "By running the Ferrox CLI:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "ferrox generate --lang ts --output ./frontend/src/api\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The Code Factory scans your project and outputs a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxClient.ts"
      }), " file into your frontend directory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-generated-client-0-dependencies",
      children: "The Generated Client (0 Dependencies)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The generated client uses the native JavaScript ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "fetch"
      }), " API, meaning it requires ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "zero NPM dependencies"
      }), " (no ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "axios"
      }), " needed)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "// AUTO-GENERATED BY FERROX CODE FACTORY\nimport { CreateUserDto } from './CreateUserDto';\n\nexport class FerroxClient {\n    private baseUrl: string;\n    private token: string;\n\n    constructor(baseUrl: string, token: string) {\n        this.baseUrl = baseUrl;\n        this.token = token;\n    }\n\n    private async request<T>(endpoint: string, options: RequestInit): Promise<T> {\n        const headers = new Headers(options.headers);\n        \n        // Zero-Trust: Automatic token injection\n        headers.set('Authorization', `Bearer ${this.token}`);\n        headers.set('Content-Type', 'application/json');\n\n        const response = await fetch(`${this.baseUrl}${endpoint}`, {\n            ...options,\n            headers,\n        });\n\n        if (!response.ok) {\n            throw new Error(`API Error: ${response.statusText}`);\n        }\n\n        return response.json();\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This generated SDK abstracts away headers, serialization, and JWT injection. Your React or Next.js developers just need to instantiate the client and call the strongly-typed methods."
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
48012(module) {
module.exports = JSON.parse('{"id":"ferrox/cli/code-factory","title":"🛠️ The Code Factory","description":"The defining feature of Ferrox is its ability to break the boundary between Backend and Frontend.","source":"@site/docs/ferrox/cli/code-factory.md","sourceDirName":"ferrox/cli","slug":"/ferrox/cli/code-factory","permalink":"/docs/ferrox/cli/code-factory","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/cli/code-factory.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"⏰ Cron Task Scheduling","permalink":"/docs/ferrox/architectures/task-scheduling"},"next":{"title":"Ferrox CLI Reference, Code Generators & Scaffolding","permalink":"/docs/ferrox/cli/commands-reference"}}')

},

};
;