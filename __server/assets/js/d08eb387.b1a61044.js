"use strict";
exports.ids = ["4357"];
exports.modules = {
18783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_configuration_md_d08_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_configuration_md_d08_json__rspack_import_0 = __webpack_require__(85485);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 6
};
const contentTitle = '⚙️ Typed Configuration Management';

const assets = {

};



const toc = [{
  "value": "1. Defining Application Configuration",
  "id": "1-defining-application-configuration",
  "level": 2
}, {
  "value": "2. Protecting Sensitive Secrets with <code>secrecy::Secret</code>",
  "id": "2-protecting-sensitive-secrets-with-secrecysecret",
  "level": 2
}, {
  "value": "3. Injecting Configuration into State",
  "id": "3-injecting-configuration-into-state",
  "level": 2
}, {
  "value": "4. ✅ Best Practices",
  "id": "4--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "️-typed-configuration-management",
        children: "⚙️ Typed Configuration Management"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Applications need environment-specific configurations (port numbers, database URLs, JWT secret keys, log levels) that change between Development, Staging, and Production environments."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox provides typed, safe configuration loading via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-config"
      }), ", supporting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".env"
      }), " files, TOML files, environment variable overrides, and secret masking via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "secrecy::Secret"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-defining-application-configuration",
      children: "1. Defining Application Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create a strongly typed configuration struct using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "serde::Deserialize"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::Deserialize;\nuse secrecy::Secret;\nuse ferrox_logger::LoggerConfig;\n\n#[derive(Debug, Clone, Deserialize)]\npub struct AppConfig {\n    pub server_port: u16,\n    pub jwt_secret: String,\n    pub database_url: String,\n    pub logger: LoggerConfig,\n}\n\nimpl AppConfig {\n    pub fn load() -> Self {\n        // Loads from .env or default fallback values\n        let port = std::env::var(\"FERROX_SERVER_PORT\")\n            .unwrap_or_else(|_| \"3000\".to_string())\n            .parse()\n            .expect(\"Invalid FERROX_SERVER_PORT\");\n\n        let jwt_secret = std::env::var(\"FERROX_JWT_SECRET\")\n            .unwrap_or_else(|_| \"super_secret_default_key_32bytes!!\".to_string());\n\n        let database_url = std::env::var(\"DATABASE_URL\")\n            .unwrap_or_else(|_| \"postgres://localhost/ferrox_dev\".to_string());\n\n        Self {\n            server_port: port,\n            jwt_secret,\n            database_url,\n            logger: LoggerConfig::default(),\n        }\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-protecting-sensitive-secrets-with-secrecysecret",
      children: ["2. Protecting Sensitive Secrets with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "secrecy::Secret"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Raw string secrets stored in memory can accidentally leak via debug logs or crash dumps. Ferrox recommends wrapping sensitive tokens in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "secrecy::Secret"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use secrecy::{Secret, ExposeSecret};\n\npub struct SecurityService {\n    jwt_secret: Secret<String>,\n}\n\nimpl SecurityService {\n    pub fn new(raw_secret: String) -> Self {\n        Self {\n            jwt_secret: Secret::new(raw_secret),\n        }\n    }\n\n    pub fn get_key(&self) -> &str {\n        self.jwt_secret.expose_secret()\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-injecting-configuration-into-state",
      children: "3. Injecting Configuration into State"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Pass the loaded ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppConfig"
      }), " into your Axum router state:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{extract::State, routing::get, Router};\nuse std::sync::Arc;\n\n#[derive(Clone)]\npub struct AppState {\n    pub config: Arc<AppConfig>,\n}\n\nasync fn get_config_info(State(state): State<AppState>) -> String {\n    format!(\"Server running on port: {}\", state.config.server_port)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Never hardcode secrets in code repositories"
        }), ": Store secrets in environment variables or cloud key vaults (AWS Secrets Manager / HashiCorp Vault)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "secrecy"
          }), " wrappers"]
        }), ": Prevent sensitive credentials from leaking into stdout logs."]
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
85485(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/configuration","title":"⚙️ Typed Configuration Management","description":"Applications need environment-specific configurations (port numbers, database URLs, JWT secret keys, log levels) that change between Development, Staging, and Production environments.","source":"@site/docs/ferrox/fundamentals/configuration.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/configuration","permalink":"/docs/ferrox/fundamentals/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/configuration.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"🚨 Centralized Error Handling & Exception Filters","permalink":"/docs/ferrox/fundamentals/errors"},"next":{"title":"🧪 Testing & Quality Assurance Strategy","permalink":"/docs/ferrox/fundamentals/testing"}}')

},

};
;