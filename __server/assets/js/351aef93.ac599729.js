"use strict";
exports.ids = ["3185"];
exports.modules = {
42182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_graphql_md_351_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_graphql_md_351_json__rspack_import_0 = __webpack_require__(6897);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🕸️ GraphQL API Integration';

const assets = {

};



const toc = [{
  "value": "1. Building a GraphQL Schema",
  "id": "1-building-a-graphql-schema",
  "level": 2
}, {
  "value": "2. Axum GraphQL Route Handler",
  "id": "2-axum-graphql-route-handler",
  "level": 2
}, {
  "value": "3. Exporting GraphQL SDL for Frontend Code Generation",
  "id": "3-exporting-graphql-sdl-for-frontend-code-generation",
  "level": 2
}, {
  "value": "4. Testing GraphQL Queries",
  "id": "4-testing-graphql-queries",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-graphql-api-integration",
        children: "🕸️ GraphQL API Integration"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "GraphQL allows frontend clients to request precisely the data fields they need, reducing over-fetching and network payload sizes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-graphql"
      }), ", integrating ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://async-graphql.github.io/",
        children: "Async-GraphQL"
      }), " with Axum."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-building-a-graphql-schema",
      children: "1. Building a GraphQL Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Define GraphQL query objects using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "async_graphql"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_graphql::{Object, Schema, EmptyMutation, EmptySubscription};\n\npub struct QueryRoot;\n\n#[Object]\nimpl QueryRoot {\n    /// Returns application health ping\n    async fn ping(&self) -> &'static str {\n        \"pong\"\n    }\n\n    /// Returns a list of products\n    async fn products(&self) -> Vec<ProductGql> {\n        vec![\n            ProductGql { id: 1, name: \"Ferrox Pro\".into() }\n        ]\n    }\n}\n\npub struct ProductGql {\n    pub id: u64,\n    pub name: String,\n}\n\n#[Object]\nimpl ProductGql {\n    async fn id(&self) -> u64 { self.id }\n    async fn name(&self) -> &str { &self.name }\n}\n\npub fn create_schema() -> Schema<QueryRoot, EmptyMutation, EmptySubscription> {\n    Schema::build(QueryRoot, EmptyMutation, EmptySubscription).finish()\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-axum-graphql-route-handler",
      children: "2. Axum GraphQL Route Handler"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};\nuse async_graphql_axum::{GraphQLRequest, GraphQLResponse};\nuse axum::{\n    extract::State,\n    response::{Html, IntoResponse},\n    routing::get,\n    Router,\n};\nuse std::sync::Arc;\n\npub async fn graphql_handler(\n    State(schema): State<AppSchema>,\n    req: GraphQLRequest,\n) -> GraphQLResponse {\n    schema.execute(req.into_inner()).await.into()\n}\n\npub async fn graphql_playground() -> impl IntoResponse {\n    Html(playground_source(GraphQLPlaygroundConfig::new(\"/graphql\")))\n}\n\npub fn graphql_router(schema: AppSchema) -> Router {\n    Router::new()\n        .route(\"/graphql\", get(graphql_playground).post(graphql_handler))\n        .with_state(schema)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-exporting-graphql-sdl-for-frontend-code-generation",
      children: "3. Exporting GraphQL SDL for Frontend Code Generation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-graphql"
      }), " includes helper utilities to export your schema in Schema Definition Language (SDL) format during build phase:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_graphql::export_sdl;\n\nlet schema = create_schema();\nexport_sdl(&schema, \"./schema.graphql\")?;\n// Generates schema.graphql for GraphQL Code Generator in React/Vue/Angular\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-testing-graphql-queries",
      children: "4. Testing GraphQL Queries"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "#[tokio::test]\nasync fn test_ping_query() {\n    let schema = create_schema();\n    let response = schema.execute(\"{ ping }\").await;\n    assert_eq!(response.data.into_json().unwrap()[\"ping\"], \"pong\");\n}\n"
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
6897(module) {
module.exports = JSON.parse('{"id":"ferrox/transports/graphql","title":"🕸️ GraphQL API Integration","description":"GraphQL allows frontend clients to request precisely the data fields they need, reducing over-fetching and network payload sizes.","source":"@site/docs/ferrox/transports/graphql.md","sourceDirName":"ferrox/transports","slug":"/ferrox/transports/graphql","permalink":"/docs/ferrox/transports/graphql","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/transports/graphql.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Multi-Protocol Transports Architecture Overview","permalink":"/docs/ferrox/transports/transports-overview"},"next":{"title":"🚀 Advanced GraphQL: DataLoader & Subscriptions","permalink":"/docs/ferrox/transports/graphql-advanced"}}')

},

};
;