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
exports.id = "pages/api/users/register/[email]";
exports.ids = ["pages/api/users/register/[email]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./src/pages/api/users/register/[email].js":
/*!*************************************************!*\
  !*** ./src/pages/api/users/register/[email].js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ check_user_registration)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function check_user_registration(req, res) {\n    const user_email = req.query.email;\n    const user_data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${process.env.BASE_URL}/users/profile/${user_email}`, {\n        headers: {\n            Authorization: `Bearer ${process.env.AUTH_SECRET}`\n        }\n    }).then((data)=>{\n        res.status(200).json(data.data).end();\n    }).catch((err)=>{\n        if (err.response?.data?.detail.includes(\"doesn't exist\")) {\n            res.status(400).json({\n                data: \"user doesn't exist\"\n            });\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL3JlZ2lzdGVyL1tlbWFpbF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRVYsZUFBZUMsdUJBQXVCLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVELE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEtBQUs7SUFDbEMsTUFBTUMsU0FBUyxHQUFHLE1BQU1QLGdEQUFTLENBQUMsQ0FBQyxFQUFFUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsRUFBRVAsVUFBVSxDQUFDLENBQUMsRUFDdkY7UUFDSVEsT0FBTyxFQUFFO1lBQ0xDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLFdBQVcsQ0FBQyxDQUFDO1NBQ3JEO0tBQ0osQ0FDQSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1FBQ2JiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNHLEdBQUcsRUFBRTtLQUN4QyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEdBQUs7UUFDZCxJQUFJQSxHQUFHLENBQUNDLFFBQVEsRUFBRU4sSUFBSSxFQUFFTyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN0RHJCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUNGLElBQUksRUFBRSxvQkFBb0I7YUFBQyxDQUFDO1NBQ3JEO0tBQ0osQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL3JlZ2lzdGVyL1tlbWFpbF0uanM/ODVjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9yZWdpc3RyYXRpb24ocmVxLCByZXMpIHtcbiAgICBjb25zdCB1c2VyX2VtYWlsID0gcmVxLnF1ZXJ5LmVtYWlsXG4gICAgY29uc3QgdXNlcl9kYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS91c2Vycy9wcm9maWxlLyR7dXNlcl9lbWFpbH1gLFxuICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkFVVEhfU0VDUkVUfWBcbiAgICAgICAgfVxuICAgIH1cbiAgICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YS5kYXRhKS5lbmQoKVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZT8uZGF0YT8uZGV0YWlsLmluY2x1ZGVzKFwiZG9lc24ndCBleGlzdFwiKSkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2RhdGE6IFwidXNlciBkb2Vzbid0IGV4aXN0XCJ9KVxuICAgICAgICB9XG4gICAgfSlcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJjaGVja191c2VyX3JlZ2lzdHJhdGlvbiIsInJlcSIsInJlcyIsInVzZXJfZW1haWwiLCJxdWVyeSIsImVtYWlsIiwidXNlcl9kYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBVVRIX1NFQ1JFVCIsInRoZW4iLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImVuZCIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJkZXRhaWwiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users/register/[email].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users/register/[email].js"));
module.exports = __webpack_exports__;

})();