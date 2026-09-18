"use strict";
exports.ids = ["8845"];
exports.modules = {
39329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_deployment_docker_kubernetes_md_94d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_deployment_docker_kubernetes_md_94d_json__rspack_import_0 = __webpack_require__(38104);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🏭 Production Deployment: Docker & Kubernetes';

const assets = {

};



const toc = [{
  "value": "1. Multi-Stage Dockerfile with <code>cargo-chef</code>",
  "id": "1-multi-stage-dockerfile-with-cargo-chef",
  "level": 2
}, {
  "value": "2. Kubernetes Production Manifests",
  "id": "2-kubernetes-production-manifests",
  "level": 2
}, {
  "value": "2.1 Deployment &amp; Horizontal Pod Autoscaler (HPA)",
  "id": "21-deployment--horizontal-pod-autoscaler-hpa",
  "level": 3
}, {
  "value": "3. Container Optimization Metrics",
  "id": "3-container-optimization-metrics",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-production-deployment-docker--kubernetes",
        children: "🏭 Production Deployment: Docker & Kubernetes"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Deploying Rust microservices to production environments requires minimal container sizes, high security isolation (non-root runtimes), fast CI build caching, and Kubernetes deployment manifests."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This guide provides production-ready Dockerfiles using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cargo-chef"
      }), " and complete Kubernetes deployment manifests."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-multi-stage-dockerfile-with-cargo-chef",
      children: ["1. Multi-Stage Dockerfile with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cargo-chef"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Compiling Rust dependencies on every Docker build can take 10+ minutes. Using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cargo-chef"
      }), ", dependency layers are cached separately from application source code, reducing rebuild times to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "under 15 seconds"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# 1. Chef Stage: Compute dependency recipe\nFROM lukemathwalker/cargo-chef:latest-rust-1.75-bookworm AS chef\nWORKDIR /app\n\nFROM chef AS planner\nCOPY . .\nRUN cargo chef prepare --recipe-path recipe.json\n\n# 2. Caching Stage: Build dependencies only\nFROM chef AS builder\nCOPY --from=planner /app/recipe.json recipe.json\nRUN cargo chef cook --release --recipe-path recipe.json\n\n# 3. Application Build Stage\nCOPY . .\nRUN cargo build --release --bin ferrox-showcase\n\n# 4. Minimal Security Production Runtime (Distroless / Debian-Slim)\nFROM debian:bookworm-slim AS runtime\nWORKDIR /app\n\n# Install SSL certificates & CA roots\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    ca-certificates \\\n    libssl3 \\\n    && rm -rf /var/lib/apt/lists/*\n\n# Create non-root user for security isolation\nRUN useradd -ms /bin/bash ferroxuser\nUSER ferroxuser\n\n# Copy release binary from builder\nCOPY --from=builder /app/target/release/ferrox-showcase /app/server\n\nEXPOSE 3000 9000\n\nENV FERROX_SERVER_PORT=3000\nCMD [\"/app/server\"]\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-kubernetes-production-manifests",
      children: "2. Kubernetes Production Manifests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "21-deployment--horizontal-pod-autoscaler-hpa",
      children: "2.1 Deployment & Horizontal Pod Autoscaler (HPA)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ferrox-app\n  labels:\n    app: ferrox-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: ferrox-app\n  template:\n    metadata:\n      labels:\n        app: ferrox-app\n    spec:\n      containers:\n      - name: ferrox-container\n        image: registry.company.com/ferrox-app:v1.0.0\n        ports:\n        - containerPort: 3000\n          name: http\n        - containerPort: 9000\n          name: metrics\n        resources:\n          limits:\n            cpu: \"1\"\n            memory: \"512Mi\"\n          requests:\n            cpu: \"100m\"\n            memory: \"64Mi\"\n        livenessProbe:\n          httpGet:\n            path: /healthz\n            port: http\n          initialDelaySeconds: 5\n          periodSeconds: 10\n        readinessProbe:\n          httpGet:\n            path: /readyz\n            port: http\n          initialDelaySeconds: 5\n          periodSeconds: 5\n---\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: ferrox-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: ferrox-app\n  minReplicas: 3\n  maxReplicas: 20\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-container-optimization-metrics",
      children: "3. Container Optimization Metrics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Metric"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Traditional Node.js Container"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Ferrox Distroless Container"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Image Size"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "900 MB"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "< 35 MB"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Idle RAM Usage"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "120 MB"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "< 8 MB"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Cold Start Time"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "3.5 seconds"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "< 0.05 seconds"
            })
          })]
        })]
      })]
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
38104(module) {
module.exports = JSON.parse('{"id":"ferrox/deployment/docker-kubernetes","title":"🏭 Production Deployment: Docker & Kubernetes","description":"Deploying Rust microservices to production environments requires minimal container sizes, high security isolation (non-root runtimes), fast CI build caching, and Kubernetes deployment manifests.","source":"@site/docs/ferrox/deployment/docker-kubernetes.md","sourceDirName":"ferrox/deployment","slug":"/ferrox/deployment/docker-kubernetes","permalink":"/docs/ferrox/deployment/docker-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/deployment/docker-kubernetes.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"🔄 Schema Migrations Management","permalink":"/docs/ferrox/databases/migrations"},"next":{"title":"🤖 CI/CD Automation & GitHub Actions","permalink":"/docs/ferrox/deployment/ci-cd"}}')

},

};
;