"use strict";function showToken(t){t.preventDefault();var n=$(this).data("error"),t=$(this).attr("href"),e=$("#showToken");$.post(t,function(t){}).done(function(t){e.html("<input readonly value='".concat(t.apiToken,"'></input>")),e.children(":input").attr("id","inputToken").attr("class","profileInfo__inputToken");var n=$("#apiLink");n.text(n.text().replace("{token}",t.apiToken)),n.show(),$(".copyButton").show()}).fail(function(){e.html(n)})}function jumpToNextField(t,n){2<=t.val().length&&n.select()}!function(){var t=[];0<$("#editProfile-userInfo").length&&t.push(new ModalPasswordProfile),0<$("#editProfile-notaFiscal").length&&t.push(new ForeignFormProfile),t.forEach(function(t){t.listeners()})}(),$(".profileInfo__showTokenButton").click(showToken),$("#tokenLinkGenerate").click(showToken),$(".profileInfo__copyButton").click(function(){$("#inputToken").select(),document.execCommand("copy")}),$("#birthDateDay").on("input",function(t){return jumpToNextField($(t.target),$("#birthDateMonth"))}),$("#birthDateMonth").on("input",function(t){return jumpToNextField($(t.target),$("#birthDateYear"))});