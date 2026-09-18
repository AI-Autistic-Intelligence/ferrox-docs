"use strict";
exports.ids = ["3270"];
exports.modules = {
97920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_api_gateway_md_efb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_api_gateway_md_efb_json__rspack_import_0 = __webpack_require__(73911);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🛡️ Zero-Trust API Gateway Pattern';

const assets = {

};



const toc = [{
  "value": "1. Gateway Architecture Flow",
  "id": "1-gateway-architecture-flow",
  "level": 2
}, {
  "value": "2. API Gateway Implementation",
  "id": "2-api-gateway-implementation",
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
        id: "️-zero-trust-api-gateway-pattern",
        children: "🛡️ Zero-Trust API Gateway Pattern"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In enterprise microservice architectures, authenticating requests against a database across 50 separate microservices creates massive database connection bottlenecks and security perimeters."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox implements the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Zero-Trust API Gateway Pattern"
      }), ", decrypting PASETO/JWT tokens centrally at the edge gateway and injecting cryptographically trusted headers into internal microservice networks."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-gateway-architecture-flow",
      children: "1. Gateway Architecture Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Client\n    participant Gateway as Ferrox API Gateway\n    participant OrdersMS as Orders Microservice\n    participant DB as Orders DB\n\n    Client->>Gateway: POST /api/v1/orders (Bearer PASETO Token)\n    \n    rect rgb(40, 40, 40)\n        note right of Gateway: CPU-Bound PASETO Decryption (<20µs)\n        Gateway->>Gateway: Verify PASETO v4 Symmetric Key\n    end\n    \n    Gateway->>OrdersMS: Forward Request + Header (X-Ferrox-User-Id: 101)\n    \n    rect rgb(30, 50, 30)\n        note right of OrdersMS: Zero-Trust Internal Network\n        OrdersMS->>OrdersMS: Trust X-Ferrox-User-Id Header (No JWT parsing)\n    end\n    \n    OrdersMS->>DB: Execute Query for User 101\n    DB-->>OrdersMS: Order Entity\n    OrdersMS-->>Gateway: 201 Created\n    Gateway-->>Client: 201 Created JSON\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-api-gateway-implementation",
      children: "2. API Gateway Implementation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{\n    body::Body,\n    http::{Request, HeaderValue},\n    middleware::Next,\n    response::Response,\n};\nuse ferrox_security::paseto::PasetoAuth;\nuse ferrox_errors::AppError;\n\npub async fn gateway_paseto_translator(\n    auth: PasetoAuth,\n    mut req: Request<Body>,\n    next: Next,\n) -> Result<Response, AppError> {\n    // 1. Extract Bearer Token\n    let token = req.headers()\n        .get(\"Authorization\")\n        .and_then(|v| v.to_str().ok())\n        .and_then(|h| h.strip_prefix(\"Bearer \"))\n        .ok_or_else(|| AppError::Unauthorized(\"Missing authorization token\".into()))?;\n\n    // 2. Cryptographic PASETO Decryption (Stateless CPU operation)\n    let claims = auth.validate_token(token)?;\n\n    // 3. Inject internal trusted header\n    req.headers_mut().insert(\n        \"X-Ferrox-User-Id\",\n        HeaderValue::from_str(&claims.sub).unwrap(),\n    );\n\n    // 4. Forward mutated request into internal VPC network\n    Ok(next.run(req).await)\n}\n"
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
73911(module) {
module.exports = JSON.parse('{"id":"ferrox/architectures/api-gateway","title":"🛡️ Zero-Trust API Gateway Pattern","description":"In enterprise microservice architectures, authenticating requests against a database across 50 separate microservices creates massive database connection bottlenecks and security perimeters.","source":"@site/docs/ferrox/architectures/api-gateway.md","sourceDirName":"ferrox/architectures","slug":"/ferrox/architectures/api-gateway","permalink":"/docs/ferrox/architectures/api-gateway","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/architectures/api-gateway.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"🛠️ Code Factory & Generic CRUD Generator","permalink":"/docs/ferrox/abstractions/crud-generator"},"next":{"title":"🗃️ CQRS (Command Query Responsibility Segregation)","permalink":"/docs/ferrox/architectures/cqrs"}}')

},

};
;