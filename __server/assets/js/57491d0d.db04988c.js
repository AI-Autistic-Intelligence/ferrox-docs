"use strict";
exports.ids = ["8206"];
exports.modules = {
92737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_file_storage_md_574_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_transports_file_storage_md_574_json__rspack_import_0 = __webpack_require__(61711);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'file-storage',
	title: 'Cloud File Storage, S3 Streams & Presigned URLs',
	sidebar_position: 5
};
const contentTitle = 'Cloud File Storage, S3 Streams & Presigned URLs';

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
  "value": "5.1 Uploading Files via Tokio Streams",
  "id": "51-uploading-files-via-tokio-streams",
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
        id: "cloud-file-storage-s3-streams--presigned-urls",
        children: "Cloud File Storage, S3 Streams & Presigned URLs"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-storage"
      }), " crate provides cloud object storage abstractions for Rust applications. It supports zero-buffer multipart streaming uploads, presigned download/upload URL generation, path traversal sanitization, and multi-provider backends (AWS S3, Google Cloud Storage, Azure Blob Storage, and local disk)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enterprise applications require uploading and retrieving large binary assets (documents, images, video feeds, database dumps) without loading entire multi-gigabyte files into server RAM buffers or risking path traversal security exploits."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "StorageEngine"
      }), " in Ferrox provides a unified, zero-copy cloud storage API. It abstracts cloud provider SDK complexity while guaranteeing zero-buffer RAM streaming and secure presigned URL generation."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\n│                        ferrox-storage Engine                           │\n├────────────────────────────────────────────────────────────────────────┤\n│  • Path Sanitizer & Key Whitelisting Guard                             │\n│  • Zero-Buffer Multipart Stream Manager (Tokio AsyncRead)              │\n│  • Presigned URL Generator (S3 / GCS / Azure)                          │\n└──────────────────────────────────┬─────────────────────────────────────┘\n                                   │ Unified Storage Stream API\n            ┌──────────────────────┼──────────────────────┐\n            ▼                      ▼                      ▼\n┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐\n│ Amazon S3 Bucket     ││ Google Cloud Storage ││ Local Filesystem     │\n└──────────────────────┘└──────────────────────┘└──────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zero-Buffer Streaming Uploads"
        }), ": Upload multi-gigabyte files using Tokio ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AsyncRead"
        }), " streams without buffering full files into RAM."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Presigned Upload & Download URLs"
        }), ": Generates temporary cryptographic signed URLs for direct client-to-S3 uploads and downloads."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Path Traversal Sanitizer"
        }), ": Strips ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "../"
        }), ", null bytes, and path traversal sequences from target storage keys."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Magic Byte Inspection"
        }), ": Inspects binary magic numbers to verify MIME types (e.g., verifying ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".pdf"
        }), " headers)."]
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
        children: "sequenceDiagram\n    autonumber\n    participant Client as API Client Browser\n    participant Router as Ferrox Storage Endpoint\n    participant Engine as ferrox-storage Engine\n    participant S3 as Amazon S3 API\n\n    Client->>Router: POST /api/v1/files/upload (Multipart Stream)\n    Router->>Engine: Stream Body into StorageEngine::upload_stream(key, stream)\n    Engine->>Engine: Inspect Magic Bytes (First 512 bytes)\n    Engine->>S3: Pipe Stream into S3 Multipart Chunked Upload\n    S3-->>Engine: ETag & Location Returned\n    Engine-->>Router: StorageLocation { key, url, size, etag }\n    Router-->>Client: 201 Created Response Payload\n"
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
            children: "ferrox-storage Engine"
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
            children: ["Loading 1GB file into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Vec<u8>"
            }), " causes worker pod OOM crashes."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Zero-buffer Tokio ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AsyncRead"
            }), " stream pipe."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Provider Independence"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Code hardcoded to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "aws-sdk-s3"
            }), "."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single trait works across S3, GCS, Azure, and Local disk."
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
            children: "Un-sanitized keys expose file overwrite vulnerabilities."
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
      id: "51-uploading-files-via-tokio-streams",
      children: "5.1 Uploading Files via Tokio Streams"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_storage::{StorageEngine, StorageProvider, UploadRequest};\nuse tokio::fs::File;\n\npub async fn upload_customer_document(\n    file_path: &str,\n    destination_key: &str,\n) -> Result<String, StorageError> {\n    let storage = StorageEngine::new(StorageProvider::S3 {\n        bucket: \"company-documents\".to_string(),\n        region: \"us-east-1\".to_string(),\n    })?;\n\n    let file = File::open(file_path).await?;\n\n    let result = storage.upload_stream(UploadRequest {\n        key: format!(\"documents/{}\", destination_key),\n        reader: file,\n        content_type: \"application/pdf\".to_string(),\n    }).await?;\n\n    Ok(result.url)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Anti-Pattern 1: Buffering Uploads into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Vec<u8>"
          })]
        }), "\nAvoid reading full file bodies into memory (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "tokio::fs::read()"
        }), ") before calling storage APIs. Always use streaming readers (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "upload_stream"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Presigned Browser Direct Uploads"
        }), "\nGenerate presigned upload URLs (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "storage.get_presigned_upload_url()"
        }), ") to allow frontend browsers to upload directly to S3, bypassing backend API servers entirely."]
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
61711(module) {
module.exports = JSON.parse('{"id":"ferrox/transports/file-storage","title":"Cloud File Storage, S3 Streams & Presigned URLs","description":"The ferrox-storage crate provides cloud object storage abstractions for Rust applications. It supports zero-buffer multipart streaming uploads, presigned download/upload URL generation, path traversal sanitization, and multi-provider backends (AWS S3, Google Cloud Storage, Azure Blob Storage, and local disk).","source":"@site/docs/ferrox/transports/file-storage.md","sourceDirName":"ferrox/transports","slug":"/ferrox/transports/file-storage","permalink":"/docs/ferrox/transports/file-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/transports/file-storage.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"file-storage","title":"Cloud File Storage, S3 Streams & Presigned URLs","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Server-Sent Events (SSE), Event Streams & Real-Time Broadcasting","permalink":"/docs/ferrox/transports/sse"},"next":{"title":"Server-Side Data Grid Transport & SQL Query Building","permalink":"/docs/ferrox/transports/datagrid"}}')

},

};
;