"use strict";
exports.ids = ["3727"];
exports.modules = {
24524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_integrations_search_md_ec6_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_integrations_search_md_ec6_json__rspack_import_0 = __webpack_require__(17570);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'search',
	title: 'Full-Text Search, Vector Indexing & Meilisearch Adapters',
	sidebar_position: 8
};
const contentTitle = 'Full-Text Search, Vector Indexing & Meilisearch Adapters';

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
  "value": "Asynchronous Index Synchronization Sequence",
  "id": "asynchronous-index-synchronization-sequence",
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
  "value": "5.1 Defining and Querying Search Documents",
  "id": "51-defining-and-querying-search-documents",
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
        id: "full-text-search-vector-indexing--meilisearch-adapters",
        children: "Full-Text Search, Vector Indexing & Meilisearch Adapters"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-search"
      }), " crate delivers high-performance full-text search indexing, vector embedding search integration (OpenAI / Qdrant), and asynchronous index synchronization over Meilisearch and Elasticsearch clusters for Rust microservices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Enterprise applications require searching through millions of structured and un-structured records with multi-language typo tolerance, faceted filtering, highlight snippets, and semantic vector similarity search. Making raw SQL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "LIKE '%query%'"
      }), " queries locks database CPU cores and delivers poor search experience."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-search"
      }), " abstracts external search engines into a unified Rust trait API (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SearchIndex<T>"
      }), "). It handles asynchronous document indexing, automated schema mapping, vector embedding generation, and background sync queues without blocking request threads."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\r\n│                          ferrox-search Engine                          │\r\n├──────────────────────────────────┬─────────────────────────────────────┤\r\n│  Async Document Indexer          │  Vector Embedding Engine            │\r\n│  (Faceted Filter & Typo Tolerance)│  (Qdrant / Milvus / PgVector)       │\r\n└────────────────┬─────────────────┴──────────────────┬──────────────────┘\r\n                 │ Parameterized Search API\r\n                 ▼                                    ▼\r\n┌─────────────────────────────────┐  ┌──────────────────────────────────┐\r\n│ Meilisearch Cluster             │  │ Elasticsearch / OpenSearch       │\r\n└─────────────────────────────────┘  └──────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Faceted & Typo-Tolerant Search"
        }), ": Provides multi-field search queries with configurable prefix matching, stop-words, and ranking rules."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Vector & Hybrid Search"
        }), ": Computes vector embeddings and executes hybrid keyword-plus-vector semantic search queries."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Automatic Document Sync"
        }), ": Integrates with SeaORM database mutations to index, update, or delete search documents asynchronously."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Highlighting & Snippet Generation"
        }), ": Returns HTML-highlighted match snippets directly in Rust struct search responses."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "asynchronous-index-synchronization-sequence",
      children: "Asynchronous Index Synchronization Sequence"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\r\n    autonumber\r\n    participant Controller as HTTP Endpoint\r\n    participant DB as SeaORM Database\r\n    participant Search as ferrox-search Pipeline\r\n    participant Engine as Meilisearch / Vector DB\r\n\r\n    Controller->>DB: Insert / Update Document Record\r\n    DB-->>Controller: Transaction Committed\r\n    Controller->>Search: IndexDocumentCommand(doc_id, payload)\r\n    Search->>Search: Serialize Rust Struct to Search Document JSON\r\n    Search->>Engine: Asynchronous HTTP Batch Index (/indexes/documents)\r\n    Engine-->>Search: Task Enqueued Acknowledgement\n"
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
            children: "Direct SQL Searching"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "ferrox-search Engine"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Table scan locks DB CPU on 1M+ rows (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "LIKE '%term%'"
            }), ")."]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Instant <10ms inverted index search queries."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Typo Tolerance"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Zero typo tolerance. Fails on minor misspellings."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Built-in Levenshtein distance typo tolerance."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Semantic Search"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Requires manual vector DB integration."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hybrid keyword + vector embedding search in a single trait."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-defining-and-querying-search-documents",
      children: "5.1 Defining and Querying Search Documents"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_search::prelude::*;\r\nuse serde::{Deserialize, Serialize};\r\n\r\n#[derive(Debug, Serialize, Deserialize, SearchDocument)]\r\n#[search(index_name = \"products\", primary_key = \"id\")]\r\npub struct ProductDocument {\r\n    pub id: String,\r\n    #[search(searchable)]\r\n    pub title: String,\r\n    #[search(searchable)]\r\n    pub description: String,\r\n    #[search(filterable, sortable)]\r\n    pub price: f64,\r\n    #[search(filterable)]\r\n    pub category: String,\r\n}\r\n\r\npub async fn search_products(query: &str) -> Result<Vec<ProductDocument>, SearchError> {\r\n    let search_engine = MeilisearchAdapter::new(\"http://localhost:7700\", Some(\"masterKey\"));\r\n\r\n    let results = search_engine\r\n        .query::<ProductDocument>(\"products\")\r\n        .with_query(query)\r\n        .with_filter(\"price <= 100 AND category = 'electronics'\")\r\n        .with_limit(20)\r\n        .execute()\r\n        .await?;\r\n\r\n    Ok(results.documents)\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Synchronous Indexing on HTTP Request Path"
        }), "\r\nAvoid awaiting search index updates synchronously inside API write controllers. Always dispatch search indexing tasks asynchronously to background queues."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Batch Indexing"
        }), "\r\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "search_engine.index_batch(documents)"
        }), " when seeding initial datasets to upload up to 10,000 documents per HTTP payload."]
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
17570(module) {
module.exports = JSON.parse('{"id":"ferrox/integrations/search","title":"Full-Text Search, Vector Indexing & Meilisearch Adapters","description":"The ferrox-search crate delivers high-performance full-text search indexing, vector embedding search integration (OpenAI / Qdrant), and asynchronous index synchronization over Meilisearch and Elasticsearch clusters for Rust microservices.","source":"@site/docs/ferrox/integrations/search.md","sourceDirName":"ferrox/integrations","slug":"/ferrox/integrations/search","permalink":"/docs/ferrox/integrations/search","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/integrations/search.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"search","title":"Full-Text Search, Vector Indexing & Meilisearch Adapters","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Internationalization (i18n), Localized Formatting & Translation Catalogs","permalink":"/docs/ferrox/integrations/i18n"},"next":{"title":"📊 Structured Logging & Sentry Integration","permalink":"/docs/ferrox/observability/logging"}}')

},

};
;