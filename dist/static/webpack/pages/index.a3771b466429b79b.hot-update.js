"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connection\": function() { return /* binding */ connection; }\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"./node_modules/openai/dist/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connection(text, lang) {\n    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        organization: \"org-89XGHoeg68x692lZaqWwJ5k7\",\n        apiKey: \"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\"\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n    try {\n        const response = await openai.listEngines();\n        /* const response = await openai.createChatCompletion({\n      model: \"gpt-3.5-turbo\",\n      messages: [\n        {\n          role: \"assistant\",\n          content: `act as the best translator in the world. Translate this: ${text} to ${lang}`,\n        },\n      ],\n    }); */ return response;\n    } catch (err) {\n        console.log(err);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUczQyxlQUFlRSxXQUFXQyxJQUFZLEVBQUVDLElBQVksRUFBRTtJQUMzRCxNQUFNQyxnQkFBZ0IsSUFBSUwsaURBQWFBLENBQUM7UUFDdENNLGNBQWM7UUFDZEMsUUFBUUMscURBQXNDO0lBQ2hEO0lBQ0EsTUFBTUcsU0FBUyxJQUFJViw2Q0FBU0EsQ0FBQ0k7SUFDN0IsSUFBSTtRQUNGLE1BQU1PLFdBQVcsTUFBTUQsT0FBT0UsV0FBVztRQUN6Qzs7Ozs7Ozs7UUFRSSxHQUNKLE9BQU9EO0lBRVQsRUFBRSxPQUFPRSxLQUFLO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUVGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2FwaS50cz9iOTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdGlvbih0ZXh0OiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAgIG9yZ2FuaXphdGlvbjogXCJvcmctODlYR0hvZWc2OHg2OTJsWmFxV3dKNWs3XCIsXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOQUlfQVBJX0tFWVxuICB9KTtcbiAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5saXN0RW5naW5lcygpXG4gICAgLyogY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xuICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICAgICAgY29udGVudDogYGFjdCBhcyB0aGUgYmVzdCB0cmFuc2xhdG9yIGluIHRoZSB3b3JsZC4gVHJhbnNsYXRlIHRoaXM6ICR7dGV4dH0gdG8gJHtsYW5nfWAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pOyAqL1xuICAgIHJldHVybiByZXNwb25zZVxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbm5lY3Rpb24iLCJ0ZXh0IiwibGFuZyIsImNvbmZpZ3VyYXRpb24iLCJvcmdhbml6YXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXNwb25zZSIsImxpc3RFbmdpbmVzIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n"));

/***/ })

});