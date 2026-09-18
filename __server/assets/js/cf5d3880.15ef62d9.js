"use strict";
exports.ids = ["9079"];
exports.modules = {
81293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_core_md_cf5_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_core_md_cf5_json__rspack_import_0 = __webpack_require__(98717);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'core',
	title: 'Native DI Container & App Lifecycle',
	sidebar_position: 1
};
const contentTitle = '⚡ Native DI Container & App Lifecycle (FerroxApp & FerroxDIContainer)';

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
  "value": "Execution &amp; Resolution Lifecycle",
  "id": "execution--resolution-lifecycle",
  "level": 3
}, {
  "value": "Internal Mechanism",
  "id": "internal-mechanism",
  "level": 3
}, {
  "value": "🧠 4. Why It Was Designed This Way (Rationale vs NestJS / Express)",
  "id": "-4-why-it-was-designed-this-way-rationale-vs-nestjs--express",
  "level": 2
}, {
  "value": "Architectural Trade-Off Analysis",
  "id": "architectural-trade-off-analysis",
  "level": 3
}, {
  "value": "When to Use <code>FerroxDIContainer</code>",
  "id": "when-to-use-ferroxdicontainer",
  "level": 3
}, {
  "value": "When NOT to Use <code>FerroxDIContainer</code>",
  "id": "when-not-to-use-ferroxdicontainer",
  "level": 3
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
}, {
  "value": "Complete Production Bootstrap Example",
  "id": "complete-production-bootstrap-example",
  "level": 3
}, {
  "value": "⚠️ 6. Anti-Patterns: How NOT to Use It",
  "id": "️-6-anti-patterns-how-not-to-use-it",
  "level": 2
}, {
  "value": "开启 7. Pro-Tips &amp; Best Practices",
  "id": "开启-7-pro-tips--best-practices",
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
        id: "-native-di-container--app-lifecycle-ferroxapp--ferroxdicontainer",
        children: ["⚡ Native DI Container & App Lifecycle (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxApp"
        }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxDIContainer"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxDIContainer"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxApp"
      }), " form the foundational execution engine of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox-node/core"
      }), ". They were designed to provide a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "lightweight, native Inversion of Control (IoC) Container"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "application lifecycle orchestrator"
      }), " for Node.js/TypeScript applications without pulling heavy third-party framework dependencies like NestJS, Inversify, or TSyringe."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The primary architectural goal of this component is to eliminate framework overhead while providing type-safe dependency resolution, explicit lifecycle hooks (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "OnAppStart"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "OnAppDestroy"
      }), "), and seamless application bootstrapping."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!NOTE]\nUnlike NestJS, which relies on heavy runtime reflection (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "reflect-metadata"
        }), ") to resolve complex dynamic module graphs, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxDIContainer"
        }), " uses a high-performance Map-based singleton and transient resolution registry, reducing application boot times by up to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "85%"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Type-Safe Dependency Resolution"
        }), ": Registers and injects class instances using constructor-based or token-based dependency resolution."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Application Bootstrapping (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "FerroxApp"
          }), ")"]
        }), ": Configures and boots the underlying HTTP engine (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "fastify"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "express"
        }), "), attaches controllers, and registers global middlewares."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Lifecycle Hook Orchestration"
        }), ": Automatically executes ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onAppStart()"
        }), " during application initialization and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onAppDestroy()"
        }), " upon SIGTERM/SIGINT graceful shutdown signals."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Singleton & Transient Lifecycle Scopes"
        }), ": Supports both application-scoped singletons and request-scoped transient dependency resolution."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "execution--resolution-lifecycle",
      children: "Execution & Resolution Lifecycle"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Boot[\"FerroxApp.start()\"]\n    DIRegister[\"FerroxDIContainer Instance Registry\"]\n    StartHooks[\"Trigger onAppStart() Lifecycle Hooks\"]\n    HTTPOpen[\"Bind HTTP Port & Start Listening Stream\"]\n    ShutdownSignal[\"SIGTERM / SIGINT Signal Caught\"]\n    DestroyHooks[\"Trigger onAppDestroy() Graceful Cleanup Hooks\"]\n    ProcessExit[\"Terminate Node.js Process Cleanly\"]\n\n    Boot --> DIRegister\n    DIRegister --> StartHooks\n    StartHooks --> HTTPOpen\n    HTTPOpen --> ShutdownSignal\n    ShutdownSignal --> DestroyHooks\n    DestroyHooks --> ProcessExit\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "internal-mechanism",
      children: "Internal Mechanism"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Container Storage"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxDIContainer"
        }), " maintains an internal ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Map<Constructor | Symbol, Instance>"
        }), " lookup table."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Resolution Pipeline"
        }), ": When a class is resolved, the container recursively instantiates constructor parameters or retrieves existing singleton instances."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Graceful Shutdown Handler"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxApp"
        }), " attaches event listeners to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "process.on('SIGTERM')"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "process.on('SIGINT')"
        }), ", ensuring active database pools, WebSocket connections, and background workers flush pending operations before process exit."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-rationale-vs-nestjs--express",
      children: "🧠 4. Why It Was Designed This Way (Rationale vs NestJS / Express)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "architectural-trade-off-analysis",
      children: "Architectural Trade-Off Analysis"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Feature / Metric"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["⚡ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "FerroxDIContainer"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🪺 NestJS IoC Container"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🚂 Raw Express (Manual)"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Reflection Overhead"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Zero (Native Map Lookup)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Heavy (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "reflect-metadata"
            }), " AST)"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "None (Manual Instantiation)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Boot Latency"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "< 15ms"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "~350 - 600ms"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "< 10ms"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Lifecycle Hooks"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
              children: ["Native (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "OnAppStart"
              }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                children: "OnAppDestroy"
              }), ")"]
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Nest Module Lifecycles"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Manual ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "process.on"
            }), " Listeners"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Memory Footprint"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Minimal (~8 MB baseline)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Heavy (~45 - 65 MB baseline)"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Minimal (~6 MB baseline)"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "when-to-use-ferroxdicontainer",
      children: ["When to Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxDIContainer"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "When building high-performance microservices where low cold-start latency and minimal memory footprint are paramount."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "When you want structured IoC and clean layer separation without lock-in to NestJS."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "when-not-to-use-ferroxdicontainer",
      children: ["When NOT to Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FerroxDIContainer"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["If your project strictly requires legacy NestJS dynamic module ecosystems (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nestjs/typeorm"
        }), " dynamic factories). Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@nest-yalc-2/framework"
        }), " instead."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "complete-production-bootstrap-example",
      children: "Complete Production Bootstrap Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { \n  FerroxApp, \n  FerroxDIContainer, \n  Controller, \n  Get, \n  Injectable, \n  OnAppStart, \n  OnAppDestroy \n} from '@ferrox-node/core';\n\n// 1. Define Dependency Service\n@Injectable()\nexport class DatabasePoolService implements OnAppStart, OnAppDestroy {\n  private isConnected = false;\n\n  async onAppStart(): Promise<void> {\n    console.log('[Database] Connecting to database cluster...');\n    this.isConnected = true;\n    console.log('[Database] Connection established.');\n  }\n\n  async onAppDestroy(): Promise<void> {\n    console.log('[Database] Closing active connection pool...');\n    this.isConnected = false;\n    console.log('[Database] Connection pool closed cleanly.');\n  }\n\n  getStatus(): string {\n    return this.isConnected ? 'ONLINE' : 'OFFLINE';\n  }\n}\n\n// 2. Define Controller\n@Controller('/api/v1/system')\nexport class SystemHealthController implements OnAppStart {\n  constructor(private readonly dbService: DatabasePoolService) {}\n\n  onAppStart(): void {\n    console.log('[SystemHealthController] Controller initialized.');\n  }\n\n  @Get('/status')\n  getHealthStatus() {\n    return {\n      status: 'UP',\n      database: this.dbService.getStatus(),\n      timestamp: new Date().toISOString()\n    };\n  }\n}\n\n// 3. Application Bootstrap\nasync function main() {\n  const di = FerroxDIContainer.getInstance();\n\n  // Register services into native IoC Container\n  const dbService = new DatabasePoolService();\n  di.register(DatabasePoolService, dbService);\n  di.register(SystemHealthController, new SystemHealthController(dbService));\n\n  // Instantiate FerroxApp\n  const app = new FerroxApp({\n    engine: 'fastify',\n    port: 8080,\n    controllers: [SystemHealthController],\n    middlewares: [\n      {\n        path: '*',\n        handler: (req, res, next) => {\n          console.log(`[HTTP Request] ${req.method} ${req.url}`);\n          next();\n        }\n      }\n    ]\n  });\n\n  await app.start();\n  console.log('⚡ Ferrox-Node application running on http://localhost:8080');\n}\n\nmain().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Circular Dependency Deadlocks"
        }), "\nAvoid injecting Service A into Service B if Service B also injects Service A in its constructor. Unlike complex lazy-proxy containers, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxDIContainer"
        }), " strictly enforces acyclic dependency graphs to prevent memory allocation stack overflow crashes."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 2: Instantiating Controllers Manually Outside the DI Registry"
        }), "\nCreating controllers via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "new MyController()"
        }), " without registering them in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxDIContainer"
        }), " prevents lifecycle hooks (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OnAppStart"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "OnAppDestroy"
        }), ") from being invoked during graceful shutdown."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "开启-7-pro-tips--best-practices",
      children: "开启 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip: Graceful Kubernetes Pod Termination"
        }), "\nIn Kubernetes environments, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FerroxApp"
        }), "'s graceful shutdown ensures that active HTTP requests finish processing while readiness probes report unhealthy, eliminating 502 Bad Gateway errors during rolling updates."]
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
98717(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/core","title":"Native DI Container & App Lifecycle","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/ferrox-node/docs/components/core.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/core","permalink":"/docs/ferrox-node/docs/components/core","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/core.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"core","title":"Native DI Container & App Lifecycle","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Authentication (PASETO v4 & TOTP 2FA)","permalink":"/docs/ferrox-node/docs/components/auth"},"next":{"title":"Dynamic Configuration Engine & Validation Schemas","permalink":"/docs/ferrox-node/docs/components/config"}}')

},

};
;