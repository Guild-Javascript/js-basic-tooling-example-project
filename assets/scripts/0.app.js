(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n    }\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? 'afterbegin' : 'beforeend',\n      this.element\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL0NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50LmpzP2VmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0RWxlbWVudElkLCBpbnNlcnRCZWZvcmUgPSBmYWxzZSkge1xuICAgIGlmIChob3N0RWxlbWVudElkKSB7XG4gICAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICB0aGlzLmluc2VydEJlZm9yZSA9IGluc2VydEJlZm9yZTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgdGhpcy5pbnNlcnRCZWZvcmUgPyAnYWZ0ZXJiZWdpbicgOiAnYmVmb3JlZW5kJyxcbiAgICAgIHRoaXMuZWxlbWVudFxuICAgICk7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/Component.js\n");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement('div');\n    tooltipElement.className = 'card';\n    const tooltipTemplate = document.getElementById('tooltip');\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector('p').textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n    tooltipElement.style.position = 'absolute';\n    tooltipElement.style.left = x + 'px'; // 500px\n    tooltipElement.style.top = y + 'px';\n\n    tooltipElement.addEventListener('click', this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Rvb2x0aXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Rvb2x0aXAuanM/ZDNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ21wIGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDbXAge1xuICBjb25zdHJ1Y3RvcihjbG9zZU5vdGlmaWVyRnVuY3Rpb24sIHRleHQsIGhvc3RFbGVtZW50SWQpIHtcbiAgICBzdXBlcihob3N0RWxlbWVudElkKTtcbiAgICB0aGlzLmNsb3NlTm90aWZpZXIgPSBjbG9zZU5vdGlmaWVyRnVuY3Rpb247XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICB0aGlzLmNsb3NlTm90aWZpZXIoKTtcbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b29sdGlwRWxlbWVudC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgY29uc3QgdG9vbHRpcFRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2x0aXAnKTtcbiAgICBjb25zdCB0b29sdGlwQm9keSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9vbHRpcFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIHRvb2x0aXBCb2R5LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCA9IHRoaXMudGV4dDtcbiAgICB0b29sdGlwRWxlbWVudC5hcHBlbmQodG9vbHRpcEJvZHkpO1xuXG4gICAgY29uc3QgaG9zdEVsUG9zTGVmdCA9IHRoaXMuaG9zdEVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBob3N0RWxQb3NUb3AgPSB0aGlzLmhvc3RFbGVtZW50Lm9mZnNldFRvcDtcbiAgICBjb25zdCBob3N0RWxIZWlnaHQgPSB0aGlzLmhvc3RFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50U2Nyb2xsaW5nID0gdGhpcy5ob3N0RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IHggPSBob3N0RWxQb3NMZWZ0ICsgMjA7XG4gICAgY29uc3QgeSA9IGhvc3RFbFBvc1RvcCArIGhvc3RFbEhlaWdodCAtIHBhcmVudEVsZW1lbnRTY3JvbGxpbmcgLSAxMDtcblxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArICdweCc7IC8vIDUwMHB4XG4gICAgdG9vbHRpcEVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XG5cbiAgICB0b29sdGlwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VUb29sdGlwKTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0b29sdGlwRWxlbWVudDtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/Tooltip.js\n");

/***/ })

}]);