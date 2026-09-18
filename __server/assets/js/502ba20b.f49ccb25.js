"use strict";
exports.ids = ["348"];
exports.modules = {
50082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_interfaces_md_502_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_interfaces_md_502_json__rspack_import_0 = __webpack_require__(24865);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'interfaces',
	title: 'Core Interfaces, Generic DTO Contracts & Envelopes',
	sidebar_position: 2
};
const contentTitle = 'Core Interfaces, Generic DTO Contracts & Envelopes';

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
  "value": "Data Contract Flow across Microservices",
  "id": "data-contract-flow-across-microservices",
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
  "value": "5.1 Implementing Standard Service Response Envelope",
  "id": "51-implementing-standard-service-response-envelope",
  "level": 3
}, {
  "value": "5.2 CloudEvents Event Envelope Signature",
  "id": "52-cloudevents-event-envelope-signature",
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
        id: "core-interfaces-generic-dto-contracts--envelopes",
        children: "Core Interfaces, Generic DTO Contracts & Envelopes"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/interfaces"
      }), " package defines the contract interfaces, generic pagination containers, event envelope structures, logger definitions, and API transport schemas shared across all Node.js and TypeScript services."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Interface segregation is a fundamental principle of clean architecture. When microservices communicate across HTTP REST, GraphQL, or Kafka message brokers, they must share strongly typed data shapes (DTOs, error objects, user context payloads) without incurring code execution overhead or introducing circular dependencies."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/interfaces"
      }), " provides a pure TypeScript type definition layer (zero JavaScript output at runtime). It serves as the single source of truth for all data transfer object contracts across the YALC ecosystem."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        @node-yalc/interfaces                           │\n├────────────────────────────────────────────────────────────────────────┤\n│  • IServiceResponse<T> & IPaginatedResponse<T>                         │\n│  • IEventEnvelope<T> & IEventHeaders                                   │\n│  • IRequestContext & IUserPayload                                      │\n│  • ILoggerOptions & ILogEntry                                          │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Pure TS Interfaces (Zero Bundle Size)\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ NestJS Microservices ││ Serverless Lambdas   ││ React Web Clients    │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IServiceResponse<T>"
          })
        }), ": Standard response envelope interface containing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "statusCode"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "success"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "data"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "errors"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "timestamp"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IPaginatedResponse<T>"
          })
        }), ": Standardized pagination structure featuring ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "items"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "total"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "page"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "limit"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "totalPages"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hasNextPage"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hasPreviousPage"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IEventEnvelope<T>"
          })
        }), ": Generic CloudEvents-compliant message format for Kafka/RabbitMQ events containing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "eventId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "eventType"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "correlationId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "timestamp"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "data"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "IRequestContext"
          })
        }), ": Ambient user identity contract containing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "userId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "tenantId"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "roles"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ipAddress"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "correlationId"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "data-contract-flow-across-microservices",
      children: "Data Contract Flow across Microservices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Producer as Producer Service\n    participant Contract as IEventEnvelope<T>\n    participant Broker as Kafka / Transport\n    participant Consumer as Consumer Service\n\n    Producer->>Contract: Instantiate Payload matching IEventEnvelope<UserDTO>\n    Producer->>Broker: Send Serialized JSON Payload\n    Broker->>Consumer: Receive Event Message\n    Consumer->>Contract: Validate against IEventEnvelope<UserDTO>\n    Consumer->>Consumer: Extract correlationId & userContext safely\n"
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
            children: "Feature"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Duplicate Local Interfaces"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@node-yalc/interfaces Package"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Drift Risk"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High. Changes in API payload break client code silently."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zero drift. Compiler catches breaking property changes immediately."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Runtime Overhead"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Imports include bloated JS helper classes."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 KB runtime overhead. Completely stripped during TS compilation."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Cross-Platform"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tied to Node.js backend modules."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reusable in Node.js, Web Browsers, React Native, and Edge Workers."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-implementing-standard-service-response-envelope",
      children: "5.1 Implementing Standard Service Response Envelope"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { IServiceResponse, IPaginatedResponse } from '@node-yalc/interfaces';\n\nexport interface UserDto {\n  id: string;\n  email: string;\n  role: string;\n}\n\nexport async function fetchUsersList(\n  page: number,\n  limit: number,\n): Promise<IServiceResponse<IPaginatedResponse<UserDto>>> {\n  const users: UserDto[] = [\n    { id: '1', email: 'admin@example.com', role: 'ADMIN' },\n  ];\n\n  return {\n    statusCode: 200,\n    success: true,\n    data: {\n      items: users,\n      total: 1,\n      page,\n      limit,\n      totalPages: 1,\n      hasNextPage: false,\n      hasPreviousPage: false,\n    },\n    timestamp: new Date().toISOString(),\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-cloudevents-event-envelope-signature",
      children: "5.2 CloudEvents Event Envelope Signature"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { IEventEnvelope } from '@node-yalc/interfaces';\n\nexport interface UserRegisteredPayload {\n  userId: string;\n  email: string;\n}\n\nexport function createRegistrationEvent(\n  payload: UserRegisteredPayload,\n  correlationId: string,\n): IEventEnvelope<UserRegisteredPayload> {\n  return {\n    eventId: 'evt_' + Math.random().toString(36).substring(2, 9),\n    eventType: 'user.registered.v1',\n    correlationId,\n    source: 'user-service',\n    timestamp: new Date().toISOString(),\n    data: payload,\n  };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Adding Executable Code to Interfaces Package"
        }), "\nNever place concrete JavaScript classes or executable functions inside ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/interfaces"
        }), ". It must remain a pure interface/type declaration package."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Re-exporting from Shared Libraries"
        }), "\nRe-export ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/interfaces"
        }), " from your monorepo's shared SDKs to ensure frontend clients share identical response types."]
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
24865(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/interfaces","title":"Core Interfaces, Generic DTO Contracts & Envelopes","description":"The @node-yalc/interfaces package defines the contract interfaces, generic pagination containers, event envelope structures, logger definitions, and API transport schemas shared across all Node.js and TypeScript services.","source":"@site/docs/node-yalc/docs/packages/interfaces.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/interfaces","permalink":"/docs/node-yalc/docs/packages/interfaces","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/interfaces.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"interfaces","title":"Core Interfaces, Generic DTO Contracts & Envelopes","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Type Primitives, Utility Types & Type Guards","permalink":"/docs/node-yalc/docs/packages/types"},"next":{"title":"@node-yalc/logger","permalink":"/docs/node-yalc/docs/packages/logger"}}')

},

};
;