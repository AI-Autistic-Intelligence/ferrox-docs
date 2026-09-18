"use strict";
exports.ids = ["5575"];
exports.modules = {
7021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  k: () => (getDocsVersionSearchTag)
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/** The search tag to append as each doc's metadata. */ function getDocsVersionSearchTag(pluginId, versionName) {
    return `docs-${pluginId}-${versionName}`;
}
/**
 * Gets the relevant docs tags to search.
 * This is the logic that powers the contextual search feature.
 *
 * If user is browsing Android 1.4 docs, he'll get presented with:
 * - Android '1.4' docs
 * - iOS 'preferred | latest' docs
 *
 * The result is generic and not coupled to Algolia/DocSearch on purpose.
 */ function useDocsContextualSearchTags() {
    const allDocsData = useAllDocsData();
    const activePluginAndVersion = useActivePluginAndVersion();
    const docsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId();
    // This can't use more specialized hooks because we are mapping over all
    // plugin instances.
    function getDocPluginTags(pluginId) {
        const activeVersion = activePluginAndVersion?.activePlugin.pluginId === pluginId ? activePluginAndVersion.activeVersion : undefined;
        const preferredVersion = docsPreferredVersionByPluginId[pluginId];
        const latestVersion = allDocsData[pluginId].versions.find((v)=>v.isLast);
        const version = activeVersion ?? preferredVersion ?? latestVersion;
        return getDocsVersionSearchTag(pluginId, version.name);
    }
    return [
        ...Object.keys(allDocsData).map(getDocPluginTags)
    ];
}


},
60524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocVersionRoot)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(34308);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(7021);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(70921);
/* import */ var _docusaurus_renderRoutes__rspack_import_6 = __webpack_require__(22831);
/* import */ var _theme_SearchMetadata__rspack_import_2 = __webpack_require__(54175);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionRootMetadata(props) {
    const { version } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_2/* ["default"] */.A, {
                version: version.version,
                tag: (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .getDocsVersionSearchTag */.k)(version.pluginId, version.version)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_4/* .PageMetadata */.be, {
                children: version.noIndex && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocVersionRootContent(props) {
    const { version, route } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_4/* .HtmlClassNameProvider */.e3, {
        className: version.className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_5/* .DocsVersionProvider */.n, {
            version: version,
            children: (0,_docusaurus_renderRoutes__rspack_import_6/* .renderRoutes */.v)(route.routes)
        })
    });
}
function DocVersionRoot(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionRootMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionRootContent, {
                ...props
            })
        ]
    });
}


},

};
;