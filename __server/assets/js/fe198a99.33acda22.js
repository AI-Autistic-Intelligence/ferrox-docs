"use strict";
exports.ids = ["4366"];
exports.modules = {
3902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_interfaces_md_fe1_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_interfaces_md_fe1_json__rspack_import_0 = __webpack_require__(44708);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'interfaces',
	title: 'Core Framework Interfaces & DTO Signatures',
	sidebar_position: 8
};
const contentTitle = 'Core Framework Interfaces & DTO Signatures';

const assets = {

};



const toc = [{
  "value": "1. What It Is &amp; Architectural Purpose",
  "id": "1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "2. What It Does &amp; Key Capabilities",
  "id": "2-what-it-does--key-capabilities",
  "level": 2
}, {
  "value": "3. How It Works Under the Hood",
  "id": "3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "Framework Context Propagation",
  "id": "framework-context-propagation",
  "level": 3
}, {
  "value": "4. Why It Was Designed This Way",
  "id": "4-why-it-was-designed-this-way",
  "level": 2
}, {
  "value": "5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "5.1 Utilizing <code>IFerroxContext</code> in Domain Handlers",
  "id": "51-utilizing-iferroxcontext-in-domain-handlers",
  "level": 3
}, {
  "value": "6. Anti-Patterns: How NOT to Use It",
  "id": "6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "7. Pro-Tips &amp; Best Practices",
  "id": "7-pro-tips--best-practices",
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
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "core-framework-interfaces--dto-signatures",
        children: "Core Framework Interfaces & DTO Signatures"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " interfaces module exports all standard contract definitions, request lifecycle envelopes, authorization contexts, DTO validation signatures, and resilience options used throughout the Ferrox Node.js microservice architecture."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enterprise Node.js applications rely on standardized interface contracts to maintain loose coupling across core components (authentication guards, CQRS bus handlers, transport adapters, and background job runners). Without centralized type contracts, passing context objects across layers leads to type drift and runtime errors."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "interfaces"
      }), " module provides pure TypeScript type definitions that bind all ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " sub-components into a unified, type-safe framework."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        @ferrox/node Interfaces                         │\n├────────────────────────────────────────────────────────────────────────┤\n│  • IFerroxContext & IFerroxUser                                        │\n│  • IFerroxRequestEnvelope<T> & IFerroxResponseEnvelope<T>              │\n│  • ICommandBusOptions & IQueryBusOptions                               │\n│  • IJobDefinition<TData, TResult>                                      │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Shared Type Contracts\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ Ferrox Core Kernel   ││ Transports Engine    ││ Security & Auth      │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IFerroxContext"
          })
        }), ": Ambient execution context containing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "traceId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "tenantId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "logger"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IFerroxResponseEnvelope<T>"
          })
        }), ": Standardized HTTP/gRPC response structure (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{ success: boolean, data: T, meta: Record<string, any> }"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IJobDefinition<TData, TResult>"
          })
        }), ": Standardized background job definition for BullMQ / Redis queues."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IHealthCheckResult"
          })
        }), ": Standardized payload returned by Ferrox self-test diagnostic runners."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "framework-context-propagation",
      children: "Framework Context Propagation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Router as Transport Router\n    participant Context as IFerroxContext\n    participant Guard as Security Guard\n    participant Handler as Domain Controller\n\n    Router->>Context: Construct IFerroxContext (Extract JWT & Trace Headers)\n    Router->>Guard: Pass IFerroxContext to guard.canActivate()\n    Guard->>Context: Mutate context.user = AuthenticatedUser\n    Guard-->>Router: Grant Access\n    Router->>Handler: Invoke Method Handler(context, payload)\n    Handler-->>Router: Return IFerroxResponseEnvelope<T>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-why-it-was-designed-this-way",
      children: "4. Why It Was Designed This Way"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Loose Un-typed Objects"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Interface Contracts"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Refactoring Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["High risk of breaking property reads (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req.user_id"
            }), " vs ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req.userId"
            }), ")."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "IDE auto-completion & instant TS build checks."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Transport Portability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Code tied directly to Express ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Request"
            }), " object."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Protocol-agnostic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "IFerroxContext"
            }), " works across HTTP, WebSockets, Kafka."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "51-utilizing-iferroxcontext-in-domain-handlers",
      children: ["5.1 Utilizing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "IFerroxContext"
      }), " in Domain Handlers"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { IFerroxContext, IFerroxResponseEnvelope } from '@ferrox/node';\n\nexport interface UserDTO {\n  id: string;\n  name: string;\n  email: string;\n}\n\nexport async function getUserProfileHandler(\n  ctx: IFerroxContext,\n  userId: string,\n): Promise<IFerroxResponseEnvelope<UserDTO>> {\n  ctx.logger.info(`Fetching user profile for ${userId}`, { traceId: ctx.traceId });\n\n  const user: UserDTO = {\n    id: userId,\n    name: 'Alice Smith',\n    email: 'alice@example.com',\n  };\n\n  return {\n    success: true,\n    data: user,\n    meta: {\n      timestamp: new Date().toISOString(),\n      traceId: ctx.traceId,\n    },\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Mutating Raw Request Objects directly"
        }), "\nDo not bypass ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "IFerroxContext"
        }), " by attaching arbitrary properties to Express ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req"
        }), " or Fastify ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "reply"
        }), ". Always use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ctx.setLocal(key, val)"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Strong Generic Typing"
        }), "\nAlways parameterize ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "IFerroxResponseEnvelope<T>"
        }), " with your domain DTO to ensure downstream callers receive fully inferred response data shapes."]
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
44708(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/interfaces","title":"Core Framework Interfaces & DTO Signatures","description":"The @ferrox/node interfaces module exports all standard contract definitions, request lifecycle envelopes, authorization contexts, DTO validation signatures, and resilience options used throughout the Ferrox Node.js microservice architecture.","source":"@site/docs/ferrox-node/docs/components/interfaces.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/interfaces","permalink":"/docs/ferrox-node/docs/components/interfaces","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/interfaces.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"interfaces","title":"Core Framework Interfaces & DTO Signatures","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Security Guards, RBAC & Role Permission Engine","permalink":"/docs/ferrox-node/docs/components/guards"},"next":{"title":"Circuit Breaker, Singleflight & Resilience Patterns","permalink":"/docs/ferrox-node/docs/components/resilience"}}')

},

};
;