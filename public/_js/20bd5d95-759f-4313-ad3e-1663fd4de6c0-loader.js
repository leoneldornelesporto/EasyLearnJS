"use strict";var RDStation=function(){var e={windowLoaded:!1};return window.addEventListener("load",function(){e.windowLoaded=!0}),e}(),RDCookieControl=function(){var e={analytics:{eventName:"rd_cookie_consent_allow_analytics",track:!0},functional:{eventName:"rd_cookie_consent_allow_functional",track:!0},configuration:null};return document.addEventListener(e.analytics.eventName,function(){e.analytics.track=!0}),document.addEventListener(e.functional.eventName,function(){e.functional.track=!0}),e}(),namespace="RDTracker";window.GlobalSnowplowNamespace=window.GlobalSnowplowNamespace||[],window.GlobalSnowplowNamespace.push(namespace),window[namespace]?(window[namespace].q.unshift(["initTracker","4b7bbfbbbe5c7e29f1c12ecb3b59096b"]),window[namespace].q.push(["trackPageView"])):(window[namespace]=function(){(window[namespace].q=window[namespace].q||[]).push(arguments)},window[namespace].q=window[namespace].q||[["initTracker","4b7bbfbbbe5c7e29f1c12ecb3b59096b"],["trackPageView"]]);var n=document.createElement("script"),g=document.getElementsByTagName("script")[0];n.async=1,n.src="https://d335luupugsy2.cloudfront.net/js/sauron-analytics/stable/sp.js",g.parentNode.insertBefore(n,g),function(){var e=function(){var e=document.createElement("iframe");e.onload=function(){RDStation.windowLoaded=!0,t()},e.setAttribute("style","width: 1px; height: 1px; position: absolute; top: -100px;"),e.setAttribute("id","rd_tmgr"),document.body.appendChild(e)},s=function(){window.opener&&-1!=window.name.indexOf("TAGMANAGER_VERIFY")&&window.opener.postMessage(JSON.stringify({task:"checkTagManager",tagManagerChecked:!0}),"https://app.rdstation.com.br")},t=function(){(function(e,t,n,a,o){var i=function(){e?RdstationPopup.init(t,n,e):RdstationPopup.init(t,n)},c=function(e,t){return e+"/js/rdstation-popups/"+t+"/rdstation-popup.min.js?v=1"},r=function(e){e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,i())}:e.onload=i},d=function(e,t){var n=document.createElement("script");return n.setAttribute("type","text/javascript"),n.setAttribute("src",c(e,t)),r(n),n},s=function(){return null!==document.querySelector("#landing-page-attributes")},u=function(){return s()&&null!==document.querySelector("body > .bricks--container")};if(!s()||u()){var l=d(a,o);document.body.appendChild(l)}})("UA-42101548-17","4b7bbfbbbe5c7e29f1c12ecb3b59096b","10224","https://d335luupugsy2.cloudfront.net","bricks");var e=document.createElement("script"),t=function(){RdIntegration.integrateAll("4b7bbfbbbe5c7e29f1c12ecb3b59096b"),console.log("FormIntegration; ver.1.3.3","initialized")};e.setAttribute("type","text/javascript"),e.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js?v=1"),e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()},document.body.appendChild(e)},u=function(){return"complete"===document.readyState};(function(e){function t(){i.onload=c,i.onreadystatechange=function(){"complete"===this.readyState&&c()},document.body.appendChild(i)}function n(){TrafficSourceCookie.init("__trf.src",".alura.com.br"),console.log("TrafficSourceCookie","initialized");try{s()}catch(e){console.error(e)}}function a(){r.onload=n,r.onreadystatechange=function(){"complete"===this.readyState&&n()},document.body.appendChild(r)}if(window.hasOwnProperty("RDStationTrackingCodeChecker")&&window.RDStationTrackingCodeChecker)return;if(window.RDStationTrackingCodeChecker=!0,-1!=navigator.userAgent.toLowerCase().indexOf("safari"))var o=setInterval(function d(){u()&&(clearInterval(o),e())},500);else u()?e():window.addEventListener("load",e);var i=document.createElement("script"),c=function(){LeadTracking.init({token:"4b7bbfbbbe5c7e29f1c12ecb3b59096b"}),console.log("LeadTracking","initialized")};i.setAttribute("type","text/javascript"),i.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/lead-tracking/stable/lead-tracking.min.js"),RDCookieControl.analytics.track?t():document.addEventListener(RDCookieControl.analytics.eventName,t);var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/traffic-source-cookie/stable/traffic-source-cookie.min.js"),RDCookieControl.analytics.track?a():document.addEventListener(RDCookieControl.analytics.eventName,a)})(e)}();