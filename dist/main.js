/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchData)
/* harmony export */ });
async function fetchData(serie) {
  const response = await fetch(serie.url, {
    method: 'GET'
  });
  const data = await response.json();
  const {
    name,
    image: {
      medium: cover
    }
  } = data;
  return {
    name,
    cover
  };
}

/***/ }),

/***/ "./src/modules/nodeCreation.js":
/*!*************************************!*\
  !*** ./src/modules/nodeCreation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardStructure": () => (/* binding */ cardStructure),
/* harmony export */   "cardNode": () => (/* binding */ cardNode),
/* harmony export */   "appendCards": () => (/* binding */ appendCards)
/* harmony export */ });
const cardStructure = serie => {
  return {
    tag: 'article',
    class: ['serie', 'flex', 'flex-col'],
    children: [{
      tag: 'img',
      class: [],
      attribute: {
        src: serie.cover,
        alt: serie.name
      }
    }, {
      tag: 'div',
      class: [],
      children: [{
        tag: 'h2',
        class: [],
        textContent: serie.name
      }, {
        tag: 'div',
        class: ['flex', 'justify-between', 'items-baseline'],
        children: [{
          tag: 'i',
          class: ['fas', 'fa-heart', 'text-red-600']
        }, {
          tag: 'p',
          class: [],
          textContent: '2 likes'
        }]
      }]
    }, {
      tag: 'button',
      class: ['bg-stone-300'],
      textContent: 'Comment'
    }]
  };
};

const cardNode = element => {
  const node = document.createElement(element.tag);

  if (element.class.length > 0) {
    node.classList.add(...element.class);
  }

  if (element.textContent) {
    node.textContent = element.textContent;
  }

  if (element.attribute) {
    Object.keys(element.attribute).forEach(key => {
      node.setAttribute(key, element.attribute[key]);
    });
  }

  if (element.children) {
    element.children.forEach(children => {
      node.appendChild(cardNode(children));
    });
  }

  return node;
};

function appendCards(nodes) {
  const cardContainer = document.querySelector('#tv-series-container');

  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  nodes.forEach(node => {
    cardContainer.appendChild(node);
  });
  return cardContainer;
}



/***/ }),

/***/ "./src/modules/renderNodes.js":
/*!************************************!*\
  !*** ./src/modules/renderNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderSeries)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/modules/fetchData.js");
/* harmony import */ var _nodeCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodeCreation */ "./src/modules/nodeCreation.js");


async function renderSeries(serieList) {
  const dataArray = await Promise.all(serieList.map(async serie => {
    return await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])(serie);
  }));
  const structures = dataArray.map(d => (0,_nodeCreation__WEBPACK_IMPORTED_MODULE_1__.cardStructure)(d));
  const nodes = structures.map(s => (0,_nodeCreation__WEBPACK_IMPORTED_MODULE_1__.cardNode)(s));
  const container = (0,_nodeCreation__WEBPACK_IMPORTED_MODULE_1__.appendCards)(nodes);
  return container;
}

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const movieList = [{
  name: 'Squid game',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt10919420'
}, {
  name: 'Game of Thrones',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0944947'
}, {
  name: 'Dexter',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0773262'
}, {
  name: 'Grey’s Anatomy',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0413573'
}, {
  name: 'The Office',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt0386676'
}, {
  name: 'Succession',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt7660850'
}, {
  name: 'Rick & Morty',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt2861424'
}, {
  name: 'The Walking Dead',
  url: 'https://api.tvmaze.com/lookup/shows?imdb=tt1520211'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieList);

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
/* harmony import */ var _modules_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/variables */ "./src/modules/variables.js");
/* harmony import */ var _modules_renderNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderNodes */ "./src/modules/renderNodes.js");




const renderedContent = (0,_modules_renderNodes__WEBPACK_IMPORTED_MODULE_3__["default"])(_modules_variables__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map