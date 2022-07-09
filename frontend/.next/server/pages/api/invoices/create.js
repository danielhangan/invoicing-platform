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
exports.id = "pages/api/invoices/create";
exports.ids = ["pages/api/invoices/create"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./src/pages/api/invoices/create.js":
/*!******************************************!*\
  !*** ./src/pages/api/invoices/create.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create_new_invoice)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function create_new_invoice(req, res) {\n    // const body = JSON.parse(req.body)\n    const user_email = req.body.created_by_user;\n    if (req.method === \"POST\") {\n        const today_date = new Date().toISOString().split(\"T\")[0];\n        await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${process.env.BASE_URL}/invoices/`, {\n            created_by_user: user_email,\n            invoice_code: \"\",\n            issuer_email: \"\",\n            issuer_company_name: \"\",\n            issuer_address_street: \"\",\n            issuer_address_city: \"\",\n            issuer_address_country: \"\",\n            issuer_address_post_code: \"\",\n            issuer_vat_number: \"\",\n            issuer_tax_number: \"\",\n            billed_email: \"\",\n            billed_company_name: \"\",\n            billed_address_street: \"\",\n            billed_address_city: \"\",\n            billed_address_country: \"\",\n            billed_address_post_code: \"\",\n            billed_vat_number: \"\",\n            billed_tax_number: \"\",\n            service_date_from: today_date,\n            service_date_to: today_date,\n            due_date: today_date,\n            currency: \"USD\",\n            status: \"draft\",\n            product_type: \"service\"\n        }, {\n            headers: {\n                Authorization: `Bearer ${process.env.AUTH_SECRET}`\n            }\n        }).then((data)=>{\n            res.status(201).json(data.data);\n        }).catch((err)=>{\n            // console.log(err)\n            res.status(400).end();\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ludm9pY2VzL2NyZWF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFVixlQUFlQyxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkQsb0NBQW9DO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNDLGVBQWU7SUFDM0MsSUFBSUosR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTVgsaURBQVUsQ0FBQyxDQUFDLEVBQUVhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ3BEO1lBQ0lULGVBQWUsRUFBRUYsVUFBVTtZQUMzQlksWUFBWSxFQUFFLEVBQUU7WUFDaEJDLFlBQVksRUFBRSxFQUFFO1lBQ2hCQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCQyxxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCQyxzQkFBc0IsRUFBRSxFQUFFO1lBQzFCQyx3QkFBd0IsRUFBRSxFQUFFO1lBQzVCQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCQyxZQUFZLEVBQUUsRUFBRTtZQUNoQkMsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QkMscUJBQXFCLEVBQUUsRUFBRTtZQUN6QkMsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QkMsc0JBQXNCLEVBQUUsRUFBRTtZQUMxQkMsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QkMsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQkMsaUJBQWlCLEVBQUUsRUFBRTtZQUVyQkMsaUJBQWlCLEVBQUV6QixVQUFVO1lBQzdCMEIsZUFBZSxFQUFFMUIsVUFBVTtZQUMzQjJCLFFBQVEsRUFBRTNCLFVBQVU7WUFDcEI0QixRQUFRLEVBQUUsS0FBSztZQUNmQyxNQUFNLEVBQUUsT0FBTztZQUNmQyxZQUFZLEVBQUUsU0FBUztTQUMxQixFQUNEO1lBQ0VDLE9BQU8sRUFBRTtnQkFDTEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFM0IsT0FBTyxDQUFDQyxHQUFHLENBQUMyQixXQUFXLENBQUMsQ0FBQzthQUNyRDtTQUNGLENBQUMsQ0FDREMsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBSztZQUNaeEMsR0FBRyxDQUFDa0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTyxJQUFJLENBQUNELElBQUksQ0FBQ0EsSUFBSSxDQUFDO1NBQ2xDLENBQUMsQ0FDREUsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUNaLG1CQUFtQjtZQUNuQjNDLEdBQUcsQ0FBQ2tDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1UsR0FBRyxFQUFFO1NBQ3hCLENBQUM7S0FDTDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGFnZXMvYXBpL2ludm9pY2VzL2NyZWF0ZS5qcz80ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVfbmV3X2ludm9pY2UocmVxLCByZXMpIHtcbiAgICAvLyBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcbiAgICBjb25zdCB1c2VyX2VtYWlsID0gcmVxLmJvZHkuY3JlYXRlZF9ieV91c2VyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCB0b2RheV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pbnZvaWNlcy9gLFxuICAgICAgICB7XG4gICAgICAgICAgICBjcmVhdGVkX2J5X3VzZXI6IHVzZXJfZW1haWwsXG4gICAgICAgICAgICBpbnZvaWNlX2NvZGU6IFwiXCIsXG4gICAgICAgICAgICBpc3N1ZXJfZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBpc3N1ZXJfY29tcGFueV9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgaXNzdWVyX2FkZHJlc3Nfc3RyZWV0OiBcIlwiLFxuICAgICAgICAgICAgaXNzdWVyX2FkZHJlc3NfY2l0eTogXCJcIixcbiAgICAgICAgICAgIGlzc3Vlcl9hZGRyZXNzX2NvdW50cnk6IFwiXCIsXG4gICAgICAgICAgICBpc3N1ZXJfYWRkcmVzc19wb3N0X2NvZGU6IFwiXCIsXG4gICAgICAgICAgICBpc3N1ZXJfdmF0X251bWJlcjogXCJcIixcbiAgICAgICAgICAgIGlzc3Vlcl90YXhfbnVtYmVyOiBcIlwiLFxuICAgICAgICAgICAgYmlsbGVkX2VtYWlsOiBcIlwiLFxuICAgICAgICAgICAgYmlsbGVkX2NvbXBhbnlfbmFtZTogXCJcIixcbiAgICAgICAgICAgIGJpbGxlZF9hZGRyZXNzX3N0cmVldDogXCJcIixcbiAgICAgICAgICAgIGJpbGxlZF9hZGRyZXNzX2NpdHk6IFwiXCIsXG4gICAgICAgICAgICBiaWxsZWRfYWRkcmVzc19jb3VudHJ5OiBcIlwiLFxuICAgICAgICAgICAgYmlsbGVkX2FkZHJlc3NfcG9zdF9jb2RlOiBcIlwiLFxuICAgICAgICAgICAgYmlsbGVkX3ZhdF9udW1iZXI6IFwiXCIsXG4gICAgICAgICAgICBiaWxsZWRfdGF4X251bWJlcjogXCJcIixcblxuICAgICAgICAgICAgc2VydmljZV9kYXRlX2Zyb206IHRvZGF5X2RhdGUsXG4gICAgICAgICAgICBzZXJ2aWNlX2RhdGVfdG86IHRvZGF5X2RhdGUsXG4gICAgICAgICAgICBkdWVfZGF0ZTogdG9kYXlfZGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcImRyYWZ0XCIsXG4gICAgICAgICAgICBwcm9kdWN0X3R5cGU6IFwic2VydmljZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVR9YFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoKVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVfbmV3X2ludm9pY2UiLCJyZXEiLCJyZXMiLCJ1c2VyX2VtYWlsIiwiYm9keSIsImNyZWF0ZWRfYnlfdXNlciIsIm1ldGhvZCIsInRvZGF5X2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9VUkwiLCJpbnZvaWNlX2NvZGUiLCJpc3N1ZXJfZW1haWwiLCJpc3N1ZXJfY29tcGFueV9uYW1lIiwiaXNzdWVyX2FkZHJlc3Nfc3RyZWV0IiwiaXNzdWVyX2FkZHJlc3NfY2l0eSIsImlzc3Vlcl9hZGRyZXNzX2NvdW50cnkiLCJpc3N1ZXJfYWRkcmVzc19wb3N0X2NvZGUiLCJpc3N1ZXJfdmF0X251bWJlciIsImlzc3Vlcl90YXhfbnVtYmVyIiwiYmlsbGVkX2VtYWlsIiwiYmlsbGVkX2NvbXBhbnlfbmFtZSIsImJpbGxlZF9hZGRyZXNzX3N0cmVldCIsImJpbGxlZF9hZGRyZXNzX2NpdHkiLCJiaWxsZWRfYWRkcmVzc19jb3VudHJ5IiwiYmlsbGVkX2FkZHJlc3NfcG9zdF9jb2RlIiwiYmlsbGVkX3ZhdF9udW1iZXIiLCJiaWxsZWRfdGF4X251bWJlciIsInNlcnZpY2VfZGF0ZV9mcm9tIiwic2VydmljZV9kYXRlX3RvIiwiZHVlX2RhdGUiLCJjdXJyZW5jeSIsInN0YXR1cyIsInByb2R1Y3RfdHlwZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQVVUSF9TRUNSRVQiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJjYXRjaCIsImVyciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/invoices/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/invoices/create.js"));
module.exports = __webpack_exports__;

})();