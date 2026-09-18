"use strict";
exports.ids = ["5590"];
exports.modules = {
86624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_cqrs_md_048_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_cqrs_md_048_json__rspack_import_0 = __webpack_require__(86384);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🗃️ CQRS (Command Query Responsibility Segregation)';

const assets = {

};



const toc = [{
  "value": "High-Level Example",
  "id": "high-level-example",
  "level": 2
}, {
  "value": "Low-Level Internal Details",
  "id": "low-level-internal-details",
  "level": 2
}, {
  "value": "Why is this Enterprise-grade?",
  "id": "why-is-this-enterprise-grade",
  "level": 3
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
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-cqrs-command-query-responsibility-segregation",
        children: "🗃️ CQRS (Command Query Responsibility Segregation)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "CQRS is an architectural pattern that separates reading data (Queries) from writing data (Commands)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In traditional CRUD architectures, the same data model is used to query and update a database. As applications scale, this becomes a severe bottleneck. The read model and the write model have entirely different performance characteristics, caching strategies, and security requirements."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox natively provides an in-memory ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Command Bus"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Query Bus"
      }), " via the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-cqrs"
      }), " crate, bringing the Developer Experience of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs/cqrs"
      }), " to Rust."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "high-level-example",
      children: "High-Level Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In CQRS, you never call a database repository directly from a Controller. Instead, you dispatch a Command."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{extract::State, Json};\nuse ferrox_cqrs::{CommandBus, Command};\nuse serde::{Deserialize, Serialize};\n\n// 1. Define the Command\n#[derive(Debug, Clone, Serialize, Deserialize)]\npub struct CreateUserCommand {\n    pub email: String,\n}\nimpl Command for CreateUserCommand {\n    type Result = String; // Returns the new User ID\n}\n\n// 2. Dispatch it from the Controller\nasync fn create_user(\n    State(bus): State<CommandBus>,\n    Json(payload): Json<CreateUserCommand>\n) -> Json<String> {\n    \n    // The Controller doesn't know HOW the user is created.\n    // It just dispatches the intent.\n    let user_id = bus.execute(payload).await.unwrap();\n    \n    Json(user_id)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Behind the scenes, you register a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CommandHandler"
      }), " that listens for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CreateUserCommand"
      }), " and performs the actual database ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "INSERT"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "low-level-internal-details",
      children: "Low-Level Internal Details"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The Ferrox Command Bus is built on top of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tokio::sync::mpsc"
      }), " (Multi-Producer, Single-Consumer) channels and dynamic trait objects (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Box<dyn Any>"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When a Controller calls ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "bus.execute(command)"
      }), ", it sends the command payload into a high-throughput Tokio channel. The worker thread that was registered with the specific ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CommandHandler"
      }), " receives the payload, executes the business logic asynchronously, and sends the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Result"
      }), " back through a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "oneshot"
      }), " channel."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "why-is-this-enterprise-grade",
      children: "Why is this Enterprise-grade?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Thread Safety"
        }), ": Controllers and Database Writers operate on different threads without needing Mutex locks."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Event Sourcing Ready"
        }), ": Because every mutation is an explicit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Command"
        }), " struct, it is trivial to log these commands to an Event Store (like Kafka or EventStoreDB) before executing them, achieving full Event Sourcing."]
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
86384(module) {
module.exports = JSON.parse('{"id":"ferrox/architectures/cqrs","title":"🗃️ CQRS (Command Query Responsibility Segregation)","description":"CQRS is an architectural pattern that separates reading data (Queries) from writing data (Commands).","source":"@site/docs/ferrox/architectures/cqrs.md","sourceDirName":"ferrox/architectures","slug":"/ferrox/architectures/cqrs","permalink":"/docs/ferrox/architectures/cqrs","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/architectures/cqrs.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"🛡️ Zero-Trust API Gateway Pattern","permalink":"/docs/ferrox/architectures/api-gateway"},"next":{"title":"⚡ Caching & Stampede Protection","permalink":"/docs/ferrox/architectures/caching"}}')

},

};
;