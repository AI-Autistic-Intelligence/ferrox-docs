"use strict";
exports.ids = ["5250"];
exports.modules = {
76269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_storage_md_00a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_components_storage_md_00a_json__rspack_import_0 = __webpack_require__(86166);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'storage',
	title: 'Cloud Storage, S3 Streams & Presigned URLs',
	sidebar_position: 15
};
const contentTitle = 'Cloud Storage, S3 Streams & Presigned URLs';

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
  "value": "Zero-Buffer Upload Stream Pipeline",
  "id": "zero-buffer-upload-stream-pipeline",
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
  "value": "5.1 Uploading Files via Readable Streams",
  "id": "51-uploading-files-via-readable-streams",
  "level": 3
}, {
  "value": "5.2 Generating Presigned Download URLs",
  "id": "52-generating-presigned-download-urls",
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
        id: "cloud-storage-s3-streams--presigned-urls",
        children: "Cloud Storage, S3 Streams & Presigned URLs"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " storage module provides an abstraction layer over cloud object storage providers (Amazon S3, Google Cloud Storage, Azure Blob Storage, and local filesystem). It supports chunked multipart streaming uploads, presigned URL generation, path traversal sanitization, and automated MIME-type validation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enterprise applications require uploading and retrieving large binary assets (documents, images, videos, data backups) without consuming entire server RAM buffers or introducing security vulnerabilities such as path traversal attacks."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "StorageEngine"
      }), " in Ferrox Node provides a unified, protocol-agnostic API for cloud storage. It abstracts vendor SDK complexities while guaranteeing zero-buffer memory streaming and secure presigned URL generation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                         Ferrox StorageEngine                           │\n├────────────────────────────────────────────────────────────────────────┤\n│  • Path Sanitizer & MIME Inspector                                     │\n│  • Multipart Stream Manager (Zero-Buffer RAM Memory)                   │\n│  • Presigned URL Signer (S3 / GCS / Azure)                             │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Unified Storage Stream API\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ Amazon S3 Bucket     ││ Google Cloud Storage ││ Local Filesystem     │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Multipart Streaming Uploads"
        }), ": Upload multi-gigabyte files using Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Readable"
        }), " streams with chunked RAM buffering."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Presigned Upload & Download URLs"
        }), ": Generate temporary signed URLs (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "s3.getSignedUrlPromise"
        }), ") for direct client browser uploads."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Path Traversal Shield"
        }), ": Automatically strips ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "../"
        }), ", null-byte injections, and path traversal sequences from target keys."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MIME-Type & Magic Byte Inspection"
        }), ": Inspects binary magic numbers to prevent malicious file uploads (e.g., renaming ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".exe"
        }), " to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".png"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "zero-buffer-upload-stream-pipeline",
      children: "Zero-Buffer Upload Stream Pipeline"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    autonumber\n    participant Client as Client Browser\n    participant Router as Ferrox Storage Controller\n    participant Engine as StorageEngine Stream Parser\n    participant Magic as Magic Byte Inspector\n    participant S3 as Amazon S3 API\n\n    Client->>Router: POST /api/upload (Multipart Stream)\n    Router->>Engine: Pipe Stream into StorageEngine.uploadStream(key)\n    Engine->>Magic: Read First 512 Bytes (Magic Number Check)\n    Magic-->>Engine: Validated MIME: 'image/png'\n    Engine->>S3: Pass Stream to PassThrough Pipe (S3 Upload Manager)\n    S3-->>Engine: ETag & Location Returned\n    Engine-->>Router: StorageResult { key, url, size, etag }\n    Router-->>Client: 201 Created Response Payload\n"
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
            children: "Direct AWS SDK Calls"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ferrox StorageEngine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "RAM Usage"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Loading entire file into Node ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Buffer"
            }), " crashes process on 2GB files."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Zero-buffer Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "PassThrough"
            }), " stream pipe."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Vendor Locking"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Code hardcoded to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@aws-sdk/client-s3"
            }), "."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single interface works seamlessly across S3, GCS, and Local disk."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Un-sanitized keys expose file overwrites on disk."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Strict key sanitization & magic byte validation."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-uploading-files-via-readable-streams",
      children: "5.1 Uploading Files via Readable Streams"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { StorageEngine, StorageProvider } from '@ferrox/node';\nimport { createReadStream } from 'fs';\n\nconst storage = new StorageEngine({\n  provider: StorageProvider.S3,\n  s3Options: {\n    region: 'us-east-1',\n    bucket: 'company-documents-bucket',\n  },\n});\n\nexport async function uploadDocument(filePath: string, destinationKey: string) {\n  const fileStream = createReadStream(filePath);\n\n  const result = await storage.uploadStream({\n    key: `documents/${destinationKey}`,\n    stream: fileStream,\n    contentType: 'application/pdf',\n  });\n\n  console.log(`Document uploaded successfully: ${result.location}`);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-generating-presigned-download-urls",
      children: "5.2 Generating Presigned Download URLs"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "export async function getDownloadLink(key: string): Promise<string> {\n  // Generates presigned URL valid for 15 minutes (900 seconds)\n  const presignedUrl = await storage.getSignedDownloadUrl({\n    key,\n    expiresInSeconds: 900,\n  });\n\n  return presignedUrl;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Buffering Uploads into Memory"
        }), "\nAvoid ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "fs.readFileSync()"
        }), " or reading file bodies into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Buffer.from()"
        }), " before passing to storage. Always pass ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Readable"
        }), " streams."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Presigned Browser Direct Uploads"
        }), "\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "getSignedUploadUrl()"
        }), " to let frontend web clients upload files directly to S3, bypassing backend API servers entirely."]
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
86166(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/components/storage","title":"Cloud Storage, S3 Streams & Presigned URLs","description":"The @ferrox/node storage module provides an abstraction layer over cloud object storage providers (Amazon S3, Google Cloud Storage, Azure Blob Storage, and local filesystem). It supports chunked multipart streaming uploads, presigned URL generation, path traversal sanitization, and automated MIME-type validation.","source":"@site/docs/ferrox-node/docs/components/storage.md","sourceDirName":"ferrox-node/docs/components","slug":"/ferrox-node/docs/components/storage","permalink":"/docs/ferrox-node/docs/components/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/components/storage.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"storage","title":"Cloud Storage, S3 Streams & Presigned URLs","sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"Security Self-Test Auditor","permalink":"/docs/ferrox-node/docs/components/selftest"},"next":{"title":"OpenTelemetry Distributed Tracing & Correlation Identifiers","permalink":"/docs/ferrox-node/docs/components/tracing"}}')

},

};
;