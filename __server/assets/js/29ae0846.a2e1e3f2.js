"use strict";
exports.ids = ["2761"];
exports.modules = {
93540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_security_md_29a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_security_md_29a_json__rspack_import_0 = __webpack_require__(13410);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'security',
	title: 'Sentinel AI Security & Entropy Engine',
	sidebar_position: 2
};
const contentTitle = '🛡️ Sentinel AI Threat Engine & Entropy Analysis (SentinelIntegrationService)';

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
  "value": "Shannon Entropy Calculation",
  "id": "shannon-entropy-calculation",
  "level": 3
}, {
  "value": "🧠 4. Why It Was Designed This Way (Sentinel vs Standard WAF)",
  "id": "-4-why-it-was-designed-this-way-sentinel-vs-standard-waf",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "Protecting AI Endpoints with Sentinel",
  "id": "protecting-ai-endpoints-with-sentinel",
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
        id: "️-sentinel-ai-threat-engine--entropy-analysis-sentinelintegrationservice",
        children: ["🛡️ Sentinel AI Threat Engine & Entropy Analysis (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SentinelIntegrationService"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SentinelIntegrationService"
      }), " is the heuristic security and artificial intelligence threat middleware built directly into Ferrox-Node. Its architectural purpose is to detect and neutralize advanced application attacks in real time—such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "LLM Prompt Injections"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "obfuscated SQLi/XSS payloads"
      }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "secret exfiltration"
      }), "—before requests ever reach business controllers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Shannon Payload Entropy Analysis"
        }), ": Calculates informational randomness of inbound buffers to identify binary shellcode or encrypted secrets."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "LLM Prompt Injection Defense"
        }), ": Automatic stripping of ChatML/XML injection tags (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<system>"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "[INST]"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<|im_start|>"
        }), ") in inputs bound for AI models."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Markov Anomaly Predictor"
        }), ": Evaluates HTTP endpoint traversal sequences to catch automated bots and crawlers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "RAG Hallucination & Risk Scoring"
        }), ": Scores informational credibility of AI retriever payloads."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "shannon-entropy-calculation",
      children: "Shannon Entropy Calculation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Shannon entropy calculates the amount of information uncertainty or randomness in a string or buffer:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["$$\\mathcal", H, "(X) = -\\sum_", i = 1, "^", n, " P(x_i) \\log_2 P(x_i)$$"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Where $P(x_i)$ is the relative frequency of byte $x_i$ in the payload."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Plain Text (JSON, HTML)"
        }), ": $\\mathcal", H, "(X) \\approx 3.5 - 4.8$"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Base64 Payload / Obfuscated SQLi"
        }), ": $\\mathcal", H, "(X) \\approx 5.2 - 6.5$"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Binary Shellcode / Encrypted Buffers"
        }), ": $\\mathcal", H, "(X) > 7.2$"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If $\\mathcal", H, "(X)$ exceeds the security threshold ($\\ge 7.2$), Sentinel immediately isolates the request, terminating the HTTP lifecycle with an HTTP ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "403 Forbidden"
      }), " status."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-sentinel-vs-standard-waf",
      children: "🧠 4. Why It Was Designed This Way (Sentinel vs Standard WAF)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🛡️ Ferrox Sentinel AI"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🌐 Standard WAF (Cloudflare/AWS)"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Prompt Injection Defense"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Native ChatML Stripping Engine"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "None (Inspects static HTTP Regex only)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "In-Memory Entropy Inspection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Direct Node.js Buffer Analysis"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "None / Limited to HTTP Headers"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Inspection Latency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Sub-millisecond (< 0.2ms)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Adds 10-50ms Network Latency"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Markov Sequence Predictor"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "User Traversal Route Analysis"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Static Rate-Limiting Rules"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "protecting-ai-endpoints-with-sentinel",
      children: "Protecting AI Endpoints with Sentinel"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { SentinelIntegrationService } from '@ferrox-node/core';\n\nexport class PromptSecurityController {\n  private sentinel = new SentinelIntegrationService();\n\n  async handleUserPrompt(userPrompt: string): Promise<string> {\n    // 1. Sanitize Prompt Injection (ChatML Stripping)\n    const sanitizedPrompt = this.sentinel.sanitizePrompt(userPrompt);\n\n    // 2. Evaluate Payload Entropy\n    const entropyScore = this.sentinel.calculateEntropy(Buffer.from(sanitizedPrompt));\n    console.log(`Payload Entropy Score: ${entropyScore.toFixed(2)}`);\n\n    if (entropyScore > 7.0) {\n      throw new Error('Payload blocked: abnormal entropy detected (possible shellcode or secret exfiltration).');\n    }\n\n    // 3. Securely forward to LLM Model\n    return await sendToLLM(sanitizedPrompt);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT disable sanitization on LLM input forms"
        }), ": Passing raw user inputs directly to AI model prompts without ChatML cleaning exposes your application to System Prompt Hijacking attacks."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT apply low entropy thresholds to image/ZIP file uploads"
        }), ": Legitimate binary files (JPEG, PNG, ZIP) naturally exhibit high entropy ($\\mathcal", H, "(X) > 7.5$). Apply entropy filtering selectively to text and JSON request bodies."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Selective API Scanning"
        }), ": Configure ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SentinelIntegrationService"
        }), " as a global middleware for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/api/v1/ai/*"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/api/v1/auth/*"
        }), " routes to guarantee maximum security with zero impact on static asset routes."]
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
13410(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/security","title":"Sentinel AI Security & Entropy Engine","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/ferrox-node/docs/components/security.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/security","permalink":"/docs/ferrox-node/docs/components/security","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/security.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"security","title":"Sentinel AI Security & Entropy Engine","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Dynamic Configuration Engine & Validation Schemas","permalink":"/docs/ferrox-node/docs/components/config"},"next":{"title":"Kernel Sandbox (Seccomp & Landlock)","permalink":"/docs/ferrox-node/docs/components/kernel"}}')

},

};
;