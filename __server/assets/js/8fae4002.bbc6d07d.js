"use strict";
exports.ids = ["8566"];
exports.modules = {
77639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_mongodb_md_8fa_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_mongodb_md_8fa_json__rspack_import_0 = __webpack_require__(46824);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '🍃 Document Databases (MongoDB)';

const assets = {

};



const toc = [{
  "value": "1. Connecting to MongoDB",
  "id": "1-connecting-to-mongodb",
  "level": 2
}, {
  "value": "2. Defining BSON Documents",
  "id": "2-defining-bson-documents",
  "level": 2
}, {
  "value": "3. Mongo Repository Implementation",
  "id": "3-mongo-repository-implementation",
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
        id: "-document-databases-mongodb",
        children: "🍃 Document Databases (MongoDB)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For document-oriented storage, Ferrox provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-database-mongo"
      }), ", wrapping the official ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "mongodb"
      }), " driver for Rust."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Document databases excel at hierarchical schema flexibility, real-time analytics, and high-throughput write workloads."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-connecting-to-mongodb",
      children: "1. Connecting to MongoDB"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Establish a MongoDB client connection:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use mongodb::{Client, options::ClientOptions, Collection};\nuse ferrox_errors::AppError;\n\npub async fn init_mongo(uri: &str, db_name: &str) -> Result<mongodb::Database, AppError> {\n    let client_options = ClientOptions::parse(uri)\n        .await\n        .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n    let client = Client::with_options(client_options)\n        .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n    Ok(client.database(db_name))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-defining-bson-documents",
      children: "2. Defining BSON Documents"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Annotate your domain structs with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[derive(Serialize, Deserialize)]"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::{Deserialize, Serialize};\nuse mongodb::bson::oid::ObjectId;\n\n#[derive(Debug, Clone, Serialize, Deserialize)]\npub struct ArticleDocument {\n    #[serde(rename = \"_id\", skip_serializing_if = \"Option::is_none\")]\n    pub id: Option<ObjectId>,\n    pub title: String,\n    pub content: String,\n    pub tags: Vec<String>,\n    pub views: u64,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-mongo-repository-implementation",
      children: "3. Mongo Repository Implementation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use mongodb::{Database, Collection, bson::doc};\nuse ferrox_errors::AppError;\nuse crate::models::ArticleDocument;\n\npub struct MongoArticleRepository {\n    collection: Collection<ArticleDocument>,\n}\n\nimpl MongoArticleRepository {\n    pub fn new(db: Database) -> Self {\n        Self {\n            collection: db.collection(\"articles\"),\n        }\n    }\n\n    pub async fn find_by_tag(&self, tag: &str) -> Result<Vec<ArticleDocument>, AppError> {\n        let filter = doc! { \"tags\": tag };\n        let mut cursor = self.collection.find(filter, None)\n            .await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n\n        let mut results = Vec::new();\n        while cursor.advance().await.map_err(|e| AppError::DatabaseError(e.to_string()))? {\n            results.push(cursor.deserialize_current().map_err(|e| AppError::DatabaseError(e.to_string()))?);\n        }\n\n        Ok(results)\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Create indexes on frequently queried fields"
        }), ": Define indexes during application startup to prevent collection scans."]
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
46824(module) {
module.exports = JSON.parse('{"id":"ferrox/databases/mongodb","title":"🍃 Document Databases (MongoDB)","description":"For document-oriented storage, Ferrox provides ferrox-database-mongo, wrapping the official mongodb driver for Rust.","source":"@site/docs/ferrox/databases/mongodb.md","sourceDirName":"ferrox/databases","slug":"/ferrox/databases/mongodb","permalink":"/docs/ferrox/databases/mongodb","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/databases/mongodb.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"🐘 Relational Databases (SeaORM)","permalink":"/docs/ferrox/databases/seaorm"},"next":{"title":"🔴 In-Memory Caching & Redis","permalink":"/docs/ferrox/databases/redis"}}')

},

};
;