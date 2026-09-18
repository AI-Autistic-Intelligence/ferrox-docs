"use strict";
exports.ids = ["415"];
exports.modules = {
24732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_field_middleware_md_f70_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_field_middleware_md_f70_json__rspack_import_0 = __webpack_require__(12471);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'field-middleware',
	title: 'GraphQL Field Middleware & Dynamic Property Transformers',
	sidebar_position: 12
};
const contentTitle = 'GraphQL Field Middleware & Dynamic Property Transformers';

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
  "value": "4. Why It Was Designed This Way",
  "id": "4-why-it-was-designed-this-way",
  "level": 2
}, {
  "value": "5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "5.1 Masking Sensitive PII Fields in GraphQL",
  "id": "51-masking-sensitive-pii-fields-in-graphql",
  "level": 3
}, {
  "value": "5.2 Creating Custom Field Middleware Transformers",
  "id": "52-creating-custom-field-middleware-transformers",
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
    em: "em",
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
        id: "graphql-field-middleware--dynamic-property-transformers",
        children: "GraphQL Field Middleware & Dynamic Property Transformers"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/field-middleware"
      }), " package provides fine-grained property-level access control, dynamic field encryption, value maskers, and runtime formatting transformers for GraphQL schemas and REST DTO entities."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In GraphQL APIs and REST services, security and privacy requirements frequently demand hiding or transforming specific entity fields based on user permissions or compliance mandates (e.g., masking credit card numbers, masking email addresses for non-admins, decrypting PII data on read, or applying localized currency formatting)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/field-middleware"
      }), " injects field middleware hooks into the NestJS execution context. It allows developers to attach declarative decorators (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@FieldMiddleware(...)"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@MaskField()"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@EncryptField()"
      }), ") directly to GraphQL ObjectType fields or class DTO properties without polluting business domain services with inline security checks."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        GraphQL Query / DTO                             │\n├────────────────────────────────────────────────────────────────────────┤\n│  1. Incoming Request Context (User Role: 'GUEST')                      │\n│  2. Resolving Field: 'user.email'                                      │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │\n                                   ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                      YalcFieldMiddleware Engine                        │\n├────────────────────────────────────────────────────────────────────────┤\n│  Evaluate Field Decorators (@MaskField({ type: 'EMAIL' }))             │\n│  User is GUEST -> Transform 'john.doe@example.com'                     │\n│               -> Result: 'j***e@example.com'                           │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │\n                                   ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                   Masked GraphQL / JSON Output                         │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Declarative Field Protection"
        }), ": Attach middleware rules to fields using NestJS decorators."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Role-Based Property Masking"
        }), ": Dynamically mask Sensitive Data (PII, SSN, Credit Cards) depending on the requestor's JWT roles/permissions."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Property-Level Encryption"
        }), ": Transparently decrypt AES-256 encrypted database columns during GraphQL object resolution."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Computed Value Formatting"
        }), ": Apply localized date, currency, or string case transformations dynamically on read operations."]
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
        children: "sequenceDiagram\n    autonumber\n    participant Client as GraphQL Client\n    participant Resolver as Field Resolver\n    participant Middleware as FieldMiddleware Pipeline\n    participant Security as Auth Context Guard\n    participant Output as Transformed Value\n\n    Client->>Resolver: Query User { id, email, ssn }\n    Resolver->>Middleware: Resolve 'ssn' Field Value\n    Middleware->>Security: Inspect Request Context (User Roles)\n    alt User Has 'ADMIN' Role\n        Security-->>Middleware: Authorized\n        Middleware-->>Output: Return Unmasked SSN (\"123-45-6789\")\n    else User Has 'USER' / 'GUEST' Role\n        Security-->>Middleware: Unauthorized for Raw Value\n        Middleware->>Middleware: Apply SSN Mask (\"***-**-6789\")\n        Middleware-->>Output: Return Masked Value\n    end\n    Output-->>Client: Deliver GraphQL JSON Payload\n"
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
            children: "Standard Manual Field Checks"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@nestjs-yalc/field-middleware"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Separation of Concerns"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Controllers/Services littered with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "if (role === 'GUEST') mask()"
            }), " logic."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Zero business service clutter; declarative ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@Field()"
            }), " decorators."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "GraphQL Parity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Requires writing custom GraphQL field directives by hand."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Native NestJS field middleware integration with standard context."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Risk of forgetting field masks in newly created API routes."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Centralized middleware pipeline guarantees compliance rules."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-masking-sensitive-pii-fields-in-graphql",
      children: "5.1 Masking Sensitive PII Fields in GraphQL"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Field, ObjectType } from '@nestjs/graphql';\nimport { MaskField, FieldMiddleware } from '@nestjs-yalc/field-middleware';\n\n@ObjectType()\nexport class UserProfileType {\n  @Field()\n  id: string;\n\n  @Field()\n  @MaskField({ type: 'EMAIL', allowedRoles: ['ADMIN', 'SUPERUSER'] })\n  email: string;\n\n  @Field()\n  @MaskField({ type: 'SSN', allowedRoles: ['COMPLIANCE_OFFICER'] })\n  ssn: string;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-creating-custom-field-middleware-transformers",
      children: "5.2 Creating Custom Field Middleware Transformers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs-yalc/field-middleware';\n\nexport const CurrencyFormatterMiddleware: FieldMiddleware = async (\n  ctx: MiddlewareContext,\n  next: NextFn,\n) => {\n  const value = await next();\n  if (typeof value !== 'number') return value;\n\n  const userLocale = ctx.context.req?.headers['accept-language'] || 'en-US';\n  return new Intl.NumberFormat(userLocale, { style: 'currency', currency: 'USD' }).format(value);\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Performing Heavy Async I/O in Field Middleware"
        }), "\nField middleware runs for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
          children: "every resolved property instance"
        }), " in a GraphQL query array. Executing database queries inside field middleware causes N+1 performance bottlenecks. Use DataLoaders for async field enrichment."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Combining with NestJS Guards"
        }), "\nUse Field Middleware for property-level transformation while keeping NestJS Guards responsible for overall endpoint routing access."]
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
12471(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/field-middleware","title":"GraphQL Field Middleware & Dynamic Property Transformers","description":"The @nestjs-yalc/field-middleware package provides fine-grained property-level access control, dynamic field encryption, value maskers, and runtime formatting transformers for GraphQL schemas and REST DTO entities.","source":"@site/docs/nestjs-yalc/docs/modules/field-middleware.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/field-middleware","permalink":"/docs/nestjs-yalc/docs/modules/field-middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/field-middleware.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"field-middleware","title":"GraphQL Field Middleware & Dynamic Property Transformers","sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"In-Memory & Distributed Event Manager","permalink":"/docs/nestjs-yalc/docs/modules/event-manager"},"next":{"title":"@nest-yalc-2/graphql","permalink":"/docs/nestjs-yalc/docs/modules/graphql"}}')

},

};
;