"use strict";
exports.ids = ["7935"];
exports.modules = {
27116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_seaorm_md_a09_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_seaorm_md_a09_json__rspack_import_0 = __webpack_require__(9996);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🐘 Relational Databases (SeaORM)';

const assets = {

};



const toc = [{
  "value": "1. Connecting to PostgreSQL / MySQL",
  "id": "1-connecting-to-postgresql--mysql",
  "level": 2
}, {
  "value": "2. Implementing a SeaORM Repository",
  "id": "2-implementing-a-seaorm-repository",
  "level": 2
}, {
  "value": "3. Database Transactions",
  "id": "3-database-transactions",
  "level": 2
}, {
  "value": "4. ✅ Best Practices",
  "id": "4--best-practices",
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
        id: "-relational-databases-seaorm",
        children: "🐘 Relational Databases (SeaORM)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For relational databases (PostgreSQL, MySQL, SQLite), Ferrox integrates with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.sea-ql.org/SeaORM/",
        children: "SeaORM"
      }), " via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-database-seaorm"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["SeaORM provides an async ORM built on top of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "sqlx"
      }), ", offering compile-time safety, dynamic query building, and seamless integration with Tokio."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-connecting-to-postgresql--mysql",
      children: "1. Connecting to PostgreSQL / MySQL"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Initialize the SeaORM database connection pool during application bootstrap:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use sea_orm::{Database, DatabaseConnection};\nuse ferrox_errors::AppError;\n\npub async fn init_db(database_url: &str) -> Result<DatabaseConnection, AppError> {\n    let db = Database::connect(database_url)\n        .await\n        .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n        \n    println!(\"✅ Connected to Relational Database via SeaORM\");\n    Ok(db)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-implementing-a-seaorm-repository",
      children: "2. Implementing a SeaORM Repository"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Implement the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Repository"
      }), " trait for your entity:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_trait::async_trait;\nuse sea_orm::{DatabaseConnection, EntityTrait, Set, ActiveModelTrait};\nuse ferrox_database_core::Repository;\nuse ferrox_errors::AppError;\nuse crate::entities::user::{Entity as UserEntity, ActiveModel as UserActiveModel, Model as UserModel};\n\npub struct SeaOrmUserRepository {\n    db: DatabaseConnection,\n}\n\nimpl SeaOrmUserRepository {\n    pub fn new(db: DatabaseConnection) -> Self {\n        Self { db }\n    }\n}\n\n#[async_trait]\nimpl Repository<UserModel, i32> for SeaOrmUserRepository {\n    async fn find_by_id(&self, id: i32) -> Result<Option<UserModel>, AppError> {\n        UserEntity::find_by_id(id)\n            .one(&self.db)\n            .await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))\n    }\n\n    async fn find_all(&self) -> Result<Vec<UserModel>, AppError> {\n        UserEntity::find()\n            .all(&self.db)\n            .await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))\n    }\n\n    async fn insert(&self, user: UserModel) -> Result<UserModel, AppError> {\n        let active_model = UserActiveModel {\n            name: Set(user.name),\n            email: Set(user.email),\n            ..Default::default()\n        };\n\n        active_model\n            .insert(&self.db)\n            .await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))\n    }\n\n    async fn update(&self, _id: i32, _user: UserModel) -> Result<UserModel, AppError> {\n        // Implement update logic\n        todo!()\n    }\n\n    async fn delete(&self, id: i32) -> Result<(), AppError> {\n        UserEntity::delete_by_id(id)\n            .exec(&self.db)\n            .await\n            .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n        Ok(())\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-database-transactions",
      children: "3. Database Transactions"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "SeaORM supports async transactions for multi-step atomic operations:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use sea_orm::TransactionTrait;\n\nlet txn = db.begin().await?;\n// Perform multiple queries inside txn...\ntxn.commit().await?;\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Configure connection pool bounds"
        }), ": Always set max pool size (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "max_connections"
        }), ") based on database CPU core count to avoid exhaustion under high concurrency."]
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
9996(module) {
module.exports = JSON.parse('{"id":"ferrox/databases/seaorm","title":"🐘 Relational Databases (SeaORM)","description":"For relational databases (PostgreSQL, MySQL, SQLite), Ferrox integrates with SeaORM via ferrox-database-seaorm.","source":"@site/docs/ferrox/databases/seaorm.md","sourceDirName":"ferrox/databases","slug":"/ferrox/databases/seaorm","permalink":"/docs/ferrox/databases/seaorm","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/databases/seaorm.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"💾 Persistence Architecture & Repository Pattern","permalink":"/docs/ferrox/databases/overview"},"next":{"title":"🍃 Document Databases (MongoDB)","permalink":"/docs/ferrox/databases/mongodb"}}')

},

};
;