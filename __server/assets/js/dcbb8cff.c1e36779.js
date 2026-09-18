"use strict";
exports.ids = ["4852"];
exports.modules = {
86778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_datagrid_md_dcb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_datagrid_md_dcb_json__rspack_import_0 = __webpack_require__(52433);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'datagrid',
	title: 'Data Grid Query Engine & Relational Transformers',
	sidebar_position: 5
};
const contentTitle = 'Data Grid Query Engine & Relational Transformers';

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
  "value": "Datagrid Query Translation Pipeline",
  "id": "datagrid-query-translation-pipeline",
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
  "value": "5.1 Controller &amp; Service Datagrid Pipeline",
  "id": "51-controller--service-datagrid-pipeline",
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
        id: "data-grid-query-engine--relational-transformers",
        children: "Data Grid Query Engine & Relational Transformers"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " datagrid module provides high-performance server-side data grid handling. It converts generic frontend grid request models (AG-Grid, TanStack Table, Material UI DataGrid) into optimized database execution plans with dynamic filtering, dynamic sorting, pagination offset limits, and JOIN condition resolution."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Modern web dashboards require loading tabular data with dynamic multi-column filtering, flexible column sorting, dynamic range search, and server-side pagination. Implementing custom SQL parsing for every table endpoint leads to security risks (SQL injection) and redundant code duplication."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DatagridEngine"
      }), " in Ferrox Node standardizes server-side data grid processing. It acts as an abstraction layer between client-side grid components and ORM query builders (TypeORM / Prisma / Kysely), ensuring 100% type-safe query generation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        Ferrox DatagridEngine                           │\n├────────────────────────────────────────────────────────────────────────┤\n│  • Generic Grid Request Parser (AG-Grid / TanStack / MUI)              │\n│  • Whitelisted Column Mapping Validator                                │\n│  • TypeORM / Kysely QueryBuilder SQL Converter                         │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Parameterized SQL\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ PostgreSQL Engine    ││ MySQL Engine         ││ SQLite Engine        │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
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
          children: "Parameterized Filter Translation"
        }), ": Translates text operators (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "contains"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "equals"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "startsWith"
        }), "), numeric range operators (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "greaterThan"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "lessThan"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "inRange"
        }), "), and set selections into safe SQL parameters."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Relational Field Resolution"
        }), ": Automatically injects required ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "LEFT JOIN"
        }), " alias references when filtering on nested properties (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user.department.name"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Column Whitelisting Security"
        }), ": Prevents SQL injection by strictly matching incoming field keys against registered entity mapping schemas."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "datagrid-query-translation-pipeline",
      children: "Datagrid Query Translation Pipeline"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Frontend DataGrid\n    participant Controller as Ferrox Router\n    participant Engine as DatagridEngine\n    participant DB as TypeORM QueryBuilder\n\n    Client->>Controller: POST /api/orders/grid (GridPayload)\n    Controller->>Engine: DatagridEngine.process(queryBuilder, payload, entityMap)\n    Engine->>Engine: Validate Column Field Names against Whitelist\n    Engine->>Engine: Generate SQL WHERE Expressions (Parameterized)\n    Engine->>Engine: Apply ORDER BY Sorting & LIMIT/OFFSET Pagination\n    Engine->>DB: Execute QueryBuilder.getManyAndCount()\n    DB-->>Engine: Returns [records, totalCount]\n    Engine-->>Controller: Return DatagridResult { data: [...], total: count }\n    Controller-->>Client: Deliver 200 OK JSON Payload\n"
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
            children: "Metric"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Hand-Coded SQL Searching"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox DatagridEngine"
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
            children: "Concatenating search strings risks SQL injection."
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
            children: "Writing custom search logic takes days per table."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single controller decorator handles any data table endpoint."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "UI Agnostic"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bound to a specific frontend grid library."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Universal adapter supports AG-Grid, TanStack, and MUI DataGrid."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-controller--service-datagrid-pipeline",
      children: "5.1 Controller & Service Datagrid Pipeline"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { DatagridEngine, IDatagridRequest } from '@ferrox/node';\nimport { Repository } from 'typeorm';\nimport { OrderEntity } from './order.entity';\n\nexport async function getOrdersGrid(\n  orderRepository: Repository<OrderEntity>,\n  gridRequest: IDatagridRequest,\n) {\n  const queryBuilder = orderRepository.createQueryBuilder('order');\n\n  const datagrid = new DatagridEngine(queryBuilder, gridRequest, {\n    id: 'order.id',\n    orderNumber: 'order.orderNumber',\n    totalAmount: 'order.totalAmount',\n    status: 'order.status',\n    createdAt: 'order.createdAt',\n    'customer.email': 'customer.email',\n  });\n\n  // Automatically applies LEFT JOIN if customer.email is filtered\n  datagrid.addRelation('order.customer', 'customer');\n\n  const [data, total] = await datagrid.execute();\n\n  return {\n    data,\n    total,\n    page: gridRequest.page || 1,\n    limit: gridRequest.limit || 20,\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Un-whitelisted Dynamic Column Strings"
        }), "\nNever pass client-provided string variables directly into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".orderBy()"
        }), " without validating them through ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DatagridEngine"
        }), " whitelist schemas."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Indexed Sorting Columns"
        }), "\nAlways ensure database columns used in multi-column sorting rules have appropriate database indexes created to prevent slow sorting scans."]
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
52433(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/datagrid","title":"Data Grid Query Engine & Relational Transformers","description":"The @ferrox/node datagrid module provides high-performance server-side data grid handling. It converts generic frontend grid request models (AG-Grid, TanStack Table, Material UI DataGrid) into optimized database execution plans with dynamic filtering, dynamic sorting, pagination offset limits, and JOIN condition resolution.","source":"@site/docs/ferrox-node/docs/components/datagrid.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/datagrid","permalink":"/docs/ferrox-node/docs/components/datagrid","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/datagrid.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"datagrid","title":"Data Grid Query Engine & Relational Transformers","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"CQRS & Saga Process Managers","permalink":"/docs/ferrox-node/docs/components/cqrs"},"next":{"title":"Security Guards, RBAC & Role Permission Engine","permalink":"/docs/ferrox-node/docs/components/guards"}}')

},

};
;