"use strict";
exports.ids = ["5896"];
exports.modules = {
28511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_rate_limiting_md_c90_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_rate_limiting_md_c90_json__rspack_import_0 = __webpack_require__(33705);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'rate-limiting',
	title: 'Rate Limiting Engine, Leaky Bucket & Sliding Window Log',
	sidebar_position: 5
};
const contentTitle = 'Rate Limiting Engine, Leaky Bucket & Sliding Window Log';

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
  "value": "Sliding Window Rate Evaluation Sequence",
  "id": "sliding-window-rate-evaluation-sequence",
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
  "value": "5.1 Applying Rate Limiting to Endpoints",
  "id": "51-applying-rate-limiting-to-endpoints",
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
        id: "rate-limiting-engine-leaky-bucket--sliding-window-log",
        children: "Rate Limiting Engine, Leaky Bucket & Sliding Window Log"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "rate-limiting"
      }), " security module delivers distributed rate-limiting and traffic shaping for Rust web applications (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-rate-limiter"
      }), "). It features Sliding Window Log, Token Bucket, and Leaky Bucket algorithms backed by atomic Redis operations."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Web applications and public API gateways are subject to denial-of-service (DoS) floods, credential stuffing attacks, web scraping bots, and brute-force password cracking attempts. Without rate limiting, malicious traffic exhausts server CPU cores and database connections."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "RateLimiter"
      }), " in Ferrox controls incoming traffic velocity. It tracks request frequencies per IP address, user ID, or API key using high-performance Redis Lua scripts, returning ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "429 Too Many Requests"
      }), " when limits are exceeded."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        Ferrox RateLimiter Engine                       │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Atomic Redis Lua Scripting      │  Multi-Algorithm Rate Limiters      │\n│  • 0.1ms Atomic Counter Check    │  • Sliding Window Log Algorithm     │\n│  • Automatic Expiration TTL      │  • Token Bucket & Leaky Bucket      │\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ Rate Evaluation\n                 ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                        HTTP API Response Pipeline                      │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Sliding Window Log Algorithm"
        }), ": Eliminates burst boundary vulnerabilities found in fixed-window limiters."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Token Bucket Traffic Shaper"
        }), ": Allows controlled bursts while maintaining strict steady-state throughput limits."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "IP & User Identity Extractor"
        }), ": Rate limits based on client IP (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "x-forwarded-for"
        }), "), JWT ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "user_id"
        }), ", or API key headers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automated HTTP Header Emission"
        }), ": Emits standard rate-limiting headers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "RateLimit-Limit"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "RateLimit-Remaining"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "RateLimit-Reset"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "sliding-window-rate-evaluation-sequence",
      children: "Sliding Window Rate Evaluation Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as API Client\n    participant Router as Ferrox Transport Router\n    participant Limiter as RateLimiter Middleware\n    participant Redis as Redis Atomic Lua Script\n\n    Client->>Router: HTTP POST /api/login (Client IP: 1.2.3.4)\n    Router->>Limiter: check_rate_limit(key: \"rate:login:1.2.3.4\", limit: 5, window: 60s)\n    Limiter->>Redis: Execute Atomic Lua Script (ZADD timestamp, ZREMRANGEBYSCORE)\n    Redis-->>Limiter: Current Count in Window = 6 (> Limit 5)\n    Limiter-->>Router: Deny Access (Return Retry-After: 45)\n    Router-->>Client: 429 Too Many Requests Payload { success: false, retryAfter: 45 }\n"
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
            children: "Fixed Window Algorithm"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Sliding Window Log"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Burst Vulnerability"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2x limit requests can burst at boundary minutes (e.g. 11:59:59 & 12:00:01)."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Smooth sliding time window eliminates boundary burst exploits."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Atomic Concurrency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Race conditions allow extra requests in multi-threaded setups."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single atomic Redis Lua script guarantees thread-safe counters."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Headers"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No standard headers emitted."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Full compliance with IETF ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "RateLimit-*"
            }), " header standards."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-applying-rate-limiting-to-endpoints",
      children: "5.1 Applying Rate Limiting to Endpoints"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_rate_limiter::{RateLimiter, RateLimitConfig, Algorithm};\n\npub async fn protect_login_endpoint(\n    client_ip: &str,\n    limiter: &RateLimiter,\n) -> Result<(), RateLimitError> {\n    let key = format!(\"ratelimit:login:{}\", client_ip);\n\n    // Limit to 5 requests per 60 seconds per IP address\n    let decision = limiter.evaluate(&key, RateLimitConfig {\n        limit: 5,\n        window_seconds: 60,\n        algorithm: Algorithm::SlidingWindowLog,\n    }).await?;\n\n    if !decision.is_allowed {\n        return Err(RateLimitError::TooManyRequests {\n            retry_after_seconds: decision.retry_after,\n        });\n    }\n\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Trusting Spoofable Headers for Client IP"
        }), "\nAvoid blindly using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "req.headers[\"x-forwarded-for\"]"
        }), " without validating reverse proxy IP whitelist rules. Attackers can forge IP header values to bypass IP rate limiters."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Tiered Rate Limiting"
        }), "\nConfigure higher rate limits for authenticated premium users (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "10,000 req/min"
        }), ") versus unauthenticated guest traffic (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "60 req/min"
        }), ")."]
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
33705(module) {
module.exports = JSON.parse('{"id":"ferrox/security/rate-limiting","title":"Rate Limiting Engine, Leaky Bucket & Sliding Window Log","description":"The rate-limiting security module delivers distributed rate-limiting and traffic shaping for Rust web applications (ferrox-rate-limiter). It features Sliding Window Log, Token Bucket, and Leaky Bucket algorithms backed by atomic Redis operations.","source":"@site/docs/ferrox/security/rate-limiting.md","sourceDirName":"ferrox/security","slug":"/ferrox/security/rate-limiting","permalink":"/docs/ferrox/security/rate-limiting","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/security/rate-limiting.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"rate-limiting","title":"Rate Limiting Engine, Leaky Bucket & Sliding Window Log","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"JWT Authentication Engine, RSA/Ed25519 Signing & Revocation","permalink":"/docs/ferrox/security/jwt"},"next":{"title":"Circuit Breaker State Machine & Microservice Resilience","permalink":"/docs/ferrox/security/circuit-breaker"}}')

},

};
;