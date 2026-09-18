"use strict";
exports.ids = ["3855"];
exports.modules = {
96756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_middlewares_md_0b6_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_middlewares_md_0b6_json__rspack_import_0 = __webpack_require__(69316);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '🔗 Middlewares';

const assets = {

};



const toc = [{
  "value": "Functional Middleware",
  "id": "functional-middleware",
  "level": 2
}, {
  "value": "Applying Middleware",
  "id": "applying-middleware",
  "level": 3
}, {
  "value": "Class Middleware (Tower Services)",
  "id": "class-middleware-tower-services",
  "level": 2
}, {
  "value": "Passing Data to Controllers",
  "id": "passing-data-to-controllers",
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
        id: "-middlewares",
        children: "🔗 Middlewares"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Middleware is a function which is called ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "before"
      }), " the route handler. Middleware functions have access to the request and response objects, and the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "next()"
      }), " middleware function in the application’s request-response cycle."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox middlewares are equivalent to Express/NestJS middlewares but execute with zero-cost abstractions thanks to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tower::Service"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Middleware functions can perform the following tasks:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Execute any code."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Make changes to the request and the response objects (e.g. injecting Headers or Extensions)."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "End the request-response cycle early (e.g. returning 401 Unauthorized before hitting the DB)."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Call the next middleware function in the stack."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "functional-middleware",
      children: "Functional Middleware"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The simplest way to define a middleware in Ferrox is by using a standard asynchronous function."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{\n    http::Request,\n    middleware::Next,\n    response::Response,\n};\n\n// 1. Define the Middleware function\npub async fn logger_middleware<B>(\n    req: Request<B>,\n    next: Next<B>,\n) -> Response {\n    let method = req.method().clone();\n    let uri = req.uri().clone();\n    \n    println!(\"👉 Incoming Request: {} {}\", method, uri);\n\n    // Call the next middleware (or the controller)\n    let response = next.run(req).await;\n\n    println!(\"👈 Outgoing Response: {}\", response.status());\n\n    response\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "applying-middleware",
      children: "Applying Middleware"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can apply middleware to specific routes, or globally to the entire application."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::get, Router, middleware};\n\npub fn app_router() -> Router {\n    Router::new()\n        // The logger_middleware will only apply to routes ABOVE this layer\n        .route(\"/cats\", get(get_cats))\n        .route_layer(middleware::from_fn(logger_middleware))\n        \n        // It will NOT apply to this route! (Order matters in Axum)\n        .route(\"/health\", get(health_check))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\nIn Ferrox/Axum, middleware layers are evaluated ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "bottom-to-top"
        }), " when applied via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".layer()"
        }), ", but the routing matches top-to-bottom. Always be mindful of where you place ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".route_layer()"
        }), " to ensure it only protects the routes you intend it to!"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "class-middleware-tower-services",
      children: "Class Middleware (Tower Services)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For highly complex enterprise middlewares that require their own internal state (e.g., Rate Limiters, Circuit Breakers, Request Batchers), functional middlewares might not be enough."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can implement the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tower::Service"
      }), " trait directly. This is the equivalent of a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "class"
      }), " Middleware in NestJS."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use tower::{Service, Layer};\nuse std::task::{Context, Poll};\nuse futures::future::BoxFuture;\n\n// The Middleware \"Class\"\n#[derive(Clone)]\npub struct RateLimiterMiddleware<S> {\n    inner: S,\n    max_requests: u32,\n}\n\nimpl<S, ReqBody, ResBody> Service<axum::http::Request<ReqBody>> for RateLimiterMiddleware<S>\nwhere\n    S: Service<axum::http::Request<ReqBody>, Response = axum::http::Response<ResBody>> + Clone + Send + 'static,\n    S::Future: Send + 'static,\n    ReqBody: Send + 'static,\n{\n    type Response = S::Response;\n    type Error = S::Error;\n    type Future = BoxFuture<'static, Result<Self::Response, Self::Error>>;\n\n    fn poll_ready(&mut self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {\n        self.inner.poll_ready(cx)\n    }\n\n    fn call(&mut self, req: axum::http::Request<ReqBody>) -> Self::Future {\n        // Complex stateful logic here...\n        \n        let clone = self.inner.clone();\n        let mut inner = std::mem::replace(&mut self.inner, clone);\n        \n        Box::pin(async move {\n            let response = inner.call(req).await?;\n            Ok(response)\n        })\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "passing-data-to-controllers",
      children: "Passing Data to Controllers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A very common use case for Middleware is extracting a JWT token, looking up the User ID, and passing it to the Controller so the Controller doesn't have to duplicate the logic."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Ferrox, you use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Extensions"
      }), " to mutate the request context."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "pub async fn auth_middleware<B>(\n    mut req: Request<B>,\n    next: Next<B>,\n) -> Result<Response, AppError> {\n    \n    // 1. Verify token...\n    let user_id = \"user-uuid-123\".to_string(); \n    \n    // 2. Attach data to the request extensions\n    req.extensions_mut().insert(user_id);\n    \n    // 3. Continue execution\n    Ok(next.run(req).await)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Inside your Controller, you simply extract it!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::extract::Extension;\n\nasync fn profile(\n    Extension(user_id): Extension<String>, // Extracts the data injected by the middleware\n) -> String {\n    format!(\"Hello, user {}\", user_id)\n}\n"
      })
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
69316(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/middlewares","title":"🔗 Middlewares","description":"Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle.","source":"@site/docs/ferrox/fundamentals/middlewares.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/middlewares","permalink":"/docs/ferrox/fundamentals/middlewares","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/middlewares.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"💉 Providers & Dependency Injection","permalink":"/docs/ferrox/fundamentals/providers"},"next":{"title":"🔄 Interceptors: Request Execution Pipeline","permalink":"/docs/ferrox/fundamentals/interceptors"}}')

},

};
;