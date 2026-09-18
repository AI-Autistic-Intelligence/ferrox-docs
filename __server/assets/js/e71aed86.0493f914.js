"use strict";
exports.ids = ["8733"];
exports.modules = {
79363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_modules_logger_md_e71_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_modules_logger_md_e71_json__rspack_import_0 = __webpack_require__(6110);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'logger',
	title: 'Logger',
	sidebar_position: 1
};
const contentTitle = 'Logger Module';

const assets = {

};



const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Features",
  "id": "features",
  "level": 2
}, {
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "1. Bootstrapping",
  "id": "1-bootstrapping",
  "level": 3
}, {
  "value": "2. Module Registration",
  "id": "2-module-registration",
  "level": 3
}, {
  "value": "3. Injecting the Logger",
  "id": "3-injecting-the-logger",
  "level": 3
}, {
  "value": "Request Tracing",
  "id": "request-tracing",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "logger-module",
        children: "Logger Module"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/logger"
      }), " module provides a high-performance, Pino-based logging infrastructure for NestJS applications. It automatically correlates HTTP requests, Redacts sensitive information, and integrates seamlessly with OpenTelemetry for distributed tracing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @nest-yalc-2/logger\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pino Under the Hood"
        }), ": Uses ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "pino"
        }), " for extremely fast, JSON-formatted logging."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Request Correlation"
        }), ": Automatically attaches request IDs and trace IDs to every log line within an HTTP request context."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Data Redaction"
        }), ": Built-in support for removing sensitive fields (like passwords, credit cards) before they hit the stdout."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Global Replacement"
        }), ": Safely replaces the default NestJS console logger during bootstrap and app execution."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-bootstrapping",
      children: "1. Bootstrapping"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To ensure even the earliest NestJS bootstrap messages are logged using Pino, instantiate the logger before calling ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "NestFactory.create"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { createYalcLogger } from '@nest-yalc-2/logger';\n\nasync function bootstrap() {\n  const logger = createYalcLogger({ level: 'debug' });\n  \n  const app = await NestFactory.create(AppModule, {\n    logger: logger,\n  });\n  \n  await app.listen(3000);\n}\nbootstrap();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-module-registration",
      children: "2. Module Registration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Register the module in your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AppModule"
      }), " to enable dependency injection of the logger across your application."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcLoggerModule } from '@nest-yalc-2/logger';\n\n@Module({\n  imports: [\n    YalcLoggerModule.forRoot({\n      pinoOptions: {\n        level: process.env.LOG_LEVEL || 'info',\n        redact: ['req.headers.authorization', 'body.password'],\n      }\n    }),\n  ],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "3-injecting-the-logger",
      children: "3. Injecting the Logger"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now inject the logger into any provider."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable, Logger } from '@nestjs/common';\nimport { YalcLoggerService } from '@nest-yalc-2/logger';\n\n@Injectable()\nexport class UsersService {\n  constructor(private readonly logger: YalcLoggerService) {}\n\n  async createUser(data: any) {\n    this.logger.log('Creating a new user', { email: data.email });\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "request-tracing",
      children: "Request Tracing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When combined with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@nest-yalc-2/observability"
      }), ", the logger automatically captures OpenTelemetry Trace IDs and Span IDs. This means every log entry generated during a request will contain ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "trace_id"
      }), ", making it trivial to search logs in systems like Datadog, ELK, or Grafana Loki."]
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
6110(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/modules/logger","title":"Logger","description":"The @nest-yalc-2/logger module provides a high-performance, Pino-based logging infrastructure for NestJS applications. It automatically correlates HTTP requests, Redacts sensitive information, and integrates seamlessly with OpenTelemetry for distributed tracing.","source":"@site/docs/nestjs-yalc/modules/logger.md","sourceDirName":"nestjs-yalc/modules","slug":"/nestjs-yalc/modules/logger","permalink":"/docs/nestjs-yalc/modules/logger","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/modules/logger.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"logger","title":"Logger","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Core Utilities, Helpers & Object Manipulation","permalink":"/docs/nestjs-yalc/docs/modules/utils"},"next":{"title":"CRUD Generator","permalink":"/docs/nestjs-yalc/modules/crud-gen"}}')

},

};
;