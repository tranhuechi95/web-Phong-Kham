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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_topic_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/topic.json */ "./static/topic.json");
var _static_topic_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/topic.json */ "./static/topic.json", 1);
/* harmony import */ var _static_postContent_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/postContent.json */ "./static/postContent.json");
var _static_postContent_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/postContent.json */ "./static/postContent.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/posts/[postName].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var OtherTopics = function OtherTopics(props) {
  var otherTopics = props.posts.filter(function (post) {
    return post.postName != props.currPostName;
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, otherTopics.map(function (topic) {
    return __jsx("div", {
      className: "timelineContainer pt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/posts/[postName]",
      as: "/posts/".concat(topic.postName),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      className: "img-fluid",
      src: "../../static/assets/template/images/t1-sm.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("p", {
      className: "textBelow colorWhite fontSize1vw",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, topic.name))));
  }));
};

var MaintopicArticle = function MaintopicArticle(props) {
  // filter out all the articles that belong to other topics
  var currTopicPost = props.postContent.filter(function (article) {
    return article.postName == props.currPostName;
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    "class": "img-fluid borderRect",
    src: "../images/baivietMoi.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    "class": "colorDarkBlue fontRoboBold fontSize1-5vw pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "BI\u1EBEN CH\u1EE8NG C\u1EE6A VI\xCAM \u0110\u01AF\u1EDCNG H\xD4 H\u1EA4P TR\xCAN")), __jsx("p", {
    "class": "fontRoboLight fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Vi\xEAm \u0111\u01B0\u1EDDng h\xF4 h\u1EA5p tr\xEAn l\xE0 g\xEC? Vi\xEAm h\u1EC7 th\u1ED1ng ni\xEAm m\u1EA1c c\u1EE7a M\u0168I \u2013 XOANG \u2013 H\u1ECCNG V\xC0 THANH QU\u1EA2N. L\xE0 c\u01A1 quan ti\u1EBFp x\xFAc tr\u1EF1c ti\u1EBFp v\u1EDBi kh\xF4ng kh\xED n\xEAn m\u1ECDi \u0111i\u1EC1u ki\u1EC7n b\u1EA5t l\u1EE3i c\u1EE7a m\xF4i tr\u01B0\u1EDDng nh\u01B0 b\u1EE5i, n\xF3ng, l\u1EA1nh, h\u01A1i \u0111\u1ED9c, virus, vi khu\u1EA9n,..")));
};

var Post = function Post() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var currPostName = router.query.postName;
  var currName = _static_topic_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (post) {
    return post.postName == currPostName;
  }); // how do I get the name of this post name?

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h3", {
    className: "colorDarkBlue fontSansation fontSize1-5vw pl-5 ml-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, currName.name), __jsx("div", {
    className: "container-fluid m-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("div", {
    className: "col-md-6 py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    "class": "img-fluid borderRect",
    src: "../images/baivietMoi.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h3", {
    "class": "colorDarkBlue fontRoboBold fontSize1-5vw pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "BI\u1EBEN CH\u1EE8NG C\u1EE6A VI\xCAM \u0110\u01AF\u1EDCNG H\xD4 H\u1EA4P TR\xCAN")), __jsx("p", {
    "class": "fontRoboLight fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Vi\xEAm \u0111\u01B0\u1EDDng h\xF4 h\u1EA5p tr\xEAn l\xE0 g\xEC? Vi\xEAm h\u1EC7 th\u1ED1ng ni\xEAm m\u1EA1c c\u1EE7a M\u0168I \u2013 XOANG \u2013 H\u1ECCNG V\xC0 THANH QU\u1EA2N. L\xE0 c\u01A1 quan ti\u1EBFp x\xFAc tr\u1EF1c ti\u1EBFp v\u1EDBi kh\xF4ng kh\xED n\xEAn m\u1ECDi \u0111i\u1EC1u ki\u1EC7n b\u1EA5t l\u1EE3i c\u1EE7a m\xF4i tr\u01B0\u1EDDng nh\u01B0 b\u1EE5i, n\xF3ng, l\u1EA1nh, h\u01A1i \u0111\u1ED9c, virus, vi khu\u1EA9n,..")), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("div", {
    "class": "row pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    "class": "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("img", {
    "class": "img-fluid",
    src: "../images/t1-sm.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    "class": "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("h4", {
    "class": "colorDarkBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "CH\xD3NG M\u1EB6T KHI MANG THAI")), __jsx("p", {
    "class": "fontSize1-2vw fontRoboLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Ch\xF3ng m\u1EB7t ho\u1EB7c c\u1EA3m th\u1EA5y ng\u1EA5t x\u1EC9u l\xE0 m\u1ED9t tri\u1EC7u ch\u1EE9ng b\xECnh th\u01B0\u1EDDng khi mang thai...")))), __jsx("div", {
    className: "col-md-4 vl colScroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "timelineContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("h3", {
    className: "fontSize1-5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "C\xC1C CH\u1EE6 \u0110\u1EC0 B\xC0I VI\u1EBET")), __jsx(OtherTopics, {
    posts: _static_topic_json__WEBPACK_IMPORTED_MODULE_3__,
    currPostName: currPostName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[postName].js.7d828b154bcaf7eebae9.hot-update.js.map