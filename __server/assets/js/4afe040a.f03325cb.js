"use strict";
exports.ids = ["3785"];
exports.modules = {
50658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_overview_md_4af_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_databases_overview_md_4af_json__rspack_import_0 = __webpack_require__(85661);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '💾 Persistence Architecture & Repository Pattern';

const assets = {

};



const toc = [{
  "value": "1. The <code>Repository&lt;Entity, Id&gt;</code> Trait",
  "id": "1-the-repositoryentity-id-trait",
  "level": 2
}, {
  "value": "2. Multi-Database Architecture",
  "id": "2-multi-database-architecture",
  "level": 2
}, {
  "value": "3. Benefits of the Repository Pattern",
  "id": "3-benefits-of-the-repository-pattern",
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
        id: "-persistence-architecture--repository-pattern",
        children: "💾 Persistence Architecture & Repository Pattern"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In enterprise software development, coupling controllers or business logic directly to raw database queries creates brittle, untestable code."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox enforces the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Repository Pattern"
      }), " through ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-database-core"
      }), ", decoupling domain logic from the underlying storage mechanism (SQL relational, NoSQL document, or In-memory key-value)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-the-repositoryentity-id-trait",
      children: ["1. The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Repository<Entity, Id>"
      }), " Trait"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["All persistence modules in Ferrox implement the generic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Repository"
      }), " trait:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_trait::async_trait;\nuse ferrox_errors::AppError;\n\n#[async_trait]\npub trait Repository<Entity, Id>: Send + Sync {\n    /// Finds a single entity by its primary key\n    async fn find_by_id(&self, id: Id) -> Result<Option<Entity>, AppError>;\n    \n    /// Finds all entities\n    async fn find_all(&self) -> Result<Vec<Entity>, AppError>;\n    \n    /// Inserts a new entity\n    async fn insert(&self, entity: Entity) -> Result<Entity, AppError>;\n    \n    /// Updates an existing entity\n    async fn update(&self, id: Id, entity: Entity) -> Result<Entity, AppError>;\n    \n    /// Deletes an entity by its primary key\n    async fn delete(&self, id: Id) -> Result<(), AppError>;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-multi-database-architecture",
      children: "2. Multi-Database Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Ferrox provides specialized crates for different storage engines:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "                          +--------------------------------+\n                          |   Repository<Entity, Id> Trait  |\n                          +--------------------------------+\n                                          |\n          +-------------------------------+-------------------------------+\n          |                               |                               |\n          v                               v                               v\n+-------------------+           +-------------------+           +-------------------+\n|  ferrox-database- |           |  ferrox-database- |           |  ferrox-database- |\n|      seaorm       |           |       mongo       |           |       redis       |\n| (Postgres/MySQL)  |           |     (MongoDB)     |           |  (Cache & Locks)  |\n+-------------------+           +-------------------+           +-------------------+\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-benefits-of-the-repository-pattern",
      children: "3. Benefits of the Repository Pattern"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Testability & Mocking"
        }), ": You can swap real database implementations with in-memory mock repositories in unit tests without starting a Docker database container."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database Flexibility"
        }), ": Migrating from PostgreSQL to MongoDB or SQLite requires changing repository trait implementations without modifying service or controller layers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Clean Architecture"
        }), ": Services operate exclusively on domain structs rather than SQL rows or BSON documents."]
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
85661(module) {
module.exports = JSON.parse('{"id":"ferrox/databases/overview","title":"💾 Persistence Architecture & Repository Pattern","description":"In enterprise software development, coupling controllers or business logic directly to raw database queries creates brittle, untestable code.","source":"@site/docs/ferrox/databases/overview.md","sourceDirName":"ferrox/databases","slug":"/ferrox/databases/overview","permalink":"/docs/ferrox/databases/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/databases/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"💖 Support & Donations","permalink":"/docs/ferrox/community/donations"},"next":{"title":"🐘 Relational Databases (SeaORM)","permalink":"/docs/ferrox/databases/seaorm"}}')

},

};
;