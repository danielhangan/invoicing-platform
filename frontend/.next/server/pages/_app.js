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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"META\": () => (/* binding */ META)\n/* harmony export */ });\n// google analytics measurement id\nconst GA_TRACKING_ID = \"\";\nconst META = {\n    title: \"Invoice Platform\",\n    lang: \"en-us\",\n    description: \"Open Source Business Invoice Platform\",\n    url: \"https://invocely.tech\",\n    image: \"/logo.png\",\n    tags: [\n        \"nextjs\",\n        \"chakraui\",\n        \"google analytics\",\n        \"eslint\",\n        \"jest\",\n        \"icons\"\n    ]\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtDO0FBQ2xDLE1BQU1BLGNBQWMsR0FBRyxFQUFFO0FBR3pCLE1BQU1DLElBQUksR0FBRztJQUNaQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCQyxJQUFJLEVBQUUsT0FBTztJQUNiQyxXQUFXLEVBQ1YsdUNBQXVDO0lBQ3hDQyxHQUFHLEVBQUUsdUJBQXVCO0lBQzVCQyxLQUFLLEVBQUUsV0FBVztJQUNsQkMsSUFBSSxFQUFFO1FBQUMsUUFBUTtRQUFFLFVBQVU7UUFBRSxrQkFBa0I7UUFBRSxRQUFRO1FBQUUsTUFBTTtRQUFFLE9BQU87S0FBQztDQUMzRTtBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbmZpZy5qcz8yNGE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGdvb2dsZSBhbmFseXRpY3MgbWVhc3VyZW1lbnQgaWRcbmNvbnN0IEdBX1RSQUNLSU5HX0lEID0gXCJcIjtcblxuXG5jb25zdCBNRVRBID0ge1xuXHR0aXRsZTogXCJJbnZvaWNlIFBsYXRmb3JtXCIsXG5cdGxhbmc6IFwiZW4tdXNcIixcblx0ZGVzY3JpcHRpb246XG5cdFx0XCJPcGVuIFNvdXJjZSBCdXNpbmVzcyBJbnZvaWNlIFBsYXRmb3JtXCIsXG5cdHVybDogXCJodHRwczovL2ludm9jZWx5LnRlY2hcIixcblx0aW1hZ2U6IFwiL2xvZ28ucG5nXCIsXG5cdHRhZ3M6IFtcIm5leHRqc1wiLCBcImNoYWtyYXVpXCIsIFwiZ29vZ2xlIGFuYWx5dGljc1wiLCBcImVzbGludFwiLCBcImplc3RcIiwgXCJpY29uc1wiXVxufTtcblxuZXhwb3J0IHsgR0FfVFJBQ0tJTkdfSUQsIE1FVEEgfTtcbiJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsIk1FVEEiLCJ0aXRsZSIsImxhbmciLCJkZXNjcmlwdGlvbiIsInVybCIsImltYWdlIiwidGFncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/lib/gtag.js":
/*!*************************!*\
  !*** ./src/lib/gtag.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    //@ts-ignore\n    window.gtag(\"config\", _config__WEBPACK_IMPORTED_MODULE_0__.GA_TRACKING_ID, {\n        page_location: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    //@ts-ignore\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2d0YWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLDRFQUE0RTtBQUNyRSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsR0FBRyxHQUFLO0lBQ2hDLFlBQVk7SUFDWkMsTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFSixtREFBYyxFQUFFO1FBQ3JDSyxhQUFhLEVBQUVILEdBQUc7S0FDbEIsQ0FBQyxDQUFDO0NBQ0gsQ0FBQztBQUVGLDZFQUE2RTtBQUN0RSxNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFQyxLQUFLLEdBQUUsR0FBSztJQUM1RCxZQUFZO0lBQ1pQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRUcsTUFBTSxFQUFFO1FBQzVCSSxjQUFjLEVBQUVILFFBQVE7UUFDeEJJLFdBQVcsRUFBRUgsS0FBSztRQUNsQkMsS0FBSztLQUNMLENBQUMsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9saWIvZ3RhZy5qcz9lZDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdBX1RSQUNLSU5HX0lEIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG5cdC8vQHRzLWlnbm9yZVxuXHR3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xuXHRcdHBhZ2VfbG9jYXRpb246IHVybCxcblx0fSk7XG59O1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH0pID0+IHtcblx0Ly9AdHMtaWdub3JlXG5cdHdpbmRvdy5ndGFnKFwiZXZlbnRcIiwgYWN0aW9uLCB7XG5cdFx0ZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuXHRcdGV2ZW50X2xhYmVsOiBsYWJlbCxcblx0XHR2YWx1ZSxcblx0fSk7XG59O1xuIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9sb2NhdGlvbiIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/gtag.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/gtag */ \"./src/lib/gtag.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_3__.pageview)(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: _config__WEBPACK_IMPORTED_MODULE_4__.META.title\n                    }, void 0, false, {\n                        fileName: \"/home/scooch/Documents/Dev/invoice-platform/frontend/src/pages/_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/scooch/Documents/Dev/invoice-platform/frontend/src/pages/_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/scooch/Documents/Dev/invoice-platform/frontend/src/pages/_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_8__.SessionProvider, {\n                session: session,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n                    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/scooch/Documents/Dev/invoice-platform/frontend/src/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/scooch/Documents/Dev/invoice-platform/frontend/src/pages/_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/scooch/Documents/Dev/invoice-platform/frontend/src/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNmO0FBQ0c7QUFDTjtBQUNIO0FBQ1c7QUFDTjtBQUNlO0FBQ0c7QUFHckMsU0FBU1EsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHRCxTQUFTLEVBQUUsR0FBQyxFQUFFO0lBQ2hGLE1BQU1FLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTU8saUJBQWlCLEdBQUcsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2pDWixtREFBUSxDQUFDWSxHQUFHLENBQUMsQ0FBQztTQUNmO1FBQ0RGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLENBQUMscUJBQXFCLEVBQUVILGlCQUFpQixDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFNO1lBQ1hELE1BQU0sQ0FBQ0csTUFBTSxDQUFDRSxHQUFHLENBQUMscUJBQXFCLEVBQUVKLGlCQUFpQixDQUFDLENBQUM7U0FDN0QsQ0FBQztLQUNILEVBQUU7UUFBQ0QsTUFBTSxDQUFDRyxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ1gsa0RBQUk7O2tDQUNILDhEQUFDYyxPQUFLO2tDQUFFZiwrQ0FBVTs7Ozs7NEJBQVM7a0NBQzNCLDhEQUFDZ0IsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFDUCw4REFBQ2QsNERBQWU7Z0JBQUNJLE9BQU8sRUFBRUEsT0FBTzswQkFDL0IsNEVBQUNYLDREQUFjO29CQUFDQyxLQUFLLEVBQUVBLHFEQUFLOzhCQUMxQiw0RUFBQ1EsU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTs7Ozs7d0JBQ2I7Ozs7O29CQUNEOztvQkFFakIsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBwYWdldmlldyB9IGZyb20gJy4uL2xpYi9ndGFnJ1xuaW1wb3J0IHsgTUVUQSB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9fSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAgIHBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntNRVRBLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuXG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJwYWdldmlldyIsIk1FVEEiLCJIZWFkIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiU2Vzc2lvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJldmVudHMiLCJvbiIsIm9mZiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        light: \"#ffffff\",\n        dark: \"#5cfff1\",\n        \"grey.50\": \"#F7FAFC\",\n        \"grey.100\": \"#EDF2F7\",\n        \"grey.200\": \"#E2E8F0\",\n        \"grey.300\": \"#CBD5E0\",\n        \"grey.400\": \"#A0AEC0\",\n        \"grey.500\": \"#718096\",\n        \"grey.600\": \"#4A5568\",\n        \"grey.700\": \"#2D3748\",\n        \"grey.800\": \"#1A202C\",\n        \"grey.900\": \"#171923\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxLQUFLLEdBQUdELDZEQUFXLENBQUM7SUFDekJFLE1BQU0sRUFBRTtRQUNQQyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztLQUNyQjtDQUNELENBQUM7QUFFRixpRUFBZUgsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3RoZW1lLmpzPzE5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcblx0Y29sb3JzOiB7XG5cdFx0bGlnaHQ6IFwiI2ZmZmZmZlwiLFxuXHRcdGRhcms6IFwiIzVjZmZmMVwiLFxuXHRcdFwiZ3JleS41MFwiOiAnI0Y3RkFGQycsXG5cdFx0XCJncmV5LjEwMFwiOiAnI0VERjJGNycsXG5cdFx0XCJncmV5LjIwMFwiOiAnI0UyRThGMCcsXG5cdFx0XCJncmV5LjMwMFwiOiAnI0NCRDVFMCcsXG5cdFx0XCJncmV5LjQwMFwiOiAnI0EwQUVDMCcsXG5cdFx0XCJncmV5LjUwMFwiOiAnIzcxODA5NicsXG5cdFx0XCJncmV5LjYwMFwiOiAnIzRBNTU2OCcsXG5cdFx0XCJncmV5LjcwMFwiOiAnIzJEMzc0OCcsXG5cdFx0XCJncmV5LjgwMFwiOiAnIzFBMjAyQycsXG5cdFx0XCJncmV5LjkwMFwiOiAnIzE3MTkyMycsXG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImNvbG9ycyIsImxpZ2h0IiwiZGFyayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();