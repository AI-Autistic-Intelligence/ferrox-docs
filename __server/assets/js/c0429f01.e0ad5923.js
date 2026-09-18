"use strict";
exports.ids = ["2345"];
exports.modules = {
72978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_lifecycle_md_c04_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_lifecycle_md_c04_json__rspack_import_0 = __webpack_require__(90491);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🔄 Request Lifecycle & Architecture';

const assets = {

};



const toc = [{
  "value": "The Global Request Flow",
  "id": "the-global-request-flow",
  "level": 2
}, {
  "value": "Why this matters (The &quot;Fail Fast&quot; Philosophy)",
  "id": "why-this-matters-the-fail-fast-philosophy",
  "level": 3
}, {
  "value": "The Zero-Trust Microservice Data Flow",
  "id": "the-zero-trust-microservice-data-flow",
  "level": 2
}, {
  "value": "The Mechanism:",
  "id": "the-mechanism",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-request-lifecycle--architecture",
        children: "🔄 Request Lifecycle & Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To truly understand how Ferrox achieves massive scale and uncompromising security, we must zoom out and look at the \"Big Picture\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["A framework is only as good as its request lifecycle. If there is a single blocking chokepoint, your architecture will fail under load. Ferrox is designed as an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Onion Architecture"
      }), ", where requests must pass through rigorous, non-blocking layers before ever touching your business logic."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-global-request-flow",
      children: "The Global Request Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When a client sends an HTTP request, it doesn't just hit the Controller. It goes through a strictly enforced pipeline."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Client\n    participant Proxy as Reverse Proxy (Nginx/Traefik)\n    participant Tokio as Tokio Worker Thread\n    participant Middleware as Global Middleware\n    participant Guard as Auth Guard\n    participant Pipe as Validation Pipe\n    participant Controller\n    participant Service as Fat Provider (Service)\n    participant DB as Database\n\n    Client->>Proxy: POST /api/tickets\n    Proxy->>Tokio: Forward TCP Stream\n    \n    rect rgb(30, 30, 30)\n        note right of Tokio: Ferrox Application Boundary\n        Tokio->>Middleware: 1. Logging & Rate Limiting\n        \n        alt Rate Limit Exceeded\n            Middleware-->>Client: 429 Too Many Requests\n        else Allowed\n            Middleware->>Guard: 2. Extract JWT & Verify\n        end\n        \n        alt Invalid Signature\n            Guard-->>Client: 401 Unauthorized\n        else Valid Signature\n            Guard->>Pipe: 3. Deserialize JSON & Validate DTO\n        end\n        \n        alt Invalid Email Format\n            Pipe-->>Client: 400 Bad Request\n        else Valid Data\n            Pipe->>Controller: 4. Execute Route Handler\n        end\n        \n        Controller->>Service: 5. Delegate Business Logic\n    end\n    \n    Service->>DB: 6. Asynchronous Query\n    DB-->>Service: Result\n    \n    Service-->>Controller: Return Entity\n    Controller-->>Client: 201 Created (JSON)\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "why-this-matters-the-fail-fast-philosophy",
      children: "Why this matters (The \"Fail Fast\" Philosophy)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Notice the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "alt"
      }), " branches in the diagram. Ferrox employs a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "\"Fail Fast\""
      }), " philosophy.\nIf a user sends an invalid JSON payload, the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Validation Pipe"
      }), " rejects the request and returns a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "400 Bad Request"
      }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "before"
      }), " the Controller or the Database is ever invoked."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This mathematically guarantees that your business logic (the Service) only ever operates on sanitized, authenticated, and authorized data, saving massive amounts of CPU cycles and database connections."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-zero-trust-microservice-data-flow",
      children: "The Zero-Trust Microservice Data Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In a monolithic application, authentication is simple: the server checks a session cookie against the database. In a distributed Microservice Architecture, checking the database for every single request across 50 microservices will instantly crash your database cluster."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox solves this using the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Zero-Trust API Gateway Pattern"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    Client((Client)) -->|Bearer Token (PASETO)| Gateway[Ferrox API Gateway]\n    \n    subgraph Zero-Trust Perimeter\n        Gateway -->|Cryptographic Verification| Gateway\n        Gateway -->|Inject X-Ferrox-User-Id| Internal[Internal Network]\n        \n        Internal -->|Trusts Header| MS1[Orders Microservice]\n        Internal -->|Trusts Header| MS2[Inventory Microservice]\n        Internal -->|Trusts Header| MS3[Payments Microservice]\n    end\n    \n    MS1 -.-> DB[(Orders DB)]\n    MS2 -.-> DB2[(Inventory DB)]\n    \n    style Gateway fill:#8f4a1c,stroke:#fff,stroke-width:2px\n    style MS1 fill:#1a1a1a,stroke:#444,stroke-width:1px\n    style MS2 fill:#1a1a1a,stroke:#444,stroke-width:1px\n    style MS3 fill:#1a1a1a,stroke:#444,stroke-width:1px\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-mechanism",
      children: "The Mechanism:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "API Gateway"
        }), " acts as the singular entry point. It holds the Symmetric Encryption Key."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The Gateway receives the request and decrypts the PASETO token in microseconds (CPU-bound, no DB lookup)."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["If valid, the Gateway creates a mutated clone of the HTTP Request, injecting a strict internal header: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Ferrox-User-Id: 12345"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The internal microservices (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Orders"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Inventory"
        }), ") don't even have a JWT decoding library. They blindly trust the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Ferrox-User-Id"
        }), " header, because their firewalls only allow traffic originating from the API Gateway."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This architecture scales infinitely because Authentication becomes a stateless CPU operation rather than a stateful I/O operation."
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
90491(module) {
module.exports = JSON.parse('{"id":"ferrox/overview/lifecycle","title":"🔄 Request Lifecycle & Architecture","description":"To truly understand how Ferrox achieves massive scale and uncompromising security, we must zoom out and look at the \\"Big Picture\\".","source":"@site/docs/ferrox/overview/lifecycle.md","sourceDirName":"ferrox/overview","slug":"/ferrox/overview/lifecycle","permalink":"/docs/ferrox/overview/lifecycle","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/overview/lifecycle.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"🚀 First Steps: Getting Started","permalink":"/docs/ferrox/overview/first-steps"},"next":{"title":"Micro-Benchmarks, Criterion Suites & Comparative Metrics","permalink":"/docs/ferrox/performance/benchmarks"}}')

},

};
;