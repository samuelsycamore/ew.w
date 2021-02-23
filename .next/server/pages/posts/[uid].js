module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/[uid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/posts/[uid].js":
/*!******************************!*\
  !*** ./pages/posts/[uid].js ***!
  \******************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../prismic-configuration */ \"./prismic-configuration.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/tangled/Programming/PROJECTS/~E_W_W/pages/posts/[uid].js\";\n\n\n\nfunction Post({\n  data\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].asText(data.title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].asText(data.post_body)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\nasync function getStaticProps({\n  params\n}) {\n  const {\n    uid\n  } = params;\n  const {\n    data\n  } = await _prismic_configuration__WEBPACK_IMPORTED_MODULE_1__[\"client\"].getByUID(\"post\", uid);\n  return {\n    props: {\n      data\n    }\n  };\n}\nasync function getStaticPaths() {\n  const {\n    results\n  } = await _prismic_configuration__WEBPACK_IMPORTED_MODULE_1__[\"client\"].query(prismic_javascript__WEBPACK_IMPORTED_MODULE_3___default.a.Predicates.at(\"document.type\", \"post\"));\n  const paths = results.map(post => ({\n    params: {\n      uid: post.uid\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bdWlkXS5qcz9kYjRkIl0sIm5hbWVzIjpbIlBvc3QiLCJkYXRhIiwiUmljaFRleHQiLCJhc1RleHQiLCJ0aXRsZSIsInBvc3RfYm9keSIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwidWlkIiwiY2xpZW50IiwiZ2V0QnlVSUQiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicmVzdWx0cyIsInF1ZXJ5IiwiUHJpc21pYyIsIlByZWRpY2F0ZXMiLCJhdCIsInBhdGhzIiwibWFwIiwicG9zdCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFDckMsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsa0JBQVNDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLElBQUksQ0FBQ0csS0FBckI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFPRix3REFBUSxDQUFDQyxNQUFULENBQWdCRixJQUFJLENBQUNJLFNBQXJCO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0MsUUFBTTtBQUFFQztBQUFGLE1BQVVELE1BQWhCO0FBQ0EsUUFBTTtBQUFFTjtBQUFGLE1BQVcsTUFBTVEsNkRBQU0sQ0FBQ0MsUUFBUCxDQUFnQixNQUFoQixFQUF3QkYsR0FBeEIsQ0FBdkI7QUFDQSxTQUFPO0FBQ0xHLFNBQUssRUFBRTtBQUFFVjtBQUFGO0FBREYsR0FBUDtBQUdEO0FBRU0sZUFBZVcsY0FBZixHQUFnQztBQUNyQyxRQUFNO0FBQUVDO0FBQUYsTUFBYyxNQUFNSiw2REFBTSxDQUFDSyxLQUFQLENBQ3hCQyx5REFBTyxDQUFDQyxVQUFSLENBQW1CQyxFQUFuQixDQUFzQixlQUF0QixFQUF1QyxNQUF2QyxDQUR3QixDQUExQjtBQUlBLFFBQU1DLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxHQUFSLENBQVlDLElBQUksS0FBSztBQUNqQ2IsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRVksSUFBSSxDQUFDWjtBQURKO0FBRHlCLEdBQUwsQ0FBaEIsQ0FBZDtBQUtBLFNBQU87QUFDTFUsU0FESztBQUVMRyxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bdWlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi8uLi9wcmlzbWljLWNvbmZpZ3VyYXRpb25cIlxyXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIlxyXG5pbXBvcnQgUHJpc21pYyBmcm9tIFwicHJpc21pYy1qYXZhc2NyaXB0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgPGhlYWRlcj57UmljaFRleHQuYXNUZXh0KGRhdGEudGl0bGUpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluPntSaWNoVGV4dC5hc1RleHQoZGF0YS5wb3N0X2JvZHkpfTwvbWFpbj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHsgdWlkIH0gPSBwYXJhbXNcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXRCeVVJRChcInBvc3RcIiwgdWlkKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoXHJcbiAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoXCJkb2N1bWVudC50eXBlXCIsIFwicG9zdFwiKVxyXG4gIClcclxuXHJcbiAgY29uc3QgcGF0aHMgPSByZXN1bHRzLm1hcChwb3N0ID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdWlkOiBwb3N0LnVpZCxcclxuICAgIH0sXHJcbiAgfSkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[uid].js\n");

/***/ }),

/***/ "./prismic-configuration.js":
/*!**********************************!*\
  !*** ./prismic-configuration.js ***!
  \**********************************/
/*! exports provided: apiEndpoint, accessToken, linkResolver, hrefResolver, client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiEndpoint\", function() { return apiEndpoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accessToken\", function() { return accessToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkResolver\", function() { return linkResolver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hrefResolver\", function() { return hrefResolver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);\n // -- Prismic API endpoint\n// Determines which repository to query and fetch data from\n// Configure your site's access point here\n\nconst apiEndpoint = 'https://ediblewildworld.cdn.prismic.io/api/v2'; // -- Access Token if the repository is not public\n// Generate a token in your dashboard and configure it here if your repository is private\n\nconst accessToken = 'MC5ZRFFpc0JJQUFDVUFUakhY.fEEJICPvv70_Nu-_ve-_vTkt77-977-9NA0u77-977-977-9FCjvv73vv73vv70477-977-9YHvvv70Q'; // -- Link resolution rules\n// Manages the url links to internal Prismic documents\n\nconst linkResolver = doc => {\n  if (doc.type === 'post') {\n    return `/posts/${doc.uid}`;\n  }\n\n  return '/';\n}; // Additional helper function for Next/Link components\n\nconst hrefResolver = doc => {\n  if (doc.type === 'post') {\n    return '/posts/[uid]';\n  }\n\n  return '/';\n}; // Client method to query Prismic\n\nconst client = prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a.client(apiEndpoint, {\n  accessToken\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24uanM/YThiMiJdLCJuYW1lcyI6WyJhcGlFbmRwb2ludCIsImFjY2Vzc1Rva2VuIiwibGlua1Jlc29sdmVyIiwiZG9jIiwidHlwZSIsInVpZCIsImhyZWZSZXNvbHZlciIsImNsaWVudCIsIlByaXNtaWMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUEsV0FBVyxHQUFHLCtDQUFwQixDLENBRVA7QUFDQTs7QUFDTyxNQUFNQyxXQUFXLEdBQUcsMkdBQXBCLEMsQ0FFUDtBQUNBOztBQUNPLE1BQU1DLFlBQVksR0FBSUMsR0FBRCxJQUFTO0FBQ25DLE1BQUlBLEdBQUcsQ0FBQ0MsSUFBSixLQUFhLE1BQWpCLEVBQXlCO0FBQ3ZCLFdBQVEsVUFBU0QsR0FBRyxDQUFDRSxHQUFJLEVBQXpCO0FBQ0Q7O0FBQ0QsU0FBTyxHQUFQO0FBQ0QsQ0FMTSxDLENBT1A7O0FBQ08sTUFBTUMsWUFBWSxHQUFJSCxHQUFELElBQVM7QUFDbkMsTUFBSUEsR0FBRyxDQUFDQyxJQUFKLEtBQWEsTUFBakIsRUFBeUI7QUFDdkIsV0FBTyxjQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxHQUFQO0FBQ0QsQ0FMTSxDLENBT1A7O0FBQ08sTUFBTUcsTUFBTSxHQUFHQyx5REFBTyxDQUFDRCxNQUFSLENBQWVQLFdBQWYsRUFBNEI7QUFBRUM7QUFBRixDQUE1QixDQUFmIiwiZmlsZSI6Ii4vcHJpc21pYy1jb25maWd1cmF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSBcInByaXNtaWMtamF2YXNjcmlwdFwiXHJcblxyXG4vLyAtLSBQcmlzbWljIEFQSSBlbmRwb2ludFxyXG4vLyBEZXRlcm1pbmVzIHdoaWNoIHJlcG9zaXRvcnkgdG8gcXVlcnkgYW5kIGZldGNoIGRhdGEgZnJvbVxyXG4vLyBDb25maWd1cmUgeW91ciBzaXRlJ3MgYWNjZXNzIHBvaW50IGhlcmVcclxuZXhwb3J0IGNvbnN0IGFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vZWRpYmxld2lsZHdvcmxkLmNkbi5wcmlzbWljLmlvL2FwaS92MidcclxuXHJcbi8vIC0tIEFjY2VzcyBUb2tlbiBpZiB0aGUgcmVwb3NpdG9yeSBpcyBub3QgcHVibGljXHJcbi8vIEdlbmVyYXRlIGEgdG9rZW4gaW4geW91ciBkYXNoYm9hcmQgYW5kIGNvbmZpZ3VyZSBpdCBoZXJlIGlmIHlvdXIgcmVwb3NpdG9yeSBpcyBwcml2YXRlXHJcbmV4cG9ydCBjb25zdCBhY2Nlc3NUb2tlbiA9ICdNQzVaUkZGcGMwSkpRVUZEVlVGVWFraFkuZkVFSklDUHZ2NzBfTnUtX3ZlLV92VGt0NzctOTc3LTlOQTB1NzctOTc3LTk3Ny05RkNqdnY3M3Z2NzN2djcwNDc3LTk3Ny05WUh2dnY3MFEnXHJcblxyXG4vLyAtLSBMaW5rIHJlc29sdXRpb24gcnVsZXNcclxuLy8gTWFuYWdlcyB0aGUgdXJsIGxpbmtzIHRvIGludGVybmFsIFByaXNtaWMgZG9jdW1lbnRzXHJcbmV4cG9ydCBjb25zdCBsaW5rUmVzb2x2ZXIgPSAoZG9jKSA9PiB7XHJcbiAgaWYgKGRvYy50eXBlID09PSAncG9zdCcpIHtcclxuICAgIHJldHVybiBgL3Bvc3RzLyR7ZG9jLnVpZH1gXHJcbiAgfVxyXG4gIHJldHVybiAnLydcclxufVxyXG5cclxuLy8gQWRkaXRpb25hbCBoZWxwZXIgZnVuY3Rpb24gZm9yIE5leHQvTGluayBjb21wb25lbnRzXHJcbmV4cG9ydCBjb25zdCBocmVmUmVzb2x2ZXIgPSAoZG9jKSA9PiB7XHJcbiAgaWYgKGRvYy50eXBlID09PSAncG9zdCcpIHtcclxuICAgIHJldHVybiAnL3Bvc3RzL1t1aWRdJ1xyXG4gIH1cclxuICByZXR1cm4gJy8nXHJcbn1cclxuXHJcbi8vIENsaWVudCBtZXRob2QgdG8gcXVlcnkgUHJpc21pY1xyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gUHJpc21pYy5jbGllbnQoYXBpRW5kcG9pbnQsIHsgYWNjZXNzVG9rZW4gfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./prismic-configuration.js\n");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWphdmFzY3JpcHRcIj83OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtamF2YXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-javascript\n");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-reactjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLXJlYWN0anNcIj9iZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtcmVhY3Rqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtcmVhY3Rqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-reactjs\n");

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