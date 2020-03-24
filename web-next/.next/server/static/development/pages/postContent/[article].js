module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", evt => {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    });

    _defineProperty(this, "handleSubmit", evt => {
      evt.preventDefault();
      fetch('/DangKy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // chonDichVu, name, email, tel, ngaySinh, address, date, chonGioKham
        body: JSON.stringify({
          email: this.state.email
        })
      }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
    });

    this.state = {
      email: ''
    };
  }

  render() {
    return __jsx("div", null, __jsx("div", {
      className: "container-fluid p-5 bgPhotoEnd p-5"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-4"
    }, __jsx("h4", {
      className: "fontRoboBold fontSize1-5vw colorDarkBlue"
    }, "PH\xD2NG KH\xC1M CHUY\xCAN KHOA", __jsx("br", null), "TAI-M\u0168I-H\u1ECCNG"), __jsx("img", {
      className: "py-2 borderRound borderWhite",
      src: "../static/assets/template/images/logo.png",
      style: {
        width: "10vw"
      }
    }), __jsx("h5", {
      className: "fontRoboLight fontSize1-2vw pt-1"
    }, __jsx("i", {
      className: "fas fa-map-marker-alt pr-2"
    }), "S\u1ED1 29, Ng\xF5 41, Ph\u1ED1 V\u0169 Ng\u1ECDc Phan, Qu\u1EADn \u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i"), __jsx("h5", {
      className: "fontRoboLight fontSize1-2vw pt-1"
    }, __jsx("i", {
      className: "fas fa-phone pr-2"
    }), "0912.189.853"), __jsx("h5", {
      className: "fontRoboLight fontSize1-2vw pt-1"
    }, __jsx("i", {
      className: "fas fa-envelope pr-2"
    }), "pktiensiphamthibichdao@gmail.com")), __jsx("div", {
      className: "col-md-4"
    }, __jsx("h4", {
      className: "fontRoboBold fontSize1-5vw colorDarkBlue"
    }, "\u0110\u0102NG K\xDD NH\u1EACN TIN"), __jsx("h5", {
      className: "fontRoboLightItalic fontSize1vw px-2"
    }, "Li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 bi\u1EBFt th\xEAm chi ti\u1EBFt"), __jsx("form", {
      method: "POST",
      onSubmit: this.handleSubmit
    }, __jsx("div", {
      className: "form-row px-2"
    }, __jsx("div", {
      className: "form-group col-md-8"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      id: "email",
      placeholder: "Nh\u1EADp email c\u1EE7a b\u1EA1n",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange
    })), __jsx("div", {
      className: "form-group col-md-3"
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-Green colorDarkBlue"
    }, "\u0110\u0103ng k\xFD")))), __jsx("h4", {
      className: "fontRoboBold fontSize1-5vw colorDarkBlue pt-3"
    }, "TH\u1EDCI GIAN L\xC0M VI\u1EC6C"), __jsx("div", {
      className: "row py-2 px-2"
    }, __jsx("div", {
      className: "col-md-8 fontRoboLight fontSize1-2vw"
    }, "Th\u1EE9 Hai - Th\u1EE9 S\xE1u", __jsx("br", null), "Th\u1EE9 B\u1EA3y", __jsx("br", null), "Ch\u1EE7 Nh\u1EADt", __jsx("br", null), "Kh\xE1m t\u1EA1i nh\xE0 theo l\u1ECBch \u0111\u1EB7t tr\u01B0\u1EDBc"), __jsx("div", {
      className: "col-md-4 fontRoboLight fontSize1-2vw"
    }, "17:00-20:00", __jsx("br", null), "16:00-20:00", __jsx("br", null), "15:00-20:00"))), __jsx("div", {
      className: "col-md-4"
    }, __jsx("h4", {
      className: "fontRoboBold fontSize1-5vw colorDarkBlue"
    }, "FACEBOOK"), __jsx("a", {
      href: "https://tinyurl.com/phongkhambsiDao"
    }, __jsx("img", {
      className: "py-3",
      src: "../static/assets/template/images/fbPage.png"
    }))))), __jsx("div", {
      className: "container-fluid bgGreen text-center p-2"
    }, __jsx("p", {
      className: "fontSize1vw colorDarkBlue fontRoboReg pt-1"
    }, "B\u1EA3n quy\u1EC1n thu\u1ED9c PH\xD2NG KH\xC1M CHUY\xCAN KHOA TAI M\u0168I H\u1ECCNG. All rights reserved")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = ({
  children,
  title
}) => {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
    charset: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css",
    integrity: "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",
    crossorigin: "anonymous"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://formden.com/static/cdn/bootstrap-iso.css"
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
    crossorigin: "anonymous"
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossorigin: "anonymous"
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
    crossorigin: "anonymous"
  })), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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

/***/ "./pages/postContent/[article].js":
/*!****************************************!*\
  !*** ./pages/postContent/[article].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _static_topic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/topic.json */ "./static/topic.json");
var _static_topic_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/topic.json */ "./static/topic.json", 1);
/* harmony import */ var _static_postContent_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/postContent.json */ "./static/postContent.json");
var _static_postContent_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/postContent.json */ "./static/postContent.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const OtherTopics = props => {
  // filter from posts to get all the postName that is not the same as our current article's postName
  const otherTopics = _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.filter(post => post.postName != props.currArticle.postName);
  return __jsx("div", {
    className: "col-md-4 vl-short colScroll"
  }, __jsx("h3", {
    className: "fontSize1-5vw fontSansation pt-3 text-center"
  }, "C\xC1C CH\u1EE6 \u0110\u1EC0 B\xC0I VI\u1EBET KH\xC1C"), otherTopics.map(topic => __jsx("div", {
    className: "timelineContainer pt-5",
    key: topic.id
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts/[postName]",
    as: `/posts/${topic.postName}`
  }, __jsx("a", null, __jsx("img", {
    className: "img-fluid",
    src: `../../static/assets/template/images/${topic.image}`
  }), __jsx("p", {
    className: "textBelow colorWhite fontSize1vw"
  }, topic.name))))));
};

const CurrArticleContent = props => {
  const relatedArticles = props.relatedArticles.slice(0, 4);
  return __jsx("div", {
    className: "col-md-6 py-2"
  }, __jsx("div", null, __jsx("h3", {
    className: "colorDarkBlue fontRoboBold fontSize1-5vw pt-3"
  }, props.currArticle.name), __jsx("img", {
    className: "img-fluid borderRect",
    src: `../../static/assets/template/images/${props.currArticle.image}`
  }), __jsx("p", {
    className: "fontRoboLight fontSize1-2vw text-justify pt-4"
  }, props.currArticle.content), __jsx("p", {
    className: "fontRoboBold fontSize1vw text-right"
  }, "PGS.TS.BS. Ph\u1EA1m Th\u1ECB B\xEDch \u0110\xE0o")), __jsx("hr", null), __jsx("h3", {
    className: "fontSize1-5vw mt-5"
  }, "C\xC1C B\xC0I VI\u1EBET LI\xCAN QUAN"), __jsx("div", {
    className: "container text-left"
  }, relatedArticles.map(article => __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/postContent/[article]",
    as: `/postContent/${article.articleName}`,
    key: article.id
  }, __jsx("a", null, __jsx("h4", {
    className: "colorDarkBlue fontSize1-2vw align-left"
  }, article.name))))));
};

const PostContent = props => {
  // we have the web name here
  const currArticleWebName = props.currArticleWebName; //console.log(currArticleWebName)
  // we get the aritcle name to display here

  const currArticle = _static_postContent_json__WEBPACK_IMPORTED_MODULE_3__.filter(post => post.articleName == currArticleWebName); //console.log(currArticle)

  const currTopic = _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.filter(topic => topic.postName == currArticle[0].postName); //console.log(currTopic)

  const relatedArticles = _static_postContent_json__WEBPACK_IMPORTED_MODULE_3__.filter(post => post.postName == currArticle[0].postName).filter(post => post.id != currArticle[0].id); //console.log(relatedArticles)
  //console.log(currTopic)
  // how do I get the name of this post name?

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: currArticle[0].name
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts/[postName]",
    as: `/posts/${currTopic[0].postName}`
  }, __jsx("a", null, __jsx("h3", {
    className: "colorDarkBlue fontSansation fontSize1-5vw pl-5 ml-5 pt-3"
  }, "Trang ch\xEDnh ", currTopic[0].name))), __jsx("div", {
    className: "container-fluid m-3"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-1"
  }), __jsx(CurrArticleContent, {
    currArticle: currArticle[0],
    relatedArticles: relatedArticles
  }), __jsx(OtherTopics, {
    currArticle: currArticle[0]
  }))));
};

PostContent.getInitialProps = ({
  query
}) => {
  return {
    currArticleWebName: query.article
  };
};

/* harmony default export */ __webpack_exports__["default"] = (PostContent);

/***/ }),

/***/ "./static/postContent.json":
/*!*********************************!*\
  !*** ./static/postContent.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":10,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-10\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":11,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-11\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":12,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-12\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":13,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-13\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":14,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-14\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":15,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-15\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":20,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-20\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":21,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-21\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":22,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-22\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":23,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-23\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":24,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-24\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":25,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-25\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":30,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-30\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":31,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga-31\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":32,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga-32\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":33,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga-33\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":34,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga-34\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":35,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga-35\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":40,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"virus-vi-khuan\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-40\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":41,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuan\",\"articleName\":\"vi-sao-ta-khong-bi-nga-41\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":42,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuan\",\"articleName\":\"vi-sao-ta-khong-bi-nga-42\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":43,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuan\",\"articleName\":\"vi-sao-ta-khong-bi-nga-43\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":44,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuan\",\"articleName\":\"vi-sao-ta-khong-bi-nga-44\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":45,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuanh\",\"articleName\":\"vi-sao-ta-khong-bi-nga-45\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":50,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-50\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":51,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"articleName\":\"vi-sao-ta-khong-bi-nga-51\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":52,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"articleName\":\"vi-sao-ta-khong-bi-nga-52\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":53,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"articleName\":\"vi-sao-ta-khong-bi-nga-53\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":54,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"articleName\":\"vi-sao-ta-khong-bi-nga-54\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":55,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"articleName\":\"vi-sao-ta-khong-bi-nga-55\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":60,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"ung-thu\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-60\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":61,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"articleName\":\"vi-sao-ta-khong-bi-nga-61\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":62,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"articleName\":\"vi-sao-ta-khong-bi-nga-62\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":63,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"articleName\":\"vi-sao-ta-khong-bi-nga-63\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":64,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"articleName\":\"vi-sao-ta-khong-bi-nga-64\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":65,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"articleName\":\"vi-sao-ta-khong-bi-nga-65\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":70,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"thanh-quan-giong-noi\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-70\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":71,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"articleName\":\"vi-sao-ta-khong-bi-nga-71\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":72,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"articleName\":\"vi-sao-ta-khong-bi-nga-72\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":73,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"articleName\":\"vi-sao-ta-khong-bi-nga-73\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":74,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"articleName\":\"vi-sao-ta-khong-bi-nga-74\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":75,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"articleName\":\"vi-sao-ta-khong-bi-nga-75\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":80,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"cum\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-80\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":81,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"articleName\":\"vi-sao-ta-khong-bi-nga-81\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":82,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"articleName\":\"vi-sao-ta-khong-bi-nga-82\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":83,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"articleName\":\"vi-sao-ta-khong-bi-nga-83\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":84,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"articleName\":\"vi-sao-ta-khong-bi-nga-84\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":85,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"articleName\":\"vi-sao-ta-khong-bi-nga-85\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":90,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"baivietMoi.png\",\"postName\":\"tong-hop\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren-90\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":91,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"articleName\":\"vi-sao-ta-khong-bi-nga-91\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":92,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"articleName\":\"vi-sao-ta-khong-bi-nga-92\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":93,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"articleName\":\"vi-sao-ta-khong-bi-nga-93\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":94,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"articleName\":\"vi-sao-ta-khong-bi-nga-94\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":95,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"articleName\":\"vi-sao-ta-khong-bi-nga-95\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"}]");

/***/ }),

/***/ "./static/topic.json":
/*!***************************!*\
  !*** ./static/topic.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"VẮC XIN PHÒNG BỆNH\",\"image\":\"t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":2,\"name\":\"THUỐC - KHÁNG SINH\",\"image\":\"t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":3,\"name\":\"Covid-19\",\"image\":\"t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":4,\"name\":\"VIRUS - VI KHUẨN\",\"image\":\"t1-sm.png\",\"postName\":\"virus-vi-khuan\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":5,\"name\":\"CÁC BỆNH VỀ HÔ HẤP\",\"image\":\"t1-sm.png\",\"postName\":\"cac-benh-ve-ho-hap\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":6,\"name\":\"UNG THƯ\",\"image\":\"t1-sm.png\",\"postName\":\"ung-thu\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":7,\"name\":\"THANH QUẢN - GIỌNG NÓI\",\"image\":\"t1-sm.png\",\"postName\":\"thanh-quan-giong-noi\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":8,\"name\":\"CÚM\",\"image\":\"t1-sm.png\",\"postName\":\"cum\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{\"id\":9,\"name\":\"TỎNG HỢP\",\"image\":\"t1-sm.png\",\"postName\":\"tong-hop\",\"body\":\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"}]");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!**********************************************!*\
  !*** multi ./pages/postContent/[article].js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/postContent/[article].js */"./pages/postContent/[article].js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[article].js.map