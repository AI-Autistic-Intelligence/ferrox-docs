"use strict";
exports.ids = ["4880"];
exports.modules = {
93870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_i_18_n_md_e1f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_i_18_n_md_e1f_json__rspack_import_0 = __webpack_require__(77500);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'i18n',
	title: 'Internationalization (I18n)',
	sidebar_position: 12
};
const contentTitle = '🌐 Internationalization Engine (I18nEngine)';

const assets = {

};



const toc = [{
  "value": "🌟 Key Features",
  "id": "-key-features",
  "level": 2
}, {
  "value": "🔬 Internal Architecture &amp; Execution Mechanics",
  "id": "-internal-architecture--execution-mechanics",
  "level": 2
}, {
  "value": "📊 Architectural Comparison: <code>I18nEngine</code> vs Manual Localization",
  "id": "-architectural-comparison-i18nengine-vs-manual-localization",
  "level": 2
}, {
  "value": "🚀 Practical Usage &amp; Production Code Examples",
  "id": "-practical-usage--production-code-examples",
  "level": 2
}, {
  "value": "1. Initializing and Using <code>I18nEngine</code>",
  "id": "1-initializing-and-using-i18nengine",
  "level": 3
}, {
  "value": "⚠️ Common Pitfalls &amp; Anti-Patterns",
  "id": "️-common-pitfalls--anti-patterns",
  "level": 2
}, {
  "value": "💡 Best Practices",
  "id": "-best-practices",
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
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h1, {
        id: "-internationalization-engine-i18nengine",
        children: ["🌐 Internationalization Engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "I18nEngine"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "I18nEngine"
      }), " is the native multi-language translation and localization component of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox-node/core"
      }), ". It parses inbound HTTP ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Accept-Language"
      }), " headers, resolves localized translation dictionaries, and performs dynamic variable interpolation for global microservices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-key-features",
      children: "🌟 Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Accept-Language"
          }), " Header Parser"]
        }), ": Parses and ranks complex HTTP ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Accept-Language"
        }), " header strings (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7"
        }), ") using quality weight ($q$-factor) algorithms."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Variable Interpolation"
        }), ": Replaces template parameters dynamically (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"Welcome, {{name}}!\""
        }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"Benvenuto, Mario!\""
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pluralization & Fallback Locales"
        }), ": Fallback resolution to default application locales (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "en"
        }), ") if specific translations are missing."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "JSON / YAML Dictionary Loaders"
        }), ": Asynchronously loads translation dictionaries from local disk or memory buffers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-internal-architecture--execution-mechanics",
      children: "🔬 Internal Architecture & Execution Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    InboundHeader[\"Accept-Language: it-IT,it;q=0.9,en-US;q=0.8\"]\n    Parser[\"I18nEngine Header Parser & Quality Scorer\"]\n    MatchLocale[\"Match Best Available Locale (it)\"]\n    DictLookup[\"Translation Dictionary Lookup\"]\n    Interpolate[\"Variable Interpolation Engine\"]\n    Result[\"Return Translated String\"]\n\n    InboundHeader --> Parser\n    Parser --> MatchLocale\n    MatchLocale --> DictLookup\n    DictLookup --> Interpolate\n    Interpolate --> Result\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-architectural-comparison-i18nengine-vs-manual-localization",
      children: ["📊 Architectural Comparison: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "I18nEngine"
      }), " vs Manual Localization"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Dimension"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🌐 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "I18nEngine"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Manual String Translation"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "Accept-Language"
              }), " $q$-Factor Parsing"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automatic Quality Weight Matching"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Manual String Splitting"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Fallback Locales"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Automatic Default Locale Fallback"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Hardcoded Defaults"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Pre-Parsed Dictionary Maps in Memory"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Repeated File Reads"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-practical-usage--production-code-examples",
      children: "🚀 Practical Usage & Production Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-initializing-and-using-i18nengine",
      children: ["1. Initializing and Using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "I18nEngine"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { I18nEngine } from '@ferrox-node/core';\n\n// Initialize I18n Engine with translation dictionaries\nconst i18n = new I18nEngine({\n  defaultLocale: 'en',\n  supportedLocales: ['en', 'it', 'es', 'de'],\n  translations: {\n    en: {\n      user: {\n        welcome: 'Welcome back, {{name}}!',\n        error_not_found: 'User entity {{id}} was not found.',\n      },\n    },\n    it: {\n      user: {\n        welcome: 'Bentornato, {{name}}!',\n        error_not_found: 'L\\'utente con ID {{id}} non è stato trovato.',\n      },\n    },\n  },\n});\n\n// Translate using explicit locale or Accept-Language header string\nconst italianGreeting = i18n.translate('user.welcome', 'it-IT,it;q=0.9', { name: 'Mario' });\nconsole.log(italianGreeting); // \"Bentornato, Mario!\"\n\nconst englishError = i18n.translate('user.error_not_found', 'en', { id: 'usr-100' });\nconsole.log(englishError); // \"User entity usr-100 was not found.\"\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-common-pitfalls--anti-patterns",
      children: "⚠️ Common Pitfalls & Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Hardcoding User-Facing Exception Messages"
        }), ": Hardcoding plaintext English strings in exception throws prevents clients from receiving localized messages. Use translation key IDs (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "errors.user_not_found"
        }), ") and translate via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "I18nEngine"
        }), " in response interceptors."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-best-practices",
      children: "💡 Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Caching Dictionary Lookup Trees"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "I18nEngine"
        }), " pre-compiles dictionary keys into nested Map structures during startup to ensure sub-microsecond lookup times during HTTP request handling."]
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
77500(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/i18n","title":"Internationalization (I18n)","description":"I18nEngine is the native multi-language translation and localization component of @ferrox-node/core. It parses inbound HTTP Accept-Language headers, resolves localized translation dictionaries, and performs dynamic variable interpolation for global microservices.","source":"@site/docs/ferrox-node/docs/components/i18n.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/i18n","permalink":"/docs/ferrox-node/docs/components/i18n","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/i18n.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"i18n","title":"Internationalization (I18n)","sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Circuit Breaker, Singleflight & Resilience Patterns","permalink":"/docs/ferrox-node/docs/components/resilience"},"next":{"title":"Multi-Protocol Routing Engine & Dynamic Controllers","permalink":"/docs/ferrox-node/docs/components/routing"}}')

},

};
;