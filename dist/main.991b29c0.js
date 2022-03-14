// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"p+lA":[function(require,module,exports) {
module.exports = "github.e3df1ffe.png";
},{}],"jUjn":[function(require,module,exports) {
module.exports = "StackOverflow.04e2f111.png";
},{}],"Mrfu":[function(require,module,exports) {
module.exports = "Vue.2df79c2b.png";
},{}],"2BR8":[function(require,module,exports) {
module.exports = "React.ee4bac7f.png";
},{}],"VlhC":[function(require,module,exports) {
module.exports = "jquery.41cfd804.png";
},{}],"p1EG":[function(require,module,exports) {
module.exports = "node.c111a7ab.png";
},{}],"dFV5":[function(require,module,exports) {
module.exports = "Uniapp.65a5fc6f.png";
},{}],"sjCV":[function(require,module,exports) {
module.exports = "juejin.90e7d20d.png";
},{}],"969m":[function(require,module,exports) {
module.exports = "nowcoder.476f95ca.png";
},{}],"tcJP":[function(require,module,exports) {
module.exports = "Website.ff8d02ca.png";
},{}],"VR5k":[function(require,module,exports) {
module.exports = "close.5ab036c0.png";
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _github = require("./images/github.png");

var _github2 = _interopRequireDefault(_github);

var _StackOverflow = require("./images/StackOverflow.png");

var _StackOverflow2 = _interopRequireDefault(_StackOverflow);

var _Vue = require("./images/Vue.png");

var _Vue2 = _interopRequireDefault(_Vue);

var _React = require("./images/React.png");

var _React2 = _interopRequireDefault(_React);

var _jquery = require("./images/jquery.png");

var _jquery2 = _interopRequireDefault(_jquery);

var _node = require("./images/node.png");

var _node2 = _interopRequireDefault(_node);

var _Uniapp = require("./images/Uniapp.png");

var _Uniapp2 = _interopRequireDefault(_Uniapp);

var _juejin = require("./images/juejin.png");

var _juejin2 = _interopRequireDefault(_juejin);

var _nowcoder = require("./images/nowcoder.png");

var _nowcoder2 = _interopRequireDefault(_nowcoder);

var _Website = require("./images/Website.png");

var _Website2 = _interopRequireDefault(_Website);

var _close = require("./images/close.png");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $siteList = $(".siteList");
var $lastLi = $siteList.find("li.last");
var x = localStorage.getItem("x");
var xObject = JSON.parse(x); // 把字符串变成对象

// 用户第一次使用时，xObject为null，设置初始值；不是第一次使用就保存为xObject的值
var defaultEntries = [{ logo: _github2.default, url: "https://github.com/" }, { logo: _StackOverflow2.default, url: "https://stackoverflow.com/" }, { logo: _Vue2.default, url: "https://vuejs.org/index.html" }, { logo: _React2.default, url: "https://reactjs.org/" }, { logo: _jquery2.default, url: "https://jquery.com/" }, { logo: _node2.default, url: "https://nodejs.org/zh-cn/" }, { logo: _Uniapp2.default, url: "https://uniapp.dcloud.io/" }, { logo: _juejin2.default, url: "https://juejin.cn/" }, { logo: _nowcoder2.default, url: "https://nowcoder.com/" }];
var hashMap = xObject || defaultEntries;

var getSiteName = function getSiteName(url) {
  var siteName = url.replace("https://", "").replace("http://", "").replace("www.", "");
  return siteName.slice(0, siteName.indexOf("."));
};

var render = function render() {
  $siteList.find("li:not(.last)").remove();
  hashMap.forEach(function (node, index) {
    var $li = $("\n      <li>\n        <div class=\"site\">\n            <div class=\"logo\">\n              <img src=\"" + node.logo + "\" alt=\"\" />\n            </div>\n            <div class=\"text\">" + getSiteName(node.url) + "</div>\n            <div class=\"close\">\n              <img src=\"" + _close2.default + "\" alt=\"\" />\n            </div>\n        </div>\n      </li>").insertBefore($lastLi);

    // 不在li中用a标签跳转，因为点击关闭图标会冒泡，且用e.stopPropagation()无法取消冒泡，仍会跳转
    $li.on("click", function () {
      window.open(node.url);
    });

    $li.on("click", ".close", function (e) {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render(); // 重新加载
    });
  });
};

render(); // 把原先已经添加好的加载进来

$(".addButton").on("click", function () {
  var url = window.prompt("请输入您要添加的网址：");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  hashMap.push({
    // 新增网址
    logo: _Website2.default,
    url: url
  });

  render(); // 先删除原先已经加载的，重新加载所有标签，以及新增的标签
});

// 用户关闭页面（刷新）之前把hashMap存下来
window.onbeforeunload = function () {
  console.log("页面要关闭了");
  // localStorage只能存字符串，不能存对象
  var string = JSON.stringify(hashMap); // 把对象变成字符串
  localStorage.setItem("x", string); // 在本地存储里设置一个x，其值为string
  // localStorage.clear(); // 清楚新增标签
};
},{"./images/github.png":"p+lA","./images/StackOverflow.png":"jUjn","./images/Vue.png":"Mrfu","./images/React.png":"2BR8","./images/jquery.png":"VlhC","./images/node.png":"p1EG","./images/Uniapp.png":"dFV5","./images/juejin.png":"sjCV","./images/nowcoder.png":"969m","./images/Website.png":"tcJP","./images/close.png":"VR5k"}]},{},["epB2"], null)
//# sourceMappingURL=main.511d4abc.map