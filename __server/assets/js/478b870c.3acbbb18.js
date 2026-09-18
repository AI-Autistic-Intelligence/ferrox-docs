"use strict";
exports.ids = ["1687"];
exports.modules = {
91248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_components_md_478_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_components_md_478_json__rspack_import_0 = __webpack_require__(38329);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66497);


const frontMatter = {
	id: 'components',
	title: 'Component Library & Interactive Playground',
	sidebar_position: 6
};
const contentTitle = '🎨 Component Library & Interactive Playground';

const assets = {

};




const toc = [{
  "value": "🎮 Live Interactive Playground",
  "id": "-live-interactive-playground",
  "level": 2
}, {
  "value": "🛠️ How to Use the Live Playground",
  "id": "️-how-to-use-the-live-playground",
  "level": 2
}, {
  "value": "📚 Component API Reference",
  "id": "-component-api-reference",
  "level": 2
}, {
  "value": "📐 1. Responsive Grid Layout",
  "id": "-1-responsive-grid-layout",
  "level": 3
}, {
  "value": "🃏 2. Glassmorphism Card",
  "id": "-2-glassmorphism-card",
  "level": 3
}, {
  "value": "🚨 3. Notification Alerts",
  "id": "-3-notification-alerts",
  "level": 3
}, {
  "value": "🎯 4. Interactive Buttons",
  "id": "-4-interactive-buttons",
  "level": 3
}, {
  "value": "🏷️ 5. Status Badges",
  "id": "️-5-status-badges",
  "level": 3
}, {
  "value": "📝 6. Form Inputs &amp; Groups",
  "id": "-6-form-inputs--groups",
  "level": 3
}, {
  "value": "🔘 7. Toggles, Checkboxes &amp; Radios",
  "id": "-7-toggles-checkboxes--radios",
  "level": 3
}, {
  "value": "🎚️ 8. Range Sliders &amp; Progress Bars",
  "id": "️-8-range-sliders--progress-bars",
  "level": 3
}, {
  "value": "👤 9. Avatars &amp; User Pills",
  "id": "-9-avatars--user-pills",
  "level": 3
}, {
  "value": "📁 10. File Upload Dropzone",
  "id": "-10-file-upload-dropzone",
  "level": 3
}, {
  "value": "⏳ 11. Loading Spinners",
  "id": "-11-loading-spinners",
  "level": 3
}, {
  "value": "📊 12. Virtualized DataGrid",
  "id": "-12-virtualized-datagrid",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_3/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-component-library--interactive-playground",
        children: "🎨 Component Library & Interactive Playground"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Explore and interact with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Ferrox Front"
      }), " component library live in your browser using our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Nivo-Style Interactive Playground"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can edit JSON datasets live in real-time, adjust dynamic sliders (stroke width, curve styles, row counts), toggle glassmorphism themes, simulate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Zero-Trust RBAC security actions"
      }), ", and inspect auto-generated Rust component code (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "rsx!"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-live-interactive-playground",
      children: "🎮 Live Interactive Playground"
    }), "\n", "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      src: (0,_docusaurus_useBaseUrl__rspack_import_2/* ["default"] */.Ay)('/playground.html'),
      style: {
        width: '100%',
        height: '880px',
        border: '1px solid var(--border-glass, #333)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      },
      title: "Ferrox Front Interactive Component Playground"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "️-how-to-use-the-live-playground",
      children: "🛠️ How to Use the Live Playground"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "📝 Live JSON Data Editing"
        }), ": Edit the raw JSON data inside the right control panel textarea (e.g. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "[{ \"x\": 10, \"y\": 150, \"label\": \"Jan ($150k)\" }, ...]"
        }), ") and click ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Apply Live JSON Data"
        }), " to watch the vector SVG chart update instantly!"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "📈 Dynamic Curve Controls"
        }), ": Switch between ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
          children: "Smooth Spline (Bezier)"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
          children: "Linear Straight Lines"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
          children: "Stepped Digital Waves"
        }), ", or adjust the stroke width slider from 1px to 10px."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "📊 Virtualized DataGrid Testing"
        }), ": Switch the DataGrid row count between 500, 10,000, and 1,000,000 enterprise rows to test viewport scrolling performance."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "🔒 Zero-Trust RBAC Simulator"
        }), ": Toggle current user role (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Guest"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "User"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Admin"
        }), ") to observe how ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<Secure require=\"admin:delete\">"
        }), " dynamically mounts/unmounts DOM nodes directly in WebAssembly linear memory heap."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "🎨 Glassmorphism Theme Switcher"
        }), ": Click on any theme button (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Cyber"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Ocean"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Forest"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Sunset"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Corporate"
        }), ") to switch 60fps CSS variables live."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "📜 Rust Code Inspector"
        }), ": Copy the live-generated Rust code snippet dynamically updated based on your selected dataset and options."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-component-api-reference",
      children: "📚 Component API Reference"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-ui"
      }), " crate provides dozens of enterprise-grade components. Below are examples of how to instantiate them directly in your Rust Wasm front-end."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-1-responsive-grid-layout",
      children: "📐 1. Responsive Grid Layout"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::layout::{container, row, col};\n\ncontainer()\n    .child(\n        row()\n            .child(col(\"12 md-6 lg-4\").child(/* Column content */))\n            .child(col(\"12 md-6 lg-8\").child(/* Column content */))\n    )\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-2-glassmorphism-card",
      children: "🃏 2. Glassmorphism Card"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{card, card_header, card_body, card_footer};\n\ncard()\n    .child(card_header(\"Account Settings\"))\n    .child(card_body().text(\"Manage your account preferences here.\"))\n    .child(card_footer().child(/* Add buttons here */))\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-3-notification-alerts",
      children: "🚨 3. Notification Alerts"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::alert;\n\n// Available variants: \"success\", \"danger\", \"warning\", \"info\"\nalert(\"Operation completed successfully!\", \"success\");\nalert(\"Network connection lost. Retrying...\", \"warning\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-4-interactive-buttons",
      children: "🎯 4. Interactive Buttons"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::button;\n\n// Available variants: \"primary\", \"secondary\", \"outline\", \"glass\", \"danger\", \"ghost\"\nbutton(\"Submit Form\", \"primary\");\nbutton(\"Cancel\", \"ghost\");\nbutton(\"Delete Account\", \"danger\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-5-status-badges",
      children: "🏷️ 5. Status Badges"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::badge;\n\n// Available variants: \"primary\", \"success\", \"warning\", \"danger\", \"info\"\nbadge(\"ACTIVE\", \"success\");\nbadge(\"PENDING\", \"warning\");\nbadge(\"ERROR\", \"danger\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-6-form-inputs--groups",
      children: "📝 6. Form Inputs & Groups"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{form_group, input, textarea, select};\n\nform_group(\"Email Address\", input(\"email\", \"john@example.com\"));\nform_group(\"Biography\", textarea(\"Tell us about yourself...\", 4));\n\n// Select Dropdown\nform_group(\"Country\", select(vec![\n    (\"US\", \"United States\"),\n    (\"UK\", \"United Kingdom\"),\n    (\"IT\", \"Italy\")\n]));\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-7-toggles-checkboxes--radios",
      children: "🔘 7. Toggles, Checkboxes & Radios"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{toggle_switch, checkbox, radio};\n\ntoggle_switch(\"Enable Dark Mode\", true);\ncheckbox(\"I accept the Terms and Conditions\", false);\nradio(\"payment_method\", \"credit_card\", \"Credit Card\", true);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-8-range-sliders--progress-bars",
      children: "🎚️ 8. Range Sliders & Progress Bars"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{progress_bar, range_slider};\n\n// Progress bar (0.0 to 100.0)\nprogress_bar(75.5);\n\n// Range slider (min, max, value)\nrange_slider(0, 100, 42);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-9-avatars--user-pills",
      children: "👤 9. Avatars & User Pills"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{avatar, user_pill};\n\navatar(\"JD\");\nuser_pill(\"Jane Doe\", \"Administrator\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-10-file-upload-dropzone",
      children: "📁 10. File Upload Dropzone"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::file_upload;\n\nfile_upload(\"image/png, image/jpeg, application/pdf\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-11-loading-spinners",
      children: "⏳ 11. Loading Spinners"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::spinner;\n\nspinner();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-12-virtualized-datagrid",
      children: "📊 12. Virtualized DataGrid"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "virtual_data_grid"
      }), " renders tables with 1,000,000+ rows instantly by calculating viewport scroll offsets and mounting only visible rows into the DOM."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::{virtual_data_grid, DataGridState};\n\nlet state = DataGridState::new(40.0, 15); // 40px row height, 15 visible rows\n\nlet columns = vec![\"Transaction ID\", \"Enterprise Client\", \"Amount\", \"Status\"];\nlet rows = vec![\n    vec![\"TX-1001\", \"Acme Corp\", \"$12,450.00\", \"COMPLETED\"],\n    vec![\"TX-1002\", \"Stark Ind\", \"$98,100.00\", \"PROCESSING\"],\n];\n\nlet grid = virtual_data_grid(columns, rows, &state);\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_3/* .useMDXComponents */.R)(),
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
38329(module) {
module.exports = JSON.parse('{"id":"ferrox-front/components","title":"Component Library & Interactive Playground","description":"Explore and interact with the Ferrox Front component library live in your browser using our Nivo-Style Interactive Playground.","source":"@site/docs/ferrox-front/components.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/components","permalink":"/docs/ferrox-front/components","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/components.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"components","title":"Component Library & Interactive Playground","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Glassmorphism Design System (ferrox-front-ui)","permalink":"/docs/ferrox-front/ui-components"},"next":{"title":"Zero-Trust Wasm Security, WebCrypto & XSS Sanitization","permalink":"/docs/ferrox-front/security"}}')

},

};
;