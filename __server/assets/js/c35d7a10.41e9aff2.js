"use strict";
exports.ids = ["642"];
exports.modules = {
138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_ferrox_sentinel_md_c35_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_security_ferrox_sentinel_md_c35_json__rspack_import_0 = __webpack_require__(95307);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'ferrox-sentinel',
	title: 'Ferrox Sentinel Edge Shield, CSP Directives & Payload Bouncer',
	sidebar_position: 1
};
const contentTitle = 'Ferrox Sentinel Edge Shield, CSP Directives & Payload Bouncer';

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
  "value": "Sentinel Edge Interception Sequence",
  "id": "sentinel-edge-interception-sequence",
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
  "value": "5.1 Configuring Sentinel Middleware in Rust",
  "id": "51-configuring-sentinel-middleware-in-rust",
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
        id: "ferrox-sentinel-edge-shield-csp-directives--payload-bouncer",
        children: "Ferrox Sentinel Edge Shield, CSP Directives & Payload Bouncer"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-sentinel"
      }), " crate is the edge security bouncer for the Ferrox framework. It delivers automated HTTP security headers (Helmet CSP, HSTS, X-Frame-Options), CORS origin regex validation, payload size bouncers, and malicious request parameter sanitization."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Web applications are exposed to edge security threats: Cross-Site Scripting (XSS), Clickjacking, Cross-Site Request Forgery (CSRF), MIME-sniffing exploits, and payload inflation DoS attacks. Leaving security header configuration to manual web server rules creates vulnerabilities across environments."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-sentinel"
      }), " acts as an automated security shield. Intercepting requests at the outer layer of the transport router, it validates CORS origins, sanitizes headers, enforces strict Content Security Policy (CSP) directives, and bounces oversized payloads before they reach business logic."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        ferrox-sentinel Edge Shield                     │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Strict Security Headers         │  CORS & Payload Bouncer             │\n│  • CSP (Content-Security-Policy) │  • Dynamic Regex Origin Matcher     │\n│  • HSTS, X-Frame-Options, XSS    │  • Max Payload Size Enforcement     │\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ Clean, Hardened Transport Context\n                 ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                        Ferrox Application Router                       │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Helmet Security Headers"
        }), ": Automatically injects ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Content-Security-Policy"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Strict-Transport-Security"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Content-Type-Options: nosniff"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "X-Frame-Options: DENY"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic CORS Origin Matcher"
        }), ": Evaluates incoming ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Origin"
        }), " headers against dynamic regex patterns and multi-domain wildcard rules."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Payload Size Bouncer"
        }), ": Intercepts HTTP request streams and rejects payloads exceeding configured size thresholds (e.g., max 2MB) before buffering into memory."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Path & Parameter Sanitizer"
        }), ": Strips null-byte injections, directory traversal attempts, and malformed URI encodings."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "sentinel-edge-interception-sequence",
      children: "Sentinel Edge Interception Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Web Client Browser\n    participant Sentinel as ferrox-sentinel Interceptor\n    participant App as Ferrox Application Handler\n\n    Client->>Sentinel: HTTP POST /api/v1/data (Header Origin: \"https://example.com\")\n    Sentinel->>Sentinel: Verify Origin against CORS Regex Whitelist\n    Sentinel->>Sentinel: Inspect Content-Length (Payload < Max Limit?)\n    alt Origin Valid & Payload Size OK\n        Sentinel->>App: Forward Request to Application Handler\n        App-->>Sentinel: Return HTTP Response Data\n        Sentinel->>Sentinel: Inject Helmet Security Headers (CSP, HSTS)\n        Sentinel-->>Client: Deliver Hardened Response Payload\n    else Origin Invalid or Payload Exceeds Max Limit\n        Sentinel-->>Client: 403 Forbidden / 413 Payload Too Large\n    end\n"
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
            children: "Manual Server Header Config"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "ferrox-sentinel Edge Shield"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web headers omitted when running apps in local Docker pods."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Framework-level guarantee. Headers injected in all environments."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "DoS Protection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Large 100MB payload buffered in RAM before throwing error."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sentinel bounces oversized streams at the transport socket level."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "CORS Security"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Wildcard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Access-Control-Allow-Origin: *"
            }), " with credentials bug."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Strict origin regex validation supporting credentialed CORS."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-configuring-sentinel-middleware-in-rust",
      children: "5.1 Configuring Sentinel Middleware in Rust"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_sentinel::{SentinelEngine, SentinelOptions, CspDirective};\n\npub fn configure_security_shield() -> SentinelEngine {\n    SentinelEngine::new(SentinelOptions {\n        enable_hsts: true,\n        hsts_max_age_seconds: 31536000, // 1 Year\n        frame_options: \"DENY\".to_string(),\n        max_body_bytes: 2 * 1024 * 1024, // 2MB Max Payload\n        cors_allowed_origins: vec![\n            r\"^https://.*\\.mycompany\\.com$\".to_string(),\n            r\"^https://mycompany\\.com$\".to_string(),\n        ],\n        csp_directives: vec![\n            CspDirective::default_src(vec![\"'self'\"]),\n            CspDirective::script_src(vec![\"'self'\", \"'wasm-unsafe-eval'\"]),\n            CspDirective::style_src(vec![\"'self'\", \"'unsafe-inline'\"]),\n        ],\n    })\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Permissive Content Security Policy"
        }), "\nAvoid setting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "script-src: '*'"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "default-src: '*'"
        }), " in production CSP rules. Permissive CSP directives defeat XSS protection shields."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: CSP Report-Only Mode"
        }), "\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "csp_report_only: true"
        }), " during initial production deployments to collect CSP violation reports without blocking legitimate web application assets."]
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
95307(module) {
module.exports = JSON.parse('{"id":"ferrox/security/ferrox-sentinel","title":"Ferrox Sentinel Edge Shield, CSP Directives & Payload Bouncer","description":"The ferrox-sentinel crate is the edge security bouncer for the Ferrox framework. It delivers automated HTTP security headers (Helmet CSP, HSTS, X-Frame-Options), CORS origin regex validation, payload size bouncers, and malicious request parameter sanitization.","source":"@site/docs/ferrox/security/ferrox-sentinel.md","sourceDirName":"ferrox/security","slug":"/ferrox/security/ferrox-sentinel","permalink":"/docs/ferrox/security/ferrox-sentinel","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/security/ferrox-sentinel.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"ferrox-sentinel","title":"Ferrox Sentinel Edge Shield, CSP Directives & Payload Bouncer","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Advanced Authentication, OAuth2, OpenID Connect & WebAuthn / Passkeys","permalink":"/docs/ferrox/security/advanced-auth"},"next":{"title":"Self-Test Security Suite, OWASP Scans & Latency Runner","permalink":"/docs/ferrox/security/ferrox-selftest"}}')

},

};
;