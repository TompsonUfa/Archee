/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/header.js */ \"./src/js/module/header.js\");\n/* harmony import */ var _module_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_header_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/slider.js */ \"./src/js/module/slider.js\");\n/* harmony import */ var _module_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_module_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _module_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\n/* harmony import */ var _module_burger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_burger_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function() {

eval("let burger = document.querySelector('.burger');\r\nlet burgerContent = document.querySelector('.burger-content');\r\nburger.addEventListener('click', function () {\r\n    if (burger.classList.contains('burger_active')) {\r\n        burger.classList.remove('burger_active')\r\n        burgerContent.style.maxHeight = '0';\r\n    } else {\r\n        burger.classList.add('burger_active')\r\n        burgerContent.style.maxHeight = '100vh';\r\n\r\n    }\r\n})\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/header.js":
/*!*********************************!*\
  !*** ./src/js/module/header.js ***!
  \*********************************/
/***/ (function() {

eval("function fixed() {\r\n    let header = document.querySelector('.header')\r\n    let promo = document.querySelector('.promo');\r\n    let headerHeight = header.offsetHeight;\r\n    window.addEventListener('scroll', function () {\r\n        if (window.scrollY > 1) {\r\n            header.classList.add(\"header_fixed\");\r\n            promo.style.marginTop = headerHeight + \"px\";\r\n        } \r\n        else {\r\n            header.classList.remove(\"header_fixed\");\r\n            promo.style.marginTop = 0 + \"px\";\r\n        }\r\n    })\r\n}\r\nfixed()\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/header.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/***/ (function() {

eval("let viewport = document.querySelector('.viewport').offsetWidth;\r\nlet slider = document.querySelector('.slider');\r\nlet sliderItem = slider.querySelector('.slider__item').offsetWidth;\r\nlet btnNext = document.querySelector('.btn-next');\r\nlet btnPrev = document.querySelector('.btn-prev');\r\nlet step = 0;\r\nbtnNext.addEventListener('click', function () {\r\n    if (sliderItem == 350) {\r\n        if (step != 1) {\r\n            step++;\r\n        } else {\r\n            step = 0;\r\n        }\r\n    } else {\r\n        if (step < 2) {\r\n            step++;\r\n        } else {\r\n            step = 0;\r\n        }\r\n    }\r\n    slider.style.left = -step * (sliderItem + 30) + \"px\";\r\n})\r\nbtnPrev.addEventListener('click', function () {\r\n    if (sliderItem == 350) {\r\n        if (step != 0) {\r\n            step--;\r\n        } else {\r\n            step = 1\r\n        }\r\n    } else {\r\n        if (step != 0) {\r\n            step--;\r\n        } else {\r\n            step = 2\r\n        }\r\n    }\r\n    slider.style.left = -step * (sliderItem + 30) + \"px\";\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;