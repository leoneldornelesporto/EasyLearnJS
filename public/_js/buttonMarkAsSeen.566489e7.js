"use strict";$(".mark-as-seen").click(function(e){e.preventDefault();var n=e.target.closest(".warning-card-main"),e=n.id;$.post("/learningGuide/markAsSeen",{code:e}).done(function(){n.classList.add("hidden")}).fail(function(e){window.alert(e.responseText)})});