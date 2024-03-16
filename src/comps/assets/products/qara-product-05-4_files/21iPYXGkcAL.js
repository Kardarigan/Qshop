(function(d){var a=window.AmazonUIPageJS||window.P,g=a._namespace||a.attributeErrors,f=g?g("DetailPageValuePickDesktopAssets",""):a;f.guardFatal?f.guardFatal(d)(f,window):f.execute(function(){d(f,window)})})(function(d,a,g){d.when("jQuery","A","valuepick_constants").register("valuepick_amazonAPIClient",function(f,a,e){return a.createClass({init:function(c){this._baseUrl="https://"+c.endpoint+"/api/marketplaces/"+c.marketplaceId+"/";this._defaultHeaders={"Accept-Language":c.language,"x-api-csrf-token":c.csrfToken,
"x-cc-currency-of-preference":c.currency,"x-amzn-encrypted-slate-token":a.$('meta[name\x3d"encrypted-slate-token"]').prop("content")}},productV2:function(c){var e=["products",c.asin],a={Accept:'application/vnd.com.amazon.api+json; type\x3d"product/v2"; expand\x3d"'+c.subresources.join(",")+'"'},e=this._constructUrl(e,c.parameters),a=f.extend(this._defaultHeaders,a);this._get(c.success,c.error,c.always,e,a)},_get:function(c,a,k,b,h){f.ajax({url:b,type:"GET",headers:h,xhrFields:{withCredentials:!0},
timeout:e.AAPI_CLIENT_TIMEOUT}).done(function(b,a){c(b,a)}).fail(function(b,c,e){a(c,e)}).always(function(b,c){k(c)})},_constructUrl:function(c,a){a=a||{};a=f.map(a,function(a,b){return b.toString()+"\x3d"+a.toString()}).join("\x26");return this._baseUrl+c.join("/")+(0<a.length?"?"+a:"")}})});"use strict";d.when("jQuery","A","valuepick_constants","valuepick_metrics","valuepick_amazonAPIClient","valuepick_resourceHandler","ready").register("valuepick_ajaxManager",function(f,d,e,c,g,k){return{aapiRequest:function(){var b=
d.state(e.AJAX_PARAMS_STATE_KEY);"undefined"===typeof b&&(d.state.parse(),b=d.state(e.AJAX_PARAMS_STATE_KEY));if(b&&b.resources){var h=a.performance&&a.performance.now?a.performance.now():Date.now(),n=new g(b),f=b.resources.split(","),l=f.map(function(b){return e.INCLUSIONS[b]});n.productV2({asin:b.asin,subresources:l,parameters:[],success:function(b,a){c.updateCounter(e.METRICS.AAPI_AJAX_SUCCESS);f.forEach(function(c){k[c].success(b,a)})},error:function(b,a){c.updateCounter(e.METRICS.AAPI_AJAX_FAILURE);
f.forEach(function(c){k[c].error(b,a)})},always:function(b){var n=a.performance&&a.performance.now?a.performance.now():Date.now();c.updateLatency(e.AAPI_LATENCY,n-h);f.forEach(function(a){k[a].always(b)})}})}}}});"use strict";d.when("dp-latency-marker").register("valuepick_constants",function(){return{AJAX_PARAMS_STATE_KEY:"valuePickAjaxParams",UNSPECIFIED_REQUEST_STATUS:"unspecified",AAPI_CLIENT_TIMEOUT:6E3,INCLUSIONS:{businessDiscountsSummaryV1:"buyingOptions[].businessDiscountsSummary(product.business-discounts-summary/v1)",
deliveryV2:"buyingOptions[].delivery(product.delivery/v1)"},METRICS:{AAPI_AJAX_SUCCESS:"DesktopValuePick.AjaxSuccess",AAPI_AJAX_FAILURE:"DesktopValuePick.AjaxFailure",AAPI_LATENCY:"DesktopValuePick.AAPILatency",BUSINESS_DISCOUNTS_MESSAGE_SUCCESS:"DesktopValuePick.BusinessDiscountMessage.AjaxSuccess",BUSINESS_DISCOUNTS_MESSAGE_FAILURE:"DesktopValuePick.BusinessDiscountMessage.AjaxFailure",BUSINESS_DISCOUNTS_MESSAGE_EMPTY_RESPONSE:"DesktopValuePick.BusinessDiscountMessage.EmptyResponse",BUSINESS_DISCOUNTS_MESSAGE_PARSING_FAILURE:"DesktopValuePick.BusinessDiscountMessage.UnableToParse",
PRIME_BADGE_SUCCESS:"DesktopValuePick.PrimeBadge.AjaxSuccess",PRIME_BADGE_FAILURE:"DesktopValuePick.PrimeBadge.AjaxFailure",PRIME_BADGE_EMPTY_RESPONSE:"DesktopValuePick.PrimeBadge.EmptyResponse"},PRIME:{PRIME:"PRIME",PRIME_ONE_DAY:"PRIME_ONE_DAY",PRIME_SAME_DAY:"PRIME_SAME_DAY",PRIME_UPSELL_VARIANT:"PRIME_UPSELL",PRIME_VARIANT:"PRIME"}}});"use strict";d.when("dp-latency-marker").register("valuepick_metrics",function(){return{updateCounter:function(f){a.ue&&a.ue.count&&a.ue.count(f,(a.ue.count(f)||
0)+1)},updateLatency:function(f,d){a.ue&&a.ue.count&&a.ue.count(f,d)}}});"use strict";d.when("jQuery","A","valuepick_constants","valuepick_metrics").register("valuepick_resourceHandler",function(a,d,e,c){function p(b,a){a.forEach(function(a){a.strong?b.find("b").append(a.text):b.append(a.text)})}function k(a){var c=a.fragments;return c?(a=c.map(function(a){var b=a.semanticContent;return b&&b.content.text?{text:b.content.text,strong:b.strong||!1}:a.text?{text:a.text,strong:!1}:{text:"",strong:!1}}),
0<=a.map(function(a){return a.text}).indexOf("")?g:a):a.text?[{text:a.text,strong:!1}]:g}return{businessDiscountsSummaryV1:{success:function(b,h){if((b=b.entity.buyingOptions[0].businessDiscountsSummary)&&b.entity&&b.entity.featuredDiscountMessage){h=b.entity.featuredDiscountMessage;var d=h.label?h.label.content:g,m=h.message;if(d||m){var l=d?k(d):g;b=m?k(m):g;d&&!l||m&&!b?c.updateCounter(e.METRICS.BUSINESS_DISCOUNTS_MESSAGE_PARSING_FAILURE):(l&&(d=a(".value-pick-business-discount-label"),p(d,l),
"BADGE"===h.label.highlightingStyle&&d.addClass("value-pick-business-discounts-badge")),b&&(h=a(".value-pick-business-discount-message"),p(h,b)),a(".value-pick-business-discount-message-container").removeClass("aok-hidden"),c.updateCounter(e.METRICS.BUSINESS_DISCOUNTS_MESSAGE_SUCCESS))}else c.updateCounter(e.METRICS.BUSINESS_DISCOUNTS_MESSAGE_EMPTY_RESPONSE)}else c.updateCounter(e.METRICS.BUSINESS_DISCOUNTS_MESSAGE_EMPTY_RESPONSE)},error:function(a,d){c.updateCounter(e.METRICS.BUSINESS_DISCOUNTS_MESSAGE_FAILURE)},
always:function(b){a(".value-pick-business-discount-loading-bar").addClass("aok-hidden")}},deliveryV2:{success:function(a,d){if((a=a.entity.buyingOptions[0].delivery)&&a.entity&&a.entity.messageInstructions){d=!1;for(var f=0;f<a.entity.messageInstructions.length;f++){var g=a.entity.messageInstructions[f];if(g.type===e.PRIME.PRIME||g.type===e.PRIME.PRIME_ONE_DAY||g.type===e.PRIME.PRIME_SAME_DAY)d=!0;if(g.variant===e.PRIME.PRIME_UPSELL_VARIANT||g.variant===e.PRIME.PRIME_VARIANT)d=!0;if(d)break}d&&document.getElementById("value-pick-prime-badge-lazy-loading").classList.remove("aok-hidden");
c.updateCounter(e.METRICS.PRIME_BADGE_SUCCESS)}else c.updateCounter(e.METRICS.PRIME_BADGE_EMPTY_RESPONSE)},error:function(a,d){c.updateCounter(e.METRICS.PRIME_BADGE_FAILURE)},always:function(a){}}}})});