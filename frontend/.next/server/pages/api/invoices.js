"use strict";
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
exports.id = "pages/api/invoices";
exports.ids = ["pages/api/invoices"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./src/pages/api/invoices/index.js":
/*!*****************************************!*\
  !*** ./src/pages/api/invoices/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_all_invoices)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function get_all_invoices(req, res) {\n    if (req.method === \"GET\") {\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${process.env.BASE_URL}/invoices/`, {\n            headers: {\n                Authorization: `Bearer ${process.env.AUTH_SECRET}`\n            }\n        }).then((data)=>{\n            res.status(200).json(data.data);\n        }).catch((err)=>{\n            console.log(err);\n            res.status(400).end();\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ludm9pY2VzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUNWLGVBQWVDLGdCQUFnQixDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNyRCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDdEJKLGdEQUFTLENBQUMsQ0FBQyxFQUFFTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3QztZQUNFQyxPQUFPLEVBQUU7Z0JBQ0xDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLFdBQVcsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0YsQ0FBQyxDQUNEQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1lBQ1pWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDO1NBQ2xDLENBQUMsQ0FDREcsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1lBQ2hCZCxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ00sR0FBRyxFQUFFO1NBQ3hCLENBQUM7S0FDTDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGFnZXMvYXBpL2ludm9pY2VzL2luZGV4LmpzPzdjM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRfYWxsX2ludm9pY2VzKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaW52b2ljZXMvYCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkFVVEhfU0VDUkVUfWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuZW5kKClcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0X2FsbF9pbnZvaWNlcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1VSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQVVUSF9TRUNSRVQiLCJ0aGVuIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/invoices/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/invoices/index.js"));
module.exports = __webpack_exports__;

})();