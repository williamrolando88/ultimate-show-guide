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

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderComments": () => (/* binding */ renderComments),
/* harmony export */   "getCommentsFromAPI": () => (/* binding */ getCommentsFromAPI),
/* harmony export */   "appendComments": () => (/* binding */ appendComments)
/* harmony export */ });
const getCommentsFromAPI = async showID => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${showID}`);
  const userComments = await response.json();
  return userComments;
};

const renderComments = arr => {
  const commentHTML = arr.map(com => {
    const {
      username,
      comment,
      creation_date: creationDate
    } = com;
    const commentHTML = document.createElement('span');
    commentHTML.textContent = `${creationDate} ${username}: ${comment}`;
    return commentHTML;
  });
  return commentHTML;
};

function appendComments(popUpWindow, commentSpan) {
  const commentCont = popUpWindow.querySelector('.commentCont');
  commentSpan.forEach(com => {
    commentCont.appendChild(com);
  });
}



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
  const id = name.toLowerCase().split(/[^A-Za-z0-9]/).join('-');
  return {
    name,
    cover,
    id
  };
}

/***/ }),

/***/ "./src/modules/likesFetch.js":
/*!***********************************!*\
  !*** ./src/modules/likesFetch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLikes)
/* harmony export */ });
async function getLikes() {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes';
  const response = await fetch(url, {
    method: 'GET'
  });
  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./src/modules/nodeCreation.js":
/*!*************************************!*\
  !*** ./src/modules/nodeCreation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendCards)
/* harmony export */ });
const cardStructure = serie => ({
  tag: 'article',
  id: serie.id,
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
        textContent: `${serie.likes} likes`
      }]
    }]
  }, {
    tag: 'button',
    class: ['bg-stone-300'],
    textContent: 'Comment'
  }]
});

const cardNode = element => {
  const node = document.createElement(element.tag);

  if (element.id) {
    node.id = element.id;
  }

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

function appendCards(cardsData) {
  const cardContainer = document.querySelector('#tv-series-container');

  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  cardsData.forEach(data => {
    cardContainer.appendChild(cardNode(cardStructure(data)));
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
/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ "./src/modules/fetchData.js");
/* harmony import */ var _likesFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesFetch.js */ "./src/modules/likesFetch.js");
/* harmony import */ var _nodeCreation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodeCreation.js */ "./src/modules/nodeCreation.js");




function mergeInfo(dataArray, likes) {
  dataArray.forEach(data => {
    const temp = likes.find(e => e.item_id === data.id);
    data.likes = temp.likes;
  });
}

async function renderSeries(serieList) {
  const dataArray = await Promise.all(serieList.map(async serie => (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(serie)));
  const likes = await (0,_likesFetch_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  mergeInfo(dataArray, likes);
  const container = (0,_nodeCreation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dataArray);
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

/***/ "./src/popUp.js":
/*!**********************!*\
  !*** ./src/popUp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiRequest */ "./src/apiRequest.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ "./src/comments.js");
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactions */ "./src/interactions.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");



 // getAPI;
// createHTML;
// openPopUp;
// closePopUP;

const renderPopUp = async url => {
  const seriesInfo = await (0,_apiRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
  const popUp = (0,_render__WEBPACK_IMPORTED_MODULE_3__.createHTML)(seriesInfo);
  const renderedHTML = (0,_render__WEBPACK_IMPORTED_MODULE_3__.openPopUp)(popUp);
  return renderedHTML;
};
/**
 * This function is called in openPopupWindow at index.js
 * @param {string} url -> take url of movie at selected index
 * @param {string} name -> take name of movie at selected index
 */


const popUpInteraction = async (url, name) => {
  const popUpWindow = await renderPopUp(url);
  (0,_interactions__WEBPACK_IMPORTED_MODULE_2__["default"])(popUpWindow);
  const commentInfo = await (0,_comments__WEBPACK_IMPORTED_MODULE_1__.getCommentsFromAPI)(name);
  const commentSpan = (0,_comments__WEBPACK_IMPORTED_MODULE_1__.renderComments)(commentInfo);
  (0,_comments__WEBPACK_IMPORTED_MODULE_1__.appendComments)(popUpWindow, commentSpan);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpInteraction);

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
    <i class="fas fa-times self-end py-6 text-4xl"></i>
    <img src=${medium} alt="cover Image">
    <h2 class='font-rockwell text-4xl font-bold py-6'>${name}</h2>
    <ul>
      <li>Language: ${language}</li>
      <li>Official Site: <a class='underline' href="${officialSite}">${officialSite}</a></li>
      <li>Rating: ${average}</li>
      <li>Premiered: ${premiered}</li>
    </ul>
    <h3 class='font-rockwell text-2xl font-bold py-6'>Comments</h3>
    <div class='commentCont flex flex-col'>
    </div>
    <h3 class='font-rockwell text-2xl font-bold py-6'>Add new comment</h3>
    <form class='flex flex-col self-start items-start'>
      <input class='mb-4' placeholder='Your name here' required>
      <textarea placeholder ='Your insights here' required></textarea>
      <input class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded mt-4' type='button' value='Comment'>
    </form>
    `;

const openPopUp = obj => {
  const popUp = document.createElement('section');
  Object.assign(popUp, {
    className: 'flex flex-col overflow-y-scroll items-center border-2 border-gray-600 border-solid px-[20%] py-6 my-[50px]'
  });
  popUp.setAttribute('style', 'position : absolute; top: 65px; left: 20%; background-color: white');
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
/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/variables.js */ "./src/modules/variables.js");
/* harmony import */ var _modules_renderNodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderNodes.js */ "./src/modules/renderNodes.js");
/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popUp */ "./src/popUp.js");




 // *Don't move it!

function openPopupWindow(cardsContainer) {
  const commentButtons = cardsContainer.querySelectorAll('button');
  commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      (0,_popUp__WEBPACK_IMPORTED_MODULE_4__["default"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__["default"][index].url, _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__["default"][index].name.toLowerCase().split(' ').join('-'));
    });
  });
}

(async function main() {
  const cardsContainer = await (0,_modules_renderNodes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  openPopupWindow(cardsContainer);
})();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map