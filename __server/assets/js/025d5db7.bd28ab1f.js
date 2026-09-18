"use strict";
exports.ids = ["6977"];
exports.modules = {
89566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_database_md_025_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_database_md_025_json__rspack_import_0 = __webpack_require__(59597);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'database',
	title: '@nest-yalc-2/database',
	sidebar_position: 3
};
const contentTitle = '🗄️ Multi-Database & Transactional Repositories (@nest-yalc-2/database)';

const assets = {

};



const toc = [{
  "value": "🌟 Key Features",
  "id": "-key-features",
  "level": 2
}, {
  "value": "🔬 Internal Architecture &amp; Execution Mechanics",
  "id": "-internal-architecture--execution-mechanics",
  "level": 2
}, {
  "value": "Transaction Execution Pipeline",
  "id": "transaction-execution-pipeline",
  "level": 3
}, {
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/database</code> vs Standard TypeORM",
  "id": "-architectural-comparison-nest-yalc-2database-vs-standard-typeorm",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Registering Database Module in <code>AppModule</code>",
  "id": "1-registering-database-module-in-appmodule",
  "level": 3
}, {
  "value": "2. Executing Atomic Multi-Entity Transactions",
  "id": "2-executing-atomic-multi-entity-transactions",
  "level": 3
}, {
  "value": "⚠️ Common Pitfalls &amp; Anti-Patterns",
  "id": "️-common-pitfalls--anti-patterns",
  "level": 2
}, {
  "value": "💡 Best Practices &amp; Performance Tuning",
  "id": "-best-practices--performance-tuning",
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
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h1, {
        id: "️-multi-database--transactional-repositories-nest-yalc-2database",
        children: ["🗄️ Multi-Database & Transactional Repositories (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/database"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/database"
      }), " is the enterprise persistence infrastructure module for NestJS 11+. It provides dynamic multi-database connection management, transactional repository runners, automated database migrations, and entity seeding helpers powered by TypeORM and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Multi-Database Connection Factories"
        }), ": Dynamically initializes and manages separate TypeORM connections (MySQL, PostgreSQL, MariaDB, SQLite, MSSQL) within the same NestJS application."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Transactional Repository Runners"
        }), ": Manages database transactions automatically using Unit of Work patterns, ensuring atomic execution across multiple entity repositories."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Migration Engine"
        }), ": Discovers, validates, and runs database migration scripts on application startup."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database Seeding Helpers"
        }), ": Integrates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@jorgebodega/typeorm-seeding"
        }), " to populate test and staging environments with mock data generators."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    AppBoot[\"NestJS Application Startup\"]\r\n    DbModule[\"YalcDatabaseModule.forRootAsync()\"]\r\n    ConnFactory[\"TypeORM Connection Pool Factory\"]\r\n    HealthCheck[\"Database Ping & Health Check\"]\r\n    MigrationRunner[\"Auto-Migration Engine Execution\"]\r\n    TxRunner[\"Transactional QueryRunner (Unit of Work)\"]\r\n\r\n    AppBoot --> DbModule\r\n    DbModule --> ConnFactory\r\n    ConnFactory --> HealthCheck\r\n    HealthCheck --> MigrationRunner\r\n    MigrationRunner --> TxRunner\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "transaction-execution-pipeline",
      children: "Transaction Execution Pipeline"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "QueryRunner Allocation"
        }), ": When executing a transactional operation via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "YalcDatabaseService.runInTransaction()"
        }), ", the module obtains a dedicated TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "QueryRunner"
        }), " from the connection pool."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Transaction Isolation"
        }), ": Starts a database transaction with configurable isolation levels (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "READ COMMITTED"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SERIALIZABLE"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Rollback"
        }), ": If any error or domain exception (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppError"
        }), ") is thrown inside the transaction callback, the runner issues a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ROLLBACK"
        }), " command immediately and releases the connection back to the pool."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2database-vs-standard-typeorm",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/database"
      }), " vs Standard TypeORM"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🗄️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/database"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Standard NestJS TypeORM Module"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Multi-Database Management"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Dynamic Factory with Connection Pooling"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Connection Naming & Injection"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Transaction Execution"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Atomic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "runInTransaction()"
              }), " Runner"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Manual ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "queryRunner.startTransaction()"
            })]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Error Handling in Transactions"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Auto-Rollback on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/errors"
              })]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Manual ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "try/catch/rollback"
            }), " Boilerplate"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Entity Seeding Integration"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native Seeder Factories"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "External Custom Scripts"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-registering-database-module-in-appmodule",
      children: ["1. Registering Database Module in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\r\nimport { YalcDatabaseModule } from '@nest-yalc-2/database';\r\nimport { ConfigService } from '@nestjs/config';\r\n\r\n@Module({\r\n  imports: [\r\n    YalcDatabaseModule.forRootAsync({\r\n      useFactory: (config: ConfigService) => ({\r\n        type: 'postgres',\r\n        host: config.get<string>('DB_HOST', 'localhost'),\r\n        port: config.get<number>('DB_PORT', 5432),\r\n        username: config.get<string>('DB_USER', 'postgres'),\r\n        password: config.get<string>('DB_PASS', 'secret'),\r\n        database: config.get<string>('DB_NAME', 'enterprise_db'),\r\n        autoLoadEntities: true,\r\n        synchronize: false, // Always false in production!\r\n        migrationsRun: true,\r\n        extra: {\r\n          max: 20, // Connection pool size\r\n          idleTimeoutMillis: 30000,\r\n        },\r\n      }),\r\n      inject: [ConfigService],\r\n    }),\r\n  ],\r\n})\r\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-executing-atomic-multi-entity-transactions",
      children: "2. Executing Atomic Multi-Entity Transactions"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\r\nimport { YalcDatabaseService } from '@nest-yalc-2/database';\r\nimport { User } from './entities/user.entity';\r\nimport { AuditLog } from './entities/audit-log.entity';\r\n\r\n@Injectable()\r\nexport class UserManagementService {\r\n  constructor(private readonly dbService: YalcDatabaseService) {}\r\n\r\n  async createUserWithAudit(userData: Partial<User>, adminUserId: string): Promise<User> {\r\n    // Execute atomic transaction across multiple entity repositories\r\n    return await this.dbService.runInTransaction(async (entityManager) => {\r\n      // 1. Save new User entity\r\n      const userRepo = entityManager.getRepository(User);\r\n      const newUser = userRepo.create(userData);\r\n      const savedUser = await userRepo.save(newUser);\r\n\r\n      // 2. Write Audit Log entry inside the SAME transaction\r\n      const auditRepo = entityManager.getRepository(AuditLog);\r\n      const auditEntry = auditRepo.create({\r\n        action: 'USER_CREATED',\r\n        targetEntityId: savedUser.id,\r\n        performedBy: adminUserId,\r\n        timestamp: new Date(),\r\n      });\r\n      await auditRepo.save(auditEntry);\r\n\r\n      return savedUser;\r\n    });\r\n  }\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Performing Long-Running Async HTTP Calls Inside Transactions"
        }), "\r\nNever place slow external HTTP API calls or S3 file uploads inside ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "runInTransaction()"
        }), ". Holding database transaction locks open while waiting for external network responses causes database connection pool exhaustion under load."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\r\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Anti-Pattern 2: Using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "synchronize: true"
          }), " in Staging / Production Environments"]
        }), "\r\nEnabling TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "synchronize: true"
        }), " dynamically alters database schemas on application startup, which can inadvertently drop database columns or tables. Always set ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "synchronize: false"
        }), " and use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/database"
        }), " migration scripts."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices--performance-tuning",
      children: "💡 Best Practices & Performance Tuning"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Connection Pool Sizing"
        }), ": Configure database connection pool sizes based on your container concurrency limits:\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Pool Size = (CPU Cores x 2) + Effective Spindle Count"
        })]
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
59597(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/database","title":"@nest-yalc-2/database","description":"@nest-yalc-2/database is the enterprise persistence infrastructure module for NestJS 11+. It provides dynamic multi-database connection management, transactional repository runners, automated database migrations, and entity seeding helpers powered by TypeORM and @node-yalc.","source":"@site/docs/nestjs-yalc/docs/modules/database.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/database","permalink":"/docs/nestjs-yalc/docs/modules/database","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/database.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"database","title":"@nest-yalc-2/database","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/data-loader","permalink":"/docs/nestjs-yalc/docs/modules/data-loader"},"next":{"title":"@nest-yalc-2/logger","permalink":"/docs/nestjs-yalc/docs/modules/logger"}}')

},

};
;