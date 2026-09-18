"use strict";
exports.ids = ["900"];
exports.modules = {
76650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_overview_md_4a7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_overview_md_4a7_json__rspack_import_0 = __webpack_require__(57088);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'overview',
	title: 'Overview',
	sidebar_position: 1
};
const contentTitle = 'NestJS-YALC Overview';

const assets = {

};



const toc = [{
  "value": "Philosophy",
  "id": "philosophy",
  "level": 2
}, {
  "value": "Key Features",
  "id": "key-features",
  "level": 2
}, {
  "value": "Getting Started",
  "id": "getting-started",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "nestjs-yalc-overview",
        children: "NestJS-YALC Overview"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "NestJS-YALC"
      }), " (Yet Another Library Collection) is an enterprise-grade library suite designed specifically for NestJS 11+ and TypeScript 6+. It extends the core NestJS framework with a collection of pre-built, production-ready modules that address the most common and complex challenges in enterprise backend development."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "philosophy",
      children: "Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "While NestJS provides an excellent architectural foundation, enterprise applications often require significant boilerplate to integrate advanced logging, tracing, auto-generated CRUD APIs, and Kafka messaging. NestJS-YALC bridges this gap by providing an opinionated, modular infrastructure."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The core tenets of NestJS-YALC are:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Modularity First"
        }), ": Every feature is encapsulated in a dedicated NestJS Module. You only import what you need."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Enterprise Ready"
        }), ": Built-in support for OpenTelemetry, Pino-based correlated logging, and Confluent Schema Registry."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Developer Productivity"
        }), ": Drastically reduces boilerplate through automated TypeORM CRUD generation (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "crud-gen"
        }), ") and GraphQL DataLoader batching."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Git Submodule Core"
        }), ": Leverages ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/node-yalc/overview",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@node-yalc"
          })
        }), " as a pure Git submodule for base core utilities, wrapping them into native NestJS ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Injectable()"
        }), " providers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "key-features",
      children: "Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🛠️ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Automated CRUD (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/crud-gen"
          }), ")"]
        }), ": Automatically generate TypeORM REST endpoints and GraphQL resolvers with advanced dynamic filtering."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["📦 ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["GraphQL DataLoader (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/data-loader"
          }), ")"]
        }), ": Solve the N+1 query problem out-of-the-box with automated field batching."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["📊 ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Observability (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/observability"
          }), ")"]
        }), ": Seamless OpenTelemetry tracing, Prometheus metrics exporter, and Sentry exception reporting."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🗄️ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Database Enhancements (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/database"
          }), ")"]
        }), ": TypeORM database connection factories, transactional repository runners, and sophisticated seeding helpers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["📬 ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Event Driven (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/kafka"
          }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/event-manager"
          }), ")"]
        }), ": KafkaJS client integration with schema registry, and distributed event bus modules with typed payloads."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🔐 ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Security Sentinel (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@nest-yalc-2/sentinel"
          }), ")"]
        }), ": Security middleware enforcing HTTP headers, CORS policies, and payload sanitization."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To begin using NestJS-YALC in your application, you typically start by importing the core lifecycle and logger modules into your root ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcAppModule } from '@nest-yalc-2/app';\nimport { YalcLoggerModule } from '@nest-yalc-2/logger';\n\n@Module({\n  imports: [\n    YalcAppModule.forRoot(),\n    YalcLoggerModule.forRoot({\n      pinoOptions: { level: 'info' }\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Explore the specific modules in the sidebar to understand how to leverage the full power of the YALC ecosystem."
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
57088(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/overview","title":"Overview","description":"NestJS-YALC (Yet Another Library Collection) is an enterprise-grade library suite designed specifically for NestJS 11+ and TypeScript 6+. It extends the core NestJS framework with a collection of pre-built, production-ready modules that address the most common and complex challenges in enterprise backend development.","source":"@site/docs/nestjs-yalc/overview.md","sourceDirName":"nestjs-yalc","slug":"/nestjs-yalc/overview","permalink":"/docs/nestjs-yalc/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"overview","title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"OpenTelemetry Distributed Tracing & Correlation Identifiers","permalink":"/docs/ferrox-node/docs/components/tracing"},"next":{"title":"Architecture","permalink":"/docs/nestjs-yalc/architecture"}}')

},

};
;