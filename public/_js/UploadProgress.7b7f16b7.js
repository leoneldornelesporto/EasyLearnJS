"use strict";function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function _createClass(s,t,e){return t&&_defineProperties(s.prototype,t),e&&_defineProperties(s,e),s}var UploadProgress=function(){function t(s){_classCallCheck(this,t),this._language=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,this._formatter=new Intl.NumberFormat(this._language,{maximumFractionDigits:2}),this.progressMessage=s}return _createClass(t,[{key:"hackeditor",value:function(s){this._editor=s.core,this._imageProgressStatusBar=$(this._editor.gui.statusbar).children(".upload-image");s=$(this._editor.gui.toolbar);return s.append('<div class="img-upload-progress-wrapper"><div class="img-upload-progress"><span style="width: 0%"></span></div></div>'),this._progressBar=s.find(".img-upload-progress"),this.reset(),this}},{key:"markedEditor",value:function(s){return this._imageProgressStatusBar=s.find(".status-bar-img-upload"),this.reset(),this}},{key:"avatarUpload",value:function(){return this._progressBar=$(".img-upload-progress"),this._imageProgressStatusBar=this._progressBar.find(".img-upload-progress-text"),this.reset(),this}},{key:"reset",value:function(){this.progress=0,this.total=0,this.finished=0,this.files={},this._progressBar&&this._progressBar.find("span").css("width","0%"),this._imageProgressStatusBar&&this._imageProgressStatusBar.text("")}},{key:"addProgress",value:function(s,t){this.files["".concat(s)]=Math.min(t,100),this.recalculate(),this.changeTextProgress(t,s)}},{key:"changeTextProgress",value:function(s,t){var e=this._formatter.format(s),s=this._formatter.format(this.getProgress());this._imageProgressStatusBar&&(e=this.progressMessage.replace("#images_names#",t).replace("#progress#",e),this._imageProgressStatusBar.text("".concat(this.finished,"/").concat(this.total,"(").concat(s,"%): ").concat(e)))}},{key:"finish",value:function(s){this.files["".concat(s)]=100,this.finished=Math.min(this.finished+1,this.total),this.finished===this.total?this.hide():this.recalculate()}},{key:"recalculate",value:function(){this.progress=Object.values(this.files).reduce(function(s,t){return s+t}),this._progressBar&&this._progressBar.find("span").animate({width:"".concat(this.getProgress(),"%")},200)}},{key:"getProgress",value:function(){return this.progress/this.total}},{key:"build",value:function(s){var t=this;this.reset(),Array.from(s).forEach(function(s){return t.files["".concat(s.name)]=0}),this.total=s.length,this.recalculate(),this._progressBar&&this._progressBar.show()}},{key:"hide",value:function(){this._progressBar&&this._progressBar.hide()}}]),t}();