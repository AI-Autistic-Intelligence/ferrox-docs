"use strict";
exports.ids = ["5689"];
exports.modules = {
25512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_audit_md_198_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_audit_md_198_json__rspack_import_0 = __webpack_require__(40232);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'audit',
	title: '@nest-yalc-2/audit',
	sidebar_position: 8
};
const contentTitle = '📋 Compliance Entity Auditing (@nest-yalc-2/audit)';

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
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/audit</code> vs Manual Entity Listeners",
  "id": "-architectural-comparison-nest-yalc-2audit-vs-manual-entity-listeners",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Registering Audit Module in <code>AppModule</code>",
  "id": "1-registering-audit-module-in-appmodule",
  "level": 3
}, {
  "value": "2. Querying Audit History for an Entity",
  "id": "2-querying-audit-history-for-an-entity",
  "level": 3
}, {
  "value": "⚠️ Common Pitfalls &amp; Anti-Patterns",
  "id": "️-common-pitfalls--anti-patterns",
  "level": 2
}, {
  "value": "💡 Best Practices",
  "id": "-best-practices",
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
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h1, {
        id: "-compliance-entity-auditing-nest-yalc-2audit",
        children: ["📋 Compliance Entity Auditing (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/audit"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/audit"
      }), " provides enterprise compliance entity auditing and revision tracking for NestJS 11+. It automatically intercepts TypeORM entity mutation operations (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "INSERT"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "UPDATE"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DELETE"
      }), "), capturing before/after field diffs and correlating mutations with the active authenticated user ID."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Entity Lifecycle Subscribers"
        }), ": Automatically intercepts TypeORM entity updates without requiring manual trigger code."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "User Identity Correlation"
        }), ": Retrieves the active user ID from request context (AsyncLocalStorage) and attaches it to the revision log."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Before / After JSON Diffs"
        }), ": Computes and stores granular field-level changes (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "previousValue"
        }), " vs ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "newValue"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Compliance Ready (SOC 2 / GDPR / HIPAA)"
        }), ": Produces append-only immutable audit trail tables suitable for regulatory audits."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Mutation[\"TypeORM entity.save(user)\"]\n    Subscriber[\"YalcAuditSubscriber (TypeORM EventSubscriber)\"]\n    DiffEngine[\"JSON Diff Compute Engine\"]\n    Context[\"AsyncLocalStorage User Context\"]\n    AuditRecord[\"Write Immutable AuditLog Entity\"]\n\n    Mutation --> Subscriber\n    Subscriber --> Context\n    Subscriber --> DiffEngine\n    Context & DiffEngine --> AuditRecord\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2audit-vs-manual-entity-listeners",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/audit"
      }), " vs Manual Entity Listeners"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["📋 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/audit"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Manual TypeORM Listeners"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "User Identity Binding"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Automatic (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "AsyncLocalStorage"
              }), " User Context)"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Requires passing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "user"
            }), " parameter to Service"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Field-Level Diff Generation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automated JSON Field Diffs"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Property-by-Property Comparison"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Audit Table Immutability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Append-Only Immutable Schema"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Table Creation"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-registering-audit-module-in-appmodule",
      children: ["1. Registering Audit Module in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcAuditModule } from '@nest-yalc-2/audit';\n\n@Module({\n  imports: [\n    YalcAuditModule.forRoot({\n      enabledEntities: ['User', 'Order', 'Product'],\n      auditTableName: 'system_audit_logs',\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-querying-audit-history-for-an-entity",
      children: "2. Querying Audit History for an Entity"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { YalcAuditService } from '@nest-yalc-2/audit';\n\n@Injectable()\nexport class UserAuditController {\n  constructor(private readonly auditService: YalcAuditService) {}\n\n  async getUserRevisionHistory(userId: string) {\n    // Returns full audit trail of changes for the specified User entity ID\n    return await this.auditService.findLogsForEntity('User', userId);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Modifying Audit Log Records"
        }), ": Audit log tables must remain strictly append-only. Never expose ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "UPDATE"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DELETE"
        }), " endpoints for audit records."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Archiving Historical Audits"
        }), ": Move audit logs older than 90 days to Amazon S3 Glacier or cold storage using automated database partitioning to keep primary database tables lean."]
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
40232(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/audit","title":"@nest-yalc-2/audit","description":"@nest-yalc-2/audit provides enterprise compliance entity auditing and revision tracking for NestJS 11+. It automatically intercepts TypeORM entity mutation operations (INSERT, UPDATE, DELETE), capturing before/after field diffs and correlating mutations with the active authenticated user ID.","source":"@site/docs/nestjs-yalc/docs/modules/audit.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/audit","permalink":"/docs/nestjs-yalc/docs/modules/audit","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/audit.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"audit","title":"@nest-yalc-2/audit","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/kafka","permalink":"/docs/nestjs-yalc/docs/modules/kafka"},"next":{"title":"API Strategy, Multi-Protocol Adapters & Contract Versioning","permalink":"/docs/nestjs-yalc/docs/modules/api-strategy"}}')

},

};
;