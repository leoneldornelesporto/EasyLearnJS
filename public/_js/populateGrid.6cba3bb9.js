"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}var PopulateGrid=function(){function a(e,t){_classCallCheck(this,a),this.username=e,this.userpoints=t}return _createClass(a,[{key:"populate",value:function(){var a=this;this.userpoints.chartScores.forEach(function(e){var t=$('.pointsGrid-cell[data-username="'.concat(a.username,'"][data-date="').concat(e.formatedDate,'"]'));t.attr("aria-hidden",!e.hasScore),t.removeClass("pointsGrid-cell--no-score"),t.addClass("pointsGrid-cell--".concat(e.scoreColor)),t.find(".pointsGrid-cell-details").html(e.element)})}}]),a}();