"use strict";
exports.ids = ["4222"];
exports.modules = {
4500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_guards_md_7af_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_guards_md_7af_json__rspack_import_0 = __webpack_require__(85810);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🛡️ Guards (Authorization)';

const assets = {

};



const toc = [{
  "value": "High-Level Example",
  "id": "high-level-example",
  "level": 2
}, {
  "value": "Low-Level Internal Details",
  "id": "low-level-internal-details",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-guards-authorization",
        children: "🛡️ Guards (Authorization)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Guards have a single responsibility: they determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Ferrox, Guards are evaluated right after Middlewares but ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "before"
      }), " Pipes and Controllers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "high-level-example",
      children: "High-Level Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To protect a route so that only ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Admin"
      }), " users can access it, you simply inject the Role Extractor in your controller arguments."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{Json, routing::get, Router};\nuse ferrox_security::{AuthPayload, Role};\n\nasync fn delete_database(\n    // The Guard! If the JWT doesn't contain the Admin role, this throws 403 Forbidden\n    auth: AuthPayload, \n) -> Json<&'static str> {\n    \n    if auth.role != Role::Admin {\n        // You can also handle it manually, but Ferrox Security Middlewares \n        // usually prevent the request from even reaching this point.\n        return Json(\"Nice try.\");\n    }\n    \n    Json(\"Database Deleted!\")\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "low-level-internal-details",
      children: "Low-Level Internal Details"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Under the hood, a Guard in Ferrox is simply an implementation of the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FromRequestParts"
      }), " trait in Axum."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Unlike ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FromRequest"
      }), " (which consumes the request body, like a JSON Pipe), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FromRequestParts"
      }), " only looks at the HTTP Headers (like the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Authorization"
      }), " header). This means multiple Guards can be chained sequentially."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If a Guard fails (e.g., the JWT signature is invalid), it returns a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox_errors::AppError::Unauthorized"
      }), ". Because of Ferrox's early-return architecture, the TCP connection is immediately answered with a 401/403 status code, saving database connections and memory."]
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
85810(module) {
module.exports = JSON.parse('{"id":"ferrox/abstractions/guards","title":"🛡️ Guards (Authorization)","description":"Guards have a single responsibility: they determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time.","source":"@site/docs/ferrox/abstractions/guards.md","sourceDirName":"ferrox/abstractions","slug":"/ferrox/abstractions/guards","permalink":"/docs/ferrox/abstractions/guards","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/abstractions/guards.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"🛑 Pipes (Validation)","permalink":"/docs/ferrox/abstractions/pipes"},"next":{"title":"🎯 DTO Validation & AutoZod Extractor","permalink":"/docs/ferrox/abstractions/validation"}}')

},

};
;