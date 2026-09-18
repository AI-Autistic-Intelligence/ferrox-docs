"use strict";
exports.ids = ["4013"];
exports.modules = {
12143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_ui_components_md_339_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_front_ui_components_md_339_json__rspack_import_0 = __webpack_require__(17818);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'ui-components',
	title: 'Glassmorphism Design System (ferrox-front-ui)',
	sidebar_position: 4
};
const contentTitle = '🎨 Glassmorphism Design System & UI Components (ferrox-front-ui)';

const assets = {

};



const toc = [{
  "value": "🎨 Design Tokens (<code>tokens</code>)",
  "id": "-design-tokens-tokens",
  "level": 2
}, {
  "value": "🔘 UI Component Library",
  "id": "-ui-component-library",
  "level": 2
}, {
  "value": "1. Buttons (<code>button</code>)",
  "id": "1-buttons-button",
  "level": 3
}, {
  "value": "2. Status Badges (<code>badge</code>)",
  "id": "2-status-badges-badge",
  "level": 3
}, {
  "value": "3. Form Controls (<code>input</code>, <code>form_group</code>)",
  "id": "3-form-controls-input-form_group",
  "level": 3
}, {
  "value": "4. Cards &amp; Panels (<code>card</code>)",
  "id": "4-cards--panels-card",
  "level": 3
}, {
  "value": "5. Notification Alerts (<code>alert</code>)",
  "id": "5-notification-alerts-alert",
  "level": 3
}, {
  "value": "6. Progress Bars &amp; Spinners (<code>progress_bar</code>, <code>spinner</code>)",
  "id": "6-progress-bars--spinners-progress_bar-spinner",
  "level": 3
}, {
  "value": "7. User Pill &amp; Avatars (<code>user_pill</code>, <code>avatar</code>)",
  "id": "7-user-pill--avatars-user_pill-avatar",
  "level": 3
}, {
  "value": "📊 Virtualized DataGrid (<code>virtual_data_grid</code>)",
  "id": "-virtualized-datagrid-virtual_data_grid",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h1, {
        id: "-glassmorphism-design-system--ui-components-ferrox-front-ui",
        children: ["🎨 Glassmorphism Design System & UI Components (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "ferrox-front-ui"
        }), ")"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ferrox-front-ui"
      }), " provides a complete, enterprise-grade ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Glassmorphism Design System"
      }), " for WebAssembly applications. It includes ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Design Tokens"
      }), ", a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "12-column responsive layout grid"
      }), ", a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Virtualized DataGrid"
      }), " (1,000,000+ rows), and a comprehensive library of pre-styled UI components."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-design-tokens-tokens",
      children: ["🎨 Design Tokens (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "tokens"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Design Tokens centralize spacing, border radius, shadows, and glassmorphism backdrop blur properties:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::tokens::DesignTokens;\n\n// Spacing: SPACE_XS, SPACE_SM, SPACE_MD, SPACE_LG, SPACE_XL\n// Radius: RADIUS_SM, RADIUS_MD, RADIUS_LG, RADIUS_FULL\n// Glass FX: BACKDROP_BLUR, BORDER_GLASS, SHADOW_GLASS\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-ui-component-library",
      children: "🔘 UI Component Library"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "1-buttons-button",
      children: ["1. Buttons (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "button"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Supports 6 design variants: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"primary\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"secondary\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"outline\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"glass\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"danger\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"ghost\""
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::button;\n\nlet save_btn = button(\"Save Changes\", \"primary\");\nlet cancel_btn = button(\"Cancel\", \"secondary\");\nlet delete_btn = button(\"Delete Account\", \"danger\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "2-status-badges-badge",
      children: ["2. Status Badges (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "badge"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Pill badges for status indication: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"primary\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"success\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"warning\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"danger\""
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "\"info\""
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::badge;\n\nlet active_badge = badge(\"Active\", \"success\");\nlet pending_badge = badge(\"Pending\", \"warning\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "3-form-controls-input-form_group",
      children: ["3. Form Controls (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "input"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "form_group"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{form_group, input};\n\nlet email_input = form_group(\"Corporate Email\", input(\"email\", \"user@enterprise.com\"));\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "4-cards--panels-card",
      children: ["4. Cards & Panels (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "card"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{card, card_header, card_body, card_footer, button};\n\nlet my_card = card()\n    .child(card_header(\"Security Controls\"))\n    .child(card_body().text(\"Configure Zero-Trust session permissions.\"))\n    .child(card_footer().child(button(\"Save Settings\", \"primary\")));\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "5-notification-alerts-alert",
      children: ["5. Notification Alerts (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "alert"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::alert;\n\nlet success_alert = alert(\"Database synchronization complete.\", \"success\");\nlet danger_alert = alert(\"Connection timeout to Redis cluster.\", \"danger\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "6-progress-bars--spinners-progress_bar-spinner",
      children: ["6. Progress Bars & Spinners (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "progress_bar"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "spinner"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{progress_bar, spinner};\n\nlet progress = progress_bar(84.5); // 84.5% filled\nlet loading_icon = spinner();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "7-user-pill--avatars-user_pill-avatar",
      children: ["7. User Pill & Avatars (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "user_pill"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "avatar"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::components::{user_pill, avatar};\n\nlet user = user_pill(\"Sarah Connor\", \"Security Admin\");\nlet user_avatar = avatar(\"SC\");\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "-virtualized-datagrid-virtual_data_grid",
      children: ["📊 Virtualized DataGrid (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "virtual_data_grid"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "virtual_data_grid"
      }), " mounts only visible viewport rows into the DOM, maintaining 60fps scrolling performance even with 1,000,000 data rows."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-rust",
        children: "use ferrox_front_ui::{virtual_data_grid, DataGridState};\n\nlet state = DataGridState::new(38.0, 15); // 38px row height, 15 visible rows\n\nlet columns = vec![\"Transaction ID\", \"Enterprise Client\", \"Amount\", \"Status\"];\nlet rows = vec![\n    vec![\"TX-1001\", \"Acme Corp\", \"$12,450.00\", \"VERIFIED\"],\n    vec![\"TX-1002\", \"Stark Ind\", \"$98,100.00\", \"PROCESSING\"],\n];\n\nlet grid = virtual_data_grid(columns, rows, &state);\n"
      })
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
17818(module) {
module.exports = JSON.parse('{"id":"ferrox-front/ui-components","title":"Glassmorphism Design System (ferrox-front-ui)","description":"ferrox-front-ui provides a complete, enterprise-grade Glassmorphism Design System for WebAssembly applications. It includes Design Tokens, a 12-column responsive layout grid, a Virtualized DataGrid (1,000,000+ rows), and a comprehensive library of pre-styled UI components.","source":"@site/docs/ferrox-front/ui-components.md","sourceDirName":"ferrox-front","slug":"/ferrox-front/ui-components","permalink":"/docs/ferrox-front/ui-components","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-front/ui-components.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"ui-components","title":"Glassmorphism Design System (ferrox-front-ui)","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Virtual DOM Templates, JSX Engine & HTML Macros","permalink":"/docs/ferrox-front/templates"},"next":{"title":"Component Library & Interactive Playground","permalink":"/docs/ferrox-front/components"}}')

},

};
;