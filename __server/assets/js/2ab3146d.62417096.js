"use strict";
exports.ids = ["2045"];
exports.modules = {
77028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_auth_md_2ab_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_auth_md_2ab_json__rspack_import_0 = __webpack_require__(10983);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'auth',
	title: 'Authentication (PASETO v4 & TOTP 2FA)',
	sidebar_position: 1
};
const contentTitle = '🔒 Authentication: PASETO v4 & TOTP 2FA (PasetoAuthService)';

const assets = {

};



const toc = [{
  "value": "💡 1. What It Is &amp; Architectural Purpose",
  "id": "-1-what-it-is--architectural-purpose",
  "level": 2
}, {
  "value": "⚙️ 2. What It Does &amp; Key Features",
  "id": "️-2-what-it-does--key-features",
  "level": 2
}, {
  "value": "🔬 3. How It Works Under the Hood",
  "id": "-3-how-it-works-under-the-hood",
  "level": 2
}, {
  "value": "PASETO v4 Cryptographic Primitives",
  "id": "paseto-v4-cryptographic-primitives",
  "level": 3
}, {
  "value": "🧠 4. Why It Was Designed This Way (Rationale vs JWT)",
  "id": "-4-why-it-was-designed-this-way-rationale-vs-jwt",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "Generating and Verifying <code>v4.local</code> Tokens",
  "id": "generating-and-verifying-v4local-tokens",
  "level": 3
}, {
  "value": "Setting Up TOTP 2FA",
  "id": "setting-up-totp-2fa",
  "level": 3
}, {
  "value": "⚠️ 6. Anti-Patterns: How NOT to Use It",
  "id": "️-6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "💡 7. Pro-Tips &amp; Best Practices",
  "id": "-7-pro-tips--best-practices",
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
        id: "-authentication-paseto-v4--totp-2fa-pasetoauthservice",
        children: ["🔒 Authentication: PASETO v4 & TOTP 2FA (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "PasetoAuthService"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "PasetoAuthService"
      }), " is the native cryptographic authentication service of Ferrox-Node. It was engineered to completely replace legacy ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "JSON Web Tokens (JWT)"
      }), " with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "PASETO v4 (Platform-Agnostic Security Tokens)"
      }), " specification, while providing out-of-the-box support for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "TOTP 2FA (Time-Based One-Time Password, RFC 6238)"
      }), " multi-factor authentication."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["PASETO v4 Symmetric Tokens (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "v4.local"
          }), ")"]
        }), ": AEAD authenticated symmetric encryption for high-speed session management."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["PASETO v4 Asymmetric Tokens (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "v4.public"
          }), ")"]
        }), ": Asymmetric Ed25519 digital signatures for distributed microservice architectures."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Native JWT Exploit Prevention"
        }), ": Immune to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "alg: none"
        }), " attacks, algorithm manipulation, and RSA/HMAC key confusion exploits."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["TOTP 2FA Subsystem (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "TotpAuthService"
          }), ")"]
        }), ": Generation of TOTP secrets, Google Authenticator/Authy compatible QR-Code URIs, and time-step verification windows."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "paseto-v4-cryptographic-primitives",
      children: "PASETO v4 Cryptographic Primitives"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "                   PASETO v4.local (Symmetric Token)\n +-------------------------------------------------------------------+\n | Header: \"v4.local.\" | Nonce (24 bytes) | Encrypted Payload + AEAD Tag |\n +-------------------------------------------------------------------+\n        ^ (Encrypted using XChaCha20-Poly1305 + BLAKE2b MAC)\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "v4.local"
          })
        }), ": Employs ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "XChaCha20-Poly1305"
        }), " AEAD encryption with an extended 24-byte cryptographically secure random nonce (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "crypto.randomBytes(24)"
        }), "). This eliminates any risk of nonce reuse vulnerabilities."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "v4.public"
          })
        }), ": Employs ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Ed25519"
        }), " (EdDSA over Curve25519) elliptic curve digital signatures with BLAKE2b hashing to sign claims non-repudiably."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-rationale-vs-jwt",
      children: "🧠 4. Why It Was Designed This Way (Rationale vs JWT)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🔒 PASETO v4 (Ferrox-Node)"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "⚠️ JWT (JSON Web Tokens)"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Algorithm Agility"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Non-existent (Crypto-Agility Avoided for Security)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Permissive (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "alg: none"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "HS256"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "RS256"
            }), " attacker-controlled)"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Symmetric Encryption"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "XChaCha20-Poly1305 AEAD"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "AES-CBC (Vulnerable to Padding Oracles) or Unencrypted"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Asymmetric Signatures"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Ed25519 (Curve25519)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "RSA 2048/4096 (Slow, Key Confusion Vulnerabilities)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Payload Parsing"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Strict Versioning (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "v4.local."
              }), " / ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "v4.public."
              }), ")"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Flexibly parsed Base64 JSON (Manipulable)"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "generating-and-verifying-v4local-tokens",
      children: ["Generating and Verifying ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "v4.local"
      }), " Tokens"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PasetoAuthService } from '@ferrox-node/core';\nimport crypto from 'crypto';\n\nasync function authWorkflow() {\n  const authService = new PasetoAuthService();\n  const secretKey = crypto.randomBytes(32); // 256-bit symmetric key\n\n  // 1. Generate Symmetric Token\n  const payload = { userId: 'usr_88192', role: 'admin', tenantId: 'org_acme' };\n  const token = await authService.generateV4LocalToken(payload, secretKey, {\n    expiresIn: '2h',\n    issuer: 'ferrox-auth-engine'\n  });\n\n  console.log('Generated PASETO Token:', token);\n\n  // 2. Decrypt & Verify Token Claims\n  const verifiedClaims = await authService.verifyV4LocalToken(token, secretKey);\n  console.log('Verified Claims:', verifiedClaims.userId, verifiedClaims.role);\n}\n\nauthWorkflow().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "setting-up-totp-2fa",
      children: "Setting Up TOTP 2FA"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { TotpAuthService } from '@ferrox-node/core';\n\nasync function setupTwoFactor(userId: string) {\n  const totpService = new TotpAuthService();\n\n  // 1. Generate TOTP Secret\n  const { secret, qrCodeUrl } = await totpService.generateSecret('Acme Corp', userId);\n  console.log('Scan QR Code URL:', qrCodeUrl);\n\n  // 2. Verify 6-digit User Code\n  const userEnteredCode = '582910';\n  const isValid = totpService.verifyCode(secret, userEnteredCode);\n\n  if (!isValid) {\n    throw new Error('Invalid or expired 2FA code!');\n  }\n\n  console.log('2FA Authentication Successful!');\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT hardcode symmetric Secret Keys in source code"
        }), ": Storing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "v4.local"
        }), " decryption keys inside TypeScript files leaks credentials if your repository is compromised."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["DO NOT use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "v4.local"
          }), " for untrusted inter-service communication"]
        }), ": For token verification across distributed microservices that do not share a database, use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "v4.public"
          })
        }), " and distribute only the public key to consumer nodes."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["DO NOT ignore ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "exp"
          }), " (Expiration Time)"]
        }), ": Issuing tokens without scadenze or with expirations exceeding 24 hours increases the window of impact for session hijack attacks."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Encryption Key Rotation"
        }), ": Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ConfigEngine"
        }), " to inject cryptographic keys as hex-encoded strings from secure environment variables (such as AWS Secrets Manager or HashiCorp Vault)."]
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
10983(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/auth","title":"Authentication (PASETO v4 & TOTP 2FA)","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/ferrox-node/docs/components/auth.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/auth","permalink":"/docs/ferrox-node/docs/components/auth","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/auth.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"auth","title":"Authentication (PASETO v4 & TOTP 2FA)","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart Guide & Service Bootstrap","permalink":"/docs/ferrox-node/docs/quickstart"},"next":{"title":"Native DI Container & App Lifecycle","permalink":"/docs/ferrox-node/docs/components/core"}}')

},

};
;