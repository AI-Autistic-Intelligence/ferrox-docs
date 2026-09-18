"use strict";
exports.ids = ["6541"];
exports.modules = {
98281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_api_strategy_md_225_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_api_strategy_md_225_json__rspack_import_0 = __webpack_require__(21482);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'api-strategy',
	title: 'API Strategy, Multi-Protocol Adapters & Contract Versioning',
	sidebar_position: 9
};
const contentTitle = 'API Strategy, Multi-Protocol Adapters & Contract Versioning';

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
  "value": "Request Pipeline Sequence",
  "id": "request-pipeline-sequence",
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
  "value": "5.1 Standard REST Controller with Unified Response Envelope",
  "id": "51-standard-rest-controller-with-unified-response-envelope",
  "level": 3
}, {
  "value": "5.2 Multi-Protocol Service Handler Example",
  "id": "52-multi-protocol-service-handler-example",
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
        id: "api-strategy-multi-protocol-adapters--contract-versioning",
        children: "API Strategy, Multi-Protocol Adapters & Contract Versioning"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/api-strategy"
      }), " package enforces standardized API design paradigms across REST, GraphQL, and Messaging protocols. It provides multi-protocol controller abstractions, automated URI versioning strategies, uniform response payload wrapping, and content-negotiation adapters."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In complex microservice ecosystems, frontends and third-party integrations interact with backend services across multiple protocols (REST endpoints, GraphQL queries/mutations, gRPC calls, and Kafka/RabbitMQ events). Without a unified API strategy, response formats become fragmented, error payloads vary per protocol, and breaking API changes disrupt client compatibility."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/api-strategy"
      }), " provides a cohesive architectural abstraction layer. It ensures that regardless of whether a controller method is invoked via HTTP GET, GraphQL Query, or AMQP Message, the incoming DTO validation, context propagation, error mapping, and response envelopes follow identical enterprise standards."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "                               ┌─────────────────────────────┐\n                               │  @nestjs-yalc/api-strategy  │\n                               └──────────────┬──────────────┘\n                                              │\n           ┌──────────────────────────────────┼──────────────────────────────────┐\n           │                                  │                                  │\n           ▼                                  ▼                                  ▼\n┌─────────────────────┐            ┌─────────────────────┐            ┌─────────────────────┐\n│  REST API Adapter   │            │ GraphQL API Adapter │            │  Event API Adapter  │\n│  (/api/v1/users)    │            │ (Queries/Mutations) │            │ (Kafka / RabbitMQ)  │\n└─────────────────────┘            └─────────────────────┘            └─────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Unified Response Envelopes"
        }), ": Wraps all API responses in standardized ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{ statusCode, success, data, errors, meta }"
        }), " payloads."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "URI & Header Versioning"
        }), ": Provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@ApiVersion('v1')"
        }), " decorators supporting URI path versioning (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/v1/..."
        }), "), header versioning (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "x-api-version"
        }), "), and media-type negotiation."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Multi-Protocol Controller Decorators"
        }), ": Provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@YalcController()"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@YalcResolver()"
        }), " decorators that automatically attach correlation context and rate-limiting rules."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pagination & Sorting Normalization"
        }), ": Standardizes request DTO contracts for limit/page offset and cursor-based pagination parameters."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "request-pipeline-sequence",
      children: "Request Pipeline Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Client App\n    participant Strategy as ApiStrategyInterceptor\n    participant Controller as ApiController\n    participant Transformer as ResponseEnvelopeTransformer\n    participant Out as Standard Response\n\n    Client->>Strategy: Incoming Request (REST / GraphQL / Event)\n    Strategy->>Strategy: Extract API Version & Request Context\n    Strategy->>Controller: Route to Target Method Handler\n    Controller->>Strategy: Return Domain Entity / DTO\n    Strategy->>Transformer: Transform to Standard Envelope Structure\n    Transformer->>Out: Return { success: true, data: [...], meta: {...} }\n    Out-->>Client: Delivery across Transport Channel\n"
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
            children: "Metric / Scenario"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard NestJS Rest"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@nestjs-yalc/api-strategy"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Response Uniformity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Controllers return raw arrays or plain objects inconsistently."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Every response is wrapped in a type-safe ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "{ success, data, meta }"
            }), " envelope."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Protocol Parity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "REST and GraphQL controllers require duplicate mapping logic."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shared domain handler logic across REST, GraphQL, and RPC transports."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "API Deprecation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hardcoded route strings break when upgrading API major versions."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Automated path/header version resolution with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@ApiVersion()"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-standard-rest-controller-with-unified-response-envelope",
      children: "5.1 Standard REST Controller with Unified Response Envelope"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Controller, Get, Param, Query } from '@nestjs/common';\nimport { ApiVersion, YalcController, ResponseEnvelope } from '@nestjs-yalc/api-strategy';\nimport { UserService } from './user.service';\nimport { UserDto } from './user.dto';\n\n@YalcController({ path: 'users', version: '1' })\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @Get(':id')\n  @ApiVersion('1')\n  async getUserById(@Param('id') id: string): Promise<ResponseEnvelope<UserDto>> {\n    const user = await this.userService.findById(id);\n    return ResponseEnvelope.success(user, { cached: true });\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-multi-protocol-service-handler-example",
      children: "5.2 Multi-Protocol Service Handler Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { BaseApiStrategyService, PaginationDto } from '@nestjs-yalc/api-strategy';\nimport { UserEntity } from './user.entity';\n\n@Injectable()\nexport class UserApiStrategyService extends BaseApiStrategyService<UserEntity> {\n  async fetchPaginatedUsers(pagination: PaginationDto) {\n    const [data, total] = await this.repository.findAndCount({\n      skip: pagination.skip,\n      take: pagination.take,\n    });\n\n    return this.createPaginatedResponse(data, total, pagination);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Returning Naked Objects in Controllers"
        }), "\nBypassing the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ResponseEnvelope"
        }), " wrapper by returning raw database entities exposes internal DB schemas directly to clients and breaks client SDK deserializers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ❌ WRONG: Naked entity return\n@Get()\nasync getUsers() { return this.userRepository.find(); }\n\n// ✅ CORRECT: Wrapped in ResponseEnvelope\n@Get()\nasync getUsers() {\n  const users = await this.userRepository.find();\n  return ResponseEnvelope.success(users);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Automated Swagger Schema Generation"
        }), "\nWhen using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@YalcController()"
        }), ", OpenApi schema documentation is automatically generated for both successful payload envelopes and standardized error models."]
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
21482(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/api-strategy","title":"API Strategy, Multi-Protocol Adapters & Contract Versioning","description":"The @nestjs-yalc/api-strategy package enforces standardized API design paradigms across REST, GraphQL, and Messaging protocols. It provides multi-protocol controller abstractions, automated URI versioning strategies, uniform response payload wrapping, and content-negotiation adapters.","source":"@site/docs/nestjs-yalc/docs/modules/api-strategy.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/api-strategy","permalink":"/docs/nestjs-yalc/docs/modules/api-strategy","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/api-strategy.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"api-strategy","title":"API Strategy, Multi-Protocol Adapters & Contract Versioning","sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/audit","permalink":"/docs/nestjs-yalc/docs/modules/audit"},"next":{"title":"@nest-yalc-2/errors","permalink":"/docs/nestjs-yalc/docs/modules/errors"}}')

},

};
;