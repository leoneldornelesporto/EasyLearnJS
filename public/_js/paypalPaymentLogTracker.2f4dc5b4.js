"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var r=0;r<a.length;r++){var n=a[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,a,r){return a&&_defineProperties(e.prototype,a),r&&_defineProperties(e,r),e}var PaypalPaymentLogTracker=function(){function e(){_classCallCheck(this,e),Raven.config("https://ea06dd9f90eb40c8ae483bec765b6291@sentry.io/1227271").install()}return _createClass(e,[{key:"log",value:function(e,a){Raven.captureException(new Error("PaypalPaymentLogTracker"),{extra:{errorList:a,data:e}})}}]),e}();