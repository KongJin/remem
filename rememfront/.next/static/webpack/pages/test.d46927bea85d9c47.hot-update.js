"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), books = ref[0], setBooks = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), title = ref1[0], setTitle = ref1[1];\n    var getBook = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:4000/book\");\n                    case 2:\n                        data = _ctx.sent.data;\n                        setBooks(data);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getBook() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getBook();\n    }, []);\n    var postBook = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_jg_remember_rememfront_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log({\n                            title: title\n                        });\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:4000/book\", title);\n                    case 3:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function postBook() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            books.map(function(el, idx) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: el.title\n                }, idx, false, {\n                    fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: title,\n                onChange: function(e) {\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                onClick: postBook,\n                children: \"button\"\n            }, void 0, false, {\n                fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUM0QztBQUNsQjtBQUNxQjs7QUFFL0MsSUFBTUksSUFBSSxHQUFhLFdBQU07OztJQUMzQixJQUEwQkgsR0FBaUIsR0FBakJBLCtDQUFRLENBQU0sRUFBRSxDQUFDLEVBQXBDSSxLQUFLLEdBQWNKLEdBQWlCLEdBQS9CLEVBQUVLLFFBQVEsR0FBSUwsR0FBaUIsR0FBckI7SUFDdEIsSUFBMEJBLElBQWlCLEdBQWpCQSwrQ0FBUSxDQUFNLEVBQUUsQ0FBQyxFQUFwQ00sS0FBSyxHQUFjTixJQUFpQixHQUEvQixFQUFFTyxRQUFRLEdBQUlQLElBQWlCLEdBQXJCO0lBRXRCLElBQU1RLE9BQU87bUJBQUcsK09BQVk7Z0JBQ2xCQyxJQUFJOzs7OzsrQkFBV1IsZ0RBQVMsQ0FBQyw0QkFBNEIsQ0FBQzs7d0JBQXhELElBQU0sYUFBSlEsSUFBSSxDQUFrRDt3QkFFOURKLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7Ozs7OztTQUNoQjt3QkFKS0QsT0FBTzs7O09BSVo7SUFFRFQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLE9BQU8sRUFBRSxDQUFDO0tBQ1gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1HLFFBQVE7bUJBQUcsK09BQVk7Z0JBRXJCRixJQUFJOzs7O3dCQURWRyxPQUFPLENBQUNDLEdBQUcsQ0FBQzs0QkFBRVAsS0FBSyxFQUFMQSxLQUFLO3lCQUFFLENBQUMsQ0FBQzs7K0JBQ0pMLGlEQUFVLENBQUMsNEJBQTRCLEVBQUVLLEtBQUssQ0FBQzs7d0JBQTVERyxJQUFJLFlBQXdEO3dCQUNsRUcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDbkI7d0JBSktFLFFBQVE7OztPQUliO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7O1lBQ0RYLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLEVBQU8sRUFBRUMsR0FBUSxFQUFLO2dCQUNoQyxxQkFDRSw4REFBQ0MsSUFBRTtvQkFBQ0MsU0FBUyxFQUFFbEIsc0VBQVk7OEJBQ3hCZSxFQUFFLENBQUNYLEtBQUs7bUJBRHVCWSxHQUFHOzs7OzBCQUVoQyxDQUNMO2FBQ0gsQ0FBQzswQkFDRiw4REFBQ0csT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLEtBQUssRUFBRWpCLEtBQUs7Z0JBQ1prQixRQUFRLEVBQUUsU0FBQ0MsQ0FBTSxFQUFLO29CQUNwQmxCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUMsQ0FBQztpQkFDMUI7Ozs7O3FCQUNEOzBCQUNGLDhEQUFDSSxRQUFNO2dCQUFDUCxTQUFTLEVBQUVsQix1RUFBYTtnQkFBRTBCLE9BQU8sRUFBRWpCLFFBQVE7MEJBQUUsUUFFckQ7Ozs7O3FCQUFTOzs7Ozs7YUFDTCxDQUNOO0NBQ0g7R0F6Q0tSLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTJDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QudHN4PzdhMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPGFueT4oXCJcIik7XG5cbiAgY29uc3QgZ2V0Qm9vayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ib29rXCIpO1xuXG4gICAgc2V0Qm9va3MoZGF0YSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRCb29rKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBwb3N0Qm9vayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IHRpdGxlIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Jvb2tcIiwgdGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtib29rcy5tYXAoKGVsOiBhbnksIGlkeDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBrZXk9e2lkeH0+XG4gICAgICAgICAgICB7ZWwudGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4ge1xuICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17cG9zdEJvb2t9PlxuICAgICAgICBidXR0b25cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwic3R5bGVzIiwiSG9tZSIsImJvb2tzIiwic2V0Qm9va3MiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ2V0Qm9vayIsImRhdGEiLCJnZXQiLCJwb3N0Qm9vayIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZGl2IiwibWFwIiwiZWwiLCJpZHgiLCJoMSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.tsx\n"));

/***/ })

});