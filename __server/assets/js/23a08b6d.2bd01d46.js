"use strict";
exports.ids = ["3090"];
exports.modules = {
43410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_tutorial_02_building_the_core_md_23a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_tutorial_02_building_the_core_md_23a_json__rspack_import_0 = __webpack_require__(18248);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🏗️ Part 2: Building the Core';

const assets = {

};



const toc = [{
  "value": "1. The DTOs (Data Transfer Objects)",
  "id": "1-the-dtos-data-transfer-objects",
  "level": 2
}, {
  "value": "2. The Provider (TaskService)",
  "id": "2-the-provider-taskservice",
  "level": 2
}, {
  "value": "3. The Controller &amp; Security",
  "id": "3-the-controller--security",
  "level": 2
}, {
  "value": "4. Wiring it all together",
  "id": "4-wiring-it-all-together",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "️-part-2-building-the-core",
        children: "🏗️ Part 2: Building the Core"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Now that our application is running, let's implement the core logic for our Ticketing System following the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "\"Thin Controllers, Fat Providers\""
      }), " best practice."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-the-dtos-data-transfer-objects",
      children: "1. The DTOs (Data Transfer Objects)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We need to define how data enters and exits our API. We will use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "serde"
      }), " for JSON, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validator"
      }), " for security checks, and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ts-rs"
      }), " to export the types later."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create a new file ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/dto.rs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::{Deserialize, Serialize};\nuse validator::Validate;\nuse ts_rs::TS;\nuse uuid::Uuid;\n\n// The entity returned to the client\n#[derive(Debug, Clone, Serialize, TS)]\n#[ts(export)]\npub struct Ticket {\n    pub id: Uuid,\n    pub title: String,\n    pub status: String,\n}\n\n// The incoming payload to create a ticket\n#[derive(Debug, Deserialize, Validate, TS)]\n#[ts(export)]\npub struct CreateTicketDto {\n    #[validate(length(min = 5, message = \"Title must be at least 5 characters\"))]\n    pub title: String,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-the-provider-taskservice",
      children: "2. The Provider (TaskService)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We need an in-memory database to store our tickets. Since Tokio uses multiple worker threads, we must protect our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Vec<Ticket>"
      }), " with a thread-safe ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Arc<Mutex>"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/service.rs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use std::sync::Arc;\nuse tokio::sync::Mutex;\nuse uuid::Uuid;\nuse crate::dto::{Ticket, CreateTicketDto};\n\n#[derive(Clone)]\npub struct TicketService {\n    db: Arc<Mutex<Vec<Ticket>>>,\n}\n\nimpl TicketService {\n    pub fn new() -> Self {\n        Self { db: Arc::new(Mutex::new(Vec::new())) }\n    }\n\n    pub async fn create_ticket(&self, dto: CreateTicketDto) -> Ticket {\n        let ticket = Ticket {\n            id: Uuid::new_v4(),\n            title: dto.title,\n            status: \"OPEN\".to_string(),\n        };\n\n        // We lock the database asynchronously to avoid blocking the Tokio thread!\n        let mut db_lock = self.db.lock().await;\n        db_lock.push(ticket.clone());\n        \n        ticket\n    }\n\n    pub async fn get_tickets(&self) -> Vec<Ticket> {\n        let db_lock = self.db.lock().await;\n        db_lock.clone()\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-the-controller--security",
      children: "3. The Controller & Security"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Finally, we expose our Service via HTTP. We will also protect the route using Ferrox's Zero-Trust authentication middleware."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/controller.rs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use axum::{extract::State, http::StatusCode, Json, Router, routing::{get, post}, middleware};\nuse ferrox_security::paseto_auth; // Our Zero-Trust JWT verifier\nuse crate::{AppState, dto::{Ticket, CreateTicketDto}};\n\n// The Controller acts as the routing boundary\npub fn tickets_router() -> Router<AppState> {\n    Router::new()\n        .route(\"/\", get(list_tickets).post(create_ticket))\n        // 🔒 Protect all routes in this controller\n        .route_layer(middleware::from_fn(paseto_auth))\n}\n\n// ❌ If the `CreateTicketDto` validation fails, this function is NEVER called.\nasync fn create_ticket(\n    State(state): State<AppState>,\n    Json(payload): Json<CreateTicketDto>,\n) -> (StatusCode, Json<Ticket>) {\n    \n    // We delegate the heavy lifting to the Provider\n    let ticket = state.ticket_service.create_ticket(payload).await;\n    \n    (StatusCode::CREATED, Json(ticket))\n}\n\nasync fn list_tickets(\n    State(state): State<AppState>,\n) -> Json<Vec<Ticket>> {\n    let tickets = state.ticket_service.get_tickets().await;\n    Json(tickets)\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-wiring-it-all-together",
      children: "4. Wiring it all together"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go back to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/main.rs"
      }), " and inject the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "TicketService"
      }), " into the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppState"
      }), ", then nest the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tickets_router"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "// ... imports ...\nuse crate::service::TicketService;\nuse crate::controller::tickets_router;\n\n#[derive(Clone)]\npub struct AppState {\n    pub ticket_service: TicketService,\n}\n\n#[tokio::main]\nasync fn main() {\n    let state = AppState {\n        ticket_service: TicketService::new(),\n    };\n\n    let app = Router::new()\n        .nest(\"/api/tickets\", tickets_router()) // Composition!\n        .with_state(state);\n\n    // ... bind and serve ...\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Our core architecture is now complete and highly secure! In the final chapter, we will generate the TypeScript client for the Frontend."
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
18248(module) {
module.exports = JSON.parse('{"id":"ferrox/tutorial/building-the-core","title":"🏗️ Part 2: Building the Core","description":"Now that our application is running, let\'s implement the core logic for our Ticketing System following the \\"Thin Controllers, Fat Providers\\" best practice.","source":"@site/docs/ferrox/tutorial/02-building-the-core.md","sourceDirName":"ferrox/tutorial","slug":"/ferrox/tutorial/building-the-core","permalink":"/docs/ferrox/tutorial/building-the-core","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/tutorial/02-building-the-core.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"🚀 Part 1: Project Setup","permalink":"/docs/ferrox/tutorial/setup"},"next":{"title":"🤖 Part 3: The Code Factory","permalink":"/docs/ferrox/tutorial/code-factory"}}')

},

};
;