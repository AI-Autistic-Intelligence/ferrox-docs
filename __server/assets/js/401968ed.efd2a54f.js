"use strict";
exports.ids = ["7061"];
exports.modules = {
73411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_quickstart_md_401_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_quickstart_md_401_json__rspack_import_0 = __webpack_require__(28270);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'quickstart',
	title: 'Quickstart Guide & Workspace Integration',
	sidebar_position: 2
};
const contentTitle = 'Quickstart Guide & Workspace Integration';

const assets = {

};



const toc = [{
  "value": "1. Installation",
  "id": "1-installation",
  "level": 2
}, {
  "value": "2. Step 1: Initialize Structured Logger &amp; Correlation Tracking",
  "id": "2-step-1-initialize-structured-logger--correlation-tracking",
  "level": 2
}, {
  "value": "3. Step 2: Handle Errors with Standardized Taxonomy",
  "id": "3-step-2-handle-errors-with-standardized-taxonomy",
  "level": 2
}, {
  "value": "4. Step 3: Fetch Cached AWS SSM Parameters",
  "id": "4-step-3-fetch-cached-aws-ssm-parameters",
  "level": 2
}, {
  "value": "5. Step 4: Execute Throttled Concurrent Async Workers",
  "id": "5-step-4-execute-throttled-concurrent-async-workers",
  "level": 2
}, {
  "value": "6. Verification",
  "id": "6-verification",
  "level": 2
}, {
  "value": "7. Next Steps",
  "id": "7-next-steps",
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
        id: "quickstart-guide--workspace-integration",
        children: "Quickstart Guide & Workspace Integration"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This quickstart guide demonstrates how to install and integrate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Node-YALC"
      }), " packages into any Node.js application, serverless function, or backend service."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-installation",
      children: "1. Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Install individual ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc"
      }), " packages from your private Yalc registry or npm monorepo setup:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "# Core Utilities, Errors, and Logging\nnpm install @node-yalc/logger @node-yalc/errors @node-yalc/utils @node-yalc/common\n\n# AWS Cloud Automation Helpers\nnpm install @node-yalc/aws-helpers\n\n# Type Definitions & Contracts\nnpm install @node-yalc/interfaces @node-yalc/types @node-yalc/types-extends --save-dev\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-step-1-initialize-structured-logger--correlation-tracking",
      children: "2. Step 1: Initialize Structured Logger & Correlation Tracking"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Initialize the Pino-backed ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcLogger"
      }), " in your application entry point (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/index.ts"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { YalcLogger } from '@node-yalc/logger';\nimport { AppEnvEnum } from '@node-yalc/common';\n\nconst logger = new YalcLogger({\n  serviceName: 'order-processor',\n  environment: AppEnvEnum.PRODUCTION,\n  level: 'info',\n  redactPaths: ['req.headers.authorization', 'user.password', 'creditCard.cvv'],\n});\n\nlogger.info('Order Processor initialized successfully');\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-step-2-handle-errors-with-standardized-taxonomy",
      children: "3. Step 2: Handle Errors with Standardized Taxonomy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/errors"
      }), " to throw type-safe exceptions with structured error codes and HTTP status mappings:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { NotFoundError, BadRequestError } from '@node-yalc/errors';\n\nexport function processOrder(orderId: string, items: any[]) {\n  if (!orderId) {\n    throw new BadRequestError('Order ID must be specified', {\n      errorCode: 'ERR_ORDER_INVALID_ID',\n    });\n  }\n\n  const order = findOrder(orderId);\n  if (!order) {\n    throw new NotFoundError(`Order with ID ${orderId} does not exist`, {\n      errorCode: 'ERR_ORDER_NOT_FOUND',\n      context: { orderId },\n    });\n  }\n\n  return order;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-step-3-fetch-cached-aws-ssm-parameters",
      children: "4. Step 3: Fetch Cached AWS SSM Parameters"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/aws-helpers"
      }), " to retrieve encrypted parameters from AWS Systems Manager (SSM) with TTL memory caching:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { getSSMParameter } from '@node-yalc/aws-helpers';\n\nexport async function getDatabasePassword(): Promise<string> {\n  // Fetches from AWS SSM Parameter Store with KMS decryption\n  // Caches result in memory for 300 seconds (5 minutes)\n  const password = await getSSMParameter('/prod/database/password', {\n    decrypt: true,\n    ttlSeconds: 300,\n    region: 'us-east-1',\n  });\n\n  return password;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-step-4-execute-throttled-concurrent-async-workers",
      children: "5. Step 4: Execute Throttled Concurrent Async Workers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "runConcurrently()"
      }), " from ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/utils"
      }), " to process asynchronous jobs with strict concurrency limits:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { runConcurrently } from '@node-yalc/utils';\nimport { YalcLogger } from '@node-yalc/logger';\n\nconst logger = new YalcLogger({ serviceName: 'batch-worker' });\n\nasync function processOrderBatch(orderIds: string[]) {\n  logger.info(`Starting batch processing for ${orderIds.length} orders...`);\n\n  const results = await runConcurrently(\n    orderIds,\n    async (orderId) => {\n      logger.debug(`Processing order ${orderId}...`);\n      return await processOrderInDatabase(orderId);\n    },\n    {\n      concurrency: 5, // Maximum 5 simultaneous workers\n      stopOnError: false, // Continue executing remaining queue items on error\n    }\n  );\n\n  const succeeded = results.filter(r => r.status === 'fulfilled');\n  const failed = results.filter(r => r.status === 'rejected');\n\n  logger.info(`Batch processing completed. Succeeded: ${succeeded.length}, Failed: ${failed.length}`);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-verification",
      children: "6. Verification"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Run your entry script:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npx ts-node src/index.ts\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Inspect the structured JSON log output:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"level\": 30,\n  \"time\": 1726689600000,\n  \"pid\": 12345,\n  \"hostname\": \"worker-node-1\",\n  \"serviceName\": \"order-processor\",\n  \"environment\": \"production\",\n  \"msg\": \"Order Processor initialized successfully\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-next-steps",
      children: "7. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Explore deep package documentation for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/node-yalc/docs/packages/aws-helpers",
          children: "aws-helpers"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/node-yalc/docs/packages/logger",
          children: "logger"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/node-yalc/docs/packages/utils",
          children: "utils"
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
28270(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/quickstart","title":"Quickstart Guide & Workspace Integration","description":"This quickstart guide demonstrates how to install and integrate Node-YALC packages into any Node.js application, serverless function, or backend service.","source":"@site/docs/node-yalc/docs/quickstart.md","sourceDirName":"node-yalc/docs","slug":"/node-yalc/docs/quickstart","permalink":"/docs/node-yalc/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"quickstart","title":"Quickstart Guide & Workspace Integration","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction & Node-Yalc Workspace Architecture","permalink":"/docs/node-yalc/docs/intro"},"next":{"title":"Type Primitives, Utility Types & Type Guards","permalink":"/docs/node-yalc/docs/packages/types"}}')

},

};
;