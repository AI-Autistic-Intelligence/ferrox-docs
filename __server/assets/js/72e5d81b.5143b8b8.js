"use strict";
exports.ids = ["2964"];
exports.modules = {
22212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_ag_grid_md_72e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_ag_grid_md_72e_json__rspack_import_0 = __webpack_require__(66538);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'ag-grid',
	title: 'AG-Grid Server-Side Integration & Query Transformers',
	sidebar_position: 1
};
const contentTitle = 'AG-Grid Server-Side Integration & Query Transformers';

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
  "value": "Execution Flow Sequence",
  "id": "execution-flow-sequence",
  "level": 3
}, {
  "value": "Internal Engine Mechanics",
  "id": "internal-engine-mechanics",
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
  "value": "5.1 Basic Controller &amp; Service Setup",
  "id": "51-basic-controller--service-setup",
  "level": 3
}, {
  "value": "5.2 Advanced Custom Filter Handling",
  "id": "52-advanced-custom-filter-handling",
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
    ol: "ol",
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
        id: "ag-grid-server-side-integration--query-transformers",
        children: "AG-Grid Server-Side Integration & Query Transformers"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/ag-grid"
      }), " package provides enterprise-grade, server-side data grid processing for NestJS applications. It automatically translates frontend AG-Grid request payloads (containing complex filtering rules, multi-column sorting, pagination limits, and grouping expressions) into optimized TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SelectQueryBuilder"
      }), " execution plans with parameterized SQL generation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Modern enterprise applications require rendering massive datasets (millions of rows) with real-time grid capabilities—such as column searching, multi-level sorting, dynamic range filtering, and server-side pagination—without overwhelming client-side memory or making un-indexed database calls."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/ag-grid"
      }), " acts as the bridge between frontend AG-Grid Enterprise implementations and backend TypeORM ORM layers. It eliminates hand-written SQL search parsers by consuming standard AG-Grid ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "IServerSideGetRowsRequest"
      }), " structures and applying exact column-mapping logic, type-safe conversions, and automated security sanitization before database execution."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────┐      AG-Grid JSON Payload      ┌─────────────────────────────┐\n│                        │ ─────────────────────────────> │                             │\n│  Frontend AG-Grid      │                                │  AG-Grid Transformer        │\n│  (Server-Side Model)   │ <───────────────────────────── │  (@nestjs-yalc/ag-grid)     │\n└────────────────────────┘      Row Data + Total Count    └──────────────┬──────────────┘\n                                                                         │\n                                                                         │ TypeORM SQL Builder\n                                                                         ▼\n                                                          ┌─────────────────────────────┐\n                                                          │  PostgreSQL / MySQL / SQLite │\n                                                          └─────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Filter Translation"
        }), ": Converts AG-Grid text, number, date, set, and boolean filter models into parameterized SQL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "WHERE"
        }), " clauses."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Multi-Column Sorting"
        }), ": Translates nested ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sortModel"
        }), " arrays into SQL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ORDER BY"
        }), " statements with null-sorting safety."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Pagination"
        }), ": Calculates offset-based (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SKIP"
        }), " / ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "TAKE"
        }), ") parameters directly from ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "startRow"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "endRow"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Column Mapping & Security Sanitization"
        }), ": Maps grid field keys to actual entity properties or joined table aliases while stripping SQL injection vectors."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Relational Field Resolution"
        }), ": Supports deeply nested column paths (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user.profile.firstName"
        }), ") across TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "LEFT JOIN"
        }), " aliases."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "execution-flow-sequence",
      children: "Execution Flow Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as AG-Grid Client\n    participant Controller as NestJS Controller\n    participant Service as Grid Service\n    participant Transformer as AgGridQueryTransformer\n    participant DB as TypeORM QueryBuilder\n\n    Client->>Controller: POST /api/users/grid (IServerSideGetRowsRequest)\n    Controller->>Service: getUsersGrid(gridRequest)\n    Service->>Transformer: applyAgGridToQueryBuilder(queryBuilder, gridRequest, entityMapping)\n    Transformer->>Transformer: Validate & Sanitize Field Names\n    Transformer->>Transformer: Build Filter Expressions (SQL WHERE)\n    Transformer->>Transformer: Apply Multi-Column Sort (SQL ORDER BY)\n    Transformer->>Transformer: Set Pagination Window (LIMIT / OFFSET)\n    Transformer->>DB: Execute GetManyAndCount()\n    DB-->>Transformer: Returns [entities, totalCount]\n    Transformer-->>Service: Formatted Grid Result { rowData, totalCount }\n    Service-->>Controller: DTO Response\n    Controller-->>Client: JSON Response { rows: [...], lastRow: totalCount }\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "internal-engine-mechanics",
      children: "Internal Engine Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Filter Model Parsing"
        }), ": When a filter request arrives (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "filterType: 'number', type: 'greaterThan', filter: 100"
        }), "), the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AgGridQueryTransformer"
        }), " inspects the registered entity metadata. It converts the operator into parameterized SQL (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "field > :param_1"
        }), ") to prevent SQL injection."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Date Range Normalization"
        }), ": Date filters automatically cast ISO-8601 strings into database-compatible timestamps and apply boundary ranges (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "BETWEEN"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ">="
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<="
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Set Filters (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IN"
          }), " Clauses)"]
        }), ": Multi-selection set filters convert array values into parameterized ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "IN (:...setValues)"
        }), " conditions."]
      }), "\n"]
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
            children: "Design Aspect"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Traditional Hand-Coded Approach"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@nestjs-yalc/ag-grid Approach"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Maintenance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Writing manual SQL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "WHERE"
            }), " parsers for every API endpoint."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single decorator / service call handles any complex grid query."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
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
            children: "High risk of SQL injection via unescaped search string concatenation."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100% Parameterized queries with column-name whitelist validation."
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
            children: "Inefficient table scans from non-indexed dynamic joins."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Strict relation aliasing with indexed column mapping rules."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Type Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Loose ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "any"
            }), " typing for grid filter parameters."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Strictly typed DTO wrappers for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "IServerSideGetRowsRequest"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-basic-controller--service-setup",
      children: "5.1 Basic Controller & Service Setup"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Controller, Post, Body } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { AgGridQueryTransformer, IServerSideGetRowsRequest } from '@nestjs-yalc/ag-grid';\nimport { UserEntity } from './user.entity';\n\n@Controller('users')\nexport class UserController {\n  constructor(\n    @InjectRepository(UserEntity)\n    private readonly userRepository: Repository<UserEntity>,\n  ) {}\n\n  @Post('grid')\n  async getUsersGrid(@Body() gridRequest: IServerSideGetRowsRequest) {\n    const queryBuilder = this.userRepository.createQueryBuilder('user');\n\n    // Apply AG-Grid filters, sorting, and pagination\n    const transformer = new AgGridQueryTransformer<UserEntity>(queryBuilder, gridRequest, {\n      id: 'user.id',\n      email: 'user.email',\n      role: 'user.role',\n      createdAt: 'user.createdAt',\n      'department.name': 'department.name', // Relational field mapping\n    });\n\n    // Automatically adds LEFT JOIN if relational fields are filtered/sorted\n    transformer.applyJoins([\n      { property: 'user.department', alias: 'department' }\n    ]);\n\n    const [rows, totalCount] = await transformer.execute();\n\n    return {\n      rows,\n      lastRow: totalCount,\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-advanced-custom-filter-handling",
      children: "5.2 Advanced Custom Filter Handling"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { AgGridQueryTransformer, FilterCondition } from '@nestjs-yalc/ag-grid';\n\nconst transformer = new AgGridQueryTransformer(queryBuilder, gridRequest, fieldMap);\n\n// Register custom filter evaluator for complex JSONB or GEO columns\ntransformer.registerCustomFilter('metadata', (qb, filterModel: FilterCondition) => {\n  qb.andWhere(\"user.metadata ->> 'status' = :status\", { status: filterModel.filter });\n});\n\nconst result = await transformer.execute();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Passing Raw Unmapped Frontend Fields"
        }), "\nNever pass client-provided field names directly into the QueryBuilder without validating them against an explicit field mapping object. Doing so allows malicious clients to probe private database columns."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ❌ WRONG: Passing unmapped grid field directly\nqueryBuilder.orderBy(gridRequest.sortModel[0].colId);\n\n// ✅ CORRECT: Use AgGridQueryTransformer field map\nconst transformer = new AgGridQueryTransformer(queryBuilder, gridRequest, {\n  allowedField: 'entity.actualColumn',\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 2: Unbounded Count Queries on Large Tables"
        }), "\nCalling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "getManyAndCount()"
        }), " on tables with tens of millions of rows without indexes can freeze database workers. Always pass pre-filtered indexing constraints or set maximum ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "take"
        }), " limits."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Optimization 1: Indexing Strategy"
        }), "\nCreate composite indexes on frequently filtered and sorted column combinations (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "(department_id, created_at DESC)"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!NOTE]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Optimization 2: Default Sort Order"
        }), "\nAlways provide a fallback default sort order (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user.id DESC"
        }), ") in case the user clears all grid sorts, ensuring deterministic SQL pagination results."]
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
66538(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/ag-grid","title":"AG-Grid Server-Side Integration & Query Transformers","description":"The @nestjs-yalc/ag-grid package provides enterprise-grade, server-side data grid processing for NestJS applications. It automatically translates frontend AG-Grid request payloads (containing complex filtering rules, multi-column sorting, pagination limits, and grouping expressions) into optimized TypeORM SelectQueryBuilder execution plans with parameterized SQL generation.","source":"@site/docs/nestjs-yalc/docs/modules/ag-grid.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/ag-grid","permalink":"/docs/nestjs-yalc/docs/modules/ag-grid","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/ag-grid.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"ag-grid","title":"AG-Grid Server-Side Integration & Query Transformers","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart & First Application Setup","permalink":"/docs/nestjs-yalc/docs/quickstart"},"next":{"title":"@nest-yalc-2/crud-gen","permalink":"/docs/nestjs-yalc/docs/modules/crud-gen"}}')

},

};
;