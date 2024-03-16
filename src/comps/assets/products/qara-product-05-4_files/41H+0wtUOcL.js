'use strict';mix_d("CustomerReviewsProductInsightsCards__cr-product-insights:cr-product-insights__3-pJLw-z","require exports tslib @c/scoped-dom @c/logger @c/metrics @c/browser-window @c/browser-operations".split(" "),function(S,G,f,v,T,U,V,W){function w(c){return c&&"object"===typeof c&&"default"in c?c:{"default":c}}function X(c){if(c&&c.__esModule)return c;var a=Object.create(null);c&&Object.keys(c).forEach(function(b){if("default"!==b){var d=Object.getOwnPropertyDescriptor(c,b);Object.defineProperty(a,
b,d.get?d:{enumerable:!0,get:function(){return c[b]}})}});a["default"]=c;return a}var k=w(v),Y=w(T),Z=w(V),aa=w(W),z={rendered:0,content:0,empty:0,"aspect-button-clicked":0,"aspect-button-dp-clicked":0,"aspect-button-bottomsheet-clicked":0,"snippet-clicked":0,"aspects-scrolled":0,"bottomsheet-closed":0},q=function(c){var a,b=null!==(a=z[c])&&void 0!==a?a:0;z[c]=b+1;U.count("cr-product-insights:dp:"+c,z[c])},H=function(c,a){if(c=k["default"].cardRoot.getElementsByClassName(c))for(var b=0;b<c.length;b++){var d=
c[b];d&&d.addEventListener("click",function(){q(a)})}},t=function(c,a){c&&c.addEventListener("click",function(){q(a)})},ba=function(c,a){var b=k["default"].cardRoot.getElementsByClassName(c),d=Array(b.length);if(b){c=function(g){d[g]=!1;var h=b[g];h&&h.addEventListener("scroll",function(){d[g]||(d[g]=!0,q(a))})};for(var e=0;e<b.length;e++)c(e)}},ca=function(){try{q("rendered");var c=k["default"].cardRoot.getElementsByClassName("_cr-product-insights_style_content-container__RTJWu");q(0===c.length?
"empty":"content");c&&(H("_cr-product-insights_style_aspect-button__1BFiu","aspect-button-clicked"),H("_cr-product-insights_style_snippet-see-more__3TMW7","snippet-clicked"),ba("_cr-product-insights_style_sentiment-aspects__1cN4k","aspects-scrolled"))}catch(a){}};v=function(){function c(){}c.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(a){throw Error("not implemented");})})};c.prototype.hide=function(){return f.__awaiter(this,void 0,
void 0,function(){return f.__generator(this,function(a){throw Error("not implemented");})})};c.prototype.updateContent=function(a){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){throw Error("not implemented");})})};return c}();var da=function(c){function a(b){var d=c.call(this)||this;b=d.getContentSelector(b.sentimentIndex);d.contentHTML=k["default"].cardRoot.querySelector("#"+b);return d}f.__extends(a,c);a.prototype.show=function(){return f.__awaiter(this,
void 0,void 0,function(){return f.__generator(this,function(b){this.contentHTML&&(this.contentHTML.style.display="block");return[2]})})};a.prototype.hide=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){this.contentHTML&&(this.contentHTML.style.display="none");return[2]})})};a.prototype.updateContent=function(b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(d){this.hideAllContentList();this.showCurrentSelectedAspect(k["default"].cardRoot,
b.aspectButtonsSize,b.aspectIndex,b.sentimentIndex);return[2]})})};a.prototype.getContentSelector=function(b){return"second-bottom-sheet-"+b};a.prototype.hideAllContentList=function(){k["default"].cardRoot.querySelectorAll("._cr-product-insights_style_insight-bottom-sheet-content__1KIl7").forEach(function(b){b.style.display="none"})};a.prototype.showCurrentSelectedAspect=function(b,d,e,g){if(b=b.querySelector("#aspect-bottom-sheet-"+g+"-"+e))b.style.display="block"};return a}(v),I=function(c){function a(b){var d=
c.call(this)||this;d.bottomSheetName=b.bottomSheetName;d.bottomSheetHTML=b.bottomSheetHTML;d.bottomSheet=b.bottomSheet;return d}f.__extends(a,c);a.build=function(b){return f.__awaiter(this,void 0,void 0,function(){var d,e,g,h;return f.__generator(this,function(l){switch(l.label){case 0:return[4,new Promise(function(r,p){S(["@c/aui-bottom-sheet"],function(n){r(X(n))},p)})];case 1:return d=l.sent().default,e=this.getBottomSheetName(b.sentimentIndex),g=k["default"].cardRoot.querySelector("#"+e),h=d.create(e,
"#"+e,{height:Z["default"].innerHeight*this.HEIGHT_PERCENTAGE}),h.on("afterHide",function(){h.render(function(r){a.hideAllBottomSheets(r,b.aspectBottomSheetCount,b.sentimentIndex)});q("bottomsheet-closed")}),[2,new a(f.__assign(f.__assign({},b),{bottomSheetName:e,bottomSheetHTML:g,bottomSheet:h}))]}})})};a.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){switch(b.label){case 0:return[4,this.bottomSheet.show()];case 1:return b.sent(),
[2]}})})};a.prototype.updateContent=function(b){return f.__awaiter(this,void 0,void 0,function(){var d=this;return f.__generator(this,function(e){switch(e.label){case 0:return[4,this.bottomSheet.render(function(g){return f.__awaiter(d,void 0,void 0,function(){return f.__generator(this,function(h){this.showOnlySelectedBottomSheet(g,b.aspectButtonsSize,b.aspectIndex,b.sentimentIndex);return[2]})})})];case 1:return e.sent(),[4,this.bottomSheet.show()];case 2:return e.sent(),[2]}})})};a.getBottomSheetName=
function(b){return"second-bottom-sheet-"+b};a.prototype.showOnlySelectedBottomSheet=function(b,d,e,g){for(var h=0;h<d;h++){var l=b.querySelector("#aspect-bottom-sheet-"+g+"-"+h);l&&(l.style.display=h===e?"block":"none")}};a.hideAllBottomSheets=function(b,d,e){for(var g=0;g<d;g++){var h=b.querySelector("#aspect-bottom-sheet-"+e+"-"+g);h&&(h.style.display="none")}};a.HEIGHT_PERCENTAGE=.85;return a}(v),u=function(c,a,b){var d=aa["default"].setup(),e=d.define;d=d.attach;e(a,"click",b);d(a,c)},A=function(c,
a){for(var b=0;b<a.length;b++){var d=a[b];d.classList.contains("_cr-product-insights_style_selected__2jTZU")&&d.classList.remove("_cr-product-insights_style_selected__2jTZU")}c.classList.add("_cr-product-insights_style_selected__2jTZU")},J=function(){function c(a){var b=a.sentimentHTML,d=a.aspectButtons,e=a.aspectButtonsInBottomSheet,g=a.updater;this.sentimentIndex=a.sentimentIndex;this.sentimentHTML=b;this.aspectButtons=d;this.aspectButtonsInBottomSheet=e;this.updater=g}c.build=function(a){var b=
a.sentimentIndex,d=a.sentimentHTML;return f.__awaiter(this,void 0,void 0,function(){var e,g,h;return f.__generator(this,function(l){switch(l.label){case 0:return e=this.getAspectButtons(d,b),g=this.getAspectButtonsInBottomSheet(b),[4,I.build({aspectBottomSheetCount:g.length,sentimentIndex:b})];case 1:return h=l.sent(),[2,new c({sentimentIndex:b,sentimentHTML:d,aspectButtons:e,aspectButtonsInBottomSheet:g,updater:h})]}})})};c.prototype.bind=function(){this.bindEventForButtonGroupInFirstPage();this.bindEventForButtonGroupInBottomSheet();
this.bindEventTracking()};c.getAspectButtonsInBottomSheet=function(a){a=k["default"].cardRoot.querySelector("#second-bottom-sheet-"+a);if(null==a)return[];a=a.querySelector("._cr-product-insights_style_insight-bottom-sheet-button-group__3u2Wk");return Array.from(a.querySelectorAll("._cr-product-insights_style_aspect-button__1BFiu"))};c.getAspectButtons=function(a,b){return(a=a.querySelector("#aspect-button-group-"+b))?Array.from(a.querySelectorAll("._cr-product-insights_style_aspect-button__1BFiu")):
[]};c.prototype.bindEventForButtonGroupInFirstPage=function(){var a=this;this.aspectButtons.forEach(function(b,d){u(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){var e;return f.__generator(this,function(g){switch(g.label){case 0:e=this.aspectButtonsInBottomSheet[d];if(!e)return[3,2];this.updateSelectedAspectButton(e,this.aspectButtonsInBottomSheet);return[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtonsInBottomSheet.length,aspectIndex:d,sentimentIndex:this.sentimentIndex})];
case 1:g.sent(),g.label=2;case 2:return e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),[2]}})})})})};c.prototype.bindEventForButtonGroupInBottomSheet=function(){var a=this;this.aspectButtonsInBottomSheet.forEach(function(b,d){u(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return this.updateSelectedAspectButton(b,this.aspectButtonsInBottomSheet),[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtonsInBottomSheet.length,
aspectIndex:d,sentimentIndex:this.sentimentIndex})];case 1:return e.sent(),[2]}})})})})};c.prototype.bindEventTracking=function(){this.aspectButtons.forEach(function(a){t(a,"aspect-button-dp-clicked")});this.aspectButtonsInBottomSheet.forEach(function(a){t(a,"aspect-button-bottomsheet-clicked")})};c.prototype.updateSelectedAspectButton=function(a,b){A(a,b)};return c}(),ea=function(){function c(a){var b=a.sentimentHTML,d=a.aspectButtons,e=a.updater,g=a.asin;this.sentimentIndex=a.sentimentIndex;this.sentimentHTML=
b;this.aspectButtons=d;this.updater=e;this.asin=g}c.build=function(a){var b=a.sentimentIndex,d=a.sentimentHTML,e=a.asin;return f.__awaiter(this,void 0,void 0,function(){var g,h;return f.__generator(this,function(l){g=this.getAspectButtons(d,b);h=new da({sentimentIndex:b});return[2,new c({sentimentIndex:b,sentimentHTML:d,aspectButtons:g,asin:e,updater:h})]})})};c.prototype.bind=function(){var a=this;this.aspectButtons.forEach(function(b,d){u(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,
function(e){switch(e.label){case 0:return[4,this.onClick(b,d)];case 1:return e.sent(),[2]}})})});a.fetchPreviousStateOfButton(d,b)});this.bindEventTracking();this.bindEventSeeMoreButtons()};c.prototype.bindEventSeeMoreButtons=function(){var a=this;k["default"].cardRoot.querySelectorAll("._cr-product-insights_style_snippet-see-more__3TMW7").forEach(function(b){b.addEventListener("click",function(){a.seeMoreStateToSessionStorage()})})};c.prototype.onClick=function(a,b){return f.__awaiter(this,void 0,
void 0,function(){return f.__generator(this,function(d){switch(d.label){case 0:if(!a.classList.contains("_cr-product-insights_style_selected__2jTZU"))return[3,2];a.classList.remove("_cr-product-insights_style_selected__2jTZU");return[4,this.updater.hide()];case 1:return d.sent(),this.resetStateInSessionStorage(),[3,5];case 2:return this.updateSelectedAspectButton(a),[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtons.length,aspectIndex:b,sentimentIndex:this.sentimentIndex})];case 3:return d.sent(),
[4,this.updater.show()];case 4:d.sent(),this.saveStateToSessionStorage(b,this.sentimentIndex),d.label=5;case 5:return[2]}})})};c.prototype.fetchPreviousStateOfButton=function(a,b){this.isSelectedAspect(a)&&(this.updater.updateContent({aspectButtonsSize:this.aspectButtons.length,aspectIndex:a,sentimentIndex:this.sentimentIndex}),this.updateSelectedAspectButton(b))};c.getAspectButtonsInBottomSheet=function(a){return a.querySelector("._cr-product-insights_style_insight-bottom-sheet-button-group__3u2Wk").querySelectorAll("._cr-product-insights_style_aspect-button__1BFiu")};
c.getAspectButtons=function(a,b){return(a=a.querySelector("#aspect-button-group-"+b))?Array.from(a.querySelectorAll("._cr-product-insights_style_aspect-button__1BFiu")):[]};c.prototype.resetAllAspectButtons=function(){var a=k["default"].cardRoot.querySelectorAll("._cr-product-insights_style_aspect-button__1BFiu");a=Array.from(a);for(var b=0;b<a.length;b++){var d=a[b];d.classList.contains("_cr-product-insights_style_selected__2jTZU")&&d.classList.remove("_cr-product-insights_style_selected__2jTZU")}};
c.prototype.bindEventTracking=function(){this.aspectButtons.forEach(function(a){t(a,"aspect-button-dp-clicked")})};c.prototype.updateSelectedAspectButton=function(a){this.resetAllAspectButtons();A(a,this.aspectButtons)};c.prototype.saveStateToSessionStorage=function(a,b){sessionStorage.setItem("productInsights",JSON.stringify({selectedAspectId:a,selectedSentimentId:b,currentAsin:this.asin}))};c.prototype.seeMoreStateToSessionStorage=function(){sessionStorage.setItem("productInsightsSeeMoreClick",
JSON.stringify({isClick:!0,asin:this.asin}))};c.prototype.resetStateInSessionStorage=function(){sessionStorage.removeItem("productInsights")};c.prototype.isSelectedAspect=function(a){var b=sessionStorage.getItem("productInsights");if(null==b)return!1;var d=JSON.parse(b);b=d.selectedAspectId;var e=d.selectedSentimentId;d=d.currentAsin;return null===b||null===e||null===d?!1:d===this.asin&&parseInt(b)===a&&parseInt(e)===this.sentimentIndex};return c}(),fa=function(){function c(a){var b=a.aspectBottomSheetButtons,
d=a.updater,e=a.sentimentIndex;this.aspectLinks=a.aspectLinks;this.aspectBottomSheetButtons=b;this.updater=d;this.sentimentIndex=e}c.build=function(a){var b=a.aspectLinks,d=a.aspectBottomSheetButtons,e=a.sentimentIndex;return f.__awaiter(this,void 0,void 0,function(){var g;return f.__generator(this,function(h){switch(h.label){case 0:return[4,I.build({aspectBottomSheetCount:d.length,sentimentIndex:e})];case 1:return g=h.sent(),[2,new c({aspectLinks:b,aspectBottomSheetButtons:d,updater:g,sentimentIndex:e})]}})})};
c.prototype.bindEventForLinksInFirstPage=function(){var a=this;this.aspectLinks.forEach(function(b){var d=b.id.split("-")[3],e=a.aspectBottomSheetButtons[d];u(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(g){switch(g.label){case 0:return this.updateSelectedAspectButton(e,this.aspectBottomSheetButtons),[4,this.updater.updateContent({aspectButtonsSize:this.aspectBottomSheetButtons.length,aspectIndex:+d,sentimentIndex:this.sentimentIndex})];case 1:return g.sent(),
e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),[2]}})})})})};c.prototype.bindEventForButtonGroupInBottomSheet=function(){var a=this;this.aspectBottomSheetButtons.forEach(function(b,d){u(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return this.updateSelectedAspectButton(b,this.aspectBottomSheetButtons),[4,this.updater.updateContent({aspectButtonsSize:this.aspectBottomSheetButtons.length,aspectIndex:d,
sentimentIndex:this.sentimentIndex})];case 1:return e.sent(),[2]}})})})})};c.prototype.bind=function(){this.bindEventForLinksInFirstPage();this.bindEventForButtonGroupInBottomSheet();this.bindEventTracking()};c.prototype.bindEventTracking=function(){this.aspectLinks.forEach(function(a){t(a,"aspect-link-dp-clicked")});this.aspectBottomSheetButtons.forEach(function(a){t(a,"aspect-button-bottomsheet-clicked")})};c.prototype.updateSelectedAspectButton=function(a,b){A(a,b)};return c}(),ha=function(c){var a=
sessionStorage.getItem("productInsightsSeeMoreClick");if(null==a)c=!1;else{a=JSON.parse(a);var b=a.isClick;c=a.asin===c&&!!b}c&&(c=k["default"].cardRoot.querySelectorAll("._cr-product-insights_style_content-container__RTJWu"),0<c.length&&(c[0].scrollIntoView({block:"center",inline:"center"}),sessionStorage.removeItem("productInsightsSeeMoreClick")))},ia=function(c){var a=new Map;c.forEach(function(b){var d=+b.id.split("-")[2];a.has(d)||a.set(d,[]);a.get(d).push(b)});return a};G._operationNames=[];
G.card=function(){return f.__awaiter(void 0,void 0,void 0,function(){var c,a,b,d,e,g,h,l,r,p,n,B,C,K,L,M,N,O,D,P,E,F;return f.__generator(this,function(m){switch(m.label){case 0:m.trys.push([0,9,,10]);c=k["default"].cardRoot.getElementsByClassName("_cr-product-insights_style_bottom-sheet-wrapper__3w1tU")[0];a=0<k["default"].cardRoot.getElementsByClassName("_cr-product-insights_style_is-desktop-view__2JQOI").length;b=function(){return k["default"].cardRoot.getElementsByClassName("_cr-product-insights_style_content-container__RTJWu")[0]};
d=a?null!==(F=null===(E=b())||void 0===E?void 0:E.dataset.asin)&&void 0!==F?F:"":"";if(!c)return[3,8];e=k["default"].cardRoot.querySelectorAll("._cr-product-insights_style_sentiment-section__6zKPq");e.forEach(function(Q,R){return f.__awaiter(void 0,void 0,void 0,function(){var x;return f.__generator(this,function(y){switch(y.label){case 0:return a?[4,ea.build({sentimentHTML:Q,sentimentIndex:R,asin:d})]:[3,2];case 1:return x=y.sent(),x.bind(),[3,4];case 2:return[4,J.build({sentimentHTML:Q,sentimentIndex:R})];
case 3:x=y.sent(),x.bind(),y.label=4;case 4:return[2]}})})});g=k["default"].cardRoot.querySelectorAll("#product-summary");h=0<g.length;if(!h)return[3,8];l=k["default"].cardRoot.querySelectorAll("._cr-product-insights_style_aspect-summary-link__dEy4S");r=ia(l);m.label=1;case 1:m.trys.push([1,6,7,8]),p=f.__values(r),n=p.next(),m.label=2;case 2:if(n.done)return[3,5];B=f.__read(n.value,2);C=B[0];K=B[1];L=J.getAspectButtonsInBottomSheet(C);return[4,fa.build({aspectLinks:K,aspectBottomSheetButtons:L,sentimentIndex:C})];
case 3:M=m.sent(),M.bind(),m.label=4;case 4:return n=p.next(),[3,2];case 5:return[3,8];case 6:return N=m.sent(),D={error:N},[3,8];case 7:try{n&&!n.done&&(P=p.return)&&P.call(p)}finally{if(D)throw D.error;}return[7];case 8:return a&&ha(d),ca(),[3,10];case 9:return O=m.sent(),Y["default"].log("Product Insight: Error:"+O.message,"ERROR"),[3,10];case 10:return[2]}})})}});