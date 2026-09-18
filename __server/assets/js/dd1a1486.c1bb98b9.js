"use strict";
exports.ids = ["2881"];
exports.modules = {
55840(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_quickstart_md_dd1_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_nestjs_yalc_docs_quickstart_md_dd1_json__rspack_import_0 = __webpack_require__(42495);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'quickstart',
	title: 'Quickstart & First Application Setup',
	sidebar_position: 2
};
const contentTitle = 'Quickstart & First Application Setup';

const assets = {

};



const toc = [{
  "value": "1. Prerequisites",
  "id": "1-prerequisites",
  "level": 2
}, {
  "value": "2. Installation",
  "id": "2-installation",
  "level": 2
}, {
  "value": "3. Step 1: Define the Database Entity",
  "id": "3-step-1-define-the-database-entity",
  "level": 2
}, {
  "value": "4. Step 2: Configure the NestJS Module",
  "id": "4-step-2-configure-the-nestjs-module",
  "level": 2
}, {
  "value": "5. Step 3: Implement Service with AG-Grid Support",
  "id": "5-step-3-implement-service-with-ag-grid-support",
  "level": 2
}, {
  "value": "6. Step 4: Create Controller with Unified Response Envelopes",
  "id": "6-step-4-create-controller-with-unified-response-envelopes",
  "level": 2
}, {
  "value": "7. Step 5: Bootstrap Application in <code>main.ts</code>",
  "id": "7-step-5-bootstrap-application-in-maints",
  "level": 2
}, {
  "value": "8. Verification",
  "id": "8-verification",
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
        id: "quickstart--first-application-setup",
        children: "Quickstart & First Application Setup"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This step-by-step guide walks you through setting up a complete enterprise NestJS microservice from scratch using the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "NestJS-YALC"
      }), " monorepo toolkit."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "1-prerequisites",
      children: "1. Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Before getting started, ensure your environment meets the following requirements:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Node.js"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "v18.x"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "v20.x"
        }), " (LTS recommended)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Package Manager"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "npm"
        }), " (v9+) or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "pnpm"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database"
        }), ": PostgreSQL (v14+) or MySQL (v8+)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Message Broker"
        }), ": Apache Kafka (optional, for event-driven modules)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "2-installation",
      children: "2. Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Install the core NestJS-YALC packages into your NestJS project:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "# Core Application & Logging Framework\nnpm install @nestjs-yalc/app @nestjs-yalc/logger @nestjs-yalc/errors @nestjs-yalc/utils\n\n# Database & CRUD Generation\nnpm install @nestjs-yalc/database @nestjs-yalc/crud-gen @nestjs-yalc/ag-grid\n\n# Security & Observability\nnpm install @nestjs-yalc/sentinel @nestjs-yalc/observability\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "3-step-1-define-the-database-entity",
      children: "3. Step 1: Define the Database Entity"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create a TypeORM domain entity representing your database table (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/user/user.entity.ts"
      }), "):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';\n\n@Entity('users')\nexport class UserEntity {\n  @PrimaryGeneratedColumn('uuid')\n  id: string;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  firstName: string;\n\n  @Column()\n  lastName: string;\n\n  @Column({ default: 'active' })\n  status: string;\n\n  @CreateDateColumn()\n  createdAt: Date;\n\n  @UpdateDateColumn()\n  updatedAt: Date;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "4-step-2-configure-the-nestjs-module",
      children: "4. Step 2: Configure the NestJS Module"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Wire up ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcAppModule"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DatabaseModule"
      }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "LoggerModule"
      }), " inside ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/app.module.ts"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Module } from '@nestjs/common';\nimport { YalcAppModule } from '@nestjs-yalc/app';\nimport { LoggerModule } from '@nestjs-yalc/logger';\nimport { DatabaseModule } from '@nestjs-yalc/database';\nimport { UserEntity } from './user/user.entity';\nimport { UserController } from './user/user.controller';\nimport { UserService } from './user/user.service';\n\n@Module({\n  imports: [\n    YalcAppModule.forRoot({\n      isGlobal: true,\n    }),\n    LoggerModule.forRoot({\n      serviceName: 'user-service',\n      level: 'debug',\n    }),\n    DatabaseModule.forRoot({\n      type: 'postgres',\n      host: process.env.DB_HOST || 'localhost',\n      port: Number(process.env.DB_PORT) || 5432,\n      username: process.env.DB_USER || 'postgres',\n      password: process.env.DB_PASSWORD || 'postgres',\n      database: process.env.DB_NAME || 'user_db',\n      entities: [UserEntity],\n      synchronize: true, // Set false in production\n    }),\n  ],\n  controllers: [UserController],\n  providers: [UserService],\n})\nexport class AppModule {}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "5-step-3-implement-service-with-ag-grid-support",
      children: "5. Step 3: Implement Service with AG-Grid Support"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/user/user.service.ts"
      }), " using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AgGridQueryTransformer"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Injectable } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { AgGridQueryTransformer, IServerSideGetRowsRequest } from '@nestjs-yalc/ag-grid';\nimport { UserEntity } from './user.entity';\n\n@Injectable()\nexport class UserService {\n  constructor(\n    @InjectRepository(UserEntity)\n    private readonly userRepository: Repository<UserEntity>,\n  ) {}\n\n  async getPaginatedUsers(gridRequest: IServerSideGetRowsRequest) {\n    const queryBuilder = this.userRepository.createQueryBuilder('user');\n\n    const transformer = new AgGridQueryTransformer<UserEntity>(queryBuilder, gridRequest, {\n      id: 'user.id',\n      email: 'user.email',\n      firstName: 'user.firstName',\n      lastName: 'user.lastName',\n      status: 'user.status',\n      createdAt: 'user.createdAt',\n    });\n\n    const [rows, totalCount] = await transformer.execute();\n\n    return {\n      rows,\n      lastRow: totalCount,\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "6-step-4-create-controller-with-unified-response-envelopes",
      children: "6. Step 4: Create Controller with Unified Response Envelopes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/user/user.controller.ts"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { Controller, Post, Body } from '@nestjs/common';\nimport { ResponseEnvelope } from '@nestjs-yalc/api-strategy';\nimport { IServerSideGetRowsRequest } from '@nestjs-yalc/ag-grid';\nimport { UserService } from './user.service';\n\n@Controller('users')\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @Post('grid')\n  async getUsersGrid(@Body() gridRequest: IServerSideGetRowsRequest) {\n    const result = await this.userService.getPaginatedUsers(gridRequest);\n    return ResponseEnvelope.success(result.rows, { total: result.lastRow });\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "7-step-5-bootstrap-application-in-maints",
      children: ["7. Step 5: Bootstrap Application in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main.ts"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Bootstrap the application using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "YalcApplicationFactory"
      }), " in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "src/main.ts"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { YalcApplicationFactory } from '@nestjs-yalc/app';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await YalcApplicationFactory.create(AppModule, {\n    appName: 'user-service',\n    port: 3000,\n    swagger: {\n      enabled: true,\n      path: '/docs',\n      title: 'User Microservice API',\n      version: '1.0.0',\n    },\n  });\n\n  await app.listen();\n  console.log('User Microservice running at http://localhost:3000');\n}\n\nbootstrap();\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "8-verification",
      children: "8. Verification"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Run your application:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run start:dev\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Send a test AG-Grid request to check server-side filtering and unified response wrapping:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST http://localhost:3000/users/grid \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"startRow\": 0,\n    \"endRow\": 10,\n    \"sortModel\": [{\"colId\": \"createdAt\", \"sort\": \"desc\"}],\n    \"filterModel\": {\"status\": {\"filterType\": \"text\", \"type\": \"equals\", \"filter\": \"active\"}}\n  }'\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"statusCode\": 200,\n  \"success\": true,\n  \"data\": [ ... ],\n  \"meta\": {\n    \"total\": 1\n  }\n}\n"
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
42495(module) {
module.exports = JSON.parse('{"id":"nestjs-yalc/docs/quickstart","title":"Quickstart & First Application Setup","description":"This step-by-step guide walks you through setting up a complete enterprise NestJS microservice from scratch using the NestJS-YALC monorepo toolkit.","source":"@site/docs/nestjs-yalc/docs/quickstart.md","sourceDirName":"nestjs-yalc/docs","slug":"/nestjs-yalc/docs/quickstart","permalink":"/docs/nestjs-yalc/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/AI-Autistic-Intelligence/ferrox-docs/tree/main/docs/nestjs-yalc/docs/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"quickstart","title":"Quickstart & First Application Setup","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction & Ecosystem Architecture","permalink":"/docs/nestjs-yalc/docs/intro"},"next":{"title":"AG-Grid Server-Side Integration & Query Transformers","permalink":"/docs/nestjs-yalc/docs/modules/ag-grid"}}')

},

};
;