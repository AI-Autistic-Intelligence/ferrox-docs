"use strict";
exports.ids = ["7012"];
exports.modules = {
51982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_sse_md_4d2_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_sse_md_4d2_json__rspack_import_0 = __webpack_require__(65444);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'sse',
	title: 'Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting',
	sidebar_position: 4
};
const contentTitle = 'Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting';

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
  "value": "SSE Streaming &amp; Reconnect Mechanics",
  "id": "sse-streaming--reconnect-mechanics",
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
  "value": "5.1 Implementing an SSE Endpoint in Rust",
  "id": "51-implementing-an-sse-endpoint-in-rust",
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
        id: "server-sent-events-sse-event-streams--real-time-broadcasting",
        children: "Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-sse"
      }), " crate provides real-time Server-Sent Events (SSE) streaming for Rust web applications. It features Tokio broadcast channels, client connection heartbeats, event ID reconnect resumes, and low-latency HTTP/2 event streaming."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Real-time notification feeds, live financial ticker updates, and streaming AI model responses (LLM text token generation) require unidirectional server-to-client event streaming without the overhead or complexity of full bi-directional WebSockets."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-sse"
      }), " implements native Server-Sent Events (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "text/event-stream"
      }), "). It leverages Tokio channels to broadcast live event streams to thousands of concurrent HTTP clients with zero memory buffer bloat."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                          ferrox-sse Engine                             │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Tokio Broadcast Event Stream    │  SSE Protocol Formatter             │\n│  • Keep-Alive Heartbeat Timer    │  • id, event, data, retry formatting│\n│  • Last-Event-ID Resume Engine   │  • Zero-Copy Bytes Array Buffer     │\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ HTTP/1.1 & HTTP/2 Event Stream\n                 ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                        Browser EventSource API                         │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "W3C Standard SSE Compliance"
        }), ": Formats SSE event fields (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "event"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "data"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "retry"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "comment"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Last-Event-ID"
          }), " Reconnect Support"]
        }), ": Allows reconnecting clients to resume event streams from their last processed event ID."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated Keep-Alive Heartbeats"
        }), ": Sends periodic ping comments (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ": heartbeat"
        }), ") to keep HTTP connections alive through proxies and load balancers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Tokio Channel Broadcaster"
        }), ": Broadcasts single event emissions to thousands of subscribed client streams simultaneously."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "sse-streaming--reconnect-mechanics",
      children: "SSE Streaming & Reconnect Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Browser EventSource\n    participant Endpoint as Ferrox SSE Endpoint\n    participant Channel as Tokio Broadcast Channel\n    participant App as Background Publisher\n\n    Client->>Endpoint: HTTP GET /api/v1/events/stream (Header: Accept: text/event-stream)\n    Endpoint->>Channel: Subscribe Stream Channel Receiver\n    Endpoint-->>Client: HTTP 200 OK (Content-Type: text/event-stream)\n    App->>Channel: Broadcast Event (\"ticker_update\", { price: 150.25 })\n    Channel->>Endpoint: Receive Event Data\n    Endpoint-->>Client: Format SSE Text \"event: ticker\\ndata: { price: 150.25 }\\n\\n\"\n    Note over Client, Endpoint: Proxy drops connection...\n    Client->>Endpoint: HTTP GET /api/v1/events/stream (Header: Last-Event-ID: \"evt_100\")\n    Endpoint->>Endpoint: Replay missed events starting after \"evt_100\"\n    Endpoint-->>Client: Resume Stream\n"
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
            children: "Bi-Directional WebSockets"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Server-Sent Events (SSE)"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Protocol Overhead"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Custom WS handshake, ping/pong frames, framing overhead."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Standard HTTP GET request. Firewall & HTTP/2 friendly."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Reconnection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Requires custom client JS reconnection logic."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Native browser ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "EventSource"
            }), " auto-reconnects out of the box."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Simplicity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Complex bi-directional protocol handling."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Simple unidirectional server-to-client event stream."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-implementing-an-sse-endpoint-in-rust",
      children: "5.1 Implementing an SSE Endpoint in Rust"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_sse::{SseStream, Event};\nuse futures_util::stream::Stream;\nuse std::convert::Infallible;\n\npub async fn stream_stock_prices(\n    stock_symbol: String,\n) -> SseStream<impl Stream<Item = Result<Event, Infallible>>> {\n    let stream = async_stream::stream! {\n        let mut count = 0;\n        loop {\n            tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;\n            count += 1;\n\n            let event = Event::default()\n                .event(\"price_update\")\n                .id(format!(\"evt_{}\", count))\n                .data(format!(\"{{\\\"symbol\\\": \\\"{}\\\", \\\"price\\\": {}}}\", stock_symbol, 100 + count));\n\n            yield Ok(event);\n        }\n    };\n\n    SseStream::new(stream).with_heartbeat(std::time::Duration::from_secs(15))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Buffering Response Bodies"
        }), "\nEnsure your web server or reverse proxy (Nginx) does not buffer HTTP response bodies (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "proxy_buffering off;"
        }), "). Proxy buffering delays SSE event delivery to clients."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: HTTP/2 Multiplexing"
        }), "\nServe SSE endpoints over HTTP/2 or HTTP/3 to bypass the browser's HTTP/1.1 limit of 6 max concurrent connections per domain."]
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
65444(module) {
module.exports = JSON.parse('{"id":"ferrox/transports/sse","title":"Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting","description":"The ferrox-sse crate provides real-time Server-Sent Events (SSE) streaming for Rust web applications. It features Tokio broadcast channels, client connection heartbeats, event ID reconnect resumes, and low-latency HTTP/2 event streaming.","source":"@site/docs/ferrox/transports/sse.md","sourceDirName":"ferrox/transports","slug":"/ferrox/transports/sse","permalink":"/docs/ferrox/transports/sse","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/transports/sse.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"sse","title":"Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"🚀 Advanced GraphQL: DataLoader & Subscriptions","permalink":"/docs/ferrox/transports/graphql-advanced"},"next":{"title":"Cloud File Storage, S3 Streams & Presigned URLs","permalink":"/docs/ferrox/transports/file-storage"}}')

},

};
;