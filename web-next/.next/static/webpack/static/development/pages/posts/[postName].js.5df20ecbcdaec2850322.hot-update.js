webpackHotUpdate("static/development/pages/posts/[postName].js",{

/***/ "./pages/posts/[postName].js":
/*!***********************************!*\
  !*** ./pages/posts/[postName].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _static_topic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/topic.json */ "./static/topic.json");
var _static_topic_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/topic.json */ "./static/topic.json", 1);
/* harmony import */ var _static_postContent_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/postContent.json */ "./static/postContent.json");
var _static_postContent_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/postContent.json */ "./static/postContent.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/posts/[postName].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import { useRouter } from 'next/router'





var Post = function Post(props) {
  var otherTopics = _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (post) {
    return post.postName != props.postName;
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.postName), otherTopics.map(function (topic) {
    __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, topic.postName);
  })));
};

Post.getInitialProps = function (_ref) {
  var query = _ref.query;
  return {
    postName: query.postName
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[postName].js.5df20ecbcdaec2850322.hot-update.js.map