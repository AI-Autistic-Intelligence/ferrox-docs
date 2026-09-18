"use strict";
exports.ids = ["1861"];
exports.modules = {
39658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_caching_md_e7e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_caching_md_e7e_json__rspack_import_0 = __webpack_require__(53325);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '⚡ Caching & Stampede Protection';

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
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "-caching--stampede-protection",
        children: "⚡ Caching & Stampede Protection"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In high-traffic Enterprise applications, Caching is mandatory. However, caching introduces a catastrophic vulnerability known as a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Cache Stampede"
      }), " (or Dog-Piling)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If a highly requested cache key expires (e.g., the homepage configuration of an e-commerce site on Black Friday), 1,000 concurrent requests will miss the cache simultaneously. All 1,000 requests will query the database at the exact same millisecond, instantly crashing your PostgreSQL server."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox mitigates this natively using the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-singleflight"
      }), " crate."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "high-level-example",
      children: "High-Level Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Wrapping your database queries in a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SingleFlight"
      }), " orchestrator ensures that duplicate concurrent queries are deduplicated."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{extract::State, Json};\nuse ferrox_singleflight::SingleFlight;\n\nasync fn get_heavy_data(State(sf): State<SingleFlight>) -> Json<String> {\n    \n    // If 1,000 users hit this route concurrently, the closure is only executed ONCE.\n    // The other 999 users will wait, and then receive the exact same result automatically!\n    let data = sf.do_async(\"heavy_db_query_key\", || async {\n        \n        // Simulate heavy database query\n        tokio::time::sleep(std::time::Duration::from_millis(500)).await;\n        Ok::<String, String>(\"Massive Data Payload\".into())\n        \n    }).await.unwrap();\n\n    Json(data)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "low-level-internal-details",
      children: "Low-Level Internal Details"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["How does ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SingleFlight"
      }), " suspend 999 requests and wake them up with the result of the 1st request?"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["It uses ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tokio::sync::broadcast"
      }), " channels and a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DashMap"
      }), " (a blazing fast concurrent Hash Map)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Request #1 asks for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"key_A\""
        }), ". The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DashMap"
        }), " is empty. Request #1 inserts a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "tokio::sync::broadcast::Sender"
        }), " into the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DashMap"
        }), " and starts the actual database query closure."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Requests #2 to #1000 ask for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"key_A\""
        }), ". They see the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Sender"
        }), " is already in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DashMap"
        }), ". Instead of querying the database, they subscribe to the channel (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sender.subscribe()"
        }), ") and yield the CPU (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".await"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Request #1 finishes the database query. It broadcasts the result to the channel."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Requests #2 to #1000 instantly wake up, receive the broadcasted data, and return it to the client. The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DashMap"
        }), " entry is then cleared."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This eliminates Cache Stampedes completely, allowing your Rust backend to absorb millions of requests gracefully."
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
53325(module) {
module.exports = JSON.parse('{"id":"ferrox/architectures/caching","title":"⚡ Caching & Stampede Protection","description":"In high-traffic Enterprise applications, Caching is mandatory. However, caching introduces a catastrophic vulnerability known as a Cache Stampede (or Dog-Piling).","source":"@site/docs/ferrox/architectures/caching.md","sourceDirName":"ferrox/architectures","slug":"/ferrox/architectures/caching","permalink":"/docs/ferrox/architectures/caching","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/architectures/caching.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"🗃️ CQRS (Command Query Responsibility Segregation)","permalink":"/docs/ferrox/architectures/cqrs"},"next":{"title":"🔄 The Saga Pattern (Distributed Transactions)","permalink":"/docs/ferrox/architectures/sagas"}}')

},

};
;