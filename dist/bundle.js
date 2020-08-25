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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./canvas.js":
/*!*******************!*\
  !*** ./canvas.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("canvas = document.getElementById(\"canvas\");\nconst context = canvas.getContext(\"2d\");\n\nconst sprites = new Image();\nsprites.src = \"./images/sprite.png\";\n\nconst backgroundImage = new Image();\nbackgroundImage.src = \"./images/background.png\";\n\nconst houses = new Image();\nhouses.src = \"./images/houses.png\";\n\nlet bigHouses = [];\n\nlet player = new Player();\nlet background = new Background();\nbuildHoudses();\nlet coffeShop = new CoffeShop(320, 120);\nlet keyPressed = \"\";\nlet keyUnpressed = \"\";\nlet frames = 0;\n\nfunction buildHoudses() {\n  let bigHouse1 = new BigHouse(20, 100);\n  let bigHouse2 = new BigHouse(700, 100);\n  bigHouses.push(bigHouse1, bigHouse2);\n}\n\nfunction init() {\n  draw();\n  player.applyCommand(keyPressed, keyUnpressed);\n  frames = frames + 1;\n  requestAnimationFrame(init);\n}\nfunction draw() {\n  clearScreen();\n  background.drawBackground();\n  coffeShop.drawCoffeShop();\n  bigHouses.forEach((h) => h.drawHouse());\n  player.drawPlayer();\n}\n\nfunction clearScreen() {\n  context.fillStyle = \"#087050\";\n  context.fillRect(0, 0, 800, 600);\n}\n\ndocument.addEventListener(\"keydown\", (event) => {\n  initMove(event.keyCode);\n});\n\ndocument.addEventListener(\"keyup\", (event) => {\n  stopMove(event.keyCode);\n});\n\nfunction initMove(key) {\n  keyPressed = key;\n  keyUnpressed = \"\";\n}\n\nfunction stopMove(key) {\n  keyUnpressed = key;\n}\n\ninit();\n\n\n//# sourceURL=webpack:///./canvas.js?");

/***/ })

/******/ });