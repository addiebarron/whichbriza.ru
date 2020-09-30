/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n// webpack\n\n\nwindow.$ = document.querySelector.bind(document);\nwindow.$$ = document.querySelectorAll.bind(document);\n\nlet resultsElem, btnElem, imgElem, textElem;\n\n// image hrefs\nlet images = [\n  {\n    src: 'briza1',\n    name: 'Musing Briza',\n    alt: 'Briza looking upwards.',\n    text: `u turn ur gaze the stars and comtemplate the bigger questions... r there cubbies on other planets? does someone out there have more hair than me? u do not know, and u are ok with that.`,\n  },\n  {\n    src: 'briza2',\n    name: 'Sus Briza',\n    alt: 'alt text 2',\n    text: `here's the thing. u got schemes. u got plans, machinations, big stinky skeletons in the closet. u are sus.`,\n  },\n  {\n    src: 'briza3',\n    name: 'Gay and Beautiful Briza',\n    alt: 'alt text 3',\n    text: `u are gay and beautiful briza :)`,\n  },\n  {\n    src: 'briza4',\n    name: 'BABY',\n    alt: 'alt text4',\n    text: 'U ARE BABY. U. BABY. U R. BABY!!!!',\n  },\n  {\n    src: 'briza5',\n    name: 'Nutso Briza',\n    alt: 'alt text5',\n    text: `u are off the WALL my dude! completely zoinked my guy! sniffing left and right like some kind of demon. absolutely incredible. never stop.`,\n  },\n  {\n    src: 'briza6',\n    name: 'Flat Briza',\n    alt: 'alt text6',\n    text: `the weight of the world is too much. here u shall stay... squished into this couch cushion... overwhelmed by ur great burdens of responsibility. ur gonna be ok, babe.`,\n  },\n];\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  resultsElem = $('#results-container');\n  btnElem = $('#btn-container button');\n  imgElem = $('#img-container img');\n  textElem = $('#results-text');\n\n  preloadImages(images.map(image => `img/${image.src}.jpg`));\n\n  btnElem.onclick = whichBriza;\n});\n\nconst whichBriza = async e => {\n  $('#btn-container').classList.add('hidden');\n  $('#results-container').classList.remove('hidden');\n\n  const decision = await randomSrc();\n\n  renderResults(decision);\n};\n\nconst randomSrc = async () => {\n  let currentImage,\n    delay = 10,\n    index = Math.floor(Math.random() * Math.floor(100));\n\n  while (delay <= 500) {\n    index++;\n    delay *= 1.1;\n\n    currentImage = images[index % images.length];\n\n    imgElem.src = `img/${currentImage.src}.jpg`;\n    imgElem.alt = currentImage.alt;\n\n    await wait(delay);\n  }\n\n  return currentImage;\n};\n\nconst renderResults = image => {\n  resultsElem.classList.add('finished');\n  textElem.innerHTML = `<h1>${image.name}</h1><p>${image.text}</p>`;\n};\n\nfunction preloadImages(array) {\n  if (!preloadImages.list) {\n    preloadImages.list = [];\n  }\n  var list = preloadImages.list;\n  for (var i = 0; i < array.length; i++) {\n    var img = new Image();\n    img.onload = function () {\n      var index = list.indexOf(this);\n      if (index !== -1) {\n        // remove image from the array once it's loaded\n        // for memory consumption reasons\n        list.splice(index, 1);\n      }\n    };\n    list.push(img);\n    img.src = array[i];\n  }\n}\n\nconst wait = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });