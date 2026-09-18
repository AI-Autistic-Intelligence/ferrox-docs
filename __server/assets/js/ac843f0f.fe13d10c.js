"use strict";
exports.ids = ["3003"];
exports.modules = {
41154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_first_steps_md_ac8_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_overview_first_steps_md_ac8_json__rspack_import_0 = __webpack_require__(13042);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🚀 First Steps: Getting Started';

const assets = {

};



const toc = [{
  "value": "1. Prerequisites",
  "id": "1-prerequisites",
  "level": 2
}, {
  "value": "2. Setting Up a New Ferrox Project",
  "id": "2-setting-up-a-new-ferrox-project",
  "level": 2
}, {
  "value": "3. Creating Your First Controller Route",
  "id": "3-creating-your-first-controller-route",
  "level": 2
}, {
  "value": "4. Bootstrapping <code>FerroxApp</code>",
  "id": "4-bootstrapping-ferroxapp",
  "level": 2
}, {
  "value": "5. Running the Application",
  "id": "5-running-the-application",
  "level": 2
}, {
  "value": "6. What&#39;s Next?",
  "id": "6-whats-next",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "-first-steps-getting-started",
        children: "🚀 First Steps: Getting Started"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This guide walks you through building your very first ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox"
      }), " application from scratch. We will cover environment preparation, application bootstrapping, router setup, and starting the HTTP transport server."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-prerequisites",
      children: "1. Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Before starting, ensure you have the following installed on your system:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Rust Toolchain"
        }), ": 1.75 or later (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "rustup update stable"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Cargo"
        }), ": Standard package manager included with Rust"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-setting-up-a-new-ferrox-project",
      children: "2. Setting Up a New Ferrox Project"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Create a new binary Cargo package:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo new my-ferrox-app --bin\ncd my-ferrox-app\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Add the core Ferrox dependencies to your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Cargo.toml"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-toml",
        children: "[dependencies]\nferrox-app = { path = \"../ferrox/crates/ferrox-app\" }\nferrox-transports = { path = \"../ferrox/crates/ferrox-transports\" }\nferrox-logger = { path = \"../ferrox/crates/ferrox-logger\" }\nferrox-errors = { path = \"../ferrox/crates/ferrox-errors\" }\naxum = \"0.7\"\ntokio = { version = \"1\", features = [\"full\"] }\nserde = { version = \"1.0\", features = [\"derive\"] }\nserde_json = \"1.0\"\ntracing = \"0.1\"\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-creating-your-first-controller-route",
      children: "3. Creating Your First Controller Route"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Ferrox, route handlers are asynchronous functions returning Axum responses or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Result<T, AppError>"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create a route handler in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/main.rs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::get, Json, Router};\nuse serde_json::{json, Value};\nuse ferrox_errors::AppError;\n\nasync fn get_health() -> Result<Json<Value>, AppError> {\n    Ok(Json(json!({\n        \"status\": \"up\",\n        \"service\": \"my-ferrox-app\",\n        \"timestamp\": chrono::Utc::now().to_rfc3339()\n    })))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "4-bootstrapping-ferroxapp",
      children: ["4. Bootstrapping ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxApp"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox uses ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxApp"
      }), " as a central application manager to control lifecycle hooks and manage concurrent transports (HTTP, gRPC, WebSockets)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Complete ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/main.rs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::get, Json, Router};\nuse ferrox_app::FerroxApp;\nuse ferrox_logger::{setup_logger, LoggerConfig};\nuse ferrox_transports::http::HttpTransport;\nuse serde_json::{json, Value};\nuse ferrox_errors::AppError;\n\nasync fn get_health() -> Result<Json<Value>, AppError> {\n    Ok(Json(json!({\n        \"status\": \"up\",\n        \"service\": \"my-ferrox-app\"\n    })))\n}\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    // 1. Initialize Logger & Tracing\n    let mut logger_config = LoggerConfig::default();\n    logger_config.service_name = \"my-ferrox-app\".to_string();\n    let _sentry_guard = setup_logger(logger_config)?;\n\n    // 2. Assemble Controller Router\n    let router = Router::new()\n        .route(\"/health\", get(get_health));\n\n    // 3. Configure HTTP Transport Layer\n    let http_transport = HttpTransport::new(router, 3000)\n        .with_strict_cors(vec![\"http://localhost:3000\"]);\n\n    // 4. Start Ferrox Lifecycle Manager\n    println!(\"🚀 Launching Ferrox application on port 3000...\");\n    FerroxApp::new()\n        .add_transport(http_transport)\n        .start()\n        .await?;\n\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-running-the-application",
      children: "5. Running the Application"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Run the app using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cargo run"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo run\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Test your endpoint using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "curl"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl http://localhost:3000/health\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"status\": \"up\",\n  \"service\": \"my-ferrox-app\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-whats-next",
      children: "6. What's Next?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now that your first Ferrox server is running, explore:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🕹️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox/fundamentals/controllers",
          children: "Controllers"
        }), " to structure complex routing trees."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🧱 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox/fundamentals/providers",
          children: "Providers"
        }), " to inject database connections and business logic."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🛡️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox/security/jwt",
          children: "Guards & Security"
        }), " to secure routes with PASETO JWT tokens."]
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
13042(module) {
module.exports = JSON.parse('{"id":"ferrox/overview/first-steps","title":"🚀 First Steps: Getting Started","description":"This guide walks you through building your very first Ferrox application from scratch. We will cover environment preparation, application bootstrapping, router setup, and starting the HTTP transport server.","source":"@site/docs/ferrox/overview/first-steps.md","sourceDirName":"ferrox/overview","slug":"/ferrox/overview/first-steps","permalink":"/docs/ferrox/overview/first-steps","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/overview/first-steps.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction & Ferrox Crate Architecture","permalink":"/docs/ferrox/overview/introduction"},"next":{"title":"🔄 Request Lifecycle & Architecture","permalink":"/docs/ferrox/overview/lifecycle"}}')

},

};
;