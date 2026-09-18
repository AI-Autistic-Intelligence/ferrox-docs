"use strict";
exports.ids = ["9782"];
exports.modules = {
5953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_event_manager_md_86c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_event_manager_md_86c_json__rspack_import_0 = __webpack_require__(27662);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'event-manager',
	title: 'In-Memory & Distributed Event Manager',
	sidebar_position: 11
};
const contentTitle = 'In-Memory & Distributed Event Manager';

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
  "value": "Event Processing Pipeline",
  "id": "event-processing-pipeline",
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
  "value": "5.1 Registering Event Manager Module",
  "id": "51-registering-event-manager-module",
  "level": 3
}, {
  "value": "5.2 Emitting Domain Events",
  "id": "52-emitting-domain-events",
  "level": 3
}, {
  "value": "5.3 Subscribing to Events",
  "id": "53-subscribing-to-events",
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
        id: "in-memory--distributed-event-manager",
        children: "In-Memory & Distributed Event Manager"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/event-manager"
      }), " package provides a unified event bus for NestJS microservices. It bridges local, process-level event emitters (built on Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "EventEmitter2"
      }), ") with external distributed messaging brokers (such as Apache Kafka and RabbitMQ), providing transactional event delivery, wildcard topic subscriptions, and type-safe payload dispatches."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Decoupled domain architectures rely on domain events (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "UserCreatedEvent"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "OrderPaidEvent"
      }), ") to trigger side effects without creating hard dependencies between modules. However, microservices often struggle with choosing between local in-process events (fast, non-persistent) and distributed message queues (durable, cross-service)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nestjs-yalc/event-manager"
      }), " unifies local and distributed event processing under a single interface. Developers emit events without caring whether the handler is executed in the same process thread or consumed by another service via Kafka."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        YalcEventManager                                │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Local EventEmitter2             │  External Distributed Bridge        │\n│  (In-Process Synchronous/Async) │  (Kafka / RabbitMQ Broker)          │\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │                                    │\n                 ▼                                    ▼\n┌─────────────────────────────────┐  ┌──────────────────────────────────┐\n│ Local Subscriptions             │  │ External Microservices           │\n│ (@OnEvent('user.created'))      │  │ (Topic: 'events.user.created')   │\n└─────────────────────────────────┘  └──────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Unified Dispatch Interface"
        }), ": Single ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "eventManager.emit()"
        }), " method handles both local micro-tasks and distributed Kafka events."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Wildcard Topic Patterns"
        }), ": Supports hierarchical event namespaces (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "order.*"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user.created.**"
        }), ") powered by EventEmitter2."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Transactional Event Outbox"
        }), ": Integrates with TypeORM database transactions to ensure events are only dispatched if the DB commit succeeds."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Type-Safe Payload Schemas"
        }), ": Validates event payload DTOs at runtime before emitting to event consumers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "event-processing-pipeline",
      children: "Event Processing Pipeline"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant App as Application Service\n    participant Manager as YalcEventManager\n    participant LocalBus as EventEmitter2\n    participant Outbox as Transactional Outbox\n    participant Broker as Kafka Broker\n\n    App->>Manager: emit('user.created', payload, { transactional: true })\n    alt Inside Database Transaction\n        Manager->>Outbox: Save Event Record to DB Outbox Table\n        Outbox-->>Manager: Transaction Committed\n        Manager->>Broker: Publish Message to Kafka Topic\n    else Process-Local Event\n        Manager->>LocalBus: emitAsync('user.created', payload)\n        LocalBus->>LocalBus: Execute Local Subscriber Handlers\n    end\n    Manager-->>App: Event Emission Acknowledged\n"
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
            children: "Standard EventEmitter2"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "@nestjs-yalc/event-manager"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Process-local memory only."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hybrid (Local in-process + Cross-service Kafka/AMQP)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unhandled listener errors crash thread or drop silent."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Outbox pattern prevents lost events on process crashes."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Simple async array iterations."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Strict partition key hashing for guaranteed FIFO event streams."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-registering-event-manager-module",
      children: "5.1 Registering Event Manager Module"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { EventManagerModule } from '@nestjs-yalc/event-manager';\nimport { UserCreatedHandler } from './user-created.handler';\n\n@Module({\n  imports: [\n    EventManagerModule.forRoot({\n      wildcard: true,\n      delimiter: '.',\n      maxListeners: 20,\n      verboseMemoryLeak: true,\n    }),\n  ],\n  providers: [UserCreatedHandler],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-emitting-domain-events",
      children: "5.2 Emitting Domain Events"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { YalcEventManager } from '@nestjs-yalc/event-manager';\nimport { UserCreatedEvent } from './events/user-created.event';\n\n@Injectable()\nexport class UserService {\n  constructor(private readonly eventManager: YalcEventManager) {}\n\n  async registerUser(email: string): Promise<void> {\n    const user = { id: 'usr_123', email };\n\n    // Emit event across both local subscribers and distributed queues\n    await this.eventManager.emit('user.registered', new UserCreatedEvent(user.id, user.email));\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "53-subscribing-to-events",
      children: "5.3 Subscribing to Events"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { OnEvent } from '@nestjs-yalc/event-manager';\nimport { UserCreatedEvent } from './events/user-created.event';\n\n@Injectable()\nexport class NotificationService {\n  @OnEvent('user.registered', { async: true })\n  async handleUserRegistered(event: UserCreatedEvent): Promise<void> {\n    console.log(`Sending welcome email to ${event.email}`);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Heavy Blocking Code in Synchronous Event Listeners"
        }), "\nExecuting CPU-intensive tasks or synchronous DB calls inside non-async ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@OnEvent()"
        }), " handlers blocks the emitting service's request cycle. Always specify ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{ async: true }"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Strict Namespaces"
        }), "\nStandardize event names using domain dot-notation (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "domain.entity.action"
        }), ", e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "billing.invoice.paid"
        }), ") to allow wildcard wildcard sub-group matching."]
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
27662(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/event-manager","title":"In-Memory & Distributed Event Manager","description":"The @nestjs-yalc/event-manager package provides a unified event bus for NestJS microservices. It bridges local, process-level event emitters (built on Node.js EventEmitter2) with external distributed messaging brokers (such as Apache Kafka and RabbitMQ), providing transactional event delivery, wildcard topic subscriptions, and type-safe payload dispatches.","source":"@site/docs/nestjs-yalc/docs/modules/event-manager.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/event-manager","permalink":"/docs/nestjs-yalc/docs/modules/event-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/event-manager.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"event-manager","title":"In-Memory & Distributed Event Manager","sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/errors","permalink":"/docs/nestjs-yalc/docs/modules/errors"},"next":{"title":"GraphQL Field Middleware & Dynamic Property Transformers","permalink":"/docs/nestjs-yalc/docs/modules/field-middleware"}}')

},

};
;