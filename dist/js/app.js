/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    //open mobile menu\r\n    let burger = document.getElementById('burger');\r\n    let mobileMenu = document.getElementsByClassName('mobile-menu');\r\n    if (burger) {\r\n        burger.addEventListener('click', function () {\r\n            mobileMenu[0].classList.add('active');\r\n            document.querySelector('body').classList.add('not-scroll');\r\n        });\r\n    }\r\n\r\n    //close mobile menu\r\n    let close = document.getElementById('closeMobile');\r\n    if (close) {\r\n        close.addEventListener('click', function () {\r\n            mobileMenu[0].classList.remove('active');\r\n            document.querySelector('body').classList.remove('not-scroll');\r\n        });\r\n    }\r\n\r\n    //open certificate\r\n    lightGallery(document.getElementById('animated-thumbnails'));\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://designagency/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;