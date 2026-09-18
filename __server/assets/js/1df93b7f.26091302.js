exports.ids = ["9452"];
exports.modules = {
86830(module) {
// Exports
module.exports = {
	"heroBanner": `heroBanner_qdFl`,
	"logoContainer": `logoContainer_xdaK`,
	"heroLogo": `heroLogo_U6bI`,
	"heroTagline": `heroTagline_QIlK`,
	"buttons": `buttons_AeoN`,
	"installSnippet": `installSnippet_rIEs`,
	"featureCardCol": `featureCardCol_brjW`,
	"featureCard": `featureCard_Jbd_`,
	"codeSection": `codeSection_XWl9`,
	"codeBlock": `codeBlock_NVHr`
};


},
5146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_3 = __webpack_require__(10898);
/* import */ var _theme_Layout__rspack_import_4 = __webpack_require__(78328);
/* import */ var _theme_Heading__rspack_import_5 = __webpack_require__(72072);
/* import */ var _index_module_css__rspack_import_6 = __webpack_require__(86830);
/* import */ var _index_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_index_module_css__rspack_import_6);








function HomepageHeader() {
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__rspack_import_3/* ["default"] */.A)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("header", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)('hero hero--dark', (_index_module_css__rspack_import_6_default().heroBanner)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_index_module_css__rspack_import_6_default().logoContainer),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: "/img/logo.jpg",
                        alt: "Ferrox Logo",
                        className: (_index_module_css__rspack_import_6_default().heroLogo)
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                    as: "h1",
                    className: "hero__title",
                    children: "⚡ Ferrox Framework"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                    className: "hero__subtitle",
                    children: "A Progressive, Enterprise-Grade Server-Side Framework for Rust"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                    className: (_index_module_css__rspack_import_6_default().heroTagline),
                    children: "Bringing the Developer Experience of NestJS & Angular to the unmatched performance of Tokio & Axum."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: (_index_module_css__rspack_import_6_default().buttons),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            className: "button button--primary button--lg",
                            to: "/docs/ferrox/overview/introduction",
                            children: "\uD83D\uDE80 Getting Started"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            className: "button button--danger button--lg",
                            href: "https://www.paypal.com/donate/?hosted_button_id=9Q3UG829FHT6J",
                            children: "❤️ Sponsor Project"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            className: "button button--secondary button--lg",
                            href: "https://discord.gg/Bx3CzGec7d",
                            children: "\uD83D\uDCAC Discord"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            className: "button button--outline button--lg",
                            href: "https://www.reddit.com/r/Ferrox/",
                            children: "\uD83D\uDCF1 Reddit"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_index_module_css__rspack_import_6_default().installSnippet),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                        children: "cargo install cargo-ferrox"
                    })
                })
            ]
        })
    });
}
const FeatureList = [
    {
        title: '🛡️ Zero-Trust Security',
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "Built-in PASETO & JWT token engines, dual-token refresh, declarative role guards (",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                    children: "RequireRole"
                }),
                "), and HMAC webhook verification."
            ]
        })
    },
    {
        title: '⚡ Cache Stampede Protection',
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "Integrated ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                    children: "Singleflight"
                }),
                " pattern powered by Tokio broadcast channels to prevent dogpile effects on high-concurrency endpoints."
            ]
        })
    },
    {
        title: '🔄 Resilience & Fault Tolerance',
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Redis-backed rate limiters, circuit breakers (Closed/Open/HalfOpen state machine), and distributed synchronization out of the box."
        })
    },
    {
        title: '🧠 Enterprise Architectures',
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "Decoupled ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                    children: "CommandBus"
                }),
                " and ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                    children: "QueryBus"
                }),
                " CQRS dispatchers, Saga orchestrators for distributed transactions, and background jobs."
            ]
        })
    },
    {
        title: '🛠️ Code Factory & AutoZod',
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "Automated generic CRUD routing macros (",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                    children: "crud_router!"
                }),
                ") and strongly-typed ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                    children: "ValidatedJson<T>"
                }),
                " payload validation."
            ]
        })
    },
    {
        title: '🌐 Multi-Transport Engine',
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Unified application lifecycle manager supporting HTTP (Axum), gRPC, WebSockets, Server-Sent Events (SSE), and GraphQL schema generators."
        })
    }
];
function Feature({ title, description }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)('col col--4', (_index_module_css__rspack_import_6_default().featureCardCol)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: (0,clsx__rspack_import_7/* ["default"] */.A)('card', (_index_module_css__rspack_import_6_default().featureCard)),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "card__header",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                        as: "h3",
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "card__body",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: description
                    })
                })
            ]
        })
    });
}
function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_4/* ["default"] */.A, {
        title: "Ferrox - Enterprise Server-Side Framework for Rust",
        description: "A Progressive, Enterprise-Grade Server-Side Framework for Rust powered by Tokio & Axum. DX of NestJS, speed of Rust.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HomepageHeader, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("main", {
                className: "container margin-vert--xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        className: "margin-bottom--xl",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "text--center margin-bottom--lg",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                                        as: "h2",
                                        children: "Why Choose Ferrox?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Built from the ground up for massive scalability, zero-trust security, and instant developer productivity."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "row",
                                children: FeatureList.map((props, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Feature, {
                                        ...props
                                    }, idx))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                        className: (0,clsx__rspack_import_7/* ["default"] */.A)('margin-vert--xl', (_index_module_css__rspack_import_6_default().codeSection)),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "row row--align-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "col col--6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                                            as: "h2",
                                            children: "Quick Start in 20 Seconds"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Ferrox combines modularity, speed, and safety. Initialize your multi-transport server with minimal boilerplate."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                "Need support or have questions? Email us directly at",
                                                ' ',
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: "mailto:info@ferrox-rust.dev",
                                                    children: "info@ferrox-rust.dev"
                                                }),
                                                "."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "col col--6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
                                        className: (_index_module_css__rspack_import_6_default().codeBlock),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                            children: `use axum::{routing::get, Json, Router};
use ferrox_app::FerroxApp;
use ferrox_transports::http::HttpTransport;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let router = Router::new().route(
        "/api/v1/ping",
        get(|| async { Json(json!({ "status": "ok", "framework": "Ferrox" })) }),
    );

    let transport = HttpTransport::new(router, 3000);

    FerroxApp::new()
        .add_transport(transport)
        .start()
        .await?;

    Ok(())
}`
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                        className: "margin-vert--xl text--center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "card padding--xl",
                            style: {
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                                    as: "h2",
                                    children: "\uD83D\uDC96 Support Ferrox Open-Source Development"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                    style: {
                                        maxWidth: '750px',
                                        margin: '0 auto 1.5rem auto',
                                        fontSize: '1.1rem'
                                    },
                                    children: [
                                        "Developing a 45-crate ecosystem, running benchmark suites, hosting domain services (",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                            children: "ferrox-rust.dev"
                                        }),
                                        "), and maintaining multi-language docs requires ongoing servers and infrastructure. Your donations directly power rapid releases and continuous open-source development!"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "row row--align-center",
                                    style: {
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "col col--6 text--center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                href: "https://www.paypal.com/donate/?hosted_button_id=9Q3UG829FHT6J",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: "/img/paypal_qr.png",
                                                    alt: "Scan to donate via PayPal",
                                                    style: {
                                                        width: '180px',
                                                        borderRadius: '12px',
                                                        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                                                        marginBottom: '1rem'
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                        className: "button button--danger button--lg",
                                                        href: "https://www.paypal.com/donate/?hosted_button_id=9Q3UG829FHT6J",
                                                        children: "\uD83D\uDCB3 Donate via PayPal"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        style: {
                                                            margin: '0 0.5rem'
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                        className: "button button--outline button--secondary button--lg",
                                                        to: "/docs/ferrox/community/donations",
                                                        children: "\uD83D\uDCD6 Read Donation Info"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


},

};
;