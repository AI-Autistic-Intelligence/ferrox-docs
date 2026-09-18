"use strict";
exports.ids = ["777"];
exports.modules = {
99542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_jobs_md_dce_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_jobs_md_dce_json__rspack_import_0 = __webpack_require__(17484);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'jobs',
	title: 'Jobs Scheduler & SSE Stream',
	sidebar_position: 13
};
const contentTitle = '⏱️ SSE Job Scheduler & Background Workers (JobsSchedulerSse)';

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
  "value": "📊 Architectural Comparison: <code>JobsSchedulerSse</code> vs Traditional Polling",
  "id": "-architectural-comparison-jobsschedulersse-vs-traditional-polling",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "Enqueuing Background Jobs with SSE Progress Reporting",
  "id": "enqueuing-background-jobs-with-sse-progress-reporting",
  "level": 3
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
    h3: "h3",
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
        id: "️-sse-job-scheduler--background-workers-jobsschedulersse",
        children: ["⏱️ SSE Job Scheduler & Background Workers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "JobsSchedulerSse"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "JobsSchedulerSse"
      }), " combines asynchronous background worker execution with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Server-Sent Events (SSE)"
      }), " to stream job progress, real-time log outputs, and execution status updates directly to frontend web applications."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Off-Thread Worker Execution"
        }), ": Moves heavy computational tasks (PDF report rendering, bulk email processing) off the main HTTP request handler thread."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Real-Time SSE Streaming"
        }), ": Pushes progress percentage (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "0%"
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "100%"
        }), ") and live log lines to web browsers via native Server-Sent Events."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Async Cron Scheduler"
        }), ": Supports recurring cron expression schedules (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "0 0 * * *"
        }), ") for background cleanup tasks."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Failure Recovery & Retries"
        }), ": Configurable exponential backoff retries for failed background jobs."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Client[\"Browser Client EventSource('/jobs/stream')\"]\n    EnqueueCall[\"JobsSchedulerSse.enqueueJob('data-export')\"]\n    WorkerPool[\"Async Worker Thread Pool\"]\n    ProgressStream[\"SSE Real-time Event Stream\"]\n    JobComplete[\"Job Completed (Download URL Issued)\"]\n\n    EnqueueCall --> WorkerPool\n    WorkerPool -->|Report Progress (25%, 50%, 75%)| ProgressStream\n    ProgressStream --> Client\n    WorkerPool -->|100% Complete| JobComplete\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-jobsschedulersse-vs-traditional-polling",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "JobsSchedulerSse"
      }), " vs Traditional Polling"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["⏱️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "JobsSchedulerSse"
            }), " (SSE)"]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🐢 HTTP Polling (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "setInterval"
            }), ")"]
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Network Traffic"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "1 Persistent HTTP Connection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Hundreds of Repeated HTTP Requests"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Latency of Progress Updates"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Instant (Sub-Millisecond Push)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Delayed by Polling Interval (e.g. 5s)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Server CPU Utilization"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Low (Event-Driven Streaming)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "High (Constant Polling Request Overhead)"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "enqueuing-background-jobs-with-sse-progress-reporting",
      children: "Enqueuing Background Jobs with SSE Progress Reporting"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { JobsSchedulerSse } from '@ferrox-node/core';\n\nconst scheduler = new JobsSchedulerSse();\n\n// 1. Enqueue Background Job with Real-Time Progress Stream\nscheduler.enqueueJob('export-user-report', async (jobContext) => {\n  jobContext.reportProgress(10, 'Connecting to database...');\n  await new Promise(res => setTimeout(res, 500));\n\n  jobContext.reportProgress(50, 'Fetching 50,000 records...');\n  await new Promise(res => setTimeout(res, 1000));\n\n  jobContext.reportProgress(90, 'Generating CSV spreadsheet...');\n  await new Promise(res => setTimeout(res, 500));\n\n  jobContext.reportProgress(100, 'Report generation completed!');\n  return { downloadUrl: '/downloads/report_2026.csv' };\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Blocking the Worker Thread with Synchronous Loops"
        }), ": Avoid running CPU-bound synchronous loops without yields. Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "await new Promise(res => setImmediate(res))"
        }), " in long loops to allow the Node.js event loop to process SSE event pushes."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Reconnection Handling"
        }), ": Frontend SSE ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "EventSource"
        }), " clients automatically attempt reconnection if network drops occur. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "JobsSchedulerSse"
        }), " buffers the last 10 log messages so reconnected clients resume without missing updates."]
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
17484(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/jobs","title":"Jobs Scheduler & SSE Stream","description":"JobsSchedulerSse combines asynchronous background worker execution with Server-Sent Events (SSE) to stream job progress, real-time log outputs, and execution status updates directly to frontend web applications.","source":"@site/docs/ferrox-node/docs/components/jobs.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/jobs","permalink":"/docs/ferrox-node/docs/components/jobs","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/jobs.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"jobs","title":"Jobs Scheduler & SSE Stream","sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Multi-Protocol Routing Engine & Dynamic Controllers","permalink":"/docs/ferrox-node/docs/components/routing"},"next":{"title":"Security Self-Test Auditor","permalink":"/docs/ferrox-node/docs/components/selftest"}}')

},

};
;