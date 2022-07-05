/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWVtYmVyLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Home = ()=>{\n    const { 0: books , 1: setBooks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getBook = async ()=>{\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:4000/book\");\n        setBooks(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getBook();\n    }, []);\n    const postBook = async ()=>{\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:4000/book\");\n        console.log(data);\n    };\n    console.log({\n        books\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            books.map((el)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: el.title\n                }, void 0, false, {\n                    fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 16\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: postBook,\n                children: \"button\"\n            }, void 0, false, {\n                fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jg/\\uBC14\\uD0D5\\uD654\\uBA74/remember/rememfront/pages/test.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUM0QztBQUNsQjtBQUNxQjtBQUUvQyxNQUFNSSxJQUFJLEdBQWEsSUFBTTtJQUMzQixNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFNLEVBQUUsQ0FBQztJQUMzQyxNQUFNTSxPQUFPLEdBQUcsVUFBWTtRQUMxQixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHLE1BQU1OLGdEQUFTLENBQUMsNEJBQTRCLENBQUM7UUFFOURJLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7S0FDaEI7SUFFRFIsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RPLE9BQU8sRUFBRSxDQUFDO0tBQ1gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1HLFFBQVEsR0FBRyxVQUFZO1FBQzNCLE1BQU1GLElBQUksR0FBRyxNQUFNTixpREFBVSxDQUFDLDRCQUE0QixDQUFDO1FBQzNEVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDLENBQUM7S0FDbkI7SUFDREksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFBRVIsS0FBSztLQUFFLENBQUMsQ0FBQztJQUN2QixxQkFDRSw4REFBQ1MsS0FBRzs7WUFDRFQsS0FBSyxDQUFDVSxHQUFHLENBQUMsQ0FBQ0MsRUFBTyxHQUFLO2dCQUN0QixxQkFBTyw4REFBQ0MsSUFBRTtvQkFBQ0MsU0FBUyxFQUFFZixzRUFBWTs4QkFBR2EsRUFBRSxDQUFDRyxLQUFLOzs7Ozs2QkFBTSxDQUFDO2FBQ3JELENBQUM7MEJBQ0YsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNOzs7Ozt5QkFBRzswQkFDckIsOERBQUNDLFFBQU07Z0JBQUNKLFNBQVMsRUFBRWYsdUVBQWE7Z0JBQUVvQixPQUFPLEVBQUViLFFBQVE7MEJBQUUsUUFFckQ7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0wsQ0FDTjtDQUNIO0FBRUQsaUVBQWVOLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWVtYmVyLy4vcGFnZXMvdGVzdC50c3g/N2ExMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IGdldEJvb2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYm9va1wiKTtcblxuICAgIHNldEJvb2tzKGRhdGEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Qm9vaygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcG9zdEJvb2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYm9va1wiKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfTtcbiAgY29uc29sZS5sb2coeyBib29rcyB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2Jvb2tzLm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZWwudGl0bGV9PC9oMT47XG4gICAgICB9KX1cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17cG9zdEJvb2t9PlxuICAgICAgICBidXR0b25cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwic3R5bGVzIiwiSG9tZSIsImJvb2tzIiwic2V0Qm9va3MiLCJnZXRCb29rIiwiZGF0YSIsImdldCIsInBvc3RCb29rIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJlbCIsImgxIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpbnB1dCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.tsx"));
module.exports = __webpack_exports__;

})();