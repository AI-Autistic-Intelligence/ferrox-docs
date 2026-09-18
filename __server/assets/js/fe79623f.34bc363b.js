"use strict";
exports.ids = ["2412"];
exports.modules = {
85115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_resilience_md_fe7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_resilience_md_fe7_json__rspack_import_0 = __webpack_require__(39005);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'resilience',
	title: 'Circuit Breaker, Singleflight & Resilience Patterns',
	sidebar_position: 10
};
const contentTitle = 'Circuit Breaker, Singleflight & Resilience Patterns';

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
  "value": "Singleflight &amp; Circuit Breaker Mechanics",
  "id": "singleflight--circuit-breaker-mechanics",
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
  "value": "5.1 Using Singleflight Group Deduplication",
  "id": "51-using-singleflight-group-deduplication",
  "level": 3
}, {
  "value": "5.2 Configuring Circuit Breaker with Fallback",
  "id": "52-configuring-circuit-breaker-with-fallback",
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
        id: "circuit-breaker-singleflight--resilience-patterns",
        children: "Circuit Breaker, Singleflight & Resilience Patterns"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " resilience component delivers fault-tolerance mechanisms for Node.js microservices: Circuit Breakers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Closed"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Open"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "HalfOpen"
      }), "), Singleflight Request Deduplication, Exponential Backoff Retries, and Rate-Limiting Bouncers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Distributed microservices depend on remote HTTP services, database pools, and external payment gateways. When a downstream dependency experiences latencies or outages, upstream callers can suffer cascading failures: connection pool exhaustion, thread starvation, and thundering herd query bursts."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "resilience"
      }), " module implements battle-tested resilience patterns in TypeScript. It isolates failing external dependencies, deduplicates simultaneous identical requests, and handles transient network glitches gracefully."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        Ferrox Resilience Engine                        │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Circuit Breaker State Machine   │  Singleflight Deduplicator          │\n│  (Closed -> Open -> HalfOpen)    │  (In-Flight Concurrent Request Join)│\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ Intercept Failure / Burst\n            ┌────┴────────────────────────────────────┴────┐\n            ▼                                              ▼\n┌─────────────────────────────────┐              ┌───────────────────────┐\n│ Fallback Execution Engine       │              │ Shared Promise Return │\n│ (Cached Data / Degraded State)  │              │ (Single External Call)│\n└─────────────────────────────────┘              └───────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Circuit Breaker State Machine"
        }), ": Switches states between ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Closed"
        }), " (normal), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Open"
        }), " (failing, rejects calls immediately with fallback), and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "HalfOpen"
        }), " (probing recovery)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Singleflight Request Deduplication"
        }), ": Consolidates multiple concurrent identical request calls into a single underlying execution promise."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Exponential Backoff Retries"
        }), ": Retries transient network failures automatically with configurable jitter algorithm."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Fallback Execution Decorators"
        }), ": Seamlessly returns degraded fallback responses or cached data when downstream services fail."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "singleflight--circuit-breaker-mechanics",
      children: "Singleflight & Circuit Breaker Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client1 as Client Request 1\n    participant Client2 as Client Request 2\n    participant Singleflight as Singleflight Group\n    participant Breaker as Circuit Breaker (Closed)\n    participant Downstream as Remote External API\n\n    Client1->>Singleflight: Execute getResource(\"user_100\")\n    Singleflight->>Breaker: Check Circuit Breaker State (Closed)\n    Breaker->>Downstream: Dispatch HTTP GET /api/users/100\n    Client2->>Singleflight: Execute getResource(\"user_100\") [Simultaneous]\n    Note over Singleflight: In-flight execution found! Attach Client 2 to Promise 1\n    Downstream-->>Breaker: Return Response HTTP 200 OK\n    Breaker-->>Singleflight: Resolve Promise 1\n    Singleflight-->>Client1: Deliver User Data JSON\n    Singleflight-->>Client2: Deliver Identical Shared User Data JSON\n"
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
            children: "Standard Unprotected Calls"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Resilience Engine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Thundering Herd"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100 concurrent requests trigger 100 identical DB reads."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singleflight deduplicates 100 requests into 1 single DB query."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Cascading Failure"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dying payment gateway causes 1000s of HTTP connections to hang."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Circuit Breaker opens after 5 failures and fails fast with fallback."
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
            children: "Manual app restarts required after downstream outage."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "HalfOpen"
            }), " state probes service recovery automatically."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-using-singleflight-group-deduplication",
      children: "5.1 Using Singleflight Group Deduplication"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { SingleflightGroup } from '@ferrox/node';\n\nconst sfGroup = new SingleflightGroup();\n\nexport async function getCachedUserProfile(userId: string) {\n  // If 50 requests arrive at the same millisecond for userId \"100\",\n  // fetchUserDataFromDb(\"100\") will execute EXACTLY ONCE.\n  return await sfGroup.do(`user_profile_${userId}`, async () => {\n    console.log(`Executing expensive database read for ${userId}...`);\n    return await fetchUserDataFromDb(userId);\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-configuring-circuit-breaker-with-fallback",
      children: "5.2 Configuring Circuit Breaker with Fallback"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { CircuitBreaker } from '@ferrox/node';\n\nconst breaker = new CircuitBreaker({\n  name: 'payment-gateway',\n  failureThreshold: 5, // Open circuit after 5 consecutive failures\n  resetTimeoutMs: 10000, // Stay Open for 10s before probing HalfOpen\n  timeoutMs: 3000, // Timeout requests after 3s\n});\n\nexport async function processPaymentWithResilience(paymentData: any) {\n  return await breaker.execute(\n    async () => {\n      return await remotePaymentApi.charge(paymentData);\n    },\n    // Fallback function when Circuit Breaker is OPEN or times out\n    async (err) => {\n      console.warn(`Payment gateway breaker active (${err.message}). Queueing payment...`);\n      return { status: 'QUEUED', trackingId: 'pay_offline_' + Date.now() };\n    }\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: High Reset Timeout without Probing"
        }), "\nSetting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "resetTimeoutMs: 3600000"
        }), " (1 hour) will keep the circuit breaker in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OPEN"
        }), " state for an hour even if the downstream service recovers after 10 seconds. Keep reset timeouts tuned between 5s and 30s."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Combining Singleflight and Circuit Breaker"
        }), "\nWrap singleflight execution inside a Circuit Breaker to get both thundering-herd protection and fail-fast resilience for heavy database queries."]
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
39005(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/resilience","title":"Circuit Breaker, Singleflight & Resilience Patterns","description":"The @ferrox/node resilience component delivers fault-tolerance mechanisms for Node.js microservices: Circuit Breakers (Closed, Open, HalfOpen), Singleflight Request Deduplication, Exponential Backoff Retries, and Rate-Limiting Bouncers.","source":"@site/docs/ferrox-node/docs/components/resilience.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/resilience","permalink":"/docs/ferrox-node/docs/components/resilience","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/resilience.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"resilience","title":"Circuit Breaker, Singleflight & Resilience Patterns","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Core Framework Interfaces & DTO Signatures","permalink":"/docs/ferrox-node/docs/components/interfaces"},"next":{"title":"Internationalization (I18n)","permalink":"/docs/ferrox-node/docs/components/i18n"}}')

},

};
;