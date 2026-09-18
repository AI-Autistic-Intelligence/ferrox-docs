"use strict";
exports.ids = ["5801"];
exports.modules = {
81869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_pipes_md_3ca_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_pipes_md_3ca_json__rspack_import_0 = __webpack_require__(78402);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🛑 Pipes (Validation)';

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
    h1: "h1",
    h2: "h2",
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
        id: "-pipes-validation",
        children: "🛑 Pipes (Validation)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In NestJS, a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Pipe"
      }), " is a class annotated with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Injectable()"
      }), " that implements the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "PipeTransform"
      }), " interface, typically used to validate or transform input data before it reaches the Controller."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Ferrox, Pipes are implemented automatically through the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Validation Extractor"
      }), " pattern, leveraging the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validator"
      }), " crate."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "high-level-example",
      children: "High-Level Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To validate incoming JSON data, you simply need to decorate your Data Transfer Object (DTO) with validation rules, and use the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Json"
      }), " extractor in your controller."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{Json, routing::post, Router};\nuse validator::Validate;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Debug, Serialize, Deserialize, Validate)]\npub struct CreateUserDto {\n    #[validate(email)]\n    pub email: String,\n    \n    #[validate(length(min = 8, message = \"Password too short\"))]\n    pub password: String,\n}\n\n// The framework automatically runs the Pipe (validation) before executing this function\nasync fn register_user(Json(payload): Json<CreateUserDto>) -> Json<&'static str> {\n    payload.validate().unwrap(); // Trigger the Pipe\n    \n    Json(\"User Created!\")\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "low-level-internal-details",
      children: "Low-Level Internal Details"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["While you can manually call ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".validate()"
      }), " inside the controller, Ferrox allows you to build custom Extractors that act as automatic Pipes."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By implementing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FromRequest"
      }), " on a wrapper struct (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidJson<T>"
      }), "), Ferrox will intercept the raw TCP bytes, deserialize them into JSON, and run the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validator"
      }), " rules. If the rules fail, Ferrox intercepts the error and immediately returns an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "HTTP 400 Bad Request"
      }), " with a structured ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppError::ValidationError"
      }), ", completely bypassing the Controller logic."]
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
78402(module) {
module.exports = JSON.parse('{"id":"ferrox/abstractions/pipes","title":"🛑 Pipes (Validation)","description":"In NestJS, a Pipe is a class annotated with @Injectable() that implements the PipeTransform interface, typically used to validate or transform input data before it reaches the Controller.","source":"@site/docs/ferrox/abstractions/pipes.md","sourceDirName":"ferrox/abstractions","slug":"/ferrox/abstractions/pipes","permalink":"/docs/ferrox/abstractions/pipes","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/abstractions/pipes.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/ferrox/overview"},"next":{"title":"🛡️ Guards (Authorization)","permalink":"/docs/ferrox/abstractions/guards"}}')

},

};
;