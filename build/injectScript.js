/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./injectScript.js ***!
  \*************************/
console.log("<----- Injected script started running ----->");

function parseEssentialDetails() {
  var main = {};
  main.performance = JSON.parse(JSON.stringify(window.performance)) || null;
  return main;
}

setInterval(function () {
  var essential = parseEssentialDetails();
  window.postMessage({
    type: "FROM_PAGE",
    essential: essential
  });
}, 500);
/******/ })()
;
//# sourceMappingURL=injectScript.js.map