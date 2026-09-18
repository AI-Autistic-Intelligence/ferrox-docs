"use strict";
exports.ids = ["6333"];
exports.modules = {
24366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_intro_md_9f0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_intro_md_9f0_json__rspack_import_0 = __webpack_require__(26983);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'intro',
	title: 'Introduction & Node-Yalc Workspace Architecture',
	sidebar_position: 1
};
const contentTitle = 'Introduction & Node-Yalc Workspace Architecture';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. Workspace Package Taxonomy",
  "id": "2-workspace-package-taxonomy",
  "level": 2
}, {
  "value": "3. Core Architectural Philosophy",
  "id": "3-core-architectural-philosophy",
  "level": 2
}, {
  "value": "1. Framework Agnostic",
  "id": "1-framework-agnostic",
  "level": 3
}, {
  "value": "2. Zero-Copy High Performance",
  "id": "2-zero-copy-high-performance",
  "level": 3
}, {
  "value": "3. Pure TypeScript Integrity",
  "id": "3-pure-typescript-integrity",
  "level": 3
}, {
  "value": "4. Execution Sequence Flow",
  "id": "4-execution-sequence-flow",
  "level": 2
}, {
  "value": "5. Next Steps",
  "id": "5-next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "introduction--node-yalc-workspace-architecture",
        children: "Introduction & Node-Yalc Workspace Architecture"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Welcome to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Node-YALC"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "Node.js Yet Another Layer of Convenience"
      }), "), the foundational low-level package workspace providing non-framework-specific primitives, AWS serverless helpers, high-performance Pino loggers, standardized exception taxonomies, event buses, and utility routines for modern Node.js and TypeScript ecosystems."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["While ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc"
      }), " caters specifically to NestJS framework abstractions, enterprise architectures often consist of heterogeneous components: raw Fastify servers, Express gateways, AWS Lambda serverless functions, background CLI workers, and standalone scripts."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Node-YALC"
      }), " delivers pure JavaScript/TypeScript operational building blocks that operate independently of any web framework. It provides identical logging formats, error taxonomy, AWS SSM parameter caching, and concurrency workers across both serverless edge functions and monolithic Node.js containers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                              NODE-YALC MONOREPO WORKSPACE                              │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│  @node-yalc/logger  │  @node-yalc/errors  │  @node-yalc/aws-helpers  │  @node-yalc/utils │\n├─────────────────────┴─────────────────────┴──────────────────────────┴──────────────────┤\n│  @node-yalc/interfaces  │  @node-yalc/types  │  @node-yalc/types-extends  │  @node-yalc/common│\n└────────────────────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-workspace-package-taxonomy",
      children: "2. Workspace Package Taxonomy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Package"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Purpose & Functionality"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key Primitives"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/logger"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Structured JSON Logging"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-speed Pino logger, correlation ID bindings, redact rules."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/errors"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "System Error Taxonomy"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Base error classes (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "NotFoundException"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "SystemError"
            }), ")."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/aws-helpers"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "AWS Cloud Automation"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "SSM parameter decryption, S3 streaming uploads, Lambda adapters."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/event-manager"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Event Bus Architecture"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In-process EventEmitter2 bus with wildcard subscriptions."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/utils"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Async Queue & Object Tools"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "runConcurrently()"
            }), " queue, deep cloning, object sanitizers."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/common"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enums & Value Objects"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["System environment flags (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppEnvEnum"
            }), "), ISO currency & headers."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/interfaces"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shared Data Contracts"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "IServiceResponse<T>"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "IEventEnvelope<T>"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "IPaginatedResponse<T>"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/types"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Advanced Type Generics"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "DeepPartial<T>"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Nullable<T>"
            }), ", type-narrowing guard functions."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "@node-yalc/types-extends"
              })
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Global Module Augmentation"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Express/Fastify request property typing (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req.user"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req.correlationId"
            }), ")."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-core-architectural-philosophy",
      children: "3. Core Architectural Philosophy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-framework-agnostic",
      children: "1. Framework Agnostic"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Zero tight coupling to NestJS, Express, or Fastify. Libraries can be imported directly into AWS Lambda, Next.js, or plain Node.js scripts."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-zero-copy-high-performance",
      children: "2. Zero-Copy High Performance"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Powered by ultra-fast JSON serializers (Fast-Json-Stringify) and low-allocation memory structures to handle thousands of requests per second."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-pure-typescript-integrity",
      children: "3. Pure TypeScript Integrity"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Complete type inference for every single helper. Strict compiler flags enabled with zero implicit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "any"
      }), " fallbacks."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-execution-sequence-flow",
      children: "4. Execution Sequence Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Lambda as AWS Lambda / Serverless\n    participant SSM as AWS SSM Cache (aws-helpers)\n    participant Logger as YalcLogger\n    participant Queue as runConcurrently (utils)\n    participant S3 as Amazon S3 Destination\n\n    Lambda->>SSM: getSSMParameter('/prod/db/credentials', { ttl: 300 })\n    SSM-->>Lambda: Return Decrypted KMS String (Cached for 5m)\n    Lambda->>Logger: logger.info('Starting batch processing job', { correlationId })\n    Lambda->>Queue: runConcurrently(batchItems, uploadFn, { concurrency: 10 })\n    Queue->>S3: Upload Stream Stream 1..10\n    S3-->>Queue: Upload Acknowledgement\n    Queue-->>Lambda: Consolidate Settled Results\n    Lambda->>Logger: logger.info('Batch upload complete')\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-next-steps",
      children: "5. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Proceed to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/node-yalc/docs/quickstart",
          children: "Quickstart Guide"
        }), " to integrate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc"
        }), " into your Node.js application."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Browse detailed package documentation in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Workspace Packages"
        }), " sidebar section."]
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
26983(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/intro","title":"Introduction & Node-Yalc Workspace Architecture","description":"Welcome to Node-YALC (Node.js Yet Another Layer of Convenience), the foundational low-level package workspace providing non-framework-specific primitives, AWS serverless helpers, high-performance Pino loggers, standardized exception taxonomies, event buses, and utility routines for modern Node.js and TypeScript ecosystems.","source":"@site/docs/node-yalc/docs/intro.md","sourceDirName":"node-yalc/docs","slug":"/node-yalc/docs/intro","permalink":"/docs/node-yalc/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"intro","title":"Introduction & Node-Yalc Workspace Architecture","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/node-yalc/overview"},"next":{"title":"Quickstart Guide & Workspace Integration","permalink":"/docs/node-yalc/docs/quickstart"}}')

},

};
;