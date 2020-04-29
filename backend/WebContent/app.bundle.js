/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HOST = window.CONFIG.HOST;
var BACKEND_BASE_URL = "http://" + HOST + "/backend";
var BACKEND_WS = "ws://" + HOST + "/backend/endpoint";
exports.endpoint = {
    crearPartida: function (nickName, bando) { return BACKEND_BASE_URL + "/crearpartida?nickName=" + nickName + "&bando=" + bando; },
    getPartida: function () { return BACKEND_BASE_URL + "/getpartida"; },
    unirsePartida: function (nickName) { return BACKEND_BASE_URL + "/unirsepartida?nickName=" + nickName; },
    guardarPartida: function () { return BACKEND_BASE_URL + "/guardarpartida"; },
    listarPartidas: function () { return BACKEND_BASE_URL + "/listarpartidas"; },
    cargarPartida: function () { return BACKEND_BASE_URL + "/cargarpartida"; },
    finalizarPartida: function () { return BACKEND_BASE_URL + "/finalizarpartida"; },
    ws: function () { return BACKEND_WS; },
};


/***/ }),

/***/ "./src/gameObjects/agua.ts":
/*!*********************************!*\
  !*** ./src/gameObjects/agua.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarAgua = function (scene, width, height) {
    scene.anims.create({
        key: 'water',
        frames: scene.anims.generateFrameNumbers('water', {
            start: 0,
            end: 15,
        }),
        frameRate: 6,
        repeat: -1,
        repeatDelay: 50,
    });
    var config = [];
    for (var i = 0; i < Math.ceil(height / 32); i += 1) {
        config.push({
            key: 'water',
            repeat: Math.ceil(width / 32),
            setXY: {
                x: 0,
                y: i * 32,
                stepX: 32,
            },
        });
    }
    var group = scene.add.group();
    group.createMultiple(config);
    group.setTint(150);
    group.setOrigin(0, 0);
    group.playAnimation('water');
    return group;
};


/***/ }),

/***/ "./src/gameObjects/disparo.ts":
/*!************************************!*\
  !*** ./src/gameObjects/disparo.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Disparo = /** @class */ (function (_super) {
    __extends(Disparo, _super);
    function Disparo(scene, x, y, arma, rotacion) {
        var _this = _super.call(this, scene, x, y, arma.sprite) || this;
        _this.initialRotationSet = false;
        _this.collisionHandler = function (_event, bodyA, bodyB) {
            // al chocar con el borde del mapa
            if (bodyA.density === Infinity || bodyB.density === Infinity) {
                _this.destroy();
            }
            else if (bodyA.gameObject && bodyB.gameObject
                && (((bodyA.gameObject.getData && bodyA.gameObject.getData('tipo') === 'patruya') || bodyA.gameObject === _this)
                    && ((bodyB.gameObject.getData && bodyB.gameObject.getData('tipo') === 'patruya') || bodyB.gameObject === _this))) {
                _this.destroy();
            }
            else if (bodyA.gameObject && bodyB.gameObject
                && (((bodyA.gameObject.getData && bodyA.gameObject.getData('tipo') === 'pesquero') || bodyA.gameObject === _this)
                    && ((bodyB.gameObject.getData && bodyB.gameObject.getData('tipo') === 'pesquero') || bodyB.gameObject === _this))) {
                var pesquero = bodyA.gameObject.getData('tipo') === 'pesquero' ? bodyA.gameObject : bodyB.gameObject;
                pesquero.setData('vida', pesquero.getData('vida') - _this.arma.danio);
                _this.destroy();
            }
        };
        var f = new Phaser.Physics.Matter.Factory(scene.matter.world);
        f.gameObject(_this, {}, true);
        scene.add.existing(_this);
        _this.arma = arma;
        _this.initialPositionX = x;
        _this.initialPositionY = y;
        _this.getMatterSprite().setBody('circle');
        _this.setRotation(rotacion);
        _this.setScale(_this.arma.escala);
        _this.scene.matter.world.on('collisionstart', _this.collisionHandler);
        _this.scene.cameras.getCamera('camaraLateral').ignore(_this);
        return _this;
    }
    Disparo.prototype.getMatterSprite = function () {
        return this;
    };
    Disparo.prototype.preUpdate = function (_timeElapsed, timeLastUpdate) {
        if (Phaser.Math.Distance.Between(this.x, this.y, this.initialPositionX, this.initialPositionY) >= this.arma.distancia) {
            this.destroy();
            return;
        }
        this.getMatterSprite().thrust(this.arma.velocidad * (timeLastUpdate / 1000));
    };
    Disparo.prototype.destroy = function () {
        this.scene.matter.world.removeListener('collisionstart', this.collisionHandler);
        _super.prototype.destroy.call(this);
    };
    return Disparo;
}(Phaser.GameObjects.Sprite));
exports.Disparo = Disparo;


/***/ }),

/***/ "./src/gameObjects/dron.ts":
/*!*********************************!*\
  !*** ./src/gameObjects/dron.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var Dron = /** @class */ (function (_super) {
    __extends(Dron, _super);
    function Dron(scene, x, y, toX, toY, arma, rotacion, patruya) {
        var _this = _super.call(this, scene, x, y, arma.sprite) || this;
        _this.initialRotationSet = false;
        _this.collisionHandler = function (_event, bodyA, bodyB) {
            if (_this.regresando) {
                _this.colisionConPatruya(bodyA, bodyB);
            }
            else if (!_this.siguiendo) {
                _this.encuentroConPesquero(bodyA, bodyB);
            }
            else if (_this.siguiendo) {
                _this.colisionSiguiendoPesquero(bodyA, bodyB);
            }
        };
        _this.colisionConPatruya = function (bodyA, bodyB) {
            if (bodyA.gameObject && bodyB.gameObject
                && (bodyA.gameObject === _this.patruya || bodyA.gameObject === _this)
                && (bodyB.gameObject === _this.patruya || bodyB.gameObject === _this)) {
                _this.sensor.destroy();
                _this.destroy();
            }
        };
        _this.encuentroConPesquero = function (bodyA, bodyB) {
            var goA = bodyA.gameObject;
            var goB = bodyB.gameObject;
            if (goA && goB
                && ((goA.getData && goA.getData('tipoPesquero') === _this.arma.puedeNeutralizar) || goA === _this.sensor)
                && ((goB.getData && goB.getData('tipoPesquero') === _this.arma.puedeNeutralizar) || goB === _this.sensor)) {
                var pesquero = (goA === _this ? goB : goA);
                _this.siguiendo = pesquero;
            }
        };
        _this.colisionSiguiendoPesquero = function (bodyA, bodyB) {
            var goA = bodyA.gameObject;
            var goB = bodyB.gameObject;
            if (goA && goB
                && ((goA.getData && goA.getData('tipoPesquero') === _this.arma.puedeNeutralizar) || goA === _this)
                && ((goB.getData && goB.getData('tipoPesquero') === _this.arma.puedeNeutralizar) || goB === _this)) {
                _this.siguiendo.destroy();
                _this.siguiendo = null;
            }
        };
        _this.getVision = function () { return _this.vision; };
        _this.sensor = new Phaser.GameObjects.Arc(scene, x, y); // , 150, 0, 360, false, 45);
        scene.add.existing(_this.sensor);
        var f = new Phaser.Physics.Matter.Factory(scene.matter.world);
        f.gameObject(_this.sensor, { circleRadius: 150, isSensor: true });
        f.gameObject(_this, {}, true);
        _this.setScale(0.3);
        scene.add.existing(_this);
        // animacion
        _this.play(arma.sprite);
        // sonido
        if (arma.sonido) {
            _this.sonido = scene.sound.add(arma.sonido, { loop: true });
            _this.sonido.play();
        }
        _this.arma = arma;
        _this.patruya = patruya;
        _this.destino = { x: toX, y: toY };
        _this.setRotation(rotacion);
        _this.vision = new Phaser.GameObjects.Sprite(scene, 0, 0, 'vision');
        _this.tween = _this.scene.tweens.add({
            targets: _this.getMatterSprite(),
            props: {
                x: toX,
                y: toY,
            },
            duration: 3500,
        });
        _this.fechaCreacion = moment();
        _this.scene.matter.world.on('collisionstart', _this.collisionHandler);
        _this.scene.cameras.getCamera('camaraLateral').ignore(_this);
        return _this;
    }
    Dron.prototype.preUpdate = function (timeElapsed, timeLastUpdate) {
        _super.prototype.preUpdate.call(this, timeElapsed, timeLastUpdate);
        this.sensor.body.position.x = this.body.position.x;
        this.sensor.body.position.y = this.body.position.y;
        // si termino el ttl, tiene que volver al barco
        if (moment().add(-this.arma.ttl, 'seconds').isAfter(this.fechaCreacion)) {
            this.regresando = true;
            var rotacion = Phaser.Math.Angle.Between(this.x, this.y, this.patruya.x, this.patruya.y);
            var velocidadAngular = this.arma.velocidadAngular * (timeLastUpdate / 1000);
            // arreglar que rote para el lado que tenga que rotar menos
            if (Math.abs(Math.abs(rotacion) - Math.abs(this.rotation)) > velocidadAngular) {
                this.setRotation(this.rotation > rotacion
                    ? this.rotation - velocidadAngular : this.rotation + velocidadAngular);
            }
            else {
                this.getMatterSprite().thrust(this.arma.velocidad);
            }
        }
        else if (this.siguiendo) {
            this.tween.complete();
            var rotacion = Phaser.Math.Angle.Between(this.x, this.y, this.siguiendo.x, this.siguiendo.y);
            var velocidadAngular = this.arma.velocidadAngular * (timeLastUpdate / 1000);
            // arreglar que rote para el lado que tenga que rotar menos
            if (Math.abs(Math.abs(rotacion) - Math.abs(this.rotation)) > velocidadAngular) {
                this.setRotation(this.rotation > rotacion
                    ? this.rotation - velocidadAngular : this.rotation + velocidadAngular);
            }
            else {
                this.getMatterSprite().thrust(this.arma.velocidad);
            }
        }
    };
    Dron.prototype.getMatterSprite = function () {
        return this;
    };
    Dron.prototype.destroy = function () {
        var _this = this;
        if (this.sonido) {
            this.sonido.stop();
        }
        var d = this.patruya.barcosAuxiliares.find(function (va) { return va === _this; });
        if (d) {
            this.patruya.barcosAuxiliares[d.arma.id] = null;
        }
        this.scene.matter.world.remove(this.collisionHandler);
        _super.prototype.destroy.call(this);
    };
    return Dron;
}(Phaser.GameObjects.Sprite));
exports.Dron = Dron;


/***/ }),

/***/ "./src/gameObjects/mensaje.ts":
/*!************************************!*\
  !*** ./src/gameObjects/mensaje.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Mensaje = /** @class */ (function (_super) {
    __extends(Mensaje, _super);
    function Mensaje(scene, x, y, displayTime, callback) {
        var _this = _super.call(this, scene, x, y) || this;
        var manini = new Phaser.GameObjects.Sprite(scene, 0, 0, 'manini')
            .setScale(0.1, 0.1)
            .setOrigin(0, 0);
        var texto = new Phaser.GameObjects.Text(scene, manini.displayWidth + 10, manini.displayHeight / 2, 'Se acabó el recreo', { color: '#000000' })
            .setOrigin(0, 0.5);
        var rectangulo = new Phaser.GameObjects.Rectangle(scene, 0, 0, manini.displayWidth + 10 + texto.width + 10, manini.displayHeight, 0xFFFFFF).setOrigin(0, 0);
        _this.add(rectangulo);
        _this.add(texto);
        _this.add(manini);
        _this.setDepth(200).setScrollFactor(0).setPosition(x - rectangulo.width / 2, y);
        scene.add.existing(_this);
        setTimeout(function () { _this.destroy(); callback(); }, displayTime);
        scene.sound.play('manini');
        scene.cameras.getCamera('minimap').ignore(_this);
        return _this;
    }
    return Mensaje;
}(Phaser.GameObjects.Container));
exports.Mensaje = Mensaje;


/***/ }),

/***/ "./src/gameObjects/muelle.ts":
/*!***********************************!*\
  !*** ./src/gameObjects/muelle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Muelle = /** @class */ (function (_super) {
    __extends(Muelle, _super);
    function Muelle(scene, x, y, sprite) {
        var _this = _super.call(this, scene, x, y, sprite) || this;
        _this.onCollideActiveCallbackHandler = function (pair) {
            var go;
            if (pair.bodyA.gameObject && pair.bodyA.gameObject.getData && pair.bodyA.gameObject.getData('tipo') === 'patruya') {
                go = pair.bodyA.gameObject;
            }
            else if (pair.bodyB.gameObject && pair.bodyB.gameObject.getData && pair.bodyB.gameObject.getData('tipo') === 'patruya') {
                go = pair.bodyB.gameObject;
            }
            if (go) {
                go.recargarCombustible(0.5);
            }
        };
        _this.setPosition(x - _this.width / 2, y - _this.height / 2);
        var f = new Phaser.Physics.Matter.Factory(scene.matter.world);
        f.gameObject(_this, { isStatic: true }, true);
        scene.add.existing(_this);
        _this.sensor = new Phaser.GameObjects.Ellipse(scene, x - _this.width / 2, y - _this.height / 2, _this.width + 100, _this.height + 100);
        f.gameObject(_this.sensor, {
            isStatic: true,
            isSensor: true,
            onCollideActiveCallback: _this.onCollideActiveCallbackHandler,
        }, true);
        scene.add.existing(_this.sensor);
        return _this;
    }
    return Muelle;
}(Phaser.GameObjects.Sprite));
exports.Muelle = Muelle;


/***/ }),

/***/ "./src/gameObjects/patrulla.ts":
/*!*************************************!*\
  !*** ./src/gameObjects/patrulla.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var vehiculo_1 = __webpack_require__(/*! ./vehiculo */ "./src/gameObjects/vehiculo.ts");
var disparo_1 = __webpack_require__(/*! ./disparo */ "./src/gameObjects/disparo.ts");
var dron_1 = __webpack_require__(/*! ./dron */ "./src/gameObjects/dron.ts");
var mensaje_1 = __webpack_require__(/*! ./mensaje */ "./src/gameObjects/mensaje.ts");
var GOPatrulla = /** @class */ (function (_super) {
    __extends(GOPatrulla, _super);
    function GOPatrulla(scene, vehicle, data) {
        var _this = _super.call(this, scene, vehicle, data) || this;
        _this.ultimoDisparo = [];
        _this.armaSeleccionada = 0;
        _this.yendoAlMuelle = false;
        _this.barcosAuxiliares = [];
        _this.collisionHandler = function (_event, bodyA, bodyB) {
            if (bodyA.gameObject && bodyB.gameObject
                && (bodyA.gameObject === _this.getVision() || bodyB.gameObject === _this.getVision())
                && ((bodyA.gameObject.getData && bodyA.gameObject.getData('tipo') === 'pesquero')
                    || (bodyB.gameObject.getData && bodyB.gameObject.getData('tipo') === 'pesquero'))) {
                _this.scene.matter.world.removeListener('collisionstart', _this.collisionHandler);
                var _a = _this.scene.game.canvas, width = _a.width, height = _a.height;
                // eslint-disable-next-line no-new
                new mensaje_1.Mensaje(_this.scene, width / 2, height - 300, 5000, function () { _this.armasHabilitadas = true; });
            }
            _this.hayTormenta = false;
        };
        _this.disparoHandler = function (data) {
            if (data.id !== _this.getData('id'))
                return;
            if (data.arma.tipo === 'disparo') {
                // eslint-disable-next-line no-new
                new disparo_1.Disparo(_this.scene, data.x, data.y, data.arma, _this.rotation);
                _this.scene.sound.play(data.arma.sonido);
            }
            else {
                // eslint-disable-next-line no-new
                var d = new dron_1.Dron(_this.scene, data.x, data.y, data.pointer.x, data.pointer.y, data.arma, _this.rotation, _this);
                _this.barcosAuxiliares[data.arma.id] = d;
            }
        };
        _this.keyboardHandler = function (event) {
            if (_this.getData('armas')) {
                var armas = _this.getData('armas');
                if (!event.shiftKey && armas[event.keyCode - 49])
                    _this.armaSeleccionada = event.keyCode - 49;
            }
        };
        _this.dispararHandle = function (pointer) {
            if (_this.getData('selected') && !_this.hayTormenta && _this.getData('millaLimite') < _this.y) {
                var armas = _this.getData('armas');
                var arma = armas[_this.armaSeleccionada];
                if (_this.armasHabilitadas && (!_this.ultimoDisparo[_this.armaSeleccionada] || moment().add(-arma.cadencia, 'seconds').isAfter(moment(_this.ultimoDisparo[_this.armaSeleccionada])))) {
                    _this.disparo(arma, pointer);
                    _this.ultimoDisparo[_this.armaSeleccionada] = moment();
                }
            }
        };
        _this.recargarCombustible = function (cantidad) {
            var combustibleActual = _this.getData('combustibleActual');
            if (_this.getData('combustibleMaximo') > combustibleActual) {
                _this.setData('combustibleActual', combustibleActual + cantidad);
                if (_this.getData('sendToServer')) {
                    server.enviar(server.EVENTOS.COMBUSTIBLE, {
                        nick: _this.getData('nick'),
                        id: _this.getVehiculo().id,
                        combustible: combustibleActual + cantidad,
                    });
                }
            }
        };
        _this.irAlMuelle = function () {
            _this.yendoAlMuelle = true;
            var muelle = _this.getData('muelle');
            var rotacion = Phaser.Math.Angle.Between(_this.x, _this.y, muelle.x, muelle.y);
            var rotacionDuracion = Math.abs((_this.rotation + rotacion) % (Math.PI * 2)) / (_this.getData('angularVelocity') / 1000);
            var distancia = Math.abs(Phaser.Math.Distance.Between(_this.x, _this.y, muelle.x, muelle.y));
            var tiempoDistancia = distancia / 0.1;
            _this.scene.tweens.add({
                targets: _this,
                props: {
                    rotation: rotacion,
                },
                duration: rotacionDuracion,
                onComplete: function () { return _this.scene.tweens.add({
                    targets: _this,
                    props: {
                        x: muelle.x,
                        y: muelle.y,
                    },
                    duration: tiempoDistancia,
                    onComplete: function () { _this.yendoAlMuelle = false; },
                }); },
            });
        };
        if (vehicle.sprite === 'policia1')
            _this.setScale(0.6);
        if (vehicle.armas && vehicle.armas.length) {
            _this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, _this.dispararHandle);
            _this.scene.input.keyboard.on('keydown', _this.keyboardHandler);
        }
        server.addhandler(server.EVENTOS.DISPARO, _this.disparoHandler);
        _this.scene.matter.world.on('collisionstart', _this.collisionHandler);
        _this.bateria = _this.scene.add.text(_this.x, _this.y, '', { font: 'bold 20px Arial', color: '#007f00' });
        scene.add.existing(_this.bateria);
        _this.bateria.setOrigin(0.5, -1.9);
        _this.scene.cameras.getCamera('camaraLateral').ignore(_this.bateria);
        _this.scene.cameras.getCamera('minimap').ignore(_this.bateria);
        return _this;
    }
    GOPatrulla.prototype.preUpdate = function (timeElapsed, timeLastUpdate) {
        var _this = this;
        if (this.getData('combustibleActual') <= 0) {
            if (this.yendoAlMuelle) {
                if (this.getData('sendToServer')) {
                    server.enviar(server.EVENTOS.MOVER_BARCO, {
                        nick: this.getData('nick'), id: this.getVehiculo().id, x: this.x, y: this.y, rotacion: this.rotation,
                    });
                }
            }
            if (!this.yendoAlMuelle)
                this.irAlMuelle();
            return;
        }
        _super.prototype.preUpdate.call(this, timeElapsed, timeLastUpdate);
        this.scene.events.on('inicioTormenta', function () {
            if (_this.getData('sprite') === 'policia2') {
                // console.log('deshabilito policia chico');
                _this.hayTormenta = true;
            }
        });
        this.scene.events.on('finTormenta', function () {
            if (_this.getData('sprite') === 'policia2') {
                // console.log('habilito policia chico');
                _this.hayTormenta = false;
            }
        });
        if (this.getData('nick') === this.getData('jugadorLocal').nick) {
            var maximo = this.getData('combustibleMaximo');
            var porcentajeUno = maximo / 100;
            var porcentajeComb = this.getData('combustibleActual') / porcentajeUno;
            var mostrar = porcentajeComb.toFixed(1) + "%";
            this.bateria.setText(mostrar);
            this.bateria.setPosition(this.x, this.y);
        }
    };
    // trigonometria no es la mejor opcion pero fue la que se me ocurrio
    GOPatrulla.prototype.disparo = function (arma, pointer) {
        var rotacionAntihoraria = (this.rotation - (Math.PI / 2)) * -1;
        var rotacionPositiva = rotacionAntihoraria >= 0
            ? rotacionAntihoraria % (Math.PI * 2) : (Math.PI * 2) + (rotacionAntihoraria % (Math.PI * 2));
        var radianes = (rotacionPositiva) % (Math.PI * 2);
        var posRelativaX = (this.displayWidth / 2 + 50) * Math.sin(radianes);
        var posRelativaY = (this.displayHeight / 2 + 50) * Math.cos(radianes);
        if (arma.tipo === 'disparo') {
            // eslint-disable-next-line no-new
            new disparo_1.Disparo(this.scene, this.x + posRelativaX, this.y + posRelativaY, arma, this.rotation);
            server.enviar(server.EVENTOS.DISPARO, {
                id: this.getData('id'),
                x: this.x + posRelativaX,
                y: this.y + posRelativaY,
                arma: arma,
            });
            this.scene.sound.play(arma.sonido);
        }
        else if (!this.barcosAuxiliares[arma.id]) {
            var _a = this.scene.cameras.main.getWorldPoint(pointer.x, pointer.y), x = _a.x, y = _a.y;
            var rotacion = Phaser.Math.Angle.Between(this.x, this.y, x, y);
            // eslint-disable-next-line no-new
            var d = new dron_1.Dron(this.scene, this.x + posRelativaX, this.y + posRelativaY, x, y, arma, rotacion, this);
            this.barcosAuxiliares[arma.id] = d;
            server.enviar(server.EVENTOS.DISPARO, {
                id: this.getData('id'),
                x: this.x + posRelativaX,
                y: this.y + posRelativaY,
                pointer: {
                    x: x,
                    y: y,
                },
                arma: arma,
            });
        }
    };
    return GOPatrulla;
}(vehiculo_1.GOVehiculo));
exports.GOPatrulla = GOPatrulla;


/***/ }),

/***/ "./src/gameObjects/pesquero.ts":
/*!*************************************!*\
  !*** ./src/gameObjects/pesquero.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-unused-vars
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var vehiculo_1 = __webpack_require__(/*! ./vehiculo */ "./src/gameObjects/vehiculo.ts");
var GOPesquero = /** @class */ (function (_super) {
    __extends(GOPesquero, _super);
    function GOPesquero(scene, vehicle, data) {
        var _this = _super.call(this, scene, vehicle, data) || this;
        _this.cantPesca = 0;
        _this.setData('horaPesca', moment().add(_this.getData('tiempoPesca'), 'seconds'));
        if (data.nick === data.jugadorLocal.nick) {
            _this.txtPesco = _this.scene.add.text(16, 20 * vehicle.id, '', { fontSize: '20px', fill: '#FFF' });
            _this.txtPesco.setScrollFactor(0);
            _this.txtPesco.setDepth(150);
            _this.scene.cameras.getCamera('camaraLateral').ignore(_this.txtPesco);
            _this.scene.cameras.getCamera('minimap').ignore(_this.txtPesco);
            _this.pasoMilla = false;
            _this.hayTormenta = false;
        }
        return _this;
    }
    GOPesquero.prototype.preUpdate = function (timeElapsed, timeLastUpdate) {
        var _this = this;
        _super.prototype.preUpdate.call(this, timeElapsed, timeLastUpdate);
        if (this.getData('vida') <= 0) {
            var explosion = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, 'explosion').setDepth(900);
            this.scene.add.existing(explosion);
            this.scene.cameras.getCamera('camaraLateral').ignore(explosion);
            this.scene.cameras.getCamera('minimap').ignore(explosion);
            explosion.play('explosion');
            _super.prototype.destroy.call(this);
            return;
        }
        var cursorKeys = this.scene.input.keyboard.createCursorKeys();
        if (this.getData('nick') === this.getData('jugadorLocal').nick) {
            if (this.y < this.getData('millaLimite') && this.pasoMilla) {
                this.scene.events.emit('countfish', this.cantPesca);
                this.cantPesca = 0;
                this.pasoMilla = false;
                this.txtPesco.text = "\n Barco " + this.getData('id') + " pescado:0 \n";
                server.enviar(server.EVENTOS.PESCA_BARCO, {
                    nick: this.getData('nick'),
                    id: this.getVehiculo().id,
                    pescados: 0,
                });
            }
        }
        if (this.getData('nick') === this.getData('jugadorLocal').nick && !this.hayTormenta && this.y >= this.getData('millaLimite')
            && !(cursorKeys.up.isDown || cursorKeys.down.isDown)) {
            if (moment().add(this.getData('tiempoPesca'), 'seconds').isAfter(this.getData('horaPesca'))) {
                this.cantPesca += 1;
                var millasDiv = Math.trunc(this.x / 100);
                this.cantPesca += millasDiv;
                this.setData('horaPesca', moment());
                var pescado = "\n Barco " + this.getData('id') + " pescado:" + this.cantPesca + " \n";
                this.txtPesco.text = pescado;
                this.pasoMilla = true;
                if (this.getData('sendToServer')) {
                    server.enviar(server.EVENTOS.PESCA_BARCO, {
                        nick: this.getData('nick'),
                        id: this.getVehiculo().id,
                        pescados: this.cantPesca,
                    });
                }
            }
            this.scene.events.on('inicioTormenta', function () {
                if (_this.getData('tipo') === 'pesquero' && _this.getData('tipoPesquero') === 'comun') {
                    // console.log('deshabilito pesquero comun');
                    _this.hayTormenta = true;
                }
            });
            this.scene.events.on('finTormenta', function () {
                if (_this.getData('tipo') === 'pesquero' && _this.getData('tipoPesquero') === 'comun') {
                    // console.log('habilito pesquero comun');
                    _this.hayTormenta = false;
                }
            });
        }
    };
    return GOPesquero;
}(vehiculo_1.GOVehiculo));
exports.GOPesquero = GOPesquero;


/***/ }),

/***/ "./src/gameObjects/progressBar.ts":
/*!****************************************!*\
  !*** ./src/gameObjects/progressBar.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(scene, onComplete) {
        var _this = _super.call(this, scene, 'loader') || this;
        var width = scene.cameras.main.width;
        var height = scene.cameras.main.height;
        var progressBar = scene.add.graphics();
        var progressBox = scene.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50);
        var loadingText = scene.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: 'blue',
            },
        });
        loadingText.setOrigin(0.5, 0.5);
        var percentText = scene.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: 'blue',
            },
        });
        percentText.setOrigin(0.5, 0.5);
        var assetText = scene.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: 'blue',
            },
        });
        assetText.setOrigin(0.5, 0.5);
        scene.load.on('progress', function (value) {
            percentText.setText(value * 100 + "%");
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30);
        });
        scene.load.on('fileprogress', function (file) {
            assetText.setText("Loading asset: " + file.key);
        });
        scene.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            scene.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: 'Click to start',
                style: {
                    font: '18px monospace',
                    fill: 'blue',
                },
            });
            onComplete();
        });
        return _this;
    }
    return ProgressBar;
}(Phaser.GameObjects.GameObject));
exports.ProgressBar = ProgressBar;


/***/ }),

/***/ "./src/gameObjects/tormenta.ts":
/*!*************************************!*\
  !*** ./src/gameObjects/tormenta.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var GOTormenta = /** @class */ (function (_super) {
    __extends(GOTormenta, _super);
    function GOTormenta(scene, sprite) {
        var _this = _super.call(this, scene) || this;
        _this.tornados = [];
        var cantidadTornados = Math.round((Math.random() * 100)) + 1;
        console.log("cantidad tornados: " + cantidadTornados);
        for (var i = 0; i < cantidadTornados; i += 1) {
            var x = (Math.random() * 100000) % 3200;
            var y = (Math.random() * 100000) % 3200;
            var tornado = new Phaser.GameObjects.Sprite(scene, x, y, sprite).play('tormenta').setScale(0.3, 0.3);
            _this.add(tornado);
        }
        scene.add.existing(_this);
        _this.scene.cameras.getCamera('minimap').ignore(_this);
        _this.scene.cameras.getCamera('camaraLateral').ignore(_this);
        return _this;
    }
    return GOTormenta;
}(Phaser.GameObjects.Container));
exports.GOTormenta = GOTormenta;


/***/ }),

/***/ "./src/gameObjects/vehiculo.ts":
/*!*************************************!*\
  !*** ./src/gameObjects/vehiculo.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var GOVehiculo = /** @class */ (function (_super) {
    __extends(GOVehiculo, _super);
    function GOVehiculo(scene, vehicle, data) {
        var _this = _super.call(this, scene, vehicle.x, vehicle.y, vehicle.sprite) || this;
        _this.initialRotationSet = false;
        _this.muevoBarcoHandler = function (data) {
            if (_this.getData('nick') === data.nick && _this.getData('id') === data.id) {
                _this.x = data.x;
                _this.y = data.y;
                _this.setRotation(data.rotacion);
            }
        };
        _this.getId = function () { return _this.id; };
        _this.setSeleccionado = function (estaSeleccionado) {
            _this.setData('selected', estaSeleccionado);
            if (estaSeleccionado)
                _this.scene.cameras.main.startFollow(_this);
        };
        _this.getVision = function () { return _this.vision; };
        _this.getVehiculo = function () { return _this.vehiculo; };
        _this.vehiculo = vehicle;
        _this.spriteLateral = new Phaser.GameObjects.Sprite(scene, vehicle.x, vehicle.y, vehicle.spriteLateralInicial);
        _this.scene.add.existing(_this.spriteLateral);
        _this.scene.cameras.main.ignore(_this.spriteLateral);
        _this.scene.cameras.getCamera('camaraLateral').ignore(_this);
        _this.id = vehicle.id;
        // agrega las funcionalidades de matter al sprite comun de phaser
        var f = new Phaser.Physics.Matter.Factory(scene.matter.world);
        f.gameObject(_this, {}, true);
        scene.add.existing(_this);
        _this.play(vehicle.sprite);
        _this.vision = new Phaser.GameObjects.Sprite(scene, 0, 0, 'vision').setScale(vehicle.rangoVision, vehicle.rangoVision);
        f.gameObject(_this.vision, { isSensor: true, circleRadius: _this.vision.displayWidth / 2 }, true);
        _this.setDataEnabled();
        Object.keys(data).forEach(function (k) { return _this.setData(k, data[k]); });
        if (data.canBeSelected) {
            _this.setInteractive();
        }
        server.addhandler(server.EVENTOS.MOVER_BARCO, _this.muevoBarcoHandler);
        return _this;
    }
    GOVehiculo.prototype.getMatterSprite = function () {
        return this;
    };
    GOVehiculo.prototype.create = function () {
        var _this = this;
        if (this.getData('canBeSelected')) {
            this.setInteractive();
            this.scene.events.on('changeBoat', function (id) {
                if (_this.getData('id') === id) {
                    _this.setData('selected', true);
                }
                else {
                    _this.setData('selected', false);
                    _this.getMatterSprite().setVelocity(0, 0);
                }
            });
        }
        this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
    };
    GOVehiculo.prototype.preUpdate = function (timeElapsed, timeLastUpdate) {
        _super.prototype.preUpdate.call(this, timeElapsed, timeLastUpdate);
        this.vision.setPosition(this.x, this.y);
        if (!this.initialRotationSet) {
            this.initialRotationSet = true;
            this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
        }
        // actualizo el sprite lateral
        this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.u);
        var ratioY = this.y / (this.scene.sceneConfig.height - this.spriteLateral.height);
        var ratioX = this.x / (this.scene.sceneConfig.width - this.spriteLateral.width);
        var spriteLateralY = (this.scene.cameras.getCamera('camaraLateral').height - this.spriteLateral.height) * ratioY + this.spriteLateral.height / 2;
        var spriteLateralX = ((this.scene.cameras.getCamera('camaraLateral').width - this.spriteLateral.displayWidth) * ratioX) + (this.spriteLateral.displayWidth / 2);
        this.spriteLateral.setX(spriteLateralX);
        this.spriteLateral.setY(spriteLateralY);
        var spriteLateralScale = 0.9 * ratioY;
        this.spriteLateral.setScale(0.1 + spriteLateralScale, 0.1 + spriteLateralScale);
        this.spriteLateral.setDepth(this.y);
        // PI / 2 es arriba
        var rotacion = Math.abs(this.rotation % (Math.PI * 2));
        if (rotacion >= Math.PI / 4 && rotacion < (Math.PI / 4) * 3) {
            this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.u);
        }
        else if (rotacion >= (Math.PI / 4) * 3 && rotacion < Math.PI + Math.PI / 4) {
            this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.l);
        }
        else if (rotacion >= Math.PI + Math.PI / 4 && rotacion < (Math.PI / 4) * 3 + Math.PI) {
            this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.d);
        }
        else if (rotacion >= (Math.PI / 4) * 3 + Math.PI || rotacion < Math.PI / 4) {
            this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.r);
        }
        // fin actualizo el sprite lateral
        if (!this.getData('selected'))
            return;
        var cursorKeys = this.scene.input.keyboard.createCursorKeys();
        var angularVelocity = this.getData('angularVelocity') * (timeLastUpdate / 1000);
        if (cursorKeys.right.isDown) {
            this.setRotation(this.rotation
                + (cursorKeys.down.isDown ? -angularVelocity : angularVelocity));
        }
        else if (cursorKeys.left.isDown) {
            this.setRotation(this.rotation
                - (cursorKeys.down.isDown ? -angularVelocity : angularVelocity));
        }
        if (cursorKeys.up.isDown) {
            this.getMatterSprite().thrust(this.getData('velocity'));
            if (this.getData('combustibleActual')) {
                var combustible = this.getData('combustibleActual') - this.getData('gastoCombustible');
                this.setData('combustibleActual', combustible);
                if (this.getData('sendToServer')) {
                    server.enviar(server.EVENTOS.COMBUSTIBLE, {
                        nick: this.getData('nick'),
                        id: this.getVehiculo().id,
                        combustible: combustible,
                    });
                }
            }
        }
        else if (cursorKeys.down.isDown) {
            this.getMatterSprite().thrustBack(this.getData('velocity'));
            if (this.getData('combustibleActual')) {
                var combustible = this.getData('combustibleActual') - this.getData('gastoCombustible');
                this.setData('combustibleActual', combustible);
                if (this.getData('sendToServer')) {
                    server.enviar(server.EVENTOS.COMBUSTIBLE, {
                        nick: this.getData('nick'),
                        id: this.getVehiculo().id,
                        combustible: combustible,
                    });
                }
            }
        }
        if (this.getData('sendToServer')) {
            server.enviar(server.EVENTOS.MOVER_BARCO, {
                nick: this.getData('nick'), id: this.id, x: this.x, y: this.y, rotacion: this.rotation,
            });
        }
    };
    GOVehiculo.prototype.destroy = function () {
        if (this.getData('selected') && this.scene && this.scene.cameras && this.scene.cameras.main) {
            this.scene.cameras.main.stopFollow();
        }
        this.vision.destroy();
        this.spriteLateral.destroy();
        _super.prototype.destroy.call(this);
    };
    return GOVehiculo;
}(Phaser.GameObjects.Sprite));
exports.GOVehiculo = GOVehiculo;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var inputtext_plugin_js_1 = __webpack_require__(/*! phaser3-rex-plugins/plugins/inputtext-plugin.js */ "./node_modules/phaser3-rex-plugins/plugins/inputtext-plugin.js");
var load_1 = __webpack_require__(/*! ./scenes/load */ "./src/scenes/load.ts");
var main_1 = __webpack_require__(/*! ./scenes/main */ "./src/scenes/main.ts");
var nick_1 = __webpack_require__(/*! ./scenes/nick */ "./src/scenes/nick.ts");
var game_1 = __webpack_require__(/*! ./scenes/game */ "./src/scenes/game.ts");
var resultado_1 = __webpack_require__(/*! ./scenes/resultado */ "./src/scenes/resultado.ts");
var espera_1 = __webpack_require__(/*! ./scenes/espera */ "./src/scenes/espera.ts");
var popup_1 = __webpack_require__(/*! ./scenes/popup */ "./src/scenes/popup.ts");
var gameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    dom: {
        createContainer: true,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            setBounds: true,
            gravity: false,
        },
    },
    input: {
        mouse: true,
    },
    parent: 'game',
    backgroundColor: '#FFFFFF',
    scene: [load_1.Load, main_1.Main, espera_1.Espera, nick_1.Nick, game_1.Game, resultado_1.Resultado, popup_1.PopUp],
    plugins: {
        global: [{
                key: 'rexInputTextPlugin',
                plugin: inputtext_plugin_js_1.default,
                start: true,
            },
        ],
    },
};
var game = new Phaser.Game(gameConfig);
game.scene.start('Load');


/***/ }),

/***/ "./src/scenes/espera.ts":
/*!******************************!*\
  !*** ./src/scenes/espera.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var Espera = /** @class */ (function (_super) {
    __extends(Espera, _super);
    function Espera() {
        var _this = _super.call(this, 'Espera') || this;
        _this.iniciarPartidaHandler = function () { return __awaiter(_this, void 0, void 0, function () {
            var getpartida, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, server.getPartida()];
                    case 1:
                        getpartida = _a.sent();
                        this.scene.start('Game', __assign(__assign({}, getpartida.data), { nick: this.nick }));
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        alert(error_1.response.data.mensaje);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Espera.prototype.init = function (data) {
        this.nick = data.nick;
    };
    Espera.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, width, height;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.sys.game.canvas, width = _a.width, height = _a.height;
                        this.add.image(0, 0, 'main')
                            .setDisplaySize(width, height)
                            .setOrigin(0, 0);
                        this.conectando = new Phaser.GameObjects.Text(this, 0, 0, 'Conectando con jugador...', { fontSize: '35px', color: '#FFF' });
                        this.conectando.setPosition((width - this.conectando.width) / 2, (height - this.conectando.height) / 2);
                        this.add.existing(this.conectando);
                        server.addhandler(server.EVENTOS.INICIAR_PARTIDA, this.iniciarPartidaHandler);
                        return [4 /*yield*/, server.startWebSocket()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Espera;
}(Phaser.Scene));
exports.Espera = Espera;


/***/ }),

/***/ "./src/scenes/game.ts":
/*!****************************!*\
  !*** ./src/scenes/game.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var pesquero_1 = __webpack_require__(/*! ../gameObjects/pesquero */ "./src/gameObjects/pesquero.ts");
var patrulla_1 = __webpack_require__(/*! ../gameObjects/patrulla */ "./src/gameObjects/patrulla.ts");
var muelle_1 = __webpack_require__(/*! ../gameObjects/muelle */ "./src/gameObjects/muelle.ts");
var agua_1 = __webpack_require__(/*! ../gameObjects/agua */ "./src/gameObjects/agua.ts");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var tormenta_1 = __webpack_require__(/*! ../gameObjects/tormenta */ "./src/gameObjects/tormenta.ts");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 'Game') || this;
        _this.totalSeconds = 0;
        _this.jugadorLocal = { nick: 'player2', vehiculos: [], pescados: 0 };
        _this.jugadorRemoto = { nick: 'player2' };
        _this.tormentaEnTiempo = false;
        _this.pausarEscena = function () {
            _this.scene.pause();
            _this.scene.run('PopUp', {});
        };
        _this.despertarScena = function () {
            _this.scene.stop('PopUp');
            _this.scene.wake();
        };
        _this.finalizarPartidaHandler = function (data) {
            _this.finalizar(data.ganador);
        };
        _this.keyboardHandler = function (event) {
            if (event.shiftKey && _this.jugadorLocal.vehiculos[event.keyCode - 49]) {
                _this.seleccionarBarco(event.keyCode - 49 + 1);
            }
            else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC) {
                server.enviar(server.EVENTOS.PAUSAR, {});
                _this.scene.pause();
                _this.scene.run('PopUp', {
                    guardarHandler: _this.guardarHandler,
                    continuarHandler: _this.continuarHandler,
                });
            }
        };
        _this.guardarHandler = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, server.guardarPartida()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.continuarHandler = function () {
            _this.scene.stop('PopUp');
            server.enviar(server.EVENTOS.DESPERTAR, {});
            _this.scene.wake();
        };
        _this.seleccionarBarco = function (id) {
            _this.jugadorLocal.vehiculos.forEach(function (v) { return v.setSeleccionado(v.getId() === id); });
        };
        return _this;
    }
    Game.prototype.init = function (data) {
        this.sceneConfig = data;
        this.jugadorLocal.nick = data.nick;
        this.jugadorRemoto.nick = this.sceneConfig.jugadores.find(function (j) { return j.nick !== data.nick; }).nick;
    };
    Game.prototype.preload = function () {
        this.anims.create({
            key: 'policia1',
            frames: this.anims.generateFrameNumbers('policia1', {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: 'policia2',
            frames: this.anims.generateFrameNumbers('policia2', {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: 'pesquero1',
            frames: this.anims.generateFrameNumbers('pesquero1', {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: 'pesquero2',
            frames: this.anims.generateFrameNumbers('pesquero2', {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: 'patrulla-auxiliar',
            frames: this.anims.generateFrameNumbers('patrulla-auxiliar', {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: 'patrulla-helicoptero',
            frames: this.anims.generateFrameNumbers('patrulla-helicoptero', {
                start: 0,
                end: 5,
            }),
            frameRate: 8,
            repeat: -1,
        });
        this.anims.create({
            key: 'tormenta',
            frames: this.anims.generateFrameNumbers('tormenta', {
                start: 0,
                end: 3,
            }),
            frameRate: 20,
            yoyo: false,
            repeat: -1,
        });
        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 6,
                end: 11,
            }),
            frameRate: 10,
            yoyo: false,
            repeat: 1,
            hideOnComplete: true,
        });
    };
    Game.prototype.create = function () {
        var _this = this;
        this.matter.world.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height);
        this.cameras.main.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height)
            .setSize(this.game.canvas.width, this.game.canvas.height - 200);
        // camara minimapa
        var minimapaWidth = 100;
        var minimapaHeight = this.sceneConfig.height * (100 / this.sceneConfig.width);
        this.minimap = this.cameras.add(30, 30, minimapaWidth, minimapaHeight, false, 'minimap');
        this.minimap.setZoom(100 / this.sceneConfig.width).setOrigin(0, 0);
        // bordes
        this.add.line(0, 0, this.minimap.x - 1, this.minimap.y - 1, this.minimap.x + this.minimap.width + 1, this.minimap.y - 1, 0x00FF00).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
        this.add.line(0, 0, this.minimap.x - 1, this.minimap.y - 1, this.minimap.x - 1, this.minimap.y + this.minimap.height + 1, 0x00FF00).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
        this.add.line(0, 0, this.minimap.x + this.minimap.width + 1, this.minimap.y - 1, this.minimap.x + this.minimap.width + 1, this.minimap.y + this.minimap.height + 1, 0x00FF00).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
        this.add.line(0, 0, this.minimap.x - 1, this.minimap.y + this.minimap.height + 1, this.minimap.x + this.minimap.width + 1, this.minimap.y + this.minimap.height + 1, 0x00FF00).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
        // fin bordes
        // camara lateral
        this.camaraLateral = this.cameras.add(0, 0, this.sceneConfig.width, 200, false, 'camaraLateral');
        this.camaraLateral.setSize(this.game.canvas.width, 200)
            .setPosition(0, this.game.canvas.height - 200);
        var agua = agua_1.agregarAgua(this, this.sceneConfig.width, this.sceneConfig.height);
        this.minimap.ignore(agua);
        this.camaraLateral.ignore(agua);
        // cosas locas para la niebla de guerra
        this.nieblaDeGuerra = this.add.rectangle(0, 0, this.sceneConfig.width, this.sceneConfig.height, 0x00000000).setOrigin(0, 0).setDepth(100);
        this.camaraLateral.ignore(this.nieblaDeGuerra);
        this.renderTexture = new Phaser.GameObjects.RenderTexture(this, 0, 0, this.sceneConfig.width, this.sceneConfig.height);
        this.renderTexture.setOrigin(0, 0);
        var maskImage = this.make.image({
            x: 0, y: 0, key: this.renderTexture.texture.key, add: false,
        });
        maskImage.setOrigin(0, 0);
        this.nieblaDeGuerra.mask = new Phaser.Display.Masks.BitmapMask(this, maskImage);
        this.nieblaDeGuerra.mask.invertAlpha = true;
        // fin cosas locas para la niebla de guerra
        // linea pesca
        this.add.graphics({
            fillStyle: { color: 0xFF0000 },
        }).fillRect(0, this.sceneConfig.millaLimite, this.sceneConfig.width, 1);
        // eslint-disable-next-line no-new
        var muelle = new muelle_1.Muelle(this, this.sceneConfig.width / 2, this.sceneConfig.height, 'puerto');
        if (this.sceneConfig.jugadores.find(function (j) { return j.nick === _this.jugadorLocal.nick; }).vehiculos[0].tipo === 'pesquero') {
            this.txtPescadoTotal = this.add.text(600, 16, 'Total: 0', { fontSize: '28px', fill: '#FFF' });
            this.txtPescadoTotal.setScrollFactor(0);
            this.txtPescadoTotal.setDepth(150);
            this.minimap.ignore(this.txtPescadoTotal);
            this.camaraLateral.ignore(this.txtPescadoTotal);
        }
        this.sceneConfig.jugadores.forEach(function (p) {
            p.vehiculos.forEach(function (v, i) {
                var data = __assign(__assign({}, v), { nick: p.nick, jugadorLocal: _this.jugadorLocal, sendToServer: p.nick === _this.jugadorLocal.nick, canBeSelected: p.nick === _this.jugadorLocal.nick, selected: i === 0 && p.nick === _this.jugadorLocal.nick, millaLimite: _this.sceneConfig.millaLimite });
                if (v.tipo === 'patruya')
                    data.muelle = muelle;
                // eslint-disable-next-line no-new
                var ve = v.tipo === 'pesquero' ? new pesquero_1.GOPesquero(_this, v, data) : new patrulla_1.GOPatrulla(_this, v, data);
                if (data.selected) {
                    _this.cameras.main.startFollow(ve);
                }
                if (p.nick === _this.jugadorLocal.nick) {
                    _this.jugadorLocal.vehiculos.push(ve);
                }
            });
        });
        this.input.on(Phaser.Input.Events.GAMEOBJECT_DOWN, function (pointer, gameObject) {
            var id = gameObject.getData('id');
            _this.seleccionarBarco(id);
        });
        this.input.keyboard.on(Phaser.Input.Keyboard.Events.ANY_KEY_DOWN, this.keyboardHandler);
        this.events.on('countfish', function (cantidad) {
            _this.jugadorLocal.pescados += cantidad;
            _this.txtPescadoTotal.setText("Total: " + _this.jugadorLocal.pescados);
            server.enviar(server.EVENTOS.PESCA_JUGADOR, {
                nick: _this.jugadorLocal.nick, pescados: _this.jugadorLocal.pescados,
            });
            if (_this.jugadorLocal.pescados >= _this.sceneConfig.cantPeces) { // parametrizar esto
                server.enviar(server.EVENTOS.FINALIZAR, { ganador: _this.jugadorLocal.nick });
                _this.finalizar(_this.jugadorLocal.nick);
            }
        });
        this.tormentas = this.sceneConfig.tormentas;
        setInterval(function () {
            _this.totalSeconds += 1;
            var i = 0;
            var encontro = false;
            _this.tormentaEnTiempo = true;
            while (i < _this.tormentas.length && !encontro) {
                var fin = _this.tormentas[i].tormentaDuracion + _this.tormentas[i].tormentaInicio;
                if (_this.totalSeconds === _this.tormentas[i].tormentaInicio) {
                    encontro = true;
                }
                else if (_this.totalSeconds >= fin) {
                    _this.tormentaEnTiempo = false;
                    _this.tormentas.splice(i, 1);
                }
                i += 1;
            }
            if (encontro) {
                _this.tormentaActiva = new tormenta_1.GOTormenta(_this, 'tormenta');
                _this.events.emit('inicioTormenta');
            }
            else if (_this.tormentaActiva && !_this.tormentaEnTiempo) {
                _this.tormentaActiva.destroy();
                _this.tormentaActiva = null;
                _this.events.emit('finTormenta');
            }
        }, 1000);
        server.addhandler(server.EVENTOS.FINALIZAR, this.finalizarPartidaHandler);
        server.addhandler(server.EVENTOS.PAUSAR, this.pausarEscena);
        server.addhandler(server.EVENTOS.DESPERTAR, this.despertarScena);
    };
    Game.prototype.update = function () {
        var _this = this;
        this.renderTexture.clear();
        var cantidadVivos = 0;
        this.jugadorLocal.vehiculos.forEach(function (v) {
            // si no se destruyó
            if (v.scene) {
                cantidadVivos += 1;
                _this.renderTexture.draw(v.getVision(), v.x, v.y);
                if (v.barcosAuxiliares && v.barcosAuxiliares.length) {
                    v.barcosAuxiliares.forEach(function (va) {
                        if (va)
                            _this.renderTexture.draw(va.getVision(), va.x, va.y);
                    });
                }
            }
        });
        if (!cantidadVivos) {
            server.enviar(server.EVENTOS.FINALIZAR, { ganador: this.jugadorRemoto.nick });
            this.finalizar(this.jugadorRemoto.nick);
        }
    };
    Game.prototype.finalizar = function (ganador) {
        // this.events.destroy();
        // this.registry.destroy();
        // this.events.removeAllListeners();
        // this.cache.destroy();
        // this.scene.stop();
        // this.scene.restart();
        this.scene.start('Resultado', { jugadorLocalNick: this.jugadorLocal.nick, ganador: ganador });
    };
    return Game;
}(Phaser.Scene));
exports.Game = Game;


/***/ }),

/***/ "./src/scenes/load.ts":
/*!****************************!*\
  !*** ./src/scenes/load.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var progressBar_1 = __webpack_require__(/*! ../gameObjects/progressBar */ "./src/gameObjects/progressBar.ts");
var Load = /** @class */ (function (_super) {
    __extends(Load, _super);
    function Load() {
        return _super.call(this, 'Load') || this;
    }
    Load.prototype.preload = function () {
        var _this = this;
        this.add.existing(new progressBar_1.ProgressBar(this, function () { return _this.scene.start('Main'); }));
        this.load.spritesheet('water', './assets/images/Ocean_SpriteSheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('policia1', './assets/images/policia01.png', {
            frameWidth: 202,
            frameHeight: 75,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('policia2', './assets/images/police02.png', {
            frameWidth: 116,
            frameHeight: 48,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('patrulla-auxiliar', './assets/images/police03.png', {
            frameWidth: 67,
            frameHeight: 38,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('patrulla-helicoptero', './assets/images/police04.png', {
            frameWidth: 95,
            frameHeight: 95,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('pesquero1', './assets/images/pesquero01.png', {
            frameWidth: 208,
            frameHeight: 88,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('pesquero2', './assets/images/pesquero02.png', {
            frameWidth: 150,
            frameHeight: 66,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('tormenta', './assets/images/tormenta.png', {
            frameWidth: 304,
            frameHeight: 322,
            margin: 0,
            spacing: 0,
        });
        this.load.spritesheet('explosion', './assets/images/explosion.png', {
            frameWidth: 100,
            frameHeight: 100,
            margin: 0,
            spacing: 0,
        });
        this.load.image('policia01_atras', './assets/images/policia01_atras.png');
        this.load.image('policia01_derecha', './assets/images/policia01_derecha.png');
        this.load.image('policia01_izquierda', './assets/images/policia01_izquierda.png');
        this.load.image('policia01_frente', './assets/images/policia01_frente.png');
        this.load.image('main', './assets/images/main.jpg');
        this.load.image('puerto', './assets/images/puerto.png');
        this.load.image('bala', './assets/images/bullet6.png');
        this.load.image('bala_canion', './assets/images/bullet8.png');
        this.load.image('vision', './assets/images/vision.png');
        this.load.image('manini', './assets/images/manini.png');
        this.load.audio('canion', '../assets/sonidos/canion.m4a');
        this.load.audio('ametralladora', '../assets/sonidos/ametralladora.m4a');
        this.load.audio('helicoptero', '../assets/sonidos/helicoptero.m4a');
        this.load.audio('manini', '../assets/sonidos/manini.m4a');
    };
    return Load;
}(Phaser.Scene));
exports.Load = Load;


/***/ }),

/***/ "./src/scenes/main.ts":
/*!****************************!*\
  !*** ./src/scenes/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this, 'Main') || this;
        _this.clickHandler = function (pointer, gameObject) {
            if (gameObject === _this.btnNuevaPartida) {
                _this.scene.start('Nick', { crearPartida: true });
            }
            else {
                _this.scene.start('Nick', { crearPartida: false });
            }
        };
        return _this;
    }
    Main.prototype.create = function () {
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.add.image(0, 0, 'main')
            .setDisplaySize(width, height)
            .setOrigin(0, 0);
        this.btnNuevaPartida = new Phaser.GameObjects.Text(this, 0, 0, 'Nueva Partida', {});
        this.btnUnirsePartida = new Phaser.GameObjects.Text(this, 0, 0, 'Unirse Partida', {});
        this.btnNuevaPartida.setPosition((width - this.btnNuevaPartida.width) / 2, (height - this.btnNuevaPartida.height) / 2);
        this.btnUnirsePartida.setPosition((width - this.btnUnirsePartida.width) / 2, (height - this.btnUnirsePartida.height) / 2 + 50);
        this.btnNuevaPartida.setInteractive();
        this.btnUnirsePartida.setInteractive();
        this.add.existing(this.btnNuevaPartida);
        this.add.existing(this.btnUnirsePartida);
        this.input.on('gameobjectdown', this.clickHandler);
    };
    return Main;
}(Phaser.Scene));
exports.Main = Main;


/***/ }),

/***/ "./src/scenes/nick.ts":
/*!****************************!*\
  !*** ./src/scenes/nick.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var inputtext_js_1 = __webpack_require__(/*! phaser3-rex-plugins/plugins/inputtext.js */ "./node_modules/phaser3-rex-plugins/plugins/inputtext.js");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var Nick = /** @class */ (function (_super) {
    __extends(Nick, _super);
    function Nick() {
        var _this = _super.call(this, 'Nick') || this;
        _this.clickHandler = function (pointer, gameObject) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!(gameObject === this.btnContinuar)) return [3 /*break*/, 5];
                        if (!this.goNick.text)
                            throw new Error('Debe elegir un nombre');
                        if (this.crearPartida && !this.bando)
                            throw new Error('Debe elegir un bando');
                        if (!this.crearPartida) return [3 /*break*/, 2];
                        return [4 /*yield*/, server.crearPartida(this.goNick.text, this.bando)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, server.unirsePartida(this.goNick.text)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.scene.start('Espera', { nick: this.goNick.text });
                        return [3 /*break*/, 6];
                    case 5:
                        if (gameObject === this.btnPatrulla) {
                            this.bando = 'PATRULLA';
                            this.btnPatrulla.setBackgroundColor('#486529');
                            this.btnPesquero.setBackgroundColor('');
                        }
                        else if (gameObject === this.btnPesquero) {
                            this.bando = 'PESQUERO';
                            this.btnPatrulla.setBackgroundColor('');
                            this.btnPesquero.setBackgroundColor('#486529');
                        }
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        if (error_1.response) {
                            alert(error_1.response.data.mensaje);
                        }
                        else {
                            alert(error_1.message);
                        }
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Nick.prototype.init = function (data) {
        this.crearPartida = data.crearPartida;
    };
    Nick.prototype.create = function () {
        var _a = this.sys.game.canvas, width = _a.width, height = _a.height;
        this.add.image(0, 0, 'main')
            .setDisplaySize(width, height)
            .setOrigin(0, 0);
        this.goNick = new inputtext_js_1.default(this, 0, 0, 200, 20, {
            type: 'text', placeholder: 'nick', backgroundColor: 'black', color: '#ffffff', align: 'center',
        });
        this.btnPatrulla = new Phaser.GameObjects.Text(this, 0, 0, 'Patrullas', {});
        this.btnPesquero = new Phaser.GameObjects.Text(this, 0, 0, 'Pesqueros', {});
        this.btnContinuar = new Phaser.GameObjects.Text(this, 0, 0, 'Continuar', {});
        this.goNick.setPosition(width / 2, height / 2);
        this.btnPatrulla.setPosition((width - this.btnPatrulla.width - 100) / 2, (height - this.btnPatrulla.height) / 2 + 50);
        this.btnPesquero.setPosition((width - this.btnPesquero.width + 100) / 2, (height - this.btnPesquero.height) / 2 + 50);
        this.btnContinuar.setPosition((width - this.btnContinuar.width) / 2, (height - this.btnContinuar.height) / 2 + 100);
        this.goNick.setText('player2');
        this.btnPatrulla.setInteractive();
        this.btnPesquero.setInteractive();
        this.btnContinuar.setInteractive();
        this.add.existing(this.goNick);
        if (this.crearPartida) {
            this.add.existing(this.btnPatrulla);
            this.add.existing(this.btnPesquero);
        }
        this.add.existing(this.btnContinuar);
        this.input.on('gameobjectdown', this.clickHandler);
    };
    return Nick;
}(Phaser.Scene));
exports.Nick = Nick;


/***/ }),

/***/ "./src/scenes/popup.ts":
/*!*****************************!*\
  !*** ./src/scenes/popup.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var PopUp = /** @class */ (function (_super) {
    __extends(PopUp, _super);
    function PopUp() {
        return _super.call(this, 'PopUp') || this;
    }
    PopUp.prototype.init = function (data) {
        this.guardarHandler = data.guardarHandler;
        this.continuarHandler = data.continuarHandler;
    };
    PopUp.prototype.create = function () {
        var _this = this;
        var _a = this.game.canvas, width = _a.width, height = _a.height;
        var container = new Phaser.GameObjects.Container(this, width / 2, height / 2);
        var background = new Phaser.GameObjects.Rectangle(this, 0, 0, 200, 200, 0x006000)
            .setOrigin(0.5, 1);
        this.guardar = new Phaser.GameObjects.Text(this, 0, -125, 'Guardar Partida', {}).setOrigin(0.5, 1);
        this.continuar = new Phaser.GameObjects.Text(this, 0, -75, 'continuar', {}).setOrigin(0.5, 0.5);
        this.add.existing(container);
        container.add(background);
        container.add(this.guardar);
        container.add(this.continuar);
        this.guardar.setInteractive();
        this.continuar.setInteractive();
        this.input.on(Phaser.Input.Events.GAMEOBJECT_DOWN, function (pointer, gameObject) {
            if (gameObject === _this.guardar) {
                if (_this.guardarHandler)
                    _this.guardarHandler();
            }
            else if (_this.continuarHandler)
                _this.continuarHandler();
        });
    };
    return PopUp;
}(Phaser.Scene));
exports.PopUp = PopUp;


/***/ }),

/***/ "./src/scenes/resultado.ts":
/*!*********************************!*\
  !*** ./src/scenes/resultado.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var server = __webpack_require__(/*! ../server */ "./src/server.ts");
var Resultado = /** @class */ (function (_super) {
    __extends(Resultado, _super);
    function Resultado() {
        var _this = _super.call(this, 'Resultado') || this;
        _this.clickHandler = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        server.removerListeners();
                        server.desconectarWs();
                        return [4 /*yield*/, server.finalizarPartida()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.scene.start('Main');
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Resultado.prototype.init = function (data) {
        this.jugadorLocalNick = data.jugadorLocalNick;
        this.ganador = data.ganador;
    };
    Resultado.prototype.create = function () {
        var text = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, this.jugadorLocalNick === this.ganador ? 'Has Ganado!!!!' : 'Sos un perdedor');
        this.continuar = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2 + 50, 'Continuar');
        this.continuar.setInteractive();
        text.setColor('red');
        this.continuar.setColor('blue');
        this.input.on('gameobjectdown', this.clickHandler);
    };
    return Resultado;
}(Phaser.Scene));
exports.Resultado = Resultado;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var config = __webpack_require__(/*! ./config */ "./src/config/index.ts");
exports.EVENTOS = {
    MOVER_BARCO: 'mb',
    DISPARO: 'd',
    FINALIZAR: 'f',
    INICIAR_PARTIDA: 'iniciarPartida',
    PAUSAR: 'p',
    DESPERTAR: 'des',
    PESCA_JUGADOR: 'pj',
    PESCA_BARCO: 'pb',
    COMBUSTIBLE: 'c',
};
var ws = null;
var eventos;
var autoReconectar = true;
var inicializarListeners = function () {
    eventos = Object.values(exports.EVENTOS).reduce(function (p, c) {
        // eslint-disable-next-line no-param-reassign
        p[c] = new Set();
        return p;
    }, {});
};
inicializarListeners();
exports.addhandler = function (event, handler) { eventos[event].add(handler); };
function startWebSocket() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            autoReconectar = true;
            return [2 /*return*/, new Promise(function (resolve) {
                    ws = new WebSocket(config.endpoint.ws());
                    ws.onopen = function () {
                        console.log('connected!');
                        resolve();
                    };
                    ws.onmessage = function (msg) {
                        try {
                            var data_1 = JSON.parse(msg.data);
                            eventos[data_1.evento].forEach(function (h) { return h(data_1); });
                        }
                        catch (e) {
                            console.log(msg, e);
                        }
                    };
                    ws.onclose = function () {
                        console.log('failed!');
                        if (autoReconectar) {
                            resolve(startWebSocket());
                        }
                    };
                })];
        });
    });
}
exports.startWebSocket = startWebSocket;
exports.desconectarWs = function () {
    autoReconectar = false;
    ws.close();
};
exports.enviar = function (evento, data) {
    try {
        ws.send(JSON.stringify(__assign({ evento: evento }, data)));
    }
    catch (e) {
        console.log('ws error (si no queres que te joda éste mensaje y no queres '
            + 'conectarlo con el server, comentá el send de arriba): ', e);
    }
};
exports.guardarPartida = function () { return axios_1.default(config.endpoint.guardarPartida()); };
exports.crearPartida = function (nick, bando) { return axios_1.default(config.endpoint.crearPartida(nick, bando)); };
exports.unirsePartida = function (nick) { return axios_1.default(config.endpoint.unirsePartida(nick)); };
exports.getPartida = function () { return axios_1.default(config.endpoint.getPartida()); };
exports.finalizarPartida = function () { return axios_1.default(config.endpoint.finalizarPartida()); };
exports.removerListeners = inicializarListeners;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL2FndWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL2Rpc3Bhcm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL2Ryb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL21lbnNhamUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL211ZWxsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZU9iamVjdHMvcGF0cnVsbGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL3Blc3F1ZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lT2JqZWN0cy9wcm9ncmVzc0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZU9iamVjdHMvdG9ybWVudGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL3ZlaGljdWxvLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZXNwZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbmljay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvcHVwLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcmVzdWx0YWRvLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDM0QsUUFBUSxDQUNULENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDWCxDQUFDLEVBQUUsQ0FBQyxFQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzVELFFBQVEsQ0FDVCxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ1gsQ0FBQyxFQUFFLENBQUMsRUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9B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QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiY29uc3QgeyBDT05GSUc6IHsgSE9TVCB9IH0gPSA8YW55PndpbmRvdztcclxuY29uc3QgQkFDS0VORF9CQVNFX1VSTCA9IGBodHRwOi8vJHtIT1NUfS9iYWNrZW5kYDtcclxuY29uc3QgQkFDS0VORF9XUyA9IGB3czovLyR7SE9TVH0vYmFja2VuZC9lbmRwb2ludGA7XHJcblxyXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSB7XHJcbiAgY3JlYXJQYXJ0aWRhOiAobmlja05hbWUsIGJhbmRvKSA9PiBgJHtCQUNLRU5EX0JBU0VfVVJMfS9jcmVhcnBhcnRpZGE/bmlja05hbWU9JHtuaWNrTmFtZX0mYmFuZG89JHtiYW5kb31gLFxyXG4gIGdldFBhcnRpZGE6ICgpID0+IGAke0JBQ0tFTkRfQkFTRV9VUkx9L2dldHBhcnRpZGFgLFxyXG4gIHVuaXJzZVBhcnRpZGE6IChuaWNrTmFtZSkgPT4gYCR7QkFDS0VORF9CQVNFX1VSTH0vdW5pcnNlcGFydGlkYT9uaWNrTmFtZT0ke25pY2tOYW1lfWAsXHJcbiAgZ3VhcmRhclBhcnRpZGE6ICgpID0+IGAke0JBQ0tFTkRfQkFTRV9VUkx9L2d1YXJkYXJwYXJ0aWRhYCxcclxuICBsaXN0YXJQYXJ0aWRhczogKCkgPT4gYCR7QkFDS0VORF9CQVNFX1VSTH0vbGlzdGFycGFydGlkYXNgLFxyXG4gIGNhcmdhclBhcnRpZGE6ICgpID0+IGAke0JBQ0tFTkRfQkFTRV9VUkx9L2NhcmdhcnBhcnRpZGFgLFxyXG4gIGZpbmFsaXphclBhcnRpZGE6ICgpID0+IGAke0JBQ0tFTkRfQkFTRV9VUkx9L2ZpbmFsaXphcnBhcnRpZGFgLFxyXG4gIHdzOiAoKSA9PiBCQUNLRU5EX1dTLFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgYWdyZWdhckFndWEgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcclxuICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAga2V5OiAnd2F0ZXInLFxyXG4gICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnd2F0ZXInLCB7XHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBlbmQ6IDE1LFxyXG4gICAgfSksXHJcbiAgICBmcmFtZVJhdGU6IDYsXHJcbiAgICByZXBlYXQ6IC0xLFxyXG4gICAgcmVwZWF0RGVsYXk6IDUwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb25maWc6IFBoYXNlci5UeXBlcy5HYW1lT2JqZWN0cy5Hcm91cC5Hcm91cENyZWF0ZUNvbmZpZ1tdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmNlaWwoaGVpZ2h0IC8gMzIpOyBpICs9IDEpIHtcclxuICAgIGNvbmZpZy5wdXNoKHtcclxuICAgICAga2V5OiAnd2F0ZXInLFxyXG4gICAgICByZXBlYXQ6IE1hdGguY2VpbCh3aWR0aCAvIDMyKSxcclxuICAgICAgc2V0WFk6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IGkgKiAzMixcclxuICAgICAgICBzdGVwWDogMzIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdyb3VwID0gc2NlbmUuYWRkLmdyb3VwKCk7XHJcbiAgZ3JvdXAuY3JlYXRlTXVsdGlwbGUoY29uZmlnKTtcclxuICBncm91cC5zZXRUaW50KDE1MCk7XHJcbiAgZ3JvdXAuc2V0T3JpZ2luKDAsIDApO1xyXG4gIGdyb3VwLnBsYXlBbmltYXRpb24oJ3dhdGVyJyk7XHJcbiAgcmV0dXJuIGdyb3VwO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwYXJvIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XHJcbiAgaW5pdGlhbFJvdGF0aW9uU2V0ID0gZmFsc2U7XHJcblxyXG4gIGFybWE6IEFybWE7XHJcblxyXG4gIGluaXRpYWxQb3NpdGlvblg6IG51bWJlcjtcclxuXHJcbiAgaW5pdGlhbFBvc2l0aW9uWTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBhcm1hOiBBcm1hLCByb3RhY2lvbjogbnVtYmVyLFxyXG4gICkge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIGFybWEuc3ByaXRlKTtcclxuICAgIGNvbnN0IGYgPSBuZXcgUGhhc2VyLlBoeXNpY3MuTWF0dGVyLkZhY3Rvcnkoc2NlbmUubWF0dGVyLndvcmxkKTtcclxuICAgIGYuZ2FtZU9iamVjdCh0aGlzLCB7fSwgdHJ1ZSk7XHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgdGhpcy5hcm1hID0gYXJtYTtcclxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uWCA9IHg7XHJcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvblkgPSB5O1xyXG4gICAgdGhpcy5nZXRNYXR0ZXJTcHJpdGUoKS5zZXRCb2R5KCdjaXJjbGUnKTtcclxuICAgIHRoaXMuc2V0Um90YXRpb24ocm90YWNpb24pO1xyXG4gICAgdGhpcy5zZXRTY2FsZSh0aGlzLmFybWEuZXNjYWxhKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lLm1hdHRlci53b3JsZC5vbignY29sbGlzaW9uc3RhcnQnLCB0aGlzLmNvbGxpc2lvbkhhbmRsZXIpO1xyXG4gICAgdGhpcy5zY2VuZS5jYW1lcmFzLmdldENhbWVyYSgnY2FtYXJhTGF0ZXJhbCcpLmlnbm9yZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldE1hdHRlclNwcml0ZSgpIHtcclxuICAgIHJldHVybiAoPFBoYXNlci5QaHlzaWNzLk1hdHRlci5TcHJpdGU+ICg8YW55PiB0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlVXBkYXRlKF90aW1lRWxhcHNlZDogbnVtYmVyLCB0aW1lTGFzdFVwZGF0ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4oXHJcbiAgICAgICAgdGhpcy54LCB0aGlzLnksIHRoaXMuaW5pdGlhbFBvc2l0aW9uWCwgdGhpcy5pbml0aWFsUG9zaXRpb25ZLFxyXG4gICAgICApID49IHRoaXMuYXJtYS5kaXN0YW5jaWFcclxuICAgICkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0TWF0dGVyU3ByaXRlKCkudGhydXN0KHRoaXMuYXJtYS52ZWxvY2lkYWQgKiAodGltZUxhc3RVcGRhdGUgLyAxMDAwKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2NlbmUubWF0dGVyLndvcmxkLnJlbW92ZUxpc3RlbmVyKCdjb2xsaXNpb25zdGFydCcsIHRoaXMuY29sbGlzaW9uSGFuZGxlcik7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb25IYW5kbGVyID0gKFxyXG4gICAgX2V2ZW50OiBQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuRXZlbnRzLkNvbGxpc2lvblN0YXJ0RXZlbnQsXHJcbiAgICBib2R5QTogYW55LFxyXG4gICAgYm9keUI6IGFueSxcclxuICApID0+IHtcclxuICAgIC8vIGFsIGNob2NhciBjb24gZWwgYm9yZGUgZGVsIG1hcGFcclxuICAgIGlmIChib2R5QS5kZW5zaXR5ID09PSBJbmZpbml0eSB8fCBib2R5Qi5kZW5zaXR5ID09PSBJbmZpbml0eSkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH0gZWxzZSBpZiAoYm9keUEuZ2FtZU9iamVjdCAmJiBib2R5Qi5nYW1lT2JqZWN0XHJcbiAgICAgICYmIChcclxuICAgICAgICAoKGJvZHlBLmdhbWVPYmplY3QuZ2V0RGF0YSAmJiBib2R5QS5nYW1lT2JqZWN0LmdldERhdGEoJ3RpcG8nKSA9PT0gJ3BhdHJ1eWEnKSB8fCBib2R5QS5nYW1lT2JqZWN0ID09PSB0aGlzKVxyXG4gICAgICAgICYmICgoYm9keUIuZ2FtZU9iamVjdC5nZXREYXRhICYmIGJvZHlCLmdhbWVPYmplY3QuZ2V0RGF0YSgndGlwbycpID09PSAncGF0cnV5YScpIHx8IGJvZHlCLmdhbWVPYmplY3QgPT09IHRoaXMpXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH0gZWxzZSBpZiAoYm9keUEuZ2FtZU9iamVjdCAmJiBib2R5Qi5nYW1lT2JqZWN0XHJcbiAgICAgICYmIChcclxuICAgICAgICAoKGJvZHlBLmdhbWVPYmplY3QuZ2V0RGF0YSAmJiBib2R5QS5nYW1lT2JqZWN0LmdldERhdGEoJ3RpcG8nKSA9PT0gJ3Blc3F1ZXJvJykgfHwgYm9keUEuZ2FtZU9iamVjdCA9PT0gdGhpcylcclxuICAgICAgICAmJiAoKGJvZHlCLmdhbWVPYmplY3QuZ2V0RGF0YSAmJiBib2R5Qi5nYW1lT2JqZWN0LmdldERhdGEoJ3RpcG8nKSA9PT0gJ3Blc3F1ZXJvJykgfHwgYm9keUIuZ2FtZU9iamVjdCA9PT0gdGhpcylcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHBlc3F1ZXJvID0gYm9keUEuZ2FtZU9iamVjdC5nZXREYXRhKCd0aXBvJykgPT09ICdwZXNxdWVybycgPyBib2R5QS5nYW1lT2JqZWN0IDogYm9keUIuZ2FtZU9iamVjdDtcclxuICAgICAgcGVzcXVlcm8uc2V0RGF0YSgndmlkYScsIHBlc3F1ZXJvLmdldERhdGEoJ3ZpZGEnKSAtIHRoaXMuYXJtYS5kYW5pbyk7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5pbXBvcnQgeyBHT1BhdHJ1bGxhIH0gZnJvbSAnLi9wYXRydWxsYSc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5pbXBvcnQgeyBHT1Blc3F1ZXJvIH0gZnJvbSAnLi9wZXNxdWVybyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG4gIGluaXRpYWxSb3RhdGlvblNldCA9IGZhbHNlO1xyXG5cclxuICBhcm1hOiBBcm1hO1xyXG5cclxuICBkZXN0aW5vOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xyXG5cclxuICBmZWNoYUNyZWFjaW9uOiBtb21lbnQuTW9tZW50O1xyXG5cclxuICBwYXRydXlhOiBHT1BhdHJ1bGxhO1xyXG5cclxuICBzZW5zb3I6IFBoYXNlci5HYW1lT2JqZWN0cy5BcmM7XHJcblxyXG4gIHJlZ3Jlc2FuZG86IGJvb2xlYW47XHJcblxyXG4gIHNpZ3VpZW5kbzogR09QZXNxdWVybztcclxuXHJcbiAgdHdlZW46IFBoYXNlci5Ud2VlbnMuVHdlZW47XHJcblxyXG4gIHByaXZhdGUgdmlzaW9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBzb25pZG86IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlcixcclxuICAgIHRvWDogbnVtYmVyLFxyXG4gICAgdG9ZOiBudW1iZXIsXHJcbiAgICBhcm1hOiBBcm1hLFxyXG4gICAgcm90YWNpb246IG51bWJlcixcclxuICAgIHBhdHJ1eWE6IEdPUGF0cnVsbGEsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgYXJtYS5zcHJpdGUpO1xyXG5cclxuICAgIHRoaXMuc2Vuc29yID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5BcmMoc2NlbmUsIHgsIHkpOyAvLyAsIDE1MCwgMCwgMzYwLCBmYWxzZSwgNDUpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuc2Vuc29yKTtcclxuICAgIGNvbnN0IGYgPSBuZXcgUGhhc2VyLlBoeXNpY3MuTWF0dGVyLkZhY3Rvcnkoc2NlbmUubWF0dGVyLndvcmxkKTtcclxuICAgIGYuZ2FtZU9iamVjdCh0aGlzLnNlbnNvciwgeyBjaXJjbGVSYWRpdXM6IDE1MCwgaXNTZW5zb3I6IHRydWUgfSk7XHJcbiAgICBmLmdhbWVPYmplY3QodGhpcywge30sIHRydWUpO1xyXG4gICAgdGhpcy5zZXRTY2FsZSgwLjMpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuICAgIC8vIGFuaW1hY2lvblxyXG4gICAgdGhpcy5wbGF5KGFybWEuc3ByaXRlKTtcclxuICAgIC8vIHNvbmlkb1xyXG4gICAgaWYgKGFybWEuc29uaWRvKSB7XHJcbiAgICAgIHRoaXMuc29uaWRvID0gc2NlbmUuc291bmQuYWRkKGFybWEuc29uaWRvLCB7IGxvb3A6IHRydWUgfSk7XHJcbiAgICAgIHRoaXMuc29uaWRvLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFybWEgPSBhcm1hO1xyXG4gICAgdGhpcy5wYXRydXlhID0gcGF0cnV5YTtcclxuICAgIHRoaXMuZGVzdGlubyA9IHsgeDogdG9YLCB5OiB0b1kgfTtcclxuICAgIHRoaXMuc2V0Um90YXRpb24ocm90YWNpb24pO1xyXG5cclxuICAgIHRoaXMudmlzaW9uID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUoc2NlbmUsIDAsIDAsICd2aXNpb24nKTtcclxuXHJcbiAgICB0aGlzLnR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcclxuICAgICAgdGFyZ2V0czogdGhpcy5nZXRNYXR0ZXJTcHJpdGUoKSxcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB4OiB0b1gsXHJcbiAgICAgICAgeTogdG9ZLFxyXG4gICAgICB9LFxyXG4gICAgICBkdXJhdGlvbjogMzUwMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZmVjaGFDcmVhY2lvbiA9IG1vbWVudCgpO1xyXG4gICAgdGhpcy5zY2VuZS5tYXR0ZXIud29ybGQub24oJ2NvbGxpc2lvbnN0YXJ0JywgdGhpcy5jb2xsaXNpb25IYW5kbGVyKTtcclxuICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5nZXRDYW1lcmEoJ2NhbWFyYUxhdGVyYWwnKS5pZ25vcmUodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcmVVcGRhdGUodGltZUVsYXBzZWQ6IG51bWJlciwgdGltZUxhc3RVcGRhdGU6IG51bWJlcikge1xyXG4gICAgc3VwZXIucHJlVXBkYXRlKHRpbWVFbGFwc2VkLCB0aW1lTGFzdFVwZGF0ZSk7XHJcbiAgICAoPGFueT4gdGhpcy5zZW5zb3IuYm9keSkucG9zaXRpb24ueCA9ICg8YW55PiB0aGlzLmJvZHkpLnBvc2l0aW9uLng7XHJcbiAgICAoPGFueT4gdGhpcy5zZW5zb3IuYm9keSkucG9zaXRpb24ueSA9ICg8YW55PiB0aGlzLmJvZHkpLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgLy8gc2kgdGVybWlubyBlbCB0dGwsIHRpZW5lIHF1ZSB2b2x2ZXIgYWwgYmFyY29cclxuICAgIGlmIChtb21lbnQoKS5hZGQoLXRoaXMuYXJtYS50dGwsICdzZWNvbmRzJykuaXNBZnRlcih0aGlzLmZlY2hhQ3JlYWNpb24pKSB7XHJcbiAgICAgIHRoaXMucmVncmVzYW5kbyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJvdGFjaW9uID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgdGhpcy5wYXRydXlhLngsIHRoaXMucGF0cnV5YS55KTtcclxuICAgICAgY29uc3QgdmVsb2NpZGFkQW5ndWxhciA9IHRoaXMuYXJtYS52ZWxvY2lkYWRBbmd1bGFyICogKHRpbWVMYXN0VXBkYXRlIC8gMTAwMCk7XHJcbiAgICAgIC8vIGFycmVnbGFyIHF1ZSByb3RlIHBhcmEgZWwgbGFkbyBxdWUgdGVuZ2EgcXVlIHJvdGFyIG1lbm9zXHJcbiAgICAgIGlmIChNYXRoLmFicyhNYXRoLmFicyhyb3RhY2lvbikgLSBNYXRoLmFicyh0aGlzLnJvdGF0aW9uKSkgPiB2ZWxvY2lkYWRBbmd1bGFyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRSb3RhdGlvbihcclxuICAgICAgICAgIHRoaXMucm90YXRpb24gPiByb3RhY2lvblxyXG4gICAgICAgICAgICA/IHRoaXMucm90YXRpb24gLSB2ZWxvY2lkYWRBbmd1bGFyIDogdGhpcy5yb3RhdGlvbiArIHZlbG9jaWRhZEFuZ3VsYXIsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdldE1hdHRlclNwcml0ZSgpLnRocnVzdCh0aGlzLmFybWEudmVsb2NpZGFkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNpZ3VpZW5kbykge1xyXG4gICAgICB0aGlzLnR3ZWVuLmNvbXBsZXRlKCk7XHJcbiAgICAgIGNvbnN0IHJvdGFjaW9uID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlbihcclxuICAgICAgICB0aGlzLngsIHRoaXMueSwgdGhpcy5zaWd1aWVuZG8ueCwgdGhpcy5zaWd1aWVuZG8ueSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdmVsb2NpZGFkQW5ndWxhciA9IHRoaXMuYXJtYS52ZWxvY2lkYWRBbmd1bGFyICogKHRpbWVMYXN0VXBkYXRlIC8gMTAwMCk7XHJcbiAgICAgIC8vIGFycmVnbGFyIHF1ZSByb3RlIHBhcmEgZWwgbGFkbyBxdWUgdGVuZ2EgcXVlIHJvdGFyIG1lbm9zXHJcbiAgICAgIGlmIChNYXRoLmFicyhNYXRoLmFicyhyb3RhY2lvbikgLSBNYXRoLmFicyh0aGlzLnJvdGF0aW9uKSkgPiB2ZWxvY2lkYWRBbmd1bGFyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRSb3RhdGlvbihcclxuICAgICAgICAgIHRoaXMucm90YXRpb24gPiByb3RhY2lvblxyXG4gICAgICAgICAgICA/IHRoaXMucm90YXRpb24gLSB2ZWxvY2lkYWRBbmd1bGFyIDogdGhpcy5yb3RhdGlvbiArIHZlbG9jaWRhZEFuZ3VsYXIsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdldE1hdHRlclNwcml0ZSgpLnRocnVzdCh0aGlzLmFybWEudmVsb2NpZGFkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TWF0dGVyU3ByaXRlKCkge1xyXG4gICAgcmV0dXJuICg8UGhhc2VyLlBoeXNpY3MuTWF0dGVyLlNwcml0ZT4gKDxhbnk+IHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbkhhbmRsZXIgPSAoXHJcbiAgICBfZXZlbnQ6IFBoYXNlci5QaHlzaWNzLk1hdHRlci5FdmVudHMuQ29sbGlzaW9uU3RhcnRFdmVudCxcclxuICAgIGJvZHlBOiBhbnksXHJcbiAgICBib2R5QjogYW55LFxyXG4gICkgPT4ge1xyXG4gICAgaWYgKHRoaXMucmVncmVzYW5kbykge1xyXG4gICAgICB0aGlzLmNvbGlzaW9uQ29uUGF0cnV5YShib2R5QSwgYm9keUIpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5zaWd1aWVuZG8pIHtcclxuICAgICAgdGhpcy5lbmN1ZW50cm9Db25QZXNxdWVybyhib2R5QSwgYm9keUIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNpZ3VpZW5kbykge1xyXG4gICAgICB0aGlzLmNvbGlzaW9uU2lndWllbmRvUGVzcXVlcm8oYm9keUEsIGJvZHlCKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGlzaW9uQ29uUGF0cnV5YSA9IChib2R5QTogTWF0dGVySlMuQm9keVR5cGUsIGJvZHlCOiBNYXR0ZXJKUy5Cb2R5VHlwZSkgPT4ge1xyXG4gICAgaWYgKGJvZHlBLmdhbWVPYmplY3QgJiYgYm9keUIuZ2FtZU9iamVjdFxyXG4gICAgICAmJiAoYm9keUEuZ2FtZU9iamVjdCA9PT0gdGhpcy5wYXRydXlhIHx8IGJvZHlBLmdhbWVPYmplY3QgPT09IHRoaXMpXHJcbiAgICAgICYmIChib2R5Qi5nYW1lT2JqZWN0ID09PSB0aGlzLnBhdHJ1eWEgfHwgYm9keUIuZ2FtZU9iamVjdCA9PT0gdGhpcylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNlbnNvci5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5jdWVudHJvQ29uUGVzcXVlcm8gPSAoYm9keUE6IE1hdHRlckpTLkJvZHlUeXBlLCBib2R5QjogTWF0dGVySlMuQm9keVR5cGUpID0+IHtcclxuICAgIGNvbnN0IGdvQSA9IDxQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdD4gYm9keUEuZ2FtZU9iamVjdDtcclxuICAgIGNvbnN0IGdvQiA9IDxQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdD4gYm9keUIuZ2FtZU9iamVjdDtcclxuXHJcbiAgICBpZiAoZ29BICYmIGdvQlxyXG4gICAgICAmJiAoKGdvQS5nZXREYXRhICYmIGdvQS5nZXREYXRhKCd0aXBvUGVzcXVlcm8nKSA9PT0gdGhpcy5hcm1hLnB1ZWRlTmV1dHJhbGl6YXIpIHx8IGdvQSA9PT0gdGhpcy5zZW5zb3IpXHJcbiAgICAgICYmICgoZ29CLmdldERhdGEgJiYgZ29CLmdldERhdGEoJ3RpcG9QZXNxdWVybycpID09PSB0aGlzLmFybWEucHVlZGVOZXV0cmFsaXphcikgfHwgZ29CID09PSB0aGlzLnNlbnNvcilcclxuICAgICkge1xyXG4gICAgICBjb25zdCBwZXNxdWVybyA9IDxHT1Blc3F1ZXJvPihnb0EgPT09IHRoaXMgPyBnb0IgOiBnb0EpO1xyXG4gICAgICB0aGlzLnNpZ3VpZW5kbyA9IHBlc3F1ZXJvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29saXNpb25TaWd1aWVuZG9QZXNxdWVybyA9IChib2R5QTogTWF0dGVySlMuQm9keVR5cGUsIGJvZHlCOiBNYXR0ZXJKUy5Cb2R5VHlwZSkgPT4ge1xyXG4gICAgY29uc3QgZ29BID0gPFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0PiBib2R5QS5nYW1lT2JqZWN0O1xyXG4gICAgY29uc3QgZ29CID0gPFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0PiBib2R5Qi5nYW1lT2JqZWN0O1xyXG5cclxuICAgIGlmIChnb0EgJiYgZ29CXHJcbiAgICAgICYmICgoZ29BLmdldERhdGEgJiYgZ29BLmdldERhdGEoJ3RpcG9QZXNxdWVybycpID09PSB0aGlzLmFybWEucHVlZGVOZXV0cmFsaXphcikgfHwgZ29BID09PSB0aGlzKVxyXG4gICAgICAmJiAoKGdvQi5nZXREYXRhICYmIGdvQi5nZXREYXRhKCd0aXBvUGVzcXVlcm8nKSA9PT0gdGhpcy5hcm1hLnB1ZWRlTmV1dHJhbGl6YXIpIHx8IGdvQiA9PT0gdGhpcylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNpZ3VpZW5kby5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuc2lndWllbmRvID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWaXNpb24gPSAoKSA9PiB0aGlzLnZpc2lvbjtcclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnNvbmlkbykge1xyXG4gICAgICB0aGlzLnNvbmlkby5zdG9wKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkID0gdGhpcy5wYXRydXlhLmJhcmNvc0F1eGlsaWFyZXMuZmluZCgodmEpID0+IHZhID09PSB0aGlzKTtcclxuICAgIGlmIChkKSB7XHJcbiAgICAgIHRoaXMucGF0cnV5YS5iYXJjb3NBdXhpbGlhcmVzW2QuYXJtYS5pZF0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NlbmUubWF0dGVyLndvcmxkLnJlbW92ZSh0aGlzLmNvbGxpc2lvbkhhbmRsZXIpO1xyXG4gICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW5zYWplIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGRpc3BsYXlUaW1lOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xyXG5cclxuICAgIGNvbnN0IG1hbmluaSA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKHNjZW5lLCAwLCAwLCAnbWFuaW5pJylcclxuICAgICAgLnNldFNjYWxlKDAuMSwgMC4xKVxyXG4gICAgICAuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgIGNvbnN0IHRleHRvID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KHNjZW5lLCBtYW5pbmkuZGlzcGxheVdpZHRoICsgMTAsIG1hbmluaS5kaXNwbGF5SGVpZ2h0IC8gMiwgJ1NlIGFjYWLDsyBlbCByZWNyZW8nLCB7IGNvbG9yOiAnIzAwMDAwMCcgfSlcclxuICAgICAgLnNldE9yaWdpbigwLCAwLjUpO1xyXG5cclxuICAgIGNvbnN0IHJlY3Rhbmd1bG8gPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZShcclxuICAgICAgc2NlbmUsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIG1hbmluaS5kaXNwbGF5V2lkdGggKyAxMCArIHRleHRvLndpZHRoICsgMTAsXHJcbiAgICAgIG1hbmluaS5kaXNwbGF5SGVpZ2h0LFxyXG4gICAgICAweEZGRkZGRixcclxuICAgICkuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgIHRoaXMuYWRkKHJlY3Rhbmd1bG8pO1xyXG4gICAgdGhpcy5hZGQodGV4dG8pO1xyXG4gICAgdGhpcy5hZGQobWFuaW5pKTtcclxuICAgIHRoaXMuc2V0RGVwdGgoMjAwKS5zZXRTY3JvbGxGYWN0b3IoMCkuc2V0UG9zaXRpb24oeCAtIHJlY3Rhbmd1bG8ud2lkdGggLyAyLCB5KTtcclxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5kZXN0cm95KCk7IGNhbGxiYWNrKCk7IH0sIGRpc3BsYXlUaW1lKTtcclxuICAgIHNjZW5lLnNvdW5kLnBsYXkoJ21hbmluaScpO1xyXG5cclxuICAgIHNjZW5lLmNhbWVyYXMuZ2V0Q2FtZXJhKCdtaW5pbWFwJykuaWdub3JlKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmltcG9ydCB7IEdPUGF0cnVsbGEgfSBmcm9tICcuL3BhdHJ1bGxhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNdWVsbGUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICBzZW5zb3I6IFBoYXNlci5HYW1lT2JqZWN0cy5FbGxpcHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc3ByaXRlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBzcHJpdGUpO1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbih4IC0gdGhpcy53aWR0aCAvIDIsIHkgLSB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgY29uc3QgZiA9IG5ldyBQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuRmFjdG9yeShzY2VuZS5tYXR0ZXIud29ybGQpO1xyXG4gICAgZi5nYW1lT2JqZWN0KHRoaXMsIHsgaXNTdGF0aWM6IHRydWUgfSwgdHJ1ZSk7XHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB0aGlzLnNlbnNvciA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuRWxsaXBzZShcclxuICAgICAgc2NlbmUsIHggLSB0aGlzLndpZHRoIC8gMiwgeSAtIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCArIDEwMCwgdGhpcy5oZWlnaHQgKyAxMDAsXHJcbiAgICApO1xyXG4gICAgZi5nYW1lT2JqZWN0KFxyXG4gICAgICB0aGlzLnNlbnNvcixcclxuICAgICAge1xyXG4gICAgICAgIGlzU3RhdGljOiB0cnVlLFxyXG4gICAgICAgIGlzU2Vuc29yOiB0cnVlLFxyXG4gICAgICAgIG9uQ29sbGlkZUFjdGl2ZUNhbGxiYWNrOiB0aGlzLm9uQ29sbGlkZUFjdGl2ZUNhbGxiYWNrSGFuZGxlcixcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5zZW5zb3IpO1xyXG4gIH1cclxuXHJcbiAgb25Db2xsaWRlQWN0aXZlQ2FsbGJhY2tIYW5kbGVyID0gKHBhaXI6IE1hdHRlckpTLklQYWlyKSA9PiB7XHJcbiAgICBsZXQgZ286IEdPUGF0cnVsbGE7XHJcbiAgICBpZiAoKDxNYXR0ZXJKUy5Cb2R5VHlwZT5wYWlyLmJvZHlBKS5nYW1lT2JqZWN0ICYmICg8UGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3Q+KDxNYXR0ZXJKUy5Cb2R5VHlwZT5wYWlyLmJvZHlBKS5nYW1lT2JqZWN0KS5nZXREYXRhICYmICg8UGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3Q+KDxNYXR0ZXJKUy5Cb2R5VHlwZT5wYWlyLmJvZHlBKS5nYW1lT2JqZWN0KS5nZXREYXRhKCd0aXBvJykgPT09ICdwYXRydXlhJykge1xyXG4gICAgICBnbyA9ICg8TWF0dGVySlMuQm9keVR5cGU+cGFpci5ib2R5QSkuZ2FtZU9iamVjdDtcclxuICAgIH0gZWxzZSBpZiAoKDxNYXR0ZXJKUy5Cb2R5VHlwZT5wYWlyLmJvZHlCKS5nYW1lT2JqZWN0ICYmICg8UGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3Q+KDxNYXR0ZXJKUy5Cb2R5VHlwZT5wYWlyLmJvZHlCKS5nYW1lT2JqZWN0KS5nZXREYXRhICYmICg8UGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3Q+KDxNYXR0ZXJKUy5Cb2R5VHlwZT5wYWlyLmJvZHlCKS5nYW1lT2JqZWN0KS5nZXREYXRhKCd0aXBvJykgPT09ICdwYXRydXlhJykge1xyXG4gICAgICBnbyA9ICg8TWF0dGVySlMuQm9keVR5cGU+cGFpci5ib2R5QikuZ2FtZU9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ28pIHtcclxuICAgICAgZ28ucmVjYXJnYXJDb21idXN0aWJsZSgwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgKiBhcyBzZXJ2ZXIgZnJvbSAnLi4vc2VydmVyJztcclxuaW1wb3J0IHsgR09WZWhpY3VsbyB9IGZyb20gJy4vdmVoaWN1bG8nO1xyXG5pbXBvcnQgeyBEaXNwYXJvIH0gZnJvbSAnLi9kaXNwYXJvJztcclxuaW1wb3J0IHsgRHJvbiB9IGZyb20gJy4vZHJvbic7XHJcbmltcG9ydCB7IE1lbnNhamUgfSBmcm9tICcuL21lbnNhamUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdPUGF0cnVsbGEgZXh0ZW5kcyBHT1ZlaGljdWxvIHtcclxuICB1bHRpbW9EaXNwYXJvOiBtb21lbnQuTW9tZW50W10gPSBbXTtcclxuXHJcbiAgYXJtYVNlbGVjY2lvbmFkYSA9IDA7XHJcblxyXG4gIHllbmRvQWxNdWVsbGUgPSBmYWxzZTtcclxuXHJcbiAgYmFyY29zQXV4aWxpYXJlczogRHJvbltdID0gW107XHJcblxyXG4gIGFybWFzSGFiaWxpdGFkYXM6IEJvb2xlYW47XHJcblxyXG4gIGhheVRvcm1lbnRhOiBCb29sZWFuO1xyXG5cclxuICBwcml2YXRlIGJhdGVyaWE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB2ZWhpY2xlOiBQYXRydWxsYSwgZGF0YTogYW55KSB7XHJcbiAgICBzdXBlcihzY2VuZSwgdmVoaWNsZSwgZGF0YSk7XHJcblxyXG4gICAgaWYgKHZlaGljbGUuc3ByaXRlID09PSAncG9saWNpYTEnKSB0aGlzLnNldFNjYWxlKDAuNik7XHJcblxyXG4gICAgaWYgKHZlaGljbGUuYXJtYXMgJiYgdmVoaWNsZS5hcm1hcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbihQaGFzZXIuSW5wdXQuRXZlbnRzLlBPSU5URVJfRE9XTiwgdGhpcy5kaXNwYXJhckhhbmRsZSk7XHJcbiAgICAgIHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24nLCB0aGlzLmtleWJvYXJkSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBzZXJ2ZXIuYWRkaGFuZGxlcihzZXJ2ZXIuRVZFTlRPUy5ESVNQQVJPLCB0aGlzLmRpc3Bhcm9IYW5kbGVyKTtcclxuICAgIHRoaXMuc2NlbmUubWF0dGVyLndvcmxkLm9uKCdjb2xsaXNpb25zdGFydCcsIHRoaXMuY29sbGlzaW9uSGFuZGxlcik7XHJcblxyXG5cclxuICAgIHRoaXMuYmF0ZXJpYSA9IHRoaXMuc2NlbmUuYWRkLnRleHQodGhpcy54LCB0aGlzLnksICcnLFxyXG4gICAgICB7IGZvbnQ6ICdib2xkIDIwcHggQXJpYWwnLCBjb2xvcjogJyMwMDdmMDAnIH0pO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYmF0ZXJpYSk7XHJcbiAgICB0aGlzLmJhdGVyaWEuc2V0T3JpZ2luKDAuNSwgLTEuOSk7XHJcbiAgICB0aGlzLnNjZW5lLmNhbWVyYXMuZ2V0Q2FtZXJhKCdjYW1hcmFMYXRlcmFsJykuaWdub3JlKHRoaXMuYmF0ZXJpYSk7XHJcbiAgICB0aGlzLnNjZW5lLmNhbWVyYXMuZ2V0Q2FtZXJhKCdtaW5pbWFwJykuaWdub3JlKHRoaXMuYmF0ZXJpYSk7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb25IYW5kbGVyID0gKFxyXG4gICAgX2V2ZW50OiBQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuRXZlbnRzLkNvbGxpc2lvblN0YXJ0RXZlbnQsXHJcbiAgICBib2R5QTogYW55LFxyXG4gICAgYm9keUI6IGFueSxcclxuICApID0+IHtcclxuICAgIGlmIChib2R5QS5nYW1lT2JqZWN0ICYmIGJvZHlCLmdhbWVPYmplY3RcclxuICAgICAgJiYgKGJvZHlBLmdhbWVPYmplY3QgPT09IHRoaXMuZ2V0VmlzaW9uKCkgfHwgYm9keUIuZ2FtZU9iamVjdCA9PT0gdGhpcy5nZXRWaXNpb24oKSlcclxuICAgICAgJiYgKChib2R5QS5nYW1lT2JqZWN0LmdldERhdGEgJiYgYm9keUEuZ2FtZU9iamVjdC5nZXREYXRhKCd0aXBvJykgPT09ICdwZXNxdWVybycpXHJcbiAgICAgIHx8IChib2R5Qi5nYW1lT2JqZWN0LmdldERhdGEgJiYgYm9keUIuZ2FtZU9iamVjdC5nZXREYXRhKCd0aXBvJykgPT09ICdwZXNxdWVybycpKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2NlbmUubWF0dGVyLndvcmxkLnJlbW92ZUxpc3RlbmVyKCdjb2xsaXNpb25zdGFydCcsIHRoaXMuY29sbGlzaW9uSGFuZGxlcik7XHJcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zY2VuZS5nYW1lLmNhbnZhcztcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xyXG4gICAgICBuZXcgTWVuc2FqZShcclxuICAgICAgICB0aGlzLnNjZW5lLCB3aWR0aCAvIDIsIGhlaWdodCAtIDMwMCwgNTAwMCwgKCkgPT4geyB0aGlzLmFybWFzSGFiaWxpdGFkYXMgPSB0cnVlOyB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYXlUb3JtZW50YSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzcGFyb0hhbmRsZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuaWQgIT09IHRoaXMuZ2V0RGF0YSgnaWQnKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChkYXRhLmFybWEudGlwbyA9PT0gJ2Rpc3Bhcm8nKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcclxuICAgICAgbmV3IERpc3Bhcm8oXHJcbiAgICAgICAgdGhpcy5zY2VuZSxcclxuICAgICAgICBkYXRhLngsXHJcbiAgICAgICAgZGF0YS55LFxyXG4gICAgICAgIGRhdGEuYXJtYSxcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoZGF0YS5hcm1hLnNvbmlkbyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XHJcbiAgICAgIGNvbnN0IGQgPSBuZXcgRHJvbihcclxuICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgIGRhdGEueCxcclxuICAgICAgICBkYXRhLnksXHJcbiAgICAgICAgZGF0YS5wb2ludGVyLngsXHJcbiAgICAgICAgZGF0YS5wb2ludGVyLnksXHJcbiAgICAgICAgZGF0YS5hcm1hLFxyXG4gICAgICAgIHRoaXMucm90YXRpb24sXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5iYXJjb3NBdXhpbGlhcmVzW2RhdGEuYXJtYS5pZF0gPSBkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlVXBkYXRlKHRpbWVFbGFwc2VkOiBudW1iZXIsIHRpbWVMYXN0VXBkYXRlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmdldERhdGEoJ2NvbWJ1c3RpYmxlQWN0dWFsJykgPD0gMCkge1xyXG4gICAgICBpZiAodGhpcy55ZW5kb0FsTXVlbGxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YSgnc2VuZFRvU2VydmVyJykpIHtcclxuICAgICAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuTU9WRVJfQkFSQ08sIHtcclxuICAgICAgICAgICAgbmljazogdGhpcy5nZXREYXRhKCduaWNrJyksIGlkOiB0aGlzLmdldFZlaGljdWxvKCkuaWQsIHg6IHRoaXMueCwgeTogdGhpcy55LCByb3RhY2lvbjogdGhpcy5yb3RhdGlvbixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMueWVuZG9BbE11ZWxsZSkgdGhpcy5pckFsTXVlbGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN1cGVyLnByZVVwZGF0ZSh0aW1lRWxhcHNlZCwgdGltZUxhc3RVcGRhdGUpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9uKCdpbmljaW9Ub3JtZW50YScsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0RGF0YSgnc3ByaXRlJykgPT09ICdwb2xpY2lhMicpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVzaGFiaWxpdG8gcG9saWNpYSBjaGljbycpO1xyXG4gICAgICAgIHRoaXMuaGF5VG9ybWVudGEgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNjZW5lLmV2ZW50cy5vbignZmluVG9ybWVudGEnLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldERhdGEoJ3Nwcml0ZScpID09PSAncG9saWNpYTInKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hhYmlsaXRvIHBvbGljaWEgY2hpY28nKTtcclxuICAgICAgICB0aGlzLmhheVRvcm1lbnRhID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuZ2V0RGF0YSgnbmljaycpID09PSB0aGlzLmdldERhdGEoJ2p1Z2Fkb3JMb2NhbCcpLm5pY2spIHtcclxuICAgICAgY29uc3QgbWF4aW1vID0gdGhpcy5nZXREYXRhKCdjb21idXN0aWJsZU1heGltbycpO1xyXG4gICAgICBjb25zdCBwb3JjZW50YWplVW5vID0gbWF4aW1vIC8gMTAwO1xyXG4gICAgICBjb25zdCBwb3JjZW50YWplQ29tYiA9IHRoaXMuZ2V0RGF0YSgnY29tYnVzdGlibGVBY3R1YWwnKSAvIHBvcmNlbnRhamVVbm87XHJcbiAgICAgIGNvbnN0IG1vc3RyYXIgPSBgJHtwb3JjZW50YWplQ29tYi50b0ZpeGVkKDEpfSVgO1xyXG4gICAgICB0aGlzLmJhdGVyaWEuc2V0VGV4dChtb3N0cmFyKTtcclxuICAgICAgdGhpcy5iYXRlcmlhLnNldFBvc2l0aW9uKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleWJvYXJkSGFuZGxlciA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuZ2V0RGF0YSgnYXJtYXMnKSkge1xyXG4gICAgICBjb25zdCBhcm1hcyA9IHRoaXMuZ2V0RGF0YSgnYXJtYXMnKTtcclxuICAgICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiBhcm1hc1tldmVudC5rZXlDb2RlIC0gNDldKSB0aGlzLmFybWFTZWxlY2Npb25hZGEgPSBldmVudC5rZXlDb2RlIC0gNDk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwYXJhckhhbmRsZSA9IChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlcikgPT4ge1xyXG4gICAgaWYgKHRoaXMuZ2V0RGF0YSgnc2VsZWN0ZWQnKSAmJiAhdGhpcy5oYXlUb3JtZW50YSAmJiB0aGlzLmdldERhdGEoJ21pbGxhTGltaXRlJykgPCB0aGlzLnkpIHtcclxuICAgICAgY29uc3QgYXJtYXMgPSA8QXJtYVtdPiB0aGlzLmdldERhdGEoJ2FybWFzJyk7XHJcbiAgICAgIGNvbnN0IGFybWEgPSBhcm1hc1t0aGlzLmFybWFTZWxlY2Npb25hZGFdO1xyXG4gICAgICBpZiAodGhpcy5hcm1hc0hhYmlsaXRhZGFzICYmICghdGhpcy51bHRpbW9EaXNwYXJvW3RoaXMuYXJtYVNlbGVjY2lvbmFkYV0gfHwgbW9tZW50KCkuYWRkKC1hcm1hLmNhZGVuY2lhLCAnc2Vjb25kcycpLmlzQWZ0ZXIobW9tZW50KHRoaXMudWx0aW1vRGlzcGFyb1t0aGlzLmFybWFTZWxlY2Npb25hZGFdKSkpKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXJvKGFybWEsIHBvaW50ZXIpO1xyXG4gICAgICAgIHRoaXMudWx0aW1vRGlzcGFyb1t0aGlzLmFybWFTZWxlY2Npb25hZGFdID0gbW9tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRyaWdvbm9tZXRyaWEgbm8gZXMgbGEgbWVqb3Igb3BjaW9uIHBlcm8gZnVlIGxhIHF1ZSBzZSBtZSBvY3VycmlvXHJcbiAgZGlzcGFybyhhcm1hOiBBcm1hLCBwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlcikge1xyXG4gICAgY29uc3Qgcm90YWNpb25BbnRpaG9yYXJpYSA9ICh0aGlzLnJvdGF0aW9uIC0gKE1hdGguUEkgLyAyKSkgKiAtMTtcclxuICAgIGNvbnN0IHJvdGFjaW9uUG9zaXRpdmEgPSByb3RhY2lvbkFudGlob3JhcmlhID49IDBcclxuICAgICAgPyByb3RhY2lvbkFudGlob3JhcmlhICUgKE1hdGguUEkgKiAyKSA6IChNYXRoLlBJICogMikgKyAocm90YWNpb25BbnRpaG9yYXJpYSAlIChNYXRoLlBJICogMikpO1xyXG4gICAgY29uc3QgcmFkaWFuZXMgPSAocm90YWNpb25Qb3NpdGl2YSkgJSAoTWF0aC5QSSAqIDIpO1xyXG4gICAgY29uc3QgcG9zUmVsYXRpdmFYID0gKHRoaXMuZGlzcGxheVdpZHRoIC8gMiArIDUwKSAqIE1hdGguc2luKHJhZGlhbmVzKTtcclxuICAgIGNvbnN0IHBvc1JlbGF0aXZhWSA9ICh0aGlzLmRpc3BsYXlIZWlnaHQgLyAyICsgNTApICogTWF0aC5jb3MocmFkaWFuZXMpO1xyXG5cclxuICAgIGlmIChhcm1hLnRpcG8gPT09ICdkaXNwYXJvJykge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XHJcbiAgICAgIG5ldyBEaXNwYXJvKFxyXG4gICAgICAgIHRoaXMuc2NlbmUsXHJcbiAgICAgICAgdGhpcy54ICsgcG9zUmVsYXRpdmFYLFxyXG4gICAgICAgIHRoaXMueSArIHBvc1JlbGF0aXZhWSxcclxuICAgICAgICBhcm1hLFxyXG4gICAgICAgIHRoaXMucm90YXRpb24sXHJcbiAgICAgICk7XHJcbiAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuRElTUEFSTywge1xyXG4gICAgICAgIGlkOiB0aGlzLmdldERhdGEoJ2lkJyksXHJcbiAgICAgICAgeDogdGhpcy54ICsgcG9zUmVsYXRpdmFYLFxyXG4gICAgICAgIHk6IHRoaXMueSArIHBvc1JlbGF0aXZhWSxcclxuICAgICAgICBhcm1hLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KGFybWEuc29uaWRvKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuYmFyY29zQXV4aWxpYXJlc1thcm1hLmlkXSkge1xyXG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmdldFdvcmxkUG9pbnQocG9pbnRlci54LCBwb2ludGVyLnkpO1xyXG4gICAgICBjb25zdCByb3RhY2lvbiA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIHgsIHkpO1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XHJcbiAgICAgIGNvbnN0IGQgPSBuZXcgRHJvbihcclxuICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgIHRoaXMueCArIHBvc1JlbGF0aXZhWCxcclxuICAgICAgICB0aGlzLnkgKyBwb3NSZWxhdGl2YVksXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIGFybWEsXHJcbiAgICAgICAgcm90YWNpb24sXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5iYXJjb3NBdXhpbGlhcmVzW2FybWEuaWRdID0gZDtcclxuICAgICAgc2VydmVyLmVudmlhcihzZXJ2ZXIuRVZFTlRPUy5ESVNQQVJPLCB7XHJcbiAgICAgICAgaWQ6IHRoaXMuZ2V0RGF0YSgnaWQnKSxcclxuICAgICAgICB4OiB0aGlzLnggKyBwb3NSZWxhdGl2YVgsXHJcbiAgICAgICAgeTogdGhpcy55ICsgcG9zUmVsYXRpdmFZLFxyXG4gICAgICAgIHBvaW50ZXI6IHtcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXJtYSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNhcmdhckNvbWJ1c3RpYmxlID0gKGNhbnRpZGFkKSA9PiB7XHJcbiAgICBjb25zdCBjb21idXN0aWJsZUFjdHVhbCA9IHRoaXMuZ2V0RGF0YSgnY29tYnVzdGlibGVBY3R1YWwnKTtcclxuICAgIGlmICh0aGlzLmdldERhdGEoJ2NvbWJ1c3RpYmxlTWF4aW1vJykgPiBjb21idXN0aWJsZUFjdHVhbCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoJ2NvbWJ1c3RpYmxlQWN0dWFsJywgY29tYnVzdGlibGVBY3R1YWwgKyBjYW50aWRhZCk7XHJcbiAgICAgIGlmICh0aGlzLmdldERhdGEoJ3NlbmRUb1NlcnZlcicpKSB7XHJcbiAgICAgICAgc2VydmVyLmVudmlhcihzZXJ2ZXIuRVZFTlRPUy5DT01CVVNUSUJMRSwge1xyXG4gICAgICAgICAgbmljazogdGhpcy5nZXREYXRhKCduaWNrJyksXHJcbiAgICAgICAgICBpZDogdGhpcy5nZXRWZWhpY3VsbygpLmlkLFxyXG4gICAgICAgICAgY29tYnVzdGlibGU6IGNvbWJ1c3RpYmxlQWN0dWFsICsgY2FudGlkYWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlyQWxNdWVsbGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnllbmRvQWxNdWVsbGUgPSB0cnVlO1xyXG4gICAgY29uc3QgbXVlbGxlID0gPFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU+IHRoaXMuZ2V0RGF0YSgnbXVlbGxlJyk7XHJcbiAgICBjb25zdCByb3RhY2lvbiA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIG11ZWxsZS54LCBtdWVsbGUueSk7XHJcbiAgICBjb25zdCByb3RhY2lvbkR1cmFjaW9uID0gTWF0aC5hYnMoKHRoaXMucm90YXRpb24gKyByb3RhY2lvbikgJSAoTWF0aC5QSSAqIDIpKSAvICh0aGlzLmdldERhdGEoJ2FuZ3VsYXJWZWxvY2l0eScpIC8gMTAwMCk7XHJcbiAgICBjb25zdCBkaXN0YW5jaWEgPSBNYXRoLmFicyhQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBtdWVsbGUueCwgbXVlbGxlLnkpKTtcclxuICAgIGNvbnN0IHRpZW1wb0Rpc3RhbmNpYSA9IGRpc3RhbmNpYSAvIDAuMTtcclxuXHJcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLFxyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHJvdGF0aW9uOiByb3RhY2lvbixcclxuICAgICAgfSxcclxuICAgICAgZHVyYXRpb246IHJvdGFjaW9uRHVyYWNpb24sXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgeDogbXVlbGxlLngsXHJcbiAgICAgICAgICB5OiBtdWVsbGUueSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aWVtcG9EaXN0YW5jaWEsXHJcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4geyB0aGlzLnllbmRvQWxNdWVsbGUgPSBmYWxzZTsgfSxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4uL3NlcnZlcic7XHJcblxyXG5cclxuaW1wb3J0IHsgR09WZWhpY3VsbyB9IGZyb20gJy4vdmVoaWN1bG8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdPUGVzcXVlcm8gZXh0ZW5kcyBHT1ZlaGljdWxvIHtcclxuICB0eHRQZXNjbzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIGNhbnRQZXNjYTogbnVtYmVyPTA7XHJcblxyXG4gIHBhc29NaWxsYTogYm9vbGVhbjtcclxuXHJcbiAgaGF5VG9ybWVudGE6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHZlaGljbGU6IFBlc3F1ZXJvLCBkYXRhOiBhbnkpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB2ZWhpY2xlLCBkYXRhKTtcclxuXHJcbiAgICB0aGlzLnNldERhdGEoJ2hvcmFQZXNjYScsIG1vbWVudCgpLmFkZCh0aGlzLmdldERhdGEoJ3RpZW1wb1Blc2NhJyksICdzZWNvbmRzJykpO1xyXG5cclxuICAgIGlmIChkYXRhLm5pY2sgPT09IGRhdGEuanVnYWRvckxvY2FsLm5pY2spIHtcclxuICAgICAgdGhpcy50eHRQZXNjbyA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMTYsIDIwICogdmVoaWNsZS5pZCwgJycsIHsgZm9udFNpemU6ICcyMHB4JywgZmlsbDogJyNGRkYnIH0pO1xyXG4gICAgICB0aGlzLnR4dFBlc2NvLnNldFNjcm9sbEZhY3RvcigwKTtcclxuICAgICAgdGhpcy50eHRQZXNjby5zZXREZXB0aCgxNTApO1xyXG4gICAgICB0aGlzLnNjZW5lLmNhbWVyYXMuZ2V0Q2FtZXJhKCdjYW1hcmFMYXRlcmFsJykuaWdub3JlKHRoaXMudHh0UGVzY28pO1xyXG4gICAgICB0aGlzLnNjZW5lLmNhbWVyYXMuZ2V0Q2FtZXJhKCdtaW5pbWFwJykuaWdub3JlKHRoaXMudHh0UGVzY28pO1xyXG5cclxuICAgICAgdGhpcy5wYXNvTWlsbGEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYXlUb3JtZW50YSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZVVwZGF0ZSh0aW1lRWxhcHNlZDogbnVtYmVyLCB0aW1lTGFzdFVwZGF0ZTogbnVtYmVyKSB7XHJcbiAgICBzdXBlci5wcmVVcGRhdGUodGltZUVsYXBzZWQsIHRpbWVMYXN0VXBkYXRlKTtcclxuICAgIGlmICh0aGlzLmdldERhdGEoJ3ZpZGEnKSA8PSAwKSB7XHJcbiAgICAgIGNvbnN0IGV4cGxvc2lvbiA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKHRoaXMuc2NlbmUsIHRoaXMueCwgdGhpcy55LCAnZXhwbG9zaW9uJykuc2V0RGVwdGgoOTAwKTtcclxuICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcoZXhwbG9zaW9uKTtcclxuICAgICAgdGhpcy5zY2VuZS5jYW1lcmFzLmdldENhbWVyYSgnY2FtYXJhTGF0ZXJhbCcpLmlnbm9yZShleHBsb3Npb24pO1xyXG4gICAgICB0aGlzLnNjZW5lLmNhbWVyYXMuZ2V0Q2FtZXJhKCdtaW5pbWFwJykuaWdub3JlKGV4cGxvc2lvbik7XHJcbiAgICAgIGV4cGxvc2lvbi5wbGF5KCdleHBsb3Npb24nKTtcclxuXHJcbiAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnNvcktleXMgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXREYXRhKCduaWNrJykgPT09IHRoaXMuZ2V0RGF0YSgnanVnYWRvckxvY2FsJykubmljaykge1xyXG4gICAgICBpZiAodGhpcy55IDwgdGhpcy5nZXREYXRhKCdtaWxsYUxpbWl0ZScpICYmIHRoaXMucGFzb01pbGxhKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgnY291bnRmaXNoJywgdGhpcy5jYW50UGVzY2EpO1xyXG4gICAgICAgIHRoaXMuY2FudFBlc2NhID0gMDtcclxuICAgICAgICB0aGlzLnBhc29NaWxsYSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHh0UGVzY28udGV4dCA9IGBcXG4gQmFyY28gJHt0aGlzLmdldERhdGEoJ2lkJyl9IHBlc2NhZG86MCBcXG5gO1xyXG4gICAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuUEVTQ0FfQkFSQ08sIHtcclxuICAgICAgICAgIG5pY2s6IHRoaXMuZ2V0RGF0YSgnbmljaycpLFxyXG4gICAgICAgICAgaWQ6IHRoaXMuZ2V0VmVoaWN1bG8oKS5pZCxcclxuICAgICAgICAgIHBlc2NhZG9zOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0RGF0YSgnbmljaycpID09PSB0aGlzLmdldERhdGEoJ2p1Z2Fkb3JMb2NhbCcpLm5pY2sgJiYgIXRoaXMuaGF5VG9ybWVudGEgJiYgdGhpcy55ID49IHRoaXMuZ2V0RGF0YSgnbWlsbGFMaW1pdGUnKVxyXG4gICAgJiYgIShjdXJzb3JLZXlzLnVwLmlzRG93biB8fCBjdXJzb3JLZXlzLmRvd24uaXNEb3duKSkge1xyXG4gICAgICBpZiAobW9tZW50KCkuYWRkKHRoaXMuZ2V0RGF0YSgndGllbXBvUGVzY2EnKSwgJ3NlY29uZHMnKS5pc0FmdGVyKHRoaXMuZ2V0RGF0YSgnaG9yYVBlc2NhJykpKSB7XHJcbiAgICAgICAgdGhpcy5jYW50UGVzY2EgKz0gMTtcclxuICAgICAgICBjb25zdCBtaWxsYXNEaXYgPSBNYXRoLnRydW5jKHRoaXMueCAvIDEwMCk7XHJcbiAgICAgICAgdGhpcy5jYW50UGVzY2EgKz0gbWlsbGFzRGl2O1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSgnaG9yYVBlc2NhJywgbW9tZW50KCkpO1xyXG4gICAgICAgIGNvbnN0IHBlc2NhZG8gPSBgXFxuIEJhcmNvICR7dGhpcy5nZXREYXRhKCdpZCcpfSBwZXNjYWRvOiR7dGhpcy5jYW50UGVzY2F9IFxcbmA7XHJcbiAgICAgICAgdGhpcy50eHRQZXNjby50ZXh0ID0gcGVzY2FkbztcclxuICAgICAgICB0aGlzLnBhc29NaWxsYSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YSgnc2VuZFRvU2VydmVyJykpIHtcclxuICAgICAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuUEVTQ0FfQkFSQ08sIHtcclxuICAgICAgICAgICAgbmljazogdGhpcy5nZXREYXRhKCduaWNrJyksXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmdldFZlaGljdWxvKCkuaWQsXHJcbiAgICAgICAgICAgIHBlc2NhZG9zOiB0aGlzLmNhbnRQZXNjYSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zY2VuZS5ldmVudHMub24oJ2luaWNpb1Rvcm1lbnRhJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEoJ3RpcG8nKSA9PT0gJ3Blc3F1ZXJvJyAmJiB0aGlzLmdldERhdGEoJ3RpcG9QZXNxdWVybycpID09PSAnY29tdW4nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rlc2hhYmlsaXRvIHBlc3F1ZXJvIGNvbXVuJyk7XHJcbiAgICAgICAgICB0aGlzLmhheVRvcm1lbnRhID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5ldmVudHMub24oJ2ZpblRvcm1lbnRhJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEoJ3RpcG8nKSA9PT0gJ3Blc3F1ZXJvJyAmJiB0aGlzLmdldERhdGEoJ3RpcG9QZXNxdWVybycpID09PSAnY29tdW4nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hhYmlsaXRvIHBlc3F1ZXJvIGNvbXVuJyk7XHJcbiAgICAgICAgICB0aGlzLmhheVRvcm1lbnRhID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIG9uQ29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgJ2xvYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHNjZW5lLmNhbWVyYXMubWFpbjtcclxuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBzY2VuZS5jYW1lcmFzLm1haW47XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgIGNvbnN0IHByb2dyZXNzQm94ID0gc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICBwcm9ncmVzc0JveC5maWxsU3R5bGUoMHgyMjIyMjIsIDAuOCk7XHJcbiAgICBwcm9ncmVzc0JveC5maWxsUmVjdCh3aWR0aCAvIDIgLSAxNjAsIGhlaWdodCAvIDIgLSAzMCwgMzIwLCA1MCk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBzY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgIHk6IGhlaWdodCAvIDIgLSA1MCxcclxuICAgICAgdGV4dDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIGZvbnQ6ICcyMHB4IG1vbm9zcGFjZScsXHJcbiAgICAgICAgZmlsbDogJ2JsdWUnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBsb2FkaW5nVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gc2NlbmUubWFrZS50ZXh0KHtcclxuICAgICAgeDogd2lkdGggLyAyLFxyXG4gICAgICB5OiBoZWlnaHQgLyAyIC0gNSxcclxuICAgICAgdGV4dDogJzAlJyxcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICBmb250OiAnMThweCBtb25vc3BhY2UnLFxyXG4gICAgICAgIGZpbGw6ICdibHVlJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcGVyY2VudFRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICBjb25zdCBhc3NldFRleHQgPSBzY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICB4OiB3aWR0aCAvIDIsXHJcbiAgICAgIHk6IGhlaWdodCAvIDIgKyA1MCxcclxuICAgICAgdGV4dDogJycsXHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgZm9udDogJzE4cHggbW9ub3NwYWNlJyxcclxuICAgICAgICBmaWxsOiAnYmx1ZScsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3NldFRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICBzY2VuZS5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZSkgPT4ge1xyXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIuY2xlYXIoKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIuZmlsbFN0eWxlKDB4ZmZmZmZmLCAxKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIuZmlsbFJlY3Qod2lkdGggLyAyIC0gMTUwLCBoZWlnaHQgLyAyIC0gMjAsIDMwMCAqIHZhbHVlLCAzMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzY2VuZS5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xyXG4gICAgICBhc3NldFRleHQuc2V0VGV4dChgTG9hZGluZyBhc3NldDogJHtmaWxlLmtleX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNjZW5lLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xyXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XHJcbiAgICAgIHByb2dyZXNzQm94LmRlc3Ryb3koKTtcclxuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xyXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XHJcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XHJcblxyXG4gICAgICBzY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICAgIHg6IHdpZHRoIC8gMixcclxuICAgICAgICB5OiBoZWlnaHQgLyAyICsgNTAsXHJcbiAgICAgICAgdGV4dDogJ0NsaWNrIHRvIHN0YXJ0JyxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgZm9udDogJzE4cHggbW9ub3NwYWNlJyxcclxuICAgICAgICAgIGZpbGw6ICdibHVlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHT1Rvcm1lbnRhIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgdG9ybmFkb3M6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXT1bXTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgc3ByaXRlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHNjZW5lKTtcclxuICAgIGNvbnN0IGNhbnRpZGFkVG9ybmFkb3MgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTAwKSkgKyAxO1xyXG4gICAgY29uc29sZS5sb2coYGNhbnRpZGFkIHRvcm5hZG9zOiAke2NhbnRpZGFkVG9ybmFkb3N9YCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnRpZGFkVG9ybmFkb3M7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB4ID0gKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApICUgMzIwMDtcclxuICAgICAgY29uc3QgeSA9IChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSAlIDMyMDA7XHJcbiAgICAgIGNvbnN0IHRvcm5hZG8gPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZShzY2VuZSwgeCwgeSwgc3ByaXRlKS5wbGF5KCd0b3JtZW50YScpLnNldFNjYWxlKDAuMywgMC4zKTtcclxuICAgICAgdGhpcy5hZGQodG9ybmFkbyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5zY2VuZS5jYW1lcmFzLmdldENhbWVyYSgnbWluaW1hcCcpLmlnbm9yZSh0aGlzKTtcclxuICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5nZXRDYW1lcmEoJ2NhbWFyYUxhdGVyYWwnKS5pZ25vcmUodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4uL3NlcnZlcic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi4vc2NlbmVzL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdPVmVoaWN1bG8gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICBwcml2YXRlIGlkO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxSb3RhdGlvblNldCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHZpc2lvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuXHJcbiAgcHJpdmF0ZSBzcHJpdGVMYXRlcmFsOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG5cclxuICBwcml2YXRlIHZlaGljdWxvOiBQZXNxdWVybyB8IFBhdHJ1bGxhO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB2ZWhpY2xlOiBQZXNxdWVybyB8IFBhdHJ1bGxhLCBkYXRhOiBhbnkpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB2ZWhpY2xlLngsIHZlaGljbGUueSwgdmVoaWNsZS5zcHJpdGUpO1xyXG5cclxuICAgIHRoaXMudmVoaWN1bG8gPSB2ZWhpY2xlO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlTGF0ZXJhbCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKFxyXG4gICAgICBzY2VuZSwgdmVoaWNsZS54LCB2ZWhpY2xlLnksIHZlaGljbGUuc3ByaXRlTGF0ZXJhbEluaWNpYWwsXHJcbiAgICApO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5zcHJpdGVMYXRlcmFsKTtcclxuICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmlnbm9yZSh0aGlzLnNwcml0ZUxhdGVyYWwpO1xyXG4gICAgdGhpcy5zY2VuZS5jYW1lcmFzLmdldENhbWVyYSgnY2FtYXJhTGF0ZXJhbCcpLmlnbm9yZSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmlkID0gdmVoaWNsZS5pZDtcclxuICAgIC8vIGFncmVnYSBsYXMgZnVuY2lvbmFsaWRhZGVzIGRlIG1hdHRlciBhbCBzcHJpdGUgY29tdW4gZGUgcGhhc2VyXHJcbiAgICBjb25zdCBmID0gbmV3IFBoYXNlci5QaHlzaWNzLk1hdHRlci5GYWN0b3J5KHNjZW5lLm1hdHRlci53b3JsZCk7XHJcbiAgICBmLmdhbWVPYmplY3QodGhpcywge30sIHRydWUpO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5wbGF5KHZlaGljbGUuc3ByaXRlKTtcclxuXHJcbiAgICB0aGlzLnZpc2lvbiA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKHNjZW5lLCAwLCAwLCAndmlzaW9uJykuc2V0U2NhbGUodmVoaWNsZS5yYW5nb1Zpc2lvbiwgdmVoaWNsZS5yYW5nb1Zpc2lvbik7XHJcbiAgICBmLmdhbWVPYmplY3QodGhpcy52aXNpb24sIHsgaXNTZW5zb3I6IHRydWUsIGNpcmNsZVJhZGl1czogdGhpcy52aXNpb24uZGlzcGxheVdpZHRoIC8gMiB9LCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLnNldERhdGFFbmFibGVkKCk7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB0aGlzLnNldERhdGEoaywgZGF0YVtrXSkpO1xyXG5cclxuICAgIGlmIChkYXRhLmNhbkJlU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXJ2ZXIuYWRkaGFuZGxlcihzZXJ2ZXIuRVZFTlRPUy5NT1ZFUl9CQVJDTywgdGhpcy5tdWV2b0JhcmNvSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBnZXRNYXR0ZXJTcHJpdGUoKSB7XHJcbiAgICByZXR1cm4gKDxQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuU3ByaXRlPiAoPGFueT4gdGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmdldERhdGEoJ2NhbkJlU2VsZWN0ZWQnKSkge1xyXG4gICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9uKCdjaGFuZ2VCb2F0JywgKGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF0YSgnaWQnKSA9PT0gaWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKCdzZWxlY3RlZCcsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuZ2V0TWF0dGVyU3ByaXRlKCkuc2V0VmVsb2NpdHkoMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Um90YXRpb24oUGhhc2VyLk1hdGguRGVnVG9SYWQodGhpcy5nZXREYXRhKCdpbml0aWFsUm90YXRpb24nKSkpO1xyXG4gIH1cclxuXHJcbiAgbXVldm9CYXJjb0hhbmRsZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuZ2V0RGF0YSgnbmljaycpID09PSBkYXRhLm5pY2sgJiYgdGhpcy5nZXREYXRhKCdpZCcpID09PSBkYXRhLmlkKSB7XHJcbiAgICAgIHRoaXMueCA9IGRhdGEueDtcclxuICAgICAgdGhpcy55ID0gZGF0YS55O1xyXG4gICAgICB0aGlzLnNldFJvdGF0aW9uKGRhdGEucm90YWNpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZVVwZGF0ZSh0aW1lRWxhcHNlZDogbnVtYmVyLCB0aW1lTGFzdFVwZGF0ZTogbnVtYmVyKSB7XHJcbiAgICBzdXBlci5wcmVVcGRhdGUodGltZUVsYXBzZWQsIHRpbWVMYXN0VXBkYXRlKTtcclxuICAgIHRoaXMudmlzaW9uLnNldFBvc2l0aW9uKHRoaXMueCwgdGhpcy55KTtcclxuICAgIGlmICghdGhpcy5pbml0aWFsUm90YXRpb25TZXQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsUm90YXRpb25TZXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFJvdGF0aW9uKFBoYXNlci5NYXRoLkRlZ1RvUmFkKHRoaXMuZ2V0RGF0YSgnaW5pdGlhbFJvdGF0aW9uJykpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3R1YWxpem8gZWwgc3ByaXRlIGxhdGVyYWxcclxuICAgIHRoaXMuc3ByaXRlTGF0ZXJhbC5zZXRUZXh0dXJlKHRoaXMudmVoaWN1bG8uc3ByaXRlc0xhdGVyYWxlcy51KTtcclxuICAgIGNvbnN0IHJhdGlvWSA9IHRoaXMueSAvICgoPEdhbWU+IHRoaXMuc2NlbmUpLnNjZW5lQ29uZmlnLmhlaWdodCAtIHRoaXMuc3ByaXRlTGF0ZXJhbC5oZWlnaHQpO1xyXG4gICAgY29uc3QgcmF0aW9YID0gdGhpcy54IC8gKCg8R2FtZT4gdGhpcy5zY2VuZSkuc2NlbmVDb25maWcud2lkdGggLSB0aGlzLnNwcml0ZUxhdGVyYWwud2lkdGgpO1xyXG4gICAgY29uc3Qgc3ByaXRlTGF0ZXJhbFkgPSAodGhpcy5zY2VuZS5jYW1lcmFzLmdldENhbWVyYSgnY2FtYXJhTGF0ZXJhbCcpLmhlaWdodCAtIHRoaXMuc3ByaXRlTGF0ZXJhbC5oZWlnaHQpICogcmF0aW9ZICsgdGhpcy5zcHJpdGVMYXRlcmFsLmhlaWdodCAvIDI7XHJcbiAgICBjb25zdCBzcHJpdGVMYXRlcmFsWCA9ICgodGhpcy5zY2VuZS5jYW1lcmFzLmdldENhbWVyYSgnY2FtYXJhTGF0ZXJhbCcpLndpZHRoIC0gdGhpcy5zcHJpdGVMYXRlcmFsLmRpc3BsYXlXaWR0aCkgKiByYXRpb1gpICsgKHRoaXMuc3ByaXRlTGF0ZXJhbC5kaXNwbGF5V2lkdGggLyAyKTtcclxuICAgIHRoaXMuc3ByaXRlTGF0ZXJhbC5zZXRYKHNwcml0ZUxhdGVyYWxYKTtcclxuICAgIHRoaXMuc3ByaXRlTGF0ZXJhbC5zZXRZKHNwcml0ZUxhdGVyYWxZKTtcclxuICAgIGNvbnN0IHNwcml0ZUxhdGVyYWxTY2FsZSA9IDAuOSAqIHJhdGlvWTtcclxuICAgIHRoaXMuc3ByaXRlTGF0ZXJhbC5zZXRTY2FsZSgwLjEgKyBzcHJpdGVMYXRlcmFsU2NhbGUsIDAuMSArIHNwcml0ZUxhdGVyYWxTY2FsZSk7XHJcbiAgICB0aGlzLnNwcml0ZUxhdGVyYWwuc2V0RGVwdGgodGhpcy55KTtcclxuICAgIC8vIFBJIC8gMiBlcyBhcnJpYmFcclxuICAgIGNvbnN0IHJvdGFjaW9uID0gTWF0aC5hYnModGhpcy5yb3RhdGlvbiAlIChNYXRoLlBJICogMikpO1xyXG4gICAgaWYgKHJvdGFjaW9uID49IE1hdGguUEkgLyA0ICYmIHJvdGFjaW9uIDwgKE1hdGguUEkgLyA0KSAqIDMpIHtcclxuICAgICAgdGhpcy5zcHJpdGVMYXRlcmFsLnNldFRleHR1cmUodGhpcy52ZWhpY3Vsby5zcHJpdGVzTGF0ZXJhbGVzLnUpO1xyXG4gICAgfSBlbHNlIGlmIChyb3RhY2lvbiA+PSAoTWF0aC5QSSAvIDQpICogMyAmJiByb3RhY2lvbiA8IE1hdGguUEkgKyBNYXRoLlBJIC8gNCkge1xyXG4gICAgICB0aGlzLnNwcml0ZUxhdGVyYWwuc2V0VGV4dHVyZSh0aGlzLnZlaGljdWxvLnNwcml0ZXNMYXRlcmFsZXMubCk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdGFjaW9uID49IE1hdGguUEkgKyBNYXRoLlBJIC8gNCAmJiByb3RhY2lvbiA8IChNYXRoLlBJIC8gNCkgKiAzICsgTWF0aC5QSSkge1xyXG4gICAgICB0aGlzLnNwcml0ZUxhdGVyYWwuc2V0VGV4dHVyZSh0aGlzLnZlaGljdWxvLnNwcml0ZXNMYXRlcmFsZXMuZCk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdGFjaW9uID49IChNYXRoLlBJIC8gNCkgKiAzICsgTWF0aC5QSSB8fCByb3RhY2lvbiA8IE1hdGguUEkgLyA0KSB7XHJcbiAgICAgIHRoaXMuc3ByaXRlTGF0ZXJhbC5zZXRUZXh0dXJlKHRoaXMudmVoaWN1bG8uc3ByaXRlc0xhdGVyYWxlcy5yKTtcclxuICAgIH1cclxuICAgIC8vIGZpbiBhY3R1YWxpem8gZWwgc3ByaXRlIGxhdGVyYWxcclxuXHJcbiAgICBpZiAoIXRoaXMuZ2V0RGF0YSgnc2VsZWN0ZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGN1cnNvcktleXMgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuICAgIGNvbnN0IGFuZ3VsYXJWZWxvY2l0eSA9IHRoaXMuZ2V0RGF0YSgnYW5ndWxhclZlbG9jaXR5JykgKiAodGltZUxhc3RVcGRhdGUgLyAxMDAwKTtcclxuXHJcbiAgICBpZiAoY3Vyc29yS2V5cy5yaWdodC5pc0Rvd24pIHtcclxuICAgICAgdGhpcy5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uXHJcbiAgICAgICAgKyAoY3Vyc29yS2V5cy5kb3duLmlzRG93biA/IC1hbmd1bGFyVmVsb2NpdHkgOiBhbmd1bGFyVmVsb2NpdHkpKTtcclxuICAgIH0gZWxzZSBpZiAoY3Vyc29yS2V5cy5sZWZ0LmlzRG93bikge1xyXG4gICAgICB0aGlzLnNldFJvdGF0aW9uKHRoaXMucm90YXRpb25cclxuICAgICAgICAtIChjdXJzb3JLZXlzLmRvd24uaXNEb3duID8gLWFuZ3VsYXJWZWxvY2l0eSA6IGFuZ3VsYXJWZWxvY2l0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJzb3JLZXlzLnVwLmlzRG93bikge1xyXG4gICAgICB0aGlzLmdldE1hdHRlclNwcml0ZSgpLnRocnVzdCh0aGlzLmdldERhdGEoJ3ZlbG9jaXR5JykpO1xyXG4gICAgICBpZiAodGhpcy5nZXREYXRhKCdjb21idXN0aWJsZUFjdHVhbCcpKSB7XHJcbiAgICAgICAgY29uc3QgY29tYnVzdGlibGUgPSB0aGlzLmdldERhdGEoJ2NvbWJ1c3RpYmxlQWN0dWFsJykgLSB0aGlzLmdldERhdGEoJ2dhc3RvQ29tYnVzdGlibGUnKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoJ2NvbWJ1c3RpYmxlQWN0dWFsJywgY29tYnVzdGlibGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEoJ3NlbmRUb1NlcnZlcicpKSB7XHJcbiAgICAgICAgICBzZXJ2ZXIuZW52aWFyKHNlcnZlci5FVkVOVE9TLkNPTUJVU1RJQkxFLCB7XHJcbiAgICAgICAgICAgIG5pY2s6IHRoaXMuZ2V0RGF0YSgnbmljaycpLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5nZXRWZWhpY3VsbygpLmlkLFxyXG4gICAgICAgICAgICBjb21idXN0aWJsZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjdXJzb3JLZXlzLmRvd24uaXNEb3duKSB7XHJcbiAgICAgIHRoaXMuZ2V0TWF0dGVyU3ByaXRlKCkudGhydXN0QmFjayh0aGlzLmdldERhdGEoJ3ZlbG9jaXR5JykpO1xyXG4gICAgICBpZiAodGhpcy5nZXREYXRhKCdjb21idXN0aWJsZUFjdHVhbCcpKSB7XHJcbiAgICAgICAgY29uc3QgY29tYnVzdGlibGUgPSB0aGlzLmdldERhdGEoJ2NvbWJ1c3RpYmxlQWN0dWFsJykgLSB0aGlzLmdldERhdGEoJ2dhc3RvQ29tYnVzdGlibGUnKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoJ2NvbWJ1c3RpYmxlQWN0dWFsJywgY29tYnVzdGlibGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldERhdGEoJ3NlbmRUb1NlcnZlcicpKSB7XHJcbiAgICAgICAgICBzZXJ2ZXIuZW52aWFyKHNlcnZlci5FVkVOVE9TLkNPTUJVU1RJQkxFLCB7XHJcbiAgICAgICAgICAgIG5pY2s6IHRoaXMuZ2V0RGF0YSgnbmljaycpLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5nZXRWZWhpY3VsbygpLmlkLFxyXG4gICAgICAgICAgICBjb21idXN0aWJsZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmdldERhdGEoJ3NlbmRUb1NlcnZlcicpKSB7XHJcbiAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuTU9WRVJfQkFSQ08sIHtcclxuICAgICAgICBuaWNrOiB0aGlzLmdldERhdGEoJ25pY2snKSwgaWQ6IHRoaXMuaWQsIHg6IHRoaXMueCwgeTogdGhpcy55LCByb3RhY2lvbjogdGhpcy5yb3RhdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xyXG5cclxuICBwdWJsaWMgc2V0U2VsZWNjaW9uYWRvID0gKGVzdGFTZWxlY2Npb25hZG8pID0+IHtcclxuICAgIHRoaXMuc2V0RGF0YSgnc2VsZWN0ZWQnLCBlc3RhU2VsZWNjaW9uYWRvKTtcclxuICAgIGlmIChlc3RhU2VsZWNjaW9uYWRvKSB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5zdGFydEZvbGxvdyh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWaXNpb24gPSAoKSA9PiB0aGlzLnZpc2lvbjtcclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5nZXREYXRhKCdzZWxlY3RlZCcpICYmIHRoaXMuc2NlbmUgJiYgdGhpcy5zY2VuZS5jYW1lcmFzICYmIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluKSB7XHJcbiAgICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLnN0b3BGb2xsb3coKTtcclxuICAgIH1cclxuICAgIHRoaXMudmlzaW9uLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuc3ByaXRlTGF0ZXJhbC5kZXN0cm95KCk7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBnZXRWZWhpY3VsbyA9ICgpID0+IHRoaXMudmVoaWN1bG87XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBJbnB1dFRleHRQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL2lucHV0dGV4dC1wbHVnaW4uanMnO1xyXG5cclxuaW1wb3J0IHsgTG9hZCB9IGZyb20gJy4vc2NlbmVzL2xvYWQnO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnLi9zY2VuZXMvbWFpbic7XHJcbmltcG9ydCB7IE5pY2sgfSBmcm9tICcuL3NjZW5lcy9uaWNrJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vc2NlbmVzL2dhbWUnO1xyXG5pbXBvcnQgeyBSZXN1bHRhZG8gfSBmcm9tICcuL3NjZW5lcy9yZXN1bHRhZG8nO1xyXG5pbXBvcnQgeyBFc3BlcmEgfSBmcm9tICcuL3NjZW5lcy9lc3BlcmEnO1xyXG5pbXBvcnQgeyBQb3BVcCB9IGZyb20gJy4vc2NlbmVzL3BvcHVwJztcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgdGl0bGU6ICdTYW1wbGUnLFxyXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gIHNjYWxlOiB7XHJcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICB9LFxyXG4gIGRvbToge1xyXG4gICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ21hdHRlcicsXHJcbiAgICBtYXR0ZXI6IHtcclxuICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgIHNldEJvdW5kczogdHJ1ZSxcclxuICAgICAgZ3Jhdml0eTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIG1vdXNlOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGFyZW50OiAnZ2FtZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgc2NlbmU6IFtMb2FkLCBNYWluLCBFc3BlcmEsIE5pY2ssIEdhbWUsIFJlc3VsdGFkbywgUG9wVXBdLFxyXG4gIHBsdWdpbnM6IHtcclxuICAgIGdsb2JhbDogW3tcclxuICAgICAga2V5OiAncmV4SW5wdXRUZXh0UGx1Z2luJyxcclxuICAgICAgcGx1Z2luOiBJbnB1dFRleHRQbHVnaW4sXHJcbiAgICAgIHN0YXJ0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbmdhbWUuc2NlbmUuc3RhcnQoJ0xvYWQnKTtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCAqIGFzIHNlcnZlciBmcm9tICcuLi9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVzcGVyYSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uZWN0YW5kbzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIG5pY2s6IHN0cmluZztcclxuXHJcbiAgc2NlbmVDb25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignRXNwZXJhJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMubmljayA9IGRhdGEubmljaztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG5cclxuICAgIHRoaXMuYWRkLmltYWdlKDAsIDAsICdtYWluJylcclxuICAgICAgLnNldERpc3BsYXlTaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgIC5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgdGhpcy5jb25lY3RhbmRvID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KHRoaXMsIDAsIDAsICdDb25lY3RhbmRvIGNvbiBqdWdhZG9yLi4uJywgeyBmb250U2l6ZTogJzM1cHgnLCBjb2xvcjogJyNGRkYnIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLmNvbmVjdGFuZG8uc2V0UG9zaXRpb24oXHJcbiAgICAgICh3aWR0aCAtIHRoaXMuY29uZWN0YW5kby53aWR0aCkgLyAyLFxyXG4gICAgICAoaGVpZ2h0IC0gdGhpcy5jb25lY3RhbmRvLmhlaWdodCkgLyAyLFxyXG4gICAgKTtcclxuXHJcblxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5jb25lY3RhbmRvKTtcclxuXHJcbiAgICBzZXJ2ZXIuYWRkaGFuZGxlcihzZXJ2ZXIuRVZFTlRPUy5JTklDSUFSX1BBUlRJREEsIHRoaXMuaW5pY2lhclBhcnRpZGFIYW5kbGVyKTtcclxuXHJcbiAgICBhd2FpdCBzZXJ2ZXIuc3RhcnRXZWJTb2NrZXQoKTtcclxuICB9XHJcblxyXG4gIGluaWNpYXJQYXJ0aWRhSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGdldHBhcnRpZGEgPSBhd2FpdCBzZXJ2ZXIuZ2V0UGFydGlkYSgpO1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywgeyAuLi5nZXRwYXJ0aWRhLmRhdGEsIG5pY2s6IHRoaXMubmljayB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVuc2FqZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmltcG9ydCB7IEdPVmVoaWN1bG8gfSBmcm9tICcuLi9nYW1lT2JqZWN0cy92ZWhpY3Vsbyc7XHJcbmltcG9ydCB7IEdPUGVzcXVlcm8gfSBmcm9tICcuLi9nYW1lT2JqZWN0cy9wZXNxdWVybyc7XHJcbmltcG9ydCB7IEdPUGF0cnVsbGEgfSBmcm9tICcuLi9nYW1lT2JqZWN0cy9wYXRydWxsYSc7XHJcbmltcG9ydCB7IE11ZWxsZSB9IGZyb20gJy4uL2dhbWVPYmplY3RzL211ZWxsZSc7XHJcbmltcG9ydCB7IGFncmVnYXJBZ3VhIH0gZnJvbSAnLi4vZ2FtZU9iamVjdHMvYWd1YSc7XHJcbmltcG9ydCAqIGFzIHNlcnZlciBmcm9tICcuLi9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBHT1Rvcm1lbnRhIH0gZnJvbSAnLi4vZ2FtZU9iamVjdHMvdG9ybWVudGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIG1pbmltYXA6IFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuQ2FtZXJhO1xyXG5cclxuICBjYW1hcmFMYXRlcmFsOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcclxuXHJcbiAgc2NlbmVDb25maWc6IFNjZW5lQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgdHh0UGVzY2Fkb1RvdGFsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgbmllYmxhRGVHdWVycmE6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcblxyXG4gIHJlbmRlclRleHR1cmU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZW5kZXJUZXh0dXJlO1xyXG5cclxuICB0b3JtZW50YUFjdGl2YTogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lcjtcclxuXHJcbiAgdG90YWxTZWNvbmRzID0gMDtcclxuXHJcbiAgdG9ybWVudGFzOiBUb3JtZW50YVtdO1xyXG5cclxuICBqdWdhZG9yTG9jYWw6IHtcclxuICAgIG5pY2s6IHN0cmluZyxcclxuICAgIHZlaGljdWxvczogR09QZXNxdWVyb1tdIHwgR09QYXRydWxsYVtdLFxyXG4gICAgcGVzY2Fkb3M6IG51bWJlcixcclxuICB9ID0geyBuaWNrOiAncGxheWVyMicsIHZlaGljdWxvczogW10sIHBlc2NhZG9zOiAwIH07XHJcblxyXG4gIGp1Z2Fkb3JSZW1vdG86IHtcclxuICAgIG5pY2s6IHN0cmluZyxcclxuICB9ID0geyBuaWNrOiAncGxheWVyMicgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignR2FtZScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLnNjZW5lQ29uZmlnID0gZGF0YTtcclxuICAgIHRoaXMuanVnYWRvckxvY2FsLm5pY2sgPSBkYXRhLm5pY2s7XHJcbiAgICB0aGlzLmp1Z2Fkb3JSZW1vdG8ubmljayA9IHRoaXMuc2NlbmVDb25maWcuanVnYWRvcmVzLmZpbmQoKGopID0+IGoubmljayAhPT0gZGF0YS5uaWNrKS5uaWNrO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgIGtleTogJ3BvbGljaWExJyxcclxuICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwb2xpY2lhMScsIHtcclxuICAgICAgICBzdGFydDogMCxcclxuICAgICAgICBlbmQ6IDEsXHJcbiAgICAgIH0pLFxyXG4gICAgICBmcmFtZVJhdGU6IDMsXHJcbiAgICAgIHJlcGVhdDogLTEsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgIGtleTogJ3BvbGljaWEyJyxcclxuICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwb2xpY2lhMicsIHtcclxuICAgICAgICBzdGFydDogMCxcclxuICAgICAgICBlbmQ6IDEsXHJcbiAgICAgIH0pLFxyXG4gICAgICBmcmFtZVJhdGU6IDMsXHJcbiAgICAgIHJlcGVhdDogLTEsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgIGtleTogJ3Blc3F1ZXJvMScsXHJcbiAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncGVzcXVlcm8xJywge1xyXG4gICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgIGVuZDogMSxcclxuICAgICAgfSksXHJcbiAgICAgIGZyYW1lUmF0ZTogMyxcclxuICAgICAgcmVwZWF0OiAtMSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAga2V5OiAncGVzcXVlcm8yJyxcclxuICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwZXNxdWVybzInLCB7XHJcbiAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgZW5kOiAxLFxyXG4gICAgICB9KSxcclxuICAgICAgZnJhbWVSYXRlOiAzLFxyXG4gICAgICByZXBlYXQ6IC0xLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgIGtleTogJ3BhdHJ1bGxhLWF1eGlsaWFyJyxcclxuICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwYXRydWxsYS1hdXhpbGlhcicsIHtcclxuICAgICAgICBzdGFydDogMCxcclxuICAgICAgICBlbmQ6IDEsXHJcbiAgICAgIH0pLFxyXG4gICAgICBmcmFtZVJhdGU6IDMsXHJcbiAgICAgIHJlcGVhdDogLTEsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAga2V5OiAncGF0cnVsbGEtaGVsaWNvcHRlcm8nLFxyXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BhdHJ1bGxhLWhlbGljb3B0ZXJvJywge1xyXG4gICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgIGVuZDogNSxcclxuICAgICAgfSksXHJcbiAgICAgIGZyYW1lUmF0ZTogOCxcclxuICAgICAgcmVwZWF0OiAtMSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAga2V5OiAndG9ybWVudGEnLFxyXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3Rvcm1lbnRhJywge1xyXG4gICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgIGVuZDogMyxcclxuICAgICAgfSksXHJcbiAgICAgIGZyYW1lUmF0ZTogMjAsXHJcbiAgICAgIHlveW86IGZhbHNlLFxyXG4gICAgICByZXBlYXQ6IC0xLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICBrZXk6ICdleHBsb3Npb24nLFxyXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2V4cGxvc2lvbicsIHtcclxuICAgICAgICBzdGFydDogNixcclxuICAgICAgICBlbmQ6IDExLFxyXG4gICAgICB9KSxcclxuICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgeW95bzogZmFsc2UsXHJcbiAgICAgIHJlcGVhdDogMSxcclxuICAgICAgaGlkZU9uQ29tcGxldGU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvcm1lbnRhRW5UaWVtcG89ZmFsc2VcclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMubWF0dGVyLndvcmxkLnNldEJvdW5kcygwLCAwLCB0aGlzLnNjZW5lQ29uZmlnLndpZHRoLCB0aGlzLnNjZW5lQ29uZmlnLmhlaWdodCk7XHJcbiAgICB0aGlzLmNhbWVyYXMubWFpbi5zZXRCb3VuZHMoMCwgMCwgdGhpcy5zY2VuZUNvbmZpZy53aWR0aCwgdGhpcy5zY2VuZUNvbmZpZy5oZWlnaHQpXHJcbiAgICAgIC5zZXRTaXplKHRoaXMuZ2FtZS5jYW52YXMud2lkdGgsIHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0IC0gMjAwKTtcclxuXHJcbiAgICAvLyBjYW1hcmEgbWluaW1hcGFcclxuICAgIGNvbnN0IG1pbmltYXBhV2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBtaW5pbWFwYUhlaWdodCA9IHRoaXMuc2NlbmVDb25maWcuaGVpZ2h0ICogKDEwMCAvIHRoaXMuc2NlbmVDb25maWcud2lkdGgpO1xyXG4gICAgdGhpcy5taW5pbWFwID0gdGhpcy5jYW1lcmFzLmFkZCgzMCwgMzAsIG1pbmltYXBhV2lkdGgsIG1pbmltYXBhSGVpZ2h0LCBmYWxzZSwgJ21pbmltYXAnKTtcclxuICAgIHRoaXMubWluaW1hcC5zZXRab29tKDEwMCAvIHRoaXMuc2NlbmVDb25maWcud2lkdGgpLnNldE9yaWdpbigwLCAwKTtcclxuICAgIC8vIGJvcmRlc1xyXG4gICAgdGhpcy5hZGQubGluZShcclxuICAgICAgMCwgMCxcclxuICAgICAgdGhpcy5taW5pbWFwLnggLSAxLCB0aGlzLm1pbmltYXAueSAtIDEsXHJcbiAgICAgIHRoaXMubWluaW1hcC54ICsgdGhpcy5taW5pbWFwLndpZHRoICsgMSwgdGhpcy5taW5pbWFwLnkgLSAxLFxyXG4gICAgICAweDAwRkYwMCxcclxuICAgICkuc2V0U2Nyb2xsRmFjdG9yKDAsIDApLnNldERlcHRoKDIwMCkuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgdGhpcy5hZGQubGluZShcclxuICAgICAgMCwgMCxcclxuICAgICAgdGhpcy5taW5pbWFwLnggLSAxLCB0aGlzLm1pbmltYXAueSAtIDEsXHJcbiAgICAgIHRoaXMubWluaW1hcC54IC0gMSwgdGhpcy5taW5pbWFwLnkgKyB0aGlzLm1pbmltYXAuaGVpZ2h0ICsgMSxcclxuICAgICAgMHgwMEZGMDAsXHJcbiAgICApLnNldFNjcm9sbEZhY3RvcigwLCAwKS5zZXREZXB0aCgyMDApLnNldE9yaWdpbigwLCAwKTtcclxuICAgIHRoaXMuYWRkLmxpbmUoXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIHRoaXMubWluaW1hcC54ICsgdGhpcy5taW5pbWFwLndpZHRoICsgMSwgdGhpcy5taW5pbWFwLnkgLSAxLFxyXG4gICAgICB0aGlzLm1pbmltYXAueCArIHRoaXMubWluaW1hcC53aWR0aCArIDEsIHRoaXMubWluaW1hcC55ICsgdGhpcy5taW5pbWFwLmhlaWdodCArIDEsXHJcbiAgICAgIDB4MDBGRjAwLFxyXG4gICAgKS5zZXRTY3JvbGxGYWN0b3IoMCwgMCkuc2V0RGVwdGgoMjAwKS5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICB0aGlzLmFkZC5saW5lKFxyXG4gICAgICAwLCAwLFxyXG4gICAgICB0aGlzLm1pbmltYXAueCAtIDEsIHRoaXMubWluaW1hcC55ICsgdGhpcy5taW5pbWFwLmhlaWdodCArIDEsXHJcbiAgICAgIHRoaXMubWluaW1hcC54ICsgdGhpcy5taW5pbWFwLndpZHRoICsgMSwgdGhpcy5taW5pbWFwLnkgKyB0aGlzLm1pbmltYXAuaGVpZ2h0ICsgMSxcclxuICAgICAgMHgwMEZGMDAsXHJcbiAgICApLnNldFNjcm9sbEZhY3RvcigwLCAwKS5zZXREZXB0aCgyMDApLnNldE9yaWdpbigwLCAwKTtcclxuICAgIC8vIGZpbiBib3JkZXNcclxuXHJcbiAgICAvLyBjYW1hcmEgbGF0ZXJhbFxyXG4gICAgdGhpcy5jYW1hcmFMYXRlcmFsID0gdGhpcy5jYW1lcmFzLmFkZCgwLCAwLCB0aGlzLnNjZW5lQ29uZmlnLndpZHRoLCAyMDAsIGZhbHNlLCAnY2FtYXJhTGF0ZXJhbCcpO1xyXG4gICAgdGhpcy5jYW1hcmFMYXRlcmFsLnNldFNpemUodGhpcy5nYW1lLmNhbnZhcy53aWR0aCwgMjAwKVxyXG4gICAgICAuc2V0UG9zaXRpb24oMCwgdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQgLSAyMDApO1xyXG5cclxuICAgIGNvbnN0IGFndWEgPSBhZ3JlZ2FyQWd1YSh0aGlzLCB0aGlzLnNjZW5lQ29uZmlnLndpZHRoLCB0aGlzLnNjZW5lQ29uZmlnLmhlaWdodCk7XHJcbiAgICB0aGlzLm1pbmltYXAuaWdub3JlKGFndWEpO1xyXG4gICAgdGhpcy5jYW1hcmFMYXRlcmFsLmlnbm9yZShhZ3VhKTtcclxuXHJcbiAgICAvLyBjb3NhcyBsb2NhcyBwYXJhIGxhIG5pZWJsYSBkZSBndWVycmFcclxuICAgIHRoaXMubmllYmxhRGVHdWVycmEgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgIDAsIDAsIHRoaXMuc2NlbmVDb25maWcud2lkdGgsIHRoaXMuc2NlbmVDb25maWcuaGVpZ2h0LCAweDAwMDAwMDAwLFxyXG4gICAgKS5zZXRPcmlnaW4oMCwgMCkuc2V0RGVwdGgoMTAwKTtcclxuICAgIHRoaXMuY2FtYXJhTGF0ZXJhbC5pZ25vcmUodGhpcy5uaWVibGFEZUd1ZXJyYSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJUZXh0dXJlID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZW5kZXJUZXh0dXJlKFxyXG4gICAgICB0aGlzLCAwLCAwLCB0aGlzLnNjZW5lQ29uZmlnLndpZHRoLCB0aGlzLnNjZW5lQ29uZmlnLmhlaWdodCxcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbmRlclRleHR1cmUuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgY29uc3QgbWFza0ltYWdlID0gdGhpcy5tYWtlLmltYWdlKHtcclxuICAgICAgeDogMCwgeTogMCwga2V5OiB0aGlzLnJlbmRlclRleHR1cmUudGV4dHVyZS5rZXksIGFkZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIG1hc2tJbWFnZS5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICB0aGlzLm5pZWJsYURlR3VlcnJhLm1hc2sgPSBuZXcgUGhhc2VyLkRpc3BsYXkuTWFza3MuQml0bWFwTWFzayh0aGlzLCBtYXNrSW1hZ2UpO1xyXG4gICAgdGhpcy5uaWVibGFEZUd1ZXJyYS5tYXNrLmludmVydEFscGhhID0gdHJ1ZTtcclxuICAgIC8vIGZpbiBjb3NhcyBsb2NhcyBwYXJhIGxhIG5pZWJsYSBkZSBndWVycmFcclxuXHJcbiAgICAvLyBsaW5lYSBwZXNjYVxyXG4gICAgdGhpcy5hZGQuZ3JhcGhpY3Moe1xyXG4gICAgICBmaWxsU3R5bGU6IHsgY29sb3I6IDB4RkYwMDAwIH0sXHJcbiAgICB9KS5maWxsUmVjdCgwLCB0aGlzLnNjZW5lQ29uZmlnLm1pbGxhTGltaXRlLCB0aGlzLnNjZW5lQ29uZmlnLndpZHRoLCAxKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XHJcbiAgICBjb25zdCBtdWVsbGUgPSBuZXcgTXVlbGxlKHRoaXMsIHRoaXMuc2NlbmVDb25maWcud2lkdGggLyAyLCB0aGlzLnNjZW5lQ29uZmlnLmhlaWdodCwgJ3B1ZXJ0bycpO1xyXG5cclxuICAgIGlmICh0aGlzLnNjZW5lQ29uZmlnLmp1Z2Fkb3Jlcy5maW5kKChqKSA9PiBqLm5pY2sgPT09IHRoaXMuanVnYWRvckxvY2FsLm5pY2spLnZlaGljdWxvc1swXS50aXBvID09PSAncGVzcXVlcm8nKSB7XHJcbiAgICAgIHRoaXMudHh0UGVzY2Fkb1RvdGFsID0gdGhpcy5hZGQudGV4dCg2MDAsIDE2LCAnVG90YWw6IDAnLCB7IGZvbnRTaXplOiAnMjhweCcsIGZpbGw6ICcjRkZGJyB9KTtcclxuICAgICAgdGhpcy50eHRQZXNjYWRvVG90YWwuc2V0U2Nyb2xsRmFjdG9yKDApO1xyXG4gICAgICB0aGlzLnR4dFBlc2NhZG9Ub3RhbC5zZXREZXB0aCgxNTApO1xyXG4gICAgICB0aGlzLm1pbmltYXAuaWdub3JlKHRoaXMudHh0UGVzY2Fkb1RvdGFsKTtcclxuICAgICAgdGhpcy5jYW1hcmFMYXRlcmFsLmlnbm9yZSh0aGlzLnR4dFBlc2NhZG9Ub3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY2VuZUNvbmZpZy5qdWdhZG9yZXMuZm9yRWFjaChcclxuICAgICAgKHApID0+IHtcclxuICAgICAgICBwLnZlaGljdWxvcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAuLi52LFxyXG4gICAgICAgICAgICAgIG5pY2s6IHAubmljayxcclxuICAgICAgICAgICAgICBqdWdhZG9yTG9jYWw6IHRoaXMuanVnYWRvckxvY2FsLFxyXG4gICAgICAgICAgICAgIHNlbmRUb1NlcnZlcjogcC5uaWNrID09PSB0aGlzLmp1Z2Fkb3JMb2NhbC5uaWNrLFxyXG4gICAgICAgICAgICAgIGNhbkJlU2VsZWN0ZWQ6IHAubmljayA9PT0gdGhpcy5qdWdhZG9yTG9jYWwubmljayxcclxuICAgICAgICAgICAgICBzZWxlY3RlZDogaSA9PT0gMCAmJiBwLm5pY2sgPT09IHRoaXMuanVnYWRvckxvY2FsLm5pY2ssXHJcbiAgICAgICAgICAgICAgbWlsbGFMaW1pdGU6IHRoaXMuc2NlbmVDb25maWcubWlsbGFMaW1pdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICh2LnRpcG8gPT09ICdwYXRydXlhJykgZGF0YS5tdWVsbGUgPSBtdWVsbGU7XHJcblxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XHJcbiAgICAgICAgICAgIGNvbnN0IHZlID0gdi50aXBvID09PSAncGVzcXVlcm8nID8gbmV3IEdPUGVzcXVlcm8odGhpcywgdiwgZGF0YSkgOiBuZXcgR09QYXRydWxsYSh0aGlzLCB2LCBkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5zdGFydEZvbGxvdyh2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHAubmljayA9PT0gdGhpcy5qdWdhZG9yTG9jYWwubmljaykge1xyXG4gICAgICAgICAgICAgIHRoaXMuanVnYWRvckxvY2FsLnZlaGljdWxvcy5wdXNoKDxhbnk+dmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oXHJcbiAgICAgIFBoYXNlci5JbnB1dC5FdmVudHMuR0FNRU9CSkVDVF9ET1dOLFxyXG4gICAgICAocG9pbnRlciwgZ2FtZU9iamVjdDogUGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGdhbWVPYmplY3QuZ2V0RGF0YSgnaWQnKTtcclxuICAgICAgICB0aGlzLnNlbGVjY2lvbmFyQmFyY28oaWQpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKFBoYXNlci5JbnB1dC5LZXlib2FyZC5FdmVudHMuQU5ZX0tFWV9ET1dOLCB0aGlzLmtleWJvYXJkSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5ldmVudHMub24oJ2NvdW50ZmlzaCcsIChjYW50aWRhZCkgPT4ge1xyXG4gICAgICB0aGlzLmp1Z2Fkb3JMb2NhbC5wZXNjYWRvcyArPSBjYW50aWRhZDtcclxuICAgICAgdGhpcy50eHRQZXNjYWRvVG90YWwuc2V0VGV4dChgVG90YWw6ICR7dGhpcy5qdWdhZG9yTG9jYWwucGVzY2Fkb3N9YCk7XHJcbiAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuUEVTQ0FfSlVHQURPUiwge1xyXG4gICAgICAgIG5pY2s6IHRoaXMuanVnYWRvckxvY2FsLm5pY2ssIHBlc2NhZG9zOiB0aGlzLmp1Z2Fkb3JMb2NhbC5wZXNjYWRvcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLmp1Z2Fkb3JMb2NhbC5wZXNjYWRvcyA+PSB0aGlzLnNjZW5lQ29uZmlnLmNhbnRQZWNlcykgeyAvLyBwYXJhbWV0cml6YXIgZXN0b1xyXG4gICAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuRklOQUxJWkFSLCB7IGdhbmFkb3I6IHRoaXMuanVnYWRvckxvY2FsLm5pY2sgfSk7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6YXIodGhpcy5qdWdhZG9yTG9jYWwubmljayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudG9ybWVudGFzID0gdGhpcy5zY2VuZUNvbmZpZy50b3JtZW50YXM7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRvdGFsU2Vjb25kcyArPSAxO1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGxldCBlbmNvbnRybyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRvcm1lbnRhRW5UaWVtcG8gPSB0cnVlO1xyXG4gICAgICB3aGlsZSAoaSA8IHRoaXMudG9ybWVudGFzLmxlbmd0aCAmJiAhZW5jb250cm8pIHtcclxuICAgICAgICBjb25zdCBmaW4gPSB0aGlzLnRvcm1lbnRhc1tpXS50b3JtZW50YUR1cmFjaW9uICsgdGhpcy50b3JtZW50YXNbaV0udG9ybWVudGFJbmljaW87XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxTZWNvbmRzID09PSB0aGlzLnRvcm1lbnRhc1tpXS50b3JtZW50YUluaWNpbykge1xyXG4gICAgICAgICAgZW5jb250cm8gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbFNlY29uZHMgPj0gZmluKSB7XHJcbiAgICAgICAgICB0aGlzLnRvcm1lbnRhRW5UaWVtcG8gPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudG9ybWVudGFzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVuY29udHJvKSB7XHJcbiAgICAgICAgdGhpcy50b3JtZW50YUFjdGl2YSA9IG5ldyBHT1Rvcm1lbnRhKHRoaXMsICd0b3JtZW50YScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoJ2luaWNpb1Rvcm1lbnRhJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50b3JtZW50YUFjdGl2YSAmJiAhdGhpcy50b3JtZW50YUVuVGllbXBvKSB7XHJcbiAgICAgICAgdGhpcy50b3JtZW50YUFjdGl2YS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50b3JtZW50YUFjdGl2YSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoJ2ZpblRvcm1lbnRhJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHNlcnZlci5hZGRoYW5kbGVyKHNlcnZlci5FVkVOVE9TLkZJTkFMSVpBUiwgdGhpcy5maW5hbGl6YXJQYXJ0aWRhSGFuZGxlcik7XHJcbiAgICBzZXJ2ZXIuYWRkaGFuZGxlcihzZXJ2ZXIuRVZFTlRPUy5QQVVTQVIsIHRoaXMucGF1c2FyRXNjZW5hKTtcclxuICAgIHNlcnZlci5hZGRoYW5kbGVyKHNlcnZlci5FVkVOVE9TLkRFU1BFUlRBUiwgdGhpcy5kZXNwZXJ0YXJTY2VuYSk7XHJcbiAgfVxyXG5cclxuICBwYXVzYXJFc2NlbmEgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNjZW5lLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNjZW5lLnJ1bignUG9wVXAnLCB7fSk7XHJcbiAgfVxyXG5cclxuICBkZXNwZXJ0YXJTY2VuYSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2NlbmUuc3RvcCgnUG9wVXAnKTtcclxuICAgIHRoaXMuc2NlbmUud2FrZSgpO1xyXG4gIH1cclxuXHJcbiAgZmluYWxpemFyUGFydGlkYUhhbmRsZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5maW5hbGl6YXIoZGF0YS5nYW5hZG9yKTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5yZW5kZXJUZXh0dXJlLmNsZWFyKCk7XHJcbiAgICBsZXQgY2FudGlkYWRWaXZvcyA9IDA7XHJcblxyXG4gICAgdGhpcy5qdWdhZG9yTG9jYWwudmVoaWN1bG9zLmZvckVhY2goXHJcbiAgICAgICh2KSA9PiB7XHJcbiAgICAgICAgLy8gc2kgbm8gc2UgZGVzdHJ1ecOzXHJcbiAgICAgICAgaWYgKHYuc2NlbmUpIHtcclxuICAgICAgICAgIGNhbnRpZGFkVml2b3MgKz0gMTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyVGV4dHVyZS5kcmF3KHYuZ2V0VmlzaW9uKCksIHYueCwgdi55KTtcclxuICAgICAgICAgIGlmICh2LmJhcmNvc0F1eGlsaWFyZXMgJiYgdi5iYXJjb3NBdXhpbGlhcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2LmJhcmNvc0F1eGlsaWFyZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAodmEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YSkgdGhpcy5yZW5kZXJUZXh0dXJlLmRyYXcodmEuZ2V0VmlzaW9uKCksIHZhLngsIHZhLnkpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIGlmICghY2FudGlkYWRWaXZvcykge1xyXG4gICAgICBzZXJ2ZXIuZW52aWFyKHNlcnZlci5FVkVOVE9TLkZJTkFMSVpBUiwgeyBnYW5hZG9yOiB0aGlzLmp1Z2Fkb3JSZW1vdG8ubmljayB9KTtcclxuICAgICAgdGhpcy5maW5hbGl6YXIodGhpcy5qdWdhZG9yUmVtb3RvLm5pY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5Ym9hcmRIYW5kbGVyID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5qdWdhZG9yTG9jYWwudmVoaWN1bG9zW2V2ZW50LmtleUNvZGUgLSA0OV0pIHtcclxuICAgICAgdGhpcy5zZWxlY2Npb25hckJhcmNvKGV2ZW50LmtleUNvZGUgLSA0OSArIDEpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRVNDKSB7XHJcbiAgICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuUEFVU0FSLCB7fSk7XHJcbiAgICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcclxuICAgICAgdGhpcy5zY2VuZS5ydW4oJ1BvcFVwJywge1xyXG4gICAgICAgIGd1YXJkYXJIYW5kbGVyOiB0aGlzLmd1YXJkYXJIYW5kbGVyLFxyXG4gICAgICAgIGNvbnRpbnVhckhhbmRsZXI6IHRoaXMuY29udGludWFySGFuZGxlcixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBndWFyZGFySGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHNlcnZlci5ndWFyZGFyUGFydGlkYSgpO1xyXG4gIH1cclxuXHJcbiAgY29udGludWFySGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2NlbmUuc3RvcCgnUG9wVXAnKTtcclxuICAgIHNlcnZlci5lbnZpYXIoc2VydmVyLkVWRU5UT1MuREVTUEVSVEFSLCB7fSk7XHJcbiAgICB0aGlzLnNjZW5lLndha2UoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjY2lvbmFyQmFyY28gPSAoaWQpID0+IHtcclxuICAgICg8R09WZWhpY3Vsb1tdPiB0aGlzLmp1Z2Fkb3JMb2NhbC52ZWhpY3Vsb3MpLmZvckVhY2goXHJcbiAgICAgICh2KSA9PiB2LnNldFNlbGVjY2lvbmFkbyh2LmdldElkKCkgPT09IGlkKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmaW5hbGl6YXIoZ2FuYWRvcikge1xyXG4gICAgLy8gdGhpcy5ldmVudHMuZGVzdHJveSgpO1xyXG4gICAgLy8gdGhpcy5yZWdpc3RyeS5kZXN0cm95KCk7XHJcbiAgICAvLyB0aGlzLmV2ZW50cy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIC8vIHRoaXMuY2FjaGUuZGVzdHJveSgpO1xyXG4gICAgLy8gdGhpcy5zY2VuZS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLnNjZW5lLnJlc3RhcnQoKTtcclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoJ1Jlc3VsdGFkbycsIHsganVnYWRvckxvY2FsTmljazogdGhpcy5qdWdhZG9yTG9jYWwubmljaywgZ2FuYWRvciB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi4vZ2FtZU9iamVjdHMvcHJvZ3Jlc3NCYXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWQgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ0xvYWQnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcobmV3IFByb2dyZXNzQmFyKHRoaXMsICgpID0+IHRoaXMuc2NlbmUuc3RhcnQoJ01haW4nKSkpO1xyXG5cclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd2F0ZXInLCAnLi9hc3NldHMvaW1hZ2VzL09jZWFuX1Nwcml0ZVNoZWV0LnBuZycsIHtcclxuICAgICAgZnJhbWVXaWR0aDogMzIsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiAzMixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9saWNpYTEnLCAnLi9hc3NldHMvaW1hZ2VzL3BvbGljaWEwMS5wbmcnLCB7XHJcbiAgICAgIGZyYW1lV2lkdGg6IDIwMixcclxuICAgICAgZnJhbWVIZWlnaHQ6IDc1LFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIHNwYWNpbmc6IDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvbGljaWEyJywgJy4vYXNzZXRzL2ltYWdlcy9wb2xpY2UwMi5wbmcnLCB7XHJcbiAgICAgIGZyYW1lV2lkdGg6IDExNixcclxuICAgICAgZnJhbWVIZWlnaHQ6IDQ4LFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIHNwYWNpbmc6IDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BhdHJ1bGxhLWF1eGlsaWFyJywgJy4vYXNzZXRzL2ltYWdlcy9wb2xpY2UwMy5wbmcnLCB7XHJcbiAgICAgIGZyYW1lV2lkdGg6IDY3LFxyXG4gICAgICBmcmFtZUhlaWdodDogMzgsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgc3BhY2luZzogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGF0cnVsbGEtaGVsaWNvcHRlcm8nLCAnLi9hc3NldHMvaW1hZ2VzL3BvbGljZTA0LnBuZycsIHtcclxuICAgICAgZnJhbWVXaWR0aDogOTUsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiA5NSxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBzcGFjaW5nOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwZXNxdWVybzEnLCAnLi9hc3NldHMvaW1hZ2VzL3Blc3F1ZXJvMDEucG5nJywge1xyXG4gICAgICBmcmFtZVdpZHRoOiAyMDgsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiA4OCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBzcGFjaW5nOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwZXNxdWVybzInLCAnLi9hc3NldHMvaW1hZ2VzL3Blc3F1ZXJvMDIucG5nJywge1xyXG4gICAgICBmcmFtZVdpZHRoOiAxNTAsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiA2NixcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBzcGFjaW5nOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3JtZW50YScsICcuL2Fzc2V0cy9pbWFnZXMvdG9ybWVudGEucG5nJywge1xyXG4gICAgICBmcmFtZVdpZHRoOiAzMDQsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiAzMjIsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgc3BhY2luZzogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9zaW9uJywgJy4vYXNzZXRzL2ltYWdlcy9leHBsb3Npb24ucG5nJywge1xyXG4gICAgICBmcmFtZVdpZHRoOiAxMDAsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiAxMDAsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgc3BhY2luZzogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZC5pbWFnZSgncG9saWNpYTAxX2F0cmFzJywgJy4vYXNzZXRzL2ltYWdlcy9wb2xpY2lhMDFfYXRyYXMucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BvbGljaWEwMV9kZXJlY2hhJywgJy4vYXNzZXRzL2ltYWdlcy9wb2xpY2lhMDFfZGVyZWNoYS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgncG9saWNpYTAxX2l6cXVpZXJkYScsICcuL2Fzc2V0cy9pbWFnZXMvcG9saWNpYTAxX2l6cXVpZXJkYS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgncG9saWNpYTAxX2ZyZW50ZScsICcuL2Fzc2V0cy9pbWFnZXMvcG9saWNpYTAxX2ZyZW50ZS5wbmcnKTtcclxuXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ21haW4nLCAnLi9hc3NldHMvaW1hZ2VzL21haW4uanBnJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3B1ZXJ0bycsICcuL2Fzc2V0cy9pbWFnZXMvcHVlcnRvLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiYWxhJywgJy4vYXNzZXRzL2ltYWdlcy9idWxsZXQ2LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiYWxhX2NhbmlvbicsICcuL2Fzc2V0cy9pbWFnZXMvYnVsbGV0OC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgndmlzaW9uJywgJy4vYXNzZXRzL2ltYWdlcy92aXNpb24ucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ21hbmluaScsICcuL2Fzc2V0cy9pbWFnZXMvbWFuaW5pLnBuZycpO1xyXG5cclxuICAgIHRoaXMubG9hZC5hdWRpbygnY2FuaW9uJywgJy4uL2Fzc2V0cy9zb25pZG9zL2Nhbmlvbi5tNGEnKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygnYW1ldHJhbGxhZG9yYScsICcuLi9hc3NldHMvc29uaWRvcy9hbWV0cmFsbGFkb3JhLm00YScpO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdoZWxpY29wdGVybycsICcuLi9hc3NldHMvc29uaWRvcy9oZWxpY29wdGVyby5tNGEnKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygnbWFuaW5pJywgJy4uL2Fzc2V0cy9zb25pZG9zL21hbmluaS5tNGEnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgYnRuTnVldmFQYXJ0aWRhOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgYnRuVW5pcnNlUGFydGlkYTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ01haW4nKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3lzLmdhbWUuY2FudmFzO1xyXG5cclxuICAgIHRoaXMuYWRkLmltYWdlKDAsIDAsICdtYWluJylcclxuICAgICAgLnNldERpc3BsYXlTaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgIC5zZXRPcmlnaW4oMCwgMCk7XHJcblxyXG4gICAgdGhpcy5idG5OdWV2YVBhcnRpZGEgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQodGhpcywgMCwgMCwgJ051ZXZhIFBhcnRpZGEnLCB7fSk7XHJcbiAgICB0aGlzLmJ0blVuaXJzZVBhcnRpZGEgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQodGhpcywgMCwgMCwgJ1VuaXJzZSBQYXJ0aWRhJywge30pO1xyXG5cclxuICAgIHRoaXMuYnRuTnVldmFQYXJ0aWRhLnNldFBvc2l0aW9uKFxyXG4gICAgICAod2lkdGggLSB0aGlzLmJ0bk51ZXZhUGFydGlkYS53aWR0aCkgLyAyLFxyXG4gICAgICAoaGVpZ2h0IC0gdGhpcy5idG5OdWV2YVBhcnRpZGEuaGVpZ2h0KSAvIDIsXHJcbiAgICApO1xyXG4gICAgdGhpcy5idG5Vbmlyc2VQYXJ0aWRhLnNldFBvc2l0aW9uKFxyXG4gICAgICAod2lkdGggLSB0aGlzLmJ0blVuaXJzZVBhcnRpZGEud2lkdGgpIC8gMixcclxuICAgICAgKGhlaWdodCAtIHRoaXMuYnRuVW5pcnNlUGFydGlkYS5oZWlnaHQpIC8gMiArIDUwLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmJ0bk51ZXZhUGFydGlkYS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5idG5Vbmlyc2VQYXJ0aWRhLnNldEludGVyYWN0aXZlKCk7XHJcblxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idG5OdWV2YVBhcnRpZGEpO1xyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idG5Vbmlyc2VQYXJ0aWRhKTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uKCdnYW1lb2JqZWN0ZG93bicsIHRoaXMuY2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSGFuZGxlciA9IChwb2ludGVyLCBnYW1lT2JqZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdCkgPT4ge1xyXG4gICAgaWYgKGdhbWVPYmplY3QgPT09IHRoaXMuYnRuTnVldmFQYXJ0aWRhKSB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ05pY2snLCB7IGNyZWFyUGFydGlkYTogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ05pY2snLCB7IGNyZWFyUGFydGlkYTogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9pbnB1dHRleHQuanMnO1xyXG5pbXBvcnQgKiBhcyBzZXJ2ZXIgZnJvbSAnLi4vc2VydmVyJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTmljayBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgZ29OaWNrOiBhbnk7XHJcblxyXG4gIGJhbmRvOiBzdHJpbmc7XHJcblxyXG4gIGJ0blBhdHJ1bGxhOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgYnRuUGVzcXVlcm86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBidG5Db250aW51YXI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBjcmVhclBhcnRpZGE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdOaWNrJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuY3JlYXJQYXJ0aWRhID0gZGF0YS5jcmVhclBhcnRpZGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN5cy5nYW1lLmNhbnZhcztcclxuXHJcbiAgICB0aGlzLmFkZC5pbWFnZSgwLCAwLCAnbWFpbicpXHJcbiAgICAgIC5zZXREaXNwbGF5U2l6ZSh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICAuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgIHRoaXMuZ29OaWNrID0gbmV3IElucHV0VGV4dCh0aGlzLCAwLCAwLCAyMDAsIDIwLCB7XHJcbiAgICAgIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICduaWNrJywgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjb2xvcjogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJ0blBhdHJ1bGxhID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KHRoaXMsIDAsIDAsICdQYXRydWxsYXMnLCB7fSk7XHJcbiAgICB0aGlzLmJ0blBlc3F1ZXJvID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KHRoaXMsIDAsIDAsICdQZXNxdWVyb3MnLCB7fSk7XHJcblxyXG4gICAgdGhpcy5idG5Db250aW51YXIgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQodGhpcywgMCwgMCwgJ0NvbnRpbnVhcicsIHt9KTtcclxuXHJcbiAgICB0aGlzLmdvTmljay5zZXRQb3NpdGlvbihcclxuICAgICAgd2lkdGggLyAyLFxyXG4gICAgICBoZWlnaHQgLyAyLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmJ0blBhdHJ1bGxhLnNldFBvc2l0aW9uKFxyXG4gICAgICAod2lkdGggLSB0aGlzLmJ0blBhdHJ1bGxhLndpZHRoIC0gMTAwKSAvIDIsXHJcbiAgICAgIChoZWlnaHQgLSB0aGlzLmJ0blBhdHJ1bGxhLmhlaWdodCkgLyAyICsgNTAsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYnRuUGVzcXVlcm8uc2V0UG9zaXRpb24oXHJcbiAgICAgICh3aWR0aCAtIHRoaXMuYnRuUGVzcXVlcm8ud2lkdGggKyAxMDApIC8gMixcclxuICAgICAgKGhlaWdodCAtIHRoaXMuYnRuUGVzcXVlcm8uaGVpZ2h0KSAvIDIgKyA1MCxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5idG5Db250aW51YXIuc2V0UG9zaXRpb24oXHJcbiAgICAgICh3aWR0aCAtIHRoaXMuYnRuQ29udGludWFyLndpZHRoKSAvIDIsXHJcbiAgICAgIChoZWlnaHQgLSB0aGlzLmJ0bkNvbnRpbnVhci5oZWlnaHQpIC8gMiArIDEwMCxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5nb05pY2suc2V0VGV4dCgncGxheWVyMicpO1xyXG4gICAgdGhpcy5idG5QYXRydWxsYS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5idG5QZXNxdWVyby5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5idG5Db250aW51YXIuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmdvTmljayk7XHJcbiAgICBpZiAodGhpcy5jcmVhclBhcnRpZGEpIHtcclxuICAgICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idG5QYXRydWxsYSk7XHJcbiAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnRuUGVzcXVlcm8pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idG5Db250aW51YXIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub24oJ2dhbWVvYmplY3Rkb3duJywgdGhpcy5jbGlja0hhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tIYW5kbGVyID0gYXN5bmMgKHBvaW50ZXIsIGdhbWVPYmplY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZ2FtZU9iamVjdCA9PT0gdGhpcy5idG5Db250aW51YXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ29OaWNrLnRleHQpIHRocm93IG5ldyBFcnJvcignRGViZSBlbGVnaXIgdW4gbm9tYnJlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXJQYXJ0aWRhICYmICF0aGlzLmJhbmRvKSB0aHJvdyBuZXcgRXJyb3IoJ0RlYmUgZWxlZ2lyIHVuIGJhbmRvJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNyZWFyUGFydGlkYSkge1xyXG4gICAgICAgICAgYXdhaXQgc2VydmVyLmNyZWFyUGFydGlkYSh0aGlzLmdvTmljay50ZXh0LCB0aGlzLmJhbmRvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXdhaXQgc2VydmVyLnVuaXJzZVBhcnRpZGEodGhpcy5nb05pY2sudGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdFc3BlcmEnLCB7IG5pY2s6IHRoaXMuZ29OaWNrLnRleHQgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZU9iamVjdCA9PT0gdGhpcy5idG5QYXRydWxsYSkge1xyXG4gICAgICAgIHRoaXMuYmFuZG8gPSAnUEFUUlVMTEEnO1xyXG4gICAgICAgIHRoaXMuYnRuUGF0cnVsbGEuc2V0QmFja2dyb3VuZENvbG9yKCcjNDg2NTI5Jyk7XHJcbiAgICAgICAgdGhpcy5idG5QZXNxdWVyby5zZXRCYWNrZ3JvdW5kQ29sb3IoJycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGdhbWVPYmplY3QgPT09IHRoaXMuYnRuUGVzcXVlcm8pIHtcclxuICAgICAgICB0aGlzLmJhbmRvID0gJ1BFU1FVRVJPJztcclxuICAgICAgICB0aGlzLmJ0blBhdHJ1bGxhLnNldEJhY2tncm91bmRDb2xvcignJyk7XHJcbiAgICAgICAgdGhpcy5idG5QZXNxdWVyby5zZXRCYWNrZ3JvdW5kQ29sb3IoJyM0ODY1MjknKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tZW5zYWplKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3BVcCBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgZ3VhcmRhcjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIGNvbnRpbnVhcjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gIGd1YXJkYXJIYW5kbGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgY29udGludWFySGFuZGxlcjogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ1BvcFVwJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuZ3VhcmRhckhhbmRsZXIgPSBkYXRhLmd1YXJkYXJIYW5kbGVyO1xyXG4gICAgdGhpcy5jb250aW51YXJIYW5kbGVyID0gZGF0YS5jb250aW51YXJIYW5kbGVyO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmdhbWUuY2FudmFzO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIodGhpcywgd2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSh0aGlzLCAwLCAwLCAyMDAsIDIwMCwgMHgwMDYwMDApXHJcbiAgICAgIC5zZXRPcmlnaW4oMC41LCAxKTtcclxuICAgIHRoaXMuZ3VhcmRhciA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dCh0aGlzLCAwLCAtMTI1LCAnR3VhcmRhciBQYXJ0aWRhJywge30pLnNldE9yaWdpbigwLjUsIDEpO1xyXG4gICAgdGhpcy5jb250aW51YXIgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQodGhpcywgMCwgLTc1LCAnY29udGludWFyJywge30pLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcoY29udGFpbmVyKTtcclxuICAgIGNvbnRhaW5lci5hZGQoYmFja2dyb3VuZCk7XHJcbiAgICBjb250YWluZXIuYWRkKHRoaXMuZ3VhcmRhcik7XHJcbiAgICBjb250YWluZXIuYWRkKHRoaXMuY29udGludWFyKTtcclxuXHJcbiAgICB0aGlzLmd1YXJkYXIuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgIHRoaXMuY29udGludWFyLnNldEludGVyYWN0aXZlKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbihcclxuICAgICAgUGhhc2VyLklucHV0LkV2ZW50cy5HQU1FT0JKRUNUX0RPV04sXHJcbiAgICAgIChwb2ludGVyLCBnYW1lT2JqZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0ID09PSB0aGlzLmd1YXJkYXIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmd1YXJkYXJIYW5kbGVyKSB0aGlzLmd1YXJkYXJIYW5kbGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRpbnVhckhhbmRsZXIpIHRoaXMuY29udGludWFySGFuZGxlcigpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCAqIGFzIHNlcnZlciBmcm9tICcuLi9zZXJ2ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRhZG8gZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGp1Z2Fkb3JMb2NhbE5pY2s6IFN0cmluZztcclxuXHJcbiAgZ2FuYWRvcjogU3RyaW5nO1xyXG5cclxuICBjb250aW51YXI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdSZXN1bHRhZG8nKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5qdWdhZG9yTG9jYWxOaWNrID0gZGF0YS5qdWdhZG9yTG9jYWxOaWNrO1xyXG4gICAgdGhpcy5nYW5hZG9yID0gZGF0YS5nYW5hZG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS5jYW52YXMud2lkdGggLyAyLCB0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuanVnYWRvckxvY2FsTmljayA9PT0gdGhpcy5nYW5hZG9yID8gJ0hhcyBHYW5hZG8hISEhJyA6ICdTb3MgdW4gcGVyZGVkb3InKTtcclxuICAgIHRoaXMuY29udGludWFyID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQgLyAyICsgNTAsICdDb250aW51YXInKTtcclxuICAgIHRoaXMuY29udGludWFyLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0ZXh0LnNldENvbG9yKCdyZWQnKTtcclxuICAgIHRoaXMuY29udGludWFyLnNldENvbG9yKCdibHVlJyk7XHJcbiAgICB0aGlzLmlucHV0Lm9uKCdnYW1lb2JqZWN0ZG93bicsIHRoaXMuY2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGNsaWNrSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNlcnZlci5yZW1vdmVyTGlzdGVuZXJzKCk7XHJcbiAgICAgIHNlcnZlci5kZXNjb25lY3RhcldzKCk7XHJcbiAgICAgIGF3YWl0IHNlcnZlci5maW5hbGl6YXJQYXJ0aWRhKCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgRVZFTlRPUyA9IHtcclxuICBNT1ZFUl9CQVJDTzogJ21iJyxcclxuICBESVNQQVJPOiAnZCcsXHJcbiAgRklOQUxJWkFSOiAnZicsXHJcbiAgSU5JQ0lBUl9QQVJUSURBOiAnaW5pY2lhclBhcnRpZGEnLFxyXG4gIFBBVVNBUjogJ3AnLFxyXG4gIERFU1BFUlRBUjogJ2RlcycsXHJcbiAgUEVTQ0FfSlVHQURPUjogJ3BqJyxcclxuICBQRVNDQV9CQVJDTzogJ3BiJyxcclxuICBDT01CVVNUSUJMRTogJ2MnLFxyXG59O1xyXG5cclxubGV0IHdzOiBXZWJTb2NrZXQgPSBudWxsO1xyXG5sZXQgZXZlbnRvcztcclxubGV0IGF1dG9SZWNvbmVjdGFyID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGluaWNpYWxpemFyTGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGV2ZW50b3MgPSBPYmplY3QudmFsdWVzKEVWRU5UT1MpLnJlZHVjZShcclxuICAgIChwOiBhbnksIGM6IGFueSkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgIHBbY10gPSBuZXcgU2V0KCk7XHJcbiAgICAgIHJldHVybiBwO1xyXG4gICAgfSxcclxuICAgIHt9LFxyXG4gICk7XHJcbn07XHJcblxyXG5pbmljaWFsaXphckxpc3RlbmVycygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGhhbmRsZXIgPSAoZXZlbnQsIGhhbmRsZXIpID0+IHsgZXZlbnRvc1tldmVudF0uYWRkKGhhbmRsZXIpOyB9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0V2ViU29ja2V0KCkge1xyXG4gIGF1dG9SZWNvbmVjdGFyID0gdHJ1ZTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHdzID0gbmV3IFdlYlNvY2tldChjb25maWcuZW5kcG9pbnQud3MoKSk7XHJcbiAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJyk7XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH07XHJcbiAgICB3cy5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobXNnLmRhdGEpO1xyXG4gICAgICAgIGV2ZW50b3NbZGF0YS5ldmVudG9dLmZvckVhY2goKGgpID0+IGgoZGF0YSkpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnLCBlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQhJyk7XHJcbiAgICAgIGlmIChhdXRvUmVjb25lY3Rhcikge1xyXG4gICAgICAgIHJlc29sdmUoc3RhcnRXZWJTb2NrZXQoKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNjb25lY3RhcldzID0gKCkgPT4ge1xyXG4gIGF1dG9SZWNvbmVjdGFyID0gZmFsc2U7XHJcbiAgd3MuY2xvc2UoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpYXIgPSAoZXZlbnRvLCBkYXRhKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBldmVudG8sIC4uLmRhdGEgfSkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCd3cyBlcnJvciAoc2kgbm8gcXVlcmVzIHF1ZSB0ZSBqb2RhIMOpc3RlIG1lbnNhamUgeSBubyBxdWVyZXMgJ1xyXG4gICAgKyAnY29uZWN0YXJsbyBjb24gZWwgc2VydmVyLCBjb21lbnTDoSBlbCBzZW5kIGRlIGFycmliYSk6ICcsIGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBndWFyZGFyUGFydGlkYSA9ICgpID0+IGF4aW9zKGNvbmZpZy5lbmRwb2ludC5ndWFyZGFyUGFydGlkYSgpKTtcclxuZXhwb3J0IGNvbnN0IGNyZWFyUGFydGlkYSA9IChuaWNrLCBiYW5kbykgPT4gYXhpb3MoY29uZmlnLmVuZHBvaW50LmNyZWFyUGFydGlkYShuaWNrLCBiYW5kbykpO1xyXG5leHBvcnQgY29uc3QgdW5pcnNlUGFydGlkYSA9IChuaWNrKSA9PiBheGlvcyhjb25maWcuZW5kcG9pbnQudW5pcnNlUGFydGlkYShuaWNrKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQYXJ0aWRhID0gKCkgPT4gYXhpb3MoY29uZmlnLmVuZHBvaW50LmdldFBhcnRpZGEoKSk7XHJcbmV4cG9ydCBjb25zdCBmaW5hbGl6YXJQYXJ0aWRhID0gKCkgPT4gYXhpb3MoY29uZmlnLmVuZHBvaW50LmZpbmFsaXphclBhcnRpZGEoKSk7XHJcbmV4cG9ydCBjb25zdCByZW1vdmVyTGlzdGVuZXJzID0gaW5pY2lhbGl6YXJMaXN0ZW5lcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=