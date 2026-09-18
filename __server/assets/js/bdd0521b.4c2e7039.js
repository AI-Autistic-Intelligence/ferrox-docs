"use strict";
exports.ids = ["4150"];
exports.modules = {
68738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_quickstart_md_bdd_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_ferrox_node_docs_quickstart_md_bdd_json__rspack_import_0 = __webpack_require__(33440);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'quickstart',
	title: 'Quickstart Guide & Service Bootstrap',
	sidebar_position: 2
};
const contentTitle = 'Quickstart Guide & Service Bootstrap';

const assets = {

};



const toc = [{
  "value": "1. Installation",
  "id": "1-installation",
  "level": 2
}, {
  "value": "2. Step 1: Define Configuration Schema",
  "id": "2-step-1-define-configuration-schema",
  "level": 2
}, {
  "value": "3. Step 2: Implement Singleflight Service Layer",
  "id": "3-step-2-implement-singleflight-service-layer",
  "level": 2
}, {
  "value": "4. Step 3: Create Controller with Guards",
  "id": "4-step-3-create-controller-with-guards",
  "level": 2
}, {
  "value": "5. Step 4: Bootstrap Ferrox Application Kernel",
  "id": "5-step-4-bootstrap-ferrox-application-kernel",
  "level": 2
}, {
  "value": "6. Verification",
  "id": "6-verification",
  "level": 2
}, {
  "value": "7. Next Steps",
  "id": "7-next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "quickstart-guide--service-bootstrap",
        children: "Quickstart Guide & Service Bootstrap"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This step-by-step guide demonstrates how to install ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " and bootstrap a resilient microservice with authentication guards, dynamic configuration validation, singleflight request deduplication, and OpenTelemetry tracing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-installation",
      children: "1. Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Install ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@ferrox/node"
      }), " using your preferred package manager:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @ferrox/node\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Ensure peer dependencies are installed:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install fastify pino zod typeorm postgresql\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-step-1-define-configuration-schema",
      children: "2. Step 1: Define Configuration Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create a validated configuration schema (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/config.ts"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { z } from 'zod';\nimport { ConfigEngine } from '@ferrox/node';\n\nexport const ServiceConfigSchema = z.object({\n  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),\n  PORT: z.coerce.number().default(4000),\n  SERVICE_NAME: z.string().default('order-microservice'),\n  JWT_SECRET: z.string().min(16),\n});\n\nexport type ServiceConfig = z.infer<typeof ServiceConfigSchema>;\n\nexport const config = ConfigEngine.load({ schema: ServiceConfigSchema });\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-step-2-implement-singleflight-service-layer",
      children: "3. Step 2: Implement Singleflight Service Layer"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/order.service.ts"
      }), " featuring Singleflight request deduplication:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { SingleflightGroup } from '@ferrox/node';\n\nexport interface Order {\n  id: string;\n  amount: number;\n  status: string;\n}\n\nexport class OrderService {\n  private sfGroup = new SingleflightGroup();\n\n  async getOrderById(orderId: string): Promise<Order> {\n    // Deduplicates simultaneous requests for the same order ID\n    return await this.sfGroup.do(`order_${orderId}`, async () => {\n      console.log(`Reading order ${orderId} from primary database...`);\n\n      // Simulated DB read\n      return {\n        id: orderId,\n        amount: 299.99,\n        status: 'PAID',\n      };\n    });\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-step-3-create-controller-with-guards",
      children: "4. Step 3: Create Controller with Guards"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/order.controller.ts"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Controller, Get, Param, UseGuards, Roles } from '@ferrox/node';\nimport { AuthGuard, RolesGuard } from '@ferrox/node/guards';\nimport { OrderService } from './order.service';\n\n@Controller('/api/v1/orders')\n@UseGuards(AuthGuard, RolesGuard)\nexport class OrderController {\n  constructor(private readonly orderService: OrderService) {}\n\n  @Get('/:id')\n  @Roles('USER', 'ADMIN')\n  async getOrder(@Param('id') id: string) {\n    const order = await this.orderService.getOrderById(id);\n    return { success: true, data: order };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-step-4-bootstrap-ferrox-application-kernel",
      children: "5. Step 4: Bootstrap Ferrox Application Kernel"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Bootstrap your microservice in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/main.ts"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { FerroxKernel } from '@ferrox/node';\nimport { config } from './config';\nimport { OrderController } from './order.controller';\nimport { OrderService } from './order.service';\n\nasync function bootstrap() {\n  const orderService = new OrderService();\n  const orderController = new OrderController(orderService);\n\n  const kernel = new FerroxKernel({\n    serviceName: config.SERVICE_NAME,\n    port: config.PORT,\n    controllers: [orderController],\n    tracing: {\n      enabled: true,\n      samplingRatio: 1.0,\n    },\n    cors: {\n      origin: '*',\n    },\n  });\n\n  await kernel.listen();\n  console.log(`Ferrox Service running on http://localhost:${config.PORT}`);\n}\n\nbootstrap();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-verification",
      children: "6. Verification"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Run your service entry script:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npx ts-node src/main.ts\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Send a test request with authorization header:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X GET http://localhost:4000/api/v1/orders/ord_999 \\\n  -H \"Authorization: Bearer <valid_jwt_token>\"\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"success\": true,\n  \"data\": {\n    \"id\": \"ord_999\",\n    \"amount\": 299.99,\n    \"status\": \"PAID\"\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "7-next-steps",
      children: "7. Next Steps"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Explore ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox-node/docs/components/resilience",
          children: "Resilience Patterns"
        }), " to set up Circuit Breakers."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Read about ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/ferrox-node/docs/components/tracing",
          children: "Distributed Tracing"
        }), " for OpenTelemetry integration."]
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
33440(module) {
module.exports = JSON.parse('{"id":"ferrox-node/docs/quickstart","title":"Quickstart Guide & Service Bootstrap","description":"This step-by-step guide demonstrates how to install @ferrox/node and bootstrap a resilient microservice with authentication guards, dynamic configuration validation, singleflight request deduplication, and OpenTelemetry tracing.","source":"@site/docs/ferrox-node/docs/quickstart.md","sourceDirName":"ferrox-node/docs","slug":"/ferrox-node/docs/quickstart","permalink":"/docs/ferrox-node/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/ferrox-node/docs/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"quickstart","title":"Quickstart Guide & Service Bootstrap","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction & Ferrox-Node Framework Architecture","permalink":"/docs/ferrox-node/docs/intro"},"next":{"title":"Authentication (PASETO v4 & TOTP 2FA)","permalink":"/docs/ferrox-node/docs/components/auth"}}')

},

};
;