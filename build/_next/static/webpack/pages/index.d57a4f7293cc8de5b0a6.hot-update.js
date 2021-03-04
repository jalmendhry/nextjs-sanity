webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/joe.al-mendhry/Documents/development/sanity-next/pages/index.js\",\n    _this = undefined,\n    _templateObject,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_6___default.a).image(source);\n}\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      pageData = _useState[0],\n      setPageData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var getData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _client__WEBPACK_IMPORTED_MODULE_6___default.a.fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n      *[_type == \\\"homepage\\\"]\\n      \"]))));\n\n              case 2:\n                data = _context.sent;\n                setPageData(data[0]);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getData();\n  });\n  if (!pageData) return null;\n  var title = pageData.title,\n      carousel = pageData.carousel,\n      body = pageData.body;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      pageTitle: title || 'Homepage',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(\"h1\", {\n        children: \"Homepage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), carousel && carousel.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__[\"Carousel\"], {\n        children: carousel.map(function (image, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(\"img\", {\n              src: urlFor(image).url()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 19\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_11___default.a, _objectSpread({\n        blocks: body // imageOptions={{ w: 320, h: 240, fit: 'max' }}\n\n      }, _client__WEBPACK_IMPORTED_MODULE_6___default.a.config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n}; // export const getStaticProps = async () => {\n//   const pageData = await client.fetch(groq`\n//       *[_type == \"homepage\"]\n//     `);\n//   return {\n//     props: {\n//       pageData: pageData[0],\n//     },\n//   };\n// };\n\n\n_s(Home, \"Siy+UbfbUyzRwjfn4o9bPZmjUN8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2VEYXRhIiwic2V0UGFnZURhdGEiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiZmV0Y2giLCJncm9xIiwiZGF0YSIsInRpdGxlIiwiY2Fyb3VzZWwiLCJib2R5IiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJ1cmwiLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDdEIsU0FBT0MseURBQWUsQ0FBQ0MsOENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsRUFBRCxDQUR2QjtBQUFBLE1BQ1ZDLFFBRFU7QUFBQSxNQUNBQyxXQURBOztBQUVqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsT0FBTztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0tQLDhDQUFNLENBQUNRLEtBQVAsQ0FBYUMsMkNBQWIsd0xBREw7O0FBQUE7QUFDUkMsb0JBRFE7QUFLZEwsMkJBQVcsQ0FBQ0ssSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFYOztBQUxjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVBILE9BQU87QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFPQUEsV0FBTztBQUNSLEdBVFEsQ0FBVDtBQVdBLE1BQUksQ0FBQ0gsUUFBTCxFQUFlLE9BQU8sSUFBUDtBQWJFLE1BY1RPLEtBZFMsR0FjaUJQLFFBZGpCLENBY1RPLEtBZFM7QUFBQSxNQWNGQyxRQWRFLEdBY2lCUixRQWRqQixDQWNGUSxRQWRFO0FBQUEsTUFjUUMsSUFkUixHQWNpQlQsUUFkakIsQ0FjUVMsSUFkUjtBQWVqQixzQkFDRTtBQUFBLDJCQUNFLHNFQUFDLDBEQUFEO0FBQVEsZUFBUyxFQUFFRixLQUFLLElBQUksVUFBNUI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBR0dDLFFBQVEsSUFBSUEsUUFBUSxDQUFDRSxNQUFULEdBQWtCLENBQTlCLGlCQUNDLHNFQUFDLGtFQUFEO0FBQUEsa0JBQ0dGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNkLEtBQUQsRUFBUWUsS0FBUixFQUFrQjtBQUM5Qiw4QkFDRTtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRW5CLE1BQU0sQ0FBQ0ksS0FBRCxDQUFOLENBQWNnQixHQUFkO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVVELEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUtELFNBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFlRSxzRUFBQyxzRUFBRDtBQUNFLGNBQU0sRUFBRUgsSUFEVixDQUVFOztBQUZGLFNBR01iLDhDQUFNLENBQUNrQixNQUFQLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBeUJELENBeENELEMsQ0EwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXBETWhCLEk7O0tBQUFBLEk7QUFzRFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnO1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZURhdGEsIHNldFBhZ2VEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcImhvbWVwYWdlXCJdXG4gICAgICBgKTtcblxuICAgICAgc2V0UGFnZURhdGEoZGF0YVswXSk7XG4gICAgfTtcbiAgICBnZXREYXRhKCk7XG4gIH0pO1xuXG4gIGlmICghcGFnZURhdGEpIHJldHVybiBudWxsO1xuICBjb25zdCB7IHRpdGxlLCBjYXJvdXNlbCwgYm9keSB9ID0gcGFnZURhdGE7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPXt0aXRsZSB8fCAnSG9tZXBhZ2UnfT5cbiAgICAgICAgPGgxPkhvbWVwYWdlPC9oMT5cblxuICAgICAgICB7Y2Fyb3VzZWwgJiYgY2Fyb3VzZWwubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPENhcm91c2VsPlxuICAgICAgICAgICAge2Nhcm91c2VsLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaW1hZ2UpLnVybCgpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgKX1cblxuICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgYmxvY2tzPXtib2R5fVxuICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiAzMjAsIGg6IDI0MCwgZml0OiAnbWF4JyB9fVxuICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbi8vICAgICAgICpbX3R5cGUgPT0gXCJob21lcGFnZVwiXVxuLy8gICAgIGApO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIHBhZ2VEYXRhOiBwYWdlRGF0YVswXSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})