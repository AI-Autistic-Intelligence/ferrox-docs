"use strict";
exports.ids = ["3723"];
exports.modules = {
34696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_crud_gen_md_ebc_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_crud_gen_md_ebc_json__rspack_import_0 = __webpack_require__(51986);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'crud-gen',
	title: '@nest-yalc-2/crud-gen',
	sidebar_position: 1
};
const contentTitle = '⚡ Zero-Boilerplate TypeORM CRUD Generator (@nest-yalc-2/crud-gen)';

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
  "value": "🧠 4. Why It Was Designed This Way (CrudGen vs Manual Scaffolding)",
  "id": "-4-why-it-was-designed-this-way-crudgen-vs-manual-scaffolding",
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
        id: "-zero-boilerplate-typeorm-crud-generator-nest-yalc-2crud-gen",
        children: ["⚡ Zero-Boilerplate TypeORM CRUD Generator (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/crud-gen"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/crud-gen"
      }), " is the automated REST and GraphQL code generation module for NestJS 11+. It was designed to eliminate up to 40% of repetitive controller, resolver, service, DTO, and query builder boilerplate for TypeORM database entities, while maintaining full developer control over authorization and middleware."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated REST Endpoints"
        }), ": Generates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "getMany"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "getOne"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "createOne"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "updateOne"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "deleteOne"
        }), " endpoints automatically."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated GraphQL Queries & Mutations"
        }), ": Produces strongly-typed GraphQL schemas, input DTOs, and field resolvers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic SQL Query Parsing"
        }), ": Translates HTTP query strings (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "filter[age][gte]=18&sort=-createdAt"
        }), ") into optimized TypeORM ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "WHERE"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ORDER BY"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "JOIN"
        }), " clauses."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pagination Support"
        }), ": Automatic cursor-based or offset-based pagination."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Entity[\"@Entity() Product Decorator\"]\n    CrudMacro[\"@CrudGenEntity() Metadata Processor\"]\n    RouterBuilder[\"Dynamic Controller & Resolver Factory\"]\n    TypeORM[\"TypeORM QueryBuilder Engine\"]\n\n    Entity --> CrudMacro\n    CrudMacro --> RouterBuilder\n    RouterBuilder --> TypeORM\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Metadata Reflection"
        }), ": Decorating a TypeORM entity with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@CrudGenEntity()"
        }), " registers entity metadata and route configuration choices."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Factory Pattern"
        }), ": On NestJS application bootstrap, the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "crud-gen"
        }), " factory dynamically instantiates REST controllers and GraphQL resolvers with dependency injection into TypeORM repositories."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-crudgen-vs-manual-scaffolding",
      children: "🧠 4. Why It Was Designed This Way (CrudGen vs Manual Scaffolding)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["⚡ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/crud-gen"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Manual NestJS Scaffolding"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Endpoint Setup Time"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "< 2 minutes per Entity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "2-4 hours per Entity"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Maintainability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Centralized (Modify Entity to Update API)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Dozens of files to sync (DTO, Service, Controller, Resolver)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Dynamic Filtering"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native SQL Query Filtering Support"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Requires Handwritten QueryBuilder Logic"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';\nimport { CrudGenEntity } from '@nest-yalc-2/crud-gen';\n\n@Entity('products')\n@CrudGenEntity({\n  routes: ['getMany', 'getOne', 'createOne', 'updateOne', 'deleteOne'],\n  graphql: { enabled: true }\n})\nexport class Product {\n  @PrimaryGeneratedColumn('uuid')\n  id: string;\n\n  @Column()\n  sku: string;\n\n  @Column()\n  name: string;\n\n  @Column('decimal', { precision: 10, scale: 2 })\n  price: number;\n\n  @CreateDateColumn()\n  createdAt: Date;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT expose all CRUD routes on sensitive entities without Auth Guards"
        }), ": Enabling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "deleteOne"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "updateOne"
        }), " without applying ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@UseGuards()"
        }), " exposes public data mutation endpoints."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["DO NOT use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "crud-gen"
          }), " for complex business workflows requiring Sagas"]
        }), ": For operations involving payment providers or multi-step sagas, write a custom Controller/Resolver instead of standard CRUD logic."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Customizing Generated Routes"
        }), ": You can override or extend any automatically generated route by declaring a custom Controller extending the base class produced by ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "crud-gen"
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
51986(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/crud-gen","title":"@nest-yalc-2/crud-gen","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/nestjs-yalc/docs/modules/crud-gen.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/crud-gen","permalink":"/docs/nestjs-yalc/docs/modules/crud-gen","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/crud-gen.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"crud-gen","title":"@nest-yalc-2/crud-gen","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"AG-Grid Server-Side Integration & Query Transformers","permalink":"/docs/nestjs-yalc/docs/modules/ag-grid"},"next":{"title":"@nest-yalc-2/data-loader","permalink":"/docs/nestjs-yalc/docs/modules/data-loader"}}')

},

};
;