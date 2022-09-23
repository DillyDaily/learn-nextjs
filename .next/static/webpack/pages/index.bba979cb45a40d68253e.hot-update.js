webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductItem.js":
/*!********************************************!*\
  !*** ./components/products/ProductItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Button */ \"./components/ui/Button.js\");\n/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem.module.css */ \"./components/products/ProductItem.module.css\");\n/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/products/ProductItem.js\",\n    _this = undefined;\n\n\n\n\n\nvar ProductItem = function ProductItem(props) {\n  var name = props.name,\n      description = props.description,\n      image = props.image,\n      price = props.price,\n      date = props.date,\n      location = props.location,\n      id = props.id,\n      category = props.category;\n  var readableDate = new Date(date).toLocaleDateString('en-US', {\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric'\n  });\n  var formattedAddress = location.replace(', ', '\\n');\n  var productLink = \"/products/\".concat(id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.product,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: '/' + image,\n      alt: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.summary,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: readableDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.address,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n            children: formattedAddress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          link: productLink,\n          children: \"Quick Shop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 12\n  }, _this);\n};\n\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0SXRlbS5qcz84ZTdjIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwicHJvcHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInByaWNlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJjYXRlZ29yeSIsInJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWRBZGRyZXNzIiwicmVwbGFjZSIsInByb2R1Y3RMaW5rIiwiY2xhc3NlcyIsInByb2R1Y3QiLCJjb250ZW50Iiwic3VtbWFyeSIsImFkZHJlc3MiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxJQURtQixHQUMrQ0QsS0FEL0MsQ0FDbkJDLElBRG1CO0FBQUEsTUFDYkMsV0FEYSxHQUMrQ0YsS0FEL0MsQ0FDYkUsV0FEYTtBQUFBLE1BQ0FDLEtBREEsR0FDK0NILEtBRC9DLENBQ0FHLEtBREE7QUFBQSxNQUNPQyxLQURQLEdBQytDSixLQUQvQyxDQUNPSSxLQURQO0FBQUEsTUFDY0MsSUFEZCxHQUMrQ0wsS0FEL0MsQ0FDY0ssSUFEZDtBQUFBLE1BQ29CQyxRQURwQixHQUMrQ04sS0FEL0MsQ0FDb0JNLFFBRHBCO0FBQUEsTUFDOEJDLEVBRDlCLEdBQytDUCxLQUQvQyxDQUM4Qk8sRUFEOUI7QUFBQSxNQUNrQ0MsUUFEbEMsR0FDK0NSLEtBRC9DLENBQ2tDUSxRQURsQztBQUczQixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsSUFBSixDQUFTTCxJQUFULEVBQWVNLGtCQUFmLENBQWtDLE9BQWxDLEVBQTJDO0FBQzVEQyxPQUFHLEVBQUUsU0FEdUQ7QUFFNURDLFNBQUssRUFBRSxNQUZxRDtBQUc1REMsUUFBSSxFQUFFO0FBSHNELEdBQTNDLENBQXJCO0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUdULFFBQVEsQ0FBQ1UsT0FBVCxDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUF6QjtBQUNBLE1BQU1DLFdBQVcsdUJBQWdCVixFQUFoQixDQUFqQjtBQUVBLHNCQUFPO0FBQUksYUFBUyxFQUFFVyw4REFBTyxDQUFDQyxPQUF2QjtBQUFBLDRCQUNIO0FBQUssU0FBRyxFQUFFLE1BQU1oQixLQUFoQjtBQUF1QixTQUFHLEVBQUVGO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxlQUVIO0FBQUssZUFBUyxFQUFFaUIsOERBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVGLDhEQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS3BCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQUtHO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsaUNBQ0k7QUFBQSxzQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQU1JO0FBQUssbUJBQVMsRUFBRWdCLDhEQUFPLENBQUNiLElBQXhCO0FBQUEsaUNBQ0k7QUFBQSxzQkFBT0k7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQVNJO0FBQUssbUJBQVMsRUFBRVMsOERBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxpQ0FDSTtBQUFBLHNCQUFVUDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBY0k7QUFBSyxpQkFBUyxFQUFFRyw4REFBTyxDQUFDSyxPQUF4QjtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQVEsY0FBSSxFQUFFTixXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBcUJILENBakNEOztLQUFNbEIsVztBQW1DU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvQnV0dG9uJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUHJvZHVjdEl0ZW0ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFByb2R1Y3RJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHByaWNlLCBkYXRlLCBsb2NhdGlvbiwgaWQsIGNhdGVnb3J5IH0gPSBwcm9wcztcblxuICAgIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRBZGRyZXNzID0gbG9jYXRpb24ucmVwbGFjZSgnLCAnLCAnXFxuJyk7XG4gICAgY29uc3QgcHJvZHVjdExpbmsgPSBgL3Byb2R1Y3RzLyR7aWR9YFxuXG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdH0+XG4gICAgICAgIDxpbWcgc3JjPXsnLycgKyBpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoND57cHJpY2V9PC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAgICA8dGltZT57cmVhZGFibGVEYXRlfTwvdGltZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbms9e3Byb2R1Y3RMaW5rfSA+UXVpY2sgU2hvcDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGk+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/ProductItem.js\n");

/***/ })

})