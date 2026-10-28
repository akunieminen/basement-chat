'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var push_min$1 = {exports: {}};

/**
 * @license
 *
 * Push v1.0.9
 * =========
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var push_min = push_min$1.exports;

var hasRequiredPush_min;

function requirePush_min () {
	if (hasRequiredPush_min) return push_min$1.exports;
	hasRequiredPush_min = 1;
	(function (module, exports) {
		!function(i,t){module.exports=t();}(push_min,function(){var i={errors:{invalid_plugin:"".concat("PushError:"," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat("PushError:"," title of notification must be a string"),permission_denied:"".concat("PushError:"," permission request declined"),sw_notification_error:"".concat("PushError:"," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat("PushError:"," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat("PushError:"," unable to create notification: unknown interface")}};function t(i){return (t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function n(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function e(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||false,e.configurable=true,"value"in e&&(e.writable=true),Object.defineProperty(i,e.key,e);}}function o(i,t,n){return t&&e(i.prototype,t),n&&e(i,n),i}function r(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:true,configurable:true}}),t&&c(i,t);}function s(i){return (s=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function c(i,t){return (c=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i})(i,t)}function a(i,t){return !t||"object"!=typeof t&&"function"!=typeof t?function(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(i):t}var u=function(){function i(t){n(this,i),this._win=t,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED];}return o(i,[{key:"request",value:function(i,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(i,t){var n,e=this,o=this.get(),r=false,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._win.Notification.permission;r||(r=true,void 0===n&&e._win.webkitNotifications&&(n=e._win.webkitNotifications.checkPermission()),n===e.GRANTED||0===n?i&&i():t&&t());};o!==this.DEFAULT?s(o):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(s):this._win.Notification&&this._win.Notification.requestPermission?(n=this._win.Notification.requestPermission(s))&&n.then&&n.then(s).catch(function(){t&&t();}):i&&i();}},{key:"_requestAsPromise",value:function(){var i=this,t=this.get(),n=t!==this.DEFAULT,e=this._win.Notification&&this._win.Notification.requestPermission,o=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(r,s){var c,a=false,u=function(t){a||(a=true,!function(t){return t===i.GRANTED||0===t}(t)?s():r());};n?u(t):o?i._win.webkitNotifications.requestPermission(function(i){u(i);}):e?(c=i._win.Notification.requestPermission(u))&&c.then&&c.then(u).catch(s):r();})}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),i}(),f=function(){function i(){n(this,i);}return o(i,null,[{key:"isUndefined",value:function(i){return void 0===i}},{key:"isNull",value:function(i){return null===obj}},{key:"isString",value:function(i){return "string"==typeof i}},{key:"isFunction",value:function(i){return i&&"[object Function]"==={}.toString.call(i)}},{key:"isObject",value:function(i){return "object"===t(i)}},{key:"objectMerge",value:function(i,t){for(var n in t)i.hasOwnProperty(n)&&this.isObject(i[n])&&this.isObject(t[n])?this.objectMerge(i[n],t[n]):i[n]=t[n];}}]),i}(),l=function i(t){n(this,i),this._win=t;},h=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(i,t){return new this._win.Notification(i,{icon:f.isString(t.icon)||f.isUndefined(t.icon)||f.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(i){i.close();}}]),t}(),_=function(t){function e(){return n(this,e),a(this,s(e).apply(this,arguments))}return r(e,l),o(e,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(i){var t=i.toString().match(/function[^{]+{([\s\S]*)}$/);return null!=t&&t.length>1?t[1]:null}},{key:"create",value:function(t,n,e,o,r){var s=this;this._win.navigator.serviceWorker.register(o),this._win.navigator.serviceWorker.ready.then(function(o){var c={id:t,link:e.link,origin:document.location.href,onClick:f.isFunction(e.onClick)?s.getFunctionBody(e.onClick):"",onClose:f.isFunction(e.onClose)?s.getFunctionBody(e.onClose):""};void 0!==e.data&&null!==e.data&&(c=Object.assign(c,e.data)),o.showNotification(n,{icon:e.icon,body:e.body,vibrate:e.vibrate,tag:e.tag,data:c,requireInteraction:e.requireInteraction,silent:e.silent}).then(function(){o.getNotifications().then(function(i){o.active.postMessage(""),r(i);});}).catch(function(t){throw new Error(i.errors.sw_notification_error+t.message)});}).catch(function(t){throw new Error(i.errors.sw_registration_error+t.message)});}},{key:"close",value:function(){}}]),e}(),v=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(i,t){var n=this._win.navigator.mozNotification.createNotification(i,t.body,t.icon);return n.show(),n}}]),t}(),d=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(i,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(f.isString(t.icon)||f.isUndefined(t.icon)?t.icon:t.icon.x16,i),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay();}}]),t}(),w=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(i,t){var n=this._win.webkitNotifications.createNotification(t.icon,i,t.body);return n.show(),n}},{key:"close",value:function(i){i.cancel();}}]),t}();return new(function(){function t(i){n(this,t),this._currentId=0,this._notifications={},this._win=i,this.Permission=new u(i),this._agents={desktop:new h(i),chrome:new _(i),firefox:new v(i),ms:new d(i),webkit:new w(i)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(i){}};}return o(t,[{key:"_closeNotification",value:function(t){var n=true,e=this._notifications[t];if(void 0!==e){if(n=this._removeNotification(t),this._agents.desktop.isSupported())this._agents.desktop.close(e);else if(this._agents.webkit.isSupported())this._agents.webkit.close(e);else {if(!this._agents.ms.isSupported())throw n=false,new Error(i.errors.unknown_interface);this._agents.ms.close();}return n}return  false}},{key:"_addNotification",value:function(i){var t=this._currentId;return this._notifications[t]=i,this._currentId++,t}},{key:"_removeNotification",value:function(i){var t=false;return this._notifications.hasOwnProperty(i)&&(delete this._notifications[i],t=true),t}},{key:"_prepareNotification",value:function(i,t){var n,e=this;return n={get:function(){return e._notifications[i]},close:function(){e._closeNotification(i);}},t.timeout&&setTimeout(function(){n.close();},t.timeout),n}},{key:"_serviceWorkerCallback",value:function(i,t,n){var e=this,o=this._addNotification(i[i.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",function(i){var t=JSON.parse(i.data);"close"===t.action&&Number.isInteger(t.id)&&e._removeNotification(t.id);}),n(this._prepareNotification(o,t))),n(null);}},{key:"_createCallback",value:function(i,t,n){var e,o=this,r=null;if(t=t||{},e=function(i){o._removeNotification(i),f.isFunction(t.onClose)&&t.onClose.call(o,r);},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(i,t);}catch(e){var s=this._currentId,c=this.config().serviceWorker;this._agents.chrome.isSupported()&&this._agents.chrome.create(s,i,t,c,function(i){return o._serviceWorkerCallback(i,t,n)});}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(i,t):this._agents.firefox.isSupported()?this._agents.firefox.create(i,t):this._agents.ms.isSupported()?r=this._agents.ms.create(i,t):(t.title=i,this.config().fallback(t));if(null!==r){var a=this._addNotification(r),u=this._prepareNotification(a,t);f.isFunction(t.onShow)&&r.addEventListener("show",t.onShow),f.isFunction(t.onError)&&r.addEventListener("error",t.onError),f.isFunction(t.onClick)&&r.addEventListener("click",t.onClick),r.addEventListener("close",function(){e(a);}),r.addEventListener("cancel",function(){e(a);}),n(u);}n(null);}},{key:"create",value:function(t,n){var e,o=this;if(!f.isString(t))throw new Error(i.errors.invalid_title);return e=this.Permission.has()?function(i,e){try{o._createCallback(t,n,i);}catch(i){e(i);}}:function(e,r){o.Permission.request().then(function(){o._createCallback(t,n,e);}).catch(function(){r(i.errors.permission_denied);});},new Promise(e)}},{key:"count",value:function(){var i,t=0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&t++;return t}},{key:"close",value:function(i){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===i)return this._closeNotification(t)}},{key:"clear",value:function(){var i,t=true;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&(t=t&&this._closeNotification(i));return t}},{key:"supported",value:function(){var i=false;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(i=i||this._agents[t].isSupported());return i}},{key:"config",value:function(i){return (void 0!==i||null!==i&&f.isObject(i))&&f.objectMerge(this._configuration,i),this._configuration}},{key:"extend",value:function(t){var n,e={}.hasOwnProperty;if(!e.call(t,"plugin"))throw new Error(i.errors.invalid_plugin);for(var o in e.call(t,"config")&&f.isObject(t.config)&&null!==t.config&&this.config(t.config),n=new(t.plugin)(this.config()))e.call(n,o)&&f.isFunction(n[o])&&(this[o]=n[o]);}}]),t}())("undefined"!=typeof window?window:commonjsGlobal)});
		
	} (push_min$1));
	return push_min$1.exports;
}

var push_minExports = requirePush_min();
var Push = /*@__PURE__*/getDefaultExportFromCjs(push_minExports);

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles$1(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles$1,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement$1(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow$1(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow$1,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles$1(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles$1,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement$1(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip$1(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement$1(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip$1,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide$1(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide$1
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset$1
};

function popperOffsets$1(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets$1,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow$1(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow$1,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets, computeStyles, applyStyles, offset, flip, preventOverflow, arrow, hide];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
  return document.body;
};

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */

function actualContains(parent, child) {
  var target = child;

  while (target) {
    var _target$getRootNode;

    if (parent.contains(target)) {
      return true;
    }

    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }

  return false;
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? // @ts-ignore
!!window.msCrypto : false;

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message

var visitedMessages;

if (process.env.NODE_ENV !== "production") {
  resetVisitedMessages();
}

function resetVisitedMessages() {
  visitedMessages = new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== "production") {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      var _name;

      acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    if (process.env.NODE_ENV !== "production") {
      errorWhen(true, 'render() function has not been supplied.');
    }

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }

    popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    }

    var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

    if (instance.props.interactive && actualContains(popper, actualTarget)) {
      return;
    } // Clicked on the event listeners target


    if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    instance.state.isMounted = true;
    createPopperInstance();
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== "production") {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
    }
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
    }

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
    }

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== "production") {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== "production") {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

Object.assign({}, applyStyles, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

var BUBBLING_EVENTS_MAP = {
  mouseover: 'mouseenter',
  focusin: 'focus',
  click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */

function delegate(targets, props) {
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== "production") {
    errorWhen(!(props && props.target), ['You must specity a `target` prop indicating a CSS selector string matching', 'the target elements that should receive a tippy.'].join(' '));
  }

  var listeners = [];
  var childTippyInstances = [];
  var disabled = false;
  var target = props.target;
  var nativeProps = removeProperties(props, ['target']);
  var parentProps = Object.assign({}, nativeProps, {
    trigger: 'manual',
    touch: false
  });
  var childProps = Object.assign({
    touch: defaultProps.touch
  }, nativeProps, {
    showOnCreate: true
  });
  var returnValue = tippy(targets, parentProps);
  var normalizedReturnValue = normalizeToArray(returnValue);

  function onTrigger(event) {
    if (!event.target || disabled) {
      return;
    }

    var targetNode = event.target.closest(target);

    if (!targetNode) {
      return;
    } // Get relevant trigger with fallbacks:
    // 1. Check `data-tippy-trigger` attribute on target node
    // 2. Fallback to `trigger` passed to `delegate()`
    // 3. Fallback to `defaultProps.trigger`


    var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore

    if (targetNode._tippy) {
      return;
    }

    if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
      return;
    }

    if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
      return;
    }

    var instance = tippy(targetNode, childProps);

    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }

  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(eventType, handler, options);
    listeners.push({
      node: node,
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
    on(reference, 'mouseover', onTrigger);
    on(reference, 'focusin', onTrigger);
    on(reference, 'click', onTrigger);
  }

  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function applyMutations(instance) {
    var originalDestroy = instance.destroy;
    var originalEnable = instance.enable;
    var originalDisable = instance.disable;

    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }

      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance) {
          instance.destroy();
        });
      }

      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };

    instance.enable = function () {
      originalEnable();
      childTippyInstances.forEach(function (instance) {
        return instance.enable();
      });
      disabled = false;
    };

    instance.disable = function () {
      originalDisable();
      childTippyInstances.forEach(function (instance) {
        return instance.disable();
      });
      disabled = true;
    };

    addEventListeners(instance);
  }

  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}

tippy.setDefaultProps({
  render: render
});

var NotificationStatus$1;
(function (NotificationStatus) {
    NotificationStatus["Allowed"] = "ALLOWED";
    NotificationStatus["Muted"] = "MUTED";
})(NotificationStatus$1 || (NotificationStatus$1 = {}));
var NotificationStatus = NotificationStatus$1;

var chatBoxComponent = () => ({
    isMinimized: true,
    isExpanded: false,
    isLauncherShown: true,
    isContactOpened: true,
    isMessageBoxOpened: false,
    isNotificationAllowed: window.localStorage.getItem("basement.notification") ===
        NotificationStatus.Allowed,
    hasNotificationPermission: Push.Permission.has(),
    online: true,
    totalUnreadMessages: 0,
    /**
     * Hook during the initialization phase of the current Alpine component.
     */
    init() {
        window.addEventListener("online", () => {
            this.online = true;
        });
        window.addEventListener("offline", () => {
            this.online = false;
        });
        // Opening, the launcher fades out while the window grows over it (the corner is never empty). Minimizing, the box
        // keeps its open size until the window has shrunk back into the launcher (its 200 ms leave), so the window has room
        // to leave the way it came; the launcher starts fading in at 80 ms (visible about two frames later), while the
        // window is still fading, so the corner never sits empty.
        this.$watch("isMinimized", (minimized) => {
            if (!minimized) {
                this.isExpanded = true;
                this.isLauncherShown = false;
                return;
            }
            setTimeout(() => {
                if (this.isMinimized)
                    this.isLauncherShown = true;
            }, 80);
            setTimeout(() => {
                if (this.isMinimized)
                    this.isExpanded = false;
            }, 200);
        });
        this.$watch("isNotificationAllowed", this.watchNotificationStatus.bind(this));
        this.$el.addEventListener("send-push-notification", this.sendPushNotification.bind(this));
        this.registerTippy();
    },
    /**
     * Request push notification permission to the browser.
     */
    requestNotificationPermission() {
        Push.Permission.request(() => {
            this.isNotificationAllowed = true;
            this.hasNotificationPermission = true;
        }, () => {
            this.hasNotificationPermission = false;
        });
    },
    /**
     * Send push notification permission to the browser if allowed.
     */
    sendPushNotification(event) {
        if (this.isNotificationAllowed === false) {
            return;
        }
        void Push.create(event.detail.title, {
            body: event.detail.body,
            icon: event.detail.icon,
            timeout: 4000,
            onClick() {
                window.focus();
                this.close();
            },
        });
    },
    /**
     * Register tippy.js instance creation for child elements.
     */
    registerTippy() {
        delegate(this.$el, {
            animation: "fade",
            delay: [200, 0],
            duration: [150, 100],
            arrow: true,
            target: ".basement [data-title]",
            onShow(instance) {
                const title = instance.reference.getAttribute("data-title");
                if (title !== null) {
                    instance.setContent(title);
                }
            },
        });
        // A view change takes the tooltip's anchor away at once (the launcher, the minimized card, the swapped header): its
        // tooltip goes with it instead of fading out over nothing. unmount, not hideAll: the click's mousedown has already
        // started the clicked button's fade, which hideAll skips.
        for (const view of [
            "isMinimized",
            "isContactOpened",
            "isMessageBoxOpened",
        ]) {
            this.$watch(view, () => {
                this.$el
                    .querySelectorAll("[data-title]")
                    .forEach((el) => el._tippy?.unmount());
            });
        }
    },
    /**
     * Watch when the notification status changes.
     */
    watchNotificationStatus(newValue) {
        const status = newValue === true ? NotificationStatus.Allowed : NotificationStatus.Muted;
        window.localStorage.setItem("basement.notification", status);
    },
});

var MessageType$1;
(function (MessageType) {
    MessageType["Document"] = "DOCUMENT";
    MessageType["Text"] = "TEXT";
})(MessageType$1 || (MessageType$1 = {}));
var MessageType = MessageType$1;

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */


/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return constructFrom(argument, argument);
}

/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in `add` method on all its classes:
 *
 * - [`Temporal.Instant.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add)
 * - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
 * - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
 * - [`Temporal.PlainTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add)
 * - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
 * - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 *
 * @example
 * // Using Temporal:
 * // Add 10 days to 1 September 2014:
 * Temporal.PlainDate.from("2014-09-01").add({ days: 10 }).toString();
 * //=> "2014-09-11"
 */
function addDays(date, amount, options) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);

  _date.setDate(_date.getDate() + amount);
  return _date;
}

function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}

/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = toDate(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return constructFrom(date, Date.now());
}

/**
 * The {@link isSameDay} function options.
 */

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}

/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 * @deprecated
 *
 * [TODO] Remove in v4
 */

/**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 */

/**
 * The locale options.
 */

/**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */

/**
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   locale: 'ko-KR',
 * })
 * //=> 2019. 10. 4.
 */

/**
 * @param date - The date to format
 * @param formatOptions - The format options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   year: 'numeric',
 *   month: 'numeric',
 *   day: 'numeric',
 *   hour: 'numeric',
 * })
 * //=> 10/4/2019, 12 PM
 */

/**
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 */

function intlFormat(date, formatOrLocale, localeOptions) {
  let formatOptions;

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }

  return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format(
    toDate(date),
  );
}

function isFormatOptions(opts) {
  return opts !== undefined && !("locale" in opts);
}

/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return isSameDay(
    constructFrom(date, date),
    constructNow(date),
  );
}

/**
 * The {@link subDays} function options.
 */

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount, options) {
  return addDays(date, -1);
}

/**
 * The {@link isYesterday} function options.
 */

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date, options) {
  return isSameDay(
    constructFrom(date, date),
    subDays(constructNow(date)),
  );
}

class DateFormatter {
    date;
    /**
     * @example December 31, 2022
     */
    dateFormat = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    /**
     * @example 12/31/22
     */
    shortDateFormat = {
        day: "numeric",
        month: "numeric",
        year: "2-digit",
    };
    /**
     * @example 12:15 PM
     */
    timeFormat = {
        hour: "numeric",
        hour12: false,
        minute: "numeric",
    };
    /**
     * @example December 31, 2022 at 12:15 PM
     */
    dateTimeFormat = {
        ...this.dateFormat,
        ...this.timeFormat,
    };
    /**
     * @example Saturday, December 31, 2022 at 12:15 PM
     */
    dayDateTimeFormat = {
        weekday: "long",
        ...this.dateFormat,
        ...this.timeFormat,
    };
    constructor(date) {
        this.date = date;
    }
    get withinDifferenceDateFormat() {
        if (this.date === null) {
            return "";
        }
        if (isToday(this.date) === true) {
            return intlFormat(this.date, this.timeFormat);
        }
        if (isYesterday(this.date) === true) {
            return "Eilen";
        }
        return intlFormat(this.date, this.shortDateFormat);
    }
    get withinDateFormat() {
        return this.date === null ? "" : intlFormat(this.date, this.dateFormat);
    }
    get withinTimeFormat() {
        return this.date === null ? "" : intlFormat(this.date, this.timeFormat);
    }
    get withinDateTimeFormat() {
        return this.date === null ? "" : intlFormat(this.date, this.dateTimeFormat);
    }
    get withinDayDateTimeFormat() {
        return this.date === null
            ? ""
            : intlFormat(this.date, this.dayDateTimeFormat);
    }
}

class PrivateMessageData {
    id;
    receiverId;
    senderId;
    type;
    value;
    createdAt;
    readAt;
    constructor(id, receiverId, senderId, type, value, createdAt, readAt) {
        this.id = id;
        this.receiverId = receiverId;
        this.senderId = senderId;
        this.type = type;
        this.value = value;
        this.createdAt = createdAt;
        this.readAt = readAt;
    }
    setReadAtTime(time) {
        this.readAt = new DateFormatter(new Date(time));
    }
    static from(message) {
        return new this(message.id, message.receiver_id, message.sender_id, MessageType[{
            DOCUMENT: "Document",
            TEXT: "Text",
        }[message.type]], message.value, new DateFormatter(new Date(message.created_at)), new DateFormatter(message.read_at !== null ? new Date(message.read_at) : null));
    }
}

class ContactData {
    id;
    name;
    avatar;
    unreadMessages;
    lastPrivateMessage;
    isOnline;
    typing;
    constructor(id, name, avatar, unreadMessages, lastPrivateMessage, isOnline = false, typing = false) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.unreadMessages = unreadMessages;
        this.lastPrivateMessage = lastPrivateMessage;
        this.isOnline = isOnline;
        this.typing = typing;
    }
    static from(contact) {
        return new this(contact.id, contact.name, contact.avatar, contact.unread_messages, contact.last_private_message !== null
            ? PrivateMessageData.from(contact.last_private_message)
            : null);
    }
}

var contactComponent = () => {
    const container = document.querySelector(".basement-contacts");
    const url = container.getAttribute("data-url");
    return {
        contacts: [],
        search: "",
        unreadMessages: 0,
        url,
        /**
         * Hook during the initialization phase of the current Alpine component.
         */
        init() {
            this.$watch("contacts", this.watchContacts.bind(this));
            this.$refs.basementChatBox.addEventListener("update-last-private-message-received", this.updateLastPrivateMessageReceived.bind(this));
            this.$refs.basementChatBox.addEventListener("update-last-private-message-sent", this.updateLastPrivateMessageSent.bind(this));
            this.$refs.basementChatBox.addEventListener("update-currently-typing-contact", this.updateCurrentlyTypingContact.bind(this));
            this.$refs.basementChatBox.addEventListener("update-unread-messages", this.updateUnreadMessages.bind(this));
        },
        /**
         * Load initial component data.
         */
        async mount() {
            const response = await window.axios
                .get(this.url)
                .then(({ data }) => data);
            this.contacts = response.data.map((contact) => ContactData.from(contact));
            this.registerEchoEventListeners();
        },
        /**
         * Get contacts filtered by search keywords.
         */
        get filteredContacts() {
            if (this.search === "") {
                return this.contacts;
            }
            return this.contacts.filter(({ name }) => name.toLowerCase().includes(this.search.toLowerCase()));
        },
        /**
         * Find the same contact with the given id in the current component.
         */
        findSameContact(searchId) {
            const sameContactIndex = this.contacts.findIndex(({ id }) => id === searchId);
            if (sameContactIndex === -1) {
                return { index: null, contact: null };
            }
            return {
                index: sameContactIndex,
                contact: this.contacts.at(sameContactIndex),
            };
        },
        /**
         * Laravel Echo event listener to see other contacts that are on the current channel.
         */
        onHere(contacts) {
            contacts.forEach((contact) => {
                const sameContact = this.findSameContact(contact.id).contact;
                if (sameContact !== null) {
                    sameContact.isOnline = true;
                }
            });
        },
        /**
         * Laravel Echo event listener when someone joins the channel.
         */
        onSomeoneJoining(contact) {
            const sameContact = this.findSameContact(contact.id).contact;
            if (sameContact !== null) {
                sameContact.isOnline = true;
            }
            else {
                const newContact = ContactData.from(contact);
                newContact.isOnline = true;
                this.contacts.push(newContact);
            }
        },
        /**
         * Laravel Echo event listener when someone leaves the channel.
         */
        onSomeoneLeaving(contact) {
            const sameContact = this.findSameContact(contact.id).contact;
            if (sameContact !== null) {
                sameContact.isOnline = false;
            }
        },
        /**
         * Register Laravel Echo event listeners.
         */
        registerEchoEventListeners() {
            window.Echo.join("basement.contacts")
                .here(this.onHere.bind(this))
                .joining(this.onSomeoneJoining.bind(this))
                .leaving(this.onSomeoneLeaving.bind(this));
        },
        /**
         * HTML DOM event listener to update the last private message in the current component when
         * the message has been received.
         */
        updateLastPrivateMessageReceived(event) {
            const sameContactIndex = this.findSameContact(event.detail.senderId).index;
            if (sameContactIndex === null) {
                return;
            }
            const sameContact = this.contacts
                .splice(sameContactIndex, 1)
                .at(0);
            sameContact.lastPrivateMessage = event.detail;
            if (sameContact.id !== event.detail.receiverId) {
                sameContact.unreadMessages += 1;
            }
            this.contacts.unshift(sameContact);
        },
        /**
         * HTML DOM event listener to update the last private message in the current component when
         * the message has been sent.
         */
        updateLastPrivateMessageSent(event) {
            const sameContactIndex = this.findSameContact(event.detail.receiverId).index;
            if (sameContactIndex === null) {
                return;
            }
            const sameContact = this.contacts
                .splice(sameContactIndex, 1)
                .at(0);
            sameContact.lastPrivateMessage = event.detail;
            this.contacts.unshift(sameContact);
        },
        /**
         * Trigger update receiver event to the chat box component.
         */
        updateReceiver(contact) {
            this.$dispatch("update-receiver", contact);
        },
        /**
         * HTML DOM event listener to update the typing status of the given contact.
         */
        updateCurrentlyTypingContact(event) {
            const sameContact = this.findSameContact(event.detail.contact.id).contact;
            if (sameContact === null) {
                return;
            }
            sameContact.typing = event.detail.contact.typing;
        },
        /**
         * HTML DOM event listener to update the unread messages count.
         */
        updateUnreadMessages(event) {
            event.detail.messages.forEach(({ sender_id, total }) => {
                const sameContact = this.findSameContact(Number(sender_id)).contact;
                if (sameContact === null) {
                    return;
                }
                sameContact.unreadMessages -= total;
            });
        },
        /**
         * Watch when the contacts changes.
         */
        watchContacts(newValue) {
            this.unreadMessages = newValue.reduce((total, contact) => total + contact.unreadMessages, 0);
        },
    };
};

var mark$1 = {exports: {}};

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
var mark = mark$1.exports;

var hasRequiredMark;

function requireMark () {
	if (hasRequiredMark) return mark$1.exports;
	hasRequiredMark = 1;
	(function (module, exports) {
		(function (global, factory) {
			module.exports = factory() ;
		}(mark, (function () {
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		  return typeof obj;
		} : function (obj) {
		  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		};











		var classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		var createClass = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      Object.defineProperty(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();







		var _extends = Object.assign || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

		var DOMIterator = function () {
		  function DOMIterator(ctx) {
		    var iframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
		    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
		    var iframesTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
		    classCallCheck(this, DOMIterator);

		    this.ctx = ctx;
		    this.iframes = iframes;
		    this.exclude = exclude;
		    this.iframesTimeout = iframesTimeout;
		  }

		  createClass(DOMIterator, [{
		    key: 'getContexts',
		    value: function getContexts() {
		      var ctx = void 0,
		          filteredCtx = [];
		      if (typeof this.ctx === 'undefined' || !this.ctx) {
		        ctx = [];
		      } else if (NodeList.prototype.isPrototypeOf(this.ctx)) {
		        ctx = Array.prototype.slice.call(this.ctx);
		      } else if (Array.isArray(this.ctx)) {
		        ctx = this.ctx;
		      } else if (typeof this.ctx === 'string') {
		        ctx = Array.prototype.slice.call(document.querySelectorAll(this.ctx));
		      } else {
		        ctx = [this.ctx];
		      }
		      ctx.forEach(function (ctx) {
		        var isDescendant = filteredCtx.filter(function (contexts) {
		          return contexts.contains(ctx);
		        }).length > 0;
		        if (filteredCtx.indexOf(ctx) === -1 && !isDescendant) {
		          filteredCtx.push(ctx);
		        }
		      });
		      return filteredCtx;
		    }
		  }, {
		    key: 'getIframeContents',
		    value: function getIframeContents(ifr, successFn) {
		      var errorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

		      var doc = void 0;
		      try {
		        var ifrWin = ifr.contentWindow;
		        doc = ifrWin.document;
		        if (!ifrWin || !doc) {
		          throw new Error('iframe inaccessible');
		        }
		      } catch (e) {
		        errorFn();
		      }
		      if (doc) {
		        successFn(doc);
		      }
		    }
		  }, {
		    key: 'isIframeBlank',
		    value: function isIframeBlank(ifr) {
		      var bl = 'about:blank',
		          src = ifr.getAttribute('src').trim(),
		          href = ifr.contentWindow.location.href;
		      return href === bl && src !== bl && src;
		    }
		  }, {
		    key: 'observeIframeLoad',
		    value: function observeIframeLoad(ifr, successFn, errorFn) {
		      var _this = this;

		      var called = false,
		          tout = null;
		      var listener = function listener() {
		        if (called) {
		          return;
		        }
		        called = true;
		        clearTimeout(tout);
		        try {
		          if (!_this.isIframeBlank(ifr)) {
		            ifr.removeEventListener('load', listener);
		            _this.getIframeContents(ifr, successFn, errorFn);
		          }
		        } catch (e) {
		          errorFn();
		        }
		      };
		      ifr.addEventListener('load', listener);
		      tout = setTimeout(listener, this.iframesTimeout);
		    }
		  }, {
		    key: 'onIframeReady',
		    value: function onIframeReady(ifr, successFn, errorFn) {
		      try {
		        if (ifr.contentWindow.document.readyState === 'complete') {
		          if (this.isIframeBlank(ifr)) {
		            this.observeIframeLoad(ifr, successFn, errorFn);
		          } else {
		            this.getIframeContents(ifr, successFn, errorFn);
		          }
		        } else {
		          this.observeIframeLoad(ifr, successFn, errorFn);
		        }
		      } catch (e) {
		        errorFn();
		      }
		    }
		  }, {
		    key: 'waitForIframes',
		    value: function waitForIframes(ctx, done) {
		      var _this2 = this;

		      var eachCalled = 0;
		      this.forEachIframe(ctx, function () {
		        return true;
		      }, function (ifr) {
		        eachCalled++;
		        _this2.waitForIframes(ifr.querySelector('html'), function () {
		          if (! --eachCalled) {
		            done();
		          }
		        });
		      }, function (handled) {
		        if (!handled) {
		          done();
		        }
		      });
		    }
		  }, {
		    key: 'forEachIframe',
		    value: function forEachIframe(ctx, filter, each) {
		      var _this3 = this;

		      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

		      var ifr = ctx.querySelectorAll('iframe'),
		          open = ifr.length,
		          handled = 0;
		      ifr = Array.prototype.slice.call(ifr);
		      var checkEnd = function checkEnd() {
		        if (--open <= 0) {
		          end(handled);
		        }
		      };
		      if (!open) {
		        checkEnd();
		      }
		      ifr.forEach(function (ifr) {
		        if (DOMIterator.matches(ifr, _this3.exclude)) {
		          checkEnd();
		        } else {
		          _this3.onIframeReady(ifr, function (con) {
		            if (filter(ifr)) {
		              handled++;
		              each(con);
		            }
		            checkEnd();
		          }, checkEnd);
		        }
		      });
		    }
		  }, {
		    key: 'createIterator',
		    value: function createIterator(ctx, whatToShow, filter) {
		      return document.createNodeIterator(ctx, whatToShow, filter, false);
		    }
		  }, {
		    key: 'createInstanceOnIframe',
		    value: function createInstanceOnIframe(contents) {
		      return new DOMIterator(contents.querySelector('html'), this.iframes);
		    }
		  }, {
		    key: 'compareNodeIframe',
		    value: function compareNodeIframe(node, prevNode, ifr) {
		      var compCurr = node.compareDocumentPosition(ifr),
		          prev = Node.DOCUMENT_POSITION_PRECEDING;
		      if (compCurr & prev) {
		        if (prevNode !== null) {
		          var compPrev = prevNode.compareDocumentPosition(ifr),
		              after = Node.DOCUMENT_POSITION_FOLLOWING;
		          if (compPrev & after) {
		            return true;
		          }
		        } else {
		          return true;
		        }
		      }
		      return false;
		    }
		  }, {
		    key: 'getIteratorNode',
		    value: function getIteratorNode(itr) {
		      var prevNode = itr.previousNode();
		      var node = void 0;
		      if (prevNode === null) {
		        node = itr.nextNode();
		      } else {
		        node = itr.nextNode() && itr.nextNode();
		      }
		      return {
		        prevNode: prevNode,
		        node: node
		      };
		    }
		  }, {
		    key: 'checkIframeFilter',
		    value: function checkIframeFilter(node, prevNode, currIfr, ifr) {
		      var key = false,
		          handled = false;
		      ifr.forEach(function (ifrDict, i) {
		        if (ifrDict.val === currIfr) {
		          key = i;
		          handled = ifrDict.handled;
		        }
		      });
		      if (this.compareNodeIframe(node, prevNode, currIfr)) {
		        if (key === false && !handled) {
		          ifr.push({
		            val: currIfr,
		            handled: true
		          });
		        } else if (key !== false && !handled) {
		          ifr[key].handled = true;
		        }
		        return true;
		      }
		      if (key === false) {
		        ifr.push({
		          val: currIfr,
		          handled: false
		        });
		      }
		      return false;
		    }
		  }, {
		    key: 'handleOpenIframes',
		    value: function handleOpenIframes(ifr, whatToShow, eCb, fCb) {
		      var _this4 = this;

		      ifr.forEach(function (ifrDict) {
		        if (!ifrDict.handled) {
		          _this4.getIframeContents(ifrDict.val, function (con) {
		            _this4.createInstanceOnIframe(con).forEachNode(whatToShow, eCb, fCb);
		          });
		        }
		      });
		    }
		  }, {
		    key: 'iterateThroughNodes',
		    value: function iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
		      var _this5 = this;

		      var itr = this.createIterator(ctx, whatToShow, filterCb);
		      var ifr = [],
		          elements = [],
		          node = void 0,
		          prevNode = void 0,
		          retrieveNodes = function retrieveNodes() {
		        var _getIteratorNode = _this5.getIteratorNode(itr);

		        prevNode = _getIteratorNode.prevNode;
		        node = _getIteratorNode.node;

		        return node;
		      };
		      while (retrieveNodes()) {
		        if (this.iframes) {
		          this.forEachIframe(ctx, function (currIfr) {
		            return _this5.checkIframeFilter(node, prevNode, currIfr, ifr);
		          }, function (con) {
		            _this5.createInstanceOnIframe(con).forEachNode(whatToShow, function (ifrNode) {
		              return elements.push(ifrNode);
		            }, filterCb);
		          });
		        }
		        elements.push(node);
		      }
		      elements.forEach(function (node) {
		        eachCb(node);
		      });
		      if (this.iframes) {
		        this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb);
		      }
		      doneCb();
		    }
		  }, {
		    key: 'forEachNode',
		    value: function forEachNode(whatToShow, each, filter) {
		      var _this6 = this;

		      var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

		      var contexts = this.getContexts();
		      var open = contexts.length;
		      if (!open) {
		        done();
		      }
		      contexts.forEach(function (ctx) {
		        var ready = function ready() {
		          _this6.iterateThroughNodes(whatToShow, ctx, each, filter, function () {
		            if (--open <= 0) {
		              done();
		            }
		          });
		        };
		        if (_this6.iframes) {
		          _this6.waitForIframes(ctx, ready);
		        } else {
		          ready();
		        }
		      });
		    }
		  }], [{
		    key: 'matches',
		    value: function matches(element, selector) {
		      var selectors = typeof selector === 'string' ? [selector] : selector,
		          fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
		      if (fn) {
		        var match = false;
		        selectors.every(function (sel) {
		          if (fn.call(element, sel)) {
		            match = true;
		            return false;
		          }
		          return true;
		        });
		        return match;
		      } else {
		        return false;
		      }
		    }
		  }]);
		  return DOMIterator;
		}();

		var Mark$1 = function () {
		  function Mark(ctx) {
		    classCallCheck(this, Mark);

		    this.ctx = ctx;
		    this.ie = false;
		    var ua = window.navigator.userAgent;
		    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
		      this.ie = true;
		    }
		  }

		  createClass(Mark, [{
		    key: 'log',
		    value: function log(msg) {
		      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'debug';

		      var log = this.opt.log;
		      if (!this.opt.debug) {
		        return;
		      }
		      if ((typeof log === 'undefined' ? 'undefined' : _typeof(log)) === 'object' && typeof log[level] === 'function') {
		        log[level]('mark.js: ' + msg);
		      }
		    }
		  }, {
		    key: 'escapeStr',
		    value: function escapeStr(str) {
		      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
		    }
		  }, {
		    key: 'createRegExp',
		    value: function createRegExp(str) {
		      if (this.opt.wildcards !== 'disabled') {
		        str = this.setupWildcardsRegExp(str);
		      }
		      str = this.escapeStr(str);
		      if (Object.keys(this.opt.synonyms).length) {
		        str = this.createSynonymsRegExp(str);
		      }
		      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
		        str = this.setupIgnoreJoinersRegExp(str);
		      }
		      if (this.opt.diacritics) {
		        str = this.createDiacriticsRegExp(str);
		      }
		      str = this.createMergedBlanksRegExp(str);
		      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
		        str = this.createJoinersRegExp(str);
		      }
		      if (this.opt.wildcards !== 'disabled') {
		        str = this.createWildcardsRegExp(str);
		      }
		      str = this.createAccuracyRegExp(str);
		      return str;
		    }
		  }, {
		    key: 'createSynonymsRegExp',
		    value: function createSynonymsRegExp(str) {
		      var syn = this.opt.synonyms,
		          sens = this.opt.caseSensitive ? '' : 'i',
		          joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? '\0' : '';
		      for (var index in syn) {
		        if (syn.hasOwnProperty(index)) {
		          var value = syn[index],
		              k1 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(index) : this.escapeStr(index),
		              k2 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
		          if (k1 !== '' && k2 !== '') {
		            str = str.replace(new RegExp('(' + this.escapeStr(k1) + '|' + this.escapeStr(k2) + ')', 'gm' + sens), joinerPlaceholder + ('(' + this.processSynomyms(k1) + '|') + (this.processSynomyms(k2) + ')') + joinerPlaceholder);
		          }
		        }
		      }
		      return str;
		    }
		  }, {
		    key: 'processSynomyms',
		    value: function processSynomyms(str) {
		      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
		        str = this.setupIgnoreJoinersRegExp(str);
		      }
		      return str;
		    }
		  }, {
		    key: 'setupWildcardsRegExp',
		    value: function setupWildcardsRegExp(str) {
		      str = str.replace(/(?:\\)*\?/g, function (val) {
		        return val.charAt(0) === '\\' ? '?' : '\x01';
		      });
		      return str.replace(/(?:\\)*\*/g, function (val) {
		        return val.charAt(0) === '\\' ? '*' : '\x02';
		      });
		    }
		  }, {
		    key: 'createWildcardsRegExp',
		    value: function createWildcardsRegExp(str) {
		      var spaces = this.opt.wildcards === 'withSpaces';
		      return str.replace(/\u0001/g, spaces ? '[\\S\\s]?' : '\\S?').replace(/\u0002/g, spaces ? '[\\S\\s]*?' : '\\S*');
		    }
		  }, {
		    key: 'setupIgnoreJoinersRegExp',
		    value: function setupIgnoreJoinersRegExp(str) {
		      return str.replace(/[^(|)\\]/g, function (val, indx, original) {
		        var nextChar = original.charAt(indx + 1);
		        if (/[(|)\\]/.test(nextChar) || nextChar === '') {
		          return val;
		        } else {
		          return val + '\0';
		        }
		      });
		    }
		  }, {
		    key: 'createJoinersRegExp',
		    value: function createJoinersRegExp(str) {
		      var joiner = [];
		      var ignorePunctuation = this.opt.ignorePunctuation;
		      if (Array.isArray(ignorePunctuation) && ignorePunctuation.length) {
		        joiner.push(this.escapeStr(ignorePunctuation.join('')));
		      }
		      if (this.opt.ignoreJoiners) {
		        joiner.push('\\u00ad\\u200b\\u200c\\u200d');
		      }
		      return joiner.length ? str.split(/\u0000+/).join('[' + joiner.join('') + ']*') : str;
		    }
		  }, {
		    key: 'createDiacriticsRegExp',
		    value: function createDiacriticsRegExp(str) {
		      var sens = this.opt.caseSensitive ? '' : 'i',
		          dct = this.opt.caseSensitive ? ['aàáảãạăằắẳẵặâầấẩẫậäåāą', 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćč', 'CÇĆČ', 'dđď', 'DĐĎ', 'eèéẻẽẹêềếểễệëěēę', 'EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïī', 'IÌÍỈĨỊÎÏĪ', 'lł', 'LŁ', 'nñňń', 'NÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøō', 'OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rř', 'RŘ', 'sšśșş', 'SŠŚȘŞ', 'tťțţ', 'TŤȚŢ', 'uùúủũụưừứửữựûüůū', 'UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿ', 'YÝỲỶỸỴŸ', 'zžżź', 'ZŽŻŹ'] : ['aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćčCÇĆČ', 'dđďDĐĎ', 'eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïīIÌÍỈĨỊÎÏĪ', 'lłLŁ', 'nñňńNÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rřRŘ', 'sšśșşSŠŚȘŞ', 'tťțţTŤȚŢ', 'uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿYÝỲỶỸỴŸ', 'zžżźZŽŻŹ'];
		      var handled = [];
		      str.split('').forEach(function (ch) {
		        dct.every(function (dct) {
		          if (dct.indexOf(ch) !== -1) {
		            if (handled.indexOf(dct) > -1) {
		              return false;
		            }
		            str = str.replace(new RegExp('[' + dct + ']', 'gm' + sens), '[' + dct + ']');
		            handled.push(dct);
		          }
		          return true;
		        });
		      });
		      return str;
		    }
		  }, {
		    key: 'createMergedBlanksRegExp',
		    value: function createMergedBlanksRegExp(str) {
		      return str.replace(/[\s]+/gmi, '[\\s]+');
		    }
		  }, {
		    key: 'createAccuracyRegExp',
		    value: function createAccuracyRegExp(str) {
		      var _this = this;

		      var chars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~¡¿';
		      var acc = this.opt.accuracy,
		          val = typeof acc === 'string' ? acc : acc.value,
		          ls = typeof acc === 'string' ? [] : acc.limiters,
		          lsJoin = '';
		      ls.forEach(function (limiter) {
		        lsJoin += '|' + _this.escapeStr(limiter);
		      });
		      switch (val) {
		        case 'partially':
		        default:
		          return '()(' + str + ')';
		        case 'complementary':
		          lsJoin = '\\s' + (lsJoin ? lsJoin : this.escapeStr(chars));
		          return '()([^' + lsJoin + ']*' + str + '[^' + lsJoin + ']*)';
		        case 'exactly':
		          return '(^|\\s' + lsJoin + ')(' + str + ')(?=$|\\s' + lsJoin + ')';
		      }
		    }
		  }, {
		    key: 'getSeparatedKeywords',
		    value: function getSeparatedKeywords(sv) {
		      var _this2 = this;

		      var stack = [];
		      sv.forEach(function (kw) {
		        if (!_this2.opt.separateWordSearch) {
		          if (kw.trim() && stack.indexOf(kw) === -1) {
		            stack.push(kw);
		          }
		        } else {
		          kw.split(' ').forEach(function (kwSplitted) {
		            if (kwSplitted.trim() && stack.indexOf(kwSplitted) === -1) {
		              stack.push(kwSplitted);
		            }
		          });
		        }
		      });
		      return {
		        'keywords': stack.sort(function (a, b) {
		          return b.length - a.length;
		        }),
		        'length': stack.length
		      };
		    }
		  }, {
		    key: 'isNumeric',
		    value: function isNumeric(value) {
		      return Number(parseFloat(value)) == value;
		    }
		  }, {
		    key: 'checkRanges',
		    value: function checkRanges(array) {
		      var _this3 = this;

		      if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== '[object Object]') {
		        this.log('markRanges() will only accept an array of objects');
		        this.opt.noMatch(array);
		        return [];
		      }
		      var stack = [];
		      var last = 0;
		      array.sort(function (a, b) {
		        return a.start - b.start;
		      }).forEach(function (item) {
		        var _callNoMatchOnInvalid = _this3.callNoMatchOnInvalidRanges(item, last),
		            start = _callNoMatchOnInvalid.start,
		            end = _callNoMatchOnInvalid.end,
		            valid = _callNoMatchOnInvalid.valid;

		        if (valid) {
		          item.start = start;
		          item.length = end - start;
		          stack.push(item);
		          last = end;
		        }
		      });
		      return stack;
		    }
		  }, {
		    key: 'callNoMatchOnInvalidRanges',
		    value: function callNoMatchOnInvalidRanges(range, last) {
		      var start = void 0,
		          end = void 0,
		          valid = false;
		      if (range && typeof range.start !== 'undefined') {
		        start = parseInt(range.start, 10);
		        end = start + parseInt(range.length, 10);
		        if (this.isNumeric(range.start) && this.isNumeric(range.length) && end - last > 0 && end - start > 0) {
		          valid = true;
		        } else {
		          this.log('Ignoring invalid or overlapping range: ' + ('' + JSON.stringify(range)));
		          this.opt.noMatch(range);
		        }
		      } else {
		        this.log('Ignoring invalid range: ' + JSON.stringify(range));
		        this.opt.noMatch(range);
		      }
		      return {
		        start: start,
		        end: end,
		        valid: valid
		      };
		    }
		  }, {
		    key: 'checkWhitespaceRanges',
		    value: function checkWhitespaceRanges(range, originalLength, string) {
		      var end = void 0,
		          valid = true,
		          max = string.length,
		          offset = originalLength - max,
		          start = parseInt(range.start, 10) - offset;
		      start = start > max ? max : start;
		      end = start + parseInt(range.length, 10);
		      if (end > max) {
		        end = max;
		        this.log('End range automatically set to the max value of ' + max);
		      }
		      if (start < 0 || end - start < 0 || start > max || end > max) {
		        valid = false;
		        this.log('Invalid range: ' + JSON.stringify(range));
		        this.opt.noMatch(range);
		      } else if (string.substring(start, end).replace(/\s+/g, '') === '') {
		        valid = false;
		        this.log('Skipping whitespace only range: ' + JSON.stringify(range));
		        this.opt.noMatch(range);
		      }
		      return {
		        start: start,
		        end: end,
		        valid: valid
		      };
		    }
		  }, {
		    key: 'getTextNodes',
		    value: function getTextNodes(cb) {
		      var _this4 = this;

		      var val = '',
		          nodes = [];
		      this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (node) {
		        nodes.push({
		          start: val.length,
		          end: (val += node.textContent).length,
		          node: node
		        });
		      }, function (node) {
		        if (_this4.matchesExclude(node.parentNode)) {
		          return NodeFilter.FILTER_REJECT;
		        } else {
		          return NodeFilter.FILTER_ACCEPT;
		        }
		      }, function () {
		        cb({
		          value: val,
		          nodes: nodes
		        });
		      });
		    }
		  }, {
		    key: 'matchesExclude',
		    value: function matchesExclude(el) {
		      return DOMIterator.matches(el, this.opt.exclude.concat(['script', 'style', 'title', 'head', 'html']));
		    }
		  }, {
		    key: 'wrapRangeInTextNode',
		    value: function wrapRangeInTextNode(node, start, end) {
		      var hEl = !this.opt.element ? 'mark' : this.opt.element,
		          startNode = node.splitText(start),
		          ret = startNode.splitText(end - start);
		      var repl = document.createElement(hEl);
		      repl.setAttribute('data-markjs', 'true');
		      if (this.opt.className) {
		        repl.setAttribute('class', this.opt.className);
		      }
		      repl.textContent = startNode.textContent;
		      startNode.parentNode.replaceChild(repl, startNode);
		      return ret;
		    }
		  }, {
		    key: 'wrapRangeInMappedTextNode',
		    value: function wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
		      var _this5 = this;

		      dict.nodes.every(function (n, i) {
		        var sibl = dict.nodes[i + 1];
		        if (typeof sibl === 'undefined' || sibl.start > start) {
		          if (!filterCb(n.node)) {
		            return false;
		          }
		          var s = start - n.start,
		              e = (end > n.end ? n.end : end) - n.start,
		              startStr = dict.value.substr(0, n.start),
		              endStr = dict.value.substr(e + n.start);
		          n.node = _this5.wrapRangeInTextNode(n.node, s, e);
		          dict.value = startStr + endStr;
		          dict.nodes.forEach(function (k, j) {
		            if (j >= i) {
		              if (dict.nodes[j].start > 0 && j !== i) {
		                dict.nodes[j].start -= e;
		              }
		              dict.nodes[j].end -= e;
		            }
		          });
		          end -= e;
		          eachCb(n.node.previousSibling, n.start);
		          if (end > n.end) {
		            start = n.end;
		          } else {
		            return false;
		          }
		        }
		        return true;
		      });
		    }
		  }, {
		    key: 'wrapMatches',
		    value: function wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
		      var _this6 = this;

		      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
		      this.getTextNodes(function (dict) {
		        dict.nodes.forEach(function (node) {
		          node = node.node;
		          var match = void 0;
		          while ((match = regex.exec(node.textContent)) !== null && match[matchIdx] !== '') {
		            if (!filterCb(match[matchIdx], node)) {
		              continue;
		            }
		            var pos = match.index;
		            if (matchIdx !== 0) {
		              for (var i = 1; i < matchIdx; i++) {
		                pos += match[i].length;
		              }
		            }
		            node = _this6.wrapRangeInTextNode(node, pos, pos + match[matchIdx].length);
		            eachCb(node.previousSibling);
		            regex.lastIndex = 0;
		          }
		        });
		        endCb();
		      });
		    }
		  }, {
		    key: 'wrapMatchesAcrossElements',
		    value: function wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
		      var _this7 = this;

		      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
		      this.getTextNodes(function (dict) {
		        var match = void 0;
		        while ((match = regex.exec(dict.value)) !== null && match[matchIdx] !== '') {
		          var start = match.index;
		          if (matchIdx !== 0) {
		            for (var i = 1; i < matchIdx; i++) {
		              start += match[i].length;
		            }
		          }
		          var end = start + match[matchIdx].length;
		          _this7.wrapRangeInMappedTextNode(dict, start, end, function (node) {
		            return filterCb(match[matchIdx], node);
		          }, function (node, lastIndex) {
		            regex.lastIndex = lastIndex;
		            eachCb(node);
		          });
		        }
		        endCb();
		      });
		    }
		  }, {
		    key: 'wrapRangeFromIndex',
		    value: function wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
		      var _this8 = this;

		      this.getTextNodes(function (dict) {
		        var originalLength = dict.value.length;
		        ranges.forEach(function (range, counter) {
		          var _checkWhitespaceRange = _this8.checkWhitespaceRanges(range, originalLength, dict.value),
		              start = _checkWhitespaceRange.start,
		              end = _checkWhitespaceRange.end,
		              valid = _checkWhitespaceRange.valid;

		          if (valid) {
		            _this8.wrapRangeInMappedTextNode(dict, start, end, function (node) {
		              return filterCb(node, range, dict.value.substring(start, end), counter);
		            }, function (node) {
		              eachCb(node, range);
		            });
		          }
		        });
		        endCb();
		      });
		    }
		  }, {
		    key: 'unwrapMatches',
		    value: function unwrapMatches(node) {
		      var parent = node.parentNode;
		      var docFrag = document.createDocumentFragment();
		      while (node.firstChild) {
		        docFrag.appendChild(node.removeChild(node.firstChild));
		      }
		      parent.replaceChild(docFrag, node);
		      if (!this.ie) {
		        parent.normalize();
		      } else {
		        this.normalizeTextNode(parent);
		      }
		    }
		  }, {
		    key: 'normalizeTextNode',
		    value: function normalizeTextNode(node) {
		      if (!node) {
		        return;
		      }
		      if (node.nodeType === 3) {
		        while (node.nextSibling && node.nextSibling.nodeType === 3) {
		          node.nodeValue += node.nextSibling.nodeValue;
		          node.parentNode.removeChild(node.nextSibling);
		        }
		      } else {
		        this.normalizeTextNode(node.firstChild);
		      }
		      this.normalizeTextNode(node.nextSibling);
		    }
		  }, {
		    key: 'markRegExp',
		    value: function markRegExp(regexp, opt) {
		      var _this9 = this;

		      this.opt = opt;
		      this.log('Searching with expression "' + regexp + '"');
		      var totalMatches = 0,
		          fn = 'wrapMatches';
		      var eachCb = function eachCb(element) {
		        totalMatches++;
		        _this9.opt.each(element);
		      };
		      if (this.opt.acrossElements) {
		        fn = 'wrapMatchesAcrossElements';
		      }
		      this[fn](regexp, this.opt.ignoreGroups, function (match, node) {
		        return _this9.opt.filter(node, match, totalMatches);
		      }, eachCb, function () {
		        if (totalMatches === 0) {
		          _this9.opt.noMatch(regexp);
		        }
		        _this9.opt.done(totalMatches);
		      });
		    }
		  }, {
		    key: 'mark',
		    value: function mark(sv, opt) {
		      var _this10 = this;

		      this.opt = opt;
		      var totalMatches = 0,
		          fn = 'wrapMatches';

		      var _getSeparatedKeywords = this.getSeparatedKeywords(typeof sv === 'string' ? [sv] : sv),
		          kwArr = _getSeparatedKeywords.keywords,
		          kwArrLen = _getSeparatedKeywords.length,
		          sens = this.opt.caseSensitive ? '' : 'i',
		          handler = function handler(kw) {
		        var regex = new RegExp(_this10.createRegExp(kw), 'gm' + sens),
		            matches = 0;
		        _this10.log('Searching with expression "' + regex + '"');
		        _this10[fn](regex, 1, function (term, node) {
		          return _this10.opt.filter(node, kw, totalMatches, matches);
		        }, function (element) {
		          matches++;
		          totalMatches++;
		          _this10.opt.each(element);
		        }, function () {
		          if (matches === 0) {
		            _this10.opt.noMatch(kw);
		          }
		          if (kwArr[kwArrLen - 1] === kw) {
		            _this10.opt.done(totalMatches);
		          } else {
		            handler(kwArr[kwArr.indexOf(kw) + 1]);
		          }
		        });
		      };

		      if (this.opt.acrossElements) {
		        fn = 'wrapMatchesAcrossElements';
		      }
		      if (kwArrLen === 0) {
		        this.opt.done(totalMatches);
		      } else {
		        handler(kwArr[0]);
		      }
		    }
		  }, {
		    key: 'markRanges',
		    value: function markRanges(rawRanges, opt) {
		      var _this11 = this;

		      this.opt = opt;
		      var totalMatches = 0,
		          ranges = this.checkRanges(rawRanges);
		      if (ranges && ranges.length) {
		        this.log('Starting to mark with the following ranges: ' + JSON.stringify(ranges));
		        this.wrapRangeFromIndex(ranges, function (node, range, match, counter) {
		          return _this11.opt.filter(node, range, match, counter);
		        }, function (element, range) {
		          totalMatches++;
		          _this11.opt.each(element, range);
		        }, function () {
		          _this11.opt.done(totalMatches);
		        });
		      } else {
		        this.opt.done(totalMatches);
		      }
		    }
		  }, {
		    key: 'unmark',
		    value: function unmark(opt) {
		      var _this12 = this;

		      this.opt = opt;
		      var sel = this.opt.element ? this.opt.element : '*';
		      sel += '[data-markjs]';
		      if (this.opt.className) {
		        sel += '.' + this.opt.className;
		      }
		      this.log('Removal selector "' + sel + '"');
		      this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (node) {
		        _this12.unwrapMatches(node);
		      }, function (node) {
		        var matchesSel = DOMIterator.matches(node, sel),
		            matchesExclude = _this12.matchesExclude(node);
		        if (!matchesSel || matchesExclude) {
		          return NodeFilter.FILTER_REJECT;
		        } else {
		          return NodeFilter.FILTER_ACCEPT;
		        }
		      }, this.opt.done);
		    }
		  }, {
		    key: 'opt',
		    set: function set$$1(val) {
		      this._opt = _extends({}, {
		        'element': '',
		        'className': '',
		        'exclude': [],
		        'iframes': false,
		        'iframesTimeout': 5000,
		        'separateWordSearch': true,
		        'diacritics': true,
		        'synonyms': {},
		        'accuracy': 'partially',
		        'acrossElements': false,
		        'caseSensitive': false,
		        'ignoreJoiners': false,
		        'ignoreGroups': 0,
		        'ignorePunctuation': [],
		        'wildcards': 'disabled',
		        'each': function each() {},
		        'noMatch': function noMatch() {},
		        'filter': function filter() {
		          return true;
		        },
		        'done': function done() {},
		        'debug': false,
		        'log': window.console
		      }, val);
		    },
		    get: function get$$1() {
		      return this._opt;
		    }
		  }, {
		    key: 'iterator',
		    get: function get$$1() {
		      return new DOMIterator(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
		    }
		  }]);
		  return Mark;
		}();

		function Mark(ctx) {
		  var _this = this;

		  var instance = new Mark$1(ctx);
		  this.mark = function (sv, opt) {
		    instance.mark(sv, opt);
		    return _this;
		  };
		  this.markRegExp = function (sv, opt) {
		    instance.markRegExp(sv, opt);
		    return _this;
		  };
		  this.markRanges = function (sv, opt) {
		    instance.markRanges(sv, opt);
		    return _this;
		  };
		  this.unmark = function (opt) {
		    instance.unmark(opt);
		    return _this;
		  };
		  return this;
		}

		return Mark;

		}))); 
	} (mark$1));
	return mark$1.exports;
}

var markExports = requireMark();
var Mark = /*@__PURE__*/getDefaultExportFromCjs(markExports);

var privateMessageComponent = () => {
    const container = document.querySelector(".basement-private-messages");
    const highlighter = new Mark(".basement-private-messages__message-value");
    let lastMessageObserver;
    const urlTemplate = container.getAttribute("data-url");
    const urlBatchRequest = container.getAttribute("data-batch-request-url");
    const urlCurrentlyTypingTemplate = container.getAttribute("data-currently-typing-url");
    const userId = Number(container.getAttribute("data-user-id"));
    const typingsTimeout = new Map();
    // The indicator must outlive the gap between two signals (plus network
    // jitter), otherwise it flickers while the contact is still typing.
    const typingSignalInterval = 3000;
    const typingIndicatorDuration = 5000;
    let lastTypingSignalAt = 0;
    return {
        isInfoBoxOpened: false,
        isLastMessageShown: false,
        isLoading: true,
        isLoadingShowMore: false,
        isLoadingSentMessage: false,
        isSearchOpened: false,
        messageIdWithOpenDialog: null,
        messages: [],
        newMessageValue: "",
        receiver: null,
        searchKeyword: "",
        seenMessages: [],
        selectedMessage: null,
        unreadMessageCursor: null,
        url: "",
        urlTemplate,
        urlBatchRequest,
        urlCurrentlyTyping: "",
        urlCurrentlyTypingTemplate,
        urlShowMore: null,
        /**
         * Hook during the initialization phase of the current Alpine component.
         */
        init() {
            this.$refs.basementChatBox.addEventListener("update-receiver", this.updateReceiver.bind(this));
            this.$watch("messages", this.watchMessages.bind(this));
            setInterval(this.markSeenMessagesAsRead.bind(this), 3000);
            this.registerEchoEventListeners();
            lastMessageObserver = new IntersectionObserver(this.lastMessageObserver.bind(this), {
                root: this.$el,
                threshold: [0, 1],
            });
        },
        /**
         * Load initial component data.
         */
        async mount() {
            this.isLoading = true;
            const response = await window.axios
                .get(this.url, {
                params: { keyword: this.searchKeyword.trim() },
            })
                .then(({ data }) => data);
            this.urlShowMore = response.links.next;
            this.messages = response.data.map((message) => PrivateMessageData.from(message));
            this.isLoading = false;
            if (this.messages.length > 0) {
                this.setUnreadMessagesMarker();
                this.scrollTo(this.unreadMessageCursor ?? this.messages.at(0).id, {
                    block: "center",
                });
            }
        },
        /**
         * Load more component data.
         */
        async mountMore() {
            if (this.urlShowMore === null) {
                throw new Error("Next page to load more private messages is not available");
            }
            this.isLoadingShowMore = true;
            const response = await window.axios
                .get(this.urlShowMore, {
                params: { keyword: this.searchKeyword.trim() },
            })
                .then(({ data }) => data);
            const messages = response.data.map((message) => PrivateMessageData.from(message));
            const currentCursor = this.messages.at(-1);
            this.messages.push(...messages);
            this.urlShowMore = response.links.next;
            this.isLoadingShowMore = false;
            if (currentCursor !== undefined) {
                this.scrollTo(currentCursor.id);
            }
        },
        /**
         * Get messages grouped by day of creation.
         */
        get groupedMessages() {
            const messages = new Map();
            [...this.messages]
                .reverse()
                .forEach((message) => {
                const date = message.createdAt.withinDateFormat;
                if (messages.has(date) === false) {
                    messages.set(date, []);
                }
                messages.get(date).push(message);
            });
            return [...messages.values()];
        },
        /**
         * Send a HTTP request to the currently typing API endpoint.
         */
        async currentlyTyping() {
            if (this.receiver === null ||
                this.receiver.id === userId ||
                this.newMessageValue === "" ||
                Date.now() - lastTypingSignalAt < typingSignalInterval) {
                return;
            }
            lastTypingSignalAt = Date.now();
            // Best effort: a dropped typing signal is not worth an error.
            await window.axios.get(this.urlCurrentlyTyping).catch(() => { });
        },
        /**
         * Action when the last message is hidden or shown.
         */
        lastMessageObserver(entries) {
            const { intersectionRatio } = entries.at(0);
            if (intersectionRatio > 0.5) {
                this.isLastMessageShown = true;
            }
            else {
                this.isLastMessageShown = false;
            }
        },
        /**
         * Update messages that have been seen to the database.
         */
        markSeenMessagesAsRead() {
            if (this.seenMessages.length === 0) {
                return;
            }
            if (this.receiver === null) {
                throw new Error("Receiver cannot be empty");
            }
            void window.axios.patch(this.urlBatchRequest, this.seenMessages.map((value) => ({
                operation: "mark as read",
                value: { id: value },
            })));
            this.seenMessages = [];
        },
        /**
         * Assign observer for the last message.
         */
        observeLastMessage() {
            const lastMessage = this.messages.at(0);
            if (lastMessage === undefined) {
                return;
            }
            void this.$nextTick(() => {
                const lastMessageElement = document.querySelector(`.basement-private-messages__message-value[data-id="${lastMessage.id}"]`);
                lastMessageObserver.disconnect();
                lastMessageObserver.observe(lastMessageElement);
            });
        },
        /**
         * Laravel Echo event listener when a message is received.
         */
        onMessageReceived(event) {
            this.setStatusToNotTyping(event.detail.sender_id);
            const receivedMessage = PrivateMessageData.from(event.detail);
            if (event.detail.sender_id === this.receiver?.id &&
                event.detail.value.includes(this.searchKeyword.trim())) {
                this.messages.unshift(receivedMessage);
            }
            this.$dispatch("update-last-private-message-received", receivedMessage);
            if (userId !== event.detail.sender_id) {
                this.$dispatch("send-push-notification", {
                    title: event.detail.sender.name,
                    body: event.detail.value,
                    icon: event.detail.sender.avatar,
                });
            }
            if (this.isLastMessageShown === true) {
                this.scrollToLastMessage();
            }
        },
        /**
         * Laravel Echo event listener when a message is sent.
         */
        onMessageSent(event) {
            const sentMessage = PrivateMessageData.from(event.detail);
            if (event.detail.receiver_id === this.receiver?.id &&
                event.detail.value.includes(this.searchKeyword.trim())) {
                this.messages.unshift(sentMessage);
                // Always show the user their own new message, even when scrolled up.
                this.scrollToLastMessage();
            }
            this.$dispatch("update-last-private-message-sent", sentMessage);
        },
        /**
         * Laravel Echo event listener when sent messages is marked as read.
         */
        onSentMessagesMarkedAsRead(event) {
            if (this.receiver?.id === event.detail.receiver.id) {
                event.detail.messages.forEach((value) => {
                    const sameMessage = this.messages.find(({ id }) => id === value.id);
                    if (sameMessage !== undefined) {
                        sameMessage.setReadAtTime(value.read_at);
                    }
                });
            }
        },
        /**
         * Laravel Echo event listener when received messages is marked as read.
         */
        onReceivedMessagesMarkedAsRead(event) {
            this.$dispatch("update-unread-messages", event.detail);
        },
        /**
         * Laravel Echo event listener when someone in the contact list types a message.
         */
        onContactCurrentlyTyping(event) {
            if (event.detail.contact.id === userId) {
                return;
            }
            this.setStatusToTyping(event.detail.contact.id, typingIndicatorDuration);
            if (this.isLastMessageShown === true) {
                this.scrollToLastMessage();
            }
        },
        /**
         * Register Laravel Echo event listeners.
         */
        registerEchoEventListeners() {
            window.Echo.join(`basement.contacts.${userId}`)
                .listen(".basement.message.received", this.onMessageReceived.bind(this))
                .listen(".basement.message.sent", this.onMessageSent.bind(this))
                .listen(".basement.message.sent-messages-marked-as-read", this.onSentMessagesMarkedAsRead.bind(this))
                .listen(".basement.message.received-messages-marked-as-read", this.onReceivedMessagesMarkedAsRead.bind(this))
                .listen(".basement.contact.currently-typing", this.onContactCurrentlyTyping.bind(this));
        },
        /**
         * Set the status of the given contact to typing for till specified time in ms
         */
        setStatusToTyping(contactId, ms) {
            if (typingsTimeout.has(contactId)) {
                clearTimeout(typingsTimeout.get(contactId));
            }
            else {
                this.$dispatch("update-currently-typing-contact", {
                    contact: {
                        id: contactId,
                        typing: true,
                    },
                });
            }
            typingsTimeout.set(contactId, setTimeout(() => {
                this.$dispatch("update-currently-typing-contact", {
                    contact: {
                        id: contactId,
                        typing: false,
                    },
                });
                typingsTimeout.delete(contactId);
            }, ms));
        },
        /**
         * Set the status of the given contact to not typing.
         */
        setStatusToNotTyping(contactId) {
            if (typingsTimeout.has(contactId)) {
                clearTimeout(typingsTimeout.get(contactId));
                typingsTimeout.delete(contactId);
            }
            this.$dispatch("update-currently-typing-contact", {
                contact: {
                    id: contactId,
                    typing: false,
                },
            });
        },
        /**
         * Calculate the amount of rows that the message value will take.
         */
        setMessageRows(value) {
            return Math.min(value.split("\n").length, 5);
        },
        /**
         * Scroll component view to given message id.
         */
        scrollTo(id, options = {}) {
            if (id === null) {
                return;
            }
            void this.$nextTick(() => {
                document
                    .querySelector(`.basement-private-messages__message-value[data-id="${id}"]`)
                    ?.scrollIntoView(options);
            });
        },
        /**
         * Scroll component view to the last message.
         */
        scrollToLastMessage() {
            const lastMessage = this.messages.at(0);
            this.scrollTo(lastMessage?.id ?? null, {
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
            });
        },
        /**
         * Action when a given message is visible.
         */
        seeMessage(message) {
            if (this.receiver === null ||
                message.receiverId === this.receiver.id ||
                message.readAt.date !== null) {
                return;
            }
            this.seenMessages.push(message.id);
        },
        /**
         * Send a new message.
         */
        async sendNewMessage() {
            if (this.receiver === null) {
                throw new Error("Receiver cannot be empty");
            }
            // Enter bypasses the form's "required" check.
            if (this.newMessageValue.trim() === "") {
                return;
            }
            this.isLoadingSentMessage = true;
            try {
                await window.axios.post(this.url, {
                    value: this.newMessageValue,
                });
                this.newMessageValue = "";
                lastTypingSignalAt = 0;
            }
            finally {
                this.isLoadingSentMessage = false;
                // The input is disabled while sending, which drops its focus.
                void this.$nextTick(() => {
                    this.$refs.newMessageInput.focus();
                });
            }
        },
        /**
         * Add unread messages marker to the component.
         */
        setUnreadMessagesMarker() {
            this.messages.some((message) => {
                if (message.readAt.date !== null) {
                    return true;
                }
                if (message.senderId === this.receiver?.id) {
                    this.unreadMessageCursor = message.id;
                }
                return false;
            });
        },
        /**
         * HTML DOM event listener to update the current receiver.
         */
        updateReceiver(event) {
            this.unreadMessageCursor = null;
            this.searchKeyword = "";
            this.receiver = event.detail;
            lastTypingSignalAt = 0;
            this.url = this.urlTemplate.replace(":contact", String(event.detail.id));
            this.urlCurrentlyTyping = this.urlCurrentlyTypingTemplate.replace(":contact", String(event.detail.id));
            void this.mount().then(() => {
                this.$refs.newMessageInput.focus({ preventScroll: true });
            });
        },
        /**
         * Watch when the messages changes.
         */
        watchMessages() {
            if (this.searchKeyword.trim() === "") {
                highlighter.unmark();
            }
            else {
                highlighter.mark(this.searchKeyword.trim());
            }
            this.observeLastMessage();
        },
    };
};

var basement = (alpine) => {
    alpine.data("basementChatBox", chatBoxComponent);
    alpine.data("basementContact", contactComponent);
    alpine.data("basementPrivateChat", privateMessageComponent);
};

module.exports = basement;
//# sourceMappingURL=basement.plugin.common.js.map
