"use strict";
exports.ids = ["984"];
exports.modules = {
42582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_graphql_md_925_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_graphql_md_925_json__rspack_import_0 = __webpack_require__(79938);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'graphql',
	title: '@nest-yalc-2/graphql',
	sidebar_position: 13
};
const contentTitle = '🔮 GraphQL Federation & Server Module (@nest-yalc-2/graphql)';

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
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/graphql</code> vs Default NestJS GraphQL",
  "id": "-architectural-comparison-nest-yalc-2graphql-vs-default-nestjs-graphql",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Registering GraphQL Module in <code>AppModule</code>",
  "id": "1-registering-graphql-module-in-appmodule",
  "level": 3
}, {
  "value": "2. Defining GraphQL Resolver",
  "id": "2-defining-graphql-resolver",
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
        id: "-graphql-federation--server-module-nest-yalc-2graphql",
        children: ["🔮 GraphQL Federation & Server Module (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/graphql"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/graphql"
      }), " provides dynamic GraphQL server configuration for NestJS 11+, supporting both ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Apollo Server"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Fastify Mercurius"
      }), ", Apollo Federation v2 schema stitching, custom scalar registration, and field-level execution guardrails."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dual Engine Drivers"
        }), ": Easily switch between ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "apollo"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "mercurius"
        }), " (Fastify) drivers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Apollo Federation v2 Support"
        }), ": Seamless sub-graph registration for GraphQL federated gateway architectures."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Schema Generation"
        }), ": Auto-generates GraphQL SDL schema files (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "schema.gql"
        }), ") directly from TypeScript decorators."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Custom Scalars"
        }), ": Out-of-the-box registration for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DateTime"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "JSON"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "UUID"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "JSONObject"
        }), " scalars."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Client[\"GraphQL Client Query\"]\n    Driver[\"YalcGraphQLModule (Apollo / Mercurius Driver)\"]\n    DataLoader[\"YalcDataLoaderInterceptor (N+1 Prevention)\"]\n    Resolver[\"NestJS @Resolver() Handlers\"]\n    TypeDefs[\"Auto-Generated Schema SDL\"]\n\n    Client --> Driver\n    Driver --> TypeDefs\n    Driver --> DataLoader\n    DataLoader --> Resolver\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2graphql-vs-default-nestjs-graphql",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/graphql"
      }), " vs Default NestJS GraphQL"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🔮 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/graphql"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Default NestJS GraphQL Module"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Mercurius Fastify Engine"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Supported with Zero Configuration"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Requires Complex Manual Setup"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "DataLoader Integration"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native Interceptor Integration"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Loader Context Creation"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Apollo Federation v2"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Pre-Configured Subgraph Directives"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Directive Registration"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-registering-graphql-module-in-appmodule",
      children: ["1. Registering GraphQL Module in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcGraphQLModule } from '@nest-yalc-2/graphql';\nimport { join } from 'path';\n\n@Module({\n  imports: [\n    YalcGraphQLModule.forRoot({\n      driver: 'apollo', // 'apollo' or 'mercurius'\n      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),\n      sortSchema: true,\n      playground: process.env.NODE_ENV !== 'production',\n      federation: {\n        version: 2,\n      },\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-defining-graphql-resolver",
      children: "2. Defining GraphQL Resolver"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';\nimport { Product } from './product.entity';\n\n@Resolver(() => Product)\nexport class ProductResolver {\n\n  @Query(() => Product, { name: 'product' })\n  async getProduct(@Args('id', { type: () => ID }) id: string): Promise<Product> {\n    return { id, sku: 'PROD-100', name: 'Enterprise Laptop', price: 1299.99, createdAt: new Date() };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Enabling GraphQL Playground in Production"
        }), ": Never leave ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "playground: true"
        }), " enabled in production environments. It exposes your GraphQL schema introspection to public attackers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Mercurius Driver for Fastify"
        }), ": Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "driver: 'mercurius'"
        }), " when running on Fastify for maximum GraphQL query parsing performance and native subscription support over WebSockets."]
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
79938(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/graphql","title":"@nest-yalc-2/graphql","description":"@nest-yalc-2/graphql provides dynamic GraphQL server configuration for NestJS 11+, supporting both Apollo Server and Fastify Mercurius, Apollo Federation v2 schema stitching, custom scalar registration, and field-level execution guardrails.","source":"@site/docs/nestjs-yalc/docs/modules/graphql.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/graphql","permalink":"/docs/nestjs-yalc/docs/modules/graphql","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/graphql.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"graphql","title":"@nest-yalc-2/graphql","sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"GraphQL Field Middleware & Dynamic Property Transformers","permalink":"/docs/nestjs-yalc/docs/modules/field-middleware"},"next":{"title":"@nest-yalc-2/jest","permalink":"/docs/nestjs-yalc/docs/modules/jest"}}')

},

};
;