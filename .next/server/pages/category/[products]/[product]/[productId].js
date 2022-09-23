module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/category/[products]/[product]/[productId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/icons/AddressIcon.js":
/*!*****************************************!*\
  !*** ./components/icons/AddressIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/icons/AddressIcon.js\";\n\nfunction AddressIcon() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddressIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0FkZHJlc3NJY29uLmpzP2E5ZDYiXSwibmFtZXMiOlsiQWRkcmVzc0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLFdBQVQsR0FBdUI7QUFDbkIsc0JBQ0k7QUFBSyxTQUFLLEVBQUcsNEJBQWI7QUFDSSxRQUFJLEVBQUcsTUFEWDtBQUVJLFdBQU8sRUFBRyxXQUZkO0FBR0ksVUFBTSxFQUFHLGNBSGI7QUFBQSw0QkFJQTtBQUFNLG1CQUFhLEVBQUcsT0FBdEI7QUFDSSxvQkFBYyxFQUFHLE9BRHJCO0FBRUksaUJBQVcsRUFBSSxDQUZuQjtBQUdJLE9BQUMsRUFBRztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKQSxlQVFBO0FBQU0sbUJBQWEsRUFBRyxPQUF0QjtBQUNJLG9CQUFjLEVBQUcsT0FEckI7QUFFSSxpQkFBVyxFQUFJLENBRm5CO0FBR0ksT0FBQyxFQUFHO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0FBRWNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pY29ucy9BZGRyZXNzSWNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEFkZHJlc3NJY29uKCkge1xuICAgIHJldHVybiAoIFxuICAgICAgICA8c3ZnIHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgZmlsbCA9ICdub25lJ1xuICAgICAgICAgICAgdmlld0JveCA9ICcwIDAgMjQgMjQnXG4gICAgICAgICAgICBzdHJva2UgPSAnY3VycmVudENvbG9yJz5cbiAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcCA9ICdyb3VuZCdcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luID0gJ3JvdW5kJ1xuICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSB7Mn1cbiAgICAgICAgICAgIGQgPSAnTTE3LjY1NyAxNi42NTdMMTMuNDE0IDIwLjlhMS45OTggMS45OTggMCAwMS0yLjgyNyAwbC00LjI0NC00LjI0M2E4IDggMCAxMTExLjMxNCAweicgLz5cbiAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcCA9ICdyb3VuZCdcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luID0gJ3JvdW5kJ1xuICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSB7Mn1cbiAgICAgICAgICAgIGQgPSAnTTE1IDExYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHonLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzc0ljb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/icons/AddressIcon.js\n");

/***/ }),

/***/ "./components/icons/DateIcon.js":
/*!**************************************!*\
  !*** ./components/icons/DateIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/icons/DateIcon.js\";\n\nfunction DateIcon() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0RhdGVJY29uLmpzPzk5ZjgiXSwibmFtZXMiOlsiRGF0ZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsc0JBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsVUFBTSxFQUFDLGNBSlQ7QUFBQSwyQkFNRTtBQUNFLG1CQUFhLEVBQUMsT0FEaEI7QUFFRSxvQkFBYyxFQUFDLE9BRmpCO0FBR0UsaUJBQVcsRUFBRSxDQUhmO0FBSUUsT0FBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztBQUVjQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaWNvbnMvRGF0ZUljb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBEYXRlSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICBmaWxsPSdub25lJ1xuICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9J004IDdWM204IDRWM20tOSA4aDEwTTUgMjFoMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUljb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/icons/DateIcon.js\n");

/***/ }),

/***/ "./components/product-detail/LogisticsItem.js":
/*!****************************************************!*\
  !*** ./components/product-detail/LogisticsItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LogisticsItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogisticsItem.module.css */ \"./components/product-detail/LogisticsItem.module.css\");\n/* harmony import */ var _LogisticsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LogisticsItem_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/product-detail/LogisticsItem.js\";\n\n\nfunction LogisticsItem(props) {\n  const {\n    icon: Icon\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _LogisticsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _LogisticsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _LogisticsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogisticsItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL0xvZ2lzdGljc0l0ZW0uanM/ZWI0MyJdLCJuYW1lcyI6WyJMb2dpc3RpY3NJdGVtIiwicHJvcHMiLCJpY29uIiwiSWNvbiIsImNsYXNzZXMiLCJpdGVtIiwiY29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsUUFBTTtBQUFFQyxRQUFJLEVBQUVDO0FBQVIsTUFBaUJGLEtBQXZCO0FBRUEsc0JBQ0U7QUFBSSxhQUFTLEVBQUVHLGdFQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVELGdFQUFPLENBQUNGLElBQXpCO0FBQUEsNkJBQ0UscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVFLGdFQUFPLENBQUNFLE9BQXpCO0FBQUEsZ0JBQW1DTCxLQUFLLENBQUNNO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVjUCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvTG9naXN0aWNzSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTG9naXN0aWNzSXRlbS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTG9naXN0aWNzSXRlbShwcm9wcykge1xuICBjb25zdCB7IGljb246IEljb24gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgPEljb24gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2lzdGljc0l0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/product-detail/LogisticsItem.js\n");

/***/ }),

/***/ "./components/product-detail/LogisticsItem.module.css":
/*!************************************************************!*\
  !*** ./components/product-detail/LogisticsItem.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"LogisticsItem_item__1S3Da\",\n\t\"icon\": \"LogisticsItem_icon__2GrQ7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL0xvZ2lzdGljc0l0ZW0ubW9kdWxlLmNzcz9iMDE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL0xvZ2lzdGljc0l0ZW0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJMb2dpc3RpY3NJdGVtX2l0ZW1fXzFTM0RhXCIsXG5cdFwiaWNvblwiOiBcIkxvZ2lzdGljc0l0ZW1faWNvbl9fMkdyUTdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product-detail/LogisticsItem.module.css\n");

/***/ }),

/***/ "./components/product-detail/ProductContent.js":
/*!*****************************************************!*\
  !*** ./components/product-detail/ProductContent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductContent_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductContent.module.css */ \"./components/product-detail/ProductContent.module.css\");\n/* harmony import */ var _ProductContent_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductContent_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/product-detail/ProductContent.js\";\n\n\nfunction EventContent(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _ProductContent_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RDb250ZW50LmpzP2Q0YjAiXSwibmFtZXMiOlsiRXZlbnRDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiY29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0Isc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGlFQUFPLENBQUNDLE9BQTVCO0FBQUEsY0FDR0YsS0FBSyxDQUFDRztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjSiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvUHJvZHVjdENvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL1Byb2R1Y3RDb250ZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/product-detail/ProductContent.js\n");

/***/ }),

/***/ "./components/product-detail/ProductContent.module.css":
/*!*************************************************************!*\
  !*** ./components/product-detail/ProductContent.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"ProductContent_content__1fJE6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RDb250ZW50Lm1vZHVsZS5jc3M/NTI4NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvUHJvZHVjdENvbnRlbnQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJQcm9kdWN0Q29udGVudF9jb250ZW50X18xZkpFNlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/product-detail/ProductContent.module.css\n");

/***/ }),

/***/ "./components/product-detail/ProductLogistics.js":
/*!*******************************************************!*\
  !*** ./components/product-detail/ProductLogistics.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_AddressIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/AddressIcon */ \"./components/icons/AddressIcon.js\");\n/* harmony import */ var _icons_DateIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/DateIcon */ \"./components/icons/DateIcon.js\");\n/* harmony import */ var _LogisticsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogisticsItem */ \"./components/product-detail/LogisticsItem.js\");\n/* harmony import */ var _ProductLogistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductLogistics.module.css */ \"./components/product-detail/ProductLogistics.module.css\");\n/* harmony import */ var _ProductLogistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductLogistics_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/product-detail/ProductLogistics.js\";\n\n\n\n\n\nfunction ProductLogistics(props) {\n  const {\n    date,\n    location,\n    image,\n    imageAlt\n  } = props;\n  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric'\n  });\n  const addressText = location.replace(', ', '\\n');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _ProductLogistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logistics,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _ProductLogistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `/${image}`,\n        alt: imageAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _ProductLogistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LogisticsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_DateIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: humanReadableDate\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LogisticsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_AddressIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: addressText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductLogistics);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RMb2dpc3RpY3MuanM/NzZhYyJdLCJuYW1lcyI6WyJQcm9kdWN0TG9naXN0aWNzIiwicHJvcHMiLCJkYXRlIiwibG9jYXRpb24iLCJpbWFnZSIsImltYWdlQWx0IiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiYWRkcmVzc1RleHQiLCJyZXBsYWNlIiwiY2xhc3NlcyIsImxvZ2lzdGljcyIsImxpc3QiLCJEYXRlSWNvbiIsIkFkZHJlc3NJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQy9CLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxZQUFSO0FBQWtCQyxTQUFsQjtBQUF5QkM7QUFBekIsTUFBc0NKLEtBQTVDO0FBRUEsUUFBTUssaUJBQWlCLEdBQUcsSUFBSUMsSUFBSixDQUFTTCxJQUFULEVBQWVNLGtCQUFmLENBQWtDLE9BQWxDLEVBQTJDO0FBQ25FQyxPQUFHLEVBQUUsU0FEOEQ7QUFFbkVDLFNBQUssRUFBRSxNQUY0RDtBQUduRUMsUUFBSSxFQUFFO0FBSDZELEdBQTNDLENBQTFCO0FBS0EsUUFBTUMsV0FBVyxHQUFHVCxRQUFRLENBQUNVLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBcEI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBRUMsbUVBQU8sQ0FBQ0MsU0FBNUI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsbUVBQU8sQ0FBQ1YsS0FBeEI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRyxJQUFHQSxLQUFNLEVBQXBCO0FBQXVCLFdBQUcsRUFBRUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUksZUFBUyxFQUFFUyxtRUFBTyxDQUFDRSxJQUF2QjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQWUsWUFBSSxFQUFFQyx1REFBckI7QUFBQSwrQkFDRTtBQUFBLG9CQUFPWDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyxzREFBRDtBQUFlLFlBQUksRUFBRVksMERBQXJCO0FBQUEsK0JBQ0U7QUFBQSxvQkFBVU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0FBRWNaLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9Qcm9kdWN0TG9naXN0aWNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZHJlc3NJY29uIGZyb20gJy4uL2ljb25zL0FkZHJlc3NJY29uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9EYXRlSWNvbic7XG5pbXBvcnQgTG9naXN0aWNzSXRlbSBmcm9tICcuL0xvZ2lzdGljc0l0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Qcm9kdWN0TG9naXN0aWNzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBQcm9kdWN0TG9naXN0aWNzKHByb3BzKSB7XG4gIGNvbnN0IHsgZGF0ZSwgbG9jYXRpb24sIGltYWdlLCBpbWFnZUFsdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KTtcbiAgY29uc3QgYWRkcmVzc1RleHQgPSBsb2NhdGlvbi5yZXBsYWNlKCcsICcsICdcXG4nKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICA8aW1nIHNyYz17YC8ke2ltYWdlfWB9IGFsdD17aW1hZ2VBbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0RhdGVJY29ufT5cbiAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0FkZHJlc3NJY29ufT5cbiAgICAgICAgICA8YWRkcmVzcz57YWRkcmVzc1RleHR9PC9hZGRyZXNzPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExvZ2lzdGljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product-detail/ProductLogistics.js\n");

/***/ }),

/***/ "./components/product-detail/ProductLogistics.module.css":
/*!***************************************************************!*\
  !*** ./components/product-detail/ProductLogistics.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"logistics\": \"ProductLogistics_logistics__27FW2\",\n\t\"image\": \"ProductLogistics_image__1rlZH\",\n\t\"list\": \"ProductLogistics_list__1Vfix\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RMb2dpc3RpY3MubW9kdWxlLmNzcz80NGM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvUHJvZHVjdExvZ2lzdGljcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naXN0aWNzXCI6IFwiUHJvZHVjdExvZ2lzdGljc19sb2dpc3RpY3NfXzI3RlcyXCIsXG5cdFwiaW1hZ2VcIjogXCJQcm9kdWN0TG9naXN0aWNzX2ltYWdlX18xcmxaSFwiLFxuXHRcImxpc3RcIjogXCJQcm9kdWN0TG9naXN0aWNzX2xpc3RfXzFWZml4XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/product-detail/ProductLogistics.module.css\n");

/***/ }),

/***/ "./components/product-detail/ProductSummary.js":
/*!*****************************************************!*\
  !*** ./components/product-detail/ProductSummary.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductSummary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSummary.module.css */ \"./components/product-detail/ProductSummary.module.css\");\n/* harmony import */ var _ProductSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductSummary_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/components/product-detail/ProductSummary.js\";\n\n\nfunction ProductSummary(props) {\n  const {\n    title\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _ProductSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSummary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RTdW1tYXJ5LmpzPzJjNTUiXSwibmFtZXMiOlsiUHJvZHVjdFN1bW1hcnkiLCJwcm9wcyIsInRpdGxlIiwiY2xhc3NlcyIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUM3QixRQUFNO0FBQUVDO0FBQUYsTUFBWUQsS0FBbEI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBRUUsaUVBQU8sQ0FBQ0MsT0FBNUI7QUFBQSwyQkFDRTtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0YsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RTdW1tYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Qcm9kdWN0U3VtbWFyeS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gUHJvZHVjdFN1bW1hcnkocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3VtbWFyeTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/product-detail/ProductSummary.js\n");

/***/ }),

/***/ "./components/product-detail/ProductSummary.module.css":
/*!*************************************************************!*\
  !*** ./components/product-detail/ProductSummary.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"summary\": \"ProductSummary_summary__22HXt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RTdW1tYXJ5Lm1vZHVsZS5jc3M/ZjdlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvUHJvZHVjdFN1bW1hcnkubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJQcm9kdWN0U3VtbWFyeV9zdW1tYXJ5X18yMkhYdFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/product-detail/ProductSummary.module.css\n");

/***/ }),

/***/ "./pages/category/[products]/[product]/[productId].js":
/*!************************************************************!*\
  !*** ./pages/category/[products]/[product]/[productId].js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dummy-data */ \"./pages/dummy-data.js\");\n/* harmony import */ var _components_product_detail_ProductSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/product-detail/ProductSummary */ \"./components/product-detail/ProductSummary.js\");\n/* harmony import */ var _components_product_detail_ProductLogistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/product-detail/ProductLogistics */ \"./components/product-detail/ProductLogistics.js\");\n/* harmony import */ var _components_product_detail_ProductContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/product-detail/ProductContent */ \"./components/product-detail/ProductContent.js\");\n\nvar _jsxFileName = \"/Users/alifinney/Desktop/www/learn-next/pages/category/[products]/[product]/[productId].js\";\n\n\n\n\n\n\n\nconst ProductsSlug = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const productId = router.query.productId;\n  const product = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__[\"getProductById\"])(productId);\n  console.log(\"rout pathname\", router.pathname);\n  console.log(\"rout query\", router.query); //concrete value encoded in URL\n  // if ID of DB object: could send request to backend Server\n  // to fetch piece of data w/ id of router.query.slug\n  // can have nested dynamic paths\n  // can define catch all routes\n\n  if (!product) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No event found!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 16\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_product_detail_ProductSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_product_detail_ProductLogistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      date: product.date,\n      location: product.location,\n      image: product.image,\n      imageAlt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_product_detail_ProductContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsSlug);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXRlZ29yeS9bcHJvZHVjdHNdL1twcm9kdWN0XS9bcHJvZHVjdElkXS5qcz9lMTI5Il0sIm5hbWVzIjpbIlByb2R1Y3RzU2x1ZyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3RJZCIsInF1ZXJ5IiwicHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwibmFtZSIsImRhdGUiLCJsb2NhdGlvbiIsImltYWdlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFELFNBQS9CO0FBQ0EsUUFBTUUsT0FBTyxHQUFHQyxrRUFBYyxDQUFDSCxTQUFELENBQTlCO0FBRUFJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJQLE1BQU0sQ0FBQ1EsUUFBcEM7QUFDQUYsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlAsTUFBTSxDQUFDRyxLQUFqQyxFQVB5QixDQU9lO0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVFLE1BQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNJLHFFQUFDLGlGQUFEO0FBQWdCLFdBQUssRUFBRUEsT0FBTyxDQUFDSztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsbUZBQUQ7QUFDSSxVQUFJLEVBQUVMLE9BQU8sQ0FBQ00sSUFEbEI7QUFFSSxjQUFRLEVBQUVOLE9BQU8sQ0FBQ08sUUFGdEI7QUFHSSxXQUFLLEVBQUVQLE9BQU8sQ0FBQ1EsS0FIbkI7QUFJSSxjQUFRLEVBQUVSLE9BQU8sQ0FBQ0s7QUFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQU9JLHFFQUFDLGlGQUFEO0FBQUEsNkJBQ0k7QUFBQSxrQkFBSUwsT0FBTyxDQUFDUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0EvQkQ7O0FBaUNlZCwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhdGVnb3J5L1twcm9kdWN0c10vW3Byb2R1Y3RdL1twcm9kdWN0SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5SWQgfSBmcm9tICcuLi8uLi8uLi9kdW1teS1kYXRhJztcbmltcG9ydCBQcm9kdWN0U3VtbWFyeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL1Byb2R1Y3RTdW1tYXJ5JztcbmltcG9ydCBQcm9qZWN0TG9naXN0aWNzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvUHJvZHVjdExvZ2lzdGljcyc7XG5pbXBvcnQgUHJvamVjdENvbnRlbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9Qcm9kdWN0Q29udGVudCc7XG5cbmNvbnN0IFByb2R1Y3RzU2x1ZyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcHJvZHVjdElkID0gcm91dGVyLnF1ZXJ5LnByb2R1Y3RJZDtcbiAgY29uc3QgcHJvZHVjdCA9IGdldFByb2R1Y3RCeUlkKHByb2R1Y3RJZCk7XG5cbiAgY29uc29sZS5sb2coXCJyb3V0IHBhdGhuYW1lXCIsIHJvdXRlci5wYXRobmFtZSlcbiAgY29uc29sZS5sb2coXCJyb3V0IHF1ZXJ5XCIsIHJvdXRlci5xdWVyeSkgLy9jb25jcmV0ZSB2YWx1ZSBlbmNvZGVkIGluIFVSTFxuXG4gIC8vIGlmIElEIG9mIERCIG9iamVjdDogY291bGQgc2VuZCByZXF1ZXN0IHRvIGJhY2tlbmQgU2VydmVyXG4gIC8vIHRvIGZldGNoIHBpZWNlIG9mIGRhdGEgdy8gaWQgb2Ygcm91dGVyLnF1ZXJ5LnNsdWdcbiAgLy8gY2FuIGhhdmUgbmVzdGVkIGR5bmFtaWMgcGF0aHNcbiAgLy8gY2FuIGRlZmluZSBjYXRjaCBhbGwgcm91dGVzXG4gIFxuICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICByZXR1cm4gPHA+Tm8gZXZlbnQgZm91bmQhPC9wPlxuICAgIH1cblxuICAgIHJldHVybiAoIFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8UHJvZHVjdFN1bW1hcnkgdGl0bGU9e3Byb2R1Y3QubmFtZX0gLz5cbiAgICAgICAgICAgIDxQcm9qZWN0TG9naXN0aWNzIFxuICAgICAgICAgICAgICAgIGRhdGU9e3Byb2R1Y3QuZGF0ZX0gXG4gICAgICAgICAgICAgICAgbG9jYXRpb249e3Byb2R1Y3QubG9jYXRpb259IFxuICAgICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlfSBcbiAgICAgICAgICAgICAgICBpbWFnZUFsdD17cHJvZHVjdC5uYW1lfSAvPiBcbiAgICAgICAgICAgIDxQcm9qZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L1Byb2plY3RDb250ZW50PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1NsdWc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/category/[products]/[product]/[productId].js\n");

/***/ }),

/***/ "./pages/dummy-data.js":
/*!*****************************!*\
  !*** ./pages/dummy-data.js ***!
  \*****************************/
/*! exports provided: getFeaturedProducts, getAllProducts, getFilteredProducts, getProductById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedProducts\", function() { return getFeaturedProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllProducts\", function() { return getAllProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredProducts\", function() { return getFilteredProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductById\", function() { return getProductById; });\nconst DUMMY_PRODUCTS = [{\n  id: 'e1',\n  name: 'Programming for everyone',\n  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',\n  location: 'Somestreet 25, 12345 San Somewhereo',\n  date: '2021-05-12',\n  image: 'images/quiche.jpg',\n  isFeatured: false\n}, {\n  id: 'e2',\n  name: 'Networking for introverts',\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: 'New Wall Street 5, 98765 New Work',\n  date: '2021-05-30',\n  image: 'images/az-pillow.jpg',\n  isFeatured: true\n}, {\n  id: 'e3',\n  name: 'Networking for extroverts',\n  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',\n  location: 'My Street 12, 10115 Broke City',\n  date: '2022-04-10',\n  image: 'images/coasters.jpg',\n  isFeatured: true\n}];\nfunction getFeaturedProducts() {\n  return DUMMY_PRODUCTS.filter(product => product.isFeatured);\n}\nfunction getAllProducts() {\n  return DUMMY_PRODUCTS;\n}\nfunction getFilteredProducts(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  let filteredProducts = DUMMY_PRODUCTS.filter(product => {\n    const productDate = new Date(product.date);\n    return productDate.getFullYear() === year && productDate.getMonth() === month - 1;\n  });\n  return filteredProducts;\n}\nfunction getProductById(id) {\n  return DUMMY_PRODUCTS.find(product => product.id === id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kdW1teS1kYXRhLmpzPzJlMjMiXSwibmFtZXMiOlsiRFVNTVlfUFJPRFVDVFMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiZGF0ZSIsImltYWdlIiwiaXNGZWF0dXJlZCIsImdldEZlYXR1cmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRGaWx0ZXJlZFByb2R1Y3RzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImZpbHRlcmVkUHJvZHVjdHMiLCJwcm9kdWN0RGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0UHJvZHVjdEJ5SWQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFDaEJDLElBQUUsRUFBRSxJQURZO0FBRWhCQyxNQUFJLEVBQUUsMEJBRlU7QUFHaEJDLGFBQVcsRUFBRSw0SkFIRztBQUloQkMsVUFBUSxFQUFFLHFDQUpNO0FBS2hCQyxNQUFJLEVBQUUsWUFMVTtBQU1oQkMsT0FBSyxFQUFFLG1CQU5TO0FBT2hCQyxZQUFVLEVBQUU7QUFQSSxDQUFELEVBU25CO0FBQ0lOLElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRSwyQkFGVjtBQUdJQyxhQUFXLEVBQUUsMElBSGpCO0FBSUlDLFVBQVEsRUFBRSxtQ0FKZDtBQUtJQyxNQUFJLEVBQUUsWUFMVjtBQU1JQyxPQUFLLEVBQUUsc0JBTlg7QUFPSUMsWUFBVSxFQUFFO0FBUGhCLENBVG1CLEVBa0JuQjtBQUNJTixJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUUsMkJBRlY7QUFHSUMsYUFBVyxFQUFFLDZJQUhqQjtBQUlJQyxVQUFRLEVBQUUsZ0NBSmQ7QUFLSUMsTUFBSSxFQUFFLFlBTFY7QUFNSUMsT0FBSyxFQUFFLHFCQU5YO0FBT0lDLFlBQVUsRUFBRTtBQVBoQixDQWxCbUIsQ0FBdkI7QUE2Qk8sU0FBU0MsbUJBQVQsR0FBK0I7QUFDbEMsU0FBT1IsY0FBYyxDQUFDUyxNQUFmLENBQXVCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0gsVUFBM0MsQ0FBUDtBQUNIO0FBRU0sU0FBU0ksY0FBVCxHQUEwQjtBQUM3QixTQUFPWCxjQUFQO0FBQ0g7QUFFTSxTQUFTWSxtQkFBVCxDQUE2QkMsVUFBN0IsRUFBeUM7QUFDNUMsUUFBTTtBQUNGQyxRQURFO0FBRUZDO0FBRkUsTUFHRkYsVUFISjtBQUtBLE1BQUlHLGdCQUFnQixHQUFHaEIsY0FBYyxDQUFDUyxNQUFmLENBQXVCQyxPQUFELElBQWE7QUFDdEQsVUFBTU8sV0FBVyxHQUFHLElBQUlDLElBQUosQ0FBU1IsT0FBTyxDQUFDTCxJQUFqQixDQUFwQjtBQUNBLFdBQU9ZLFdBQVcsQ0FBQ0UsV0FBWixPQUE4QkwsSUFBOUIsSUFBc0NHLFdBQVcsQ0FBQ0csUUFBWixPQUEyQkwsS0FBSyxHQUFHLENBQWhGO0FBQ0gsR0FIc0IsQ0FBdkI7QUFLQSxTQUFPQyxnQkFBUDtBQUNIO0FBRU0sU0FBU0ssY0FBVCxDQUF3QnBCLEVBQXhCLEVBQTRCO0FBQy9CLFNBQU9ELGNBQWMsQ0FBQ3NCLElBQWYsQ0FBcUJaLE9BQUQsSUFBYUEsT0FBTyxDQUFDVCxFQUFSLEtBQWVBLEVBQWhELENBQVA7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2R1bW15LWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEVU1NWV9QUk9EVUNUUyA9IFt7XG4gICAgICAgIGlkOiAnZTEnLFxuICAgICAgICBuYW1lOiAnUHJvZ3JhbW1pbmcgZm9yIGV2ZXJ5b25lJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFdmVyeW9uZSBjYW4gbGVhcm4gdG8gY29kZSEgWWVzLCBldmVyeW9uZSEgSW4gdGhpcyBsaXZlIGV2ZW50LCB3ZSBhcmUgZ29pbmcgdG8gZ28gdGhyb3VnaCBhbGwgdGhlIGtleSBiYXNpY3MgYW5kIGdldCB5b3Ugc3RhcnRlZCB3aXRoIHByb2dyYW1taW5nIGFzIHdlbGwuJyxcbiAgICAgICAgbG9jYXRpb246ICdTb21lc3RyZWV0IDI1LCAxMjM0NSBTYW4gU29tZXdoZXJlbycsXG4gICAgICAgIGRhdGU6ICcyMDIxLTA1LTEyJyxcbiAgICAgICAgaW1hZ2U6ICdpbWFnZXMvcXVpY2hlLmpwZycsXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2UyJyxcbiAgICAgICAgbmFtZTogJ05ldHdvcmtpbmcgZm9yIGludHJvdmVydHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBrbm93OiBOZXR3b3JraW5nIGlzIG5vIGZ1biBpZiB5b3UgYXJlIGFuIGludHJvdmVydCBwZXJzb24uIFRoYXQncyB3aHkgd2UgY2FtZSB1cCB3aXRoIHRoaXMgZXZlbnQgLSBpdCdsbCBiZSBzbyBtdWNoIGVhc2llci4gUHJvbWlzZWQhXCIsXG4gICAgICAgIGxvY2F0aW9uOiAnTmV3IFdhbGwgU3RyZWV0IDUsIDk4NzY1IE5ldyBXb3JrJyxcbiAgICAgICAgZGF0ZTogJzIwMjEtMDUtMzAnLFxuICAgICAgICBpbWFnZTogJ2ltYWdlcy9hei1waWxsb3cuanBnJyxcbiAgICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdlMycsXG4gICAgICAgIG5hbWU6ICdOZXR3b3JraW5nIGZvciBleHRyb3ZlcnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgcHJvYmFibHkgbmVlZCBubyBoZWxwIHdpdGggbmV0d29ya2luZyBpbiBnZW5lcmFsLiBCdXQgZm9jdXNpbmcgeW91ciBlbmVyZ3kgY29ycmVjdGx5IC0gdGhhdCBpcyBzb21ldGhpbmcgd2hlcmUgbW9zdCBwZW9wbGUgY2FuIGltcHJvdmUuJyxcbiAgICAgICAgbG9jYXRpb246ICdNeSBTdHJlZXQgMTIsIDEwMTE1IEJyb2tlIENpdHknLFxuICAgICAgICBkYXRlOiAnMjAyMi0wNC0xMCcsXG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2NvYXN0ZXJzLmpwZycsXG4gICAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZFByb2R1Y3RzKCkge1xuICAgIHJldHVybiBEVU1NWV9QUk9EVUNUUy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaXNGZWF0dXJlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0cygpIHtcbiAgICByZXR1cm4gRFVNTVlfUFJPRFVDVFM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJlZFByb2R1Y3RzKGRhdGVGaWx0ZXIpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHllYXIsXG4gICAgICAgIG1vbnRoXG4gICAgfSA9IGRhdGVGaWx0ZXI7XG5cbiAgICBsZXQgZmlsdGVyZWRQcm9kdWN0cyA9IERVTU1ZX1BST0RVQ1RTLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0RGF0ZSA9IG5ldyBEYXRlKHByb2R1Y3QuZGF0ZSk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0RGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIHByb2R1Y3REYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZFByb2R1Y3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gRFVNTVlfUFJPRFVDVFMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dummy-data.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });