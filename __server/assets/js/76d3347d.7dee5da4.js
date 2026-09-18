"use strict";
exports.ids = ["1032"];
exports.modules = {
29785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_errors_md_76d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_errors_md_76d_json__rspack_import_0 = __webpack_require__(70462);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'errors',
	title: '@node-yalc/errors',
	sidebar_position: 4
};
const contentTitle = '⚠️ Safe Application Error Hierarchy (@node-yalc/errors)';

const assets = {

};



const toc = [{
  "value": "💡 1. What It Is &amp; Architectural Purpose",
  "id": "-1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "⚙️ 2. What It Does &amp; Key Features",
  "id": "️-2-what-it-does--key-features",
  "level": 2
}, {
  "value": "🔬 3. How It Works Under the Hood",
  "id": "-3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "🧠 4. Why It Was Designed This Way (Standardized Hierarchy)",
  "id": "-4-why-it-was-designed-this-way-standardized-hierarchy",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "⚠️ 6. Anti-Patterns: How NOT to Use It",
  "id": "️-6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "💡 7. Pro-Tips &amp; Best Practices",
  "id": "-7-pro-tips--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
        id: "️-safe-application-error-hierarchy-node-yalcerrors",
        children: ["⚠️ Safe Application Error Hierarchy (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/errors"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/errors"
      }), " defines the strongly-typed exception hierarchy used across the ecosystem. It was designed to ensure that domain and system exceptions are caught, serialized, and returned to clients ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "without exposing stack traces or internal database details in production environments"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Base ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "AppError"
          })]
        }), ": Base extensible exception class for all application errors with HTTP status codes and detailed payloads."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Domain Specific Exceptions"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "NotFoundError"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ValidationError"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "UnauthorizedError"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ForbiddenError"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ConflictError"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "BadGatewayError"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Stack Trace Leak Prevention"
        }), ": Automatically masks inner error details when running in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "production"
        }), " mode."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Normalized JSON Serialization"
        }), ": Provides standardized ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".toJSON()"
        }), " representations for HTTP/GraphQL responses."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Error[\"Error (Native Node.js)\"]\n    AppError[\"AppError (Base Class)\"]\n    DomainError[\"DomainError\"]\n    ValidationError[\"ValidationError (HTTP 400)\"]\n    NotFoundError[\"NotFoundError (HTTP 404)\"]\n\n    Error --> AppError\n    AppError --> DomainError\n    DomainError --> ValidationError\n    DomainError --> NotFoundError\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Status Code Binding"
        }), ": Each exception defines a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "statusCode"
        }), " property (e.g., 404 for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "NotFoundError"
        }), ", 400 for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ValidationError"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Context Payload Attachment"
        }), ": Attach strongly-typed metadata payloads for tracing (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{ entity: 'User', id: 'usr-123' }"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-standardized-hierarchy",
      children: "🧠 4. Why It Was Designed This Way (Standardized Hierarchy)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Aspect"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["⚠️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@node-yalc/errors"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["❌ Plain ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "throw new Error()"
            })]
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Exception Type"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Strongly-Typed with Metadata Payload"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Untyped String"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "HTTP Status Code"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Mapped Automatically"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Requires manual ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "if/else"
            }), " in Middleware"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Production Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Stack Trace Masked in Production"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Risk of SQL Query or Path Leaks"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { NotFoundError, ValidationError } from '@node-yalc/errors';\n\nexport function getUserProfile(userId: string) {\n  if (!userId) {\n    throw new ValidationError('The userId parameter is required', [\n      { field: 'userId', issue: 'Missing required string parameter' }\n    ]);\n  }\n\n  const user = null; // Simulation\n  if (!user) {\n    throw new NotFoundError(`Unable to find user with ID ${userId}`, {\n      entity: 'User',\n      requestedId: userId\n    });\n  }\n\n  return user;\n}\n\ntry {\n  getUserProfile('');\n} catch (err: any) {\n  if (err instanceof ValidationError) {\n    console.log('Validation Error HTTP Code:', err.statusCode); // 400\n    console.log('Details:', err.errors);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["DO NOT swallow errors in empty ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "try/catch"
          }), " blocks"]
        }), ": Catching exceptions without rethrowing or logging prevents security filters and telemetry from tracking failures."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT return raw database error messages to users"
        }), ": Rethrowing raw MySQL/Postgres driver errors (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ER_DUP_ENTRY"
        }), ") exposes schema internals to attackers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Exception Filters Integration"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/errors"
        }), " integrates natively with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "nestjs-yalc"
        }), " and Ferrox-Node Exception Filters, converting exceptions directly into RFC 7807 compliant Problem Details JSON responses."]
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
70462(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/errors","title":"@node-yalc/errors","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/node-yalc/docs/packages/errors.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/errors","permalink":"/docs/node-yalc/docs/packages/errors","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/errors.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"errors","title":"@node-yalc/errors","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Extended Type Definitions, Mixins & Meta-Type Extensions","permalink":"/docs/node-yalc/docs/packages/types-extends"},"next":{"title":"@node-yalc/utils","permalink":"/docs/node-yalc/docs/packages/utils"}}')

},

};
;