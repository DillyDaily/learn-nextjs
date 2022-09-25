webpackHotUpdate_N_E("pages/category/[products]",{

/***/ "./pages/category/[products]/index.js":
/*!********************************************!*\
  !*** ./pages/category/[products]/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./pages/dummy-data.js\");\n/* harmony import */ var _components_products_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/products/ProductList */ \"./components/products/ProductList.js\");\n/* harmony import */ var _components_products_ProductsSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/products/ProductsSearch */ \"./components/products/ProductsSearch.js\");\n\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/pages/category/[products]/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Products = function Products() {\n  _s();\n\n  var allProducts = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__[\"getAllProducts\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  function findProductsHandler(category, color) {\n    var fullPath = \"\".concat(category, \"/products/product/\").concat(color);\n    router.push(fullPath);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_products_ProductsSearch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onSearch: findProductsHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_products_ProductList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      products: allProducts\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Products, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3Byb2R1Y3RzXS9pbmRleC5qcz8yNGNhIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiYWxsUHJvZHVjdHMiLCJnZXRBbGxQcm9kdWN0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbmRQcm9kdWN0c0hhbmRsZXIiLCJjYXRlZ29yeSIsImNvbG9yIiwiZnVsbFBhdGgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFdBQVcsR0FBR0Msa0VBQWMsRUFBbEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLG1CQUFULENBQTZCQyxRQUE3QixFQUF1Q0MsS0FBdkMsRUFBOEM7QUFDMUMsUUFBTUMsUUFBUSxhQUFNRixRQUFOLCtCQUFtQ0MsS0FBbkMsQ0FBZDtBQUVBSixVQUFNLENBQUNNLElBQVAsQ0FBWUQsUUFBWjtBQUNIOztBQUVELHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsMkVBQUQ7QUFBZ0IsY0FBUSxFQUFFSDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyx3RUFBRDtBQUFhLGNBQVEsRUFBRUo7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FoQkQ7O0dBQU1ELFE7VUFFYUkscUQ7OztLQUZiSixRO0FBa0JTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhdGVnb3J5L1twcm9kdWN0c10vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMgfSBmcm9tICcuLi8uLi9kdW1teS1kYXRhJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBQcm9kdWN0c1NlYXJjaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RzU2VhcmNoJztcblxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsUHJvZHVjdHMgPSBnZXRBbGxQcm9kdWN0cygpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgZnVuY3Rpb24gZmluZFByb2R1Y3RzSGFuZGxlcihjYXRlZ29yeSwgY29sb3IpIHtcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBgJHtjYXRlZ29yeX0vcHJvZHVjdHMvcHJvZHVjdC8ke2NvbG9yfWBcblxuICAgICAgICByb3V0ZXIucHVzaChmdWxsUGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxQcm9kdWN0c1NlYXJjaCBvblNlYXJjaD17ZmluZFByb2R1Y3RzSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXthbGxQcm9kdWN0c30gLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/category/[products]/index.js\n");

/***/ })

})