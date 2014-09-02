/*
 * vamonos.js - the Vamonos algorithm visualization library
 *
 * Copyright 2012-2014 Mike Rosulek & the Vamonos project team
 * http://rosulek.github.io/vamonos
 *
 * Licenced under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 2.0.0
 * Released: 2014-04-08
 *
 * This file includes dependencies:
 *
 *      jQuery          2.0.3
 *      jQuery UI       1.10.3
 *      jQuery.qtip     1.0.0-rc3
 *      jsPlumb         1.5.5
 *      d3              3.4.5
 *
 */
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/*! jQuery UI - v1.10.3 - 2013-07-24
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.slider.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);/*
 * jquery.qtip. The jQuery tooltip plugin
 *
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : February 2009
 * Version : 1.0.0-rc3
 * Released: Tuesday 12th May, 2009 - 00:00
 * Debug: jquery.qtip.debug.js
 */

// this stuff added for backwards-support for jQuery.browser:
// see http://stackoverflow.com/questions/9638247/is-jquery-browser-deprecated

// Limit scope pollution from any deprecated API
(function() {

    var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

// Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;

    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                context = jQuerySub( context );
            }

            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };

})();



(function(f){f.fn.qtip=function(B,u){var y,t,A,s,x,w,v,z;if(typeof B=="string"){if(typeof f(this).data("qtip")!=="object"){f.fn.qtip.log.error.call(self,1,f.fn.qtip.constants.NO_TOOLTIP_PRESENT,false)}if(B=="api"){return f(this).data("qtip").interfaces[f(this).data("qtip").current]}else{if(B=="interfaces"){return f(this).data("qtip").interfaces}}}else{if(!B){B={}}if(typeof B.content!=="object"||(B.content.jquery&&B.content.length>0)){B.content={text:B.content}}if(typeof B.content.title!=="object"){B.content.title={text:B.content.title}}if(typeof B.position!=="object"){B.position={corner:B.position}}if(typeof B.position.corner!=="object"){B.position.corner={target:B.position.corner,tooltip:B.position.corner}}if(typeof B.show!=="object"){B.show={when:B.show}}if(typeof B.show.when!=="object"){B.show.when={event:B.show.when}}if(typeof B.show.effect!=="object"){B.show.effect={type:B.show.effect}}if(typeof B.hide!=="object"){B.hide={when:B.hide}}if(typeof B.hide.when!=="object"){B.hide.when={event:B.hide.when}}if(typeof B.hide.effect!=="object"){B.hide.effect={type:B.hide.effect}}if(typeof B.style!=="object"){B.style={name:B.style}}B.style=c(B.style);s=f.extend(true,{},f.fn.qtip.defaults,B);s.style=a.call({options:s},s.style);s.user=f.extend(true,{},B)}return f(this).each(function(){if(typeof B=="string"){w=B.toLowerCase();A=f(this).qtip("interfaces");if(typeof A=="object"){if(u===true&&w=="destroy"){while(A.length>0){A[A.length-1].destroy()}}else{if(u!==true){A=[f(this).qtip("api")]}for(y=0;y<A.length;y++){if(w=="destroy"){A[y].destroy()}else{if(A[y].status.rendered===true){if(w=="show"){A[y].show()}else{if(w=="hide"){A[y].hide()}else{if(w=="focus"){A[y].focus()}else{if(w=="disable"){A[y].disable(true)}else{if(w=="enable"){A[y].disable(false)}}}}}}}}}}}else{v=f.extend(true,{},s);v.hide.effect.length=s.hide.effect.length;v.show.effect.length=s.show.effect.length;if(v.position.container===false){v.position.container=f(document.body)}if(v.position.target===false){v.position.target=f(this)}if(v.show.when.target===false){v.show.when.target=f(this)}if(v.hide.when.target===false){v.hide.when.target=f(this)}t=f.fn.qtip.interfaces.length;for(y=0;y<t;y++){if(typeof f.fn.qtip.interfaces[y]=="undefined"){t=y;break}}x=new d(f(this),v,t);f.fn.qtip.interfaces[t]=x;if(typeof f(this).data("qtip")=="object"){if(typeof f(this).attr("qtip")==="undefined"){f(this).data("qtip").current=f(this).data("qtip").interfaces.length}f(this).data("qtip").interfaces.push(x)}else{f(this).data("qtip",{current:0,interfaces:[x]})}if(v.content.prerender===false&&v.show.when.event!==false&&v.show.ready!==true){v.show.when.target.bind(v.show.when.event+".qtip-"+t+"-create",{qtip:t},function(C){z=f.fn.qtip.interfaces[C.data.qtip];z.options.show.when.target.unbind(z.options.show.when.event+".qtip-"+C.data.qtip+"-create");z.cache.mouse={x:C.pageX,y:C.pageY};p.call(z);z.options.show.when.target.trigger(z.options.show.when.event)})}else{x.cache.mouse={x:v.show.when.target.offset().left,y:v.show.when.target.offset().top};p.call(x)}}})};function d(u,t,v){var s=this;s.id=v;s.options=t;s.status={animated:false,rendered:false,disabled:false,focused:false};s.elements={target:u.addClass(s.options.style.classes.target),tooltip:null,wrapper:null,content:null,contentWrapper:null,title:null,button:null,tip:null,bgiframe:null};s.cache={mouse:{},position:{},toggle:0};s.timers={};f.extend(s,s.options.api,{show:function(y){var x,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"show")}if(s.elements.tooltip.css("display")!=="none"){return s}s.elements.tooltip.stop(true,false);x=s.beforeShow.call(s,y);if(x===false){return s}function w(){if(s.options.position.type!=="static"){s.focus()}s.onShow.call(s,y);if(f.browser.msie){s.elements.tooltip.get(0).style.removeAttribute("filter")}}s.cache.toggle=1;if(s.options.position.type!=="static"){s.updatePosition(y,(s.options.show.effect.length>0))}if(typeof s.options.show.solo=="object"){z=f(s.options.show.solo)}else{if(s.options.show.solo===true){z=f("div.qtip").not(s.elements.tooltip)}}if(z){z.each(function(){if(f(this).qtip("api").status.rendered===true){f(this).qtip("api").hide()}})}if(typeof s.options.show.effect.type=="function"){s.options.show.effect.type.call(s.elements.tooltip,s.options.show.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.show.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeIn(s.options.show.effect.length,w);break;case"slide":s.elements.tooltip.slideDown(s.options.show.effect.length,function(){w();if(s.options.position.type!=="static"){s.updatePosition(y,true)}});break;case"grow":s.elements.tooltip.show(s.options.show.effect.length,w);break;default:s.elements.tooltip.show(null,w);break}s.elements.tooltip.addClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_SHOWN,"show")},hide:function(y){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"hide")}else{if(s.elements.tooltip.css("display")==="none"){return s}}clearTimeout(s.timers.show);s.elements.tooltip.stop(true,false);x=s.beforeHide.call(s,y);if(x===false){return s}function w(){s.onHide.call(s,y)}s.cache.toggle=0;if(typeof s.options.hide.effect.type=="function"){s.options.hide.effect.type.call(s.elements.tooltip,s.options.hide.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.hide.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeOut(s.options.hide.effect.length,w);break;case"slide":s.elements.tooltip.slideUp(s.options.hide.effect.length,w);break;case"grow":s.elements.tooltip.hide(s.options.hide.effect.length,w);break;default:s.elements.tooltip.hide(null,w);break}s.elements.tooltip.removeClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_HIDDEN,"hide")},updatePosition:function(w,x){var C,G,L,J,H,E,y,I,B,D,K,A,F,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updatePosition")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_POSITION_STATIC,"updatePosition")}}G={position:{left:0,top:0},dimensions:{height:0,width:0},corner:s.options.position.corner.target};L={position:s.getPosition(),dimensions:s.getDimensions(),corner:s.options.position.corner.tooltip};if(s.options.position.target!=="mouse"){if(s.options.position.target.get(0).nodeName.toLowerCase()=="area"){J=s.options.position.target.attr("coords").split(",");for(C=0;C<J.length;C++){J[C]=parseInt(J[C])}H=s.options.position.target.parent("map").attr("name");E=f('img[usemap="#'+H+'"]:first').offset();G.position={left:Math.floor(E.left+J[0]),top:Math.floor(E.top+J[1])};switch(s.options.position.target.attr("shape").toLowerCase()){case"rect":G.dimensions={width:Math.ceil(Math.abs(J[2]-J[0])),height:Math.ceil(Math.abs(J[3]-J[1]))};break;case"circle":G.dimensions={width:J[2]+1,height:J[2]+1};break;case"poly":G.dimensions={width:J[0],height:J[1]};for(C=0;C<J.length;C++){if(C%2==0){if(J[C]>G.dimensions.width){G.dimensions.width=J[C]}if(J[C]<J[0]){G.position.left=Math.floor(E.left+J[C])}}else{if(J[C]>G.dimensions.height){G.dimensions.height=J[C]}if(J[C]<J[1]){G.position.top=Math.floor(E.top+J[C])}}}G.dimensions.width=G.dimensions.width-(G.position.left-E.left);G.dimensions.height=G.dimensions.height-(G.position.top-E.top);break;default:return f.fn.qtip.log.error.call(s,4,f.fn.qtip.constants.INVALID_AREA_SHAPE,"updatePosition");break}G.dimensions.width-=2;G.dimensions.height-=2}else{if(s.options.position.target.add(document.body).length===1){G.position={left:f(document).scrollLeft(),top:f(document).scrollTop()};G.dimensions={height:f(window).height(),width:f(window).width()}}else{if(typeof s.options.position.target.attr("qtip")!=="undefined"){G.position=s.options.position.target.qtip("api").cache.position}else{G.position=s.options.position.target.offset()}G.dimensions={height:s.options.position.target.outerHeight(),width:s.options.position.target.outerWidth()}}}y=f.extend({},G.position);if(G.corner.search(/right/i)!==-1){y.left+=G.dimensions.width}if(G.corner.search(/bottom/i)!==-1){y.top+=G.dimensions.height}if(G.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left+=(G.dimensions.width/2)}if(G.corner.search(/((left|right)Middle)|center/)!==-1){y.top+=(G.dimensions.height/2)}}else{G.position=y={left:s.cache.mouse.x,top:s.cache.mouse.y};G.dimensions={height:1,width:1}}if(L.corner.search(/right/i)!==-1){y.left-=L.dimensions.width}if(L.corner.search(/bottom/i)!==-1){y.top-=L.dimensions.height}if(L.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left-=(L.dimensions.width/2)}if(L.corner.search(/((left|right)Middle)|center/)!==-1){y.top-=(L.dimensions.height/2)}I=(f.browser.msie)?1:0;B=(f.browser.msie&&parseInt(f.browser.version.charAt(0))===6)?1:0;if(s.options.style.border.radius>0){if(L.corner.search(/Left/)!==-1){y.left-=s.options.style.border.radius}else{if(L.corner.search(/Right/)!==-1){y.left+=s.options.style.border.radius}}if(L.corner.search(/Top/)!==-1){y.top-=s.options.style.border.radius}else{if(L.corner.search(/Bottom/)!==-1){y.top+=s.options.style.border.radius}}}if(I){if(L.corner.search(/top/)!==-1){y.top-=I}else{if(L.corner.search(/bottom/)!==-1){y.top+=I}}if(L.corner.search(/left/)!==-1){y.left-=I}else{if(L.corner.search(/right/)!==-1){y.left+=I}}if(L.corner.search(/leftMiddle|rightMiddle/)!==-1){y.top-=1}}if(s.options.position.adjust.screen===true){y=o.call(s,y,G,L)}if(s.options.position.target==="mouse"&&s.options.position.adjust.mouse===true){if(s.options.position.adjust.screen===true&&s.elements.tip){K=s.elements.tip.attr("rel")}else{K=s.options.position.corner.tooltip}y.left+=(K.search(/right/i)!==-1)?-6:6;y.top+=(K.search(/bottom/i)!==-1)?-6:6}if(!s.elements.bgiframe&&f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){f("select, object").each(function(){A=f(this).offset();A.bottom=A.top+f(this).height();A.right=A.left+f(this).width();if(y.top+L.dimensions.height>=A.top&&y.left+L.dimensions.width>=A.left){k.call(s)}})}y.left+=s.options.position.adjust.x;y.top+=s.options.position.adjust.y;F=s.getPosition();if(y.left!=F.left||y.top!=F.top){z=s.beforePositionUpdate.call(s,w);if(z===false){return s}s.cache.position=y;if(x===true){s.status.animated=true;s.elements.tooltip.animate(y,200,"swing",function(){s.status.animated=false})}else{s.elements.tooltip.css(y)}s.onPositionUpdate.call(s,w);if(typeof w!=="undefined"&&w.type&&w.type!=="mousemove"){f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_POSITION_UPDATED,"updatePosition")}}return s},updateWidth:function(w){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateWidth")}else{if(w&&typeof w!=="number"){return f.fn.qtip.log.error.call(s,2,"newWidth must be of type number","updateWidth")}}x=s.elements.contentWrapper.siblings().add(s.elements.tip).add(s.elements.button);if(!w){if(typeof s.options.style.width.value=="number"){w=s.options.style.width.value}else{s.elements.tooltip.css({width:"auto"});x.hide();if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"normal"})}w=s.getDimensions().width+1;if(!s.options.style.width.value){if(w>s.options.style.width.max){w=s.options.style.width.max}if(w<s.options.style.width.min){w=s.options.style.width.min}}}}if(w%2!==0){w-=1}s.elements.tooltip.width(w);x.show();if(s.options.style.border.radius){s.elements.tooltip.find(".qtip-betweenCorners").each(function(y){f(this).width(w-(s.options.style.border.radius*2))})}if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"1"});s.elements.wrapper.width(w);if(s.elements.bgiframe){s.elements.bgiframe.width(w).height(s.getDimensions.height)}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_WIDTH_UPDATED,"updateWidth")},updateStyle:function(w){var z,A,x,y,B;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateStyle")}else{if(typeof w!=="string"||!f.fn.qtip.styles[w]){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.STYLE_NOT_DEFINED,"updateStyle")}}s.options.style=a.call(s,f.fn.qtip.styles[w],s.options.user.style);s.elements.content.css(q(s.options.style));if(s.options.content.title.text!==false){s.elements.title.css(q(s.options.style.title,true))}s.elements.contentWrapper.css({borderColor:s.options.style.border.color});if(s.options.style.tip.corner!==false){if(f("<canvas>").get(0).getContext){z=s.elements.tooltip.find(".qtip-tip canvas:first");x=z.get(0).getContext("2d");x.clearRect(0,0,300,300);y=z.parent("div[rel]:first").attr("rel");B=b(y,s.options.style.tip.size.width,s.options.style.tip.size.height);h.call(s,z,B,s.options.style.tip.color||s.options.style.border.color)}else{if(f.browser.msie){z=s.elements.tooltip.find('.qtip-tip [nodeName="shape"]');z.attr("fillcolor",s.options.style.tip.color||s.options.style.border.color)}}}if(s.options.style.border.radius>0){s.elements.tooltip.find(".qtip-betweenCorners").css({backgroundColor:s.options.style.border.color});if(f("<canvas>").get(0).getContext){A=g(s.options.style.border.radius);s.elements.tooltip.find(".qtip-wrapper canvas").each(function(){x=f(this).get(0).getContext("2d");x.clearRect(0,0,300,300);y=f(this).parent("div[rel]:first").attr("rel");r.call(s,f(this),A[y],s.options.style.border.radius,s.options.style.border.color)})}else{if(f.browser.msie){s.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function(){f(this).attr("fillcolor",s.options.style.border.color)})}}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_STYLE_UPDATED,"updateStyle")},updateContent:function(A,y){var z,x,w;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateContent")}else{if(!A){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateContent")}}z=s.beforeContentUpdate.call(s,A);if(typeof z=="string"){A=z}else{if(z===false){return}}if(f.browser.msie){s.elements.contentWrapper.children().css({zoom:"normal"})}if(A.jquery&&A.length>0){A.clone(true).appendTo(s.elements.content).show()}else{s.elements.content.html(A)}x=s.elements.content.find("img[complete=false]");if(x.length>0){w=0;x.each(function(C){f('<img src="'+f(this).attr("src")+'" />').load(function(){if(++w==x.length){B()}})})}else{B()}function B(){s.updateWidth();if(y!==false){if(s.options.position.type!=="static"){s.updatePosition(s.elements.tooltip.is(":visible"),true)}if(s.options.style.tip.corner!==false){n.call(s)}}}s.onContentUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_UPDATED,"loadContent")},loadContent:function(w,z,A){var y;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"loadContent")}y=s.beforeContentLoad.call(s);if(y===false){return s}if(A=="post"){f.post(w,z,x)}else{f.get(w,z,x)}function x(B){s.onContentLoad.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_LOADED,"loadContent");s.updateContent(B)}return s},updateTitle:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateTitle")}else{if(!w){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateTitle")}}returned=s.beforeTitleUpdate.call(s);if(returned===false){return s}if(s.elements.button){s.elements.button=s.elements.button.clone(true)}s.elements.title.html(w);if(s.elements.button){s.elements.title.prepend(s.elements.button)}s.onTitleUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_TITLE_UPDATED,"updateTitle")},focus:function(A){var y,x,w,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"focus")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_FOCUS_STATIC,"focus")}}y=parseInt(s.elements.tooltip.css("z-index"));x=6000+f("div.qtip[qtip]").length-1;if(!s.status.focused&&y!==x){z=s.beforeFocus.call(s,A);if(z===false){return s}f("div.qtip[qtip]").not(s.elements.tooltip).each(function(){if(f(this).qtip("api").status.rendered===true){w=parseInt(f(this).css("z-index"));if(typeof w=="number"&&w>-1){f(this).css({zIndex:parseInt(f(this).css("z-index"))-1})}f(this).qtip("api").status.focused=false}});s.elements.tooltip.css({zIndex:x});s.status.focused=true;s.onFocus.call(s,A);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_FOCUSED,"focus")}return s},disable:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"disable")}if(w){if(!s.status.disabled){s.status.disabled=true;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DISABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,"disable")}}else{if(s.status.disabled){s.status.disabled=false;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_ENABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,"disable")}}return s},destroy:function(){var w,x,y;x=s.beforeDestroy.call(s);if(x===false){return s}if(s.status.rendered){s.options.show.when.target.unbind("mousemove.qtip",s.updatePosition);s.options.show.when.target.unbind("mouseout.qtip",s.hide);s.options.show.when.target.unbind(s.options.show.when.event+".qtip");s.options.hide.when.target.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind("mouseover.qtip",s.focus);s.elements.tooltip.remove()}else{s.options.show.when.target.unbind(s.options.show.when.event+".qtip-create")}if(typeof s.elements.target.data("qtip")=="object"){y=s.elements.target.data("qtip").interfaces;if(typeof y=="object"&&y.length>0){for(w=0;w<y.length-1;w++){if(y[w].id==s.id){y.splice(w,1)}}}}delete f.fn.qtip.interfaces[s.id];if(typeof y=="object"&&y.length>0){s.elements.target.data("qtip").current=y.length-1}else{s.elements.target.removeData("qtip")}s.onDestroy.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DESTROYED,"destroy");return s.elements.target},getPosition:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getPosition")}w=(s.elements.tooltip.css("display")!=="none")?false:true;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x=s.elements.tooltip.offset();if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x},getDimensions:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getDimensions")}w=(!s.elements.tooltip.is(":visible"))?true:false;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x={height:s.elements.tooltip.outerHeight(),width:s.elements.tooltip.outerWidth()};if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x}})}function p(){var s,w,u,t,v,y,x;s=this;s.beforeRender.call(s);s.status.rendered=true;s.elements.tooltip='<div qtip="'+s.id+'" class="qtip '+(s.options.style.classes.tooltip||s.options.style)+'"style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;position:'+s.options.position.type+';">  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">    <div class="qtip-contentWrapper" style="overflow:hidden;">       <div class="qtip-content '+s.options.style.classes.content+'"></div></div></div></div>';s.elements.tooltip=f(s.elements.tooltip);s.elements.tooltip.appendTo(s.options.position.container);s.elements.tooltip.data("qtip",{current:0,interfaces:[s]});s.elements.wrapper=s.elements.tooltip.children("div:first");s.elements.contentWrapper=s.elements.wrapper.children("div:first").css({background:s.options.style.background});s.elements.content=s.elements.contentWrapper.children("div:first").css(q(s.options.style));if(f.browser.msie){s.elements.wrapper.add(s.elements.content).css({zoom:1})}if(s.options.hide.when.event=="unfocus"){s.elements.tooltip.attr("unfocus",true)}if(typeof s.options.style.width.value=="number"){s.updateWidth()}if(f("<canvas>").get(0).getContext||f.browser.msie){if(s.options.style.border.radius>0){m.call(s)}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color})}if(s.options.style.tip.corner!==false){e.call(s)}}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color});s.options.style.border.radius=0;s.options.style.tip.corner=false;f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,"render")}if((typeof s.options.content.text=="string"&&s.options.content.text.length>0)||(s.options.content.text.jquery&&s.options.content.text.length>0)){u=s.options.content.text}else{if(typeof s.elements.target.attr("title")=="string"&&s.elements.target.attr("title").length>0){u=s.elements.target.attr("title").replace("\\n","<br />");s.elements.target.attr("title","")}else{if(typeof s.elements.target.attr("alt")=="string"&&s.elements.target.attr("alt").length>0){u=s.elements.target.attr("alt").replace("\\n","<br />");s.elements.target.attr("alt","")}else{u=" ";f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.NO_VALID_CONTENT,"render")}}}if(s.options.content.title.text!==false){j.call(s)}s.updateContent(u);l.call(s);if(s.options.show.ready===true){s.show()}if(s.options.content.url!==false){t=s.options.content.url;v=s.options.content.data;y=s.options.content.method||"get";s.loadContent(t,v,y)}s.onRender.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_RENDERED,"render")}function m(){var F,z,t,B,x,E,u,G,D,y,w,C,A,s,v;F=this;F.elements.wrapper.find(".qtip-borderBottom, .qtip-borderTop").remove();t=F.options.style.border.width;B=F.options.style.border.radius;x=F.options.style.border.color||F.options.style.tip.color;E=g(B);u={};for(z in E){u[z]='<div rel="'+z+'" style="'+((z.search(/Left/)!==-1)?"left":"right")+":0; position:absolute; height:"+B+"px; width:"+B+'px; overflow:hidden; line-height:0.1px; font-size:1px">';if(f("<canvas>").get(0).getContext){u[z]+='<canvas height="'+B+'" width="'+B+'" style="vertical-align: top"></canvas>'}else{if(f.browser.msie){G=B*2+3;u[z]+='<v:arc stroked="false" fillcolor="'+x+'" startangle="'+E[z][0]+'" endangle="'+E[z][1]+'" style="width:'+G+"px; height:"+G+"px; margin-top:"+((z.search(/bottom/)!==-1)?-2:-1)+"px; margin-left:"+((z.search(/Right/)!==-1)?E[z][2]-3.5:-1)+'px; vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>'}}u[z]+="</div>"}D=F.getDimensions().width-(Math.max(t,B)*2);y='<div class="qtip-betweenCorners" style="height:'+B+"px; width:"+D+"px; overflow:hidden; background-color:"+x+'; line-height:0.1px; font-size:1px;">';w='<div class="qtip-borderTop" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.topLeft+u.topRight+y;F.elements.wrapper.prepend(w);C='<div class="qtip-borderBottom" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.bottomLeft+u.bottomRight+y;F.elements.wrapper.append(C);if(f("<canvas>").get(0).getContext){F.elements.wrapper.find("canvas").each(function(){A=E[f(this).parent("[rel]:first").attr("rel")];r.call(F,f(this),A,B,x)})}else{if(f.browser.msie){F.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>')}}s=Math.max(B,(B+(t-B)));v=Math.max(t-B,0);F.elements.contentWrapper.css({border:"0px solid "+x,borderWidth:v+"px "+s+"px"})}function r(u,w,s,t){var v=u.get(0).getContext("2d");v.fillStyle=t;v.beginPath();v.arc(w[0],w[1],s,0,Math.PI*2,false);v.fill()}function e(v){var t,s,x,u,w;t=this;if(t.elements.tip!==null){t.elements.tip.remove()}s=t.options.style.tip.color||t.options.style.border.color;if(t.options.style.tip.corner===false){return}else{if(!v){v=t.options.style.tip.corner}}x=b(v,t.options.style.tip.size.width,t.options.style.tip.size.height);t.elements.tip='<div class="'+t.options.style.classes.tip+'" dir="ltr" rel="'+v+'" style="position:absolute; height:'+t.options.style.tip.size.height+"px; width:"+t.options.style.tip.size.width+'px; margin:0 auto; line-height:0.1px; font-size:1px;">';if(f("<canvas>").get(0).getContext){t.elements.tip+='<canvas height="'+t.options.style.tip.size.height+'" width="'+t.options.style.tip.size.width+'"></canvas>'}else{if(f.browser.msie){u=t.options.style.tip.size.width+","+t.options.style.tip.size.height;w="m"+x[0][0]+","+x[0][1];w+=" l"+x[1][0]+","+x[1][1];w+=" "+x[2][0]+","+x[2][1];w+=" xe";t.elements.tip+='<v:shape fillcolor="'+s+'" stroked="false" filled="true" path="'+w+'" coordsize="'+u+'" style="width:'+t.options.style.tip.size.width+"px; height:"+t.options.style.tip.size.height+"px; line-height:0.1px; display:inline-block; behavior:url(#default#VML); vertical-align:"+((v.search(/top/)!==-1)?"bottom":"top")+'"></v:shape>';t.elements.tip+='<v:image style="behavior:url(#default#VML);"></v:image>';t.elements.contentWrapper.css("position","relative")}}t.elements.tooltip.prepend(t.elements.tip+"</div>");t.elements.tip=t.elements.tooltip.find("."+t.options.style.classes.tip).eq(0);if(f("<canvas>").get(0).getContext){h.call(t,t.elements.tip.find("canvas:first"),x,s)}if(v.search(/top/)!==-1&&f.browser.msie&&parseInt(f.browser.version.charAt(0))===6){t.elements.tip.css({marginTop:-4})}n.call(t,v)}function h(t,v,s){var u=t.get(0).getContext("2d");u.fillStyle=s;u.beginPath();u.moveTo(v[0][0],v[0][1]);u.lineTo(v[1][0],v[1][1]);u.lineTo(v[2][0],v[2][1]);u.fill()}function n(u){var t,w,s,x,v;t=this;if(t.options.style.tip.corner===false||!t.elements.tip){return}if(!u){u=t.elements.tip.attr("rel")}w=positionAdjust=(f.browser.msie)?1:0;t.elements.tip.css(u.match(/left|right|top|bottom/)[0],0);if(u.search(/top|bottom/)!==-1){if(f.browser.msie){if(parseInt(f.browser.version.charAt(0))===6){positionAdjust=(u.search(/top/)!==-1)?-3:1}else{positionAdjust=(u.search(/top/)!==-1)?1:2}}if(u.search(/Middle/)!==-1){t.elements.tip.css({left:"50%",marginLeft:-(t.options.style.tip.size.width/2)})}else{if(u.search(/Left/)!==-1){t.elements.tip.css({left:t.options.style.border.radius-w})}else{if(u.search(/Right/)!==-1){t.elements.tip.css({right:t.options.style.border.radius+w})}}}if(u.search(/top/)!==-1){t.elements.tip.css({top:-positionAdjust})}else{t.elements.tip.css({bottom:positionAdjust})}}else{if(u.search(/left|right/)!==-1){if(f.browser.msie){positionAdjust=(parseInt(f.browser.version.charAt(0))===6)?1:((u.search(/left/)!==-1)?1:2)}if(u.search(/Middle/)!==-1){t.elements.tip.css({top:"50%",marginTop:-(t.options.style.tip.size.height/2)})}else{if(u.search(/Top/)!==-1){t.elements.tip.css({top:t.options.style.border.radius-w})}else{if(u.search(/Bottom/)!==-1){t.elements.tip.css({bottom:t.options.style.border.radius+w})}}}if(u.search(/left/)!==-1){t.elements.tip.css({left:-positionAdjust})}else{t.elements.tip.css({right:positionAdjust})}}}s="padding-"+u.match(/left|right|top|bottom/)[0];x=t.options.style.tip.size[(s.search(/left|right/)!==-1)?"width":"height"];t.elements.tooltip.css("padding",0);t.elements.tooltip.css(s,x);if(f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){v=parseInt(t.elements.tip.css("margin-top"))||0;v+=parseInt(t.elements.content.css("margin-top"))||0;t.elements.tip.css({marginTop:v})}}function j(){var s=this;if(s.elements.title!==null){s.elements.title.remove()}s.elements.title=f('<div class="'+s.options.style.classes.title+'">').css(q(s.options.style.title,true)).css({zoom:(f.browser.msie)?1:0}).prependTo(s.elements.contentWrapper);if(s.options.content.title.text){s.updateTitle.call(s,s.options.content.title.text)}if(s.options.content.title.button!==false&&typeof s.options.content.title.button=="string"){s.elements.button=f('<a class="'+s.options.style.classes.button+'" style="float:right; position: relative"></a>').css(q(s.options.style.button,true)).html(s.options.content.title.button).prependTo(s.elements.title).click(function(t){if(!s.status.disabled){s.hide(t)}})}}function l(){var t,v,u,s;t=this;v=t.options.show.when.target;u=t.options.hide.when.target;if(t.options.hide.fixed){u=u.add(t.elements.tooltip)}if(t.options.hide.when.event=="inactive"){s=["click","dblclick","mousedown","mouseup","mousemove","mouseout","mouseenter","mouseleave","mouseover"];function y(z){if(t.status.disabled===true){return}clearTimeout(t.timers.inactive);t.timers.inactive=setTimeout(function(){f(s).each(function(){u.unbind(this+".qtip-inactive");t.elements.content.unbind(this+".qtip-inactive")});t.hide(z)},t.options.hide.delay)}}else{if(t.options.hide.fixed===true){t.elements.tooltip.bind("mouseover.qtip",function(){if(t.status.disabled===true){return}clearTimeout(t.timers.hide)})}}function x(z){if(t.status.disabled===true){return}if(t.options.hide.when.event=="inactive"){f(s).each(function(){u.bind(this+".qtip-inactive",y);t.elements.content.bind(this+".qtip-inactive",y)});y()}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.timers.show=setTimeout(function(){t.show(z)},t.options.show.delay)}function w(z){if(t.status.disabled===true){return}if(t.options.hide.fixed===true&&t.options.hide.when.event.search(/mouse(out|leave)/i)!==-1&&f(z.relatedTarget).parents("div.qtip[qtip]").length>0){z.stopPropagation();z.preventDefault();clearTimeout(t.timers.hide);return false}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.elements.tooltip.stop(true,true);t.timers.hide=setTimeout(function(){t.hide(z)},t.options.hide.delay)}if((t.options.show.when.target.add(t.options.hide.when.target).length===1&&t.options.show.when.event==t.options.hide.when.event&&t.options.hide.when.event!=="inactive")||t.options.hide.when.event=="unfocus"){t.cache.toggle=0;v.bind(t.options.show.when.event+".qtip",function(z){if(t.cache.toggle==0){x(z)}else{w(z)}})}else{v.bind(t.options.show.when.event+".qtip",x);if(t.options.hide.when.event!=="inactive"){u.bind(t.options.hide.when.event+".qtip",w)}}if(t.options.position.type.search(/(fixed|absolute)/)!==-1){t.elements.tooltip.bind("mouseover.qtip",t.focus)}if(t.options.position.target==="mouse"&&t.options.position.type!=="static"){v.bind("mousemove.qtip",function(z){t.cache.mouse={x:z.pageX,y:z.pageY};if(t.status.disabled===false&&t.options.position.adjust.mouse===true&&t.options.position.type!=="static"&&t.elements.tooltip.css("display")!=="none"){t.updatePosition(z)}})}}function o(u,v,A){var z,s,x,y,t,w;z=this;if(A.corner=="center"){return v.position}s=f.extend({},u);y={x:false,y:false};t={left:(s.left<f.fn.qtip.cache.screen.scroll.left),right:(s.left+A.dimensions.width+2>=f.fn.qtip.cache.screen.width+f.fn.qtip.cache.screen.scroll.left),top:(s.top<f.fn.qtip.cache.screen.scroll.top),bottom:(s.top+A.dimensions.height+2>=f.fn.qtip.cache.screen.height+f.fn.qtip.cache.screen.scroll.top)};x={left:(t.left&&(A.corner.search(/right/i)!=-1||(A.corner.search(/right/i)==-1&&!t.right))),right:(t.right&&(A.corner.search(/left/i)!=-1||(A.corner.search(/left/i)==-1&&!t.left))),top:(t.top&&A.corner.search(/top/i)==-1),bottom:(t.bottom&&A.corner.search(/bottom/i)==-1)};if(x.left){if(z.options.position.target!=="mouse"){s.left=v.position.left+v.dimensions.width}else{s.left=z.cache.mouse.x}y.x="Left"}else{if(x.right){if(z.options.position.target!=="mouse"){s.left=v.position.left-A.dimensions.width}else{s.left=z.cache.mouse.x-A.dimensions.width}y.x="Right"}}if(x.top){if(z.options.position.target!=="mouse"){s.top=v.position.top+v.dimensions.height}else{s.top=z.cache.mouse.y}y.y="top"}else{if(x.bottom){if(z.options.position.target!=="mouse"){s.top=v.position.top-A.dimensions.height}else{s.top=z.cache.mouse.y-A.dimensions.height}y.y="bottom"}}if(s.left<0){s.left=u.left;y.x=false}if(s.top<0){s.top=u.top;y.y=false}if(z.options.style.tip.corner!==false){s.corner=new String(A.corner);if(y.x!==false){s.corner=s.corner.replace(/Left|Right|Middle/,y.x)}if(y.y!==false){s.corner=s.corner.replace(/top|bottom/,y.y)}if(s.corner!==z.elements.tip.attr("rel")){e.call(z,s.corner)}}return s}function q(u,t){var v,s;v=f.extend(true,{},u);for(s in v){if(t===true&&s.search(/(tip|classes)/i)!==-1){delete v[s]}else{if(!t&&s.search(/(width|border|tip|title|classes|user)/i)!==-1){delete v[s]}}}return v}function c(s){if(typeof s.tip!=="object"){s.tip={corner:s.tip}}if(typeof s.tip.size!=="object"){s.tip.size={width:s.tip.size,height:s.tip.size}}if(typeof s.border!=="object"){s.border={width:s.border}}if(typeof s.width!=="object"){s.width={value:s.width}}if(typeof s.width.max=="string"){s.width.max=parseInt(s.width.max.replace(/([0-9]+)/i,"$1"))}if(typeof s.width.min=="string"){s.width.min=parseInt(s.width.min.replace(/([0-9]+)/i,"$1"))}if(typeof s.tip.size.x=="number"){s.tip.size.width=s.tip.size.x;delete s.tip.size.x}if(typeof s.tip.size.y=="number"){s.tip.size.height=s.tip.size.y;delete s.tip.size.y}return s}function a(){var s,t,u,x,v,w;s=this;u=[true,{}];for(t=0;t<arguments.length;t++){u.push(arguments[t])}x=[f.extend.apply(f,u)];while(typeof x[0].name=="string"){x.unshift(c(f.fn.qtip.styles[x[0].name]))}x.unshift(true,{classes:{tooltip:"qtip-"+(arguments[0].name||"defaults")}},f.fn.qtip.styles.defaults);v=f.extend.apply(f,x);w=(f.browser.msie)?1:0;v.tip.size.width+=w;v.tip.size.height+=w;if(v.tip.size.width%2>0){v.tip.size.width+=1}if(v.tip.size.height%2>0){v.tip.size.height+=1}if(v.tip.corner===true){v.tip.corner=(s.options.position.corner.tooltip==="center")?false:s.options.position.corner.tooltip}return v}function b(v,u,t){var s={bottomRight:[[0,0],[u,t],[u,0]],bottomLeft:[[0,0],[u,0],[0,t]],topRight:[[0,t],[u,0],[u,t]],topLeft:[[0,0],[0,t],[u,t]],topMiddle:[[0,t],[u/2,0],[u,t]],bottomMiddle:[[0,0],[u,0],[u/2,t]],rightMiddle:[[0,0],[u,t/2],[0,t]],leftMiddle:[[u,0],[u,t],[0,t/2]]};s.leftTop=s.bottomRight;s.rightTop=s.bottomLeft;s.leftBottom=s.topRight;s.rightBottom=s.topLeft;return s[v]}function g(s){var t;if(f("<canvas>").get(0).getContext){t={topLeft:[s,s],topRight:[0,s],bottomLeft:[s,0],bottomRight:[0,0]}}else{if(f.browser.msie){t={topLeft:[-90,90,0],topRight:[-90,90,-s],bottomLeft:[90,270,0],bottomRight:[90,270,-s]}}}return t}function k(){var s,t,u;s=this;u=s.getDimensions();t='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; height:'+u.height+"px; width:"+u.width+'px" />';s.elements.bgiframe=s.elements.wrapper.prepend(t).children(".qtip-bgiframe:first")}f(document).ready(function(){f.fn.qtip.cache={screen:{scroll:{left:f(window).scrollLeft(),top:f(window).scrollTop()},width:f(window).width(),height:f(window).height()}};var s;f(window).bind("resize scroll",function(t){clearTimeout(s);s=setTimeout(function(){if(t.type==="scroll"){f.fn.qtip.cache.screen.scroll={left:f(window).scrollLeft(),top:f(window).scrollTop()}}else{f.fn.qtip.cache.screen.width=f(window).width();f.fn.qtip.cache.screen.height=f(window).height()}for(i=0;i<f.fn.qtip.interfaces.length;i++){var u=f.fn.qtip.interfaces[i];if(u.status.rendered===true&&(u.options.position.type!=="static"||u.options.position.adjust.scroll&&t.type==="scroll"||u.options.position.adjust.resize&&t.type==="resize")){u.updatePosition(t,true)}}},100)});f(document).bind("mousedown.qtip",function(t){if(f(t.target).parents("div.qtip").length===0){f(".qtip[unfocus]").each(function(){var u=f(this).qtip("api");if(f(this).is(":visible")&&!u.status.disabled&&f(t.target).add(u.elements.target).length>1){u.hide(t)}})}})});f.fn.qtip.interfaces=[];f.fn.qtip.log={error:function(){return this}};f.fn.qtip.constants={};f.fn.qtip.defaults={content:{prerender:false,text:false,url:false,data:null,title:{text:false,button:false}},position:{target:false,corner:{target:"bottomRight",tooltip:"topLeft"},adjust:{x:0,y:0,mouse:true,screen:false,scroll:true,resize:true},type:"absolute",container:false},show:{when:{target:false,event:"mouseover"},effect:{type:"fade",length:100},delay:140,solo:false,ready:false},hide:{when:{target:false,event:"mouseout"},effect:{type:"fade",length:100},delay:0,fixed:false},api:{beforeRender:function(){},onRender:function(){},beforePositionUpdate:function(){},onPositionUpdate:function(){},beforeShow:function(){},onShow:function(){},beforeHide:function(){},onHide:function(){},beforeContentUpdate:function(){},onContentUpdate:function(){},beforeContentLoad:function(){},onContentLoad:function(){},beforeTitleUpdate:function(){},onTitleUpdate:function(){},beforeDestroy:function(){},onDestroy:function(){},beforeFocus:function(){},onFocus:function(){}}};f.fn.qtip.styles={defaults:{background:"white",color:"#111",overflow:"hidden",textAlign:"left",width:{min:0,max:250},padding:"5px 9px",border:{width:1,radius:0,color:"#d3d3d3"},tip:{corner:false,color:false,size:{width:13,height:13},opacity:1},title:{background:"#e1e1e1",fontWeight:"bold",padding:"7px 12px"},button:{cursor:"pointer"},classes:{target:"",tip:"qtip-tip",title:"qtip-title",button:"qtip-button",content:"qtip-content",active:"qtip-active"}},cream:{border:{width:3,radius:0,color:"#F9E98E"},title:{background:"#F0DE7D",color:"#A27D35"},background:"#FBF7AA",color:"#A27D35",classes:{tooltip:"qtip-cream"}},light:{border:{width:3,radius:0,color:"#E2E2E2"},title:{background:"#f1f1f1",color:"#454545"},background:"white",color:"#454545",classes:{tooltip:"qtip-light"}},dark:{border:{width:3,radius:0,color:"#303030"},title:{background:"#404040",color:"#f3f3f3"},background:"#505050",color:"#f3f3f3",classes:{tooltip:"qtip-dark"}},red:{border:{width:3,radius:0,color:"#CE6F6F"},title:{background:"#f28279",color:"#9C2F2F"},background:"#F79992",color:"#9C2F2F",classes:{tooltip:"qtip-red"}},green:{border:{width:3,radius:0,color:"#A9DB66"},title:{background:"#b9db8c",color:"#58792E"},background:"#CDE6AC",color:"#58792E",classes:{tooltip:"qtip-green"}},blue:{border:{width:3,radius:0,color:"#ADD9ED"},title:{background:"#D0E9F5",color:"#5E99BD"},background:"#E5F6FE",color:"#4D9FBF",classes:{tooltip:"qtip-blue"}}}})(jQuery);






/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element
      .bind('touchstart', $.proxy(self, '_touchStart'))
      .bind('touchmove', $.proxy(self, '_touchMove'))
      .bind('touchend', $.proxy(self, '_touchEnd'));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

})(jQuery);/*
 * vamonos.js - the Vamonos algorithm visualization library
 *
 * Copyright 2012-2014 Mike Rosulek & the Vamonos project team
 * http://rosulek.github.io/vamonos
 *
 * Licenced under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 1.2.1
 * Released: 2014-01-13
 */
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Vamonos = {
    handleArguments: function(_arg) {
      var arg, argName, defaultValue, description, givenArgs, ignoreExtraArgs, spec, specObj, specs, type, widgetName, widgetObject, _ref, _results;
      widgetObject = _arg.widgetObject, givenArgs = _arg.givenArgs, ignoreExtraArgs = _arg.ignoreExtraArgs, specObj = _arg.specObj;
      if (ignoreExtraArgs == null) {
        ignoreExtraArgs = false;
      }
      widgetName = widgetObject.constructor.name;
      spec = specObj != null ? specObj : widgetObject.constructor.spec;
      if (widgetName == null) {
        throw Error("handleArguments: widgetName required");
      }
      if (widgetObject == null) {
        throw Error("handleArguments: widgetObject required for " + widgetName + " widget");
      }
      if (givenArgs == null) {
        throw Error("handleArguments: givenArgs required for " + widgetName + " widget");
      }
      if (!spec) {
        throw Error("handleArguments: no spec for " + widgetName + " widget");
      }
      for (argName in spec) {
        specs = spec[argName];
        type = specs.type, description = specs.description, defaultValue = specs.defaultValue;
        if (type == null) {
          throw Error("handleArguments: no type provided for " + widgetName + "." + argName);
        }
        if (type === "jQuery Selector") {
          type = "";
        }
        type = this.arrayify(type);
        if (givenArgs[argName] != null) {
          if (_ref = givenArgs[argName].constructor.name, __indexOf.call(type, _ref) < 0) {
            throw TypeError(("WIDGET " + widgetName + ": constructor argument ") + ("'" + argName + "' expects type '" + type + "' but got ") + ("type '" + givenArgs[argName].constructor.name + "'"));
          }
          widgetObject[argName] = givenArgs[argName];
          if (!ignoreExtraArgs) {
            delete givenArgs[argName];
          }
        } else {
          if (specs.hasOwnProperty("defaultValue")) {
            widgetObject[argName] = defaultValue;
          } else {
            throw Error("" + widgetName + ": required argument '" + argName + "' missing.");
          }
        }
      }
      if (!ignoreExtraArgs) {
        _results = [];
        for (arg in givenArgs) {
          _results.push(this.warn(widgetName, "unused argument \"" + arg + "\""));
        }
        return _results;
      }
    },
    error: function(string) {
      throw {
        type: "VamonosError",
        content: string
      };
    },
    arrayToNum: function(array) {
      var r;
      if (!((array != null) && array.constructor.name === 'Array')) {
        console.log("Vamonos.arrayToNum got non-array input", array);
        return 0;
      }
      r = parseInt(array.join(""), 10);
      if (isNaN(r)) {
        return 0;
      } else {
        return r;
      }
    },
    numToArray: function(num) {
      var r;
      if (!((num != null) && num.constructor.name === 'Number')) {
        console.log("Vamonos.numToArray got non-num input", num);
        return [0];
      }
      if (num < 10) {
        return [num];
      }
      r = num % 10;
      return this.numToArray(Math.floor(num / 10)).concat([r]);
    },
    createNColorClasses: function(prefix, nGroups) {
      var cs, i, _i, _ref, _results;
      if (!((prefix != null) && (nGroups != null))) {
        return;
      }
      cs = function(n) {
        var inc;
        inc = Math.floor(360 / nGroups);
        return "hsl(" + (inc * n) + ", 60%, 70%)";
      };
      _results = [];
      for (i = _i = 0, _ref = nGroups - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        _results.push($('<style>ellipse.' + prefix + i + ' { fill: ' + cs(i) + '; }</style>').appendTo($('html > head')));
      }
      return _results;
    },
    warn: function(objName, str) {
      return console.log("### WARNING ### " + objName + ": " + str);
    },
    rgbToHex: function(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    resolveSubscript: function(name) {
      var lname, nameMatches, subscript, _;
      nameMatches = name.match(/(.+)_(.+)/);
      if (nameMatches == null) {
        return name;
      }
      _ = nameMatches[0], lname = nameMatches[1], subscript = nameMatches[2];
      return "" + lname;
    },
    formatObject: function(object, attributes, prevObj) {
      var addClass, attribute, rows, str, tbl;
      if (attributes == null) {
        attributes = [];
      }
      if ((prevObj != null) && (object.name != null) && object.name !== prevObj.name) {
        addClass = "class='changed'";
      } else {
        addClass = "";
      }
      tbl = "<table " + addClass + " >";
      rows = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = attributes.length; _i < _len; _i++) {
          attribute = attributes[_i];
          str = Vamonos.rawToTxt(object[attribute]);
          if ((prevObj != null) && str !== Vamonos.rawToTxt(prevObj[attribute])) {
            addClass = "class='changed'";
          } else {
            addClass = "";
          }
          _results.push(("<tr " + addClass + " ><td>" + attribute + "</td><td>&nbsp=&nbsp") + str + "</td></tr>");
        }
        return _results;
      })();
      tbl += rows.join("") + "</table>";
      return tbl;
    },
    editableValue: function($elem, valFunc, returnFunc) {
      var $editor, doneEditing, oldVal,
        _this = this;
      doneEditing = function() {
        var newVal;
        newVal = returnFunc($editor.val());
        return $elem.html(newVal.length ? newVal : oldVal);
      };
      oldVal = valFunc($elem);
      $editor = $("<input class='inline-input'>").hide().val(oldVal).on("keydown.vamonos-graph", function(event) {
        var _ref;
        if ((_ref = event.keyCode) !== 13 && _ref !== 32 && _ref !== 9 && _ref !== 27) {
          return;
        }
        doneEditing();
        return false;
      }).on("blur.vamonos-graph something-was-selected", function(event) {
        doneEditing();
        return true;
      });
      $elem.html($editor);
      return $editor.fadeIn("fast").focus().select();
    },
    moveToTop: function($elem, $container) {
      if ($container == null) {
        $container = $("*");
      }
      return $elem.css("z-index", this.highestZIndex($container) + 1);
    },
    highestZIndex: function($sel) {
      var index_highest;
      index_highest = 0;
      $sel.each(function() {
        var index_current;
        index_current = parseInt($(this).css("zIndex"), 10);
        if (index_current > index_highest) {
          return index_highest = index_current;
        }
      });
      return index_highest;
    },
    insertSet: function(item, arraySet) {
      if (__indexOf.call(arraySet, item) < 0) {
        return arraySet.push(item);
      }
    },
    txtToRaw: function(txt) {
      if (txt.match(/^\+?(inf(inity)?|\u221E)$/i)) {
        return Infinity;
      }
      if (txt.match(/^-(inf(inity)?|\u221E)$/i)) {
        return -Infinity;
      }
      if (isNaN(parseInt(txt))) {
        return null;
      } else {
        return parseInt(txt);
      }
    },
    rawToTxt: function(raw) {
      if (raw == null) {
        return "";
      }
      if (raw === Infinity) {
        return "\u221E";
      }
      if (raw === -Infinity) {
        return "-\u221E";
      }
      if (typeof raw === 'object' && raw.type === 'Vertex') {
        return raw.name;
      }
      if (typeof raw === 'object' && raw.type === 'Edge') {
        return raw.id;
      }
      if (typeof raw === 'object' && raw.type === 'Graph') {
        return "graph";
      }
      if (typeof raw === 'object' && raw.type === 'BinaryTree') {
        return "tree";
      }
      if (typeof raw === 'object' && raw.type === 'Queue') {
        return raw.toString();
      }
      return "" + raw;
    },
    txtValid: function(txt) {
      return this.txtToRaw(txt) != null;
    },
    isNumber: function(val) {
      return !isNaN(parseInt(val));
    },
    removeNamespace: function(varName) {
      var r;
      r = varName.split(/::/);
      if (r.length === 2) {
        return r[1];
      } else {
        return r[r.length - 1];
      }
    },
    funcify: function(arg) {
      if (typeof arg === "function") {
        return arg;
      }
      return function() {
        return arg;
      };
    },
    arrayify: function(obj) {
      if (obj instanceof Array) {
        return obj;
      } else {
        return [obj];
      }
    },
    jqueryify: function(obj) {
      if (typeof obj === 'string') {
        return $("#" + obj);
      } else {
        return obj;
      }
    },
    stringify: function(obj) {
      if ((obj != null ? obj.type : void 0) === 'Graph') {
        return obj.toString();
      } else {
        return JSON.stringify(obj);
      }
    },
    "export": function(obj) {
      var root, _ref;
      root = (_ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? _ref : window;
      root.Vamonos || (root.Vamonos = {});
      return this.mixin(root.Vamonos, obj);
    },
    mixin: function(dest, src, f) {
      var name, val;
      for (name in src) {
        val = src[name];
        if ((typeof dest[name] === 'object') && (typeof src[name] === 'object')) {
          this.mixin(dest[name], val);
        } else {
          dest[name] = f != null ? f(val) : val;
        }
      }
      return dest;
    },
    clone: function(obj) {
      var k, r, v, _ref;
      if (obj == null) {
        return;
      }
      if ((typeof obj).match(/number|string|boolean/)) {
        return obj;
      }
      if ((_ref = obj.type) === 'Queue' || _ref === 'Graph') {
        return obj.clone();
      }
      if (obj.type === 'stash') {
        r = {};
        for (k in obj) {
          v = obj[k];
          r[k] = Vamonos.clone(v);
        }
        return r;
      }
      if (obj instanceof Array) {
        return $.extend(true, [], obj);
      }
      return $.extend(true, {}, obj);
    },
    encode: function(thing) {
      var c, h, s, z;
      s = JSON.stringify(thing);
      c = this.lzw_encode(s);
      h = unescape(encodeURIComponent(c));
      z = window.btoa(h);
      return z;
    },
    decode: function(base64str) {
      var c, j, s;
      s = window.atob(base64str);
      c = decodeURIComponent(escape(s));
      j = this.lzw_decode(c);
      return JSON.parse(j);
    },
    lzw_decode: function(s) {
      var code, currChar, currCode, data, dict, i, oldPhrase, out, phrase, _i, _ref;
      dict = {};
      data = (s + "").split("");
      currChar = data[0];
      oldPhrase = currChar;
      out = [currChar];
      code = 256;
      for (i = _i = 1, _ref = data.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
          phrase = data[i];
        } else {
          phrase = dict[currCode] ? dict[currCode] : oldPhrase + currChar;
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
      }
      return out.join("");
    },
    lzw_encode: function(s) {
      var code, currChar, data, dict, i, out, phrase, _i, _j, _len, _ref, _ref1;
      dict = {};
      data = (s + "").split("");
      out = [];
      phrase = data[0];
      code = 256;
      _ref = data.slice(1);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        currChar = _ref[_i];
        if (dict[phrase + currChar] != null) {
          phrase += currChar;
          continue;
        }
        if (phrase.length > 1) {
          out.push(dict[phrase]);
        } else {
          out.push(phrase.charCodeAt(0));
        }
        dict[phrase + currChar] = code;
        code++;
        phrase = currChar;
      }
      if (phrase.length > 1) {
        out.push(dict[phrase]);
      } else {
        out.push(phrase.charCodeAt(0));
      }
      for (i = _j = 0, _ref1 = out.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        out[i] = String.fromCharCode(out[i]);
      }
      return out.join("");
    }
  };

}).call(this);

(function() {
  var BinaryTree;

  BinaryTree = (function() {

    BinaryTree["interface"] = {};

    BinaryTree.description = "*Experimental*. BinaryTree takes a tree encoded as nested objects of\nthe form `{ val, id, left, right }` where left and right are optional\nobjects of the same form.";

    function BinaryTree(guts) {
      this.guts = guts;
      this._refresh();
      this.type = "BinaryTree";
    }

    BinaryTree["interface"].eachNodeInOrder = {
      args: [["f", "a function that takes a node"]],
      description: "applies `f` to each node using an in-order traversal"
    };

    BinaryTree.prototype.eachNodeInOrder = function(f) {
      var helper;
      return (helper = function(node) {
        if (node == null) {
          return;
        }
        helper(node.left);
        f(node);
        return helper(node.right);
      })(this.guts);
    };

    BinaryTree["interface"].eachNodePreOrder = {
      args: [["f", "a function that takes a node"]],
      description: "applies `f` to each node using a pre-order traversal"
    };

    BinaryTree.prototype.eachNodePreOrder = function(f) {
      var helper;
      return (helper = function(node) {
        if (node == null) {
          return;
        }
        f(node);
        helper(node.left);
        return helper(node.right);
      })(this.guts);
    };

    BinaryTree["interface"].eachNodePostOrder = {
      args: [["f", "a function that takes a node"]],
      description: "applies `f` to each node using a post-order traversal"
    };

    BinaryTree.prototype.eachNodePostOrder = function(f) {
      var helper;
      return (helper = function(node) {
        if (node == null) {
          return;
        }
        helper(node.left);
        helper(node.right);
        return f(node);
      })(this.guts);
    };

    BinaryTree["interface"].asGraph = {
      description: "returns an equivalent `Vamonos.DataStructure.Graph`"
    };

    BinaryTree.prototype.asGraph = function() {
      var g,
        _this = this;
      g = new Vamonos.DataStructure.Graph();
      this.eachNodePreOrder(function(n) {
        var left, right, thisOne;
        thisOne = g.addVertex(n);
        if (n.left != null) {
          left = g.addVertex(n.left);
          g.addEdge(n.id, left.id);
        }
        if (n.right != null) {
          right = g.addVertex(n.right);
          return g.addEdge(n.id, right.id);
        }
      });
      return g;
    };

    BinaryTree["interface"].rotateRight = {
      args: [["id", "a node id"]],
      description: "rotates the tree right at the node matching id"
    };

    BinaryTree.prototype.rotateRight = function(id) {
      var rotateRightHelper;
      rotateRightHelper = function(node) {
        var left, temp, x;
        if (node == null) {
          return;
        }
        if ((node != null ? node.id : void 0) === id) {
          if (node.left == null) {
            return node;
          }
          temp = node;
          left = node.left;
          x = left.right;
          left.right = node;
          node.left = x;
          return left;
        } else {
          node.left = rotateRightHelper(node.left, id);
          node.right = rotateRightHelper(node.right, id);
          return node;
        }
      };
      this.guts = rotateRightHelper(this.guts, id);
      this._refresh();
      return "ok";
    };

    BinaryTree["interface"].rotateLeft = {
      args: [["id", "a node id"]],
      description: "rotates the tree left at the node matching id"
    };

    BinaryTree.prototype.rotateLeft = function(id) {
      var rotateLeftHelper;
      rotateLeftHelper = function(node) {
        var right, temp, x;
        if (node == null) {
          return;
        }
        if ((node != null ? node.id : void 0) === id) {
          if (node.right == null) {
            return node;
          }
          temp = node;
          right = node.right;
          x = right.left;
          right.left = node;
          node.right = x;
          return right;
        } else {
          node.left = rotateLeftHelper(node.left, id);
          node.right = rotateLeftHelper(node.right, id);
          return node;
        }
      };
      this.guts = rotateLeftHelper(this.guts, id);
      this._refresh();
      return "ok";
    };

    BinaryTree["interface"].addNode = {
      args: [["targetId", "a node id"], ["direction", "`\"left\"` or `\"right\"`"], ["newNode", "optional: a node object"]],
      description: "adds `newNode` as the `direction` child of the node matching `targetId`"
    };

    BinaryTree.prototype.addNode = function(targetId, direction, newNode) {
      var addNodeHelper, _ref, _ref1;
      if (newNode == null) {
        newNode = {};
      }
      if ((_ref = this.nextId) == null) {
        this.nextId = 0;
      }
      if ((_ref1 = newNode.id) == null) {
        newNode.id = "tree-node-" + this.nextId++;
      }
      addNodeHelper = function(node) {
        if (node == null) {
          return;
        }
        if ((node != null ? node.id : void 0) === targetId) {
          return node[direction] = newNode;
        } else {
          addNodeHelper(node.left);
          return addNodeHelper(node.right);
        }
      };
      addNodeHelper(this.guts);
      this._refresh();
      return newNode.id;
    };

    BinaryTree["interface"].deleteNode = {
      args: [["targetId", "a node id"]],
      description: "deletes the node matching `targetId`, preforming rotations as necessary"
    };

    BinaryTree.prototype.deleteNode = function(targetId) {
      var deleteNodeHelper;
      deleteNodeHelper = function(node) {
        var _ref, _ref1;
        if (node == null) {
          return;
        }
        if (((_ref = node.right) != null ? _ref.id : void 0) === targetId) {
          node.right = void 0;
          return true;
        } else if (((_ref1 = node.left) != null ? _ref1.id : void 0) === targetId) {
          node.left = void 0;
          return true;
        } else {
          return deleteNodeHelper(node.left) || deleteNodeHelper(node.right);
        }
      };
      if (this.guts.id === targetId) {
        this.guts = void 0;
      } else {
        deleteNodeHelper(this.guts);
      }
      return this._refresh();
    };

    BinaryTree["interface"].changeVal = {
      args: [["targetId", "a node id"], ["newVal", "an arbitrary value"]],
      description: "changes the val field of the node matching `targetId` to `newVal`"
    };

    BinaryTree.prototype.changeVal = function(targetId, newVal) {
      var changeValHelper;
      changeValHelper = function(node) {
        if (node == null) {
          return;
        }
        if (node.id === targetId) {
          node.val = newVal;
          return true;
        } else {
          return changeValHelper(node.left) || changeValHelper(node.right);
        }
      };
      changeValHelper(this.guts);
      return this._refresh();
    };

    BinaryTree.prototype._refresh = function() {
      this._assignOrder();
      return this._assignDepth();
    };

    BinaryTree.prototype._assignOrder = function() {
      var _this = this;
      this.count = 0;
      return this.eachNodeInOrder(function(n) {
        return n.order = _this.count++;
      });
    };

    BinaryTree.prototype._assignDepth = function() {
      var helper,
        _this = this;
      this.maxDepth = 0;
      return (helper = function(node, depth) {
        if (node == null) {
          return;
        }
        node.depth = depth;
        if (depth > _this.maxDepth) {
          _this.maxDepth = depth;
        }
        helper(node.left, depth + 1);
        return helper(node.right, depth + 1);
      })(this.guts, 0);
    };

    return BinaryTree;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      BinaryTree: BinaryTree
    }
  });

}).call(this);

(function() {
  var DisjointSet,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  DisjointSet = (function() {

    DisjointSet.description = "A disjoint set data structure for use in algorithms and widgets.";

    DisjointSet["interface"] = {};

    DisjointSet.spec = {
      onUpdate: {
        type: "Function",
        description: "A function that does something to an element in " + "the set when it the disjoint set is modified.",
        defaultValue: void 0
      }
    };

    function DisjointSet(args) {
      if (args == null) {
        args = {};
      }
      this.updateFunc = args.onUpdate;
      this.type = 'DisjointSet';
      this.guts = [];
    }

    DisjointSet["interface"].makeSet = {
      args: [["elem", "an element"]],
      description: "creates a new set with `elem`"
    };

    DisjointSet.prototype.makeSet = function(elem) {
      if (this.find(elem)) {
        return;
      }
      this.guts.push([elem]);
      return this.update();
    };

    DisjointSet["interface"].find = {
      args: [["elem", "an element"]],
      description: "returns an integer representing the set with `elem` in it"
    };

    DisjointSet.prototype.find = function(elem) {
      var i, _i, _ref;
      for (i = _i = 0, _ref = this.guts.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (this.guts[i] == null) {
          continue;
        }
        if (__indexOf.call(this.guts[i], elem) >= 0) {
          return i;
        }
      }
    };

    DisjointSet["interface"].union = {
      args: [["e1", "an element"], ["e2", "an element"]],
      description: "joins the set containing `e1` with the one containing `e2`"
    };

    DisjointSet.prototype.union = function(e1, e2) {
      var e1Set, e2Set, newSet;
      if (!((e1 != null) && (e2 != null))) {
        return [];
      }
      e1Set = this.find(e1);
      e2Set = this.find(e2);
      if (!((e1Set != null) && (e2Set != null) && e1Set !== e2Set)) {
        return [];
      }
      if (this.guts[e1Set].length > this.guts[e2Set].length) {
        this.guts[e1Set] = this.guts[e1Set].concat(this.guts[e2Set]);
        this.guts[e2Set] = [];
        newSet = this.guts[e1Set];
      } else {
        this.guts[e2Set] = this.guts[e2Set].concat(this.guts[e1Set]);
        this.guts[e1Set] = [];
        newSet = this.guts[e2Set];
      }
      this.update();
      return newSet;
    };

    DisjointSet["interface"].numSets = {
      description: "returns the max number of sets that have existed"
    };

    DisjointSet.prototype.numSets = function() {
      return this.guts.length;
    };

    DisjointSet.prototype.update = function() {
      var elem, set, _i, _len, _ref, _results;
      if (this.updateFunc == null) {
        return;
      }
      _ref = this.guts;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        set = _ref[_i];
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (_j = 0, _len1 = set.length; _j < _len1; _j++) {
            elem = set[_j];
            _results1.push(this.updateFunc(elem));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    DisjointSet["interface"].eachSet = {
      args: [["f", "a function taking an array of elements and optionally an index"]],
      description: "applies `f` to each set in the DisjointSet, along with its index"
    };

    DisjointSet.prototype.eachSet = function(f) {
      var control, i, _i, _ref, _results;
      control = {
        abort: false
      };
      _results = [];
      for (i = _i = 0, _ref = this.numSets() - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (!this.guts[i].length) {
          continue;
        }
        _results.push(f(this.guts[i], i, control));
      }
      return _results;
    };

    DisjointSet["interface"].getSets = {
      description: "returns a list of all the sets in the DisjointSet." + "Sets are represented by lists. " + "Note that some lists may be empty."
    };

    DisjointSet.prototype.getSets = function() {
      return this.guts;
    };

    return DisjointSet;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      DisjointSet: DisjointSet
    }
  });

}).call(this);

(function() {
  var Graph,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Graph = (function() {

    Graph.description = "The Graph data structure provides standard graph functionality\nto Vamonos.";

    Graph.spec = {
      directed: {
        type: "Boolean",
        description: "Whether the graph is directed.",
        defaultValue: false
      },
      prefix: {
        type: "String",
        description: "A string prepended to each new vertex id.",
        defaultValue: ""
      },
      vertices: {
        type: ["Object", "Array"],
        description: "A single vertex or an array of vertices to create the graph with.",
        defaultValue: void 0,
        example: "vertices: [\n    {id: \"v0\", x: 17,  y: 10},\n    {id: \"v1\", x: 98,  y: 10},\n    {id: \"v3\", x: 15,  y: 78},\n]"
      },
      edges: {
        type: ["Object", "Array"],
        description: "A single edge or an array of edges to create the graph with.",
        defaultValue: void 0,
        example: "edges: [\n    {source: 'v0',target: 'v4'},\n    {source: 'v1',target: 'v2'},\n]"
      }
    };

    Graph["interface"] = {};

    function Graph(args) {
      var e, v, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
      if (args == null) {
        args = {};
      }
      this.edgeId = __bind(this.edgeId, this);

      this.modifyEdgeTarget = __bind(this.modifyEdgeTarget, this);

      this.modifyEdgeSource = __bind(this.modifyEdgeSource, this);

      this.directed = (_ref = args.directed) != null ? _ref : false;
      this.prefix = (_ref1 = args.prefix) != null ? _ref1 : "";
      this.type = 'Graph';
      this.edges = {};
      this.vertices = {};
      _ref2 = Vamonos.arrayify(args.vertices);
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        v = _ref2[_i];
        if (v != null) {
          this.addVertex(v);
        }
      }
      _ref3 = Vamonos.arrayify(args.edges);
      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
        e = _ref3[_j];
        if (e != null) {
          this.addEdge(e.source, e.target, e);
        }
      }
    }

    Graph["interface"].vertex = {
      args: [["vid", "a vertex object containing an id field, or an id"]],
      description: "returns the vertex object matching `vid`"
    };

    Graph.prototype.vertex = function(vid) {
      return this.vertices[this.idify(vid)];
    };

    Graph["interface"].addVertex = {
      args: [["vtx", "a vertex object"]],
      description: "adds `vtx` to the graph"
    };

    Graph.prototype.addVertex = function(vtx) {
      var k, newVtx, v, _ref;
      if (vtx == null) {
        vtx = {};
      }
      if (this.vertices[vtx.id] != null) {
        return this.vertices[vtx.id];
      }
      newVtx = {};
      newVtx.type = 'Vertex';
      if (vtx.name != null) {
        this.removeVertexName(vtx.name);
        newVtx.name = vtx.name;
      } else {
        newVtx.name = this.nextVertexName();
      }
      newVtx.id = (_ref = vtx.id) != null ? _ref : this.nextVertexId();
      this.vertices[newVtx.id] = newVtx;
      for (k in vtx) {
        v = vtx[k];
        if (k !== 'type' && k !== 'name' && k !== 'id') {
          if ((v != null ? v.type : void 0) === 'Vertex') {
            newVtx[k] = this.vertex(v);
          } else {
            newVtx[k] = v;
          }
        }
      }
      return newVtx;
    };

    Graph["interface"].removeVertex = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "removes the vertex matching `v` and all related edges from the " + "graph"
    };

    Graph.prototype.removeVertex = function(v) {
      var affectedEdges, e, vtx, _i, _len;
      vtx = this.vertex(v);
      if (vtx == null) {
        return;
      }
      this.returnVertexName(vtx.name);
      affectedEdges = this.incomingEdges(vtx.id).concat(this.outgoingEdges(vtx.id));
      for (_i = 0, _len = affectedEdges.length; _i < _len; _i++) {
        e = affectedEdges[_i];
        this.removeEdge(e.source.id, e.target.id);
      }
      return delete this.vertices[vtx.id];
    };

    Graph["interface"].getVertices = {
      description: "returns an array of all vertices"
    };

    Graph.prototype.getVertices = function() {
      var vid, vtx, _ref, _results;
      _ref = this.vertices;
      _results = [];
      for (vid in _ref) {
        vtx = _ref[vid];
        _results.push(vtx);
      }
      return _results;
    };

    Graph["interface"].eachVertex = {
      args: [["f", "a function taking a vertex as an argument"]],
      description: "applies `f` to each vertex in the graph"
    };

    Graph.prototype.eachVertex = function(f) {
      var id, v, vs, _i, _len, _results;
      vs = ((function() {
        var _ref, _results;
        _ref = this.vertices;
        _results = [];
        for (id in _ref) {
          v = _ref[id];
          _results.push(v);
        }
        return _results;
      }).call(this)).sort(function(a, b) {
        return a.name - b.name;
      });
      _results = [];
      for (_i = 0, _len = vs.length; _i < _len; _i++) {
        v = vs[_i];
        if (v != null) {
          _results.push(f(v));
        }
      }
      return _results;
    };

    Graph["interface"].eachVertexBy = {
      args: [["comp", "a comparator"], ["f", "a function taking a vertex as an argument"]],
      description: "applies `f` to each vertex in the graph, ordered by `comp`"
    };

    Graph.prototype.eachVertexBy = function(comp, f) {
      var id, v, vs, _i, _len, _results;
      vs = ((function() {
        var _ref, _results;
        _ref = this.vertices;
        _results = [];
        for (id in _ref) {
          v = _ref[id];
          _results.push(v);
        }
        return _results;
      }).call(this)).sort(comp);
      _results = [];
      for (_i = 0, _len = vs.length; _i < _len; _i++) {
        v = vs[_i];
        if (v != null) {
          _results.push(f(v));
        }
      }
      return _results;
    };

    Graph["interface"].nextVertexId = {
      description: "returns an unused vertex id"
    };

    Graph.prototype.nextVertexId = function() {
      var existingVtx, newId, _i, _len, _ref, _ref1, _ref2;
      if ((_ref = this._customVertexNum) == null) {
        this._customVertexNum = 0;
      }
      newId = "" + ((_ref1 = this.prefix) != null ? _ref1 : "custom-") + "vertex-" + (this._customVertexNum++);
      _ref2 = this.getVertices();
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        existingVtx = _ref2[_i];
        if (existingVtx.id === newId) {
          return this.nextVertexId();
        }
      }
      return newId;
    };

    Graph["interface"].returnVertexName = {
      args: [["n", "string"]],
      description: "adds `n` to the list of available vertex names"
    };

    Graph.prototype.returnVertexName = function(n) {
      var customSort;
      customSort = function(a, b) {
        var capital, lower, number, sameType;
        lower = function(x) {
          return /[a-z]/.test(x);
        };
        capital = function(x) {
          return /[A-Z]/.test(x);
        };
        number = function(x) {
          return /[0-9]/.test(x);
        };
        sameType = function(a, b) {
          return lower(a) && lower(b) || capital(a) && capital(b) || number(a) && number(b);
        };
        if (sameType(a, b)) {
          if (a === b) {
            return 0;
          } else if (a < b) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (lower(a)) {
            return -1;
          } else if (lower(b)) {
            return 1;
          } else if (capital(a)) {
            return -1;
          } else {
            return 1;
          }
        }
      };
      this._initAvailableNames();
      this.availableNames.unshift(n);
      return this.availableNames.sort(customSort);
    };

    Graph["interface"].removeVertexName = {
      args: [["name"]],
      description: "removes `name` from the list of available vertex names"
    };

    Graph.prototype.removeVertexName = function(name) {
      this._initAvailableNames();
      return this.availableNames = this.availableNames.filter(function(n) {
        return n !== name;
      });
    };

    Graph["interface"].nextVertexName = {
      description: "returns the next available vertex name"
    };

    Graph.prototype.nextVertexName = function() {
      this._initAvailableNames();
      return this.availableNames.shift();
    };

    Graph.prototype._initAvailableNames = function() {
      var _ref;
      return (_ref = this.availableNames) != null ? _ref : this.availableNames = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".split("");
    };

    Graph["interface"].edge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"]],
      description: "if there is an edge from `source` to `target`, returns it. " + "understands undirected graphs."
    };

    Graph.prototype.edge = function(source, target) {
      var sourceId, targetId, _ref, _ref1, _ref2, _ref3;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      if (this.directed) {
        return (_ref = this.edges[sourceId]) != null ? _ref[targetId] : void 0;
      } else {
        return (_ref1 = (_ref2 = this.edges[sourceId]) != null ? _ref2[targetId] : void 0) != null ? _ref1 : (_ref3 = this.edges[targetId]) != null ? _ref3[sourceId] : void 0;
      }
    };

    Graph.prototype.modifyEdgeSource = function(edge, newSource) {
      var newSourceId, _base, _base1, _name, _ref, _ref1;
      newSourceId = this.idify(newSource);
      delete this.edges[edge.source.id][edge.target.id];
      ((_ref = (_base = this.edges)[newSourceId]) != null ? _ref : _base[newSourceId] = {})[edge.target.id] = edge;
      if (!this.directed) {
        delete this.edges[edge.target.id][edge.source.id];
        ((_ref1 = (_base1 = this.edges)[_name = edge.target.id]) != null ? _ref1 : _base1[_name] = {})[newSourceId] = edge;
      }
      return edge.source = this.vertex(newSourceId);
    };

    Graph.prototype.modifyEdgeTarget = function(edge, newTarget) {
      var newTargetId, _base, _ref;
      newTargetId = this.idify(newTarget);
      delete this.edges[edge.source.id][edge.target.id];
      this.edges[edge.source.id][newTargetId] = edge;
      if (!this.directed) {
        delete this.edges[edge.target.id][edge.source.id];
        ((_ref = (_base = this.edges)[newTargetId]) != null ? _ref : _base[newTargetId] = {})[edge.source.id] = edge;
      }
      return edge.target = this.vertex(newTargetId);
    };

    Graph["interface"].edgeId = {
      args: [["e", "an edge object"]],
      description: "returns a string identifying `e`"
    };

    Graph.prototype.edgeId = function(e) {
      return e.source.id + "--" + e.target.id;
    };

    Graph["interface"].addEdge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"], ["attrs", "an object containing edge attributes"]],
      description: "adds an edge from `source` to `target` with attributes copied from `attrs`"
    };

    Graph.prototype.addEdge = function(source, target, attrs) {
      var edge, k, s, sourceId, t, targetId, v, _base, _base1, _ref, _ref1;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      if (this.edge(sourceId, targetId)) {
        return;
      }
      s = this.vertex(sourceId);
      t = this.vertex(targetId);
      if (!((s != null) && (t != null))) {
        return;
      }
      edge = {
        source: s,
        target: t,
        type: 'Edge'
      };
      if (attrs != null) {
        for (k in attrs) {
          v = attrs[k];
          if (k !== 'source' && k !== 'target') {
            if ((v != null ? v.type : void 0) === 'Vertex') {
              edge[k] = this.vertex(v);
            } else {
              edge[k] = v;
            }
          }
        }
      }
      ((_ref = (_base = this.edges)[sourceId]) != null ? _ref : _base[sourceId] = {})[targetId] = edge;
      if (!this.directed) {
        ((_ref1 = (_base1 = this.edges)[targetId]) != null ? _ref1 : _base1[targetId] = {})[sourceId] = edge;
      }
      return edge;
    };

    Graph["interface"].removeEdge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"]],
      description: "removes the edge from `source` to `target`. understands directedness."
    };

    Graph.prototype.removeEdge = function(source, target) {
      var edge, sourceId, targetId, _ref, _ref1, _ref2;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      edge = (_ref = this.edges[sourceId]) != null ? _ref[targetId] : void 0;
      if ((_ref1 = this.edges[sourceId]) != null) {
        delete _ref1[targetId];
      }
      if (!this.directed) {
        if ((_ref2 = this.edges[targetId]) != null) {
          delete _ref2[sourceId];
        }
      }
      return edge;
    };

    Graph["interface"].getEdges = {
      description: "returns an array of all edges in the graph"
    };

    Graph.prototype.getEdges = function() {
      var edge, name, outgoingEdges, results, source, target, _ref, _results;
      results = {};
      _ref = this.edges;
      for (source in _ref) {
        outgoingEdges = _ref[source];
        for (target in outgoingEdges) {
          edge = outgoingEdges[target];
          name = "" + edge.source.id + "->" + edge.target.id;
          results[name] = edge;
        }
      }
      _results = [];
      for (name in results) {
        edge = results[name];
        _results.push(edge);
      }
      return _results;
    };

    Graph["interface"].eachEdge = {
      args: [["f", "a function taking an edge"]],
      description: "applies `f` to each edge"
    };

    Graph.prototype.eachEdge = function(f) {
      var e, _i, _len, _ref, _results;
      _ref = this.getEdges();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        if (e != null) {
          _results.push(f(e));
        }
      }
      return _results;
    };

    Graph["interface"].eachEdgeBy = {
      args: [["comp", "a comparator"], ["f", "a function taking an edge"]],
      description: "applies `f` to each edge, ordered by `comp`"
    };

    Graph.prototype.eachEdgeBy = function(comp, f) {
      var e, es, _i, _len, _ref, _results;
      es = this.getEdges();
      _ref = es.sort(comp);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        if (e != null) {
          _results.push(f(e));
        }
      }
      return _results;
    };

    Graph["interface"].neighbors = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "returns all neighbors of `v`"
    };

    Graph.prototype.neighbors = function(v) {
      var edge, target;
      return ((function() {
        var _ref, _results;
        _ref = this.edges[this.idify(v)];
        _results = [];
        for (target in _ref) {
          edge = _ref[target];
          _results.push(this.vertex(target));
        }
        return _results;
      }).call(this)).sort(function(a, b) {
        return a.name - b.name;
      });
    };

    Graph["interface"].eachNeighbor = {
      args: [["v", "a vertex object containing an id field, or an id"], ["f", "a function that takes a vertex as input"]],
      description: "applies `f` to each neighbor of `v`"
    };

    Graph.prototype.eachNeighbor = function(v, f) {
      var neighbor, _i, _len, _ref, _results;
      _ref = this.neighbors(v);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        neighbor = _ref[_i];
        if (neighbor != null) {
          _results.push(f(neighbor));
        }
      }
      return _results;
    };

    Graph["interface"].outgoingEdges = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "returns all outgoing edges of `v`"
    };

    Graph.prototype.outgoingEdges = function(v) {
      var edge, outgoingEdges, result, source, target, vid, _ref, _ref1;
      vid = this.idify(v);
      result = [];
      _ref = this.edges;
      for (source in _ref) {
        outgoingEdges = _ref[source];
        for (target in outgoingEdges) {
          edge = outgoingEdges[target];
          if (source === vid) {
            result.push(edge);
          }
        }
      }
      return (_ref1 = []).concat.apply(_ref1, result);
    };

    Graph["interface"].incomingEdges = {
      args: [["v", "a vertex object containing an id field, or an id"]],
      description: "returns all incoming edges of `v`"
    };

    Graph.prototype.incomingEdges = function(v) {
      var edge, outgoingEdges, result, source, target, vid, _ref, _ref1;
      vid = this.idify(v);
      result = [];
      _ref = this.edges;
      for (source in _ref) {
        outgoingEdges = _ref[source];
        for (target in outgoingEdges) {
          edge = outgoingEdges[target];
          if (target === vid) {
            result.push(edge);
          }
        }
      }
      return (_ref1 = []).concat.apply(_ref1, result);
    };

    Graph["interface"].collapse = {
      args: [["e", "an edge of the graph to collapse"], ["overlapFunc", "a function taking two edges and returning one of them"]],
      description: "collapses `e`, creating a new vertex. By default " + "vertex names are concatenations of the collapsed vertices' " + "names, vertices' positions are averaged, and overlapping " + "edges take the min weight. only works on undirected graphs. " + "`overlapFunc` is an optional parameter for a function that " + "decides what to do with overlapping edges after a collapse. " + "By default overlapFunc keeps the edge with least `w`."
    };

    Graph.prototype.collapse = function(edge, overlapFunc) {
      var alterEdge, newVtx, v1, v2, _i, _j, _len, _len1, _ref, _ref1, _ref2, _results,
        _this = this;
      if (this.directed) {
        throw "collapse: called on directed graph";
      }
      v1 = this.vertex(edge.source);
      v2 = this.vertex(edge.target);
      if (!((v1 != null) && (v2 != null))) {
        throw "collapse: undefined edge";
      }
      if (overlapFunc == null) {
        overlapFunc = function(e1, e2) {
          if (e1.w <= e2.w) {
            return e1;
          } else {
            return e2;
          }
        };
      }
      newVtx = this.addVertex({
        name: (v1.name + v2.name).split("").sort().join(""),
        id: v1.id + v2.id,
        x: Math.floor((v1.x + v2.x) / 2),
        y: Math.floor((v1.y + v2.y) / 2)
      });
      alterEdge = function(vid, edge) {
        var choice, existingEdge;
        if (edge.source.id === vid) {
          existingEdge = _this.edge(newVtx, edge.target);
          if (existingEdge) {
            choice = overlapFunc(edge, existingEdge);
            _this.removeEdge(newVtx, edge.target);
            _this.addEdge(newVtx, edge.target, choice);
          } else {
            _this.modifyEdgeSource(edge, newVtx);
          }
        }
        if (edge.target.id === vid) {
          existingEdge = _this.edge(edge.source, newVtx);
          if (existingEdge) {
            choice = overlapFunc(edge, existingEdge);
            _this.removeEdge(edge.source, newVtx);
            return _this.addEdge(edge.source, newVtx, choice);
          } else {
            return _this.modifyEdgeTarget(edge, newVtx);
          }
        }
      };
      _ref = this.getEdges();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        edge = _ref[_i];
        alterEdge(v1.id, edge);
        alterEdge(v2.id, edge);
      }
      if ((_ref1 = this.recentlyCollapsed) == null) {
        this.recentlyCollapsed = {};
      }
      this.recentlyCollapsed[v1.id] = newVtx;
      this.recentlyCollapsed[v2.id] = newVtx;
      this.removeVertex(v1);
      this.removeVertex(v2);
      _ref2 = this.getEdges();
      _results = [];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        edge = _ref2[_j];
        if (edge.source === edge.target) {
          _results.push(this.removeEdge(edge.source, edge.target));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Graph.prototype.idify = function(v) {
      if (typeof v === 'string' || !(v != null)) {
        return v;
      }
      return v.id;
    };

    Graph.prototype.clone = function() {
      var r;
      r = new Vamonos.DataStructure.Graph({
        directed: this.directed,
        prefix: this.prefix
      });
      this.eachVertex(function(v) {
        return r.addVertex(v);
      });
      this.eachEdge(function(e) {
        return r.addEdge(e.source, e.target, e);
      });
      r.recentlyCollapsed = Vamonos.clone(this.recentlyCollapsed);
      return r;
    };

    Graph["interface"].toString = {
      description: "returns a javascripty string you could use to initialize a graph with."
    };

    Graph.prototype.toString = function() {
      var attr, attrs, e, s, value, _i, _len, _ref;
      s = "defaultGraph: new Vamonos.DataStructure.Graph({\n    directed: " + this.directed + ",\n    prefix: \"" + this.prefix + "\",\n    vertices: [\n";
      this.eachVertex(function(vtx) {
        var attr, attrs, value;
        attrs = [];
        for (attr in vtx) {
          value = vtx[attr];
          if (!(value != null)) {
            continue;
          }
          if (attr === "type") {
            continue;
          }
          if (value.type === 'Vertex') {
            attrs.push("" + attr + ": '" + value.id + "'");
          } else if (value.constructor.name === 'String') {
            attrs.push("" + attr + ": '" + value + "'");
          } else {
            attrs.push("" + attr + ": " + value);
          }
        }
        return s += "\t\t{ " + (attrs.join(", ")) + " },\n";
      });
      s += "\t],\n\tedges: [\n";
      _ref = this.getEdges();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        attrs = [];
        for (attr in e) {
          value = e[attr];
          if (attr === "type") {
            continue;
          }
          if (value.type === 'Vertex') {
            attrs.push("" + attr + ": '" + value.id + "'");
          } else if (value.constructor.name === 'String') {
            attrs.push("" + attr + ": '" + value + "'");
          } else {
            attrs.push("" + attr + ": " + value);
          }
        }
        s += "\t\t{ " + (attrs.join(", ")) + " },\n";
      }
      s += "    ]\n}),";
      return s;
    };

    Graph.prototype.reconstruct = function(graph) {
      var e, id, srcId, tObj, trgId, vtx, _ref, _ref1, _results;
      if (graph.prefix != null) {
        this.prefix = graph.prefix;
      }
      if (graph.directed != null) {
        this.directed = graph.directed;
      }
      if (graph.vertices != null) {
        this.vertices = {};
        _ref = graph.vertices;
        for (id in _ref) {
          vtx = _ref[id];
          this.addVertex(vtx);
        }
      }
      if (graph.edges != null) {
        _ref1 = graph.edges;
        _results = [];
        for (srcId in _ref1) {
          tObj = _ref1[srcId];
          _results.push((function() {
            var _results1;
            _results1 = [];
            for (trgId in tObj) {
              e = tObj[trgId];
              _results1.push(this.addEdge(e.source, e.target, e));
            }
            return _results1;
          }).call(this));
        }
        return _results;
      }
    };

    return Graph;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      Graph: Graph
    }
  });

}).call(this);

(function() {
  var Queue;

  Queue = (function() {

    Queue.description = "A queue data structure for use in algorithms and widgets.";

    Queue["interface"] = {};

    Queue.spec = {
      initialArray: {
        type: "Array",
        defaultValue: [],
        description: "The initial value of the queue."
      },
      comparator: {
        type: "Function",
        defaultValue: void 0,
        description: "A function taking two elements and returning `1`, " + "`0`, or `-1`. Used in the `sort` method."
      }
    };

    function Queue(arg) {
      var _ref;
      if (arg == null) {
        arg = {};
      }
      this.initialize((_ref = arg != null ? arg.initialArray : void 0) != null ? _ref : []);
      this.comparator = arg != null ? arg.comparator : void 0;
      this.type = 'Queue';
    }

    Queue["interface"].initialize = {
      args: [["elems", "an array of elements. DefaultValue: `[]`"]],
      description: "Sets `elems` to be the content of the queue."
    };

    Queue.prototype.initialize = function(elems) {
      if (elems == null) {
        elems = [];
      }
      this.guts = elems.slice(0);
      return this;
    };

    Queue["interface"].enqueue = {
      args: [["elem", "an element"]],
      description: "Pushes `elem` onto the queue."
    };

    Queue.prototype.enqueue = function(elem) {
      return this.guts.push(elem);
    };

    Queue["interface"].dequeue = {
      description: "Pops and element from the queue."
    };

    Queue.prototype.dequeue = function() {
      return this.guts.shift();
    };

    Queue["interface"].extractMin = {
      description: "Extracts the minimum element from the queue, according to " + "the comparator provided to the constructor, or JavaScript's " + "internal comparator."
    };

    Queue.prototype.extractMin = function() {
      this.sort();
      return this.dequeue();
    };

    Queue["interface"].isEmpty = {
      description: "Returns true if the queue is empty."
    };

    Queue.prototype.isEmpty = function() {
      return this.guts.length === 0;
    };

    Queue.prototype.clone = function() {
      return new Vamonos.DataStructure.Queue({
        initialArray: Vamonos.clone(this.guts),
        comparator: this.comparator
      });
    };

    Queue["interface"].sort = {
      description: "Sorts the queue in place according to the comparator " + "provided to the constructor, or JavaScript's internal " + "comparator."
    };

    Queue.prototype.sort = function() {
      return this.guts.sort(this.comparator);
    };

    Queue["interface"].toString = {
      description: "Returns a string version of the queue."
    };

    Queue.prototype.toString = function() {
      var elem;
      if (this.isEmpty()) {
        return "[ ]";
      } else {
        return "[" + (((function() {
          var _i, _len, _ref, _results;
          _ref = this.guts;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            elem = _ref[_i];
            _results.push(Vamonos.rawToTxt(elem));
          }
          return _results;
        }).call(this)).join(", ")) + "]";
      }
    };

    Queue["interface"].contains = {
      args: [["x", "an element"]],
      description: "Returns true if `x` is in the queue."
    };

    Queue.prototype.contains = function(x) {
      return this.guts.some(function(elem) {
        return elem === x;
      });
    };

    return Queue;

  })();

  this.Vamonos["export"]({
    DataStructure: {
      Queue: Queue
    }
  });

}).call(this);

(function() {
  var Visualizer,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Visualizer = (function() {

    Visualizer.description = "The central object of the Vamonos system. The Visualizer controls\nthe flow of information to and from Widgets, keeps track of\nnamespaces and variables, and runs the simulation itself.";

    Visualizer.spec = {
      widgets: {
        type: "Array",
        description: "a list of widgets for use in the visualization",
        defaultValue: []
      },
      algorithm: {
        type: ["Function", "Object"],
        description: "as a function, the 'main' procedure. as an object, an " + "association of procedure names to functions.",
        defaultValue: (function() {})
      },
      maxFrames: {
        type: "Number",
        defaultValue: 250,
        description: "the maximum number of snapshots"
      },
      autoStart: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to skip edit mode at load time"
      },
      maxCallStackSnapshotDepth: {
        type: "Number",
        defaultValue: void 0,
        description: "the maximum depth of the callstack that snapshots " + "will be taken at when it is set as a watchVar."
      },
      exportAfterEditMode: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the visualizer will update the location with " + "the updated input after leaving edit mode every time"
      },
      unbounded: {
        type: "Boolean",
        defaultValue: false,
        description: "whether there is a limit on how many lines an algorithm can take"
      }
    };

    function Visualizer(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.breakpoints = {};
      this.watchVars = [];
      this.registeredVars = {};
      this.procedures = {};
      this.initializeStash();
      this.prepareAlgorithm(this.algorithm);
      this.tellWidgets("setup", this);
      this.tellWidgets("setupEnd");
      this.tellWidgets("externalInput", this["import"]());
      if (this.autoStart) {
        this.runAlgorithm();
      } else {
        this.editMode();
      }
    }

    Visualizer.prototype.trigger = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "runAlgorithm":
          return this.runAlgorithm();
        case "editMode":
          return this.editMode();
        case "editStop":
          return this.tellWidgets("editStop");
        case "nextFrame":
          return this.nextFrame();
        case "prevFrame":
          return this.prevFrame();
        case "jumpFrame":
          return this.jumpFrame.apply(this, options);
      }
    };

    Visualizer.prototype.registerVariable = function(name) {
      var ns, varName, _base, _ref, _ref1;
      _ref = this.parseVarName(name), ns = _ref[0], varName = _ref[1];
      return ((_ref1 = (_base = this.registeredVars)[ns]) != null ? _ref1 : _base[ns] = []).push(varName);
    };

    Visualizer.prototype.setVariable = function(name, value) {
      var ns, varName, _ref;
      _ref = this.parseVarName(name), ns = _ref[0], varName = _ref[1];
      this.stash.inputScope[name] = value;
      return value;
    };

    Visualizer.prototype.getVariable = function(name) {
      var ns, varName, _ref;
      _ref = this.parseVarName(name), ns = _ref[0], varName = _ref[1];
      return this.stash.inputScope[name];
    };

    Visualizer.prototype.setWatchVar = function(varName) {
      return Vamonos.insertSet(varName, this.watchVars);
    };

    Visualizer.prototype.isWatchVar = function(varName) {
      return __indexOf.call(this.watchVars, varName) >= 0;
    };

    Visualizer.prototype.removeWatchVar = function(varName) {
      if (__indexOf.call(this.watchVars, varName) < 0) {
        return;
      }
      return (function(w) {
        return w.splice(w.indexOf(varName), 1);
      })(this.watchVars);
    };

    Visualizer.prototype.getBreakpoints = function(proc) {
      var _base, _ref;
      return (_ref = (_base = this.breakpoints)[proc]) != null ? _ref : _base[proc] = [];
    };

    Visualizer.prototype.getCurrentBreakpoints = function() {
      return this.getBreakpoints(this.stash.currentScope._procName);
    };

    Visualizer.prototype.setBreakpoint = function(b, proc) {
      var _base, _ref;
      if ((_ref = (_base = this.breakpoints)[proc]) == null) {
        _base[proc] = [];
      }
      return Vamonos.insertSet(b, this.breakpoints[proc]);
    };

    Visualizer.prototype.removeBreakpoint = function(b, proc) {
      var _base, _ref;
      if ((_ref = (_base = this.breakpoints)[proc]) == null) {
        _base[proc] = [];
      }
      return (function(bps) {
        return bps.splice(bps.indexOf(b), 1);
      })(this.breakpoints[proc]);
    };

    Visualizer.prototype.parseVarName = function(varname, defaultScope) {
      if (defaultScope == null) {
        defaultScope = "main";
      }
      if (!varname.match(/::/)) {
        return [defaultScope, varname];
      }
      return varname.split(/::/);
    };

    Visualizer.prototype.initializeStash = function() {
      var _base, _ref, _ref1;
      if ((_ref = this.stash) == null) {
        this.stash = {};
      }
      if ((_ref1 = (_base = this.stash).inputScope) == null) {
        _base.inputScope = {
          _procName: "input"
        };
      }
      this.stash.callStack = [this.stash.inputScope];
      this.stash.globalScope = {};
      return this.stash.currentScope = this.stash.inputScope;
    };

    Visualizer.prototype.getFrame = function(num, shallow) {
      var bare, c, procName, procsAlreadySeen, r, scope, _i, _len, _ref;
      if (num == null) {
        num = 0;
      }
      if (shallow == null) {
        shallow = false;
      }
      r = {
        _callStack: (function() {
          var _i, _len, _ref, _results;
          _ref = this.stash.callStack;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            _results.push({
              procName: c._procName,
              args: c._args
            });
          }
          return _results;
        }).call(this),
        _frameNumber: num,
        _prevLine: this.stash.currentScope._prevLine,
        _nextLine: this.stash.currentScope._nextLine,
        _procName: this.stash.currentScope._procName
      };
      r._callStack[0].activeStackFrame = true;
      procsAlreadySeen = [];
      _ref = this.stash.callStack;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        scope = _ref[_i];
        procName = scope._procName;
        if (__indexOf.call(procsAlreadySeen, procName) >= 0) {
          continue;
        }
        bare = procName === this.stash.currentScope._procName;
        this.cloneScopeToObj(r, procName, scope, bare, shallow);
        procsAlreadySeen.push(procName);
      }
      this.cloneScopeToObj(r, "global", this.stash.globalScope, true, shallow);
      this.cloneScopeToObj(r, "input", this.stash.inputScope, true, shallow);
      return r;
    };

    Visualizer.prototype.cloneScopeToObj = function(obj, procName, scope, bare, shallow) {
      var cloned, k, v, _name, _ref, _ref1, _results;
      if (bare == null) {
        bare = false;
      }
      _results = [];
      for (k in scope) {
        v = scope[k];
        if (typeof v === 'function') {
          continue;
        }
        if (k === 'global') {
          continue;
        }
        if (/^_/.test(k)) {
          continue;
        }
        cloned = shallow ? v : Vamonos.clone(v);
        if ((_ref = obj[_name = "" + procName + "::" + k]) == null) {
          obj[_name] = cloned;
        }
        if (bare) {
          _results.push((_ref1 = obj[k]) != null ? _ref1 : obj[k] = cloned);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Visualizer.prototype.line = function(n, relevantScope) {
      var frame, reasons, _ref, _ref1;
      if (this.frameNumber >= this.maxFrames) {
        throw "too many frames";
      }
      if (!this.unbounded && ++this.numCallsToLine > 100000) {
        throw "too many lines";
      }
      switch (n) {
        case "call":
          this.calledProc = relevantScope.procName;
          break;
        case "ret":
          if (!relevantScope.tailCall) {
            ((_ref = this.returnStack) != null ? _ref : this.returnStack = []).unshift(relevantScope);
          }
          this.returnedProc = relevantScope.procName;
      }
      if (typeof n === 'number') {
        this.stash.currentScope._nextLine = n;
      }
      reasons = this.takeSnapshotReasons(n);
      if (reasons) {
        frame = this.getFrame(++this.frameNumber);
        frame._snapshotReasons = reasons;
        if ((_ref1 = this.returnStack) != null ? _ref1.length : void 0) {
          frame._returnStack = this.returnStack.slice(0);
          this.returnStack.length = 0;
        }
        this.frames.push(frame);
        if (n === "call") {
          this.calledProc = null;
        } else {
          this.returnedProc = this.calledProc = void 0;
        }
      }
      if (typeof n === 'number') {
        this.stash.currentScope._prevLine = n;
      }
      if (n === "call") {
        return this.returnStack = [];
      }
    };

    Visualizer.prototype.takeSnapshotReasons = function(n) {
      var changes, reasons;
      reasons = null;
      if (__indexOf.call(this.getCurrentBreakpoints(), n) >= 0) {
        (reasons != null ? reasons : reasons = {}).breakpoint = n;
      }
      if (typeof n === 'number') {
        changes = this.watchVarsChanged();
        if (changes != null) {
          (reasons != null ? reasons : reasons = {}).watchVarsChanged = changes;
        }
        if (this.callStackSnapshotOk() && this.calledProc) {
          (reasons != null ? reasons : reasons = {}).procCalled = this.calledProc;
        }
        if (this.callStackSnapshotOk() && this.returnedProc) {
          (reasons != null ? reasons : reasons = {}).procReturned = this.returnedProc;
        }
      }
      if (n === 'call' && this.returnedProc && this.callStackSnapshotOk()) {
        if (this.returnedProc) {
          (reasons != null ? reasons : reasons = {}).procReturned = this.returnedProc;
        }
      }
      if (n === "end") {
        (reasons != null ? reasons : reasons = {}).procReturned = "main";
      }
      if (n.type === "VamonosError") {
        (reasons != null ? reasons : reasons = {}).error = n.content;
      }
      return reasons;
    };

    Visualizer.prototype.callStackSnapshotOk = function() {
      var _ref;
      if (!this.isWatchVar("_callstack")) {
        return;
      }
      if (!(this.stash.callStack.length <= ((_ref = this.maxCallStackSnapshotDepth) != null ? _ref : Infinity))) {
        return;
      }
      return true;
    };

    Visualizer.prototype.watchVarsChanged = function() {
      var fakeFrame, left, ret, right, v;
      if (!this.watchVars.length) {
        return;
      }
      fakeFrame = this.getFrame(Infinity, true);
      ret = (function() {
        var _i, _len, _ref, _ref1, _results;
        _ref = this.watchVars;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          v = _ref[_i];
          left = (_ref1 = this.frames[this.frames.length - 1]) != null ? _ref1[v] : void 0;
          right = fakeFrame[v];
          if (Vamonos.stringify(left) === Vamonos.stringify(right)) {
            continue;
          }
          _results.push(v);
        }
        return _results;
      }).call(this);
      if (ret.length) {
        return ret;
      } else {
        return null;
      }
    };

    Visualizer.prototype.prepareAlgorithm = function(algorithm) {
      var procName, procedure, _results;
      if (typeof algorithm === 'function') {
        algorithm = {
          "main": algorithm
        };
      }
      _results = [];
      for (procName in algorithm) {
        procedure = algorithm[procName];
        _results.push(this.procedures[procName] = this.wrapProcedure(procName, procedure));
      }
      return _results;
    };

    Visualizer.prototype.wrapProcedure = function(procName, procedure) {
      var _this = this;
      return function(args, locals) {
        var name, newScope, proc, ret, returnFrame, value, _i, _len, _ref, _ref1, _ref2, _ref3;
        if (args == null) {
          args = {};
        }
        newScope = {
          _procName: procName,
          _args: args
        };
        _ref = _this.procedures;
        for (name in _ref) {
          proc = _ref[name];
          newScope[name] = proc;
        }
        for (name in args) {
          value = args[name];
          newScope[name] = value;
        }
        _ref2 = (_ref1 = _this.registeredVars[procName]) != null ? _ref1 : [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          name = _ref2[_i];
          if ((_ref3 = newScope[name]) == null) {
            newScope[name] = void 0;
          }
        }
        newScope.global = _this.stash.globalScope;
        _this.stash.currentScope = newScope;
        _this.line("call", {
          procName: procName
        });
        if (args._tailCall) {
          _this.stash.callStack[0] = newScope;
        } else {
          _this.stash.callStack.unshift(newScope);
        }
        ret = procedure.call(newScope, function(n) {
          return _this.line(n);
        });
        returnFrame = {
          procName: _this.stash.currentScope._procName,
          args: _this.stash.currentScope._args,
          returnValue: ret,
          tailCall: args._tailCall
        };
        _this.line("ret", returnFrame);
        if (!args._tailCall) {
          _this.stash.callStack.shift();
          _this.stash.currentScope = _this.stash.callStack[0];
        }
        return ret;
      };
    };

    Visualizer.prototype.runAlgorithm = function() {
      var f, k, mainArgs, v, _i, _len, _ref, _ref1;
      if (this.mode === "display") {
        return;
      }
      this.frames = [];
      this.frameNumber = 0;
      this.numCallsToLine = 0;
      this.returnStack = [];
      this.initializeStash();
      if (this.mode === "edit") {
        this.tellWidgets("editStop");
      }
      if (this.exportAfterEditMode) {
        this["export"]();
      }
      this.mode = "running";
      if (this.checkErrors() !== "ok") {
        this.editMode();
        return;
      }
      mainArgs = {};
      _ref = this.stash.inputScope;
      for (k in _ref) {
        v = _ref[k];
        if (v == null) {
          continue;
        }
        if (/^_/.test(k)) {
          continue;
        }
        mainArgs[k] = v;
      }
      try {
        if (typeof this.procedures.main !== 'function') {
          throw "no main function";
        }
        $("body").addClass("processing");
        this.line("init");
        this.procedures.main(mainArgs);
        this.line("end");
        $("body").removeClass("processing");
      } catch (err) {
        $("body").removeClass("processing");
        if (err.type === "VamonosError") {
          this.line(err);
        } else {
          switch (err) {
            case "too many frames":
              alert("Too many frames. You may have an infinite loop, or you may " + "want to consider setting fewer breakpoints. " + "Visualization has been truncated to the first " + ("" + this.maxFrames + " frames."));
              break;
            case "too many lines":
              alert("Your algorithm has executed for over 100000 instructions. " + "You may have an infinite loop. " + "Visualization has been truncated.");
              break;
            default:
              throw err;
          }
        }
      }
      this.frameNumber = 0;
      _ref1 = this.frames;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        f = _ref1[_i];
        f._numFrames = this.frames.length;
      }
      this.mode = "display";
      this.tellWidgets("displayStart");
      return this.nextFrame();
    };

    Visualizer.prototype.tellWidgets = function() {
      var event, options, widget, _i, _len, _ref, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _ref = this.widgets;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        widget = _ref[_i];
        _results.push(widget.event.apply(widget, [event].concat(__slice.call(options))));
      }
      return _results;
    };

    Visualizer.prototype.editMode = function() {
      if (this.mode === "edit") {
        return;
      }
      if (this.mode === "display") {
        this.tellWidgets("displayStop");
      }
      this.mode = "edit";
      return this.tellWidgets("editStart");
    };

    Visualizer.prototype.checkErrors = function() {
      var errors;
      errors = this.tellWidgets("checkErrors", this).filter(function(x) {
        return x != null;
      });
      if (errors.length) {
        return alert(errors.join("\n"));
      } else {
        return "ok";
      }
    };

    Visualizer.prototype.nextFrame = function() {
      return this.goToFrame(this.frameNumber + 1, "next");
    };

    Visualizer.prototype.prevFrame = function() {
      return this.goToFrame(this.frameNumber - 1, "prev");
    };

    Visualizer.prototype.jumpFrame = function(n) {
      return this.goToFrame(n, "jump");
    };

    Visualizer.prototype.goToFrame = function(n, type) {
      if (!(this.mode === "display" && (1 <= n && n <= this.frames.length))) {
        return;
      }
      this.frameNumber = n;
      return this.tellWidgets("render", this.frames[this.frameNumber - 1], type);
    };

    Visualizer.prototype.allowExport = function(varName) {
      var _ref;
      return ((_ref = this.exportableVariables) != null ? _ref : this.exportableVariables = {})[varName] = true;
    };

    Visualizer.prototype["export"] = function() {
      var save, varName, varObj, _ref;
      if (this.exportableVariables == null) {
        return;
      }
      save = {};
      _ref = this.stash.inputScope;
      for (varName in _ref) {
        varObj = _ref[varName];
        if (!(varObj != null)) {
          continue;
        }
        if (!(varName in this.exportableVariables)) {
          continue;
        }
        if ((varObj["export"] != null) && varObj["export"].constructor.name === 'Function') {
          save[varName] = varObj["export"]();
        } else {
          save[varName] = varObj;
        }
      }
      window.history.replaceState({}, "", window.location.origin + window.location.pathname + "#" + Vamonos.encode(save));
      return "ok";
    };

    Visualizer.prototype["import"] = function() {
      var s;
      if (this._alreadyImported != null) {
        return {};
      }
      s = window.location.hash;
      if (!(s.length > 1 && s[0] === "#")) {
        return {};
      }
      this._alreadyImported = true;
      try {
        return Vamonos.decode(s.substr(1));
      } catch (error) {
        return {};
      }
    };

    Visualizer.prototype.deactivate = function() {
      return this.frozen = true;
    };

    Visualizer.prototype.activate = function() {
      return this.frozen = false;
    };

    return Visualizer;

  })();

  this.Vamonos["export"]({
    Visualizer: Visualizer
  });

}).call(this);

(function() {
  var Array,
    __slice = [].slice;

  Array = (function() {

    Array.description = "The Array widget displays an array. It is a minimal wrapper " + "around the ArrayGuts widget.";

    Array.dependencies = ["Vamonos.Widget.ArrayGuts"];

    Array.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      }
    };

    function Array(options) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: options,
        ignoreExtraArgs: true
      });
      this.$container = Vamonos.jqueryify(options.container);
      options.container = $("<table>", {
        "class": "array"
      });
      this.$container.append(options.container);
      this.guts = new Vamonos.Widget.ArrayGuts(options);
    }

    Array.prototype.event = function() {
      var event, options, viz, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      (_ref = this.guts).event.apply(_ref, arguments);
      if (event === 'setup') {
        return viz = options[0], options;
      }
    };

    return Array;

  })();

  this.Vamonos["export"]({
    Widget: {
      Array: Array
    }
  });

}).call(this);

(function() {
  var ArrayGuts,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  ArrayGuts = (function() {

    ArrayGuts.description = "ArrayGuts is where array input and display happen.";

    ArrayGuts.spec = {
      container: {
        type: "jQuery Selector",
        description: "a selector of the dom element the guts should go in"
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      defaultInput: {
        type: "Array",
        defaultValue: [],
        description: "the initial value for this array"
      },
      ignoreIndexZero: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the array should appear to be 1-indexed"
      },
      displayOnly: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the array is editable"
      },
      showChanges: {
        type: ["String", "Array"],
        description: "type of frame shifts to highlight changes at, " + "can be multiple types with an array of strings",
        defaultValue: "next"
      },
      cssRules: {
        type: "Array",
        defaultValue: [],
        description: "an array of triples of the form `\[comparison, " + "index-variable-expr, css-class\]` where every index in " + "the array that matches the comparason against the given " + "index-variable-expr receives the given css class.",
        example: "cssRules: [\n    ['>', 'k', 'shaded'],\n    ['=', 'k+i', 'green'],\n]"
      },
      showIndices: {
        type: "Array",
        description: "an array of index-variable-exprs of the form that show the " + "text of the index-variable-exprs on the indices they " + "correspond to.",
        defaultValue: []
      },
      showCellNumber: {
        type: "Boolean",
        defaultValue: true,
        description: "Whether to show a number above each cell."
      },
      showLabel: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to show the varName before the array"
      },
      cellFormat: {
        type: "Function",
        defaultValue: void 0,
        description: "A function that takes the raw contents of each entry and " + "returns the html to be displayed."
      },
      cellParse: {
        type: "Function",
        defaultValue: void 0,
        description: "A function that parses the text input from an editable cell " + "to an internal representation."
      },
      persistent: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to save the result of running the algorithm and to " + "use it as the initial value upon returning to edit mode."
      },
      _dummyIndexZero: {
        type: "Boolean",
        description: "",
        defaultValue: false
      },
      maxInputLength: {
        type: "Number",
        description: "Limit input to a certain number of characters.",
        defaultValue: void 0
      },
      firstCellBlank: {
        type: "Boolean",
        description: "Leave the first cell blank.",
        defaultValue: void 0
      }
    };

    function ArrayGuts(args) {
      var row, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.cellFormat) == null) {
        this.cellFormat = Vamonos.rawToTxt;
      }
      if ((_ref1 = this.cellParse) == null) {
        this.cellParse = Vamonos.txtToRaw;
      }
      this.$editBox = null;
      this.editIndex = null;
      this.lastInput = this.defaultInput;
      this.firstIndex = this.ignoreIndexZero ? 1 : 0;
      this.showChanges = Vamonos.arrayify((_ref2 = this.showChanges) != null ? _ref2 : "next");
      this.txtValid = function(txt) {
        return this.cellParse(txt) != null;
      };
      this.$rowIndices = $("<tr>", {
        "class": "array-indices"
      });
      this.$rowCells = $("<tr>", {
        "class": "array-cells"
      });
      this.$rowAnnotations = $("<tr>", {
        "class": "array-annotations"
      });
      this.$cells = [];
      this.$annotations = [];
      if (!this.showCellNumber) {
        this.$rowIndices.hide();
      }
      this.container.append(this.$rowIndices, this.$rowCells, this.$rowAnnotations);
      if (this.firstCellBlank) {
        this.container.css("margin-left", 26);
      }
      if (this.showLabel === true) {
        this.showLabel = this.varName + ":";
      }
      if (typeof this.showLabel === "string") {
        _ref3 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          row = _ref3[_i];
          row.append("<th></th>");
        }
        this.$rowCells.find("th").html(this.showLabel);
      }
      if (this.ignoreIndexZero && this._dummyIndexZero) {
        _ref4 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
        for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
          row = _ref4[_j];
          row.append("<th></th>");
        }
      }
    }

    ArrayGuts.prototype.event = function() {
      var event, i, inp, options, row, v, _, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _results,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          if (!this.displayOnly) {
            this.viz.setVariable(this.varName, this.lastInput.slice());
          }
          if (!this.displayOnly) {
            this.viz.allowExport(this.varName);
          }
          this.theArray = [];
          _ref = this.cssRules;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], _ = _ref1[0], i = _ref1[1], _ = _ref1[2];
            _ref2 = this.virtualIndexDependents(i);
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
              v = _ref2[_j];
              this.viz.registerVariable(v);
            }
          }
          _ref3 = this.showIndices;
          _results = [];
          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            i = _ref3[_k];
            _results.push((function() {
              var _l, _len3, _ref4, _results1;
              _ref4 = this.virtualIndexDependents(i);
              _results1 = [];
              for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
                v = _ref4[_l];
                _results1.push(this.viz.registerVariable(v));
              }
              return _results1;
            }).call(this));
          }
          return _results;
          break;
        case "editStart":
          this.arrayReset(this.persistent ? this.viz.getVariable(this.varName) : this.lastInput);
          if (this.displayOnly) {
            _ref4 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
            for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
              row = _ref4[_l];
              row.hide();
            }
          } else {
            this.$rowCells.on("click.arrayguts", "td", {}, function(e) {
              return _this.tdClick(e);
            });
            this.$rowCells.prop("title", "Click in any cell to edit this array");
          }
          return this.adjustHeight();
        case "editStop":
          if (!this.displayOnly) {
            this.$rowCells.off("click.arrayguts");
            this.lastInput = this.theArray.slice();
            this.viz.setVariable(this.varName, this.theArray.slice());
            this.stopEditingCell(false);
            return this.$rowCells.prop("title", "");
          }
          break;
        case "displayStart":
          if (this.displayOnly) {
            _ref5 = [this.$rowCells, this.$rowAnnotations];
            for (_m = 0, _len4 = _ref5.length; _m < _len4; _m++) {
              row = _ref5[_m];
              row.show();
            }
            if (this.showCellNumber) {
              this.$rowIndices.show();
            }
            this.theArray = [];
          }
          return this.arrayReset(this.lastInput);
        case "render":
          return this.render.apply(this, options);
        case "externalInput":
          inp = options[0];
          if (((_ref6 = inp[this.varName]) != null ? _ref6.constructor.name : void 0) !== 'Array') {
            return;
          }
          return this.lastInput = inp[this.varName];
      }
    };

    ArrayGuts.prototype.render = function(frame, type) {
      var $cell, $selector, className, compare, i, index, indexName, indices, newArray, row, showChange, target, _i, _j, _k, _l, _len, _len1, _len2, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
      newArray = frame[this.varName];
      if (newArray == null) {
        newArray = this.ignoreIndexZero ? [Infinity] : [];
      }
      _ref = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row.find("td").removeClass();
      }
      while (newArray.length < this.theArray.length) {
        this.arrayChopLast();
      }
      while (newArray.length > this.theArray.length) {
        this.arrayPushRaw(null);
      }
      _ref1 = this.cssRules;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        _ref2 = _ref1[_j], compare = _ref2[0], indexName = _ref2[1], className = _ref2[2];
        index = this.virtualIndex(frame, indexName);
        if (Vamonos.isNumber(index) && (this.firstIndex <= index && index < newArray.length)) {
          $cell = this.$cells[index];
          $selector = (function() {
            switch (compare) {
              case "<":
                return $cell.prevAll();
              case "<=":
                return $cell.prevAll().add($cell);
              case "=":
              case "==":
                return $cell;
              case ">":
                return $cell.nextAll();
              case ">=":
                return $cell.nextAll().add($cell);
            }
          })();
          $selector.addClass(className);
        }
      }
      if (newArray.length) {
        showChange = __indexOf.call(this.showChanges, type) >= 0;
        for (i = _k = _ref3 = this.firstIndex, _ref4 = newArray.length; _ref3 <= _ref4 ? _k < _ref4 : _k > _ref4; i = _ref3 <= _ref4 ? ++_k : --_k) {
          this.arraySetFromRaw(i, newArray[i], showChange);
        }
      }
      indices = {};
      _ref5 = this.showIndices;
      for (_l = 0, _len2 = _ref5.length; _l < _len2; _l++) {
        i = _ref5[_l];
        if (/::/.test(i)) {
          i = i.split(/::/)[1];
        }
        target = this.virtualIndex(frame, i);
        if ((_ref6 = indices[target]) == null) {
          indices[target] = [];
        }
        indices[target].push(i);
      }
      this.$rowAnnotations.find("td").empty();
      for (i = _m = _ref7 = this.firstIndex, _ref8 = newArray.length; _ref7 <= _ref8 ? _m < _ref8 : _m > _ref8; i = _ref7 <= _ref8 ? ++_m : --_m) {
        if (indices[i] != null) {
          this.$annotations[i].html(indices[i].join(", "));
        }
      }
      return this.adjustHeight();
    };

    ArrayGuts.prototype.adjustHeight = function() {
      var _ref;
      if (this.container.height() > ((_ref = this.maxHeight) != null ? _ref : 0)) {
        return this.maxHeight = this.container.height();
      } else {

      }
    };

    ArrayGuts.prototype.resetHeight = function() {
      this.maxHeight = 0;
      return this.container.css("min-height", "");
    };

    ArrayGuts.prototype.resetHeight = function() {
      this.maxHeight = 0;
      return this.container.css("height", "");
    };

    ArrayGuts.prototype.virtualIndex = function(frame, indexStr) {
      var prevOp, t, thisTerm, tokens, total, _i, _len;
      if (!indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)) {
        return null;
      }
      tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g);
      prevOp = "+";
      total = 0;
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        t = tokens[_i];
        if (prevOp != null) {
          thisTerm = Vamonos.isNumber(t) ? parseInt(t) : frame[t];
          if (thisTerm == null) {
            return null;
          }
          switch (prevOp) {
            case "+":
              total += thisTerm;
              break;
            case "-":
              total -= thisTerm;
          }
          prevOp = null;
        } else {
          prevOp = t;
        }
      }
      return total;
    };

    ArrayGuts.prototype.virtualIndexDependents = function(indexStr) {
      if (!indexStr.match(/^((?:[\w\d_]+::)?[a-zA-Z_]+|\d+)((-|\+)((?:[\w\d_]+::)?[a-zA-Z_]+|\d+))*$/g)) {
        return [];
      }
      return indexStr.match(/((?:[\w\d_]+::)?[a-zA-Z_]+)/g);
    };

    ArrayGuts.prototype.tdClick = function(event) {
      var i;
      if ((this.$editBox != null) && event.target === this.$editBox.get(0)) {
        return;
      }
      i = this.$rowCells.find("td").index($(event.target).closest("td"));
      return this.startEditingCell(i + this.firstIndex);
    };

    ArrayGuts.prototype.startEditingCell = function(index) {
      var $cell,
        _this = this;
      if (index === this.editIndex) {
        return;
      }
      if ((this.editIndex != null)) {
        this.stopEditingCell(true);
      }
      $cell = this.$cells[index];
      this.editIndex = index;
      this.$editBox = $("<input>", {
        "class": "inline-input",
        maxlength: this.maxInputLength
      });
      this.$editBox.val(this.cellFormat(this.theArray[index]));
      this.$editBox.width($cell.width());
      this.$editBox.on("blur.arrayguts", function(e) {
        return _this.stopEditingCell(true);
      });
      this.$editBox.on("keydown.arrayguts", function(e) {
        return _this.editKeyDown(e);
      });
      $cell.html(this.$editBox);
      $cell.addClass("editing");
      this.$editBox.focus();
      return this.$editBox.select();
    };

    ArrayGuts.prototype.startEditingNextCell = function() {
      if (this.editIndex === this.theArray.length - 1) {
        if (!this.txtValid(this.$editBox.val())) {
          return;
        }
        this.arrayPushRaw(null);
      }
      return this.startEditingCell(this.editIndex + 1);
    };

    ArrayGuts.prototype.startEditingPrevCell = function() {
      if (this.editIndex > this.firstIndex) {
        return this.startEditingCell(this.editIndex - 1);
      }
    };

    ArrayGuts.prototype.stopEditingCell = function(save) {
      var $cell, dead, last, txt;
      if (!((this.editIndex != null) && (this.$editBox != null))) {
        return;
      }
      $cell = this.$cells[this.editIndex];
      last = this.editIndex === this.theArray.length - 1;
      txt = $cell.children("input").val();
      dead = last && this.editIndex !== this.firstIndex && ((save && !this.txtValid(txt)) || (!save && !(this.theArray[this.editIndex] != null)));
      if (dead) {
        this.arrayChopLast();
      } else if (save && this.txtValid(txt)) {
        this.arraySetFromTxt(this.editIndex, txt);
      } else {
        this.arraySetFromRaw(this.editIndex, this.theArray[this.editIndex]);
      }
      $cell.removeClass("editing");
      this.editIndex = null;
      return this.$editBox = null;
    };

    ArrayGuts.prototype.editKeyDown = function(event) {
      var elt, txt;
      switch (event.keyCode) {
        case 13:
          this.stopEditingCell(true);
          return false;
        case 32:
          this.startEditingNextCell();
          return false;
        case 9:
          if (event.shiftKey) {
            this.startEditingPrevCell();
          } else {
            this.startEditingNextCell();
          }
          return false;
        case 8:
          if (this.$editBox.val() === "") {
            this.startEditingPrevCell();
            return false;
          }
          break;
        case 37:
          elt = this.$editBox.get(0);
          if (elt.selectionStart === 0 && elt.selectionEnd === 0) {
            this.startEditingPrevCell();
            return false;
          }
          break;
        case 39:
          txt = this.$editBox.val();
          elt = this.$editBox.get(0);
          if (elt.selectionStart === txt.length && elt.selectionEnd === txt.length) {
            this.startEditingNextCell();
            return false;
          }
          break;
        case 27:
          this.stopEditingCell(false);
          return false;
        default:
          return true;
      }
    };

    ArrayGuts.prototype.arrayPushRaw = function(val, showChanges) {
      var $newAnnotation, $newCell, newindex;
      newindex = this.theArray.length;
      this.theArray.push(val);
      $newCell = $("<td>", {
        text: this.cellFormat(val)
      });
      $newAnnotation = $("<td>");
      this.$cells.push($newCell);
      this.$annotations.push($newAnnotation);
      this.$rowIndices.append("<td>" + newindex + "</td>");
      this.$rowCells.append($newCell);
      this.$rowAnnotations.append($newAnnotation);
      if (showChanges) {
        return this.markChanged(newindex);
      }
    };

    ArrayGuts.prototype.arrayChopLast = function() {
      var row, _i, _len, _ref, _results;
      this.theArray.length--;
      this.$cells.length--;
      this.$annotations.length--;
      _ref = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        _results.push(row.find("td:last-child").remove());
      }
      return _results;
    };

    ArrayGuts.prototype.arraySetFromTxt = function(index, txtVal, showChanges) {
      return this.arraySetFromRaw(index, this.cellParse(txtVal), showChanges);
    };

    ArrayGuts.prototype.arraySetFromRaw = function(index, rawVal, showChanges) {
      var $cell, newhtml, oldhtml;
      this.theArray[index] = rawVal;
      $cell = this.$cells[index];
      oldhtml = $cell.html();
      newhtml = this.theArray[index] != null ? "" + this.cellFormat(this.theArray[index]) : "";
      if (oldhtml !== newhtml) {
        $cell.html(newhtml);
        if (showChanges) {
          return this.markChanged(index);
        }
      }
    };

    ArrayGuts.prototype.arrayReset = function(newArray) {
      var row, v, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2, _results;
      this.theArray.length = 0;
      this.$cells.length = 0;
      this.$annotations.length = 0;
      for (_i = 0, _ref = this.firstIndex; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
        this.theArray.push(null);
        this.$cells.push(null);
        this.$annotations.push(null);
      }
      _ref1 = [this.$rowIndices, this.$rowCells, this.$rowAnnotations];
      for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
        row = _ref1[_j];
        row.find("td").remove();
      }
      if ((newArray != null ? newArray.length : void 0) > this.firstIndex) {
        _ref2 = newArray.slice(this.firstIndex);
        _results = [];
        for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
          v = _ref2[_k];
          _results.push(this.arrayPushRaw(v));
        }
        return _results;
      } else {
        return this.arrayPushRaw(null);
      }
    };

    ArrayGuts.prototype.markChanged = function(index) {
      var $cell, dup;
      $cell = this.$cells[index];
      $cell.addClass("changed");
      dup = $cell.clone();
      $cell.replaceWith(dup);
      return this.$cells[index] = dup;
    };

    return ArrayGuts;

  })();

  this.Vamonos["export"]({
    Widget: {
      ArrayGuts: ArrayGuts
    }
  });

}).call(this);

(function() {
  var BinaryTree,
    __slice = [].slice;

  BinaryTree = (function() {

    BinaryTree.description = "A representation of a binary tree.";

    BinaryTree.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      defaultTree: {
        type: "BinaryTree",
        description: "the initial tree",
        defaultValue: void 0
      },
      xscalar: {
        type: "Number",
        defaultValue: 60,
        description: "how far to seperate nodes on the x axis"
      },
      yscalar: {
        type: "Number",
        defaultValue: 40,
        description: "how far to seperate nodes on the y axis"
      }
    };

    function BinaryTree(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.theTree = (_ref = this.defaultTree) != null ? _ref : new Vamonos.DataStructure.BinaryTree();
      this.graphDisplay = new Vamonos.Widget.GraphDisplay({
        container: this.container,
        vertexLabels: {
          inner: function(n) {
            return n.val;
          }
        },
        draggable: false,
        highlightChanges: false,
        resizable: false
      });
    }

    BinaryTree.prototype.event = function() {
      var event, frame, options, type, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return (_ref = this.graphDisplay).event.apply(_ref, [event].concat(__slice.call(options)));
        case "render":
          frame = options[0], type = options[1];
          return this.draw(frame[this.varName]);
      }
    };

    BinaryTree.prototype.draw = function(tree) {
      var graph, _ref;
      this.generatePositions(tree);
      graph = tree.asGraph();
      this.graphDisplay.fitGraph(graph, this.graphDrawn);
      this.graphDisplay.draw(graph, this.graphDrawn);
      return (_ref = this.graphDrawn) != null ? _ref : this.graphDrawn = true;
    };

    BinaryTree.prototype.generatePositions = function(tree) {
      var _this = this;
      return tree.eachNodeInOrder(function(n) {
        n.x = n.order * _this.xscalar + _this.graphDisplay.containerMargin;
        return n.y = n.depth * _this.yscalar + _this.graphDisplay.containerMargin;
      });
    };

    BinaryTree.prototype.editMode = function() {
      this.draw(this.theTree);
      return this.setContainerEditBindings();
    };

    BinaryTree.prototype.setContainerEditBindings = function() {
      var _this = this;
      return this.graphDisplay.$outer.on("click.vamonos-graph", function(e) {
        var $target;
        $target = $(e.target);
        if ($target.is("div.vertex-contents")) {
          _this.selectNode($target.parent());
        } else {
          _this.deselect();
        }
        return true;
      });
    };

    BinaryTree.prototype.selected = function() {
      if (this.$selectedNode != null) {
        return 'node';
      }
    };

    BinaryTree.prototype.selectNode = function(node) {
      var _this = this;
      if ('node' === this.selected()) {
        this.deselectNode();
      }
      this.$selectedNode = node;
      node.addClass("selected");
      node.find("div.vertex-contents").on("click", function() {
        return _this.editValue(_this.$selectedNode);
      });
      return this.openDrawer();
    };

    BinaryTree.prototype.deselect = function() {
      this.deselectNode();
      return this.closeDrawer();
    };

    BinaryTree.prototype.deselectNode = function() {
      if (!this.$selectedNode) {
        return;
      }
      this.$selectedNode.find("div.vertex-contents").off("click");
      this.$selectedNode.removeClass("selected");
      return this.$selectedNode = void 0;
    };

    BinaryTree.prototype.openDrawer = function() {
      var buttons, node,
        _this = this;
      if ('node' !== this.selected()) {
        return;
      }
      node = this.theTree.asGraph().vertex(this.$selectedNode.attr("id"));
      buttons = [];
      if (node.right != null) {
        buttons.push($("<button>", {
          text: "rotate left"
        }).on("click.vamonos-graph", function(e) {
          var rightChild;
          rightChild = node.right;
          _this.theTree.rotateLeft(node.id);
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[rightChild.id]);
        }));
      }
      if (node.left != null) {
        buttons.push($("<button>", {
          text: "rotate right"
        }).on("click.vamonos-graph", function(e) {
          var leftChild;
          leftChild = node.left;
          _this.theTree.rotateRight(node.id);
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[leftChild.id]);
        }));
      }
      if (node.left == null) {
        buttons.push($("<button>", {
          text: "add left child"
        }).on("click.vamonos-graph", function(e) {
          var nodeId;
          nodeId = _this.theTree.addNode(node.id, "left", {
            val: node.val
          });
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[nodeId]);
        }));
      }
      if (node.right == null) {
        buttons.push($("<button>", {
          text: "add right child"
        }).on("click.vamonos-graph", function(e) {
          var nodeId;
          nodeId = _this.theTree.addNode(node.id, "right", {
            val: node.val
          });
          _this.draw(_this.theTree);
          return _this.selectNode(_this.graphDisplay.nodes[nodeId]);
        }));
      }
      if (node.depth !== 0) {
        buttons.push($("<button>", {
          text: "del"
        }).on("click.vamonos-graph", function(e) {
          _this.theTree.deleteNode(node.id);
          _this.deselect();
          return _this.draw(_this.theTree);
        }));
      }
      return this.graphDisplay.openDrawer({
        buttons: buttons,
        label: ""
      });
    };

    BinaryTree.prototype.closeDrawer = function() {
      return this.graphDisplay.closeDrawer();
    };

    BinaryTree.prototype.editValue = function($node) {
      var $contents, nodeId, returnFunc, valFunc,
        _this = this;
      $contents = $node.find("div.vertex-contents");
      nodeId = $node.attr("id");
      valFunc = function($contents) {
        return $contents.text();
      };
      returnFunc = function(newVal) {
        var val;
        val = Vamonos.txtToRaw(newVal);
        if (newVal != null) {
          _this.theTree.changeVal(nodeId, val);
        }
        return Vamonos.rawToTxt(val);
      };
      return Vamonos.editableValue($contents, valFunc, returnFunc);
    };

    return BinaryTree;

  })();

  this.Vamonos["export"]({
    Widget: {
      BinaryTree: BinaryTree
    }
  });

}).call(this);

(function() {
  var CallStack,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  CallStack = (function() {

    CallStack.description = "CallStack is a representation of the stash's call stack. " + "It also displays the values a procedure was called with, and its " + "return value. Note: setting \"\_callStack\" as a watchVar will cause " + "the visualizer to break on procedure calls and returns.";

    CallStack.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      procedureNames: {
        type: "Object",
        defaultValue: {},
        description: "an object mapping procedure names (those in the Visualizer's " + "'algorithm' argument) to their fully capitalized and formatted " + "display forms.",
        example: "procedureNames: {\n" + "    main: \"DFS\",\n" + "    visit: \"DFS-Visit\",\n" + "}"
      },
      animate: {
        type: "Array",
        defaultValue: ["next"],
        description: "types of frame changes to show an animation on"
      },
      resizable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the widget should have a resize triangle"
      },
      ignoreMain: {
        type: "Boolean",
        defaultValue: false,
        description: "CallStack will not display calls to the `main` procedure when set. " + "This is useful when you'd like to use `main` to set variables, or " + "do other useful housekeeping."
      },
      ignoreArgumentValues: {
        type: "Array",
        defaultValue: [],
        description: "An array of argument names `\['arg1','arg2'\]` that should only " + "show their name in the Call Stack."
      },
      formatArgumentValues: {
        type: "Object",
        defaultValue: {},
        description: "A mapping of arg-names to functions of arg-values to strings"
      },
      formatReturnValue: {
        type: "Object",
        defaultValue: {},
        description: "A mapping of proc names to functions from a " + "return-value to a string"
      }
    };

    function CallStack(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.$container = Vamonos.jqueryify(this.container);
      this.$inner = $("<div>", {
        "class": "callstack"
      }).appendTo(this.$container);
      this.$table = $("<table>", {
        "class": "callstack"
      }).appendTo(this.$inner);
      this.$container.hide();
      if (this.resizable) {
        this.$container.resizable({
          handles: "se",
          alsoResize: this.$inner
        });
        this.$container.addClass("ui-resizable-roomforscrollbar");
      }
      this.$argRows = [];
      this.$procRows = [];
    }

    CallStack.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return this.viz = options[0], options;
        case "render":
          frame = options[0], type = options[1];
          return this.render(frame, type);
        case "displayStop":
          this.$argRows = [];
          this.$procRows = [];
          this.$table.empty();
          return this.$container.hide();
        case "displayStart":
          return this.$container.show();
      }
    };

    CallStack.prototype.ignoreFrame = function(frame) {
      return frame.procName === "input" || this.ignoreMain && frame.procName === 'main';
    };

    CallStack.prototype.render = function(frame, type) {
      var f, i, newScrollTop, r, scope, stack, tgt, _i, _len, _ref,
        _this = this;
      this.$inner.stop();
      stack = frame._callStack.slice(0);
      stack.reverse();
      stack = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = stack.length; _i < _len; _i++) {
          f = stack[_i];
          if (!this.ignoreFrame(f)) {
            _results.push(f);
          }
        }
        return _results;
      }).call(this);
      if (frame._returnStack != null) {
        _ref = frame._returnStack;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          r = _ref[_i];
          if (!this.ignoreFrame(r)) {
            stack.push(r);
          }
        }
      }
      while (stack.length > this.$argRows.length) {
        this.$argRows.push($("<tr>").appendTo(this.$table));
        this.$procRows.push($("<tr>").appendTo(this.$table));
      }
      for (i in stack) {
        scope = stack[i];
        this.setArgRow(this.$argRows[i], scope);
        this.setProcRow(this.$procRows[i], scope);
      }
      tgt = this.$procRows[stack.length - 1];
      newScrollTop = this.$inner.scrollTop() - this.$inner.offset().top - this.$inner.height() + tgt.height() + tgt.offset().top + 1;
      if (__indexOf.call(this.animate, type) >= 0 && newScrollTop > 0) {
        return this.$inner.animate({
          scrollTop: newScrollTop
        }, 500, function() {
          var _results;
          _results = [];
          while (stack.length < _this.$argRows.length) {
            _this.$argRows.pop().remove();
            _results.push(_this.$procRows.pop().remove());
          }
          return _results;
        });
      } else {
        while (stack.length < this.$argRows.length) {
          this.$argRows.pop().remove();
          this.$procRows.pop().remove();
        }
        return this.$inner.scrollTop(this.$inner.prop("scrollHeight"));
      }
    };

    CallStack.prototype.setArgRow = function($tr, scope) {
      if ($tr.html == null) {
        return;
      }
      return $tr.html("<td class='callstack-args'>" + ("" + (this.argStr(scope)) + "</td><td class='callstack-return'>") + ("" + (this.retStr(scope)) + "</td>"));
    };

    CallStack.prototype.setProcRow = function($tr, scope) {
      var procName, _ref;
      if ($tr.html == null) {
        return;
      }
      procName = (_ref = this.procedureNames[scope.procName]) != null ? _ref : scope.procName;
      $tr.html("<td><td><div class='callstack-proc-container'><div class='callstack-proc'>" + procName + "</div></div></td>");
      if ("returnValue" in scope) {
        $tr.find("div.callstack-proc").addClass("callstack-returned");
      }
      if (scope.activeStackFrame) {
        return $tr.find("div.callstack-proc").addClass("callstack-active");
      }
    };

    CallStack.prototype.argStr = function(scope) {
      var k, r, v;
      r = (function() {
        var _ref, _results;
        _ref = scope.args;
        _results = [];
        for (k in _ref) {
          v = _ref[k];
          if (!/^_/.test(k)) {
            if (__indexOf.call(this.ignoreArgumentValues, k) >= 0) {
              _results.push(k);
            } else if (k in this.formatArgumentValues) {
              _results.push("" + k + "=" + (this.formatArgumentValues[k](v)));
            } else if (v.constructor.name === 'Array') {
              _results.push("" + k + "=" + k);
            } else {
              _results.push("" + k + "=" + (Vamonos.rawToTxt(v)));
            }
          }
        }
        return _results;
      }).call(this);
      return r.join(",") + "<span class='callstack-arrow'>&darr;</span>";
    };

    CallStack.prototype.retStr = function(scope) {
      var r, ret, s;
      if (!("returnValue" in scope)) {
        return "&nbsp;";
      }
      if (scope.procName in this.formatReturnValue) {
        s = this.formatReturnValue[scope.procName](scope.returnValue);
      } else {
        ret = Vamonos.arrayify(scope.returnValue);
        s = ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = ret.length; _i < _len; _i++) {
            r = ret[_i];
            _results.push(Vamonos.rawToTxt(r));
          }
          return _results;
        })()).join(",");
      }
      return "<span class='callstack-arrow'>&uarr;</span>" + s;
    };

    return CallStack;

  })();

  this.Vamonos["export"]({
    Widget: {
      CallStack: CallStack
    }
  });

}).call(this);

(function() {
  var Console,
    __slice = [].slice;

  Console = (function() {

    Console.description = "The `Console` widget is for debugging. It will print each " + "frame and event to the console. It takes no arguments.";

    Console.spec = {};

    function Console(args) {
      if (args == null) {
        args = {};
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
    }

    Console.prototype.event = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'setup') {
        this.viz = options[0];
      }
      if (event === 'render') {
        return console.log(options[0]._frameNumber + " : " + JSON.stringify(options[0]._snapshotReasons));
      } else if (options.length > 0) {
        return console.log("widget event '" + event + "', options:", options);
      } else {
        return console.log("widget event '" + event + "'");
      }
    };

    return Console;

  })();

  this.Vamonos["export"]({
    Widget: {
      Console: Console
    }
  });

}).call(this);

(function() {
  var ControlButtons, ControlFrameLabel, ControlSlider, Controls,
    __slice = [].slice;

  Controls = (function() {

    Controls.description = "The Controls widget controls the Visualizer - switching " + "modes and frames.";

    Controls.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      autoPlay: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the visualization should skip edit mode"
      },
      fullscreen: {
        type: "Boolean",
        defaultValue: false,
        description: "whether the visualization is in fullscreen mode"
      },
      buttons: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the buttons"
      },
      slider: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the slider"
      },
      frameNumber: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the frame number"
      },
      showWhileSliding: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to update visualization when sliding"
      },
      keyboardShortcuts: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to handle keyboard shortcuts"
      },
      runStopButton: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to show the run and stop button"
      },
      inputVars: {
        type: "Object",
        defaultValue: void 0,
        description: "a mapping from var names to default values"
      }
    };

    function Controls(arg) {
      var _this = this;
      if (typeof arg !== "object") {
        arg = {
          container: arg
        };
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: arg
      });
      this.$container = Vamonos.jqueryify(this.container);
      this.$inner = $("<div>", {
        "class": "controls controls-disabled"
      });
      this.$slider = $("<div>");
      this.$buttons = $("<div>");
      this.$frameLabel = $("<div>");
      if (this.frameNumber) {
        this.frameLabel = new ControlFrameLabel({
          container: this.$frameLabel
        });
      }
      if (this.slider) {
        this.sliderObj = new ControlSlider({
          container: this.$slider,
          showWhileSliding: this.showWhileSliding,
          labelWidget: this.frameLabel
        });
      }
      if (this.buttons) {
        this.buttonsObj = new ControlButtons({
          container: this.$buttons,
          runStopButton: this.runStopButton,
          autoPlay: this.autoPlay,
          keyboardShortcuts: this.keyboardShortcuts,
          inputVars: this.inputVars
        });
      }
      this.$container.append(this.$inner);
      if (this.buttons) {
        this.$inner.append(this.$buttons);
      }
      if (this.frameNumber) {
        this.$inner.append(this.$frameLabel);
      }
      if (this.slider) {
        this.$inner.append(this.$slider);
      }
      if (this.buttons && this.slider) {
        this.$inner.addClass("controls-full");
      }
      switch (this.fullscreen) {
        case "auto":
          if (!window.screenTop && !window.screenY) {
            this.$container.addClass("controls-fullscreen");
          }
          $(window).on("resize", function() {
            if (!window.screenTop && !window.screenY) {
              return _this.$inner.addClass("controls-fullscreen");
            } else {
              return _this.$inner.removeClass("controls-fullscreen");
            }
          });
          break;
        case true:
          this.$inner.addClass("controls-fullscreen");
      }
    }

    Controls.prototype.event = function() {
      var event, options, viz, _ref, _ref1, _ref2;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.buttonsObj) != null) {
        _ref.event.apply(_ref, [event].concat(__slice.call(options)));
      }
      if ((_ref1 = this.sliderObj) != null) {
        _ref1.event.apply(_ref1, [event].concat(__slice.call(options)));
      }
      if ((_ref2 = this.frameLabel) != null) {
        _ref2.event.apply(_ref2, [event].concat(__slice.call(options)));
      }
      switch (event) {
        case "setup":
          return viz = options[0], options;
        case "displayStart":
          return this.$inner.removeClass("controls-disabled");
        case "displayStop":
          return this.$inner.addClass("controls-disabled");
      }
    };

    return Controls;

  })();

  this.Vamonos["export"]({
    Widget: {
      Controls: Controls
    }
  });

  ControlFrameLabel = (function() {

    function ControlFrameLabel(_arg) {
      var container;
      container = _arg.container;
      this.$frameLabel = Vamonos.jqueryify(container);
      this.$frameLabel.addClass("controls-frame-number");
      this.writeLabel(null);
    }

    ControlFrameLabel.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "editStart":
        case "displayStop":
          return this.writeLabel(null);
        case "displayStart":
          return this.writeLabel(0, 0);
        case "render":
          frame = options[0], type = options[1];
          return this.writeLabel(frame._frameNumber, frame._numFrames);
      }
    };

    ControlFrameLabel.prototype.writeLabel = function(value, max) {
      if (value != null) {
        return this.$frameLabel.html("" + value + " / " + max);
      } else {
        return this.$frameLabel.html("stopped");
      }
    };

    return ControlFrameLabel;

  })();

  ControlButtons = (function() {
    var NEXT, PAUSE, PLAY, PREV, RUN, STOP;

    PLAY = "\u25b6";

    PAUSE = "\u25ae\u25ae";

    STOP = "stop";

    RUN = "run";

    NEXT = "\u25ae\u25B6";

    PREV = "\u25c0\u25ae";

    function ControlButtons(_arg) {
      var container, runStopButton,
        _this = this;
      container = _arg.container, runStopButton = _arg.runStopButton, this.autoPlay = _arg.autoPlay, this.keyboardShortcuts = _arg.keyboardShortcuts, this.inputVars = _arg.inputVars;
      this.$container = Vamonos.jqueryify(container);
      this.$runStopButton = $("<button>", {
        "class": "controls-button",
        html: RUN
      });
      this.$prevButton = $("<button>", {
        "class": "controls-button",
        html: PREV
      });
      this.$nextButton = $("<button>", {
        "class": "controls-button",
        html: NEXT
      });
      this.$playPauseButton = $("<button>", {
        "class": "controls-button",
        html: PLAY
      });
      this.playInterval = null;
      this.atLastFrame = false;
      this.$container.addClass("controls-buttons");
      if (runStopButton) {
        this.$container.append(this.$runStopButton);
      }
      this.$container.append(this.$prevButton, this.$nextButton, this.$playPauseButton);
      this.$nextButton.on("click", function() {
        _this.visualizer.trigger("nextFrame");
        return _this.stopPlaying();
      });
      this.$prevButton.on("click", function() {
        _this.visualizer.trigger("prevFrame");
        return _this.stopPlaying();
      });
      this.$runStopButton.on("click", function() {
        if (_this.mode === "edit") {
          return _this.visualizer.trigger("runAlgorithm");
        } else if (_this.mode === "display") {
          return _this.visualizer.trigger("editMode");
        }
      });
      this.$playPauseButton.on("click", function() {
        if (_this.playInterval != null) {
          return _this.stopPlaying();
        } else {
          return _this.startPlaying();
        }
      });
    }

    ControlButtons.prototype.setupInput = function() {
      var $input, $val, defaultValue, varName, _ref, _ref1, _results;
      if (this.inputVars == null) {
        return;
      }
      if (!this.visualizer) {
        throw "controller input: no visualizer";
      }
      _ref = this.inputVars;
      _results = [];
      for (varName in _ref) {
        defaultValue = _ref[varName];
        this.visualizer.registerVariable(varName);
        if (defaultValue != null) {
          this.visualizer.setVariable(varName, defaultValue);
        }
        if ((_ref1 = this.$inputDivs) == null) {
          this.$inputDivs = {};
        }
        this.$inputDivs[varName] = $("<div>", {
          "class": "controls-input"
        });
        $input = $("<span>", {
          text: "input: " + varName + " = "
        });
        $val = $("<span>", {
          "class": "val",
          html: defaultValue != null ? Vamonos.rawToTxt(defaultValue) : "???"
        });
        this.$inputDivs[varName].append($input, $val);
        _results.push(this.$container.prepend(this.$inputDivs[varName]));
      }
      return _results;
    };

    ControlButtons.prototype.acceptInput = function() {
      var $div, varName, _ref, _results;
      console.log(this.$inputDivs);
      _ref = this.$inputDivs;
      _results = [];
      for (varName in _ref) {
        $div = _ref[varName];
        _results.push((function(varName, $div, ths) {
          var _this = this;
          return $div.on("click", function() {
            console.log(varName);
            return Vamonos.editableValue($div.children("span.val"), (function(e) {
              return Vamonos.txtToRaw(e.text());
            }), function(newval) {
              var v;
              if (newval != null) {
                v = Vamonos.txtToRaw(newval);
                ths.inputVars[varName] = v;
                ths.visualizer.setVariable(varName, v);
              }
              return Vamonos.rawToTxt(ths.inputVars[varName]);
            });
          });
        })(varName, $div, this));
      }
      return _results;
    };

    ControlButtons.prototype.rejectInput = function() {
      var $div, varName, _ref, _results;
      _ref = this.$inputDivs;
      _results = [];
      for (varName in _ref) {
        $div = _ref[varName];
        _results.push($div.off("click"));
      }
      return _results;
    };

    ControlButtons.prototype.startPlaying = function() {
      var _this = this;
      if ((this.playInterval != null) || this.atLastFrame) {
        return;
      }
      this.$playPauseButton.html(PAUSE);
      this.$playPauseButton.prop("title", "Pause automatic playback of algorithm [shortcut: space bar]");
      return this.playInterval = setInterval((function() {
        if (!_this.visualizer.frozen) {
          return _this.visualizer.trigger("nextFrame");
        }
      }), 1000);
    };

    ControlButtons.prototype.stopPlaying = function() {
      if (this.playInterval == null) {
        return;
      }
      clearTimeout(this.playInterval);
      this.playInterval = null;
      this.$playPauseButton.html(PLAY);
      return this.$playPauseButton.prop("title", "Start automatic playback of algorithm [shortcut: space bar]");
    };

    ControlButtons.prototype.event = function() {
      var event, frame, options, type,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.visualizer = options[0];
          if (this.keyboardShortcuts) {
            $("body").on("keydown.controlbuttons", function(e) {
              return _this.keyDownHandler(e);
            });
          }
          if (this.inputVars != null) {
            return this.setupInput();
          }
          break;
        case "editStart":
          this.$runStopButton.html(RUN);
          this.$runStopButton.prop("title", "Execute the algorithm with current inputs/breakpoints/etc [shortcut: enter]");
          this.prevButtonActive(false);
          this.nextButtonActive(false);
          this.playPauseButtonActive(false);
          this.$container.addClass("controls-disabled");
          this.mode = "edit";
          if (this.inputVars != null) {
            return this.acceptInput();
          }
          break;
        case "editStop":
          if (this.inputVars != null) {
            return this.rejectInput();
          }
          break;
        case "displayStart":
          this.$runStopButton.html(STOP);
          this.$runStopButton.prop("title", "Stop the algorithm to edit inputs/breakpoints/etc [shortcut: escape]");
          this.$container.removeClass("controls-disabled");
          this.mode = "display";
          if (this.autoPlay) {
            return this.startPlaying();
          }
          break;
        case "displayStop":
          this.stopPlaying();
          return this.mode = null;
        case "render":
          frame = options[0], type = options[1];
          this.atLastFrame = frame._frameNumber === frame._numFrames;
          this.nextButtonActive(!this.atLastFrame);
          this.playPauseButtonActive(!this.atLastFrame);
          return this.prevButtonActive(frame._frameNumber !== 1);
      }
    };

    ControlButtons.prototype.keyDownHandler = function(event) {
      if (this.visualizer.frozen) {
        return true;
      }
      if (this.mode === "display") {
        switch (event.keyCode) {
          case 37:
            if (!this.$prevButton.attr("disabled")) {
              this.$prevButton.trigger("click");
            }
            return false;
          case 39:
            if (!this.$nextButton.attr("disabled")) {
              this.$nextButton.trigger("click");
            }
            return false;
          case 32:
            if (!this.$playPauseButton.attr("disabled")) {
              this.$playPauseButton.trigger("click");
            }
            return false;
          case 27:
            this.$runStopButton.trigger("click");
            return false;
        }
      } else {
        switch (event.keyCode) {
          case 13:
            this.$runStopButton.trigger("click");
            return false;
        }
      }
      return true;
    };

    ControlButtons.prototype.playPauseButtonActive = function(active) {
      if (active) {
        this.$playPauseButton.removeAttr("disabled");
        return this.$playPauseButton.prop("title", "Start automatic playback of algorithm [shortcut: space bar]");
      } else {
        this.$playPauseButton.attr("disabled", "true");
        return this.$playPauseButton.prop("title", "");
      }
    };

    ControlButtons.prototype.nextButtonActive = function(active) {
      if (active) {
        this.$nextButton.removeAttr("disabled");
        return this.$nextButton.prop("title", "Step forwards through the algorithm's execution [shortcut: right arrow]");
      } else {
        this.$nextButton.attr("disabled", "true");
        return this.$nextButton.prop("title", "");
      }
    };

    ControlButtons.prototype.prevButtonActive = function(active) {
      if (active) {
        this.$prevButton.removeAttr("disabled");
        return this.$prevButton.prop("title", "Step backwards through the algorithm's execution [shortcut: left arrow]");
      } else {
        this.$prevButton.attr("disabled", "true");
        return this.$prevButton.prop("title", "");
      }
    };

    return ControlButtons;

  })();

  ControlSlider = (function() {

    function ControlSlider(_arg) {
      var container,
        _this = this;
      container = _arg.container, this.showWhileSliding = _arg.showWhileSliding, this.labelWidget = _arg.labelWidget;
      this.$slider = Vamonos.jqueryify(container);
      this.$slider.addClass("controls-slider");
      this.$slider.attr("title", "Slide to jump forward/backward through algorithm's execution");
      this.$slider.slider({
        min: 0,
        max: 0,
        value: 0,
        slide: function(event, ui) {
          return _this.slideEvent(event, ui);
        },
        stop: function() {
          return _this.stopEvent();
        }
      });
    }

    ControlSlider.prototype.stopEvent = function() {
      if (this.mode === "display") {
        return this.visualizer.trigger("jumpFrame", this.$slider.slider("option", "value"));
      }
    };

    ControlSlider.prototype.slideEvent = function(event, ui) {
      if (this.mode !== "display") {
        return;
      }
      if (this.showWhileSliding) {
        return this.visualizer.trigger("jumpFrame", ui.value);
      } else if (this.labelWidget != null) {
        return this.labelWidget.writeLabel(ui.value, this.$slider.slider("option", "max"));
      }
    };

    ControlSlider.prototype.event = function() {
      var event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return this.visualizer = options[0], options;
        case "editStart":
          return this.mode = "edit";
        case "displayStart":
          this.mode = "display";
          this.$slider.slider("option", "min", 0);
          this.$slider.slider("option", "max", 0);
          return this.$slider.slider("option", "value", 0);
        case "render":
          frame = options[0], type = options[1];
          this.$slider.slider("option", "min", 1);
          this.$slider.slider("option", "max", frame._numFrames);
          return this.$slider.slider("option", "value", frame._frameNumber);
      }
    };

    return ControlSlider;

  })();

}).call(this);

(function() {
  var Error,
    __slice = [].slice;

  Error = (function() {

    Error.description = "The `Error` widget serves as a way to create custom error conditions.\nThe visualization will not change to DisplayMode unless all conditions\nare met.";

    Error.spec = {
      conditions: {
        type: "Array",
        description: "a list of functions that take a viz object and return " + "a string saying what went wrong.",
        example: "new Vamonos.Widget.Error({\n    conditions: [\n        function(viz){\n            var s = viz.getVariable(\"s\");\n            var t = viz.getVariable(\"t\");\n            if (s.id === t.id) {\n                return \"Ford-Fulkerson says: s and t must be different!\";\n            }\n        }\n    ]\n})"
      }
    };

    function Error(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
    }

    Error.prototype.event = function() {
      var c, event, options, s, viz, _i, _len, _ref, _ref1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'setup') {
        return viz = options[0], options;
      } else if (event === 'checkErrors') {
        viz = options[0];
        s = "";
        _ref = this.conditions;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          s += (_ref1 = c(viz)) != null ? _ref1 : "";
        }
        if (s.length) {
          return s;
        }
      }
    };

    return Error;

  })();

  this.Vamonos["export"]({
    Widget: {
      Error: Error
    }
  });

}).call(this);

(function() {
  var GraphDisplay,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  GraphDisplay = (function() {

    GraphDisplay.description = "GraphDisplay provides display functionality to " + "widgets that might not need to use graph data structures.";

    GraphDisplay.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      vertexLabels: {
        type: "Object",
        defaultValue: {},
        description: "an object containing a mapping of label positions " + "(inner, nw, sw, ne, se) to labels. Labels can display " + "simple variable names (corresponding to inputVars). " + "This must be provided in the form: `{ label: ['var1', 'var2'] }`. " + "It can be more complicated, as a function that takes " + "a vertex and returns some html. if we give a label " + "an object, we can control what is shown in edit/display " + "mode in the form: " + "`{ label : { edit: function{}, display: function{} } }`",
        example: "vertexLabels: {\n    inner : {\n        edit: function(vtx){return vtx.name},\n        display: function(vtx){return vtx.d}\n    },\n    sw    : function(vtx){return vtx.name},\n    ne    : ['u', 'v'],\n    nw    : ['s'],\n}"
      },
      edgeLabel: {
        type: ["String", "Function", "Object"],
        defaultValue: void 0,
        description: "a string, containing the name of the edge attribute to display" + "or a function taking an edge and returning a string to display. " + "one can also specify whether to show certain things in edit or " + "display mode by using an object.",
        example: "edgeLabel: { display: 'w', edit: function(e){ return e.w } },\nedgeLabel: 'w',\nedgeLabel: function(e){ return e.w + \"!\" },"
      },
      vertexCssAttributes: {
        type: "Object",
        defaultValue: {},
        description: "provides a way to change CSS classes of vertices based on " + "vertex attributes. takes an object of the form `{ attribute: " + "value | [list of values] }`. in the case of a single value,  " + "the vertex will simply get a class with the same name as " + "the attribute. in the case of a list of values, the css " + "class will be of the form 'attribute-value' when its value " + "matches. You can also provide a function that takes a vertex " + "and returns a class to apply to it.",
        example: "vertexCssAttributes: {\n    done: true,\n    color: ['white', 'gray', 'black'],\n    magic: function(vtx){ return \"class-\" + vtx.magicAttr },\n},"
      },
      edgeCssAttributes: {
        type: "Object",
        defaultValue: {},
        description: "provides a way to change CSS classes of edges based " + "upon the values of variables or the edges themselves. You provide " + "a mapping of classnames to functions or strings. The function " + "simply needs to take an edge and return a boolean (whether to " + "apply the class). The string is a pairing of variable names in " + "the form `'u->v'` or `'u<->v'` for undirected graphs.",
        example: "edgeCssAttributes: {\n    green: function(edge){\n        return (edge.target.pred === edge.source.name)\n            || (edge.source.pred === edge.target.name)\n    },\n    red: \"u->v\",\n}"
      },
      styleEdges: {
        type: "Array",
        defaultValue: void 0,
        description: "Provides a way to add styles to path objects. " + "Functions must return an array whose first element is an " + "attribute name, and second element is the value.",
        example: "styleEdges: [\n    function(e){\n        if (e.f !== undefined && (e.f > 0)) {\n            var width = 2 + e.f;\n            return [\"stroke-width\", width];\n        }\n    },\n],"
      },
      containerMargin: {
        type: "Number",
        defaultValue: 30,
        description: "how close vertices can get to the container edge"
      },
      minX: {
        type: "Number",
        defaultValue: 100,
        description: "minimum width of the graph widget"
      },
      minY: {
        type: "Number",
        defaultValue: 100,
        description: "minimum height of the graph widget"
      },
      resizable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the graph widget is resizable"
      },
      draggable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether vertices can be moved"
      },
      highlightChanges: {
        type: "Boolean",
        defaultValue: true,
        description: "whether vertices will get the css class 'changed' when they are modified"
      },
      showVertexChanges: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to flash vertices that have changed attributes"
      },
      vertexWidth: {
        type: "Number",
        defaultValue: 40,
        description: "the width of vertices in the graph"
      },
      vertexHeight: {
        type: "Number",
        defaultValue: 30,
        description: "the height of vertices in the graph"
      },
      arrowWidth: {
        type: "Number",
        defaultValue: 6,
        description: "the width of arrows in directed graphs"
      },
      arrowLength: {
        type: "Number",
        defaultValue: 6,
        description: "the length of arrows in directed graphs"
      },
      bezierCurviness: {
        type: "Number",
        defaultValue: 15,
        description: "the curviness of bezier curves in this graph"
      },
      persistentDragging: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the positions resulting from dragging " + "vertices are persistent across frames in display mode."
      },
      animateEdgeFlips: {
        type: "Boolean",
        defaultValue: false,
        description: "whether edges flip ostentatiously when they switch source and target"
      },
      background: {
        type: "Object",
        defaultValue: void 0,
        description: "an image to use as the background of the graph. " + "Args come in as an object `{ source: STRING, callback: OPTIONAL-FUNCTION }`. " + "If callback is provided, it must be a function taking a d3 selector." + "You can specify seperate images for edit and display mode by providing " + "an object such as `{ display: { source: STRING, callback: OPTIONAL-FUNCTION } " + "edit: { source: STRING, callback: OPTIONAL-FUNCTION }`"
      },
      fadeIn: {
        type: "Boolean",
        defaultValue: false,
        description: "whether new things fade in, and deleted things fade out"
      }
    };

    function GraphDisplay(args) {
      this.updateVertexClasses = __bind(this.updateVertexClasses, this);

      this.updateEdgeStyles = __bind(this.updateEdgeStyles, this);

      this.updateEdgeClasses = __bind(this.updateEdgeClasses, this);

      this.edgeLabelVal = __bind(this.edgeLabelVal, this);

      this.setEdgeLabelPos = __bind(this.setEdgeLabelPos, this);

      this.updateEdgeLabels = __bind(this.updateEdgeLabels, this);

      this.createEdgeLabels = __bind(this.createEdgeLabels, this);

      this.updateVertexLabels = __bind(this.updateVertexLabels, this);

      this.createVertexLabels = __bind(this.createVertexLabels, this);

      this.intersectVertex = __bind(this.intersectVertex, this);

      this.perpendicularPoints = __bind(this.perpendicularPoints, this);

      this.dvector = __bind(this.dvector, this);

      this.pathBezierWithArrow = __bind(this.pathBezierWithArrow, this);

      this.pathStraightWithArrow = __bind(this.pathStraightWithArrow, this);

      this.pathStraightNoArrow = __bind(this.pathStraightNoArrow, this);

      this.antiparallelEdge = __bind(this.antiparallelEdge, this);

      this.genPath = __bind(this.genPath, this);

      var _ref,
        _this = this;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        specObj: Vamonos.Widget.GraphDisplay.spec
      });
      this.$outer = Vamonos.jqueryify(this.container);
      if (((_ref = this.edgeLabel) != null ? _ref.constructor.name : void 0) !== 'Object') {
        this.edgeLabel = {
          edit: this.edgeLabel,
          display: this.edgeLabel
        };
      }
      this.$outer.disableSelection();
      if (this.resizable) {
        this.$outer.resizable({
          handles: "se",
          resize: function(e, ui) {
            _this.svg.attr("height", ui.size.height);
            return _this.svg.attr("width", ui.size.width);
          }
        });
      }
      this.svg = d3.selectAll("#" + this.$outer.attr("id")).append("svg");
      this.createShadowFilter({
        svg: this.svg,
        id: "shadow-green",
        red: 0.0,
        green: 0.9,
        blue: 0.0
      });
      this.createShadowFilter({
        svg: this.svg,
        id: "shadow-blue",
        red: 0.0,
        green: 0.0,
        blue: 0.9
      });
      this.createShadowFilter({
        svg: this.svg,
        id: "shadow",
        red: 0,
        green: 0,
        blue: 0,
        dx: 5,
        dy: 5
      });
      this.inner = this.initializeInner(this.svg);
      this._savex = {};
      this._savey = {};
    }

    GraphDisplay.prototype.initializeInner = function() {
      return this.svg.append("g").attr("transform", "translate(" + [this.containerMargin, this.containerMargin] + ")");
    };

    GraphDisplay.prototype.setBackground = function() {
      var make_bg,
        _this = this;
      if (this._bgmode === this.mode) {
        return;
      }
      if (this._existingbg != null) {
        this._existingbg.style("opacity", 1).transition().duration(400).style("opacity", 0).remove();
      }
      make_bg = function(source, callback) {
        _this._existingbg = _this.svg.insert("image", "defs").attr("xlink:href", source);
        _this._existingbg.style("opacity", 0).transition().duration(400).style("opacity", 1);
        if (callback != null) {
          return callback(_this._existingbg);
        }
      };
      if (this.background != null) {
        if (this.background[this.mode] != null) {
          if (this.background[this.mode].source == null) {
            return;
          }
          make_bg(this.background[this.mode].source, this.background[this.mode].callback);
        } else if (this.background.source != null) {
          make_bg(this.background.source, this.background.callback);
        }
        return this._bgmode = this.mode;
      }
    };

    GraphDisplay.prototype.createShadowFilter = function(_arg) {
      var blue, dx, dy, filter, green, id, merge, red, svg, _ref;
      svg = _arg.svg, id = _arg.id, red = _arg.red, green = _arg.green, blue = _arg.blue, dx = _arg.dx, dy = _arg.dy;
      if (dx == null) {
        dx = 0;
      }
      if (dy == null) {
        dy = 0;
      }
      if ((_ref = this.defs) == null) {
        this.defs = svg.append("svg:defs");
      }
      filter = this.defs.append("svg:filter").attr("id", id).attr("height", 100).attr("width", 100).attr("x", -50).attr("y", -50);
      filter.append("svg:feGaussianBlur").attr("in", "SourceGraphic").attr("stdDeviation", 5);
      filter.append("svg:feOffset").attr("dx", dx).attr("dy", dy);
      filter.append("svg:feColorMatrix").attr("type", "matrix").attr("values", "0 0 0 " + red + " 0                             0 0 0 " + green + " 0                             0 0 0 " + blue + " 0                             0 0 0 1          0").attr("result", "colorblur");
      merge = filter.append("feMerge");
      merge.append("feMergeNode").attr("in", "colorblur");
      return merge.append("feMergeNode").attr("in", "SourceGraphic");
    };

    GraphDisplay.prototype.event = function() {
      var event, klass, label, options, test, v, values, viz, _i, _len, _ref, _ref1, _ref2, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0];
          _ref = this.edgeCssAttributes;
          for (klass in _ref) {
            test = _ref[klass];
            if (typeof test === 'string') {
              _ref1 = test.split(/<?->?/);
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                v = _ref1[_i];
                viz.registerVariable(v);
              }
            }
          }
          _ref2 = this.vertexLabels;
          _results = [];
          for (label in _ref2) {
            values = _ref2[label];
            _results.push((function() {
              var _j, _len1, _results1;
              _results1 = [];
              for (_j = 0, _len1 = values.length; _j < _len1; _j++) {
                v = values[_j];
                if (typeof v === 'string') {
                  _results1.push(viz.registerVariable(v));
                }
              }
              return _results1;
            })());
          }
          return _results;
      }
    };

    GraphDisplay.prototype.draw = function(graph, frame) {
      var _ref,
        _this = this;
      if (frame == null) {
        frame = {};
      }
      if (this.graphHidden) {
        this.showGraph();
      }
      if ((_ref = this.mode) == null) {
        this.mode = "display";
      }
      this.setBackground();
      if (graph == null) {
        return;
      }
      this.directed = graph.directed;
      this.inner.selectAll(".changed").classed("changed", null);
      this.currentGraph = graph;
      this.currentFrame = frame;
      if (!this.fitAlready) {
        this.fitGraph();
        this.fitAlready = true;
      }
      if (this.persistentDragging) {
        this.currentGraph.eachVertex(function(v) {
          if ((_this._savex[v.id] != null) && (_this._savey[v.id] != null)) {
            v.x = _this._savex[v.id];
            return v.y = _this._savey[v.id];
          }
        });
      }
      this.updateVertices();
      this.updateEdges();
      if (this.draggable) {
        this.startDragging();
      }
      return this.previousGraph = graph;
    };

    GraphDisplay.prototype.fitGraph = function(animate) {
      var max_x, max_y, vertex, xVals, yVals, _i, _len, _ref, _ref1, _ref2;
      if (animate == null) {
        animate = false;
      }
      if (this.currentGraph != null) {
        xVals = [];
        yVals = [];
        _ref = this.currentGraph.getVertices();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          vertex = _ref[_i];
          if (!!isNaN(vertex.x)) {
            continue;
          }
          if (!!isNaN(vertex.y)) {
            continue;
          }
          xVals.push(vertex.x + (this.vertexWidth / 2) + this.containerMargin * 2);
          yVals.push(vertex.y + (this.vertexHeight / 2) + this.containerMargin * 2);
        }
        max_x = Math.max.apply(Math, __slice.call(xVals).concat([this.minX]));
        max_y = Math.max.apply(Math, __slice.call(yVals).concat([this.minY]));
      } else {
        max_x = (_ref1 = this.minX) != null ? _ref1 : 0;
        max_y = (_ref2 = this.minY) != null ? _ref2 : 0;
      }
      if (animate) {
        return this.svg.animate({
          width: max_x,
          height: max_y
        }, 500);
      } else {
        this.$outer.width("100%");
        this.svg.attr("height", max_y);
        return this.svg.attr("width", max_x);
      }
    };

    GraphDisplay.prototype.hideGraph = function() {
      this.$outer.hide();
      return this.graphHidden = true;
    };

    GraphDisplay.prototype.showGraph = function() {
      this.$outer.show();
      return this.graphHidden = false;
    };

    GraphDisplay.prototype.clearDisplay = function() {
      if (this.persistentDragging) {
        this._savex = {};
        this._savey = {};
      }
      if (this.fadeIn) {
        this.inner.style("opacity", 1).transition().duration(700).style("opacity", 0).remove();
      } else {
        this.inner.remove();
      }
      this.inner = this.initializeInner();
      this.currentGraph = void 0;
      this.previousGraph = void 0;
      this.fitGraph();
      return this.fitAlready = void 0;
    };

    GraphDisplay.prototype.startDragging = function(graph) {
      var drag, dragmove, dragstart, ths, trans;
      trans = function(d) {
        return "translate(" + [d.x, d.y] + ")";
      };
      ths = this;
      dragstart = function(d) {
        var parent, ref;
        parent = this.parentNode;
        ref = parent.querySelector(".graph-label");
        parent.insertBefore(this, ref);
        return this.style.filter = "url(#shadow)";
      };
      dragmove = function(d) {
        if (!dragmove.initialized) {
          dragstart.call(this, d);
          dragmove.initialized = true;
        }
        d.x = d3.event.x;
        d.y = d3.event.y;
        this.setAttribute("transform", trans(d));
        ths.inner.selectAll("path.edge").call(ths.genPath);
        return ths.updateEdgeLabels();
      };
      drag = d3.behavior.drag().on("drag", dragmove).on("dragend", function(d) {
        dragmove.initialized = false;
        d3.select(this).style("filter", null);
        if (ths.persistentDragging && ths.mode === 'display') {
          ths._savex[d.id] = d.x;
          return ths._savey[d.id] = d.y;
        }
      });
      return this.inner.selectAll("g.vertex").call(drag);
    };

    GraphDisplay.prototype.stopDragging = function() {
      return this.inner.selectAll("g.vertex").on("mousedown.drag", null);
    };

    GraphDisplay.prototype.updateVertices = function() {
      var enter, id, maybeAnimateRemoval, ths, trans, vertices;
      id = function(vtx) {
        return vtx.id;
      };
      trans = function(d) {
        return "translate(" + [d.x, d.y] + ")";
      };
      vertices = this.inner.selectAll("g.vertex").data(this.currentGraph.getVertices(), id).attr("transform", trans).call(this.updateVertexLabels).call(this.updateVertexClasses);
      enter = vertices.enter().append("g").attr("transform", trans).attr("class", "vertex").attr("id", function(d) {
        return d.id;
      });
      if (this.fadeIn) {
        enter.style("opacity", 0).transition().duration(500).style("opacity", 1);
      }
      enter.append("ellipse").attr("class", "vertex").attr("cx", 0).attr("cy", 0).attr("rx", this.vertexWidth / 2).attr("ry", this.vertexHeight / 2);
      enter.call(this.createVertexLabels).call(this.updateVertexClasses);
      ths = this;
      maybeAnimateRemoval = function(vtx) {
        var colVtx, collapsedSel, sel, _ref;
        sel = d3.select(this);
        if (((_ref = ths.currentGraph.recentlyCollapsed) != null ? _ref[vtx.id] : void 0) != null) {
          colVtx = ths.currentGraph.recentlyCollapsed[vtx.id];
          collapsedSel = d3.select("#" + colVtx.id);
          collapsedSel.style("visibility", "hidden");
          return sel.transition().attr("transform", trans(colVtx)).remove().each("end", function() {
            return collapsedSel.style("visibility", "visible");
          });
        } else if (ths.fadeIn) {
          return sel.style("opacity", 1).transition().style("opacity", 0).remove();
        } else {
          return sel.remove();
        }
      };
      return vertices.exit().each(maybeAnimateRemoval);
    };

    GraphDisplay.prototype.updateEdges = function() {
      var edges, enter, maybeFlipAndRemove, ths;
      edges = this.inner.selectAll("path.edge").data(this.currentGraph.getEdges(), this.currentGraph.edgeId);
      edges.call(this.genPath).call(this.updateEdgeClasses).call(this.updateEdgeStyles);
      enter = edges.enter().insert("path", ":first-child").attr("class", "edge");
      enter.call(this.genPath).call(this.updateEdgeClasses).call(this.updateEdgeStyles);
      if (this.fadeIn) {
        enter.style("opacity", 0).transition().duration(500).style("opacity", 1);
      }
      ths = this;
      maybeFlipAndRemove = function(edge) {
        var otherEdge, otherSel, sel, tween, x, y;
        sel = d3.select(this);
        if (ths.animateEdgeFlips && ths.highlightChanges) {
          otherEdge = ths.currentGraph.edge(edge.target, edge.source);
          if (otherEdge) {
            otherSel = d3.select("#" + ths.currentGraph.edgeId(otherEdge));
            otherSel.style("visibility", "hidden");
            x = (edge.source.x + edge.target.x) / 2;
            y = (edge.source.y + edge.target.y) / 2;
            tween = function() {
              return d3.interpolateString("rotate(0, " + x + ", " + y + ")", "rotate(-180, " + x + ", " + y + ")");
            };
            return sel.transition().attrTween("transform", tween).remove().each("end", function() {
              return otherSel.style("visibility", "visible");
            });
          } else {
            return sel.remove();
          }
        } else {
          return sel.remove();
        }
      };
      edges.exit().each(maybeFlipAndRemove);
      return this.updateEdgeLabels();
    };

    GraphDisplay.prototype.genPath = function(sel) {
      var getPath,
        _this = this;
      getPath = function(e) {
        var path;
        if (![e.source.x, e.source.y, e.target.x, e.target.y].every(isFinite)) {
          throw "GETPATH: Bad coordinates";
        }
        if (!_this.directed) {
          path = _this.pathStraightNoArrow(e);
        } else if (_this.antiparallelEdge(e)) {
          path = _this.pathBezierWithArrow(e);
        } else {
          path = _this.pathStraightWithArrow(e);
        }
        return path;
      };
      sel.attr("d", getPath).attr("id", this.currentGraph.edgeId);
      return sel;
    };

    GraphDisplay.prototype.antiparallelEdge = function(e) {
      if (!this.directed) {
        return false;
      }
      return this.currentGraph.edge(e.target, e.source);
    };

    GraphDisplay.prototype.pathStraightNoArrow = function(e) {
      var dx, dy, lx, ly, midx, midy, _, _ref, _ref1, _ref2;
      midx = (e.source.x + e.target.x) / 2;
      midy = (e.source.y + e.target.y) / 2;
      _ref = this.dvector([e.source.x, e.source.y], [e.target.x, e.target.y]), dx = _ref[0], dy = _ref[1];
      _ref1 = this.perpendicularPoints([midx, midy], dx, dy, this.arrowWidth * 1.5), _ = _ref1[0], (_ref2 = _ref1[1], lx = _ref2[0], ly = _ref2[1]);
      e._labelx = lx === lx ? lx : void 0;
      e._labely = ly === ly ? ly : void 0;
      return ("M " + e.source.x + " " + e.source.y + " ") + ("L " + e.target.x + " " + e.target.y + " ");
    };

    GraphDisplay.prototype.pathStraightWithArrow = function(e) {
      var x1, y1, _ref;
      _ref = this.intersectVertex([e.target.x, e.target.y], [e.source.x, e.source.y]), x1 = _ref[0], y1 = _ref[1];
      return ("M " + e.source.x + " " + e.source.y) + this.pathArrowAt([x1, y1], [e.source.x, e.source.y], e);
    };

    GraphDisplay.prototype.pathBezierWithArrow = function(e) {
      var refx, refy, x1, x2, y1, y2, _ref, _ref1, _ref2;
      _ref = this.bezierRefPoint(e), refx = _ref[0], refy = _ref[1];
      _ref1 = this.intersectVertex([e.source.x, e.source.y], [refx, refy]), x1 = _ref1[0], y1 = _ref1[1];
      _ref2 = this.intersectVertex([e.target.x, e.target.y], [refx, refy]), x2 = _ref2[0], y2 = _ref2[1];
      return (" M " + e.source.x + " " + e.source.y + " L " + x1 + " " + y1 + " ") + (" Q " + refx + " " + refy + " " + x2 + " " + y2) + this.pathArrowAt([x2, y2], [refx, refy], e);
    };

    GraphDisplay.prototype.bezierRefPoint = function(e) {
      var dx, dy, midx, midy, refx, refy, _ref;
      midx = (e.source.x + e.target.x) / 2;
      midy = (e.source.y + e.target.y) / 2;
      _ref = this.dvector([e.source.x, e.source.y], [e.target.x, e.target.y]), dx = _ref[0], dy = _ref[1];
      refx = midx - this.bezierCurviness * dy;
      refy = midy + this.bezierCurviness * dx;
      return [refx, refy];
    };

    GraphDisplay.prototype.pathArrowAt = function(_arg, _arg1, edge) {
      var dx, dy, x1, x2, x3, x4, x5, xstart, y1, y2, y3, y4, y5, ystart, _, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      x1 = _arg[0], y1 = _arg[1];
      xstart = _arg1[0], ystart = _arg1[1];
      _ref = this.dvector([xstart, ystart], [x1, y1]), dx = _ref[0], dy = _ref[1];
      x2 = x1 - (dx * -this.arrowLength);
      y2 = y1 - (dy * -this.arrowLength);
      _ref1 = this.perpendicularPoints([x2, y2], dx, dy, this.arrowWidth / 2), (_ref2 = _ref1[0], x3 = _ref2[0], y3 = _ref2[1]), (_ref3 = _ref1[1], x4 = _ref3[0], y4 = _ref3[1]);
      if (edge != null) {
        _ref4 = this.perpendicularPoints([x2, y2], dx, dy, this.arrowWidth * 2), _ = _ref4[0], (_ref5 = _ref4[1], x5 = _ref5[0], y5 = _ref5[1]);
        edge._labelx = x5;
        edge._labely = y5;
      }
      return (" L " + x2 + " " + y2 + " L " + x3 + " " + y3) + (" L " + x1 + " " + y1 + " L " + x4 + " " + y4) + (" L " + x2 + " " + y2 + " L " + x1 + " " + y1);
    };

    GraphDisplay.prototype.dvector = function(_arg, _arg1) {
      var dist, dx, dy, x1, x2, y1, y2;
      x1 = _arg[0], y1 = _arg[1];
      x2 = _arg1[0], y2 = _arg1[1];
      dx = x1 - x2;
      dy = y1 - y2;
      dist = Math.sqrt(dx * dx + dy * dy);
      dx = dx / dist;
      dy = dy / dist;
      return [dx, dy];
    };

    GraphDisplay.prototype.perpendicularPoints = function(_arg, dx, dy, len) {
      var x, y;
      x = _arg[0], y = _arg[1];
      return [[x + len * dy, y - len * dx], [x - len * dy, y + len * dx]];
    };

    GraphDisplay.prototype.intersectVertex = function(_arg, _arg1) {
      var a, b, dx, dy, sq, thingy, x0, x1, y0, y1;
      x1 = _arg[0], y1 = _arg[1];
      x0 = _arg1[0], y0 = _arg1[1];
      dx = x0 - x1;
      dy = y0 - y1;
      sq = function(x) {
        return Math.pow(x, 2);
      };
      a = this.vertexWidth / 2 + 5;
      b = this.vertexHeight / 2 + 5;
      thingy = a * b / Math.sqrt(sq(a) * sq(dy) + sq(b) * sq(dx));
      return [thingy * dx + x1, thingy * dy + y1];
    };

    GraphDisplay.prototype.createVertexLabels = function(vertexGroup) {
      var setLabel, x, xOffset, y, yOffset,
        _this = this;
      x = this.vertexWidth / 2;
      y = this.vertexHeight / 2;
      xOffset = x / 2;
      yOffset = y / 2;
      setLabel = function(klass, xPos, yPos) {
        return vertexGroup.append("text").attr("class", klass).attr("x", xPos).attr("y", yPos);
      };
      setLabel("vertex-contents", 0, yOffset / 2);
      setLabel("vertex-ne-label", x, -y);
      setLabel("vertex-nw-label", -x - xOffset, -y);
      setLabel("vertex-se-label", x, y + yOffset);
      setLabel("vertex-sw-label", -x - xOffset, y + yOffset);
      vertexGroup.call(this.updateVertexLabels);
      return vertexGroup;
    };

    GraphDisplay.prototype.updateVertexLabels = function(sel) {
      var style, target, type, vw, _ref, _ref1,
        _this = this;
      _ref = this.vertexLabels;
      for (type in _ref) {
        style = _ref[type];
        target = sel.select("text." + (function() {
          switch (type) {
            case "inner":
              return "vertex-contents";
            case "ne":
              return "vertex-ne-label";
            case "nw":
              return "vertex-nw-label";
            case "se":
              return "vertex-se-label";
            case "sw":
              return "vertex-sw-label";
            default:
              throw Error("GraphDisplay '" + this.varName + "': no vertex label \"" + type + "\"");
          }
        }).call(this));
        if (style.constructor.name === "Function") {
          target.text(function(d) {
            return Vamonos.rawToTxt(style(d));
          });
        } else if (style.constructor.name === "Array") {
          target.text(function(d) {
            var res, v, _i, _len, _ref1;
            res = [];
            for (_i = 0, _len = style.length; _i < _len; _i++) {
              v = style[_i];
              if (((_ref1 = _this.currentFrame[v]) != null ? _ref1.id : void 0) === d.id) {
                res.push(Vamonos.resolveSubscript(Vamonos.removeNamespace(v)));
              }
            }
            return res.join(",");
          });
        } else if (style.constructor.name === "Object" && ((_ref1 = style[this.mode]) != null ? _ref1.constructor.name : void 0) === "Function") {
          target.text(function(d) {
            return Vamonos.rawToTxt(style[_this.mode](d));
          });
        } else {
          target.text("");
        }
        if (type === "inner") {
          vw = this.vertexWidth;
          target.each(function(d) {
            var v, w, _ref2, _ref3;
            w = this.getComputedTextLength();
            if (w + 10 > vw) {
              v = typeof this !== "undefined" && this !== null ? (_ref2 = this.parentNode) != null ? (_ref3 = _ref2.children) != null ? _ref3[0] : void 0 : void 0 : void 0;
              return v != null ? v.setAttribute("rx", (w / 2) + 10) : void 0;
            }
          });
        }
      }
      return sel;
    };

    GraphDisplay.prototype.createEdgeLabels = function() {
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      this.inner.selectAll("text.graph-label").data(function(d) {
        return this.currentGraph.getEdges();
      }).enter().append("text").attr("class", "graph-label");
      this.updateEdgeLabels();
      return edgeGroups;
    };

    GraphDisplay.prototype.updateEdgeLabels = function() {
      var sel,
        _this = this;
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      sel = this.inner.selectAll("text.graph-label").data(function(d) {
        return _this.currentGraph.getEdges();
      }).text(this.edgeLabelVal).attr("x", function(d) {
        return d._labelx;
      }).attr("y", function(d) {
        return d._labely;
      });
      sel.enter().append("text").attr("class", "graph-label").text(this.edgeLabelVal).attr("x", function(d) {
        return d._labelx;
      }).attr("y", function(d) {
        return d._labely;
      });
      return sel.exit().remove();
    };

    GraphDisplay.prototype.setEdgeLabelPos = function(labelSel) {
      var xPos, yPos,
        _this = this;
      xPos = function(e) {
        var x, y, _ref;
        if (_this.antiparallelEdge(e)) {
          _ref = _this.bezierRefPoint(e), x = _ref[0], y = _ref[1];
          return x;
        } else {
          return Math.floor((e.source.x + e.target.x) / 2);
        }
      };
      yPos = function(e) {
        var x, y, _ref;
        if (_this.antiparallelEdge(e)) {
          _ref = _this.bezierRefPoint(e), x = _ref[0], y = _ref[1];
          return y + 4;
        } else {
          return Math.floor((e.source.y + e.target.y) / 2 + 4);
        }
      };
      return labelSel.attr("x", xPos).attr("y", yPos);
    };

    GraphDisplay.prototype.edgeLabelVal = function(edge) {
      var attr, val, _ref;
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      if (this.edgeLabel[this.mode].constructor.name === 'Function') {
        return val = this.edgeLabel[this.mode](edge);
      } else if (this.edgeLabel[this.mode].constructor.name === 'String') {
        attr = this.edgeLabel[this.mode];
        return val = Vamonos.rawToTxt((_ref = edge[attr]) != null ? _ref : "");
      } else {

      }
    };

    GraphDisplay.prototype.updateEdgeClasses = function(edges) {
      var klass, source, target, test, _ref, _ref1, _ref2,
        _this = this;
      if (this.edgeCssAttributes == null) {
        return;
      }
      _ref = this.edgeCssAttributes;
      for (klass in _ref) {
        test = _ref[klass];
        if ((test != null ? test.constructor.name : void 0) === 'Function') {
          edges.classed(klass, test);
        } else if ((test != null ? test.constructor.name : void 0) === 'String') {
          if (test.match(/<->/)) {
            _ref1 = test.split(/<->/).map(function(v) {
              return _this.currentFrame[v];
            }), source = _ref1[0], target = _ref1[1];
            edges.classed(klass, function(e) {
              return (e.source.id === (source != null ? source.id : void 0) && e.target.id === (target != null ? target.id : void 0)) || (e.target.id === (source != null ? source.id : void 0) && e.source.id === (target != null ? target.id : void 0));
            });
          } else {
            _ref2 = test.split(/->/).map(function(v) {
              return _this.currentFrame[v];
            }), source = _ref2[0], target = _ref2[1];
            edges.classed(klass, function(e) {
              return e.source.id === (source != null ? source.id : void 0) && e.target.id === (target != null ? target.id : void 0);
            });
          }
        }
      }
      return edges;
    };

    GraphDisplay.prototype.updateEdgeStyles = function(edges) {
      var styleFunc, styles, _i, _len, _ref, _ref1, _ref2, _results;
      if (!((_ref = this.styleEdges) != null ? _ref.length : void 0)) {
        return;
      }
      _ref1 = this.styleEdges;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        styleFunc = _ref1[_i];
        if (styleFunc.constructor.name !== 'Function') {
          continue;
        }
        styles = ((_ref2 = this.appliedEdgeStyles) != null ? _ref2 : this.appliedEdgeStyles = []);
        _results.push(edges.each(function(e) {
          var attr, res, val, _j, _len1, _results1;
          res = styleFunc(e);
          if ((res != null ? res.length : void 0) === 2) {
            attr = res[0], val = res[1];
            Vamonos.insertSet(attr, styles);
            return this.style[attr] = val;
          } else {
            _results1 = [];
            for (_j = 0, _len1 = styles.length; _j < _len1; _j++) {
              attr = styles[_j];
              _results1.push(this.style[attr] = null);
            }
            return _results1;
          }
        }));
      }
      return _results;
    };

    GraphDisplay.prototype.updateVertexClasses = function(vertexGroups) {
      var applyClass, attr, kind, labels, ths, val, vertices, _ref, _results,
        _this = this;
      vertices = vertexGroups.selectAll("ellipse.vertex").data(function(d) {
        return [d];
      }).classed("changed", function(vertex) {
        return _this.highlightChanges && _this.showVertexChanges && _this.mode === 'display' && _this.vertexChanged(vertex);
      });
      labels = vertexGroups.selectAll("text.vertex-contents").data(function(d) {
        return [d];
      });
      _ref = this.vertexCssAttributes;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        if (val.constructor.name === "Function") {
          ths = this;
          _results.push(vertexGroups.each(function(vertex) {
            var newClass, sel, _base, _name, _ref1, _ref2;
            if ((_ref1 = (_base = ((_ref2 = ths.appliedNodeClasses) != null ? _ref2 : ths.appliedNodeClasses = {}))[_name = vertex.id]) == null) {
              _base[_name] = {};
            }
            sel = d3.select(this);
            newClass = val(vertex);
            if (newClass === ths.appliedNodeClasses[vertex.id][attr]) {
              return;
            }
            if (ths.appliedNodeClasses[vertex.id][attr] != null) {
              sel.select("ellipse.vertex").classed(ths.appliedNodeClasses[vertex.id][attr], false);
              sel.select("text.vertex-contents").classed(ths.appliedNodeClasses[vertex.id][attr], false);
            }
            if (newClass != null) {
              sel.select("ellipse.vertex").classed(newClass, true);
              sel.select("text.vertex-contents").classed(newClass, true);
              return ths.appliedNodeClasses[vertex.id][attr] = newClass;
            } else {
              return delete ths.appliedNodeClasses[vertex.id][attr];
            }
          }));
        } else if (val.constructor.name === "Array") {
          _results.push((function() {
            var _i, _len, _results1;
            _results1 = [];
            for (_i = 0, _len = val.length; _i < _len; _i++) {
              kind = val[_i];
              applyClass = function(sel) {
                return sel.classed("" + attr + "-" + kind, function(vtx) {
                  return vtx[attr] === kind;
                });
              };
              vertices.call(applyClass);
              _results1.push(labels.call(applyClass));
            }
            return _results1;
          })());
        } else {
          _results.push(vertices.classed(attr, function(vertex) {
            return vertex[attr] === val;
          }));
        }
      }
      return _results;
    };

    GraphDisplay.prototype.vertexChanged = function(newv) {
      var k, oldv, v, _ref, _ref1;
      if (newv == null) {
        return false;
      }
      if (this.previousGraph == null) {
        return false;
      }
      if (!(oldv = this.previousGraph.vertex(newv.id))) {
        return false;
      }
      for (k in newv) {
        v = newv[k];
        if (!(k[0] !== "_")) {
          continue;
        }
        if (k === "x" || k === "y") {
          continue;
        }
        if ((v != null ? v.type : void 0) === "Vertex") {
          if (((_ref = oldv[k]) != null ? _ref.id : void 0) !== v.id) {
            return true;
          }
        } else {
          if (oldv[k] !== v) {
            return true;
          }
        }
      }
      for (k in oldv) {
        v = oldv[k];
        if (!(k[0] !== "_")) {
          continue;
        }
        if (k === "x" || k === "y") {
          continue;
        }
        if ((v != null ? v.type : void 0) === "Vertex") {
          if (((_ref1 = newv[k]) != null ? _ref1.id : void 0) !== v.id) {
            return true;
          }
        } else {
          if (newv[k] !== v) {
            return true;
          }
        }
      }
    };

    GraphDisplay.prototype.openDrawer = function(_arg) {
      var buttons, label;
      buttons = _arg.buttons, label = _arg.label;
      if (this.$drawer != null) {
        this.$drawer.html("<div class='graph-drawer'></div>");
      } else {
        this.$drawer = $("<div>", {
          "class": "graph-drawer"
        }).hide();
        this.$outer.after(this.$drawer);
      }
      $("<span class='label'>" + label + "</span>").appendTo(this.$drawer);
      if (buttons != null) {
        this.$drawer.append(buttons);
      }
      if (!this.$drawer.is(":visible")) {
        return this.$drawer.fadeIn("fast");
      }
    };

    GraphDisplay.prototype.closeDrawer = function() {
      if (this.$drawer == null) {
        return;
      }
      return this.$drawer.fadeOut("fast");
    };

    return GraphDisplay;

  })();

  this.Vamonos["export"]({
    Widget: {
      GraphDisplay: GraphDisplay
    }
  });

}).call(this);

(function() {
  var Graph,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Graph = (function(_super) {

    __extends(Graph, _super);

    Graph.description = "The Graph widget provides graph input functionality. It " + "uses GraphDisplay for functionality that is not related to input.";

    Graph.dependencies = ["Vamonos.Widget.GraphDisplay"];

    Graph.spec = {
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      defaultGraph: {
        type: "Graph",
        defaultValue: void 0,
        description: "the initial graph, as a Vamonos.DataStructure.Graph"
      },
      inputVars: {
        type: "Object",
        defaultValue: {},
        description: "a mapping of variable names to vertex ids of the form                `{ var1: 'node1' }` for displaying variables that contain                vertices."
      },
      editable: {
        type: "Boolean",
        defaultValue: true,
        description: "whether the graph allows user input"
      },
      showChanges: {
        type: ["String", "Array"],
        description: "type of frame shifts to highlight changes at, " + "can be multiple types with an array of strings",
        defaultValue: "next"
      },
      defaultEdgeAttrs: {
        type: "Object",
        defaultValue: void 0,
        description: "A mapping of attribute names to default values for " + "new edges created in edit mode."
      },
      defaultVertexAttrs: {
        type: "Object",
        defaultValue: void 0,
        description: "A mapping of attribute names to default values for " + "new vertices created in edit mode."
      },
      editableEdgeAttrs: {
        type: "Boolean",
        defaultValue: true,
        description: "whether edge attributes are modifiable in edit mode."
      }
    };

    function Graph(args) {
      this.removePotentialEdge = __bind(this.removePotentialEdge, this);

      this.potentialEdgeTo = __bind(this.potentialEdgeTo, this);

      var argName, k, v, _base, _base1, _ref, _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        ignoreExtraArgs: true
      });
      this.showChanges = Vamonos.arrayify(this.showChanges);
      for (argName in Vamonos.Widget.Graph.spec) {
        delete args[argName];
      }
      if (this.editable) {
        this.theGraph = (_ref = this.defaultGraph) != null ? _ref : new Vamonos.DataStructure.Graph();
        _ref1 = this.inputVars;
        for (k in _ref1) {
          v = _ref1[k];
          this.inputVars[k] = this.theGraph.vertex(v);
        }
      } else {
        if ((_ref2 = args.minX) == null) {
          args.minX = 0;
        }
        if ((_ref3 = args.minY) == null) {
          args.minY = 0;
        }
        if ((_ref4 = args.resizable) == null) {
          args.resizable = false;
        }
      }
      if ((_ref5 = (_base = ((_ref6 = args.edgeCssAttributes) != null ? _ref6 : args.edgeCssAttributes = {})).potential) == null) {
        _base.potential = function(edge) {
          return edge._potential;
        };
      }
      if ((_ref7 = (_base1 = ((_ref8 = args.edgeCssAttributes) != null ? _ref8 : args.edgeCssAttributes = {})).selected) == null) {
        _base1.selected = function(edge) {
          return edge._selected;
        };
      }
      this.edgeLabel = (_ref9 = (_ref10 = args.edgeLabel) != null ? _ref10.edit : void 0) != null ? _ref9 : args.edgeLabel;
      Graph.__super__.constructor.call(this, args);
    }

    Graph.prototype.event = function() {
      var event, frame, inp, newg, oldVal, options, type, varName, _ref, _ref1, _ref2, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.registerVariables();
          this.updateVariables();
          return Graph.__super__.event.call(this, "setup", this.viz);
        case "render":
          frame = options[0], type = options[1];
          if (__indexOf.call(this.showChanges, type) >= 0) {
            this.highlightChanges = true;
          } else {
            this.highlightChanges = false;
          }
          if (frame[this.varName] != null) {
            return this.draw(frame[this.varName], frame);
          } else {
            return this.hideGraph();
          }
          break;
        case "displayStart":
          return this.mode = "display";
        case "displayStop":
          this.clearDisplay();
          if (!this.editable) {
            return this.updateVariables();
          }
          break;
        case "editStart":
          if (this.editable) {
            this.mode = "edit";
            return this.startEditing();
          } else if (this.background != null) {
            this.mode = "edit";
            return this.draw();
          }
          break;
        case "editStop":
          if (this.editable) {
            return this.stopEditing();
          }
          break;
        case "checkErrors":
          if (this.editable) {
            return this.verifyInputVarsSet();
          }
          break;
        case "externalInput":
          inp = options[0];
          if (((_ref = inp[this.varName]) != null ? _ref.type : void 0) === "Graph") {
            newg = new Vamonos.DataStructure.Graph();
            newg.reconstruct(inp[this.varName]);
            this.theGraph = newg;
          }
          _ref1 = this.inputVars;
          _results = [];
          for (varName in _ref1) {
            oldVal = _ref1[varName];
            if (((_ref2 = inp[varName]) != null ? _ref2.type : void 0) === "Vertex") {
              _results.push(this.inputVars[varName] = this.theGraph.vertex(inp[varName]));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
      }
    };

    Graph.prototype.redraw = function() {
      return this.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.startEditing = function() {
      this.redraw();
      if (this.editable) {
        return this.setEditBindings();
      }
    };

    Graph.prototype.stopEditing = function() {
      if (this.editable) {
        this.deselect();
        this.closeDrawer();
        this.unsetEditBindings();
        return this.updateVariables();
      }
    };

    Graph.prototype.registerVariables = function() {
      var key, _results;
      this.viz.registerVariable(this.varName);
      _results = [];
      for (key in this.inputVars) {
        _results.push(this.viz.registerVariable(key));
      }
      return _results;
    };

    Graph.prototype.updateVariables = function() {
      var graph, k, v, _ref, _ref1;
      graph = Vamonos.clone((_ref = this.theGraph) != null ? _ref : this.defaultGraph);
      this.viz.setVariable(this.varName, graph);
      _ref1 = this.inputVars;
      for (k in _ref1) {
        v = _ref1[k];
        if (v != null) {
          this.viz.setVariable(k, graph.vertex(v.id), true);
          this.viz.allowExport(k);
        }
      }
      return this.viz.allowExport(this.varName);
    };

    Graph.prototype.verifyInputVarsSet = function() {
      var k, s, v;
      s = ((function() {
        var _ref, _results;
        _ref = this.inputVars;
        _results = [];
        for (k in _ref) {
          v = _ref[k];
          if (!(this.theGraph.vertex(v) != null)) {
            _results.push("" + this.varName + " says: please set " + k + "!");
          }
        }
        return _results;
      }).call(this)).join('\n');
      if (s.length) {
        return s;
      }
    };

    Graph.prototype.addVertex = function(vertex) {
      var newv;
      newv = this.theGraph.addVertex(vertex);
      this.redraw();
      this.setEditBindings();
      return this.selectVertexById(newv.id);
    };

    Graph.prototype.removeVertex = function(vid) {
      var k, v, _ref;
      this.deselect();
      this.closeDrawer();
      this.theGraph.removeVertex(vid);
      _ref = this.inputVars;
      for (k in _ref) {
        v = _ref[k];
        if ((v != null) && v.id === vid) {
          this.inputVars[k] = void 0;
        }
      }
      return this.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.addEdge = function(sourceId, targetId) {
      var attrs, k, v, _ref;
      this.removePotentialEdge();
      attrs = {};
      if (this.defaultEdgeAttrs != null) {
        _ref = this.defaultEdgeAttrs;
        for (k in _ref) {
          v = _ref[k];
          attrs[k] = v;
        }
      }
      this.theGraph.addEdge(sourceId, targetId, attrs);
      this.redraw();
      return this.setEditBindings();
    };

    Graph.prototype.removeEdge = function(sourceId, targetId) {
      if ('edge' === this.selected()) {
        this.deselect();
      }
      this.closeDrawer();
      this.theGraph.removeEdge(sourceId, targetId);
      return this.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.createButtons = function() {
      var _this = this;
      return this.newVertexButton = $("<button>new vertex</button>").on("click", function() {
        return _this.addVertex();
      }).insertAfter("#g-var");
    };

    Graph.prototype.setEditBindings = function() {
      var _this = this;
      this.inner.selectAll("g.vertex").classed("editable-vertex", true).on("click.vamonos-graph", function(d) {
        var sourceId, targetId, _ref, _ref1;
        sourceId = (_ref = _this.selectedVertex) != null ? _ref.attr("id") : void 0;
        targetId = d3.event.target.__data__.id;
        if ((sourceId != null) && (((_ref1 = _this.theGraph) != null ? _ref1.edge(sourceId, targetId)._potential : void 0) != null)) {
          _this.addEdge(sourceId, targetId);
        } else if (sourceId === targetId) {
          _this.deselect();
          _this.closeDrawer();
        } else {
          _this.selectVertexById(targetId);
        }
        return _this._notNewVertexClick = true;
      });
      this.inner.selectAll("path.edge").on("mouseenter.vamonos-graph", function(d) {
        return d3.select(this).classed("selectme", true);
      }).on("mouseout.vamonos-graph", function(d) {
        return d3.select(this).classed("selectme", null);
      }).on("click.vamonos-graph", function(d) {
        _this.selectEdgeBySelector(d3.select(d3.event.target));
        return _this._notNewVertexClick = true;
      });
      this.$outer.off("click.vamonos-graph");
      return this.$outer.on("click.vamonos-graph", function(e) {
        var attrs, k, v, _ref, _ref1, _ref2;
        if (_this._notNewVertexClick) {
          return delete _this._notNewVertexClick;
        } else if (_this.selected()) {
          _this.deselect();
          return _this.closeDrawer();
        } else {
          attrs = {};
          _ref = _this.defaultVertexAttrs;
          for (k in _ref) {
            v = _ref[k];
            attrs[k] = v;
          }
          attrs.x = ((_ref1 = e.offsetX) != null ? _ref1 : e.pageX - _this.$outer.offset().left) - _this.containerMargin;
          attrs.y = ((_ref2 = e.offsetY) != null ? _ref2 : e.pageY - _this.$outer.offset().top) - _this.containerMargin;
          return _this.addVertex(attrs);
        }
      });
    };

    Graph.prototype.unsetEditBindings = function() {
      this.$outer.off("click.vamonos-graph");
      this.inner.selectAll("g.vertex").on("click.vamonos-graph", null).classed("editable-vertex", null);
      return this.inner.selectAll("path.edge").on("mouseenter.vamonos-graph", null).on("mouseout.vamonos-graph", null).classed("selectme", null);
    };

    Graph.prototype.removeButtons = function() {
      var _ref;
      return (_ref = this.newVertexButton) != null ? _ref.remove() : void 0;
    };

    Graph.prototype.selected = function() {
      if (this.selectedVertex != null) {
        return 'vertex';
      }
      if (this.selectedEdge != null) {
        return 'edge';
      }
      return false;
    };

    Graph.prototype.selectEdgeBySelector = function(sel) {
      var oldEdgeId, _ref;
      oldEdgeId = (_ref = this.selectedEdge) != null ? _ref.attr('id') : void 0;
      this.deselect();
      if (oldEdgeId === sel.attr('id')) {
        return;
      }
      this.selectedEdge = sel.classed("selected", true);
      return this.openDrawer();
    };

    Graph.prototype.selectVertexById = function(vid) {
      return this.selectVertexBySelector(this.inner.select("#" + vid));
    };

    Graph.prototype.selectVertexBySelector = function(sel) {
      var _this = this;
      this.deselect();
      this.selectedVertex = sel.classed("selected", true);
      this.inner.selectAll("g.vertex").on("mouseover.vamonos-graph", function(v) {
        return _this.potentialEdgeTo(v.id);
      }).on("mouseleave.vamonos-graph", function(v) {
        return _this.removePotentialEdge();
      });
      return this.openDrawer();
    };

    Graph.prototype.deselect = function() {
      this.deselectVertex();
      return this.deselectEdge();
    };

    Graph.prototype.deselectVertex = function() {
      if (this.selectedVertex == null) {
        return;
      }
      this.selectedVertex.classed("selected", false);
      delete this.selectedVertex;
      return this.unsetPotentialEdgeBindings();
    };

    Graph.prototype.unsetPotentialEdgeBindings = function() {
      this.removePotentialEdge();
      return this.inner.selectAll("g.vertex").on("mouseover.vamonos-graph", null).on("mouseleave.vamonos-graph", null);
    };

    Graph.prototype.deselectEdge = function() {
      if (this.selectedEdge == null) {
        return;
      }
      this.selectedEdge.classed("selected", null);
      return delete this.selectedEdge;
    };

    Graph.prototype.potentialEdgeTo = function(vid) {
      var sourceId;
      sourceId = this.selectedVertex.attr("id");
      if (sourceId === vid) {
        return;
      }
      this.removePotentialEdge();
      this.potentialEdge = this.theGraph.addEdge(sourceId, vid, {
        _potential: true
      });
      return this.redraw();
    };

    Graph.prototype.removePotentialEdge = function() {
      var e;
      if (this.potentialEdge == null) {
        return;
      }
      e = this.potentialEdge;
      this.theGraph.removeEdge(e.source.id, e.target.id);
      delete this.potentialEdge;
      return this.redraw();
    };

    Graph.prototype.openDrawer = function() {
      var arr, attr, attrName, buttons, defVal, defaultVal, edge, label, nametag, sourceId, targetId, type, v, vtx, _fn, _fn1, _fn2, _ref, _ref1,
        _this = this;
      type = this.selected();
      if (type === 'vertex') {
        vtx = this.theGraph.vertex(this.selectedVertex.attr("id"));
        label = "vertex&nbsp;&nbsp;" + vtx.name + "&nbsp;&nbsp;";
        buttons = [];
        _fn = function(v, vtx, buttons, ths, inputVars, theGraph) {
          var $b, vName,
            _this = this;
          vName = Vamonos.resolveSubscript(v);
          $b = $("<button>", {
            text: vName,
            title: "Set " + vName + "=" + vtx.name
          });
          $b.on("click.vamonos-graph", function(e) {
            inputVars[v] = vtx;
            return ths.redraw();
          });
          return buttons.push($b);
        };
        for (v in this.inputVars) {
          _fn(v, vtx, buttons, this, this.inputVars, this.theGraph);
        }
        if (this.defaultVertexAttrs != null) {
          _ref = this.defaultVertexAttrs;
          _fn1 = function(attr, ths) {
            if (vtx[attr] != null) {
              return buttons.push($("<button>", {
                text: "unset " + attr
              }).on("click.vamonos-graph", function(e) {
                console.log("unset " + attr);
                vtx[attr] = void 0;
                ths.redraw();
                return ths.openDrawer();
              }));
            } else {
              return buttons.push($("<button>", {
                text: "set " + attr
              }).on("click.vamonos-graph", function(e) {
                console.log("set " + attr);
                vtx[attr] = true;
                ths.redraw();
                return ths.openDrawer();
              }));
            }
          };
          for (attr in _ref) {
            defVal = _ref[attr];
            _fn1(attr, this);
          }
        }
        buttons.push($("<button>", {
          text: "del",
          title: "Delete " + vtx.name
        }).on("click.vamonos-graph", function(e) {
          return _this.removeVertex(vtx.id);
        }));
      } else if (type === 'edge') {
        edge = this.selectedEdge.data()[0];
        sourceId = edge.source.id;
        targetId = edge.target.id;
        if (this.theGraph.directed) {
          arr = "&rarr;";
        } else {
          arr = "-";
        }
        nametag = edge.source.name + "&nbsp;" + arr + "&nbsp;" + edge.target.name;
        label = "edge&nbsp;&nbsp;" + nametag + "&nbsp;&nbsp;";
        buttons = [];
        if (this.editableEdgeAttrs) {
          _ref1 = this.defaultEdgeAttrs;
          _fn2 = function(edge, attrName, buttons, ths, inputVars, theGraph) {
            var $label, $val,
              _this = this;
            $val = $("<span>", {
              text: edge[attrName]
            });
            $label = $("<div>", {
              text: "" + attrName + " = ",
              "class": "editable-attr"
            }).append($val).on("click", function() {
              var update;
              update = function(newVal) {
                edge[attrName] = +newVal;
                ths.redraw();
                $label.removeClass("active");
                return newVal;
              };
              $label.addClass("active");
              return Vamonos.editableValue($val, (function(e) {
                return e.text();
              }), update);
            });
            return buttons.push($label);
          };
          for (attrName in _ref1) {
            defaultVal = _ref1[attrName];
            _fn2(edge, attrName, buttons, this, this.inputVars, this.theGraph);
          }
        }
        if (!this.theGraph.directed) {
          buttons.push($("<button>", {
            text: "col",
            title: "Collapse " + edge.source.name + "->" + edge.target.name
          }).on("click.vamonos-graph", function(e) {
            _this.theGraph.collapse(edge);
            return _this.startEditing();
          }));
        }
        buttons.push($("<button>", {
          text: "del",
          title: "Delete " + edge.source.name + "->" + edge.target.name
        }).on("click.vamonos-graph", function(e) {
          return _this.removeEdge(edge.source.id, edge.target.id);
        }));
      } else {
        return;
      }
      return Graph.__super__.openDrawer.call(this, {
        buttons: buttons,
        label: label
      });
    };

    return Graph;

  })(this.Vamonos.Widget.GraphDisplay);

  this.Vamonos["export"]({
    Widget: {
      Graph: Graph
    }
  });

}).call(this);

(function() {
  var Hardcoded,
    __slice = [].slice;

  Hardcoded = (function() {

    Hardcoded.description = "Hardcoded takes an object containing mappings of variable names to \n" + "default values.\n" + "\n" + ">     new Vamonos.Widget.Hardcoded({ \n" + ">         i: 1, \n" + ">         A: [3,1,4] \n" + ">     }) \n" + "\n" + "Hardcoded has a couple magical variable names: `breakpoints` and \n" + "`watch`. `breakpoints` is used for setting breakpoints without a \n" + "Pseudocode widget. It takes a list of linenumbers. \n" + "\n" + ">     new Vamonos.Widget.Hardcoded({ breakpoints: [3,1,4] }) \n" + "\n" + "`watch` takes a list of variable names to add to watchVars. \n" + "\n" + ">     new Vamonos.Widget.Hardcoded({ watch: [\"i\", \"k\"] }) " + "\n" + "Note: setting `_callStack` as a watch var will break on procedure " + "calls and returns";

    function Hardcoded(args) {
      this.args = args != null ? args : {};
    }

    Hardcoded.prototype.event = function() {
      var event, name, options, value, _ref, _ref1, _results, _results1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          _ref = this.args;
          _results = [];
          for (name in _ref) {
            value = _ref[name];
            if (name === "breakpoints") {
              _results.push(this.setBreakpoints(value));
            } else if (name === "watch") {
              _results.push(this.setWatchVars(value));
            } else {
              _results.push(this.viz.setVariable(name, value, true));
            }
          }
          return _results;
          break;
        case "editStop":
          _ref1 = this.args;
          _results1 = [];
          for (name in _ref1) {
            value = _ref1[name];
            if (name !== "breakpoints" && name !== "watch") {
              _results1.push(this.viz.setVariable(name, value, true));
            }
          }
          return _results1;
      }
    };

    Hardcoded.prototype.setBreakpoints = function(breakpoints) {
      var context, n, points, _i, _len, _results, _results1;
      if (breakpoints.constructor.name === 'Array') {
        _results = [];
        for (_i = 0, _len = breakpoints.length; _i < _len; _i++) {
          n = breakpoints[_i];
          _results.push(this.viz.setBreakpoint(n, "main"));
        }
        return _results;
      } else {
        _results1 = [];
        for (context in breakpoints) {
          points = breakpoints[context];
          _results1.push((function() {
            var _j, _len1, _results2;
            _results2 = [];
            for (_j = 0, _len1 = points.length; _j < _len1; _j++) {
              n = points[_j];
              _results2.push(this.viz.setBreakpoint(n, context.proc));
            }
            return _results2;
          }).call(this));
        }
        return _results1;
      }
    };

    Hardcoded.prototype.setWatchVars = function(vars) {
      var v, _i, _len, _results;
      if (vars.constructor.name === 'Array') {
        _results = [];
        for (_i = 0, _len = vars.length; _i < _len; _i++) {
          v = vars[_i];
          _results.push(this.viz.setWatchVar(v));
        }
        return _results;
      } else if (typeof vars === 'string') {
        return this.viz.setWatchVar(vars);
      }
    };

    return Hardcoded;

  })();

  this.Vamonos["export"]({
    Widget: {
      Hardcoded: Hardcoded
    }
  });

}).call(this);

(function() {
  var Matrix,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Matrix = (function() {

    Matrix.description = "Displays a two dimensional array.";

    Matrix.dependencies = ["Vamonos.Widget.ArrayGuts"];

    Matrix.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      showChanges: {
        type: ["String", "Array"],
        defaultValue: "next",
        description: "type of frame shifts to highlight changes at, " + "can be multiple types with an array of strings"
      },
      cssRules: {
        type: "Array",
        defaultValue: [],
        description: "an array of quadruples of the form [row/column, " + "comparison, index-variable-expr, css-class] " + "where every row/column in the matrix that matches the " + "comparason against the given index-variable-expr receives " + "the given css class."
      },
      showIndices: {
        type: "Array",
        defaultValue: [],
        description: "an array of doubles of the form [row/column, " + "index-variable-expr] that show the text of the " + "index-variable-expr on the row/column it corresponds to."
      },
      cellFormat: {
        type: "Function",
        defaultValue: void 0,
        description: "A function that takes the raw contents of each entry and " + "returns the html to be displayed."
      }
    };

    function Matrix(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.cellFormat) == null) {
        this.cellFormat = Vamonos.rawToTxt;
      }
      this.$container = Vamonos.jqueryify(this.container);
      this.rows = [];
      this.cols = [];
      this.$cells = {};
      this.$rows = {};
      this.$colAnnotations = {};
      this.$rowAnnotations = {};
      this.$table = $("<table>", {
        "class": "matrix"
      });
      this.$container.append(this.$table);
    }

    Matrix.prototype.event = function() {
      var event, i, options, v, _, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          _ref = this.cssRules;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], _ = _ref1[0], _ = _ref1[1], i = _ref1[2], _ = _ref1[3];
            _ref2 = this.virtualIndexDependents(i);
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
              v = _ref2[_j];
              this.viz.registerVariable(v);
            }
          }
          _ref3 = this.showIndices;
          _results = [];
          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            _ref4 = _ref3[_k], _ = _ref4[0], i = _ref4[1];
            _results.push((function() {
              var _l, _len3, _ref5, _results1;
              _ref5 = this.virtualIndexDependents(i);
              _results1 = [];
              for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
                v = _ref5[_l];
                _results1.push(this.viz.registerVariable(v));
              }
              return _results1;
            }).call(this));
          }
          return _results;
          break;
        case "editStart":
          return this.$container.hide();
        case "displayStart":
          this.matrixReset();
          return this.$container.show();
        case "render":
          return this.render.apply(this, options);
      }
    };

    Matrix.prototype.render = function(frame, type) {
      var c, className, colIndices, compare, home, i, left, leftIndex, newCols, newMatrix, newRows, r, right, rightIndex, rowIndices, showChange, target, tmpFrame, v, _i, _j, _k, _l, _len, _len1, _len10, _len11, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results, _s, _t;
      newMatrix = (_ref = frame[this.varName]) != null ? _ref : {};
      this.$table.find("td").removeClass();
      _ref1 = this.getRows(newMatrix);
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        r = _ref1[_i];
        this.matrixEnsureRow(r);
      }
      _ref2 = this.getCols(newMatrix);
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        c = _ref2[_j];
        this.matrixEnsureColumn(c);
      }
      newRows = this.getRows(newMatrix);
      _ref3 = this.rows.slice(0);
      for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
        r = _ref3[_k];
        if (__indexOf.call(newRows, r) < 0) {
          this.matrixRemoveRow(r);
        }
      }
      newCols = this.getCols(newMatrix);
      _ref4 = this.cols.slice(0);
      for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
        c = _ref4[_l];
        if (__indexOf.call(newCols, c) < 0) {
          this.matrixRemoveCol(c);
        }
      }
      tmpFrame = {};
      for (v in frame) {
        tmpFrame[v] = frame[v];
      }
      _ref5 = this.cssRules;
      for (_m = 0, _len4 = _ref5.length; _m < _len4; _m++) {
        _ref6 = _ref5[_m], leftIndex = _ref6[0], compare = _ref6[1], rightIndex = _ref6[2], className = _ref6[3];
        _ref7 = this.rows;
        for (_n = 0, _len5 = _ref7.length; _n < _len5; _n++) {
          r = _ref7[_n];
          tmpFrame.row = r;
          _ref8 = this.cols;
          for (_o = 0, _len6 = _ref8.length; _o < _len6; _o++) {
            c = _ref8[_o];
            tmpFrame.col = c;
            left = this.virtualIndex(tmpFrame, leftIndex);
            right = this.virtualIndex(tmpFrame, rightIndex);
            if (this.comparator(compare, left, right)) {
              this.$cells[r][c].addClass(className);
            }
          }
        }
      }
      showChange = __indexOf.call(this.showChanges, type) >= 0;
      _ref9 = this.rows;
      for (_p = 0, _len7 = _ref9.length; _p < _len7; _p++) {
        r = _ref9[_p];
        _ref10 = this.cols;
        for (_q = 0, _len8 = _ref10.length; _q < _len8; _q++) {
          c = _ref10[_q];
          this.matrixSetFromRaw(r, c, (_ref11 = newMatrix[r]) != null ? _ref11[c] : void 0, showChange);
        }
      }
      rowIndices = {};
      colIndices = {};
      _ref12 = this.showIndices;
      for (_r = 0, _len9 = _ref12.length; _r < _len9; _r++) {
        _ref13 = _ref12[_r], type = _ref13[0], i = _ref13[1];
        home = type === "row" ? rowIndices : colIndices;
        target = "" + this.virtualIndex(frame, i);
        if (home[target] != null) {
          home[target].push(i);
        } else {
          home[target] = [i];
        }
      }
      _ref14 = this.rows;
      for (_s = 0, _len10 = _ref14.length; _s < _len10; _s++) {
        r = _ref14[_s];
        this.$rowAnnotations[r].html(rowIndices[r] != null ? rowIndices[r].join(", ") : "");
      }
      _ref15 = this.cols;
      _results = [];
      for (_t = 0, _len11 = _ref15.length; _t < _len11; _t++) {
        c = _ref15[_t];
        _results.push(this.$colAnnotations[c].html(colIndices[c] != null ? colIndices[c].join(", ") : ""));
      }
      return _results;
    };

    Matrix.prototype.virtualIndex = function(frame, indexStr) {
      var prevOp, t, thisTerm, tokens, total, _i, _len;
      if (!indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)) {
        return null;
      }
      tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g);
      if (tokens.length === 1) {
        return frame[tokens[0]];
      }
      prevOp = "+";
      total = 0;
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        t = tokens[_i];
        if (prevOp != null) {
          thisTerm = Vamonos.isNumber(t) ? parseInt(t) : parseInt(frame[t]);
          if (thisTerm == null) {
            return null;
          }
          switch (prevOp) {
            case "+":
              total += thisTerm;
              break;
            case "-":
              total -= thisTerm;
          }
          prevOp = null;
        } else {
          prevOp = t;
        }
      }
      return total;
    };

    Matrix.prototype.virtualIndexDependents = function(indexStr) {
      if (!indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)) {
        return [];
      }
      return indexStr.match(/([a-zA-Z_]+)/g);
    };

    Matrix.prototype.getRows = function(matrix) {
      var r, v;
      r = (function() {
        var _results;
        _results = [];
        for (v in matrix) {
          _results.push("" + v);
        }
        return _results;
      })();
      return this.smartSort(r);
    };

    Matrix.prototype.getCols = function(matrix) {
      var c, k, r;
      c = [];
      for (r in matrix) {
        for (k in matrix[r]) {
          if (__indexOf.call(c, k) < 0) {
            c.push("" + k);
          }
        }
      }
      return this.smartSort(c);
    };

    Matrix.prototype.smartSort = function(list) {
      if (list.filter(function(z) {
        return !Vamonos.isNumber(z);
      }).length) {
        return list.sort(function(a, b) {
          return a.localeCompare(b);
        });
      } else {
        return list.sort(function(a, b) {
          return parseInt(a) - parseInt(b);
        });
      }
    };

    Matrix.prototype.matrixEnsureRow = function(newRowName, showChanges) {
      var $newRow, c, newPos, _i, _len, _ref;
      newRowName = "" + newRowName;
      if (__indexOf.call(this.rows, newRowName) >= 0) {
        return;
      }
      this.rows.push(newRowName);
      this.smartSort(this.rows);
      newPos = this.rows.indexOf(newRowName);
      this.theMatrix[newRowName] = {};
      this.$rows[newRowName] = $newRow = $("<tr>").append($("<th>", {
        "class": "matrix-row-label",
        text: newRowName
      }));
      this.$cells[newRowName] = {};
      _ref = this.cols;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        $newRow.append(this.$cells[newRowName][c] = $("<td>"));
      }
      $newRow.append(this.$rowAnnotations[newRowName] = $("<th>", {
        "class": "matrix-row-annotation"
      }));
      this.$table.find("tr:nth-child(" + (newPos + 1) + ")").after($newRow);
      if (showChanges) {
        return $newRow.find("td").addClass('changed');
      }
    };

    Matrix.prototype.matrixEnsureColumn = function(newColName, showChanges) {
      var newPos, r, _i, _len, _ref, _results,
        _this = this;
      newColName = "" + newColName;
      if (__indexOf.call(this.cols, newColName) >= 0) {
        return;
      }
      this.cols.push(newColName);
      this.smartSort(this.cols);
      newPos = this.cols.indexOf(newColName);
      this.$table.find("tr > :nth-child(" + (newPos + 1) + ")").each(function(i, e) {
        if (i === 0) {
          return $(e).after($("<th>", {
            "class": "matrix-col-label",
            text: newColName
          }));
        } else if (i === _this.rows.length + 1) {
          return $(e).after(_this.$colAnnotations[newColName] = $("<th>", {
            "class": "matrix-col-annotation"
          }));
        } else {
          return $(e).after(_this.$cells[_this.rows[i - 1]][newColName] = $("<td>"));
        }
      });
      if (showChanges) {
        _ref = this.rows;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          r = _ref[_i];
          _results.push(this.$cells[r][newColName].addClass("changed"));
        }
        return _results;
      }
    };

    Matrix.prototype.matrixRemoveRow = function(rowName) {
      var pos;
      rowName = "" + rowName;
      if (__indexOf.call(this.rows, rowName) < 0) {
        return;
      }
      pos = this.rows.indexOf(rowName);
      this.rows.splice(pos, 1);
      this.$table.find("tr:nth-child(" + (pos + 2) + ")").remove();
      delete this.$rowAnnotations[rowName];
      delete this.$cells[rowName];
      return delete this.theMatrix[rowName];
    };

    Matrix.prototype.matrixRemoveCol = function(colName) {
      var pos, r, _i, _len, _ref, _results;
      colName = "" + colName;
      if (__indexOf.call(this.cols, colName) < 0) {
        return;
      }
      pos = this.cols.indexOf(colName);
      this.cols.splice(pos, 1);
      this.$table.find("tr > :nth-child(" + (pos + 2) + ")").remove();
      delete this.$colAnnotations[colName];
      _ref = this.rows;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        r = _ref[_i];
        delete this.$cells[r][colName];
        _results.push(delete this.theMatrix[r][colName]);
      }
      return _results;
    };

    Matrix.prototype.matrixSetFromRaw = function(i, j, rawVal, showChanges) {
      var $cell, newhtml, oldhtml;
      this.theMatrix[i][j] = rawVal;
      $cell = this.$cells[i][j];
      if ($cell == null) {
        return;
      }
      oldhtml = $cell.html();
      newhtml = rawVal != null ? "" + this.cellFormat(rawVal) : "";
      if (oldhtml !== newhtml) {
        $cell.html(newhtml);
        if (showChanges) {
          return this.markChanged(i, j);
        }
      }
    };

    Matrix.prototype.matrixReset = function() {
      this.theMatrix = {};
      this.$cells = {};
      this.rows = [];
      this.$rows = {};
      this.cols = [];
      this.$rowAnnotations = {};
      this.$colAnnotations = {};
      return this.$table.html("<tr><th></th><th></th></tr><tr><th></th><th></th></tr>");
    };

    Matrix.prototype.markChanged = function(i, j) {
      var dup;
      this.$cells[i][j].addClass("changed");
      dup = this.$cells[i][j].clone();
      this.$cells[i][j].replaceWith(dup);
      return this.$cells[i][j] = dup;
    };

    Matrix.prototype.shallowCopy = function(matrix) {
      var c, cols, r, res, rows, _i, _j, _len, _len1;
      rows = this.getRows(matrix);
      cols = this.getCols(matrix);
      res = {};
      for (_i = 0, _len = rows.length; _i < _len; _i++) {
        r = rows[_i];
        res[r] = {};
        for (_j = 0, _len1 = cols.length; _j < _len1; _j++) {
          c = cols[_j];
          res[r][c] = matrix[r][c];
        }
      }
      return res;
    };

    Matrix.prototype.comparator = function(str, a, b) {
      var res;
      if (Vamonos.isNumber(a) && Vamonos.isNumber(b)) {
        res = parseInt(a) - parseInt(b);
      } else {
        res = a.localeCompare(b);
      }
      switch (str) {
        case "<":
          return res < 0;
        case "<=":
          return res <= 0;
        case "=":
        case "==":
          return res === 0;
        case ">":
          return res > 0;
        case ">=":
          return res >= 0;
      }
    };

    return Matrix;

  })();

  this.Vamonos["export"]({
    Widget: {
      Matrix: Matrix
    }
  });

}).call(this);

(function() {
  var ModeLine,
    __slice = [].slice;

  ModeLine = (function() {

    ModeLine.description = "Display a string that changes depending upon which mode " + "the visualizer is in.";

    ModeLine.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      editModeText: {
        type: "String",
        description: "message ModeLine displays in editMode"
      },
      displayModeText: {
        type: "String",
        description: "message ModeLine displays in displayMode"
      }
    };

    function ModeLine(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.$container = Vamonos.jqueryify(this.container);
    }

    ModeLine.prototype.event = function() {
      var event, options, viz;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          return viz = options[0], options;
        case "editStart":
          return this.$container.html(this.editModeText);
        case "displayStart":
          return this.$container.html(this.displayModeText);
      }
    };

    return ModeLine;

  })();

  this.Vamonos["export"]({
    Widget: {
      ModeLine: ModeLine
    }
  });

}).call(this);

(function() {
  var ParallelArrays,
    __slice = [].slice;

  ParallelArrays = (function() {

    ParallelArrays.description = "Display multiple arrays, all lined up nice.";

    ParallelArrays.dependencies = ["Vamonos.Widget.ArrayGuts"];

    ParallelArrays.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      }
    };

    function ParallelArrays(sharedOptions) {
      var combinedOptions, k, specificOptions, tableContainer, v, _i, _len, _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: sharedOptions,
        ignoreExtraArgs: true
      });
      this.$container = Vamonos.jqueryify(sharedOptions.container);
      delete sharedOptions.container;
      tableContainer = $("<table>", {
        "class": "array"
      });
      this.$container.append(tableContainer);
      this.guts = [];
      _ref = sharedOptions.arrays;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        specificOptions = _ref[_i];
        combinedOptions = Vamonos.clone(sharedOptions);
        delete combinedOptions.arrays;
        for (k in specificOptions) {
          v = specificOptions[k];
          combinedOptions[k] = v;
        }
        combinedOptions.tableContainer = tableContainer;
        combinedOptions._dummyIndexZero = true;
        this.guts.push(new Vamonos.Widget.ArrayGuts(combinedOptions));
      }
    }

    ParallelArrays.prototype.event = function() {
      var args, g, _i, _len, _ref, _results;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _ref = this.guts;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        g = _ref[_i];
        _results.push(g.event.apply(g, args));
      }
      return _results;
    };

    return ParallelArrays;

  })();

  this.Vamonos["export"]({
    Widget: {
      ParallelArrays: ParallelArrays
    }
  });

}).call(this);

(function() {
  var Pseudocode,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Pseudocode = (function() {

    Pseudocode.description = "The Pseudocode widget prettily formats the pseudocode in " + "the div you provide it. It also visualizes and allows editing of " + "breakpoints.";

    Pseudocode.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      editableBreakpoints: {
        type: "Boolean",
        defaultValue: true,
        description: "whether breakpoints can be modified with this widget"
      },
      breakpoints: {
        type: ["Array", "String"],
        defaultValue: [],
        description: "initial breakpoints, as an array of line numbers, " + "or `'all'` for all breakpoints"
      },
      procedureName: {
        type: "String",
        defaultValue: "main",
        description: "the name of the procedure in the algorithm"
      }
    };

    function Pseudocode(args) {
      var nLines, _i, _ref, _ref1, _results;
      if (typeof args !== "object") {
        args = {
          container: args
        };
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.locals) == null) {
        this.locals = [];
      }
      if ((_ref1 = this.args) == null) {
        this.args = [];
      }
      this.mostRecent = 0;
      nLines = this.formatContainer(Vamonos.jqueryify(this.container));
      if (this.breakpoints === "all") {
        this.breakpoints = (function() {
          _results = [];
          for (var _i = 1; 1 <= nLines ? _i <= nLines : _i >= nLines; 1 <= nLines ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
      }
    }

    Pseudocode.prototype.event = function() {
      var b, event, frame, options, type, _i, _len, _ref, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          _ref = this.breakpoints;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            b = _ref[_i];
            _results.push(this.viz.setBreakpoint(b, this.procedureName));
          }
          return _results;
          break;
        case "editStart":
          if (this.editableBreakpoints) {
            this.enableBreakpointSelection();
          }
          this.showBreakpoints();
          return this.$tbl.find("div.pseudocode-breakpoint").addClass("pseudocode-editmode-breakpoint");
        case "editStop":
          return this.$tbl.find("div.pseudocode-breakpoint").removeClass("pseudocode-editmode-breakpoint");
        case "displayStart":
          if (this.editableBreakpoints) {
            this.disableBreakpointSelection();
          }
          return this.showBreakpoints();
        case "displayStop":
          this.clear();
          return this.$tbl.find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint");
        case "render":
          frame = options[0], type = options[1];
          return this.render(frame);
      }
    };

    Pseudocode.prototype.render = function(frame) {
      var next, prev;
      this.clear();
      if (this.procedureName !== frame._procName) {
        return;
      }
      next = frame._nextLine;
      prev = frame._prevLine;
      if (prev != null) {
        this.addClassToLine(prev, "pseudocode-previous");
      }
      if (next != null) {
        this.addClassToLine(next, "pseudocode-next");
      }
      if (frame._snapshotReasons.breakpoint != null) {
        this.getLine(frame._nextLine).find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint");
      }
      if (frame._snapshotReasons.error != null) {
        this.$tbl.find("tr").removeClass("pseudocode-next");
        this.$tbl.find("tr").removeClass("pseudocode-previous");
        return this.addClassToLine(next, "pseudocode-error");
      }
    };

    Pseudocode.prototype.clear = function() {
      this.$tbl.find("tr").removeClass("pseudocode-next");
      this.$tbl.find("tr").removeClass("pseudocode-previous");
      this.$tbl.find("tr").removeClass("pseudocode-error");
      return this.$tbl.find("div.pseudocode-breakpoint").removeClass("pseudocode-active-breakpoint");
    };

    Pseudocode.prototype.addClassToLine = function(n, klass) {
      if (Vamonos.isNumber(n)) {
        return this.$tbl.find("tr[vamonos-linenumber=" + n + "]").addClass(klass);
      }
    };

    Pseudocode.prototype.keywords = "for while if else elseif elsif elif begin end then repeat until               to downto by return error throw and or swap each".split(/\s+/).sort(function(a, b) {
      return b.length - a.length;
    });

    Pseudocode.prototype.enableBreakpointSelection = function() {
      var gutter,
        _this = this;
      gutter = this.$tbl.find("td.pseudocode-gutter");
      gutter.on("mousedown", function(event) {
        var n;
        n = $(event.target).closest("tr").attr("vamonos-linenumber");
        _this.toggleBreakpoint(n);
        _this.mouseDownMode = _this.getBreakpointStatus(n);
        return false;
      });
      $(window).on("mouseup.vamonos", function() {
        return _this.mouseDownMode = null;
      });
      gutter.on("mouseover", function() {
        var n;
        if (_this.mouseDownMode == null) {
          return;
        }
        n = $(event.target).closest("tr").attr("vamonos-linenumber");
        switch (_this.mouseDownMode) {
          case "on":
            return _this.setBreakpoint(n);
          case "off":
            return _this.unsetBreakpoint(n);
        }
      });
      return gutter.prop("title", "Click to toggle a breakpoint on this line");
    };

    Pseudocode.prototype.disableBreakpointSelection = function() {
      var gutter;
      gutter = this.$tbl.find("td.pseudocode-gutter");
      gutter.off("mousedown").off("mouseover").prop("title", "");
      $(window).off("mouseup.vamonos");
      return this.mouseDownMode = null;
    };

    Pseudocode.prototype.getBreakpointStatus = function(n) {
      if (!Vamonos.isNumber(n)) {
        return;
      }
      n = parseInt(n);
      if (__indexOf.call(this.viz.getBreakpoints(this.procedureName), n) >= 0) {
        return "on";
      } else {
        return "off";
      }
    };

    Pseudocode.prototype.setBreakpoint = function(n) {
      if (this.getBreakpointStatus(n) !== "off") {
        return;
      }
      n = parseInt(n);
      this.getLine(n).find("td.pseudocode-gutter").append($("<div>", {
        "class": "pseudocode-breakpoint"
      }));
      return this.viz.setBreakpoint(parseInt(n), this.procedureName);
    };

    Pseudocode.prototype.unsetBreakpoint = function(n) {
      if (this.getBreakpointStatus(n) !== "on") {
        return;
      }
      n = parseInt(n);
      this.getLine(n).find("td.pseudocode-gutter").html("");
      return this.viz.removeBreakpoint(n, this.procedureName);
    };

    Pseudocode.prototype.toggleBreakpoint = function(n) {
      switch (this.getBreakpointStatus(n)) {
        case "on":
          return this.unsetBreakpoint(n);
        case "off":
          return this.setBreakpoint(n);
      }
    };

    Pseudocode.prototype.showBreakpoints = function() {
      var n, _i, _len, _ref, _results;
      this.$tbl.find("td.pseudocode-gutter div.pseudocode-breakpoint").remove();
      _ref = this.viz.getBreakpoints(this.procedureName);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        _results.push(this.getLine(n).find("td.pseudocode-gutter").append($("<div>", {
          "class": "pseudocode-breakpoint"
        })));
      }
      return _results;
    };

    Pseudocode.prototype.getLine = function(n) {
      return this.$tbl.find("tr[vamonos-linenumber=" + n + "]");
    };

    Pseudocode.prototype.formatContainer = function($container) {
      var className, html_lines, indents, keywordsPattern, line, lineNumber, lineNumberStr, minWhitespace, numIndents, title, _i, _len, _ref;
      title = $container.attr("title");
      $container.removeAttr("title");
      html_lines = $container.html().split(/\r\n|\r|\n/).filter(function(l) {
        return l.match(/\S/);
      });
      this.$tbl = $("<table>", {
        "class": "pseudocode"
      });
      this.$tbl.append($("<tr>", {
        "class": "pseudocode-header"
      }).append($("<td>", {
        "class": "pseudocode-title",
        colspan: 3,
        text: title
      })));
      minWhitespace = ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = html_lines.length; _i < _len; _i++) {
          line = html_lines[_i];
          _results.push(line.match(/^\s*/)[0].length);
        }
        return _results;
      })()).reduce(function(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      });
      keywordsPattern = new RegExp("\\b(" + (this.keywords.join("|")) + ")\\b", "gi");
      lineNumber = 1;
      for (_i = 0, _len = html_lines.length; _i < _len; _i++) {
        line = html_lines[_i];
        _ref = line.match(/^\s*(\/\/|\#)/) ? ["", "pseudocode-comment"] : [lineNumber++, "pseudocode-text"], lineNumberStr = _ref[0], className = _ref[1];
        if (className !== "pseudocode-comment") {
          line = line.replace(keywordsPattern, function(s) {
            return "<b>" + s + "</b>";
          });
        }
        numIndents = Math.floor((line.match(/^\s*/)[0].length - minWhitespace) / 4);
        indents = Array(numIndents + 1).join("<span class=pseudocode-indent></span>");
        this.$tbl.append($("<tr>", {
          "class": "pseudocode-line",
          "vamonos-linenumber": lineNumberStr
        }).append($("<td>", {
          "class": "pseudocode-gutter"
        }), $("<td>", {
          "class": "pseudocode-line-number",
          text: lineNumberStr
        }), $("<td>", {
          "class": className,
          html: indents + line
        })));
      }
      $container.html(this.$tbl);
      return lineNumber;
    };

    return Pseudocode;

  })();

  this.Vamonos["export"]({
    Widget: {
      Pseudocode: Pseudocode
    }
  });

}).call(this);

(function() {
  var DIRS, QTipTutorial;

  DIRS = {
    n: {
      target: "topMiddle",
      tooltip: "bottomMiddle"
    },
    s: {
      target: "bottomMiddle",
      tooltip: "topMiddle"
    },
    e: {
      target: "rightMiddle",
      tooltip: "leftMiddle"
    },
    w: {
      target: "leftMiddle",
      tooltip: "rightMiddle"
    },
    nw: {
      target: "topLeft",
      tooltip: "rightBottom"
    },
    ne: {
      target: "topRight",
      tooltip: "leftBottom"
    },
    se: {
      target: "bottomRight",
      tooltip: "leftTop"
    },
    sw: {
      target: "bottomLeft",
      tooltip: "rightTop"
    }
  };

  QTipTutorial = (function() {

    QTipTutorial.spec = {
      states: {
        type: "Array",
        description: "array of objects of the format `{ target, dir, tooltip }` where " + "target is a jQuery selector for where you want the tooltip to " + "appear, tooltip is the message to be displayed."
      }
    };

    function QTipTutorial(args) {
      var _this = this;
      if (args.constructor.name === 'Array') {
        args = {
          states: args
        };
      }
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.currStateIndex = null;
      this.$currTarget = null;
      this.$tipXButton = $("<div>", {
        style: "float:right; padding: 0 0 8px 8px; cursor: pointer;",
        html: "&#x2612;"
      });
      this.$tipPrevLink = $("<div>", {
        style: "float:left; cursor: pointer;",
        html: "&laquo; previous"
      });
      this.$tipNextLink = $("<div>", {
        style: "float:right; cursor: pointer;",
        html: "next &raquo;"
      });
      this.$tipData = $("<div>", {
        style: "padding-bottom: 12px;"
      });
      this.$tipContents = $("<div>").append(this.$tipXButton, this.$tipData, this.$tipPrevLink, this.$tipNextLink);
      this.$tipXButton.on("click.qtiptutorial", function() {
        return _this.stop();
      });
      this.$tipPrevLink.on("click.qtiptutorial", function() {
        return _this.prevState();
      });
      this.$tipNextLink.on("click.qtiptutorial", function() {
        return _this.nextState();
      });
    }

    QTipTutorial.prototype.doState = function(newStateIndex) {
      var currState, _ref;
      if (this.$currTarget != null) {
        this.$currTarget.qtip("destroy");
      }
      if (newStateIndex < 0) {
        return;
      }
      this.currStateIndex = newStateIndex;
      currState = this.states[this.currStateIndex];
      if (currState == null) {
        return;
      }
      this.$currTarget = currState.target;
      if ((_ref = currState.dir) == null) {
        currState.dir = "w";
      }
      this.$tipData.html(currState.tooltip);
      if (this.currStateIndex > 0) {
        this.$tipPrevLink.show();
      } else {
        this.$tipPrevLink.hide();
      }
      if (this.currStateIndex < this.states.length - 1) {
        this.$tipNextLink.show();
      } else {
        this.$tipNextLink.hide();
      }
      return this.$currTarget.qtip({
        position: {
          corner: DIRS[currState.dir]
        },
        show: {
          when: false,
          ready: true
        },
        hide: false,
        style: {
          name: "cream",
          tip: DIRS[currState.dir].tooltip
        },
        content: this.$tipContents
      });
    };

    QTipTutorial.prototype.event = function() {};

    QTipTutorial.prototype.setup = function() {};

    QTipTutorial.prototype.nextState = function() {
      return this.doState(this.currStateIndex + 1);
    };

    QTipTutorial.prototype.prevState = function() {
      return this.doState(this.currStateIndex - 1);
    };

    QTipTutorial.prototype.stop = function() {
      return this.doState(-1);
    };

    QTipTutorial.prototype.restart = function() {
      return this.doState(0);
    };

    return QTipTutorial;

  })();

  this.Vamonos["export"]({
    Widget: {
      QTipTutorial: QTipTutorial
    }
  });

}).call(this);

(function() {
  var Queue,
    __slice = [].slice;

  Queue = (function() {

    Queue.dependencies = ["Vamonos.Widget.ArrayGuts"];

    Queue.spec = {
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      showCellNumber: {
        type: "Boolean",
        description: "whether to show numbers above queue elements",
        defaultValue: false
      }
    };

    function Queue(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args,
        ignoreExtraArgs: true
      });
      args.showCellNumber = this.showCellNumber;
      this.arrayWidget = new Vamonos.Widget.Array(args);
    }

    Queue.prototype.event = function() {
      var event, frame, newFrame, options, type, viz, _ref, _ref1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0];
          viz.registerVariable(this.varName);
          return this.arrayWidget.event(event, viz);
        case "render":
          frame = options[0], type = options[1];
          newFrame = Vamonos.clone(frame);
          newFrame[this.varName] = (_ref = frame[this.varName]) != null ? _ref.guts : void 0;
          return this.arrayWidget.event("render", newFrame, type);
        default:
          return (_ref1 = this.arrayWidget).event.apply(_ref1, [event].concat(__slice.call(options)));
      }
    };

    return Queue;

  })();

  this.Vamonos["export"]({
    Widget: {
      Queue: Queue
    }
  });

}).call(this);

(function() {
  var ResultProperty,
    __slice = [].slice;

  ResultProperty = (function() {

    ResultProperty.description = "The `ResultProperty` widget takes as its constructor an object mapping\n(potentially namespaced) variable names in the stash to side-effecting\nfunctions taking those variables.";

    function ResultProperty(vars) {
      this.vars = vars;
    }

    ResultProperty.prototype.event = function() {
      var event, options, vFunc, vName, view, _ref, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case 'setup':
          return this.viz = options[0], options;
        case 'displayStart':
          view = this.viz.frames.slice(0).pop();
          _ref = this.vars;
          _results = [];
          for (vName in _ref) {
            vFunc = _ref[vName];
            _results.push(vFunc(view[vName]));
          }
          return _results;
      }
    };

    return ResultProperty;

  })();

  this.Vamonos["export"]({
    Widget: {
      ResultProperty: ResultProperty
    }
  });

}).call(this);

(function() {
  var UserQuiz,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  UserQuiz = (function() {

    UserQuiz.spec = {
      question: {
        type: ["String", "Function"],
        description: "either a string or a function that takes a frame and returns a " + "string"
      },
      answer: {
        type: ["String", "Function"],
        description: "either a string or a function that takes a frame and returns a " + "string"
      },
      condition: {
        type: "Function",
        description: "a function taking the current frame, returning a boolean, " + "used to determine when to ask a question"
      },
      title: {
        type: ["String", "Function"],
        defaultValue: void 0,
        description: "the title of the quiz. either as a plain string or as a function " + "that takes the current frame as an argument and returns a string."
      }
    };

    function UserQuiz(args) {
      var response, _ref,
        _this = this;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.title) == null) {
        this.title = Vamonos.funcify("Self-test question");
      }
      this.question = Vamonos.funcify(this.question);
      this.answer = Vamonos.funcify(this.answer);
      this.$dialog = $("<div>", {
        "class": "userquiz"
      });
      this.$dialog.hide();
      this.$question = $("<div>", {
        "class": "userquiz-question"
      }).appendTo(this.$dialog);
      response = $("<div>", {
        "class": "userquiz-response"
      }).appendTo(this.$dialog);
      this.$answer = $("<input>", {
        "class": "userquiz-answer"
      }).appendTo(response);
      this.$submit = $("<button>", {
        text: "answer"
      }).appendTo(response);
      this.$feedback = $("<div>", {
        "class": "userquiz-feedback"
      }).appendTo(this.$dialog);
      this.$submit.on("click", function() {
        return _this.submitHandler();
      });
      this.$answer.on("keypress", function(e) {
        if (e.keyCode === 13) {
          _this.$submit.trigger("click");
          return false;
        }
      });
    }

    UserQuiz.prototype.event = function() {
      var event, options, type, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.visualizer = options[0];
          return $("body").append(this.$dialog);
        case "displayStart":
          this.currentAnswer = null;
          this.currentFrame = null;
          this.framesPassed = [];
          this.wrongTimeout = null;
          return this.log = [];
        case "render":
          this.currentFrame = options[0], type = options[1];
          if (!(type === "next" && this.condition(this.currentFrame, this.visualizer.frames) && (_ref = this.currentFrame._frameNumber, __indexOf.call(this.framesPassed, _ref) < 0))) {
            return;
          }
          this.$dialog.attr("title", this.title(this.currentFrame));
          this.$question.html(this.question(this.currentFrame, this.visualizer.frames));
          this.$answer.val("");
          this.$feedback.html("");
          this.$feedback.removeClass("correct-answer", "wrong-answer");
          this.currentAnswer = this.answer(this.currentFrame, this.visualizer.frames);
          this.wrongTimeout = null;
          this.visualizer.frozen = true;
          return this.$dialog.dialog({
            modal: true,
            closeOnEscape: false,
            position: {
              my: "center",
              at: "center",
              of: window
            }
          });
        case "displayStop":
          return console.log(this.log);
      }
    };

    UserQuiz.prototype.submitHandler = function() {
      var _this = this;
      if (this.$answer.val() === this.currentAnswer + "") {
        this.$feedback.html("&#x2713; Correct!");
        this.$feedback.addClass("correct-answer");
        this.framesPassed.push(this.currentFrame._frameNumber);
        if (this.wrongTimeout) {
          clearTimeout(this.wrongTimeout);
        }
        this.log.push("correct answer `" + this.currentAnswer + "` at frame " + this.currentFrame._frameNumber);
        return setTimeout((function() {
          _this.$dialog.dialog("close");
          return _this.visualizer.frozen = false;
        }), 1000);
      } else {
        this.$feedback.addClass("wrong-answer");
        this.$feedback.html("&#x2717; Sorry, that's not right!");
        this.wrongTimeout = setTimeout((function() {
          return _this.$feedback.html("");
        }), 2000);
        return this.log.push("wrong answer `" + (this.$answer.val()) + "` at frame " + this.currentFrame._frameNumber);
      }
    };

    return UserQuiz;

  })();

  this.Vamonos["export"]({
    Widget: {
      UserQuiz: UserQuiz
    }
  });

}).call(this);

(function() {
  var VarDisplay,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  VarDisplay = (function() {

    VarDisplay.description = "VarDisplay allows viewing of the contents of variables, and " + "if they are objects, their attributes.";

    VarDisplay.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself"
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      attributes: {
        type: "Array",
        defaultValue: void 0,
        description: "if the variable is an object, an array of strings representing " + "which object attributes to show"
      },
      showChanges: {
        type: ["String", "Array"],
        defaultValue: "next",
        description: "type of frame shifts to highlight changes at, can be multiple " + "types with an array of strings"
      }
    };

    function VarDisplay(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.container = Vamonos.jqueryify(this.container);
      this.container.addClass("var-display");
      this.showChanges = Vamonos.arrayify(this.showChanges);
    }

    VarDisplay.prototype.event = function() {
      var event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          return this.viz.registerVariable(this.varName);
        case "editStart":
          return this.container.empty();
        case "render":
          this.showVars.apply(this, options);
          return this.adjustHeight();
        case "displayStop":
          return this.resetHeight();
      }
    };

    VarDisplay.prototype.showVars = function(frame, type) {
      var dup, newstr, oldstr, _ref;
      if (!(frame[this.varName] != null)) {
        newstr = "-";
      } else if (this.attributes != null) {
        if (__indexOf.call(this.showChanges, type) >= 0) {
          newstr = Vamonos.formatObject(frame[this.varName], this.attributes, this.oldval);
        } else {
          newstr = Vamonos.formatObject(frame[this.varName], this.attributes);
        }
        this.dontShowChange = true;
      } else {
        newstr = Vamonos.rawToTxt(frame[this.varName]);
      }
      oldstr = this.container.html();
      if (newstr !== oldstr) {
        if (__indexOf.call(this.showChanges, type) >= 0) {
          if (this.dontShowChange) {
            this.container.removeClass("changed");
          } else {
            this.container.addClass("changed");
          }
          this.container.html(newstr);
          dup = this.container.clone();
          this.container.replaceWith(dup);
          this.container = dup;
        } else {
          this.container.html(newstr);
          this.container.removeClass("changed");
          this.container.children().removeClass("changed");
        }
      } else {
        this.container.removeClass("changed");
        this.container.children().removeClass("changed");
      }
      this.dontShowChange = void 0;
      return this.oldval = (_ref = frame[this.varName]) != null ? _ref : {
        dummyObj: true
      };
    };

    VarDisplay.prototype.adjustHeight = function() {
      var _ref;
      if (this.container.height() > ((_ref = this.maxHeight) != null ? _ref : 0)) {
        return this.maxHeight = this.container.height();
      } else {
        return this.container.css("min-height", this.maxHeight);
      }
    };

    VarDisplay.prototype.resetHeight = function() {
      this.maxHeight = 0;
      return this.container.css("min-height", "");
    };

    return VarDisplay;

  })();

  this.Vamonos["export"]({
    Widget: {
      VarDisplay: VarDisplay
    }
  });

}).call(this);

(function() {
  var VarName,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  VarName = (function() {

    VarName.description = "VarName shows the variable name and provides " + "a buton to set the variable as a watchVar, and visual feedback for " + "editable variables in editMode.";

    VarName.spec = {
      container: {
        type: ["String", "jQuery Selector"],
        description: "The id or a jQuery selector of the div in which this widget " + "should draw itself."
      },
      varName: {
        type: "String",
        description: "the name of variable that this widget represents"
      },
      displayName: {
        type: "String",
        description: "alternate varname to display - defaults to `varName`. " + "subscript can be displayed as everything following an underscore.",
        defaultValue: void 0,
        example: "displayName: \"G_f\""
      },
      inputVar: {
        type: "Boolean",
        description: "whether to accept input for this variable in edit mode",
        defaultValue: false
      },
      watchable: {
        type: "Boolean",
        description: "whether the variable can be set as a watchVar",
        defaultValue: true
      },
      watching: {
        type: "Boolean",
        description: "whether the variable starts off set as a watchVar",
        defaultValue: false
      }
    };

    function VarName(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      if ((_ref = this.displayName) == null) {
        this.displayName = this.varName;
      }
      this.displayName = Vamonos.resolveSubscript(this.displayName);
      this.$container = Vamonos.jqueryify(this.container);
      this.watching && (this.watching = this.watchable);
      if (this.inputVar) {
        this.$editIndicator = $("<span>", {
          "class": "var-editable",
          html: "&#x270e;"
        }).appendTo(this.$container);
      }
      if (this.watchable) {
        this.$watchToggle = $("<span>", {
          "class": "var-watch",
          html: "&#x2605;"
        }).appendTo(this.$container);
      }
      this.$varName = $("<span>", {
        "class": "var-name",
        html: this.displayName + ":"
      }).appendTo(this.$container);
    }

    VarName.prototype.event = function() {
      var event, frame, options, _ref,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0];
          this.viz.registerVariable(this.varName);
          if (this.watching) {
            return this.viz.setWatchVar(this.varName);
          }
          break;
        case "editStart":
          this.setWatchStatus();
          if (this.watchable) {
            this.$watchToggle.on("mousedown", function() {
              return _this.toggleWatch();
            });
            this.$watchToggle.prop("title", "Click to toggle breaking when this variable changes");
          }
          if (this.inputVar) {
            this.$editIndicator.addClass("var-editing");
            return this.$editIndicator.prop("title", "Now in edit mode, you can change the contents of this variable");
          }
          break;
        case "editStop":
          if (this.watchable) {
            this.$watchToggle.off("mousedown");
            this.$watchToggle.prop("title", "");
          }
          if (this.inputVar) {
            this.$editIndicator.removeClass("var-editing");
            return this.$editIndicator.prop("title", "");
          }
          break;
        case "displayStart":
          return this.setWatchStatus();
        case "displayStop":
          if (this.watchable) {
            return this.$watchToggle.removeClass("var-watch-active");
          }
          break;
        case "render":
          frame = options[0];
          if (!this.watchable) {
            return;
          }
          if ((frame._snapshotReasons.watchVarsChanged != null) && (_ref = this.varName, __indexOf.call(frame._snapshotReasons.watchVarsChanged, _ref) >= 0)) {
            return this.$watchToggle.addClass("var-watch-active");
          } else {
            return this.$watchToggle.removeClass("var-watch-active");
          }
      }
    };

    VarName.prototype.setWatchStatus = function() {
      if (!this.watchable) {
        return;
      }
      if (this.viz.isWatchVar(this.varName)) {
        this.$watchToggle.addClass("var-watching");
        return this.watching = true;
      } else {
        this.$watchToggle.removeClass("var-watching");
        return this.watching = false;
      }
    };

    VarName.prototype.toggleWatch = function() {
      if (!this.watchable) {
        return;
      }
      if (this.watching) {
        this.viz.removeWatchVar(this.varName);
      } else {
        this.viz.setWatchVar(this.varName);
      }
      this.setWatchStatus();
      return false;
    };

    return VarName;

  })();

  this.Vamonos["export"]({
    Widget: {
      VarName: VarName
    }
  });

}).call(this);
!function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function u(){}function i(n){return aa+n in this}function o(n){return n=aa+n,n in this&&delete this[n]}function a(){var n=[];return this.forEach(function(t){n.push(t)}),n}function c(){var n=0;for(var t in this)t.charCodeAt(0)===ca&&++n;return n}function s(){for(var n in this)if(n.charCodeAt(0)===ca)return!1;return!0}function l(){}function f(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function h(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=sa.length;r>e;++e){var u=sa[e]+t;if(u in n)return u}}function g(){}function p(){}function v(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new u;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function d(){Xo.event.preventDefault()}function m(){for(var n,t=Xo.event;n=t.sourceEvent;)t=n;return t}function y(n){for(var t=new p,e=0,r=arguments.length;++e<r;)t[arguments[e]]=v(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Xo.event;u.target=n,Xo.event=u,t[u.type].apply(e,r)}finally{Xo.event=i}}},t}function x(n){return fa(n,da),n}function M(n){return"function"==typeof n?n:function(){return ha(n,this)}}function _(n){return"function"==typeof n?n:function(){return ga(n,this)}}function b(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Xo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function w(n){return n.trim().replace(/\s+/g," ")}function S(n){return new RegExp("(?:^|\\s+)"+Xo.requote(n)+"(?:\\s+|$)","g")}function k(n){return n.trim().split(/^|\s+/)}function E(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=k(n).map(A);var u=n.length;return"function"==typeof t?r:e}function A(n){var t=S(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",w(u+" "+n))):e.setAttribute("class",w(u.replace(t," ")))}}function C(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function N(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function L(n){return"function"==typeof n?n:(n=Xo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function z(n){return{__data__:n}}function q(n){return function(){return va(this,n)}}function T(n){return arguments.length||(n=Xo.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function R(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function D(n){return fa(n,ya),n}function P(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function U(){var n=this.__transition__;n&&++n.active}function j(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Bo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Xo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=H;a>0&&(n=n.substring(0,a));var s=Ma.get(n);return s&&(n=s,c=F),a?t?u:r:t?g:i}function H(n,t){return function(e){var r=Xo.event;Xo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Xo.event=r}}}function F(n,t){var e=H(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function O(){var n=".dragsuppress-"+ ++ba,t="click"+n,e=Xo.select(Go).on("touchmove"+n,d).on("dragstart"+n,d).on("selectstart"+n,d);if(_a){var r=Jo.style,u=r[_a];r[_a]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),_a&&(r[_a]=u),i&&(e.on(t,function(){d(),o()},!0),setTimeout(o,0))}}function Y(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>wa&&(Go.scrollX||Go.scrollY)){e=Xo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();wa=!(u.f||u.e),e.remove()}return wa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function I(n){return n>0?1:0>n?-1:0}function Z(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function V(n){return n>1?0:-1>n?Sa:Math.acos(n)}function X(n){return n>1?Ea:-1>n?-Ea:Math.asin(n)}function $(n){return((n=Math.exp(n))-1/n)/2}function B(n){return((n=Math.exp(n))+1/n)/2}function W(n){return((n=Math.exp(2*n))-1)/(n+1)}function J(n){return(n=Math.sin(n/2))*n}function G(){}function K(n,t,e){return new Q(n,t,e)}function Q(n,t,e){this.h=n,this.s=t,this.l=e}function nt(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,gt(u(n+120),u(n),u(n-120))}function tt(n,t,e){return new et(n,t,e)}function et(n,t,e){this.h=n,this.c=t,this.l=e}function rt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),ut(e,Math.cos(n*=Na)*t,Math.sin(n)*t)}function ut(n,t,e){return new it(n,t,e)}function it(n,t,e){this.l=n,this.a=t,this.b=e}function ot(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=ct(u)*Fa,r=ct(r)*Oa,i=ct(i)*Ya,gt(lt(3.2404542*u-1.5371385*r-.4985314*i),lt(-.969266*u+1.8760108*r+.041556*i),lt(.0556434*u-.2040259*r+1.0572252*i))}function at(n,t,e){return n>0?tt(Math.atan2(e,t)*La,Math.sqrt(t*t+e*e),n):tt(0/0,0/0,n)}function ct(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function st(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function lt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function ft(n){return gt(n>>16,255&n>>8,255&n)}function ht(n){return ft(n)+""}function gt(n,t,e){return new pt(n,t,e)}function pt(n,t,e){this.r=n,this.g=t,this.b=e}function vt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function dt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Mt(u[0]),Mt(u[1]),Mt(u[2]))}return(i=Va.get(n))?t(i.r,i.g,i.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(o=n.charAt(1),o+=o,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(o=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),o=parseInt(o,16),a=parseInt(a,16),c=parseInt(c,16)),t(o,a,c))}function mt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),K(r,u,c)}function yt(n,t,e){n=xt(n),t=xt(t),e=xt(e);var r=st((.4124564*n+.3575761*t+.1804375*e)/Fa),u=st((.2126729*n+.7151522*t+.072175*e)/Oa),i=st((.0193339*n+.119192*t+.9503041*e)/Ya);return ut(116*u-16,500*(r-u),200*(u-i))}function xt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Mt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function _t(n){return"function"==typeof n?n:function(){return n}}function bt(n){return n}function wt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),St(t,e,n,r)}}function St(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Xo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Go.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Xo.event;Xo.event=n;try{o.progress.call(i,c)}finally{Xo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Bo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Xo.rebind(i,o,"on"),null==r?i:i.get(kt(r))}function kt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Et(){var n=At(),t=Ct()-n;t>24?(isFinite(t)&&(clearTimeout(Wa),Wa=setTimeout(Et,t)),Ba=0):(Ba=1,Ga(Et))}function At(){var n=Date.now();for(Ja=Xa;Ja;)n>=Ja.t&&(Ja.f=Ja.c(n-Ja.t)),Ja=Ja.n;return n}function Ct(){for(var n,t=Xa,e=1/0;t;)t.f?t=n?n.n=t.n:Xa=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return $a=n,e}function Nt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Lt(n,t){var e=Math.pow(10,3*oa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function zt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:bt;return function(n){var e=Qa.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=nc.get(g)||qt;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Xo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function qt(n){return n+""}function Tt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Rt(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new ec(e-1)),1),e}function i(n,e){return t(n=new ec(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{ec=Tt;var r=new Tt;return r._=n,o(r,t,e)}finally{ec=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Dt(n);return c.floor=c,c.round=Dt(r),c.ceil=Dt(u),c.offset=Dt(i),c.range=a,n}function Dt(n){return function(t,e){try{ec=Tt;var r=new Tt;return r._=t,n(r,e)._}finally{ec=Date}}}function Pt(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=uc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&ec!==Tt,o=new(i?Tt:ec);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in uc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{ec=Tt;var t=new ec;return t._=n,r(t)}finally{ec=Date}}var r=t(n);return e.parse=function(n){try{ec=Tt;var t=r.parse(n);return t&&t._}finally{ec=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ee;var x=Xo.map(),M=jt(v),_=Ht(v),b=jt(d),w=Ht(d),S=jt(m),k=Ht(m),E=jt(y),A=Ht(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Ut(n.getDate(),t,2)},e:function(n,t){return Ut(n.getDate(),t,2)},H:function(n,t){return Ut(n.getHours(),t,2)},I:function(n,t){return Ut(n.getHours()%12||12,t,2)},j:function(n,t){return Ut(1+tc.dayOfYear(n),t,3)},L:function(n,t){return Ut(n.getMilliseconds(),t,3)},m:function(n,t){return Ut(n.getMonth()+1,t,2)},M:function(n,t){return Ut(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Ut(n.getSeconds(),t,2)},U:function(n,t){return Ut(tc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Ut(tc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Ut(n.getFullYear()%100,t,2)},Y:function(n,t){return Ut(n.getFullYear()%1e4,t,4)},Z:ne,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Bt,e:Bt,H:Jt,I:Jt,j:Wt,L:Qt,m:$t,M:Gt,p:l,S:Kt,U:Ot,w:Ft,W:Yt,x:c,X:s,y:Zt,Y:It,Z:Vt,"%":te};return t}function Ut(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function jt(n){return new RegExp("^(?:"+n.map(Xo.requote).join("|")+")","i")}function Ht(n){for(var t=new u,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Ft(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Ot(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Yt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function It(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Zt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.y=Xt(+r[0]),e+r[0].length):-1}function Vt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=+t,e+5):-1}function Xt(n){return n+(n>68?1900:2e3)}function $t(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Bt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Wt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function Jt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Gt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Kt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function Qt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ne(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(oa(t)/60),u=oa(t)%60;return e+Ut(r,"0",2)+Ut(u,"0",2)}function te(n,t,e){oc.lastIndex=0;var r=oc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ee(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function re(){}function ue(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ie(n,t){n&&lc.hasOwnProperty(n.type)&&lc[n.type](n,t)}function oe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ae(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)oe(n[e],t,1);t.polygonEnd()}function ce(){function n(n,t){n*=Na,t=t*Na/2+Sa/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);hc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;gc.point=function(o,a){gc.point=n,r=(t=o)*Na,u=Math.cos(a=(e=a)*Na/2+Sa/4),i=Math.sin(a)},gc.lineEnd=function(){n(t,e)}}function se(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function le(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function fe(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function he(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ge(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function pe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function ve(n){return[Math.atan2(n[1],n[0]),X(n[2])]}function de(n,t){return oa(n[0]-t[0])<Aa&&oa(n[1]-t[1])<Aa}function me(n,t){n*=Na;var e=Math.cos(t*=Na);ye(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function ye(n,t,e){++pc,dc+=(n-dc)/pc,mc+=(t-mc)/pc,yc+=(e-yc)/pc}function xe(){function n(n,u){n*=Na;var i=Math.cos(u*=Na),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);vc+=s,xc+=s*(t+(t=o)),Mc+=s*(e+(e=a)),_c+=s*(r+(r=c)),ye(t,e,r)}var t,e,r;kc.point=function(u,i){u*=Na;var o=Math.cos(i*=Na);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),kc.point=n,ye(t,e,r)}}function Me(){kc.point=me}function _e(){function n(n,t){n*=Na;var e=Math.cos(t*=Na),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-V(g)/h,v=Math.atan2(h,g);bc+=p*s,wc+=p*l,Sc+=p*f,vc+=v,xc+=v*(r+(r=o)),Mc+=v*(u+(u=a)),_c+=v*(i+(i=c)),ye(r,u,i)}var t,e,r,u,i;kc.point=function(o,a){t=o,e=a,kc.point=n,o*=Na;var c=Math.cos(a*=Na);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),ye(r,u,i)},kc.lineEnd=function(){n(t,e),kc.lineEnd=Me,kc.point=me}}function be(){return!0}function we(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(de(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new ke(e,n,null,!0),s=new ke(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new ke(r,n,null,!1),s=new ke(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Se(i),Se(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Se(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function ke(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ee(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r){if(1&t){n=e[0];var u,r=n.length-1,o=-1;for(i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Ae))}}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[],i.polygonStart()},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Xo.merge(g);var n=Le(m,p);g.length?we(g,Ne,n,e,i):n&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Ce(),M=t(x);return y}}function Ae(n){return n.length>1}function Ce(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:g,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ne(n,t){return((n=n.x)[0]<0?n[1]-Ea-Aa:Ea-n[1])-((t=t.x)[0]<0?t[1]-Ea-Aa:Ea-t[1])}function Le(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;hc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+Sa/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+Sa/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Sa,k=p*x;if(hc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*ka:_,S^h>=e^m>=e){var E=fe(se(f),se(n));pe(E);var A=fe(u,E);pe(A);var C=(S^_>=0?-1:1)*X(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Aa>i||Aa>i&&0>hc)^1&o}function ze(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Sa:-Sa,c=oa(i-e);oa(c-Sa)<Aa?(n.point(e,r=(r+o)/2>0?Ea:-Ea),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Sa&&(oa(e-u)<Aa&&(e-=u*Aa),oa(i-a)<Aa&&(i-=a*Aa),r=qe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function qe(n,t,e,r){var u,i,o=Math.sin(n-e);return oa(o)>Aa?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Te(n,t,e,r){var u;if(null==n)u=e*Ea,r.point(-Sa,u),r.point(0,u),r.point(Sa,u),r.point(Sa,0),r.point(Sa,-u),r.point(0,-u),r.point(-Sa,-u),r.point(-Sa,0),r.point(-Sa,u);else if(oa(n[0]-t[0])>Aa){var i=n[0]<t[0]?Sa:-Sa;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Re(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Sa:-Sa),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(de(e,g)||de(p,g))&&(p[0]+=Aa,p[1]+=Aa,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&de(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=se(n),u=se(t),o=[1,0,0],a=fe(r,u),c=le(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=fe(o,a),p=ge(o,f),v=ge(a,h);he(p,v);var d=g,m=le(p,d),y=le(d,d),x=m*m-y*(le(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ge(d,(-m-M)/y);if(he(_,p),_=ve(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=oa(A-Sa)<Aa,N=C||Aa>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(oa(_[0]-w)<Aa?k:E):k<=_[1]&&_[1]<=E:A>Sa^(w<=_[0]&&_[0]<=S)){var L=ge(d,(-m+M)/y);return he(L,p),[_,ve(L)]}}}function u(t,e){var r=o?n:Sa-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=oa(i)>Aa,c=cr(n,6*Na);return Ee(t,e,c,o?[0,-n]:[-Sa,n-Sa])}function De(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Pe(n,t,e,r){function u(r,u){return oa(r[0]-n)<Aa?u>0?0:3:oa(r[0]-e)<Aa?u>0?2:1:oa(r[1]-t)<Aa?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&Z(s,i,n)>0&&++t:i[1]<=r&&Z(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Ac,Math.min(Ac,n)),t=Math.max(-Ac,Math.min(Ac,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=Ce(),C=De(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Xo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&we(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ue(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function je(n){var t=0,e=Sa/3,r=nr(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Sa/180,e=n[1]*Sa/180):[180*(t/Sa),180*(e/Sa)]},u}function He(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,X((i-(n*n+e*e)*u*u)/(2*u))]},e}function Fe(){function n(n,t){Nc+=u*n-r*t,r=n,u=t}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,t=r=i,e=u=o},Rc.lineEnd=function(){n(t,e)}}function Oe(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),zc>t&&(zc=t),t>Tc&&(Tc=t)}function Ye(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Ie(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Ie(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Ie(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Ze(n,t){dc+=n,mc+=t,++yc}function Ve(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);xc+=o*(t+n)/2,Mc+=o*(e+r)/2,_c+=o,Ze(t=n,e=r)}var t,e;Pc.point=function(r,u){Pc.point=n,Ze(t=r,e=u)}}function Xe(){Pc.point=Ze}function $e(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);xc+=o*(r+n)/2,Mc+=o*(u+t)/2,_c+=o,o=u*n-r*t,bc+=o*(r+n),wc+=o*(u+t),Sc+=3*o,Ze(r=n,u=t)}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,Ze(t=r=i,e=u=o)},Pc.lineEnd=function(){n(t,e)}}function Be(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,ka)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:g};return a}function We(n){function t(n){return(a?r:e)(n)}function e(t){return Ke(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=se([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=oa(oa(w)-1)<Aa||oa(r-h)<Aa?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,z=N-e,q=x*L-y*z;(q*q/M>i||oa((y*L+x*z)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Na),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function Je(n){var t=We(function(t,e){return n([t*La,e*La])});return function(n){return tr(t(n))}}function Ge(n){this.stream=n}function Ke(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function Qe(n){return nr(function(){return n})()}function nr(n){function t(n){return n=a(n[0]*Na,n[1]*Na),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*La,n[1]*La]}function r(){a=Ue(o=ur(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=We(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ec,_=bt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=tr(M(o,f(_(n)))),l.valid=!0,l
},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ec):Re((b=+n)*Na),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Pe(n[0][0],n[0][1],n[1][0],n[1][1]):bt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Na,d=n[1]%360*Na,r()):[v*La,d*La]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Na,y=n[1]%360*Na,x=n.length>2?n[2]%360*Na:0,r()):[m*La,y*La,x*La]},Xo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function tr(n){return Ke(n,function(t,e){n.point(t*Na,e*Na)})}function er(n,t){return[n,t]}function rr(n,t){return[n>Sa?n-ka:-Sa>n?n+ka:n,t]}function ur(n,t,e){return n?t||e?Ue(or(n),ar(t,e)):or(n):t||e?ar(t,e):rr}function ir(n){return function(t,e){return t+=n,[t>Sa?t-ka:-Sa>t?t+ka:t,e]}}function or(n){var t=ir(n);return t.invert=ir(-n),t}function ar(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),X(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),X(l*r-a*u)]},e}function cr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=sr(e,u),i=sr(e,i),(o>0?i>u:u>i)&&(u+=o*ka)):(u=n+o*ka,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=ve([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function sr(n,t){var e=se(t);e[0]-=n,pe(e);var r=V(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Aa)%(2*Math.PI)}function lr(n,t,e){var r=Xo.range(n,t-Aa,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function fr(n,t,e){var r=Xo.range(n,t-Aa,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function hr(n){return n.source}function gr(n){return n.target}function pr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(J(r-t)+u*o*J(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*La,Math.atan2(o,Math.sqrt(r*r+u*u))*La]}:function(){return[n*La,t*La]};return p.distance=h,p}function vr(){function n(n,u){var i=Math.sin(u*=Na),o=Math.cos(u),a=oa((n*=Na)-t),c=Math.cos(a);Uc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;jc.point=function(u,i){t=u*Na,e=Math.sin(i*=Na),r=Math.cos(i),jc.point=n},jc.lineEnd=function(){jc.point=jc.lineEnd=g}}function dr(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function mr(n,t){function e(n,t){var e=oa(oa(t)-Ea)<Aa?0:o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Sa/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=I(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ea]},e):xr}function yr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return oa(u)<Aa?er:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-I(u)*Math.sqrt(n*n+e*e)]},e)}function xr(n,t){return[n,Math.log(Math.tan(Sa/4+t/2))]}function Mr(n){var t,e=Qe(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Sa*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function _r(n,t){return[Math.log(Math.tan(Sa/4+t/2)),-n]}function br(n){return n[0]}function wr(n){return n[1]}function Sr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Z(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function kr(n,t){return n[0]-t[0]||n[1]-t[1]}function Er(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Ar(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function Cr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Nr(){Jr(this),this.edge=this.site=this.circle=null}function Lr(n){var t=Jc.pop()||new Nr;return t.site=n,t}function zr(n){Or(n),$c.remove(n),Jc.push(n),Jr(n)}function qr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];zr(n);for(var c=i;c.circle&&oa(e-c.circle.x)<Aa&&oa(r-c.circle.cy)<Aa;)i=c.P,a.unshift(c),zr(c),c=i;a.unshift(c),Or(c);for(var s=o;s.circle&&oa(e-s.circle.x)<Aa&&oa(r-s.circle.cy)<Aa;)o=s.N,a.push(s),zr(s),s=o;a.push(s),Or(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],$r(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Vr(c.site,s.site,null,u),Fr(c),Fr(s)}function Tr(n){for(var t,e,r,u,i=n.x,o=n.y,a=$c._;a;)if(r=Rr(a,o)-i,r>Aa)a=a.L;else{if(u=i-Dr(a,o),!(u>Aa)){r>-Aa?(t=a.P,e=a):u>-Aa?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Lr(n);if($c.insert(t,c),t||e){if(t===e)return Or(t),e=Lr(t.site),$c.insert(c,e),c.edge=e.edge=Vr(t.site,c.site),Fr(t),Fr(e),void 0;if(!e)return c.edge=Vr(t.site,c.site),void 0;Or(t),Or(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};$r(e.edge,s,p,M),c.edge=Vr(s,n,null,M),e.edge=Vr(n,p,null,M),Fr(t),Fr(e)}}function Rr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Dr(n,t){var e=n.N;if(e)return Rr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Pr(n){this.site=n,this.edges=[]}function Ur(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(oa(r-t)>Aa||oa(u-e)>Aa)&&(a.splice(o,0,new Br(Xr(i.site,l,oa(r-f)<Aa&&p-u>Aa?{x:f,y:oa(t-f)<Aa?e:p}:oa(u-p)<Aa&&h-r>Aa?{x:oa(e-p)<Aa?t:h,y:p}:oa(r-h)<Aa&&u-g>Aa?{x:h,y:oa(t-h)<Aa?e:g}:oa(u-g)<Aa&&r-f>Aa?{x:oa(e-g)<Aa?t:f,y:g}:null),i.site,null)),++c)}function jr(n,t){return t.angle-n.angle}function Hr(){Jr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Fr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Ca)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Gc.pop()||new Hr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Bc=m)}}}}function Or(n){var t=n.circle;t&&(t.P||(Bc=t.N),Wc.remove(t),Gc.push(t),Jr(t),n.circle=null)}function Yr(n){for(var t,e=Vc,r=De(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Ir(t,n)||!r(t)||oa(t.a.x-t.b.x)<Aa&&oa(t.a.y-t.b.y)<Aa)&&(t.a=t.b=null,e.splice(u,1))}function Ir(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Zr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Vr(n,t,e,r){var u=new Zr(n,t);return Vc.push(u),e&&$r(u,n,t,e),r&&$r(u,t,n,r),Xc[n.i].edges.push(new Br(u,n,t)),Xc[t.i].edges.push(new Br(u,t,n)),u}function Xr(n,t,e){var r=new Zr(n,null);return r.a=t,r.b=e,Vc.push(r),r}function $r(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Br(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function Wr(){this._=null}function Jr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function Gr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Kr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Qr(n){for(;n.L;)n=n.L;return n}function nu(n,t){var e,r,u,i=n.sort(tu).pop();for(Vc=[],Xc=new Array(n.length),$c=new Wr,Wc=new Wr;;)if(u=Bc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Xc[i.i]=new Pr(i),Tr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;qr(u.arc)}t&&(Yr(t),Ur(t));var o={cells:Xc,edges:Vc};return $c=Wc=Vc=Xc=null,o}function tu(n,t){return t.y-n.y||t.x-n.x}function eu(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function ru(n){return n.x}function uu(n){return n.y}function iu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function ou(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&ou(n,c[0],e,r,o,a),c[1]&&ou(n,c[1],o,r,u,a),c[2]&&ou(n,c[2],e,a,o,i),c[3]&&ou(n,c[3],o,a,u,i)}}function au(n,t){n=Xo.rgb(n),t=Xo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+vt(Math.round(e+i*n))+vt(Math.round(r+o*n))+vt(Math.round(u+a*n))}}function cu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=fu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function su(n,t){return t-=n=+n,function(e){return n+t*e}}function lu(n,t){var e,r,u,i,o,a=0,c=0,s=[],l=[];for(n+="",t+="",Qc.lastIndex=0,r=0;e=Qc.exec(t);++r)e.index&&s.push(t.substring(a,c=e.index)),l.push({i:s.length,x:e[0]}),s.push(null),a=Qc.lastIndex;for(a<t.length&&s.push(t.substring(a)),r=0,i=l.length;(e=Qc.exec(n))&&i>r;++r)if(o=l[r],o.x==e[0]){if(o.i)if(null==s[o.i+1])for(s[o.i-1]+=o.x,s.splice(o.i,1),u=r+1;i>u;++u)l[u].i--;else for(s[o.i-1]+=o.x+s[o.i+1],s.splice(o.i,2),u=r+1;i>u;++u)l[u].i-=2;else if(null==s[o.i+1])s[o.i]=o.x;else for(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1),u=r+1;i>u;++u)l[u].i--;l.splice(r,1),i--,r--}else o.x=su(parseFloat(e[0]),parseFloat(o.x));for(;i>r;)o=l.pop(),null==s[o.i+1]?s[o.i]=o.x:(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1)),i--;return 1===s.length?null==s[0]?(o=l[0].x,function(n){return o(n)+""}):function(){return t}:function(n){for(r=0;i>r;++r)s[(o=l[r]).i]=o.x(n);return s.join("")}}function fu(n,t){for(var e,r=Xo.interpolators.length;--r>=0&&!(e=Xo.interpolators[r](n,t)););return e}function hu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(fu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function gu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function pu(n){return function(t){return 1-n(1-t)}}function vu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function du(n){return n*n}function mu(n){return n*n*n}function yu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function xu(n){return function(t){return Math.pow(t,n)}}function Mu(n){return 1-Math.cos(n*Ea)}function _u(n){return Math.pow(2,10*(n-1))}function bu(n){return 1-Math.sqrt(1-n*n)}function wu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/ka*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*ka/t)}}function Su(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function ku(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Eu(n,t){n=Xo.hcl(n),t=Xo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return rt(e+i*n,r+o*n,u+a*n)+""}}function Au(n,t){n=Xo.hsl(n),t=Xo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return nt(e+i*n,r+o*n,u+a*n)+""}}function Cu(n,t){n=Xo.lab(n),t=Xo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ot(e+i*n,r+o*n,u+a*n)+""}}function Nu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Lu(n){var t=[n.a,n.b],e=[n.c,n.d],r=qu(t),u=zu(t,e),i=qu(Tu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*La,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*La:0}function zu(n,t){return n[0]*t[0]+n[1]*t[1]}function qu(n){var t=Math.sqrt(zu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Tu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ru(n,t){var e,r=[],u=[],i=Xo.transform(n),o=Xo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:su(a[0],c[0])},{i:3,x:su(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:su(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:su(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:su(g[0],p[0])},{i:e-2,x:su(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Du(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Pu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Uu(n){for(var t=n.source,e=n.target,r=Hu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function ju(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Hu(n,t){if(n===t)return n;for(var e=ju(n),r=ju(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Fu(n){n.fixed|=2}function Ou(n){n.fixed&=-7}function Yu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Iu(n){n.fixed&=-5}function Zu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Zu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Vu(n,t){return Xo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Wu,n}function Xu(n){return n.children}function $u(n){return n.value}function Bu(n,t){return t.value-n.value}function Wu(n){return Xo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Ju(n){return n.x}function Gu(n){return n.y}function Ku(n,t,e){n.y0=t,n.y=e}function Qu(n){return Xo.range(n.length)}function ni(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ti(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ei(n){return n.reduce(ri,0)}function ri(n,t){return n+t[1]}function ui(n,t){return ii(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ii(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function oi(n){return[Xo.min(n),Xo.max(n)]}function ai(n,t){return n.parent==t.parent?1:2}function ci(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function si(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function li(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=li(e[i],t),n)>0&&(n=r);return n}function fi(n,t){return n.x-t.x}function hi(n,t){return t.x-n.x}function gi(n,t){return n.depth-t.depth}function pi(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function vi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function di(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function mi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function yi(n,t){return n.value-t.value}function xi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Mi(n,t){n._pack_next=t,t._pack_prev=n}function _i(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function bi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(wi),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],Ei(r,u,i),t(i),xi(r,i),r._pack_prev=i,xi(i,u),u=r._pack_next,o=3;s>o;o++){Ei(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(_i(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!_i(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Mi(r,u=a):Mi(r=c,u),o--):(xi(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Si)}}function wi(n){n._pack_next=n._pack_prev=n}function Si(n){delete n._pack_next,delete n._pack_prev}function ki(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)ki(u[i],t,e,r)}function Ei(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function Ai(n){return 1+Xo.max(n,function(n){return n.y})}function Ci(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ni(n){var t=n.children;return t&&t.length?Ni(t[0]):n}function Li(n){var t,e=n.children;return e&&(t=e.length)?Li(e[t-1]):n}function zi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function qi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Ti(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ri(n){return n.rangeExtent?n.rangeExtent():Ti(n.range())}function Di(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Pi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Ui(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ls}function ji(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Xo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Hi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?ji:Di,c=r?Pu:Du;return o=u(n,t,c,e),a=u(t,n,c,fu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Nu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Ii(n,t)},i.tickFormat=function(t,e){return Zi(n,t,e)},i.nice=function(t){return Oi(n,t),u()},i.copy=function(){return Hi(n,t,e,r)},u()}function Fi(n,t){return Xo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Oi(n,t){return Pi(n,Ui(Yi(n,t)[2]))}function Yi(n,t){null==t&&(t=10);var e=Ti(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Ii(n,t){return Xo.range.apply(Xo,Yi(n,t))}function Zi(n,t,e){var r=Yi(n,t);return Xo.format(e?e.replace(Qa,function(n,t,e,u,i,o,a,c,s,l){return[t,e,u,i,o,a,c,s||"."+Xi(l,r),l].join("")}):",."+Vi(r[2])+"f")}function Vi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Xi(n,t){var e=Vi(t[2]);return n in fs?Math.abs(e-Vi(Math.max(Math.abs(t[0]),Math.abs(t[1]))))+ +("e"!==n):e-2*("%"===n)}function $i(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Pi(r.map(u),e?Math:gs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Ti(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return hs;arguments.length<2?t=hs:"function"!=typeof t&&(t=Xo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return $i(n.copy(),t,e,r)},Fi(o,n)}function Bi(n,t,e){function r(t){return n(u(t))}var u=Wi(t),i=Wi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Ii(e,n)},r.tickFormat=function(n,t){return Zi(e,n,t)},r.nice=function(n){return r.domain(Oi(e,n))},r.exponent=function(o){return arguments.length?(u=Wi(t=o),i=Wi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Bi(n.copy(),t,e)},Fi(r,n)}function Wi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ji(n,t){function e(e){return o[((i.get(e)||"range"===t.t&&i.set(e,n.push(e)))-1)%o.length]}function r(t,e){return Xo.range(n.length).map(function(n){return t+e*n})}var i,o,a;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new u;for(var o,a=-1,c=r.length;++a<c;)i.has(o=r[a])||i.set(o,n.push(o));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(o=n,a=0,t={t:"range",a:arguments},e):o},e.rangePoints=function(u,i){arguments.length<2&&(i=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+i);return o=r(n.length<2?(c+s)/2:c+l*i/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-i+2*c);return o=r(l+h*c,h),s&&o.reverse(),a=h*(1-i),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-i+2*c)),g=f-l-(n.length-i)*h;return o=r(l+Math.round(g/2),h),s&&o.reverse(),a=Math.round(h*(1-i)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Ti(t.a[0])},e.copy=function(){return Ji(n,t)},e.domain(n)}function Gi(n,t){function e(){var e=0,i=t.length;for(u=[];++e<i;)u[e-1]=Xo.quantile(n,e/i);return r}function r(n){return isNaN(n=+n)?void 0:t[Xo.bisect(u,n)]}var u;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(Xo.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return u},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?u[e-1]:n[0],e<u.length?u[e]:n[n.length-1]]},r.copy=function(){return Gi(n,t)},e()}function Ki(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return Ki(n,t,e)},u()}function Qi(n,t){function e(e){return e>=e?t[Xo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Qi(n,t)},e}function no(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Ii(n,t)},t.tickFormat=function(t,e){return Zi(n,t,e)},t.copy=function(){return no(n)},t}function to(n){return n.innerRadius}function eo(n){return n.outerRadius}function ro(n){return n.startAngle}function uo(n){return n.endAngle}function io(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=_t(e),p=_t(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=br,r=wr,u=be,i=oo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=Ms.get(n)||oo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function oo(n){return n.join("L")}function ao(n){return oo(n)+"Z"}function co(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function so(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function lo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function fo(n,t){return n.length<4?oo(n):n[1]+po(n.slice(1,n.length-1),vo(n,t))}function ho(n,t){return n.length<3?oo(n):n[0]+po((n.push(n[0]),n),vo([n[n.length-2]].concat(n,[n[1]]),t))}function go(n,t){return n.length<3?oo(n):n[0]+po(n,vo(n,t))}function po(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return oo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function vo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function mo(n){if(n.length<3)return oo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",_o(ws,o),",",_o(ws,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),bo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function yo(n){if(n.length<4)return oo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(_o(ws,i)+","+_o(ws,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),bo(e,i,o);return e.join("")}function xo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[_o(ws,o),",",_o(ws,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),bo(t,o,a);return t.join("")}function Mo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return mo(n)}function _o(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function bo(n,t,e){n.push("C",_o(_s,t),",",_o(_s,e),",",_o(bs,t),",",_o(bs,e),",",_o(ws,t),",",_o(ws,e))}function wo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function So(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=wo(u,i);++t<e;)r[t]=(o+(o=wo(u=i,i=n[t+1])))/2;return r[t]=o,r}function ko(n){for(var t,e,r,u,i=[],o=So(n),a=-1,c=n.length-1;++a<c;)t=wo(n[a],n[a+1]),oa(t)<Aa?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Eo(n){return n.length<3?oo(n):n[0]+po(n,ko(n))}function Ao(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ys,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Co(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=_t(e),_=_t(u),b=e===r?function(){return g}:_t(r),w=u===i?function(){return p}:_t(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=br,r=br,u=0,i=wr,o=be,a=oo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=Ms.get(n)||oo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function No(n){return n.radius}function Lo(n){return[n.x,n.y]}function zo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ys;return[e*Math.cos(r),e*Math.sin(r)]}}function qo(){return 64}function To(){return"circle"}function Ro(n){var t=Math.sqrt(n/Sa);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Do(n,t){return fa(n,Ns),n.id=t,n}function Po(n,t,e,r){var u=n.id;return R(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Uo(n){return null==n&&(n=""),function(){this.textContent=n}}function jo(n,t,e,r){var i=n.__transition__||(n.__transition__={active:0,count:0}),o=i[e];if(!o){var a=r.time;o=i[e]={tween:new u,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++i.count,Xo.timer(function(r){function u(r){return i.active>e?s():(i.active=e,o.event&&o.event.start.call(n,l,t),o.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Xo.timer(function(){return p.c=c(r||1)?be:c,1},0,a),void 0)}function c(r){if(i.active!==e)return s();for(var u=r/g,a=f(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,l,t),s()):void 0}function s(){return--i.count?delete i[e]:delete n.__transition__,1}var l=n.__data__,f=o.ease,h=o.delay,g=o.duration,p=Ja,v=[];return p.t=h+a,r>=h?u(r-h):(p.c=u,void 0)},0,a)}}function Ho(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Fo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Oo(n){return n.toISOString()}function Yo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Xo.bisect(js,u);
return i==js.length?[t.year,Yi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/js[i-1]<js[i]/u?i-1:i]:[Os,Yi(n,e)[2]]}return r.invert=function(t){return Io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Io(+e+1),t).length}var i=r.domain(),o=Ti(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Pi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Ti(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Yo(n.copy(),t,e)},Fi(r,n)}function Io(n){return new Date(n)}function Zo(n){return JSON.parse(n.responseText)}function Vo(n){var t=Wo.createRange();return t.selectNode(Wo.body),t.createContextualFragment(n.responseText)}var Xo={version:"3.4.3"};Date.now||(Date.now=function(){return+new Date});var $o=[].slice,Bo=function(n){return $o.call(n)},Wo=document,Jo=Wo.documentElement,Go=window;try{Bo(Jo.childNodes)[0].nodeType}catch(Ko){Bo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Wo.createElement("div").style.setProperty("opacity",0,"")}catch(Qo){var na=Go.Element.prototype,ta=na.setAttribute,ea=na.setAttributeNS,ra=Go.CSSStyleDeclaration.prototype,ua=ra.setProperty;na.setAttribute=function(n,t){ta.call(this,n,t+"")},na.setAttributeNS=function(n,t,e){ea.call(this,n,t,e+"")},ra.setProperty=function(n,t,e){ua.call(this,n,t+"",e)}}Xo.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},Xo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Xo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Xo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Xo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Xo.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Xo.mean=function(t,e){var r,u=t.length,i=0,o=-1,a=0;if(1===arguments.length)for(;++o<u;)n(r=t[o])&&(i+=(r-i)/++a);else for(;++o<u;)n(r=e.call(t,t[o],o))&&(i+=(r-i)/++a);return a?i:void 0},Xo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Xo.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?Xo.quantile(t.sort(Xo.ascending),.5):void 0},Xo.bisector=function(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n.call(t,t[i],i)<e?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;e<n.call(t,t[i],i)?u=i:r=i+1}return r}}};var ia=Xo.bisector(function(n){return n});Xo.bisectLeft=ia.left,Xo.bisect=Xo.bisectRight=ia.right,Xo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Xo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Xo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Xo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,e=Xo.min(arguments,t),r=new Array(e);++n<e;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},Xo.transpose=function(n){return Xo.zip.apply(Xo,n)},Xo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Xo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Xo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Xo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var oa=Math.abs;Xo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var u,i=[],o=e(oa(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(u=n+r*++a)>t;)i.push(u/o);else for(;(u=n+r*++a)<t;)i.push(u/o);return i},Xo.map=function(n){var t=new u;if(n instanceof u)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(u,{has:i,get:function(n){return this[aa+n]},set:function(n,t){return this[aa+n]=t},remove:o,keys:a,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:c,empty:s,forEach:function(n){for(var t in this)t.charCodeAt(0)===ca&&n.call(this,t.substring(1),this[t])}});var aa="\x00",ca=aa.charCodeAt(0);Xo.nest=function(){function n(t,a,c){if(c>=o.length)return r?r.call(i,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=o[c++],d=new u;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=o.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,i={},o=[],a=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(Xo.map,e,0),0)},i.key=function(n){return o.push(n),i},i.sortKeys=function(n){return a[o.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},Xo.set=function(n){var t=new l;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(l,{has:i,add:function(n){return this[aa+n]=!0,n},remove:function(n){return n=aa+n,n in this&&delete this[n]},values:a,size:c,empty:s,forEach:function(n){for(var t in this)t.charCodeAt(0)===ca&&n.call(this,t.substring(1))}}),Xo.behavior={},Xo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=f(n,t,t[e]);return n};var sa=["webkit","ms","moz","Moz","o","O"];Xo.dispatch=function(){for(var n=new p,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=v(n);return n},p.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Xo.event=null,Xo.requote=function(n){return n.replace(la,"\\$&")};var la=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,fa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ha=function(n,t){return t.querySelector(n)},ga=function(n,t){return t.querySelectorAll(n)},pa=Jo[h(Jo,"matchesSelector")],va=function(n,t){return pa.call(n,t)};"function"==typeof Sizzle&&(ha=function(n,t){return Sizzle(n,t)[0]||null},ga=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},va=Sizzle.matchesSelector),Xo.selection=function(){return xa};var da=Xo.selection.prototype=[];da.select=function(n){var t,e,r,u,i=[];n=M(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return x(i)},da.selectAll=function(n){var t,e,r=[];n=_(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Bo(n.call(e,e.__data__,a,u))),t.parentNode=e);return x(r)};var ma={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Xo.ns={prefix:ma,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ma.hasOwnProperty(e)?{space:ma[e],local:n}:n}},da.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Xo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(b(t,n[t]));return this}return this.each(b(n,t))},da.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=k(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!S(n[u]).test(t))return!1;return!0}for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},da.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(C(e,n[e],t));return this}if(2>r)return Go.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(C(n,t,e))},da.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(N(t,n[t]));return this}return this.each(N(n,t))},da.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},da.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},da.append=function(n){return n=L(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},da.insert=function(n,t){return n=L(n),t=M(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},da.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},da.data=function(n,t){function e(n,e){var r,i,o,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new u,y=new u,x=[];for(r=-1;++r<a;)d=t.call(i=n[r],i.__data__,r),m.has(d)?v[r]=i:m.set(d,i),x.push(d);for(r=-1;++r<f;)d=t.call(e,o=e[r],r),(i=m.get(d))?(g[r]=i,i.__data__=o):y.has(d)||(p[r]=z(o)),y.set(d,o),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],o=e[r],i?(i.__data__=o,g[r]=i):p[r]=z(o);for(;f>r;++r)p[r]=z(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,i,o=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++o<a;)(i=r[o])&&(n[o]=i.__data__);return n}var c=D([]),s=x([]),l=x([]);if("function"==typeof n)for(;++o<a;)e(r=this[o],n.call(r,r.parentNode.__data__,o));else for(;++o<a;)e(r=this[o],n);return s.enter=function(){return c},s.exit=function(){return l},s},da.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},da.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=q(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return x(u)},da.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},da.sort=function(n){n=T.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},da.each=function(n){return R(this,function(t,e,r){n.call(t,t.__data__,e,r)})},da.call=function(n){var t=Bo(arguments);return n.apply(t[0]=this,t),this},da.empty=function(){return!this.node()},da.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},da.size=function(){var n=0;return this.each(function(){++n}),n};var ya=[];Xo.selection.enter=D,Xo.selection.enter.prototype=ya,ya.append=da.append,ya.empty=da.empty,ya.node=da.node,ya.call=da.call,ya.size=da.size,ya.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return x(o)},ya.insert=function(n,t){return arguments.length<2&&(t=P(this)),da.insert.call(this,n,t)},da.transition=function(){for(var n,t,e=ks||++Ls,r=[],u=Es||{time:Date.now(),ease:yu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&jo(t,c,e,u),n.push(t)}return Do(r,e)},da.interrupt=function(){return this.each(U)},Xo.select=function(n){var t=["string"==typeof n?ha(n,Wo):n];return t.parentNode=Jo,x([t])},Xo.selectAll=function(n){var t=Bo("string"==typeof n?ga(n,Wo):n);return t.parentNode=Jo,x([t])};var xa=Xo.select(Jo);da.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(j(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(j(n,t,e))};var Ma=Xo.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ma.forEach(function(n){"on"+n in Wo&&Ma.remove(n)});var _a="onselectstart"in Wo?null:h(Jo.style,"userSelect"),ba=0;Xo.mouse=function(n){return Y(n,m())};var wa=/WebKit/.test(Go.navigator.userAgent)?-1:0;Xo.touches=function(n,t){return arguments.length<2&&(t=m().touches),t?Bo(t).map(function(t){var e=Y(n,t);return e.identifier=t.identifier,e}):[]},Xo.behavior.drag=function(){function n(){this.on("mousedown.drag",o).on("touchstart.drag",a)}function t(){return Xo.event.changedTouches[0].identifier}function e(n,t){return Xo.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function o(){var n=t(l,g),e=n[0]-v[0],r=n[1]-v[1];d|=e|r,v=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){m.on(e+"."+p,null).on(r+"."+p,null),y(d&&Xo.event.target===h),f({type:"dragend"})}var c,s=this,l=s.parentNode,f=u.of(s,arguments),h=Xo.event.target,g=n(),p=null==g?"drag":"drag-"+g,v=t(l,g),d=0,m=Xo.select(Go).on(e+"."+p,o).on(r+"."+p,a),y=O();i?(c=i.apply(s,arguments),c=[c.x-v[0],c.y-v[1]]):c=[0,0],f({type:"dragstart"})}}var u=y(n,"drag","dragstart","dragend"),i=null,o=r(g,Xo.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},Xo.rebind(n,u,"on")};var Sa=Math.PI,ka=2*Sa,Ea=Sa/2,Aa=1e-6,Ca=Aa*Aa,Na=Sa/180,La=180/Sa,za=Math.SQRT2,qa=2,Ta=4;Xo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=B(v),o=i/(qa*h)*(e*W(za*t+v)-$(v));return[r+o*s,u+o*l,i*e/B(za*t+v)]}return[r+n*s,u+n*l,i*Math.exp(za*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ta*f)/(2*i*qa*h),p=(c*c-i*i-Ta*f)/(2*c*qa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/za;return e.duration=1e3*y,e},Xo.behavior.zoom=function(){function n(n){n.on(A,s).on(Pa+".zoom",f).on(C,h).on("dblclick.zoom",g).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(M.range().map(function(n){return(n-S.x)/S.k}).map(M.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Xo.mouse(r),g),a(i)}function e(){f.on(C,Go===r?h:null).on(N,null),p(l&&Xo.event.target===s),c(i)}var r=this,i=z.of(r,arguments),s=Xo.event.target,l=0,f=Xo.select(Go).on(C,n).on(N,e),g=t(Xo.mouse(r)),p=O();U.call(r),o(i)}function l(){function n(){var n=Xo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=Xo.event.changedTouches,e=0,i=t.length;i>e;++e)v[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-x){var s=o[0],l=v[s.identifier];r(2*S.k),u(s,l),d(),a(p)}x=c}else if(o.length>1){var s=o[0],f=o[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function i(){for(var n,t,e,i,o=Xo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=m&&Math.sqrt(l/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}x=null,u(n,t),a(p)}function f(){if(Xo.event.touches.length){for(var t=Xo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}b.on(M,null).on(_,null),w.on(A,s).on(L,l),k(),c(p)}var h,g=this,p=z.of(g,arguments),v={},m=0,y=Xo.event.changedTouches[0].identifier,M="touchmove.zoom-"+y,_="touchend.zoom-"+y,b=Xo.select(Go).on(M,i).on(_,f),w=Xo.select(g).on(A,null).on(L,e),k=O();U.call(g),e(),o(p)}function f(){var n=z.of(this,arguments);m?clearTimeout(m):(U.call(this),o(n)),m=setTimeout(function(){m=null,c(n)},50),d();var e=v||Xo.mouse(this);p||(p=t(e)),r(Math.pow(2,.002*Ra())*S.k),u(e,p),a(n)}function h(){p=null}function g(){var n=z.of(this,arguments),e=Xo.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Xo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var p,v,m,x,M,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Da,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",z=y(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=z.of(this,arguments),t=S;ks?Xo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Xo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Da:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,M=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Xo.rebind(n,z,"on")};var Ra,Da=[0,1/0],Pa="onwheel"in Wo?(Ra=function(){return-Xo.event.deltaY*(Xo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Wo?(Ra=function(){return Xo.event.wheelDelta},"mousewheel"):(Ra=function(){return-Xo.event.detail},"MozMousePixelScroll");G.prototype.toString=function(){return this.rgb()+""},Xo.hsl=function(n,t,e){return 1===arguments.length?n instanceof Q?K(n.h,n.s,n.l):dt(""+n,mt,K):K(+n,+t,+e)};var Ua=Q.prototype=new G;Ua.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),K(this.h,this.s,this.l/n)},Ua.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),K(this.h,this.s,n*this.l)},Ua.rgb=function(){return nt(this.h,this.s,this.l)},Xo.hcl=function(n,t,e){return 1===arguments.length?n instanceof et?tt(n.h,n.c,n.l):n instanceof it?at(n.l,n.a,n.b):at((n=yt((n=Xo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):tt(+n,+t,+e)};var ja=et.prototype=new G;ja.brighter=function(n){return tt(this.h,this.c,Math.min(100,this.l+Ha*(arguments.length?n:1)))},ja.darker=function(n){return tt(this.h,this.c,Math.max(0,this.l-Ha*(arguments.length?n:1)))},ja.rgb=function(){return rt(this.h,this.c,this.l).rgb()},Xo.lab=function(n,t,e){return 1===arguments.length?n instanceof it?ut(n.l,n.a,n.b):n instanceof et?rt(n.l,n.c,n.h):yt((n=Xo.rgb(n)).r,n.g,n.b):ut(+n,+t,+e)};var Ha=18,Fa=.95047,Oa=1,Ya=1.08883,Ia=it.prototype=new G;Ia.brighter=function(n){return ut(Math.min(100,this.l+Ha*(arguments.length?n:1)),this.a,this.b)},Ia.darker=function(n){return ut(Math.max(0,this.l-Ha*(arguments.length?n:1)),this.a,this.b)},Ia.rgb=function(){return ot(this.l,this.a,this.b)},Xo.rgb=function(n,t,e){return 1===arguments.length?n instanceof pt?gt(n.r,n.g,n.b):dt(""+n,gt,nt):gt(~~n,~~t,~~e)};var Za=pt.prototype=new G;Za.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),gt(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):gt(u,u,u)},Za.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),gt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Za.hsl=function(){return mt(this.r,this.g,this.b)},Za.toString=function(){return"#"+vt(this.r)+vt(this.g)+vt(this.b)};var Va=Xo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Va.forEach(function(n,t){Va.set(n,ft(t))}),Xo.functor=_t,Xo.xhr=wt(bt),Xo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=St(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new l,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Xo.csv=Xo.dsv(",","text/csv"),Xo.tsv=Xo.dsv("	","text/tab-separated-values");var Xa,$a,Ba,Wa,Ja,Ga=Go[h(Go,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Xo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};$a?$a.n=i:Xa=i,$a=i,Ba||(Wa=clearTimeout(Wa),Ba=1,Ga(Et))},Xo.timer.flush=function(){At(),Ct()},Xo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Ka=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Lt);Xo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Xo.round(n,Nt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),Ka[8+e/3]};var Qa=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,nc=Xo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Xo.round(n,Nt(n,t))).toFixed(Math.max(0,Math.min(20,Nt(n*(1+1e-15),t))))}}),tc=Xo.time={},ec=Date;Tt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){rc.setUTCDate.apply(this._,arguments)},setDay:function(){rc.setUTCDay.apply(this._,arguments)},setFullYear:function(){rc.setUTCFullYear.apply(this._,arguments)},setHours:function(){rc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){rc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){rc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){rc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){rc.setUTCSeconds.apply(this._,arguments)},setTime:function(){rc.setTime.apply(this._,arguments)}};var rc=Date.prototype;tc.year=Rt(function(n){return n=tc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),tc.years=tc.year.range,tc.years.utc=tc.year.utc.range,tc.day=Rt(function(n){var t=new ec(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),tc.days=tc.day.range,tc.days.utc=tc.day.utc.range,tc.dayOfYear=function(n){var t=tc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=tc[n]=Rt(function(n){return(n=tc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=tc.year(n).getDay();return Math.floor((tc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});tc[n+"s"]=e.range,tc[n+"s"].utc=e.utc.range,tc[n+"OfYear"]=function(n){var e=tc.year(n).getDay();return Math.floor((tc.dayOfYear(n)+(e+t)%7)/7)}}),tc.week=tc.sunday,tc.weeks=tc.sunday.range,tc.weeks.utc=tc.sunday.utc.range,tc.weekOfYear=tc.sundayOfYear;var uc={"-":"",_:" ",0:"0"},ic=/^\s*\d+/,oc=/^%/;Xo.locale=function(n){return{numberFormat:zt(n),timeFormat:Pt(n)}};var ac=Xo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Xo.format=ac.numberFormat,Xo.geo={},re.prototype={s:0,t:0,add:function(n){ue(n,this.t,cc),ue(cc.s,this.s,this),this.s?this.t+=cc.t:this.s=cc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var cc=new re;Xo.geo.stream=function(n,t){n&&sc.hasOwnProperty(n.type)?sc[n.type](n,t):ie(n,t)};var sc={Feature:function(n,t){ie(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ie(e[r].geometry,t)}},lc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){oe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)oe(e[r],t,0)},Polygon:function(n,t){ae(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ae(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ie(e[r],t)}};Xo.geo.area=function(n){return fc=0,Xo.geo.stream(n,gc),fc};var fc,hc=new re,gc={sphere:function(){fc+=4*Sa},point:g,lineStart:g,lineEnd:g,polygonStart:function(){hc.reset(),gc.lineStart=ce},polygonEnd:function(){var n=2*hc;fc+=0>n?4*Sa+n:n,gc.lineStart=gc.lineEnd=gc.point=g}};Xo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=se([t*Na,e*Na]);if(m){var u=fe(m,r),i=[u[1],-u[0],0],o=fe(i,u);pe(o),o=ve(o);var c=t-p,s=c>0?1:-1,v=o[0]*La*s,d=oa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*La;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*La;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=oa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;gc.point(n,e),t(n,e)}function i(){gc.lineStart()}function o(){u(v,d),gc.lineEnd(),oa(y)>Aa&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,gc.polygonStart()},polygonEnd:function(){gc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>hc?(l=-(h=180),f=-(g=90)):y>Aa?g=90:-Aa>y&&(f=-90),M[0]=l,M[1]=h
}};return function(n){g=h=-(l=f=1/0),x=[],Xo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Xo.geo.centroid=function(n){pc=vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,Xo.geo.stream(n,kc);var t=bc,e=wc,r=Sc,u=t*t+e*e+r*r;return Ca>u&&(t=xc,e=Mc,r=_c,Aa>vc&&(t=dc,e=mc,r=yc),u=t*t+e*e+r*r,Ca>u)?[0/0,0/0]:[Math.atan2(e,t)*La,X(r/Math.sqrt(u))*La]};var pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc={sphere:g,point:me,lineStart:xe,lineEnd:Me,polygonStart:function(){kc.lineStart=_e},polygonEnd:function(){kc.lineStart=xe}},Ec=Ee(be,ze,Te,[-Sa,-Sa/2]),Ac=1e9;Xo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Pe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Xo.geo.conicEqualArea=function(){return je(He)}).raw=He,Xo.geo.albers=function(){return Xo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Xo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Xo.geo.albers(),o=Xo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Xo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Aa,f+.12*s+Aa],[l-.214*s-Aa,f+.234*s-Aa]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Aa,f+.166*s+Aa],[l-.115*s-Aa,f+.234*s-Aa]]).stream(c).point,n},n.scale(1070)};var Cc,Nc,Lc,zc,qc,Tc,Rc={point:g,lineStart:g,lineEnd:g,polygonStart:function(){Nc=0,Rc.lineStart=Fe},polygonEnd:function(){Rc.lineStart=Rc.lineEnd=Rc.point=g,Cc+=oa(Nc/2)}},Dc={point:Oe,lineStart:g,lineEnd:g,polygonStart:g,polygonEnd:g},Pc={point:Ze,lineStart:Ve,lineEnd:Xe,polygonStart:function(){Pc.lineStart=$e},polygonEnd:function(){Pc.point=Ze,Pc.lineStart=Ve,Pc.lineEnd=Xe}};Xo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Xo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Cc=0,Xo.geo.stream(n,u(Rc)),Cc},n.centroid=function(n){return dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,Xo.geo.stream(n,u(Pc)),Sc?[bc/Sc,wc/Sc]:_c?[xc/_c,Mc/_c]:yc?[dc/yc,mc/yc]:[0/0,0/0]},n.bounds=function(n){return qc=Tc=-(Lc=zc=1/0),Xo.geo.stream(n,u(Dc)),[[Lc,zc],[qc,Tc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||Je(n):bt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Ye:new Be(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Xo.geo.albersUsa()).context(null)},Xo.geo.transform=function(n){return{stream:function(t){var e=new Ge(t);for(var r in n)e[r]=n[r];return e}}},Ge.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Xo.geo.projection=Qe,Xo.geo.projectionMutator=nr,(Xo.geo.equirectangular=function(){return Qe(er)}).raw=er.invert=er,Xo.geo.rotation=function(n){function t(t){return t=n(t[0]*Na,t[1]*Na),t[0]*=La,t[1]*=La,t}return n=ur(n[0]%360*Na,n[1]*Na,n.length>2?n[2]*Na:0),t.invert=function(t){return t=n.invert(t[0]*Na,t[1]*Na),t[0]*=La,t[1]*=La,t},t},rr.invert=er,Xo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=ur(-n[0]*Na,-n[1]*Na,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=La,n[1]*=La}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=cr((t=+r)*Na,u*Na),n):t},n.precision=function(r){return arguments.length?(e=cr(t*Na,(u=+r)*Na),n):u},n.angle(90)},Xo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Na,u=n[1]*Na,i=t[1]*Na,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Xo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Xo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Xo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Xo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return oa(n%d)>Aa}).map(l)).concat(Xo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return oa(n%m)>Aa}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=lr(a,o,90),f=fr(r,e,y),h=lr(s,c,90),g=fr(i,u,y),n):y},n.majorExtent([[-180,-90+Aa],[180,90-Aa]]).minorExtent([[-180,-80-Aa],[180,80+Aa]])},Xo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=hr,u=gr;return n.distance=function(){return Xo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Xo.geo.interpolate=function(n,t){return pr(n[0]*Na,n[1]*Na,t[0]*Na,t[1]*Na)},Xo.geo.length=function(n){return Uc=0,Xo.geo.stream(n,jc),Uc};var Uc,jc={sphere:g,point:g,lineStart:vr,lineEnd:g,polygonStart:g,polygonEnd:g},Hc=dr(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Xo.geo.azimuthalEqualArea=function(){return Qe(Hc)}).raw=Hc;var Fc=dr(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},bt);(Xo.geo.azimuthalEquidistant=function(){return Qe(Fc)}).raw=Fc,(Xo.geo.conicConformal=function(){return je(mr)}).raw=mr,(Xo.geo.conicEquidistant=function(){return je(yr)}).raw=yr;var Oc=dr(function(n){return 1/n},Math.atan);(Xo.geo.gnomonic=function(){return Qe(Oc)}).raw=Oc,xr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ea]},(Xo.geo.mercator=function(){return Mr(xr)}).raw=xr;var Yc=dr(function(){return 1},Math.asin);(Xo.geo.orthographic=function(){return Qe(Yc)}).raw=Yc;var Ic=dr(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Xo.geo.stereographic=function(){return Qe(Ic)}).raw=Ic,_r.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ea]},(Xo.geo.transverseMercator=function(){var n=Mr(_r),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=_r,Xo.geom={},Xo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=_t(e),i=_t(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(kr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Sr(a),l=Sr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=br,r=wr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Xo.geom.polygon=function(n){return fa(n,Zc),n};var Zc=Xo.geom.polygon.prototype=[];Zc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Zc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Zc.clip=function(n){for(var t,e,r,u,i,o,a=Cr(n),c=-1,s=this.length-Cr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Er(o,l,u)?(Er(i,l,u)||n.push(Ar(i,o,l,u)),n.push(o)):Er(i,l,u)&&n.push(Ar(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Vc,Xc,$c,Bc,Wc,Jc=[],Gc=[];Pr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(jr),t.length},Br.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},Wr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=Qr(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(Gr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Kr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(Kr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Gr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?Qr(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,Gr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,Kr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,Gr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,Kr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,Gr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,Kr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Xo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return nu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Aa)*Aa,y:Math.round(o(n,t)/Aa)*Aa,i:t}})}var r=br,u=wr,i=r,o=u,a=Kc;return n?t(n):(t.links=function(n){return nu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return nu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(jr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&eu(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=_t(r=n),t):r},t.y=function(n){return arguments.length?(o=_t(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Kc:n,t):a===Kc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Kc?null:a&&a[1]},t)};var Kc=[[-1e6,-1e6],[1e6,1e6]];Xo.geom.delaunay=function(n){return Xo.geom.voronoi().triangles(n)},Xo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(oa(c-e)+oa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=iu()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=_t(a),M=_t(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=iu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){ou(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=br,c=wr;return(o=arguments.length)?(a=ru,c=uu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Xo.interpolateRgb=au,Xo.interpolateObject=cu,Xo.interpolateNumber=su,Xo.interpolateString=lu;var Qc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;Xo.interpolate=fu,Xo.interpolators=[function(n,t){var e=typeof t;return("string"===e?Va.has(t)||/^(#|rgb\(|hsl\()/.test(t)?au:lu:t instanceof G?au:"object"===e?Array.isArray(t)?hu:cu:su)(n,t)}],Xo.interpolateArray=hu;var ns=function(){return bt},ts=Xo.map({linear:ns,poly:xu,quad:function(){return du},cubic:function(){return mu},sin:function(){return Mu},exp:function(){return _u},circle:function(){return bu},elastic:wu,back:Su,bounce:function(){return ku}}),es=Xo.map({"in":bt,out:pu,"in-out":vu,"out-in":function(n){return vu(pu(n))}});Xo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ts.get(e)||ns,r=es.get(r)||bt,gu(r(e.apply(null,$o.call(arguments,1))))},Xo.interpolateHcl=Eu,Xo.interpolateHsl=Au,Xo.interpolateLab=Cu,Xo.interpolateRound=Nu,Xo.transform=function(n){var t=Wo.createElementNS(Xo.ns.prefix.svg,"g");return(Xo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Lu(e?e.matrix:rs)})(n)},Lu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var rs={a:1,b:0,c:0,d:1,e:0,f:0};Xo.interpolateTransform=Ru,Xo.layout={},Xo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Uu(n[e]));return t}},Xo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Xo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Xo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(ka-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Xo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Xo.event.x,n.py=Xo.event.y,a.resume()}var e,r,u,i,o,a={},c=Xo.dispatch("start","tick","end"),s=[1,1],l=.9,f=us,h=is,g=-30,p=os,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Zu(t=Xo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Xo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Xo.behavior.drag().origin(bt).on("dragstart.force",Fu).on("drag.force",t).on("dragend.force",Ou)),arguments.length?(this.on("mouseover.force",Yu).on("mouseout.force",Iu).call(e),void 0):e},Xo.rebind(a,c,"on")};var us=20,is=1,os=1/0;Xo.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=Bu,u=Xu,i=$u;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},Xo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Xo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Vu(e,r)},Xo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Xo.sum(o),s=Xo.range(i.length);null!=e&&s.sort(e===as?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=as,r=0,u=ka;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var as={};Xo.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Xo.permute(s,f),l=Xo.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=bt,e=Qu,r=ni,u=Ku,i=Ju,o=Gu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:cs.get(t)||Qu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:ss.get(t)||ni,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var cs=Xo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ti),i=n.map(ei),o=Xo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Xo.range(n.length).reverse()},"default":Qu}),ss=Xo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ni});Xo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Xo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=oi,u=ui;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=_t(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return ii(n,t)}:_t(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Xo.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;vi(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=si(a),i=ci(i),a&&i;)c=ci(c),o=si(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(di(mi(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!si(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!ci(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];pi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=li(l,hi),h=li(l,fi),g=li(l,gi),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return pi(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=Xo.layout.hierarchy().sort(null).value(null),e=ai,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Vu(n,t)},Xo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,pi(a,function(n){n.r=+l(n.value)}),pi(a,bi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;pi(a,function(n){n.r+=f}),pi(a,bi),pi(a,function(n){n.r-=f})}return ki(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Xo.layout.hierarchy().sort(yi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Vu(n,e)},Xo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;pi(c,function(n){var t=n.children;t&&t.length?(n.x=Ci(t),n.y=Ai(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ni(c),f=Li(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return pi(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Xo.layout.hierarchy().sort(null).value(null),e=ai,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Vu(n,t)},Xo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Xo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=zi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?zi(t):qi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return qi(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?zi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Vu(i,a)},Xo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Xo.random.normal.apply(Xo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Xo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Xo.scale={};var ls={floor:bt,ceil:bt};Xo.scale.linear=function(){return Hi([0,1],[0,1],fu,!1)};var fs={s:1,g:1,p:1,r:1,e:1};Xo.scale.log=function(){return $i(Xo.scale.linear().domain([0,1]),10,!0,[1,10])};var hs=Xo.format(".0e"),gs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Xo.scale.pow=function(){return Bi(Xo.scale.linear(),1,[0,1])},Xo.scale.sqrt=function(){return Xo.scale.pow().exponent(.5)},Xo.scale.ordinal=function(){return Ji([],{t:"range",a:[[]]})},Xo.scale.category10=function(){return Xo.scale.ordinal().range(ps)},Xo.scale.category20=function(){return Xo.scale.ordinal().range(vs)},Xo.scale.category20b=function(){return Xo.scale.ordinal().range(ds)},Xo.scale.category20c=function(){return Xo.scale.ordinal().range(ms)};var ps=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(ht),vs=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(ht),ds=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(ht),ms=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(ht);Xo.scale.quantile=function(){return Gi([],[])
},Xo.scale.quantize=function(){return Ki(0,1,[0,1])},Xo.scale.threshold=function(){return Qi([.5],[0,1])},Xo.scale.identity=function(){return no([0,1])},Xo.svg={},Xo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ys,a=u.apply(this,arguments)+ys,c=(o>a&&(c=o,o=a,a=c),a-o),s=Sa>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=xs?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=to,e=eo,r=ro,u=uo;return n.innerRadius=function(e){return arguments.length?(t=_t(e),n):t},n.outerRadius=function(t){return arguments.length?(e=_t(t),n):e},n.startAngle=function(t){return arguments.length?(r=_t(t),n):r},n.endAngle=function(t){return arguments.length?(u=_t(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ys;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ys=-Ea,xs=ka-Aa;Xo.svg.line=function(){return io(bt)};var Ms=Xo.map({linear:oo,"linear-closed":ao,step:co,"step-before":so,"step-after":lo,basis:mo,"basis-open":yo,"basis-closed":xo,bundle:Mo,cardinal:go,"cardinal-open":fo,"cardinal-closed":ho,monotone:Eo});Ms.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var _s=[0,2/3,1/3,0],bs=[0,1/3,2/3,0],ws=[0,1/6,2/3,1/6];Xo.svg.line.radial=function(){var n=io(Ao);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},so.reverse=lo,lo.reverse=so,Xo.svg.area=function(){return Co(bt)},Xo.svg.area.radial=function(){var n=Co(Ao);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Xo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ys,l=s.call(n,u,r)+ys;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Sa)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=hr,o=gr,a=No,c=ro,s=uo;return n.radius=function(t){return arguments.length?(a=_t(t),n):a},n.source=function(t){return arguments.length?(i=_t(t),n):i},n.target=function(t){return arguments.length?(o=_t(t),n):o},n.startAngle=function(t){return arguments.length?(c=_t(t),n):c},n.endAngle=function(t){return arguments.length?(s=_t(t),n):s},n},Xo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=hr,e=gr,r=Lo;return n.source=function(e){return arguments.length?(t=_t(e),n):t},n.target=function(t){return arguments.length?(e=_t(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Xo.svg.diagonal.radial=function(){var n=Xo.svg.diagonal(),t=Lo,e=n.projection;return n.projection=function(n){return arguments.length?e(zo(t=n)):t},n},Xo.svg.symbol=function(){function n(n,r){return(Ss.get(t.call(this,n,r))||Ro)(e.call(this,n,r))}var t=To,e=qo;return n.type=function(e){return arguments.length?(t=_t(e),n):t},n.size=function(t){return arguments.length?(e=_t(t),n):e},n};var Ss=Xo.map({circle:Ro,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Cs)),e=t*Cs;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/As),e=t*As/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/As),e=t*As/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Xo.svg.symbolTypes=Ss.keys();var ks,Es,As=Math.sqrt(3),Cs=Math.tan(30*Na),Ns=[],Ls=0;Ns.call=da.call,Ns.empty=da.empty,Ns.node=da.node,Ns.size=da.size,Xo.transition=function(n){return arguments.length?ks?n.transition():n:xa.transition()},Xo.transition.prototype=Ns,Ns.select=function(n){var t,e,r,u=this.id,i=[];n=M(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),jo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return Do(i,u)},Ns.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=_(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&jo(u,g,o,i),t.push(u)}return Do(a,o)},Ns.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=q(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Do(u,this.id)},Ns.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):R(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Ns.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Ru:fu,a=Xo.ns.qualify(n);return Po(this,"attr."+n,t,a.local?i:u)},Ns.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Xo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Ns.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Go.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=fu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Po(this,"style."+n,t,u)},Ns.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Go.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Ns.text=function(n){return Po(this,"text",n,Uo)},Ns.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Ns.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Xo.ease.apply(Xo,arguments)),R(this,function(e){e.__transition__[t].ease=n}))},Ns.delay=function(n){var t=this.id;return R(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Ns.duration=function(n){var t=this.id;return R(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Ns.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Es,u=ks;ks=e,R(this,function(t,r,u){Es=t.__transition__[e],n.call(t,t.__data__,r,u)}),Es=r,ks=u}else R(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Xo.dispatch("start","end"))).on(n,t)});return this},Ns.transition=function(){for(var n,t,e,r,u=this.id,i=++Ls,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,jo(e,s,i,r)),n.push(e)}return Do(o,i)},Xo.svg.axis=function(){function n(n){n.each(function(){var n,s=Xo.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):bt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Aa),d=Xo.transition(p.exit()).style("opacity",Aa).remove(),m=Xo.transition(p).style("opacity",1),y=Ri(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Xo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Ho,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Ho,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Fo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Fo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Xo.scale.linear(),r=zs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in qs?t+"":zs,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var zs="bottom",qs={top:1,right:1,bottom:1,left:1};Xo.svg.brush=function(){function n(i){i.each(function(){var i=Xo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,bt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ts[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Xo.transition(i),h=Xo.transition(o);c&&(l=Ri(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Ri(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Xo.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=f[1],C=2),d())}function p(){32==Xo.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=f[1],C=0,d())}function v(){var n=Xo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Xo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=f[+(n[1]<x[1])]):x=null),E&&m(n,c,0)&&(e(S),u=!0),A&&m(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,a=Ri(t),c=a[0],s=a[1],p=L[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function y(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Xo.select("body").style("cursor",null),z.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Xo.select(Xo.event.target),w=a.of(_,arguments),S=Xo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=O(),L=Xo.mouse(_),z=Xo.select(Go).on("keydown.brush",u).on("keyup.brush",p);if(Xo.event.changedTouches?z.on("touchmove.brush",v).on("touchend.brush",y):z.on("mousemove.brush",v).on("mouseup.brush",y),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=f[0]-L[1];else if(k){var q=+/w$/.test(k),T=+/^n/.test(k);M=[l[1-q]-L[0],f[1-T]-L[1]],L[0]=l[q],L[1]=f[T]}else Xo.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Xo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=y(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Rs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,ks?Xo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=hu(l,t.x),r=hu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Rs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Rs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Xo.rebind(n,a,"on")};var Ts={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Rs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Ds=tc.format=ac.timeFormat,Ps=Ds.utc,Us=Ps("%Y-%m-%dT%H:%M:%S.%LZ");Ds.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Oo:Us,Oo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Oo.toString=Us.toString,tc.second=Rt(function(n){return new ec(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),tc.seconds=tc.second.range,tc.seconds.utc=tc.second.utc.range,tc.minute=Rt(function(n){return new ec(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),tc.minutes=tc.minute.range,tc.minutes.utc=tc.minute.utc.range,tc.hour=Rt(function(n){var t=n.getTimezoneOffset()/60;return new ec(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),tc.hours=tc.hour.range,tc.hours.utc=tc.hour.utc.range,tc.month=Rt(function(n){return n=tc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),tc.months=tc.month.range,tc.months.utc=tc.month.utc.range;var js=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Hs=[[tc.second,1],[tc.second,5],[tc.second,15],[tc.second,30],[tc.minute,1],[tc.minute,5],[tc.minute,15],[tc.minute,30],[tc.hour,1],[tc.hour,3],[tc.hour,6],[tc.hour,12],[tc.day,1],[tc.day,2],[tc.week,1],[tc.month,1],[tc.month,3],[tc.year,1]],Fs=Ds.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",be]]),Os={range:function(n,t,e){return Xo.range(+n,+t,e).map(Io)},floor:bt,ceil:bt};Hs.year=tc.year,tc.scale=function(){return Yo(Xo.scale.linear(),Hs,Fs)};var Ys=Hs.map(function(n){return[n[0].utc,n[1]]}),Is=Ps.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",be]]);Ys.year=tc.year.utc,tc.scale.utc=function(){return Yo(Xo.scale.linear(),Ys,Is)},Xo.text=wt(function(n){return n.responseText}),Xo.json=function(n,t){return St(n,"application/json",Zo,t)},Xo.html=function(n,t){return St(n,"text/html",Vo,t)},Xo.xml=wt(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Xo):"object"==typeof module&&module.exports?module.exports=Xo:this.d3=Xo}();