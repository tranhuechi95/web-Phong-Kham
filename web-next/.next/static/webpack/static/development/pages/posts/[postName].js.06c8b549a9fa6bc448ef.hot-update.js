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

var Maintopic = function Maintopic(props) {
  var currTopicPost = props.post;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
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
      lineNumber: 42
    },
    __self: this
  }, __jsx("h3", {
    className: "colorDarkBlue fontSansation fontSize1-5vw pl-5 ml-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, currName.name), __jsx("div", {
    className: "container-fluid m-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "col-md-6 py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    "class": "img-fluid borderRect",
    src: "../images/baivietMoi.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h3", {
    "class": "colorDarkBlue fontRoboBold fontSize1-5vw pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "BI\u1EBEN CH\u1EE8NG C\u1EE6A VI\xCAM \u0110\u01AF\u1EDCNG H\xD4 H\u1EA4P TR\xCAN")), __jsx("p", {
    "class": "fontRoboLight fontSize1-2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Vi\xEAm \u0111\u01B0\u1EDDng h\xF4 h\u1EA5p tr\xEAn l\xE0 g\xEC? Vi\xEAm h\u1EC7 th\u1ED1ng ni\xEAm m\u1EA1c c\u1EE7a M\u0168I \u2013 XOANG \u2013 H\u1ECCNG V\xC0 THANH QU\u1EA2N. L\xE0 c\u01A1 quan ti\u1EBFp x\xFAc tr\u1EF1c ti\u1EBFp v\u1EDBi kh\xF4ng kh\xED n\xEAn m\u1ECDi \u0111i\u1EC1u ki\u1EC7n b\u1EA5t l\u1EE3i c\u1EE7a m\xF4i tr\u01B0\u1EDDng nh\u01B0 b\u1EE5i, n\xF3ng, l\u1EA1nh, h\u01A1i \u0111\u1ED9c, virus, vi khu\u1EA9n,..")), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("div", {
    "class": "row pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    "class": "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    "class": "img-fluid",
    src: "../images/t1-sm.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("div", {
    "class": "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h4", {
    "class": "colorDarkBlue fontSize1-5vw fontRoboBold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "CH\xD3NG M\u1EB6T KHI MANG THAI")), __jsx("p", {
    "class": "fontSize1-2vw fontRoboLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Ch\xF3ng m\u1EB7t ho\u1EB7c c\u1EA3m th\u1EA5y ng\u1EA5t x\u1EC9u l\xE0 m\u1ED9t tri\u1EC7u ch\u1EE9ng b\xECnh th\u01B0\u1EDDng khi mang thai...")))), __jsx("div", {
    className: "col-md-4 vl colScroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "timelineContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h3", {
    className: "fontSize1-5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "C\xC1C CH\u1EE6 \u0110\u1EC0 B\xC0I VI\u1EBET")), __jsx(OtherTopics, {
    posts: _static_topic_json__WEBPACK_IMPORTED_MODULE_3__,
    currPostName: currPostName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./static/postContent.json":
/*!*********************************!*\
  !*** ./static/postContent.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":10,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"./assets/template/images/baivietMoi.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":11,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":12,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":13,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":14,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":15,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"vac-xin-phong-benh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":20,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":21,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":22,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":23,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":24,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":25,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"thuoc-khang-sinh\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":30,\"name\":\"BIẾN CHỨNG CỦA VIÊM ĐƯỜNG HÔ HẤP TRÊN\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"bien-chung-cua-viem-duong-ho-hap-tren\",\"excerpt\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. \",\"content\":\"Viêm đường hô hấp trên là gì?\\nViêm hệ thống niêm mạc của MŨI – XOANG – HỌNG VÀ THANH QUẢN.\\nLà cơ quan tiếp xúc trực tiếp với không khí nên mọi điều kiện bất lợi của môi trường như bụi, nóng, lạnh, hơi độc, virus, vi khuẩn,.. đường hô hấp trên đều bị tác động. Bởi vậy nguy cơ mắc bệnh viêm đường hô hấp trên chiếm tỷ lệ cao hơn so với các bệnh về hô hấp khác.\\nViêm đường hô hấp trên là chứng bệnh thường gặp hàng năm, dễ mắc và tái diễn nhiều lần, thường xuất hiện theo mùa, nhất là vào mùa khô hanh và mùa đông. Đối tượng dễ mắc bệnh nhất là trẻ em, người mẫn cảm với viêm đường hô hấp trên như người bị suy tủy, bạch cầu, suy giảm hệ miễn dịch sau ghép tạng, người nhiễm HIV,...\\nTrung bình 1 năm người trưởng thành có thể bị viêm đường hô hấp trên từ 2 - 4 lần, con số này cao hơn rất nhiều với trẻ em. Theo thống kế của Bộ Y tế nước ta, mỗi năm trẻ em có thể mắc phải bệnh này khoảng 10 lần.\\nViêm đường hô hấp trên có nguy hiểm không?\\nBản thân bệnh viêm đường hô hấp trên không quá nguy hiểm và có khả năng chữa dứt điểm. Tuy nhiên do thái độ chủ quan của người bệnh, tự điều trị tại nhà không theo chỉ định của bác sĩ gây nên các biến chứng nguy hiểm.\\nViêm đường hô hấp trên có: viêm MŨI, viêm XOANG và viêm HỌNG, THANH QUẢN. Một số tác giả còn coi VIÊM TAI GIỮA cũng là viêm đường hô hấp trên.\\nCác biến chứng nặng nhẹ sẽ tùy theo mức độ bệnh.\\n- Tăng mức độ trầm trọng và biến chứng của các cơn “ngừng thở khi ngủ”.\\n- Rối loạn giấc ngủ\\n- Biến chứng mắt: thị lực giảm, nhiễm trùng ổ mắt, viêm não, tắc mạch xoang hang,...\\n- Áp xe thành sau họng, viêm phổi, viêm hạch bạch huyết, nhiễm trùng huyết...\\n- Biến chứng toàn thân: thấp tim, thấp khớp cấp, viêm cầu thận cấp...\\nViêm đường hô hấp trên uống thuốc gì?\\n- Việc điều trị là do bác sĩ khám, xác định nguyên nhân và khi đó mới có phương pháp điều trị chính xác.\\n- Một số biện pháp hỗ trợ điều trị tại nhà hoặc phòng tránh bằng súc họng thường xuyên tại nhà. Một trong những sản phẩm sử dụng súc họng là SMC AG+\"},{\"id\":31,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":32,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":33,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":34,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"},{\"id\":35,\"name\":\"VÌ SAO TA KHÔNG BỊ NGÃ???\",\"image\":\"./assets/template/images/t1-sm.png\",\"postName\":\"covid-19-tin-tuc\",\"articleName\":\"vi-sao-ta-khong-bi-nga\",\"excerpt\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, ...\",\"content\":\"Bạn có bao giờ băn khoăn rằng tại sao chúng ta lại có thể giữ thăng bằng và định hướng trong không gian? Vì sao con người có thể thực hiện những động tác từ đơn giản như đi, chạy, nhảy, cho đến những động tác phức tạp như các vận động viên thể dục dụng cụ mà không bị ngã?\\nĐó là nhờ vào cơ quan tiền đình nằm trong tai của bạn đấy!\\nHệ tiền đình là một hệ thống cảm giác cung cấp những thông tin về chuyển động, tư thế của đầu, và định hướng trong không gian cho não bộ. Bên cạnh đó, nó cũng liên quan đến các chức năng vận động, cho phép chúng ta có thể giữ thăng bẳng, ổn định tư thế của đầu và cơ thể khi chuyển động cũng như duy trì một tư thế cụ thể nào đó.\\nSở dĩ, hệ tiền đình làm được điều này là bởi nó sở hữu cấu trúc gồm 3 ống bán khuyên (trước, sau và ngang) có chứa nội dịch và các tế bào lông bên trong, được sắp xếp theo ba mặt phẳng gần như vuông góc với nhau. Điều này cho phép hệ tiền đình có thể phát hiện ra tất cả các cử động của đầu (như cúi/ngửa đầu, nghiêng đầu sang trái/phải, hoặc xoay đầu sang trái/phải) trong các mặt phẳng tương ứng.\\n Khi đầu chuyển động, nội dịch cũng chuyển động theo và gây ra các kích thích lên các tế bào lông. Các tế bào này khi được kích thích sẽ tạo ra xung động thần kinh dẫn về não giúp ta cảm nhận được sự thay đổi tư thế của đầu.\\nCũng khá đơn giản phải không nào.\\nBạn hãy xem video dưới đây để hiểu rõ hơn cơ chế hoạt động của cơ quan tiền đình nhé!\\nhttps://m.youtube.com/watch?v=YMIMvBa8XGs\"}]");

/***/ })

})
//# sourceMappingURL=[postName].js.06c8b549a9fa6bc448ef.hot-update.js.map