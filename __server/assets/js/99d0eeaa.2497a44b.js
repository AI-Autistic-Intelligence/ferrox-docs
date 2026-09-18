"use strict";
exports.ids = ["494"];
exports.modules = {
14238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_events_md_99d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_events_md_99d_json__rspack_import_0 = __webpack_require__(44832);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = '📡 Event-Driven Architecture & Event Bus';

const assets = {

};



const toc = [{
  "value": "1. Defining a <code>DomainEvent</code>",
  "id": "1-defining-a-domainevent",
  "level": 2
}, {
  "value": "2. Pub/Sub with <code>InMemoryDispatcher</code>",
  "id": "2-pubsub-with-inmemorydispatcher",
  "level": 2
}, {
  "value": "3. ✅ Best Practices",
  "id": "3--best-practices",
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
        id: "-event-driven-architecture--event-bus",
        children: "📡 Event-Driven Architecture & Event Bus"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Event-driven architecture decouples producers of business events from subscribers that react to them (e.g. sending welcome emails when a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "UserCreatedEvent"
      }), " fires, updating analytics counters, or invalidating caches)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-events"
      }), " provides strongly typed domain events and asynchronous in-memory dispatchers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-defining-a-domainevent",
      children: ["1. Defining a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DomainEvent"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Implement the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DomainEvent"
      }), " trait on your event structs:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use serde::{Deserialize, Serialize};\nuse ferrox_events::DomainEvent;\n\n#[derive(Clone, Debug, Serialize, Deserialize, PartialEq)]\npub struct UserCreatedEvent {\n    pub user_id: u64,\n    pub email: String,\n}\n\nimpl DomainEvent for UserCreatedEvent {\n    fn event_name(&self) -> &'static str {\n        \"UserCreated\"\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-pubsub-with-inmemorydispatcher",
      children: ["2. Pub/Sub with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "InMemoryDispatcher"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "InMemoryDispatcher"
      }), " uses Tokio broadcast channels for zero-cost, high-speed in-process event streaming:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_events::{InMemoryDispatcher, EventDispatcher};\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    // Initialize Event Bus with capacity for 100 queued events\n    let dispatcher = InMemoryDispatcher::<UserCreatedEvent>::new(100);\n\n    // 1. Subscribe Event Listeners\n    let mut rx = dispatcher.subscribe().await?;\n\n    tokio::spawn(async move {\n        while let Ok(event) = rx.recv().await {\n            println!(\"📧 Welcome Email Listener: Sending email to {}\", event.email);\n        }\n    });\n\n    // 2. Publish Domain Event from Service\n    let event = UserCreatedEvent {\n        user_id: 101,\n        email: \"user@ferrox-rust.dev\".into(),\n    };\n\n    dispatcher.publish(event).await?;\n\n    Ok(())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3--best-practices",
      children: "3. ✅ Best Practices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Make Event Handlers Idempotent"
        }), ": Design event listeners to safely process duplicate events without unintended side effects."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Offload Heavy Listener Tasks"
        }), ": Spawn background Tokio tasks for event handlers so publishing domain events never delays HTTP responses."]
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
44832(module) {
module.exports = JSON.parse('{"id":"ferrox/architectures/events","title":"📡 Event-Driven Architecture & Event Bus","description":"Event-driven architecture decouples producers of business events from subscribers that react to them (e.g. sending welcome emails when a UserCreatedEvent fires, updating analytics counters, or invalidating caches).","source":"@site/docs/ferrox/architectures/events.md","sourceDirName":"ferrox/architectures","slug":"/ferrox/architectures/events","permalink":"/docs/ferrox/architectures/events","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/architectures/events.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"🔄 The Saga Pattern (Distributed Transactions)","permalink":"/docs/ferrox/architectures/sagas"},"next":{"title":"📬 Background Jobs & Worker Queues","permalink":"/docs/ferrox/architectures/queues-jobs"}}')

},

};
;