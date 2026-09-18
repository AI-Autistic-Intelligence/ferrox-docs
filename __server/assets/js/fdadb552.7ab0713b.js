"use strict";
exports.ids = ["7789"];
exports.modules = {
23880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_migrations_md_fda_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_migrations_md_fda_json__rspack_import_0 = __webpack_require__(79485);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 5
};
const contentTitle = '🔄 Schema Migrations Management';

const assets = {

};



const toc = [{
  "value": "1. Migration File Structure",
  "id": "1-migration-file-structure",
  "level": 2
}, {
  "value": "2. Defining a SeaORM Migration",
  "id": "2-defining-a-seaorm-migration",
  "level": 2
}, {
  "value": "3. Running Migrations Programmatically",
  "id": "3-running-migrations-programmatically",
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
        id: "-schema-migrations-management",
        children: "🔄 Schema Migrations Management"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["As production systems evolve, database schemas require incremental versioning without downtime. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-migrations"
      }), " provides automated schema migrations runner for relational and document databases."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-migration-file-structure",
      children: "1. Migration File Structure"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Migrations are organized chronologically with up/down SQL or Rust migration steps:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-text",
        children: "migrations/\n├── m20260101_000001_create_users_table.rs\n├── m20260201_000002_add_roles_to_users.rs\n└── mod.rs\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-defining-a-seaorm-migration",
      children: "2. Defining a SeaORM Migration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table(\n                Table::create()\n                    .table(Users::Table)\n                    .if_not_exists()\n                    .col(\n                        ColumnDef::new(Users::Id)\n                            .integer()\n                            .not_null()\n                            .auto_increment()\n                            .primary_key(),\n                    )\n                    .col(ColumnDef::new(Users::Username).string().not_null())\n                    .col(ColumnDef::new(Users::Email).string().not_null())\n                    .to_owned(),\n            )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table(Table::drop().table(Users::Table).to_owned())\n            .await\n    }\n}\n\n#[derive(DeriveIden)]\nenum Users {\n    Table,\n    Id,\n    Username,\n    Email,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-running-migrations-programmatically",
      children: "3. Running Migrations Programmatically"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Execute pending migrations automatically on startup during ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.rs"
      }), " bootstrap:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use sea_orm_migration::prelude::*;\nuse ferrox_migrations::Migrator;\n\npub async fn run_migrations(db: &DatabaseConnection) -> Result<(), AppError> {\n    println!(\"🔄 Running database migrations...\");\n    Migrator::up(db, None)\n        .await\n        .map_err(|e| AppError::DatabaseError(e.to_string()))?;\n    println!(\"✅ Database schema up-to-date!\");\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Never modify published migrations"
        }), ": Always create new migration files for schema changes to ensure CI/CD repeatability across environments."]
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
79485(module) {
module.exports = JSON.parse('{"id":"ferrox/databases/migrations","title":"🔄 Schema Migrations Management","description":"As production systems evolve, database schemas require incremental versioning without downtime. ferrox-migrations provides automated schema migrations runner for relational and document databases.","source":"@site/docs/ferrox/databases/migrations.md","sourceDirName":"ferrox/databases","slug":"/ferrox/databases/migrations","permalink":"/docs/ferrox/databases/migrations","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/databases/migrations.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"🔴 In-Memory Caching & Redis","permalink":"/docs/ferrox/databases/redis"},"next":{"title":"🏭 Production Deployment: Docker & Kubernetes","permalink":"/docs/ferrox/deployment/docker-kubernetes"}}')

},

};
;