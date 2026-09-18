"use strict";
exports.ids = ["7818"];
exports.modules = {
95293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_types_extends_md_dab_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_types_extends_md_dab_json__rspack_import_0 = __webpack_require__(69026);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'types-extends',
	title: 'Extended Type Definitions, Mixins & Meta-Type Extensions',
	sidebar_position: 3
};
const contentTitle = 'Extended Type Definitions, Mixins & Meta-Type Extensions';

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
  "value": "TypeScript Ambient Module Augmentation Mechanics",
  "id": "typescript-ambient-module-augmentation-mechanics",
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
  "value": "5.1 Utilizing Augmented Express / Fastify Request Properties",
  "id": "51-utilizing-augmented-express--fastify-request-properties",
  "level": 3
}, {
  "value": "5.2 Building Dynamic Class Mixins with <code>Constructor&lt;T&gt;</code>",
  "id": "52-building-dynamic-class-mixins-with-constructort",
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
        id: "extended-type-definitions-mixins--meta-type-extensions",
        children: "Extended Type Definitions, Mixins & Meta-Type Extensions"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/types-extends"
      }), " package provides module augmentation, third-party global type extensions (for Express ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Request"
      }), ", Fastify ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FastifyRequest"
      }), ", TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SelectQueryBuilder"
      }), ", and Pino ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Logger"
      }), "), and class mixin helpers for TypeScript applications."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Node.js microservices heavily rely on third-party frameworks (Express, Fastify, TypeORM, Pino, KafkaJS). However, attaching custom context variables—such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "req.user"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "req.correlationId"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "req.tenantId"
      }), ", or custom TypeORM query builder methods—causes TypeScript compilation errors unless global module declarations are augmented properly."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/types-extends"
      }), " centralizes these global module ambient declarations and class mixins. It seamlessly injects YALC metadata into standard framework types across the entire workspace."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        @node-yalc/types-extends                        │\n├────────────────────────────────────────────────────────────────────────┤\n│  • Ambient Module Declarations (Express / Fastify / TypeORM / Pino)    │\n│  • Mixin Type Utilities (Constructor<T>, ClassType<T>)                 │\n│  • Express Request Augmentation (req.correlationId, req.user)          │\n│  • TypeORM SelectQueryBuilder Extension Methods                        │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Global Module Augmentation\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ Express Request      ││ Fastify Request      ││ TypeORM QueryBuilder │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Global Express & Fastify Request Augmentation"
        }), ": Automatically types ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.user"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.correlationId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.tenantId"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.logger"
        }), " across all HTTP handlers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Constructor<T>"
          }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "ClassType<T>"
          })]
        }), ": Standardized mixin generics for dynamic class creation and decorator composition."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TypeORM QueryBuilder Augmentation"
        }), ": Adds custom utility method signatures (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".paginate()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".applyFilters()"
        }), ") to TypeORM's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SelectQueryBuilder"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pino Child Logger Types"
        }), ": Augments Pino's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Logger"
        }), " interface to enforce correlation ID context bindings."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "typescript-ambient-module-augmentation-mechanics",
      children: "TypeScript Ambient Module Augmentation Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant App as Application Code\n    participant TS as TypeScript Compiler\n    participant Ext as @node-yalc/types-extends\n\n    App->>Ext: Import '@node-yalc/types-extends' in tsconfig / index.ts\n    Ext->>TS: Declare global augmentation for 'express-serve-static-core'\n    TS->>TS: Merge YALC Request interface with Express Request\n    App->>App: Access req.correlationId safely without type errors\n"
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
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: ["Fragmented Ambient Files (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "index.d.ts"
            }), ")"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@node-yalc/types-extends Package"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Duplicate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "declare module"
            }), " statements across 20+ packages."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single import augments type definitions globally across monorepo."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Risky ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req['correlationId'] as string"
            }), " unsafe indexing."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Auto-completed ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req.correlationId"
            }), " with strong string typing."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Mixins"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broken class inheritance when extending dynamic classes."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Strongly typed ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Constructor<T>"
            }), " mixin factories."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-utilizing-augmented-express--fastify-request-properties",
      children: "5.1 Utilizing Augmented Express / Fastify Request Properties"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import '@node-yalc/types-extends';\nimport { Request, Response } from 'express';\n\nexport function correlationMiddleware(req: Request, res: Response, next: () => void) {\n  // Property 'correlationId' is automatically typed on Express Request\n  req.correlationId = (req.headers['x-correlation-id'] as string) || 'corr_' + Date.now();\n\n  // Property 'user' is automatically typed with IUserPayload interface\n  req.user = {\n    userId: 'usr_999',\n    tenantId: 'tenant_az',\n    roles: ['ADMIN'],\n  };\n\n  next();\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "52-building-dynamic-class-mixins-with-constructort",
      children: ["5.2 Building Dynamic Class Mixins with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Constructor<T>"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Constructor } from '@node-yalc/types-extends';\n\n// Mixin function that adds timestamp tracking to any base class\nexport function WithTimestamps<TBase extends Constructor>(Base: TBase) {\n  return class extends Base {\n    createdAt: Date = new Date();\n    updatedAt: Date = new Date();\n\n    touch() {\n      this.updatedAt = new Date();\n    }\n  };\n}\n\nclass BaseEntity {\n  id: string = '123';\n}\n\nconst TimestampedEntity = WithTimestamps(BaseEntity);\nconst entity = new TimestampedEntity();\nconsole.log(entity.id); // \"123\"\nconsole.log(entity.createdAt); // Date instance\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Redeclaring Express Module Augmentation Locally"
        }), "\nAvoid adding local ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "declare global { namespace Express { ... } }"
        }), " in individual app repositories. This creates ambient declaration conflicts with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/types-extends"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: tsconfig Include Binding"
        }), "\nInclude ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/types-extends"
        }), " directly in your root ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "tsconfig.json"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "types"
        }), " array to ensure global augmentations apply everywhere without manual imports."]
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
69026(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/types-extends","title":"Extended Type Definitions, Mixins & Meta-Type Extensions","description":"The @node-yalc/types-extends package provides module augmentation, third-party global type extensions (for Express Request, Fastify FastifyRequest, TypeORM SelectQueryBuilder, and Pino Logger), and class mixin helpers for TypeScript applications.","source":"@site/docs/node-yalc/docs/packages/types-extends.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/types-extends","permalink":"/docs/node-yalc/docs/packages/types-extends","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/types-extends.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"types-extends","title":"Extended Type Definitions, Mixins & Meta-Type Extensions","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"@node-yalc/logger","permalink":"/docs/node-yalc/docs/packages/logger"},"next":{"title":"@node-yalc/errors","permalink":"/docs/node-yalc/docs/packages/errors"}}')

},

};
;