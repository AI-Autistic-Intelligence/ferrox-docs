"use strict";
exports.ids = ["3892"];
exports.modules = {
77513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_tutorial_03_code_factory_md_770_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_tutorial_03_code_factory_md_770_json__rspack_import_0 = __webpack_require__(20057);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '🤖 Part 3: The Code Factory';

const assets = {

};



const toc = [{
  "value": "1. Extracting the Types",
  "id": "1-extracting-the-types",
  "level": 2
}, {
  "value": "2. Generating the API Client",
  "id": "2-generating-the-api-client",
  "level": 2
}, {
  "value": "3. Using it in React / Next.js",
  "id": "3-using-it-in-react--nextjs",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "-part-3-the-code-factory",
        children: "🤖 Part 3: The Code Factory"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Our Backend is solid, but writing the exact same interfaces and API calls manually in TypeScript for the Frontend is an anti-pattern that leads to massive synchronization bugs."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Let's use the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox Code Factory"
      }), " to generate our entire API Client with zero dependencies."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-extracting-the-types",
      children: "1. Extracting the Types"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Chapter 2, we annotated our Rust DTOs with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[derive(TS)]"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[ts(export)]"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When you compile the project, the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ts-rs"
      }), " library automatically generates the exact TypeScript representations."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Run:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo test\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This generates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "bindings/CreateTicketDto.ts"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "bindings/Ticket.ts"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "// bindings/CreateTicketDto.ts\nexport interface CreateTicketDto {\n    title: string;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-generating-the-api-client",
      children: "2. Generating the API Client"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, we use the Ferrox CLI to generate the networking layer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "ferrox generate --lang ts --output ./frontend/api\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This scans your Rust routes and generates a unified ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxClient.ts"
      }), " that uses the native JavaScript ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "fetch"
      }), " API. It automatically handles serialization and JWT injection."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-using-it-in-react--nextjs",
      children: "3. Using it in React / Next.js"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Your frontend developers never have to write an Axios call again. They simply instantiate the client."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { FerroxClient } from './api/FerroxClient';\nimport { CreateTicketDto } from './api/CreateTicketDto';\n\n// The client automatically injects the Bearer Token from local storage\nconst client = new FerroxClient(\"http://localhost:3000\", localStorage.getItem(\"token\"));\n\nexport default function TicketForm() {\n    const handleSubmit = async () => {\n        const payload: CreateTicketDto = { title: \"Fix the server!\" };\n        \n        // This is 100% type-safe!\n        // If the backend changed the payload, this would throw a TS error.\n        const ticket = await client.request(\"/api/tickets\", {\n            method: \"POST\",\n            body: JSON.stringify(payload)\n        });\n        \n        console.log(\"Ticket created!\", ticket.id);\n    }\n    \n    return <button onClick={handleSubmit}>Create Ticket</button>\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Congratulations! You have built a highly scalable, secure, and type-safe full-stack feature using Ferrox."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You experienced:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Thin Controllers"
        }), " passing requests to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Fat Providers"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Asynchronous Mutex Locking"
        }), " to avoid blocking Tokio threads."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zero-Trust Security"
        }), " at the routing layer."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Frontend Generation"
        }), " via the Code Factory."]
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
20057(module) {
module.exports = JSON.parse('{"id":"ferrox/tutorial/code-factory","title":"🤖 Part 3: The Code Factory","description":"Our Backend is solid, but writing the exact same interfaces and API calls manually in TypeScript for the Frontend is an anti-pattern that leads to massive synchronization bugs.","source":"@site/docs/ferrox/tutorial/03-code-factory.md","sourceDirName":"ferrox/tutorial","slug":"/ferrox/tutorial/code-factory","permalink":"/docs/ferrox/tutorial/code-factory","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/tutorial/03-code-factory.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"🏗️ Part 2: Building the Core","permalink":"/docs/ferrox/tutorial/building-the-core"},"next":{"title":"Core WebAssembly System Architecture","permalink":"/docs/ferrox-front/architecture"}}')

},

};
;