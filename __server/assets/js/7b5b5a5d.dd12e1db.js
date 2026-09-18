"use strict";
exports.ids = ["5457"];
exports.modules = {
33852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_tutorial_01_setup_md_7b5_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_tutorial_01_setup_md_7b5_json__rspack_import_0 = __webpack_require__(6088);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🚀 Part 1: Project Setup';

const assets = {

};



const toc = [{
  "value": "1. Installation",
  "id": "1-installation",
  "level": 2
}, {
  "value": "2. Adding Dependencies",
  "id": "2-adding-dependencies",
  "level": 2
}, {
  "value": "3. The Application Entrypoint",
  "id": "3-the-application-entrypoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "-part-1-project-setup",
        children: "🚀 Part 1: Project Setup"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Welcome to the Ferrox Zero-to-Hero Tutorial."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In this tutorial, we will build a complete ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ticketing / Task Management"
      }), " system. We won't just write a \"Hello World\". We will build a production-ready microservice with in-memory state, JWT Security, DTO Validation, and automatic TypeScript Client generation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-installation",
      children: "1. Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, ensure you have Rust installed. We will create a new binary project using Cargo."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo new ferrox-ticketing\ncd ferrox-ticketing\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-adding-dependencies",
      children: "2. Adding Dependencies"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We need the Ferrox core ecosystem, along with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tokio"
      }), " (our async runtime), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "serde"
      }), " (for JSON serialization), and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ts-rs"
      }), " (for TypeScript generation)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Open your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Cargo.toml"
      }), " and add the following dependencies:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-toml",
        children: "[dependencies]\nferrox-core = { version = \"1.0\", features = [\"full\"] }\nferrox-security = \"1.0\"\nferrox-errors = \"1.0\"\n\ntokio = { version = \"1\", features = [\"full\"] }\nserde = { version = \"1.0\", features = [\"derive\"] }\nserde_json = \"1.0\"\nvalidator = { version = \"0.16\", features = [\"derive\"] }\nts-rs = \"8.1\"\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-the-application-entrypoint",
      children: "3. The Application Entrypoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox applications use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tokio::main"
      }), " to start the asynchronous runtime."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Open ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/main.rs"
      }), " and set up the basic scaffolding. We will define an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppState"
      }), " that will eventually hold our Database Provider."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::get, Router};\nuse std::net::SocketAddr;\n\n#[derive(Clone)]\npub struct AppState {\n    // We will inject our TaskService here in the next chapter\n}\n\n#[tokio::main]\nasync fn main() {\n    // 1. Initialize the Global State\n    let state = AppState {};\n\n    // 2. Create the Ferrox Router\n    let app = Router::new()\n        .route(\"/health\", get(|| async { \"API is running!\" }))\n        .with_state(state);\n\n    // 3. Bind the TCP Listener and Start the Server\n    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));\n    println!(\"🚀 Ferrox Ticketing Server running on http://{}\", addr);\n    \n    axum::Server::bind(&addr)\n        .serve(app.into_make_service())\n        .await\n        .unwrap();\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Run ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cargo run"
      }), " and visit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://localhost:3000/health"
      }), ". You have successfully bootstrapped a Ferrox application!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the next chapter, we will build the core domain logic: DTOs, the Task Service, and the Controller."
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
6088(module) {
module.exports = JSON.parse('{"id":"ferrox/tutorial/setup","title":"🚀 Part 1: Project Setup","description":"Welcome to the Ferrox Zero-to-Hero Tutorial.","source":"@site/docs/ferrox/tutorial/01-setup.md","sourceDirName":"ferrox/tutorial","slug":"/ferrox/tutorial/setup","permalink":"/docs/ferrox/tutorial/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/tutorial/01-setup.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"CRDT Real-Time State Sync Engine & WebSockets","permalink":"/docs/ferrox/transports/sync"},"next":{"title":"🏗️ Part 2: Building the Core","permalink":"/docs/ferrox/tutorial/building-the-core"}}')

},

};
;