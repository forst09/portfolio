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

eval("__webpack_require__.r(__webpack_exports__);\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    //open mobile menu\r\n    let burger = document.getElementById('burger');\r\n    let mobileMenu = document.getElementsByClassName('mobile-menu');\r\n    if (burger) {\r\n        burger.addEventListener('click', function () {\r\n            mobileMenu[0].classList.add('active');\r\n            document.querySelector('body').classList.add('not-scroll');\r\n        });\r\n    }\r\n\r\n\r\n    //close mobile menu\r\n    let close = document.getElementById('closeMobile');\r\n    if (close) {\r\n        close.addEventListener('click', function () {\r\n            mobileMenu[0].classList.remove('active');\r\n            document.querySelector('body').classList.remove('not-scroll');\r\n        });\r\n    };\r\n\r\n    //fixed header\r\n    document.onscroll = function () {\r\n        let scroll = window.scrollY;\r\n        if (scroll > 400) {\r\n            document.querySelector('.header').classList.add('fixed');\r\n        }\r\n        else {\r\n            document.querySelector('.header').classList.remove('fixed');\r\n        }\r\n    }\r\n\r\n    //anchor\r\n    const anchors = document.querySelectorAll('.nav-js');\r\n\r\n    anchors.forEach(item => {\r\n        item.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            if (document.querySelector('.mobile-menu').classList.contains('active')) {\r\n                document.querySelector('.mobile-menu').classList.remove('active');\r\n                document.querySelector('body').classList.remove('not-scroll');\r\n            }\r\n            const id = item.getAttribute('href');\r\n            const headerHeight = document.querySelector('.header').clientHeight;\r\n            window.scrollTo({\r\n                behavior: 'smooth',\r\n                top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - headerHeight - 50\r\n            })\r\n        })\r\n    });\r\n\r\n    // const worksGallery = document.getElementById('works');\r\n    // const certificateGallery = document.getElementById('certificate');\r\n\r\n    // worksGallery.addEventListener('lgBeforeOpen', function () {\r\n    //     document.querySelector('body').classList.add('not-scroll');\r\n    // });\r\n    // worksGallery.addEventListener('lgBeforeClose', function () {\r\n    //     document.querySelector('body').classList.remove('not-scroll');\r\n    // });\r\n\r\n    // function closeM(gallery) {\r\n    //     const worksGallery = document.getElementById(gallery);\r\n    //     worksGallery.addEventListener('lgBeforeOpen', function () {\r\n    //         document.querySelector('body').classList.add('not-scroll');\r\n    //     });\r\n    //     worksGallery.addEventListener('lgBeforeClose', function () {\r\n    //         document.querySelector('body').classList.remove('not-scroll');\r\n    //     });\r\n    // }\r\n    // closeM('works');\r\n\r\n    //open certificate\r\n    lightGallery(document.getElementById('animated-thumbnails'));\r\n\r\n    //open works\r\n    lightGallery(document.getElementById('works'), {\r\n        plugins: [lgZoom],\r\n        selector: '.works__img',\r\n        showZoomInOutIcons: true\r\n    });\r\n\r\n    //swiper skills\r\n    if (window.innerWidth >= 1024) {\r\n        const swiperSkills = new Swiper('.swiper-skills', {\r\n            slidesPerView: 'auto',\r\n            spaceBetween: 40,\r\n            grabCursor: true\r\n        })\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://designagency/./src/js/app.js?");

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