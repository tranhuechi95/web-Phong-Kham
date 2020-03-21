webpackHotUpdate("static/development/pages/postContent/[article].js",{

/***/ "./pages/postContent/[article].js":
/*!****************************************!*\
  !*** ./pages/postContent/[article].js ***!
  \****************************************/
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
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/postContent/[article].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var OtherTopics = function OtherTopics(props) {
  // filter from posts to get all the postName that is not the same as our current article's postName
  var otherTopics = _static_topic_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (post) {
    return post.postName != props.currArticle.postName;
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
      key: topic.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      src: "../../static/assets/template/images/".concat(topic.image),
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

var CurrArticleContent = function CurrArticleContent(props) {
  var relatedArticles = props.relatedArticles;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h3", {
    className: "colorDarkBlue fontRoboBold fontSize1-5vw pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.currArticle.name), __jsx("img", {
    className: "img-fluid borderRect",
    src: "../../static/assets/template/images/".concat(props.currArticle.image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("p", {
    className: "fontRoboLight fontSize1-2vw text-justify",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, props.currArticle.content), __jsx("p", {
    className: "fontRoboBold fontSize1vw text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "PGS.TS.BS. Ph\u1EA1m Th\u1ECB B\xEDch \u0110\xE0o")), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("h3", {
    className: "fontSize1-5vw mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "C\xC1C B\xC0I VI\u1EBET LI\xCAN QUAN"), __jsx("div", {
    className: "container text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, relatedArticles.map(function (article) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("h4", {
      className: "colorDarkBlue fontSize1-2vw align-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, article.name)));
  })));
};

var PostContent = function PostContent(props) {
  // we have the web name here
  var currArticleWebName = props.currArticleWebName; //console.log(currArticleWebName)
  // we get the aritcle name to display here

  var currArticle = _static_postContent_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (post) {
    return post.articleName == currArticleWebName;
  });
  console.log(currArticle);
  var relatedArticles = _static_postContent_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (post) {
    return post.postName == currArticle[0].postName;
  }).filter(function (post) {
    return post.id != currArticle[0].id;
  });
  console.log(relatedArticles); //console.log(currTopic)
  // how do I get the name of this post name?

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h3", {
    className: "colorDarkBlue fontSansation fontSize1-5vw pl-5 ml-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Trang ch\xEDnh B\xC0I VI\u1EBET V\u1EC0 H\xD4 H\u1EA4P")), __jsx("div", {
    className: "container-fluid m-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("div", {
    className: "col-md-6 py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(CurrArticleContent, {
    currArticle: currArticle[0],
    relatedArticles: relatedArticles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-4 vl-short colScroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "timelineContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h3", {
    className: "fontSize1-5vw fontSansation pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "C\xC1C CH\u1EE6 \u0110\u1EC0 B\xC0I VI\u1EBET")), __jsx(OtherTopics, {
    currArticle: currArticle[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))));
};

PostContent.getInitialProps = function (_ref) {
  var query = _ref.query;
  return {
    currArticleWebName: query.article
  };
};

/* harmony default export */ __webpack_exports__["default"] = (PostContent);

/***/ })

})
//# sourceMappingURL=[article].js.a9da0c945f150fecad5c.hot-update.js.map