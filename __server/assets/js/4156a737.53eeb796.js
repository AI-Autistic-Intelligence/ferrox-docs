"use strict";
exports.ids = ["554"];
exports.modules = {
15265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_kafka_md_415_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_modules_kafka_md_415_json__rspack_import_0 = __webpack_require__(65299);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'kafka',
	title: '@nest-yalc-2/kafka',
	sidebar_position: 7
};
const contentTitle = '📬 KafkaJS & Schema Registry Integration (@nest-yalc-2/kafka)';

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
  "value": "📊 Architectural Comparison: <code>@nest-yalc-2/kafka</code> vs Standard NestJS Microservices",
  "id": "-architectural-comparison-nest-yalc-2kafka-vs-standard-nestjs-microservices",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Registering Kafka Module in <code>AppModule</code>",
  "id": "1-registering-kafka-module-in-appmodule",
  "level": 3
}, {
  "value": "2. Producing Schema-Validated Events",
  "id": "2-producing-schema-validated-events",
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
        id: "-kafkajs--schema-registry-integration-nest-yalc-2kafka",
        children: ["📬 KafkaJS & Schema Registry Integration (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/kafka"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/kafka"
      }), " provides production-grade event streaming for NestJS 11+. It wraps ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "KafkaJS"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@kafkajs/confluent-schema-registry"
      }), ", enabling strongly-typed, schema-validated message producing and consuming across distributed microservices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Confluent Schema Registry Support"
        }), ": Automatically serializes and deserializes message payloads using Avro, JSON Schema, or Protobuf schemas stored in Confluent Schema Registry."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Consumer Group Management"
        }), ": Auto-rebalancing consumer group runners with exponential backoff retries and Dead Letter Queue (DLQ) routing."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Producer Connection Pool"
        }), ": High-performance idempotent Kafka producer with message batching and snappy/gzip compression."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Trace Correlation Header Injection"
        }), ": Automatically attaches ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Request-Id"
        }), " and OpenTelemetry ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "traceparent"
        }), " headers into Kafka message headers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Producer[\"NestJS Microservice (Producer)\"]\n    SchemaReg[\"Confluent Schema Registry\"]\n    KafkaCluster[\"Kafka Cluster (Topic: order-events)\"]\n    ConsumerGroup[\"Consumer Group (order-consumer-group)\"]\n    DLQ[\"Dead Letter Queue (order-events-dlq)\"]\n\n    Producer -->|1. Fetch/Validate Schema| SchemaReg\n    Producer -->|2. Produce Avro Message| KafkaCluster\n    KafkaCluster --> ConsumerGroup\n    ConsumerGroup -->|Processing Succeeded| CommitOffset[\"Commit Offset\"]\n    ConsumerGroup -->|Max Retries Failed| DLQ\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-nest-yalc-2kafka-vs-standard-nestjs-microservices",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/kafka"
      }), " vs Standard NestJS Microservices"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["📬 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@nest-yalc-2/kafka"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 NestJS Microservice Kafka Transport"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Confluent Schema Registry"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native Avro / JSON Schema Validation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Not Supported (Raw Unvalidated JSON)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Dead Letter Queue (DLQ)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automated DLQ Router on Failures"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Error Catching & Routing"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Trace Correlation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automatic W3C Trace Parent Header Injection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual Header Parsing"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-registering-kafka-module-in-appmodule",
      children: ["1. Registering Kafka Module in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcKafkaModule } from '@nest-yalc-2/kafka';\n\n@Module({\n  imports: [\n    YalcKafkaModule.forRoot({\n      clientId: 'order-service',\n      brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),\n      schemaRegistry: {\n        host: process.env.SCHEMA_REGISTRY_URL || 'http://localhost:8081',\n      },\n      consumer: {\n        groupId: 'order-processor-group',\n      },\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-producing-schema-validated-events",
      children: "2. Producing Schema-Validated Events"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { YalcKafkaProducer } from '@nest-yalc-2/kafka';\n\n@Injectable()\nexport class OrderEventPublisher {\n  constructor(private readonly kafkaProducer: YalcKafkaProducer) {}\n\n  async publishOrderCreated(orderId: string, amount: number): Promise<void> {\n    await this.kafkaProducer.emit('order-events', {\n      key: orderId,\n      value: {\n        orderId,\n        amount,\n        status: 'CREATED',\n        timestamp: Date.now(),\n      },\n      schemaName: 'OrderCreatedEventSchema',\n    });\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Blocking the Kafka Consumer Event Loop"
        }), ": Executing heavy synchronous computations or un-batched database queries inside a Kafka message handler will delay heartbeat responses (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "session.timeout.ms"
        }), "), causing Kafka to consider the consumer dead and trigger cascading rebalances."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Idempotent Consumers"
        }), ": Ensure consumer handlers check if an event ID has already been processed using Redis or an audit table to handle potential duplicate message deliveries gracefully."]
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
65299(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/modules/kafka","title":"@nest-yalc-2/kafka","description":"@nest-yalc-2/kafka provides production-grade event streaming for NestJS 11+. It wraps KafkaJS and @kafkajs/confluent-schema-registry, enabling strongly-typed, schema-validated message producing and consuming across distributed microservices.","source":"@site/docs/nestjs-yalc/docs/modules/kafka.md","sourceDirName":"nestjs-yalc/docs/modules","slug":"/nestjs-yalc/docs/modules/kafka","permalink":"/docs/nestjs-yalc/docs/modules/kafka","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/modules/kafka.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"kafka","title":"@nest-yalc-2/kafka","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"@nest-yalc-2/sentinel","permalink":"/docs/nestjs-yalc/docs/modules/sentinel"},"next":{"title":"@nest-yalc-2/audit","permalink":"/docs/nestjs-yalc/docs/modules/audit"}}')

},

};
;