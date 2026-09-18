"use strict";
exports.ids = ["4954"];
exports.modules = {
40838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_sagas_md_87e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_architectures_sagas_md_87e_json__rspack_import_0 = __webpack_require__(72642);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = '🔄 The Saga Pattern (Distributed Transactions)';

const assets = {

};



const toc = [{
  "value": "How Sagas Work",
  "id": "how-sagas-work",
  "level": 2
}, {
  "value": "High-Level Example",
  "id": "high-level-example",
  "level": 3
}, {
  "value": "Low-Level Internal Details",
  "id": "low-level-internal-details",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "-the-saga-pattern-distributed-transactions",
        children: "🔄 The Saga Pattern (Distributed Transactions)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In a monolithic architecture, you can wrap multiple database operations in a single SQL Transaction (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "BEGIN; ... COMMIT;"
      }), "). If any operation fails, you simply issue a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ROLLBACK"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In a Microservice architecture, this is impossible. You cannot lock a row in the \"Inventory Database\" and a row in the \"Payments Database\" simultaneously without catastrophic performance degradation (Distributed Locking / Two-Phase Commit)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Ferrox solves this using the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Saga Pattern"
      }), " via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-saga"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-sagas-work",
      children: "How Sagas Work"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A Saga is a sequence of local transactions. Each local transaction updates the database and publishes an event to trigger the next local transaction in the saga."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If a local transaction fails, the saga executes a series of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Compensating Transactions"
      }), " that undo the changes made by the preceding local transactions."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "high-level-example",
      children: "High-Level Example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_saga::{Saga, SagaStep};\n\n// Define the steps and their compensating rollbacks\nlet book_hotel = SagaStep::new(\n    \"Book Hotel\",\n    || async { call_hotel_microservice().await },                 // Action\n    || async { cancel_hotel_reservation_microservice().await }    // Compensation\n);\n\nlet book_flight = SagaStep::new(\n    \"Book Flight\",\n    || async { call_airline_microservice().await },               // Action\n    || async { cancel_flight_microservice().await }               // Compensation\n);\n\n// If book_flight fails, the Saga orchestrator will automatically execute \n// `cancel_hotel_reservation_microservice()` to restore consistency.\nlet holiday_saga = Saga::builder()\n    .add_step(book_hotel)\n    .add_step(book_flight)\n    .build();\n\nmatch holiday_saga.execute().await {\n    Ok(_) => println!(\"Holiday booked successfully!\"),\n    Err(_) => println!(\"Booking failed. All previous steps were rolled back.\"),\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "low-level-internal-details",
      children: "Low-Level Internal Details"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-saga"
      }), " orchestrator stores the execution state in a state machine. As each ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SagaStep"
      }), " succeeds, its Compensation Closure is pushed onto a Stack (LIFO - Last In, First Out)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SagaStep"
      }), " returns an Error, the orchestrator stops moving forward, pops the Compensation Closures off the stack one by one, and executes them in reverse order. This ensures eventual consistency across distributed microservices without ever holding a distributed database lock."]
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
72642(module) {
module.exports = JSON.parse('{"id":"ferrox/architectures/sagas","title":"🔄 The Saga Pattern (Distributed Transactions)","description":"In a monolithic architecture, you can wrap multiple database operations in a single SQL Transaction (BEGIN; ... COMMIT;). If any operation fails, you simply issue a ROLLBACK.","source":"@site/docs/ferrox/architectures/sagas.md","sourceDirName":"ferrox/architectures","slug":"/ferrox/architectures/sagas","permalink":"/docs/ferrox/architectures/sagas","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/architectures/sagas.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"⚡ Caching & Stampede Protection","permalink":"/docs/ferrox/architectures/caching"},"next":{"title":"📡 Event-Driven Architecture & Event Bus","permalink":"/docs/ferrox/architectures/events"}}')

},

};
;