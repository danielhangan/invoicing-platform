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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    database: {\n        type: \"postgres\",\n        host: process.env.DATABASE_HOST,\n        port: process.env.DATABASE_PORT,\n        username: process.env.DATABASE_USERNAME,\n        password: process.env.DATABASE_PASSWORD,\n        database: process.env.DATABASE_NAME\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUN3QjtBQUV4RCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRFLFNBQVMsRUFBRTtRQUNURCxpRUFBYyxDQUFDO1lBQ1hFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQ2pELENBQUM7S0FDSDtJQUNDQyxRQUFRLEVBQUU7UUFDTkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJDLElBQUksRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGFBQWE7UUFDL0JDLElBQUksRUFBRVQsT0FBTyxDQUFDQyxHQUFHLENBQUNTLGFBQWE7UUFDL0JDLFFBQVEsRUFBRVgsT0FBTyxDQUFDQyxHQUFHLENBQUNXLGlCQUFpQjtRQUN2Q0MsUUFBUSxFQUFFYixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsaUJBQWlCO1FBQ3ZDVCxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxhQUFhO0tBQ3RDO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICAgIGRhdGFiYXNlOiB7XG4gICAgICAgIHR5cGU6ICdwb3N0Z3JlcycsXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlQsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSTkFNRSxcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VfTkFNRVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImRhdGFiYXNlIiwidHlwZSIsImhvc3QiLCJEQVRBQkFTRV9IT1NUIiwicG9ydCIsIkRBVEFCQVNFX1BPUlQiLCJ1c2VybmFtZSIsIkRBVEFCQVNFX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJEQVRBQkFTRV9QQVNTV09SRCIsIkRBVEFCQVNFX05BTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();