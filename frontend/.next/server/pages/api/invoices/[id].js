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
exports.id = "pages/api/invoices/[id]";
exports.ids = ["pages/api/invoices/[id]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./src/pages/api/invoices/[id].js":
/*!****************************************!*\
  !*** ./src/pages/api/invoices/[id].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get_invoice_by_id)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function get_invoice_by_id(req, res) {\n    const invoice_id = req.query.id;\n    // const payload = JSON.parse(req.body)\n    if (req.method === \"GET\") {\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${process.env.BASE_URL}/invoices/${invoice_id}`, {\n            headers: {\n                Authorization: `Bearer ${process.env.AUTH_SECRET}`\n            }\n        }).then((data)=>{\n            res.status(200).json(data.data);\n        }).catch((err)=>{\n            res.status(400).end();\n        });\n    }\n    if (req.method === \"PUT\") {\n        const payload = JSON.parse(req.body);\n        axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${process.env.BASE_URL}/invoices/${invoice_id}`, payload, {\n            headers: {\n                Authorization: `Bearer ${process.env.AUTH_SECRET}`\n            }\n        }).then((data)=>{\n            res.status(200).json(data.data);\n        }).catch((err)=>{\n            res.status(400).end();\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ludm9pY2VzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3lCO0FBQ1YsZUFBZUMsaUJBQWlCLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RELE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEVBQUU7SUFDL0IsdUNBQXVDO0lBQ3ZDLElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN0QlAsZ0RBQVMsQ0FBQyxDQUFDLEVBQUVTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUMsVUFBVSxFQUFFUCxVQUFVLENBQUMsQ0FBQyxFQUMxRDtZQUNFUSxPQUFPLEVBQUU7Z0JBQ0xDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLFdBQVcsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0YsQ0FBQyxDQUNEQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1lBQ1piLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDO1NBQ2xDLENBQUMsQ0FDREcsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUNaakIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLEdBQUcsRUFBRTtTQUN4QixDQUFDO0tBQ0w7SUFFRCxJQUFJbkIsR0FBRyxDQUFDSyxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3RCLE1BQU1lLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUN0QixHQUFHLENBQUN1QixJQUFJLENBQUM7UUFDcEN6QixnREFBUyxDQUFDLENBQUMsRUFBRVMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxVQUFVLEVBQUVQLFVBQVUsQ0FBQyxDQUFDLEVBQUVrQixPQUFPLEVBQ25FO1lBQ0VWLE9BQU8sRUFBRTtnQkFDTEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksV0FBVyxDQUFDLENBQUM7YUFDckQ7U0FDRixDQUFDLENBQ0RDLElBQUksQ0FBQyxDQUFDQyxJQUFJLEdBQUs7WUFDWmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDQSxJQUFJLENBQUM7U0FDbEMsQ0FBQyxDQUNERyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ1pqQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxFQUFFO1NBQ3hCLENBQUM7S0FDTDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGFnZXMvYXBpL2ludm9pY2VzL1tpZF0uanM/ZDM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0X2ludm9pY2VfYnlfaWQocmVxLCByZXMpIHtcbiAgICBjb25zdCBpbnZvaWNlX2lkID0gcmVxLnF1ZXJ5LmlkXG4gICAgLy8gY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UocmVxLmJvZHkpXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaW52b2ljZXMvJHtpbnZvaWNlX2lkfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVH1gXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmVuZCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuICAgICAgICBheGlvcy5wdXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ludm9pY2VzLyR7aW52b2ljZV9pZH1gLCBwYXlsb2FkLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVR9YFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoKVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRfaW52b2ljZV9ieV9pZCIsInJlcSIsInJlcyIsImludm9pY2VfaWQiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBVVRIX1NFQ1JFVCIsInRoZW4iLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZW5kIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/invoices/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/invoices/[id].js"));
module.exports = __webpack_exports__;

})();