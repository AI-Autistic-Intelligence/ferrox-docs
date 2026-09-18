"use strict";
exports.ids = ["5743"];
exports.modules = {
21164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_controllers_md_3fc_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_controllers_md_3fc_json__rspack_import_0 = __webpack_require__(95354);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = '🕹️ Controllers: The Masterpiece Guide';

const assets = {

};



const toc = [{
  "value": "1. The Core Concept",
  "id": "1-the-core-concept",
  "level": 2
}, {
  "value": "2. The Arsenal (Toolbox)",
  "id": "2-the-arsenal-toolbox",
  "level": 2
}, {
  "value": "2.1 Standard Extractors",
  "id": "21-standard-extractors",
  "level": 3
}, {
  "value": "2.2 Advanced Extractors (Multipart, SSE, WebSockets)",
  "id": "22-advanced-extractors-multipart-sse-websockets",
  "level": 3
}, {
  "value": "Multipart Forms (File Uploads)",
  "id": "multipart-forms-file-uploads",
  "level": 4
}, {
  "value": "Server-Sent Events (SSE)",
  "id": "server-sent-events-sse",
  "level": 4
}, {
  "value": "3. Advanced Under the Hood",
  "id": "3-advanced-under-the-hood",
  "level": 2
}, {
  "value": "4. ✅ Best Practices",
  "id": "4--best-practices",
  "level": 2
}, {
  "value": "4.1 Thin Controllers, Fat Providers",
  "id": "41-thin-controllers-fat-providers",
  "level": 3
}, {
  "value": "4.2 Sub-Router Composition (Nesting)",
  "id": "42-sub-router-composition-nesting",
  "level": 3
}, {
  "value": "5. ❌ Anti-Patterns",
  "id": "5--anti-patterns",
  "level": 2
}, {
  "value": "5.1 Blocking the Tokio Thread 💀",
  "id": "51-blocking-the-tokio-thread-",
  "level": 3
}, {
  "value": "5.2 Unwrapping inside a Controller",
  "id": "52-unwrapping-inside-a-controller",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-controllers-the-masterpiece-guide",
        children: "🕹️ Controllers: The Masterpiece Guide"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In a Ferrox application, a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Controller"
      }), " is the ultimate boundary between the unpredictable outside world (HTTP TCP streams) and the strict, type-safe inner world of your business logic."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Its sole responsibility is to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "receive HTTP requests"
      }), ", route them to the correct service, and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "return HTTP responses"
      }), ". While this sounds simple, an Enterprise application demands robust handling of streaming, multipart uploads, WebSockets, timeouts, and body size limits."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This guide explores the full arsenal available to a Ferrox Controller, explaining not just ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "how"
      }), " to use it, but ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "why"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "how not to"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-the-core-concept",
      children: "1. The Core Concept"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Ferrox (which runs on Axum and Tokio), there is no ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@Controller()"
      }), " class decorator like in NestJS. Instead, controllers are composed of pure, asynchronous functions (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Handlers"
      }), ") grouped inside a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Router"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When the HTTP server receives a TCP byte stream, it attempts to match the URL against a routing tree (Radix Tree). Once matched, it triggers your handler."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::{get, post}, Router};\n\npub fn users_controller() -> Router<AppState> {\n    // We group routes that share the same prefix\n    Router::new()\n        .route(\"/\", get(get_users).post(create_user))\n        .route(\"/:id\", get(get_user_by_id))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-the-arsenal-toolbox",
      children: "2. The Arsenal (Toolbox)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox provides a massive array of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Extractors"
      }), " to pull data out of the raw HTTP request. Extractors are strictly typed: if the client sends invalid data, Ferrox intercepts it and returns a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "400 Bad Request"
      }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "before"
      }), " your controller is even executed."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "21-standard-extractors",
      children: "2.1 Standard Extractors"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Extractor"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Use Case"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "NestJS Equivalent"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Path<T>"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Route Parameters (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "/users/:id"
            }), ")"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@Param()"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Query<T>"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Query String (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "?name=ferrox"
            }), ")"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@Query()"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Json<T>"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "JSON Request Body"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@Body()"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "HeaderMap"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "All HTTP Headers"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@Headers()"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "22-advanced-extractors-multipart-sse-websockets",
      children: "2.2 Advanced Extractors (Multipart, SSE, WebSockets)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When you need to handle complex payloads, Ferrox provides specialized extractors."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "multipart-forms-file-uploads",
      children: "Multipart Forms (File Uploads)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Handling massive file uploads efficiently requires streaming the bytes, rather than loading a 5GB video into RAM."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::extract::Multipart;\n\nasync fn upload_video(mut multipart: Multipart) {\n    while let Some(field) = multipart.next_field().await.unwrap() {\n        let name = field.name().unwrap().to_string();\n        let file_name = field.file_name().unwrap().to_string();\n        \n        // We can process the file chunks asynchronously here\n        // avoiding Memory Out Of Bounds errors.\n        let data = field.bytes().await.unwrap();\n        println!(\"Received {} bytes for {}\", data.len(), file_name);\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "server-sent-events-sse",
      children: "Server-Sent Events (SSE)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For real-time unidirectional data (like a ChatGPT typing response), you can return an Event Stream."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::response::sse::{Event, Sse};\nuse futures::stream::{self, Stream};\nuse std::{convert::Infallible, time::Duration};\n\nasync fn sse_handler() -> Sse<impl Stream<Item = Result<Event, Infallible>>> {\n    // Create a stream that yields an event every second\n    let stream = tokio_stream::wrappers::IntervalStream::new(tokio::time::interval(Duration::from_secs(1)))\n        .map(|_| Ok(Event::default().data(\"Server time tick!\")));\n\n    Sse::new(stream).keep_alive(axum::response::sse::KeepAlive::default())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-advanced-under-the-hood",
      children: "3. Advanced Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "How does Ferrox manage memory when a client sends a 10GB JSON payload?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By default, the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Json<T>"
      }), " extractor has a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "strict 2MB limit"
      }), ". If a payload exceeds this limit, Ferrox drops the TCP connection to prevent ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "OOM (Out of Memory) DDoS attacks"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you need to accept larger payloads for a specific route, you explicitly configure the limit per-route using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "axum::extract::DefaultBodyLimit"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::extract::DefaultBodyLimit;\nuse axum::Router;\nuse axum::routing::post;\n\nlet app = Router::new()\n    .route(\"/massive-upload\", post(massive_handler))\n    // Override the limit to 50MB for this specific route\n    .layer(DefaultBodyLimit::max(50 * 1024 * 1024)); \n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "41-thin-controllers-fat-providers",
      children: "4.1 Thin Controllers, Fat Providers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A Controller should never contain business logic, complex IF statements, or direct database queries. It should only extract data, pass it to a Provider (Service), and format the Provider's result into an HTTP Response."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "✅ DO:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "async fn create_user(\n    State(user_service): State<UserService>,\n    Json(payload): Json<CreateUserDto>,\n) -> Result<Json<User>, AppError> {\n    // The controller delegates everything to the service\n    let user = user_service.create(payload).await?;\n    Ok(Json(user))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "42-sub-router-composition-nesting",
      children: "4.2 Sub-Router Composition (Nesting)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Don't define all your routes in a giant ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.rs"
      }), " file. Nest routers to keep your codebase modular, exactly like NestJS Modules."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "✅ DO:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "let api_router = Router::new()\n    .nest(\"/users\", users_controller())\n    .nest(\"/orders\", orders_controller());\n\nlet app = Router::new().nest(\"/api/v1\", api_router);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5--anti-patterns",
      children: "5. ❌ Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Understanding what ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "not"
      }), " to do in Rust is critical, as some mistakes can bring down your entire server cluster."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-blocking-the-tokio-thread-",
      children: "5.1 Blocking the Tokio Thread 💀"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox runs on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Tokio"
      }), ", an asynchronous runtime. Tokio uses a pool of Worker Threads (usually equal to your CPU cores). If you run a synchronous, blocking operation (like reading a huge file with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "std::fs"
      }), " or heavy cryptography) inside an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "async fn"
      }), " controller, you \"steal\" that thread. If you have 8 cores and 8 requests do this concurrently, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "your entire server stops responding to all other users"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "❌ DON'T:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "async fn blocking_controller() -> &'static str {\n    // 💀 FATAL: This blocks the Tokio Worker thread!\n    std::thread::sleep(std::time::Duration::from_secs(5)); \n    \n    // 💀 FATAL: Synchronous File I/O blocks the thread!\n    let data = std::fs::read_to_string(\"huge_log.txt\").unwrap(); \n    \n    \"Done\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "✅ DO:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "async fn non_blocking_controller() -> &'static str {\n    // ✅ SAFE: Yields the thread back to Tokio while waiting\n    tokio::time::sleep(std::time::Duration::from_secs(5)).await; \n    \n    // ✅ SAFE: Asynchronous File I/O\n    let data = tokio::fs::read_to_string(\"huge_log.txt\").await.unwrap(); \n    \n    // ✅ SAFE: For CPU-heavy math/crypto, offload to a blocking thread pool\n    let hash = tokio::task::spawn_blocking(|| {\n        bcrypt::hash(\"password\", 10).unwrap()\n    }).await.unwrap();\n    \n    \"Done\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-unwrapping-inside-a-controller",
      children: "5.2 Unwrapping inside a Controller"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If a client sends an unexpected header, and you call ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".unwrap()"
      }), " to parse it, your thread will Panic. While Axum catches panics and prevents the server from crashing entirely, it is a severe anti-pattern that disrupts the connection abruptly. Always use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "?"
      }), " and return proper ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppError"
      }), " types."]
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
95354(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/controllers","title":"🕹️ Controllers: The Masterpiece Guide","description":"In a Ferrox application, a Controller is the ultimate boundary between the unpredictable outside world (HTTP TCP streams) and the strict, type-safe inner world of your business logic.","source":"@site/docs/ferrox/fundamentals/controllers.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/controllers","permalink":"/docs/ferrox/fundamentals/controllers","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/controllers.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"🤖 CI/CD Automation & GitHub Actions","permalink":"/docs/ferrox/deployment/ci-cd"},"next":{"title":"💉 Providers & Dependency Injection","permalink":"/docs/ferrox/fundamentals/providers"}}')

},

};
;