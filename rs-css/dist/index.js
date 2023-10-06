/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/editor/editor.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/editor/editor.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.editor {
  width: 50%;
}
.editor .editor__header {
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px 2px 0 0;
}
.editor .editor__workspace {
  position: relative;
  padding-right: 10px;
  background-color: #f0e3dd;
}
.editor .editor__workspace .workspace__line-list {
  background-color: #BDB2AE;
}
.editor .editor__wrapper {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
.editor .editor__entry-field {
  padding: 3px 10px;
  flex-grow: 1;
  border: none;
  background-color: #f0e3dd;
  font-family: "SourceCodePro-Light", PT Mono, monospace;
  font-size: 14px;
  font-weight: 300;
  line-height: 19px;
}
.editor .editor__entry-field:active, .editor .editor__entry-field:focus {
  border: none;
  outline: none;
  box-shadow: none;
}
.editor .editor__enter-btn {
  background-color: #dddddd;
  color: #999999;
  border: none;
  box-shadow: 0px 6px 0px 2px #999999;
  -webkit-box-shadow: 0px 6px 0px 2px #999999;
  -moz-box-shadow: 0px 6px 0px 2px #999999;
}
.editor .editor__enter-btn:hover {
  cursor: pointer;
}
@media screen and (max-width: 649px) {
  .editor {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/components/editor/editor.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,0BAAA;AAER;AAAI;EACI,kBAAA;EACA,mBAAA;EACA,yBAAA;AAER;AADQ;EACI,yBAAA;AAGZ;AAAI;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;AAER;AAAI;EACI,iBAAA;EACA,YAAA;EACA,YAAA;EACA,yBAAA;EAEI,sDAAA;EACA,eAAA;EACA,gBAAA;EAEJ,iBAAA;AAAR;AACQ;EACI,YAAA;EACA,aAAA;EACA,gBAAA;AACZ;AAEI;EACI,yBAAA;EACA,cAAA;EACA,YAAA;EACA,mCAAA;EACA,2CAAA;EACA,wCAAA;AAAR;AACQ;EACI,eAAA;AACZ;AAEI;EAnDJ;IAoDQ,WAAA;EACN;AACF","sourcesContent":[".editor {\r\n    width: 50%;\r\n    & .editor__header {\r\n        width: 100%;\r\n        padding: 10px 15px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        border-radius: 2px 2px 0 0;\r\n    }\r\n    & .editor__workspace {\r\n        position: relative;\r\n        padding-right: 10px;\r\n        background-color: #f0e3dd;\r\n        & .workspace__line-list {\r\n            background-color:  #BDB2AE;\r\n        }\r\n    }\r\n    & .editor__wrapper {\r\n        display: flex;\r\n        align-items: center;\r\n        column-gap: 15px;\r\n    }\r\n    & .editor__entry-field {\r\n        padding: 3px 10px;\r\n        flex-grow: 1;\r\n        border: none;\r\n        background-color: #f0e3dd;\r\n        font: {\r\n            family: \"SourceCodePro-Light\", PT Mono, monospace;\r\n            size: 14px;\r\n            weight: 300;\r\n        }\r\n        line-height: 19px;\r\n        &:active, &:focus {\r\n            border: none;\r\n            outline: none;\r\n            box-shadow: none;\r\n        }\r\n    }\r\n    & .editor__enter-btn {\r\n        background-color: #dddddd;\r\n        color: #999999;\r\n        border: none;\r\n        box-shadow: 0px 6px 0px 2px #999999;\r\n        -webkit-box-shadow: 0px 6px 0px 2px #999999;\r\n        -moz-box-shadow: 0px 6px 0px 2px #999999;\r\n        &:hover {\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    @media screen and (max-width: 649px) {\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/footer/footer.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/footer/footer.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  display: flex;
  padding: 16px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
}
.footer .footer__links-wrapper {
  display: flex;
  align-items: center;
  column-gap: 50px;
}
.footer .footer__link {
  width: 112px;
}
.footer .footer__link:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
}
.footer .footer__year {
  color: #f0e3dd;
}`, "",{"version":3,"sources":["webpack://./src/app/components/footer/footer.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AACJ;AAAI;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;AAER;AAAI;EACI,YAAA;AAER;AADQ;EACI,eAAA;EACA,YAAA;EACA,gCAAA;AAGZ;AAAI;EACI,cAAA;AAER","sourcesContent":[".footer {\r\n    display: flex;\r\n    padding: 16px 10px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    row-gap: 20px;\r\n    & .footer__links-wrapper {\r\n        display: flex;\r\n        align-items: center;\r\n        column-gap: 50px;\r\n    }\r\n    & .footer__link {\r\n        width: 112px;\r\n        &:hover {\r\n            cursor: pointer;\r\n            opacity: .7;\r\n            transition: opacity 0.2s ease-in;\r\n        }\r\n    }\r\n    & .footer__year {\r\n        color: #f0e3dd;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/gamefield/gamefield.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/gamefield/gamefield.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../img/cafe.jpg */ "./src/img/cafe.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.view {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
}
.view .view__title {
  margin-bottom: 20px;
  text-align: center;
}
.view .view__help-btn {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.3);
  padding: 8px 15px 10px 15px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  margin-bottom: 15px;
}
.view .view__help-btn:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
}
.view .view__gamefield {
  width: 100%;
  margin-top: auto;
}
.view .view__table {
  height: 10px;
  width: 100%;
  background-color: #f0e3dd;
}
.view .view__drinks-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  column-gap: 50px;
}
.view .view__drinks-wrapper * {
  flex-shrink: 0;
}
@media screen and (max-width: 1189px) {
  .view .view__gamefield {
    zoom: 0.8;
  }
}
@media screen and (max-width: 739px) {
  .view {
    min-height: 300px;
  }
  .view .view__gamefield {
    zoom: 0.6;
  }
}
@media screen and (max-width: 525px) {
  .view .view__gamefield {
    zoom: 0.5;
  }
}
@media screen and (max-width: 443px) {
  .view .view__gamefield {
    zoom: 0.45;
  }
}
@media screen and (max-width: 405px) and (min-width: 363px) {
  .view .view__gamefield {
    zoom: 0.4;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/components/gamefield/gamefield.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kHAAA;EACA,4BAAA;EACA,sBAAA;AACJ;AAAI;EACI,mBAAA;EACA,kBAAA;AAER;AAAI;EACI,oCAAA;EACA,+BAAA;EACA,2BAAA;EACA,YAAA;EACA,mBAAA;EAEI,eAAA;EAEJ,mBAAA;AAAR;AACQ;EACI,eAAA;EACA,YAAA;EACA,gCAAA;AACZ;AAEI;EACI,WAAA;EACA,gBAAA;AAAR;AAEI;EACI,YAAA;EACA,WAAA;EACA,yBAAA;AAAR;AAEI;EACI,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,gBAAA;AAAR;AACQ;EACI,cAAA;AACZ;AAEI;EACI;IACI,SAAA;EAAV;AACF;AAEI;EAnDJ;IAoDQ,iBAAA;EACN;EAAM;IACI,SAAA;EAEV;AACF;AAAI;EACI;IACI,SAAA;EAEV;AACF;AAAI;EACI;IACI,UAAA;EAEV;AACF;AAAI;EACI;IACI,SAAA;EAEV;AACF","sourcesContent":[".view {\r\n    min-height: 400px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"../../../img/cafe.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    & .view__title {\r\n        margin-bottom: 20px;\r\n        text-align: center;\r\n    }\r\n    & .view__help-btn {\r\n        background-color: rgba(0,0,0,.2);\r\n        color: rgba(255, 255, 255, 0.3);\r\n        padding: 8px 15px 10px 15px;\r\n        border: none;\r\n        border-radius: 20px;\r\n        font: {\r\n            size: 1rem;\r\n        }\r\n        margin-bottom: 15px;\r\n        &:hover {\r\n            cursor: pointer;\r\n            opacity: .7;\r\n            transition: opacity 0.2s ease-in;\r\n        }\r\n    }\r\n    & .view__gamefield {\r\n        width: 100%;\r\n        margin-top: auto;\r\n    }\r\n    & .view__table {\r\n        height: 10px;\r\n        width: 100%;\r\n        background-color: #f0e3dd;\r\n    }\r\n    & .view__drinks-wrapper {\r\n        display: flex;\r\n        align-items: flex-end;\r\n        justify-content: center;\r\n        column-gap: 50px;\r\n        & * {\r\n            flex-shrink: 0;\r\n        }\r\n    }\r\n    @media screen and (max-width: 1189px) {\r\n        & .view__gamefield {\r\n            zoom: 0.8;\r\n        }\r\n    }\r\n    @media screen and (max-width: 739px) {\r\n        min-height: 300px;\r\n        & .view__gamefield {\r\n            zoom: 0.6;\r\n        }\r\n    }\r\n    @media screen and (max-width: 525px) {\r\n        & .view__gamefield {\r\n            zoom: 0.5;\r\n        }\r\n    }\r\n    @media screen and (max-width: 443px) {\r\n        & .view__gamefield {\r\n            zoom: 0.45;\r\n        }\r\n    }\r\n    @media screen and (max-width: 405px) and (min-width: 363px) {\r\n        & .view__gamefield {\r\n            zoom: 0.4;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/header/header.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/header/header.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  padding: 16px 15px;
}
.header .header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .header__logo-wrapper {
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 49px;
}
.header .header__text-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #f0e3dd;
}
.header .header__large-text {
  font-family: "SourceCodePro-Regular", PT Mono, monospace;
  font-size: 32px;
  font-weight: 600;
}
.header .header__small-text {
  font-family: "SourceCodePro-Regular", PT Mono, monospace;
  font-size: 16px;
  font-weight: 400;
}
.header .header__burger-btn {
  position: relative;
  width: 30px;
  height: 22px;
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: all 0.3s ease-out;
  z-index: 3;
}
.header .header__burger-btn .header__btn-line {
  width: 100%;
  height: 2px;
  background-color: #ffffff;
}
.header .header__burger-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
}
.header .header__burger-btn::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
}
@media screen and (max-width: 1129px) {
  .header .header__burger-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/components/header/header.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;AAAI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AAER;AAAI;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAER;AAAI;EAEQ,wDAAA;EACA,eAAA;EACA,gBAAA;AACZ;AAEI;EAEQ,wDAAA;EACA,eAAA;EACA,gBAAA;AADZ;AAII;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,YAAA;EACA,UAAA;EACA,6BAAA;EACA,UAAA;AAFR;AAGQ;EACI,WAAA;EACA,WAAA;EACA,yBAAA;AADZ;AAGQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;AADZ;AAGQ;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;AADZ;AAII;EACI;IACI,aAAA;IACA,mBAAA;IACA,uBAAA;EAFV;AACF","sourcesContent":[".header {\r\n    padding: 16px 15px;\r\n    & .header__container {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n    }\r\n    & .header__logo-wrapper {\r\n        display: flex;\r\n        align-items: center;\r\n        column-gap: 12px;\r\n        width: 49px;\r\n    }\r\n    & .header__text-logo {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        color: #f0e3dd;\r\n    }\r\n    & .header__large-text {\r\n        font: {\r\n            family: \"SourceCodePro-Regular\", PT Mono, monospace;\r\n            size: 32px;\r\n            weight: 600;\r\n        }\r\n    }\r\n    & .header__small-text {\r\n        font: {\r\n            family: \"SourceCodePro-Regular\", PT Mono, monospace;\r\n            size: 16px;\r\n            weight: 400;\r\n        }\r\n    }\r\n    & .header__burger-btn {\r\n        position: relative;\r\n        width: 30px;\r\n        height: 22px;\r\n        display: none;\r\n        background-color: transparent;\r\n        border: none;\r\n        padding: 0;\r\n        transition: all 0.3s ease-out;\r\n        z-index: 3;\r\n        & .header__btn-line {\r\n            width: 100%;\r\n            height: 2px;\r\n            background-color: #ffffff;\r\n        }\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100%;\r\n            height: 2px;\r\n            background-color: #ffffff;\r\n        }\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            bottom: 0;\r\n            left: 0;\r\n            width: 100%;\r\n            height: 2px;\r\n            background-color: #ffffff;\r\n        }\r\n    }\r\n    @media screen and (max-width: 1129px) {\r\n        & .header__burger-btn {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/popup/popup.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/popup/popup.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../img/close.svg */ "./src/img/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.popup {
  width: 480px;
  height: 300px;
  padding: 20px;
  position: relative;
  background-color: #f0e3dd;
  animation: fadeIn 0.5s ease both;
}
.popup .popup__close-btn {
  width: 25px;
  height: 25px;
  position: absolute;
  top: -30px;
  right: -27px;
  background-color: transparent;
  border: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center center;
}
.popup .popup__close-btn:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease-in;
}
.popup .popup__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 42px;
}
.popup .popup__title {
  font-family: "Exo2", Lato, sans-serif;
  font-size: 39px;
  font-weight: 600;
  color: #352729;
  text-align: center;
}
.popup .popup__text {
  color: #352729;
}
.popup .popup__btn {
  width: 100%;
  background-color: transparent;
  border: solid 2px #352729;
  color: #352729;
  margin: 0 auto;
  padding: 9px 0 11px 0;
  font-family: "Exo2", Lato, sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
.popup .popup__btn:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
}
@media screen and (max-width: 559px) {
  .popup {
    width: 350px;
  }
}
@media screen and (max-width: 424px) {
  .popup {
    width: 230px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`, "",{"version":3,"sources":["webpack://./src/app/components/popup/popup.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,gCAAA;AACJ;AAAI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,6BAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,kCAAA;AAER;AADQ;EACI,eAAA;EACA,YAAA;EACA,gCAAA;AAGZ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;AAER;AAAI;EAEQ,qCAAA;EACA,eAAA;EACA,gBAAA;EAEJ,cAAA;EACA,kBAAA;AAAR;AAEI;EACI,cAAA;AAAR;AAEI;EACI,WAAA;EACA,6BAAA;EACA,yBAAA;EACA,cAAA;EACA,cAAA;EACA,qBAAA;EAEI,qCAAA;EACA,eAAA;EACA,gBAAA;AADZ;AAGQ;EACI,eAAA;EACA,YAAA;EACA,gCAAA;AADZ;AAII;EA5DJ;IA6DQ,YAAA;EADN;AACF;AAEI;EA/DJ;IAgEQ,YAAA;EACN;AACF;;AACA;EACI;IACI,UAAA;IACA,qBAAA;EAEN;EAAE;IACI,UAAA;IACA,mBAAA;EAEN;AACF","sourcesContent":[".popup {\r\n    width: 480px;\r\n    height: 300px;\r\n    padding: 20px;\r\n    position: relative;\r\n    background-color: #f0e3dd;\r\n    animation: fadeIn .5s ease both;\r\n    & .popup__close-btn {\r\n        width: 25px;\r\n        height: 25px;\r\n        position: absolute;\r\n        top: -30px;\r\n        right: -27px;\r\n        background-color: transparent;\r\n        border: none;\r\n        background-image: url('../../../img/close.svg');\r\n        background-repeat: no-repeat;\r\n        background-position: center center;\r\n        &:hover {\r\n            cursor: pointer;\r\n            opacity: .5;\r\n            transition: opacity 0.2s ease-in;\r\n        }\r\n    }\r\n    & .popup__wrapper {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        row-gap: 42px;\r\n    }\r\n    & .popup__title {\r\n        font: {\r\n            family: \"Exo2\", Lato, sans-serif;\r\n            size: 39px;\r\n            weight: 600;\r\n        }\r\n        color: #352729;\r\n        text-align: center;\r\n    }\r\n    & .popup__text {\r\n        color: #352729\r\n    }\r\n    & .popup__btn {\r\n        width: 100%;\r\n        background-color: transparent;\r\n        border: solid 2px #352729;\r\n        color: #352729;\r\n        margin: 0 auto;\r\n        padding: 9px 0 11px 0;\r\n        font: {\r\n            family: \"Exo2\", Lato, sans-serif;\r\n            size: 1rem;\r\n            weight: 400;\r\n        }\r\n        &:hover {\r\n            cursor: pointer;\r\n            opacity: .7;\r\n            transition: opacity 0.2s ease-in;\r\n        }\r\n    }\r\n    @media screen and (max-width: 559px) {\r\n        width: 350px;\r\n    }\r\n    @media screen and (max-width: 424px) {\r\n        width: 230px;\r\n    }\r\n}\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: scale(0.5);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../img/help.svg */ "./src/img/help.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../img/check.svg */ "./src/img/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.level {
  width: 20%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 20px;
}
.level .level__title {
  font-family: "Exo2", Lato, sans-serif;
  font-size: 25px;
  font-weight: 400;
  color: #777777;
}
.level .level__list {
  margin-bottom: 34px;
}
.level .level__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
}
.level .level__item:not(:last-child) {
  margin-bottom: 5px;
}
.level .level__item:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  transition: background-color 0.2s ease-in;
}
.level .level__item.active {
  background-color: rgba(255, 255, 255, 0.3);
}
.level .level__num {
  color: #f0e3dd;
}
.level .level__indicator {
  display: block;
  width: 18px;
  height: 18px;
}
.level .level__indicator.clue {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.level .level__indicator.correct {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.level .level__reset-btn {
  width: 100%;
  background-color: transparent;
  border: solid 2px #f0e3dd;
  color: #f0e3dd;
  margin: 0 auto;
  padding: 9px 0 11px 0;
  font-family: "Exo2", Lato, sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
.level .level__reset-btn:hover {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
}
@media screen and (max-width: 1129px) {
  .level {
    max-width: 375px;
    display: none;
  }
  .level.level--active {
    width: 375px;
    display: block;
    left: 0;
    background-color: rgb(0, 0, 0);
    z-index: 10;
  }
}
@media screen and (max-width: 432px) {
  .level {
    max-width: 85%;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/components/sidebar/sidebar.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,aAAA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,qCAAA;EACA,aAAA;AACJ;AAAI;EAEQ,qCAAA;EACA,eAAA;EACA,gBAAA;EAEJ,cAAA;AAAR;AAEI;EACI,mBAAA;AAAR;AAEI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;AAAR;AACQ;EACI,kBAAA;AACZ;AACQ;EACI,eAAA;EACA,0CAAA;EACA,yCAAA;AACZ;AACQ;EACI,0CAAA;AACZ;AAEI;EACI,cAAA;AAAR;AAEI;EACI,cAAA;EACA,WAAA;EACA,YAAA;AAAR;AACQ;EACI,yDAAA;EACA,4BAAA;EACA,kCAAA;EACA,sBAAA;AACZ;AACQ;EACI,yDAAA;EACA,4BAAA;EACA,kCAAA;EACA,sBAAA;AACZ;AAEI;EACI,WAAA;EACA,6BAAA;EACA,yBAAA;EACA,cAAA;EACA,cAAA;EACA,qBAAA;EAEI,qCAAA;EACA,eAAA;EACA,gBAAA;AADZ;AAGQ;EACI,eAAA;EACA,YAAA;EACA,gCAAA;AADZ;AAII;EA1EJ;IA2EQ,gBAAA;IACA,aAAA;EADN;EAEM;IACI,YAAA;IACA,cAAA;IACA,OAAA;IACA,8BAAA;IACA,WAAA;EAAV;AACF;AAEI;EArFJ;IAsFQ,cAAA;EACN;AACF","sourcesContent":[".level {\r\n    width: 20%;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.35);\r\n    padding: 20px;\r\n    & .level__title {\r\n        font: {\r\n            family: \"Exo2\", Lato, sans-serif;\r\n            size: 25px;\r\n            weight: 400;\r\n        }\r\n        color: #777777;\r\n    }\r\n    & .level__list {\r\n        margin-bottom: 34px;\r\n    }\r\n    & .level__item {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 8px 15px;\r\n        &:not(:last-child) {\r\n            margin-bottom: 5px;\r\n        }\r\n        &:hover {\r\n            cursor: pointer;\r\n            background-color: rgba(255, 255, 255, 0.3);\r\n            transition: background-color 0.2s ease-in;\r\n        }\r\n        &.active {\r\n            background-color: rgba(255, 255, 255, 0.3);\r\n        }\r\n    }\r\n    & .level__num {\r\n        color: #f0e3dd;\r\n    }\r\n    & .level__indicator {\r\n        display: block;\r\n        width: 18px;\r\n        height: 18px;\r\n        &.clue {\r\n            background-image: url(\"../../../img/help.svg\");\r\n            background-repeat: no-repeat;\r\n            background-position: center center;\r\n            background-size: cover;\r\n        }\r\n        &.correct {\r\n            background-image: url(\"../../../img/check.svg\");\r\n            background-repeat: no-repeat;\r\n            background-position: center center;\r\n            background-size: cover;\r\n        }\r\n    }\r\n    & .level__reset-btn {\r\n        width: 100%;\r\n        background-color: transparent;\r\n        border: solid 2px #f0e3dd;\r\n        color: #f0e3dd;\r\n        margin: 0 auto;\r\n        padding: 9px 0 11px 0;\r\n        font: {\r\n            family: \"Exo2\", Lato, sans-serif;\r\n            size: 1rem;\r\n            weight: 400;\r\n        }\r\n        &:hover {\r\n            cursor: pointer;\r\n            opacity: .7;\r\n            transition: opacity 0.2s ease-in;\r\n        }\r\n    }\r\n    @media screen and (max-width: 1129px) {\r\n        max-width: 375px;\r\n        display: none;\r\n        &.level--active {\r\n            width: 375px;\r\n            display: block;\r\n            left: 0;\r\n            background-color: rgba(0, 0, 0, 1);\r\n            z-index: 10;\r\n        }\r\n    }\r\n    @media screen and (max-width: 432px) {\r\n        max-width: 85%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/viewer/viewer.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/viewer/viewer.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.viewer {
  width: 50%;
}
.viewer .viewer__header {
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px 2px 0 0;
}
.viewer .viewer__workspace {
  background-color: rgba(0, 0, 0, 0.35);
}
.viewer .viewer__workspace .workspace__line-list {
  background-color: rgba(0, 0, 0, 0.35);
}
.viewer .viewer__workspace .workspace__code {
  padding-top: 3px;
  font-family: "SourceCodePro-Light", PT Mono, monospace;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
}
@media screen and (max-width: 649px) {
  .viewer {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/components/viewer/viewer.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,0BAAA;AAER;AAAI;EACI,qCAAA;AAER;AADQ;EACI,qCAAA;AAGZ;AADQ;EACI,gBAAA;EAEI,sDAAA;EACA,eAAA;EACA,gBAAA;EAEJ,iBAAA;AACZ;AAEI;EAzBJ;IA0BQ,WAAA;EACN;AACF","sourcesContent":[".viewer {\r\n    width: 50%;\r\n    & .viewer__header {\r\n        width: 100%;\r\n        padding: 10px 15px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        border-radius: 2px 2px 0 0;\r\n    }\r\n    & .viewer__workspace {\r\n        background-color:  rgba(0, 0, 0, 0.35);\r\n        & .workspace__line-list {\r\n            background-color:  rgba(0, 0, 0, 0.35);\r\n        }\r\n        & .workspace__code {\r\n            padding-top: 3px;\r\n            font: {\r\n                family: \"SourceCodePro-Light\", PT Mono, monospace;\r\n                size: 14px;\r\n                weight: 300;\r\n            }\r\n            line-height: 24px;\r\n        }\r\n    }\r\n    @media screen and (max-width: 649px) {\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Exo2-VariableFont_wght.ttf */ "./src/fonts/Exo2-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SourceCodePro-Regular.ttf */ "./src/fonts/SourceCodePro-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SourceCodePro-Light.ttf */ "./src/fonts/SourceCodePro-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Exo2";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "SourceCodePro-Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "SourceCodePro-Light";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
tea {
  position: relative;
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 3px solid grey;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
tea::after {
  content: "";
  position: absolute;
  top: 0;
  right: -34px;
  height: 50px;
  width: 30px;
  border-right: 3px solid grey;
  border-top: 3px solid grey;
  border-bottom: 3px solid grey;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 70%;
}
tea.matcha-latte {
  background: linear-gradient(to top, #aabb88 30%, #aabb88 70%, #dfd2b9 70%, #dfd2b9 90%, transparent 90%, transparent 100%);
}
tea.thai {
  background: linear-gradient(to top, #db8758 30%, #db8758 70%, #dfd2b9 70%, #dfd2b9 90%, transparent 90%, transparent 100%);
}
tea.taiwanese {
  background: linear-gradient(to top, #d3b387 30%, #d3b387 70%, #dfd2b9 70%, #dfd2b9 90%, transparent 90%, transparent 100%);
}
tea.strawberry, tea#strawberry {
  background: linear-gradient(to top, #a7735d 30%, #f49290 30%, #f49290 90%, transparent 90%, transparent 100%);
}
tea.green {
  background: linear-gradient(to top, #869273 90%, transparent 90%, transparent 100%);
}
tea.black {
  background: linear-gradient(to top, #a7735d 90%, transparent 90%, transparent 100%);
}

icedtea {
  position: relative;
  width: 80px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 3px solid grey;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 80%;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
icedtea::before {
  content: "";
  position: absolute;
  top: 20px;
  right: -34px;
  height: 50px;
  width: 30px;
  border-right: 3px solid grey;
  border-top: 3px solid grey;
  border-bottom: 3px solid grey;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 70%;
}
icedtea.lime {
  background: linear-gradient(to top, #a7735d 40%, #ddebc6 40%, #ddebc6 90%, transparent 90%, transparent 100%);
}
icedtea.ginger {
  background: linear-gradient(to top, #f5ddaf 90%, transparent 90%, transparent 100%);
}
icedtea.lychee {
  background: linear-gradient(to top, #a7735d 40%, rgb(239, 174, 160) 40%, rgb(239, 174, 160) 90%, transparent 90%, transparent 100%);
}
icedtea.thai {
  background: linear-gradient(to top, #db8758 70%, #dfd2b9 70%, #dfd2b9 90%, transparent 90%, transparent 100%);
}

soda {
  width: 94px;
  height: 133px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: grey;
  clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);
  -webkit-clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
soda::before {
  content: "";
  width: 88px;
  height: 127px;
  position: absolute;
  display: block;
  top: 3px;
  left: 3px;
  background-color: rosybrown;
  clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);
  -webkit-clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);
}
soda.yuzu::before {
  background: linear-gradient(to top, rgb(252, 204, 82) 70%, #ffffff 100%);
}
soda.lychee::before {
  background: linear-gradient(to top, rgb(239, 174, 160) 70%, #ffffff 100%);
}
soda.melon::before {
  background: linear-gradient(to top, rgb(154, 186, 104) 70%, #ffffff 100%);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #352729;
  font-family: "Exo2", Lato, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
}

h1, h2, h3, h4 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

p {
  margin: 0;
}

img {
  width: 100%;
  height: auto;
}

.container {
  padding: 0 15px;
}

.container, .header__container {
  width: 90%;
  margin: 0 auto;
}

.title {
  font-size: 45px;
  font-weight: 400;
  color: #f0e3dd;
}

.app__wrapper {
  position: relative;
}

.app__left-part {
  width: 80%;
}

.app__content {
  margin-bottom: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
}
.content .content__functionality-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 10px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
}

.workspace {
  min-height: 500px;
  padding-left: 38px;
  position: relative;
}
.workspace .workspace__line-list {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
}
.workspace .workspace__line-item {
  padding: 3px 10px;
  text-align: center;
}

.bounce-6 {
  animation-name: bounce-6;
}

@keyframes bounce-6 {
  0% {
    transform: scale(1, 1) translateY(0);
    -webkit-animation-timing-function: linear;
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
    -webkit-animation-timing-function: linear;
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
    -webkit-animation-timing-function: ease-out;
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
    -webkit-animation-timing-function: ease-in;
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
    -webkit-animation-timing-function: linear;
  }
  64% {
    transform: scale(1, 1) translateY(0);
    -webkit-animation-timing-function: linear;
  }
  100% {
    transform: scale(1, 1) translateY(0);
    -webkit-animation-timing-function: linear;
  }
}
@keyframes backOutRight {
  0% {
    transform: translateX(0px) scale(1);
    opacity: 1;
  }
  80% {
    transform: translateX(-400px) scale(0.7);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
}
.backOutRight {
  animation: backOutRight 0.5s ease forwards;
}

@keyframes shake-horizontal {
  0%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%, 30%, 50%, 70% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%, 40%, 60% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
}
.shake-horizontal {
  -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

.popup-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(88, 88, 88, 0.6);
  z-index: 1;
}
.popup-overlay.popup-overlay--off {
  display: none;
}

@media screen and (max-width: 1129px) {
  .container, .header__container {
    width: 100%;
  }
  .app__left-part {
    width: 100%;
  }
}
@media screen and (max-width: 739px) {
  .title {
    font-size: 32px;
  }
}
@media screen and (max-width: 649px) {
  .content .content__functionality-wrapper {
    flex-direction: column;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/_fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/components/_cups.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Exo2\";\r\n    src: url(\"../fonts/Exo2-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n@font-face {\r\n    font-family: \"SourceCodePro-Regular\";\r\n    src: url(\"../fonts/SourceCodePro-Regular.ttf\") format(\"truetype\");\r\n}\r\n@font-face {\r\n    font-family: \"SourceCodePro-Light\";\r\n    src: url(\"../fonts/SourceCodePro-Light.ttf\") format(\"truetype\");\r\n}","@import 'fonts';\r\n@import 'colors';\r\n@import './components/cups';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n    background-color: #352729;\r\n    font: {\r\n        family: \"Exo2\", Lato, sans-serif;\r\n        size: 1rem;\r\n        weight: 400;\r\n    }\r\n    color: rgba(255, 255, 255, 0.3);\r\n}\r\nh1, h2, h3, h4 {\r\n    margin: 0;\r\n}\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\np {\r\n    margin: 0;\r\n}\r\nimg {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.container {\r\n    padding: 0 15px;\r\n}\r\n.container, .header__container {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\n.title {\r\n    font: {\r\n        size: 45px;\r\n        weight: 400;\r\n    }\r\n    color: #f0e3dd;\r\n}\r\n.app__wrapper {\r\n    position: relative;\r\n}\r\n.app__left-part {\r\n    width: calc(100% - 20%);\r\n}\r\n.app__content {\r\n    margin-bottom: 40px;\r\n}\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 50px;\r\n    & .content__functionality-wrapper {\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        border: solid 10px rgba(0, 0, 0, 0.35);\r\n        border-radius: 4px;\r\n    }\r\n}\r\n.workspace {\r\n    min-height: 500px;\r\n    padding-left: 38px;\r\n    position: relative;\r\n    & .workspace__line-list {\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        color: #ffffff;\r\n    }\r\n    & .workspace__line-item {\r\n        padding: 3px 10px;\r\n        text-align: center;\r\n    }\r\n}\r\n.bounce-6 {\r\n    animation-name: bounce-6;\r\n    // animation-timing-function: linear;\r\n}\r\n@keyframes bounce-6 {\r\n    0%   { transform: scale(1,1)      translateY(0); -webkit-animation-timing-function: linear }\r\n    10%  { transform: scale(1.1,.9)   translateY(0); -webkit-animation-timing-function: linear }\r\n    30%  { transform: scale(.9,1.1)   translateY(-100px); -webkit-animation-timing-function: ease-out }\r\n    50%  { transform: scale(1.05,.95) translateY(0); -webkit-animation-timing-function: ease-in }\r\n    57%  { transform: scale(1,1)      translateY(-7px); -webkit-animation-timing-function: linear }\r\n    64%  { transform: scale(1,1)      translateY(0); -webkit-animation-timing-function: linear }\r\n    100% { transform: scale(1,1)      translateY(0); -webkit-animation-timing-function: linear }\r\n}\r\n@keyframes backOutRight {\r\n    0% {\r\n      transform: translateX(0px) scale(1);\r\n      opacity: 1;\r\n    }\r\n    80% {\r\n      transform: translateX(-400px) scale(.7);\r\n      opacity: 0.5;\r\n    }\r\n    100% {\r\n      transform: scale(.5);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .backOutRight {\r\n    animation: backOutRight 0.5s ease forwards;\r\n  }\r\n\r\n  @keyframes shake-horizontal {\r\n    0%,\r\n    100% {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n    }\r\n    10%,\r\n    30%,\r\n    50%,\r\n    70% {\r\n      -webkit-transform: translateX(-10px);\r\n              transform: translateX(-10px);\r\n    }\r\n    20%,\r\n    40%,\r\n    60% {\r\n      -webkit-transform: translateX(10px);\r\n              transform: translateX(10px);\r\n    }\r\n    80% {\r\n      -webkit-transform: translateX(8px);\r\n              transform: translateX(8px);\r\n    }\r\n    90% {\r\n      -webkit-transform: translateX(-8px);\r\n              transform: translateX(-8px);\r\n    }\r\n  }\r\n.shake-horizontal {\r\n\t-webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\r\n\tanimation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\r\n}\r\n.popup-overlay {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(88, 88, 88, 0.6);\r\n    z-index: 1;\r\n    &.popup-overlay--off {\r\n        display: none;\r\n    }\r\n}\r\n@media screen and (max-width: 1129px) {\r\n    .container, .header__container {\r\n        width: 100%;\r\n    }\r\n    .app__left-part {\r\n        width: 100%;\r\n    }\r\n}\r\n@media screen and (max-width: 739px) {\r\n    .title {\r\n        font: {\r\n            size: 32px;\r\n        }\r\n    }\r\n}\r\n@media screen and (max-width: 649px) {\r\n    .content {\r\n        & .content__functionality-wrapper {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}","tea {\r\n    position: relative;\r\n    width: 100px;\r\n    height: 80px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    border: 3px solid grey;\r\n    border-bottom-left-radius: 50%;\r\n    border-bottom-right-radius: 50%;\r\n    animation-duration: 2s;\r\n    animation-iteration-count: infinite;\r\n     &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        right: -34px;\r\n        height: 50px;\r\n        width: 30px;\r\n        border-right: 3px solid grey;\r\n        border-top: 3px solid grey;\r\n        border-bottom: 3px solid grey;\r\n        border-top-right-radius: 50%;\r\n        border-bottom-right-radius: 70%;\r\n    }\r\n    &.matcha-latte {\r\n        background: linear-gradient(to top, $matcha 30%, $matcha 70%,\r\n        $milk 70%, $milk 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.thai {\r\n        background: linear-gradient(to top, $thai-tea 30%, $thai-tea 70%,\r\n        $milk 70%, $milk 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.taiwanese {\r\n        background: linear-gradient(to top, $taiwanese-tea 30%, $taiwanese-tea 70%,\r\n        $milk 70%, $milk 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.strawberry, &#strawberry {\r\n        background: linear-gradient(to top, $black-tea 30%,\r\n        $strawberry-syrup 30%, $strawberry-syrup 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.green {\r\n        background: linear-gradient(to top, $green-tea 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.black {\r\n        background: linear-gradient(to top, $black-tea 90%, transparent 90%, transparent 100%);\r\n    }\r\n}\r\nicedtea {\r\n    position: relative;\r\n    width: 80px;\r\n    height: 110px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    border: 3px solid grey;\r\n    border-bottom-left-radius: 80%;\r\n    border-bottom-right-radius: 80%;\r\n    animation-duration: 2s;\r\n    animation-iteration-count: infinite;\r\n     &::before {\r\n        content: '';\r\n        position: absolute;\r\n        top: 20px;\r\n        right: -34px;\r\n        height: 50px;\r\n        width: 30px;\r\n        border-right: 3px solid grey;\r\n        border-top: 3px solid grey;\r\n        border-bottom: 3px solid grey;\r\n        border-top-right-radius: 50%;\r\n        border-bottom-right-radius: 70%;\r\n    }\r\n    &.lime {\r\n        background: linear-gradient(to top, $black-tea 40%, $lime-syrup 40%,\r\n        $lime-syrup 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.ginger {\r\n        background: linear-gradient(to top, $ginger 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.lychee {\r\n        background: linear-gradient(to top, $black-tea 40%, $lychee 40%,\r\n        $lychee 90%, transparent 90%, transparent 100%);\r\n    }\r\n    &.thai {\r\n        background: linear-gradient(to top, $thai-tea 70%, $milk 70%, $milk 90%, transparent 90%, transparent 100%);\r\n    }\r\n}\r\nsoda {\r\n    width: 94px;\r\n    height: 133px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    background-color: grey;\r\n    clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);\r\n    -webkit-clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);\r\n    animation-duration: 2s;\r\n    animation-iteration-count: infinite;\r\n    &::before {\r\n        content: '';\r\n        width: 88px;\r\n        height: 127px;\r\n        position: absolute;\r\n        display: block;\r\n        top: 3px;\r\n        left: 3px;\r\n        background-color: rosybrown;\r\n        clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);\r\n        -webkit-clip-path: polygon(10% 0, 94% 0, 78% 100%, 23% 100%);\r\n    }\r\n    &.yuzu {\r\n        &::before {\r\n            background: linear-gradient(to top, $yuzu 70%, #ffffff 100%);\r\n        }\r\n    }\r\n    &.lychee {\r\n        &::before {\r\n            background: linear-gradient(to top, $lychee 70%, #ffffff 100%);\r\n        }\r\n    }\r\n    &.melon {\r\n        &::before {\r\n            background: linear-gradient(to top, $melon 70%, #ffffff 100%);\r\n        }\r\n    }\r\n}\r\n// @media screen and (max-width: 1189px) {\r\n//     tea {\r\n//         width: 80px;\r\n//         height: 64px;\r\n//         // border-width: 2px;\r\n//         &::after {\r\n//             height: 32px;\r\n//             width: 19.2px;\r\n//             right: -25px;\r\n//         }\r\n//     }\r\n//     icedtea {\r\n//         width: 60px;\r\n//         height: 82.5px;\r\n//         &::before {\r\n//             height: 32px;\r\n//             width: 19.2px;\r\n//             right: -25px;\r\n//             top: 14px;\r\n//         }\r\n//     }\r\n//     soda {\r\n//         width: 74px;\r\n//         height: 104.7px;\r\n//         &::before {\r\n//             height: 98.1px;\r\n//             width: 68px;\r\n//         }\r\n//     }\r\n// }\r\n// @media screen and (max-width: 739px) {\r\n//     tea {\r\n//         width: 60px;\r\n//         height: 48px;\r\n//         border-width: 2px;\r\n//         &::after {\r\n//             height: 25px;\r\n//             width: 15px;\r\n//             right: -20px;\r\n//         }\r\n//     }\r\n//     icedtea {\r\n//         width: 40px;\r\n//         height: 55px;\r\n//         border-width: 2px;\r\n//         &::before {\r\n//             height: 25px;\r\n//             width: 15px;\r\n//             right: -20px;\r\n//             top: 9px;\r\n//         }\r\n//     }\r\n//     soda {\r\n//         width: 54px;\r\n//         height: 76.4px;\r\n//         border-width: 2px;\r\n//         &::before {\r\n//             height: 72.2px;\r\n//             width: 50px;\r\n//             top: 2px;\r\n//             left: 2px;\r\n//         }\r\n//     }\r\n// }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/app/components/editor/editor.scss":
/*!***********************************************!*\
  !*** ./src/app/components/editor/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/editor/editor.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/footer/footer.scss":
/*!***********************************************!*\
  !*** ./src/app/components/footer/footer.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/gamefield/gamefield.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/gamefield/gamefield.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gamefield_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./gamefield.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/gamefield/gamefield.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gamefield_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gamefield_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gamefield_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gamefield_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/header/header.scss":
/*!***********************************************!*\
  !*** ./src/app/components/header/header.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/popup/popup.scss":
/*!*********************************************!*\
  !*** ./src/app/components/popup/popup.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/popup/popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.scss":
/*!*************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidebar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./sidebar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidebar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidebar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidebar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidebar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/viewer/viewer.scss":
/*!***********************************************!*\
  !*** ./src/app/components/viewer/viewer.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_viewer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./viewer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/components/viewer/viewer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_viewer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_viewer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_viewer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_viewer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ./utils/types */ "./src/app/utils/types.ts");
const emitter_1 = __webpack_require__(/*! ./utils/emitter */ "./src/app/utils/emitter.ts");
const header_1 = __importDefault(__webpack_require__(/*! ./components/header/header */ "./src/app/components/header/header.ts"));
const sidebar_1 = __importDefault(__webpack_require__(/*! ./components/sidebar/sidebar */ "./src/app/components/sidebar/sidebar.ts"));
const gamefield_1 = __importDefault(__webpack_require__(/*! ./components/gamefield/gamefield */ "./src/app/components/gamefield/gamefield.ts"));
const viewer_1 = __importDefault(__webpack_require__(/*! ./components/viewer/viewer */ "./src/app/components/viewer/viewer.ts"));
const editor_1 = __importDefault(__webpack_require__(/*! ./components/editor/editor */ "./src/app/components/editor/editor.ts"));
const footer_1 = __importDefault(__webpack_require__(/*! ./components/footer/footer */ "./src/app/components/footer/footer.ts"));
const levels_1 = __importDefault(__webpack_require__(/*! ../data/levels */ "./src/data/levels.ts"));
function init() {
    const currLevel = Number(localStorage.getItem(types_1.Params.currLevel)) || 1;
    let appLevels = localStorage.getItem(types_1.Params.levels) || null;
    let levelsArr;
    if (currLevel === 1)
        localStorage.setItem(types_1.Params.currLevel, JSON.stringify(currLevel));
    if (appLevels) {
        levelsArr = JSON.parse(appLevels);
        createView(levelsArr, currLevel);
    }
    else {
        localStorage.setItem(types_1.Params.levels, JSON.stringify(levels_1.default));
        appLevels = localStorage.getItem(types_1.Params.levels);
        if (appLevels) {
            levelsArr = JSON.parse(appLevels);
            createView(levelsArr, currLevel);
        }
    }
}
exports["default"] = init;
function createView(lvls, currentLvl) {
    const body = document.querySelector('.app');
    const sidebarCont = document.createElement('div');
    const gamefieldCont = document.createElement('div');
    const viewerCont = document.createElement('div');
    const leftPart = document.createElement('div');
    const mainBlock = document.createElement('main');
    const header = new header_1.default().createHeader();
    const footer = new footer_1.default().createFooter();
    const sidebar = new sidebar_1.default(lvls[currentLvl - 1], lvls).createSideBar();
    const viewer = new viewer_1.default(lvls[currentLvl - 1], lvls).createViewer();
    const gamefield = new gamefield_1.default(lvls[currentLvl - 1], lvls).createGamefield();
    const editor = new editor_1.default(lvls[currentLvl - 1], lvls).createEditor();
    sidebarCont.className = 'app__wrapper';
    gamefieldCont.className = 'container';
    viewerCont.className = 'content__functionality-wrapper';
    leftPart.className = 'app__left-part';
    mainBlock.className = 'content app__content';
    viewerCont.append(editor, viewer);
    gamefieldCont.append(gamefield, viewerCont);
    sidebarCont.append(leftPart, sidebar);
    mainBlock.append(gamefieldCont);
    leftPart.append(header, mainBlock, footer);
    if (body) {
        body.append(sidebarCont);
    }
    emitter_1.Emitter.emit('init', lvls[currentLvl - 1], lvls);
}


/***/ }),

/***/ "./src/app/components/editor/editor.ts":
/*!*********************************************!*\
  !*** ./src/app/components/editor/editor.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./editor.scss */ "./src/app/components/editor/editor.scss");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/app/utils/types.ts");
const emitter_1 = __webpack_require__(/*! ../../utils/emitter */ "./src/app/utils/emitter.ts");
const popup_1 = __importDefault(__webpack_require__(/*! ../popup/popup */ "./src/app/components/popup/popup.ts"));
class Editor {
    constructor(lvl, lvls) {
        this.lvl = lvl;
        this.lvls = lvls;
        this.lvl = lvl;
        this.lvls = lvls;
        this.currLevel = Number(localStorage.getItem(types_1.Params.currLevel)) || 1;
        this.isClue = false;
        this.clueCount = Number(localStorage.getItem(types_1.Params.clueCount)) || 0;
        this.correctAnswers = Number(localStorage.getItem(types_1.Params.correctanswers)) || 0;
        emitter_1.Emitter.on('help', (clue, clueCount) => {
            this.clueCount = clueCount;
            this.help(clue);
        });
        emitter_1.Emitter.on('reset', (lvl, currLvl, clueCount, correctAnswers, lvls) => {
            const input = document.querySelector('.editor__entry-field');
            this.isClue = false;
            this.lvl = lvl;
            this.currLevel = currLvl;
            this.clueCount = clueCount;
            this.correctAnswers = correctAnswers;
            this.lvls = lvls;
            if (input) {
                input.value = '';
            }
        });
        emitter_1.Emitter.on('changeLevel', (lvl) => {
            this.lvl = lvl;
            this.currLevel = lvl.id;
            const input = document.querySelector('.editor__entry-field');
            if (input) {
                input.value = '';
            }
        });
    }
    createEditor() {
        const editorField = document.createElement('section');
        editorField.className = 'editor content__editor';
        editorField.innerHTML = `
    <header class="editor__header">
      <span>CSS Editor</span>
      <span>style.css</span>
    </header>
    <div class="workspace editor__workspace">
        <ul class="workspace__line-list">
            <li class="workspace__line-item">1</li>
            <li class="workspace__line-item">2</li>
            <li class="workspace__line-item">3</li>
            <li class="workspace__line-item">4</li>
            <li class="workspace__line-item">5</li>
            <li class="workspace__line-item">6</li>
            <li class="workspace__line-item">7</li>
            <li class="workspace__line-item">8</li>
            <li class="workspace__line-item">9</li>
            <li class="workspace__line-item">10</li>
            <li class="workspace__line-item">11</li>
            <li class="workspace__line-item">12</li>
            <li class="workspace__line-item">13</li>
            <li class="workspace__line-item">14</li>
            <li class="workspace__line-item">15</li>
            <li class="workspace__line-item">16</li>
            <li class="workspace__line-item">17</li>
            <li class="workspace__line-item">18</li>
            <li class="workspace__line-item">19</li>
            <li class="workspace__line-item">20</li>
        </ul>
        <label for="entry-field" class="editor__wrapper">
            <input id="entry-field" class="editor__entry-field" type="text" placeholder="Type a selector">
            <button type="button" class="editor__enter-btn">enter</button>
        </label>
    </div>
    `;
        editorField.addEventListener('click', (e) => {
            const { target } = e;
            if (target.tagName === 'BUTTON') {
                if (target.classList.contains('editor__enter-btn')) {
                    e.preventDefault();
                    this.newCheckSelector();
                }
            }
        });
        editorField.addEventListener('keyup', (e) => {
            if (e.code === 'Enter') {
                const editorBtn = document.querySelector('.editor__enter-btn');
                if (editorBtn)
                    editorBtn.click();
            }
        });
        return editorField;
    }
    help(clue) {
        const text = clue;
        const input = document.querySelector('.editor__entry-field');
        if (input) {
            input.value = '';
            let i = 0;
            const spellText = () => {
                if (i < text.length) {
                    if (input) {
                        input.value += text.charAt(i);
                        i++;
                        setTimeout(spellText, 100);
                    }
                }
            };
            spellText();
            this.isClue = true;
            input.focus();
        }
    }
    newCheckSelector() {
        const input = document.querySelector('.editor__entry-field');
        let state;
        let prevLvl;
        let notCompletedLvl;
        if (input) {
            const inputVal = input.value.split(/\s+/).join('');
            if (inputVal !== '' && this.lvl.selector.includes(inputVal)) {
                this.correctAnswers += 1;
                localStorage.setItem(types_1.Params.correctanswers, String(this.correctAnswers));
                if (this.correctAnswers < this.lvls.length) {
                    prevLvl = this.lvl;
                    if (this.lvls[this.currLevel - 1].state === types_1.States.NotCompleted) {
                        if (this.isClue === false) {
                            state = types_1.States.Completed;
                        }
                        else {
                            state = types_1.States.Clue;
                        }
                        this.lvls[this.currLevel - 1].state = state;
                        localStorage.setItem(types_1.Params.levels, JSON.stringify(this.lvls));
                        notCompletedLvl = this.lvls.find((elem) => elem.state === types_1.States.NotCompleted);
                        if (notCompletedLvl) {
                            this.currLevel = notCompletedLvl.id;
                            this.lvl = this.lvls[this.currLevel - 1];
                            localStorage.setItem(types_1.Params.currLevel, String(this.currLevel));
                        }
                        emitter_1.Emitter.emit('checkSelector', this.lvl, prevLvl, state);
                    }
                    else {
                        notCompletedLvl = this.lvls.find((elem) => elem.state === types_1.States.NotCompleted);
                        if (notCompletedLvl) {
                            this.currLevel = notCompletedLvl.id;
                            this.lvl = this.lvls[this.currLevel - 1];
                            localStorage.setItem(types_1.Params.currLevel, String(this.currLevel));
                        }
                    }
                    input.value = '';
                    this.isClue = false;
                }
                else {
                    if (this.clueCount === 0) {
                        this.openPopup('win');
                    }
                    else {
                        this.openPopup('lose', this.clueCount);
                    }
                }
            }
            else {
                const codeWrapper = document.querySelector('.content__functionality-wrapper');
                if (codeWrapper) {
                    codeWrapper.classList.add('shake-horizontal');
                    setTimeout(() => {
                        codeWrapper.classList.remove('shake-horizontal');
                    }, 800);
                }
            }
        }
    }
    openPopup(res, clues) {
        const body = document.querySelector('.app');
        let popup;
        if (clues) {
            popup = new popup_1.default(res, clues).createPopup();
        }
        else {
            popup = new popup_1.default(res).createPopup();
        }
        if (body)
            body.append(popup);
    }
}
exports["default"] = Editor;


/***/ }),

/***/ "./src/app/components/footer/footer.ts":
/*!*********************************************!*\
  !*** ./src/app/components/footer/footer.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./footer.scss */ "./src/app/components/footer/footer.scss");
const rs_school_js_svg_1 = __importDefault(__webpack_require__(/*! ../../../img/rs_school_js.svg */ "./src/img/rs_school_js.svg"));
const github_svg_1 = __importDefault(__webpack_require__(/*! ../../../img/github.svg */ "./src/img/github.svg"));
class Footer {
    createFooter() {
        const footer = document.createElement('footer');
        const year = new Date();
        footer.classList.add('footer');
        footer.innerHTML = `
      <div class="footer__links-wrapper">
          <a class="footer__link" href="https://github.com/idiamondcat" target="_blank">
              <img class="footer__icon footer__icon--git" src=${github_svg_1.default}>
          </a>
          <a class="footer__link" href="https://rs.school/js/" target="_blank">
              <img class="footer__icon footer__icon--rss" src=${rs_school_js_svg_1.default}>
          </a>
      </div>
      <span class="footer__year">${year.getFullYear()}</span>
    `;
        return footer;
    }
}
exports["default"] = Footer;


/***/ }),

/***/ "./src/app/components/gamefield/gamefield.ts":
/*!***************************************************!*\
  !*** ./src/app/components/gamefield/gamefield.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./gamefield.scss */ "./src/app/components/gamefield/gamefield.scss");
const emitter_1 = __webpack_require__(/*! ../../utils/emitter */ "./src/app/utils/emitter.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/app/utils/types.ts");
class Gamefield {
    constructor(lvl, lvls) {
        this.lvl = lvl;
        this.lvls = lvls;
        this.lvl = lvl;
        this.lvls = lvls;
        this.clueCount = Number(localStorage.getItem(types_1.Params.clueCount)) || 0;
        this.currLevel = Number(localStorage.getItem(types_1.Params.currLevel)) || 1;
        emitter_1.Emitter.on('checkSelector', (lvl) => {
            this.lvl = lvl;
            this.loadGamefield();
        });
        emitter_1.Emitter.on('changeLevel', (lvl) => {
            this.lvl = lvl;
            this.loadGamefield();
        });
        emitter_1.Emitter.on('reset', (lvl, currLvl, clueCount, correctAnswers, lvls) => {
            this.lvl = lvl;
            this.currLevel = currLvl;
            this.clueCount = clueCount;
            this.lvls = lvls;
            this.loadGamefield();
        });
        emitter_1.Emitter.on('init', (lvl) => {
            this.lvl = lvl;
            this.loadGamefield();
        });
    }
    createGamefield() {
        const gameFieldMain = document.createElement('section');
        gameFieldMain.className = 'view content__view';
        gameFieldMain.innerHTML += `
      <h1 class="title view__title"></h1>
      <button class="view__help-btn">Help, I'm stuck!</button>
      <div class="view__gamefield">
        <div class="view__drinks-wrapper">
        </div>
        <div class="view__table"></div>
      </div>
    `;
        gameFieldMain.addEventListener('click', (e) => {
            const { target } = e;
            if (target) {
                if (target.tagName === 'BUTTON') {
                    if (target.classList.contains('view__help-btn')) {
                        e.preventDefault();
                        if (this.lvl.state === types_1.States.NotCompleted) {
                            this.clueCount += 1;
                            localStorage.setItem(types_1.Params.clueCount, String(this.clueCount));
                            emitter_1.Emitter.emit('help', this.lvl.selector[0], this.clueCount);
                        }
                        else {
                            console.log('This level is already completed: ' + this.lvl.state);
                        }
                    }
                }
            }
        });
        return gameFieldMain;
    }
    loadGamefield() {
        const title = document.querySelector('.title');
        const viewCont = document.querySelector('.view__drinks-wrapper');
        if (title)
            title.innerText = this.lvl.title;
        if (viewCont) {
            viewCont.innerHTML = this.lvl.markup;
            const activeSelectors = viewCont.querySelectorAll(`${this.lvl.selector[0]}`);
            if (activeSelectors) {
                activeSelectors.forEach((elem) => {
                    elem.classList.add('bounce-6');
                });
            }
        }
    }
}
exports["default"] = Gamefield;


/***/ }),

/***/ "./src/app/components/header/header.ts":
/*!*********************************************!*\
  !*** ./src/app/components/header/header.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./header.scss */ "./src/app/components/header/header.scss");
class Header {
    createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = `
      <div class="header__container">
        <div class="header__logo-wrapper">
          <img class="logo header__logo" src="./img/logo.svg" alt="Logo">
          <div class="header__text-logo">
            <span class="header__large-text">CSS</span>
            <span class="header__small-text">barista</span>
          </div>
        </div>
        <button class="header__burger-btn header__burger-btn--hidden">
          <span class="header__btn-line"></span>
        </button>
      </div>
      `;
        header.addEventListener('click', (e) => {
            e.preventDefault();
            const { target } = e;
            const sidebar = document.querySelector('.level');
            if (target) {
                if (target.tagName === 'BUTTON' &&
                    target.classList.contains('header__burger-btn')) {
                    if (sidebar) {
                        if (sidebar.classList.contains('level--active')) {
                            sidebar.classList.remove('level--active');
                        }
                        else {
                            sidebar.classList.add('level--active');
                        }
                    }
                }
            }
        });
        return header;
    }
}
exports["default"] = Header;


/***/ }),

/***/ "./src/app/components/popup/popup.ts":
/*!*******************************************!*\
  !*** ./src/app/components/popup/popup.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./popup.scss */ "./src/app/components/popup/popup.scss");
const reset_1 = __importDefault(__webpack_require__(/*! ../../utils/reset */ "./src/app/utils/reset.ts"));
class Popup {
    constructor(state, clues) {
        this.state = state;
        this.clues = clues;
        this.state = state;
        this.clues = clues;
    }
    createPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup-overlay';
        popup.innerHTML += `
      <section class="popup">
        <button class="popup__close-btn" type="button"></button>
        <div class="popup__wrapper">
            <h2 class="popup__title">${this.state === 'win' ? 'You Win!' : 'You Lose!'}</h2>
            <p class="popup__text">${this.clues ? 'You used ' + this.clues + ' hints' : ''}</p>
            <button class="popup__btn" type="button">try again</button>
        <div>
      </section>
      `;
        popup.addEventListener('click', (e) => {
            e.preventDefault();
            const { target } = e;
            if (target) {
                if (target.tagName === 'BUTTON') {
                    if (target.classList.contains('popup__btn')) {
                        (0, reset_1.default)();
                        const overlay = document.querySelector('.popup-overlay');
                        if (overlay)
                            overlay.remove();
                    }
                    else if (target.classList.contains('popup__close-btn')) {
                        const overlay = document.querySelector('.popup-overlay');
                        if (overlay)
                            overlay.remove();
                    }
                }
            }
        });
        return popup;
    }
}
exports["default"] = Popup;


/***/ }),

/***/ "./src/app/components/sidebar/level.ts":
/*!*********************************************!*\
  !*** ./src/app/components/sidebar/level.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const emitter_1 = __webpack_require__(/*! ../../utils/emitter */ "./src/app/utils/emitter.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/app/utils/types.ts");
class LevelItem {
    constructor(idx, lvl, state) {
        this.idx = idx;
        this.lvl = lvl;
        this.state = state;
        this.idx = idx;
        this.state = state;
        this.lvl = lvl;
        emitter_1.Emitter.on('init', (lvl) => {
            this.lvl = lvl;
            this.loadItem();
        });
        emitter_1.Emitter.on('checkSelector', (lvl, prevlvl, state) => {
            this.lvl = lvl;
            if (this.idx === prevlvl.id) {
                const prevElem = document.getElementById(`level_${this.idx}`);
                this.state = state;
                if (prevElem) {
                    const indicator = prevElem.querySelector('.level__indicator');
                    if (indicator) {
                        if (this.state === types_1.States.Clue) {
                            indicator.classList.add('clue');
                        }
                        else if (this.state === types_1.States.Completed) {
                            indicator.classList.add('correct');
                        }
                    }
                }
            }
            this.loadItem();
        });
        emitter_1.Emitter.on('reset', (lvl) => {
            this.lvl = lvl;
            this.state = this.lvl.state;
            this.loadItem();
        });
    }
    createLevelItem() {
        const item = document.createElement('li');
        item.classList.add('level__item');
        item.id = `level_${this.idx}`;
        item.innerHTML = `
      <span class="level__num">${this.idx}</span>
      <span class="level__indicator"></span>
    `;
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const { target } = e;
            if (target) {
                const sidebar = document.querySelector('.level');
                let thisItemLvl;
                let levelsArr;
                const appLevels = localStorage.getItem(types_1.Params.levels) || null;
                if (appLevels) {
                    levelsArr = JSON.parse(appLevels);
                    thisItemLvl = levelsArr.find((elem) => elem.id === this.idx);
                    this.loadItem(target);
                    localStorage.setItem(types_1.Params.currLevel, String(this.idx));
                    if (thisItemLvl) {
                        this.lvl = thisItemLvl;
                        emitter_1.Emitter.emit('changeLevel', this.lvl);
                    }
                    if (sidebar)
                        sidebar.classList.remove('level--active');
                }
            }
        });
        return item;
    }
    loadItem(target) {
        const currentLevel = Number(localStorage.getItem(types_1.Params.currLevel)) || 1;
        const currentLevelElem = target || document.getElementById(`level_${this.idx}`);
        const prevCurrActiveELem = document.querySelector('.level__item.active');
        if (currentLevelElem) {
            const indicator = currentLevelElem.querySelector('.level__indicator');
            if (indicator) {
                if (this.state === types_1.States.Clue) {
                    indicator.classList.add('clue');
                }
                else if (this.state === types_1.States.Completed) {
                    indicator.classList.add('correct');
                }
                else {
                    indicator.classList.remove('clue');
                    indicator.classList.remove('correct');
                }
            }
            if (!target) {
                if (currentLevel === this.idx) {
                    if (prevCurrActiveELem)
                        prevCurrActiveELem.classList.remove('active');
                    currentLevelElem.classList.add('active');
                }
            }
            else {
                if (prevCurrActiveELem)
                    prevCurrActiveELem.classList.remove('active');
                currentLevelElem.classList.add('active');
            }
        }
    }
}
exports["default"] = LevelItem;


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.ts":
/*!***********************************************!*\
  !*** ./src/app/components/sidebar/sidebar.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./sidebar.scss */ "./src/app/components/sidebar/sidebar.scss");
const emitter_1 = __webpack_require__(/*! ../../utils/emitter */ "./src/app/utils/emitter.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/app/utils/types.ts");
const level_1 = __importDefault(__webpack_require__(/*! ./level */ "./src/app/components/sidebar/level.ts"));
const reset_1 = __importDefault(__webpack_require__(/*! ../../utils/reset */ "./src/app/utils/reset.ts"));
class SideBar {
    constructor(lvl, lvls) {
        this.lvl = lvl;
        this.lvls = lvls;
        this.lvl = lvl;
        this.lvls = lvls;
        this.currLevel = Number(localStorage.getItem(types_1.Params.currLevel)) || 1;
        this.clueCount = Number(localStorage.getItem(types_1.Params.clueCount)) || 0;
        this.correctAnswers = Number(localStorage.getItem(types_1.Params.correctanswers)) || 0;
        emitter_1.Emitter.on('reset', (lvl, currLvl, clueCount, correctAnswers, lvls) => {
            this.lvl = lvl;
            this.currLevel = currLvl;
            this.clueCount = clueCount;
            this.correctAnswers = correctAnswers;
            this.lvls = lvls;
        });
    }
    createSideBar() {
        const sidebar = document.createElement('aside');
        const levelList = document.createElement('ul');
        const resetBtn = document.createElement('button');
        sidebar.className = 'level';
        levelList.className = 'level__list';
        resetBtn.className = 'level__reset-btn';
        resetBtn.innerText = 'Reset Progress';
        this.lvls.forEach((lvl, idx) => {
            const level = new level_1.default(idx + 1, lvl, lvl.state);
            levelList.append(level.createLevelItem());
        });
        sidebar.append(levelList, resetBtn);
        sidebar.addEventListener('click', (e) => {
            e.preventDefault();
            const { target } = e;
            if (target) {
                if (target.tagName === 'BUTTON') {
                    if (target.classList.contains('level__reset-btn')) {
                        (0, reset_1.default)();
                    }
                }
            }
        });
        return sidebar;
    }
}
exports["default"] = SideBar;


/***/ }),

/***/ "./src/app/components/viewer/viewer.ts":
/*!*********************************************!*\
  !*** ./src/app/components/viewer/viewer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./viewer.scss */ "./src/app/components/viewer/viewer.scss");
const emitter_1 = __webpack_require__(/*! ../../utils/emitter */ "./src/app/utils/emitter.ts");
class Viewer {
    constructor(lvl, lvls) {
        this.lvl = lvl;
        this.lvls = lvls;
        this.lvl = lvl;
        this.lvls = lvls;
        emitter_1.Emitter.on('checkSelector', (lvl) => {
            this.lvl = lvl;
            this.loadViewer();
        });
        emitter_1.Emitter.on('reset', (lvl, currLvl, clueCount, correctAnswers, lvls) => {
            this.lvl = lvl;
            this.lvls = lvls;
            this.loadViewer();
        });
        emitter_1.Emitter.on('changeLevel', (lvl) => {
            this.lvl = lvl;
            this.loadViewer();
        });
        emitter_1.Emitter.on('init', (lvl) => {
            this.lvl = lvl;
            this.loadViewer();
        });
    }
    createViewer() {
        const viewerField = document.createElement('section');
        viewerField.className = 'viewer content__viewer';
        viewerField.innerHTML = `
    <header class="viewer__header">
      <span>HTML Viewer</span>
      <span>table.html</span>
    </header>
    <div class="workspace viewer__workspace">
      <ul class="workspace__line-list">
          <li class="workspace__line-item">1</li>
          <li class="workspace__line-item">2</li>
          <li class="workspace__line-item">3</li>
          <li class="workspace__line-item">4</li>
          <li class="workspace__line-item">5</li>
          <li class="workspace__line-item">6</li>
          <li class="workspace__line-item">7</li>
          <li class="workspace__line-item">8</li>
          <li class="workspace__line-item">9</li>
          <li class="workspace__line-item">10</li>
          <li class="workspace__line-item">11</li>
          <li class="workspace__line-item">12</li>
          <li class="workspace__line-item">13</li>
          <li class="workspace__line-item">14</li>
          <li class="workspace__line-item">15</li>
          <li class="workspace__line-item">16</li>
          <li class="workspace__line-item">17</li>
          <li class="workspace__line-item">18</li>
          <li class="workspace__line-item">19</li>
          <li class="workspace__line-item">20</li>
      </ul>
      <p class="workspace__code"></p>
    </div>
    `;
        return viewerField;
    }
    loadViewer() {
        const htmlCode = document.querySelector('.workspace__code');
        if (htmlCode)
            htmlCode.innerText = this.lvl.markup;
    }
}
exports["default"] = Viewer;


/***/ }),

/***/ "./src/app/utils/emitter.ts":
/*!**********************************!*\
  !*** ./src/app/utils/emitter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitter = void 0;
class Emitter {
    static on(key, func) {
        var _a;
        const listeners = (_a = this.events[key]) !== null && _a !== void 0 ? _a : new Set();
        listeners.add(func);
        this.events[key] = listeners;
    }
    static emit(key, ...args) {
        var _a;
        const listeners = (_a = this.events[key]) !== null && _a !== void 0 ? _a : new Set();
        for (const listener of listeners) {
            listener(...args);
        }
    }
    static off(key, func) {
        if (!this.events[key])
            return;
        const idx = this.events[key].has(func) ? Array.from(this.events[key]).indexOf(func) : null;
        if (idx && idx !== -1)
            Array.from(this.events[key]).splice(idx, 1);
    }
}
exports.Emitter = Emitter;
Emitter.events = {};


/***/ }),

/***/ "./src/app/utils/reset.ts":
/*!********************************!*\
  !*** ./src/app/utils/reset.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const emitter_1 = __webpack_require__(/*! ./emitter */ "./src/app/utils/emitter.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/app/utils/types.ts");
function reset() {
    const lvls = localStorage.getItem(types_1.Params.levels);
    const currLevel = 1;
    const clueCount = 0;
    const correctAnswers = 0;
    localStorage.clear();
    localStorage.setItem(types_1.Params.currLevel, JSON.stringify(1));
    localStorage.setItem(types_1.Params.clueCount, JSON.stringify(0));
    localStorage.setItem(types_1.Params.correctanswers, JSON.stringify(0));
    if (lvls) {
        const lvlsArr = JSON.parse(lvls);
        lvlsArr.map((elem) => (elem.state = types_1.States.NotCompleted));
        localStorage.setItem(types_1.Params.levels, JSON.stringify(lvlsArr));
        emitter_1.Emitter.emit('reset', lvlsArr[0], currLevel, clueCount, correctAnswers, lvlsArr);
    }
}
exports["default"] = reset;


/***/ }),

/***/ "./src/app/utils/types.ts":
/*!********************************!*\
  !*** ./src/app/utils/types.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.States = exports.Params = void 0;
var Params;
(function (Params) {
    Params["levels"] = "levels";
    Params["currLevel"] = "level";
    Params["clueCount"] = "cluecount";
    Params["clueStates"] = "clueStates";
    Params["correctanswers"] = "correctAnswers";
})(Params || (exports.Params = Params = {}));
var States;
(function (States) {
    States["Clue"] = "clue";
    States["Completed"] = "completed";
    States["NotCompleted"] = "notcompleted";
})(States || (exports.States = States = {}));


/***/ }),

/***/ "./src/data/levels.ts":
/*!****************************!*\
  !*** ./src/data/levels.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ../app/utils/types */ "./src/app/utils/types.ts");
const levels = [
    {
        id: 1,
        state: types_1.States.NotCompleted,
        title: 'Select all tea',
        selector: ['tea', '*'],
        markup: `<tea class="thai"></tea>
            <tea class="matcha-latte"></tea>
            <tea class="taiwanese"></tea>
        `,
    },
    {
        id: 2,
        state: types_1.States.NotCompleted,
        title: 'Select green tea',
        selector: ['.green', 'tea:nth-child(2)'],
        markup: `<tea class="black"></tea>
            <tea class="green"></tea>
            <tea class="black"></tea>
        `,
    },
    {
        id: 3,
        state: types_1.States.NotCompleted,
        title: 'Select black tea and taiwanese tea',
        selector: ['tea:nth-of-type(2n+2)', 'tea:nth-of-type(even)'],
        markup: `<tea class="matcha-latte"></tea>
            <tea class="black"></tea>
            <tea class="thai"></tea>
            <tea class="taiwanese"></tea>
        `,
    },
    {
        id: 4,
        state: types_1.States.NotCompleted,
        title: 'Select strawberry tea',
        selector: ['#strawberry', 'tea:first-child'],
        markup: `<tea id="strawberry"></tea>
            <tea class="matcha-latte"></tea>
            <icedtea class="lime"></icedtea>
        `,
    },
    {
        id: 5,
        state: types_1.States.NotCompleted,
        title: 'Select all drinks',
        selector: ['*'],
        markup: `<tea class="black"></tea>
            <icedtea class="lime"></icedtea>
            <soda class="yuzu"></soda>
        `,
    },
    {
        id: 6,
        state: types_1.States.NotCompleted,
        title: 'Select lychee soda, using + selector',
        selector: ['.melon+.lychee', '.lychee'],
        markup: `<soda class="yuzu"></soda>
            <soda class="melon"></soda>
            <soda class="lychee"></soda>
        `,
    },
    {
        id: 7,
        state: types_1.States.NotCompleted,
        title: 'Select soda, using ~ selector',
        selector: ['icedtea~soda'],
        markup: `<icedtea class="ginger"></icedtea>
            <soda class="melon"></soda>
            <tea class="thai"></tea>
            <soda class="lychee"></soda>
        `,
    },
    {
        id: 8,
        state: types_1.States.NotCompleted,
        title: 'Select first icedtea',
        selector: ['icedtea:first-child'],
        markup: `<icedtea class="thai"></icedtea>
            <icedtea class="lychee"></icedtea>
            <icedtea class="lime"></icedtea>
        `,
    },
    {
        id: 9,
        state: types_1.States.NotCompleted,
        title: 'Select all tea except last one',
        selector: ['tea:not(:last-child)'],
        markup: `<tea class="green"></tea>
            <tea class="taiwanese"></tea>
            <tea class="matcha-latte"></tea>
        `,
    },
    {
        id: 10,
        state: types_1.States.NotCompleted,
        title: 'Select only one drink',
        selector: ['icedtea:only-of-type'],
        markup: `<tea class="thai"></tea>
            <icedtea class="lychee"></icedtea>
            <soda class="yuzu"></soda>
            <tea id="strawberry""></tea>
            <tea class="black"></tea>
            <soda class="melon"></soda>
        `,
    },
];
exports["default"] = levels;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
const app_1 = __importDefault(__webpack_require__(/*! ./app/app */ "./src/app/app.ts"));
(0, app_1.default)();


/***/ }),

/***/ "./src/fonts/Exo2-VariableFont_wght.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/Exo2-VariableFont_wght.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Exo2-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/fonts/SourceCodePro-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/SourceCodePro-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/SourceCodePro-Light.ttf";

/***/ }),

/***/ "./src/fonts/SourceCodePro-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/SourceCodePro-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/SourceCodePro-Regular.ttf";

/***/ }),

/***/ "./src/img/cafe.jpg":
/*!**************************!*\
  !*** ./src/img/cafe.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cafe.jpg";

/***/ }),

/***/ "./src/img/check.svg":
/*!***************************!*\
  !*** ./src/img/check.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/check.svg";

/***/ }),

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./src/img/github.svg":
/*!****************************!*\
  !*** ./src/img/github.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/github.svg";

/***/ }),

/***/ "./src/img/help.svg":
/*!**************************!*\
  !*** ./src/img/help.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/help.svg";

/***/ }),

/***/ "./src/img/rs_school_js.svg":
/*!**********************************!*\
  !*** ./src/img/rs_school_js.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/rs_school_js.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0tBQXNLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FB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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzIiwid2VicGFjazovL3JzLWNzcy8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lZmllbGQvZ2FtZWZpZWxkLnNjc3MiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL3ZpZXdlci92aWV3ZXIuc2NzcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3JzLWNzcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5zY3NzPzYxOWEiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2Nzcz9kZmZkIiwid2VicGFjazovL3JzLWNzcy8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lZmllbGQvZ2FtZWZpZWxkLnNjc3M/YWUzMSIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzPzZiZGIiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLnNjc3M/ZGM3NiIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3M/ZTgxOCIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvYXBwL2NvbXBvbmVudHMvdmlld2VyL3ZpZXdlci5zY3NzPzMwMTkiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3JzLWNzcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JzLWNzcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2dhbWVmaWVsZC9nYW1lZmllbGQudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLnRzIiwid2VicGFjazovL3JzLWNzcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL2xldmVsLnRzIiwid2VicGFjazovL3JzLWNzcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC9jb21wb25lbnRzL3ZpZXdlci92aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC91dGlscy9lbWl0dGVyLnRzIiwid2VicGFjazovL3JzLWNzcy8uL3NyYy9hcHAvdXRpbHMvcmVzZXQudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2FwcC91dGlscy90eXBlcy50cyIsIndlYnBhY2s6Ly9ycy1jc3MvLi9zcmMvZGF0YS9sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vcnMtY3NzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JzLWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycy1jc3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnMtY3NzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycy1jc3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ycy1jc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycy1jc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycy1jc3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnMtY3NzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JzLWNzcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcnMtY3NzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnMtY3NzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ycy1jc3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZWRpdG9yIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5lZGl0b3IgLmVkaXRvcl9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbn1cbi5lZGl0b3IgLmVkaXRvcl9fd29ya3NwYWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlM2RkO1xufVxuLmVkaXRvciAuZWRpdG9yX193b3Jrc3BhY2UgLndvcmtzcGFjZV9fbGluZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQjJBRTtcbn1cbi5lZGl0b3IgLmVkaXRvcl9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDE1cHg7XG59XG4uZWRpdG9yIC5lZGl0b3JfX2VudHJ5LWZpZWxkIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlM2RkO1xuICBmb250LWZhbWlseTogXCJTb3VyY2VDb2RlUHJvLUxpZ2h0XCIsIFBUIE1vbm8sIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5lZGl0b3IgLmVkaXRvcl9fZW50cnktZmllbGQ6YWN0aXZlLCAuZWRpdG9yIC5lZGl0b3JfX2VudHJ5LWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmVkaXRvciAuZWRpdG9yX19lbnRlci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDBweCAycHggIzk5OTk5OTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDBweCAycHggIzk5OTk5OTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDBweCAycHggIzk5OTk5OTtcbn1cbi5lZGl0b3IgLmVkaXRvcl9fZW50ZXItYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ5cHgpIHtcbiAgLmVkaXRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRVI7QUFEUTtFQUNJLHlCQUFBO0FBR1o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVJLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUosaUJBQUE7QUFBUjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNaO0FBRUk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUVJO0VBbkRKO0lBb0RRLFdBQUE7RUFDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lZGl0b3Ige1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICAmIC5lZGl0b3JfX2hlYWRlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XFxyXFxuICAgIH1cXHJcXG4gICAgJiAuZWRpdG9yX193b3Jrc3BhY2Uge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGUzZGQ7XFxyXFxuICAgICAgICAmIC53b3Jrc3BhY2VfX2xpbmUtbGlzdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNCREIyQUU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJiAuZWRpdG9yX193cmFwcGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAmIC5lZGl0b3JfX2VudHJ5LWZpZWxkIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZTNkZDtcXHJcXG4gICAgICAgIGZvbnQ6IHtcXHJcXG4gICAgICAgICAgICBmYW1pbHk6IFxcXCJTb3VyY2VDb2RlUHJvLUxpZ2h0XFxcIiwgUFQgTW9ubywgbW9ub3NwYWNlO1xcclxcbiAgICAgICAgICAgIHNpemU6IDE0cHg7XFxyXFxuICAgICAgICAgICAgd2VpZ2h0OiAzMDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG4gICAgICAgICY6YWN0aXZlLCAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYgLmVkaXRvcl9fZW50ZXItYnRuIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxyXFxuICAgICAgICBjb2xvcjogIzk5OTk5OTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMHB4IDJweCAjOTk5OTk5O1xcclxcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDBweCAycHggIzk5OTk5OTtcXHJcXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDZweCAwcHggMnB4ICM5OTk5OTk7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ5cHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHggMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHJvdy1nYXA6IDIwcHg7XG59XG4uZm9vdGVyIC5mb290ZXJfX2xpbmtzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiA1MHB4O1xufVxuLmZvb3RlciAuZm9vdGVyX19saW5rIHtcbiAgd2lkdGg6IDExMnB4O1xufVxuLmZvb3RlciAuZm9vdGVyX19saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xufVxuLmZvb3RlciAuZm9vdGVyX195ZWFyIHtcbiAgY29sb3I6ICNmMGUzZGQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFEUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFHWjtBQUFJO0VBQ0ksY0FBQTtBQUVSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICByb3ctZ2FwOiAyMHB4O1xcclxcbiAgICAmIC5mb290ZXJfX2xpbmtzLXdyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgICYgLmZvb3Rlcl9fbGluayB7XFxyXFxuICAgICAgICB3aWR0aDogMTEycHg7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogLjc7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJiAuZm9vdGVyX195ZWFyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjZjBlM2RkO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vLi4vaW1nL2NhZmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudmlldyB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udmlldyAudmlld19fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlldyAudmlld19faGVscC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHBhZGRpbmc6IDhweCAxNXB4IDEwcHggMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4udmlldyAudmlld19faGVscC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XG59XG4udmlldyAudmlld19fZ2FtZWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4udmlldyAudmlld19fdGFibGUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlM2RkO1xufVxuLnZpZXcgLnZpZXdfX2RyaW5rcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogNTBweDtcbn1cbi52aWV3IC52aWV3X19kcmlua3Mtd3JhcHBlciAqIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTg5cHgpIHtcbiAgLnZpZXcgLnZpZXdfX2dhbWVmaWVsZCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzlweCkge1xuICAudmlldyB7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnZpZXcgLnZpZXdfX2dhbWVmaWVsZCB7XG4gICAgem9vbTogMC42O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjVweCkge1xuICAudmlldyAudmlld19fZ2FtZWZpZWxkIHtcbiAgICB6b29tOiAwLjU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0M3B4KSB7XG4gIC52aWV3IC52aWV3X19nYW1lZmllbGQge1xuICAgIHpvb206IDAuNDU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwNXB4KSBhbmQgKG1pbi13aWR0aDogMzYzcHgpIHtcbiAgLnZpZXcgLnZpZXdfX2dhbWVmaWVsZCB7XG4gICAgem9vbTogMC40O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2FtZWZpZWxkL2dhbWVmaWVsZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtIQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVJLGVBQUE7RUFFSixtQkFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBQ1o7QUFFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBRUk7RUFDSTtJQUNJLFNBQUE7RUFBVjtBQUNGO0FBRUk7RUFuREo7SUFvRFEsaUJBQUE7RUFDTjtFQUFNO0lBQ0ksU0FBQTtFQUVWO0FBQ0Y7QUFBSTtFQUNJO0lBQ0ksU0FBQTtFQUVWO0FBQ0Y7QUFBSTtFQUNJO0lBQ0ksVUFBQTtFQUVWO0FBQ0Y7QUFBSTtFQUNJO0lBQ0ksU0FBQTtFQUVWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZpZXcge1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKFxcXCIuLi8uLi8uLi9pbWcvY2FmZS5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgJiAudmlld19fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAmIC52aWV3X19oZWxwLWJ0biB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4yKTtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweCAxMHB4IDE1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgZm9udDoge1xcclxcbiAgICAgICAgICAgIHNpemU6IDFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYgLnZpZXdfX2dhbWVmaWVsZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgJiAudmlld19fdGFibGUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlM2RkO1xcclxcbiAgICB9XFxyXFxuICAgICYgLnZpZXdfX2RyaW5rcy13cmFwcGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxyXFxuICAgICAgICAmICoge1xcclxcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExODlweCkge1xcclxcbiAgICAgICAgJiAudmlld19fZ2FtZWZpZWxkIHtcXHJcXG4gICAgICAgICAgICB6b29tOiAwLjg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM5cHgpIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgJiAudmlld19fZ2FtZWZpZWxkIHtcXHJcXG4gICAgICAgICAgICB6b29tOiAwLjY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI1cHgpIHtcXHJcXG4gICAgICAgICYgLnZpZXdfX2dhbWVmaWVsZCB7XFxyXFxuICAgICAgICAgICAgem9vbTogMC41O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0M3B4KSB7XFxyXFxuICAgICAgICAmIC52aWV3X19nYW1lZmllbGQge1xcclxcbiAgICAgICAgICAgIHpvb206IDAuNDU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDA1cHgpIGFuZCAobWluLXdpZHRoOiAzNjNweCkge1xcclxcbiAgICAgICAgJiAudmlld19fZ2FtZWZpZWxkIHtcXHJcXG4gICAgICAgICAgICB6b29tOiAwLjQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAxNXB4O1xufVxuLmhlYWRlciAuaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIC5oZWFkZXJfX2xvZ28td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG4gIHdpZHRoOiA0OXB4O1xufVxuLmhlYWRlciAuaGVhZGVyX190ZXh0LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgY29sb3I6ICNmMGUzZGQ7XG59XG4uaGVhZGVyIC5oZWFkZXJfX2xhcmdlLXRleHQge1xuICBmb250LWZhbWlseTogXCJTb3VyY2VDb2RlUHJvLVJlZ3VsYXJcIiwgUFQgTW9ubywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaGVhZGVyIC5oZWFkZXJfX3NtYWxsLXRleHQge1xuICBmb250LWZhbWlseTogXCJTb3VyY2VDb2RlUHJvLVJlZ3VsYXJcIiwgUFQgTW9ubywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaGVhZGVyIC5oZWFkZXJfX2J1cmdlci1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB6LWluZGV4OiAzO1xufVxuLmhlYWRlciAuaGVhZGVyX19idXJnZXItYnRuIC5oZWFkZXJfX2J0bi1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmhlYWRlciAuaGVhZGVyX19idXJnZXItYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmhlYWRlciAuaGVhZGVyX19idXJnZXItYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTI5cHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyX19idXJnZXItYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBRVI7QUFBSTtFQUVRLHdEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFFSTtFQUVRLHdEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRFo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUZSO0FBR1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRFo7QUFHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQURaO0FBR1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFEWjtBQUlJO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQUZWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggMTVweDtcXHJcXG4gICAgJiAuaGVhZGVyX19jb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG4gICAgJiAuaGVhZGVyX19sb2dvLXdyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDQ5cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJiAuaGVhZGVyX190ZXh0LWxvZ28ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZjBlM2RkO1xcclxcbiAgICB9XFxyXFxuICAgICYgLmhlYWRlcl9fbGFyZ2UtdGV4dCB7XFxyXFxuICAgICAgICBmb250OiB7XFxyXFxuICAgICAgICAgICAgZmFtaWx5OiBcXFwiU291cmNlQ29kZVByby1SZWd1bGFyXFxcIiwgUFQgTW9ubywgbW9ub3NwYWNlO1xcclxcbiAgICAgICAgICAgIHNpemU6IDMycHg7XFxyXFxuICAgICAgICAgICAgd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJiAuaGVhZGVyX19zbWFsbC10ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQ6IHtcXHJcXG4gICAgICAgICAgICBmYW1pbHk6IFxcXCJTb3VyY2VDb2RlUHJvLVJlZ3VsYXJcXFwiLCBQVCBNb25vLCBtb25vc3BhY2U7XFxyXFxuICAgICAgICAgICAgc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICB3ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmIC5oZWFkZXJfX2J1cmdlci1idG4ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgICAgICB6LWluZGV4OiAzO1xcclxcbiAgICAgICAgJiAuaGVhZGVyX19idG4tbGluZSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyOXB4KSB7XFxyXFxuICAgICAgICAmIC5oZWFkZXJfX2J1cmdlci1idG4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uLy4uL2ltZy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wb3B1cCB7XG4gIHdpZHRoOiA0ODBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlM2RkO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UgYm90aDtcbn1cbi5wb3B1cCAucG9wdXBfX2Nsb3NlLWJ0biB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgcmlnaHQ6IC0yN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4ucG9wdXAgLnBvcHVwX19jbG9zZS1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XG59XG4ucG9wdXAgLnBvcHVwX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogNDJweDtcbn1cbi5wb3B1cCAucG9wdXBfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXhvMlwiLCBMYXRvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzUyNzI5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9wdXAgLnBvcHVwX190ZXh0IHtcbiAgY29sb3I6ICMzNTI3Mjk7XG59XG4ucG9wdXAgLnBvcHVwX19idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgMnB4ICMzNTI3Mjk7XG4gIGNvbG9yOiAjMzUyNzI5O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOXB4IDAgMTFweCAwO1xuICBmb250LWZhbWlseTogXCJFeG8yXCIsIExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wb3B1cCAucG9wdXBfX2J0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5wb3B1cCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjRweCkge1xuICAucG9wdXAge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBR1o7QUFBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVSO0FBQUk7RUFFUSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVKLGNBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUVJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRFo7QUFHUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFEWjtBQUlJO0VBNURKO0lBNkRRLFlBQUE7RUFETjtBQUNGO0FBRUk7RUEvREo7SUFnRVEsWUFBQTtFQUNOO0FBQ0Y7O0FBQ0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQUVOO0VBQUU7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7RUFFTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiA0ODBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlM2RkO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAuNXMgZWFzZSBib3RoO1xcclxcbiAgICAmIC5wb3B1cF9fY2xvc2UtYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAtMzBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAtMjdweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9pbWcvY2xvc2Uuc3ZnJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmIC5wb3B1cF9fd3JhcHBlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICByb3ctZ2FwOiA0MnB4O1xcclxcbiAgICB9XFxyXFxuICAgICYgLnBvcHVwX190aXRsZSB7XFxyXFxuICAgICAgICBmb250OiB7XFxyXFxuICAgICAgICAgICAgZmFtaWx5OiBcXFwiRXhvMlxcXCIsIExhdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgc2l6ZTogMzlweDtcXHJcXG4gICAgICAgICAgICB3ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGNvbG9yOiAjMzUyNzI5O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgICYgLnBvcHVwX190ZXh0IHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzUyNzI5XFxyXFxuICAgIH1cXHJcXG4gICAgJiAucG9wdXBfX2J0biB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzM1MjcyOTtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzUyNzI5O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHggMCAxMXB4IDA7XFxyXFxuICAgICAgICBmb250OiB7XFxyXFxuICAgICAgICAgICAgZmFtaWx5OiBcXFwiRXhvMlxcXCIsIExhdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICB3ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi8uLi9pbWcvaGVscC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi8uLi9pbWcvY2hlY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxldmVsIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmxldmVsIC5sZXZlbF9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJFeG8yXCIsIExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG4ubGV2ZWwgLmxldmVsX19saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzRweDtcbn1cbi5sZXZlbCAubGV2ZWxfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xufVxuLmxldmVsIC5sZXZlbF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxldmVsIC5sZXZlbF9faXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbjtcbn1cbi5sZXZlbCAubGV2ZWxfX2l0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLmxldmVsIC5sZXZlbF9fbnVtIHtcbiAgY29sb3I6ICNmMGUzZGQ7XG59XG4ubGV2ZWwgLmxldmVsX19pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cbi5sZXZlbCAubGV2ZWxfX2luZGljYXRvci5jbHVlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmxldmVsIC5sZXZlbF9faW5kaWNhdG9yLmNvcnJlY3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubGV2ZWwgLmxldmVsX19yZXNldC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgMnB4ICNmMGUzZGQ7XG4gIGNvbG9yOiAjZjBlM2RkO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOXB4IDAgMTFweCAwO1xuICBmb250LWZhbWlseTogXCJFeG8yXCIsIExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5sZXZlbCAubGV2ZWxfX3Jlc2V0LWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjlweCkge1xuICAubGV2ZWwge1xuICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubGV2ZWwubGV2ZWwtLWFjdGl2ZSB7XG4gICAgd2lkdGg6IDM3NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzJweCkge1xuICAubGV2ZWwge1xuICAgIG1heC13aWR0aDogODUlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFFUSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVKLGNBQUE7QUFBUjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtBQUNaO0FBQ1E7RUFDSSwwQ0FBQTtBQUNaO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFSO0FBQ1E7RUFDSSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQUNaO0FBQ1E7RUFDSSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQUNaO0FBRUk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFFSSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURaO0FBR1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRFo7QUFJSTtFQTFFSjtJQTJFUSxnQkFBQTtJQUNBLGFBQUE7RUFETjtFQUVNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxPQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0VBQVY7QUFDRjtBQUVJO0VBckZKO0lBc0ZRLGNBQUE7RUFDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZXZlbCB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgJiAubGV2ZWxfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQ6IHtcXHJcXG4gICAgICAgICAgICBmYW1pbHk6IFxcXCJFeG8yXFxcIiwgTGF0bywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICBzaXplOiAyNXB4O1xcclxcbiAgICAgICAgICAgIHdlaWdodDogNDAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XFxyXFxuICAgIH1cXHJcXG4gICAgJiAubGV2ZWxfX2xpc3Qge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcXHJcXG4gICAgfVxcclxcbiAgICAmIC5sZXZlbF9faXRlbSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcclxcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJi5hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmIC5sZXZlbF9fbnVtIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjZjBlM2RkO1xcclxcbiAgICB9XFxyXFxuICAgICYgLmxldmVsX19pbmRpY2F0b3Ige1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogMThweDtcXHJcXG4gICAgICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgICAgICYuY2x1ZSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi8uLi9pbWcvaGVscC5zdmdcXFwiKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICYuY29ycmVjdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi8uLi9pbWcvY2hlY2suc3ZnXFxcIik7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJiAubGV2ZWxfX3Jlc2V0LWJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggI2YwZTNkZDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZjBlM2RkO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHggMCAxMXB4IDA7XFxyXFxuICAgICAgICBmb250OiB7XFxyXFxuICAgICAgICAgICAgZmFtaWx5OiBcXFwiRXhvMlxcXCIsIExhdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICB3ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTI5cHgpIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzc1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgJi5sZXZlbC0tYWN0aXZlIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzc1cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMnB4KSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDg1JTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC52aWV3ZXIge1xuICB3aWR0aDogNTAlO1xufVxuLnZpZXdlciAudmlld2VyX19oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xufVxuLnZpZXdlciAudmlld2VyX193b3Jrc3BhY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuLnZpZXdlciAudmlld2VyX193b3Jrc3BhY2UgLndvcmtzcGFjZV9fbGluZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cbi52aWV3ZXIgLnZpZXdlcl9fd29ya3NwYWNlIC53b3Jrc3BhY2VfX2NvZGUge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LWZhbWlseTogXCJTb3VyY2VDb2RlUHJvLUxpZ2h0XCIsIFBUIE1vbm8sIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gIC52aWV3ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdmlld2VyL3ZpZXdlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBRVI7QUFBSTtFQUNJLHFDQUFBO0FBRVI7QUFEUTtFQUNJLHFDQUFBO0FBR1o7QUFEUTtFQUNJLGdCQUFBO0VBRUksc0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFSixpQkFBQTtBQUNaO0FBRUk7RUF6Qko7SUEwQlEsV0FBQTtFQUNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZpZXdlciB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICYgLnZpZXdlcl9faGVhZGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcXHJcXG4gICAgfVxcclxcbiAgICAmIC52aWV3ZXJfX3dvcmtzcGFjZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgICAgICYgLndvcmtzcGFjZV9fbGluZS1saXN0IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICYgLndvcmtzcGFjZV9fY29kZSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgICAgICAgICBmb250OiB7XFxyXFxuICAgICAgICAgICAgICAgIGZhbWlseTogXFxcIlNvdXJjZUNvZGVQcm8tTGlnaHRcXFwiLCBQVCBNb25vLCBtb25vc3BhY2U7XFxyXFxuICAgICAgICAgICAgICAgIHNpemU6IDE0cHg7XFxyXFxuICAgICAgICAgICAgICAgIHdlaWdodDogMzAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDlweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9FeG8yLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NvdXJjZUNvZGVQcm8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRXhvMlwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTb3VyY2VDb2RlUHJvLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlQ29kZVByby1MaWdodFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbnRlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG50ZWE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMzRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmV5O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzAlO1xufVxudGVhLm1hdGNoYS1sYXR0ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhYWJiODggMzAlLCAjYWFiYjg4IDcwJSwgI2RmZDJiOSA3MCUsICNkZmQyYjkgOTAlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xufVxudGVhLnRoYWkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZGI4NzU4IDMwJSwgI2RiODc1OCA3MCUsICNkZmQyYjkgNzAlLCAjZGZkMmI5IDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cbnRlYS50YWl3YW5lc2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZDNiMzg3IDMwJSwgI2QzYjM4NyA3MCUsICNkZmQyYjkgNzAlLCAjZGZkMmI5IDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cbnRlYS5zdHJhd2JlcnJ5LCB0ZWEjc3RyYXdiZXJyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhNzczNWQgMzAlLCAjZjQ5MjkwIDMwJSwgI2Y0OTI5MCA5MCUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG50ZWEuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjODY5MjczIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cbnRlYS5ibGFjayB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhNzczNWQgOTAlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xufVxuXG5pY2VkdGVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODAlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbmljZWR0ZWE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogLTM0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBncmV5O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwJTtcbn1cbmljZWR0ZWEubGltZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhNzczNWQgNDAlLCAjZGRlYmM2IDQwJSwgI2RkZWJjNiA5MCUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG5pY2VkdGVhLmdpbmdlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmNWRkYWYgOTAlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xufVxuaWNlZHRlYS5seWNoZWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjYTc3MzVkIDQwJSwgcmdiKDIzOSwgMTc0LCAxNjApIDQwJSwgcmdiKDIzOSwgMTc0LCAxNjApIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cbmljZWR0ZWEudGhhaSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNkYjg3NTggNzAlLCAjZGZkMmI5IDcwJSwgI2RmZDJiOSA5MCUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG5cbnNvZGEge1xuICB3aWR0aDogOTRweDtcbiAgaGVpZ2h0OiAxMzNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAsIDk0JSAwLCA3OCUgMTAwJSwgMjMlIDEwMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxMCUgMCwgOTQlIDAsIDc4JSAxMDAlLCAyMyUgMTAwJSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuc29kYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDg4cHg7XG4gIGhlaWdodDogMTI3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwLCA5NCUgMCwgNzglIDEwMCUsIDIzJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAsIDk0JSAwLCA3OCUgMTAwJSwgMjMlIDEwMCUpO1xufVxuc29kYS55dXp1OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMjUyLCAyMDQsIDgyKSA3MCUsICNmZmZmZmYgMTAwJSk7XG59XG5zb2RhLmx5Y2hlZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDIzOSwgMTc0LCAxNjApIDcwJSwgI2ZmZmZmZiAxMDAlKTtcbn1cbnNvZGEubWVsb246OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxNTQsIDE4NiwgMTA0KSA3MCUsICNmZmZmZmYgMTAwJSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUyNzI5O1xuICBmb250LWZhbWlseTogXCJFeG8yXCIsIExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBtYXJnaW46IDA7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5jb250YWluZXIsIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZjBlM2RkO1xufVxuXG4uYXBwX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwX19sZWZ0LXBhcnQge1xuICB3aWR0aDogODAlO1xufVxuXG4uYXBwX19jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiA1MHB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnRfX2Z1bmN0aW9uYWxpdHktd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDEwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ud29ya3NwYWNlIHtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndvcmtzcGFjZSAud29ya3NwYWNlX19saW5lLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi53b3Jrc3BhY2UgLndvcmtzcGFjZV9fbGluZS1pdGVtIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvdW5jZS02IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZS02O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS02IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAwLjkpIHRyYW5zbGF0ZVkoMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMS4xKSB0cmFuc2xhdGVZKC0xMDBweCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSkgdHJhbnNsYXRlWSgwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNTclIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTdweCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbiAgNjQlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhY2tPdXRSaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5iYWNrT3V0UmlnaHQge1xuICBhbmltYXRpb246IGJhY2tPdXRSaWdodCAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2hha2UtaG9yaXpvbnRhbCB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICAyMCUsIDQwJSwgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xuICB9XG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cHgpO1xuICB9XG59XG4uc2hha2UtaG9yaXpvbnRhbCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBib3RoO1xufVxuXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCA4OCwgODgsIDAuNik7XG4gIHotaW5kZXg6IDE7XG59XG4ucG9wdXAtb3ZlcmxheS5wb3B1cC1vdmVybGF5LS1vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTI5cHgpIHtcbiAgLmNvbnRhaW5lciwgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYXBwX19sZWZ0LXBhcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzlweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ5cHgpIHtcbiAgLmNvbnRlbnQgLmNvbnRlbnRfX2Z1bmN0aW9uYWxpdHktd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2N1cHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsK0RBQUE7QUNDSjtBRENBO0VBQ0ksb0NBQUE7RUFDQSwrREFBQTtBQ0NKO0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLCtEQUFBO0FDQ0o7QUNYQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBRGFKO0FDWks7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBRGNSO0FDWkk7RUFDSSwwSEFBQTtBRGNSO0FDWEk7RUFDSSwwSEFBQTtBRGFSO0FDVkk7RUFDSSwwSEFBQTtBRFlSO0FDVEk7RUFDSSw2R0FBQTtBRFdSO0FDUkk7RUFDSSxtRkFBQTtBRFVSO0FDUkk7RUFDSSxtRkFBQTtBRFVSOztBQ1BBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FEVUo7QUNUSztFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FEV1I7QUNUSTtFQUNJLDZHQUFBO0FEV1I7QUNSSTtFQUNJLG1GQUFBO0FEVVI7QUNSSTtFQUNJLG1JQUFBO0FEVVI7QUNQSTtFQUNJLDZHQUFBO0FEU1I7O0FDTkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0RBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QURTSjtBQ1JJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG9EQUFBO0VBQ0EsNERBQUE7QURVUjtBQ1BRO0VBQ0ksd0VBQUE7QURTWjtBQ0xRO0VBQ0kseUVBQUE7QURPWjtBQ0hRO0VBQ0kseUVBQUE7QURLWjs7QUFoSUE7RUFDSSxzQkFBQTtBQW1JSjs7QUFqSUE7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFFSSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVKLCtCQUFBO0FBa0lKOztBQWhJQTtFQUNJLFNBQUE7QUFtSUo7O0FBaklBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQW9JSjs7QUFsSUE7RUFDSSxTQUFBO0FBcUlKOztBQW5JQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBc0lKOztBQXBJQTtFQUNJLGVBQUE7QUF1SUo7O0FBcklBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUF3SUo7O0FBdElBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBRUosY0FBQTtBQXVJSjs7QUFySUE7RUFDSSxrQkFBQTtBQXdJSjs7QUF0SUE7RUFDSSxVQUFBO0FBeUlKOztBQXZJQTtFQUNJLG1CQUFBO0FBMElKOztBQXhJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQTJJSjtBQTFJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBNElSOztBQXpJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTRJSjtBQTNJSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQTZJUjtBQTNJSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUE2SVI7O0FBMUlBO0VBQ0ksd0JBQUE7QUE2SUo7O0FBMUlBO0VBQ0k7SUFBTyxvQ0FBQTtJQUEwQyx5Q0FBQTtFQStJbkQ7RUE5SUU7SUFBTyx3Q0FBQTtJQUEwQyx5Q0FBQTtFQWtKbkQ7RUFqSkU7SUFBTyw2Q0FBQTtJQUErQywyQ0FBQTtFQXFKeEQ7RUFwSkU7SUFBTywwQ0FBQTtJQUEwQywwQ0FBQTtFQXdKbkQ7RUF2SkU7SUFBTyx1Q0FBQTtJQUE2Qyx5Q0FBQTtFQTJKdEQ7RUExSkU7SUFBTyxvQ0FBQTtJQUEwQyx5Q0FBQTtFQThKbkQ7RUE3SkU7SUFBTyxvQ0FBQTtJQUEwQyx5Q0FBQTtFQWlLbkQ7QUFDRjtBQWhLQTtFQUNJO0lBQ0UsbUNBQUE7SUFDQSxVQUFBO0VBa0tKO0VBaEtFO0lBQ0Usd0NBQUE7SUFDQSxZQUFBO0VBa0tKO0VBaEtFO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VBa0tKO0FBQ0Y7QUFoS0U7RUFDRSwwQ0FBQTtBQWtLSjs7QUEvSkU7RUFDRTtJQUVFLGdDQUFBO0lBQ1Esd0JBQUE7RUFpS1o7RUEvSkU7SUFJRSxvQ0FBQTtJQUNRLDRCQUFBO0VBOEpaO0VBNUpFO0lBR0UsbUNBQUE7SUFDUSwyQkFBQTtFQTRKWjtFQTFKRTtJQUNFLGtDQUFBO0lBQ1EsMEJBQUE7RUE0Slo7RUExSkU7SUFDRSxtQ0FBQTtJQUNRLDJCQUFBO0VBNEpaO0FBQ0Y7QUExSkE7RUFDQyxxRkFBQTtFQUNBLDZFQUFBO0FBNEpEOztBQTFKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QUE2Sko7QUE1Skk7RUFDSSxhQUFBO0FBOEpSOztBQTNKQTtFQUNJO0lBQ0ksV0FBQTtFQThKTjtFQTVKRTtJQUNJLFdBQUE7RUE4Sk47QUFDRjtBQTVKQTtFQUNJO0lBRVEsZUFBQTtFQTZKVjtBQUNGO0FBMUpBO0VBRVE7SUFDSSxzQkFBQTtFQTJKVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkV4bzJcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvRXhvMi1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNvdXJjZUNvZGVQcm8tUmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9Tb3VyY2VDb2RlUHJvLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTb3VyY2VDb2RlUHJvLUxpZ2h0XFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cIixcIkBpbXBvcnQgJ2ZvbnRzJztcXHJcXG5AaW1wb3J0ICdjb2xvcnMnO1xcclxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jdXBzJztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MjcyOTtcXHJcXG4gICAgZm9udDoge1xcclxcbiAgICAgICAgZmFtaWx5OiBcXFwiRXhvMlxcXCIsIExhdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBzaXplOiAxcmVtO1xcclxcbiAgICAgICAgd2VpZ2h0OiA0MDA7XFxyXFxuICAgIH1cXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG59XFxyXFxuaDEsIGgyLCBoMywgaDQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbnVsIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcbi5jb250YWluZXIsIC5oZWFkZXJfX2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250OiB7XFxyXFxuICAgICAgICBzaXplOiA0NXB4O1xcclxcbiAgICAgICAgd2VpZ2h0OiA0MDA7XFxyXFxuICAgIH1cXHJcXG4gICAgY29sb3I6ICNmMGUzZGQ7XFxyXFxufVxcclxcbi5hcHBfX3dyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5hcHBfX2xlZnQtcGFydCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMCUpO1xcclxcbn1cXHJcXG4uYXBwX19jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICByb3ctZ2FwOiA1MHB4O1xcclxcbiAgICAmIC5jb250ZW50X19mdW5jdGlvbmFsaXR5LXdyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogc29saWQgMTBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi53b3Jrc3BhY2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICYgLndvcmtzcGFjZV9fbGluZS1saXN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbiAgICAmIC53b3Jrc3BhY2VfX2xpbmUtaXRlbSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYm91bmNlLTYge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlLTY7XFxyXFxuICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBib3VuY2UtNiB7XFxyXFxuICAgIDAlICAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgICB0cmFuc2xhdGVZKDApOyAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciB9XFxyXFxuICAgIDEwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgICB0cmFuc2xhdGVZKDApOyAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciB9XFxyXFxuICAgIDMwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgICB0cmFuc2xhdGVZKC0xMDBweCk7IC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQgfVxcclxcbiAgICA1MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LC45NSkgdHJhbnNsYXRlWSgwKTsgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluIH1cXHJcXG4gICAgNTclICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoLTdweCk7IC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyIH1cXHJcXG4gICAgNjQlICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoMCk7IC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyIH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoMCk7IC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBiYWNrT3V0UmlnaHQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMSk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICA4MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpIHNjYWxlKC43KTtcXHJcXG4gICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmJhY2tPdXRSaWdodCB7XFxyXFxuICAgIGFuaW1hdGlvbjogYmFja091dFJpZ2h0IDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgc2hha2UtaG9yaXpvbnRhbCB7XFxyXFxuICAgIDAlLFxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMCUsXFxyXFxuICAgIDMwJSxcXHJcXG4gICAgNTAlLFxcclxcbiAgICA3MCUge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAlLFxcclxcbiAgICA0MCUsXFxyXFxuICAgIDYwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgODAlIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgOTAlIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbi5zaGFrZS1ob3Jpem9udGFsIHtcXHJcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2hha2UtaG9yaXpvbnRhbCAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcXHJcXG5cXHRhbmltYXRpb246IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XFxyXFxufVxcclxcbi5wb3B1cC1vdmVybGF5IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDg4LCA4OCwgMC42KTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgJi5wb3B1cC1vdmVybGF5LS1vZmYge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTI5cHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciwgLmhlYWRlcl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcHBfX2xlZnQtcGFydCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzlweCkge1xcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udDoge1xcclxcbiAgICAgICAgICAgIHNpemU6IDMycHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ5cHgpIHtcXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgJiAuY29udGVudF9fZnVuY3Rpb25hbGl0eS13cmFwcGVyIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiLFwidGVhIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IC0zNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBncmV5O1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyZXk7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzAlO1xcclxcbiAgICB9XFxyXFxuICAgICYubWF0Y2hhLWxhdHRlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRtYXRjaGEgMzAlLCAkbWF0Y2hhIDcwJSxcXHJcXG4gICAgICAgICRtaWxrIDcwJSwgJG1pbGsgOTAlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgICYudGhhaSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkdGhhaS10ZWEgMzAlLCAkdGhhaS10ZWEgNzAlLFxcclxcbiAgICAgICAgJG1pbGsgNzAlLCAkbWlsayA5MCUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi50YWl3YW5lc2Uge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHRhaXdhbmVzZS10ZWEgMzAlLCAkdGFpd2FuZXNlLXRlYSA3MCUsXFxyXFxuICAgICAgICAkbWlsayA3MCUsICRtaWxrIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAmLnN0cmF3YmVycnksICYjc3RyYXdiZXJyeSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkYmxhY2stdGVhIDMwJSxcXHJcXG4gICAgICAgICRzdHJhd2JlcnJ5LXN5cnVwIDMwJSwgJHN0cmF3YmVycnktc3lydXAgOTAlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgICYuZ3JlZW4ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGdyZWVuLXRlYSA5MCUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5ibGFjayB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkYmxhY2stdGVhIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5pY2VkdGVhIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODAlO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMjBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAtMzRweDtcXHJcXG4gICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBncmV5O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZXk7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwJTtcXHJcXG4gICAgfVxcclxcbiAgICAmLmxpbWUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGJsYWNrLXRlYSA0MCUsICRsaW1lLXN5cnVwIDQwJSxcXHJcXG4gICAgICAgICRsaW1lLXN5cnVwIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAmLmdpbmdlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkZ2luZ2VyIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAmLmx5Y2hlZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkYmxhY2stdGVhIDQwJSwgJGx5Y2hlZSA0MCUsXFxyXFxuICAgICAgICAkbHljaGVlIDkwJSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAmLnRoYWkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHRoYWktdGVhIDcwJSwgJG1pbGsgNzAlLCAkbWlsayA5MCUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuc29kYSB7XFxyXFxuICAgIHdpZHRoOiA5NHB4O1xcclxcbiAgICBoZWlnaHQ6IDEzM3B4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMCwgOTQlIDAsIDc4JSAxMDAlLCAyMyUgMTAwJSk7XFxyXFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwLCA5NCUgMCwgNzglIDEwMCUsIDIzJSAxMDAlKTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHdpZHRoOiA4OHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjdweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgdG9wOiAzcHg7XFxyXFxuICAgICAgICBsZWZ0OiAzcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XFxyXFxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAsIDk0JSAwLCA3OCUgMTAwJSwgMjMlIDEwMCUpO1xcclxcbiAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAsIDk0JSAwLCA3OCUgMTAwJSwgMjMlIDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgICYueXV6dSB7XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICR5dXp1IDcwJSwgI2ZmZmZmZiAxMDAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLmx5Y2hlZSB7XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRseWNoZWUgNzAlLCAjZmZmZmZmIDEwMCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYubWVsb24ge1xcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkbWVsb24gNzAlLCAjZmZmZmZmIDEwMCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExODlweCkge1xcclxcbi8vICAgICB0ZWEge1xcclxcbi8vICAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuLy8gICAgICAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuLy8gICAgICAgICAvLyBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4vLyAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxyXFxuLy8gICAgICAgICAgICAgd2lkdGg6IDE5LjJweDtcXHJcXG4vLyAgICAgICAgICAgICByaWdodDogLTI1cHg7XFxyXFxuLy8gICAgICAgICB9XFxyXFxuLy8gICAgIH1cXHJcXG4vLyAgICAgaWNlZHRlYSB7XFxyXFxuLy8gICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4vLyAgICAgICAgIGhlaWdodDogODIuNXB4O1xcclxcbi8vICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxyXFxuLy8gICAgICAgICAgICAgd2lkdGg6IDE5LjJweDtcXHJcXG4vLyAgICAgICAgICAgICByaWdodDogLTI1cHg7XFxyXFxuLy8gICAgICAgICAgICAgdG9wOiAxNHB4O1xcclxcbi8vICAgICAgICAgfVxcclxcbi8vICAgICB9XFxyXFxuLy8gICAgIHNvZGEge1xcclxcbi8vICAgICAgICAgd2lkdGg6IDc0cHg7XFxyXFxuLy8gICAgICAgICBoZWlnaHQ6IDEwNC43cHg7XFxyXFxuLy8gICAgICAgICAmOjpiZWZvcmUge1xcclxcbi8vICAgICAgICAgICAgIGhlaWdodDogOTguMXB4O1xcclxcbi8vICAgICAgICAgICAgIHdpZHRoOiA2OHB4O1xcclxcbi8vICAgICAgICAgfVxcclxcbi8vICAgICB9XFxyXFxuLy8gfVxcclxcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczOXB4KSB7XFxyXFxuLy8gICAgIHRlYSB7XFxyXFxuLy8gICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4vLyAgICAgICAgIGhlaWdodDogNDhweDtcXHJcXG4vLyAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbi8vICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbi8vICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4vLyAgICAgICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4vLyAgICAgICAgICAgICByaWdodDogLTIwcHg7XFxyXFxuLy8gICAgICAgICB9XFxyXFxuLy8gICAgIH1cXHJcXG4vLyAgICAgaWNlZHRlYSB7XFxyXFxuLy8gICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4vLyAgICAgICAgIGhlaWdodDogNTVweDtcXHJcXG4vLyAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbi8vICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuLy8gICAgICAgICAgICAgd2lkdGg6IDE1cHg7XFxyXFxuLy8gICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xcclxcbi8vICAgICAgICAgICAgIHRvcDogOXB4O1xcclxcbi8vICAgICAgICAgfVxcclxcbi8vICAgICB9XFxyXFxuLy8gICAgIHNvZGEge1xcclxcbi8vICAgICAgICAgd2lkdGg6IDU0cHg7XFxyXFxuLy8gICAgICAgICBoZWlnaHQ6IDc2LjRweDtcXHJcXG4vLyAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbi8vICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDcyLjJweDtcXHJcXG4vLyAgICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4vLyAgICAgICAgICAgICB0b3A6IDJweDtcXHJcXG4vLyAgICAgICAgICAgICBsZWZ0OiAycHg7XFxyXFxuLy8gICAgICAgICB9XFxyXFxuLy8gICAgIH1cXHJcXG4vLyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lZmllbGQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVmaWVsZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi92aWV3ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZpZXdlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdHlwZXNcIik7XG5jb25zdCBlbWl0dGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9lbWl0dGVyXCIpO1xuY29uc3QgaGVhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCIpKTtcbmNvbnN0IHNpZGViYXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhclwiKSk7XG5jb25zdCBnYW1lZmllbGRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL2dhbWVmaWVsZC9nYW1lZmllbGRcIikpO1xuY29uc3Qgdmlld2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy92aWV3ZXIvdmlld2VyXCIpKTtcbmNvbnN0IGVkaXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvclwiKSk7XG5jb25zdCBmb290ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIikpO1xuY29uc3QgbGV2ZWxzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RhdGEvbGV2ZWxzXCIpKTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgY3VyckxldmVsID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmN1cnJMZXZlbCkpIHx8IDE7XG4gICAgbGV0IGFwcExldmVscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmxldmVscykgfHwgbnVsbDtcbiAgICBsZXQgbGV2ZWxzQXJyO1xuICAgIGlmIChjdXJyTGV2ZWwgPT09IDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmN1cnJMZXZlbCwgSlNPTi5zdHJpbmdpZnkoY3VyckxldmVsKSk7XG4gICAgaWYgKGFwcExldmVscykge1xuICAgICAgICBsZXZlbHNBcnIgPSBKU09OLnBhcnNlKGFwcExldmVscyk7XG4gICAgICAgIGNyZWF0ZVZpZXcobGV2ZWxzQXJyLCBjdXJyTGV2ZWwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZXNfMS5QYXJhbXMubGV2ZWxzLCBKU09OLnN0cmluZ2lmeShsZXZlbHNfMS5kZWZhdWx0KSk7XG4gICAgICAgIGFwcExldmVscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmxldmVscyk7XG4gICAgICAgIGlmIChhcHBMZXZlbHMpIHtcbiAgICAgICAgICAgIGxldmVsc0FyciA9IEpTT04ucGFyc2UoYXBwTGV2ZWxzKTtcbiAgICAgICAgICAgIGNyZWF0ZVZpZXcobGV2ZWxzQXJyLCBjdXJyTGV2ZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gaW5pdDtcbmZ1bmN0aW9uIGNyZWF0ZVZpZXcobHZscywgY3VycmVudEx2bCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJyk7XG4gICAgY29uc3Qgc2lkZWJhckNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBnYW1lZmllbGRDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgdmlld2VyQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxlZnRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IGhlYWRlciA9IG5ldyBoZWFkZXJfMS5kZWZhdWx0KCkuY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgZm9vdGVyID0gbmV3IGZvb3Rlcl8xLmRlZmF1bHQoKS5jcmVhdGVGb290ZXIoKTtcbiAgICBjb25zdCBzaWRlYmFyID0gbmV3IHNpZGViYXJfMS5kZWZhdWx0KGx2bHNbY3VycmVudEx2bCAtIDFdLCBsdmxzKS5jcmVhdGVTaWRlQmFyKCk7XG4gICAgY29uc3Qgdmlld2VyID0gbmV3IHZpZXdlcl8xLmRlZmF1bHQobHZsc1tjdXJyZW50THZsIC0gMV0sIGx2bHMpLmNyZWF0ZVZpZXdlcigpO1xuICAgIGNvbnN0IGdhbWVmaWVsZCA9IG5ldyBnYW1lZmllbGRfMS5kZWZhdWx0KGx2bHNbY3VycmVudEx2bCAtIDFdLCBsdmxzKS5jcmVhdGVHYW1lZmllbGQoKTtcbiAgICBjb25zdCBlZGl0b3IgPSBuZXcgZWRpdG9yXzEuZGVmYXVsdChsdmxzW2N1cnJlbnRMdmwgLSAxXSwgbHZscykuY3JlYXRlRWRpdG9yKCk7XG4gICAgc2lkZWJhckNvbnQuY2xhc3NOYW1lID0gJ2FwcF9fd3JhcHBlcic7XG4gICAgZ2FtZWZpZWxkQ29udC5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICB2aWV3ZXJDb250LmNsYXNzTmFtZSA9ICdjb250ZW50X19mdW5jdGlvbmFsaXR5LXdyYXBwZXInO1xuICAgIGxlZnRQYXJ0LmNsYXNzTmFtZSA9ICdhcHBfX2xlZnQtcGFydCc7XG4gICAgbWFpbkJsb2NrLmNsYXNzTmFtZSA9ICdjb250ZW50IGFwcF9fY29udGVudCc7XG4gICAgdmlld2VyQ29udC5hcHBlbmQoZWRpdG9yLCB2aWV3ZXIpO1xuICAgIGdhbWVmaWVsZENvbnQuYXBwZW5kKGdhbWVmaWVsZCwgdmlld2VyQ29udCk7XG4gICAgc2lkZWJhckNvbnQuYXBwZW5kKGxlZnRQYXJ0LCBzaWRlYmFyKTtcbiAgICBtYWluQmxvY2suYXBwZW5kKGdhbWVmaWVsZENvbnQpO1xuICAgIGxlZnRQYXJ0LmFwcGVuZChoZWFkZXIsIG1haW5CbG9jaywgZm9vdGVyKTtcbiAgICBpZiAoYm9keSkge1xuICAgICAgICBib2R5LmFwcGVuZChzaWRlYmFyQ29udCk7XG4gICAgfVxuICAgIGVtaXR0ZXJfMS5FbWl0dGVyLmVtaXQoJ2luaXQnLCBsdmxzW2N1cnJlbnRMdmwgLSAxXSwgbHZscyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2VkaXRvci5zY3NzXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy90eXBlc1wiKTtcbmNvbnN0IGVtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9lbWl0dGVyXCIpO1xuY29uc3QgcG9wdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcG9wdXAvcG9wdXBcIikpO1xuY2xhc3MgRWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihsdmwsIGx2bHMpIHtcbiAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgIHRoaXMubHZscyA9IGx2bHM7XG4gICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICB0aGlzLmx2bHMgPSBsdmxzO1xuICAgICAgICB0aGlzLmN1cnJMZXZlbCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jdXJyTGV2ZWwpKSB8fCAxO1xuICAgICAgICB0aGlzLmlzQ2x1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsdWVDb3VudCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jbHVlQ291bnQpKSB8fCAwO1xuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJzID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmNvcnJlY3RhbnN3ZXJzKSkgfHwgMDtcbiAgICAgICAgZW1pdHRlcl8xLkVtaXR0ZXIub24oJ2hlbHAnLCAoY2x1ZSwgY2x1ZUNvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsdWVDb3VudCA9IGNsdWVDb3VudDtcbiAgICAgICAgICAgIHRoaXMuaGVscChjbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLm9uKCdyZXNldCcsIChsdmwsIGN1cnJMdmwsIGNsdWVDb3VudCwgY29ycmVjdEFuc3dlcnMsIGx2bHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fZW50cnktZmllbGQnKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmx2bCA9IGx2bDtcbiAgICAgICAgICAgIHRoaXMuY3VyckxldmVsID0gY3Vyckx2bDtcbiAgICAgICAgICAgIHRoaXMuY2x1ZUNvdW50ID0gY2x1ZUNvdW50O1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VycyA9IGNvcnJlY3RBbnN3ZXJzO1xuICAgICAgICAgICAgdGhpcy5sdmxzID0gbHZscztcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbignY2hhbmdlTGV2ZWwnLCAobHZsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmx2bCA9IGx2bDtcbiAgICAgICAgICAgIHRoaXMuY3VyckxldmVsID0gbHZsLmlkO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19lbnRyeS1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZUVkaXRvcigpIHtcbiAgICAgICAgY29uc3QgZWRpdG9yRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGVkaXRvckZpZWxkLmNsYXNzTmFtZSA9ICdlZGl0b3IgY29udGVudF9fZWRpdG9yJztcbiAgICAgICAgZWRpdG9yRmllbGQuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJlZGl0b3JfX2hlYWRlclwiPlxuICAgICAgPHNwYW4+Q1NTIEVkaXRvcjwvc3Bhbj5cbiAgICAgIDxzcGFuPnN0eWxlLmNzczwvc3Bhbj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwid29ya3NwYWNlIGVkaXRvcl9fd29ya3NwYWNlXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjE8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj4yPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MzwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjQ8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj41PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+NjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjc8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj44PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+OTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjEwPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTE8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj4xMjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjEzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTQ8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj4xNTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjE2PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTc8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj4xODwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjE5PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MjA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW50cnktZmllbGRcIiBjbGFzcz1cImVkaXRvcl9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW50cnktZmllbGRcIiBjbGFzcz1cImVkaXRvcl9fZW50cnktZmllbGRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVkaXRvcl9fZW50ZXItYnRuXCI+ZW50ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICBlZGl0b3JGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdG9yX19lbnRlci1idG4nKSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3Q2hlY2tTZWxlY3RvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVkaXRvckZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0b3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19lbnRlci1idG4nKTtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yQnRuKVxuICAgICAgICAgICAgICAgICAgICBlZGl0b3JCdG4uY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlZGl0b3JGaWVsZDtcbiAgICB9XG4gICAgaGVscChjbHVlKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjbHVlO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2VudHJ5LWZpZWxkJyk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHNwZWxsVGV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgKz0gdGV4dC5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNwZWxsVGV4dCwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzcGVsbFRleHQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmV3Q2hlY2tTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19lbnRyeS1maWVsZCcpO1xuICAgICAgICBsZXQgc3RhdGU7XG4gICAgICAgIGxldCBwcmV2THZsO1xuICAgICAgICBsZXQgbm90Q29tcGxldGVkTHZsO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsID0gaW5wdXQudmFsdWUuc3BsaXQoL1xccysvKS5qb2luKCcnKTtcbiAgICAgICAgICAgIGlmIChpbnB1dFZhbCAhPT0gJycgJiYgdGhpcy5sdmwuc2VsZWN0b3IuaW5jbHVkZXMoaW5wdXRWYWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VycyArPSAxO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmNvcnJlY3RhbnN3ZXJzLCBTdHJpbmcodGhpcy5jb3JyZWN0QW5zd2VycykpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvcnJlY3RBbnN3ZXJzIDwgdGhpcy5sdmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2THZsID0gdGhpcy5sdmw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmx2bHNbdGhpcy5jdXJyTGV2ZWwgLSAxXS5zdGF0ZSA9PT0gdHlwZXNfMS5TdGF0ZXMuTm90Q29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0eXBlc18xLlN0YXRlcy5Db21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHR5cGVzXzEuU3RhdGVzLkNsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmx2bHNbdGhpcy5jdXJyTGV2ZWwgLSAxXS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZXNfMS5QYXJhbXMubGV2ZWxzLCBKU09OLnN0cmluZ2lmeSh0aGlzLmx2bHMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdENvbXBsZXRlZEx2bCA9IHRoaXMubHZscy5maW5kKChlbGVtKSA9PiBlbGVtLnN0YXRlID09PSB0eXBlc18xLlN0YXRlcy5Ob3RDb21wbGV0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdENvbXBsZXRlZEx2bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyckxldmVsID0gbm90Q29tcGxldGVkTHZsLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHZsID0gdGhpcy5sdmxzW3RoaXMuY3VyckxldmVsIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZXNfMS5QYXJhbXMuY3VyckxldmVsLCBTdHJpbmcodGhpcy5jdXJyTGV2ZWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLmVtaXQoJ2NoZWNrU2VsZWN0b3InLCB0aGlzLmx2bCwgcHJldkx2bCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Q29tcGxldGVkTHZsID0gdGhpcy5sdmxzLmZpbmQoKGVsZW0pID0+IGVsZW0uc3RhdGUgPT09IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90Q29tcGxldGVkTHZsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyTGV2ZWwgPSBub3RDb21wbGV0ZWRMdmwuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdmwgPSB0aGlzLmx2bHNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jdXJyTGV2ZWwsIFN0cmluZyh0aGlzLmN1cnJMZXZlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbHVlQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblBvcHVwKCd3aW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblBvcHVwKCdsb3NlJywgdGhpcy5jbHVlQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fZnVuY3Rpb25hbGl0eS13cmFwcGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVXcmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NoYWtlLWhvcml6b250YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZS1ob3Jpem9udGFsJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9wZW5Qb3B1cChyZXMsIGNsdWVzKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJyk7XG4gICAgICAgIGxldCBwb3B1cDtcbiAgICAgICAgaWYgKGNsdWVzKSB7XG4gICAgICAgICAgICBwb3B1cCA9IG5ldyBwb3B1cF8xLmRlZmF1bHQocmVzLCBjbHVlcykuY3JlYXRlUG9wdXAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVwID0gbmV3IHBvcHVwXzEuZGVmYXVsdChyZXMpLmNyZWF0ZVBvcHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHkpXG4gICAgICAgICAgICBib2R5LmFwcGVuZChwb3B1cCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9mb290ZXIuc2Nzc1wiKTtcbmNvbnN0IHJzX3NjaG9vbF9qc19zdmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vaW1nL3JzX3NjaG9vbF9qcy5zdmdcIikpO1xuY29uc3QgZ2l0aHViX3N2Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvZ2l0aHViLnN2Z1wiKSk7XG5jbGFzcyBGb290ZXIge1xuICAgIGNyZWF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19saW5rcy13cmFwcGVyXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJmb290ZXJfX2xpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2lkaWFtb25kY2F0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb290ZXJfX2ljb24gZm9vdGVyX19pY29uLS1naXRcIiBzcmM9JHtnaXRodWJfc3ZnXzEuZGVmYXVsdH0+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwiZm9vdGVyX19saW5rXCIgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZm9vdGVyX19pY29uIGZvb3Rlcl9faWNvbi0tcnNzXCIgc3JjPSR7cnNfc2Nob29sX2pzX3N2Z18xLmRlZmF1bHR9PlxuICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX3llYXJcIj4ke3llYXIuZ2V0RnVsbFllYXIoKX08L3NwYW4+XG4gICAgYDtcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBGb290ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2dhbWVmaWVsZC5zY3NzXCIpO1xuY29uc3QgZW1pdHRlcl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL2VtaXR0ZXJcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3R5cGVzXCIpO1xuY2xhc3MgR2FtZWZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihsdmwsIGx2bHMpIHtcbiAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgIHRoaXMubHZscyA9IGx2bHM7XG4gICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICB0aGlzLmx2bHMgPSBsdmxzO1xuICAgICAgICB0aGlzLmNsdWVDb3VudCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jbHVlQ291bnQpKSB8fCAwO1xuICAgICAgICB0aGlzLmN1cnJMZXZlbCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jdXJyTGV2ZWwpKSB8fCAxO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbignY2hlY2tTZWxlY3RvcicsIChsdmwpID0+IHtcbiAgICAgICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICAgICAgdGhpcy5sb2FkR2FtZWZpZWxkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbignY2hhbmdlTGV2ZWwnLCAobHZsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmx2bCA9IGx2bDtcbiAgICAgICAgICAgIHRoaXMubG9hZEdhbWVmaWVsZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZW1pdHRlcl8xLkVtaXR0ZXIub24oJ3Jlc2V0JywgKGx2bCwgY3Vyckx2bCwgY2x1ZUNvdW50LCBjb3JyZWN0QW5zd2VycywgbHZscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgICAgICB0aGlzLmN1cnJMZXZlbCA9IGN1cnJMdmw7XG4gICAgICAgICAgICB0aGlzLmNsdWVDb3VudCA9IGNsdWVDb3VudDtcbiAgICAgICAgICAgIHRoaXMubHZscyA9IGx2bHM7XG4gICAgICAgICAgICB0aGlzLmxvYWRHYW1lZmllbGQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLm9uKCdpbml0JywgKGx2bCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgICAgICB0aGlzLmxvYWRHYW1lZmllbGQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZUdhbWVmaWVsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZUZpZWxkTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgZ2FtZUZpZWxkTWFpbi5jbGFzc05hbWUgPSAndmlldyBjb250ZW50X192aWV3JztcbiAgICAgICAgZ2FtZUZpZWxkTWFpbi5pbm5lckhUTUwgKz0gYFxuICAgICAgPGgxIGNsYXNzPVwidGl0bGUgdmlld19fdGl0bGVcIj48L2gxPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpZXdfX2hlbHAtYnRuXCI+SGVscCwgSSdtIHN0dWNrITwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInZpZXdfX2dhbWVmaWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmlld19fZHJpbmtzLXdyYXBwZXJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3X190YWJsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgZ2FtZUZpZWxkTWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aWV3X19oZWxwLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sdmwuc3RhdGUgPT09IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZXNfMS5QYXJhbXMuY2x1ZUNvdW50LCBTdHJpbmcodGhpcy5jbHVlQ291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5lbWl0KCdoZWxwJywgdGhpcy5sdmwuc2VsZWN0b3JbMF0sIHRoaXMuY2x1ZUNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGxldmVsIGlzIGFscmVhZHkgY29tcGxldGVkOiAnICsgdGhpcy5sdmwuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdhbWVGaWVsZE1haW47XG4gICAgfVxuICAgIGxvYWRHYW1lZmllbGQoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHZpZXdDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdfX2RyaW5rcy13cmFwcGVyJyk7XG4gICAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRoaXMubHZsLnRpdGxlO1xuICAgICAgICBpZiAodmlld0NvbnQpIHtcbiAgICAgICAgICAgIHZpZXdDb250LmlubmVySFRNTCA9IHRoaXMubHZsLm1hcmt1cDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVNlbGVjdG9ycyA9IHZpZXdDb250LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGhpcy5sdmwuc2VsZWN0b3JbMF19YCk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlU2VsZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VsZWN0b3JzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdib3VuY2UtNicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZWZpZWxkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9oZWFkZXIuc2Nzc1wiKTtcbmNsYXNzIEhlYWRlciB7XG4gICAgY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28td3JhcHBlclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJsb2dvIGhlYWRlcl9fbG9nb1wiIHNyYz1cIi4vaW1nL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX3RleHQtbG9nb1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXJfX2xhcmdlLXRleHRcIj5DU1M8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlcl9fc21hbGwtdGV4dFwiPmJhcmlzdGE8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaGVhZGVyX19idXJnZXItYnRuIGhlYWRlcl9fYnVyZ2VyLWJ0bi0taGlkZGVuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXJfX2J0bi1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbCcpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicgJiZcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19idXJnZXItYnRuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpZGViYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnbGV2ZWwtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdsZXZlbC0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2xldmVsLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9wb3B1cC5zY3NzXCIpO1xuY29uc3QgcmVzZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvcmVzZXRcIikpO1xuY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlLCBjbHVlcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuY2x1ZXMgPSBjbHVlcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLmNsdWVzID0gY2x1ZXM7XG4gICAgfVxuICAgIGNyZWF0ZVBvcHVwKCkge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAtb3ZlcmxheSc7XG4gICAgICAgIHBvcHVwLmlubmVySFRNTCArPSBgXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInBvcHVwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3B1cF9fY2xvc2UtYnRuXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInBvcHVwX190aXRsZVwiPiR7dGhpcy5zdGF0ZSA9PT0gJ3dpbicgPyAnWW91IFdpbiEnIDogJ1lvdSBMb3NlISd9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXBfX3RleHRcIj4ke3RoaXMuY2x1ZXMgPyAnWW91IHVzZWQgJyArIHRoaXMuY2x1ZXMgKyAnIGhpbnRzJyA6ICcnfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3B1cF9fYnRuXCIgdHlwZT1cImJ1dHRvblwiPnRyeSBhZ2FpbjwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2J0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgcmVzZXRfMS5kZWZhdWx0KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxheSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZS1idG4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxheSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBvcHVwO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFBvcHVwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBlbWl0dGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvZW1pdHRlclwiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdHlwZXNcIik7XG5jbGFzcyBMZXZlbEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkeCwgbHZsLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLmlkeCA9IGlkeDtcbiAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5pZHggPSBpZHg7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLm9uKCdpbml0JywgKGx2bCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgICAgICB0aGlzLmxvYWRJdGVtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbignY2hlY2tTZWxlY3RvcicsIChsdmwsIHByZXZsdmwsIHN0YXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmx2bCA9IGx2bDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkeCA9PT0gcHJldmx2bC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxldmVsXyR7dGhpcy5pZHh9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2RWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBwcmV2RWxlbS5xdWVyeVNlbGVjdG9yKCcubGV2ZWxfX2luZGljYXRvcicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gdHlwZXNfMS5TdGF0ZXMuQ2x1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdjbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0eXBlc18xLlN0YXRlcy5Db21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkSXRlbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZW1pdHRlcl8xLkVtaXR0ZXIub24oJ3Jlc2V0JywgKGx2bCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5sdmwuc3RhdGU7XG4gICAgICAgICAgICB0aGlzLmxvYWRJdGVtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVMZXZlbEl0ZW0oKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xldmVsX19pdGVtJyk7XG4gICAgICAgIGl0ZW0uaWQgPSBgbGV2ZWxfJHt0aGlzLmlkeH1gO1xuICAgICAgICBpdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwibGV2ZWxfX251bVwiPiR7dGhpcy5pZHh9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsZXZlbF9faW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgIGA7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbCcpO1xuICAgICAgICAgICAgICAgIGxldCB0aGlzSXRlbUx2bDtcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWxzQXJyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcExldmVscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmxldmVscykgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoYXBwTGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsc0FyciA9IEpTT04ucGFyc2UoYXBwTGV2ZWxzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0l0ZW1MdmwgPSBsZXZlbHNBcnIuZmluZCgoZWxlbSkgPT4gZWxlbS5pZCA9PT0gdGhpcy5pZHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRJdGVtKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmN1cnJMZXZlbCwgU3RyaW5nKHRoaXMuaWR4KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzSXRlbUx2bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sdmwgPSB0aGlzSXRlbUx2bDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLmVtaXQoJ2NoYW5nZUxldmVsJywgdGhpcy5sdmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdsZXZlbC0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIGxvYWRJdGVtKHRhcmdldCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZXNfMS5QYXJhbXMuY3VyckxldmVsKSkgfHwgMTtcbiAgICAgICAgY29uc3QgY3VycmVudExldmVsRWxlbSA9IHRhcmdldCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGV2ZWxfJHt0aGlzLmlkeH1gKTtcbiAgICAgICAgY29uc3QgcHJldkN1cnJBY3RpdmVFTGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsX19pdGVtLmFjdGl2ZScpO1xuICAgICAgICBpZiAoY3VycmVudExldmVsRWxlbSkge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gY3VycmVudExldmVsRWxlbS5xdWVyeVNlbGVjdG9yKCcubGV2ZWxfX2luZGljYXRvcicpO1xuICAgICAgICAgICAgaWYgKGluZGljYXRvcikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0eXBlc18xLlN0YXRlcy5DbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdjbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHR5cGVzXzEuU3RhdGVzLkNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2NsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT09IHRoaXMuaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2Q3VyckFjdGl2ZUVMZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2Q3VyckFjdGl2ZUVMZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZDdXJyQWN0aXZlRUxlbSlcbiAgICAgICAgICAgICAgICAgICAgcHJldkN1cnJBY3RpdmVFTGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMZXZlbEl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3NpZGViYXIuc2Nzc1wiKTtcbmNvbnN0IGVtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9lbWl0dGVyXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy90eXBlc1wiKTtcbmNvbnN0IGxldmVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbGV2ZWxcIikpO1xuY29uc3QgcmVzZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvcmVzZXRcIikpO1xuY2xhc3MgU2lkZUJhciB7XG4gICAgY29uc3RydWN0b3IobHZsLCBsdmxzKSB7XG4gICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICB0aGlzLmx2bHMgPSBsdmxzO1xuICAgICAgICB0aGlzLmx2bCA9IGx2bDtcbiAgICAgICAgdGhpcy5sdmxzID0gbHZscztcbiAgICAgICAgdGhpcy5jdXJyTGV2ZWwgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZXNfMS5QYXJhbXMuY3VyckxldmVsKSkgfHwgMTtcbiAgICAgICAgdGhpcy5jbHVlQ291bnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZXNfMS5QYXJhbXMuY2x1ZUNvdW50KSkgfHwgMDtcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VycyA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jb3JyZWN0YW5zd2VycykpIHx8IDA7XG4gICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLm9uKCdyZXNldCcsIChsdmwsIGN1cnJMdmwsIGNsdWVDb3VudCwgY29ycmVjdEFuc3dlcnMsIGx2bHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICAgICAgdGhpcy5jdXJyTGV2ZWwgPSBjdXJyTHZsO1xuICAgICAgICAgICAgdGhpcy5jbHVlQ291bnQgPSBjbHVlQ291bnQ7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXJzID0gY29ycmVjdEFuc3dlcnM7XG4gICAgICAgICAgICB0aGlzLmx2bHMgPSBsdmxzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlU2lkZUJhcigpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIGNvbnN0IGxldmVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ2xldmVsJztcbiAgICAgICAgbGV2ZWxMaXN0LmNsYXNzTmFtZSA9ICdsZXZlbF9fbGlzdCc7XG4gICAgICAgIHJlc2V0QnRuLmNsYXNzTmFtZSA9ICdsZXZlbF9fcmVzZXQtYnRuJztcbiAgICAgICAgcmVzZXRCdG4uaW5uZXJUZXh0ID0gJ1Jlc2V0IFByb2dyZXNzJztcbiAgICAgICAgdGhpcy5sdmxzLmZvckVhY2goKGx2bCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZXZlbCA9IG5ldyBsZXZlbF8xLmRlZmF1bHQoaWR4ICsgMSwgbHZsLCBsdmwuc3RhdGUpO1xuICAgICAgICAgICAgbGV2ZWxMaXN0LmFwcGVuZChsZXZlbC5jcmVhdGVMZXZlbEl0ZW0oKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZChsZXZlbExpc3QsIHJlc2V0QnRuKTtcbiAgICAgICAgc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbF9fcmVzZXQtYnRuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCByZXNldF8xLmRlZmF1bHQpKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTaWRlQmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi92aWV3ZXIuc2Nzc1wiKTtcbmNvbnN0IGVtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9lbWl0dGVyXCIpO1xuY2xhc3MgVmlld2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsdmwsIGx2bHMpIHtcbiAgICAgICAgdGhpcy5sdmwgPSBsdmw7XG4gICAgICAgIHRoaXMubHZscyA9IGx2bHM7XG4gICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICB0aGlzLmx2bHMgPSBsdmxzO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbignY2hlY2tTZWxlY3RvcicsIChsdmwpID0+IHtcbiAgICAgICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbigncmVzZXQnLCAobHZsLCBjdXJyTHZsLCBjbHVlQ291bnQsIGNvcnJlY3RBbnN3ZXJzLCBsdmxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmx2bCA9IGx2bDtcbiAgICAgICAgICAgIHRoaXMubHZscyA9IGx2bHM7XG4gICAgICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLm9uKCdjaGFuZ2VMZXZlbCcsIChsdmwpID0+IHtcbiAgICAgICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbWl0dGVyXzEuRW1pdHRlci5vbignaW5pdCcsIChsdmwpID0+IHtcbiAgICAgICAgICAgIHRoaXMubHZsID0gbHZsO1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVWaWV3ZXIoKSB7XG4gICAgICAgIGNvbnN0IHZpZXdlckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICB2aWV3ZXJGaWVsZC5jbGFzc05hbWUgPSAndmlld2VyIGNvbnRlbnRfX3ZpZXdlcic7XG4gICAgICAgIHZpZXdlckZpZWxkLmlubmVySFRNTCA9IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwidmlld2VyX19oZWFkZXJcIj5cbiAgICAgIDxzcGFuPkhUTUwgVmlld2VyPC9zcGFuPlxuICAgICAgPHNwYW4+dGFibGUuaHRtbDwvc3Bhbj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwid29ya3NwYWNlIHZpZXdlcl9fd29ya3NwYWNlXCI+XG4gICAgICA8dWwgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtbGlzdFwiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj4yPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjM8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+NDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj41PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjY8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+NzwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwid29ya3NwYWNlX19saW5lLWl0ZW1cIj44PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJ3b3Jrc3BhY2VfX2xpbmUtaXRlbVwiPjk8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTE8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTI8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTM8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTQ8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTU8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTY8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTc8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTg8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MTk8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIndvcmtzcGFjZV9fbGluZS1pdGVtXCI+MjA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwIGNsYXNzPVwid29ya3NwYWNlX19jb2RlXCI+PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIHJldHVybiB2aWV3ZXJGaWVsZDtcbiAgICB9XG4gICAgbG9hZFZpZXdlcigpIHtcbiAgICAgICAgY29uc3QgaHRtbENvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3NwYWNlX19jb2RlJyk7XG4gICAgICAgIGlmIChodG1sQ29kZSlcbiAgICAgICAgICAgIGh0bWxDb2RlLmlubmVyVGV4dCA9IHRoaXMubHZsLm1hcmt1cDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRW1pdHRlciA9IHZvaWQgMDtcbmNsYXNzIEVtaXR0ZXIge1xuICAgIHN0YXRpYyBvbihrZXksIGZ1bmMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSAoX2EgPSB0aGlzLmV2ZW50c1trZXldKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBuZXcgU2V0KCk7XG4gICAgICAgIGxpc3RlbmVycy5hZGQoZnVuYyk7XG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBsaXN0ZW5lcnM7XG4gICAgfVxuICAgIHN0YXRpYyBlbWl0KGtleSwgLi4uYXJncykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IChfYSA9IHRoaXMuZXZlbnRzW2tleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBvZmYoa2V5LCBmdW5jKSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudHNba2V5XSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5ldmVudHNba2V5XS5oYXMoZnVuYykgPyBBcnJheS5mcm9tKHRoaXMuZXZlbnRzW2tleV0pLmluZGV4T2YoZnVuYykgOiBudWxsO1xuICAgICAgICBpZiAoaWR4ICYmIGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuZXZlbnRzW2tleV0pLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbn1cbmV4cG9ydHMuRW1pdHRlciA9IEVtaXR0ZXI7XG5FbWl0dGVyLmV2ZW50cyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBlbWl0dGVyXzEgPSByZXF1aXJlKFwiLi9lbWl0dGVyXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgY29uc3QgbHZscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVzXzEuUGFyYW1zLmxldmVscyk7XG4gICAgY29uc3QgY3VyckxldmVsID0gMTtcbiAgICBjb25zdCBjbHVlQ291bnQgPSAwO1xuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJzID0gMDtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jdXJyTGV2ZWwsIEpTT04uc3RyaW5naWZ5KDEpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jbHVlQ291bnQsIEpTT04uc3RyaW5naWZ5KDApKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlc18xLlBhcmFtcy5jb3JyZWN0YW5zd2VycywgSlNPTi5zdHJpbmdpZnkoMCkpO1xuICAgIGlmIChsdmxzKSB7XG4gICAgICAgIGNvbnN0IGx2bHNBcnIgPSBKU09OLnBhcnNlKGx2bHMpO1xuICAgICAgICBsdmxzQXJyLm1hcCgoZWxlbSkgPT4gKGVsZW0uc3RhdGUgPSB0eXBlc18xLlN0YXRlcy5Ob3RDb21wbGV0ZWQpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZXNfMS5QYXJhbXMubGV2ZWxzLCBKU09OLnN0cmluZ2lmeShsdmxzQXJyKSk7XG4gICAgICAgIGVtaXR0ZXJfMS5FbWl0dGVyLmVtaXQoJ3Jlc2V0JywgbHZsc0FyclswXSwgY3VyckxldmVsLCBjbHVlQ291bnQsIGNvcnJlY3RBbnN3ZXJzLCBsdmxzQXJyKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSByZXNldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGF0ZXMgPSBleHBvcnRzLlBhcmFtcyA9IHZvaWQgMDtcbnZhciBQYXJhbXM7XG4oZnVuY3Rpb24gKFBhcmFtcykge1xuICAgIFBhcmFtc1tcImxldmVsc1wiXSA9IFwibGV2ZWxzXCI7XG4gICAgUGFyYW1zW1wiY3VyckxldmVsXCJdID0gXCJsZXZlbFwiO1xuICAgIFBhcmFtc1tcImNsdWVDb3VudFwiXSA9IFwiY2x1ZWNvdW50XCI7XG4gICAgUGFyYW1zW1wiY2x1ZVN0YXRlc1wiXSA9IFwiY2x1ZVN0YXRlc1wiO1xuICAgIFBhcmFtc1tcImNvcnJlY3RhbnN3ZXJzXCJdID0gXCJjb3JyZWN0QW5zd2Vyc1wiO1xufSkoUGFyYW1zIHx8IChleHBvcnRzLlBhcmFtcyA9IFBhcmFtcyA9IHt9KSk7XG52YXIgU3RhdGVzO1xuKGZ1bmN0aW9uIChTdGF0ZXMpIHtcbiAgICBTdGF0ZXNbXCJDbHVlXCJdID0gXCJjbHVlXCI7XG4gICAgU3RhdGVzW1wiQ29tcGxldGVkXCJdID0gXCJjb21wbGV0ZWRcIjtcbiAgICBTdGF0ZXNbXCJOb3RDb21wbGV0ZWRcIl0gPSBcIm5vdGNvbXBsZXRlZFwiO1xufSkoU3RhdGVzIHx8IChleHBvcnRzLlN0YXRlcyA9IFN0YXRlcyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vYXBwL3V0aWxzL3R5cGVzXCIpO1xuY29uc3QgbGV2ZWxzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHN0YXRlOiB0eXBlc18xLlN0YXRlcy5Ob3RDb21wbGV0ZWQsXG4gICAgICAgIHRpdGxlOiAnU2VsZWN0IGFsbCB0ZWEnLFxuICAgICAgICBzZWxlY3RvcjogWyd0ZWEnLCAnKiddLFxuICAgICAgICBtYXJrdXA6IGA8dGVhIGNsYXNzPVwidGhhaVwiPjwvdGVhPlxuICAgICAgICAgICAgPHRlYSBjbGFzcz1cIm1hdGNoYS1sYXR0ZVwiPjwvdGVhPlxuICAgICAgICAgICAgPHRlYSBjbGFzcz1cInRhaXdhbmVzZVwiPjwvdGVhPlxuICAgICAgICBgLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgc3RhdGU6IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgZ3JlZW4gdGVhJyxcbiAgICAgICAgc2VsZWN0b3I6IFsnLmdyZWVuJywgJ3RlYTpudGgtY2hpbGQoMiknXSxcbiAgICAgICAgbWFya3VwOiBgPHRlYSBjbGFzcz1cImJsYWNrXCI+PC90ZWE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwiZ3JlZW5cIj48L3RlYT5cbiAgICAgICAgICAgIDx0ZWEgY2xhc3M9XCJibGFja1wiPjwvdGVhPlxuICAgICAgICBgLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgc3RhdGU6IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgYmxhY2sgdGVhIGFuZCB0YWl3YW5lc2UgdGVhJyxcbiAgICAgICAgc2VsZWN0b3I6IFsndGVhOm50aC1vZi10eXBlKDJuKzIpJywgJ3RlYTpudGgtb2YtdHlwZShldmVuKSddLFxuICAgICAgICBtYXJrdXA6IGA8dGVhIGNsYXNzPVwibWF0Y2hhLWxhdHRlXCI+PC90ZWE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwiYmxhY2tcIj48L3RlYT5cbiAgICAgICAgICAgIDx0ZWEgY2xhc3M9XCJ0aGFpXCI+PC90ZWE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwidGFpd2FuZXNlXCI+PC90ZWE+XG4gICAgICAgIGAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBzdGF0ZTogdHlwZXNfMS5TdGF0ZXMuTm90Q29tcGxldGVkLFxuICAgICAgICB0aXRsZTogJ1NlbGVjdCBzdHJhd2JlcnJ5IHRlYScsXG4gICAgICAgIHNlbGVjdG9yOiBbJyNzdHJhd2JlcnJ5JywgJ3RlYTpmaXJzdC1jaGlsZCddLFxuICAgICAgICBtYXJrdXA6IGA8dGVhIGlkPVwic3RyYXdiZXJyeVwiPjwvdGVhPlxuICAgICAgICAgICAgPHRlYSBjbGFzcz1cIm1hdGNoYS1sYXR0ZVwiPjwvdGVhPlxuICAgICAgICAgICAgPGljZWR0ZWEgY2xhc3M9XCJsaW1lXCI+PC9pY2VkdGVhPlxuICAgICAgICBgLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgc3RhdGU6IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgYWxsIGRyaW5rcycsXG4gICAgICAgIHNlbGVjdG9yOiBbJyonXSxcbiAgICAgICAgbWFya3VwOiBgPHRlYSBjbGFzcz1cImJsYWNrXCI+PC90ZWE+XG4gICAgICAgICAgICA8aWNlZHRlYSBjbGFzcz1cImxpbWVcIj48L2ljZWR0ZWE+XG4gICAgICAgICAgICA8c29kYSBjbGFzcz1cInl1enVcIj48L3NvZGE+XG4gICAgICAgIGAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBzdGF0ZTogdHlwZXNfMS5TdGF0ZXMuTm90Q29tcGxldGVkLFxuICAgICAgICB0aXRsZTogJ1NlbGVjdCBseWNoZWUgc29kYSwgdXNpbmcgKyBzZWxlY3RvcicsXG4gICAgICAgIHNlbGVjdG9yOiBbJy5tZWxvbisubHljaGVlJywgJy5seWNoZWUnXSxcbiAgICAgICAgbWFya3VwOiBgPHNvZGEgY2xhc3M9XCJ5dXp1XCI+PC9zb2RhPlxuICAgICAgICAgICAgPHNvZGEgY2xhc3M9XCJtZWxvblwiPjwvc29kYT5cbiAgICAgICAgICAgIDxzb2RhIGNsYXNzPVwibHljaGVlXCI+PC9zb2RhPlxuICAgICAgICBgLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgc3RhdGU6IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3Qgc29kYSwgdXNpbmcgfiBzZWxlY3RvcicsXG4gICAgICAgIHNlbGVjdG9yOiBbJ2ljZWR0ZWF+c29kYSddLFxuICAgICAgICBtYXJrdXA6IGA8aWNlZHRlYSBjbGFzcz1cImdpbmdlclwiPjwvaWNlZHRlYT5cbiAgICAgICAgICAgIDxzb2RhIGNsYXNzPVwibWVsb25cIj48L3NvZGE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwidGhhaVwiPjwvdGVhPlxuICAgICAgICAgICAgPHNvZGEgY2xhc3M9XCJseWNoZWVcIj48L3NvZGE+XG4gICAgICAgIGAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBzdGF0ZTogdHlwZXNfMS5TdGF0ZXMuTm90Q29tcGxldGVkLFxuICAgICAgICB0aXRsZTogJ1NlbGVjdCBmaXJzdCBpY2VkdGVhJyxcbiAgICAgICAgc2VsZWN0b3I6IFsnaWNlZHRlYTpmaXJzdC1jaGlsZCddLFxuICAgICAgICBtYXJrdXA6IGA8aWNlZHRlYSBjbGFzcz1cInRoYWlcIj48L2ljZWR0ZWE+XG4gICAgICAgICAgICA8aWNlZHRlYSBjbGFzcz1cImx5Y2hlZVwiPjwvaWNlZHRlYT5cbiAgICAgICAgICAgIDxpY2VkdGVhIGNsYXNzPVwibGltZVwiPjwvaWNlZHRlYT5cbiAgICAgICAgYCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIHN0YXRlOiB0eXBlc18xLlN0YXRlcy5Ob3RDb21wbGV0ZWQsXG4gICAgICAgIHRpdGxlOiAnU2VsZWN0IGFsbCB0ZWEgZXhjZXB0IGxhc3Qgb25lJyxcbiAgICAgICAgc2VsZWN0b3I6IFsndGVhOm5vdCg6bGFzdC1jaGlsZCknXSxcbiAgICAgICAgbWFya3VwOiBgPHRlYSBjbGFzcz1cImdyZWVuXCI+PC90ZWE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwidGFpd2FuZXNlXCI+PC90ZWE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwibWF0Y2hhLWxhdHRlXCI+PC90ZWE+XG4gICAgICAgIGAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgc3RhdGU6IHR5cGVzXzEuU3RhdGVzLk5vdENvbXBsZXRlZCxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3Qgb25seSBvbmUgZHJpbmsnLFxuICAgICAgICBzZWxlY3RvcjogWydpY2VkdGVhOm9ubHktb2YtdHlwZSddLFxuICAgICAgICBtYXJrdXA6IGA8dGVhIGNsYXNzPVwidGhhaVwiPjwvdGVhPlxuICAgICAgICAgICAgPGljZWR0ZWEgY2xhc3M9XCJseWNoZWVcIj48L2ljZWR0ZWE+XG4gICAgICAgICAgICA8c29kYSBjbGFzcz1cInl1enVcIj48L3NvZGE+XG4gICAgICAgICAgICA8dGVhIGlkPVwic3RyYXdiZXJyeVwiXCI+PC90ZWE+XG4gICAgICAgICAgICA8dGVhIGNsYXNzPVwiYmxhY2tcIj48L3RlYT5cbiAgICAgICAgICAgIDxzb2RhIGNsYXNzPVwibWVsb25cIj48L3NvZGE+XG4gICAgICAgIGAsXG4gICAgfSxcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBsZXZlbHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3Njc3Mvc3R5bGUuc2Nzc1wiKTtcbmNvbnN0IGFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcC9hcHBcIikpO1xuKDAsIGFwcF8xLmRlZmF1bHQpKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9