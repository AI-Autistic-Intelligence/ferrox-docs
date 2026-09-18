"use strict";
exports.ids = ["7014"];
exports.modules = {
61615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_datagrid_md_892_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_datagrid_md_892_json__rspack_import_0 = __webpack_require__(65570);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'datagrid',
	title: 'Server-Side Data Grid Transport & SQL Query Building',
	sidebar_position: 6
};
const contentTitle = 'Server-Side Data Grid Transport & SQL Query Building';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. What It Does &amp; Key Capabilities",
  "id": "2-what-it-does--key-capabilities",
  "level": 2
}, {
  "value": "3. How It Works Under the Hood",
  "id": "3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "Datagrid Query Generation Mechanics",
  "id": "datagrid-query-generation-mechanics",
  "level": 3
}, {
  "value": "4. Why It Was Designed This Way",
  "id": "4-why-it-was-designed-this-way",
  "level": 2
}, {
  "value": "5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "5.1 Service-Layer Grid Query Processing",
  "id": "51-service-layer-grid-query-processing",
  "level": 3
}, {
  "value": "6. Anti-Patterns: How NOT to Use It",
  "id": "6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "7. Pro-Tips &amp; Best Practices",
  "id": "7-pro-tips--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "server-side-data-grid-transport--sql-query-building",
        children: "Server-Side Data Grid Transport & SQL Query Building"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-datagrid"
      }), " crate provides server-side data grid handling for Rust web frameworks. It translates frontend data grid request models (AG-Grid, TanStack Table) into optimized SeaORM / SQL queries with dynamic sorting, filtering, and pagination limits."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Web dashboards require fetching tabular datasets with multi-column filtering, flexible column sorting, dynamic text/range searching, and server-side pagination. Writing custom SQL query generators for every data table endpoint causes code duplication and SQL injection vulnerabilities."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-datagrid"
      }), " standardizes server-side data grid processing in Rust. It acts as an abstraction layer between frontend grid models and SeaORM / SQL query builders, guaranteeing type-safe parameter binding and zero SQL injection risks."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        ferrox-datagrid Engine                          │\n├────────────────────────────────────────────────────────────────────────┤\n│  • Generic Grid Request Parser (AG-Grid / TanStack Table)              │\n│  • Whitelisted Column Mapping Validator                                │\n│  • SeaORM Select<E> SQL Query Builder                                  │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Parameterized SQL Execution\n                                   ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                 PostgreSQL / MySQL / SQLite Database                   │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Universal Grid Request Model"
        }), ": Consumes standard JSON payload specifications containing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "page"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "limit"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sorts"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "filters"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "SeaORM Integration"
        }), ": Converts filter models directly into SeaORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Select<Entity>"
        }), " query conditions."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Relational Joined Column Resolution"
        }), ": Supports filtering and sorting across relational table joins."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Strict Column Whitelisting"
        }), ": Matches incoming field names against explicit column whitelist schemas to block SQL injection."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "datagrid-query-generation-mechanics",
      children: "Datagrid Query Generation Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as AG-Grid Client\n    participant Router as Ferrox Transport Endpoint\n    participant Engine as ferrox-datagrid Engine\n    participant DB as SeaORM Select Query\n\n    Client->>Router: POST /api/users/grid (IServerSideGetRowsRequest)\n    Router->>Engine: DatagridEngine::apply(select_query, request, entity_map)\n    Engine->>Engine: Validate Field Names against Whitelist Schema\n    Engine->>Engine: Append Parameterized WHERE Conditions\n    Engine->>Engine: Apply ORDER BY & LIMIT / OFFSET Clause\n    Engine->>DB: Execute get_many_and_count()\n    DB-->>Engine: Return (Vec<Model>, total_count)\n    Engine-->>Router: DatagridResponse { data, total, page }\n    Router-->>Client: 200 OK JSON Response\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-why-it-was-designed-this-way",
      children: "4. Why It Was Designed This Way"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Raw SQL String Parsing"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "ferrox-datagrid Engine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Un-sanitized field parameters allow SQL injection."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100% Parameterized queries with column whitelist enforcement."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Developer Speed"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Writing custom search logic takes days per entity table."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single service function processes any grid endpoint."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Inefficient table scans from missing index joins."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Generates optimized SQL queries tailored to database indexes."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-service-layer-grid-query-processing",
      children: "5.1 Service-Layer Grid Query Processing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_datagrid::{DatagridEngine, DatagridRequest, ColumnMap};\nuse sea_orm::*;\n\npub async fn fetch_users_grid(\n    db: &DatabaseConnection,\n    grid_request: DatagridRequest,\n) -> Result<DatagridResult<user::Model>, DbErr> {\n    let mut query = user::Entity::find();\n\n    // Map frontend grid field names to SeaORM entity columns\n    let column_map = ColumnMap::new()\n        .insert(\"id\", user::Column::Id)\n        .insert(\"email\", user::Column::Email)\n        .insert(\"status\", user::Column::Status)\n        .insert(\"createdAt\", user::Column::CreatedAt);\n\n    let datagrid = DatagridEngine::new(query, grid_request, column_map);\n    let (data, total) = datagrid.execute(db).await?;\n\n    Ok(DatagridResult {\n        data,\n        total,\n        page: grid_request.page.unwrap_or(1),\n        limit: grid_request.limit.unwrap_or(20),\n    })\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Un-whitelisted Dynamic Column Expressions"
        }), "\nNever pass client-provided column strings directly to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".order_by_asc()"
        }), " without validating them against a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ColumnMap"
        }), " whitelist. Un-sanitized inputs expose database schema details."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Default Fallback Sorting"
        }), "\nAlways provide a fallback default sort column (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user::Column::Id DESC"
        }), ") to ensure deterministic pagination ordering when client sort models are empty."]
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
65570(module) {
module.exports = JSON.parse('{"id":"ferrox/transports/datagrid","title":"Server-Side Data Grid Transport & SQL Query Building","description":"The ferrox-datagrid crate provides server-side data grid handling for Rust web frameworks. It translates frontend data grid request models (AG-Grid, TanStack Table) into optimized SeaORM / SQL queries with dynamic sorting, filtering, and pagination limits.","source":"@site/docs/ferrox/transports/datagrid.md","sourceDirName":"ferrox/transports","slug":"/ferrox/transports/datagrid","permalink":"/docs/ferrox/transports/datagrid","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/transports/datagrid.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"datagrid","title":"Server-Side Data Grid Transport & SQL Query Building","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Cloud File Storage, S3 Streams & Presigned URLs","permalink":"/docs/ferrox/transports/file-storage"},"next":{"title":"CRDT Real-Time State Sync Engine & WebSockets","permalink":"/docs/ferrox/transports/sync"}}')

},

};
;