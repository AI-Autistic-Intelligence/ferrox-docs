"use strict";
exports.ids = ["6512"];
exports.modules = {
15856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_modules_crud_gen_md_ea8_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_modules_crud_gen_md_ea8_json__rspack_import_0 = __webpack_require__(35066);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'crud-gen',
	title: 'CRUD Generator',
	sidebar_position: 2
};
const contentTitle = 'CRUD Generator';

const assets = {

};



const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Features",
  "id": "features",
  "level": 2
}, {
  "value": "Basic Usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "What happens under the hood?",
  "id": "what-happens-under-the-hood",
  "level": 3
}, {
  "value": "Advanced Configuration",
  "id": "advanced-configuration",
  "level": 2
}, {
  "value": "Filtering and Pagination",
  "id": "filtering-and-pagination",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "crud-generator",
        children: "CRUD Generator"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/crud-gen"
      }), " module is a powerful code generator that automates the creation of REST controllers and GraphQL resolvers based directly on your TypeORM entities."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @nest-yalc-2/crud-gen\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zero Boilerplate"
        }), ": Define an entity, get a fully functioning API."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "REST & GraphQL"
        }), ": Generates both RESTful endpoints and GraphQL queries/mutations simultaneously."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Filtering"
        }), ": Built-in support for complex filtering, sorting, and pagination (Cursor & Offset based)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Security"
        }), ": Easily integrate with guards to restrict access to specific CRUD operations."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The core of the CRUD generator relies on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@CrudGenEntity"
      }), " decorator."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { CrudGenEntity } from '@nest-yalc-2/crud-gen';\n\n@Entity('products')\n@CrudGenEntity({\n  routes: ['getMany', 'getOne', 'createOne', 'updateOne', 'deleteOne'],\n})\nexport class Product {\n  @PrimaryGeneratedColumn('uuid')\n  id: string;\n\n  @Column()\n  name: string;\n\n  @Column('decimal')\n  price: number;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "what-happens-under-the-hood",
      children: "What happens under the hood?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When the application boots, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "crud-gen"
      }), " inspects entities decorated with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@CrudGenEntity"
      }), ". It then dynamically constructs a NestJS Controller and/or GraphQL Resolver."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By default, for the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Product"
      }), " entity above, it generates:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "GET /products"
        }), " (with query parameters for filtering)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "GET /products/:id"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "POST /products"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "PATCH /products/:id"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DELETE /products/:id"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "advanced-configuration",
      children: "Advanced Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can customize the generated endpoints, add specific DTOs, or restrict access using the decorator options."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "@CrudGenEntity({\n  routes: ['getMany', 'getOne'], // Only expose Read operations\n  dto: {\n    create: CreateProductDto,\n    update: UpdateProductDto,\n  },\n  guards: [JwtAuthGuard], // Secure all generated endpoints\n})\nexport class Product { /* ... */ }\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "filtering-and-pagination",
      children: "Filtering and Pagination"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The generated ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "getMany"
      }), " endpoint automatically supports a rich filtering syntax."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Example Request:\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /products?filter[price][$gt]=100&sort[name]=ASC&limit=20&offset=0"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This is automatically translated into a TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "QueryBuilder"
      }), " execution, safely preventing SQL injection while providing maximum flexibility for frontend clients."]
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
35066(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/modules/crud-gen","title":"CRUD Generator","description":"The @nest-yalc-2/crud-gen module is a powerful code generator that automates the creation of REST controllers and GraphQL resolvers based directly on your TypeORM entities.","source":"@site/docs/nestjs-yalc/modules/crud-gen.md","sourceDirName":"nestjs-yalc/modules","slug":"/nestjs-yalc/modules/crud-gen","permalink":"/docs/nestjs-yalc/modules/crud-gen","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/modules/crud-gen.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"crud-gen","title":"CRUD Generator","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Logger","permalink":"/docs/nestjs-yalc/modules/logger"},"next":{"title":"Overview","permalink":"/docs/node-yalc/overview"}}')

},

};
;