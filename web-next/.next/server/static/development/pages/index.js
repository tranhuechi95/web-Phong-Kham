module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/ActiveLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
  let className = child.props.className || ''; // we determine if the current path name matches the href prop of the component, and if so we append the "active" class to the children ( we get the class "active" from props.activeClassName)

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  ;
  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Banner = () => {
  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    id: "myCarousel",
    className: "carousel slide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("ol", {
    className: "carousel-indicators",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("li", {
    "data-target": "#myCarousel",
    "data-slide-to": "0",
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("li", {
    "data-target": "#myCarousel",
    "data-slide-to": "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("li", {
    "data-target": "#myCarousel",
    "data-slide-to": "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "carousel-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/banner.png",
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/banner.png",
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/banner.png",
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "container-fluid p-5 bgPhotoEnd p-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw colorDarkBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "PH\xD2NG KH\xC1M CHUY\xCAN KHOA", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), "TAI-M\u0168I-H\u1ECCNG"), __jsx("img", {
    className: "py-2 borderRound borderWhite",
    src: "../static/assets/template/images/logo.png",
    style: {
      width: "10vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("h5", {
    className: "fontRoboLight fontSize1-2vw pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-map-marker-alt pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), "S\u1ED1 29, Ng\xF5 41, Ph\u1ED1 V\u0169 Ng\u1ECDc Phan, Qu\u1EADn \u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i"), __jsx("h5", {
    className: "fontRoboLight fontSize1-2vw pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-phone pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "0912.189.853"), __jsx("h5", {
    className: "fontRoboLight fontSize1-2vw pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-envelope pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), "pktiensiphamthibichdao@gmail.com")), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw colorDarkBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\u0110\u0102NG K\xDD NH\u1EACN TIN"), __jsx("h5", {
    className: "fontRoboLightItalic fontSize1vw px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 bi\u1EBFt th\xEAm chi ti\u1EBFt"), __jsx("form", {
    method: "POST",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-row px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "email",
    placeholder: "Nh\u1EADp email c\u1EE7a b\u1EA1n",
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("div", {
    className: "form-group col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-Green colorDarkBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\u0110\u0103ng k\xFD")))), __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw colorDarkBlue pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "TH\u1EDCI GIAN L\xC0M VI\u1EC6C"), __jsx("div", {
    className: "row py-2 px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-8 fontRoboLight fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Th\u1EE9 Hai - Th\u1EE9 S\xE1u", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), "Th\u1EE9 B\u1EA3y", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), "Ch\u1EE7 Nh\u1EADt", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), "Kh\xE1m t\u1EA1i nh\xE0 theo l\u1ECBch \u0111\u1EB7t tr\u01B0\u1EDBc"), __jsx("div", {
    className: "col-md-4 fontRoboLight fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "17:00-20:00", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), "16:00-20:00", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), "15:00-20:00"))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw colorDarkBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "FACEBOOK"), __jsx("a", {
    href: "https://tinyurl.com/phongkhambsiDao",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("img", {
    className: "py-3",
    src: "../static/assets/template/images/fbPage.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "container-fluid bgGreen text-center p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1vw colorDarkBlue fontRoboReg pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "B\u1EA3n quy\u1EC1n thu\u1ED9c PH\xD2NG KH\xC1M CHUY\xCAN KHOA TAI M\u0168I H\u1ECCNG. All rights reserved")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FormReview.js":
/*!**********************************!*\
  !*** ./components/FormReview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/FormReview.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FormReview = () => {
  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    id: "formDatLich",
    className: "col-md-6 bgDarkBlue p-5 colorWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("form", {
    method: "POST",
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw pt-5 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "D\u1ECACH V\u1EE4 KH\xC1M"), __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Ch\u1ECDn d\u1ECBch v\u1EE5 *"), __jsx("select", {
    className: "form-control",
    id: "chonDichVu",
    name: "chonDichVu",
    required: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("option", {
    className: "colorWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "1"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "2"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "3"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "4")))), __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "TH\xD4NG TIN \u0110\u0102NG K\xDD"), __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "H\u1ECD t\xEAn*"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "name",
    placeholder: "\u0110i\u1EC1n h\u1ECD v\xE0 t\xEAn",
    name: "name",
    required: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Email*"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "email",
    placeholder: "\u0110i\u1EC1n email",
    name: "email",
    required: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*"), __jsx("input", {
    type: "tel",
    className: "form-control",
    id: "tel",
    placeholder: "\u0110i\u1EC1n S\u0110T",
    name: "tel",
    required: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("div", {
    className: "form-group col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Ng\xE0y sinh"), __jsx("input", {
    type: "date",
    className: "form-control",
    id: "ngaySinh",
    placeholder: "DD/MM/YYYY",
    name: "ngaySinh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "\u0110\u1ECBa ch\u1EC9"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "address",
    placeholder: "\u0110i\u1EC1n \u0111\u1ECBa ch\u1EC9",
    name: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx("h4", {
    className: "fontRoboBold fontSize1-5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "CH\u1ECCN L\u1ECACH KH\xC1M"), __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Ng\xE0y kh\xE1m*"), __jsx("input", {
    type: "date",
    className: "form-control",
    id: "date",
    placeholder: "DD/MM/YYYY",
    name: "date",
    required: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("div", {
    className: "form-group col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("label", {
    className: "fontRoboLightItalic fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Gi\u1EDD kh\xE1m*"), __jsx("select", {
    className: "form-control",
    id: "gioKham",
    name: "chonDichVu",
    required: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "T2-T6 17:00-18:30"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "T2-T6 18:30-20:00"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "T7 16:00-17:30"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "T7 17:30-19:00"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "T7 17:30-19:00"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "T7 19:00-20:00"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "CN 15:00-16:30"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "CN 16:30-18:00"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "CN 18:00-20:00")))), __jsx("div", {
    className: "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("button", {
    name: "submit",
    type: "submit",
    className: "btn bgGreen fontRoboBold fontSize1-5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "\u0110\u1EB6T L\u1ECACH KH\xC1M")))), __jsx("div", {
    className: "col-md-5 bgGreen p-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "container-fluid colorBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    className: "container text-center py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("h3", {
    className: "fontSize2vw fontRoboBold pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "\xDD KI\u1EBEN C\u1EE6A NG\u01AF\u1EDCI B\u1EC6NH")), __jsx("div", {
    id: "carouselExampleControls",
    className: "carousel slide p-5",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("div", {
    className: "carousel-inner px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("div", {
    className: "carousel-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("div", {
    className: "row text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/review1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx("div", {
    className: "row text-center p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboReg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "\"T\xF4i b\u1ECB vi\xEAm xoang t\u1EEB l\xE2u, b\xEAn trong m\u0169i nhi\u1EC1u m\u1EE7 v\xE0 ti\u1EBFp t\u1EE5c \u0111au \xE2m \u1EC9 r\u1EA5t kh\xF3 ch\u1ECBu. Sau khi \u0111\u1EBFn ph\xF2ng kh\xE1m, \u0111\u01B0\u1EE3c b\xE1c s\u0129 ch\u1EA9n \u0111o\xE1n s\u1EED d\u1EE5ng m\xE1y n\u1ED9i soi v\xE0 t\u1EADn t\xECnh ch\u1EEFa b\u1EC7nh th\xEC nay \u0111\xE3 h\u1EBFt vi\xEAm xoang. C\xE1m \u01A1n b\xE1c s\u0129 \u0110\xE0o v\xE0 ph\xF2ng kh\xE1m!\"")), __jsx("div", {
    className: "container text-center p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboReg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "---NG\u1ECCC ANH---", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), "K\u1EBF to\xE1n ng\xE2n h\xE0ng"))), __jsx("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("div", {
    className: "row text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/h2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), __jsx("div", {
    className: "row text-center p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboReg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "\"M\xECnh \u0111\u1EBFn kh\xE1m 1 l\u1EA7n th\xF4i l\xE0 kh\u1ECFi lu\xF4n ch\u1EE9ng \u0111au h\u1ECDng d\xE0i ng\xE0y, m\xE0 ch\u1EC9 c\u1EA7n d\xF9ng \xEDt thu\u1ED1c! Kh\u1ECFi b\u1EC7nh ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), "r\u1EA5t nhanh, quy tr\xECnh kh\xE1m \u0111\u01A1n gi\u1EA3n \uD83D\uDC4D\uD83C\uDFFF\"")), __jsx("div", {
    className: "container text-center p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboReg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "---MINH GIANG---", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), "Sinh vi\xEAn"))), __jsx("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("div", {
    className: "row text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/h3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx("div", {
    className: "row text-center p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboReg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "\"B\xE1c s\u0129 nh\u1EB9 nh\xE0ng, chuy\xEAn khoa r\u1EA5t t\u1ED1t \u0111i\u1EC1u tr\u1ECB b\u1EC7nh d\u1EE9t \u0111i\u1EC3m\"")), __jsx("div", {
    className: "container text-center p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboReg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "---NGUY\u1EC4N VI\u1EC6T---", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), "Nh\xE2n vi\xEAn")))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleControls",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleControls",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Next"))))), __jsx("div", {
    className: "col-md-1 bgDarkBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FormReview);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("meta", {
    charset: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css",
    integrity: "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://formden.com/static/cdn/bootstrap-iso.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_topic_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/topic.json */ "./static/topic.json");
var _static_topic_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/topic.json */ "./static/topic.json", 1);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Nav = () => {
  const firstTopic = _static_topic_json__WEBPACK_IMPORTED_MODULE_1__[0];
  return __jsx("div", {
    className: "container-fluid mx-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light fixed-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/logo.png",
    style: {
      width: "10vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("ul", {
    className: "navbar-nav mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "TRANG CH\u1EE6"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/about",
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "GI\u1EDAI THI\u1EC6U"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: `/#DichVu`,
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "D\u1ECACH V\u1EE4"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: `/#BacSiTeam`,
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "\u0110\u1ED8I NG\u0168 B\xC1C S\u0128"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/posts/[postName]",
    as: `/posts/${firstTopic.postName}`,
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "TIN T\u1EE8C"))), __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: `/#formDatLich`,
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "\u0110\u1EB6T L\u1ECACH KH\xC1M-LI\xCAN H\u1EC6")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_topic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/topic.json */ "./static/topic.json");
var _static_topic_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/topic.json */ "./static/topic.json", 1);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewsCardDeck = props => props.posts.map(post => __jsx("div", {
  className: "card",
  key: post.id,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  className: "card-img-top",
  src: "../static/assets/template/images/t1.png",
  alt: "Card image cap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/posts/[postName]",
  as: `/posts/${post.postName}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  title: "test",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body card-body-DichVu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h5", {
  className: "card-text colorBlue fontSize1-5vw fontRoboBold",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, post.name))))));

const News = () => __jsx("div", {
  id: "tintuc",
  className: "container-fluid text-center p-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("h3", {
  className: "fontSansation colorDarkBlue fontSize3vw pt-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "TIN T\u1EE8C - B\xC0I VI\u1EBET"), __jsx("div", {
  id: "tintucCarousel",
  className: "carousel slide p-5",
  "data-ride": "carousel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("div", {
  className: "carousel-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "carousel-item active",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: "card-deck fontSize1vw",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(NewsCardDeck, {
  posts: _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 3),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), __jsx("div", {
  className: "carousel-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("div", {
  className: "card-deck fontSize1vw",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(NewsCardDeck, {
  posts: _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.slice(3, 6),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}))), __jsx("div", {
  className: "carousel-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  className: "card-deck fontSize1vw",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx(NewsCardDeck, {
  posts: _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.slice(6, 9),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})))), __jsx("a", {
  className: "carousel-control-prev",
  href: "#tintucCarousel",
  role: "button",
  "data-slide": "prev",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("span", {
  className: "carousel-control-prev-icon",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), __jsx("span", {
  className: "sr-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Previous")), __jsx("a", {
  className: "carousel-control-next",
  href: "#tintucCarousel",
  role: "button",
  "data-slide": "next",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("span", {
  className: "carousel-control-next-icon",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), __jsx("span", {
  className: "sr-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "Next"))));

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./components/Reason.js":
/*!******************************!*\
  !*** ./components/Reason.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Reason.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Reason = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-393467104" + " " + "container-fluid mt-5 text-center pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-393467104" + " " + "fontSansation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-393467104" + " " + "colorGreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "V\xCC SAO N\xCAN CH\u1ECCN "), __jsx("span", {
    className: "jsx-393467104" + " " + "colorBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "CH\xDANG T\xD4I")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "393467104",
    __self: undefined
  }, "p.jsx-393467104{font-size:3vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbmRldGh1b25nMzIxL0RvY3VtZW50cy93ZWItUGhvbmctS2hhbS93ZWItbmV4dC9jb21wb25lbnRzL1JlYXNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRNEIsQUFFc0MsY0FBQyIsImZpbGUiOiIvVXNlcnMvYmVjb25kZXRodW9uZzMyMS9Eb2N1bWVudHMvd2ViLVBob25nLUtoYW0vd2ViLW5leHQvY29tcG9uZW50cy9SZWFzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFzb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTUgdGV4dC1jZW50ZXIgcHQtNVwiPiAgICBcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U2Fuc2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yR3JlZW5cIj5Ww4wgU0FPIE7Dik4gQ0jhu4xOIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JCbHVlXCI+Q0jDmk5HIFTDlEk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgcCB7IGZvbnQtc2l6ZTogM3Z3OyB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG0tNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTMgbXktMyB0ZXh0LWNlbnRlciBmb250U2l6ZTF2dyBwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9hc3NldHMvdGVtcGxhdGUvaW1hZ2VzL2gxLnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2Fzc2V0cy90ZW1wbGF0ZS9pbWFnZXMvaDIucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvYXNzZXRzL3RlbXBsYXRlL2ltYWdlcy9oMy5wbmdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9hc3NldHMvdGVtcGxhdGUvaW1hZ2VzL2g0LnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTaXplMS0ydncgZm9udFJvYm9Cb2xkXCI+QsOBQyBTxKggQ0hVWcOKTiBNw5ROIENBTzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRSb2JvTGlnaHRcIj7EkOG7mWkgbmfFqSBiw6FjIHPEqSBnaeG7j2kgY2h1ecOqbiBtw7RuLCBjw7Mgbmhp4buBdSBuxINtIGtpbmggbmdoaeG7h20gdOG6oWkgYuG7h25oIHZp4buHbiBUYWkgTcWpaSBI4buNbmcgVFcuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFNpemUxLTJ2dyBmb250Um9ib0JvbGRcIj5OSeG7gE0gVElOIFbDgCBMw50gVMav4bueTkc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Um9ib0xpZ2h0XCI+S2jDoWNoIGjDoG5nIGzDoCB0cuG7jW5nIHTDom0sIGNow7puZyB0w7RpIGx1w7RuIHPhurVuIHPDoG5nIGNoxINtIHPDs2MgYuG6oW4gw6JuIGPhuqduIG5oxrAgY2jDrW5oIHRow6BuaCB2acOqbiB0cm9uZyBnaWEgxJHDrG5oLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTaXplMS0ydncgZm9udFJvYm9Cb2xkXCI+VEnDilUgQ0hV4bqoTiBRVeG7kEMgVOG6vjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRSb2JvTGlnaHRcIj5QaMOybmcga2jDoW0gxJHDoXAg4bupbmcgbeG7jWkgdGnDqnUgY2jDrSB24buBIHRoaeG6v3Qga+G6vywgYuG7kSB0csOtIHRyYW5nIHRoaeG6v3QgYuG7iyB0aGVvIHRpw6p1IGNodeG6qW4gcXXhu5FjIHThur8uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFNpemUxLTJ2dyBmb250Um9ib0JvbGRcIj5DSEkgUEjDjSBI4buiUCBMw508L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Um9ib0xpZ2h0XCI+MTAwJSBjaGkgcGjDrSBj4bunYSBjaMO6bmcgdMO0aSDEkeG7gXUgY8O0bmcga2hhaSBtaW5oIGLhuqFjaCB2w6AgxJHGsOG7o2Mgbmjhuq1wIGjhu4cgdGjhu5FuZyBj4bqpbiB0aOG6rW4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhc29uOyJdfQ== */\n/*@ sourceURL=/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Reason.js */")), __jsx("div", {
    className: "container-fluid m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "row mx-3 my-3 text-center fontSize1vw pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-3 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/h1.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-3 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/h2.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-3 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/h3.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-3 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/h4.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "B\xC1C S\u0128 CHUY\xCAN M\xD4N CAO"), __jsx("p", {
    className: "fontRoboLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "\u0110\u1ED9i ng\u0169 b\xE1c s\u0129 gi\u1ECFi chuy\xEAn m\xF4n, c\xF3 nhi\u1EC1u n\u0103m kinh nghi\u1EC7m t\u1EA1i b\u1EC7nh vi\u1EC7n Tai M\u0169i H\u1ECDng TW.")), __jsx("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "NI\u1EC0M TIN V\xC0 L\xDD T\u01AF\u1EDENG"), __jsx("p", {
    className: "fontRoboLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Kh\xE1ch h\xE0ng l\xE0 tr\u1ECDng t\xE2m, ch\xFAng t\xF4i lu\xF4n s\u1EB5n s\xE0ng ch\u0103m s\xF3c b\u1EA1n \xE2n c\u1EA7n nh\u01B0 ch\xEDnh th\xE0nh vi\xEAn trong gia \u0111\xECnh.")), __jsx("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "TI\xCAU CHU\u1EA8N QU\u1ED0C T\u1EBE"), __jsx("p", {
    className: "fontRoboLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Ph\xF2ng kh\xE1m \u0111\xE1p \u1EE9ng m\u1ECDi ti\xEAu ch\xED v\u1EC1 thi\u1EBFt k\u1EBF, b\u1ED1 tr\xED trang thi\u1EBFt b\u1ECB theo ti\xEAu chu\u1EA9n qu\u1ED1c t\u1EBF.")), __jsx("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSize1-2vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "CHI PH\xCD H\u1EE2P L\xDD"), __jsx("p", {
    className: "fontRoboLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "100% chi ph\xED c\u1EE7a ch\xFAng t\xF4i \u0111\u1EC1u c\xF4ng khai minh b\u1EA1ch v\xE0 \u0111\u01B0\u1EE3c nh\u1EADp h\u1EC7 th\u1ED1ng c\u1EA9n th\u1EADn.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reason);

/***/ }),

/***/ "./components/Service.js":
/*!*******************************!*\
  !*** ./components/Service.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Service.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Service = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    id: "DichVu",
    className: "jsx-2460720782" + " " + "container-fluid bgGreen text-center p-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-2460720782" + " " + "fontSansation pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-2460720782" + " " + "colorBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "D\u1ECACH V\u1EE4 T\u1EA0I "), __jsx("span", {
    className: "jsx-2460720782" + " " + "colorWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "PH\xD2NG KH\xC1M")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2460720782",
    __self: undefined
  }, "p.jsx-2460720782{font-size:3vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWNvbmRldGh1b25nMzIxL0RvY3VtZW50cy93ZWItUGhvbmctS2hhbS93ZWItbmV4dC9jb21wb25lbnRzL1NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBQ2dCLGNBQUMiLCJmaWxlIjoiL1VzZXJzL2JlY29uZGV0aHVvbmczMjEvRG9jdW1lbnRzL3dlYi1QaG9uZy1LaGFtL3dlYi1uZXh0L2NvbXBvbmVudHMvU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlcnZpY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJEaWNoVnVcIiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYmdHcmVlbiB0ZXh0LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U2Fuc2F0aW9uIHB0LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JCbHVlXCI+ROG7ikNIIFbhu6QgVOG6oEkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcldoaXRlXCI+UEjDkk5HIEtIw4FNPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD4gXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge1xuICAgICAgICAgICAgICAgICAgICBgcCB7Zm9udC1zaXplOiAzdnd9YFxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXh0LWNlbnRlciBweC0zIHB0LTMgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVjayBmb250U2l6ZTF2d1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlclJvdW5kIGJvcmRlckJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIi4uL3N0YXRpYy9hc3NldHMvdGVtcGxhdGUvaW1hZ2VzL2hpbmgtMS5wbmdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjYXJkLWJvZHktRGljaFZ1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRleHQgY29sb3JCbHVlIGZvbnRTaXplMS01dncgZm9udFJvYm9Cb2xkXCI+VknDik0gTcWoSS1YT0FORzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXJSb3VuZCBib3JkZXJCbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9XCIuLi9zdGF0aWMvYXNzZXRzL3RlbXBsYXRlL2ltYWdlcy9oaW5oLTIucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2FyZC1ib2R5LURpY2hWdVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGNvbG9yQmx1ZSBmb250U2l6ZTEtNXZ3IGZvbnRSb2JvQm9sZFwiPlZJw4pNIFRBSSBHSeG7rkE8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyUm91bmQgYm9yZGVyQmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi4vc3RhdGljL2Fzc2V0cy90ZW1wbGF0ZS9pbWFnZXMvaGluaC0zLnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1EaWNoVnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBjb2xvckJsdWUgZm9udFNpemUxLTV2dyBmb250Um9ib0JvbGRcIj5WScOKTSBI4buMTkc8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyUm91bmQgYm9yZGVyQmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi4vc3RhdGljL2Fzc2V0cy90ZW1wbGF0ZS9pbWFnZXMvaGluaC00LnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1EaWNoVnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBjb2xvckJsdWUgZm9udFNpemUxLTV2dyBmb250Um9ib0JvbGRcIj5WScOKTSBUSEFOSCBRVeG6ok48YnIvPktIw4BOIFRJ4bq+Tkc8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyUm91bmQgYm9yZGVyQmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiLi4vc3RhdGljL2Fzc2V0cy90ZW1wbGF0ZS9pbWFnZXMvaGluaC01LnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNhcmQtYm9keS1EaWNoVnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBjb2xvckJsdWUgZm9udFNpemUxLTV2dyBmb250Um9ib0JvbGRcIj5WScOKTSBQSOG6viBRVeG6ok48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcbiJdfQ== */\n/*@ sourceURL=/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/Service.js */"), __jsx("div", {
    className: "jsx-2460720782" + " " + "container-fluid text-center px-3 pt-3 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2460720782" + " " + "card-deck fontSize1vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2460720782" + " " + "card borderRound borderBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/hinh-1.png",
    alt: "Card image cap",
    className: "jsx-2460720782" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2460720782" + " " + "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h5", {
    className: "jsx-2460720782" + " " + "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "VI\xCAM M\u0168I-XOANG"))), __jsx("div", {
    className: "jsx-2460720782" + " " + "card borderRound borderBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/hinh-2.png",
    alt: "Card image cap",
    className: "jsx-2460720782" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2460720782" + " " + "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("h5", {
    className: "jsx-2460720782" + " " + "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "VI\xCAM TAI GI\u1EEEA"))), __jsx("div", {
    className: "jsx-2460720782" + " " + "card borderRound borderBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/hinh-3.png",
    alt: "Card image cap",
    className: "jsx-2460720782" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2460720782" + " " + "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("h5", {
    className: "jsx-2460720782" + " " + "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "VI\xCAM H\u1ECCNG"))), __jsx("div", {
    className: "jsx-2460720782" + " " + "card borderRound borderBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/hinh-4.png",
    alt: "Card image cap",
    className: "jsx-2460720782" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2460720782" + " " + "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("h5", {
    className: "jsx-2460720782" + " " + "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "VI\xCAM THANH QU\u1EA2N", __jsx("br", {
    className: "jsx-2460720782",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), "KH\xC0N TI\u1EBENG"))), __jsx("div", {
    className: "jsx-2460720782" + " " + "card borderRound borderBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("img", {
    src: "../static/assets/template/images/hinh-5.png",
    alt: "Card image cap",
    className: "jsx-2460720782" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2460720782" + " " + "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("h5", {
    className: "jsx-2460720782" + " " + "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "VI\xCAM PH\u1EBE QU\u1EA2N")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/doctorTeam.js":
/*!**********************************!*\
  !*** ./components/doctorTeam.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/doctorTeam.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DoctorTeam = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    id: "BacSiTeam",
    className: "container-fluid text-center p-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("p", {
    className: "fontSansation pt-5 fontSize3vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("span", {
    className: "colorBlue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "\u0110\u1ED8I NG\u0168 "), __jsx("span", {
    className: "colorGreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "B\xC1C S\u0128")), __jsx("div", {
    id: "accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "container-fluid text-center px-3 pt-3 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-deck fontSize1vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    "data-toggle": "collapse",
    href: `#collapse1`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/bsiDao.jpg",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "PGS.TS.BS", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), "PH\u1EA0M TH\u1ECA B\xCDCH \u0110\xC0O")))), __jsx("div", {
    id: "collapse1",
    className: "panel-collapse collapse",
    "data-parent": "#accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("p", {
    className: "card-title fontRoboBold fontSize1-5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "H\u01A1n 20 n\u0103m kinh nghi\u1EC7m"), __jsx("div", {
    className: "card-text fontRoboLight colorGrey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "1996 N\u1ED9i tr\xFA B\u1EC7nh vi\u1EC7n - chuy\xEAn ng\xE0nh Tai M\u0169i H\u1ECDng"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "2011 Ti\u1EBFn s\u0129 chuy\xEAn ng\xE0nh Tai M\u0169i H\u1ECDng"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "2018 \u0110\u01B0\u1EE3c phong h\xE0n Ph\xF3 Gi\xE1o S\u01B0 y h\u1ECDc"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "1999 - nay, Gi\u1EA3ng vi\xEAn b\u1ED9 m\xF4n TMH tr\u01B0\u1EDDng \u0111\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i - B\xE1c s\u0129 kh\xE1m v\xE0 \u0111i\u1EC7 tr\u1ECB t\u1EA1i b\u1EC7nh vi\u1EC7n \u0111\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"))))), __jsx("a", {
    "data-toggle": "collapse",
    href: `#collapse2`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/bsiDao.jpg",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "VI\xCAM M\u0168I-XOANG")))), __jsx("div", {
    id: "collapse2",
    className: "card-collapse collapse",
    "data-parent": "#accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("h5", {
    className: "fontRoboLight colorGrey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))), __jsx("a", {
    "data-toggle": "collapse",
    href: `#collapse3`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/bsiDao.jpg",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "VI\xCAM M\u0168I-XOANG")))), __jsx("div", {
    id: "collapse3",
    className: "card-collapse collapse",
    "data-parent": "#accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("h5", {
    className: "fontRoboLight colorGrey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))), __jsx("a", {
    "data-toggle": "collapse",
    href: `#collapse4`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/bsiDao.jpg",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "VI\xCAM M\u0168I-XOANG")))), __jsx("div", {
    id: "collapse4",
    className: "card-collapse collapse",
    "data-parent": "#accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("h5", {
    className: "fontRoboLight colorGrey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DoctorTeam);

/***/ }),

/***/ "./components/test.js":
/*!****************************!*\
  !*** ./components/test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/components/test.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Test = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    id: "tintuc",
    className: "container-fluid text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("h3", {
    className: "fontSansation colorDarkBlue fontSize3vw pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "TIN T\u1EE8C - B\xC0I VI\u1EBET"), __jsx("div", {
    id: "tintucCarousel",
    className: "carousel slide p-5",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "carousel-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-deck fontSize1vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/t1.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(Link, {
    href: "/post",
    as: `/post/${props.title}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    title: "test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "V\u1EAFc xin ph\xF2ng b\u1EC7nh"))))))), __jsx("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-deck fontSize1vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/t1.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(Link, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Virus - Vi khu\u1EA9n"))))))), __jsx("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-deck fontSize1vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("img", {
    className: "card-img-top",
    src: "../static/assets/template/images/t1.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(Link, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body card-body-DichVu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("h5", {
    className: "card-text colorBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Thanh qu\u1EA3n - Gi\u1ECDng n\xF3i")))))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#tintucCarousel",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#tintucCarousel",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Next")))), props.posts.map(post => {
    __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, post);
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Reason__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Reason */ "./components/Reason.js");
/* harmony import */ var _components_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Service */ "./components/Service.js");
/* harmony import */ var _components_doctorTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/doctorTeam */ "./components/doctorTeam.js");
/* harmony import */ var _components_FormReview_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FormReview.js */ "./components/FormReview.js");
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/News */ "./components/News.js");
/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/test */ "./components/test.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(_components_Reason__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx(_components_Service__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx(_components_doctorTeam__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx(_components_FormReview_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(_components_News__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}));

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data.map(entry => entry.show)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/topic.json":
/*!***************************!*\
  !*** ./static/topic.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"VẮC XIN PHÒNG BỆNH\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":2,\"name\":\"THUỐC - KHÁNG SINH\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":3,\"name\":\"Covid-19 TIN TỨC\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":4,\"name\":\"VIRUS - VI KHUẨN\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuan\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":5,\"name\":\"CÁC BỆNH VỀ HÔ HẤP\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":6,\"name\":\"UNG THƯ\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":7,\"name\":\"THANH QUẢN - GIỌNG NÓI\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":8,\"name\":\"CÚM\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":9,\"name\":\"TỎNG HỢP\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"}]");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map