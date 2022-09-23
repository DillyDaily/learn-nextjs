webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductItem.js":
/*!********************************************!*\
  !*** ./components/products/ProductItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Button */ \"./components/ui/Button.js\");\n/* harmony import */ var _icons_DateIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/DateIcon */ \"./components/icons/DateIcon.js\");\n/* harmony import */ var _icons_AddressIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/AddressIcon */ \"./components/icons/AddressIcon.js\");\n/* harmony import */ var _icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/ArrowRightIcon */ \"./components/icons/ArrowRightIcon.js\");\n/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductItem.module.css */ \"./components/products/ProductItem.module.css\");\n/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/products/ProductItem.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar ProductItem = function ProductItem(props) {\n  var name = props.name,\n      description = props.description,\n      image = props.image,\n      price = props.price,\n      date = props.date,\n      location = props.location,\n      id = props.id,\n      category = props.category;\n  var readableDate = new Date(date).toLocaleDateString('en-US', {\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric'\n  });\n  var formattedAddress = location.replace(', ', '\\n');\n  var productLink = \"category/products/\".concat(id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.product,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: '/' + image,\n      alt: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.summary,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_DateIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: readableDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.address,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_AddressIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n            children: formattedAddress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          link: productLink,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \" Quickshop \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.icon,\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 53\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 12\n  }, _this);\n};\n\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0SXRlbS5qcz84ZTdjIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwicHJvcHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInByaWNlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJjYXRlZ29yeSIsInJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWRBZGRyZXNzIiwicmVwbGFjZSIsInByb2R1Y3RMaW5rIiwiY2xhc3NlcyIsInByb2R1Y3QiLCJjb250ZW50Iiwic3VtbWFyeSIsImFkZHJlc3MiLCJhY3Rpb25zIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxJQURtQixHQUMrQ0QsS0FEL0MsQ0FDbkJDLElBRG1CO0FBQUEsTUFDYkMsV0FEYSxHQUMrQ0YsS0FEL0MsQ0FDYkUsV0FEYTtBQUFBLE1BQ0FDLEtBREEsR0FDK0NILEtBRC9DLENBQ0FHLEtBREE7QUFBQSxNQUNPQyxLQURQLEdBQytDSixLQUQvQyxDQUNPSSxLQURQO0FBQUEsTUFDY0MsSUFEZCxHQUMrQ0wsS0FEL0MsQ0FDY0ssSUFEZDtBQUFBLE1BQ29CQyxRQURwQixHQUMrQ04sS0FEL0MsQ0FDb0JNLFFBRHBCO0FBQUEsTUFDOEJDLEVBRDlCLEdBQytDUCxLQUQvQyxDQUM4Qk8sRUFEOUI7QUFBQSxNQUNrQ0MsUUFEbEMsR0FDK0NSLEtBRC9DLENBQ2tDUSxRQURsQztBQUczQixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsSUFBSixDQUFTTCxJQUFULEVBQWVNLGtCQUFmLENBQWtDLE9BQWxDLEVBQTJDO0FBQzVEQyxPQUFHLEVBQUUsU0FEdUQ7QUFFNURDLFNBQUssRUFBRSxNQUZxRDtBQUc1REMsUUFBSSxFQUFFO0FBSHNELEdBQTNDLENBQXJCO0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUdULFFBQVEsQ0FBQ1UsT0FBVCxDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUF6QjtBQUNBLE1BQU1DLFdBQVcsK0JBQXdCVixFQUF4QixDQUFqQjtBQUVBLHNCQUFPO0FBQUksYUFBUyxFQUFFVyw4REFBTyxDQUFDQyxPQUF2QjtBQUFBLDRCQUNIO0FBQUssU0FBRyxFQUFFLE1BQU1oQixLQUFoQjtBQUF1QixTQUFHLEVBQUVGO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxlQUVIO0FBQUssZUFBUyxFQUFFaUIsOERBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVGLDhEQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS3BCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQUtHO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsaUNBQ0k7QUFBQSxzQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQU1JO0FBQUssbUJBQVMsRUFBRWdCLDhEQUFPLENBQUNiLElBQXhCO0FBQUEsa0NBQ0kscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQU9JO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFVSTtBQUFLLG1CQUFTLEVBQUVTLDhEQUFPLENBQUNJLE9BQXhCO0FBQUEsa0NBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQVVQO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFnQkk7QUFBSyxpQkFBUyxFQUFFRyw4REFBTyxDQUFDSyxPQUF4QjtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQVEsY0FBSSxFQUFFTixXQUFkO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLHFCQUFTLEVBQUVDLDhEQUFPLENBQUNNLElBQXpCO0FBQUEseUNBQWdDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBMEJILENBdENEOztLQUFNekIsVztBQXdDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91aS9CdXR0b24nO1xuaW1wb3J0IERhdGVJY29uIGZyb20gJy4uL2ljb25zL0RhdGVJY29uJztcbmltcG9ydCBBZGRyZXNzSWNvbiBmcm9tICcuLi9pY29ucy9BZGRyZXNzSWNvbic7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tICcuLi9pY29ucy9BcnJvd1JpZ2h0SWNvbic7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1Byb2R1Y3RJdGVtLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBQcm9kdWN0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGltYWdlLCBwcmljZSwgZGF0ZSwgbG9jYXRpb24sIGlkLCBjYXRlZ29yeSB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCByZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuICAgIGNvbnN0IHByb2R1Y3RMaW5rID0gYGNhdGVnb3J5L3Byb2R1Y3RzLyR7aWR9YFxuXG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdH0+XG4gICAgICAgIDxpbWcgc3JjPXsnLycgKyBpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoND57cHJpY2V9PC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAgICA8RGF0ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWU+e3JlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICAgIDxBZGRyZXNzSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0dGVkQWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz17cHJvZHVjdExpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gUXVpY2tzaG9wIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PiA8QXJyb3dSaWdodCAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xpPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/ProductItem.js\n");

/***/ })

})