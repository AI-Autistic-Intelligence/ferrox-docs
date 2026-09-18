"use strict";
exports.ids = ["8089"];
exports.modules = {
85581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_graphql_advanced_md_52c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_graphql_advanced_md_52c_json__rspack_import_0 = __webpack_require__(92287);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '🚀 Advanced GraphQL: DataLoader & Subscriptions';

const assets = {

};



const toc = [{
  "value": "1. Solving N+1 Queries with <code>DataLoader</code>",
  "id": "1-solving-n1-queries-with-dataloader",
  "level": 2
}, {
  "value": "Implementing a Loader",
  "id": "implementing-a-loader",
  "level": 3
}, {
  "value": "2. Using <code>DataLoader</code> in Resolvers",
  "id": "2-using-dataloader-in-resolvers",
  "level": 2
}, {
  "value": "3. Real-Time GraphQL Subscriptions",
  "id": "3-real-time-graphql-subscriptions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-advanced-graphql-dataloader--subscriptions",
        children: "🚀 Advanced GraphQL: DataLoader & Subscriptions"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Standard GraphQL query resolvers suffer from the infamous ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "N+1 Query Problem"
      }), ". If a client fetches a list of 100 posts along with their authors, a naive resolver fires 1 initial query for posts plus 100 individual database queries for each author (101 total DB roundtrips!)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox integrates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "async-graphql::dataloader"
      }), " to batch and deduplicate database requests automatically into a single SQL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "IN (...)"
      }), " query."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-solving-n1-queries-with-dataloader",
      children: ["1. Solving N+1 Queries with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DataLoader"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    Client((Client)) -->|1 GraphQL Query| GQL[GraphQL Engine]\n    \n    subgraph Without DataLoader (N+1 Problem)\n        GQL -->|DB Query 1| DB1[(Post 1 Author)]\n        GQL -->|DB Query 2| DB2[(Post 2 Author)]\n        GQL -->|DB Query 100| DB3[(Post 100 Author)]\n    end\n    \n    subgraph With Ferrox DataLoader\n        GQL -->|Batches 100 IDs| DL[DataLoader]\n        DL -->|1 SQL Query: SELECT * WHERE id IN ...| DB[(Database)]\n    end\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "implementing-a-loader",
      children: "Implementing a Loader"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_graphql::dataloader::*;\nuse std::collections::HashMap;\nuse sea_orm::{DatabaseConnection, EntityTrait, ColumnTrait, QueryFilter};\nuse crate::entities::user::{Entity as UserEntity, Model as UserModel, Column};\n\npub struct UserLoader {\n    pub db: DatabaseConnection,\n}\n\n#[async_trait::async_trait]\nimpl Loader<u64> for UserLoader {\n    type Value = UserModel;\n    type Error = std::sync::Arc<sea_orm::DbErr>;\n\n    async fn load(&self, keys: &[u64]) -> Result<HashMap<u64, Self::Value>, Self::Error> {\n        // Single batch SQL query: SELECT * FROM users WHERE id IN (1, 2, 3, ... 100)\n        let users = UserEntity::find()\n            .filter(Column::Id.one_of(keys.to_vec()))\n            .all(&self.db)\n            .await\n            .map_err(std::sync::Arc::new)?;\n\n        Ok(users.into_iter().map(|u| (u.id, u)).collect())\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-using-dataloader-in-resolvers",
      children: ["2. Using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DataLoader"
      }), " in Resolvers"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_graphql::{Context, Object, Result, dataloader::DataLoader};\n\n#[Object]\nimpl PostGql {\n    async fn author(&self, ctx: &Context<'_>) -> Result<UserGql> {\n        let loader = ctx.data::<DataLoader<UserLoader>>()?;\n        let user = loader.load_one(self.author_id).await?\n            .ok_or(\"Author not found\")?;\n            \n        Ok(UserGql::from(user))\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-real-time-graphql-subscriptions",
      children: "3. Real-Time GraphQL Subscriptions"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-graphql"
      }), " supports WebSocket subscriptions using Tokio broadcast channels:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_graphql::{Subscription, SimpleObject};\nuse futures::Stream;\n\npub struct SubscriptionRoot;\n\n#[Subscription]\nimpl SubscriptionRoot {\n    async fn live_stock_price(&self, symbol: String) -> impl Stream<Item = PriceTick> {\n        // Stream ticks over WebSockets\n        tokio_stream::wrappers::IntervalStream::new(\n            tokio::time::interval(std::time::Duration::from_secs(1))\n        ).map(move |_| PriceTick { symbol: symbol.clone(), price: 150.25 })\n    }\n}\n\n#[derive(SimpleObject, Clone)]\npub struct PriceTick {\n    pub symbol: String,\n    pub price: f64,\n}\n"
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
92287(module) {
module.exports = JSON.parse('{"id":"ferrox/transports/graphql-advanced","title":"🚀 Advanced GraphQL: DataLoader & Subscriptions","description":"Standard GraphQL query resolvers suffer from the infamous N+1 Query Problem. If a client fetches a list of 100 posts along with their authors, a naive resolver fires 1 initial query for posts plus 100 individual database queries for each author (101 total DB roundtrips!).","source":"@site/docs/ferrox/transports/graphql-advanced.md","sourceDirName":"ferrox/transports","slug":"/ferrox/transports/graphql-advanced","permalink":"/docs/ferrox/transports/graphql-advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/transports/graphql-advanced.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"🕸️ GraphQL API Integration","permalink":"/docs/ferrox/transports/graphql"},"next":{"title":"Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting","permalink":"/docs/ferrox/transports/sse"}}')

},

};
;