"use strict";
exports.ids = ["6696"];
exports.modules = {
88272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_config_md_e74_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_config_md_e74_json__rspack_import_0 = __webpack_require__(31774);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'config',
	title: 'Dynamic Configuration Engine & Validation Schemas',
	sidebar_position: 2
};
const contentTitle = 'Dynamic Configuration Engine & Validation Schemas';

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
  "value": "Configuration Loading &amp; Validation Sequence",
  "id": "configuration-loading--validation-sequence",
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
  "value": "5.1 Defining a Zod Configuration Schema",
  "id": "51-defining-a-zod-configuration-schema",
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
        id: "dynamic-configuration-engine--validation-schemas",
        children: "Dynamic Configuration Engine & Validation Schemas"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " config module provides environment variable parsing, YAML / JSON configuration file loading, runtime schema validation (via Zod / Joi), secrets manager integration (AWS Secrets Manager / Vault), and hot-reloading settings managers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Managing application configuration across multiple environments (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "development"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "staging"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "production"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "k8s"
      }), ") can lead to runtime crashes when required environment variables are missing or misconfigured (e.g., passing string ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"3000\""
      }), " to a port variable that expects a number)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ConfigEngine"
      }), " in Ferrox Node guarantees environment configuration integrity. It loads environment variables, validates them against strict Zod/Joi schemas on application startup, and provides strongly typed accessors across the microservice codebase."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                         Ferrox ConfigEngine                            │\n├────────────────────────────────────────────────────────────────────────┤\n│  1. Load Environment Files (.env, .env.local, app.config.yaml)         │\n│  2. Fetch Dynamic Secrets (AWS Secrets Manager / HashiCorp Vault)      │\n│  3. Validate against Zod / Joi Schema (Fail-Fast on Missing Env)       │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Strongly Typed AppConfig Object\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ Database Module      ││ Kafka Producer Pool  ││ Redis Cache Cluster  │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Fail-Fast Startup Validation"
        }), ": Halts application bootstrap immediately with descriptive error logs if required variables are missing or malformed."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Multi-Source Layering"
        }), ": Merges environment variables (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "process.env"
        }), "), local ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".env"
        }), " files, YAML configuration files, and remote Cloud Secrets Managers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Strongly Typed Accessors"
        }), ": Provides ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "config.get('database.port')"
        }), " with full TypeScript type inferencing."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Sensitive Key Redaction"
        }), ": Prevents sensitive keys (passwords, JWT secrets, API tokens) from leaking in log files or debug outputs."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configuration-loading--validation-sequence",
      children: "Configuration Loading & Validation Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant App as Main Application\n    participant Config as ConfigEngine\n    participant Vault as Cloud Secrets Manager\n    participant Schema as Zod Schema Validator\n\n    App->>Config: ConfigEngine.load({ schema: AppConfigSchema })\n    Config->>Config: Read process.env & .env.local\n    Config->>Vault: Fetch Dynamic Secrets ('prod/db/secret')\n    Vault-->>Config: Return Encrypted Credentials\n    Config->>Schema: Validate Merged Config Object against Schema\n    alt Validation Succeeded\n        Schema-->>Config: Clean Validated Config Object\n        Config-->>App: Strongly Typed ConfigInstance\n    else Validation Failed\n        Schema-->>Config: Throw ValidationException (Missing Required Vars)\n        Config-->>App: Halt Application Bootstrap (Exit Code 1)\n    end\n"
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
            children: "Raw process.env Access"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox ConfigEngine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Type Safety"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Everything is `string"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["undefined", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: ". Requires manual "
            }), "parseInt()`."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Fail Fast"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "App crashes 2 hours into runtime when missing API key is hit."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "App fails immediately during startup before serving requests."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Secrets"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Hardcoded secrets in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: ".env"
            }), " committed to git."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dynamic resolution from AWS Secrets Manager or HashiCorp Vault."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-defining-a-zod-configuration-schema",
      children: "5.1 Defining a Zod Configuration Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { z } from 'zod';\nimport { ConfigEngine } from '@ferrox/node';\n\nexport const AppConfigSchema = z.object({\n  NODE_ENV: z.enum(['development', 'staging', 'production', 'test']).default('development'),\n  PORT: z.coerce.number().default(3000),\n  DATABASE_URL: z.string().url(),\n  REDIS_HOST: z.string().default('localhost'),\n  REDIS_PORT: z.coerce.number().default(6379),\n  JWT_SECRET: z.string().min(32),\n});\n\nexport type AppConfig = z.infer<typeof AppConfigSchema>;\n\nexport function loadApplicationConfig(): AppConfig {\n  return ConfigEngine.load({\n    schema: AppConfigSchema,\n    envFilePath: ['.env.local', '.env'],\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Anti-Pattern 1: Directly Reading ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "process.env"
          }), " in Domain Services"]
        }), "\nAvoid reading ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "process.env.MY_VAR"
        }), " directly inside business services. Always inject the validated ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppConfig"
        }), " instance to ensure type safety and centralized default handling."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Dynamic Secret Refresh"
        }), "\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ConfigEngine.registerRefreshHook()"
        }), " to periodically refresh DB passwords from AWS Secrets Manager without requiring application pod restarts."]
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
31774(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/config","title":"Dynamic Configuration Engine & Validation Schemas","description":"The @ferrox/node config module provides environment variable parsing, YAML / JSON configuration file loading, runtime schema validation (via Zod / Joi), secrets manager integration (AWS Secrets Manager / Vault), and hot-reloading settings managers.","source":"@site/docs/ferrox-node/docs/components/config.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/config","permalink":"/docs/ferrox-node/docs/components/config","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/config.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"config","title":"Dynamic Configuration Engine & Validation Schemas","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Native DI Container & App Lifecycle","permalink":"/docs/ferrox-node/docs/components/core"},"next":{"title":"Sentinel AI Security & Entropy Engine","permalink":"/docs/ferrox-node/docs/components/security"}}')

},

};
;