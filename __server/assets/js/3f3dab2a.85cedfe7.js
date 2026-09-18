"use strict";
exports.ids = ["7064"];
exports.modules = {
13077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_md_3f3_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_md_3f3_json__rspack_import_0 = __webpack_require__(35819);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'overview',
	title: 'Overview',
	sidebar_position: 1
};
const contentTitle = 'Ferrox Core Overview';

const assets = {

};



const toc = [{
  "value": "Architecture",
  "id": "architecture",
  "level": 2
}, {
  "value": "Key Components",
  "id": "key-components",
  "level": 3
}, {
  "value": "Performance Profile",
  "id": "performance-profile",
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
        id: "ferrox-core-overview",
        children: "Ferrox Core Overview"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox"
      }), " is a high-performance, event-driven backend framework built in Rust. It is designed for maximum throughput, memory safety, and seamless integration with event streaming platforms like Kafka."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox is built around a robust asynchronous core using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tokio"
      }), ". It provides a structured way to build microservices that can handle massive amounts of concurrent connections with minimal latency."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "key-components",
      children: "Key Components"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Event Manager"
        }), ": A core abstraction over Kafka, allowing for declarative event publishing and subscription."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database Layer"
        }), ": A highly optimized wrapper around ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sqlx"
        }), " providing connection pooling and fast serialization."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "CRUD Generator"
        }), ": Macro-driven code generation that instantly creates high-performance REST and gRPC endpoints for your database entities."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Node Bridge (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "ferrox-node"
          }), ")"]
        }), ": Native bindings to allow Node.js applications (like NestJS) to call into Ferrox's Rust core seamlessly using N-API."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "performance-profile",
      children: "Performance Profile"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Because it is built in Rust, Ferrox does not suffer from Garbage Collection pauses and provides predictable tail latencies. It is heavily optimized for:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "High-throughput event streaming"
        }), " (consuming and producing to Kafka)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "CPU-bound operations"
        }), " (data transformation, complex mathematical modeling)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Memory-constrained environments"
        }), " (containers with tight limits)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A basic Ferrox service initializes the event manager and database connection pool:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_core::app::FerroxApp;\nuse ferrox_database::DatabaseConfig;\nuse ferrox_event_manager::KafkaConfig;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let app = FerroxApp::builder()\n        .with_database(DatabaseConfig::from_env()?)\n        .with_kafka(KafkaConfig::from_env()?)\n        .build()\n        .await?;\n        \n    app.run().await?;\n    \n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Explore the documentation to see how to define entities, generate CRUD routes, and handle distributed events."
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
35819(module) {
module.exports = JSON.parse('{"id":"ferrox/overview","title":"Overview","description":"Ferrox is a high-performance, event-driven backend framework built in Rust. It is designed for maximum throughput, memory safety, and seamless integration with event streaming platforms like Kafka.","source":"@site/docs/ferrox/overview.md","sourceDirName":"ferrox","slug":"/ferrox/overview","permalink":"/docs/ferrox/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"overview","title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"🛑 Pipes (Validation)","permalink":"/docs/ferrox/abstractions/pipes"}}')

},

};
;