"use strict";
exports.ids = ["4356"];
exports.modules = {
36099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_observability_logging_md_d04_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_observability_logging_md_d04_json__rspack_import_0 = __webpack_require__(75765);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '📊 Structured Logging & Sentry Integration';

const assets = {

};



const toc = [{
  "value": "1. Initializing the Logger",
  "id": "1-initializing-the-logger",
  "level": 2
}, {
  "value": "2. Emitting Structured Log Spans",
  "id": "2-emitting-structured-log-spans",
  "level": 2
}, {
  "value": "3. Sentry Integration",
  "id": "3-sentry-integration",
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
        id: "-structured-logging--sentry-integration",
        children: "📊 Structured Logging & Sentry Integration"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Production observability begins with structured logging. Plain text ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "println!"
      }), " statements are difficult to search in log aggregators like Datadog, Grafana Loki, or AWS CloudWatch."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-logger"
      }), "—a crate that initializes structured JSON logging via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tracing-subscriber"
      }), " and configures automatic error reporting via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Sentry"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-initializing-the-logger",
      children: "1. Initializing the Logger"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Call ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "setup_logger"
      }), " at the beginning of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.rs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_logger::{setup_logger, LoggerConfig};\nuse tracing::{info, warn, error};\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let mut config = LoggerConfig::default();\n    config.service_name = \"my-service\".to_string();\n    config.environment = \"production\".to_string();\n\n    // Initializes tracing subscriber and optional Sentry guard\n    let _sentry_guard = setup_logger(config)?;\n\n    info!(\"🚀 Application initialized with structured logging!\");\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-emitting-structured-log-spans",
      children: "2. Emitting Structured Log Spans"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Use the standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tracing"
      }), " macros (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "info!"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "warn!"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "error!"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "debug!"
      }), ") to attach key-value metadata to logs:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use tracing::info;\n\npub async fn process_order(order_id: u64, user_id: u64, amount: f64) {\n    info!(\n        order_id = order_id,\n        user_id = user_id,\n        amount = amount,\n        \"Order processing started\"\n    );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Output JSON log line:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"timestamp\": \"2026-09-05T10:00:00Z\",\n  \"level\": \"INFO\",\n  \"fields\": {\n    \"order_id\": 42,\n    \"user_id\": 101,\n    \"amount\": 99.95,\n    \"message\": \"Order processing started\"\n  },\n  \"target\": \"my_service::orders\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-sentry-integration",
      children: "3. Sentry Integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "LoggerConfig.sentry_dsn"
      }), " is configured, all ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "error!"
      }), " events automatically create detailed Sentry exception reports complete with stack traces, environment tags, and request contexts."]
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
75765(module) {
module.exports = JSON.parse('{"id":"ferrox/observability/logging","title":"📊 Structured Logging & Sentry Integration","description":"Production observability begins with structured logging. Plain text println! statements are difficult to search in log aggregators like Datadog, Grafana Loki, or AWS CloudWatch.","source":"@site/docs/ferrox/observability/logging.md","sourceDirName":"ferrox/observability","slug":"/ferrox/observability/logging","permalink":"/docs/ferrox/observability/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/observability/logging.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Full-Text Search, Vector Indexing & Meilisearch Adapters","permalink":"/docs/ferrox/integrations/search"},"next":{"title":"🩺 Kubernetes Health Probes (Liveness & Readiness)","permalink":"/docs/ferrox/observability/health-checks"}}')

},

};
;