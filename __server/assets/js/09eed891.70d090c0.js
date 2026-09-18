"use strict";
exports.ids = ["8243"];
exports.modules = {
62776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_queues_jobs_md_09e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_queues_jobs_md_09e_json__rspack_import_0 = __webpack_require__(72842);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 5
};
const contentTitle = '📬 Background Jobs & Worker Queues';

const assets = {

};



const toc = [{
  "value": "1. Defining a <code>Job</code>",
  "id": "1-defining-a-job",
  "level": 2
}, {
  "value": "2. Worker Processing Function",
  "id": "2-worker-processing-function",
  "level": 2
}, {
  "value": "3. Starting the Background Worker Engine",
  "id": "3-starting-the-background-worker-engine",
  "level": 2
}, {
  "value": "4. ✅ Best Practices",
  "id": "4--best-practices",
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
        id: "-background-jobs--worker-queues",
        children: "📬 Background Jobs & Worker Queues"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Long-running operations (PDF report compilation, video transcoding, external API syncs, batch emails) must never run inside HTTP request handlers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-jobs"
      }), ", integrating ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/geoffraey/apalis",
        children: "Apalis"
      }), " and Redis to manage persistent background job queues with automatic worker scaling and retries."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-defining-a-job",
      children: ["1. Defining a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Job"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Define your job payload struct implementing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "apalis::prelude::Job"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::{Deserialize, Serialize};\nuse apalis::prelude::*;\n\n#[derive(Debug, Deserialize, Serialize)]\npub struct ProcessVideoJob {\n    pub video_id: String,\n    pub storage_path: String,\n}\n\nimpl Job for ProcessVideoJob {\n    const NAME: &'static str = \"ferrox::ProcessVideoJob\";\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-worker-processing-function",
      children: "2. Worker Processing Function"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Write the asynchronous processing logic for the job:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use apalis::prelude::*;\n\npub async fn process_video_worker(job: ProcessVideoJob, _ctx: JobContext) -> Result<(), apalis::prelude::Error> {\n    println!(\"🎬 Worker starting video transcoding for ID: {}\", job.video_id);\n    \n    // Simulate long-running processing\n    tokio::time::sleep(std::time::Duration::from_secs(5)).await;\n    \n    println!(\"✅ Video processing complete!\");\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-starting-the-background-worker-engine",
      children: "3. Starting the Background Worker Engine"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Launch worker pools during ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.rs"
      }), " application startup:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_jobs::start_worker;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    // Start Redis worker pool with 4 concurrent worker threads\n    let redis_url = \"redis://127.0.0.1:6379\";\n    start_worker(redis_url).await?;\n\n    println!(\"⚡ Background Job Engine active!\");\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Set up dead-letter queues"
        }), ": Capture failed jobs after max retries so developers can inspect and replay problematic payloads."]
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
72842(module) {
module.exports = JSON.parse('{"id":"ferrox/architectures/queues-jobs","title":"📬 Background Jobs & Worker Queues","description":"Long-running operations (PDF report compilation, video transcoding, external API syncs, batch emails) must never run inside HTTP request handlers.","source":"@site/docs/ferrox/architectures/queues-jobs.md","sourceDirName":"ferrox/architectures","slug":"/ferrox/architectures/queues-jobs","permalink":"/docs/ferrox/architectures/queues-jobs","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/architectures/queues-jobs.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"📡 Event-Driven Architecture & Event Bus","permalink":"/docs/ferrox/architectures/events"},"next":{"title":"⏰ Cron Task Scheduling","permalink":"/docs/ferrox/architectures/task-scheduling"}}')

},

};
;