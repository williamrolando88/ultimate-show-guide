/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiRequest.js":
/*!***************************!*\
  !*** ./src/apiRequest.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getAPI = async url => {
  const response = await fetch(url);
  const seriesInfo = await response.json();
  const {
    name,
    language,
    officialSite,
    rating: {
      average
    },
    image: {
      medium
    },
    premiered
  } = seriesInfo;
  return {
    name,
    language,
    officialSite,
    average,
    medium,
    premiered
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAPI);

/***/ }),

/***/ "./src/interactions.js":
/*!*****************************!*\
  !*** ./src/interactions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function closePopUP(popUpWindow) {
  const closeBtn = popUpWindow.querySelector('i');
  closeBtn.addEventListener('click', () => {
    popUpWindow.classList.add('hidden');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closePopUP);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openPopUp": () => (/* binding */ openPopUp),
/* harmony export */   "createHTML": () => (/* binding */ createHTML)
/* harmony export */ });
const main = document.querySelector('main');

const createHTML = ({
  name,
  language,
  officialSite,
  average,
  medium,
  premiered
}) => `
    <i class="fas fa-times"></i>
    <img src=${medium} alt="cover Image">
    <h2>${name}</h2>
    <ul>
      <li>Language: ${language}</li>
      <li>Official Site: ${officialSite}</li>
      <li>Rating: ${average}</li>
      <li>Premiered: ${premiered}</li>
    </ul>
    <h3>Comments</h3>
    <form>
      <input placeholder='Your name here'>
      <textarea placeholder ='Your insights here'></textarea>
      <input type='button' value='Comment'>
    </form>
    `;

const openPopUp = obj => {
  const popUp = document.createElement('section');
  popUp.innerHTML = obj;
  main.appendChild(popUp);
  return popUp;
};

 // export { createHTML }

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/DummyLogoTV.png":
/*!************************************!*\
  !*** ./src/images/DummyLogoTV.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97be26bc16795b881b8b.png";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_DummyLogoTV_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/DummyLogoTV.png */ "./src/images/DummyLogoTV.png");
/* harmony import */ var _apiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiRequest */ "./src/apiRequest.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactions */ "./src/interactions.js");

 // import { commentPopUp } from './popUp.js'
// import { openPopUp } from './openPopUs';



 // const commentBtn = document.querySelector('button').addEventListener('click', commentPopUp);
// const commentBtn = document.querySelector('button').addEventListener('click', openPopUp);

const url = 'https://api.tvmaze.com/lookup/shows?imdb=tt10919420';

const renderPopUp = async () => {
  const seriesInfo = await (0,_apiRequest__WEBPACK_IMPORTED_MODULE_2__["default"])(url);
  const popUp = (0,_render__WEBPACK_IMPORTED_MODULE_3__.createHTML)(seriesInfo);
  const renderedHTML = (0,_render__WEBPACK_IMPORTED_MODULE_3__.openPopUp)(popUp);
  return renderedHTML;
};

const popUpInteraction = async () => {
  const popUpWindow = await renderPopUp();
  (0,_interactions__WEBPACK_IMPORTED_MODULE_4__["default"])(popUpWindow);
};

popUpInteraction();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map