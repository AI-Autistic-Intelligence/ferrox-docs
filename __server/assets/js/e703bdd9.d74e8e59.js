"use strict";
exports.ids = ["7056"];
exports.modules = {
9051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_kernel_md_e70_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_kernel_md_e70_json__rspack_import_0 = __webpack_require__(31411);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'kernel',
	title: 'Kernel Sandbox (Seccomp & Landlock)',
	sidebar_position: 3
};
const contentTitle = '🛡️ Linux Kernel Sandboxing (KernelSandboxService)';

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
  "value": "🧠 4. Why It Was Designed This Way (Kernel Sandboxing vs Container Isolation)",
  "id": "-4-why-it-was-designed-this-way-kernel-sandboxing-vs-container-isolation",
  "level": 2
}, {
  "value": "🚀 5. Practical Usage Guide &amp; Extended Code Examples",
  "id": "-5-practical-usage-guide--extended-code-examples",
  "level": 2
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
        id: "️-linux-kernel-sandboxing-kernelsandboxservice",
        children: ["🛡️ Linux Kernel Sandboxing (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "KernelSandboxService"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "KernelSandboxService"
      }), " is the kernel-level process isolation component of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox-node/core"
      }), ". Its architectural purpose is to enforce ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Zero-Trust process sandboxing"
      }), " for Node.js worker processes running on Linux hosts, using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Seccomp BPF"
      }), " (Secure Computing Mode with Berkeley Packet Filters) and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Landlock LSM"
      }), " (Linux Security Module)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!IMPORTANT]\nIf an attacker achieves Remote Code Execution (RCE) via a vulnerable NPM dependency, standard Node.js applications allow full access to system calls (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "execve"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ptrace"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "connect"
        }), ") and host filesystems (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/etc/passwd"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/root/.ssh"
        }), "). ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "KernelSandboxService"
        }), " restricts Linux kernel capabilities, turning RCE exploits into inert operations."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Seccomp BPF Syscall Filtering"
        }), ": Restricts allowable Linux system calls (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "execve"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ptrace"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "kexec_load"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "socketcall"
        }), ") for the Node.js process."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Landlock LSM Filesystem Isolation"
        }), ": Restricts read/write access to approved directory paths (e.g., granting read access only to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/var/app/dist"
        }), " and write access to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/tmp"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "LSASS & Process Telemetry"
        }), ": Monitors for unauthorized process handle accesses and memory inspection attempts."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic Policy Generation"
        }), ": Generates Seccomp BPF bytecodes dynamically based on application runtime profile requirements."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    NodeProcess[\"Node.js Worker Process\"]\n    SyscallAttempt[\"Syscall Invocation (e.g. execve('/bin/sh'))\"]\n    SeccompBPF[\"Linux Kernel Seccomp BPF Filter\"]\n    LandlockLSM[\"Linux Kernel Landlock LSM Path Check\"]\n    ExecutionAllowed[\"Syscall Executed (Approved Path)\"]\n    ProcessTerminated[\"Process Killed with SIGSYS (Threat Blocked!)\"]\n\n    NodeProcess --> SyscallAttempt\n    SyscallAttempt --> SeccompBPF\n    SeccompBPF -->|Syscall Blocked| ProcessTerminated\n    SeccompBPF -->|Syscall Permitted| LandlockLSM\n    LandlockLSM -->|Access Denied| ProcessTerminated\n    LandlockLSM -->|Access Approved| ExecutionAllowed\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-kernel-sandboxing-vs-container-isolation",
      children: "🧠 4. Why It Was Designed This Way (Kernel Sandboxing vs Container Isolation)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Security Layer"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["🛡️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "KernelSandboxService"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐳 Docker Container Defaults"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "RCE Protection Level"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Kernel Enforcement inside the Process"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Root Container Escape Risk"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Filesystem Restriction"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Fine-Grained Landlock Path Sandboxing"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Full Container Root Filesystem Read Access"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Syscall Filtering"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Strict Custom Seccomp BPF Policy"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Generic Docker Seccomp Profile"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { KernelSandboxService } from '@ferrox-node/core';\n\nasync function applySecuritySandboxing() {\n  const kernelService = new KernelSandboxService();\n\n  // 1. Restrict Filesystem Access using Landlock LSM\n  kernelService.applyLandlockSandbox({\n    readOnlyPaths: ['/var/app/dist', '/usr/lib/node_modules'],\n    readWritePaths: ['/tmp/app_logs'],\n    blockExecutables: true\n  });\n\n  // 2. Apply Seccomp BPF System Call Policy\n  kernelService.applySeccompPolicy({\n    disallowSyscalls: ['execve', 'ptrace', 'kexec_load', 'sys_rawio'],\n    onViolationAction: 'KILL_PROCESS'\n  });\n\n  console.log('🛡️ Linux Kernel Seccomp & Landlock LSM Sandboxing Active!');\n}\n\napplySecuritySandboxing().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Applying Seccomp Syscall Filters Before Loading Native C++ Addons"
        }), "\nCalling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "applySeccompPolicy()"
        }), " before native Node.js C++ addons (such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sqlite3"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "bcrypt"
        }), ") initialize their thread pools can cause process termination if the addon relies on blocked syscalls during initialization."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Production Hardening"
        }), ": Combine ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "KernelSandboxService"
        }), " with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SentinelIntegrationService"
        }), " to achieve double-layer protection: Sentinel isolates HTTP payload threats while KernelSandbox stops OS system exploits."]
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
31411(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/kernel","title":"Kernel Sandbox (Seccomp & Landlock)","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/ferrox-node/docs/components/kernel.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/kernel","permalink":"/docs/ferrox-node/docs/components/kernel","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/kernel.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"kernel","title":"Kernel Sandbox (Seccomp & Landlock)","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Sentinel AI Security & Entropy Engine","permalink":"/docs/ferrox-node/docs/components/security"},"next":{"title":"Dual Engine Transports (Fastify & Express)","permalink":"/docs/ferrox-node/docs/components/transports"}}')

},

};
;