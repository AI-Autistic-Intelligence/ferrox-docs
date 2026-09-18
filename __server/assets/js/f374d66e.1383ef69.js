"use strict";
exports.ids = ["267"];
exports.modules = {
66289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_aws_helpers_md_f37_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_aws_helpers_md_f37_json__rspack_import_0 = __webpack_require__(25057);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'aws-helpers',
	title: '@node-yalc/aws-helpers',
	sidebar_position: 7
};
const contentTitle = '☁️ AWS SDK v3 Utilities (@node-yalc/aws-helpers)';

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
  "value": "🧠 4. Why It Was Designed This Way (Modular SDK v3 vs Legacy SDK v2)",
  "id": "-4-why-it-was-designed-this-way-modular-sdk-v3-vs-legacy-sdk-v2",
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
        id: "️-aws-sdk-v3-utilities-node-yalcaws-helpers",
        children: ["☁️ AWS SDK v3 Utilities (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@node-yalc/aws-helpers"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-what-it-is--architectural-purpose",
      children: "💡 1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/aws-helpers"
      }), " provides high-performance, modular wrappers around the official ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "AWS SDK v3 for JavaScript/TypeScript"
      }), ". Its architectural purpose is to streamline interaction with AWS cloud services—such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Amazon S3"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "AWS SSM Parameter Store"
      }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "AWS Lambda"
      }), "—while providing native retry policies, exponential backoff, secret masking, and zero framework lock-in."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-what-it-does--key-features",
      children: "⚙️ 2. What It Does & Key Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["S3 Bucket Operations (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "YalcS3Client"
          }), ")"]
        }), ": Streaming file uploads, signed URL generation, and multipart transfer orchestration."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["SSM Parameter Store Client (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "YalcSSMStore"
          }), ")"]
        }), ": Secure parameter fetching with automatic in-memory TTL caching and decryption of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SecureString"
        }), " parameters."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Lambda Event Adapters"
        }), ": Normalization of API Gateway v1/v2 and Application Load Balancer (ALB) event objects."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-3-how-it-works-under-the-hood",
      children: "🔬 3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    AppCall[\"YalcSSMStore.getParameter('/prod/db/secret')\"]\n    MemoryCache[\"In-Memory Cache Check (TTL 300s)\"]\n    AWSCall[\"AWS SSM GetParameterCommand (SDK v3)\"]\n    DecryptedVal[\"Decrypt SecureString KMS\"]\n\n    AppCall --> MemoryCache\n    MemoryCache -->|Cache Hit| ReturnVal[\"Return Cached String\"]\n    MemoryCache -->|Cache Miss| AWSCall\n    AWSCall --> DecryptedVal\n    DecryptedVal --> CacheSet[\"Update TTL Cache\"]\n    CacheSet --> ReturnVal\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-4-why-it-was-designed-this-way-modular-sdk-v3-vs-legacy-sdk-v2",
      children: "🧠 4. Why It Was Designed This Way (Modular SDK v3 vs Legacy SDK v2)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Aspect"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: ["☁️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@node-yalc/aws-helpers"
            }), " (SDK v3)"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "🐢 Legacy AWS SDK v2"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Bundle Footprint"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Tree-shakeable (Imports only required clients)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Monolithic ~15MB SDK Bundle"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Secret Protection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "In-Memory Encrypted TTL Caching"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Raw Uncached SSM Calls"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Retry & Backoff"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Exponential Backoff with Full Jitter"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Basic Retries"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-5-practical-usage-guide--extended-code-examples",
      children: "🚀 5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { YalcS3Client, YalcSSMStore } from '@node-yalc/aws-helpers';\n\nasync function executeCloudOperations() {\n  // 1. Fetch Secure Database Password from AWS SSM Parameter Store with 5-minute caching\n  const dbPassword = await YalcSSMStore.getParameter('/prod/database/password', {\n    decrypt: true,\n    cacheTtlSeconds: 300\n  });\n\n  console.log('Successfully retrieved SSM parameter (Masked):', dbPassword.substring(0, 3) + '***');\n\n  // 2. Upload Document Buffer to Amazon S3\n  const s3 = new YalcS3Client({ region: 'eu-west-1' });\n  const fileBuffer = Buffer.from('PDF Report Content');\n\n  const uploadResult = await s3.uploadFile({\n    bucket: 'acme-enterprise-reports',\n    key: '2026/quarterly_report.pdf',\n    body: fileBuffer,\n    contentType: 'application/pdf'\n  });\n\n  console.log('S3 Upload Successful. File ETag:', uploadResult.ETag);\n}\n\nexecuteCloudOperations().catch(console.error);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-6-anti-patterns-how-not-to-use-it",
      children: "⚠️ 6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["❌ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DO NOT fetch SSM parameters on every HTTP request without caching"
        }), ": Making uncached AWS SSM API calls inside high-frequency request paths will hit AWS API Rate Limits (ThrottlingException). Always use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "cacheTtlSeconds"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-7-pro-tips--best-practices",
      children: "💡 7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "AWS IAM Role Authentication"
        }), ": Omit explicit AWS credentials in client initializations when deploying to AWS ECS, EKS, or Lambda—the helper automatically assumes the IAM Instance Role."]
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
25057(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/aws-helpers","title":"@node-yalc/aws-helpers","description":"💡 1. What It Is & Architectural Purpose","source":"@site/docs/node-yalc/docs/packages/aws-helpers.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/aws-helpers","permalink":"/docs/node-yalc/docs/packages/aws-helpers","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/aws-helpers.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"aws-helpers","title":"@node-yalc/aws-helpers","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"@node-yalc/event-manager","permalink":"/docs/node-yalc/docs/packages/event-manager"},"next":{"title":"Common Core Constants, Enumerations & Value Objects","permalink":"/docs/node-yalc/docs/packages/common"}}')

},

};
;