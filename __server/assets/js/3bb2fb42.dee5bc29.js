"use strict";
exports.ids = ["4863"];
exports.modules = {
529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_circuit_breaker_md_3bb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_circuit_breaker_md_3bb_json__rspack_import_0 = __webpack_require__(46202);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'circuit-breaker',
	title: 'Circuit Breaker State Machine & Microservice Resilience',
	sidebar_position: 6
};
const contentTitle = 'Circuit Breaker State Machine & Microservice Resilience';

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
  "value": "Circuit Breaker State Transition Sequence",
  "id": "circuit-breaker-state-transition-sequence",
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
  "value": "5.1 Protecting Remote API Calls",
  "id": "51-protecting-remote-api-calls",
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
        id: "circuit-breaker-state-machine--microservice-resilience",
        children: "Circuit Breaker State Machine & Microservice Resilience"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "circuit-breaker"
      }), " security module implements fault tolerance for Rust microservices (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-circuit-breaker"
      }), "). It features a finite state machine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Closed"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Open"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "HalfOpen"
      }), "), failure threshold monitoring, automatic recovery probing, and fallback execution pipelines."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When remote external HTTP APIs, microservices, or database nodes slow down or fail, upstream microservices calling them synchronously can experience cascading thread starvation: thread pools saturate waiting for network socket timeouts, cascading failures across the entire cluster."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "CircuitBreaker"
      }), " in Ferrox isolates failing external dependencies. It monitors failure ratios, opens the circuit breaker to fail fast without waiting for network timeouts when errors exceed configured thresholds, and probes recovery automatically."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                   Circuit Breaker State Machine                        │\n├────────────────────────────────────────────────────────────────────────┤\n│                                                                        │\n│      [ CLOSED ] ──(Failures > Threshold)──> [ OPEN ]                   │\n│          ▲                                    │                        │\n│          │                               (Timeout Expired)             │\n│    (Probes Succeed)                           │                        │\n│          │                                    ▼                        │\n│          └─────────────── [ HALF-OPEN ] <─────┘                        │\n│                                                                        │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Finite State Machine"
        }), ": Toggles between ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Closed"
        }), " (normal routing), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Open"
        }), " (failing, rejects calls immediately), and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "HalfOpen"
        }), " (probing recovery)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Failure Threshold Evaluation"
        }), ": Calculates error rates over configurable sliding time windows."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Immediate Fail-Fast Execution"
        }), ": Rejects calls in 0ms when ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Open"
        }), ", preventing network socket pool depletion."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Fallback Result Execution"
        }), ": Returns pre-cached data or degraded fallback responses when the circuit is ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Open"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "circuit-breaker-state-transition-sequence",
      children: "Circuit Breaker State Transition Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant App as Service Request\n    participant Breaker as Circuit Breaker\n    participant Downstream as Remote External API\n\n    App->>Breaker: execute(async || remote_api_call())\n    alt State == Closed\n        Breaker->>Downstream: Execute Remote HTTP Call\n        alt Call Succeeds\n            Downstream-->>Breaker: HTTP 200 OK\n            Breaker-->>App: Return Data Result\n        else Call Fails (5 Consecutive Errors)\n            Downstream-->>Breaker: HTTP 500 Error\n            Breaker->>Breaker: Transition State to OPEN\n            Breaker-->>App: Return Fallback Result\n        end\n    else State == Open\n        Note over Breaker: Fail-Fast! Rejects call immediately without network attempt\n        Breaker-->>App: Return Degraded Fallback Result\n    end\n"
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
            children: "Direct Unprotected Network Calls"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Circuit Breaker"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Cascading Failures"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dying third-party payment API hangs all web worker threads."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Circuit Breaker opens in 0ms, protecting thread pools."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Manual pod restarts required to recover after network outage."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "HalfOpen"
            }), " state probes service recovery automatically."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "User Experience"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users wait 30 seconds for network timeout error pages."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users receive instant fallback responses in 1ms."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-protecting-remote-api-calls",
      children: "5.1 Protecting Remote API Calls"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_circuit_breaker::{CircuitBreaker, BreakerOptions};\n\npub async fn call_external_recommendation_engine(\n    user_id: &str,\n    breaker: &CircuitBreaker,\n) -> Result<Vec<String>, ServiceError> {\n    let result = breaker.execute(\n        // Primary Async Task\n        move || async move {\n            fetch_recommendations_over_http(user_id).await\n        },\n        // Fallback Task when Circuit is OPEN or fails\n        move |err| async move {\n            println!(\"Circuit Breaker active ({:?}). Returning default items.\", err);\n            Ok(vec![\"item_default_1\".to_string(), \"item_default_2\".to_string()])\n        }\n    ).await?;\n\n    Ok(result)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Wrapping Local Memory Operations in Circuit Breakers"
        }), "\nDo not place local in-memory code or CPU math functions inside circuit breakers. Circuit breakers are designed specifically for network I/O boundaries (HTTP, gRPC, DB, Redis)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Prometheus Metric Monitoring"
        }), "\nExport circuit breaker state transitions (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "closed=0"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "open=1"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "half_open=2"
        }), ") to Prometheus metrics to alert ops teams when critical dependencies enter ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OPEN"
        }), " state."]
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
46202(module) {
module.exports = JSON.parse('{"id":"ferrox/security/circuit-breaker","title":"Circuit Breaker State Machine & Microservice Resilience","description":"The circuit-breaker security module implements fault tolerance for Rust microservices (ferrox-circuit-breaker). It features a finite state machine (Closed, Open, HalfOpen), failure threshold monitoring, automatic recovery probing, and fallback execution pipelines.","source":"@site/docs/ferrox/security/circuit-breaker.md","sourceDirName":"ferrox/security","slug":"/ferrox/security/circuit-breaker","permalink":"/docs/ferrox/security/circuit-breaker","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/security/circuit-breaker.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"circuit-breaker","title":"Circuit Breaker State Machine & Microservice Resilience","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Rate Limiting Engine, Leaky Bucket & Sliding Window Log","permalink":"/docs/ferrox/security/rate-limiting"},"next":{"title":"Singleflight Request Deduplication & Cache Stampede Shield","permalink":"/docs/ferrox/security/singleflight"}}')

},

};
;