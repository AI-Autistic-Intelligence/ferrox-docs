"use strict";
exports.ids = ["1772"];
exports.modules = {
74013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_quickstart_md_727_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_quickstart_md_727_json__rspack_import_0 = __webpack_require__(83711);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'quickstart',
	title: 'Quickstart Guide',
	sidebar_position: 2
};
const contentTitle = '🚀 Quickstart: From Zero to Hero in 5 Minutes';

const assets = {

};



const toc = [{
  "value": "📦 1. Prerequisites",
  "id": "-1-prerequisites",
  "level": 2
}, {
  "value": "🛠️ 2. Create a New Project",
  "id": "️-2-create-a-new-project",
  "level": 2
}, {
  "value": "🌐 3. Create the <code>index.html</code> File",
  "id": "-3-create-the-indexhtml-file",
  "level": 2
}, {
  "value": "🦀 4. Write Application Code (<code>src/lib.rs</code>)",
  "id": "-4-write-application-code-srclibrs",
  "level": 2
}, {
  "value": "🖥️ 5. Run the Local Development Server",
  "id": "️-5-run-the-local-development-server",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-quickstart-from-zero-to-hero-in-5-minutes",
        children: "🚀 Quickstart: From Zero to Hero in 5 Minutes"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This guide demonstrates how to install prerequisites, build your first WebAssembly application in Rust using Ferrox Front, and run it in the browser."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-1-prerequisites",
      children: "📦 1. Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Ensure you have the Rust toolchain installed. Add the WebAssembly compilation target:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "rustup target add wasm32-unknown-unknown\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Install ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "trunk"
      }), ", the fast WebAssembly build tool and local dev server for Rust:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo install trunk\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-2-create-a-new-project",
      children: "🛠️ 2. Create a New Project"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Create a new binary project with Cargo:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo new --bin my-ferrox-app\r\ncd my-ferrox-app\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Add Ferrox Front dependencies to your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Cargo.toml"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-toml",
        children: "[package]\r\nname = \"my-ferrox-app\"\r\nversion = \"0.1.0\"\r\nedition = \"2021\"\r\n\r\n[lib]\r\ncrate-type = [\"cdylib\", \"rlib\"]\r\n\r\n[dependencies]\r\nferrox-front-core = { path = \"../ferrox-front/crates/ferrox-front-core\" }\r\nferrox-front-ui = { path = \"../ferrox-front/crates/ferrox-front-ui\" }\r\nferrox-front-macro = { path = \"../ferrox-front/crates/ferrox-front-macro\" }\r\nferrox-front-security = { path = \"../ferrox-front/crates/ferrox-front-security\" }\r\nwasm-bindgen = \"0.2\"\r\nweb-sys = \"0.3\"\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-3-create-the-indexhtml-file",
      children: ["🌐 3. Create the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "index.html"
      }), " File"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "index.html"
      }), " in your project root for Trunk:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\r\n<html lang=\"en\" data-theme=\"ferrox-cyber\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Ferrox Front App</title>\r\n    <link rel=\"rust\" data-trunk rel=\"wasm\" />\r\n</head>\r\n<body style=\"margin:0; background: var(--bg-primary); color: var(--text-primary); font-family: sans-serif;\">\r\n    <div id=\"root\"></div>\r\n</body>\r\n</html>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-4-write-application-code-srclibrs",
      children: ["🦀 4. Write Application Code (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/lib.rs"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Replace the contents of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/lib.rs"
      }), " with:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use wasm_bindgen::prelude::*;\r\nuse ferrox_front_core::dom::{mount, div, button, h1, p};\r\nuse ferrox_front_core::reactivity::create_signal;\r\nuse ferrox_front_core::theme::set_theme;\r\nuse ferrox_front_ui::layout::{container, row, col};\r\nuse ferrox_front_ui::components::{card, card_header, card_body, alert};\r\n\r\n#[wasm_bindgen(start)]\r\npub fn main() -> Result<(), JsValue> {\r\n    let (count, set_count) = create_signal(0);\r\n\r\n    let app = container()\r\n        .child(h1().text(\"⚡ Ferrox Front Wasm App\"))\r\n        .child(alert(\"Application booted successfully in WebAssembly!\", \"success\"))\r\n        .child(\r\n            row().child(\r\n                col(\"12 md-6\").child(\r\n                    card()\r\n                        .child(card_header(\"Reactive Counter\"))\r\n                        .child(\r\n                            card_body()\r\n                                .child(p().text(&format!(\"Current count: {}\", count.get())))\r\n                                .child(\r\n                                    button()\r\n                                        .attr(\"class\", \"ferrox-btn\")\r\n                                        .text(\"Increment\")\r\n                                        .on_click(move || set_count.update(|n| *n += 1))\r\n                                )\r\n                        )\r\n                )\r\n            )\r\n        );\r\n\r\n    mount(\"#root\", app);\r\n    Ok(())\r\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-5-run-the-local-development-server",
      children: "🖥️ 5. Run the Local Development Server"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Execute the Trunk serve command:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "trunk serve --open\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Trunk will compile your Rust code into WebAssembly, launch a local web server with Hot Reloading, and open your default browser at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://localhost:8080"
      }), "."]
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
83711(module) {
module.exports = JSON.parse('{"id":"ferrox-front/quickstart","title":"Quickstart Guide","description":"This guide demonstrates how to install prerequisites, build your first WebAssembly application in Rust using Ferrox Front, and run it in the browser.","source":"@site/docs/ferrox-front/quickstart.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/quickstart","permalink":"/docs/ferrox-front/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"quickstart","title":"Quickstart Guide","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Core Kernel, Context Providers & Resource Managers","permalink":"/docs/ferrox-front/core"},"next":{"title":"Fine-Grained Reactive Primitives (Signals, Memos & Effects)","permalink":"/docs/ferrox-front/reactivity"}}')

},

};
;