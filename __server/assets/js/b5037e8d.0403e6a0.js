"use strict";
exports.ids = ["8688"];
exports.modules = {
62077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_singleflight_md_b50_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_singleflight_md_b50_json__rspack_import_0 = __webpack_require__(90668);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'singleflight',
	title: 'Singleflight Request Deduplication & Cache Stampede Shield',
	sidebar_position: 7
};
const contentTitle = 'Singleflight Request Deduplication & Cache Stampede Shield';

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
  "value": "Singleflight Execution Sequence",
  "id": "singleflight-execution-sequence",
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
  "value": "5.1 Deduplicating Heavy Database Reads",
  "id": "51-deduplicating-heavy-database-reads",
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
    em: "em",
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
        id: "singleflight-request-deduplication--cache-stampede-shield",
        children: "Singleflight Request Deduplication & Cache Stampede Shield"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "singleflight"
      }), " security module delivers lock-free, concurrent request deduplication for Rust microservices (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-singleflight"
      }), "). It prevents thundering herd cache stampedes by executing concurrent duplicate work items exactly once."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When a popular cached database key expires (or a high-traffic endpoint experiences a surge of 1,000 simultaneous user requests), all 1,000 incoming requests miss the cache at the exact same millisecond and issue 1,000 identical SQL database queries simultaneously. This phenomenon, known as a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Cache Stampede"
      }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Thundering Herd"
      }), ", spikes database CPU usage to 100% and crashes application pools."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-singleflight"
      }), " provides a lightweight, lock-free request deduplicator. When multiple concurrent threads request the exact same key (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"user_profile_100\""
      }), "), only the first thread executes the underlying async work function. Subsequent threads wait for the first promise to settle and receive a shared clone of the result."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                      ferrox-singleflight Engine                        │\n├────────────────────────────────────────────────────────────────────────┤\n│  100 Concurrent Requests for Key (\"user_profile_100\")                  │\n│    │                                                                   │\n│    ├── Request #1  ---> Spawns Underlying Async Query Execution       │\n│    └── Requests #2..100 -> Join In-Flight Shared Futures Map           │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Single Database Read Execution\n                                   ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                        Database / Remote API Endpoint                  │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Thundering Herd Shield"
        }), ": Reduces N simultaneous identical query requests into a single database or remote API call."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Lock-Free Arc / Atomic Synchronization"
        }), ": Implemented using lock-free Tokio futures and atomic channel sharing for 0ms overhead."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Shared Error Propagation"
        }), ": If the primary execution returns an error, all waiting requests receive an identical error result clone."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Cleanup"
        }), ": Automatically removes key entries from the in-flight map as soon as the primary future resolves."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "singleflight-execution-sequence",
      children: "Singleflight Execution Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Req1 as Request Thread 1\n    participant Req2 as Request Thread 2\n    participant Group as Singleflight Group\n    participant DB as SeaORM Database Query\n\n    Req1->>Group: Group.work(\"user_100\", async || fetch_db(\"user_100\"))\n    Group->>DB: Spawn Database Query (Key: \"user_100\")\n    Req2->>Group: Group.work(\"user_100\", async || fetch_db(\"user_100\"))\n    Note over Group: In-flight key \"user_100\" exists! Attach Req2 to Req1 Future\n    DB-->>Group: Query Complete -> Return User Struct\n    Group-->>Req1: Deliver Result Clone\n    Group-->>Req2: Deliver Result Clone\n    Group->>Group: Prune \"user_100\" from In-Flight Map\n"
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
            children: "Unprotected Concurrent Calls"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "ferrox-singleflight Engine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Database Load"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1,000 concurrent SQL queries lock database connections."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "EXACTLY 1 SQL query executed. 999 queries served from shared result."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Response Latency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DB queueing causes latencies to spike from 5ms to 5,000ms."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All 1,000 requests resolve as soon as the single query finishes (~5ms)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Memory Allocation"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High RAM overhead for 1,000 concurrent result buffers."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Single result buffer shared via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Arc<T>"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-deduplicating-heavy-database-reads",
      children: "5.1 Deduplicating Heavy Database Reads"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_singleflight::Group;\nuse std::sync::Arc;\n\npub struct UserRepository {\n    singleflight: Group<String, UserDTO>,\n}\n\nimpl UserRepository {\n    pub fn new() -> Self {\n        Self { singleflight: Group::new() }\n    }\n\n    pub async fn get_user_cached(&self, user_id: String) -> Result<UserDTO, DbError> {\n        let key = format!(\"user_dto_{}\", user_id);\n\n        // If 500 threads request `user_id` concurrently, `fetch_user_from_db` runs ONCE\n        let result = self.singleflight.work(&key, move || async move {\n            println!(\"Executing singleflight DB query for {}\", user_id);\n            fetch_user_from_db(&user_id).await\n        }).await;\n\n        result\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Unique Key Parameters"
        }), "\nAvoid generating unique keys for identical requests (e.g., attaching timestamps to keys: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"user_100_1726689600\""
        }), "). Unique keys defeat deduplication because each request gets a distinct key."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Combining Singleflight with Cache Writes"
        }), "\nInside your singleflight closure, write the fetched data to your Redis cache ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
          children: "before"
        }), " returning the result, ensuring subsequent requests hit Redis directly."]
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
90668(module) {
module.exports = JSON.parse('{"id":"ferrox/security/singleflight","title":"Singleflight Request Deduplication & Cache Stampede Shield","description":"The singleflight security module delivers lock-free, concurrent request deduplication for Rust microservices (ferrox-singleflight). It prevents thundering herd cache stampedes by executing concurrent duplicate work items exactly once.","source":"@site/docs/ferrox/security/singleflight.md","sourceDirName":"ferrox/security","slug":"/ferrox/security/singleflight","permalink":"/docs/ferrox/security/singleflight","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/security/singleflight.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"singleflight","title":"Singleflight Request Deduplication & Cache Stampede Shield","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Circuit Breaker State Machine & Microservice Resilience","permalink":"/docs/ferrox/security/circuit-breaker"},"next":{"title":"Distributed Locks, Redlock Algorithm & Synchronization","permalink":"/docs/ferrox/security/distributed-locks"}}')

},

};
;