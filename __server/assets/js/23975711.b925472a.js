"use strict";
exports.ids = ["2773"];
exports.modules = {
49177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_types_md_239_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_node_yalc_docs_packages_types_md_239_json__rspack_import_0 = __webpack_require__(872);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'types',
	title: 'Type Primitives, Utility Types & Type Guards',
	sidebar_position: 1
};
const contentTitle = 'Type Primitives, Utility Types & Type Guards';

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
  "value": "Type Narrowing &amp; Guard Mechanics",
  "id": "type-narrowing--guard-mechanics",
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
  "value": "5.1 Deep Partial DTO Updating",
  "id": "51-deep-partial-dto-updating",
  "level": 3
}, {
  "value": "5.2 Using Runtime Type Guards",
  "id": "52-using-runtime-type-guards",
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
        id: "type-primitives-utility-types--type-guards",
        children: "Type Primitives, Utility Types & Type Guards"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/types"
      }), " package provides core TypeScript primitive types, advanced conditional utility types (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DeepPartial"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Nullable"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "KeysMatching"
      }), "), type guards, and compile-time type validation primitives."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-what-it-is--architectural-purpose",
      children: "1. What It Is & Architectural Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["TypeScript's built-in utility types (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Partial<T>"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Required<T>"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Pick<T, K>"
      }), ") are essential for everyday development, but they fail when handling deeply nested domain models, conditional object mapping, or validating non-nullable runtime structures."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@node-yalc/types"
      }), " extends TypeScript's type system with enterprise-grade utility type generics and custom type guards. It enables developers to write strictly typed code without falling back to loose ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "any"
      }), " casting or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "as unknown as T"
      }), " workarounds."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────┐\r\n│                          @node-yalc/types                              │\r\n├────────────────────────────────────────────────────────────────────────┤\r\n│  • DeepPartial<T>, DeepRequired<T>, DeepReadonly<T>                    │\r\n│  • Nullable<T>, Maybe<T>, Optional<T>                                  │\r\n│  • KeysMatching<T, Type>, PropertyPath<T>                              │\r\n│  • IsDefined(), IsNonEmptyString(), IsObject() Type Guards             │\r\n└──────────────────────────────────┬─────────────────────────────────────┘\r\n                                   │\r\n                                   ▼\r\n┌────────────────────────────────────────────────────────────────────────┐\r\n│                   Type-Safe Application Codebase                       │\r\n└────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-what-it-does--key-capabilities",
      children: "2. What It Does & Key Capabilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "DeepPartial<T>"
          })
        }), ": Recursively makes all properties (and nested object/array properties) of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "T"
        }), " optional."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Nullable<T>"
          }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Maybe<T>"
          })]
        }), ": Standardized type alias wrappers for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "T | null"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "T | null | undefined"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "KeysMatching<T, V>"
          })
        }), ": Extracts property keys from ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "T"
        }), " whose values match type ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "V"
        }), " (e.g., extracting all ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "string"
        }), " keys)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Runtime Type Guards"
        }), ": Type-narrowing guard functions (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isDefined()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isString()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isObject()"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isPromise()"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-it-works-under-the-hood",
      children: "3. How It Works Under the Hood"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "type-narrowing--guard-mechanics",
      children: "Type Narrowing & Guard Mechanics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\r\n    autonumber\r\n    participant App as Application Code\r\n    participant Guard as isDefined(value)\r\n    participant TS as TypeScript Compiler\r\n\r\n    App->>Guard: Pass unknown input (string | null | undefined)\r\n    Guard->>Guard: Evaluate (val !== null && val !== undefined)\r\n    Guard-->>App: Returns boolean (true/false)\r\n    Note over TS: TypeScript narrows type from 'unknown' to 'string'\r\n    App->>App: Safe execution of string methods (.toUpperCase())\n"
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
            children: "Metric"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: ["Built-in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Partial<T>"
            })]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "DeepPartial<T>"
            }), " from @node-yalc/types"]
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Nested Objects"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Only makes top-level properties optional."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recursively makes all sub-objects and arrays optional."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
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
            children: "Requires manual casting for deep patch updates."
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automatic recursive type inference."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Runtime Guards"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "typeof"
            }), " checks miss ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "null"
            }), " objects (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "typeof null === 'object'"
            }), ")."]
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "isObject()"
            }), " correctly excludes ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "null"
            }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Array"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-practical-usage-guide--extended-code-examples",
      children: "5. Practical Usage Guide & Extended Code Examples"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "51-deep-partial-dto-updating",
      children: "5.1 Deep Partial DTO Updating"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { DeepPartial, Nullable } from '@node-yalc/types';\r\n\r\nexport interface UserProfile {\r\n  id: string;\r\n  contact: {\r\n    email: string;\r\n    phone: Nullable<string>;\r\n    address: {\r\n      street: string;\r\n      city: string;\r\n    };\r\n  };\r\n}\r\n\r\n// Allows updating deeply nested properties safely without providing full objects\r\nexport function updateProfile(\r\n  existing: UserProfile,\r\n  changes: DeepPartial<UserProfile>,\r\n): UserProfile {\r\n  return {\r\n    ...existing,\r\n    contact: {\r\n      ...existing.contact,\r\n      ...changes.contact,\r\n      address: {\r\n        ...existing.contact?.address,\r\n        ...changes.contact?.address,\r\n      },\r\n    },\r\n  };\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "52-using-runtime-type-guards",
      children: "5.2 Using Runtime Type Guards"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { isDefined, isNonEmptyString, isObject } from '@node-yalc/types';\r\n\r\nexport function processInput(input: unknown): string {\r\n  if (!isDefined(input)) {\r\n    throw new Error('Input is null or undefined');\r\n  }\r\n\r\n  if (isNonEmptyString(input)) {\r\n    return input.trim();\r\n  }\r\n\r\n  if (isObject(input) && 'name' in input && isNonEmptyString(input.name)) {\r\n    return input.name;\r\n  }\r\n\r\n  return 'default_value';\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-anti-patterns-how-not-to-use-it",
      children: "6. Anti-Patterns: How NOT to Use It"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!CAUTION]\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Anti-Pattern 1: Loose Type Casting"
        }), "\r\nNever use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "(value as any)"
        }), " when type guard functions like ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isDefined()"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isObject()"
        }), " can safely narrow the type at compile time and runtime."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-pro-tips--best-practices",
      children: "7. Pro-Tips & Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["[!TIP]\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pro-Tip 1: Filtering Arrays safely"
        }), "\r\nUse ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "isDefined"
        }), " with Array.filter() to narrow ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "(T | null)[]"
        }), " to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "T[]"
        }), " without losing type safety:\r\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "const validItems = items.filter(isDefined);"
        })]
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
872(module) {
module.exports = JSON.parse('{"id":"node-yalc/docs/packages/types","title":"Type Primitives, Utility Types & Type Guards","description":"The @node-yalc/types package provides core TypeScript primitive types, advanced conditional utility types (DeepPartial, Nullable, KeysMatching), type guards, and compile-time type validation primitives.","source":"@site/docs/node-yalc/docs/packages/types.md","sourceDirName":"node-yalc/docs/packages","slug":"/node-yalc/docs/packages/types","permalink":"/docs/node-yalc/docs/packages/types","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/node-yalc/docs/packages/types.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"types","title":"Type Primitives, Utility Types & Type Guards","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart Guide & Workspace Integration","permalink":"/docs/node-yalc/docs/quickstart"},"next":{"title":"Core Interfaces, Generic DTO Contracts & Envelopes","permalink":"/docs/node-yalc/docs/packages/interfaces"}}')

},

};
;