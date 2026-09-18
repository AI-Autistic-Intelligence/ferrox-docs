"use strict";
exports.ids = ["5374"];
exports.modules = {
53745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_interceptors_md_525_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_interceptors_md_525_json__rspack_import_0 = __webpack_require__(80237);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = '🔄 Interceptors: Request Execution Pipeline';

const assets = {

};



const toc = [{
  "value": "1. Responsibilities of an Interceptor",
  "id": "1-responsibilities-of-an-interceptor",
  "level": 2
}, {
  "value": "2. Built-in <code>logging_interceptor</code>",
  "id": "2-built-in-logging_interceptor",
  "level": 2
}, {
  "value": "Usage in Routers",
  "id": "usage-in-routers",
  "level": 3
}, {
  "value": "3. Caching Interceptor (<code>CacheInterceptor</code>)",
  "id": "3-caching-interceptor-cacheinterceptor",
  "level": 2
}, {
  "value": "4. Writing a Custom Interceptor",
  "id": "4-writing-a-custom-interceptor",
  "level": 2
}, {
  "value": "5. ✅ Best Practices",
  "id": "5--best-practices",
  "level": 2
}, {
  "value": "6. ❌ Anti-Patterns",
  "id": "6--anti-patterns",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-interceptors-request-execution-pipeline",
        children: "🔄 Interceptors: Request Execution Pipeline"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["An ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Interceptor"
      }), " in Ferrox is a middle layer that wraps handler execution, inspired by NestJS Interceptors and Aspect-Oriented Programming (AOP). Interceptors allow you to inspect, transform, or log incoming HTTP requests and outgoing HTTP responses."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-interceptors"
      }), " crate provides zero-cost middleware hooks for Axum routes."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-responsibilities-of-an-interceptor",
      children: "1. Responsibilities of an Interceptor"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Interceptors excel at:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Execution Time Profiling"
        }), ": Measuring microsecond request processing latency."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Response Transformation"
        }), ": Wrapping response bodies in standard JSON formats."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Cache Interception"
        }), ": Returning cached responses before executing route logic (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "CacheInterceptor"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Audit Logging"
        }), ": Capturing IP addresses, request URIs, and HTTP status codes."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Incoming Request ---> [ Interceptor Pre-hook ] ---> Route Handler\n                                                        |\n                                                        v\nOutgoing Response <--- [ Interceptor Post-hook ] <--- Result\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-built-in-logging_interceptor",
      children: ["2. Built-in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "logging_interceptor"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Ferrox includes an out-of-the-box execution time logging interceptor."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "usage-in-routers",
      children: "Usage in Routers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::get, middleware, Router};\nuse ferrox_interceptors::logging_interceptor;\n\npub fn app_router() -> Router {\n    Router::new()\n        .route(\"/users\", get(get_users))\n        .layer(middleware::from_fn(logging_interceptor))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When requests hit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/users"
      }), ", the interceptor automatically outputs structured log lines:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-text",
        children: "INFO [200] GET /users - 1.24ms\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "3-caching-interceptor-cacheinterceptor",
      children: ["3. Caching Interceptor (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CacheInterceptor"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For expensive read queries, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CacheInterceptor"
      }), " intercepts incoming requests, checks an in-memory or Redis key, and returns the response immediately if cached."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_interceptors::cache::CacheInterceptor;\n\n// Create cache interceptor with 60-second TTL\nlet cache_layer = CacheInterceptor::new(60);\n\nlet app = Router::new()\n    .route(\"/analytics/monthly\", get(get_monthly_analytics))\n    .layer(cache_layer);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-writing-a-custom-interceptor",
      children: "4. Writing a Custom Interceptor"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To write a custom interceptor, implement an async function taking ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Request<Body>"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "axum::middleware::Next"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{\n    body::Body,\n    http::Request,\n    middleware::Next,\n    response::Response,\n};\nuse std::time::Instant;\n\npub async fn custom_header_interceptor(\n    req: Request<Body>,\n    next: Next,\n) -> Response {\n    let start = Instant::now();\n    \n    // Execute down-stream handlers\n    let mut response = next.run(req).await;\n    \n    // Inject server timing header into outgoing response\n    let elapsed = format!(\"{}ms\", start.elapsed().as_millis());\n    response.headers_mut().insert(\n        \"X-Response-Time\", \n        elapsed.parse().unwrap()\n    );\n    \n    response\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5--best-practices",
      children: "5. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Use Interceptors for Cross-Cutting Concerns"
        }), ": Keep controllers clean by moving timing, tracing headers, and compression into interceptors."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Order Layers Correctly"
        }), ": Middleware layers evaluate in reverse order of addition in Axum. Place authentication guards before caching interceptors to prevent caching unauthorized responses."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6--anti-patterns",
      children: "6. ❌ Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "❌ Mutating Request Bodies synchronously"
        }), ": Never consume or buffer request bodies synchronously inside an interceptor, as this loads entire request payloads into memory and blocks Tokio worker threads."]
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
80237(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/interceptors","title":"🔄 Interceptors: Request Execution Pipeline","description":"An Interceptor in Ferrox is a middle layer that wraps handler execution, inspired by NestJS Interceptors and Aspect-Oriented Programming (AOP). Interceptors allow you to inspect, transform, or log incoming HTTP requests and outgoing HTTP responses.","source":"@site/docs/ferrox/fundamentals/interceptors.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/interceptors","permalink":"/docs/ferrox/fundamentals/interceptors","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/interceptors.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"🔗 Middlewares","permalink":"/docs/ferrox/fundamentals/middlewares"},"next":{"title":"🚨 Centralized Error Handling & Exception Filters","permalink":"/docs/ferrox/fundamentals/errors"}}')

},

};
;