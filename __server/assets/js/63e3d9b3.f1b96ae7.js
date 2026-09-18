"use strict";
exports.ids = ["9507"];
exports.modules = {
91412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_selftest_md_63e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_selftest_md_63e_json__rspack_import_0 = __webpack_require__(81680);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'selftest',
	title: 'Security Self-Test Auditor',
	sidebar_position: 14
};
const contentTitle = '🧪 Security Self-Test Auditor (SelftestEngine)';

const assets = {

};



const toc = [{
  "value": "🌟 Key Features",
  "id": "-key-features",
  "level": 2
}, {
  "value": "🔬 Internal Architecture &amp; Execution Mechanics",
  "id": "-internal-architecture--execution-mechanics",
  "level": 2
}, {
  "value": "📊 Architectural Comparison: <code>SelftestEngine</code> vs External Scanners",
  "id": "-architectural-comparison-selftestengine-vs-external-scanners",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "⚠️ Common Pitfalls &amp; Anti-Patterns",
  "id": "️-common-pitfalls--anti-patterns",
  "level": 2
}, {
  "value": "💡 Best Practices",
  "id": "-best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h1, {
        id: "-security-self-test-auditor-selftestengine",
        children: ["🧪 Security Self-Test Auditor (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SelftestEngine"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SelftestEngine"
      }), " is an automated security compliance and performance benchmark auditor built directly into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox-node/core"
      }), ". It executes OWASP Web Security Testing Guide (WSTG) compliance checks against application routes before production deployment."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "OWASP WSTG Compliance Audit"
        }), ": Evaluates HTTP response security headers, CORS origin configurations, cookie flags (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "HttpOnly"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Secure"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SameSite"
        }), "), and payload size limits."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Route Benchmarking"
        }), ": Measures route latency metrics (p50, p95, p99) under synthetic load to catch performance regressions."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Security Report Generation"
        }), ": Produces JSON and HTML compliance reports detailing security violations and remediation advice."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "CI/CD Build Gate"
        }), ": Integrates into deployment pipelines to block deployments if security compliance falls below required thresholds."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Trigger[\"SelftestEngine.runAudit()\"]\n    HeaderCheck[\"Check OWASP Security Headers (HSTS, CSP, DENY)\"]\n    CorsCheck[\"Verify Wildcard CORS & Credential Policies\"]\n    SyntheticLoad[\"Synthetic Latency Benchmark (p50, p95, p99)\"]\n    ScoreCalc[\"Calculate Compliance Score (0 - 100%)\"]\n    ReportOutput[\"Generate Audit JSON Report\"]\n\n    Trigger --> HeaderCheck\n    HeaderCheck --> CorsCheck\n    CorsCheck --> SyntheticLoad\n    SyntheticLoad --> ScoreCalc\n    ScoreCalc --> ReportOutput\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-selftestengine-vs-external-scanners",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SelftestEngine"
      }), " vs External Scanners"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🧪 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "SelftestEngine"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🌐 External Vulnerability Scanner"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Execution Context"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "In-Memory / In-Process Pre-Flight Audit"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "External Network Probe"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Pipeline Latency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Sub-Second Execution (< 500ms)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Minutes / Hours Scan Time"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Framework Awareness"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Direct Access to Ferrox DI Routes"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Black-Box Crawler Only"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { SelftestEngine } from '@ferrox-node/core';\n\nasync function executePreDeploymentAudit() {\n  const auditor = new SelftestEngine();\n\n  // Run security audit against running local server instance\n  const report = await auditor.auditAppRoutes('http://localhost:8080', {\n    checkHeaders: true,\n    checkCors: true,\n    benchmarkLatency: true,\n  });\n\n  console.log(`🔒 Security Compliance Score: ${report.complianceScore}%`);\n  console.log(`Latency p95: ${report.latencyMetrics.p95}ms`);\n\n  if (report.complianceScore < 100) {\n    console.error('❌ Security Violations Found:');\n    report.violations.forEach((v) => {\n      console.error(` - [${v.severity}] ${v.ruleId}: ${v.description}`);\n    });\n    process.exit(1); // Block deployment pipeline\n  }\n\n  console.log('✅ All security compliance checks passed!');\n}\n\nexecutePreDeploymentAudit().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Running Audits on Staging Database with Destructive Routes"
        }), ": Ensure synthetic benchmarking is configured to bypass state-mutating endpoints (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DELETE /api/v1/users"
        }), ") or targets non-production test databases."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "CI/CD Pipeline Gatekeeper"
        }), ": Run ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SelftestEngine"
        }), " inside your GitHub Actions or GitLab CI pipeline right after integration tests pass to guarantee 100% OWASP compliance before merging to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "main"
        }), "."]
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
81680(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/selftest","title":"Security Self-Test Auditor","description":"SelftestEngine is an automated security compliance and performance benchmark auditor built directly into @ferrox-node/core. It executes OWASP Web Security Testing Guide (WSTG) compliance checks against application routes before production deployment.","source":"@site/docs/ferrox-node/docs/components/selftest.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/selftest","permalink":"/docs/ferrox-node/docs/components/selftest","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/selftest.md","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"selftest","title":"Security Self-Test Auditor","sidebar_position":14},"sidebar":"tutorialSidebar","previous":{"title":"Jobs Scheduler & SSE Stream","permalink":"/docs/ferrox-node/docs/components/jobs"},"next":{"title":"Cloud Storage, S3 Streams & Presigned URLs","permalink":"/docs/ferrox-node/docs/components/storage"}}')

},

};
;