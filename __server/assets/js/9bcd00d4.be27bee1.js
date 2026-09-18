"use strict";
exports.ids = ["4460"];
exports.modules = {
42036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_observability_tracing_md_9bc_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_observability_tracing_md_9bc_json__rspack_import_0 = __webpack_require__(73444);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = '🕵️ OpenTelemetry & Distributed Tracing';

const assets = {

};



const toc = [{
  "value": "1. Request Correlation ID Middleware",
  "id": "1-request-correlation-id-middleware",
  "level": 2
}, {
  "value": "2. Propagating Correlation IDs across Microservice Calls",
  "id": "2-propagating-correlation-ids-across-microservice-calls",
  "level": 2
}, {
  "value": "3. Visualizing Traces in Jaeger / Grafana Tempo",
  "id": "3-visualizing-traces-in-jaeger--grafana-tempo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-opentelemetry--distributed-tracing",
        children: "🕵️ OpenTelemetry & Distributed Tracing"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In a distributed microservice network, a single user HTTP request might pass through an API Gateway, an Authentication service, an Inventory service, and a Payments database."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Distributed Tracing"
      }), " tracks the lifecycle of a request across all service boundaries by injecting and propagating unique trace identifiers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "traceparent"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "X-Correlation-ID"
      }), " headers)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-tracing"
      }), " integrates OpenTelemetry and Jaeger/Zipkin exporters."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-request-correlation-id-middleware",
      children: "1. Request Correlation ID Middleware"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-tracing"
      }), " provides middleware that automatically extracts or generates a unique correlation ID for every incoming request:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{\n    body::Body,\n    http::{Request, HeaderValue},\n    middleware::Next,\n    response::Response,\n};\nuse uuid::Uuid;\n\npub async fn correlation_id_middleware(\n    mut req: Request<Body>,\n    next: Next,\n) -> Response {\n    let correlation_id = req.headers()\n        .get(\"X-Correlation-ID\")\n        .and_then(|v| v.to_str().ok())\n        .map(|s| s.to_string())\n        .unwrap_or_else(|| Uuid::new_v4().to_string());\n\n    // Re-inject correlation header into request\n    req.headers_mut().insert(\n        \"X-Correlation-ID\",\n        HeaderValue::from_str(&correlation_id).unwrap(),\n    );\n\n    let mut response = next.run(req).await;\n\n    // Attach correlation ID to response headers\n    response.headers_mut().insert(\n        \"X-Correlation-ID\",\n        HeaderValue::from_str(&correlation_id).unwrap(),\n    );\n\n    response\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-propagating-correlation-ids-across-microservice-calls",
      children: "2. Propagating Correlation IDs across Microservice Calls"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When calling downstream microservices via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "reqwest"
      }), ", attach the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "X-Correlation-ID"
      }), " header:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "pub async fn call_downstream_service(correlation_id: &str) {\n    let client = reqwest::Client::new();\n    let res = client.get(\"http://payments-service/charge\")\n        .header(\"X-Correlation-ID\", correlation_id)\n        .send()\n        .await;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-visualizing-traces-in-jaeger--grafana-tempo",
      children: "3. Visualizing Traces in Jaeger / Grafana Tempo"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Distributed traces are collected by OpenTelemetry collectors and rendered in Jaeger UI, visualizing call stacks, duration waterfalls, and exact bottlenecks."
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
73444(module) {
module.exports = JSON.parse('{"id":"ferrox/observability/tracing","title":"🕵️ OpenTelemetry & Distributed Tracing","description":"In a distributed microservice network, a single user HTTP request might pass through an API Gateway, an Authentication service, an Inventory service, and a Payments database.","source":"@site/docs/ferrox/observability/tracing.md","sourceDirName":"ferrox/observability","slug":"/ferrox/observability/tracing","permalink":"/docs/ferrox/observability/tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/observability/tracing.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"📈 Prometheus Metrics Export","permalink":"/docs/ferrox/observability/metrics"},"next":{"title":"Introduction & Ferrox Crate Architecture","permalink":"/docs/ferrox/overview/introduction"}}')

},

};
;