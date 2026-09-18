"use strict";
exports.ids = ["3986"];
exports.modules = {
9814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_deployment_ci_cd_md_fa2_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_deployment_ci_cd_md_fa2_json__rspack_import_0 = __webpack_require__(94891);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '🤖 CI/CD Automation & GitHub Actions';

const assets = {

};



const toc = [{
  "value": "1. CI Pipeline Workflow (<code>.github/workflows/ci.yml</code>)",
  "id": "1-ci-pipeline-workflow-githubworkflowsciyml",
  "level": 2
}, {
  "value": "2. Documentation Build &amp; Deploy Workflow (<code>.github/workflows/docs.yml</code>)",
  "id": "2-documentation-build--deploy-workflow-githubworkflowsdocsyml",
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
        id: "-cicd-automation--github-actions",
        children: "🤖 CI/CD Automation & GitHub Actions"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Automating testing, code quality linting, security vulnerability auditing, and documentation deployment ensures continuous delivery without regressions."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This guide provides complete GitHub Actions workflow configurations."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "1-ci-pipeline-workflow-githubworkflowsciyml",
      children: ["1. CI Pipeline Workflow (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".github/workflows/ci.yml"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Ferrox CI Pipeline\n\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\n\njobs:\n  check-and-test:\n    name: Code Quality & Tests\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Install Rust Toolchain\n        uses: dtolnay/rust-toolchain@stable\n        with:\n          components: clippy, rustfmt\n\n      - name: Rust Cache\n        uses: Swatinem/rust-cache@v2\n\n      - name: Check Format\n        run: cargo fmt --all -- --check\n\n      - name: Run Clippy Linter\n        run: cargo clippy --workspace -- -D warnings\n\n      - name: Run Workspace Unit Tests\n        run: cargo test --workspace\n\n  security-audit:\n    name: Security Vulnerability Audit\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: rustsec/audit-check-action@v1.4.1\n        with:\n          token: ${{ secrets.GITHUB_TOKEN }}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "2-documentation-build--deploy-workflow-githubworkflowsdocsyml",
      children: ["2. Documentation Build & Deploy Workflow (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".github/workflows/docs.yml"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Deploy Docusaurus Portal\n\non:\n  push:\n    branches: [ main ]\n    paths:\n      - 'docs/**'\n\njobs:\n  deploy-docs:\n    runs-on: ubuntu-latest\n    defaults:\n      run:\n        working-directory: docs\n\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n          cache-dependency-path: docs/package-lock.json\n\n      - name: Install Dependencies\n        run: npm ci\n\n      - name: Build Docusaurus Website\n        run: npm run build\n\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./docs/build\n"
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
94891(module) {
module.exports = JSON.parse('{"id":"ferrox/deployment/ci-cd","title":"🤖 CI/CD Automation & GitHub Actions","description":"Automating testing, code quality linting, security vulnerability auditing, and documentation deployment ensures continuous delivery without regressions.","source":"@site/docs/ferrox/deployment/ci-cd.md","sourceDirName":"ferrox/deployment","slug":"/ferrox/deployment/ci-cd","permalink":"/docs/ferrox/deployment/ci-cd","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox/deployment/ci-cd.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"🏭 Production Deployment: Docker & Kubernetes","permalink":"/docs/ferrox/deployment/docker-kubernetes"},"next":{"title":"🕹️ Controllers: The Masterpiece Guide","permalink":"/docs/ferrox/fundamentals/controllers"}}')

},

};
;