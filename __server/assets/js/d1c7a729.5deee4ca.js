"use strict";
exports.ids = ["5520"];
exports.modules = {
51216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_errors_md_d1c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_errors_md_d1c_json__rspack_import_0 = __webpack_require__(14610);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'errors',
	title: '@nest-yalc-2/errors',
	sidebar_position: 10
};
const contentTitle = '⚠️ Exception Filters & Error Mapping (@nest-yalc-2/errors)';

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
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/errors</code> vs Standard NestJS Filters",
  "id": "-architectural-comparison-nest-yalc-2errors-vs-standard-nestjs-filters",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Registering Global Exception Filter in <code>AppModule</code>",
  "id": "1-registering-global-exception-filter-in-appmodule",
  "level": 3
}, {
  "value": "2. Throwing Typed Errors in Business Services",
  "id": "2-throwing-typed-errors-in-business-services",
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
        id: "️-exception-filters--error-mapping-nest-yalc-2errors",
        children: ["⚠️ Exception Filters & Error Mapping (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/errors"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/errors"
      }), " provides standardized NestJS 11+ Exception Filters mapping ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/errors"
      }), " to RFC 7807 Problem Details HTTP and GraphQL error responses."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Global Exception Filter (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "YalcExceptionFilter"
          }), ")"]
        }), ": Intercepts ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/errors"
        }), " and standard NestJS exceptions globally."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "RFC 7807 Problem Details Compliance"
        }), ": Formats HTTP error responses into standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "application/problem+json"
        }), " structure."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Production Stack Trace Masking"
        }), ": Masks internal stack trace details in production while preserving correlation IDs."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "GraphQL Error Extension Mapping"
        }), ": Formats Apollo and Mercurius GraphQL error extensions."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Exception[\"AppError / DomainError Thrown\"]\n    GlobalFilter[\"YalcExceptionFilter Execution\"]\n    EnvCheck{\"Environment Check (Production?)\"}\n    MaskedError[\"Sanitize Stack Trace & Internal DB Details\"]\n    FullError[\"Include Full Stack Trace (Development Only)\"]\n    RFCResponse[\"Emit RFC 7807 Problem Details JSON\"]\n\n    Exception --> GlobalFilter\n    GlobalFilter --> EnvCheck\n    EnvCheck -->|Production| MaskedError\n    EnvCheck -->|Development| FullError\n    MaskedError --> RFCResponse\n    FullError --> RFCResponse\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2errors-vs-standard-nestjs-filters",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/errors"
      }), " vs Standard NestJS Filters"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["⚠️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/errors"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Default NestJS Exception Filter"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Response Format"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "RFC 7807 Problem Details Compliant"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Basic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "{ statusCode, message, error }"
            })]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Stack Trace Protection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automated Production Masking"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Exposes Stack Traces if unhandled"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Trace ID Injection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Automatically attaches ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "X-Request-Id"
              })]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Formatting Required"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-registering-global-exception-filter-in-appmodule",
      children: ["1. Registering Global Exception Filter in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { APP_FILTER } from '@nestjs/core';\nimport { YalcExceptionFilter } from '@nest-yalc-2/errors';\n\n@Module({\n  providers: [\n    {\n      provide: APP_FILTER,\n      useClass: YalcExceptionFilter,\n    },\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-throwing-typed-errors-in-business-services",
      children: "2. Throwing Typed Errors in Business Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { NotFoundError, ValidationError } from '@node-yalc/errors';\n\n@Injectable()\nexport class AccountService {\n\n  async findAccount(accountId: string) {\n    if (!accountId) {\n      throw new ValidationError('Account ID is required');\n    }\n\n    const account = null;\n    if (!account) {\n      throw new NotFoundError(`Account ${accountId} not found`, { accountId });\n    }\n\n    return account;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Catching Errors and Returning HTTP 200 OK"
        }), ": Returning ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "200 OK"
        }), " with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{ success: false, error: '...' }"
        }), " inside response bodies breaks REST semantics, caches error responses in CDNs, and confuses API clients. Always throw typed exceptions mapped by ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "YalcExceptionFilter"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Client Request Correlation"
        }), ": Include the returned ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "instance"
        }), " trace ID when logging client-side errors to allow support engineers to locate the exact backend log line instantly."]
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
14610(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/errors","title":"@nest-yalc-2/errors","description":"@nest-yalc-2/errors provides standardized NestJS 11+ Exception Filters mapping @node-yalc/errors to RFC 7807 Problem Details HTTP and GraphQL error responses.","source":"@site/docs/nestjs-yalc/docs/modules/errors.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/errors","permalink":"/docs/nestjs-yalc/docs/modules/errors","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/errors.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"errors","title":"@nest-yalc-2/errors","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"API Strategy, Multi-Protocol Adapters & Contract Versioning","permalink":"/docs/nestjs-yalc/docs/modules/api-strategy"},"next":{"title":"In-Memory & Distributed Event Manager","permalink":"/docs/nestjs-yalc/docs/modules/event-manager"}}')

},

};
;