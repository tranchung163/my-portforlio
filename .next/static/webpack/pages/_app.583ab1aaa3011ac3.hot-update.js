"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href, title, className = \"\" } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block bg-dark\\n            absolute left-0 -bottom-0.5\\n            group-hover:w-full transition-[width] ease duration-300\\n            \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                            fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trankhanh/Desktop/my-portforlio/src/components/NavBar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQ2Q7QUFDQTtBQUNvRTtBQUU3RixNQUFNUyxhQUFhO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFlBQVUsRUFBRSxFQUFFOztJQUM3QyxNQUFNQyxTQUFTWixzREFBU0E7SUFDeEJhLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDSSw4REFBQ2Isa0RBQUlBO1FBQUNVLE1BQU1BO1FBQU1FLFdBQVksR0FBYSxPQUFWQSxXQUFVOztZQUN0Q0Q7MEJBQ0QsOERBQUNLO2dCQUFLSixXQUFXLDJKQUcyQixPQUExQ0MsT0FBT0ksTUFBTSxLQUFLUCxPQUFPLFdBQVc7MEJBQ3JDOzs7Ozs7Ozs7Ozs7QUFHYjtHQWJNRDs7UUFDYVIsa0RBQVNBOzs7S0FEdEJRO0FBY04sTUFBTVMsU0FBUztJQUNiLHFCQUNFLDhEQUFDQztRQUFPUCxXQUFVOzswQkFDZCw4REFBQ1E7O2tDQUNHLDhEQUFDWDt3QkFBV0MsTUFBSzt3QkFBSUMsT0FBUTt3QkFBT0MsV0FBVTs7Ozs7O2tDQUM5Qyw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVNDLE9BQU07d0JBQVFDLFdBQVU7Ozs7OztrQ0FDbEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFZQyxPQUFNO3dCQUFXQyxXQUFVOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBV0MsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUc1RCw4REFBQ1E7O2tDQUNHLDhEQUFDcEIsa0RBQUlBO3dCQUFDVSxNQUFLO3dCQUFJVyxRQUFRO2tDQUN2Qiw0RUFBQ2pCLCtDQUFXQTs7Ozs7Ozs7OztrQ0FFWiw4REFBQ0osa0RBQUlBO3dCQUFDVSxNQUFLO3dCQUFJVyxRQUFRO2tDQUN2Qiw0RUFBQ2YsOENBQVVBOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDTixrREFBSUE7d0JBQUNVLE1BQUs7d0JBQUlXLFFBQVE7a0NBQ3ZCLDRFQUFDZCxnREFBWUE7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNQLGtEQUFJQTt3QkFBQ1UsTUFBSzt3QkFBSVcsUUFBUTtrQ0FDdkIsNEVBQUNiLGlEQUFhQTs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1Isa0RBQUlBO3dCQUFDVSxNQUFLO3dCQUFJVyxRQUFRO2tDQUN2Qiw0RUFBQ2hCLGdEQUFZQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakIsOERBQUNpQjtnQkFBSVYsV0FBVTswQkFDZiw0RUFBQ1QsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7TUFqQ01lO0FBbUNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xuaW1wb3J0IHsgVHdpdHRlckljb24sIERyaWJiYmxlSWNvbiwgR2l0aHViSWNvbiwgTGlua2VkSW5JY29uLCBQaW50ZXJlc3RJY29uIH0gIGZyb20gJy4vSWNvbnMnXG5cbmNvbnN0IEN1c3RvbUxpbmsgPSAoeyBocmVmLCB0aXRsZSwgY2xhc3NOYW1lPVwiXCIgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnNvbGUubG9nKHJvdXRlcilcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9IHtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLVsxcHhdIGlubGluZS1ibG9jayBiZy1kYXJrXG4gICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjVcbiAgICAgICAgICAgIGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2l0aW9uLVt3aWR0aF0gZWFzZSBkdXJhdGlvbi0zMDBcbiAgICAgICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnIDogJ3ctMCd9YH1cbiAgICAgICAgICAgID4mbmJzcDs8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J3ctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPScvJyB0aXRsZSA9IFwiSG9tZVwiIGNsYXNzTmFtZT1cIm1yLTRcIi8+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPScvYWJvdXQnIHRpdGxlPVwiQWJvdXRcIiBjbGFzc05hbWU9J214LTQnLz5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy9wcm9qZWN0cycgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT0nbXgtNCcvPiBcbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy9hcnRpY2xlcycgdGl0bGU9XCJBcnRpY2xlc1wiIGNsYXNzTmFtZT0nbWwtNCcvPlxuICAgICAgICA8L25hdj5cbiAgICBcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHRhcmdldD17XCJfYmxhbmtcIn0+XG4gICAgICAgICAgICA8VHdpdHRlckljb24gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHRhcmdldD17XCJfYmxhbmtcIn0+XG4gICAgICAgICAgICA8R2l0aHViSWNvbiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdGFyZ2V0PXtcIl9ibGFua1wifT5cbiAgICAgICAgICAgIDxMaW5rZWRJbkljb24gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHRhcmdldD17XCJfYmxhbmtcIn0+XG4gICAgICAgICAgICA8UGludGVyZXN0SWNvbiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdGFyZ2V0PXtcIl9ibGFua1wifT5cbiAgICAgICAgICAgIDxEcmliYmJsZUljb24gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtWzUwJV0gdG9wLTIgdHJhbnNsYXRlLXgtWy01MCVdJz5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJMb2dvIiwiVHdpdHRlckljb24iLCJEcmliYmJsZUljb24iLCJHaXRodWJJY29uIiwiTGlua2VkSW5JY29uIiwiUGludGVyZXN0SWNvbiIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsImhlYWRlciIsIm5hdiIsInRhcmdldCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});