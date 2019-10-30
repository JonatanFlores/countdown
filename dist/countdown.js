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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countdown */ "./src/modules/countdown.js");

window.Countdown = _modules_countdown__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/modules/countdown.js":
/*!**********************************!*\
  !*** ./src/modules/countdown.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Countdown; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Countdown =
/*#__PURE__*/
function () {
  function Countdown() {
    _classCallCheck(this, Countdown);

    // Define option defaults
    var defaults = {
      stopDate: "",
      classTarget: "countdown",
      onComplete: function onComplete() {}
    }; // Create options by extending defaults with the passed in arguments

    if ((arguments.length <= 0 ? undefined : arguments[0]) && _typeof(arguments.length <= 0 ? undefined : arguments[0]) === "object") {
      this.options = this.extendDefaults(defaults, arguments.length <= 0 ? undefined : arguments[0]);
    } // Element containing the countdown presentation


    this.countdown = document.querySelector(this.options.target); // Future date when the countdown should stop (timestamp)

    this.stopDate = new Date(this.options.stopDate); // Future date when the countdown should stop (milliseconds)

    this.stopTime = this.stopDate.getTime(); // Update every second

    this.timeInterval = setInterval(this.runClock.bind(this), 1000);
  } // Utility method to extend defaults with user options


  _createClass(Countdown, [{
    key: "extendDefaults",
    value: function extendDefaults(source_, properties) {
      var source = source_;
      Object.keys(properties).forEach(function (property) {
        source[property] = properties[property];
      });
      return source;
    } // Run the clock

  }, {
    key: "runClock",
    value: function runClock() {
      // Get current time in (milliseconds)
      var now = new Date().getTime(); // Distance from now and the stop countdown time (milliseconds)

      var distance = this.stopTime - now; // Set a display to hold all the values (easy to concat)

      var display = []; // Calculate time

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var secs = Math.floor(distance % (1000 * 60) / 1000); // Populate the display

      display.push("0".concat(days).slice(-2));
      display.push("0".concat(hours).slice(-2));
      display.push("0".concat(mins).slice(-2));
      display.push("0".concat(secs).slice(-2)); // Check if the stop date was reached

      if (distance <= 0) {
        // Stop countdown
        clearInterval(this.timeInterval); // Callback executed after finished

        this.options.onComplete();
      } else {
        // Display the result into the html
        this.countdown.innerHTML = "\n          <span class=\"countdown-display\">\n              ".concat(display.join(":"), "\n          </span>\n        ");
      }
    }
  }]);

  return Countdown;
}();



/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jonatanflores/Workspace/Workspace-Test/countdown/src/app.js */"./src/app.js");


/***/ })

/******/ });