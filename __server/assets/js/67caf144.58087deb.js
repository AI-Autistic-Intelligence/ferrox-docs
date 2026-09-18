"use strict";
exports.ids = ["8986"];
exports.modules = {
13317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_cqrs_md_67c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_cqrs_md_67c_json__rspack_import_0 = __webpack_require__(18905);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'cqrs',
	title: 'CQRS & Saga Process Managers',
	sidebar_position: 4
};
const contentTitle = '🔄 CQRS & Saga Engine (CqrsSagaEngine)';

const assets = {

};



const toc = [{
  "value": "💡 1. What It Is &amp; Architectural Purpose",
  "id": "-1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "⚙️ 2. What It Does &amp; Key Features",
  "id": "️-2-what-it-does--key-features",
  "level": 2
}, {
  "value": "🔬 3. How It Works Under the Hood",
  "id": "-3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "Saga Distributed Transaction Lifecycle",
  "id": "saga-distributed-transaction-lifecycle",
  "level": 3
}, {
  "value": "🧠 4. Why It Was Designed This Way (Rationale vs Monolithic Transactions)",
  "id": "-4-why-it-was-designed-this-way-rationale-vs-monolithic-transactions",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "Command, Query &amp; Saga Implementation Example",
  "id": "command-query--saga-implementation-example",
  "level": 3
}, {
  "value": "⚠️ 6. Anti-Patterns: How NOT to Use It",
  "id": "️-6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "💡 7. Pro-Tips &amp; Best Practices",
  "id": "-7-pro-tips--best-practices",
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
    ol: "ol",
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
        id: "-cqrs--saga-engine-cqrssagaengine",
        children: ["🔄 CQRS & Saga Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "CqrsSagaEngine"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CqrsSagaEngine"
      }), " is the native Command-Query Responsibility Segregation (CQRS) and Saga orchestration engine built into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox-node/core"
      }), ". Its architectural purpose is to decouple read and write execution models in high-throughput applications and orchestrate complex, multi-step distributed transactions across microservices using compensating actions (Saga Pattern)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!NOTE]\nIn microservice architectures, traditional ACID database transactions across multiple databases lead to tight coupling and poor availability. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "CqrsSagaEngine"
        }), " implements eventually consistent distributed Sagas with automated compensating rollbacks."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Command Bus (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "CommandBus"
          }), ")"]
        }), ": Dispatches state-mutating commands to single-purpose command handlers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Query Bus (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "QueryBus"
          }), ")"]
        }), ": Dispatches non-mutating data queries to specialized query handlers optimized for read views."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Saga Orchestrator (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "SagaOrchestrator"
          }), ")"]
        }), ": Manages multi-step workflow states, executing compensation steps (rollback actions) if any step fails."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Event-Sourced Event Streams"
        }), ": Emits strongly-typed ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "DomainEvent"
        }), " instances for audit logging and asynchronous event propagation."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "saga-distributed-transaction-lifecycle",
      children: "Saga Distributed Transaction Lifecycle"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Start[\"Initiate Order Saga\"]\n    Step1[\"Step 1: Reserve Inventory (Success)\"]\n    Step2[\"Step 2: Charge Payment (Failure!)\"]\n    Compensate1[\"Compensate Step 1: Release Reserved Inventory\"]\n    Abort[\"Saga Rollback Completed (State Saved)\"]\n\n    Start --> Step1\n    Step1 --> Step2\n    Step2 -->|Failure Triggered| Compensate1\n    Compensate1 --> Abort\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Saga Step Execution"
        }), ": The orchestrator executes steps sequentially (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Step 1"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Step 2"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Step 3"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Compensation Stack"
        }), ": For every completed step, a compensating action (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ReleaseInventory"
        }), " for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ReserveInventory"
        }), ") is pushed onto a LIFO execution stack."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Rollback"
        }), ": If a step fails, the orchestrator pops and executes compensating actions in reverse order to return the system to a consistent state."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-rationale-vs-monolithic-transactions",
      children: "🧠 4. Why It Was Designed This Way (Rationale vs Monolithic Transactions)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🔄 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "CqrsSagaEngine"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🏛️ Monolithic 2PC (Two-Phase Commit)"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "System Availability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "High (Eventually Consistent)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Low (Blocking Lock Invocations)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Scales Read & Write Paths Independently"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Database Bottleneck on Shared Locks"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Fault Tolerance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automated LIFO Compensating Rollbacks"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Cascading Distributed Failures"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "command-query--saga-implementation-example",
      children: "Command, Query & Saga Implementation Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { CqrsSagaEngine, Command, Query, CommandHandler, QueryHandler } from '@ferrox-node/core';\n\n// 1. Define Command & Query DTOs\nexport class CreateOrderCommand implements Command<string> {\n  constructor(public readonly customerId: string, public readonly amount: number) {}\n}\n\nexport class GetOrderByIdQuery implements Query<any> {\n  constructor(public readonly orderId: string) {}\n}\n\n// 2. Define Handlers\n@CommandHandler(CreateOrderCommand)\nexport class CreateOrderHandler {\n  async execute(command: CreateOrderCommand): Promise<string> {\n    console.log(`[CQRS Write Path] Creating order for customer ${command.customerId}`);\n    return `order_${Date.now()}`;\n  }\n}\n\n@QueryHandler(GetOrderByIdQuery)\nexport class GetOrderByIdHandler {\n  async execute(query: GetOrderByIdQuery): Promise<any> {\n    console.log(`[CQRS Read Path] Fetching order view ${query.orderId}`);\n    return { orderId: query.orderId, status: 'CONFIRMED' };\n  }\n}\n\n// 3. Execution Example\nasync function runCqrsWorkflow() {\n  const engine = new CqrsSagaEngine();\n  \n  engine.registerCommandHandler(CreateOrderCommand, new CreateOrderHandler());\n  engine.registerQueryHandler(GetOrderByIdQuery, new GetOrderByIdHandler());\n\n  // Execute Command (Write Path)\n  const orderId = await engine.dispatchCommand(new CreateOrderCommand('cust-100', 250.00));\n  \n  // Execute Query (Read Path)\n  const orderView = await engine.dispatchQuery(new GetOrderByIdQuery(orderId));\n  console.log('Order Result:', orderView);\n}\n\nrunCqrsWorkflow().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Mutating System State inside Query Handlers"
        }), "\nQuery handlers must remain strictly side-effect free. Mutating database state or emitting domain state changes inside a QueryHandler breaks CQRS invariants."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Idempotent Compensating Actions"
        }), ": Always ensure compensating actions in Sagas (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "RefundPayment"
        }), ") are idempotent so they can be safely retried if network drops occur during rollback operations."]
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
18905(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/cqrs","title":"CQRS & Saga Process Managers","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/ferrox-node/docs/components/cqrs.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/cqrs","permalink":"/docs/ferrox-node/docs/components/cqrs","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/cqrs.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"cqrs","title":"CQRS & Saga Process Managers","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Dual Engine Transports (Fastify & Express)","permalink":"/docs/ferrox-node/docs/components/transports"},"next":{"title":"Data Grid Query Engine & Relational Transformers","permalink":"/docs/ferrox-node/docs/components/datagrid"}}')

},

};
;