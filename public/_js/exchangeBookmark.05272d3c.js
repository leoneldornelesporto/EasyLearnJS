"use strict";$(".exchange-bookmark-button").click(function(e){e.preventDefault(),$.post("/learningGuide/exchange/"+$(this).data("degreecode")).done(function(e){window.location=e}).fail(function(e){window.alert(e.responseText)})});