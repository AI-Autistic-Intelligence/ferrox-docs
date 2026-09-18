"use strict";
exports.ids = ["7077"];
exports.modules = {
49554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_ws_md_017_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_ws_md_017_json__rspack_import_0 = __webpack_require__(72580);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'ws',
	title: 'Real-Time WebSockets Engine (ferrox-front-ws)',
	sidebar_position: 10
};
const contentTitle = '🌐 Real-Time WebSockets Engine (ferrox-front-ws)';

const assets = {

};



const toc = [{
  "value": "⚡ 1. Overview &amp; Architectural Role",
  "id": "-1-overview--architectural-role",
  "level": 2
}, {
  "value": "Why WebSockets in WebAssembly?",
  "id": "why-websockets-in-webassembly",
  "level": 3
}, {
  "value": "🛠️ 2. Core Concepts &amp; API Reference",
  "id": "️-2-core-concepts--api-reference",
  "level": 2
}, {
  "value": "<code>FerroxSocket</code> Struct",
  "id": "ferroxsocket-struct",
  "level": 3
}, {
  "value": "🚀 3. Step-by-Step Implementation Guide",
  "id": "-3-step-by-step-implementation-guide",
  "level": 2
}, {
  "value": "Step 1: Add Dependency",
  "id": "step-1-add-dependency",
  "level": 3
}, {
  "value": "Step 2: Instantiating <code>FerroxSocket</code> in a Component",
  "id": "step-2-instantiating-ferroxsocket-in-a-component",
  "level": 3
}, {
  "value": "🔄 4. Internal Callback Lifecycle &amp; Closure Management",
  "id": "-4-internal-callback-lifecycle--closure-management",
  "level": 2
}, {
  "value": "1. <code>onopen</code> Handler",
  "id": "1-onopen-handler",
  "level": 3
}, {
  "value": "2. <code>onmessage</code> Handler",
  "id": "2-onmessage-handler",
  "level": 3
}, {
  "value": "3. <code>onerror</code> Handler",
  "id": "3-onerror-handler",
  "level": 3
}, {
  "value": "🛡️ 5. Production Best Practices &amp; Security",
  "id": "️-5-production-best-practices--security",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "-real-time-websockets-engine-ferrox-front-ws",
        children: ["🌐 Real-Time WebSockets Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ferrox-front-ws"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-ws"
      }), " provides an asynchronous WebAssembly WebSocket client engine built natively for Rust frontends. It bridges browser WebSocket APIs (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "web_sys::WebSocket"
      }), ") with Ferrox Front's reactive ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Signals"
      }), " graph (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Signal<T>"
      }), "), enabling low-latency, real-time bi-directional streaming for dashboards, chat applications, financial tickers, and live notification systems."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-overview--architectural-role",
      children: "⚡ 1. Overview & Architectural Role"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In enterprise server-side architectures, real-time data communication is critical. Traditional HTTP short-polling or long-polling incurs massive overhead due to repeated HTTP header exchanges and connection establishment latencies."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "why-websockets-in-webassembly",
      children: "Why WebSockets in WebAssembly?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["📡 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Low Latency & Persistent Connection"
        }), ": Establishes a single full-duplex TCP stream between the Wasm client and the Ferrox backend (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ferrox-transports"
        }), " / Axum WebSockets)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["⚡ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zero-Copy Memory Parsing"
        }), ": Incoming WebSocket binary or text frames are processed directly inside WebAssembly linear memory without passing through heavy JavaScript parser layers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🔄 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Reactive Signal Integration"
        }), ": Incoming messages automatically update ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Signal<T>"
        }), " reactive primitives, triggering surgical DOM updates at 60fps across subscribed UI components."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "       +-------------------------------------------------------------+\r\n       |             Ferrox Backend / WebSocket Server               |\r\n       +-------------------------------------------------------------+\r\n                                     ^\r\n                                     |  Full-Duplex WS Stream (JSON / Binary)\r\n                                     v\r\n       +-------------------------------------------------------------+\r\n       |               Wasm Client (ferrox-front-ws)                 |\r\n       |  - web_sys::WebSocket Binding                               |\r\n       |  - Closure Callback Handlers (onmessage, onerror, onopen)   |\r\n       +-------------------------------------------------------------+\r\n                                     |\r\n                                     v\r\n       +-------------------------------------------------------------+\r\n       |               Ferrox Signals Reactivity Graph               |\r\n       |  - Signal<String> Status / Message Buffers                  |\r\n       +-------------------------------------------------------------+\r\n                                     |\r\n                                     v\r\n       +-------------------------------------------------------------+\r\n       |               Surgical Wasm DOM Element Mutation            |\r\n       +-------------------------------------------------------------+\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-core-concepts--api-reference",
      children: "🛠️ 2. Core Concepts & API Reference"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "ferroxsocket-struct",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxSocket"
      }), " Struct"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The primary struct managing a WebSocket connection lifecycle:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "pub struct FerroxSocket {\r\n    pub url: String,\r\n    pub status: Signal<String>,\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Field / Method"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "url"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "String"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Target WebSocket endpoint URL (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "wss://api.example.com/ws"
            }), ")."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "status"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Signal<String>"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Reactive status signal tracking connection state (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "\"Connecting...\""
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "\"Connected to Ferrox WS\""
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "\"Error\""
            }), ")."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "FerroxSocket::new(url)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "fn(&str) -> Result<FerroxSocket, JsValue>"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Constructor that instantiates ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "web_sys::WebSocket"
            }), ", binds lifecycle closures, and begins connection handshake."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-step-by-step-implementation-guide",
      children: "🚀 3. Step-by-Step Implementation Guide"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "step-1-add-dependency",
      children: "Step 1: Add Dependency"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In your project's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Cargo.toml"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-toml",
        children: "[dependencies]\r\nferrox-front-ws = { path = \"../crates/ferrox-front-ws\" }\r\nferrox-front-core = { path = \"../crates/ferrox-front-core\" }\r\nwasm-bindgen = \"0.2\"\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "step-2-instantiating-ferroxsocket-in-a-component",
      children: ["Step 2: Instantiating ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxSocket"
      }), " in a Component"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use wasm_bindgen::prelude::*;\r\nuse ferrox_front_ws::FerroxSocket;\r\nuse ferrox_front_core::dom::{div, p, DomBuilder};\r\n\r\npub fn RealtimeDashboard() -> DomBuilder {\r\n    // 1. Establish WebSocket Connection\r\n    let ws_url = \"wss://api.ferrox-rust.dev/ws/metrics\";\r\n    let socket = FerroxSocket::new(ws_url).expect(\"Failed to initialize WebSocket client\");\r\n\r\n    // 2. Render UI bound to the socket status signal\r\n    div()\r\n        .attr(\"class\", \"ws-card\")\r\n        .child(\r\n            p().text(&format!(\"WebSocket Endpoint: {}\", socket.url))\r\n        )\r\n        .child(\r\n            p().attr(\"class\", \"ws-status\")\r\n                .text(&format!(\"Connection Status: {}\", socket.status.get()))\r\n        )\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-internal-callback-lifecycle--closure-management",
      children: "🔄 4. Internal Callback Lifecycle & Closure Management"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To prevent memory leaks inside WebAssembly while maintaining event-driven callbacks, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-ws"
      }), " wraps browser handlers using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "wasm_bindgen::closure::Closure"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-onopen-handler",
      children: ["1. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "onopen"
      }), " Handler"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fired when the WebSocket handshake succeeds:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "let onopen_callback = Closure::<dyn FnMut()>::new(move || {\r\n    web_sys::console::log_1(&\"Connected to Ferrox WS\".into());\r\n});\r\nws.set_onopen(Some(onopen_callback.as_ref().unchecked_ref()));\r\nonopen_callback.forget(); // Keeps closure alive in Wasm memory heap\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "2-onmessage-handler",
      children: ["2. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "onmessage"
      }), " Handler"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fired when a new data frame arrives from the server:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "let onmessage_callback = Closure::<dyn FnMut(_)>::new(move |e: MessageEvent| {\r\n    if let Ok(txt) = e.data().dyn_into::<js_sys::JsString>() {\r\n        web_sys::console::log_1(&txt);\r\n    }\r\n});\r\nws.set_onmessage(Some(onmessage_callback.as_ref().unchecked_ref()));\r\nonmessage_callback.forget();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "3-onerror-handler",
      children: ["3. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "onerror"
      }), " Handler"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fired on network failure or unexpected disconnection:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "let onerror_callback = Closure::<dyn FnMut(_)>::new(move |e: ErrorEvent| {\r\n    web_sys::console::log_1(&\"WebSocket Connection Error\".into());\r\n});\r\nws.set_onerror(Some(onerror_callback.as_ref().unchecked_ref()));\r\nonerror_callback.forget();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-5-production-best-practices--security",
      children: "🛡️ 5. Production Best Practices & Security"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "WSS (WebSocket Secure)"
        }), ": Always use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "wss://"
        }), " in production to enforce TLS encryption and prevent middleman payload inspection."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Reconnection Strategy"
        }), ": Pair ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxSocket"
        }), " with a retry timer to handle transient network drops automatically."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Authentication Handshake"
        }), ": Send an initial zero-trust ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SealedToken"
        }), " in the query parameter or connection payload frame to validate authorization before opening server streams."]
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
72580(module) {
module.exports = JSON.parse('{"id":"ferrox-front/ws","title":"Real-Time WebSockets Engine (ferrox-front-ws)","description":"ferrox-front-ws provides an asynchronous WebAssembly WebSocket client engine built natively for Rust frontends. It bridges browser WebSocket APIs (web_sys::WebSocket) with Ferrox Front\'s reactive Signals graph (Signal), enabling low-latency, real-time bi-directional streaming for dashboards, chat applications, financial tickers, and live notification systems.","source":"@site/docs/ferrox-front/ws.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/ws","permalink":"/docs/ferrox-front/ws","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/ws.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"ws","title":"Real-Time WebSockets Engine (ferrox-front-ws)","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Zero-Trust Wasm Security, WebCrypto & XSS Sanitization","permalink":"/docs/ferrox-front/security"},"next":{"title":"Overview","permalink":"/docs/ferrox-node/overview"}}')

},

};
;