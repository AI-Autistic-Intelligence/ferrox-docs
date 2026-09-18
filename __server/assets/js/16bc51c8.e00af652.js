"use strict";
exports.ids = ["9937"];
exports.modules = {
65143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_providers_md_16b_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_providers_md_16b_json__rspack_import_0 = __webpack_require__(18118);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '💉 Providers & Dependency Injection';

const assets = {

};



const toc = [{
  "value": "Services",
  "id": "services",
  "level": 2
}, {
  "value": "Dependency Injection (Application State)",
  "id": "dependency-injection-application-state",
  "level": 2
}, {
  "value": "Injection Scopes",
  "id": "injection-scopes",
  "level": 2
}, {
  "value": "1. Singleton Scope (Default)",
  "id": "1-singleton-scope-default",
  "level": 3
}, {
  "value": "2. Request Scope",
  "id": "2-request-scope",
  "level": 3
}, {
  "value": "3. Transient Scope",
  "id": "3-transient-scope",
  "level": 3
}, {
  "value": "Custom Providers (Factory Providers)",
  "id": "custom-providers-factory-providers",
  "level": 2
}, {
  "value": "Interfaces (Traits)",
  "id": "interfaces-traits",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-providers--dependency-injection",
        children: "💉 Providers & Dependency Injection"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Providers are a fundamental concept in Ferrox. Many of the basic Ferrox classes may be treated as a provider – services, repositories, factories, helpers, and so on."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The main idea of a provider is that it can be ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "injected"
      }), " as a dependency. In a traditional OOP language like TypeScript or Java, this is done via an IoC (Inversion of Control) container that reads class constructors."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Rust, runtime reflection is notoriously difficult. Ferrox achieves powerful, compile-time Dependency Injection (DI) leveraging Axum's Application ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "State"
      }), " and dynamic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Extensions"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "services",
      children: "Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Let's start by creating a simple ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CatsService"
      }), ". This service will be responsible for data storage and retrieval, and is designed to be used by the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CatsController"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "// cats_service.rs\nuse std::sync::Arc;\nuse tokio::sync::Mutex;\n\n// In Ferrox, a Provider is usually just a struct containing its dependencies\n#[derive(Clone)]\npub struct CatsService {\n    // We use Arc<Mutex<T>> to safely share state across threads\n    cats: Arc<Mutex<Vec<Cat>>>,\n}\n\nimpl CatsService {\n    pub fn new() -> Self {\n        Self { cats: Arc::new(Mutex::new(Vec::new())) }\n    }\n\n    pub async fn create(&self, cat: Cat) {\n        let mut lock = self.cats.lock().await;\n        lock.push(cat);\n    }\n\n    pub async fn find_all(&self) -> Vec<Cat> {\n        let lock = self.cats.lock().await;\n        lock.clone()\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!NOTE]\nUnlike NestJS where you decorate the class with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Injectable()"
        }), ", in Ferrox you just need to ensure your service derives ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Clone"
        }), ". This allows Tokio to cheaply pass references to the service across multiple worker threads."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "dependency-injection-application-state",
      children: "Dependency Injection (Application State)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To inject the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CatsService"
      }), " into our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CatsController"
      }), ", we register it in the application's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "State"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{extract::State, routing::get, Json, Router};\n\n// 1. Define the Global State of your application\n#[derive(Clone)]\npub struct AppState {\n    pub cats_service: CatsService,\n}\n\n// 2. The Controller injects the State automatically\nasync fn find_all(\n    State(state): State<AppState>, // <-- Dependency Injection happens here!\n) -> Json<Vec<Cat>> {\n    let cats = state.cats_service.find_all().await;\n    Json(cats)\n}\n\n// 3. Register the Provider at bootstrap\n#[tokio::main]\nasync fn main() {\n    let state = AppState {\n        cats_service: CatsService::new(),\n    };\n\n    let app = Router::new()\n        .route(\"/cats\", get(find_all))\n        .with_state(state); // <-- Registering the providers\n\n    axum::Server::bind(&\"0.0.0.0:3000\".parse().unwrap())\n        .serve(app.into_make_service())\n        .await\n        .unwrap();\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "injection-scopes",
      children: "Injection Scopes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In NestJS, you have three injection scopes: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DEFAULT"
      }), " (Singleton), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "REQUEST"
      }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "TRANSIENT"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Ferrox, Scopes are handled natively by Rust's memory management:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-singleton-scope-default",
      children: "1. Singleton Scope (Default)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By wrapping your service in an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Arc"
      }), " (Atomic Reference Counted) pointer and putting it in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppState"
      }), ", the service is instantiated exactly ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "once"
      }), " when the application boots. All requests share the same instance. This is highly performant and the recommended approach."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-request-scope",
      children: "2. Request Scope"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you need a new instance of a service for every incoming request (e.g., a service that holds a temporary database transaction or request-specific metadata), you use Axum's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Extensions"
      }), ". A Middleware intercepts the request, instantiates the service, and attaches it to the request extensions."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::extract::Extension;\n\nasync fn request_scoped_controller(\n    // Extracted from the current request only\n    Extension(transaction_service): Extension<TransactionService>, \n) {\n    // ...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-transient-scope",
      children: "3. Transient Scope"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want a new instance every single time the service is requested within the same request lifecycle, you can use a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Factory Provider"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "custom-providers-factory-providers",
      children: "Custom Providers (Factory Providers)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Sometimes you want to construct a provider dynamically. For instance, maybe you need to read a configuration file asynchronously, or choose an implementation based on an environment variable."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "pub async fn database_factory() -> Arc<dyn DatabaseInterface> {\n    let env = std::env::var(\"NODE_ENV\").unwrap_or_else(|_| \"development\".to_string());\n    \n    if env == \"production\" {\n        Arc::new(PostgresDatabase::connect().await)\n    } else {\n        Arc::new(InMemoryDatabase::new())\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "await"
      }), " this factory during your application bootstrap and then inject the resulting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Arc<dyn DatabaseInterface>"
      }), " trait object into your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppState"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "interfaces-traits",
      children: "Interfaces (Traits)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In TypeScript, you often inject interfaces. In Rust, we use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Traits"
      }), " and dynamic dispatch (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "dyn Trait"
      }), ") to achieve the exact same decoupling."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "// 1. Define the Interface\npub trait PaymentGateway: Send + Sync {\n    fn process_payment(&self, amount: u32) -> Result<(), AppError>;\n}\n\n// 2. Implement it\npub struct StripeGateway;\nimpl PaymentGateway for StripeGateway {\n    fn process_payment(&self, amount: u32) -> Result<(), AppError> {\n        Ok(())\n    }\n}\n\n// 3. Inject it via dynamic dispatch\n#[derive(Clone)]\npub struct AppState {\n    pub payment_gateway: Arc<dyn PaymentGateway>, // Can be Stripe, PayPal, or a Mock!\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is the cornerstone of Test-Driven Development (TDD) in Ferrox, allowing you to seamlessly swap real providers with Mocks during unit testing."
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
18118(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/providers","title":"💉 Providers & Dependency Injection","description":"Providers are a fundamental concept in Ferrox. Many of the basic Ferrox classes may be treated as a provider – services, repositories, factories, helpers, and so on.","source":"@site/docs/ferrox/fundamentals/providers.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/providers","permalink":"/docs/ferrox/fundamentals/providers","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/providers.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"🕹️ Controllers: The Masterpiece Guide","permalink":"/docs/ferrox/fundamentals/controllers"},"next":{"title":"🔗 Middlewares","permalink":"/docs/ferrox/fundamentals/middlewares"}}')

},

};
;