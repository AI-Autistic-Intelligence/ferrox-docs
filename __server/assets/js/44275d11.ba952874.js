"use strict";
exports.ids = ["56"];
exports.modules = {
71458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_architecture_md_442_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_architecture_md_442_json__rspack_import_0 = __webpack_require__(97230);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'architecture',
	title: 'Architecture',
	sidebar_position: 2
};
const contentTitle = 'Architecture';

const assets = {

};



const toc = [{
  "value": "The Bridge Pattern",
  "id": "the-bridge-pattern",
  "level": 2
}, {
  "value": "Module Taxonomy",
  "id": "module-taxonomy",
  "level": 2
}, {
  "value": "1. Infrastructure Layer",
  "id": "1-infrastructure-layer",
  "level": 3
}, {
  "value": "2. Data &amp; Persistence Layer",
  "id": "2-data--persistence-layer",
  "level": 3
}, {
  "value": "3. Communication Layer",
  "id": "3-communication-layer",
  "level": 3
}, {
  "value": "Workspace Organization",
  "id": "workspace-organization",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
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
        id: "architecture",
        children: "Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "NestJS-YALC is structured as a modular monorepo, providing a bridge between raw Node.js utilities and the NestJS dependency injection system."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-bridge-pattern",
      children: "The Bridge Pattern"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["At its core, NestJS-YALC acts as an adapter layer over ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/node-yalc/overview",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc"
        })
      }), ". While ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/node-yalc/overview",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc"
        })
      }), " provides pure TypeScript/Node.js classes and functions (like loggers, error types, and generic event emitters), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2"
      }), " wraps these into NestJS paradigms:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Providers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@Injectable"
          }), ")"]
        }), ": Core utilities are exposed as injectable services."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Modules"
        }), ": Configurations are passed via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".forRoot()"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".forRootAsync()"
        }), " patterns."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Interceptors & Filters"
        }), ": Generic error types from ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/node-yalc/overview",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "@node-yalc"
          })
        }), " are caught and mapped to proper HTTP/GraphQL responses via NestJS Exception Filters."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Your Application\"\n        AppController[AppController]\n        AppService[AppService]\n    end\n    \n    subgraph \"NestJS-YALC (@nest-yalc-2/*)\"\n        YalcLoggerModule[YalcLoggerModule]\n        YalcExceptionFilter[YalcExceptionFilter]\n        CrudGen[CrudGen Decorators]\n    end\n\n    subgraph \"Core Node Utilities (@node-yalc/*)\"\n        PinoWrapper[Pino Logger Wrapper]\n        BaseError[Base HttpError]\n        CoreTypes[Core Interfaces]\n    end\n\n    AppController --> YalcLoggerModule\n    AppService --> CrudGen\n    YalcLoggerModule --> PinoWrapper\n    YalcExceptionFilter --> BaseError\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "module-taxonomy",
      children: "Module Taxonomy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "NestJS-YALC modules can be categorized into three main layers:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-infrastructure-layer",
      children: "1. Infrastructure Layer"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Modules that deal with the underlying system and external boundaries."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/logger"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/observability"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/errors"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/sentinel"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-data--persistence-layer",
      children: "2. Data & Persistence Layer"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Modules that handle data storage, retrieval, and mapping."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/database"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/crud-gen"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/data-loader"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/audit"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-communication-layer",
      children: "3. Communication Layer"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Modules that handle inter-service communication and APIs."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/graphql"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/api-strategy"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/kafka"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/event-manager"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "workspace-organization",
      children: "Workspace Organization"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The repository relies on standard npm/yarn workspaces (or tools like Turborepo/Nx, depending on your setup) to manage the internal dependencies between ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/"
      }), " packages. When building an application, you should depend on the specific packages rather than the entire collection to keep your bundle size minimal."]
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
97230(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/architecture","title":"Architecture","description":"NestJS-YALC is structured as a modular monorepo, providing a bridge between raw Node.js utilities and the NestJS dependency injection system.","source":"@site/docs/nestjs-yalc/architecture.md","sourceDirName":"nestjs-yalc","slug":"/nestjs-yalc/architecture","permalink":"/docs/nestjs-yalc/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/architecture.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"architecture","title":"Architecture","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/nestjs-yalc/overview"},"next":{"title":"Introduction & Ecosystem Architecture","permalink":"/docs/nestjs-yalc/docs/intro"}}')

},

};
;