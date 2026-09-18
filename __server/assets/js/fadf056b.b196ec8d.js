"use strict";
exports.ids = ["544"];
exports.modules = {
21942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_errors_md_fad_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_errors_md_fad_json__rspack_import_0 = __webpack_require__(29533);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 5
};
const contentTitle = '🚨 Centralized Error Handling & Exception Filters';

const assets = {

};



const toc = [{
  "value": "1. The <code>AppError</code> Enum",
  "id": "1-the-apperror-enum",
  "level": 2
}, {
  "value": "2. Standardized JSON Error Payload Format",
  "id": "2-standardized-json-error-payload-format",
  "level": 2
}, {
  "value": "HTTP Status Code Mappings",
  "id": "http-status-code-mappings",
  "level": 3
}, {
  "value": "3. Returning Errors from Controllers",
  "id": "3-returning-errors-from-controllers",
  "level": 2
}, {
  "value": "4. Security &amp; Error Sanitization",
  "id": "4-security--error-sanitization",
  "level": 2
}, {
  "value": "5. ✅ Best Practices",
  "id": "5--best-practices",
  "level": 2
}, {
  "value": "6. ❌ Anti-Patterns",
  "id": "6--anti-patterns",
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
        id: "-centralized-error-handling--exception-filters",
        children: "🚨 Centralized Error Handling & Exception Filters"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Robust applications require predictable, strongly typed error handling. In Ferrox, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-errors"
      }), " provides a centralized ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppError"
      }), " enum that implements Axum's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "IntoResponse"
      }), " trait."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This guarantees that unhandled exceptions, database errors, validation failures, and authorization checks automatically map to structured JSON responses with correct HTTP status codes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-the-apperror-enum",
      children: ["1. The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppError"
      }), " Enum"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The core error type is ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppError"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use thiserror::Error;\n\n#[derive(Debug, Error)]\npub enum AppError {\n    #[error(\"Not Found: {0}\")]\n    NotFound(String),\n\n    #[error(\"Validation Error: {0}\")]\n    ValidationError(String),\n\n    #[error(\"Unauthorized: {0}\")]\n    Unauthorized(String),\n\n    #[error(\"Internal Server Error\")]\n    InternalServerError(#[source] Box<dyn std::error::Error + Send + Sync>),\n\n    #[error(\"Database Error: {0}\")]\n    DatabaseError(String),\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-standardized-json-error-payload-format",
      children: "2. Standardized JSON Error Payload Format"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppError"
      }), " is returned from a controller handler, Ferrox converts it into a standardized JSON response:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"status\": 404,\n  \"message\": \"Not Found: User with ID 42 does not exist\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "http-status-code-mappings",
      children: "HTTP Status Code Mappings"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError"
            }), " Variant"]
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "HTTP Status Code"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError::NotFound(msg)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "404 Not Found"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Requested entity or resource missing"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError::ValidationError(msg)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "400 Bad Request"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Malformed JSON or DTO validation failure"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError::Unauthorized(msg)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "401 Unauthorized"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Missing or invalid PASETO JWT token"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError::DatabaseError(msg)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "500 Internal Server Error"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Database query or connection pool error"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AppError::InternalServerError(err)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "500 Internal Server Error"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Unexpected server panic or system error"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-returning-errors-from-controllers",
      children: "3. Returning Errors from Controllers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Controllers return ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Result<T, AppError>"
      }), " and use Rust's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "?"
      }), " operator for clean error propagation:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{extract::{Path, State}, Json};\nuse ferrox_errors::AppError;\n\npub async fn get_user_by_id(\n    Path(id): Path<u64>,\n    State(service): State<UserService>,\n) -> Result<Json<UserDto>, AppError> {\n    let user = service.find_by_id(id).await?\n        .ok_or_else(|| AppError::NotFound(format!(\"User {}\", id)))?;\n\n    Ok(Json(user.into()))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-security--error-sanitization",
      children: "4. Security & Error Sanitization"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!IMPORTANT]\nTo prevent ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Information Disclosure"
        }), " vulnerabilities, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppError::InternalServerError"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppError::DatabaseError"
        }), " print full diagnostic stack traces to server console logs, but only return generic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "\"Internal Server Error\""
        }), " messages to HTTP clients."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5--best-practices",
      children: "5. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Never ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "unwrap()"
          }), " inside controllers or services"]
        }), ": Always propagate errors with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "?"
        }), " or map custom errors into ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppError"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Use domain-specific error messages"
        }), ": Provide human-readable details for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppError::ValidationError"
        }), " so frontend clients can render form field hints."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6--anti-patterns",
      children: "6. ❌ Anti-Patterns"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "❌ Exposing database connection strings or raw SQL tracebacks"
        }), ": Raw database errors contain schema details that attackers exploit. Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "AppError::DatabaseError"
        }), " to sanitize responses."]
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
29533(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/errors","title":"🚨 Centralized Error Handling & Exception Filters","description":"Robust applications require predictable, strongly typed error handling. In Ferrox, ferrox-errors provides a centralized AppError enum that implements Axum\'s IntoResponse trait.","source":"@site/docs/ferrox/fundamentals/errors.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/errors","permalink":"/docs/ferrox/fundamentals/errors","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/errors.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"🔄 Interceptors: Request Execution Pipeline","permalink":"/docs/ferrox/fundamentals/interceptors"},"next":{"title":"⚙️ Typed Configuration Management","permalink":"/docs/ferrox/fundamentals/configuration"}}')

},

};
;