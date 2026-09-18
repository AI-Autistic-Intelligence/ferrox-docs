"use strict";
exports.ids = ["1972"];
exports.modules = {
44682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_redis_md_029_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_redis_md_029_json__rspack_import_0 = __webpack_require__(48531);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = '🔴 In-Memory Caching & Redis';

const assets = {

};



const toc = [{
  "value": "1. Connecting to Redis",
  "id": "1-connecting-to-redis",
  "level": 2
}, {
  "value": "2. JSON Object Caching",
  "id": "2-json-object-caching",
  "level": 2
}, {
  "value": "3. Real-Time Pub/Sub Messaging",
  "id": "3-real-time-pubsub-messaging",
  "level": 2
}, {
  "value": "4. ✅ Best Practices",
  "id": "4--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "-in-memory-caching--redis",
        children: "🔴 In-Memory Caching & Redis"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Redis is the standard in-memory storage engine for high-speed session management, caching, distributed locks, rate limiting, and real-time pub/sub."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-database-redis"
      }), ", integrating the asynchronous ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "redis"
      }), " crate with Tokio."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-connecting-to-redis",
      children: "1. Connecting to Redis"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Initialize the Redis client:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use redis::{AsyncCommands, Client};\nuse ferrox_errors::AppError;\n\npub struct RedisCache {\n    client: Client,\n}\n\nimpl RedisCache {\n    pub fn new(redis_url: &str) -> Result<Self, AppError> {\n        let client = Client::open(redis_url)\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n        Ok(Self { client })\n    }\n\n    pub async fn set_str(&self, key: &str, value: &str, ttl_seconds: u64) -> Result<(), AppError> {\n        let mut con = self.client.get_async_connection().await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n        let _: () = con.set_ex(key, value, ttl_seconds).await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n        Ok(())\n    }\n\n    pub async fn get_str(&self, key: &str) -> Result<Option<String>, AppError> {\n        let mut con = self.client.get_async_connection().await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n        let value: Option<String> = con.get(key).await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n        Ok(value)\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-json-object-caching",
      children: "2. JSON Object Caching"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Store complex Rust structs in Redis using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "serde_json"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::{Deserialize, Serialize};\n\nimpl RedisCache {\n    pub async fn set_json<T: Serialize>(&self, key: &str, value: &T, ttl_seconds: u64) -> Result<(), AppError> {\n        let json_str = serde_json::to_string(value)\n            .map_err(|e| AppError::InternalServerError(Box::new(e)))?;\n        self.set_str(key, &json_str, ttl_seconds).await\n    }\n\n    pub async fn get_json<T: for<'a> Deserialize<'a>>(&self, key: &str) -> Result<Option<T>, AppError> {\n        if let Some(json_str) = self.get_str(key).await? {\n            let obj = serde_json::from_str(&json_str)\n                .map_err(|e| AppError::InternalServerError(Box::new(e)))?;\n            Ok(Some(obj))\n        } else {\n            Ok(None)\n        }\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-real-time-pubsub-messaging",
      children: "3. Real-Time Pub/Sub Messaging"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Publish events across distributed microservice instances using Redis channels:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "pub async fn publish_event(&self, channel: &str, message: &str) -> Result<(), AppError> {\n    let mut con = self.client.get_async_connection().await\n        .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n    let _: () = con.publish(channel, message).await\n        .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Always set TTLs on cache entries"
        }), ": Never store keys indefinitely without an expiration policy to avoid exhausting Redis RAM."]
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
48531(module) {
module.exports = JSON.parse('{"id":"ferrox/databases/redis","title":"🔴 In-Memory Caching & Redis","description":"Redis is the standard in-memory storage engine for high-speed session management, caching, distributed locks, rate limiting, and real-time pub/sub.","source":"@site/docs/ferrox/databases/redis.md","sourceDirName":"ferrox/databases","slug":"/ferrox/databases/redis","permalink":"/docs/ferrox/databases/redis","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/databases/redis.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"🍃 Document Databases (MongoDB)","permalink":"/docs/ferrox/databases/mongodb"},"next":{"title":"🔄 Schema Migrations Management","permalink":"/docs/ferrox/databases/migrations"}}')

},

};
;