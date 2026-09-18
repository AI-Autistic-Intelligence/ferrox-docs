"use strict";
exports.ids = ["968"];
exports.modules = {
12758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_observability_health_checks_md_f41_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_observability_health_checks_md_f41_json__rspack_import_0 = __webpack_require__(2867);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🩺 Kubernetes Health Probes (Liveness & Readiness)';

const assets = {

};



const toc = [{
  "value": "1. Attaching <code>health_router</code>",
  "id": "1-attaching-health_router",
  "level": 2
}, {
  "value": "2. Health Endpoint Responses",
  "id": "2-health-endpoint-responses",
  "level": 2
}, {
  "value": "Liveness Probe (<code>GET /healthz</code>)",
  "id": "liveness-probe-get-healthz",
  "level": 3
}, {
  "value": "Readiness Probe (<code>GET /readyz</code>)",
  "id": "readiness-probe-get-readyz",
  "level": 3
}, {
  "value": "3. Kubernetes Deployment YAML Configuration",
  "id": "3-kubernetes-deployment-yaml-configuration",
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
        id: "-kubernetes-health-probes-liveness--readiness",
        children: "🩺 Kubernetes Health Probes (Liveness & Readiness)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Container orchestrators like Kubernetes require standardized HTTP endpoints to monitor application health and manage pod lifecycles:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Liveness Probe (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "/healthz"
          }), ")"]
        }), ": Indicates whether the application process is running. If it fails, Kubernetes restarts the container."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Readiness Probe (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "/readyz"
          }), ")"]
        }), ": Indicates whether the application is ready to handle incoming traffic (e.g. database pools connected, caches warmed). If it fails, Kubernetes removes the pod from load balancer routing."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-health"
      }), " provides built-in HTTP health check routers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-attaching-health_router",
      children: ["1. Attaching ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "health_router"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Attach ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "health_router()"
      }), " to your main HTTP router:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::Router;\nuse ferrox_health::health_router;\n\npub fn app_router() -> Router {\n    Router::new()\n        .merge(health_router()) // Adds /healthz and /readyz\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-health-endpoint-responses",
      children: "2. Health Endpoint Responses"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "liveness-probe-get-healthz",
      children: ["Liveness Probe (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /healthz"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl http://localhost:3000/healthz\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Response (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "200 OK"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"status\": \"UP\",\n  \"timestamp\": 1788602400\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "readiness-probe-get-readyz",
      children: ["Readiness Probe (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /readyz"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl http://localhost:3000/readyz\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Response (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "200 OK"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"status\": \"READY\",\n  \"timestamp\": 1788602400\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-kubernetes-deployment-yaml-configuration",
      children: "3. Kubernetes Deployment YAML Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Configure your Kubernetes deployment manifest:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-yaml",
        children: "livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 3000\n  initialDelaySeconds: 5\n  periodSeconds: 10\nreadinessProbe:\n  httpGet:\n    path: /readyz\n    port: 3000\n  initialDelaySeconds: 10\n  periodSeconds: 5\n"
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
2867(module) {
module.exports = JSON.parse('{"id":"ferrox/observability/health-checks","title":"🩺 Kubernetes Health Probes (Liveness & Readiness)","description":"Container orchestrators like Kubernetes require standardized HTTP endpoints to monitor application health and manage pod lifecycles:","source":"@site/docs/ferrox/observability/health-checks.md","sourceDirName":"ferrox/observability","slug":"/ferrox/observability/health-checks","permalink":"/docs/ferrox/observability/health-checks","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/observability/health-checks.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"📊 Structured Logging & Sentry Integration","permalink":"/docs/ferrox/observability/logging"},"next":{"title":"📈 Prometheus Metrics Export","permalink":"/docs/ferrox/observability/metrics"}}')

},

};
;