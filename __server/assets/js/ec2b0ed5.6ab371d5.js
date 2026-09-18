"use strict";
exports.ids = ["5260"];
exports.modules = {
18381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_testing_md_ec2_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_fundamentals_testing_md_ec2_json__rspack_import_0 = __webpack_require__(52233);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 7
};
const contentTitle = '🧪 Testing & Quality Assurance Strategy';

const assets = {

};



const toc = [{
  "value": "1. Unit Testing Controllers &amp; Services",
  "id": "1-unit-testing-controllers--services",
  "level": 2
}, {
  "value": "Example: Testing a Service with Mock Repositories",
  "id": "example-testing-a-service-with-mock-repositories",
  "level": 3
}, {
  "value": "2. In-Memory Axum Controller Tests (<code>tower::ServiceExt</code>)",
  "id": "2-in-memory-axum-controller-tests-towerserviceext",
  "level": 2
}, {
  "value": "3. Database Integration Testing with <code>testcontainers-rs</code>",
  "id": "3-database-integration-testing-with-testcontainers-rs",
  "level": 2
}, {
  "value": "4. ✅ Best Practices",
  "id": "4--best-practices",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-testing--quality-assurance-strategy",
        children: "🧪 Testing & Quality Assurance Strategy"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Testing in enterprise Rust applications must cover multiple levels of isolation: fast unit tests for business logic, in-memory route tests for controllers without binding to network sockets, and ephemeral containerized integration tests for database operations."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This guide explores the complete testing suite strategy in Ferrox."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-unit-testing-controllers--services",
      children: "1. Unit Testing Controllers & Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Unit tests verify business logic in complete isolation using Tokio's test runner (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#[tokio::test]"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "example-testing-a-service-with-mock-repositories",
      children: "Example: Testing a Service with Mock Repositories"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Using Rust's generic ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Repository<Entity, Id>"
      }), " trait, you can pass mock repository structs to services without starting external database servers:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use async_trait::async_trait;\nuse ferrox_database_core::Repository;\nuse ferrox_errors::AppError;\n\npub struct MockUserRepository {\n    pub users: Vec<User>,\n}\n\n#[async_trait]\nimpl Repository<User, u64> for MockUserRepository {\n    async fn find_by_id(&self, id: u64) -> Result<Option<User>, AppError> {\n        Ok(self.users.iter().find(|u| u.id == id).cloned())\n    }\n\n    async fn find_all(&self) -> Result<Vec<User>, AppError> {\n        Ok(self.users.clone())\n    }\n\n    async fn insert(&self, user: User) -> Result<User, AppError> {\n        Ok(user)\n    }\n\n    async fn update(&self, _id: u64, user: User) -> Result<User, AppError> {\n        Ok(user)\n    }\n\n    async fn delete(&self, _id: u64) -> Result<(), AppError> {\n        Ok(())\n    }\n}\n\n#[tokio::test]\nasync fn test_user_service_lookup() {\n    let mock_repo = MockUserRepository {\n        users: vec![User { id: 1, name: \"Alice\".into() }],\n    };\n\n    let result = mock_repo.find_by_id(1).await.unwrap();\n    assert!(result.is_some());\n    assert_eq!(result.unwrap().name, \"Alice\");\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-in-memory-axum-controller-tests-towerserviceext",
      children: ["2. In-Memory Axum Controller Tests (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tower::ServiceExt"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Axum applications implement ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tower::Service"
      }), ". You can execute HTTP requests directly against your router in memory ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "without opening network ports or sockets"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{\n    body::Body,\n    http::{Request, StatusCode},\n    routing::get,\n    Router,\n};\nuse tower::ServiceExt; // for `oneshot`\nuse serde_json::json;\n\nfn app() -> Router {\n    Router::new().route(\"/health\", get(|| async { \"OK\" }))\n}\n\n#[tokio::test]\nasync fn test_health_endpoint() {\n    let app = app();\n\n    // Send mock HTTP GET /health request\n    let response = app\n        .oneshot(\n            Request::builder()\n                .uri(\"/health\")\n                .body(Body::empty())\n                .unwrap(),\n        )\n        .await\n        .unwrap();\n\n    assert_eq!(response.status(), StatusCode::OK);\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "3-database-integration-testing-with-testcontainers-rs",
      children: ["3. Database Integration Testing with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "testcontainers-rs"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For true integration tests against real PostgreSQL or MongoDB instances without cluttering shared dev databases, use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "testcontainers-rs"
      }), " to automatically launch ephemeral Docker containers for the duration of the test:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use testcontainers::{clients, images::postgres};\nuse sea_orm::{Database, DatabaseConnection};\n\n#[tokio::test]\nasync fn test_postgres_integration() {\n    let docker = clients::Cli::default();\n    let postgres_node = docker.run(postgres::Postgres::default());\n\n    let connection_string = format!(\n        \"postgres://postgres:postgres@127.0.0.1:{}/postgres\",\n        postgres_node.get_host_port_ipv4(5432)\n    );\n\n    let db = Database::connect(&connection_string).await.unwrap();\n    \n    // Run schema migrations and execute real DB queries...\n    assert!(db.ping().await.is_ok());\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4--best-practices",
      children: "4. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Keep Unit Tests Under 5ms"
        }), ": Use mock repositories for unit tests so ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "cargo test"
        }), " runs instantly during local development."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Isolate Integration Tests"
        }), ": Annotate slow Docker integration tests with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "#[ignore]"
        }), " or feature flags so they run primarily during CI/CD pipeline execution (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "cargo test -- --ignored"
        }), ")."]
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
52233(module) {
module.exports = JSON.parse('{"id":"ferrox/fundamentals/testing","title":"🧪 Testing & Quality Assurance Strategy","description":"Testing in enterprise Rust applications must cover multiple levels of isolation: fast unit tests for business logic, in-memory route tests for controllers without binding to network sockets, and ephemeral containerized integration tests for database operations.","source":"@site/docs/ferrox/fundamentals/testing.md","sourceDirName":"ferrox/fundamentals","slug":"/ferrox/fundamentals/testing","permalink":"/docs/ferrox/fundamentals/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/fundamentals/testing.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"⚙️ Typed Configuration Management","permalink":"/docs/ferrox/fundamentals/configuration"},"next":{"title":"Mailer Engine, HTML Email Templates & SMTP / SendGrid","permalink":"/docs/ferrox/integrations/mailer"}}')

},

};
;