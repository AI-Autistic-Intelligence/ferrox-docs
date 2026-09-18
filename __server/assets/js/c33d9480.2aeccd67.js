"use strict";
exports.ids = ["4368"];
exports.modules = {
79648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_guards_md_c33_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_guards_md_c33_json__rspack_import_0 = __webpack_require__(74049);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'guards',
	title: 'Security Guards, RBAC & Role Permission Engine',
	sidebar_position: 6
};
const contentTitle = 'Security Guards, RBAC & Role Permission Engine';

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
  "value": "Guard Execution &amp; Permission Check Mechanics",
  "id": "guard-execution--permission-check-mechanics",
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
  "value": "5.1 Protecting Endpoints with <code>@Roles()</code> and <code>@Permissions()</code>",
  "id": "51-protecting-endpoints-with-roles-and-permissions",
  "level": 3
}, {
  "value": "5.2 Custom Attribute-Based Access Control (ABAC) Guard",
  "id": "52-custom-attribute-based-access-control-abac-guard",
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
        id: "security-guards-rbac--role-permission-engine",
        children: "Security Guards, RBAC & Role Permission Engine"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " guards module provides role-based access control (RBAC), attribute-based access control (ABAC), tenant isolation enforcement, and permission verification middleware for Node.js microservices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Securing API routes against unauthorized access is a core requirement for enterprise software. Hardcoding permission checks (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "if (user.role !== 'ADMIN')"
      }), ") inside domain controllers creates code duplication, maintenance friction, and security vulnerabilities when developers forget to include auth checks on new endpoints."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "guards"
      }), " module introduces declarative access control decorators (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@UseGuards()"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Roles()"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Permissions()"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@TenantIsolated()"
      }), "). It intercepts incoming requests, parses JWT user tokens, and evaluates role/permission matrix rules before reaching controller execution handlers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                         Ferrox Guard Engine                            │\n├────────────────────────────────────────────────────────────────────────┤\n│  1. Extract JWT Payload & User Context from IFerroxContext             │\n│  2. Evaluate Route Metadata (@Roles('ADMIN'), @Permissions('user:write')│\n│  3. Verify Multi-Tenant Context Matches Request Tenant ID              │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Access Evaluation\n            ┌──────────────────────┴──────────────────────┐\n            ▼                                             ▼\n┌─────────────────────────────────┐             ┌────────────────────────┐\n│ Granted: Proceed to Controller  │             │ Denied: Return 403     │\n│ Execution Pipeline              │             │ Forbidden Response     │\n└─────────────────────────────────┘             └────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Declarative Guard Decorators"
        }), ": Provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@UseGuards()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Roles()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Permissions()"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@TenantIsolated()"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "RBAC & ABAC Evaluation Engine"
        }), ": Checks user roles and dynamic attribute conditions (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user.department === resource.department"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Multi-Tenant Authorization Guard"
        }), ": Ensures users from Tenant A cannot access or mutate resources belonging to Tenant B."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Hierarchical Role Inheritance"
        }), ": Supports role hierarchies (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SUPERADMIN"
        }), " automatically inherits ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ADMIN"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "USER"
        }), " permissions)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "guard-execution--permission-check-mechanics",
      children: "Guard Execution & Permission Check Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as API Client\n    participant Router as Transport Router\n    participant Guard as RolesGuard\n    participant Context as IFerroxContext\n    participant Controller as Endpoint Handler\n\n    Client->>Router: HTTP POST /api/admin/users (Bearer Token)\n    Router->>Guard: Execute canActivate(context)\n    Guard->>Context: Extract User Roles from context.user (e.g., ['USER'])\n    Guard->>Guard: Fetch Route Metadata (@Roles('ADMIN'))\n    Guard->>Guard: Evaluate ['USER'] includes 'ADMIN'? -> FALSE\n    alt Access Denied\n        Guard-->>Router: Throw ForbiddenException(403)\n        Router-->>Client: 403 Forbidden Payload { success: false, message: \"Insufficient Role\" }\n    else Access Granted\n        Guard-->>Router: Return true\n        Router->>Controller: Execute Controller Method\n        Controller-->>Client: 200 OK Response\n    end\n"
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
            children: "Inline Controller Auth Checks"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Guard Engine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Maintainability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Duplicate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "if (user.role)"
            }), " logic across 100+ controller files."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Single line ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@Roles('ADMIN')"
            }), " decorator per route."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Auditability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Difficult to verify which routes are secured."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Clean annotation metadata allows automated security route auditing."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Multi-Tenancy"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Risky manual tenant ID matching inside queries."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Automated ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@TenantIsolated()"
            }), " guard verifies tenant isolation."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "51-protecting-endpoints-with-roles-and-permissions",
      children: ["5.1 Protecting Endpoints with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Roles()"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Permissions()"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Controller, Post, Get, Body, UseGuards, Roles, Permissions } from '@ferrox/node';\nimport { AuthGuard, RolesGuard } from '@ferrox/node/guards';\n\n@Controller('/api/v1/billing')\n@UseGuards(AuthGuard, RolesGuard)\nexport class BillingController {\n  @Get('/invoices')\n  @Roles('ADMIN', 'FINANCE')\n  async listInvoices() {\n    return { invoices: [] };\n  }\n\n  @Post('/refund')\n  @Permissions('billing:refund:write')\n  async processRefund(@Body() refundData: any) {\n    return { success: true, refundId: 'ref_100' };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-custom-attribute-based-access-control-abac-guard",
      children: "5.2 Custom Attribute-Based Access Control (ABAC) Guard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { CanActivate, IFerroxContext } from '@ferrox/node';\n\nexport class DepartmentAccessGuard implements CanActivate {\n  async canActivate(context: IFerroxContext): Promise<boolean> {\n    const user = context.user;\n    const requestedDepartment = context.params.department;\n\n    if (!user) return false;\n\n    // Superadmins bypass department checks\n    if (user.roles.includes('SUPERADMIN')) return true;\n\n    // Users can only access data belonging to their own department\n    return user.department === requestedDepartment;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Silently Catching Guard Exceptions"
        }), "\nDo not wrap controller methods in try/catch blocks that suppress ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ForbiddenException"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "UnauthorizedException"
        }), " thrown by guards. Let guards handle standard 401/403 HTTP response generation."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Global Guard Binding"
        }), "\nRegister ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AuthGuard"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "RolesGuard"
        }), " globally in your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "YalcApplicationFactory"
        }), " configuration to ensure every controller endpoint is secure by default unless explicitly annotated with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Public()"
        }), "."]
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
74049(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/guards","title":"Security Guards, RBAC & Role Permission Engine","description":"The @ferrox/node guards module provides role-based access control (RBAC), attribute-based access control (ABAC), tenant isolation enforcement, and permission verification middleware for Node.js microservices.","source":"@site/docs/ferrox-node/docs/components/guards.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/guards","permalink":"/docs/ferrox-node/docs/components/guards","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/guards.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"guards","title":"Security Guards, RBAC & Role Permission Engine","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Data Grid Query Engine & Relational Transformers","permalink":"/docs/ferrox-node/docs/components/datagrid"},"next":{"title":"Core Framework Interfaces & DTO Signatures","permalink":"/docs/ferrox-node/docs/components/interfaces"}}')

},

};
;