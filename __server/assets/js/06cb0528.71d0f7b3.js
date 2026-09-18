"use strict";
exports.ids = ["3102"];
exports.modules = {
21453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_validation_md_06c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_abstractions_validation_md_06c_json__rspack_import_0 = __webpack_require__(1552);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '🎯 DTO Validation & AutoZod Extractor';

const assets = {

};



const toc = [{
  "value": "1. Defining a Validated DTO",
  "id": "1-defining-a-validated-dto",
  "level": 2
}, {
  "value": "2. Using <code>ValidatedJson&lt;T&gt;</code> in Controller Handlers",
  "id": "2-using-validatedjsont-in-controller-handlers",
  "level": 2
}, {
  "value": "3. How &quot;Fail Fast&quot; Validation Works",
  "id": "3-how-fail-fast-validation-works",
  "level": 2
}, {
  "value": "4. Custom Validation Functions",
  "id": "4-custom-validation-functions",
  "level": 2
}, {
  "value": "5. ✅ Best Practices",
  "id": "5--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-dto-validation--autozod-extractor",
        children: "🎯 DTO Validation & AutoZod Extractor"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In NestJS, developer productivity relies heavily on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "class-validator"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidationPipe"
      }), ". In Rust, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-validation"
      }), " provides the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidatedJson<T>"
      }), " extractor—a mechanism that behaves like Zod's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".parse()"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidatedJson<T>"
      }), " parses incoming HTTP request JSON payloads and automatically executes validation rules defined on your DTO structs using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validator::Validate"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-defining-a-validated-dto",
      children: "1. Defining a Validated DTO"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Annotate your Data Transfer Object (DTO) with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[derive(Deserialize, Validate)]"
      }), " and add field constraints:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::Deserialize;\nuse validator::Validate;\n\n#[derive(Debug, Deserialize, Validate)]\npub struct CreateUserDto {\n    #[validate(length(min = 3, max = 50, message = \"Username must be between 3 and 50 characters\"))]\n    pub username: String,\n\n    #[validate(email(message = \"Invalid email address format\"))]\n    pub email: String,\n\n    #[validate(length(min = 8, message = \"Password must be at least 8 characters long\"))]\n    pub password: String,\n\n    #[validate(range(min = 18, max = 120, message = \"Age must be between 18 and 120\"))]\n    pub age: u8,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-using-validatedjsont-in-controller-handlers",
      children: ["2. Using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidatedJson<T>"
      }), " in Controller Handlers"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Replace Axum's standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Json<T>"
      }), " extractor with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidatedJson<T>"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{routing::post, Json, Router};\nuse ferrox_validation::ValidatedJson;\nuse ferrox_errors::AppError;\n\npub async fn create_user(\n    ValidatedJson(payload): ValidatedJson<CreateUserDto>,\n) -> Result<Json<UserResponseDto>, AppError> {\n    // 100% Guaranteed: payload is valid JSON AND satisfies all validation rules!\n    println!(\"Creating user: {} ({})\", payload.username, payload.email);\n\n    Ok(Json(UserResponseDto {\n        id: 1,\n        username: payload.username,\n        email: payload.email,\n    }))\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-how-fail-fast-validation-works",
      children: "3. How \"Fail Fast\" Validation Works"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If a client sends an invalid payload (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "age: 15"
      }), " or malformed email ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "not-an-email"
      }), "), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ValidatedJson<T>"
      }), " intercepts the request ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "before"
      }), " executing your handler and returns a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "400 Bad Request"
      }), " response:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"status\": 400,\n  \"message\": \"Validation failed: email: Invalid email address format, age: Age must be between 18 and 120\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "HTTP Client ---> [ ValidatedJson Extractor ] \n                        |\n                        +---> Invalid? ---> Return 400 Bad Request immediately (0 DB/CPU overhead)\n                        |\n                        v\n                 [ Controller Handler ]\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-custom-validation-functions",
      children: "4. Custom Validation Functions"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can attach custom validation functions to complex DTOs using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[validate(custom = \"path::to::fn\")]"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use validator::ValidationError;\n\nfn validate_domain(email: &str) -> Result<(), ValidationError> {\n    if !email.ends_with(\"@company.com\") {\n        return Err(ValidationError::new(\"invalid_corporate_email\"));\n    }\n    Ok(())\n}\n\n#[derive(Deserialize, Validate)]\npub struct CorporateSignupDto {\n    #[validate(custom = \"validate_domain\")]\n    pub corporate_email: String,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5--best-practices",
      children: "5. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Validate all user input DTOs"
        }), ": Never trust raw JSON strings. Always wrap handler parameters in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ValidatedJson<T>"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Provide clear error messages"
        }), ": Use descriptive ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "message"
        }), " parameters in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "#[validate(...)]"
        }), " annotations for smooth frontend user experience."]
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
1552(module) {
module.exports = JSON.parse('{"id":"ferrox/abstractions/validation","title":"🎯 DTO Validation & AutoZod Extractor","description":"In NestJS, developer productivity relies heavily on class-validator and ValidationPipe. In Rust, ferrox-validation provides the ValidatedJson extractor—a mechanism that behaves like Zod\'s .parse().","source":"@site/docs/ferrox/abstractions/validation.md","sourceDirName":"ferrox/abstractions","slug":"/ferrox/abstractions/validation","permalink":"/docs/ferrox/abstractions/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/abstractions/validation.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"🛡️ Guards (Authorization)","permalink":"/docs/ferrox/abstractions/guards"},"next":{"title":"🛠️ Code Factory & Generic CRUD Generator","permalink":"/docs/ferrox/abstractions/crud-generator"}}')

},

};
;