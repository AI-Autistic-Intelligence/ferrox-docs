"use strict";
exports.ids = ["8876"];
exports.modules = {
94867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_overview_md_5f3_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_overview_md_5f3_json__rspack_import_0 = __webpack_require__(94039);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'overview',
	title: 'Overview',
	sidebar_position: 1
};
const contentTitle = 'Node-YALC Overview';

const assets = {

};



const toc = [{
  "value": "Philosophy",
  "id": "philosophy",
  "level": 2
}, {
  "value": "Key Modules",
  "id": "key-modules",
  "level": 2
}, {
  "value": "Integration with NestJS-YALC",
  "id": "integration-with-nestjs-yalc",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "node-yalc-overview",
        children: "Node-YALC Overview"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Node-YALC"
      }), " is the pure Node.js/TypeScript foundation of the YALC ecosystem. Unlike ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/nestjs-yalc/overview",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "nestjs-yalc"
        })
      }), ", which is tightly coupled to the NestJS dependency injection and module system, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "node-yalc"
      }), " provides framework-agnostic utilities, types, and base classes that can be used in any Node.js environment."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "philosophy",
      children: "Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The primary goal of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "node-yalc"
      }), " is to centralize core business logic, standard error definitions, and fundamental utilities so they can be shared across microservices, CLI tools, and background workers, regardless of the web framework being used."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is designed to be:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zero-Dependency (mostly)"
        }), ": Keeps external dependencies to an absolute minimum to prevent dependency hell."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Framework Agnostic"
        }), ": Usable in Express, Fastify, NestJS, or raw Node scripts."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Highly Typed"
        }), ": Exposes rigorous TypeScript interfaces and types for the rest of the ecosystem."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "key-modules",
      children: "Key Modules"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Errors"
        }), ": A standardized hierarchy of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "HttpError"
        }), " classes (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "BadRequestError"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "UnauthorizedError"
        }), ") that carry metadata and can be safely serialized across service boundaries."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Logger"
        }), ": A pure Pino wrapper that handles the formatting and configuration of JSON logs without relying on NestJS context."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Event Manager"
        }), ": Generic EventEmitter wrappers and interfaces used to define strong contracts for event-driven architectures."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Types"
        }), ": Shared TypeScript interfaces used across both ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox-node/overview",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "ferrox-node"
          })
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/nestjs-yalc/overview",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "nestjs-yalc"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "integration-with-nestjs-yalc",
      children: "Integration with NestJS-YALC"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In a typical enterprise setup, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "node-yalc"
      }), " is included as a Git Submodule within the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/nestjs-yalc/overview",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "nestjs-yalc"
        })
      }), " repository. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/nestjs-yalc/overview",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "nestjs-yalc"
        })
      }), " then provides the \"glue\" (Interceptors, Providers, Dynamic Modules) to inject these pure Node.js constructs into the NestJS lifecycle."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example, a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "BadRequestError"
      }), " thrown from a pure domain function (using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "node-yalc"
      }), ") is automatically caught by the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcExceptionFilter"
      }), " (in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/nestjs-yalc/overview",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "nestjs-yalc"
        })
      }), ") and transformed into a standardized HTTP 400 response."]
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
94039(module) {
module.exports = JSON.parse('{"id":"node-yalc/overview","title":"Overview","description":"Node-YALC is the pure Node.js/TypeScript foundation of the YALC ecosystem. Unlike nestjs-yalc, which is tightly coupled to the NestJS dependency injection and module system, node-yalc provides framework-agnostic utilities, types, and base classes that can be used in any Node.js environment.","source":"@site/docs/node-yalc/overview.md","sourceDirName":"node-yalc","slug":"/node-yalc/overview","permalink":"/docs/node-yalc/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"overview","title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"CRUD Generator","permalink":"/docs/nestjs-yalc/modules/crud-gen"},"next":{"title":"Introduction & Node-Yalc Workspace Architecture","permalink":"/docs/node-yalc/docs/intro"}}')

},

};
;