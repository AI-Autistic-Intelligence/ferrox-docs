"use strict";
exports.ids = ["7511"];
exports.modules = {
57830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_security_md_079_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_security_md_079_json__rspack_import_0 = __webpack_require__(65124);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'security',
	title: 'Zero-Trust Wasm Security, WebCrypto & XSS Sanitization',
	sidebar_position: 6
};
const contentTitle = 'Zero-Trust Wasm Security, WebCrypto & XSS Sanitization';

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
  "value": "WebCrypto AES-256-GCM Encryption Sequence",
  "id": "webcrypto-aes-256-gcm-encryption-sequence",
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
  "value": "5.1 AES-256-GCM Encryption and Decryption",
  "id": "51-aes-256-gcm-encryption-and-decryption",
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
        id: "zero-trust-wasm-security-webcrypto--xss-sanitization",
        children: "Zero-Trust Wasm Security, WebCrypto & XSS Sanitization"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-security"
      }), " crate delivers zero-trust security for Rust WebAssembly applications. It features browser WebCrypto API bindings (AES-256-GCM, RSA-OAEP, ECDSA), zero-copy linear memory wiping (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Zeroize"
      }), "), secure storage adapters, and HTML XSS sanitizers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Standard JavaScript web applications store sensitive tokens (JWTs, encryption keys, PII) in plain text inside JavaScript objects or localStorage, leaving them exposed to cross-site scripting (XSS) extraction attacks and browser extension inspection."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-security"
      }), " implements zero-trust security inside WebAssembly linear memory. It encrypts sensitive payloads in Wasm memory using AES-256-GCM via the browser's native WebCrypto subsystem, automatically wiping sensitive byte arrays from linear memory when dropped."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                    Ferrox Zero-Trust Wasm Security                     │\n├──────────────────────────────────┬─────────────────────────────────────┤\n│  Wasm Linear Memory Encryption   │  WebCrypto Subsystem Integration    │\n│  • Automatic Zeroize Memory Wipe │  • AES-256-GCM Authenticated Cipher│\n│  • Memory Protection Boundaries  │  • SubtleCrypto Hardware Acceleration│\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\n                 │ Secure Key Storage\n                 ▼\n┌────────────────────────────────────────────────────────────────────────┐\n│                        Encrypted Browser Storage                       │\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "AES-256-GCM Cryptography"
        }), ": Authenticated symmetric encryption and decryption using WebCrypto hardware acceleration."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Zeroize"
          }), " Memory Hardening"]
        }), ": Wipes sensitive cryptographic keys and token byte slices from Wasm linear memory on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Drop"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HTML XSS Sanitization"
        }), ": Strips dangerous script tags, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "javascript:"
        }), " URIs, and un-sanitized HTML attributes prior to DOM rendering."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Secure Encrypted Storage"
        }), ": Encrypts sensitive localStorage keys with ephemeral Wasm master keys."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "webcrypto-aes-256-gcm-encryption-sequence",
      children: "WebCrypto AES-256-GCM Encryption Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant App as Rust Component State\n    participant Sec as ferrox-front-security Engine\n    participant Crypto as Browser WebCrypto API\n    participant Storage as Encrypted Storage Container\n\n    App->>Sec: Encrypt Token Payload (\"secret_jwt_data\")\n    Sec->>Sec: Generate 12-byte Cryptographic Nonce / IV\n    Sec->>Crypto: SubtleCrypto.encrypt(AES-GCM, Key, Payload)\n    Crypto-->>Sec: Return Encrypted Ciphertext + Auth Tag ArrayBuffer\n    Sec->>Storage: Store Base64 Ciphertext\n    Sec->>Sec: Zeroize Raw Payload Bytes from Wasm Memory\n"
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
            children: "Standard JavaScript Security"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox Wasm Security"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Key Exposure"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JS keys visible in browser dev console memory inspection."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Keys kept inside isolated Wasm linear memory."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "XSS Immunity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Malicious scripts can steal ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "window.localStorage"
            }), " tokens."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Encrypted storage requires Wasm master key to decipher."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Memory Cleanup"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GC leaves sensitive string buffers in RAM indefinitely."
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Zeroize"
            }), " overwrites sensitive memory with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "0x00"
            }), " on drop."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-aes-256-gcm-encryption-and-decryption",
      children: "5.1 AES-256-GCM Encryption and Decryption"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_security::{CryptoEngine, SecureBuffer};\n\npub async fn encrypt_sensitive_token(token: &str) -> Result<String, String> {\n    let crypto = CryptoEngine::new()?;\n\n    // Generate ephemeral AES-256-GCM key\n    let key = crypto.generate_aes_key().await?;\n\n    // Encrypt string payload into secure buffer\n    let encrypted_data = crypto.encrypt_aes_gcm(&key, token.as_bytes()).await?;\n\n    // Decrypt payload back\n    let decrypted_bytes = crypto.decrypt_aes_gcm(&key, &encrypted_data).await?;\n    let decrypted_string = String::from_utf8(decrypted_bytes).map_err(|e| e.to_string())?;\n\n    assert_eq!(token, decrypted_string);\n    Ok(encrypted_data.to_base64())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Storing Plaintext Passwords in Long-Lived Strings"
        }), "\nAvoid storing raw user passwords or API tokens in long-lived Rust ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "String"
        }), " structs without wrapping them in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SecureBuffer"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Zeroize"
        }), " wrappers. Plain strings persist in Wasm memory until garbage collection."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Content Security Policy (CSP)"
        }), "\nAlways pair ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ferrox-front-security"
        }), " with a strict HTTP Content Security Policy (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "script-src 'wasm-unsafe-eval' 'self'"
        }), ") to prevent unauthorized external script injections."]
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
65124(module) {
module.exports = JSON.parse('{"id":"ferrox-front/security","title":"Zero-Trust Wasm Security, WebCrypto & XSS Sanitization","description":"The ferrox-front-security crate delivers zero-trust security for Rust WebAssembly applications. It features browser WebCrypto API bindings (AES-256-GCM, RSA-OAEP, ECDSA), zero-copy linear memory wiping (Zeroize), secure storage adapters, and HTML XSS sanitizers.","source":"@site/docs/ferrox-front/security.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/security","permalink":"/docs/ferrox-front/security","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/security.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"security","title":"Zero-Trust Wasm Security, WebCrypto & XSS Sanitization","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Component Library & Interactive Playground","permalink":"/docs/ferrox-front/components"},"next":{"title":"Real-Time WebSockets Engine (ferrox-front-ws)","permalink":"/docs/ferrox-front/ws"}}')

},

};
;