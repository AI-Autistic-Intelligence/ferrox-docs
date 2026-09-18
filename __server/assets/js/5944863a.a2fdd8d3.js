"use strict";
exports.ids = ["2368"];
exports.modules = {
93886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_routing_md_594_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_routing_md_594_json__rspack_import_0 = __webpack_require__(71390);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'routing',
	title: 'Multi-Protocol Routing Engine & Dynamic Controllers',
	sidebar_position: 12
};
const contentTitle = 'Multi-Protocol Routing Engine & Dynamic Controllers';

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
  "value": "Request Routing &amp; Dispatch Mechanics",
  "id": "request-routing--dispatch-mechanics",
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
  "value": "5.1 Defining a Declarative Controller",
  "id": "51-defining-a-declarative-controller",
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
        id: "multi-protocol-routing-engine--dynamic-controllers",
        children: "Multi-Protocol Routing Engine & Dynamic Controllers"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " routing component provides an abstraction layer for defining REST endpoints, WebSockets channels, and RPC message handlers. It features automatic route registration, schema validation pipeline injection, rate-limiting parameter binding, and OpenAPI / Swagger spec generation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enterprise Node.js applications frequently expose API endpoints over multiple transport layers: HTTP REST APIs for public clients, WebSocket channels for real-time notifications, and gRPC / Kafka handlers for internal microservice RPC calls. Duplicate controller definitions across protocols lead to code fragmentation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "RoutingEngine"
      }), " in Ferrox Node abstracts protocol-specific transport layers. Developers write domain handlers using declarative decorators (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Get()"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Post()"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@MessagePattern()"
      }), "), and Ferrox registers them across Express, Fastify, WebSocket, or gRPC server adapters automatically."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        Ferrox RoutingEngine                            │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Declarative Decorators          │  Middleware & Validation Pipeline    │\n│  (@Get, @Post, @MessagePattern)  │  (Zod / Class-Validator / RateLimit)│\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ Multi-Protocol Route Dispatch\n            ┌────┴─────────────────┬──────────────────┴────┐\n            ▼                      ▼                       ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ Fastify / Express    ││ WebSockets (ws/socket)││ gRPC / Kafka Consumer│\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Unified Controller Decorators"
        }), ": Provide ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Controller()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Get()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Post()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Put()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Delete()"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Patch()"
        }), " decorators."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Protocol Agnostic Parameter Mapping"
        }), ": Extracts path parameters (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Param()"
        }), "), query parameters (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Query()"
        }), "), request body (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Body()"
        }), "), and context (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Context()"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Validation Pipe"
        }), ": Validates incoming payloads using Zod or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "class-validator"
        }), " schemas before reaching controller methods."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "OpenAPI / Swagger Generation"
        }), ": Automatically generates OpenAPI v3 JSON spec definitions directly from controller metadata decorators."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "request-routing--dispatch-mechanics",
      children: "Request Routing & Dispatch Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Client Request\n    participant Transport as Transport Adapter (Fastify)\n    participant Router as Ferrox RoutingEngine\n    participant Pipe as Validation Pipe\n    participant Controller as Domain Controller\n\n    Client->>Transport: HTTP POST /api/v1/users (JSON Body)\n    Transport->>Router: Match Route Path & Method\n    Router->>Pipe: Run Schema Validation (Zod / Class-Validator)\n    alt Payload Valid\n        Pipe-->>Router: Valid DTO Object\n        Router->>Controller: Invoke Method Handler(dto, context)\n        Controller-->>Router: Return Handler Result\n        Router-->>Transport: Format Standard Response Envelope\n        Transport-->>Client: 200 OK Response\n    else Payload Invalid\n        Pipe-->>Router: Throw ValidationError\n        Router-->>Transport: 400 Bad Request Response\n        Transport-->>Client: Deliver Error Payload JSON\n    end\n"
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
            children: "Standard Express Routing"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox RoutingEngine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Protocol Parity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Code bound to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "req"
            }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "res"
            }), " Express APIs."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Handlers receive protocol-agnostic DTO and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "IFerroxContext"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Validation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Manual validation checks inside every route handler."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automated validation pipe intercepts before controller execution."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Documentation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hand-written Swagger YAML files drift out of date."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Auto-generated OpenAPI spec directly from TS types & decorators."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-defining-a-declarative-controller",
      children: "5.1 Defining a Declarative Controller"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@ferrox/node';\nimport { AuthGuard } from '../guards/auth.guard';\n\nexport class CreateUserDto {\n  email!: string;\n  name!: string;\n}\n\n@Controller('/api/v1/users')\n@UseGuards(AuthGuard)\nexport class UserController {\n  @Get('/')\n  async listUsers(@Query('limit') limit: number = 10) {\n    return { users: [], limit };\n  }\n\n  @Get('/:id')\n  async getUserById(@Param('id') id: string) {\n    return { id, name: 'John Doe' };\n  }\n\n  @Post('/')\n  async createUser(@Body() dto: CreateUserDto) {\n    return { success: true, user: dto };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Direct Manipulation of Transport Reply Objects"
        }), "\nAvoid calling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "res.send()"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "reply.raw.write()"
        }), " inside controller methods. Always return plain objects or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "IFerroxResponseEnvelope"
        }), " to preserve multi-protocol transport portability."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Versioning Prefixing"
        }), "\nPass version prefixing to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@Controller('/api/v1/...')"
        }), " to maintain clean contract versioning when deploying updated microservice endpoints."]
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
71390(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/routing","title":"Multi-Protocol Routing Engine & Dynamic Controllers","description":"The @ferrox/node routing component provides an abstraction layer for defining REST endpoints, WebSockets channels, and RPC message handlers. It features automatic route registration, schema validation pipeline injection, rate-limiting parameter binding, and OpenAPI / Swagger spec generation.","source":"@site/docs/ferrox-node/docs/components/routing.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/routing","permalink":"/docs/ferrox-node/docs/components/routing","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/routing.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"routing","title":"Multi-Protocol Routing Engine & Dynamic Controllers","sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Internationalization (I18n)","permalink":"/docs/ferrox-node/docs/components/i18n"},"next":{"title":"Jobs Scheduler & SSE Stream","permalink":"/docs/ferrox-node/docs/components/jobs"}}')

},

};
;