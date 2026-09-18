"use strict";
exports.ids = ["1105"];
exports.modules = {
1138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_crud_generator_md_636_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_crud_generator_md_636_json__rspack_import_0 = __webpack_require__(4250);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = '🛠️ Code Factory & Generic CRUD Generator';

const assets = {

};



const toc = [{
  "value": "1. <code>crud_router!</code> Macro",
  "id": "1-crud_router-macro",
  "level": 2
}, {
  "value": "Usage Example",
  "id": "usage-example",
  "level": 3
}, {
  "value": "2. <code>vertical_slice!</code> Macro",
  "id": "2-vertical_slice-macro",
  "level": 2
}, {
  "value": "3. How <code>crud_router!</code> Works Under the Hood",
  "id": "3-how-crud_router-works-under-the-hood",
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
    h3: "h3",
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
        id: "️-code-factory--generic-crud-generator",
        children: "🛠️ Code Factory & Generic CRUD Generator"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Building standard CRUD (Create, Read, Update, Delete) endpoints for dozens of entities generates massive amounts of repetitive boilerplate."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox solves this with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-crud-gen"
      }), "—a macro system that auto-generates REST endpoints, AutoZod payload validation, and GraphQL schemas with a single line of Rust code."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-crud_router-macro",
      children: ["1. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "crud_router!"
      }), " Macro"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "crud_router!"
      }), " macro constructs an Axum ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Router"
      }), " providing 5 standard CRUD endpoints:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "GET /"
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "repo.find_all()"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "GET /:id"
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "repo.find_by_id(id)"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "POST /"
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "repo.insert(payload)"
        }), " (with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ValidatedJson"
        }), " validation)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "PATCH /:id"
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "repo.update(id, payload)"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DELETE /:id"
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "repo.delete(id)"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "usage-example",
      children: "Usage Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::Router;\nuse std::sync::Arc;\nuse ferrox_crud_gen::crud_router;\nuse crate::models::{Product, ProductRepository};\n\npub fn products_router() -> Router<Arc<ProductRepository>> {\n    crud_router!(Product, u64, ProductRepository)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-vertical_slice-macro",
      children: ["2. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "vertical_slice!"
      }), " Macro"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For ultra-rapid prototyping, the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "vertical_slice!"
      }), " macro generates the entire vertical slice of a feature: DTO struct definition, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validator::Validate"
      }), " derivations, GraphQL inputs, and the REST Router."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_crud_gen::vertical_slice;\nuse crate::repositories::UserRepository;\n\n// Defines DTO, validation rules, GraphQL schema, and REST router!\nvertical_slice!(User, u64, UserRepository, {\n    username: String,\n    email: String,\n    age: u8\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "3-how-crud_router-works-under-the-hood",
      children: ["3. How ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "crud_router!"
      }), " Works Under the Hood"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The macro leverages Axum's generic state extraction and Ferrox's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Repository<Entity, Id>"
      }), " trait:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "macro_rules! crud_router {\n    ($entity:ty, $id:ty, $repo:ty) => {{\n        use axum::{\n            extract::{Path, State},\n            routing::{get, post, delete, patch},\n            Json, Router,\n        };\n        use std::sync::Arc;\n        use ferrox_database_core::Repository;\n        use ferrox_validation::ValidatedJson;\n\n        Router::<Arc<$repo>>::new()\n            .route(\"/\", get(|State(repo): State<Arc<$repo>>| async move {\n                let items = repo.find_all().await?;\n                Ok::<_, ferrox_errors::AppError>(Json(items))\n            }))\n            .route(\"/:id\", get(|Path(id): Path<$id>, State(repo): State<Arc<$repo>>| async move {\n                match repo.find_by_id(id).await? {\n                    Some(item) => Ok::<_, ferrox_errors::AppError>(Json(item)),\n                    None => Err(ferrox_errors::AppError::NotFound(\"Entity not found\".into())),\n                }\n            }))\n            .route(\"/\", post(|State(repo): State<Arc<$repo>>, ValidatedJson(payload): ValidatedJson<$entity>| async move {\n                let created = repo.insert(payload).await?;\n                Ok::<_, ferrox_errors::AppError>(Json(created))\n            }))\n    }};\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Use macros for simple entity tables"
        }), ": Save developer time on standard admin tables and simple resource management endpoints."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Override routes when custom logic is needed"
        }), ": For routes requiring complex business orchestrations or email triggers, attach custom route handlers alongside or instead of the auto-generated router."]
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
4250(module) {
module.exports = JSON.parse('{"id":"ferrox/abstractions/crud-generator","title":"🛠️ Code Factory & Generic CRUD Generator","description":"Building standard CRUD (Create, Read, Update, Delete) endpoints for dozens of entities generates massive amounts of repetitive boilerplate.","source":"@site/docs/ferrox/abstractions/crud-generator.md","sourceDirName":"ferrox/abstractions","slug":"/ferrox/abstractions/crud-generator","permalink":"/docs/ferrox/abstractions/crud-generator","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/abstractions/crud-generator.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"🎯 DTO Validation & AutoZod Extractor","permalink":"/docs/ferrox/abstractions/validation"},"next":{"title":"🛡️ Zero-Trust API Gateway Pattern","permalink":"/docs/ferrox/architectures/api-gateway"}}')

},

};
;