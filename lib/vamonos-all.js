/*
 * vamonos.js - the Vamonos algorithm visualization library
 *
 * Copyright 2012-2013 Mike Rosulek & the Vamonos project team
 * http://rosulek.github.io/vamonos
 *
 * Licenced under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 1.2.1
 * Released: 2014-01-13
 *
 * This file includes dependencies:
 *
 *      jQuery          2.0.3
 *      jQuery UI       1.10.3
 *      jQuery.qtip     1.0.0-rc3
 *      jsPlumb         1.5.5
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

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);/**
* jsBezier-0.6
*
* Copyright (c) 2010 - 2013 Simon Porritt (simon.porritt@gmail.com)
*
* licensed under the MIT license.
* 
* a set of Bezier curve functions that deal with Beziers, used by jsPlumb, and perhaps useful for other people.  These functions work with Bezier
* curves of arbitrary degree.
*
* - functions are all in the 'jsBezier' namespace.  
* 
* - all input points should be in the format {x:.., y:..}. all output points are in this format too.
* 
* - all input curves should be in the format [ {x:.., y:..}, {x:.., y:..}, {x:.., y:..}, {x:.., y:..} ]
* 
* - 'location' as used as an input here refers to a decimal in the range 0-1 inclusive, which indicates a point some proportion along the length
* of the curve.  location as output has the same format and meaning.
* 
* 
* Function List:
* --------------
* 
* distanceFromCurve(point, curve)
* 
* 	Calculates the distance that the given point lies from the given Bezier.  Note that it is computed relative to the center of the Bezier,
* so if you have stroked the curve with a wide pen you may wish to take that into account!  The distance returned is relative to the values 
* of the curve and the point - it will most likely be pixels.
* 
* gradientAtPoint(curve, location)
* 
* 	Calculates the gradient to the curve at the given location, as a decimal between 0 and 1 inclusive.
*
* gradientAtPointAlongCurveFrom (curve, location)
*
*	Calculates the gradient at the point on the given curve that is 'distance' units from location. 
* 
* nearestPointOnCurve(point, curve) 
* 
*	Calculates the nearest point to the given point on the given curve.  The return value of this is a JS object literal, containing both the
*point's coordinates and also the 'location' of the point (see above), for example:  { point:{x:551,y:150}, location:0.263365 }.
* 
* pointOnCurve(curve, location)
* 
* 	Calculates the coordinates of the point on the given Bezier curve at the given location.  
* 		
* pointAlongCurveFrom(curve, location, distance)
* 
* 	Calculates the coordinates of the point on the given curve that is 'distance' units from location.  'distance' should be in the same coordinate
* space as that used to construct the Bezier curve.  For an HTML Canvas usage, for example, distance would be a measure of pixels.
*
* locationAlongCurveFrom(curve, location, distance)
* 
* 	Calculates the location on the given curve that is 'distance' units from location.  'distance' should be in the same coordinate
* space as that used to construct the Bezier curve.  For an HTML Canvas usage, for example, distance would be a measure of pixels.
* 
* perpendicularToCurveAt(curve, location, length, distance)
* 
* 	Calculates the perpendicular to the given curve at the given location.  length is the length of the line you wish for (it will be centered
* on the point at 'location'). distance is optional, and allows you to specify a point along the path from the given location as the center of
* the perpendicular returned.  The return value of this is an array of two points: [ {x:...,y:...}, {x:...,y:...} ].  
*  
* 
*/

(function() {
	
	if(typeof Math.sgn == "undefined") {
		Math.sgn = function(x) { return x == 0 ? 0 : x > 0 ? 1 :-1; };
	}
	
	var Vectors = {
			subtract 	: 	function(v1, v2) { return {x:v1.x - v2.x, y:v1.y - v2.y }; },
			dotProduct	: 	function(v1, v2) { return (v1.x * v2.x)  + (v1.y * v2.y); },
			square		:	function(v) { return Math.sqrt((v.x * v.x) + (v.y * v.y)); },
			scale		:	function(v, s) { return {x:v.x * s, y:v.y * s }; }
		},
		
		maxRecursion = 64, 
		flatnessTolerance = Math.pow(2.0,-maxRecursion-1);

	/**
	 * Calculates the distance that the point lies from the curve.
	 * 
	 * @param point a point in the form {x:567, y:3342}
	 * @param curve a Bezier curve in the form [{x:..., y:...}, {x:..., y:...}, {x:..., y:...}, {x:..., y:...}].  note that this is currently
	 * hardcoded to assume cubiz beziers, but would be better off supporting any degree. 
	 * @return a JS object literal containing location and distance, for example: {location:0.35, distance:10}.  Location is analogous to the location
	 * argument you pass to the pointOnPath function: it is a ratio of distance travelled along the curve.  Distance is the distance in pixels from
	 * the point to the curve. 
	 */
	var _distanceFromCurve = function(point, curve) {
		var candidates = [],     
	    	w = _convertToBezier(point, curve),
	    	degree = curve.length - 1, higherDegree = (2 * degree) - 1,
	    	numSolutions = _findRoots(w, higherDegree, candidates, 0),
			v = Vectors.subtract(point, curve[0]), dist = Vectors.square(v), t = 0.0;

	    for (var i = 0; i < numSolutions; i++) {
			v = Vectors.subtract(point, _bezier(curve, degree, candidates[i], null, null));
	    	var newDist = Vectors.square(v);
	    	if (newDist < dist) {
	            dist = newDist;
	        	t = candidates[i];
		    }
	    }
	    v = Vectors.subtract(point, curve[degree]);
		newDist = Vectors.square(v);
	    if (newDist < dist) {
	        dist = newDist;
	    	t = 1.0;
	    }
		return {location:t, distance:dist};
	};
	/**
	 * finds the nearest point on the curve to the given point.
	 */
	var _nearestPointOnCurve = function(point, curve) {    
		var td = _distanceFromCurve(point, curve);
	    return {point:_bezier(curve, curve.length - 1, td.location, null, null), location:td.location};
	};
	var _convertToBezier = function(point, curve) {
		var degree = curve.length - 1, higherDegree = (2 * degree) - 1,
	    	c = [], d = [], cdTable = [], w = [],
	    	z = [ [1.0, 0.6, 0.3, 0.1], [0.4, 0.6, 0.6, 0.4], [0.1, 0.3, 0.6, 1.0] ];	
	    	
	    for (var i = 0; i <= degree; i++) c[i] = Vectors.subtract(curve[i], point);
	    for (var i = 0; i <= degree - 1; i++) { 
			d[i] = Vectors.subtract(curve[i+1], curve[i]);
			d[i] = Vectors.scale(d[i], 3.0);
	    }
	    for (var row = 0; row <= degree - 1; row++) {
			for (var column = 0; column <= degree; column++) {
				if (!cdTable[row]) cdTable[row] = [];
		    	cdTable[row][column] = Vectors.dotProduct(d[row], c[column]);
			}
	    }
	    for (i = 0; i <= higherDegree; i++) {
			if (!w[i]) w[i] = [];
			w[i].y = 0.0;
			w[i].x = parseFloat(i) / higherDegree;
	    }
	    var n = degree, m = degree-1;
	    for (var k = 0; k <= n + m; k++) {
			var lb = Math.max(0, k - m),
				ub = Math.min(k, n);
			for (i = lb; i <= ub; i++) {
		    	j = k - i;
		    	w[i+j].y += cdTable[j][i] * z[j][i];
			}
	    }
	    return w;
	};
	/**
	 * counts how many roots there are.
	 */
	var _findRoots = function(w, degree, t, depth) {  
	    var left = [], right = [],	
	    	left_count, right_count,	
	    	left_t = [], right_t = [];
	    	
	    switch (_getCrossingCount(w, degree)) {
	       	case 0 : {	
	       		return 0;	
	       	}
	       	case 1 : {	
	       		if (depth >= maxRecursion) {
	       			t[0] = (w[0].x + w[degree].x) / 2.0;
	       			return 1;
	       		}
	       		if (_isFlatEnough(w, degree)) {
	       			t[0] = _computeXIntercept(w, degree);
	       			return 1;
	       		}
	       		break;
	       	}
	    }
	    _bezier(w, degree, 0.5, left, right);
	    left_count  = _findRoots(left,  degree, left_t, depth+1);
	    right_count = _findRoots(right, degree, right_t, depth+1);
	    for (var i = 0; i < left_count; i++) t[i] = left_t[i];
	    for (var i = 0; i < right_count; i++) t[i+left_count] = right_t[i];    
		return (left_count+right_count);
	};
	var _getCrossingCount = function(curve, degree) {
	    var n_crossings = 0, sign, old_sign;		    	
	    sign = old_sign = Math.sgn(curve[0].y);
	    for (var i = 1; i <= degree; i++) {
			sign = Math.sgn(curve[i].y);
			if (sign != old_sign) n_crossings++;
			old_sign = sign;
	    }
	    return n_crossings;
	};
	var _isFlatEnough = function(curve, degree) {
	    var  error,
	    	intercept_1, intercept_2, left_intercept, right_intercept,
	    	a, b, c, det, dInv, a1, b1, c1, a2, b2, c2;
	    a = curve[0].y - curve[degree].y;
	    b = curve[degree].x - curve[0].x;
	    c = curve[0].x * curve[degree].y - curve[degree].x * curve[0].y;
	
	    var max_distance_above = max_distance_below = 0.0;
	    
	    for (var i = 1; i < degree; i++) {
	        var value = a * curve[i].x + b * curve[i].y + c;       
	        if (value > max_distance_above)
	            max_distance_above = value;
	        else if (value < max_distance_below)
	        	max_distance_below = value;
	    }
	    
	    a1 = 0.0; b1 = 1.0; c1 = 0.0; a2 = a; b2 = b;
	    c2 = c - max_distance_above;
	    det = a1 * b2 - a2 * b1;
	    dInv = 1.0/det;
	    intercept_1 = (b1 * c2 - b2 * c1) * dInv;
	    a2 = a; b2 = b; c2 = c - max_distance_below;
	    det = a1 * b2 - a2 * b1;
	    dInv = 1.0/det;
	    intercept_2 = (b1 * c2 - b2 * c1) * dInv;
	    left_intercept = Math.min(intercept_1, intercept_2);
	    right_intercept = Math.max(intercept_1, intercept_2);
	    error = right_intercept - left_intercept;
	    return (error < flatnessTolerance)? 1 : 0;
	};
	var _computeXIntercept = function(curve, degree) {
	    var XLK = 1.0, YLK = 0.0,
	    	XNM = curve[degree].x - curve[0].x, YNM = curve[degree].y - curve[0].y,
	    	XMK = curve[0].x - 0.0, YMK = curve[0].y - 0.0,
	    	det = XNM*YLK - YNM*XLK, detInv = 1.0/det,
	    	S = (XNM*YMK - YNM*XMK) * detInv; 
	    return 0.0 + XLK * S;
	};
	var _bezier = function(curve, degree, t, left, right) {
	    var temp = [[]];
	    for (var j =0; j <= degree; j++) temp[0][j] = curve[j];
	    for (var i = 1; i <= degree; i++) {	
			for (var j =0 ; j <= degree - i; j++) {
				if (!temp[i]) temp[i] = [];
				if (!temp[i][j]) temp[i][j] = {};
		    	temp[i][j].x = (1.0 - t) * temp[i-1][j].x + t * temp[i-1][j+1].x;
		    	temp[i][j].y = (1.0 - t) * temp[i-1][j].y + t * temp[i-1][j+1].y;
			}
	    }    
	    if (left != null) 
	    	for (j = 0; j <= degree; j++) left[j]  = temp[j][0];
	    if (right != null)
			for (j = 0; j <= degree; j++) right[j] = temp[degree-j][j];
	    
	    return (temp[degree][0]);
	};
	
	var _curveFunctionCache = {};
	var _getCurveFunctions = function(order) {
		var fns = _curveFunctionCache[order];
		if (!fns) {
			fns = [];			
			var f_term = function() { return function(t) { return Math.pow(t, order); }; },
				l_term = function() { return function(t) { return Math.pow((1-t), order); }; },
				c_term = function(c) { return function(t) { return c; }; },
				t_term = function() { return function(t) { return t; }; },
				one_minus_t_term = function() { return function(t) { return 1-t; }; },
				_termFunc = function(terms) {
					return function(t) {
						var p = 1;
						for (var i = 0; i < terms.length; i++) p = p * terms[i](t);
						return p;
					};
				};
			
			fns.push(new f_term());  // first is t to the power of the curve order		
			for (var i = 1; i < order; i++) {
				var terms = [new c_term(order)];
				for (var j = 0 ; j < (order - i); j++) terms.push(new t_term());
				for (var j = 0 ; j < i; j++) terms.push(new one_minus_t_term());
				fns.push(new _termFunc(terms));
			}
			fns.push(new l_term());  // last is (1-t) to the power of the curve order
		
			_curveFunctionCache[order] = fns;
		}
			
		return fns;
	};
	
	
	/**
	 * calculates a point on the curve, for a Bezier of arbitrary order.
	 * @param curve an array of control points, eg [{x:10,y:20}, {x:50,y:50}, {x:100,y:100}, {x:120,y:100}].  For a cubic bezier this should have four points.
	 * @param location a decimal indicating the distance along the curve the point should be located at.  this is the distance along the curve as it travels, taking the way it bends into account.  should be a number from 0 to 1, inclusive.
	 */
	var _pointOnPath = function(curve, location) {		
		var cc = _getCurveFunctions(curve.length - 1),
			_x = 0, _y = 0;
		for (var i = 0; i < curve.length ; i++) {
			_x = _x + (curve[i].x * cc[i](location));
			_y = _y + (curve[i].y * cc[i](location));
		}
		
		return {x:_x, y:_y};
	};
	
	var _dist = function(p1,p2) {
		return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
	};

	var _isPoint = function(curve) {
		return curve[0].x == curve[1].x && curve[0].y == curve[1].y;
	};
	
	/**
	 * finds the point that is 'distance' along the path from 'location'.  this method returns both the x,y location of the point and also
	 * its 'location' (proportion of travel along the path); the method below - _pointAlongPathFrom - calls this method and just returns the
	 * point.
	 */
	var _pointAlongPath = function(curve, location, distance) {

		if (_isPoint(curve)) {
			return {
				point:curve[0],
				location:location
			};
		}

		var prev = _pointOnPath(curve, location), 
			tally = 0, 
			curLoc = location, 
			direction = distance > 0 ? 1 : -1, 
			cur = null;
			
		while (tally < Math.abs(distance)) {
			curLoc += (0.005 * direction);
			cur = _pointOnPath(curve, curLoc);
			tally += _dist(cur, prev);	
			prev = cur;
		}
		return {point:cur, location:curLoc};        	
	};
	
	var _length = function(curve) {
		if (_isPoint(curve)) return 0;

		var prev = _pointOnPath(curve, 0),
			tally = 0,
			curLoc = 0,
			direction = 1,
			cur = null;
			
		while (curLoc < 1) {
			curLoc += (0.005 * direction);
			cur = _pointOnPath(curve, curLoc);
			tally += _dist(cur, prev);	
			prev = cur;
		}
		return tally;
	};
	
	/**
	 * finds the point that is 'distance' along the path from 'location'.  
	 */
	var _pointAlongPathFrom = function(curve, location, distance) {
		return _pointAlongPath(curve, location, distance).point;
	};

	/**
	 * finds the location that is 'distance' along the path from 'location'.  
	 */
	var _locationAlongPathFrom = function(curve, location, distance) {
		return _pointAlongPath(curve, location, distance).location;
	};
	
	/**
	 * returns the gradient of the curve at the given location, which is a decimal between 0 and 1 inclusive.
	 * 
	 * thanks // http://bimixual.org/AnimationLibrary/beziertangents.html
	 */
	var _gradientAtPoint = function(curve, location) {
		var p1 = _pointOnPath(curve, location),	
			p2 = _pointOnPath(curve.slice(0, curve.length - 1), location),
			dy = p2.y - p1.y, dx = p2.x - p1.x;
		return dy == 0 ? Infinity : Math.atan(dy / dx);		
	};
	
	/**
	returns the gradient of the curve at the point which is 'distance' from the given location.
	if this point is greater than location 1, the gradient at location 1 is returned.
	if this point is less than location 0, the gradient at location 0 is returned.
	*/
	var _gradientAtPointAlongPathFrom = function(curve, location, distance) {
		var p = _pointAlongPath(curve, location, distance);
		if (p.location > 1) p.location = 1;
		if (p.location < 0) p.location = 0;		
		return _gradientAtPoint(curve, p.location);		
	};

	/**
	 * calculates a line that is 'length' pixels long, perpendicular to, and centered on, the path at 'distance' pixels from the given location.
	 * if distance is not supplied, the perpendicular for the given location is computed (ie. we set distance to zero).
	 */
	var _perpendicularToPathAt = function(curve, location, length, distance) {
		distance = distance == null ? 0 : distance;
		var p = _pointAlongPath(curve, location, distance),
			m = _gradientAtPoint(curve, p.location),
			_theta2 = Math.atan(-1 / m),
			y =  length / 2 * Math.sin(_theta2),
			x =  length / 2 * Math.cos(_theta2);
		return [{x:p.point.x + x, y:p.point.y + y}, {x:p.point.x - x, y:p.point.y - y}];
	};
	
	var jsBezier = window.jsBezier = {
		distanceFromCurve : _distanceFromCurve,
		gradientAtPoint : _gradientAtPoint,
		gradientAtPointAlongCurveFrom : _gradientAtPointAlongPathFrom,
		nearestPointOnCurve : _nearestPointOnCurve,
		pointOnCurve : _pointOnPath,		
		pointAlongCurveFrom : _pointAlongPathFrom,
		perpendicularToCurveAt : _perpendicularToPathAt,
		locationAlongCurveFrom:_locationAlongPathFrom,
		getLength:_length
	};
})();

/**
 * jsPlumbGeom v0.1
 *
 * Various geometry functions written as part of jsPlumb and perhaps useful for others.
 *
 * Copyright (c) 2013 Simon Porritt
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
;(function() {

	
	"use strict";

	// Establish the root object, `window` in the browser, or `global` on the server.
	var root = this;
	var jsPlumbGeom;
	if (typeof exports !== 'undefined') {
		jsPlumbGeom = exports;
	} else {
		jsPlumbGeom = root.jsPlumbGeom = {};
	}

	var _isa = function(a) { return Object.prototype.toString.call(a) === "[object Array]"; },
		_pointHelper = function(p1, p2, fn) {
		    p1 = _isa(p1) ? p1 : [p1.x, p1.y];
		    p2 = _isa(p2) ? p2 : [p2.x, p2.y];    
		    return fn(p1, p2);
		},
		/**
		* @name jsPlumbGeom.gradient
		* @function
		* @desc Calculates the gradient of a line between the two points.
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Float} The gradient of a line between the two points.
		*/
		_gradient = jsPlumbGeom.gradient = function(p1, p2) {
		    return _pointHelper(p1, p2, function(_p1, _p2) { 
		        if (_p2[0] == _p1[0])
		            return _p2[1] > _p1[1] ? Infinity : -Infinity;
		        else if (_p2[1] == _p1[1]) 
		            return _p2[0] > _p1[0] ? 0 : -0;
		        else 
		            return (_p2[1] - _p1[1]) / (_p2[0] - _p1[0]); 
		    });		
		},
		/**
		* @name jsPlumbGeom.normal
		* @function
		* @desc Calculates the gradient of a normal to a line between the two points.
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Float} The gradient of a normal to a line between the two points.
		*/
		_normal = jsPlumbGeom.normal = function(p1, p2) {
		    return -1 / _gradient(p1, p2);
		},
		/**
		* @name jsPlumbGeom.lineLength
		* @function
		* @desc Calculates the length of a line between the two points.
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Float} The length of a line between the two points.
		*/
		_lineLength = jsPlumbGeom.lineLength = function(p1, p2) {
		    return _pointHelper(p1, p2, function(_p1, _p2) {
		        return Math.sqrt(Math.pow(_p2[1] - _p1[1], 2) + Math.pow(_p2[0] - _p1[0], 2));			
		    });
		},
		/**
		* @name jsPlumbGeom.quadrant
		* @function
		* @desc Calculates the quadrant in which the angle between the two points lies. 
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Integer} The quadrant - 1 for upper right, 2 for lower right, 3 for lower left, 4 for upper left.
		*/
		_quadrant = jsPlumbGeom.quadrant = function(p1, p2) {
		    return _pointHelper(p1, p2, function(_p1, _p2) {
		        if (_p2[0] > _p1[0]) {
		            return (_p2[1] > _p1[1]) ? 2 : 1;
		        }
		        else if (_p2[0] == _p1[0]) {
		            return _p2[1] > _p1[1] ? 2 : 1;    
		        }
		        else {
		            return (_p2[1] > _p1[1]) ? 3 : 4;
		        }
		    });
		},
		/**
		* @name jsPlumbGeom.theta
		* @function
		* @desc Calculates the angle between the two points. 
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Float} The angle between the two points.
		*/
		_theta = jsPlumbGeom.theta = function(p1, p2) {
		    return _pointHelper(p1, p2, function(_p1, _p2) {
		        var m = _gradient(_p1, _p2),
		            t = Math.atan(m),
		            s = _quadrant(_p1, _p2);
		        if ((s == 4 || s== 3)) t += Math.PI;
		        if (t < 0) t += (2 * Math.PI);
		    
		        return t;
		    });
		},
		/**
		* @name jsPlumbGeom.intersects
		* @function
		* @desc Calculates whether or not the two rectangles intersect.
		* @param {Rectangle} r1 First rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
		* @param {Rectangle} r2 Second rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
		* @return {Boolean} True if the rectangles intersect, false otherwise.
		*/
		_intersects = jsPlumbGeom.intersects = function(r1, r2) {
		    var x1 = r1.x, x2 = r1.x + r1.w, y1 = r1.y, y2 = r1.y + r1.h,
		        a1 = r2.x, a2 = r2.x + r2.w, b1 = r2.y, b2 = r2.y + r2.h;
		
			return  ( (x1 <= a1 && a1 <= x2) && (y1 <= b1 && b1 <= y2) ) ||
			        ( (x1 <= a2 && a2 <= x2) && (y1 <= b1 && b1 <= y2) ) ||
			        ( (x1 <= a1 && a1 <= x2) && (y1 <= b2 && b2 <= y2) ) ||
			        ( (x1 <= a2 && a1 <= x2) && (y1 <= b2 && b2 <= y2) ) ||	
			        ( (a1 <= x1 && x1 <= a2) && (b1 <= y1 && y1 <= b2) ) ||
			        ( (a1 <= x2 && x2 <= a2) && (b1 <= y1 && y1 <= b2) ) ||
			        ( (a1 <= x1 && x1 <= a2) && (b1 <= y2 && y2 <= b2) ) ||
			        ( (a1 <= x2 && x1 <= a2) && (b1 <= y2 && y2 <= b2) );
		},
		_segmentMultipliers = [null, [1, -1], [1, 1], [-1, 1], [-1, -1] ],
		_inverseSegmentMultipliers = [null, [-1, -1], [-1, 1], [1, 1], [1, -1] ],
		/**
		* @name jsPlumbGeom.pointOnLine
		* @function
		* @desc Calculates a point on the line from `fromPoint` to `toPoint` that is `distance` units along the length of the line.
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Point} Point on the line, in the form `{ x:..., y:... }`.
		*/
		_pointOnLine = jsPlumbGeom.pointOnLine = function(fromPoint, toPoint, distance) {
		    var m = _gradient(fromPoint, toPoint),
		        s = _quadrant(fromPoint, toPoint),
		        segmentMultiplier = distance > 0 ? _segmentMultipliers[s] : _inverseSegmentMultipliers[s],
		        theta = Math.atan(m),
		        y = Math.abs(distance * Math.sin(theta)) * segmentMultiplier[1],
		        x =  Math.abs(distance * Math.cos(theta)) * segmentMultiplier[0];
		    return { x:fromPoint.x + x, y:fromPoint.y + y };
		},
		/**
		* @name jsPlumbGeom.perpendicularLineTo
		* @function
		* @desc Calculates a line of length `length` that is perpendicular to the line from `fromPoint` to `toPoint` and passes through `toPoint`.
		* @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
		* @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
		* @return {Line} Perpendicular line, in the form `[ { x:..., y:... }, { x:..., y:... } ]`.
		*/        
		_perpendicularLineTo = jsPlumbGeom.perpendicularLineTo = function(fromPoint, toPoint, length) {
		    var m = _gradient(fromPoint, toPoint),
		        theta2 = Math.atan(-1 / m),
		        y =  length / 2 * Math.sin(theta2),
		        x =  length / 2 * Math.cos(theta2);
		    return [{x:toPoint.x + x, y:toPoint.y + y}, {x:toPoint.x - x, y:toPoint.y - y}];
		};	
}).call(this);
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG or VML.  
 * 
 * This file contains the util functions
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */

;(function() {

    var _isa = function(a) { return Object.prototype.toString.call(a) === "[object Array]"; },
        _isnum = function(n) { return Object.prototype.toString.call(n) === "[object Number]"; },
        _iss = function(s) { return typeof s === "string"; },
        _isb = function(s) { return typeof s === "boolean"; },
        _isnull = function(s) { return s == null; },  
        _iso = function(o) { return o == null ? false : Object.prototype.toString.call(o) === "[object Object]"; },
        _isd = function(o) { return Object.prototype.toString.call(o) === "[object Date]"; },
        _isf = function(o) { return Object.prototype.toString.call(o) === "[object Function]"; },
        _ise = function(o) {
            for (var i in o) { if (o.hasOwnProperty(i)) return false; }
            return true;
        },
        pointHelper = function(p1, p2, fn) {
            p1 = _isa(p1) ? p1 : [p1.x, p1.y];
            p2 = _isa(p2) ? p2 : [p2.x, p2.y];    
            return fn(p1, p2);
        };
    
    jsPlumbUtil = {        
        isArray : _isa,        
        isString : _iss,        
        isBoolean: _isb,        
        isNull : _isnull,        
        isObject : _iso,
        isDate : _isd,
        isFunction: _isf,
        isEmpty:_ise,
        isNumber:_isnum,
        clone : function(a) {
            if (_iss(a)) return "" + a;
            else if (_isb(a)) return !!a;
            else if (_isd(a)) return new Date(a.getTime());
            else if (_isf(a)) return a;
            else if (_isa(a)) {
                var b = [];
                for (var i = 0; i < a.length; i++)
                    b.push(this.clone(a[i]));
                return b;
            }
            else if (_iso(a)) {
                var c = {};
                for (var j in a)
                    c[j] = this.clone(a[j]);
                return c;		
            }
            else return a;
        },
        merge : function(a, b) {		
            var c = this.clone(a);		
            for (var i in b) {
                if (c[i] == null || _iss(b[i]) || _isb(b[i]))
                    c[i] = b[i];
                else {
                    if (_isa(b[i])/* && this.isArray(c[i])*/) {
                        var ar = [];
                        // if c's object is also an array we can keep its values.
                        if (_isa(c[i])) ar.push.apply(ar, c[i]);
                        ar.push.apply(ar, b[i]);
                        c[i] = ar;
                    }
                    else if(_iso(b[i])) {	
                        // overwite c's value with an object if it is not already one.
                        if (!_iso(c[i])) 
                            c[i] = {};
                        for (var j in b[i])
                            c[i][j] = b[i][j];
                    }
                }
            }
            return c;
        },
        copyValues:function(names, from, to) {
            for (var i = 0; i < names.length; i++)
                to[names[i]] = from[names[i]];
        },
        //
        // chain a list of functions, supplied by [ object, method name, args ], and return on the first
        // one that returns the failValue. if none return the failValue, return the successValue.
        //
        functionChain : function(successValue, failValue, fns) {        
            for (var i = 0; i < fns.length; i++) {
                var o = fns[i][0][fns[i][1]].apply(fns[i][0], fns[i][2]);
                if (o === failValue) {
                    return o;
                }
            }                
            return successValue;
        },
        // take the given model and expand out any parameters.
        populate : function(model, values) {		
            // for a string, see if it has parameter matches, and if so, try to make the substitutions.
            var getValue = function(fromString) {
                    var matches = fromString.match(/(\${.*?})/g);
                    if (matches != null) {
                        for (var i = 0; i < matches.length; i++) {
                            var val = values[matches[i].substring(2, matches[i].length - 1)];
                            if (val != null) {
                                fromString = fromString.replace(matches[i], val);
                            }
                        }							
                    }
                    return fromString;
                },		
                // process one entry.
                _one = function(d) {
                    if (d != null) {
                        if (_iss(d)) {
                            return getValue(d);
                        }
                        else if (_isa(d)) {
                            var r = [];	
                            for (var i = 0; i < d.length; i++)
                                r.push(_one(d[i]));
                            return r;
                        }
                        else if (_iso(d)) {
                            var s = {};
                            for (var j in d) {
                                s[j] = _one(d[j]);
                            }
                            return s;
                        }
                        else {
                            return d;
                        }
                    }
                };
            
            return _one(model);	
        },
        convertStyle : function(s, ignoreAlpha) {
            // TODO: jsPlumb should support a separate 'opacity' style member.
            if ("transparent" === s) return s;
            var o = s,
                pad = function(n) { return n.length == 1 ? "0" + n : n; },
                hex = function(k) { return pad(Number(k).toString(16)); },
                pattern = /(rgb[a]?\()(.*)(\))/;
            if (s.match(pattern)) {
                var parts = s.match(pattern)[2].split(",");
                o = "#" + hex(parts[0]) + hex(parts[1]) + hex(parts[2]);
                if (!ignoreAlpha && parts.length == 4) 
                    o = o + hex(parts[3]);
            }
            return o;
        },
        findWithFunction : function(a, f) {
            if (a)
                for (var i = 0; i < a.length; i++) if (f(a[i])) return i;
            return -1;
        },
        clampToGrid : function(x, y, grid, dontClampX, dontClampY) {
            var _gridClamp = function(n, g) { 
                var e = n % g, 
                    f = Math.floor(n / g), 
                    inc = e >= (g / 2) ? 1 : 0; 
                return (f + inc) * g; 
            };
            return [
                dontClampX || grid == null ? x : _gridClamp(x, grid[0]),
                dontClampY || grid == null ? y : _gridClamp(y, grid[1])
            ];		
        },
        indexOf : function(l, v) {
            return jsPlumbUtil.findWithFunction(l, function(_v) { return _v == v; });	
        },
        removeWithFunction : function(a, f) {
            var idx = jsPlumbUtil.findWithFunction(a, f);
            if (idx > -1) a.splice(idx, 1);
            return idx != -1;
        },
        remove : function(l, v) {
            var idx = jsPlumbUtil.indexOf(l, v);	
            if (idx > -1) l.splice(idx, 1);
            return idx != -1;
        },
        // TODO support insert index
        addWithFunction : function(list, item, hashFunction) {
            if (jsPlumbUtil.findWithFunction(list, hashFunction) == -1) list.push(item);
        },
        addToList : function(map, key, value, insertAtStart) {
            var l = map[key];
            if (l == null) {
                l = [];
                map[key] = l;
            }
            l[insertAtStart ? "unshift" : "push"](value);
            return l;
        },
        //
        // extends the given obj (which can be an array) with the given constructor function, prototype functions, and
        // class members, any of which may be null.
        //
        extend : function(child, parent, _protoFn, _protoAtts) {
            _protoFn = _protoFn || {};
            _protoAtts = _protoAtts || {};
            parent = _isa(parent) ? parent : [ parent ];            

            for (var i = 0; i < parent.length; i++) {
                for (var j in parent[i].prototype) {
                    if(parent[i].prototype.hasOwnProperty(j)) {
                        child.prototype[j] = parent[i].prototype[j];
                    }
                }
            }

            var _makeFn = function(name) {
                return function() {
                    for (var i = 0; i < parent.length; i++) {
                        if (parent[i].prototype[name])
                            parent[i].prototype[name].apply(this, arguments);
                    }                    
                    return _protoFn[name].apply(this, arguments);
                };
            };

            for (var k in _protoFn) {
                child.prototype[k] = _makeFn(k);
            }

            return child;
        },
        uuid : function() {
            return ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            }));
        },
        logEnabled : true,
        log : function() {
            if (jsPlumbUtil.logEnabled && typeof console != "undefined") {
                try {
                    var msg = arguments[arguments.length - 1];
                    console.log(msg);
                }
                catch (e) {} 
            }
        },
        group : function(g) { if (jsPlumbUtil.logEnabled && typeof console != "undefined") console.group(g); },
        groupEnd : function(g) { if (jsPlumbUtil.logEnabled && typeof console != "undefined") console.groupEnd(g); },
        time : function(t) { if (jsPlumbUtil.logEnabled && typeof console != "undefined") console.time(t); },
        timeEnd : function(t) { if (jsPlumbUtil.logEnabled && typeof console != "undefined") console.timeEnd(t); },
        
        /**
		 * helper to remove an element from the DOM.
		 */
		removeElement : function(element) {
			if (element != null && element.parentNode != null) {
				element.parentNode.removeChild(element);
			}
		},
        /**
		 * helper to remove a list of elements from the DOM.
		 */
		removeElements : function(elements) {
			for ( var i = 0; i < elements.length; i++)
				jsPlumbUtil.removeElement(elements[i]);
		},
        /*
         * Function: sizeElement 
         * Helper to size and position an element. You would typically use
         * this when writing your own Connector or Endpoint implementation.
         * 
         * Parameters: 
         *  x - [int] x position for the element origin 
         *  y - [int] y position for the element origin 
         *  w - [int] width of the element 
         *  h - [int] height of the element
         *  
         */
        sizeElement : function(el, x, y, w, h) {
            if (el) {
                el.style.height = h + "px";
                el.height = h;
                el.style.width = w + "px";
                el.width = w;
                el.style.left = x + "px";
                el.style.top = y + "px";
            }
        },
        /**
        * @name jsPlumbUtil.wrap
        * @desc Wraps one function with another, creating a placeholder for the
        * wrapped function if it was null. this is used to wrap the various
        * drag/drop event functions - to allow jsPlumb to be notified of
        * important lifecycle events without imposing itself on the user's
        * drag/drop functionality. 
        * @param {Function} wrappedFunction original function to wrap; may be null.
        * @param {Function} newFunction function to wrap the original with.
        * @param {Object} [returnOnThisValue] Optional. Indicates that the wrappedFunction should 
        * not be executed if the newFunction returns a value matching 'returnOnThisValue'.
        * note that this is a simple comparison and only works for primitives right now.
        */        
        wrap : function(wrappedFunction, newFunction, returnOnThisValue) {
            wrappedFunction = wrappedFunction || function() { };
            newFunction = newFunction || function() { };
            return function() {
                var r = null;
                try {
                    r = newFunction.apply(this, arguments);
                } catch (e) {
                    jsPlumbUtil.log("jsPlumb function failed : " + e);
                }
                if (returnOnThisValue == null || (r !== returnOnThisValue)) {
                    try {
                        r = wrappedFunction.apply(this, arguments);
                    } catch (e) {
                        jsPlumbUtil.log("wrapped function failed : " + e);
                    }
                }
                return r;
            };
        }
    };

    
    jsPlumbUtil.EventGenerator = function() {
        var _listeners = {}, eventsSuspended = false;
        
        // this is a list of events that should re-throw any errors that occur during their dispatch. as of 1.3.0 this is private to
        // jsPlumb, but it seems feasible that people might want to manipulate this list.  the thinking is that we don't want event
        // listeners to bring down jsPlumb - or do we.  i can't make up my mind about this, but i know i want to hear about it if the "ready"
        // event fails, because then my page has most likely not initialised.  so i have this halfway-house solution.  it will be interesting
        // to hear what other people think.
        var eventsToDieOn = [ "ready" ];
                                        
        this.bind = function(event, listener, insertAtStart) {
            jsPlumbUtil.addToList(_listeners, event, listener, insertAtStart);     
            return this;        
        };
                 
        this.fire = function(event, value, originalEvent) {
            if (!eventsSuspended && _listeners[event]) {
                // instead of looping through the array we get a counter and a length, because it is possible
                // that an event fired from here could cause the object to get cleaned up, which would throw
                // away the listeners. so after each cycle through the loop we check to ensure we haven't
                // been nuked.
                var l = _listeners[event].length, i = 0, _gone = false, ret = null;
                if (!this.shouldFireEvent || this.shouldFireEvent(event, value, originalEvent)) {
                    while (!_gone && i < l && ret !== false) {                    
                    
                        // doing it this way rather than catching and then possibly re-throwing means that an error propagated by this
                        // method will have the whole call stack available in the debugger.
                        if (jsPlumbUtil.findWithFunction(eventsToDieOn, function(e) { return e === event; }) != -1) 
                            _listeners[event][i](value, originalEvent);
                        else {
                            // for events we don't want to die on, catch and log.
                            try {                            
                                ret = _listeners[event][i](value, originalEvent);
                            } catch (e) {
                                jsPlumbUtil.log("jsPlumb: fire failed for event " + event + " : " + e);
                            }
                        }
                        i++;
                        if (_listeners == null || _listeners[event] == null) _gone = true;                    
                    }
                }
            }
            return this;
        };
        
        this.unbind = function(event) {
            if (event)
                delete _listeners[event];
            else {
                _listeners = {};
            }
            return this;
        };
        
        this.getListener = function(forEvent) {
            return _listeners[forEvent];
        };              
        this.setSuspendEvents = function(val) {
            eventsSuspended = val;    
        };        
        this.isSuspendEvents = function() {
            return eventsSuspended;
        };        
        this.cleanupListeners = function() {
            for (var i in _listeners) {
                _listeners[i].splice(0);
                delete _listeners[i];
            }
        };
    };


    jsPlumbUtil.EventGenerator.prototype = {
        cleanup:function() {
            this.cleanupListeners();
        }
    };


    // thanks MDC
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind
    if (!Function.prototype.bind) {
      Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
          // closest thing possible to the ECMAScript 5 internal IsCallable function
          throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1), 
            fToBind = this, 
            fNOP = function () {},
            fBound = function () {
              return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                                   aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
      };
    }

})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the base functionality for DOM type adapters. 
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */
;(function() {
    
		var canvasAvailable = !!document.createElement('canvas').getContext,
		svgAvailable = !!window.SVGAngle || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"),
		// http://stackoverflow.com/questions/654112/how-do-you-detect-support-for-vml-or-svg-in-a-browser
		vmlAvailable = function() {		    
            if (vmlAvailable.vml === undefined) { 
                var a = document.body.appendChild(document.createElement('div'));
            	a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
            	var b = a.firstChild;
            	if (b != null && b.style != null) {
	            	b.style.behavior = "url(#default#VML)";
	            	vmlAvailable.vml = b ? typeof b.adj == "object": true;
	            }
	            else
	            	vmlAvailable.vml = false;
            	a.parentNode.removeChild(a);
            }
            return vmlAvailable.vml;
		};
        
    /**
		Manages dragging for some instance of jsPlumb.
	*/
	var DragManager = function(_currentInstance) {		
		var _draggables = {}, _dlist = [], _delements = {}, _elementsWithEndpoints = {},			
			// elementids mapped to the draggable to which they belong.
			_draggablesForElements = {};			

        /**
            register some element as draggable.  right now the drag init stuff is done elsewhere, and it is
            possible that will continue to be the case.
        */
		this.register = function(el) {
            var jpcl = jsPlumb.CurrentLibrary,
            	_el = jpcl.getElementObject(el),
            	id = _currentInstance.getId(el),                
                parentOffset = jpcl.getOffset(_el);
                    
            if (!_draggables[id]) {
                _draggables[id] = el;
                _dlist.push(el);
                _delements[id] = {};
            }
				
			// look for child elements that have endpoints and register them against this draggable.
			var _oneLevel = function(p, startOffset) {
                if (p) {											
                    for (var i = 0; i < p.childNodes.length; i++) {
                        if (p.childNodes[i].nodeType != 3 && p.childNodes[i].nodeType != 8) {
                            var cEl = jpcl.getElementObject(p.childNodes[i]),
                                cid = _currentInstance.getId(p.childNodes[i], null, true);
                            if (cid && _elementsWithEndpoints[cid] && _elementsWithEndpoints[cid] > 0) {
                                var cOff = jpcl.getOffset(cEl);
                                _delements[id][cid] = {
                                    id:cid,
                                    offset:{
                                        left:cOff.left - parentOffset.left,
                                        top:cOff.top - parentOffset.top
                                    }
                                };
                                _draggablesForElements[cid] = id;
                            }
                            _oneLevel(p.childNodes[i]);
                        }	
                    }
                }
			};

			_oneLevel(el);
		};
		
		// refresh the offsets for child elements of this element. 
		this.updateOffsets = function(elId) {
			var jpcl = jsPlumb.CurrentLibrary,
				el = jpcl.getElementObject(elId),
				domEl = jpcl.getDOMElement(el),
				id = _currentInstance.getId(domEl),
				children = _delements[id],
				parentOffset = jpcl.getOffset(el);
				
			if (children) {
				for (var i in children) {
					var cel = jpcl.getElementObject(i),
						cOff = jpcl.getOffset(cel);
						
					_delements[id][i] = {
						id:i,
						offset:{
							left:cOff.left - parentOffset.left,
							top:cOff.top - parentOffset.top
						}
					};
					_draggablesForElements[i] = id;
				}
			}
		};

		/**
			notification that an endpoint was added to the given el.  we go up from that el's parent
			node, looking for a parent that has been registered as a draggable. if we find one, we add this
			el to that parent's list of elements to update on drag (if it is not there already)
		*/
		this.endpointAdded = function(el) {
			var jpcl = jsPlumb.CurrentLibrary, b = document.body, id = _currentInstance.getId(el), 
				c = jpcl.getElementObject(el), 
				cLoc = jsPlumb.CurrentLibrary.getOffset(c),
				p = el.parentNode, done = p == b;

			_elementsWithEndpoints[id] = _elementsWithEndpoints[id] ? _elementsWithEndpoints[id] + 1 : 1;

			while (p != null && p != b) {
				var pid = _currentInstance.getId(p, null, true);
				if (pid && _draggables[pid]) {
					var idx = -1, pEl = jpcl.getElementObject(p), pLoc = jpcl.getOffset(pEl);
					
					if (_delements[pid][id] == null) {						
						_delements[pid][id] = {
							id:id,
							offset:{
								left:cLoc.left - pLoc.left,
								top:cLoc.top - pLoc.top
							}
						};
						_draggablesForElements[id] = pid;
					}
					break;
				}
				p = p.parentNode;
			}	
		};

		this.endpointDeleted = function(endpoint) {
			if (_elementsWithEndpoints[endpoint.elementId]) {
				_elementsWithEndpoints[endpoint.elementId]--;
				if (_elementsWithEndpoints[endpoint.elementId] <= 0) {
					for (var i in _delements) {
						if (_delements[i]) {
                            delete _delements[i][endpoint.elementId];
                            delete _draggablesForElements[endpoint.elementId];
                        }
					}
				}
			}		
		};	
		
		this.changeId = function(oldId, newId) {				
			_delements[newId] = _delements[oldId];			
			_delements[oldId] = {};
			_draggablesForElements[newId] = _draggablesForElements[oldId];
			_draggablesForElements[oldId] = null;			
		};

		this.getElementsForDraggable = function(id) {
			return _delements[id];	
		};

		this.elementRemoved = function(elementId) {
			var elId = _draggablesForElements[elementId];
			if (elId) {
				delete _delements[elId][elementId];
				delete _draggablesForElements[elementId];
			}
		};

		this.reset = function() {
			_draggables = {};
			_dlist = [];
			_delements = {};
			_elementsWithEndpoints = {};
		};

		//
		// notification drag ended. from 1.5.5 we check automatically if need to update some
		// ancestor's offsets.
		//
		this.dragEnded = function(el) {			
			var id = _currentInstance.getId(el),
				ancestor = _draggablesForElements[id];

			if (ancestor) this.updateOffsets(ancestor);
		};

		this.setParent = function(el, elId, p, pId) {
			var current = _draggablesForElements[elId];
			if (current) {
				if (!_delements[pId])
					_delements[pId] = {};
				_delements[pId][elId] = _delements[current][elId];
				delete _delements[current][elId];
				var pLoc = jsPlumb.CurrentLibrary.getOffset(p),
					cLoc = jsPlumb.CurrentLibrary.getOffset(el);
				_delements[pId][elId].offset = {
					left:cLoc.left - pLoc.left,
					top:cLoc.top - pLoc.top
				};				
				_draggablesForElements[elId] = pId;
			}			
		};
		
	};
        
    // for those browsers that dont have it.  they still don't have it! but at least they won't crash.
	if (!window.console)
		window.console = { time:function(){}, timeEnd:function(){}, group:function(){}, groupEnd:function(){}, log:function(){} };
            
    window.jsPlumbAdapter = {
        
        headless:false,

        getAttribute:function(el, attName) {
        	return el.getAttribute(attName);
        },

        setAttribute:function(el, a, v) {
        	el.setAttribute(a, v);
        },
        
        appendToRoot : function(node) {
            document.body.appendChild(node);
        },
        getRenderModes : function() {
            return [ "canvas", "svg", "vml" ];
        },
        isRenderModeAvailable : function(m) {
            return {
                "canvas":canvasAvailable,
                "svg":svgAvailable,
                "vml":vmlAvailable()
            }[m];
        },
        getDragManager : function(_jsPlumb) {
            return new DragManager(_jsPlumb);
        },
        setRenderMode : function(mode) {
            var renderMode;
            
            if (mode) {
				mode = mode.toLowerCase();            
			            
                var canvasAvailable = this.isRenderModeAvailable("canvas"),
                    svgAvailable = this.isRenderModeAvailable("svg"),
                    vmlAvailable = this.isRenderModeAvailable("vml");
                
                // now test we actually have the capability to do this.						
                if (mode === "svg") {
                    if (svgAvailable) renderMode = "svg";
                    else if (canvasAvailable) renderMode = "canvas";
                    else if (vmlAvailable) renderMode = "vml";
                }
                else if (mode === "canvas" && canvasAvailable) renderMode = "canvas";
                else if (vmlAvailable) renderMode = "vml";
            }

			return renderMode;
        }
    };
    

    /*

    addClass:

    add: function( elem, classNames ) {
    jQuery.each((classNames || "").split(/\s+/), function(i, className){
        if ( elem.nodeType == 1 && !jQuery.className.has( elem.className, className ) )
            elem.className += (elem.className ? " " : "") + className;
        });
    },
    */

    /*

	removeClass:

    elem.className = classNames !== undefined ?
    	jQuery.grep(elem.className.split(/\s+/), function(className){
    		return !jQuery.className.has( classNames, className );
    	}).join(" ") :

*/

})();
/**
 * @module jsPlumb
 * @description Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.   
 * 
 * - [Demo Site](http://jsplumb.org)
 * - [GitHub](http://github.com/sporritt/jsplumb)
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (simon.porritt@gmail.com)
 */
;(function() {
			
    var _ju = jsPlumbUtil,
    	_addClass = function(el, clazz) { jsPlumb.CurrentLibrary.addClass(_gel(el), clazz); },
		_hasClass = function(el, clazz) { return jsPlumb.CurrentLibrary.hasClass(_gel(el), clazz); },
		_removeClass = function(el, clazz) { jsPlumb.CurrentLibrary.removeClass(_gel(el), clazz); },
		_gel = function(el) { return jsPlumb.CurrentLibrary.getElementObject(el); },
		_dom = function(el) { return jsPlumb.CurrentLibrary.getDOMElement(el); },		
		_getOffset = function(el, _instance) {
            var o = jsPlumb.CurrentLibrary.getOffset(_gel(el));
			if (_instance != null) {
                var z = _instance.getZoom();
                return {left:o.left / z, top:o.top / z };    
            }
            else
                return o;
        },		
		_getSize = function(el) {
            return jsPlumb.CurrentLibrary.getSize(_gel(el));
        },
		
		/**
		 * creates a timestamp, using milliseconds since 1970, but as a string.
		 */
		_timestamp = function() { return "" + (new Date()).getTime(); },

		// helper method to update the hover style whenever it, or paintStyle, changes.
		// we use paintStyle as the foundation and merge hoverPaintStyle over the
		// top.
		_updateHoverStyle = function(component) {
			if (component._jsPlumb.paintStyle && component._jsPlumb.hoverPaintStyle) {
				var mergedHoverStyle = {};
				jsPlumb.extend(mergedHoverStyle, component._jsPlumb.paintStyle);
				jsPlumb.extend(mergedHoverStyle, component._jsPlumb.hoverPaintStyle);
				delete component._jsPlumb.hoverPaintStyle;
				// we want the fillStyle of paintStyle to override a gradient, if possible.
				if (mergedHoverStyle.gradient && component._jsPlumb.paintStyle.fillStyle)
					delete mergedHoverStyle.gradient;
				component._jsPlumb.hoverPaintStyle = mergedHoverStyle;
			}
		},		
		events = [ "click", "dblclick", "mouseenter", "mouseout", "mousemove", "mousedown", "mouseup", "contextmenu" ],
		eventFilters = { "mouseout":"mouseexit" },
		_updateAttachedElements = function(component, state, timestamp, sourceElement) {
			var affectedElements = component.getAttachedElements();
			if (affectedElements) {
				for (var i = 0, j = affectedElements.length; i < j; i++) {
					if (!sourceElement || sourceElement != affectedElements[i])
						affectedElements[i].setHover(state, true, timestamp);			// tell the attached elements not to inform their own attached elements.
				}
			}
		},
		_splitType = function(t) { return t == null ? null : t.split(" "); },		
		_applyTypes = function(component, params, doNotRepaint) {
			if (component.getDefaultType) {
				var td = component.getTypeDescriptor();
					
				var o = _ju.merge({}, component.getDefaultType());
				for (var i = 0, j = component._jsPlumb.types.length; i < j; i++)
					o = _ju.merge(o, component._jsPlumb.instance.getType(component._jsPlumb.types[i], td));						
					
				if (params) {
					o = _ju.populate(o, params);
				}
			
				component.applyType(o, doNotRepaint);					
				if (!doNotRepaint) component.repaint();
			}
		},		

// ------------------------------ BEGIN jsPlumbUIComponent --------------------------------------------

		jsPlumbUIComponent = window.jsPlumbUIComponent = function(params) {

			jsPlumbUtil.EventGenerator.apply(this, arguments);

			var self = this, 
				a = arguments, 				 				
				idPrefix = self.idPrefix,
				id = idPrefix + (new Date()).getTime(),
				jpcl = jsPlumb.CurrentLibrary;

			this._jsPlumb = { 
				instance: params._jsPlumb,
				parameters:params.parameters || {},
				paintStyle:null,
				hoverPaintStyle:null,
				paintStyleInUse:null,
				hover:false,
				beforeDetach:params.beforeDetach,
				beforeDrop:params.beforeDrop,
				overlayPlacements : [],
				hoverClass: params.hoverClass || params._jsPlumb.Defaults.HoverClass || jsPlumb.Defaults.HoverClass,
				types:[]
			};

			this.getId = function() { return id; };	
			
			// all components can generate events
			
			if (params.events) {
				for (var i in params.events)
					self.bind(i, params.events[i]);
			}

			// all components get this clone function.
			// TODO issue 116 showed a problem with this - it seems 'a' that is in
			// the clone function's scope is shared by all invocations of it, the classic
			// JS closure problem.  for now, jsPlumb does a version of this inline where 
			// it used to call clone.  but it would be nice to find some time to look
			// further at this.
			this.clone = function() {
				var o = {};//new Object();
				this.constructor.apply(o, a);
				return o;
			}.bind(this);				
						
			// user can supply a beforeDetach callback, which will be executed before a detach
			// is performed; returning false prevents the detach.			
			this.isDetachAllowed = function(connection) {
				var r = true;
				if (this._jsPlumb.beforeDetach) {
					try { 
						r = this._jsPlumb.beforeDetach(connection); 
					}
					catch (e) { _ju.log("jsPlumb: beforeDetach callback failed", e); }
				}
				return r;
			};
			
			// user can supply a beforeDrop callback, which will be executed before a dropped
			// connection is confirmed. user can return false to reject connection.			
			this.isDropAllowed = function(sourceId, targetId, scope, connection, dropEndpoint) {
				var r = this._jsPlumb.instance.checkCondition("beforeDrop", { 
					sourceId:sourceId, 
					targetId:targetId, 
					scope:scope,
					connection:connection,
					dropEndpoint:dropEndpoint 
				});
				if (this._jsPlumb.beforeDrop) {
					try { 
						r = this._jsPlumb.beforeDrop({ 
							sourceId:sourceId, 
							targetId:targetId, 
							scope:scope, 
							connection:connection,
							dropEndpoint:dropEndpoint
						}); 
					}
					catch (e) { _ju.log("jsPlumb: beforeDrop callback failed", e); }
				}
				return r;
			};													

		    var boundListeners = [],
		    	bindAListener = function(obj, type, fn) {
			    	boundListeners.push([obj, type, fn]);
			    	obj.bind(type, fn);
			    },
		    	domListeners = [],
            	bindOne = function(o, c, evt) {
					var filteredEvent = eventFilters[evt] || evt,
						fn = function(ee) {
							c.fire(filteredEvent, c, ee);
						};
					domListeners.push([o, evt, fn]);
					jpcl.bind(o, evt, fn);
				},
				unbindOne = function(o, evt, fn) {
					var filteredEvent = eventFilters[evt] || evt;
					jpcl.unbind(o, evt, fn);
				};

            this.bindListeners = function(obj, _self, _hoverFunction) {
                bindAListener(obj, "click", function(ep, e) { _self.fire("click", _self, e); });             
             	bindAListener(obj, "dblclick", function(ep, e) { _self.fire("dblclick", _self, e); });
                bindAListener(obj, "contextmenu", function(ep, e) { _self.fire("contextmenu", _self, e); });
                bindAListener(obj, "mouseenter", function(ep, e) {
                    if (!_self.isHover()) {
                        _hoverFunction(true);
                        _self.fire("mouseenter", _self, e);
                    }
                });
                bindAListener(obj, "mouseexit", function(ep, e) {
                    if (_self.isHover()) {
                        _hoverFunction(false);
                        _self.fire("mouseexit", _self, e);
                    }
                });	  
                bindAListener(obj, "mousedown", function(ep, e) { _self.fire("mousedown", _self, e); });
                bindAListener(obj, "mouseup", function(ep, e) { _self.fire("mouseup", _self, e); });
            };

            this.unbindListeners = function() {
            	for (var i = 0; i < boundListeners.length; i++) {
            		var o = boundListeners[i];
            		o[0].unbind(o[1], o[2]);
            	}            	
            	boundListeners = null;
            };            
		    
		    this.attachListeners = function(o, c) {
				for (var i = 0, j = events.length; i < j; i++) {
					bindOne(o, c, events[i]); 			
				}
			};	
			this.detachListeners = function() {
				for (var i = 0; i < domListeners.length; i++) {
					unbindOne(domListeners[i][0], domListeners[i][1], domListeners[i][2]);
				}
				domListeners = null;
			};	   		    
		    
		    this.reattachListenersForElement = function(o) {
			    if (arguments.length > 1) {
		    		for (var i = 0, j = events.length; i < j; i++)
		    			unbindOne(o, events[i]);
			    	for (i = 1, j = arguments.length; i < j; i++)
		    			this.attachListeners(o, arguments[i]);
		    	}
		    };		    	    			                      
		};

		jsPlumbUtil.extend(jsPlumbUIComponent, jsPlumbUtil.EventGenerator, {
			
			getParameter : function(name) { 
				return this._jsPlumb.parameters[name]; 
			},
			
			setParameter : function(name, value) { 
				this._jsPlumb.parameters[name] = value; 
			},
			
			getParameters : function() { 
				return this._jsPlumb.parameters; 
			},			
			
			setParameters : function(p) { 
				this._jsPlumb.parameters = p; 
			},			
			
			addClass : function(clazz) {
			    if (this.canvas != null)
			        _addClass(this.canvas, clazz);
			},
						
			removeClass : function(clazz) {
			    if (this.canvas != null)
			        _removeClass(this.canvas, clazz);
			},
			
			setType : function(typeId, params, doNotRepaint) {				
				this._jsPlumb.types = _splitType(typeId) || [];
				_applyTypes(this, params, doNotRepaint);									
			},
			
			getType : function() {
				return this._jsPlumb.types;
			},
			
			reapplyTypes : function(params, doNotRepaint) {
				_applyTypes(this, params, doNotRepaint);
			},
			
			hasType : function(typeId) {
				return jsPlumbUtil.indexOf(this._jsPlumb.types, typeId) != -1;
			},
			
			addType : function(typeId, params, doNotRepaint) {
				var t = _splitType(typeId), _cont = false;
				if (t != null) {
					for (var i = 0, j = t.length; i < j; i++) {
						if (!this.hasType(t[i])) {
							this._jsPlumb.types.push(t[i]);
							_cont = true;						
						}
					}
					if (_cont) _applyTypes(this, params, doNotRepaint);
				}
			},
			
			removeType : function(typeId, doNotRepaint) {
				var t = _splitType(typeId), _cont = false, _one = function(tt) {
						var idx = _ju.indexOf(this._jsPlumb.types, tt);
						if (idx != -1) {
							this._jsPlumb.types.splice(idx, 1);
							return true;
						}
						return false;
					}.bind(this);
				
				if (t != null) {
					for (var i = 0,j = t.length; i < j; i++) {
						_cont = _one(t[i]) || _cont;
					}
					if (_cont) _applyTypes(this, null, doNotRepaint);
				}
			},
			
			toggleType : function(typeId, params, doNotRepaint) {
				var t = _splitType(typeId);
				if (t != null) {
					for (var i = 0, j = t.length; i < j; i++) {
						var idx = jsPlumbUtil.indexOf(this._jsPlumb.types, t[i]);
						if (idx != -1)
							this._jsPlumb.types.splice(idx, 1);
						else
							this._jsPlumb.types.push(t[i]);
					}
						
					_applyTypes(this, params, doNotRepaint);
				}
			},
			applyType : function(t, doNotRepaint) {
				this.setPaintStyle(t.paintStyle, doNotRepaint);				
				this.setHoverPaintStyle(t.hoverPaintStyle, doNotRepaint);
				if (t.parameters){
					for (var i in t.parameters)
						this.setParameter(i, t.parameters[i]);
				}
			},
			setPaintStyle : function(style, doNotRepaint) {
//		    	this._jsPlumb.paintStyle = jsPlumb.extend({}, style);
// TODO figure out if we want components to clone paintStyle so as not to share it.
				this._jsPlumb.paintStyle = style;
		    	this._jsPlumb.paintStyleInUse = this._jsPlumb.paintStyle;
		    	_updateHoverStyle(this);
		    	if (!doNotRepaint) this.repaint();
		    },
		    getPaintStyle : function() {
		    	return this._jsPlumb.paintStyle;
		    },
		    setHoverPaintStyle : function(style, doNotRepaint) {		    	
		    	//this._jsPlumb.hoverPaintStyle = jsPlumb.extend({}, style);
// TODO figure out if we want components to clone paintStyle so as not to share it.		    	
		    	this._jsPlumb.hoverPaintStyle = style;
		    	_updateHoverStyle(this);
		    	if (!doNotRepaint) this.repaint();
		    },
		    getHoverPaintStyle : function() {
		    	return this._jsPlumb.hoverPaintStyle;
		    },
			cleanup:function() {		
				this.unbindListeners();
				this.detachListeners();
			},
			destroy:function() {
				this.cleanupListeners();
				this.clone = null;				
				this._jsPlumb = null;
			},
			
			isHover : function() { return this._jsPlumb.hover; },
			
			setHover : function(hover, ignoreAttachedElements, timestamp) {
				var jpcl = jsPlumb.CurrentLibrary;
		    	// while dragging, we ignore these events.  this keeps the UI from flashing and
		    	// swishing and whatevering.
				if (this._jsPlumb && !this._jsPlumb.instance.currentlyDragging && !this._jsPlumb.instance.isHoverSuspended()) {
		    
			    	this._jsPlumb.hover = hover;
                        
                    if (this.canvas != null) {
                        if (this._jsPlumb.instance.hoverClass != null) {                            
                            jpcl[hover ? "addClass" : "removeClass"](this.canvas, this._jsPlumb.instance.hoverClass);						                            
                        }                                              
                    }
		   		 	if (this._jsPlumb.hoverPaintStyle != null) {
						this._jsPlumb.paintStyleInUse = hover ? this._jsPlumb.hoverPaintStyle : this._jsPlumb.paintStyle;
						if (!this._jsPlumb.instance.isSuspendDrawing()) {
							timestamp = timestamp || _timestamp();
							this.repaint({timestamp:timestamp, recalc:false});
						}
					}
					// get the list of other affected elements, if supported by this component.
					// for a connection, its the endpoints.  for an endpoint, its the connections! surprise.
					if (this.getAttachedElements && !ignoreAttachedElements)
						_updateAttachedElements(this, hover, _timestamp(), this);
				}
		    }
		});

// ------------------------------ END jsPlumbUIComponent --------------------------------------------

// ------------------------------ BEGIN OverlayCapablejsPlumbUIComponent --------------------------------------------

		var _internalLabelOverlayId = "__label",
			// helper to get the index of some overlay
			_getOverlayIndex = function(component, id) {
				var idx = -1;
				for (var i = 0, j = component._jsPlumb.overlays.length; i < j; i++) {
					if (id === component._jsPlumb.overlays[i].id) {
						idx = i;
						break;
					}
				}
				return idx;
			},
			// this is a shortcut helper method to let people add a label as
			// overlay.						
			_makeLabelOverlay = function(component, params) {

				var _params = {
					cssClass:params.cssClass,
					labelStyle : component.labelStyle,					
					id:_internalLabelOverlayId,
					component:component,
					_jsPlumb:component._jsPlumb.instance  // TODO not necessary, since the instance can be accessed through the component.
				},
				mergedParams = jsPlumb.extend(_params, params);

				return new jsPlumb.Overlays[component._jsPlumb.instance.getRenderMode()].Label( mergedParams );
			},
			_processOverlay = function(component, o) {
				var _newOverlay = null;
				if (_ju.isArray(o)) {	// this is for the shorthand ["Arrow", { width:50 }] syntax
					// there's also a three arg version:
					// ["Arrow", { width:50 }, {location:0.7}] 
					// which merges the 3rd arg into the 2nd.
					var type = o[0],
						// make a copy of the object so as not to mess up anyone else's reference...
						p = jsPlumb.extend({component:component, _jsPlumb:component._jsPlumb.instance}, o[1]);
					if (o.length == 3) jsPlumb.extend(p, o[2]);
					_newOverlay = new jsPlumb.Overlays[component._jsPlumb.instance.getRenderMode()][type](p);					
				} else if (o.constructor == String) {
					_newOverlay = new jsPlumb.Overlays[component._jsPlumb.instance.getRenderMode()][o]({component:component, _jsPlumb:component._jsPlumb.instance});
				} else {
					_newOverlay = o;
				}										
					
				component._jsPlumb.overlays.push(_newOverlay);
			},
			_calculateOverlaysToAdd = function(component, params) {
				var defaultKeys = component.defaultOverlayKeys || [], o = params.overlays,
					checkKey = function(k) {
						return component._jsPlumb.instance.Defaults[k] || jsPlumb.Defaults[k] || [];
					};
				
				if (!o) o = [];

				for (var i = 0, j = defaultKeys.length; i < j; i++)
					o.unshift.apply(o, checkKey(defaultKeys[i]));
				
				return o;
			},		
			OverlayCapableJsPlumbUIComponent = window.OverlayCapableJsPlumbUIComponent = function(params) {

				jsPlumbUIComponent.apply(this, arguments);
				this._jsPlumb.overlays = [];			

				var _overlays = _calculateOverlaysToAdd(this, params);
				if (_overlays) {
					for (var i = 0, j = _overlays.length; i < j; i++) {
						_processOverlay(this, _overlays[i]);
					}
				}
				
				if (params.label) {
					var loc = params.labelLocation || this.defaultLabelLocation || 0.5,
						labelStyle = params.labelStyle || this._jsPlumb.instance.Defaults.LabelStyle || jsPlumb.Defaults.LabelStyle;

					this._jsPlumb.overlays.push(_makeLabelOverlay(this, {
						label:params.label,
						location:loc,
						labelStyle:labelStyle
					}));
				}			                                  
			};

		jsPlumbUtil.extend(OverlayCapableJsPlumbUIComponent, jsPlumbUIComponent, {
			applyType : function(t, doNotRepaint) {			
				this.removeAllOverlays(doNotRepaint);
				if (t.overlays) {
					for (var i = 0, j = t.overlays.length; i < j; i++)
						this.addOverlay(t.overlays[i], true);
				}
			},
			setHover : function(hover, ignoreAttachedElements, timestamp) {            
				if (this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged()) {
	                for (var i = 0, j = this._jsPlumb.overlays.length; i < j; i++) {
						this._jsPlumb.overlays[i][hover ? "addClass":"removeClass"](this._jsPlumb.instance.hoverClass);
					}
				}
            },
            addOverlay : function(overlay, doNotRepaint) { 
				_processOverlay(this, overlay); 
				if (!doNotRepaint) this.repaint();
			},
			getOverlay : function(id) {
				var idx = _getOverlayIndex(this, id);
				return idx >= 0 ? this._jsPlumb.overlays[idx] : null;
			},			
			getOverlays : function() {
				return this._jsPlumb.overlays;
			},			
			hideOverlay : function(id) {
				var o = this.getOverlay(id);
				if (o) o.hide();
			},
			hideOverlays : function() {
				for (var i = 0, j = this._jsPlumb.overlays.length; i < j; i++)
					this._jsPlumb.overlays[i].hide();
			},
			showOverlay : function(id) {
				var o = this.getOverlay(id);
				if (o) o.show();
			},
			showOverlays : function() {
				for (var i = 0, j = this._jsPlumb.overlays.length; i < j; i++)
					this._jsPlumb.overlays[i].show();
			},
			removeAllOverlays : function(doNotRepaint) {
				for (var i = 0, j = this._jsPlumb.overlays.length; i < j; i++) {
					if (this._jsPlumb.overlays[i].cleanup) this._jsPlumb.overlays[i].cleanup();
				}

				this._jsPlumb.overlays.splice(0, this._jsPlumb.overlays.length);
				this._jsPlumb.overlayPositions = null;
				if (!doNotRepaint)
					this.repaint();
			},
			removeOverlay : function(overlayId) {
				var idx = _getOverlayIndex(this, overlayId);
				if (idx != -1) {
					var o = this._jsPlumb.overlays[idx];
					if (o.cleanup) o.cleanup();
					this._jsPlumb.overlays.splice(idx, 1);
					this._jsPlumb.overlayPositions && delete this._jsPlumb.overlayPositions[overlayId];
				}
			},
			removeOverlays : function() {
				for (var i = 0, j = arguments.length; i < j; i++)
					this.removeOverlay(arguments[i]);
			},
			getLabel : function() {
				var lo = this.getOverlay(_internalLabelOverlayId);
				return lo != null ? lo.getLabel() : null;
			},		
			getLabelOverlay : function() {
				return this.getOverlay(_internalLabelOverlayId);
			},
			setLabel : function(l) {
				var lo = this.getOverlay(_internalLabelOverlayId);
				if (!lo) {
					var params = l.constructor == String || l.constructor == Function ? { label:l } : l;
					lo = _makeLabelOverlay(this, params);	
					this._jsPlumb.overlays.push(lo);
				}
				else {
					if (l.constructor == String || l.constructor == Function) lo.setLabel(l);
					else {
						if (l.label) lo.setLabel(l.label);
						if (l.location) lo.setLocation(l.location);
					}
				}
				
				if (!this._jsPlumb.instance.isSuspendDrawing()) 
					this.repaint();
			},
			cleanup:function() {
				for (var i = 0; i < this._jsPlumb.overlays.length; i++) {
					this._jsPlumb.overlays[i].cleanup();
					this._jsPlumb.overlays[i].destroy();
				}
				this._jsPlumb.overlays.splice(0);
				this._jsPlumb.overlayPositions = null;
			},
			setVisible:function(v) {
				this[v ? "showOverlays" : "hideOverlays"]();
			},
			setAbsoluteOverlayPosition:function(overlay, xy) {
				this._jsPlumb.overlayPositions = this._jsPlumb.overlayPositions || {};
				this._jsPlumb.overlayPositions[overlay.id] = xy;
			},
			getAbsoluteOverlayPosition:function(overlay) {
				return this._jsPlumb.overlayPositions ? this._jsPlumb.overlayPositions[overlay.id] : null;
			}
		});		

// ------------------------------ END OverlayCapablejsPlumbUIComponent --------------------------------------------
		
		var _jsPlumbInstanceIndex = 0,
			getInstanceIndex = function() {
				var i = _jsPlumbInstanceIndex + 1;
				_jsPlumbInstanceIndex++;
				return i;
			};

		var jsPlumbInstance = window.jsPlumbInstance = function(_defaults) {
				
			this.Defaults = {
				Anchor : "BottomCenter",
				Anchors : [ null, null ],
	            ConnectionsDetachable : true,
	            ConnectionOverlays : [ ],
	            Connector : "Bezier",
				Container : null,
				DoNotThrowErrors:false,
				DragOptions : { },
				DropOptions : { },
				Endpoint : "Dot",
				EndpointOverlays : [ ],
				Endpoints : [ null, null ],
				EndpointStyle : { fillStyle : "#456" },
				EndpointStyles : [ null, null ],
				EndpointHoverStyle : null,
				EndpointHoverStyles : [ null, null ],
				HoverPaintStyle : null,
				LabelStyle : { color : "black" },
				LogEnabled : false,
				Overlays : [ ],
				MaxConnections : 1, 
				PaintStyle : { lineWidth : 8, strokeStyle : "#456" },            
				ReattachConnections:false,
				RenderMode : "svg",
				Scope : "jsPlumb_DefaultScope"
			};
			if (_defaults) jsPlumb.extend(this.Defaults, _defaults);
		
			this.logEnabled = this.Defaults.LogEnabled;
			this._connectionTypes = {};
			this._endpointTypes = {};		

			jsPlumbUtil.EventGenerator.apply(this);

			var _currentInstance = this,
				_instanceIndex = getInstanceIndex(),
				_bb = _currentInstance.bind,
				_initialDefaults = {},
	            _zoom = 1,
	            _info = function(el) {
	            	var _el = _dom(el);	
	            	return { el:_el, id:(jsPlumbUtil.isString(el) && _el == null) ? el : _getId(_el) };
	            };
            
	        this.getInstanceIndex = function() { return _instanceIndex; };

        	this.setZoom = function(z, repaintEverything) {
            	_zoom = z;
            	if (repaintEverything) _currentInstance.repaintEverything();
        	};
        	this.getZoom = function() { return _zoom; };
                        
			for (var i in this.Defaults)
				_initialDefaults[i] = this.Defaults[i];
			
			this.bind = function(event, fn) {		
				if ("ready" === event && initialized) fn();
				else _bb.apply(_currentInstance,[event, fn]);
			};

			_currentInstance.importDefaults = function(d) {
				for (var i in d) {
					_currentInstance.Defaults[i] = d[i];
				}	
				return _currentInstance;
			};		
			
			_currentInstance.restoreDefaults = function() {
				_currentInstance.Defaults = jsPlumb.extend({}, _initialDefaults);
				return _currentInstance;
			};
		
		    var log = null,
		        resizeTimer = null,
		        initialized = false,
		        // TODO remove from window scope       
		        connections = [],
		        // map of element id -> endpoint lists. an element can have an arbitrary
		        // number of endpoints on it, and not all of them have to be connected
		        // to anything.         
		        endpointsByElement = {},
		        endpointsByUUID = {},
		        offsets = {},
		        offsetTimestamps = {},
		        floatingConnections = {},
		        draggableStates = {},		
		        connectionBeingDragged = false,
		        sizes = [],
		        _suspendDrawing = false,
		        _suspendedAt = null,
		        DEFAULT_SCOPE = this.Defaults.Scope,
		        renderMode = null,  // will be set in init()		
		        _curIdStamp = 1,
		        _idstamp = function() { return "" + _curIdStamp++; },							
		
				//
				// appends an element to some other element, which is calculated as follows:
				// 
				// 1. if _currentInstance.Defaults.Container exists, use that element.
				// 2. if the 'parent' parameter exists, use that.
				// 3. otherwise just use the root element (for DOM usage, the document body).
				// 
				//
				_appendElement = function(el, parent) {
					if (_currentInstance.Defaults.Container)
						jsPlumb.CurrentLibrary.appendElement(el, _currentInstance.Defaults.Container);
					else if (!parent)
						jsPlumbAdapter.appendToRoot(el);
					else
						jsPlumb.CurrentLibrary.appendElement(el, parent);
				},		
				
				//
				// YUI, for some reason, put the result of a Y.all call into an object that contains
				// a '_nodes' array, instead of handing back an array-like object like the other
				// libraries do.
				//
				_convertYUICollection = function(c) {
					return c._nodes ? c._nodes : c;
				},                

			//
			// Draws an endpoint and its connections. this is the main entry point into drawing connections as well
			// as endpoints, since jsPlumb is endpoint-centric under the hood.
			// 
			// @param element element to draw (of type library specific element object)
			// @param ui UI object from current library's event system. optional.
			// @param timestamp timestamp for this paint cycle. used to speed things up a little by cutting down the amount of offset calculations we do.
			// @param clearEdits defaults to false; indicates that mouse edits for connectors should be cleared
			///
			_draw = function(element, ui, timestamp, clearEdits) {

				// TODO is it correct to filter by headless at this top level? how would a headless adapter ever repaint?
	            if (!jsPlumbAdapter.headless && !_suspendDrawing) {
				    var id = _getId(element),
				    	repaintEls = _currentInstance.dragManager.getElementsForDraggable(id);			    

				    if (timestamp == null) timestamp = _timestamp();

				    // update the offset of everything _before_ we try to draw anything.
				    var o = _updateOffset( { elId : id, offset : ui, recalc : false, timestamp : timestamp });

			        if (repaintEls) {
			    	    for (var i in repaintEls) {									 							
			    	    	// TODO this seems to cause a lag, but we provide the offset, so in theory it 
			    	    	// should not.  is the timestamp failing?
				    		_updateOffset( { 
				    			elId : repaintEls[i].id, 
				    			offset : {
									left:o.o.left + repaintEls[i].offset.left,
					    			top:o.o.top + repaintEls[i].offset.top
					    		}, 
				    			recalc : false, 
				    			timestamp : timestamp 
				    		});
				    	}
				    }	
				    		          

				    _currentInstance.anchorManager.redraw(id, ui, timestamp, null, clearEdits);
				    
				    if (repaintEls) {
					    for (var j in repaintEls) {
							_currentInstance.anchorManager.redraw(repaintEls[j].id, ui, timestamp, repaintEls[j].offset, clearEdits, true);			    	
					    }
					}		
	            }
			},

			//
			// executes the given function against the given element if the first
			// argument is an object, or the list of elements, if the first argument
			// is a list. the function passed in takes (element, elementId) as
			// arguments.
			//
			_elementProxy = function(element, fn) {
				var retVal = null, el, id;
				if (_ju.isArray(element)) {
					retVal = [];
					for ( var i = 0, j = element.length; i < j; i++) {
						el = _gel(element[i]);
						id = _currentInstance.getAttribute(el, "id");
						retVal.push(fn(el, id)); // append return values to what we will return
					}
				} else {
					el = _gel(element);
					id = _currentInstance.getAttribute(el, "id");
					retVal = fn(el, id);
				}
				return retVal;
			},				

			//
			// gets an Endpoint by uuid.
			//
			_getEndpoint = function(uuid) { return endpointsByUUID[uuid]; },

		/**
		 * inits a draggable if it's not already initialised.
		 * TODO: somehow abstract this to the adapter, because the concept of "draggable" has no
		 * place on the server.
		 */
		_initDraggableIfNecessary = function(element, isDraggable, dragOptions) {
			// TODO move to DragManager?
			if (!jsPlumbAdapter.headless) {
				var _draggable = isDraggable == null ? false : isDraggable, jpcl = jsPlumb.CurrentLibrary;
				if (_draggable) {
					if (jpcl.isDragSupported(element) && !jpcl.isAlreadyDraggable(element)) {
						var options = dragOptions || _currentInstance.Defaults.DragOptions || jsPlumb.Defaults.DragOptions;
						options = jsPlumb.extend( {}, options); // make a copy.
						var dragEvent = jpcl.dragEvents.drag,
							stopEvent = jpcl.dragEvents.stop,
							startEvent = jpcl.dragEvents.start;
	
						options[startEvent] = _ju.wrap(options[startEvent], function() {
							_currentInstance.setHoverSuspended(true);							
							_currentInstance.select({source:element}).addClass(_currentInstance.elementDraggingClass + " " + _currentInstance.sourceElementDraggingClass, true);
							_currentInstance.select({target:element}).addClass(_currentInstance.elementDraggingClass + " " + _currentInstance.targetElementDraggingClass, true);
							_currentInstance.setConnectionBeingDragged(true);
						});
	
						options[dragEvent] = _ju.wrap(options[dragEvent], function() {                            
							var ui = jpcl.getUIPosition(arguments, _currentInstance.getZoom());
							_draw(element, ui, null, true);
							_addClass(element, "jsPlumb_dragged");
						});
						options[stopEvent] = _ju.wrap(options[stopEvent], function() {
							var ui = jpcl.getUIPosition(arguments, _currentInstance.getZoom());
							_draw(element, ui);
							_removeClass(element, "jsPlumb_dragged");
							_currentInstance.setHoverSuspended(false);							
							_currentInstance.select({source:element}).removeClass(_currentInstance.elementDraggingClass + " " + _currentInstance.sourceElementDraggingClass, true);
							_currentInstance.select({target:element}).removeClass(_currentInstance.elementDraggingClass + " " + _currentInstance.targetElementDraggingClass, true);
							_currentInstance.setConnectionBeingDragged(false);
							_currentInstance.dragManager.dragEnded(element);
						});
						var elId = _getId(element); // need ID
						draggableStates[elId] = true;  
						var draggable = draggableStates[elId];
						options.disabled = draggable == null ? false : !draggable;
						jpcl.initDraggable(element, options, false, _currentInstance);
						_currentInstance.dragManager.register(element);
					}
				}
			}
		},
		
		/*
		* prepares a final params object that can be passed to _newConnection, taking into account defaults, events, etc.
		*/
		_prepareConnectionParams = function(params, referenceParams) {
			var _p = jsPlumb.extend( { }, params);
			if (referenceParams) jsPlumb.extend(_p, referenceParams);
			
			// hotwire endpoints passed as source or target to sourceEndpoint/targetEndpoint, respectively.
			if (_p.source) {
				if (_p.source.endpoint) 
					_p.sourceEndpoint = _p.source;
				else
					_p.source = _dom(_p.source);
			}
			if (_p.target) {
				if (_p.target.endpoint) 
					_p.targetEndpoint = _p.target;
				else
					_p.target = _dom(_p.target);
			}
			
			// test for endpoint uuids to connect
			if (params.uuids) {
				_p.sourceEndpoint = _getEndpoint(params.uuids[0]);
				_p.targetEndpoint = _getEndpoint(params.uuids[1]);
			}						

			// now ensure that if we do have Endpoints already, they're not full.
			// source:
			if (_p.sourceEndpoint && _p.sourceEndpoint.isFull()) {
				_ju.log(_currentInstance, "could not add connection; source endpoint is full");
				return;
			}

			// target:
			if (_p.targetEndpoint && _p.targetEndpoint.isFull()) {
				_ju.log(_currentInstance, "could not add connection; target endpoint is full");
				return;
			}
			
			// if source endpoint mandates connection type and nothing specified in our params, use it.
			if (!_p.type && _p.sourceEndpoint)
				_p.type = _p.sourceEndpoint.connectionType;
			
			// copy in any connectorOverlays that were specified on the source endpoint.
			// it doesnt copy target endpoint overlays.  i'm not sure if we want it to or not.
			if (_p.sourceEndpoint && _p.sourceEndpoint.connectorOverlays) {
				_p.overlays = _p.overlays || [];
				for (var i = 0, j = _p.sourceEndpoint.connectorOverlays.length; i < j; i++) {
					_p.overlays.push(_p.sourceEndpoint.connectorOverlays[i]);
				}
			}		
            
            // pointer events
            if (!_p["pointer-events"] && _p.sourceEndpoint && _p.sourceEndpoint.connectorPointerEvents)
                _p["pointer-events"] = _p.sourceEndpoint.connectorPointerEvents;
									
			// if there's a target specified (which of course there should be), and there is no
			// target endpoint specified, and 'newConnection' was not set to true, then we check to
			// see if a prior call to makeTarget has provided us with the specs for the target endpoint, and
			// we use those if so.  additionally, if the makeTarget call was specified with 'uniqueEndpoint' set
			// to true, then if that target endpoint has already been created, we re-use it.

			var tid, tep, existingUniqueEndpoint, newEndpoint;

			// TODO: this code can be refactored to be a little dry.
			if (_p.target && !_p.target.endpoint && !_p.targetEndpoint && !_p.newConnection) {
				tid = _getId(_p.target);
				tep =_targetEndpointDefinitions[tid];
				existingUniqueEndpoint = _targetEndpoints[tid];			

				if (tep) {			
					// if target not enabled, return.
					if (!_targetsEnabled[tid]) return;

					// TODO this is dubious. i think it is there so that the endpoint can subsequently
					// be dragged (ie it kicks off the draggable registration). but it is dubious.
					tep.isTarget = true;

					// check for max connections??						
					newEndpoint = existingUniqueEndpoint != null ? existingUniqueEndpoint : _currentInstance.addEndpoint(_p.target, tep);
					if (_targetEndpointsUnique[tid]) _targetEndpoints[tid] = newEndpoint;
					 _p.targetEndpoint = newEndpoint;
					 // TODO test options to makeTarget to see if we should do this?
					 newEndpoint._doNotDeleteOnDetach = false; // reset.
					 newEndpoint._deleteOnDetach = true;					 
				}
			}

			// same thing, but for source.
			if (_p.source && !_p.source.endpoint && !_p.sourceEndpoint && !_p.newConnection) {
				tid = _getId(_p.source);
				tep = _sourceEndpointDefinitions[tid];
				existingUniqueEndpoint = _sourceEndpoints[tid];				

				if (tep) {
					// if source not enabled, return.					
					if (!_sourcesEnabled[tid]) return;

					// TODO this is dubious. i think it is there so that the endpoint can subsequently
					// be dragged (ie it kicks off the draggable registration). but it is dubious.
					//tep.isSource = true;
				
					newEndpoint = existingUniqueEndpoint != null ? existingUniqueEndpoint : _currentInstance.addEndpoint(_p.source, tep);
					if (_sourceEndpointsUnique[tid]) _sourceEndpoints[tid] = newEndpoint;
					 _p.sourceEndpoint = newEndpoint;
					 // TODO test options to makeSource to see if we should do this?
					 newEndpoint._doNotDeleteOnDetach = false; // reset.
					 newEndpoint._deleteOnDetach = true;
				}
			}
			
			return _p;
		},
		
		_newConnection = function(params) {
			var connectionFunc = _currentInstance.Defaults.ConnectionType || _currentInstance.getDefaultConnectionType(),
			    endpointFunc = _currentInstance.Defaults.EndpointType || jsPlumb.Endpoint,
			    parent = jsPlumb.CurrentLibrary.getParent;
			
			if (params.container)
				params.parent = params.container;
			else {
				if (params.sourceEndpoint)
					params.parent = params.sourceEndpoint.parent;
				else if (params.source.constructor == endpointFunc)
					params.parent = params.source.parent;
				else params.parent = parent(params.source);
			}
			
			params._jsPlumb = _currentInstance;
            params.newConnection = _newConnection;
            params.newEndpoint = _newEndpoint;
            params.endpointsByUUID = endpointsByUUID;             
            params.endpointsByElement = endpointsByElement;  
            params.finaliseConnection = _finaliseConnection;
			var con = new connectionFunc(params);
			con.id = "con_" + _idstamp();
			_eventFireProxy("click", "click", con);
			_eventFireProxy("dblclick", "dblclick", con);
            _eventFireProxy("contextmenu", "contextmenu", con);

            // if the connection is draggable, then maybe we need to tell the target endpoint to init the
            // dragging code. it won't run again if it already configured to be draggable.
            if (con.isDetachable()) {
            	con.endpoints[0].initDraggable();
            	con.endpoints[1].initDraggable();
            }

			return con;
		},
		
		//
		// adds the connection to the backing model, fires an event if necessary and then redraws
		//
		_finaliseConnection = function(jpc, params, originalEvent, doInformAnchorManager) {
            params = params || {};
			// add to list of connections (by scope).
            if (!jpc.suspendedEndpoint)
			    connections.push(jpc);
			
            // always inform the anchor manager
            // except that if jpc has a suspended endpoint it's not true to say the
            // connection is new; it has just (possibly) moved. the question is whether
            // to make that call here or in the anchor manager.  i think perhaps here.
            if (jpc.suspendedEndpoint == null || doInformAnchorManager)
            	_currentInstance.anchorManager.newConnection(jpc);

			// force a paint
			_draw(jpc.source);
			
			// fire an event
			if (!params.doNotFireConnectionEvent && params.fireEvent !== false) {
			
				var eventArgs = {
					connection:jpc,
					source : jpc.source, target : jpc.target,
					sourceId : jpc.sourceId, targetId : jpc.targetId,
					sourceEndpoint : jpc.endpoints[0], targetEndpoint : jpc.endpoints[1]
				};
			
				_currentInstance.fire("connection", eventArgs, originalEvent);
			}
		},
		
		_eventFireProxy = function(event, proxyEvent, obj) {
			obj.bind(event, function(originalObject, originalEvent) {
				_currentInstance.fire(proxyEvent, obj, originalEvent);
			});
		},
		
		/*
		 * for the given endpoint params, returns an appropriate parent element for the UI elements that will be added.
		 * this function is used by _newEndpoint (directly below), and also in the makeSource function in jsPlumb.
		 * 
		 *   the logic is to first look for a "container" member of params, and pass that back if found.  otherwise we
		 *   handoff to the 'getParent' function in the current library.
		 */
		_getParentFromParams = function(params) {
			if (params.container)
				return params.container;
			else {
                var tag = jsPlumb.CurrentLibrary.getTagName(params.source),
                    p = jsPlumb.CurrentLibrary.getParent(params.source);
                if (tag && tag.toLowerCase() === "td")
                    return jsPlumb.CurrentLibrary.getParent(p);
                else return p;
            }
		},
		
		/*
			factory method to prepare a new endpoint.  this should always be used instead of creating Endpoints
			manually, since this method attaches event listeners and an id.
		*/
		_newEndpoint = function(params) {
				var endpointFunc = _currentInstance.Defaults.EndpointType || jsPlumb.Endpoint;
				var _p = jsPlumb.extend({}, params);				
				_p.parent = _getParentFromParams(_p);
				_p._jsPlumb = _currentInstance;
                _p.newConnection = _newConnection;
                _p.newEndpoint = _newEndpoint;                
                _p.endpointsByUUID = endpointsByUUID;             
                _p.endpointsByElement = endpointsByElement;  
                _p.finaliseConnection = _finaliseConnection;
                _p.fireDetachEvent = fireDetachEvent;
                _p.fireMoveEvent = fireMoveEvent;
                _p.floatingConnections = floatingConnections;
                _p.getParentFromParams = _getParentFromParams;
                _p.elementId = _getId(_p.source);                
				var ep = new endpointFunc(_p);			
				ep.id = "ep_" + _idstamp();
				_eventFireProxy("click", "endpointClick", ep);
				_eventFireProxy("dblclick", "endpointDblClick", ep);
				_eventFireProxy("contextmenu", "contextmenu", ep);
				if (!jsPlumbAdapter.headless)
					_currentInstance.dragManager.endpointAdded(_p.source);
			return ep;
		},
		
		/*
		 * performs the given function operation on all the connections found
		 * for the given element id; this means we find all the endpoints for
		 * the given element, and then for each endpoint find the connectors
		 * connected to it. then we pass each connection in to the given
		 * function.		 
		 */
		_operation = function(elId, func, endpointFunc) {
			var endpoints = endpointsByElement[elId];
			if (endpoints && endpoints.length) {
				for ( var i = 0, ii = endpoints.length; i < ii; i++) {
					for ( var j = 0, jj = endpoints[i].connections.length; j < jj; j++) {
						var retVal = func(endpoints[i].connections[j]);
						// if the function passed in returns true, we exit.
						// most functions return false.
						if (retVal) return;
					}
					if (endpointFunc) endpointFunc(endpoints[i]);
				}
			}
		},	
		
		_setDraggable = function(element, draggable) {
			return _elementProxy(element, function(el, id) {
				draggableStates[id] = draggable;
				if (jsPlumb.CurrentLibrary.isDragSupported(el)) {
					jsPlumb.CurrentLibrary.setDraggable(el, draggable);
				}
			});
		},
		/*
		 * private method to do the business of hiding/showing.
		 * 
		 * @param el
		 *            either Id of the element in question or a library specific
		 *            object for the element.
		 * @param state
		 *            String specifying a value for the css 'display' property
		 *            ('block' or 'none').
		 */
		_setVisible = function(el, state, alsoChangeEndpoints) {
			state = state === "block";
			var endpointFunc = null;
			if (alsoChangeEndpoints) {
				if (state) endpointFunc = function(ep) {
					ep.setVisible(true, true, true);
				};
				else endpointFunc = function(ep) {
					ep.setVisible(false, true, true);
				};
			}
			var info = _info(el);
			_operation(info.id, function(jpc) {
				if (state && alsoChangeEndpoints) {		
					// this test is necessary because this functionality is new, and i wanted to maintain backwards compatibility.
					// this block will only set a connection to be visible if the other endpoint in the connection is also visible.
					var oidx = jpc.sourceId === info.id ? 1 : 0;
					if (jpc.endpoints[oidx].isVisible()) jpc.setVisible(true);
				}
				else  // the default behaviour for show, and what always happens for hide, is to just set the visibility without getting clever.
					jpc.setVisible(state);
			}, endpointFunc);
		},
		/*
		 * toggles the draggable state of the given element(s).
		 * el is either an id, or an element object, or a list of ids/element objects.
		 */
		_toggleDraggable = function(el) {
			return _elementProxy(el, function(el, elId) {
				var state = draggableStates[elId] == null ? false : draggableStates[elId];
				state = !state;
				draggableStates[elId] = state;
				jsPlumb.CurrentLibrary.setDraggable(el, state);
				return state;
			});
		},
		/**
		 * private method to do the business of toggling hiding/showing.
		 */
		_toggleVisible = function(elId, changeEndpoints) {
			var endpointFunc = null;
			if (changeEndpoints) {
				endpointFunc = function(ep) {
					var state = ep.isVisible();
					ep.setVisible(!state);
				};
			}
			_operation(elId, function(jpc) {
				var state = jpc.isVisible();
				jpc.setVisible(!state);				
			}, endpointFunc);
			// todo this should call _elementProxy, and pass in the
			// _operation(elId, f) call as a function. cos _toggleDraggable does
			// that.
		},
		/**
		 * updates the offset and size for a given element, and stores the
		 * values. if 'offset' is not null we use that (it would have been
		 * passed in from a drag call) because it's faster; but if it is null,
		 * or if 'recalc' is true in order to force a recalculation, we get the current values.
		 */
		_updateOffset = function(params) {
			var timestamp = params.timestamp, recalc = params.recalc, offset = params.offset, elId = params.elId, s;
			if (_suspendDrawing && !timestamp) timestamp = _suspendedAt;
			if (!recalc) {
				if (timestamp && timestamp === offsetTimestamps[elId]) {			
					return {o:params.offset || offsets[elId], s:sizes[elId]};
				}
			}			
			if (recalc || !offset) { // if forced repaint or no offset available, we recalculate.
				// get the current size and offset, and store them
				s = _gel(elId);
				if (s != null) {						
					sizes[elId] = _getSize(s);
					offsets[elId] = _getOffset(s, _currentInstance);
					offsetTimestamps[elId] = timestamp;
				}
			} else {
				offsets[elId] = offset;
                if (sizes[elId] == null) {
                    s = _gel(elId);
                    if (s != null) sizes[elId] = _getSize(s);
                }
                offsetTimestamps[elId] = timestamp;
            }
			
			if(offsets[elId] && !offsets[elId].right) {
				offsets[elId].right = offsets[elId].left + sizes[elId][0];
				offsets[elId].bottom = offsets[elId].top + sizes[elId][1];	
				offsets[elId].width = sizes[elId][0];
				offsets[elId].height = sizes[elId][1];	
				offsets[elId].centerx = offsets[elId].left + (offsets[elId].width / 2);
				offsets[elId].centery = offsets[elId].top + (offsets[elId].height / 2);				
			}
			return {o:offsets[elId], s:sizes[elId]};
		},

		// TODO comparison performance
		_getCachedData = function(elId) {
			var o = offsets[elId];
			if (!o) 
                return _updateOffset({elId:elId});
			else
                return {o:o, s:sizes[elId]};
		},

		/**
		 * gets an id for the given element, creating and setting one if
		 * necessary.  the id is of the form
		 *
		 *	jsPlumb_<instance index>_<index in instance>
		 *
		 * where "index in instance" is a monotonically increasing integer that starts at 0,
		 * for each instance.  this method is used not only to assign ids to elements that do not
		 * have them but also to connections and endpoints.
		 */
		_getId = function(element, uuid, doNotCreateIfNotFound) {
			if (jsPlumbUtil.isString(element)) return element;			
			if (element == null) return null;			
			var id = jsPlumbAdapter.getAttribute(element, "id");
			if (!id || id === "undefined") {
				// check if fixed uuid parameter is given
				if (arguments.length == 2 && arguments[1] !== undefined)
					id = uuid;
				else if (arguments.length == 1 || (arguments.length == 3 && !arguments[2]))
					id = "jsPlumb_" + _instanceIndex + "_" + _idstamp();
				
                if (!doNotCreateIfNotFound) jsPlumbAdapter.setAttribute(element, "id", id);
			}
			return id;
		};

		this.setConnectionBeingDragged = function(v) {
			connectionBeingDragged = v;
		};
		this.isConnectionBeingDragged = function() {
			return connectionBeingDragged;
		};
    
		this.connectorClass = "_jsPlumb_connector";            		
		this.hoverClass = "_jsPlumb_hover";            		
		this.endpointClass = "_jsPlumb_endpoint";		
		this.endpointConnectedClass = "_jsPlumb_endpoint_connected";		
		this.endpointFullClass = "_jsPlumb_endpoint_full";		
		this.endpointDropAllowedClass = "_jsPlumb_endpoint_drop_allowed";		
		this.endpointDropForbiddenClass = "_jsPlumb_endpoint_drop_forbidden";		
		this.overlayClass = "_jsPlumb_overlay";				
		this.draggingClass = "_jsPlumb_dragging";		
		this.elementDraggingClass = "_jsPlumb_element_dragging";			
		this.sourceElementDraggingClass = "_jsPlumb_source_element_dragging";
		this.targetElementDraggingClass = "_jsPlumb_target_element_dragging";
		this.endpointAnchorClassPrefix = "_jsPlumb_endpoint_anchor";
		this.hoverSourceClass = "_jsPlumb_source_hover";	
		this.hoverTargetClass = "_jsPlumb_target_hover";
		this.dragSelectClass = "_jsPlumb_drag_select";

		this.Anchors = {};		
		this.Connectors = {  "canvas":{}, "svg":{}, "vml":{} };				
		this.Endpoints = { "canvas":{}, "svg":{}, "vml":{} };
		this.Overlays = { "canvas":{}, "svg":{}, "vml":{}};		
		this.ConnectorRenderers = {};				
		this.SVG = "svg";
		this.CANVAS = "canvas";		
		this.VML = "vml";
				

// --------------------------- jsPLumbInstance public API ---------------------------------------------------------
					
		
		this.addEndpoint = function(el, params, referenceParams) {
			referenceParams = referenceParams || {};
			var p = jsPlumb.extend({}, referenceParams);
			jsPlumb.extend(p, params);
			p.endpoint = p.endpoint || _currentInstance.Defaults.Endpoint || jsPlumb.Defaults.Endpoint;
			p.paintStyle = p.paintStyle || _currentInstance.Defaults.EndpointStyle || jsPlumb.Defaults.EndpointStyle;
            // YUI wrapper
			el = _convertYUICollection(el);							

			var results = [], 
				inputs = (_ju.isArray(el) || (el.length != null && !_ju.isString(el))) ? el : [ el ];
						
			for (var i = 0, j = inputs.length; i < j; i++) {
				var _el = _dom(inputs[i]), id = _getId(_el);
				p.source = _el;

                _updateOffset({ elId : id, timestamp:_suspendedAt });
				var e = _newEndpoint(p);
				if (p.parentAnchor) e.parentAnchor = p.parentAnchor;
				_ju.addToList(endpointsByElement, id, e);
				var myOffset = offsets[id], 
					myWH = sizes[id],
					anchorLoc = e.anchor.compute( { xy : [ myOffset.left, myOffset.top ], wh : myWH, element : e, timestamp:_suspendedAt }),
					endpointPaintParams = { anchorLoc : anchorLoc, timestamp:_suspendedAt };
				
				if (_suspendDrawing) endpointPaintParams.recalc = false;
				if (!_suspendDrawing) e.paint(endpointPaintParams);
				
				results.push(e);
				e._doNotDeleteOnDetach = true; // mark this as being added via addEndpoint.				
			}
			
			return results.length == 1 ? results[0] : results;
		};
		
		
		this.addEndpoints = function(el, endpoints, referenceParams) {
			var results = [];
			for ( var i = 0, j = endpoints.length; i < j; i++) {
				var e = _currentInstance.addEndpoint(el, endpoints[i], referenceParams);
				if (_ju.isArray(e))
					Array.prototype.push.apply(results, e);
				else results.push(e);
			}
			return results;
		};
		
		this.animate = function(el, properties, options) {
			options = options || {};
			var ele = _gel(el), 
				id = _getId(el),
				stepFunction = jsPlumb.CurrentLibrary.dragEvents.step,
				completeFunction = jsPlumb.CurrentLibrary.dragEvents.complete;

			options[stepFunction] = _ju.wrap(options[stepFunction], function() {
				_currentInstance.repaint(id);
			});

			// onComplete repaints, just to make sure everything looks good at the end of the animation.
			options[completeFunction] = _ju.wrap(options[completeFunction], function() {
				_currentInstance.repaint(id);
			});

			jsPlumb.CurrentLibrary.animate(ele, properties, options);
		};		
		
		/**
		* checks for a listener for the given condition, executing it if found, passing in the given value.
		* condition listeners would have been attached using "bind" (which is, you could argue, now overloaded, since
		* firing click events etc is a bit different to what this does).  i thought about adding a "bindCondition"
		* or something, but decided against it, for the sake of simplicity. jsPlumb will never fire one of these
		* condition events anyway.
		*/
		this.checkCondition = function(conditionName, value) {
			var l = _currentInstance.getListener(conditionName),
				r = true;
				
			if (l && l.length > 0) {
				try {
					for (var i = 0, j = l.length; i < j; i++) {
						r = r && l[i](value); 
					}
				}
				catch (e) { 
					_ju.log(_currentInstance, "cannot check condition [" + conditionName + "]" + e); 
				}
			}
			return r;
		};
		
		/**
		 * checks a condition asynchronously: fires the event handler and passes the handler
		 * a 'proceed' function and a 'stop' function. The handler MUST execute one or other
		 * of these once it has made up its mind.
		 *
		 * Note that although this reads the listener list for the given condition, it
		 * does not loop through and hit each listener, because that, with asynchronous
		 * callbacks, would be messy. so it uses only the first listener registered.
		 */ 
		this.checkASyncCondition = function(conditionName, value, proceed, stop) {
			var l = _currentInstance.getListener(conditionName);
				
			if (l && l.length > 0) {
				try {
					l[0](value, proceed, stop); 					
				}
				catch (e) { 
					_ju.log(_currentInstance, "cannot asynchronously check condition [" + conditionName + "]" + e); 
				}
			}	
		};

		
		this.connect = function(params, referenceParams) {
			// prepare a final set of parameters to create connection with
			var _p = _prepareConnectionParams(params, referenceParams), jpc;
			// TODO probably a nicer return value if the connection was not made.  _prepareConnectionParams
			// will return null (and log something) if either endpoint was full.  what would be nicer is to 
			// create a dedicated 'error' object.
			if (_p) {
				// create the connection.  it is not yet registered 
				jpc = _newConnection(_p);
				// now add it the model, fire an event, and redraw
				_finaliseConnection(jpc, _p);										
			}
			return jpc;
		};		
		
		this.deleteEndpoint = function(object, doNotRepaintAfterwards) {
			var _is = _currentInstance.setSuspendDrawing(true);
			var endpoint = (typeof object == "string") ? endpointsByUUID[object] : object;			
			if (endpoint) {		
				_currentInstance.deleteObject({
					endpoint:endpoint
				});
			}
			if(!_is) _currentInstance.setSuspendDrawing(false, doNotRepaintAfterwards);
			return _currentInstance;									
		};		
		
		this.deleteEveryEndpoint = function() {
			var _is = _currentInstance.setSuspendDrawing(true);
			for ( var id in endpointsByElement) {
				var endpoints = endpointsByElement[id];
				if (endpoints && endpoints.length) {
					for ( var i = 0, j = endpoints.length; i < j; i++) {
						_currentInstance.deleteEndpoint(endpoints[i], true);
					}
				}
			}			
			endpointsByElement = {};			
			endpointsByUUID = {};
			_currentInstance.anchorManager.reset();
			_currentInstance.dragManager.reset();							
			if(!_is) _currentInstance.setSuspendDrawing(false);
			return _currentInstance;
		};

		var fireDetachEvent = function(jpc, doFireEvent, originalEvent) {
            // may have been given a connection, or in special cases, an object
            var connType =  _currentInstance.Defaults.ConnectionType || _currentInstance.getDefaultConnectionType(),
                argIsConnection = jpc.constructor == connType,
                params = argIsConnection ? {
                    connection:jpc,
				    source : jpc.source, target : jpc.target,
				    sourceId : jpc.sourceId, targetId : jpc.targetId,
				    sourceEndpoint : jpc.endpoints[0], targetEndpoint : jpc.endpoints[1]
                } : jpc;

			if (doFireEvent)
				_currentInstance.fire("connectionDetached", params, originalEvent);
			
            _currentInstance.anchorManager.connectionDetached(params);
		};	

		var fireMoveEvent = function(params, evt) {
			_currentInstance.fire("connectionMoved", params, evt);
		};

		this.unregisterEndpoint = function(endpoint) {
			if (endpoint._jsPlumb.uuid) endpointsByUUID[endpoint._jsPlumb.uuid] = null;				
			_currentInstance.anchorManager.deleteEndpoint(endpoint);			
			// TODO at least replace this with a removeWithFunction call.			
			for (var e in endpointsByElement) {
				var endpoints = endpointsByElement[e];
				if (endpoints) {
					var newEndpoints = [];
					for (var i = 0, j = endpoints.length; i < j; i++)
						if (endpoints[i] != endpoint) newEndpoints.push(endpoints[i]);
					
					endpointsByElement[e] = newEndpoints;
				}
				if(endpointsByElement[e].length <1){
					delete endpointsByElement[e];
				}
			}
		};
				
		this.detach = function() {

            if (arguments.length === 0) return;
            var connType =  _currentInstance.Defaults.ConnectionType || _currentInstance.getDefaultConnectionType(),
                firstArgIsConnection = arguments[0].constructor == connType,
                params = arguments.length == 2 ? firstArgIsConnection ? (arguments[1] || {}) : arguments[0] : arguments[0],
                fireEvent = (params.fireEvent !== false),
                forceDetach = params.forceDetach,
                conn = firstArgIsConnection ? arguments[0] : params.connection;
                                                    
				if (conn) {             
                    if (forceDetach || jsPlumbUtil.functionChain(true, false, [
                            [ conn.endpoints[0], "isDetachAllowed", [ conn ] ],    
                            [ conn.endpoints[1], "isDetachAllowed", [ conn ] ],
                            [ conn, "isDetachAllowed", [ conn ] ],
                            [ _currentInstance, "checkCondition", [ "beforeDetach", conn ] ] ])) {
                        
                        conn.endpoints[0].detach(conn, false, true, fireEvent); 
                    }
                }
                else {
					var _p = jsPlumb.extend( {}, params); // a backwards compatibility hack: source should be thought of as 'params' in this case.
					// test for endpoint uuids to detach
					if (_p.uuids) {
						_getEndpoint(_p.uuids[0]).detachFrom(_getEndpoint(_p.uuids[1]), fireEvent);
					} else if (_p.sourceEndpoint && _p.targetEndpoint) {
						_p.sourceEndpoint.detachFrom(_p.targetEndpoint);
					} else {
						var sourceId = _getId(_dom(_p.source)),
						    targetId = _getId(_dom(_p.target));
						_operation(sourceId, function(jpc) {
						    if ((jpc.sourceId == sourceId && jpc.targetId == targetId) || (jpc.targetId == sourceId && jpc.sourceId == targetId)) {
							    if (_currentInstance.checkCondition("beforeDetach", jpc)) {
                                    jpc.endpoints[0].detach(jpc, false, true, fireEvent);
								}
							}
						});
					}
				}
		};

		this.detachAllConnections = function(el, params) {
            params = params || {};
            el = _dom(el);
			var id = _getId(el),
                endpoints = endpointsByElement[id];
			if (endpoints && endpoints.length) {
				for ( var i = 0, j = endpoints.length; i < j; i++) {
					endpoints[i].detachAll(params.fireEvent !== false);
				}
			}
			return _currentInstance;
		};

		this.detachEveryConnection = function(params) {
            params = params || {};
            _currentInstance.doWhileSuspended(function() {
				for ( var id in endpointsByElement) {
					var endpoints = endpointsByElement[id];
					if (endpoints && endpoints.length) {
						for ( var i = 0, j = endpoints.length; i < j; i++) {
							endpoints[i].detachAll(params.fireEvent !== false);
						}
					}
				}
				connections.splice(0);
			});
			return _currentInstance;
		};

		/// not public.  but of course its exposed. how to change this.
		this.deleteObject = function(params) {
			var result = {
					endpoints : {}, 
					connections : {},
					endpointCount:0,
					connectionCount:0
				},
				fireEvent = params.fireEvent !== false,
				deleteAttachedObjects = params.deleteAttachedObjects !== false;

			var unravelConnection = function(connection) {
				if(connection != null && result.connections[connection.id] == null) {
					if (connection._jsPlumb != null) connection.setHover(false);
					result.connections[connection.id] = connection;
					result.connectionCount++;
					if (deleteAttachedObjects) {
						for (var j = 0; j < connection.endpoints.length; j++) {
							if (connection.endpoints[j]._deleteOnDetach)
								unravelEndpoint(connection.endpoints[j]);
						}
					}					
				}
			};
			var unravelEndpoint = function(endpoint) {
				if(endpoint != null && result.endpoints[endpoint.id] == null) {
					if (endpoint._jsPlumb != null) endpoint.setHover(false);
					result.endpoints[endpoint.id] = endpoint;
					result.endpointCount++;

					if (deleteAttachedObjects) {
						for (var i = 0; i < endpoint.connections.length; i++) {
							var c = endpoint.connections[i];
							unravelConnection(c);						
						}
					}
				}
			};

			if (params.connection) 
				unravelConnection(params.connection);
			else unravelEndpoint(params.endpoint);

			// loop through connections
			for (var i in result.connections) {
				var c = result.connections[i];
				c.endpoints[0].detachFromConnection(c);
				c.endpoints[1].detachFromConnection(c);
				//_currentInstance.unregisterConnection(c);
				jsPlumbUtil.removeWithFunction(connections, function(_c) {
				    return c.id == _c.id;
				});
				fireDetachEvent(c, fireEvent, params.originalEvent);
				c.cleanup();
				c.destroy();
			}

			// loop through endpoints
			for (var j in result.endpoints) {
				var e = result.endpoints[j];	
				_currentInstance.unregisterEndpoint(e);
				// FIRE some endpoint deleted event?
				e.cleanup();
				e.destroy();
			}	

			return result;
		};
 
		this.draggable = function(el, options) {
			var i,j,ele;
			// allows for array or jquery/mootools selector
			if (typeof el == 'object' && el.length) {
				for (i = 0, j = el.length; i < j; i++) {
					ele = _dom(el[i]);
					if (ele) _initDraggableIfNecessary(ele, true, options);
				}
			} 
			// allows for YUI selector
			else if (el._nodes) { 	// TODO this is YUI specific; really the logic should be forced
				// into the library adapters (for jquery and mootools aswell)
				for (i = 0, j = el._nodes.length; i < j; i++) {
					ele = _dom(el._nodes[i]);
					if (ele) _initDraggableIfNecessary(ele, true, options);
				}
			}
			else {				
				ele = _dom(el);
				if (ele) _initDraggableIfNecessary(ele, true, options);
			}
			return _currentInstance;
		};


		// just a library-agnostic wrapper.
		this.extend = function(o1, o2) {
			return jsPlumb.CurrentLibrary.extend(o1, o2);
		};

		// helpers for select/selectEndpoints
		var _setOperation = function(list, func, args, selector) {
				for (var i = 0, j = list.length; i < j; i++) {
					list[i][func].apply(list[i], args);
				}	
				return selector(list);
			},
			_getOperation = function(list, func, args) {
				var out = [];
				for (var i = 0, j = list.length; i < j; i++) {					
					out.push([ list[i][func].apply(list[i], args), list[i] ]);
				}	
				return out;
			},
			setter = function(list, func, selector) {
				return function() {
					return _setOperation(list, func, arguments, selector);
				};
			},
			getter = function(list, func) {
				return function() {
					return _getOperation(list, func, arguments);
				};	
			},
			prepareList = function(input, doNotGetIds) {
				var r = [];
				if (input) {
					if (typeof input == 'string') {
						if (input === "*") return input;
						r.push(input);
					}
					else {
						input = _gel(input);
						if (doNotGetIds) r = input;
						else { 
							for (var i = 0, j = input.length; i < j; i++) 
								r.push(_info(input[i]).id);
						}	
					}
				}
				return r;
			},
			filterList = function(list, value, missingIsFalse) {
				if (list === "*") return true;
				return list.length > 0 ? jsPlumbUtil.indexOf(list, value) != -1 : !missingIsFalse;
			};

		// get some connections, specifying source/target/scope
		this.getConnections = function(options, flat) {
			if (!options) {
				options = {};
			} else if (options.constructor == String) {
				options = { "scope": options };
			}
			var scope = options.scope || _currentInstance.getDefaultScope(),
				scopes = prepareList(scope, true),
				sources = prepareList(options.source),
				targets = prepareList(options.target),			
				results = (!flat && scopes.length > 1) ? {} : [],
				_addOne = function(scope, obj) {
					if (!flat && scopes.length > 1) {
						var ss = results[scope];
						if (ss == null) {
							ss = results[scope] = [];
						}
						ss.push(obj);
					} else results.push(obj);
				};
			
			for ( var j = 0, jj = connections.length; j < jj; j++) {
				var c = connections[j];
				if (filterList(scopes, c.scope) && filterList(sources, c.sourceId) && filterList(targets, c.targetId))
					_addOne(c.scope, c);
			}
			
			return results;
		};
		
		var _curryEach = function(list, executor) {
				return function(f) {
					for (var i = 0, ii = list.length; i < ii; i++) {
						f(list[i]);
					}
					return executor(list);
				};		
			},
			_curryGet = function(list) {
				return function(idx) {
					return list[idx];
				};
			};
			
		var _makeCommonSelectHandler = function(list, executor) {
            var out = {
                    length:list.length,
				    each:_curryEach(list, executor),
				    get:_curryGet(list)
                },
                setters = ["setHover", "removeAllOverlays", "setLabel", "addClass", "addOverlay", "removeOverlay", 
                           "removeOverlays", "showOverlay", "hideOverlay", "showOverlays", "hideOverlays", "setPaintStyle",
                           "setHoverPaintStyle", "setSuspendEvents", "setParameter", "setParameters", "setVisible", 
                           "repaint", "addType", "toggleType", "removeType", "removeClass", "setType", "bind", "unbind" ],
                
                getters = ["getLabel", "getOverlay", "isHover", "getParameter", "getParameters", "getPaintStyle",
                           "getHoverPaintStyle", "isVisible", "hasType", "getType", "isSuspendEvents" ],
                i, ii;
            
            for (i = 0, ii = setters.length; i < ii; i++)
                out[setters[i]] = setter(list, setters[i], executor);
            
            for (i = 0, ii = getters.length; i < ii; i++)
                out[getters[i]] = getter(list, getters[i]);       
            
            return out;
		};
		
		var	_makeConnectionSelectHandler = function(list) {
			var common = _makeCommonSelectHandler(list, _makeConnectionSelectHandler);
			return jsPlumb.CurrentLibrary.extend(common, {
				// setters									
				setDetachable:setter(list, "setDetachable", _makeConnectionSelectHandler),
				setReattach:setter(list, "setReattach", _makeConnectionSelectHandler),
				setConnector:setter(list, "setConnector", _makeConnectionSelectHandler),			
				detach:function() {
					for (var i = 0, ii = list.length; i < ii; i++)
						_currentInstance.detach(list[i]);
				},				
				// getters
				isDetachable:getter(list, "isDetachable"),
				isReattach:getter(list, "isReattach")
			});
		};
		
		var	_makeEndpointSelectHandler = function(list) {
			var common = _makeCommonSelectHandler(list, _makeEndpointSelectHandler);
			return jsPlumb.CurrentLibrary.extend(common, {
				setEnabled:setter(list, "setEnabled", _makeEndpointSelectHandler),				
				setAnchor:setter(list, "setAnchor", _makeEndpointSelectHandler),
				isEnabled:getter(list, "isEnabled"),
				detachAll:function() {
					for (var i = 0, ii = list.length; i < ii; i++)
						list[i].detachAll();
				},
				"remove":function() {
					for (var i = 0, ii = list.length; i < ii; i++)
						_currentInstance.deleteObject({endpoint:list[i]});
				}
			});
		};
			

		this.select = function(params) {
			params = params || {};
			params.scope = params.scope || "*";
			return _makeConnectionSelectHandler(params.connections || _currentInstance.getConnections(params, true));							
		};		

		this.selectEndpoints = function(params) {
			params = params || {};
			params.scope = params.scope || "*";
			var noElementFilters = !params.element && !params.source && !params.target,			
				elements = noElementFilters ? "*" : prepareList(params.element),
				sources = noElementFilters ? "*" : prepareList(params.source),
				targets = noElementFilters ? "*" : prepareList(params.target),
				scopes = prepareList(params.scope, true);
			
			var ep = [];
			
			for (var el in endpointsByElement) {
				var either = filterList(elements, el, true),
					source = filterList(sources, el, true),
					sourceMatchExact = sources != "*",
					target = filterList(targets, el, true),
					targetMatchExact = targets != "*"; 
					
				// if they requested 'either' then just match scope. otherwise if they requested 'source' (not as a wildcard) then we have to match only endpoints that have isSource set to to true, and the same thing with isTarget.  
				if ( either || source  || target ) {
					inner:
					for (var i = 0, ii = endpointsByElement[el].length; i < ii; i++) {
						var _ep = endpointsByElement[el][i];
						if (filterList(scopes, _ep.scope, true)) {
						
							var noMatchSource = (sourceMatchExact && sources.length > 0 && !_ep.isSource),
								noMatchTarget = (targetMatchExact && targets.length > 0 && !_ep.isTarget);
						
							if (noMatchSource || noMatchTarget)								  
								  continue inner; 
							 							
							ep.push(_ep);		
						}
					}
				}					
			}
			
			return _makeEndpointSelectHandler(ep);
		};

		// get all connections managed by the instance of jsplumb.
		this.getAllConnections = function() { return connections; };
		this.getDefaultScope = function() { return DEFAULT_SCOPE; };
		// get an endpoint by uuid.
		this.getEndpoint = _getEndpoint;				
		// get endpoints for some element.
		this.getEndpoints = function(el) { return endpointsByElement[_info(el).id]; };		
		// gets the default endpoint type. used when subclassing. see wiki.
		this.getDefaultEndpointType = function() { return jsPlumb.Endpoint; };		
		// gets the default connection type. used when subclassing.  see wiki.
		this.getDefaultConnectionType = function() { return jsPlumb.Connection; };
		/*
		 * Gets an element's id, creating one if necessary. really only exposed
		 * for the lib-specific functionality to access; would be better to pass
		 * the current instance into the lib-specific code (even though this is
		 * a static call. i just don't want to expose it to the public API).
		 */
		this.getId = _getId;
		this.getOffset = function(id) { 
			var o = offsets[id]; 
			return _updateOffset({elId:id});
		};

		this.getSelector = function() {
			return jsPlumb.CurrentLibrary.getSelector.apply(null, arguments);
		};
		
		// get the size of the element with the given id, perhaps from cache.
		this.getSize = function(id) { 
			var s = sizes[id]; 
			if (!s) _updateOffset({elId:id});
			return sizes[id];
		};		
		
		this.appendElement = _appendElement;
		
		var _hoverSuspended = false;
		this.isHoverSuspended = function() { return _hoverSuspended; };
		this.setHoverSuspended = function(s) { _hoverSuspended = s; };

		var _isAvailable = function(m) {
			return function() {
				return jsPlumbAdapter.isRenderModeAvailable(m);
			};
		};
		this.isCanvasAvailable = _isAvailable("canvas");
		this.isSVGAvailable = _isAvailable("svg");
		this.isVMLAvailable = _isAvailable("vml");

		// set an element's connections to be hidden
		this.hide = function(el, changeEndpoints) {
			_setVisible(el, "none", changeEndpoints);
			return _currentInstance;
		};
		
		// exposed for other objects to use to get a unique id.
		this.idstamp = _idstamp;

		this.connectorsInitialized = false;
		var connectorTypes = [], rendererTypes = ["canvas", "svg", "vml"];
		this.registerConnectorType = function(connector, name) {
			connectorTypes.push([connector, name]);
		};
		
		/**
		 * callback from the current library to tell us to prepare ourselves (attach
		 * mouse listeners etc; can't do that until the library has provided a bind method)		 
		 */
		this.init = function() {
			var _oneType = function(renderer, name, fn) {
				jsPlumb.Connectors[renderer][name] = function() {
					fn.apply(this, arguments);
					jsPlumb.ConnectorRenderers[renderer].apply(this, arguments);		
				};
				jsPlumbUtil.extend(jsPlumb.Connectors[renderer][name], [ fn, jsPlumb.ConnectorRenderers[renderer]]);
			};

			if (!jsPlumb.connectorsInitialized) {
				for (var i = 0; i < connectorTypes.length; i++) {
					for (var j = 0; j < rendererTypes.length; j++) {
						_oneType(rendererTypes[j], connectorTypes[i][1], connectorTypes[i][0]);												
					}

				}
				jsPlumb.connectorsInitialized = true;
			}
			
			if (!initialized) {                
                _currentInstance.anchorManager = new jsPlumb.AnchorManager({jsPlumbInstance:_currentInstance});                
				_currentInstance.setRenderMode(_currentInstance.Defaults.RenderMode);  // calling the method forces the capability logic to be run.														
				initialized = true;
				_currentInstance.fire("ready", _currentInstance);
			}
		}.bind(this);		
		
		this.log = log;
		this.jsPlumbUIComponent = jsPlumbUIComponent;		

		/*
		 * Creates an anchor with the given params.
		 * 
		 * 
		 * Returns: The newly created Anchor.
		 * Throws: an error if a named anchor was not found.
		 */
		this.makeAnchor = function() {
			var pp, _a = function(t, p) {
				if (jsPlumb.Anchors[t]) return new jsPlumb.Anchors[t](p);
				if (!_currentInstance.Defaults.DoNotThrowErrors)
					throw { msg:"jsPlumb: unknown anchor type '" + t + "'" };
			};
			if (arguments.length === 0) return null;
			var specimen = arguments[0], elementId = arguments[1], jsPlumbInstance = arguments[2], newAnchor = null;			
			// if it appears to be an anchor already...
			if (specimen.compute && specimen.getOrientation) return specimen;  //TODO hazy here about whether it should be added or is already added somehow.
			// is it the name of an anchor type?
			else if (typeof specimen == "string") {
				newAnchor = _a(arguments[0], {elementId:elementId, jsPlumbInstance:_currentInstance});
			}
			// is it an array? it will be one of:
			// 		an array of [spec, params] - this defines a single anchor, which may be dynamic, but has parameters.
			//		an array of arrays - this defines some dynamic anchors
			//		an array of numbers - this defines a single anchor.				
			else if (_ju.isArray(specimen)) {
				if (_ju.isArray(specimen[0]) || _ju.isString(specimen[0])) {
					// if [spec, params] format
					if (specimen.length == 2 && _ju.isObject(specimen[1])) {
						// if first arg is a string, its a named anchor with params
						if (_ju.isString(specimen[0])) {
							pp = jsPlumb.extend({elementId:elementId, jsPlumbInstance:_currentInstance}, specimen[1]);
							newAnchor = _a(specimen[0], pp);
						}
						// otherwise first arg is array, second is params. we treat as a dynamic anchor, which is fine
						// even if the first arg has only one entry. you could argue all anchors should be implicitly dynamic in fact.
						else {
							pp = jsPlumb.extend({elementId:elementId, jsPlumbInstance:_currentInstance, anchors:specimen[0]}, specimen[1]);
							newAnchor = new jsPlumb.DynamicAnchor(pp);
						}
					}
					else
						newAnchor = new jsPlumb.DynamicAnchor({anchors:specimen, selector:null, elementId:elementId, jsPlumbInstance:jsPlumbInstance});

				}
				else {
					var anchorParams = {
						x:specimen[0], y:specimen[1],
						orientation : (specimen.length >= 4) ? [ specimen[2], specimen[3] ] : [0,0],
						offsets : (specimen.length >= 6) ? [ specimen[4], specimen[5] ] : [ 0, 0 ],
						elementId:elementId,
                        jsPlumbInstance:jsPlumbInstance,
                        cssClass:specimen.length == 7 ? specimen[6] : null
					};						
					newAnchor = new jsPlumb.Anchor(anchorParams);
					newAnchor.clone = function() { return new jsPlumb.Anchor(anchorParams); };						 					
				}
			}
			
			if (!newAnchor.id) newAnchor.id = "anchor_" + _idstamp();
			return newAnchor;
		};

		/**
		 * makes a list of anchors from the given list of types or coords, eg
		 * ["TopCenter", "RightMiddle", "BottomCenter", [0, 1, -1, -1] ]
		 */
		this.makeAnchors = function(types, elementId, jsPlumbInstance) {
			var r = [];
			for ( var i = 0, ii = types.length; i < ii; i++) {
				if (typeof types[i] == "string")
					r.push(jsPlumb.Anchors[types[i]]({elementId:elementId, jsPlumbInstance:jsPlumbInstance}));
				else if (_ju.isArray(types[i]))
					r.push(_currentInstance.makeAnchor(types[i], elementId, jsPlumbInstance));
			}
			return r;
		};

		/**
		 * Makes a dynamic anchor from the given list of anchors (which may be in shorthand notation as strings or dimension arrays, or Anchor
		 * objects themselves) and the given, optional, anchorSelector function (jsPlumb uses a default if this is not provided; most people will
		 * not need to provide this - i think). 
		 */
		this.makeDynamicAnchor = function(anchors, anchorSelector) {
			return new jsPlumb.DynamicAnchor({anchors:anchors, selector:anchorSelector, elementId:null, jsPlumbInstance:_currentInstance});
		};
		
// --------------------- makeSource/makeTarget ---------------------------------------------- 
		
		var _targetEndpointDefinitions = {},
			_targetEndpoints = {},
			_targetEndpointsUnique = {},
			_targetMaxConnections = {},
			_setEndpointPaintStylesAndAnchor = function(ep, epIndex) {
				ep.paintStyle = ep.paintStyle ||
				 				_currentInstance.Defaults.EndpointStyles[epIndex] ||
	                            _currentInstance.Defaults.EndpointStyle ||
	                            jsPlumb.Defaults.EndpointStyles[epIndex] ||
	                            jsPlumb.Defaults.EndpointStyle;
				ep.hoverPaintStyle = ep.hoverPaintStyle ||
	                           _currentInstance.Defaults.EndpointHoverStyles[epIndex] ||
	                           _currentInstance.Defaults.EndpointHoverStyle ||
	                           jsPlumb.Defaults.EndpointHoverStyles[epIndex] ||
	                           jsPlumb.Defaults.EndpointHoverStyle;                            

				ep.anchor = ep.anchor ||
	                      	_currentInstance.Defaults.Anchors[epIndex] ||
	                      	_currentInstance.Defaults.Anchor ||
	                      	jsPlumb.Defaults.Anchors[epIndex] ||
	                      	jsPlumb.Defaults.Anchor;                           
					
				ep.endpoint = ep.endpoint ||
							  _currentInstance.Defaults.Endpoints[epIndex] ||
							  _currentInstance.Defaults.Endpoint ||
							  jsPlumb.Defaults.Endpoints[epIndex] ||
							  jsPlumb.Defaults.Endpoint;
			},
			// TODO put all the source stuff inside one parent, keyed by id.
			_sourceEndpointDefinitions = {},
			_sourceEndpoints = {},
			_sourceEndpointsUnique = {},
			_sourcesEnabled = {},
			_sourceTriggers = {},
			_sourceMaxConnections = {},
			_targetsEnabled = {},
			selectorFilter = function(evt, _el, selector) {	            
                var t = evt.target || evt.srcElement, ok = false, 
                    sel = _currentInstance.getSelector(_el, selector);
                for (var j = 0; j < sel.length; j++) {
                    if (sel[j] == t) {
                        ok = true;
                        break;
                    }
                }
                return ok;	            
	        };

		// see API docs
		this.makeTarget = function(el, params, referenceParams) {						
			
			// put jsplumb ref into params without altering the params passed in
			var p = jsPlumb.extend({_jsPlumb:_currentInstance}, referenceParams);
			jsPlumb.extend(p, params);

			// calculate appropriate paint styles and anchor from the params given			
			_setEndpointPaintStylesAndAnchor(p, 1);                               

			var jpcl = jsPlumb.CurrentLibrary,
			    targetScope = p.scope || _currentInstance.Defaults.Scope,
			    deleteEndpointsOnDetach = !(p.deleteEndpointsOnDetach === false),
			    maxConnections = p.maxConnections || -1,
				onMaxConnections = p.onMaxConnections,

				_doOne = function(el) {
					
					// get the element's id and store the endpoint definition for it.  jsPlumb.connect calls will look for one of these,
					// and use the endpoint definition if found.
					// decode the info for this element (id and element)
					var elInfo = _info(el), 
						elid = elInfo.id,
						proxyComponent = new jsPlumbUIComponent(p),
						dropOptions = jsPlumb.extend({}, p.dropOptions || {});

					// store the definitions keyed against the element id.
					_targetEndpointDefinitions[elid] = p;
					_targetEndpointsUnique[elid] = p.uniqueEndpoint;
					_targetMaxConnections[elid] = maxConnections;
					_targetsEnabled[elid] = true;				

					var _drop = function() {
						_currentInstance.currentlyDragging = false;
						var originalEvent = jsPlumb.CurrentLibrary.getDropEvent(arguments),
							targetCount = _currentInstance.select({target:elid}).length,
							draggable = _gel(jpcl.getDragObject(arguments)),
							id = _currentInstance.getAttribute(draggable, "dragId"),										
							scope = _currentInstance.getAttribute(draggable, "originalScope"),
							jpc = floatingConnections[id],
							idx = jpc.endpoints[0].isFloating() ? 0 : 1,
							// this is not necessarily correct. if the source is being dragged,
							// then the source endpoint is actually the currently suspended endpoint.
							source = jpc.endpoints[0],
							_endpoint = p.endpoint ? jsPlumb.extend({}, p.endpoint) : {};					
							
						if (!_targetsEnabled[elid] || _targetMaxConnections[elid] > 0 && targetCount >= _targetMaxConnections[elid]){
							if (onMaxConnections) {
								// TODO here we still have the id of the floating element, not the
								// actual target.
								onMaxConnections({
									element:elInfo.el,
									connection:jpc
								}, originalEvent);
							}
							return false;
						}

						// unlock the source anchor to allow it to refresh its position if necessary
						source.anchor.locked = false;					
											
						// restore the original scope if necessary (issue 57)
						if (scope) jpcl.setDragScope(draggable, scope);		

						// if no suspendedEndpoint and not pending, it is likely there was a drop on two 
						// elements that are on top of each other. abort.
						if (jpc.suspendedEndpoint == null && !jpc.pending)
							return false;		
						
						// check if drop is allowed here.					
						// if the source is being dragged then in fact
						// the source and target ids to pass into the drop interceptor are
						// source - elid
						// target - jpc's targetId
						// 
						// otherwise the ids are
						// source - jpc.sourceId
						// target - elid
						//
						var _continue = proxyComponent.isDropAllowed(idx === 0 ? elid : jpc.sourceId, idx === 0 ? jpc.targetId : elid, jpc.scope, jpc, null);							

						// reinstate any suspended endpoint; this just puts the connection back into
						// a state in which it will report sensible values if someone asks it about
						// its target.  we're going to throw this connection away shortly so it doesnt matter
						// if we manipulate it a bit.
						if (jpc.suspendedEndpoint) {
							jpc[idx ? "targetId" : "sourceId"] = jpc.suspendedEndpoint.elementId;
							jpc[idx ? "target" : "source"] = jpc.suspendedEndpoint.element;
							jpc.endpoints[idx] = jpc.suspendedEndpoint;
						}																										
						
						if (_continue) {
																	
							// make a new Endpoint for the target, or get it from the cache if uniqueEndpoint
                            // is set.
							var _el = jpcl.getElementObject(elInfo.el),
								newEndpoint = _targetEndpoints[elid];

                            // if no cached endpoint, or there was one but it has been cleaned up
                            // (ie. detached), then create a new one.
                            if (newEndpoint == null || newEndpoint._jsPlumb == null)
                                newEndpoint = _currentInstance.addEndpoint(_el, p);

							if (p.uniqueEndpoint) _targetEndpoints[elid] = newEndpoint;  // may of course just store what it just pulled out. that's ok.
							// TODO test options to makeTarget to see if we should do this?
							newEndpoint._doNotDeleteOnDetach = false; // reset.
							newEndpoint._deleteOnDetach = true;
																	
							// if the anchor has a 'positionFinder' set, then delegate to that function to find
							// out where to locate the anchor.
							if (newEndpoint.anchor.positionFinder != null) {
								var dropPosition = jpcl.getUIPosition(arguments, _currentInstance.getZoom()),
								elPosition = _getOffset(_el, _currentInstance),
								elSize = _getSize(_el),
								ap = newEndpoint.anchor.positionFinder(dropPosition, elPosition, elSize, newEndpoint.anchor.constructorParams);
								newEndpoint.anchor.x = ap[0];
								newEndpoint.anchor.y = ap[1];
								// now figure an orientation for it..kind of hard to know what to do actually. probably the best thing i can do is to
								// support specifying an orientation in the anchor's spec. if one is not supplied then i will make the orientation 
								// be what will cause the most natural link to the source: it will be pointing at the source, but it needs to be
								// specified in one axis only, and so how to make that choice? i think i will use whichever axis is the one in which
								// the target is furthest away from the source.
							}
							
							// change the target endpoint and target element information. really this should be 
							// done on a method on connection
							jpc[idx ? "target" : "source"] = newEndpoint.element;
							jpc[idx ? "targetId" : "sourceId"] = newEndpoint.elementId;
							jpc.endpoints[idx].detachFromConnection(jpc);
							if (jpc.endpoints[idx]._deleteOnDetach)
								jpc.endpoints[idx].deleteAfterDragStop = true; // tell this endpoint to delet itself after drag stop.
							// set new endpoint, and configure the settings for endpoints to delete on detach
							newEndpoint.addConnection(jpc);
							jpc.endpoints[idx] = newEndpoint;
							jpc.deleteEndpointsOnDetach = deleteEndpointsOnDetach;						

							// inform the anchor manager to update its target endpoint for this connection.
							// TODO refactor to make this a single method.
							if (idx == 1)
								_currentInstance.anchorManager.updateOtherEndpoint(jpc.sourceId, jpc.suspendedElementId, jpc.targetId, jpc);
							else
								_currentInstance.anchorManager.sourceChanged(jpc.suspendedEndpoint.elementId, jpc.sourceId, jpc);

							_finaliseConnection(jpc, null, originalEvent);
							jpc.pending = false;

						}				
						// if not allowed to drop...
						else {
							// TODO this code is identical (pretty much) to what happens when a connection
							// dragged from a normal endpoint is in this situation. refactor.
							// is this an existing connection, and will we reattach?
							// TODO also this assumes the source needs to detach - is that always valid?
							if (jpc.suspendedEndpoint) {							
								if (jpc.isReattach()) {
									jpc.setHover(false);
									jpc.floatingAnchorIndex = null;
									jpc.suspendedEndpoint.addConnection(jpc);
									_currentInstance.repaint(source.elementId);
								}
								else
									source.detach(jpc, false, true, true, originalEvent);  // otherwise, detach the connection and tell everyone about it.
							}
							
						}														
					};
					
					// wrap drop events as needed and initialise droppable
					var dropEvent = jpcl.dragEvents.drop;
					dropOptions.scope = dropOptions.scope || targetScope;
					dropOptions[dropEvent] = _ju.wrap(dropOptions[dropEvent], _drop);				
					jpcl.initDroppable(_gel(elInfo.el), dropOptions, true);
				};
			
			// YUI collection fix
			el = _convertYUICollection(el);			
			// make an array if only given one element
			var inputs = el.length && el.constructor != String ? el : [ el ];
						
			// register each one in the list.
			for (var i = 0, ii = inputs.length; i < ii; i++) {							
				_doOne(inputs[i]);
			}

			return _currentInstance;
		};

		// see api docs
		this.unmakeTarget = function(el, doNotClearArrays) {
			var info = _info(el);

			jsPlumb.CurrentLibrary.destroyDroppable(info.el);
			// TODO this is not an exhaustive unmake of a target, since it does not remove the droppable stuff from
			// the element.  the effect will be to prevent it from behaving as a target, but it's not completely purged.
			if (!doNotClearArrays) {
				delete _targetEndpointDefinitions[info.id];
				delete _targetEndpointsUnique[info.id];
				delete _targetMaxConnections[info.id];
				delete _targetsEnabled[info.id];                
			}

			return _currentInstance;
		};						

	    // see api docs
		this.makeSource = function(el, params, referenceParams) {
			var p = jsPlumb.extend({}, referenceParams);
			jsPlumb.extend(p, params);
			_setEndpointPaintStylesAndAnchor(p, 0);   
			var jpcl = jsPlumb.CurrentLibrary,
				maxConnections = p.maxConnections || -1,
				onMaxConnections = p.onMaxConnections,
				_doOne = function(elInfo) {
					// get the element's id and store the endpoint definition for it.  jsPlumb.connect calls will look for one of these,
					// and use the endpoint definition if found.
					var elid = elInfo.id,
						_el = _gel(elInfo.el),
						parentElement = function() {
							return p.parent == null ? null : p.parent === "parent" ? elInfo.el.parentNode : _dom(p.parent);
						},
						idToRegisterAgainst = p.parent != null ? _currentInstance.getId(parentElement()) : elid;
					
					_sourceEndpointDefinitions[idToRegisterAgainst] = p;
					_sourceEndpointsUnique[idToRegisterAgainst] = p.uniqueEndpoint;
					_sourcesEnabled[idToRegisterAgainst] = true;

					var stopEvent = jpcl.dragEvents.stop,
						dragEvent = jpcl.dragEvents.drag,
						dragOptions = jsPlumb.extend({ }, p.dragOptions || {}),
						existingDrag = dragOptions.drag,
						existingStop = dragOptions.stop,
						ep = null,
						endpointAddedButNoDragYet = false;
				
					_sourceMaxConnections[idToRegisterAgainst] = maxConnections;	

					// set scope if its not set in dragOptions but was passed in in params
					dragOptions.scope = dragOptions.scope || p.scope;

					dragOptions[dragEvent] = _ju.wrap(dragOptions[dragEvent], function() {
						if (existingDrag) existingDrag.apply(this, arguments);
						endpointAddedButNoDragYet = false;
					});
					
					dragOptions[stopEvent] = _ju.wrap(dragOptions[stopEvent], function() { 

						if (existingStop) existingStop.apply(this, arguments);								
	                    _currentInstance.currentlyDragging = false;						
						if (ep._jsPlumb != null) { // if not cleaned up...

							jpcl.unbind(ep.canvas, "mousedown"); 
									
							// reset the anchor to the anchor that was initially provided. the one we were using to drag
							// the connection was just a placeholder that was located at the place the user pressed the
							// mouse button to initiate the drag.
							var anchorDef = p.anchor || _currentInstance.Defaults.Anchor,
								oldAnchor = ep.anchor,
								oldConnection = ep.connections[0],
								newAnchor = _currentInstance.makeAnchor(anchorDef, elid, _currentInstance),
								_el = ep.element;

							// if the anchor has a 'positionFinder' set, then delegate to that function to find
							// out where to locate the anchor. issue 117.
							if (newAnchor.positionFinder != null) {
								var elPosition = _getOffset(_el, _currentInstance),
									elSize = _getSize(_el),
									dropPosition = { left:elPosition.left + (oldAnchor.x * elSize[0]), top:elPosition.top + (oldAnchor.y * elSize[1]) },
									ap = newAnchor.positionFinder(dropPosition, elPosition, elSize, newAnchor.constructorParams);

								newAnchor.x = ap[0];
								newAnchor.y = ap[1];
							}

							ep.setAnchor(newAnchor, true);																							
							
							if (p.parent) {						
								var parent = parentElement();
								if (parent) {	
									var potentialParent = p.container || _currentInstance.Defaults.Container || jsPlumb.Defaults.Container;
									ep.setElement(parent, potentialParent);
								}
							}						
							
							ep.repaint();			
							_currentInstance.repaint(ep.elementId);																		
							_currentInstance.repaint(oldConnection.targetId);
						}				
					});
					// when the user presses the mouse, add an Endpoint, if we are enabled.
					var mouseDownListener = function(e) {

						// if disabled, return.
						if (!_sourcesEnabled[idToRegisterAgainst]) return;
	                    
	                    // if a filter was given, run it, and return if it says no.
						if (p.filter) {
							var evt = jpcl.getOriginalEvent(e),
								r = jsPlumbUtil.isString(p.filter) ? selectorFilter(evt, _el, p.filter) : p.filter(evt, _el);
							
							if (r === false) return;
						}
						
						// if maxConnections reached
						var sourceCount = _currentInstance.select({source:idToRegisterAgainst}).length;
						if (_sourceMaxConnections[idToRegisterAgainst] >= 0 && sourceCount >= _sourceMaxConnections[idToRegisterAgainst]) {
							if (onMaxConnections) {
								onMaxConnections({
									element:_el,
									maxConnections:maxConnections
								}, e);
							}
							return false;
						}					

						// make sure we have the latest offset for this div 
						var myOffsetInfo = _updateOffset({elId:elid}).o,
							z = _currentInstance.getZoom(),		
							x = ( ((e.pageX || e.page.x) / z) - myOffsetInfo.left) / myOffsetInfo.width, 
						    y = ( ((e.pageY || e.page.y) / z) - myOffsetInfo.top) / myOffsetInfo.height,
						    parentX = x, 
						    parentY = y;					
								
						// if there is a parent, the endpoint will actually be added to it now, rather than the div
						// that was the source.  in that case, we have to adjust the anchor position so it refers to
						// the parent.
						if (p.parent) {
							var pEl = parentElement(), pId = _getId(pEl);
							myOffsetInfo = _updateOffset({elId:pId}).o;
							parentX = ((e.pageX || e.page.x) - myOffsetInfo.left) / myOffsetInfo.width; 
						    parentY = ((e.pageY || e.page.y) - myOffsetInfo.top) / myOffsetInfo.height;
						}											
						
						// we need to override the anchor in here, and force 'isSource', but we don't want to mess with
						// the params passed in, because after a connection is established we're going to reset the endpoint
						// to have the anchor we were given.
						var tempEndpointParams = {};
						jsPlumb.extend(tempEndpointParams, p);
						tempEndpointParams.isSource = true;
						tempEndpointParams.anchor = [x,y,0,0];
						tempEndpointParams.parentAnchor = [ parentX, parentY, 0, 0 ];
						tempEndpointParams.dragOptions = dragOptions;
						// if a parent was given we need to turn that into a "container" argument.  this is, by default,
						// the parent of the element we will move to, so parent of p.parent in this case.  however, if
						// the user has specified a 'container' on the endpoint definition or on 
						// the defaults, we should use that.
						if (p.parent) {
							var potentialParent = tempEndpointParams.container || _currentInstance.Defaults.Container || jsPlumb.Defaults.Container;
							if (potentialParent)
								tempEndpointParams.container = potentialParent;
							else
								tempEndpointParams.container = jsPlumb.CurrentLibrary.getParent(parentElement());
						}
						
						ep = _currentInstance.addEndpoint(elid, tempEndpointParams);

						endpointAddedButNoDragYet = true;
						// we set this to prevent connections from firing attach events before this function has had a chance
						// to move the endpoint.
						ep.endpointWillMoveAfterConnection = p.parent != null;
						ep.endpointWillMoveTo = p.parent ? parentElement() : null;

						// TODO test options to makeSource to see if we should do this?
						ep._doNotDeleteOnDetach = false; // reset.
						ep._deleteOnDetach = true;

	                    var _delTempEndpoint = function() {
							// this mouseup event is fired only if no dragging occurred, by jquery and yui, but for mootools
							// it is fired even if dragging has occurred, in which case we would blow away a perfectly
							// legitimate endpoint, were it not for this check.  the flag is set after adding an
							// endpoint and cleared in a drag listener we set in the dragOptions above.
							if(endpointAddedButNoDragYet) {
								 endpointAddedButNoDragYet = false;
								_currentInstance.deleteEndpoint(ep);
	                        }
						};

						_currentInstance.registerListener(ep.canvas, "mouseup", _delTempEndpoint);
	                    _currentInstance.registerListener(_el, "mouseup", _delTempEndpoint);
						
						// and then trigger its mousedown event, which will kick off a drag, which will start dragging
						// a new connection from this endpoint.
						jpcl.trigger(ep.canvas, "mousedown", e);
						
					};
	               
	                // register this on jsPlumb so that it can be cleared by a reset.
	                _currentInstance.registerListener(_el, "mousedown", mouseDownListener);
	                _sourceTriggers[elid] = mouseDownListener;

	                // lastly, if a filter was provided, set it as a dragFilter on the element,
	                // to prevent the element drag function from kicking in when we want to
	                // drag a new connection
	                if (p.filter && jsPlumbUtil.isString(p.filter)) {
	                	jpcl.setDragFilter(_el, p.filter);
	                }
				};
			
			el = _convertYUICollection(el);			
			
			var inputs = el.length && el.constructor != String ? el : [ el ];
						
			for (var i = 0, ii = inputs.length; i < ii; i++) {			
				_doOne(_info(inputs[i]));
			}

			return _currentInstance;
		};
	
		// see api docs		
		this.unmakeSource = function(el, doNotClearArrays) {
			var info = _info(el),
				mouseDownListener = _sourceTriggers[info.id];
			
			if (mouseDownListener) 
				_currentInstance.unregisterListener(info.el, "mousedown", mouseDownListener);

			if (!doNotClearArrays) {
				delete _sourceEndpointDefinitions[info.id];
				delete _sourceEndpointsUnique[info.id];
				delete _sourcesEnabled[info.id];
				delete _sourceTriggers[info.id];
				delete _sourceMaxConnections[info.id];
			}

			return _currentInstance;
		};

		// see api docs
		this.unmakeEverySource = function() {
			for (var i in _sourcesEnabled)
				_currentInstance.unmakeSource(i, true);

			_sourceEndpointDefinitions = {};
			_sourceEndpointsUnique = {};
			_sourcesEnabled = {};
			_sourceTriggers = {};
		};
		
		// see api docs
		this.unmakeEveryTarget = function() {
			for (var i in _targetsEnabled)
				_currentInstance.unmakeTarget(i, true);
			
			_targetEndpointDefinitions = {};
			_targetEndpointsUnique = {};
			_targetMaxConnections = {};
			_targetsEnabled = {};

			return _currentInstance;
		};			

		// does the work of setting a source enabled or disabled.
		var _setEnabled = function(type, el, state, toggle) {
			var a = type == "source" ? _sourcesEnabled : _targetsEnabled;									
			el = _convertYUICollection(el);

			if (_ju.isString(el)) a[el] = toggle ? !a[el] : state;
			else if (el.length) {				
				for (var i = 0, ii = el.length; i < ii; i++) {
					var info = _info(el[i]);
					a[info.id] = toggle ? !a[info.id] : state;
				}
			}	
			return _currentInstance;
		};

		this.toggleSourceEnabled = function(el) {
			_setEnabled("source", el, null, true);	
			return _currentInstance.isSourceEnabled(el);
		};

		this.setSourceEnabled = function(el, state) { return _setEnabled("source", el, state); };
		this.isSource = function(el) { return _sourcesEnabled[_info(el).id] != null; };		
		this.isSourceEnabled = function(el) { return _sourcesEnabled[_info(el).id] === true; };

		this.toggleTargetEnabled = function(el) {
			_setEnabled("target", el, null, true);	
			return _currentInstance.isTargetEnabled(el);
		};
		
		this.isTarget = function(el) { return _targetsEnabled[_info(el).id] != null; };		
		this.isTargetEnabled = function(el) { return _targetsEnabled[_info(el).id] === true; };
		this.setTargetEnabled = function(el, state) { return _setEnabled("target", el, state); };

// --------------------- end makeSource/makeTarget ---------------------------------------------- 				
				
		this.ready = function(fn) {
			_currentInstance.bind("ready", fn);
		};

		// repaint some element's endpoints and connections
		this.repaint = function(el, ui, timestamp) {
			// support both lists...
			if (typeof el == 'object' && el.length)
				for ( var i = 0, ii = el.length; i < ii; i++) {			
					_draw(el[i], ui, timestamp);
				}
			else // ...and single strings.								
				_draw(el, ui, timestamp);
				
			return _currentInstance;
		};

		// repaint every endpoint and connection.
		this.repaintEverything = function(clearEdits) {	
			// TODO this timestamp causes continuous anchors to not repaint properly.
			// fix this. do not just take out the timestamp. it runs a lot faster with 
			// the timestamp included.
			//var timestamp = null;
			var timestamp = _timestamp();
			for ( var elId in endpointsByElement) {
				_draw(elId, null, timestamp, clearEdits);				
			}
			return _currentInstance;
		};

		
		this.removeAllEndpoints = function(el, recurse) {
            var _one = function(_el) {                            	
                var info = _info(_el),
                    ebe = endpointsByElement[info.id],
                    i, ii;

                if (ebe) {
                    for ( i = 0, ii = ebe.length; i < ii; i++) 
                        _currentInstance.deleteEndpoint(ebe[i]);
                }
                delete endpointsByElement[info.id];
                
                if (recurse) {
                    if (info.el && info.el.nodeType != 3 && info.el.nodeType != 8 ) {
                        for ( i = 0, ii = info.el.childNodes.length; i < ii; i++) {
                            _one(info.el.childNodes[i]);
                        }
                    }
                }
                
            };
            _one(el);
			return _currentInstance;
		};
                    
        /**
        * Remove the given element, including cleaning up all endpoints registered for it.
        * This is exposed in the public API but also used internally by jsPlumb when removing the
        * element associated with a connection drag.
        */
        this.remove = function(el, doNotRepaint) {
        	var info = _info(el);        	
            _currentInstance.doWhileSuspended(function() {
            	_currentInstance.removeAllEndpoints(info.id, true);
            	_currentInstance.dragManager.elementRemoved(info.id);
            	delete floatingConnections[info.id];     
            	_currentInstance.anchorManager.clearFor(info.id);						
            	_currentInstance.anchorManager.removeFloatingConnection(info.id);
            }, doNotRepaint === false);
            if(info.el) jsPlumb.CurrentLibrary.removeElement(info.el);
        };

		var _registeredListeners = {},
			_unbindRegisteredListeners = function() {
				for (var i in _registeredListeners) {
					for (var j = 0, jj = _registeredListeners[i].length; j < jj; j++) {
						var info = _registeredListeners[i][j];
						jsPlumb.CurrentLibrary.unbind(info.el, info.event, info.listener);
					}
				}
				_registeredListeners = {};
			};

        // internal register listener method.  gives us a hook to clean things up
        // with if the user calls jsPlumb.reset.
        this.registerListener = function(el, type, listener) {
            jsPlumb.CurrentLibrary.bind(el, type, listener);
            jsPlumbUtil.addToList(_registeredListeners, type, {el:el, event:type, listener:listener});
        };

        this.unregisterListener = function(el, type, listener) {
        	jsPlumb.CurrentLibrary.unbind(el, type, listener);
        	jsPlumbUtil.removeWithFunction(_registeredListeners, function(rl) {
        		return rl.type == type && rl.listener == listener;
        	});
        };
		
		this.reset = function() {			
			_currentInstance.deleteEveryEndpoint();
			_currentInstance.unbind();
			_targetEndpointDefinitions = {};
			_targetEndpoints = {};
			_targetEndpointsUnique = {};
			_targetMaxConnections = {};
			_sourceEndpointDefinitions = {};
			_sourceEndpoints = {};
			_sourceEndpointsUnique = {};
			_sourceMaxConnections = {};
			connections.splice(0);
			_unbindRegisteredListeners();
			_currentInstance.anchorManager.reset();
			if (!jsPlumbAdapter.headless)
				_currentInstance.dragManager.reset();
		};
		

		this.setDefaultScope = function(scope) {
			DEFAULT_SCOPE = scope;
			return _currentInstance;
		};

		// sets whether or not some element should be currently draggable.
		this.setDraggable = _setDraggable;

		// sets the id of some element, changing whatever we need to to keep track.
		this.setId = function(el, newId, doNotSetAttribute) {
			// 
			var id;

			if (jsPlumbUtil.isString(el)) {
				id = el;				
			}
			else {
				el = _dom(el);
				id = _currentInstance.getId(el);
			}

			var sConns = _currentInstance.getConnections({source:id, scope:'*'}, true),
				tConns = _currentInstance.getConnections({target:id, scope:'*'}, true);

			newId = "" + newId;

			if (!doNotSetAttribute) {
				el = _dom(id);
				jsPlumbAdapter.setAttribute(el, "id", newId);
			}
			else
				el = _dom(newId);

			endpointsByElement[newId] = endpointsByElement[id] || [];
			for (var i = 0, ii = endpointsByElement[newId].length; i < ii; i++) {
				endpointsByElement[newId][i].setElementId(newId);
				endpointsByElement[newId][i].setReferenceElement(el);
			}
			delete endpointsByElement[id];

			_currentInstance.anchorManager.changeId(id, newId);
			if (!jsPlumbAdapter.headless)		
				_currentInstance.dragManager.changeId(id, newId);

			var _conns = function(list, epIdx, type) {
				for (var i = 0, ii = list.length; i < ii; i++) {
					list[i].endpoints[epIdx].setElementId(newId);
					list[i].endpoints[epIdx].setReferenceElement(el);
					list[i][type + "Id"] = newId;
					list[i][type] = el;
				}
			};
			_conns(sConns, 0, "source");
			_conns(tConns, 1, "target");

			_currentInstance.repaint(newId);
		};		

		this.setDebugLog = function(debugLog) {
			log = debugLog;
		};
			          	
		this.setSuspendDrawing = function(val, repaintAfterwards) {
			var curVal = _suspendDrawing;
		    _suspendDrawing = val;
				if (val) _suspendedAt = new Date().getTime(); else _suspendedAt = null;
		    if (repaintAfterwards) _currentInstance.repaintEverything();
		    return curVal;
		};
        	
        // returns whether or not drawing is currently suspended.		
		this.isSuspendDrawing = function() {
			return _suspendDrawing;
		};
            
        // return timestamp for when drawing was suspended.
        this.getSuspendedAt = function() { return _suspendedAt; };

        /**
        * @doc function
        * @name jsPlumb.class:doWhileSuspended
        * @param {function} fn Function to run while suspended.
        * @param {boolean} doNotRepaintAfterwards If true, jsPlumb won't run a full repaint. Otherwise it will.
        * @description Suspends drawing, runs the given function, then re-enables drawing (and repaints, unless you tell it not to)
        */
        this.doWhileSuspended = function(fn, doNotRepaintAfterwards) {     
        	var _wasSuspended = _currentInstance.isSuspendDrawing();        	
        	if (!_wasSuspended)
				_currentInstance.setSuspendDrawing(true);
			try {
				fn();
			}
			catch (e) {
				_ju.log("Function run while suspended failed", e);
			}			
			if (!_wasSuspended)
				_currentInstance.setSuspendDrawing(false, !doNotRepaintAfterwards);
        };
            
        this.updateOffset = _updateOffset;
        this.getOffset = function(elId) { return offsets[elId]; };
        this.getSize = function(elId) { return sizes[elId]; };            
        this.getCachedData = _getCachedData;
        this.timestamp = _timestamp;
		
		
		
		/**
		 * @doc function
		 * @name jsPlumb.class:setRenderMode
		 * @param {string} mode One of `jsPlumb.SVG, `jsPlumb.VML` or `jsPlumb.CANVAS`.
		 * @description Sets render mode.  jsPlumb will fall back to VML if it determines that
		 * what you asked for is not supported (and that VML is).  If you asked for VML but the browser does
		 * not support it, jsPlumb uses SVG.
		 * @return {string} The render mode that jsPlumb set, which of course may be different from that requested.
		 */
		this.setRenderMode = function(mode) {			
			renderMode = jsPlumbAdapter.setRenderMode(mode);
			var i, ii;
			// only add this if the renderer is canvas; we dont want these listeners registered on te
			// entire document otherwise.
			if (renderMode == jsPlumb.CANVAS) {
				var bindOne = function(event) {
	                jsPlumb.CurrentLibrary.bind(document, event, function(e) {
	                    if (!_currentInstance.currentlyDragging && renderMode == jsPlumb.CANVAS) {
	                        // try connections first
	                        for (i = 0, ii = connections.length; i < ii; i++ ) {
                                var t = connections[i].getConnector()[event](e);
                                if (t) return;	
                            }
	                        for (var el in endpointsByElement) {
	                            var ee = endpointsByElement[el];
	                            for ( i = 0, ii = ee.length; i < ii; i++ ) {
	                                if (ee[i].endpoint[event] && ee[i].endpoint[event](e)) return;
	                            }
	                        }
	                    }
	                });					
				};
				bindOne("click");bindOne("dblclick");bindOne("mousemove");bindOne("mousedown");bindOne("mouseup");bindOne("contextmenu");				
			}

			return renderMode;
		};
		
		/**
		 * @doc function
		 * @name jsPlumb.class:getRenderMode
		 * @description Gets the current render mode for this instance of jsPlumb.
		 * @return {string} The current render mode - "canvas", "svg" or "vml".
		 */
		this.getRenderMode = function() { return renderMode; };
		
		this.show = function(el, changeEndpoints) {
			_setVisible(el, "block", changeEndpoints);
			return _currentInstance;
		};		

		/**
		 * gets some test hooks. nothing writable.
		 */
		this.getTestHarness = function() {
			return {
				endpointsByElement : endpointsByElement,  
				endpointCount : function(elId) {
					var e = endpointsByElement[elId];
					return e ? e.length : 0;
				},
				connectionCount : function(scope) {
					scope = scope || DEFAULT_SCOPE;
					var c = _currentInstance.getConnections({scope:scope});
					return c ? c.length : 0;
				},
				getId : _getId,
				makeAnchor:self.makeAnchor,
				makeDynamicAnchor:self.makeDynamicAnchor
			};
		};
		
		
		// TODO: update this method to return the current state.
		this.toggleVisible = _toggleVisible;
		this.toggleDraggable = _toggleDraggable;						
		this.addListener = this.bind;
		
        /*
            helper method to take an xy location and adjust it for the parent's offset and scroll.
        */
		this.adjustForParentOffsetAndScroll = function(xy, el) {

			var offsetParent = null, result = xy;
			if (el.tagName.toLowerCase() === "svg" && el.parentNode) {
				offsetParent = el.parentNode;
			}
			else if (el.offsetParent) {
				offsetParent = el.offsetParent;					
			}
			if (offsetParent != null) {
				var po = offsetParent.tagName.toLowerCase() === "body" ? {left:0,top:0} : _getOffset(offsetParent, _currentInstance),
					so = offsetParent.tagName.toLowerCase() === "body" ? {left:0,top:0} : {left:offsetParent.scrollLeft, top:offsetParent.scrollTop};					

				// i thought it might be cool to do this:
				//	lastReturnValue[0] = lastReturnValue[0] - offsetParent.offsetLeft + offsetParent.scrollLeft;
				//	lastReturnValue[1] = lastReturnValue[1] - offsetParent.offsetTop + offsetParent.scrollTop;					
				// but i think it ignores margins.  my reasoning was that it's quicker to not hand off to some underlying					
				// library.
				
				result[0] = xy[0] - po.left + so.left;
				result[1] = xy[1] - po.top + so.top;
			}
		
			return result;
			
		};

		if (!jsPlumbAdapter.headless) {
			_currentInstance.dragManager = jsPlumbAdapter.getDragManager(_currentInstance);
			_currentInstance.recalculateOffsets = _currentInstance.dragManager.updateOffsets;
	    }	    
				    
    };

    jsPlumbUtil.extend(jsPlumbInstance, jsPlumbUtil.EventGenerator, {
    	setAttribute : function(el, a, v) {
    		jsPlumbAdapter.setAttribute(el, a, v);
    	},
    	getAttribute : function(el, a) {
    		return jsPlumbAdapter.getAttribute(jsPlumb.CurrentLibrary.getDOMElement(el), a);
    	},    	
    	registerConnectionType : function(id, type) {
    		this._connectionTypes[id] = jsPlumb.extend({}, type);
    	},    	
    	registerConnectionTypes : function(types) {
    		for (var i in types)
    			this._connectionTypes[i] = jsPlumb.extend({}, types[i]);
    	},    	    	
    	registerEndpointType : function(id, type) {
    		this._endpointTypes[id] = jsPlumb.extend({}, type);
    	},    	
    	registerEndpointTypes : function(types) {
    		for (var i in types)
    			this._endpointTypes[i] = jsPlumb.extend({}, types[i]);
    	},    	
    	getType : function(id, typeDescriptor) {
    		return typeDescriptor ===  "connection" ? this._connectionTypes[id] : this._endpointTypes[id];
    	},
    	setIdChanged : function(oldId, newId) {
    		this.setId(oldId, newId, true);
    	},
    	// set parent: change the parent for some node and update all the registrations we need to.
    	setParent : function(el, newParent) {
    		var jpcl = jsPlumb.CurrentLibrary,
    			_el = jpcl.getElementObject(el),
    			_dom = jpcl.getDOMElement(_el),
    			_id = this.getId(_dom),
    			_pel = jpcl.getElementObject(newParent),
    			_pdom = jpcl.getDOMElement(_pel),
    			_pid = this.getId(_pdom);

    		_dom.parentNode.removeChild(_dom);
    		_pdom.appendChild(_dom);
    		this.dragManager.setParent(_el, _id, _pel, _pid);
    	}
    });

// --------------------- static instance + AMD registration -------------------------------------------	
	
// create static instance and assign to window if window exists.	
	var jsPlumb = new jsPlumbInstance();
	// register on window if defined (lets us run on server)
	if (typeof window != 'undefined') window.jsPlumb = jsPlumb;	
	// add 'getInstance' method to static instance
	/**
	* @name jsPlumb.getInstance
	* @param {object} [_defaults] Optional default settings for the new instance.
	* @desc Gets a new instance of jsPlumb.
	*/
	jsPlumb.getInstance = function(_defaults) {
		var j = new jsPlumbInstance(_defaults);
		j.init();
		return j;
	};
// maybe register static instance as an AMD module, and getInstance method too.
	if ( typeof define === "function") {
		define( "jsplumb", [], function () { return jsPlumb; } );
		define( "jsplumbinstance", [], function () { return jsPlumb.getInstance(); } );
	}
 // CommonJS 
	if (typeof exports !== 'undefined') {
      exports.jsPlumb = jsPlumb;
  	}
	
	
// --------------------- end static instance + AMD registration -------------------------------------------		
	
})();


;(function() {
        
    // create the drag handler for a connection
    var _makeConnectionDragHandler = function(placeholder, _jsPlumb) {
        var stopped = false;
        return {
            drag : function() {
                if (stopped) {
                    stopped = false;
                    return true;
                }
                var _ui = jsPlumb.CurrentLibrary.getUIPosition(arguments, _jsPlumb.getZoom());
        
                if (placeholder.element) {
                    jsPlumb.CurrentLibrary.setOffset(placeholder.element, _ui);                    
                    _jsPlumb.repaint(placeholder.element, _ui);
                }
            },
            stopDrag : function() {
                stopped = true;
            }
        };
    };
        
    // creates a placeholder div for dragging purposes, adds it to the DOM, and pre-computes its offset.    
    var _makeDraggablePlaceholder = function(placeholder, parent, _jsPlumb) {
        var n = document.createElement("div");
        n.style.position = "absolute";
        var placeholderDragElement = jsPlumb.CurrentLibrary.getElementObject(n);
        jsPlumb.CurrentLibrary.appendElement(n, parent);
        var id = _jsPlumb.getId(n);
        _jsPlumb.updateOffset( { elId : id });
        // create and assign an id, and initialize the offset.
        placeholder.id = id;
        placeholder.element = n;
    };
    
    // create a floating endpoint (for drag connections)
    var _makeFloatingEndpoint = function(paintStyle, referenceAnchor, endpoint, referenceCanvas, sourceElement, _jsPlumb, _newEndpoint) {			
        var floatingAnchor = new jsPlumb.FloatingAnchor( { reference : referenceAnchor, referenceCanvas : referenceCanvas, jsPlumbInstance:_jsPlumb });
        //setting the scope here should not be the way to fix that mootools issue.  it should be fixed by not
        // adding the floating endpoint as a droppable.  that makes more sense anyway!
        return _newEndpoint({ paintStyle : paintStyle, endpoint : endpoint, anchor : floatingAnchor, source : sourceElement, scope:"__floating" });
    };

    var typeParameters = [ "connectorStyle", "connectorHoverStyle", "connectorOverlays",
                "connector", "connectionType", "connectorClass", "connectorHoverClass" ];

    // a helper function that tries to find a connection to the given element, and returns it if so. if elementWithPrecedence is null,
    // or no connection to it is found, we return the first connection in our list.
    var findConnectionToUseForDynamicAnchor = function(ep, elementWithPrecedence) {
        var idx = 0;
        if (elementWithPrecedence != null) {
            for (var i = 0; i < ep.connections.length; i++) {
                if (ep.connections[i].sourceId == elementWithPrecedence || ep.connections[i].targetId == elementWithPrecedence) {
                    idx = i;
                    break;
                }
            }
        }
        
        return ep.connections[idx];
    };

    var findConnectionIndex = function(conn, ep) {
        return jsPlumbUtil.findWithFunction(ep.connections, function(c) { return c.id == conn.id; });
    };

    jsPlumb.Endpoint = function(params) {
        var _jsPlumb = params._jsPlumb,
            jpcl = jsPlumb.CurrentLibrary,
            _att = jsPlumbAdapter.getAttribute,
            _gel = jpcl.getElementObject,
            _dom = jpcl.getDOMElement,
            _ju = jsPlumbUtil,            
            _newConnection = params.newConnection,
            _newEndpoint = params.newEndpoint,
            _finaliseConnection = params.finaliseConnection,
            _fireDetachEvent = params.fireDetachEvent,
            _fireMoveEvent = params.fireMoveEvent,
            floatingConnections = params.floatingConnections;
        
        this.idPrefix = "_jsplumb_e_";			
        this.defaultLabelLocation = [ 0.5, 0.5 ];
        this.defaultOverlayKeys = ["Overlays", "EndpointOverlays"];
        this.parent = params.parent;
        OverlayCapableJsPlumbUIComponent.apply(this, arguments);        
        
// TYPE		
                
        this.getDefaultType = function() {								
            return {
                parameters:{},
                scope:null,
                maxConnections:this._jsPlumb.instance.Defaults.MaxConnections,
                paintStyle:this._jsPlumb.instance.Defaults.EndpointStyle || jsPlumb.Defaults.EndpointStyle,
                endpoint:this._jsPlumb.instance.Defaults.Endpoint || jsPlumb.Defaults.Endpoint,
                hoverPaintStyle:this._jsPlumb.instance.Defaults.EndpointHoverStyle || jsPlumb.Defaults.EndpointHoverStyle,				
                overlays:this._jsPlumb.instance.Defaults.EndpointOverlays || jsPlumb.Defaults.EndpointOverlays,
                connectorStyle:params.connectorStyle,				
                connectorHoverStyle:params.connectorHoverStyle,
                connectorClass:params.connectorClass,
                connectorHoverClass:params.connectorHoverClass,
                connectorOverlays:params.connectorOverlays,
                connector:params.connector,
                connectorTooltip:params.connectorTooltip
            };
        };
        			
// END TYPE
            
        this._jsPlumb.enabled = !(params.enabled === false);
        this._jsPlumb.visible = true;        
        this.element = _dom(params.source);  
        this._jsPlumb.uuid = params.uuid;
        this._jsPlumb.floatingEndpoint = null;  
        var inPlaceCopy = null;
        if (this._jsPlumb.uuid) params.endpointsByUUID[this._jsPlumb.uuid] = this;
        this.elementId = params.elementId;
        
        this._jsPlumb.connectionCost = params.connectionCost;
        this._jsPlumb.connectionsDirected = params.connectionsDirected;        
        this._jsPlumb.currentAnchorClass = "";
        this._jsPlumb.events = {};
            
        var  _updateAnchorClass = function() {
            jpcl.removeClass(this.element, _jsPlumb.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);
            this.removeClass(_jsPlumb.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);
            this._jsPlumb.currentAnchorClass = this.anchor.getCssClass();
            this.addClass(_jsPlumb.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);
            jpcl.addClass(this.element, _jsPlumb.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);
        }.bind(this);
        
        this.setAnchor = function(anchorParams, doNotRepaint) {
            this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId);
            this.anchor = this._jsPlumb.instance.makeAnchor(anchorParams, this.elementId, _jsPlumb);
            _updateAnchorClass();
            this.anchor.bind("anchorChanged", function(currentAnchor) {
                this.fire("anchorChanged", {endpoint:this, anchor:currentAnchor});
                _updateAnchorClass();
            }.bind(this));
            if (!doNotRepaint)
                this._jsPlumb.instance.repaint(this.elementId);
            return this;
        };

        var anchorParamsToUse = params.anchor ? params.anchor : params.anchors ? params.anchors : (_jsPlumb.Defaults.Anchor || "Top");
        this.setAnchor(anchorParamsToUse, true);

        // endpoint delegates to first connection for hover, if there is one.
        var internalHover = function(state) {
          if (this.connections.length > 0)
            this.connections[0].setHover(state, false);
          else
            this.setHover(state);
        }.bind(this);
            
        // ANCHOR MANAGER
        if (!params._transient) // in place copies, for example, are transient.  they will never need to be retrieved during a paint cycle, because they dont move, and then they are deleted.
            this._jsPlumb.instance.anchorManager.add(this, this.elementId);
        
        this.setEndpoint = function(ep) {

            if (this.endpoint != null) {
                this.endpoint.cleanup();
                this.endpoint.destroy();
            }

            var _e = function(t, p) {
                var rm = _jsPlumb.getRenderMode();
                if (jsPlumb.Endpoints[rm][t]) return new jsPlumb.Endpoints[rm][t](p);
                if (!_jsPlumb.Defaults.DoNotThrowErrors)
                    throw { msg:"jsPlumb: unknown endpoint type '" + t + "'" };
            };            

            var endpointArgs = {
                _jsPlumb:this._jsPlumb.instance,
                cssClass:params.cssClass,
                parent:params.parent,
                container:params.container,
                tooltip:params.tooltip,
                connectorTooltip:params.connectorTooltip,
                endpoint:this
            };
            if (_ju.isString(ep)) 
                this.endpoint = _e(ep, endpointArgs);
            else if (_ju.isArray(ep)) {
                endpointArgs = _ju.merge(ep[1], endpointArgs);
                this.endpoint = _e(ep[0], endpointArgs);
            }
            else {
                this.endpoint = ep.clone();
            }

            // assign a clone function using a copy of endpointArgs. this is used when a drag starts: the endpoint that was dragged is cloned,
            // and the clone is left in its place while the original one goes off on a magical journey. 
            // the copy is to get around a closure problem, in which endpointArgs ends up getting shared by
            // the whole world.
            var argsForClone = jsPlumb.extend({}, endpointArgs);						
            this.endpoint.clone = function() {
                // TODO this, and the code above, can be refactored to be more dry.
                if (_ju.isString(ep)) 
                    return _e(ep, endpointArgs);
                else if (_ju.isArray(ep)) {
                    endpointArgs = _ju.merge(ep[1], endpointArgs);
                    return _e(ep[0], endpointArgs);
                }
            }.bind(this);

            this.type = this.endpoint.type;
            // bind listeners from endpoint to self, with the internal hover function defined above.
            this.bindListeners(this.endpoint, this, internalHover);
        };
         
        this.setEndpoint(params.endpoint || _jsPlumb.Defaults.Endpoint || jsPlumb.Defaults.Endpoint || "Dot");							                    
        this.setPaintStyle(params.paintStyle || params.style || _jsPlumb.Defaults.EndpointStyle || jsPlumb.Defaults.EndpointStyle, true);
        this.setHoverPaintStyle(params.hoverPaintStyle || _jsPlumb.Defaults.EndpointHoverStyle || jsPlumb.Defaults.EndpointHoverStyle, true);
        this._jsPlumb.paintStyleInUse = this.getPaintStyle();

        _ju.copyValues(typeParameters, params, this);        

        this.isSource = params.isSource || false;
        this.isTarget = params.isTarget || false;        
        this._jsPlumb.maxConnections = params.maxConnections || _jsPlumb.Defaults.MaxConnections; // maximum number of connections this endpoint can be the source of.                
        this.canvas = this.endpoint.canvas;		
        // add anchor class (need to do this on construction because we set anchor first)
        this.addClass(_jsPlumb.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);	
        jpcl.addClass(this.element, _jsPlumb.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);
        this.connections = params.connections || [];
        this.connectorPointerEvents = params["connector-pointer-events"];
        
        this.scope = params.scope || _jsPlumb.getDefaultScope();        
        this.timestamp = null;
        this.reattachConnections = params.reattach || _jsPlumb.Defaults.ReattachConnections;
        this.connectionsDetachable = _jsPlumb.Defaults.ConnectionsDetachable;
        if (params.connectionsDetachable === false || params.detachable === false)
            this.connectionsDetachable = false;
        this.dragAllowedWhenFull = params.dragAllowedWhenFull || true;
        
        if (params.onMaxConnections)
            this.bind("maxConnections", params.onMaxConnections);        
        
        //
        // add a connection. not part of public API.
        //
        this.addConnection = function(connection) {
            this.connections.push(connection);                  
            this[(this.connections.length > 0 ? "add" : "remove") + "Class"](_jsPlumb.endpointConnectedClass);       
            this[(this.isFull() ? "add" : "remove") + "Class"](_jsPlumb.endpointFullClass); 
        };	
        
        this.detachFromConnection = function(connection, idx) {
            idx = idx == null ? findConnectionIndex(connection, this) : idx;
            if (idx >= 0) {
                this.connections.splice(idx, 1);
                this[(this.connections.length > 0 ? "add" : "remove") + "Class"](_jsPlumb.endpointConnectedClass);       
                this[(this.isFull() ? "add" : "remove") + "Class"](_jsPlumb.endpointFullClass);                 
            }
        };

        this.detach = function(connection, ignoreTarget, forceDetach, fireEvent, originalEvent, endpointBeingDeleted, connectionIndex) {

            var idx = connectionIndex == null ? findConnectionIndex(connection, this) : connectionIndex,
                actuallyDetached = false;
                fireEvent = (fireEvent !== false);

            if (idx >= 0) {		                
                if (forceDetach || connection._forceDetach || (connection.isDetachable() && connection.isDetachAllowed(connection) && this.isDetachAllowed(connection) )) {

                    //connection.setHover(false);

                    _jsPlumb.deleteObject({
                        connection:connection, 
                        fireEvent:(!ignoreTarget && fireEvent), 
                        originalEvent:originalEvent
                    });
                    actuallyDetached = true;                       
                }
            }
            return actuallyDetached;
        };	

        this.detachAll = function(fireEvent, originalEvent) {
            while (this.connections.length > 0) {
                // TODO this could pass the index in to the detach method to save some time (index will always be zero in this while loop)
                // TODO now it defaults to fireEvent true.  will that mess with things?
                this.detach(this.connections[0], false, true, fireEvent !== false, originalEvent, this, 0);
            }
            return this;
        };                
        this.detachFrom = function(targetEndpoint, fireEvent, originalEvent) {
            var c = [];
            for ( var i = 0; i < this.connections.length; i++) {
                if (this.connections[i].endpoints[1] == targetEndpoint || this.connections[i].endpoints[0] == targetEndpoint) {
                    c.push(this.connections[i]);
                }
            }
            for ( var j = 0; j < c.length; j++) {
                this.detach(c[j], false, true, fireEvent, originalEvent);				
            }
            return this;
        };	        
        
        this.getElement = function() {
            return this.element;
        };		
                 
        // container not supported in 1.5.5; you cannot change the container once it is set.
        // it might come back int a future release.
        this.setElement = function(el/*, container*/) {
            var parentId = this._jsPlumb.instance.getId(el),
                curId = this.elementId;
            // remove the endpoint from the list for the current endpoint's element
            _ju.removeWithFunction(params.endpointsByElement[this.elementId], function(e) {
                return e.id == this.id;
            }.bind(this));
            this.element = _dom(el);
            this.elementId = _jsPlumb.getId(this.element);                         
            _jsPlumb.anchorManager.rehomeEndpoint(this, curId, this.element);
            _jsPlumb.dragManager.endpointAdded(this.element);            
            _ju.addToList(params.endpointsByElement, parentId, this);            
            return this;
        };
                
        /**
         * private but must be exposed.
         */
        this.makeInPlaceCopy = function() {
            var loc = this.anchor.getCurrentLocation({element:this}),
                o = this.anchor.getOrientation(this),
                acc = this.anchor.getCssClass(),
                inPlaceAnchor = {
                    bind:function() { },
                    compute:function() { return [ loc[0], loc[1] ]; },
                    getCurrentLocation : function() { return [ loc[0], loc[1] ]; },
                    getOrientation:function() { return o; },
                    getCssClass:function() { return acc; }
                };

            return _newEndpoint( { 
                anchor : inPlaceAnchor, 
                source : this.element, 
                paintStyle : this.getPaintStyle(), 
                endpoint : params.hideOnDrag ? "Blank" : this.endpoint,
                _transient:true,
                scope:this.scope
            });
        };
                

        /**
         * private but needs to be exposed.
         */
        this.isFloating = function() {
            return this.anchor != null && this.anchor.isFloating;
        };
        
        /**
         * returns a connection from the pool; used when dragging starts.  just gets the head of the array if it can.
         */
        this.connectorSelector = function() {
            var candidate = this.connections[0];
            if (this.isTarget && candidate) return candidate;
            else {
                return (this.connections.length < this._jsPlumb.maxConnections) || this._jsPlumb.maxConnections == -1 ? null : candidate;
            }
        };        
        
        this.setStyle = this.setPaintStyle;        
        
        this.paint = function(params) {
            params = params || {};
            var timestamp = params.timestamp, recalc = !(params.recalc === false);								
            if (!timestamp || this.timestamp !== timestamp) {						
                
                // TODO check: is this is a safe performance enhancement?
                var info = _jsPlumb.updateOffset({ elId:this.elementId, timestamp:timestamp/*, recalc:recalc*/ });                

                var xy = params.offset ? params.offset.o : info.o;
                if(xy != null) {
                    var ap = params.anchorPoint,connectorPaintStyle = params.connectorPaintStyle;
                    if (ap == null) {
                        var wh = params.dimensions || info.s,                       
                            anchorParams = { xy : [ xy.left, xy.top ], wh : wh, element : this, timestamp : timestamp };
                        if (recalc && this.anchor.isDynamic && this.connections.length > 0) {
                            var c = findConnectionToUseForDynamicAnchor(this, params.elementWithPrecedence),
                                oIdx = c.endpoints[0] == this ? 1 : 0,
                                oId = oIdx === 0 ? c.sourceId : c.targetId,
                                oInfo = _jsPlumb.getCachedData(oId),
                                oOffset = oInfo.o, oWH = oInfo.s;
                            anchorParams.txy = [ oOffset.left, oOffset.top ];
                            anchorParams.twh = oWH;
                            anchorParams.tElement = c.endpoints[oIdx];
                        }
                        ap = this.anchor.compute(anchorParams);
                    }
                                        
                    this.endpoint.compute(ap, this.anchor.getOrientation(this), this._jsPlumb.paintStyleInUse, connectorPaintStyle || this.paintStyleInUse);
                    this.endpoint.paint(this._jsPlumb.paintStyleInUse, this.anchor);					
                    this.timestamp = timestamp;

                    // paint overlays
                    for ( var i = 0; i < this._jsPlumb.overlays.length; i++) {
                        var o = this._jsPlumb.overlays[i];
                        if (o.isVisible()) { 
                            this._jsPlumb.overlayPlacements[i] = o.draw(this.endpoint, this._jsPlumb.paintStyleInUse);
                            o.paint(this._jsPlumb.overlayPlacements[i]);    
                        }
                    }
                }
            }
        };

        this.repaint = this.paint; 

        var draggingInitialised = false;
        this.initDraggable = function() {
            // is this a connection source? we make it draggable and have the
            // drag listener maintain a connection with a floating endpoint.
            if (!draggingInitialised && jpcl.isDragSupported(this.element)) {
                var placeholderInfo = { id:null, element:null },
                    jpc = null,
                    existingJpc = false,
                    existingJpcParams = null,
                    _dragHandler = _makeConnectionDragHandler(placeholderInfo, _jsPlumb);

                var start = function() {    
                // drag might have started on an endpoint that is not actually a source, but which has
                // one or more connections.
                    jpc = this.connectorSelector();
                    var _continue = true;
                    // if not enabled, return
                    if (!this.isEnabled()) _continue = false;
                    // if no connection and we're not a source, return.
                    if (jpc == null && !this.isSource) _continue = false;
                    // otherwise if we're full and not allowed to drag, also return false.
                    if (this.isSource && this.isFull() && !this.dragAllowedWhenFull) _continue = false;
                    // if the connection was setup as not detachable or one of its endpoints
                    // was setup as connectionsDetachable = false, or Defaults.ConnectionsDetachable
                    // is set to false...
                    if (jpc != null && !jpc.isDetachable()) _continue = false;

                    if (_continue === false) {
                        // this is for mootools and yui. returning false from this causes jquery to stop drag.
                        // the events are wrapped in both mootools and yui anyway, but i don't think returning
                        // false from the start callback would stop a drag.
                        if (jpcl.stopDrag) jpcl.stopDrag();
                        _dragHandler.stopDrag();
                        return false;
                    }

                    // clear hover for all connections for this endpoint before continuing.
                    for (var i = 0; i < this.connections.length; i++)
                        this.connections[i].setHover(false);

                    this.addClass("endpointDrag");
                    _jsPlumb.setConnectionBeingDragged(true);

                    // if we're not full but there was a connection, make it null. we'll create a new one.
                    if (jpc && !this.isFull() && this.isSource) jpc = null;

                    _jsPlumb.updateOffset( { elId : this.elementId });
                    inPlaceCopy = this.makeInPlaceCopy();
                    inPlaceCopy.referenceEndpoint = this;
                    inPlaceCopy.paint();                                                                
                    
                    _makeDraggablePlaceholder(placeholderInfo, this.parent, _jsPlumb);
                    
                    // set the offset of this div to be where 'inPlaceCopy' is, to start with.
                    // TODO merge this code with the code in both Anchor and FloatingAnchor, because it
                    // does the same stuff.
                    var ipcoel = _gel(inPlaceCopy.canvas),
                        ipco = jsPlumb.CurrentLibrary.getOffset(ipcoel, _jsPlumb),
                        po = _jsPlumb.adjustForParentOffsetAndScroll([ipco.left, ipco.top], inPlaceCopy.canvas),
                        canvasElement = _gel(this.canvas);                               
                        
                    jpcl.setOffset(placeholderInfo.element, {left:po[0], top:po[1]});                                                           
                    
                    // when using makeSource and a parent, we first draw the source anchor on the source element, then
                    // move it to the parent.  note that this happens after drawing the placeholder for the
                    // first time.
                    if (this.parentAnchor) this.anchor = _jsPlumb.makeAnchor(this.parentAnchor, this.elementId, _jsPlumb);
                    
                    // store the id of the dragging div and the source element. the drop function will pick these up.                   
                    _jsPlumb.setAttribute(this.canvas, "dragId", placeholderInfo.id);
                    _jsPlumb.setAttribute(this.canvas, "elId", this.elementId);

                    this._jsPlumb.floatingEndpoint = _makeFloatingEndpoint(this.getPaintStyle(), this.anchor, this.endpoint, this.canvas, placeholderInfo.element, _jsPlumb, _newEndpoint);
                    // TODO we should not know about DOM here. make the library adapter do this (or the 
                        // dom adapter)
                    this.canvas.style.visibility = "hidden";            
                    
                    if (jpc == null) {                                                                                                                                                         
                        this.anchor.locked = true;
                        this.setHover(false, false);                        
                        // create a connection. one end is this endpoint, the other is a floating endpoint.                    
                        jpc = _newConnection({
                            sourceEndpoint : this,
                            targetEndpoint : this._jsPlumb.floatingEndpoint,
                            source : this.endpointWillMoveTo || this.element,  // for makeSource with parent option.  ensure source element is represented correctly.
                            target : placeholderInfo.element,
                            anchors : [ this.anchor, this._jsPlumb.floatingEndpoint.anchor ],
                            paintStyle : params.connectorStyle, // this can be null. Connection will use the default.
                            hoverPaintStyle:params.connectorHoverStyle,
                            connector : params.connector, // this can also be null. Connection will use the default.
                            overlays : params.connectorOverlays,
                            type:this.connectionType,
                            cssClass:this.connectorClass,
                            hoverClass:this.connectorHoverClass
                        });
                        jpc.pending = true; // mark this connection as not having been established.
                        jpc.addClass(_jsPlumb.draggingClass);
                        this._jsPlumb.floatingEndpoint.addClass(_jsPlumb.draggingClass);
                        // fire an event that informs that a connection is being dragged                        
                        _jsPlumb.fire("connectionDrag", jpc);

                    } else {
                        existingJpc = true;
                        jpc.setHover(false);                        
                        // if existing connection, allow to be dropped back on the source endpoint (issue 51).
                        _initDropTarget(ipcoel, false, true);
                        // new anchor idx
                        var anchorIdx = jpc.endpoints[0].id == this.id ? 0 : 1;
                        jpc.floatingAnchorIndex = anchorIdx;                    // save our anchor index as the connection's floating index.                        
                        this.detachFromConnection(jpc);                         // detach from the connection while dragging is occurring.
                        
                        // store the original scope (issue 57)
                        var dragScope = jsPlumb.CurrentLibrary.getDragScope(canvasElement);
                        _jsPlumb.setAttribute(this.canvas, "originalScope", dragScope);
                        // now we want to get this endpoint's DROP scope, and set it for now: we can only be dropped on drop zones
                        // that have our drop scope (issue 57).
                        var dropScope = jpcl.getDropScope(canvasElement);
                        jpcl.setDragScope(canvasElement, dropScope);

                        // fire an event that informs that a connection is being dragged. we do this before
                        // replacing the original target with the floating element info.
                        _jsPlumb.fire("connectionDrag", jpc);
                
                        // now we replace ourselves with the temporary div we created above:
                        if (anchorIdx === 0) {
                            existingJpcParams = [ jpc.source, jpc.sourceId, canvasElement, dragScope ];
                            jpc.source = placeholderInfo.element;
                            jpc.sourceId = placeholderInfo.id;
                        } else {
                            existingJpcParams = [ jpc.target, jpc.targetId, canvasElement, dragScope ];
                            jpc.target = placeholderInfo.element;
                            jpc.targetId = placeholderInfo.id;
                        }

                        // lock the other endpoint; if it is dynamic it will not move while the drag is occurring.
                        jpc.endpoints[anchorIdx === 0 ? 1 : 0].anchor.locked = true;
                        // store the original endpoint and assign the new floating endpoint for the drag.
                        jpc.suspendedEndpoint = jpc.endpoints[anchorIdx];
                        
                        // PROVIDE THE SUSPENDED ELEMENT, BE IT A SOURCE OR TARGET (ISSUE 39)
                        jpc.suspendedElement = jpc.endpoints[anchorIdx].getElement();
                        jpc.suspendedElementId = jpc.endpoints[anchorIdx].elementId;
                        jpc.suspendedElementType = anchorIdx === 0 ? "source" : "target";
                        
                        jpc.suspendedEndpoint.setHover(false);
                        this._jsPlumb.floatingEndpoint.referenceEndpoint = jpc.suspendedEndpoint;
                        jpc.endpoints[anchorIdx] = this._jsPlumb.floatingEndpoint;

                        jpc.addClass(_jsPlumb.draggingClass);
                        this._jsPlumb.floatingEndpoint.addClass(_jsPlumb.draggingClass);                    

                    }
                    // register it and register connection on it.
                    floatingConnections[placeholderInfo.id] = jpc;
                    _jsPlumb.anchorManager.addFloatingConnection(placeholderInfo.id, jpc);               
                    // only register for the target endpoint; we will not be dragging the source at any time
                    // before this connection is either discarded or made into a permanent connection.
                    _ju.addToList(params.endpointsByElement, placeholderInfo.id, this._jsPlumb.floatingEndpoint);
                    // tell jsplumb about it
                    _jsPlumb.currentlyDragging = true;
                }.bind(this);

                var dragOptions = params.dragOptions || {},
                    defaultOpts = jsPlumb.extend( {}, jpcl.defaultDragOptions),
                    startEvent = jpcl.dragEvents.start,
                    stopEvent = jpcl.dragEvents.stop,
                    dragEvent = jpcl.dragEvents.drag;
                
                dragOptions = jsPlumb.extend(defaultOpts, dragOptions);
                dragOptions.scope = dragOptions.scope || this.scope;
                dragOptions[startEvent] = _ju.wrap(dragOptions[startEvent], start, false);
                // extracted drag handler function so can be used by makeSource
                dragOptions[dragEvent] = _ju.wrap(dragOptions[dragEvent], _dragHandler.drag);
                dragOptions[stopEvent] = _ju.wrap(dragOptions[stopEvent],
                    function() {        

                        _jsPlumb.setConnectionBeingDragged(false);  
                        // if no endpoints, jpc already cleaned up.
                        if (jpc.endpoints != null) {          
                            // get the actual drop event (decode from library args to stop function)
                            var originalEvent = jpcl.getDropEvent(arguments);                                       
                            // unlock the other endpoint (if it is dynamic, it would have been locked at drag start)
                            var idx = jpc.floatingAnchorIndex == null ? 1 : jpc.floatingAnchorIndex;
                            jpc.endpoints[idx === 0 ? 1 : 0].anchor.locked = false;
                            // WHY does this need to happen?  i suppose because the connection might not get 
                            // deleted.  TODO: i dont want to know about css classes inside jsplumb, ideally.
                            jpc.removeClass(_jsPlumb.draggingClass);   
                        
                            // if we have the floating endpoint then the connection has not been dropped
                            // on another endpoint.  If it is a new connection we throw it away. If it is an 
                            // existing connection we check to see if we should reattach it, throwing it away 
                            // if not.
                            if (jpc.endpoints[idx] == this._jsPlumb.floatingEndpoint) {
                                // 6a. if the connection was an existing one...
                                if (existingJpc && jpc.suspendedEndpoint) {
                                    // fix for issue35, thanks Sylvain Gizard: when firing the detach event make sure the
                                    // floating endpoint has been replaced.
                                    if (idx === 0) {
                                        jpc.source = existingJpcParams[0];
                                        jpc.sourceId = existingJpcParams[1];
                                    } else {
                                        jpc.target = existingJpcParams[0];
                                        jpc.targetId = existingJpcParams[1];
                                    }
                                    
                                    // restore the original scope (issue 57)
                                    jpcl.setDragScope(existingJpcParams[2], existingJpcParams[3]);
                                    jpc.endpoints[idx] = jpc.suspendedEndpoint;
                                    // IF the connection should be reattached, or the other endpoint refuses detach, then
                                    // reset the connection to its original state
                                    if (jpc.isReattach() || jpc._forceReattach || jpc._forceDetach || !jpc.endpoints[idx === 0 ? 1 : 0].detach(jpc, false, false, true, originalEvent)) {                                   
                                        jpc.setHover(false);
                                        jpc.floatingAnchorIndex = null;
                                        jpc._forceDetach = null;
                                        jpc._forceReattach = null;
                                        this._jsPlumb.floatingEndpoint.detachFromConnection(jpc);
                                        jpc.suspendedEndpoint.addConnection(jpc);
                                        _jsPlumb.repaint(existingJpcParams[1]);
                                    }
                                }                                                               
                            }
                        }

                        // remove the element associated with the floating endpoint 
                        // (and its associated floating endpoint and visual artefacts)                                        
                        _jsPlumb.remove(placeholderInfo.element, false);
                        // remove the inplace copy
                        _jsPlumb.remove(inPlaceCopy.canvas, false);

                        // makeTargets sets this flag, to tell us we have been replaced and should delete ourself.
                        if (this.deleteAfterDragStop) {                        
                            _jsPlumb.deleteObject({endpoint:this});
                        }
                        else {
                            if (this._jsPlumb) {
                                this._jsPlumb.floatingEndpoint = null;
                                // repaint this endpoint.
                                // make our canvas visible (TODO: hand off to library; we should not know about DOM)
                                this.canvas.style.visibility = "visible";
                                // unlock our anchor
                                this.anchor.locked = false;
                                this.paint({recalc:false});                        
                            }
                        }                                                    

                        // although the connection is no longer valid, there are use cases where this is useful.
                        _jsPlumb.fire("connectionDragStop", jpc, originalEvent);

                        // tell jsplumb that dragging is finished.
                        _jsPlumb.currentlyDragging = false;

                        jpc = null;

                    }.bind(this));
                
                var i = _gel(this.canvas);              
                jpcl.initDraggable(i, dragOptions, true, _jsPlumb);

                draggingInitialised = true;
            }
        };

        // if marked as source or target at create time, init the dragging.
        if (this.isSource || this.isTarget)
            this.initDraggable();        

        // pulled this out into a function so we can reuse it for the inPlaceCopy canvas; you can now drop detached connections
        // back onto the endpoint you detached it from.
        var _initDropTarget = function(canvas, forceInit, isTransient, endpoint) {
            if ((this.isTarget || forceInit) && jpcl.isDropSupported(this.element)) {
                var dropOptions = params.dropOptions || _jsPlumb.Defaults.DropOptions || jsPlumb.Defaults.DropOptions;
                dropOptions = jsPlumb.extend( {}, dropOptions);
                dropOptions.scope = dropOptions.scope || this.scope;
                var dropEvent = jpcl.dragEvents.drop,
                    overEvent = jpcl.dragEvents.over,
                    outEvent = jpcl.dragEvents.out,
                    drop = function() {                        

                        this.removeClass(_jsPlumb.endpointDropAllowedClass);
                        this.removeClass(_jsPlumb.endpointDropForbiddenClass);
                                                    
                        var originalEvent = jpcl.getDropEvent(arguments),
                            draggable = _gel(jpcl.getDragObject(arguments)),
                            id = _jsPlumb.getAttribute(draggable, "dragId"),
                            elId = _jsPlumb.getAttribute(draggable, "elId"),						
                            scope = _jsPlumb.getAttribute(draggable, "originalScope"),
                            jpc = floatingConnections[id];
                            
                        // if this is a drop back where the connection came from, mark it force rettach and
                        // return; the stop handler will reattach. without firing an event.
                        var redrop = jpc.suspendedEndpoint && (jpc.suspendedEndpoint.id == this.id ||
                                        this.referenceEndpoint && jpc.suspendedEndpoint.id == this.referenceEndpoint.id) ;							
                        if (redrop) {								
                            jpc._forceReattach = true;
                            return;
                        }

                        if (jpc != null) {
                            var idx = jpc.floatingAnchorIndex == null ? 1 : jpc.floatingAnchorIndex, oidx = idx === 0 ? 1 : 0;
                            
                            // restore the original scope if necessary (issue 57)						
                            if (scope) jsPlumb.CurrentLibrary.setDragScope(draggable, scope);							
                            
                            var endpointEnabled = endpoint != null ? endpoint.isEnabled() : true;
                            
                            if (this.isFull()) {
                                this.fire("maxConnections", { 
                                    endpoint:this, 
                                    connection:jpc, 
                                    maxConnections:this._jsPlumb.maxConnections 
                                }, originalEvent);
                            }
                                                            
                            if (!this.isFull() && !(idx === 0 && !this.isSource) && !(idx == 1 && !this.isTarget) && endpointEnabled) {
                                var _doContinue = true;

                                // the second check here is for the case that the user is dropping it back
                                // where it came from.
                                if (jpc.suspendedEndpoint && jpc.suspendedEndpoint.id != this.id) {
                                    if (idx === 0) {
                                        jpc.source = jpc.suspendedEndpoint.element;
                                        jpc.sourceId = jpc.suspendedEndpoint.elementId;
                                    } else {
                                        jpc.target = jpc.suspendedEndpoint.element;
                                        jpc.targetId = jpc.suspendedEndpoint.elementId;
                                    }

                                    if (!jpc.isDetachAllowed(jpc) || !jpc.endpoints[idx].isDetachAllowed(jpc) || !jpc.suspendedEndpoint.isDetachAllowed(jpc) || !_jsPlumb.checkCondition("beforeDetach", jpc))
                                        _doContinue = false;								
                                }
            
                                // these have to be set before testing for beforeDrop.
                                if (idx === 0) {
                                    jpc.source = this.element;
                                    jpc.sourceId = this.elementId;
                                } else {
                                    jpc.target = this.element;
                                    jpc.targetId = this.elementId;
                                }
                                                            
// ------------ wrap the execution path in a function so we can support asynchronous beforeDrop																
                                    
                                // we want to execute this regardless.
                                var commonFunction = function() {
                                    jpc.floatingAnchorIndex = null;
                                };	
                                                                                                
                                var continueFunction = function() {
                                    jpc.pending = false;

                                    // remove this jpc from the current endpoint
                                    jpc.endpoints[idx].detachFromConnection(jpc);
                                    if (jpc.suspendedEndpoint) jpc.suspendedEndpoint.detachFromConnection(jpc);
                                    jpc.endpoints[idx] = this;
                                    this.addConnection(jpc);
                                    
                                    // copy our parameters in to the connection:
                                    var params = this.getParameters();
                                    for (var aParam in params)
                                        jpc.setParameter(aParam, params[aParam]);

                                    if (!jpc.suspendedEndpoint) {  
                                        // if not an existing connection and
                                        if (params.draggable)
                                            jsPlumb.CurrentLibrary.initDraggable(this.element, dragOptions, true, _jsPlumb);
                                    }
                                    else {
                                        var suspendedElement = jpc.suspendedEndpoint.getElement(), suspendedElementId = jpc.suspendedEndpoint.elementId;
                                        _fireMoveEvent({
                                            index:idx,
                                            originalSourceId:idx === 0 ? suspendedElementId : jpc.sourceId,
                                            newSourceId:idx === 0 ? this.elementId : jpc.sourceId,
                                            originalTargetId:idx == 1 ? suspendedElementId : jpc.targetId,
                                            newTargetId:idx == 1 ? this.elementId : jpc.targetId,
                                            originalSourceEndpoint:idx === 0 ? jpc.suspendedEndpoint : jpc.endpoints[0],
                                            newSourceEndpoint:idx === 0 ? this : jpc.endpoints[0],
                                            originalTargetEndpoint:idx == 1 ? jpc.suspendedEndpoint : jpc.endpoints[1],
                                            newTargetEndpoint:idx == 1 ? this : jpc.endpoints[1],
                                            connection:jpc
                                        }, originalEvent);
                                       /* var suspendedElement = jpc.suspendedEndpoint.getElement(), suspendedElementId = jpc.suspendedEndpoint.elementId;
                                        // fire a detach event
                                        _fireDetachEvent({
                                            source : idx === 0 ? suspendedElement : jpc.source, 
                                            target : idx == 1 ? suspendedElement : jpc.target,
                                            sourceId : idx === 0 ? suspendedElementId : jpc.sourceId, 
                                            targetId : idx == 1 ? suspendedElementId : jpc.targetId,
                                            sourceEndpoint : idx === 0 ? jpc.suspendedEndpoint : jpc.endpoints[0], 
                                            targetEndpoint : idx == 1 ? jpc.suspendedEndpoint : jpc.endpoints[1],
                                            connection : jpc
                                        }, true, originalEvent);*/
                                    }

                                    // TODO this is like the makeTarget drop code.
                                    if (idx == 1)
                                        _jsPlumb.anchorManager.updateOtherEndpoint(jpc.sourceId, jpc.suspendedElementId, jpc.targetId, jpc);
                                    else                                    
                                        _jsPlumb.anchorManager.sourceChanged(jpc.suspendedEndpoint.elementId, jpc.sourceId, jpc);                                   

                                    // finalise will inform the anchor manager and also add to
                                    // connectionsByScope if necessary.
                                    // TODO if this is not set to true, then dragging a connection's target to a new
                                    // target causes the connection to be forgotten. however if it IS set to true, then
                                    // the opposite happens: dragging by source causes the connection to get forgotten
                                    // about and then if you delete it jsplumb breaks.
                                    _finaliseConnection(jpc, null, originalEvent/*, true*/);
                                    
                                    commonFunction();
                                }.bind(this);
                                
                                var dontContinueFunction = function() {
                                    // otherwise just put it back on the endpoint it was on before the drag.
                                    if (jpc.suspendedEndpoint) {									
                                        jpc.endpoints[idx] = jpc.suspendedEndpoint;
                                        jpc.setHover(false);
                                        jpc._forceDetach = true;
                                        if (idx === 0) {
                                            jpc.source = jpc.suspendedEndpoint.element;
                                            jpc.sourceId = jpc.suspendedEndpoint.elementId;
                                        } else {
                                            jpc.target = jpc.suspendedEndpoint.element;
                                            jpc.targetId = jpc.suspendedEndpoint.elementId;
                                        }
                                        jpc.suspendedEndpoint.addConnection(jpc);

                                        jpc.endpoints[0].repaint();
                                        jpc.repaint();
                                        _jsPlumb.repaint(jpc.sourceId);
                                        jpc._forceDetach = false;
                                    }
                                    
                                    commonFunction();
                                };
                                
// --------------------------------------
                                // now check beforeDrop.  this will be available only on Endpoints that are setup to
                                // have a beforeDrop condition (although, secretly, under the hood all Endpoints and 
                                // the Connection have them, because they are on jsPlumbUIComponent.  shhh!), because
                                // it only makes sense to have it on a target endpoint.
                                _doContinue = _doContinue && this.isDropAllowed(jpc.sourceId, jpc.targetId, jpc.scope, jpc, this);
                                                                                                                    
                                if (_doContinue) {
                                    continueFunction();
                                }
                                else {
                                    dontContinueFunction();
                                }
                            }
                            _jsPlumb.currentlyDragging = false;
                        }
                    }.bind(this);
                
                dropOptions[dropEvent] = _ju.wrap(dropOptions[dropEvent], drop);
                dropOptions[overEvent] = _ju.wrap(dropOptions[overEvent], function() {					
                    var draggable = jpcl.getDragObject(arguments),
                        id = _jsPlumb.getAttribute(draggable, "dragId"),
                        _jpc = floatingConnections[id];
                        
                    if (_jpc != null) {								
                        var idx = _jpc.floatingAnchorIndex == null ? 1 : _jpc.floatingAnchorIndex;
                        // here we should fire the 'over' event if we are a target and this is a new connection,
                        // or we are the same as the floating endpoint.								
                        var _cont = (this.isTarget && _jpc.floatingAnchorIndex !== 0) || (_jpc.suspendedEndpoint && this.referenceEndpoint && this.referenceEndpoint.id == _jpc.suspendedEndpoint.id);
                        if (_cont) {
                            var bb = _jsPlumb.checkCondition("checkDropAllowed", { 
                                sourceEndpoint:_jpc.endpoints[idx], 
                                targetEndpoint:this,
                                connection:_jpc
                            }); 
                            this[(bb ? "add" : "remove") + "Class"](_jsPlumb.endpointDropAllowedClass);
                            this[(bb ? "remove" : "add") + "Class"](_jsPlumb.endpointDropForbiddenClass);
                            _jpc.endpoints[idx].anchor.over(this.anchor, this);
                        }
                    }						
                }.bind(this));	

                dropOptions[outEvent] = _ju.wrap(dropOptions[outEvent], function() {					
                    var draggable = jpcl.getDragObject(arguments),
                        id = _jsPlumb.getAttribute( draggable, "dragId"),
                        _jpc = floatingConnections[id];
                        
                    if (_jpc != null) {
                        var idx = _jpc.floatingAnchorIndex == null ? 1 : _jpc.floatingAnchorIndex;
                        var _cont = (this.isTarget && _jpc.floatingAnchorIndex !== 0) || (_jpc.suspendedEndpoint && this.referenceEndpoint && this.referenceEndpoint.id == _jpc.suspendedEndpoint.id);
                        if (_cont) {
                            this.removeClass(_jsPlumb.endpointDropAllowedClass);
                            this.removeClass(_jsPlumb.endpointDropForbiddenClass);
                            _jpc.endpoints[idx].anchor.out();
                        }
                    }
                }.bind(this));
                jpcl.initDroppable(canvas, dropOptions, true, isTransient);
            }
        }.bind(this);
        
        // initialise the endpoint's canvas as a drop target.  this will be ignored if the endpoint is not a target or drag is not supported.
        _initDropTarget(_gel(this.canvas), true, !(params._transient || this.anchor.isFloating), this);
        
         // finally, set type if it was provided
         if (params.type)
            this.addType(params.type, params.data, _jsPlumb.isSuspendDrawing());

        return this;        					
    };

    jsPlumbUtil.extend(jsPlumb.Endpoint, OverlayCapableJsPlumbUIComponent, {
        getTypeDescriptor : function() { return "endpoint"; },        
        isVisible : function() { return this._jsPlumb.visible; },
        setVisible : function(v, doNotChangeConnections, doNotNotifyOtherEndpoint) {
            this._jsPlumb.visible = v;
            if (this.canvas) this.canvas.style.display = v ? "block" : "none";
            this[v ? "showOverlays" : "hideOverlays"]();
            if (!doNotChangeConnections) {
                for (var i = 0; i < this.connections.length; i++) {
                    this.connections[i].setVisible(v);
                    if (!doNotNotifyOtherEndpoint) {
                        var oIdx = this === this.connections[i].endpoints[0] ? 1 : 0;
                        // only change the other endpoint if this is its only connection.
                        if (this.connections[i].endpoints[oIdx].connections.length == 1) this.connections[i].endpoints[oIdx].setVisible(v, true, true);
                    }
                }
            }
        },
        getAttachedElements : function() {
            return this.connections;
        },
        applyType : function(t, doNotRepaint) {         
            if (t.maxConnections != null) this._jsPlumb.maxConnections = t.maxConnections;
            if (t.scope) this.scope = t.scope;
            jsPlumbUtil.copyValues(typeParameters, t, this);
            if (t.anchor) {
                this.anchor = this._jsPlumb.instance.makeAnchor(t.anchor);
            }
        },
        isEnabled : function() { return this._jsPlumb.enabled; },
        setEnabled : function(e) { this._jsPlumb.enabled = e; },
        cleanup : function() {            
            jsPlumb.CurrentLibrary.removeClass(this.element, this._jsPlumb.instance.endpointAnchorClassPrefix + "_" + this._jsPlumb.currentAnchorClass);            
            this.anchor = null;
            this.endpoint.cleanup();
            this.endpoint.destroy();
            this.endpoint = null;
            // drag/drop
            var i = jsPlumb.CurrentLibrary.getElementObject(this.canvas);              
            jsPlumb.CurrentLibrary.destroyDraggable(i);
            jsPlumb.CurrentLibrary.destroyDroppable(i);
        },
        setHover : function(h) {
            if (this.endpoint && this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged())
                this.endpoint.setHover(h);            
        },
        isFull : function() {
            return !(this.isFloating() || this._jsPlumb.maxConnections < 1 || this.connections.length < this._jsPlumb.maxConnections);              
        },
        getConnectionCost : function() { return this._jsPlumb.connectionCost; },
        setConnectionCost : function(c) {
            this._jsPlumb.connectionCost = c; 
        },
        areConnectionsDirected : function() { return this._jsPlumb.connectionsDirected; },
        setConnectionsDirected : function(b) { this._jsPlumb.connectionsDirected = b; },
        setElementId : function(_elId) {
            this.elementId = _elId;
            this.anchor.elementId = _elId;
        },        
        setReferenceElement : function(_el) {
            this.element = jsPlumb.CurrentLibrary.getDOMElement(_el);
        },
        setDragAllowedWhenFull : function(allowed) {
            this.dragAllowedWhenFull = allowed;
        },
        equals : function(endpoint) {
            return this.anchor.equals(endpoint.anchor);
        },
        getUuid : function() {
            return this._jsPlumb.uuid;
        },
        computeAnchor : function(params) {
            return this.anchor.compute(params);
        }
    });
})();
;(function() {

    var makeConnector = function(_jsPlumb, renderMode, connectorName, connectorArgs) {
            if (!_jsPlumb.Defaults.DoNotThrowErrors && jsPlumb.Connectors[renderMode][connectorName] == null)
                    throw { msg:"jsPlumb: unknown connector type '" + connectorName + "'" };

            return new jsPlumb.Connectors[renderMode][connectorName](connectorArgs);  
        },
        _makeAnchor = function(anchorParams, elementId, _jsPlumb) {
            return (anchorParams) ? _jsPlumb.makeAnchor(anchorParams, elementId, _jsPlumb) : null;
        },
        prepareEndpoint = function(_jsPlumb, _newEndpoint, conn, existing, index, params, element, elementId, connectorPaintStyle, connectorHoverPaintStyle) {
            var e;
            if (existing) {
                conn.endpoints[index] = existing;
                existing.addConnection(conn);                   
            } else {
                if (!params.endpoints) params.endpoints = [ null, null ];
                var ep = params.endpoints[index]  || params.endpoint || _jsPlumb.Defaults.Endpoints[index] || jsPlumb.Defaults.Endpoints[index] || _jsPlumb.Defaults.Endpoint || jsPlumb.Defaults.Endpoint;
                if (!params.endpointStyles) params.endpointStyles = [ null, null ];
                if (!params.endpointHoverStyles) params.endpointHoverStyles = [ null, null ];
                var es = params.endpointStyles[index] || params.endpointStyle || _jsPlumb.Defaults.EndpointStyles[index] || jsPlumb.Defaults.EndpointStyles[index] || _jsPlumb.Defaults.EndpointStyle || jsPlumb.Defaults.EndpointStyle;
                // Endpoints derive their fillStyle from the connector's strokeStyle, if no fillStyle was specified.
                if (es.fillStyle == null && connectorPaintStyle != null)
                    es.fillStyle = connectorPaintStyle.strokeStyle;
                
                // TODO: decide if the endpoint should derive the connection's outline width and color.  currently it does:
                //*
                if (es.outlineColor == null && connectorPaintStyle != null) 
                    es.outlineColor = connectorPaintStyle.outlineColor;
                if (es.outlineWidth == null && connectorPaintStyle != null) 
                    es.outlineWidth = connectorPaintStyle.outlineWidth;
                //*/
                
                var ehs = params.endpointHoverStyles[index] || params.endpointHoverStyle || _jsPlumb.Defaults.EndpointHoverStyles[index] || jsPlumb.Defaults.EndpointHoverStyles[index] || _jsPlumb.Defaults.EndpointHoverStyle || jsPlumb.Defaults.EndpointHoverStyle;
                // endpoint hover fill style is derived from connector's hover stroke style.  TODO: do we want to do this by default? for sure?
                if (connectorHoverPaintStyle != null) {
                    if (ehs == null) ehs = {};
                    if (ehs.fillStyle == null) {
                        ehs.fillStyle = connectorHoverPaintStyle.strokeStyle;
                    }
                }
                var a = params.anchors ? params.anchors[index] : 
                        params.anchor ? params.anchor :
                        _makeAnchor(_jsPlumb.Defaults.Anchors[index], elementId, _jsPlumb) || 
                        _makeAnchor(jsPlumb.Defaults.Anchors[index], elementId,_jsPlumb) || 
                        _makeAnchor(_jsPlumb.Defaults.Anchor, elementId,_jsPlumb) || 
                        _makeAnchor(jsPlumb.Defaults.Anchor, elementId, _jsPlumb),                  
                    u = params.uuids ? params.uuids[index] : null;
                    e = _newEndpoint({ 
                        paintStyle : es,  hoverPaintStyle:ehs,  endpoint : ep,  connections : [ conn ], 
                        uuid : u,  anchor : a,  source : element, scope  : params.scope, container:params.container,
                        reattach:params.reattach || _jsPlumb.Defaults.ReattachConnections,
                        detachable:params.detachable || _jsPlumb.Defaults.ConnectionsDetachable
                    });
                conn.endpoints[index] = e;
                
                if (params.drawEndpoints === false) e.setVisible(false, true, true);
                                    
            }
            return e;
        };
    
    jsPlumb.Connection = function(params) {
        var _newConnection = params.newConnection,
            _newEndpoint = params.newEndpoint,
            jpcl = jsPlumb.CurrentLibrary,
            _att = jpcl.getAttribute,
            _gel = jpcl.getElementObject,
            _dom = jpcl.getDOMElement,
            _ju = jsPlumbUtil,
            _getOffset = jpcl.getOffset;

        this.connector = null;                        
        this.idPrefix = "_jsplumb_c_";
        this.defaultLabelLocation = 0.5;
        this.defaultOverlayKeys = ["Overlays", "ConnectionOverlays"];
        this.parent = params.parent;
        // if a new connection is the result of moving some existing connection, params.previousConnection
        // will have that Connection in it. listeners for the jsPlumbConnection event can look for that
        // member and take action if they need to.
        this.previousConnection = params.previousConnection;
        this.source = _dom(params.source);
        this.target = _dom(params.target);
        // sourceEndpoint and targetEndpoint override source/target, if they are present. but 
        // source is not overridden if the Endpoint has declared it is not the final target of a connection;
        // instead we use the source that the Endpoint declares will be the final source element.
        if (params.sourceEndpoint) this.source = params.sourceEndpoint.endpointWillMoveTo || params.sourceEndpoint.getElement();            
        if (params.targetEndpoint) this.target = params.targetEndpoint.getElement();        

        OverlayCapableJsPlumbUIComponent.apply(this, arguments);

        this.sourceId = this._jsPlumb.instance.getId(this.source);
        this.targetId = this._jsPlumb.instance.getId(this.target);
        this.scope = params.scope; // scope may have been passed in to the connect call. if it wasn't, we will pull it from the source endpoint, after having initialised the endpoints.            
        this.endpoints = [];
        this.endpointStyles = [];
            
        var _jsPlumb = this._jsPlumb.instance;    
        this._jsPlumb.visible = true;
        this._jsPlumb.editable = params.editable === true;    
        this._jsPlumb.params = {
            parent:params.parent,
            cssClass:params.cssClass,
            container:params.container,
            "pointer-events":params["pointer-events"],
            editorParams:params.editorParams
        };   
        this._jsPlumb.lastPaintedAt = null;              
        this.getDefaultType = function() {
            return {
                parameters:{},
                scope:null,
                detachable:this._jsPlumb.instance.Defaults.ConnectionsDetachable,
                rettach:this._jsPlumb.instance.Defaults.ReattachConnections,
                paintStyle:this._jsPlumb.instance.Defaults.PaintStyle || jsPlumb.Defaults.PaintStyle,
                connector:this._jsPlumb.instance.Defaults.Connector || jsPlumb.Defaults.Connector,
                hoverPaintStyle:this._jsPlumb.instance.Defaults.HoverPaintStyle || jsPlumb.Defaults.HoverPaintStyle,				
                overlays:this._jsPlumb.instance.Defaults.ConnectorOverlays || jsPlumb.Defaults.ConnectorOverlays
            };
        };
        
// INITIALISATION CODE			
                            
        // wrapped the main function to return null if no input given. this lets us cascade defaults properly.
        
        var eS = prepareEndpoint(_jsPlumb, _newEndpoint, this, params.sourceEndpoint, 0, params, this.source, this.sourceId, params.paintStyle, params.hoverPaintStyle);			
        if (eS) _ju.addToList(params.endpointsByElement, this.sourceId, eS);						
        var eT = prepareEndpoint(_jsPlumb, _newEndpoint, this, params.targetEndpoint, 1, params, this.target, this.targetId, params.paintStyle, params.hoverPaintStyle);
        if (eT) _ju.addToList(params.endpointsByElement, this.targetId, eT);
        // if scope not set, set it to be the scope for the source endpoint.
        if (!this.scope) this.scope = this.endpoints[0].scope;		
                
        // if explicitly told to (or not to) delete endpoints on detach, override endpoint's preferences
        if (params.deleteEndpointsOnDetach != null) {
            this.endpoints[0]._deleteOnDetach = params.deleteEndpointsOnDetach;
            this.endpoints[1]._deleteOnDetach = params.deleteEndpointsOnDetach;
        }
        else {
            // otherwise, unless the endpoints say otherwise, mark them for deletion.
            if (!this.endpoints[0]._doNotDeleteOnDetach) this.endpoints[0]._deleteOnDetach = true;
            if (!this.endpoints[1]._doNotDeleteOnDetach) this.endpoints[1]._deleteOnDetach = true;
        }   
                    
        // TODO these could surely be refactored into some method that tries them one at a time until something exists
        this.setConnector(this.endpoints[0].connector || 
                          this.endpoints[1].connector || 
                          params.connector || 
                          _jsPlumb.Defaults.Connector || 
                          jsPlumb.Defaults.Connector, true);

        if (params.path)
            this.connector.setPath(params.path);
        
        this.setPaintStyle(this.endpoints[0].connectorStyle || 
                           this.endpoints[1].connectorStyle || 
                           params.paintStyle || 
                           _jsPlumb.Defaults.PaintStyle || 
                           jsPlumb.Defaults.PaintStyle, true);
                    
        this.setHoverPaintStyle(this.endpoints[0].connectorHoverStyle || 
                                this.endpoints[1].connectorHoverStyle || 
                                params.hoverPaintStyle || 
                                _jsPlumb.Defaults.HoverPaintStyle || 
                                jsPlumb.Defaults.HoverPaintStyle, true);
        
        this._jsPlumb.paintStyleInUse = this.getPaintStyle();
        
        var _suspendedAt = _jsPlumb.getSuspendedAt();
        _jsPlumb.updateOffset( { elId : this.sourceId, timestamp:_suspendedAt });
        _jsPlumb.updateOffset( { elId : this.targetId, timestamp:_suspendedAt });

//*
        if(!_jsPlumb.isSuspendDrawing()) {                    
            // paint the endpoints
            var myInfo = _jsPlumb.getCachedData(this.sourceId),
                myOffset = myInfo.o, myWH = myInfo.s,
                otherInfo = _jsPlumb.getCachedData(this.targetId),
                otherOffset = otherInfo.o,
                otherWH = otherInfo.s,
                initialTimestamp = _suspendedAt || _jsPlumb.timestamp(),
                anchorLoc = this.endpoints[0].anchor.compute( {
                    xy : [ myOffset.left, myOffset.top ], wh : myWH, element : this.endpoints[0],
                    elementId:this.endpoints[0].elementId,
                    txy : [ otherOffset.left, otherOffset.top ], twh : otherWH, tElement : this.endpoints[1],
                    timestamp:initialTimestamp
                });

            this.endpoints[0].paint( { anchorLoc : anchorLoc, timestamp:initialTimestamp });

            anchorLoc = this.endpoints[1].anchor.compute( {
                xy : [ otherOffset.left, otherOffset.top ], wh : otherWH, element : this.endpoints[1],
                elementId:this.endpoints[1].elementId,				
                txy : [ myOffset.left, myOffset.top ], twh : myWH, tElement : this.endpoints[0],
                timestamp:initialTimestamp				
            });
            this.endpoints[1].paint({ anchorLoc : anchorLoc, timestamp:initialTimestamp });
        }
        //*/
                                
// END INITIALISATION CODE			
        
// DETACHABLE 				
        this._jsPlumb.detachable = _jsPlumb.Defaults.ConnectionsDetachable;
        if (params.detachable === false) this._jsPlumb.detachable = false;
        if(this.endpoints[0].connectionsDetachable === false) this._jsPlumb.detachable = false;
        if(this.endpoints[1].connectionsDetachable === false) this._jsPlumb.detachable = false;                
// REATTACH
        this._jsPlumb.reattach = params.reattach || this.endpoints[0].reattachConnections || this.endpoints[1].reattachConnections || _jsPlumb.Defaults.ReattachConnections;
// COST + DIRECTIONALITY
        // if cost not supplied, try to inherit from source endpoint
        this._jsPlumb.cost = params.cost || this.endpoints[0].getConnectionCost();			        
        this._jsPlumb.directed = params.directed;
        // inherit directed flag if set no source endpoint
        if (params.directed == null) this._jsPlumb.directed = this.endpoints[0].areConnectionsDirected();        
// END COST + DIRECTIONALITY
                    
// PARAMETERS						
        // merge all the parameters objects into the connection.  parameters set
        // on the connection take precedence; then source endpoint params, then
        // finally target endpoint params.
        // TODO jsPlumb.extend could be made to take more than two args, and it would
        // apply the second through nth args in order.
        var _p = jsPlumb.extend({}, this.endpoints[1].getParameters());
        jsPlumb.extend(_p, this.endpoints[0].getParameters());
        jsPlumb.extend(_p, this.getParameters());
        this.setParameters(_p);
// END PARAMETERS

// PAINTING
                  
        // the very last thing we do is apply types, if there are any.
        var _types = [params.type, this.endpoints[0].connectionType, this.endpoints[1].connectionType ].join(" ");
        if (/[a-zA-Z]/.test(_types))
            this.addType(_types, params.data, true);        

        
// END PAINTING    
    };

    jsPlumbUtil.extend(jsPlumb.Connection, OverlayCapableJsPlumbUIComponent, {
        applyType : function(t, doNotRepaint) {            
            if (t.detachable != null) this.setDetachable(t.detachable);
            if (t.reattach != null) this.setReattach(t.reattach);
            if (t.scope) this.scope = t.scope;
            //editable = t.editable;  // TODO
            this.setConnector(t.connector, doNotRepaint);
        },
        getTypeDescriptor : function() { return "connection"; },
        getAttachedElements : function() {
            return this.endpoints;
        },
        addClass : function(c, informEndpoints) {        
            if (informEndpoints) {
                this.endpoints[0].addClass(c);
                this.endpoints[1].addClass(c); 
                if (this.suspendedEndpoint) this.suspendedEndpoint.addClass(c);                   
            }
            if (this.connector) {
                this.connector.addClass(c);
            }
        },
        removeClass : function(c, informEndpoints) {            
            if (informEndpoints) {
                this.endpoints[0].removeClass(c);
                this.endpoints[1].removeClass(c);                    
                if (this.suspendedEndpoint) this.suspendedEndpoint.removeClass(c);
            }
            if (this.connector) {
                this.connector.removeClass(c);
            }
        },
        isVisible : function() { return this._jsPlumb.visible; },
        setVisible : function(v) {
            this._jsPlumb.visible = v;
            //this[v ? "showOverlays" : "hideOverlays"]();
            if (this.connector) 
                this.connector.setVisible(v);
            this.repaint();
        },

        /* TODO move to connecto editors; it should put these on the prototype.

        setEditable : function(e) {
            if (this.connector && this.connector.isEditable())
                this._jsPlumb.editable = e;
            
            return this._jsPlumb.editable;
        },
        isEditable : function() { return this._jsPlumb.editable; },
        editStarted : function() {  
            this.setSuspendEvents(true);
            this.fire("editStarted", {
                path:this.connector.getPath()
            });            
            this._jsPlumb.instance.setHoverSuspended(true);
        },
        editCompleted : function() {            
            this.fire("editCompleted", {
                path:this.connector.getPath()
            });       
            this.setSuspendEvents(false);
            this.setHover(false);     
            this._jsPlumb.instance.setHoverSuspended(false);
        },
        editCanceled : function() {
            this.fire("editCanceled", {
                path:this.connector.getPath()
            });
            this.setHover(false);
            this._jsPlumb.instance.setHoverSuspended(false);
        },

*/

        cleanup:function() {
            //this.endpointsToDeleteOnDetach = null;
            this.endpoints = null;
            this.source = null;
            this.target = null;                    
            if (this.connector != null) {
                this.connector.cleanup();            
                this.connector.destroy();
            }
            this.connector = null;
        },
        isDetachable : function() {
            return this._jsPlumb.detachable === true;
        },
        setDetachable : function(detachable) {
          this._jsPlumb.detachable = detachable === true;
        },
        isReattach : function() {
            return this._jsPlumb.reattach === true;
        },        
        setReattach : function(reattach) {
          this._jsPlumb.reattach = reattach === true;
        },
        setHover : function(state) {
            if (this.connector && this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged()) {
                this.connector.setHover(state);
                jsPlumb.CurrentLibrary[state ? "addClass" : "removeClass"](this.source, this._jsPlumb.instance.hoverSourceClass);
                jsPlumb.CurrentLibrary[state ? "addClass" : "removeClass"](this.target, this._jsPlumb.instance.hoverTargetClass);
            }
        },
        getCost : function() { return this._jsPlumb.cost; },
        setCost : function(c) { this._jsPlumb.cost = c; },
        isDirected : function() { return this._jsPlumb.directed === true; },
        //
        // changes the parent element of this connection to newParent.  not exposed for the public API.
        //
        // TODO ensure moveParent method still works (the overlay stuff in particular)
        moveParent : function(newParent) {
            var jpcl = jsPlumb.CurrentLibrary, curParent = jpcl.getParent(this.connector.canvas);               
            if (this.connector.bgCanvas) {
                jpcl.removeElement(this.connector.bgCanvas);
                jpcl.appendElement(this.connector.bgCanvas, newParent);
            }
            jpcl.removeElement(this.connector.canvas);
            jpcl.appendElement(this.connector.canvas, newParent);                
            // this only applies for DOMOverlays
            for (var i = 0; i < this._jsPlumb.overlays.length; i++) {
                if (this._jsPlumb.overlays[i].isAppendedAtTopLevel) {
                    jpcl.removeElement(this._jsPlumb.overlays[i].canvas);
                    jpcl.appendElement(this._jsPlumb.overlays[i].canvas, newParent);
                    if (this._jsPlumb.overlays[i].reattachListeners) 
                        this._jsPlumb.overlays[i].reattachListeners(this.connector);
                }
            }
            if (this.connector.reattachListeners)       // this is for SVG/VML; change an element's parent and you have to reinit its listeners.
                this.connector.reattachListeners();     // the Canvas implementation doesn't have to care about this
        },
        getConnector : function() { return this.connector; },
        setConnector : function(connectorSpec, doNotRepaint) {
            var _ju = jsPlumbUtil;
            if (this.connector != null) {
                this.connector.cleanup();
                this.connector.destroy();
            }

            var connectorArgs = { 
                    _jsPlumb:this._jsPlumb.instance, 
                    parent:this._jsPlumb.params.parent, 
                    cssClass:this._jsPlumb.params.cssClass, 
                    container:this._jsPlumb.params.container,                 
                    "pointer-events":this._jsPlumb.params["pointer-events"]
                },
                renderMode = this._jsPlumb.instance.getRenderMode();
            
            if (_ju.isString(connectorSpec)) 
                this.connector = makeConnector(this._jsPlumb.instance, renderMode, connectorSpec, connectorArgs); // lets you use a string as shorthand.
            else if (_ju.isArray(connectorSpec)) {
                if (connectorSpec.length == 1)
                    this.connector = makeConnector(this._jsPlumb.instance, renderMode, connectorSpec[0], connectorArgs);
                else
                    this.connector = makeConnector(this._jsPlumb.instance, renderMode, connectorSpec[0], _ju.merge(connectorSpec[1], connectorArgs));
            }
            // binds mouse listeners to the current connector.
            this.bindListeners(this.connector, this, function(state) {                
                this.setHover(state, false);                
            }.bind(this));
            
            this.canvas = this.connector.canvas;

            if (this._jsPlumb.editable && jsPlumb.ConnectorEditors != null && jsPlumb.ConnectorEditors[this.connector.type] && this.connector.isEditable()) {
                new jsPlumb.ConnectorEditors[this.connector.type]({
                    connector:this.connector,
                    connection:this,
                    params:this._jsPlumb.params.editorParams || { }
                });
            }
            else {                    
                this._jsPlumb.editable = false;
            }                
                
            if (!doNotRepaint) this.repaint();
        },
        paint : function(params) {
                    
            if (!this._jsPlumb.instance.isSuspendDrawing() && this._jsPlumb.visible) {
                    
                params = params || {};
                var elId = params.elId, ui = params.ui, recalc = params.recalc, timestamp = params.timestamp,
                    // if the moving object is not the source we must transpose the two references.
                    swap = false,
                    tId = swap ? this.sourceId : this.targetId, sId = swap ? this.targetId : this.sourceId,                    
                    tIdx = swap ? 0 : 1, sIdx = swap ? 1 : 0;

                if (timestamp == null || timestamp != this._jsPlumb.lastPaintedAt) {                        
                    var sourceInfo = this._jsPlumb.instance.updateOffset( { elId : sId, offset : ui, recalc : recalc, timestamp : timestamp }).o,
                        targetInfo = this._jsPlumb.instance.updateOffset( { elId : tId, timestamp : timestamp }).o, // update the target if this is a forced repaint. otherwise, only the source has been moved.
                        sE = this.endpoints[sIdx], tE = this.endpoints[tIdx];

                    if (params.clearEdits) {
                        this._jsPlumb.overlayPositions = null;
                        sE.anchor.clearUserDefinedLocation();
                        tE.anchor.clearUserDefinedLocation();
                        this.connector.setEdited(false);
                    }
                    
                    var sAnchorP = sE.anchor.getCurrentLocation({xy:[sourceInfo.left,sourceInfo.top], wh:[sourceInfo.width, sourceInfo.height], element:sE, timestamp:timestamp}),              
                        tAnchorP = tE.anchor.getCurrentLocation({xy:[targetInfo.left,targetInfo.top], wh:[targetInfo.width, targetInfo.height], element:tE, timestamp:timestamp});                                                 
                        
                    this.connector.resetBounds();

                    this.connector.compute({
                        sourcePos:sAnchorP,
                        targetPos:tAnchorP, 
                        sourceEndpoint:this.endpoints[sIdx],
                        targetEndpoint:this.endpoints[tIdx],
                        lineWidth:this._jsPlumb.paintStyleInUse.lineWidth,                                          
                        sourceInfo:sourceInfo,
                        targetInfo:targetInfo,
                        clearEdits:params.clearEdits === true
                    });                                                                                        

                    var overlayExtents = { minX:Infinity, minY:Infinity, maxX:-Infinity, maxY:-Infinity };
                                        
                    // compute overlays. we do this first so we can get their placements, and adjust the
                    // container if needs be (if an overlay would be clipped)
                    for ( var i = 0; i < this._jsPlumb.overlays.length; i++) {
                        var o = this._jsPlumb.overlays[i];
                        if (o.isVisible()) {                            
                            this._jsPlumb.overlayPlacements[i] = o.draw(this.connector, this._jsPlumb.paintStyleInUse, this.getAbsoluteOverlayPosition(o));
                            overlayExtents.minX = Math.min(overlayExtents.minX, this._jsPlumb.overlayPlacements[i].minX);
                            overlayExtents.maxX = Math.max(overlayExtents.maxX, this._jsPlumb.overlayPlacements[i].maxX);
                            overlayExtents.minY = Math.min(overlayExtents.minY, this._jsPlumb.overlayPlacements[i].minY);
                            overlayExtents.maxY = Math.max(overlayExtents.maxY, this._jsPlumb.overlayPlacements[i].maxY);
                        }
                    }

                    var lineWidth = parseFloat(this._jsPlumb.paintStyleInUse.lineWidth || 1) / 2,
                        outlineWidth = parseFloat(this._jsPlumb.paintStyleInUse.lineWidth || 0),
                        extents = {
                            xmin : Math.min(this.connector.bounds.minX - (lineWidth + outlineWidth), overlayExtents.minX),
                            ymin : Math.min(this.connector.bounds.minY - (lineWidth + outlineWidth), overlayExtents.minY),
                            xmax : Math.max(this.connector.bounds.maxX + (lineWidth + outlineWidth), overlayExtents.maxX),
                            ymax : Math.max(this.connector.bounds.maxY + (lineWidth + outlineWidth), overlayExtents.maxY)
                        };

                    // paint the connector.
                    this.connector.paint(this._jsPlumb.paintStyleInUse, null, extents);  
                    // and then the overlays
                    for ( var j = 0; j < this._jsPlumb.overlays.length; j++) {
                        var p = this._jsPlumb.overlays[j];
                        if (p.isVisible()) {
                            p.paint(this._jsPlumb.overlayPlacements[j], extents);    
                        }
                    }                                                                          
                }
                this._jsPlumb.lastPaintedAt = timestamp;                        
            }       
        },
        /*
         * Function: repaint
         * Repaints the Connection. No parameters exposed to public API.
         */
        repaint : function(params) {
            params = params || {};            
            this.paint({ elId : this.sourceId, recalc : !(params.recalc === false), timestamp:params.timestamp, clearEdits:params.clearEdits });
        }
        
    }); // END Connection class            
})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the code for creating and manipulating anchors.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (simon.porritt@gmail.com)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */
;(function() {	
    
    //
	// manages anchors for all elements.
	//
	jsPlumb.AnchorManager = function(params) {
		var _amEndpoints = {},
            continuousAnchors = {},
            continuousAnchorLocations = {},
            userDefinedContinuousAnchorLocations = {},        
            continuousAnchorOrientations = {},
            Orientation = { HORIZONTAL : "horizontal", VERTICAL : "vertical", DIAGONAL : "diagonal", IDENTITY:"identity" },
			connectionsByElementId = {},
			self = this,
            anchorLists = {},
            jsPlumbInstance = params.jsPlumbInstance,
            jpcl = jsPlumb.CurrentLibrary,
            floatingConnections = {},
            // TODO this functions uses a crude method of determining orientation between two elements.
            // 'diagonal' should be chosen when the angle of the line between the two centers is around
            // one of 45, 135, 225 and 315 degrees. maybe +- 15 degrees.
            // used by AnchorManager.redraw
            calculateOrientation = function(sourceId, targetId, sd, td, sourceAnchor, targetAnchor) {
        
                if (sourceId === targetId) return {
                    orientation:Orientation.IDENTITY,
                    a:["top", "top"]
                };
        
                var theta = Math.atan2((td.centery - sd.centery) , (td.centerx - sd.centerx)),
                    theta2 = Math.atan2((sd.centery - td.centery) , (sd.centerx - td.centerx)),
                    h = ((sd.left <= td.left && sd.right >= td.left) || (sd.left <= td.right && sd.right >= td.right) ||
                        (sd.left <= td.left && sd.right >= td.right) || (td.left <= sd.left && td.right >= sd.right)),
                    v = ((sd.top <= td.top && sd.bottom >= td.top) || (sd.top <= td.bottom && sd.bottom >= td.bottom) ||
                        (sd.top <= td.top && sd.bottom >= td.bottom) || (td.top <= sd.top && td.bottom >= sd.bottom)),
                    possiblyTranslateEdges = function(edges) {
                        // this function checks to see if either anchor is Continuous, and if so, runs the suggested edge
                        // through the anchor: Continuous anchors can say which faces they support, and they get to choose 
                        // whether a certain face is honoured, or, if not, which face to replace it with. the behaviour when
                        // choosing an alternate face is to try for the opposite face first, then the next one clockwise, and then
                        // the opposite of that one.
                        return [
                            sourceAnchor.isContinuous ? sourceAnchor.verifyEdge(edges[0]) : edges[0],    
                            targetAnchor.isContinuous ? targetAnchor.verifyEdge(edges[1]) : edges[1]
                        ];
                    },
                    out = {
                        orientation:Orientation.DIAGONAL,
                        theta:theta,
                        theta2:theta2
                    };                        
                
                if (! (h || v)) {                    
                    if (td.left > sd.left && td.top > sd.top)
                        out.a = ["right", "top"];
                    else if (td.left > sd.left && sd.top > td.top)
                        out.a = [ "top", "left"];
                    else if (td.left < sd.left && td.top < sd.top)
                        out.a = [ "top", "right"];
                    else if (td.left < sd.left && td.top > sd.top)
                        out.a = ["left", "top" ];                            
                }
                else if (h) {
                    out.orientation = Orientation.HORIZONTAL;
                    out.a = sd.top < td.top ? ["bottom", "top"] : ["top", "bottom"];                    
                }
                else {
                    out.orientation = Orientation.VERTICAL;
                    out.a = sd.left < td.left ? ["right", "left"] : ["left", "right"];
                }
                
                out.a = possiblyTranslateEdges(out.a);
                return out;
            },
                // used by placeAnchors function
            placeAnchorsOnLine = function(desc, elementDimensions, elementPosition,
                            connections, horizontal, otherMultiplier, reverse) {
                var a = [], step = elementDimensions[horizontal ? 0 : 1] / (connections.length + 1);
        
                for (var i = 0; i < connections.length; i++) {
                    var val = (i + 1) * step, other = otherMultiplier * elementDimensions[horizontal ? 1 : 0];
                    if (reverse)
                      val = elementDimensions[horizontal ? 0 : 1] - val;
        
                    var dx = (horizontal ? val : other), x = elementPosition[0] + dx,  xp = dx / elementDimensions[0],
                        dy = (horizontal ? other : val), y = elementPosition[1] + dy, yp = dy / elementDimensions[1];
        
                    a.push([ x, y, xp, yp, connections[i][1], connections[i][2] ]);
                }
        
                return a;
            },
            // used by edgeSortFunctions        
            currySort = function(reverseAngles) {
                return function(a,b) {
                    var r = true;
                    if (reverseAngles) {
                        /*if (a[0][0] < b[0][0])
                            r = true;
                        else
                            r = a[0][1] > b[0][1];*/
                        r = a[0][0] < b[0][0];
                    }
                    else {
                        /*if (a[0][0] > b[0][0])
                            r= true;
                        else
                            r =a[0][1] > b[0][1];
                        */
                        r = a[0][0] > b[0][0];
                    }
                    return r === false ? -1 : 1;
                };
            },
                // used by edgeSortFunctions
            leftSort = function(a,b) {
                // first get adjusted values
                var p1 = a[0][0] < 0 ? -Math.PI - a[0][0] : Math.PI - a[0][0],
                p2 = b[0][0] < 0 ? -Math.PI - b[0][0] : Math.PI - b[0][0];
                if (p1 > p2) return 1;
                else return a[0][1] > b[0][1] ? 1 : -1;
            },
                // used by placeAnchors
            edgeSortFunctions = {
                "top":function(a, b) { return a[0] > b[0] ? 1 : -1; },
                "right":currySort(true),
                "bottom":currySort(true),
                "left":leftSort
            },
                // used by placeAnchors
            _sortHelper = function(_array, _fn) { return _array.sort(_fn); },
                // used by AnchorManager.redraw
            placeAnchors = function(elementId, _anchorLists) {		
                var cd = jsPlumbInstance.getCachedData(elementId), sS = cd.s, sO = cd.o,
                placeSomeAnchors = function(desc, elementDimensions, elementPosition, unsortedConnections, isHorizontal, otherMultiplier, orientation) {
                    if (unsortedConnections.length > 0) {
                        var sc = _sortHelper(unsortedConnections, edgeSortFunctions[desc]), // puts them in order based on the target element's pos on screen
                            reverse = desc === "right" || desc === "top",
                            anchors = placeAnchorsOnLine(desc, elementDimensions,
                                                     elementPosition, sc,
                                                     isHorizontal, otherMultiplier, reverse );
        
                        // takes a computed anchor position and adjusts it for parent offset and scroll, then stores it.
                        var _setAnchorLocation = function(endpoint, anchorPos) {
                            var a = jsPlumbInstance.adjustForParentOffsetAndScroll([anchorPos[0], anchorPos[1]], endpoint.canvas);
                            continuousAnchorLocations[endpoint.id] = [ a[0], a[1], anchorPos[2], anchorPos[3] ];
                            continuousAnchorOrientations[endpoint.id] = orientation;
                        };
        
                        for (var i = 0; i < anchors.length; i++) {
                            var c = anchors[i][4], weAreSource = c.endpoints[0].elementId === elementId, weAreTarget = c.endpoints[1].elementId === elementId;
                            if (weAreSource)
                                _setAnchorLocation(c.endpoints[0], anchors[i]);
                            else if (weAreTarget)
                                _setAnchorLocation(c.endpoints[1], anchors[i]);
                        }
                    }
                };
        
                placeSomeAnchors("bottom", sS, [sO.left,sO.top], _anchorLists.bottom, true, 1, [0,1]);
                placeSomeAnchors("top", sS, [sO.left,sO.top], _anchorLists.top, true, 0, [0,-1]);
                placeSomeAnchors("left", sS, [sO.left,sO.top], _anchorLists.left, false, 0, [-1,0]);
                placeSomeAnchors("right", sS, [sO.left,sO.top], _anchorLists.right, false, 1, [1,0]);
            };

        this.reset = function() {
            _amEndpoints = {};
            connectionsByElementId = {};
            anchorLists = {};
        };			
        this.addFloatingConnection = function(key, conn) {
            floatingConnections[key] = conn;
        };
        this.removeFloatingConnection = function(key) {
            delete floatingConnections[key];
        };                                                 
        this.newConnection = function(conn) {
			var sourceId = conn.sourceId, targetId = conn.targetId,
				ep = conn.endpoints,
                doRegisterTarget = true,
                registerConnection = function(otherIndex, otherEndpoint, otherAnchor, elId, c) {
					if ((sourceId == targetId) && otherAnchor.isContinuous){
                       // remove the target endpoint's canvas.  we dont need it.
                        jpcl.removeElement(ep[1].canvas);
                        doRegisterTarget = false;
                    }
					jsPlumbUtil.addToList(connectionsByElementId, elId, [c, otherEndpoint, otherAnchor.constructor == jsPlumb.DynamicAnchor]);
			    };

			registerConnection(0, ep[0], ep[0].anchor, targetId, conn);
            if (doRegisterTarget)
            	registerConnection(1, ep[1], ep[1].anchor, sourceId, conn);
		};
        var removeEndpointFromAnchorLists = function(endpoint) {
            (function(list, eId) {
                if (list) {  // transient anchors dont get entries in this list.
                    var f = function(e) { return e[4] == eId; };
                    jsPlumbUtil.removeWithFunction(list.top, f);
                    jsPlumbUtil.removeWithFunction(list.left, f);
                    jsPlumbUtil.removeWithFunction(list.bottom, f);
                    jsPlumbUtil.removeWithFunction(list.right, f);
                }
            })(anchorLists[endpoint.elementId], endpoint.id);
        };
		this.connectionDetached = function(connInfo) {
            var connection = connInfo.connection || connInfo,
			    sourceId = connInfo.sourceId,
                targetId = connInfo.targetId,
				ep = connection.endpoints,
				removeConnection = function(otherIndex, otherEndpoint, otherAnchor, elId, c) {
					if (otherAnchor != null && otherAnchor.constructor == jsPlumb.FloatingAnchor) {
						// no-op
					}
					else {
						jsPlumbUtil.removeWithFunction(connectionsByElementId[elId], function(_c) {
							return _c[0].id == c.id;
						});
					}
				};
				
			removeConnection(1, ep[1], ep[1].anchor, sourceId, connection);
			removeConnection(0, ep[0], ep[0].anchor, targetId, connection);

            // remove from anchorLists            
            removeEndpointFromAnchorLists(connection.endpoints[0]);
            removeEndpointFromAnchorLists(connection.endpoints[1]);

            self.redraw(connection.sourceId);
            self.redraw(connection.targetId);
		};
		this.add = function(endpoint, elementId) {
			jsPlumbUtil.addToList(_amEndpoints, elementId, endpoint);
		};
		this.changeId = function(oldId, newId) {
			connectionsByElementId[newId] = connectionsByElementId[oldId];
			_amEndpoints[newId] = _amEndpoints[oldId];
			delete connectionsByElementId[oldId];
			delete _amEndpoints[oldId];	
		};
		this.getConnectionsFor = function(elementId) {
			return connectionsByElementId[elementId] || [];
		};
		this.getEndpointsFor = function(elementId) {
			return _amEndpoints[elementId] || [];
		};
		this.deleteEndpoint = function(endpoint) {
			jsPlumbUtil.removeWithFunction(_amEndpoints[endpoint.elementId], function(e) {
				return e.id == endpoint.id;
			});
            removeEndpointFromAnchorLists(endpoint);
		};
		this.clearFor = function(elementId) {
			delete _amEndpoints[elementId];
			_amEndpoints[elementId] = [];
		};
        // updates the given anchor list by either updating an existing anchor's info, or adding it. this function
        // also removes the anchor from its previous list, if the edge it is on has changed.
        // all connections found along the way (those that are connected to one of the faces this function
        // operates on) are added to the connsToPaint list, as are their endpoints. in this way we know to repaint
        // them wthout having to calculate anything else about them.
        var _updateAnchorList = function(lists, theta, order, conn, aBoolean, otherElId, idx, reverse, edgeId, elId, connsToPaint, endpointsToPaint) {        
            // first try to find the exact match, but keep track of the first index of a matching element id along the way.s
            var exactIdx = -1,
                firstMatchingElIdx = -1,
                endpoint = conn.endpoints[idx],
                endpointId = endpoint.id,
                oIdx = [1,0][idx],
                values = [ [ theta, order ], conn, aBoolean, otherElId, endpointId ],
                listToAddTo = lists[edgeId],
                listToRemoveFrom = endpoint._continuousAnchorEdge ? lists[endpoint._continuousAnchorEdge] : null;

            if (listToRemoveFrom) {
                var rIdx = jsPlumbUtil.findWithFunction(listToRemoveFrom, function(e) { return e[4] == endpointId; });
                if (rIdx != -1) {
                    listToRemoveFrom.splice(rIdx, 1);
                    // get all connections from this list
                    for (var i = 0; i < listToRemoveFrom.length; i++) {
                        jsPlumbUtil.addWithFunction(connsToPaint, listToRemoveFrom[i][1], function(c) { return c.id == listToRemoveFrom[i][1].id; });
                        jsPlumbUtil.addWithFunction(endpointsToPaint, listToRemoveFrom[i][1].endpoints[idx], function(e) { return e.id == listToRemoveFrom[i][1].endpoints[idx].id; });
                        jsPlumbUtil.addWithFunction(endpointsToPaint, listToRemoveFrom[i][1].endpoints[oIdx], function(e) { return e.id == listToRemoveFrom[i][1].endpoints[oIdx].id; });
                    }
                }
            }

            for (i = 0; i < listToAddTo.length; i++) {
                if (params.idx == 1 && listToAddTo[i][3] === otherElId && firstMatchingElIdx == -1)
                    firstMatchingElIdx = i;
                jsPlumbUtil.addWithFunction(connsToPaint, listToAddTo[i][1], function(c) { return c.id == listToAddTo[i][1].id; });                
                jsPlumbUtil.addWithFunction(endpointsToPaint, listToAddTo[i][1].endpoints[idx], function(e) { return e.id == listToAddTo[i][1].endpoints[idx].id; });
                jsPlumbUtil.addWithFunction(endpointsToPaint, listToAddTo[i][1].endpoints[oIdx], function(e) { return e.id == listToAddTo[i][1].endpoints[oIdx].id; });
            }
            if (exactIdx != -1) {
                listToAddTo[exactIdx] = values;
            }
            else {
                var insertIdx = reverse ? firstMatchingElIdx != -1 ? firstMatchingElIdx : 0 : listToAddTo.length; // of course we will get this from having looked through the array shortly.
                listToAddTo.splice(insertIdx, 0, values);
            }

            // store this for next time.
            endpoint._continuousAnchorEdge = edgeId;
        };

        //
        // find the entry in an endpoint's list for this connection and update its target endpoint
        // with the current target in the connection.
        // 
        //
        this.updateOtherEndpoint = function(elId, oldTargetId, newTargetId, connection) {
            var sIndex = jsPlumbUtil.findWithFunction(connectionsByElementId[elId], function(i) {
                    return i[0].id === connection.id;
                }),
                tIndex = jsPlumbUtil.findWithFunction(connectionsByElementId[oldTargetId], function(i) {
                    return i[0].id === connection.id;
                });

            // update or add data for source
            if (sIndex != -1) {
                connectionsByElementId[elId][sIndex][0] = connection;
                connectionsByElementId[elId][sIndex][1] = connection.endpoints[1];
                connectionsByElementId[elId][sIndex][2] = connection.endpoints[1].anchor.constructor == jsPlumb.DynamicAnchor;
            }

            // remove entry for previous target (if there)
            if (tIndex > -1) {

                connectionsByElementId[oldTargetId].splice(tIndex, 1);
                // add entry for new target
                jsPlumbUtil.addToList(connectionsByElementId, newTargetId, [connection, connection.endpoints[0], connection.endpoints[0].anchor.constructor == jsPlumb.DynamicAnchor]);         
            }
        };       
        
        //
        // notification that the connection given has changed source from the originalId to the newId.
        // This involves:
        // 1. removing the connection from the list of connections stored for the originalId
        // 2. updating the source information for the target of the connection
        // 3. re-registering the connection in connectionsByElementId with the newId
        //
        this.sourceChanged = function(originalId, newId, connection) {            
            // remove the entry that points from the old source to the target
            jsPlumbUtil.removeWithFunction(connectionsByElementId[originalId], function(info) {
                return info[0].id === connection.id;
            });
            // find entry for target and update it
            var tIdx = jsPlumbUtil.findWithFunction(connectionsByElementId[connection.targetId], function(i) {
                return i[0].id === connection.id;
            });
            if (tIdx > -1) {
                connectionsByElementId[connection.targetId][tIdx][0] = connection;
                connectionsByElementId[connection.targetId][tIdx][1] = connection.endpoints[0];
                connectionsByElementId[connection.targetId][tIdx][2] = connection.endpoints[0].anchor.constructor == jsPlumb.DynamicAnchor;
            }
            // add entry for new source
            jsPlumbUtil.addToList(connectionsByElementId, newId, [connection, connection.endpoints[1], connection.endpoints[1].anchor.constructor == jsPlumb.DynamicAnchor]);         
        };

        //
        // moves the given endpoint from `currentId` to `element`.
        // This involves:
        //
        // 1. changing the key in _amEndpoints under which the endpoint is stored
        // 2. changing the source or target values in all of the endpoint's connections
        // 3. changing the array in connectionsByElementId in which the endpoint's connections
        //    are stored (done by either sourceChanged or updateOtherEndpoint)
        //
        this.rehomeEndpoint = function(ep, currentId, element) {
            var eps = _amEndpoints[currentId] || [], 
                elementId = jsPlumbInstance.getId(element);
                
            if (elementId !== currentId) {
                var idx = jsPlumbUtil.indexOf(eps, ep);
                if (idx > -1) {
                    var _ep = eps.splice(idx, 1)[0];
                    self.add(_ep, elementId);
                }
            }

            for (var i = 0; i < ep.connections.length; i++) {                
                if (ep.connections[i].sourceId == currentId) {
                    ep.connections[i].sourceId = ep.elementId;
                    ep.connections[i].source = ep.element;                  
                    self.sourceChanged(currentId, ep.elementId, ep.connections[i]);
                }
                else if(ep.connections[i].targetId == currentId) {
                    ep.connections[i].targetId = ep.elementId;
                    ep.connections[i].target = ep.element;   
                    self.updateOtherEndpoint(ep.connections[i].sourceId, currentId, ep.elementId, ep.connections[i]);               
                }
            }   
        };

		this.redraw = function(elementId, ui, timestamp, offsetToUI, clearEdits, doNotRecalcEndpoint) {
		
			if (!jsPlumbInstance.isSuspendDrawing()) {
				// get all the endpoints for this element
				var ep = _amEndpoints[elementId] || [],
					endpointConnections = connectionsByElementId[elementId] || [],
					connectionsToPaint = [],
					endpointsToPaint = [],
	                anchorsToUpdate = [];
	            
				timestamp = timestamp || jsPlumbInstance.timestamp();
				// offsetToUI are values that would have been calculated in the dragManager when registering
				// an endpoint for an element that had a parent (somewhere in the hierarchy) that had been
				// registered as draggable.
				offsetToUI = offsetToUI || {left:0, top:0};
				if (ui) {
					ui = {
						left:ui.left + offsetToUI.left,
						top:ui.top + offsetToUI.top
					};
				}
									
				// valid for one paint cycle.
				var myOffset = jsPlumbInstance.updateOffset( { elId : elementId, offset : ui, recalc : false, timestamp : timestamp }),
	                orientationCache = {};
				
				// actually, first we should compute the orientation of this element to all other elements to which
				// this element is connected with a continuous anchor (whether both ends of the connection have
				// a continuous anchor or just one)
	                        
	            for (var i = 0; i < endpointConnections.length; i++) {
	                var conn = endpointConnections[i][0],
						sourceId = conn.sourceId,
	                    targetId = conn.targetId,
	                    sourceContinuous = conn.endpoints[0].anchor.isContinuous,
	                    targetContinuous = conn.endpoints[1].anchor.isContinuous;
	
	                if (sourceContinuous || targetContinuous) {
		                var oKey = sourceId + "_" + targetId,
		                    oKey2 = targetId + "_" + sourceId,
		                    o = orientationCache[oKey],
		                    oIdx = conn.sourceId == elementId ? 1 : 0;
	
		                if (sourceContinuous && !anchorLists[sourceId]) anchorLists[sourceId] = { top:[], right:[], bottom:[], left:[] };
		                if (targetContinuous && !anchorLists[targetId]) anchorLists[targetId] = { top:[], right:[], bottom:[], left:[] };
	
		                if (elementId != targetId) jsPlumbInstance.updateOffset( { elId : targetId, timestamp : timestamp }); 
		                if (elementId != sourceId) jsPlumbInstance.updateOffset( { elId : sourceId, timestamp : timestamp }); 
	
		                var td = jsPlumbInstance.getCachedData(targetId),
							sd = jsPlumbInstance.getCachedData(sourceId);
	
		                if (targetId == sourceId && (sourceContinuous || targetContinuous)) {
		                    // here we may want to improve this by somehow determining the face we'd like
						    // to put the connector on.  ideally, when drawing, the face should be calculated
						    // by determining which face is closest to the point at which the mouse button
							// was released.  for now, we're putting it on the top face.                            
		                    _updateAnchorList(
                                anchorLists[sourceId], 
                                -Math.PI / 2, 
                                0, 
                                conn, 
                                false, 
                                targetId, 
                                0, false, "top", sourceId, connectionsToPaint, endpointsToPaint);
						}
		                else {
		                    if (!o) {
		                        o = calculateOrientation(sourceId, targetId, sd.o, td.o, conn.endpoints[0].anchor, conn.endpoints[1].anchor);
		                        orientationCache[oKey] = o;
		                        // this would be a performance enhancement, but the computed angles need to be clamped to
		                        //the (-PI/2 -> PI/2) range in order for the sorting to work properly.
		                    /*  orientationCache[oKey2] = {
		                            orientation:o.orientation,
		                            a:[o.a[1], o.a[0]],
		                            theta:o.theta + Math.PI,
		                            theta2:o.theta2 + Math.PI
		                        };*/
		                    }
		                    if (sourceContinuous) _updateAnchorList(anchorLists[sourceId], o.theta, 0, conn, false, targetId, 0, false, o.a[0], sourceId, connectionsToPaint, endpointsToPaint);
		                    if (targetContinuous) _updateAnchorList(anchorLists[targetId], o.theta2, -1, conn, true, sourceId, 1, true, o.a[1], targetId, connectionsToPaint, endpointsToPaint);
		                }
	
		                if (sourceContinuous) jsPlumbUtil.addWithFunction(anchorsToUpdate, sourceId, function(a) { return a === sourceId; });
		                if (targetContinuous) jsPlumbUtil.addWithFunction(anchorsToUpdate, targetId, function(a) { return a === targetId; });
		                jsPlumbUtil.addWithFunction(connectionsToPaint, conn, function(c) { return c.id == conn.id; });
		                if ((sourceContinuous && oIdx === 0) || (targetContinuous && oIdx === 1))
		                	jsPlumbUtil.addWithFunction(endpointsToPaint, conn.endpoints[oIdx], function(e) { return e.id == conn.endpoints[oIdx].id; });
		            }
	            }				
				// place Endpoints whose anchors are continuous but have no Connections
				for (i = 0; i < ep.length; i++) {
					if (ep[i].connections.length === 0 && ep[i].anchor.isContinuous) {
						if (!anchorLists[elementId]) anchorLists[elementId] = { top:[], right:[], bottom:[], left:[] };
						_updateAnchorList(anchorLists[elementId], -Math.PI / 2, 0, {endpoints:[ep[i], ep[i]], paint:function(){}}, false, elementId, 0, false, "top", elementId, connectionsToPaint, endpointsToPaint);
						jsPlumbUtil.addWithFunction(anchorsToUpdate, elementId, function(a) { return a === elementId; });
					}
				}
	            // now place all the continuous anchors we need to;
	            for (i = 0; i < anchorsToUpdate.length; i++) {
					placeAnchors(anchorsToUpdate[i], anchorLists[anchorsToUpdate[i]]);
				}

				// now that continuous anchors have been placed, paint all the endpoints for this element
	            // TODO performance: add the endpoint ids to a temp array, and then when iterating in the next
	            // loop, check that we didn't just paint that endpoint. we can probably shave off a few more milliseconds this way.
				for (i = 0; i < ep.length; i++) {				
                    ep[i].paint( { timestamp : timestamp, offset : myOffset, dimensions : myOffset.s, recalc:doNotRecalcEndpoint !== true });
				}
	            // ... and any other endpoints we came across as a result of the continuous anchors.
	            for (i = 0; i < endpointsToPaint.length; i++) {
                    var cd = jsPlumbInstance.getCachedData(endpointsToPaint[i].elementId);
                    // dont use timestamp for this endpoint, as it is not for the current element and we may 
                    // have needed to recalculate anchor position due to the element for the endpoint moving.
                    //endpointsToPaint[i].paint( { timestamp : null, offset : cd, dimensions : cd.s });

                    endpointsToPaint[i].paint( { timestamp : timestamp, offset : cd, dimensions : cd.s });
				}

				// paint all the standard and "dynamic connections", which are connections whose other anchor is
				// static and therefore does need to be recomputed; we make sure that happens only one time.
	
				// TODO we could have compiled a list of these in the first pass through connections; might save some time.
				for (i = 0; i < endpointConnections.length; i++) {
					var otherEndpoint = endpointConnections[i][1];
					if (otherEndpoint.anchor.constructor == jsPlumb.DynamicAnchor) {			 							
						otherEndpoint.paint({ elementWithPrecedence:elementId, timestamp:timestamp });								
	                    jsPlumbUtil.addWithFunction(connectionsToPaint, endpointConnections[i][0], function(c) { return c.id == endpointConnections[i][0].id; });
						// all the connections for the other endpoint now need to be repainted
						for (var k = 0; k < otherEndpoint.connections.length; k++) {
							if (otherEndpoint.connections[k] !== endpointConnections[i][0])							
	                            jsPlumbUtil.addWithFunction(connectionsToPaint, otherEndpoint.connections[k], function(c) { return c.id == otherEndpoint.connections[k].id; });
						}
					} else if (otherEndpoint.anchor.constructor == jsPlumb.Anchor) {					
	                    jsPlumbUtil.addWithFunction(connectionsToPaint, endpointConnections[i][0], function(c) { return c.id == endpointConnections[i][0].id; });
					}
				}
				// paint current floating connection for this element, if there is one.
				var fc = floatingConnections[elementId];
				if (fc) 
					fc.paint({timestamp:timestamp, recalc:false, elId:elementId});
				                
				// paint all the connections
				for (i = 0; i < connectionsToPaint.length; i++) {
					// if not a connection between the two elements in question dont use the timestamp.
                    var ts  =timestamp;// ((connectionsToPaint[i].sourceId == sourceId && connectionsToPaint[i].targetId == targetId) ||
                               //(connectionsToPaint[i].sourceId == targetId && connectionsToPaint[i].targetId == sourceId)) ? timestamp : null;
                    connectionsToPaint[i].paint({elId:elementId, timestamp:ts, recalc:false, clearEdits:clearEdits});
				}
			}
		};        
        
        var ContinuousAnchor = function(anchorParams) {
            jsPlumbUtil.EventGenerator.apply(this);
            this.type = "Continuous";
            this.isDynamic = true;
            this.isContinuous = true;
            var faces = anchorParams.faces || ["top", "right", "bottom", "left"],
                clockwise = !(anchorParams.clockwise === false),
                availableFaces = { },
                opposites = { "top":"bottom", "right":"left","left":"right","bottom":"top" },
                clockwiseOptions = { "top":"right", "right":"bottom","left":"top","bottom":"left" },
                antiClockwiseOptions = { "top":"left", "right":"top","left":"bottom","bottom":"right" },
                secondBest = clockwise ? clockwiseOptions : antiClockwiseOptions,
                lastChoice = clockwise ? antiClockwiseOptions : clockwiseOptions,
                cssClass = anchorParams.cssClass || "";
            
            for (var i = 0; i < faces.length; i++) { availableFaces[faces[i]] = true; }
          
            // if the given edge is supported, returns it. otherwise looks for a substitute that _is_
            // supported. if none supported we also return the request edge.
            this.verifyEdge = function(edge) {
                if (availableFaces[edge]) return edge;
                else if (availableFaces[opposites[edge]]) return opposites[edge];
                else if (availableFaces[secondBest[edge]]) return secondBest[edge];
                else if (availableFaces[lastChoice[edge]]) return lastChoice[edge];
                return edge; // we have to give them something.
            };
            
            this.compute = function(params) {
                return userDefinedContinuousAnchorLocations[params.element.id] || continuousAnchorLocations[params.element.id] || [0,0];
            };
            this.getCurrentLocation = function(params) {
                return userDefinedContinuousAnchorLocations[params.element.id] || continuousAnchorLocations[params.element.id] || [0,0];
            };
            this.getOrientation = function(endpoint) {
                return continuousAnchorOrientations[endpoint.id] || [0,0];
            };
            this.clearUserDefinedLocation = function() { 
                delete userDefinedContinuousAnchorLocations[anchorParams.elementId]; 
            };
            this.setUserDefinedLocation = function(loc) { 
                userDefinedContinuousAnchorLocations[anchorParams.elementId] = loc; 
            };            
            this.getCssClass = function() { return cssClass; };
            this.setCssClass = function(c) { cssClass = c; };
        };        
        
        // continuous anchors
        jsPlumbInstance.continuousAnchorFactory = {
            get:function(params) {
                var existing = continuousAnchors[params.elementId];
                if (!existing) {
                    existing = new ContinuousAnchor(params);                    
                    continuousAnchors[params.elementId] = existing;
                }
                return existing;
            },
            clear:function(elementId) {
                delete continuousAnchors[elementId];
            }
        };
	};
    
    /**
     * Anchors model a position on some element at which an Endpoint may be located.  They began as a first class citizen of jsPlumb, ie. a user
     * was required to create these themselves, but over time this has been replaced by the concept of referring to them either by name (eg. "TopMiddle"),
     * or by an array describing their coordinates (eg. [ 0, 0.5, 0, -1 ], which is the same as "TopMiddle").  jsPlumb now handles all of the
     * creation of Anchors without user intervention.
     */
    jsPlumb.Anchor = function(params) {       
        this.x = params.x || 0;
        this.y = params.y || 0;
        this.elementId = params.elementId;  
        this.cssClass = params.cssClass || "";      
        this.userDefinedLocation = null;
        this.orientation = params.orientation || [ 0, 0 ];

        jsPlumbUtil.EventGenerator.apply(this);
        
        var jsPlumbInstance = params.jsPlumbInstance;//,
            //lastTimestamp = null;//, lastReturnValue = null;
        
        this.lastReturnValue = null;
        this.offsets = params.offsets || [ 0, 0 ];
        this.timestamp = null;        
        this.compute = function(params) {
            
            var xy = params.xy, wh = params.wh, element = params.element, timestamp = params.timestamp; 

            if(params.clearUserDefinedLocation)
                this.userDefinedLocation = null;
            
            if (timestamp && timestamp === self.timestamp)
                return this.lastReturnValue;        
            
            if (this.userDefinedLocation != null) {
                this.lastReturnValue = this.userDefinedLocation;
            }
            else {                
                
                this.lastReturnValue = [ xy[0] + (this.x * wh[0]) + this.offsets[0], xy[1] + (this.y * wh[1]) + this.offsets[1] ];                    
                // adjust loc if there is an offsetParent
                this.lastReturnValue = jsPlumbInstance.adjustForParentOffsetAndScroll(this.lastReturnValue, element.canvas);
            }
            
            this.timestamp = timestamp;
            return this.lastReturnValue;
        };

        this.getCurrentLocation = function(params) { 
            return (this.lastReturnValue == null || (params.timestamp != null && this.timestamp != params.timestamp)) ? this.compute(params) : this.lastReturnValue; 
        };
    };
    jsPlumbUtil.extend(jsPlumb.Anchor, jsPlumbUtil.EventGenerator, {
        equals : function(anchor) {
            if (!anchor) return false;
            var ao = anchor.getOrientation(),
                o = this.getOrientation();
            return this.x == anchor.x && this.y == anchor.y && this.offsets[0] == anchor.offsets[0] && this.offsets[1] == anchor.offsets[1] && o[0] == ao[0] && o[1] == ao[1];
        },
        getUserDefinedLocation : function() { 
            return this.userDefinedLocation;
        },        
        setUserDefinedLocation : function(l) {
            this.userDefinedLocation = l;
        },
        clearUserDefinedLocation : function() {
            this.userDefinedLocation = null;
        },
        getOrientation : function(_endpoint) { return this.orientation; },
        getCssClass : function() { return this.cssClass; }
    });

    /**
     * An Anchor that floats. its orientation is computed dynamically from
     * its position relative to the anchor it is floating relative to.  It is used when creating 
     * a connection through drag and drop.
     * 
     * TODO FloatingAnchor could totally be refactored to extend Anchor just slightly.
     */
    jsPlumb.FloatingAnchor = function(params) {
        
        jsPlumb.Anchor.apply(this, arguments);

        // this is the anchor that this floating anchor is referenced to for
        // purposes of calculating the orientation.
        var ref = params.reference,
            jpcl = jsPlumb.CurrentLibrary,
            jsPlumbInstance = params.jsPlumbInstance,
            // the canvas this refers to.
            refCanvas = params.referenceCanvas,
            size = jpcl.getSize(jpcl.getElementObject(refCanvas)),
            // these are used to store the current relative position of our
            // anchor wrt the reference anchor. they only indicate
            // direction, so have a value of 1 or -1 (or, very rarely, 0). these
            // values are written by the compute method, and read
            // by the getOrientation method.
            xDir = 0, yDir = 0,
            // temporary member used to store an orientation when the floating
            // anchor is hovering over another anchor.
            orientation = null,
            _lastResult = null;

        // clear from parent. we want floating anchor orientation to always be computed.
        this.orientation = null;

        // set these to 0 each; they are used by certain types of connectors in the loopback case,
        // when the connector is trying to clear the element it is on. but for floating anchor it's not
        // very important.
        this.x = 0; this.y = 0;

        this.isFloating = true;

        this.compute = function(params) {
            var xy = params.xy, element = params.element,
            result = [ xy[0] + (size[0] / 2), xy[1] + (size[1] / 2) ]; // return origin of the element. we may wish to improve this so that any object can be the drag proxy.
                        
            // adjust loc if there is an offsetParent
            result = jsPlumbInstance.adjustForParentOffsetAndScroll(result, element.canvas);
            
            _lastResult = result;
            return result;
        };

        this.getOrientation = function(_endpoint) {
            if (orientation) return orientation;
            else {
                var o = ref.getOrientation(_endpoint);
                // here we take into account the orientation of the other
                // anchor: if it declares zero for some direction, we declare zero too. this might not be the most awesome. perhaps we can come
                // up with a better way. it's just so that the line we draw looks like it makes sense. maybe this wont make sense.
                return [ Math.abs(o[0]) * xDir * -1,
                        Math.abs(o[1]) * yDir * -1 ];
            }
        };

        /**
         * notification the endpoint associated with this anchor is hovering
         * over another anchor; we want to assume that anchor's orientation
         * for the duration of the hover.
         */
        this.over = function(anchor, endpoint) { 
            orientation = anchor.getOrientation(endpoint); 
        };

        /**
         * notification the endpoint associated with this anchor is no
         * longer hovering over another anchor; we should resume calculating
         * orientation as we normally do.
         */
        this.out = function() { orientation = null; };

        this.getCurrentLocation = function(params) { return _lastResult == null ? this.compute(params) : _lastResult; };
    };
    jsPlumbUtil.extend(jsPlumb.FloatingAnchor, jsPlumb.Anchor);

    var _convertAnchor = function(anchor, jsPlumbInstance, elementId) { 
        return anchor.constructor == jsPlumb.Anchor ? anchor: jsPlumbInstance.makeAnchor(anchor, elementId, jsPlumbInstance); 
    };

    /* 
     * A DynamicAnchor is an Anchor that contains a list of other Anchors, which it cycles
     * through at compute time to find the one that is located closest to
     * the center of the target element, and returns that Anchor's compute
     * method result. this causes endpoints to follow each other with
     * respect to the orientation of their target elements, which is a useful
     * feature for some applications.
     * 
     */
    jsPlumb.DynamicAnchor = function(params) {
        jsPlumb.Anchor.apply(this, arguments);
        
        this.isSelective = true;
        this.isDynamic = true;			
        this.anchors = [];
        this.elementId = params.elementId;
        this.jsPlumbInstance = params.jsPlumbInstance;

        for (var i = 0; i < params.anchors.length; i++) 
            this.anchors[i] = _convertAnchor(params.anchors[i], this.jsPlumbInstance, this.elementId);			
        this.addAnchor = function(anchor) { this.anchors.push(_convertAnchor(anchor, this.jsPlumbInstance, this.elementId)); };
        this.getAnchors = function() { return this.anchors; };
        this.locked = false;
        var _curAnchor = this.anchors.length > 0 ? this.anchors[0] : null,
            _curIndex = this.anchors.length > 0 ? 0 : -1,
            _lastAnchor = _curAnchor,
            self = this,
        
            // helper method to calculate the distance between the centers of the two elements.
            _distance = function(anchor, cx, cy, xy, wh) {
                var ax = xy[0] + (anchor.x * wh[0]), ay = xy[1] + (anchor.y * wh[1]),				
                    acx = xy[0] + (wh[0] / 2), acy = xy[1] + (wh[1] / 2);
                return (Math.sqrt(Math.pow(cx - ax, 2) + Math.pow(cy - ay, 2)) +
                        Math.sqrt(Math.pow(acx - ax, 2) + Math.pow(acy - ay, 2)));
            },        
            // default method uses distance between element centers.  you can provide your own method in the dynamic anchor
            // constructor (and also to jsPlumb.makeDynamicAnchor). the arguments to it are four arrays: 
            // xy - xy loc of the anchor's element
            // wh - anchor's element's dimensions
            // txy - xy loc of the element of the other anchor in the connection
            // twh - dimensions of the element of the other anchor in the connection.
            // anchors - the list of selectable anchors
            _anchorSelector = params.selector || function(xy, wh, txy, twh, anchors) {
                var cx = txy[0] + (twh[0] / 2), cy = txy[1] + (twh[1] / 2);
                var minIdx = -1, minDist = Infinity;
                for ( var i = 0; i < anchors.length; i++) {
                    var d = _distance(anchors[i], cx, cy, xy, wh);
                    if (d < minDist) {
                        minIdx = i + 0;
                        minDist = d;
                    }
                }
                return anchors[minIdx];
            };
        
        this.compute = function(params) {				
            var xy = params.xy, wh = params.wh, timestamp = params.timestamp, txy = params.txy, twh = params.twh;				
            
            if(params.clearUserDefinedLocation)
                userDefinedLocation = null;

            this.timestamp = timestamp;            
            
            var udl = self.getUserDefinedLocation();
            if (udl != null) {
                return udl;
            }
            
            // if anchor is locked or an opposite element was not given, we
            // maintain our state. anchor will be locked
            // if it is the source of a drag and drop.
            if (this.locked || txy == null || twh == null)
                return _curAnchor.compute(params);				
            else
                params.timestamp = null; // otherwise clear this, i think. we want the anchor to compute.
            
            _curAnchor = _anchorSelector(xy, wh, txy, twh, this.anchors);
            this.x = _curAnchor.x;
            this.y = _curAnchor.y;        

            if (_curAnchor != _lastAnchor)
                this.fire("anchorChanged", _curAnchor);

            _lastAnchor = _curAnchor;
            
            return _curAnchor.compute(params);
        };

        this.getCurrentLocation = function(params) {
            return this.getUserDefinedLocation() || (_curAnchor != null ? _curAnchor.getCurrentLocation(params) : null);
        };

        this.getOrientation = function(_endpoint) { return _curAnchor != null ? _curAnchor.getOrientation(_endpoint) : [ 0, 0 ]; };
        this.over = function(anchor, endpoint) { if (_curAnchor != null) _curAnchor.over(anchor, endpoint); };
        this.out = function() { if (_curAnchor != null) _curAnchor.out(); };

        this.getCssClass = function() { return (_curAnchor && _curAnchor.getCssClass()) || ""; };
    };    
    jsPlumbUtil.extend(jsPlumb.DynamicAnchor, jsPlumb.Anchor);        
    
// -------- basic anchors ------------------    
    var _curryAnchor = function(x, y, ox, oy, type, fnInit) {
        jsPlumb.Anchors[type] = function(params) {
            var a = params.jsPlumbInstance.makeAnchor([ x, y, ox, oy, 0, 0 ], params.elementId, params.jsPlumbInstance);
            a.type = type;
            if (fnInit) fnInit(a, params);
            return a;
        };
    };
    	
	_curryAnchor(0.5, 0, 0,-1, "TopCenter");
    _curryAnchor(0.5, 1, 0, 1, "BottomCenter");
    _curryAnchor(0, 0.5, -1, 0, "LeftMiddle");
    _curryAnchor(1, 0.5, 1, 0, "RightMiddle");
    // from 1.4.2: Top, Right, Bottom, Left
    _curryAnchor(0.5, 0, 0,-1, "Top");
    _curryAnchor(0.5, 1, 0, 1, "Bottom");
    _curryAnchor(0, 0.5, -1, 0, "Left");
    _curryAnchor(1, 0.5, 1, 0, "Right");
    _curryAnchor(0.5, 0.5, 0, 0, "Center");
    _curryAnchor(1, 0, 0,-1, "TopRight");
    _curryAnchor(1, 1, 0, 1, "BottomRight");
    _curryAnchor(0, 0, 0, -1, "TopLeft");
    _curryAnchor(0, 1, 0, 1, "BottomLeft");
    
// ------- dynamic anchors -------------------    
			
    // default dynamic anchors chooses from Top, Right, Bottom, Left
	jsPlumb.Defaults.DynamicAnchors = function(params) {
		return params.jsPlumbInstance.makeAnchors(["TopCenter", "RightMiddle", "BottomCenter", "LeftMiddle"], params.elementId, params.jsPlumbInstance);
	};
    
    // default dynamic anchors bound to name 'AutoDefault'
	jsPlumb.Anchors.AutoDefault  = function(params) { 
		var a = params.jsPlumbInstance.makeDynamicAnchor(jsPlumb.Defaults.DynamicAnchors(params));
		a.type = "AutoDefault";
		return a;
	};	
    
// ------- continuous anchors -------------------    
    
    var _curryContinuousAnchor = function(type, faces) {
        jsPlumb.Anchors[type] = function(params) {
            var a = params.jsPlumbInstance.makeAnchor(["Continuous", { faces:faces }], params.elementId, params.jsPlumbInstance);
            a.type = type;
            return a;
        };
    };
    
    jsPlumb.Anchors.Continuous = function(params) {
		return params.jsPlumbInstance.continuousAnchorFactory.get(params);
	};
                
    _curryContinuousAnchor("ContinuousLeft", ["left"]);    
    _curryContinuousAnchor("ContinuousTop", ["top"]);                 
    _curryContinuousAnchor("ContinuousBottom", ["bottom"]);                 
    _curryContinuousAnchor("ContinuousRight", ["right"]); 
    
// ------- position assign anchors -------------------    
    
    // this anchor type lets you assign the position at connection time.
	_curryAnchor(0, 0, 0, 0, "Assign", function(anchor, params) {
		// find what to use as the "position finder". the user may have supplied a String which represents
		// the id of a position finder in jsPlumb.AnchorPositionFinders, or the user may have supplied the
		// position finder as a function.  we find out what to use and then set it on the anchor.
		var pf = params.position || "Fixed";
		anchor.positionFinder = pf.constructor == String ? params.jsPlumbInstance.AnchorPositionFinders[pf] : pf;
		// always set the constructor params; the position finder might need them later (the Grid one does,
		// for example)
		anchor.constructorParams = params;
	});	

    // these are the default anchor positions finders, which are used by the makeTarget function.  supplying
    // a position finder argument to that function allows you to specify where the resulting anchor will
    // be located
	jsPlumbInstance.prototype.AnchorPositionFinders = {
		"Fixed": function(dp, ep, es, params) {
			return [ (dp.left - ep.left) / es[0], (dp.top - ep.top) / es[1] ];	
		},
		"Grid":function(dp, ep, es, params) {
			var dx = dp.left - ep.left, dy = dp.top - ep.top,
				gx = es[0] / (params.grid[0]), gy = es[1] / (params.grid[1]),
				mx = Math.floor(dx / gx), my = Math.floor(dy / gy);
			return [ ((mx * gx) + (gx / 2)) / es[0], ((my * gy) + (gy / 2)) / es[1] ];
		}
	};
    
// ------- perimeter anchors -------------------    
		
	jsPlumb.Anchors.Perimeter = function(params) {
		params = params || {};
		var anchorCount = params.anchorCount || 60,
			shape = params.shape;
		
		if (!shape) throw new Error("no shape supplied to Perimeter Anchor type");		
		
		var _circle = function() {
                var r = 0.5, step = Math.PI * 2 / anchorCount, current = 0, a = [];
                for (var i = 0; i < anchorCount; i++) {
                    var x = r + (r * Math.sin(current)),
                        y = r + (r * Math.cos(current));                                
                    a.push( [ x, y, 0, 0 ] );
                    current += step;
                }
                return a;	
            },
            _path = function(segments) {
                var anchorsPerFace = anchorCount / segments.length, a = [],
                    _computeFace = function(x1, y1, x2, y2, fractionalLength) {
                        anchorsPerFace = anchorCount * fractionalLength;
                        var dx = (x2 - x1) / anchorsPerFace, dy = (y2 - y1) / anchorsPerFace;
                        for (var i = 0; i < anchorsPerFace; i++) {
                            a.push( [
                                x1 + (dx * i),
                                y1 + (dy * i),
                                0,
                                0
                            ]);
                        }
                    };
								
                for (var i = 0; i < segments.length; i++)
                    _computeFace.apply(null, segments[i]);
														
                return a;					
            },
			_shape = function(faces) {												
                var s = [];
                for (var i = 0; i < faces.length; i++) {
                    s.push([faces[i][0], faces[i][1], faces[i][2], faces[i][3], 1 / faces.length]);
                }
                return _path(s);
			},
			_rectangle = function() {
				return _shape([
					[ 0, 0, 1, 0 ], [ 1, 0, 1, 1 ], [ 1, 1, 0, 1 ], [ 0, 1, 0, 0 ]
				]);		
			};
		
		var _shapes = {
			"Circle":_circle,
			"Ellipse":_circle,
			"Diamond":function() {
				return _shape([
						[ 0.5, 0, 1, 0.5 ], [ 1, 0.5, 0.5, 1 ], [ 0.5, 1, 0, 0.5 ], [ 0, 0.5, 0.5, 0 ]
				]);
			},
			"Rectangle":_rectangle,
			"Square":_rectangle,
			"Triangle":function() {
				return _shape([
						[ 0.5, 0, 1, 1 ], [ 1, 1, 0, 1 ], [ 0, 1, 0.5, 0]
				]);	
			},
			"Path":function(params) {
                var points = params.points, p = [], tl = 0;
				for (var i = 0; i < points.length - 1; i++) {
                    var l = Math.sqrt(Math.pow(points[i][2] - points[i][0]) + Math.pow(points[i][3] - points[i][1]));
                    tl += l;
					p.push([points[i][0], points[i][1], points[i+1][0], points[i+1][1], l]);						
				}
                for (var j = 0; j < p.length; j++) {
                    p[j][4] = p[j][4] / tl;
                }
				return _path(p);
			}
		},
        _rotate = function(points, amountInDegrees) {
            var o = [], theta = amountInDegrees / 180 * Math.PI ;
            for (var i = 0; i < points.length; i++) {
                var _x = points[i][0] - 0.5,
                    _y = points[i][1] - 0.5;
                    
                o.push([
                    0.5 + ((_x * Math.cos(theta)) - (_y * Math.sin(theta))),
                    0.5 + ((_x * Math.sin(theta)) + (_y * Math.cos(theta))),
                    points[i][2],
                    points[i][3]
                ]);
            }
            return o;
        };
		
		if (!_shapes[shape]) throw new Error("Shape [" + shape + "] is unknown by Perimeter Anchor type");
		
		var da = _shapes[shape](params);
        if (params.rotation) da = _rotate(da, params.rotation);
        var a = params.jsPlumbInstance.makeDynamicAnchor(da);
		a.type = "Perimeter";
		return a;
	};
})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the default Connectors, Endpoint and Overlay definitions.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */

;(function() {	
				
	/**
	 * 
	 * Helper class to consume unused mouse events by components that are DOM elements and
	 * are used by all of the different rendering modes.
	 * 
	 */
	jsPlumb.DOMElementComponent = jsPlumbUtil.extend(jsPlumb.jsPlumbUIComponent, function(params) {		
		// when render mode is canvas, these functions may be called by the canvas mouse handler.  
		// this component is safe to pipe this stuff to /dev/null.
		this.mousemove = 
		this.dblclick  = 
		this.click = 
		this.mousedown = 
		this.mouseup = function(e) { };					
	});
	
	jsPlumb.Segments = {
        	
        /*
         * Class: AbstractSegment
         * A Connector is made up of 1..N Segments, each of which has a Type, such as 'Straight', 'Arc',
         * 'Bezier'. This is new from 1.4.2, and gives us a lot more flexibility when drawing connections: things such
         * as rounded corners for flowchart connectors, for example, or a straight line stub for Bezier connections, are
         * much easier to do now.
         *
         * A Segment is responsible for providing coordinates for painting it, and also must be able to report its length.
         * 
         */ 
        AbstractSegment : function(params) { 
            this.params = params;
            
            /**
            * Function: findClosestPointOnPath
            * Finds the closest point on this segment to the given [x, y], 
            * returning both the x and y of the point plus its distance from
            * the supplied point, and its location along the length of the
            * path inscribed by the segment.  This implementation returns
            * Infinity for distance and null values for everything else;
            * subclasses are expected to override.
            */
            this.findClosestPointOnPath = function(x, y) {
                return {
                    d:Infinity,
                    x:null,
                    y:null,
                    l:null
                };
            };

            this.getBounds = function() {
                return {
                    minX:Math.min(params.x1, params.x2),
                    minY:Math.min(params.y1, params.y2),
                    maxX:Math.max(params.x1, params.x2),
                    maxY:Math.max(params.y1, params.y2)
                };
            };
        },
        Straight : function(params) {
            var _super = jsPlumb.Segments.AbstractSegment.apply(this, arguments),
                length, m, m2, x1, x2, y1, y2,
                _recalc = function() {
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    m = jsPlumbGeom.gradient({x:x1, y:y1}, {x:x2, y:y2});
                    m2 = -1 / m;                
                };
                
            this.type = "Straight";
            
            this.getLength = function() { return length; };
            this.getGradient = function() { return m; };
                
            this.getCoordinates = function() {
                return { x1:x1,y1:y1,x2:x2,y2:y2 };
            };
            this.setCoordinates = function(coords) {
                x1 = coords.x1; y1 = coords.y1; x2 = coords.x2; y2 = coords.y2;
                _recalc();
            };
            this.setCoordinates({x1:params.x1, y1:params.y1, x2:params.x2, y2:params.y2});

            this.getBounds = function() {
                return {
                    minX:Math.min(x1, x2),
                    minY:Math.min(y1, y2),
                    maxX:Math.max(x1, x2),
                    maxY:Math.max(y1, y2)
                };
            };
            
            /**
             * returns the point on the segment's path that is 'location' along the length of the path, where 'location' is a decimal from
             * 0 to 1 inclusive. for the straight line segment this is simple maths.
             */
             this.pointOnPath = function(location, absolute) {
                if (location === 0 && !absolute)
                    return { x:x1, y:y1 };
                else if (location == 1 && !absolute)
                    return { x:x2, y:y2 };
                else {
                    var l = absolute ? location > 0 ? location : length + location : location * length;
                    return jsPlumbGeom.pointOnLine({x:x1, y:y1}, {x:x2, y:y2}, l);
                }
            };
            
            /**
             * returns the gradient of the segment at the given point - which for us is constant.
             */
            this.gradientAtPoint = function(_) {
                return m;
            };
            
            /**
             * returns the point on the segment's path that is 'distance' along the length of the path from 'location', where 
             * 'location' is a decimal from 0 to 1 inclusive, and 'distance' is a number of pixels.
             * this hands off to jsPlumbUtil to do the maths, supplying two points and the distance.
             */            
            this.pointAlongPathFrom = function(location, distance, absolute) {            
                var p = this.pointOnPath(location, absolute),
                    farAwayPoint = distance <= 0 ? {x:x1, y:y1} : {x:x2, y:y2 };

                /*
                location == 1 ? {
                                        x:x1 + ((x2 - x1) * 10),
                                        y:y1 + ((y1 - y2) * 10)
                                    } : 
                */
    
                if (distance <= 0 && Math.abs(distance) > 1) distance *= -1;
    
                return jsPlumbGeom.pointOnLine(p, farAwayPoint, distance);
            };
            
            // is c between a and b?
            var within = function(a,b,c) {
                return c >= Math.min(a,b) && c <= Math.max(a,b); 
            };
            // find which of a and b is closest to c
            var closest = function(a,b,c) {
                return Math.abs(c - a) < Math.abs(c - b) ? a : b;
            };
            
            /**
                Function: findClosestPointOnPath
                Finds the closest point on this segment to [x,y]. See
                notes on this method in AbstractSegment.
            */
            this.findClosestPointOnPath = function(x, y) {
                var out = {
                    d:Infinity,
                    x:null,
                    y:null,
                    l:null,
                    x1:x1,
                    x2:x2,
                    y1:y1,
                    y2:y2
                };

                if (m === 0) {                  
                    out.y = y1;
                    out.x = within(x1, x2, x) ? x : closest(x1, x2, x);
                }
                else if (m == Infinity || m == -Infinity) {
                    out.x = x1;                
                    out.y = within(y1, y2, y) ? y : closest(y1, y2, y);
                }
                else {
                    // closest point lies on normal from given point to this line.  
                    var b = y1 - (m * x1),
                        b2 = y - (m2 * x),                    
                    // y1 = m.x1 + b and y1 = m2.x1 + b2
                    // so m.x1 + b = m2.x1 + b2
                    // x1(m - m2) = b2 - b
                    // x1 = (b2 - b) / (m - m2)
                        _x1 = (b2 -b) / (m - m2),
                        _y1 = (m * _x1) + b;
                                        
                    out.x = within(x1,x2,_x1) ? _x1 : closest(x1,x2,_x1);//_x1;
                    out.y = within(y1,y2,_y1) ? _y1 : closest(y1,y2,_y1);//_y1;                    
                }

                var fractionInSegment = jsPlumbGeom.lineLength([ out.x, out.y ], [ x1, y1 ]);
                out.d = jsPlumbGeom.lineLength([x,y], [out.x, out.y]);
                out.l = fractionInSegment / length;            
                return out;
            };        
        },
	
        /*
            Arc Segment. You need to supply:
    
            r   -   radius
            cx  -   center x for the arc
            cy  -   center y for the arc
            ac  -   whether the arc is anticlockwise or not. default is clockwise.
    
            and then either:
    
            startAngle  -   startAngle for the arc.
            endAngle    -   endAngle for the arc.
    
            or:
    
            x1          -   x for start point
            y1          -   y for start point
            x2          -   x for end point
            y2          -   y for end point
    
        */
        Arc : function(params) {
            var _super = jsPlumb.Segments.AbstractSegment.apply(this, arguments),
                _calcAngle = function(_x, _y) {
                    return jsPlumbGeom.theta([params.cx, params.cy], [_x, _y]);    
                },
                _calcAngleForLocation = function(segment, location) {
                    if (segment.anticlockwise) {
                        var sa = segment.startAngle < segment.endAngle ? segment.startAngle + TWO_PI : segment.startAngle,
                            s = Math.abs(sa - segment.endAngle);
                        return sa - (s * location);                    
                    }
                    else {
                        var ea = segment.endAngle < segment.startAngle ? segment.endAngle + TWO_PI : segment.endAngle,
                            ss = Math.abs (ea - segment.startAngle);
                    
                        return segment.startAngle + (ss * location);
                    }
                },
                TWO_PI = 2 * Math.PI;
            
            this.radius = params.r;
            this.anticlockwise = params.ac;			
            this.type = "Arc";
                
            if (params.startAngle && params.endAngle) {
                this.startAngle = params.startAngle;
                this.endAngle = params.endAngle;            
                this.x1 = params.cx + (this.radius * Math.cos(params.startAngle));     
                this.y1 = params.cy + (this.radius * Math.sin(params.startAngle));            
                this.x2 = params.cx + (this.radius * Math.cos(params.endAngle));     
                this.y2 = params.cy + (this.radius * Math.sin(params.endAngle));                        
            }
            else {
                this.startAngle = _calcAngle(params.x1, params.y1);
                this.endAngle = _calcAngle(params.x2, params.y2);            
                this.x1 = params.x1;
                this.y1 = params.y1;
                this.x2 = params.x2;
                this.y2 = params.y2;            
            }
            
            if (this.endAngle < 0) this.endAngle += TWO_PI;
            if (this.startAngle < 0) this.startAngle += TWO_PI;   

            // segment is used by vml     
            this.segment = jsPlumbGeom.quadrant([this.x1, this.y1], [this.x2, this.y2]);
            
            // we now have startAngle and endAngle as positive numbers, meaning the
            // absolute difference (|d|) between them is the sweep (s) of this arc, unless the
            // arc is 'anticlockwise' in which case 's' is given by 2PI - |d|.
            
            var ea = this.endAngle < this.startAngle ? this.endAngle + TWO_PI : this.endAngle;
            this.sweep = Math.abs (ea - this.startAngle);
            if (this.anticlockwise) this.sweep = TWO_PI - this.sweep;
            var circumference = 2 * Math.PI * this.radius,
                frac = this.sweep / TWO_PI,
                length = circumference * frac;
            
            this.getLength = function() {
                return length;
            };

            this.getBounds = function() {
                return {
                    minX:params.cx - params.r,
                    maxX:params.cx + params.r,
                    minY:params.cy - params.r,
                    maxY:params.cy + params.r
                };
            };
            
            var VERY_SMALL_VALUE = 0.0000000001,
                gentleRound = function(n) {
                    var f = Math.floor(n), r = Math.ceil(n);
                    if (n - f < VERY_SMALL_VALUE) 
                        return f;    
                    else if (r - n < VERY_SMALL_VALUE)
                        return r;
                    return n;
                };
            
            /**
             * returns the point on the segment's path that is 'location' along the length of the path, where 'location' is a decimal from
             * 0 to 1 inclusive. 
             */
            this.pointOnPath = function(location, absolute) {            
                
                if (location === 0) {
                    return { x:this.x1, y:this.y1, theta:this.startAngle };    
                }
                else if (location == 1) {
                    return { x:this.x2, y:this.y2, theta:this.endAngle };                    
                }
                
                if (absolute) {
                    location = location / length;
                }
    
                var angle = _calcAngleForLocation(this, location),
                    _x = params.cx + (params.r * Math.cos(angle)),
                    _y  = params.cy + (params.r * Math.sin(angle));					
    
                return { x:gentleRound(_x), y:gentleRound(_y), theta:angle };
            };
            
            /**
             * returns the gradient of the segment at the given point.
             */
            this.gradientAtPoint = function(location, absolute) {
                var p = this.pointOnPath(location, absolute);
                var m = jsPlumbGeom.normal( [ params.cx, params.cy ], [p.x, p.y ] );
                if (!this.anticlockwise && (m == Infinity || m == -Infinity)) m *= -1;
                return m;
            };	              
                    
            this.pointAlongPathFrom = function(location, distance, absolute) {
                var p = this.pointOnPath(location, absolute),
                    arcSpan = distance / circumference * 2 * Math.PI,
                    dir = this.anticlockwise ? -1 : 1,
                    startAngle = p.theta + (dir * arcSpan),				
                    startX = params.cx + (this.radius * Math.cos(startAngle)),
                    startY = params.cy + (this.radius * Math.sin(startAngle));	
    
                return {x:startX, y:startY};
            };	            
        },
	
        Bezier : function(params) {
            var _super = jsPlumb.Segments.AbstractSegment.apply(this, arguments),
                curve = [	
                    { x:params.x1, y:params.y1},
                    { x:params.cp1x, y:params.cp1y },
                    { x:params.cp2x, y:params.cp2y },
                    { x:params.x2, y:params.y2 }
                ],
                // although this is not a strictly rigorous determination of bounds
                // of a bezier curve, it works for the types of curves that this segment
                // type produces.
                bounds = {
                    minX:Math.min(params.x1, params.x2, params.cp1x, params.cp2x),
                    minY:Math.min(params.y1, params.y2, params.cp1y, params.cp2y),
                    maxX:Math.max(params.x1, params.x2, params.cp1x, params.cp2x),
                    maxY:Math.max(params.y1, params.y2, params.cp1y, params.cp2y)
                };
                
            this.type = "Bezier";            
            
            var _translateLocation = function(_curve, location, absolute) {
                if (absolute)
                    location = jsBezier.locationAlongCurveFrom(_curve, location > 0 ? 0 : 1, location);
    
                return location;
            };		
            
            /**
             * returns the point on the segment's path that is 'location' along the length of the path, where 'location' is a decimal from
             * 0 to 1 inclusive. 
             */
            this.pointOnPath = function(location, absolute) {
                location = _translateLocation(curve, location, absolute);                
                return jsBezier.pointOnCurve(curve, location);
            };
            
            /**
             * returns the gradient of the segment at the given point.
             */
            this.gradientAtPoint = function(location, absolute) {
                location = _translateLocation(curve, location, absolute);
                return jsBezier.gradientAtPoint(curve, location);        	
            };	              
            
            this.pointAlongPathFrom = function(location, distance, absolute) {
                location = _translateLocation(curve, location, absolute);
                return jsBezier.pointAlongCurveFrom(curve, location, distance);
            };
            
            this.getLength = function() {
                return jsBezier.getLength(curve);				
            };

            this.getBounds = function() {
                return bounds;
            };
        }
    };

    /*
        Class: AbstractComponent
        Superclass for AbstractConnector and AbstractEndpoint.
    */
    var AbstractComponent = function() {        
        this.resetBounds = function() {
            this.bounds = { minX:Infinity, minY:Infinity, maxX:-Infinity, maxY:-Infinity };
        };
        this.resetBounds();        
    };
	
	/*
	 * Class: AbstractConnector
	 * Superclass for all Connectors; here is where Segments are managed.  This is exposed on jsPlumb just so it
	 * can be accessed from other files. You should not try to instantiate one of these directly.
	 *
	 * When this class is asked for a pointOnPath, or gradient etc, it must first figure out which segment to dispatch
	 * that request to. This is done by keeping track of the total connector length as segments are added, and also
	 * their cumulative ratios to the total length.  Then when the right segment is found it is a simple case of dispatching
	 * the request to it (and adjusting 'location' so that it is relative to the beginning of that segment.)
	 */ 
	jsPlumb.Connectors.AbstractConnector = function(params) {
		
        AbstractComponent.apply(this, arguments);        

		var //self = this, 
            segments = [],
            editing = false,
			totalLength = 0,
			segmentProportions = [],
			segmentProportionalLengths = [],        
            stub = params.stub || 0, 
            sourceStub = jsPlumbUtil.isArray(stub) ? stub[0] : stub,
            targetStub = jsPlumbUtil.isArray(stub) ? stub[1] : stub,
            gap = params.gap || 0,
            sourceGap = jsPlumbUtil.isArray(gap) ? gap[0] : gap,
            targetGap = jsPlumbUtil.isArray(gap) ? gap[1] : gap,
            userProvidedSegments = null,
            edited = false,
            paintInfo = null;            
        
        // subclasses should override.
        this.isEditable = function() { return false; };                        
        this.setEdited = function(ed) { edited = ed; };

        // to be overridden by subclasses.
        this.getPath = function() { };
        this.setPath = function(path) { };
        
        /**
        * Function: findSegmentForPoint
        * Returns the segment that is closest to the given [x,y],
        * null if nothing found.  This function returns a JS 
        * object with:
        *
        *   d   -   distance from segment
        *   l   -   proportional location in segment
        *   x   -   x point on the segment
        *   y   -   y point on the segment
        *   s   -   the segment itself.
        */ 
        this.findSegmentForPoint = function(x, y) {
            var out = { d:Infinity, s:null, x:null, y:null, l:null };
            for (var i = 0; i < segments.length; i++) {
                var _s = segments[i].findClosestPointOnPath(x, y);
                if (_s.d < out.d) {
                    out.d = _s.d; 
                    out.l = _s.l; 
                    out.x = _s.x;
                    out.y = _s.y; 
                    out.s = segments[i];
                    out.x1 = _s.x1;
                    out.x2 = _s.x2;
                    out.y1 = _s.y1;
                    out.y2 = _s.y2;
                    out.index = i;
                }
            }
            
            return out;                
        };
			
		var _updateSegmentProportions = function() {
                var curLoc = 0;
                for (var i = 0; i < segments.length; i++) {
                    var sl = segments[i].getLength();
                    segmentProportionalLengths[i] = sl / totalLength;
                    segmentProportions[i] = [curLoc, (curLoc += (sl / totalLength)) ];
                }
            },
		
            /**
             * returns [segment, proportion of travel in segment, segment index] for the segment 
             * that contains the point which is 'location' distance along the entire path, where 
             * 'location' is a decimal between 0 and 1 inclusive. in this connector type, paths 
             * are made up of a list of segments, each of which contributes some fraction to
             * the total length. 
             * From 1.3.10 this also supports the 'absolute' property, which lets us specify a location
             * as the absolute distance in pixels, rather than a proportion of the total path. 
             */
            _findSegmentForLocation = function(location, absolute) {
                if (absolute) {
                    location = location > 0 ? location / totalLength : (totalLength + location) / totalLength;
                }
    
                var idx = segmentProportions.length - 1, inSegmentProportion = 1;
                //if (location < 1) {
                    for (var i = 0; i < segmentProportions.length; i++) {
                        if (segmentProportions[i][1] >= location) {
                            idx = i;
                            // todo is this correct for all connector path types?
                            inSegmentProportion = location == 1 ? 1 : location === 0 ? 0 : (location - segmentProportions[i][0]) / segmentProportionalLengths[i];                    
                            break;
                        }
                    }
                //}
                return { segment:segments[idx], proportion:inSegmentProportion, index:idx };
            },		
            _addSegment = function(conn, type, params) {
                if (params.x1 == params.x2 && params.y1 == params.y2) return;
                var s = new jsPlumb.Segments[type](params);
                segments.push(s);
                totalLength += s.getLength();	
                conn.updateBounds(s);	                                
            },					
            _clearSegments = function() {
                totalLength = 0;
                segments.splice(0, segments.length);
                segmentProportions.splice(0, segmentProportions.length);
                segmentProportionalLengths.splice(0, segmentProportionalLengths.length);
            };
        
        this.setSegments = function(_segs) {
            userProvidedSegments = [];
            totalLength = 0;
            for (var i = 0; i < _segs.length; i++) {      
                userProvidedSegments.push(_segs[i]);
                totalLength += _segs[i].getLength();			            
            }            
        };  
        
        var _prepareCompute = function(params) {
            this.lineWidth = params.lineWidth;
            var segment = jsPlumbGeom.quadrant(params.sourcePos, params.targetPos),
                swapX = params.targetPos[0] < params.sourcePos[0],
                swapY = params.targetPos[1] < params.sourcePos[1],
                lw = params.lineWidth || 1,       
                so = params.sourceEndpoint.anchor.getOrientation(params.sourceEndpoint), 
                to = params.targetEndpoint.anchor.getOrientation(params.targetEndpoint),
                x = swapX ? params.targetPos[0] : params.sourcePos[0], 
                y = swapY ? params.targetPos[1] : params.sourcePos[1],
                w = Math.abs(params.targetPos[0] - params.sourcePos[0]),
                h = Math.abs(params.targetPos[1] - params.sourcePos[1]);
            
            // if either anchor does not have an orientation set, we derive one from their relative
            // positions.  we fix the axis to be the one in which the two elements are further apart, and
            // point each anchor at the other element.  this is also used when dragging a new connection.
            if (so[0] === 0 && so[1] === 0 || to[0] === 0 && to[1] === 0) {
                var index = w > h ? 0 : 1, oIndex = [1,0][index];
                so = []; to = [];
                so[index] = params.sourcePos[index] > params.targetPos[index] ? -1 : 1;
                to[index] = params.sourcePos[index] > params.targetPos[index] ? 1 : -1;
                so[oIndex] = 0; to[oIndex] = 0;
            }                    
            
            var sx = swapX ? w + (sourceGap * so[0])  : sourceGap * so[0], 
                sy = swapY ? h + (sourceGap * so[1])  : sourceGap * so[1], 
                tx = swapX ? targetGap * to[0] : w + (targetGap * to[0]),
                ty = swapY ? targetGap * to[1] : h + (targetGap * to[1]),
                oProduct = ((so[0] * to[0]) + (so[1] * to[1]));        
            
            var result = {
                sx:sx, sy:sy, tx:tx, ty:ty, lw:lw, 
                xSpan:Math.abs(tx - sx),
                ySpan:Math.abs(ty - sy),                
                mx:(sx + tx) / 2,
                my:(sy + ty) / 2,                
                so:so, to:to, x:x, y:y, w:w, h:h,
                segment : segment,
                startStubX : sx + (so[0] * sourceStub), 
                startStubY : sy + (so[1] * sourceStub),
                endStubX : tx + (to[0] * targetStub), 
                endStubY : ty + (to[1] * targetStub),
                isXGreaterThanStubTimes2 : Math.abs(sx - tx) > (sourceStub + targetStub),
                isYGreaterThanStubTimes2 : Math.abs(sy - ty) > (sourceStub + targetStub),
                opposite:oProduct == -1,
                perpendicular:oProduct === 0,
                orthogonal:oProduct == 1,
                sourceAxis : so[0] === 0 ? "y" : "x",
                points:[x, y, w, h, sx, sy, tx, ty ]
            };
            result.anchorOrientation = result.opposite ? "opposite" : result.orthogonal ? "orthogonal" : "perpendicular";
            return result;
        };
		
		this.getSegments = function() { return segments; };

        this.updateBounds = function(segment) {
            var segBounds = segment.getBounds();
            this.bounds.minX = Math.min(this.bounds.minX, segBounds.minX);
            this.bounds.maxX = Math.max(this.bounds.maxX, segBounds.maxX);
            this.bounds.minY = Math.min(this.bounds.minY, segBounds.minY);
            this.bounds.maxY = Math.max(this.bounds.maxY, segBounds.maxY);              
        };
        
        var dumpSegmentsToConsole = function() {
            console.log("SEGMENTS:");
            for (var i = 0; i < segments.length; i++) {
                console.log(segments[i].type, segments[i].getLength(), segmentProportions[i]);
            }
        };
		
		this.pointOnPath = function(location, absolute) {
            var seg = _findSegmentForLocation(location, absolute);      
            return seg.segment && seg.segment.pointOnPath(seg.proportion, absolute) || [0,0];
        };
        
        this.gradientAtPoint = function(location) {
            var seg = _findSegmentForLocation(location, absolute);          
            return seg.segment && seg.segment.gradientAtPoint(seg.proportion, absolute) || 0;
        };
        
        this.pointAlongPathFrom = function(location, distance, absolute) {
            var seg = _findSegmentForLocation(location, absolute);
            // TODO what happens if this crosses to the next segment?
            return seg.segment && seg.segment.pointAlongPathFrom(seg.proportion, distance, false) || [0,0];
        };
		
		this.compute = function(params)  {
            if (!edited)
                paintInfo = _prepareCompute.call(this, params);
            
            _clearSegments();
            this._compute(paintInfo, params);
            this.x = paintInfo.points[0];
            this.y = paintInfo.points[1];
            this.w = paintInfo.points[2];
            this.h = paintInfo.points[3];               
            this.segment = paintInfo.segment;         
            _updateSegmentProportions();            
		};
		
		return {
			addSegment:_addSegment,
            prepareCompute:_prepareCompute,
            sourceStub:sourceStub,
            targetStub:targetStub,
            maxStub:Math.max(sourceStub, targetStub),            
            sourceGap:sourceGap,
            targetGap:targetGap,
            maxGap:Math.max(sourceGap, targetGap)
		};		
	};
    jsPlumbUtil.extend(jsPlumb.Connectors.AbstractConnector, AbstractComponent);
	
    /**
     * Class: Connectors.Straight
     * The Straight connector draws a simple straight line between the two anchor points.  It does not have any constructor parameters.
     */
    var Straight = jsPlumb.Connectors.Straight = function() {
    	this.type = "Straight";
		var _super =  jsPlumb.Connectors.AbstractConnector.apply(this, arguments);		

        this._compute = function(paintInfo, _) {                        
            _super.addSegment(this, "Straight", {x1:paintInfo.sx, y1:paintInfo.sy, x2:paintInfo.startStubX, y2:paintInfo.startStubY});                                                
            _super.addSegment(this, "Straight", {x1:paintInfo.startStubX, y1:paintInfo.startStubY, x2:paintInfo.endStubX, y2:paintInfo.endStubY});                        
            _super.addSegment(this, "Straight", {x1:paintInfo.endStubX, y1:paintInfo.endStubY, x2:paintInfo.tx, y2:paintInfo.ty});                                    
        };                    
    };
    jsPlumbUtil.extend(jsPlumb.Connectors.Straight, jsPlumb.Connectors.AbstractConnector);
    jsPlumb.registerConnectorType(Straight, "Straight");
                    
    /**
     * Class:Connectors.Bezier
     * This Connector draws a Bezier curve with two control points.  You can provide a 'curviness' value which gets applied to jsPlumb's
     * internal voodoo machine and ends up generating locations for the two control points.  See the constructor documentation below.
     */
    /**
     * Function:Constructor
     * 
     * Parameters:
     * 	curviness - How 'curvy' you want the curve to be! This is a directive for the placement of control points, not endpoints of the curve, so your curve does not 
     * actually touch the given point, but it has the tendency to lean towards it.  The larger this value, the greater the curve is pulled from a straight line.
     * Optional; defaults to 150.
     * stub - optional value for a distance to travel from the connector's endpoint before beginning the Bezier curve. defaults to 0.
     * 
     */
    var Bezier = function(params) {
        params = params || {};

    	var _super =  jsPlumb.Connectors.AbstractConnector.apply(this, arguments),
            stub = params.stub || 50,
            majorAnchor = params.curviness || 150,
            minorAnchor = 10;            

        this.type = "Bezier";	
        this.getCurviness = function() { return majorAnchor; };	
        
        this._findControlPoint = function(point, sourceAnchorPosition, targetAnchorPosition, sourceEndpoint, targetEndpoint) {
        	// determine if the two anchors are perpendicular to each other in their orientation.  we swap the control 
        	// points around if so (code could be tightened up)
        	var soo = sourceEndpoint.anchor.getOrientation(sourceEndpoint), 
        		too = targetEndpoint.anchor.getOrientation(targetEndpoint),
        		perpendicular = soo[0] != too[0] || soo[1] == too[1],
            	p = [];                
            	
            if (!perpendicular) {
                if (soo[0] === 0) // X
                    p.push(sourceAnchorPosition[0] < targetAnchorPosition[0] ? point[0] + minorAnchor : point[0] - minorAnchor);
                else p.push(point[0] - (majorAnchor * soo[0]));
                                 
                if (soo[1] === 0) // Y
                	p.push(sourceAnchorPosition[1] < targetAnchorPosition[1] ? point[1] + minorAnchor : point[1] - minorAnchor);
                else p.push(point[1] + (majorAnchor * too[1]));
            }
             else {
                if (too[0] === 0) // X
                	p.push(targetAnchorPosition[0] < sourceAnchorPosition[0] ? point[0] + minorAnchor : point[0] - minorAnchor);
                else p.push(point[0] + (majorAnchor * too[0]));
                
                if (too[1] === 0) // Y
                	p.push(targetAnchorPosition[1] < sourceAnchorPosition[1] ? point[1] + minorAnchor : point[1] - minorAnchor);
                else p.push(point[1] + (majorAnchor * soo[1]));
             }

            return p;                
        };        

        this._compute = function(paintInfo, p) {                                
			var sp = p.sourcePos,
				tp = p.targetPos,				
                _w = Math.abs(sp[0] - tp[0]),
                _h = Math.abs(sp[1] - tp[1]),            
                _sx = sp[0] < tp[0] ? _w : 0,
                _sy = sp[1] < tp[1] ? _h : 0,
                _tx = sp[0] < tp[0] ? 0 : _w,
                _ty = sp[1] < tp[1] ? 0 : _h,
                _CP = this._findControlPoint([_sx, _sy], sp, tp, p.sourceEndpoint, p.targetEndpoint),
                _CP2 = this._findControlPoint([_tx, _ty], tp, sp, p.targetEndpoint, p.sourceEndpoint);

			_super.addSegment(this, "Bezier", {
				x1:_sx, y1:_sy, x2:_tx, y2:_ty,
				cp1x:_CP[0], cp1y:_CP[1], cp2x:_CP2[0], cp2y:_CP2[1]
			});                    
        };               
    };    
    jsPlumbUtil.extend(Bezier, jsPlumb.Connectors.AbstractConnector);
    jsPlumb.registerConnectorType(Bezier, "Bezier");
    
 // ********************************* END OF CONNECTOR TYPES *******************************************************************
    
 // ********************************* ENDPOINT TYPES *******************************************************************
    
    jsPlumb.Endpoints.AbstractEndpoint = function(params) {
        AbstractComponent.apply(this, arguments);
        var compute = this.compute = function(anchorPoint, orientation, endpointStyle, connectorPaintStyle) {    
            var out = this._compute.apply(this, arguments);
            this.x = out[0];
            this.y = out[1];
            this.w = out[2];
            this.h = out[3];
            this.bounds.minX = this.x;
            this.bounds.minY = this.y;
            this.bounds.maxX = this.x + this.w;
            this.bounds.maxY = this.y + this.h;
            return out;
        };
        return {
            compute:compute,
            cssClass:params.cssClass
        };
    };
    jsPlumbUtil.extend(jsPlumb.Endpoints.AbstractEndpoint, AbstractComponent);
    
    /**
     * Class: Endpoints.Dot
     * A round endpoint, with default radius 10 pixels.
     */    	
    	
	/**
	 * Function: Constructor
	 * 
	 * Parameters:
	 * 
	 * 	radius	-	radius of the endpoint.  defaults to 10 pixels.
	 */
	jsPlumb.Endpoints.Dot = function(params) {        
		this.type = "Dot";
		var _super = jsPlumb.Endpoints.AbstractEndpoint.apply(this, arguments);
		params = params || {};				
		this.radius = params.radius || 10;
		this.defaultOffset = 0.5 * this.radius;
		this.defaultInnerRadius = this.radius / 3;			
		
		this._compute = function(anchorPoint, orientation, endpointStyle, connectorPaintStyle) {
			this.radius = endpointStyle.radius || this.radius;
			var	x = anchorPoint[0] - this.radius,
				y = anchorPoint[1] - this.radius,
                w = this.radius * 2,
                h = this.radius * 2;

            if (endpointStyle.strokeStyle) {
                var lw = endpointStyle.lineWidth || 1;
                x -= lw;
                y -= lw;
                w += (lw * 2);
                h += (lw * 2);
            }
			return [ x, y, w, h, this.radius ];
		};
	};
    jsPlumbUtil.extend(jsPlumb.Endpoints.Dot, jsPlumb.Endpoints.AbstractEndpoint);
	
	/**
	 * Class: Endpoints.Rectangle
	 * A Rectangular Endpoint, with default size 20x20.
	 */
	/**
	 * Function: Constructor
	 * 
	 * Parameters:
	 * 
	 * 	width	- width of the endpoint. defaults to 20 pixels.
	 * 	height	- height of the endpoint. defaults to 20 pixels.	
	 */
	jsPlumb.Endpoints.Rectangle = function(params) {
		this.type = "Rectangle";
		var _super = jsPlumb.Endpoints.AbstractEndpoint.apply(this, arguments);
		params = params || {};
		this.width = params.width || 20;
		this.height = params.height || 20;
		
		this._compute = function(anchorPoint, orientation, endpointStyle, connectorPaintStyle) {
			var width = endpointStyle.width || this.width,
				height = endpointStyle.height || this.height,
				x = anchorPoint[0] - (width/2),
				y = anchorPoint[1] - (height/2);
                
			return [ x, y, width, height];
		};
	};
    jsPlumbUtil.extend(jsPlumb.Endpoints.Rectangle, jsPlumb.Endpoints.AbstractEndpoint);
	

    var DOMElementEndpoint = function(params) {
        jsPlumb.DOMElementComponent.apply(this, arguments);        
        this._jsPlumb.displayElements = [  ];                
    };
    jsPlumbUtil.extend(DOMElementEndpoint, jsPlumb.DOMElementComponent, {
       // jsPlumb.Endpoints.AbstractEndpoint
        getDisplayElements : function() { 
            return this._jsPlumb.displayElements; 
        },        
        appendDisplayElement : function(el) {
            this._jsPlumb.displayElements.push(el);
        }
    });

	/**
	 * Class: Endpoints.Image
	 * Draws an image as the Endpoint.
	 */
	/**
	 * Function: Constructor
	 * 
	 * Parameters:
	 * 
	 * 	src	-	location of the image to use.

    TODO: multiple references to self. not sure quite how to get rid of them entirely. perhaps self = null in the cleanup
    function will suffice

    TODO this class still leaks memory.

	 */
	jsPlumb.Endpoints.Image = function(params) {
				
		this.type = "Image";
		DOMElementEndpoint.apply(this, arguments);
        jsPlumb.Endpoints.AbstractEndpoint.apply(this, arguments);
		
		var _onload = params.onload, 
            src = params.src || params.url,
            parent = params.parent,
            clazz = params.cssClass ? " " + params.cssClass : "";

        this._jsPlumb.img = new Image();		
        this._jsPlumb.ready = false;
        this._jsPlumb.initialized = false;
        this._jsPlumb.deleted = false;
        this._jsPlumb.widthToUse = params.width;
        this._jsPlumb.heightToUse = params.height;
        this._jsPlumb.endpoint = params.endpoint;

		this._jsPlumb.img.onload = function() {
            // check we weren't actually discarded before use (in fact mostly happens in tests)
            if (this._jsPlumb != null) {
    			this._jsPlumb.ready = true;            
    			this._jsPlumb.widthToUse = this._jsPlumb.widthToUse || this._jsPlumb.img.width;
    			this._jsPlumb.heightToUse = this._jsPlumb.heightToUse || this._jsPlumb.img.height;
                if (_onload) {
                    _onload(this);
                }
            }
		}.bind(this);        

        /*
            Function: setImage
            Sets the Image to use in this Endpoint.  

            Parameters:
            img         -   may be a URL or an Image object
            onload      -   optional; a callback to execute once the image has loaded.
        */
        this._jsPlumb.endpoint.setImage = function(_img, onload) {
            var s = _img.constructor == String ? _img : _img.src;
            _onload = onload; 
            this._jsPlumb.img.src = s;

            if (this.canvas != null)
                this.canvas.setAttribute("src", this._jsPlumb.img.src);
        }.bind(this);

        this._jsPlumb.endpoint.setImage(src, _onload);
        /*        
            var s = src.constructor == String ? src : src.src;
            //_onload = onload; 
            this._jsPlumb.img.src = src;

            if (this.canvas != null)
                this.canvas.setAttribute("src", this._jsPlumb.img.src);
       // }.bind(this);

        //this._jsPlumb.endpoint.setImage(src, _onload);*/

		this._compute = function(anchorPoint, orientation, endpointStyle, connectorPaintStyle) {
			this.anchorPoint = anchorPoint;
			if (this._jsPlumb.ready) return [anchorPoint[0] - this._jsPlumb.widthToUse / 2, anchorPoint[1] - this._jsPlumb.heightToUse / 2, 
									this._jsPlumb.widthToUse, this._jsPlumb.heightToUse];
			else return [0,0,0,0];
		};
		
		this.canvas = document.createElement("img");
		this.canvas.style.margin = 0;
		this.canvas.style.padding = 0;
		this.canvas.style.outline = 0;
		this.canvas.style.position = "absolute";		
		this.canvas.className = this._jsPlumb.instance.endpointClass + clazz;
		if (this._jsPlumb.widthToUse) this.canvas.setAttribute("width", this._jsPlumb.widthToUse);
		if (this._jsPlumb.heightToUse) this.canvas.setAttribute("height", this._jsPlumb.heightToUse);		
		this._jsPlumb.instance.appendElement(this.canvas, parent);
		this.attachListeners(this.canvas, this);		
		
		this.actuallyPaint = function(d, style, anchor) {
			if (!this._jsPlumb.deleted) {
				if (!this._jsPlumb.initialized) {
					this.canvas.setAttribute("src", this._jsPlumb.img.src);
					this.appendDisplayElement(this.canvas);
					this._jsPlumb.initialized = true;
				}
				var x = this.anchorPoint[0] - (this._jsPlumb.widthToUse / 2),
					y = this.anchorPoint[1] - (this._jsPlumb.heightToUse / 2);
				jsPlumbUtil.sizeElement(this.canvas, x, y, this._jsPlumb.widthToUse, this._jsPlumb.heightToUse);
			}
		};
		
		this.paint = function(style, anchor) {
            if (this._jsPlumb != null) {  // may have been deleted
    			if (this._jsPlumb.ready) {
        			this.actuallyPaint(style, anchor);
    			}
    			else { 
    				window.setTimeout(function() {    					
    					this.paint(style, anchor);
    				}.bind(this), 200);
    			}
            }
		};				
	};
    jsPlumbUtil.extend(jsPlumb.Endpoints.Image, [ DOMElementEndpoint, jsPlumb.Endpoints.AbstractEndpoint ], {
        cleanup : function() {            
            this._jsPlumb.deleted = true;
            jsPlumbUtil.removeElement(this.canvas);
            this.canvas = null;
        } 
    });
	
	/*
	 * Class: Endpoints.Blank
	 * An Endpoint that paints nothing (visible) on the screen.  Supports cssClass and hoverClass parameters like all Endpoints.
	 */
	jsPlumb.Endpoints.Blank = function(params) {
		var _super = jsPlumb.Endpoints.AbstractEndpoint.apply(this, arguments);
		this.type = "Blank";
		DOMElementEndpoint.apply(this, arguments);		
		this._compute = function(anchorPoint, orientation, endpointStyle, connectorPaintStyle) {
			return [anchorPoint[0], anchorPoint[1],10,0];
		};
		
		this.canvas = document.createElement("div");
		this.canvas.style.display = "block";
		this.canvas.style.width = "1px";
		this.canvas.style.height = "1px";
		this.canvas.style.background = "transparent";
		this.canvas.style.position = "absolute";
		this.canvas.className = this._jsPlumb.endpointClass;
		jsPlumb.appendElement(this.canvas, params.parent);
		
		this.paint = function(style, anchor) {
			jsPlumbUtil.sizeElement(this.canvas, this.x, this.y, this.w, this.h);	
		};
	};
    jsPlumbUtil.extend(jsPlumb.Endpoints.Blank, [jsPlumb.Endpoints.AbstractEndpoint, DOMElementEndpoint], {
        cleanup:function() {
            if (this.canvas && this.canvas.parentNode) {
                this.canvas.parentNode.removeChild(this.canvas);
            }
        }
    });
	
	/*
	 * Class: Endpoints.Triangle
	 * A triangular Endpoint.  
	 */
	/*
	 * Function: Constructor
	 * 
	 * Parameters:
	 * 
	 * 	width	-	width of the triangle's base.  defaults to 55 pixels.
	 * 	height	-	height of the triangle from base to apex.  defaults to 55 pixels.
	 */
	jsPlumb.Endpoints.Triangle = function(params) {        
		this.type = "Triangle";
        var _super = jsPlumb.Endpoints.AbstractEndpoint.apply(this, arguments);
		params = params || {  };
		params.width = params.width || 55;
		params.height = params.height || 55;
		this.width = params.width;
		this.height = params.height;
		this._compute = function(anchorPoint, orientation, endpointStyle, connectorPaintStyle) {
			var width = endpointStyle.width || self.width,
			height = endpointStyle.height || self.height,
			x = anchorPoint[0] - (width/2),
			y = anchorPoint[1] - (height/2);
			return [ x, y, width, height ];
		};
	};
// ********************************* END OF ENDPOINT TYPES *******************************************************************
	

// ********************************* OVERLAY DEFINITIONS ***********************************************************************    

	var AbstractOverlay = jsPlumb.Overlays.AbstractOverlay = function(params) {
		this.visible = true;
        this.isAppendedAtTopLevel = true;
		this.component = params.component;
		this.loc = params.location == null ? 0.5 : params.location;
        this.endpointLoc = params.endpointLocation == null ? [ 0.5, 0.5] : params.endpointLocation;		
	};
    AbstractOverlay.prototype = {
        cleanup:function() {  
           this.component = null;
           this.canvas = null;
           this.endpointLoc = null;
        },
        setVisible : function(val) { 
            this.visible = val;
            // TODO this is only actually necessary for canvas. so, the Canvas overlay should
            // override setVisible and call this.
            //this.component.repaint();
        },
        isVisible : function() { return this.visible; },
        hide : function() { this.setVisible(false); },
        show : function() { this.setVisible(true); },        
        incrementLocation : function(amount) {
            this.loc += amount;
            this.component.repaint();
        },
        setLocation : function(l) {
            this.loc = l;
            this.component.repaint();
        },
        getLocation : function() {
            return this.loc;
        }
    };
	
	
	/*
	 * Class: Overlays.Arrow
	 * 
	 * An arrow overlay, defined by four points: the head, the two sides of the tail, and a 'foldback' point at some distance along the length
	 * of the arrow that lines from each tail point converge into.  The foldback point is defined using a decimal that indicates some fraction
	 * of the length of the arrow and has a default value of 0.623.  A foldback point value of 1 would mean that the arrow had a straight line
	 * across the tail.  
	 */
	/*
	 * Function: Constructor
	 * 
	 * Parameters:
	 * 
	 * 	length - distance in pixels from head to tail baseline. default 20.
	 * 	width - width in pixels of the tail baseline. default 20.
	 * 	fillStyle - style to use when filling the arrow.  defaults to "black".
	 * 	strokeStyle - style to use when stroking the arrow. defaults to null, which means the arrow is not stroked.
	 * 	lineWidth - line width to use when stroking the arrow. defaults to 1, but only used if strokeStyle is not null.
	 * 	foldback - distance (as a decimal from 0 to 1 inclusive) along the length of the arrow marking the point the tail points should fold back to.  defaults to 0.623.
	 * 	location - distance (as a decimal from 0 to 1 inclusive) marking where the arrow should sit on the connector. defaults to 0.5.
	 * 	direction - indicates the direction the arrow points in. valid values are -1 and 1; 1 is default.
	 */
	jsPlumb.Overlays.Arrow = function(params) {
		this.type = "Arrow";
		AbstractOverlay.apply(this, arguments);
        this.isAppendedAtTopLevel = false;
		params = params || {};
		var _ju = jsPlumbUtil, _jg = jsPlumbGeom;
		
    	this.length = params.length || 20;
    	this.width = params.width || 20;
    	this.id = params.id;
    	var direction = (params.direction || 1) < 0 ? -1 : 1,
    	    paintStyle = params.paintStyle || { lineWidth:1 },
    	    // how far along the arrow the lines folding back in come to. default is 62.3%.
    	    foldback = params.foldback || 0.623;
    	    	
    	this.computeMaxSize = function() { return self.width * 1.5; };    	
    	//this.cleanup = function() { };  // nothing to clean up for Arrows    
    	this.draw = function(component, currentConnectionPaintStyle) {

            var hxy, mid, txy, tail, cxy;
            if (component.pointAlongPathFrom) {

                if (_ju.isString(this.loc) || this.loc > 1 || this.loc < 0) {                    
                    var l = parseInt(this.loc, 10),
                        fromLoc = this.loc < 0 ? 1 : 0;
                    hxy = component.pointAlongPathFrom(fromLoc, l, false);
                    mid = component.pointAlongPathFrom(fromLoc, l - (direction * this.length / 2), false);
                    txy = _jg.pointOnLine(hxy, mid, this.length);
                }
                else if (this.loc == 1) {                
					hxy = component.pointOnPath(this.loc);					           
                    mid = component.pointAlongPathFrom(this.loc, -(this.length));
					txy = _jg.pointOnLine(hxy, mid, this.length);
					
					if (direction == -1) {
						var _ = txy;
						txy = hxy;
						hxy = _;
					}
                }
                else if (this.loc === 0) {					                    
					txy = component.pointOnPath(this.loc);                    
					mid = component.pointAlongPathFrom(this.loc, this.length);                    
					hxy = _jg.pointOnLine(txy, mid, this.length);                    
					if (direction == -1) {
						var __ = txy;
						txy = hxy;
						hxy = __;
					}
                }
                else {                    
    			    hxy = component.pointAlongPathFrom(this.loc, direction * this.length / 2);
                    mid = component.pointOnPath(this.loc);
                    txy = _jg.pointOnLine(hxy, mid, this.length);
                }

                tail = _jg.perpendicularLineTo(hxy, txy, this.width);
                cxy = _jg.pointOnLine(hxy, txy, foldback * this.length);    			
    			
    			var d = { hxy:hxy, tail:tail, cxy:cxy },
    			    strokeStyle = paintStyle.strokeStyle || currentConnectionPaintStyle.strokeStyle,
    			    fillStyle = paintStyle.fillStyle || currentConnectionPaintStyle.strokeStyle,
    			    lineWidth = paintStyle.lineWidth || currentConnectionPaintStyle.lineWidth,
                    info = {
                        component:component, 
                        d:d, 
                        lineWidth:lineWidth, 
                        strokeStyle:strokeStyle, 
                        fillStyle:fillStyle,
                        minX:Math.min(hxy.x, tail[0].x, tail[1].x),
                        maxX:Math.max(hxy.x, tail[0].x, tail[1].x),
                        minY:Math.min(hxy.y, tail[0].y, tail[1].y),
                        maxY:Math.max(hxy.y, tail[0].y, tail[1].y)
                    };    			
						    
                return info;
            }
            else return {component:component, minX:0,maxX:0,minY:0,maxY:0};
    	};
    };    
    jsPlumbUtil.extend(jsPlumb.Overlays.Arrow, AbstractOverlay);      
    
    /*
     * Class: Overlays.PlainArrow
	 * 
	 * A basic arrow.  This is in fact just one instance of the more generic case in which the tail folds back on itself to some
	 * point along the length of the arrow: in this case, that foldback point is the full length of the arrow.  so it just does
	 * a 'call' to Arrow with foldback set appropriately.       
	 */
    /*
     * Function: Constructor
     * See <Overlays.Arrow> for allowed parameters for this overlay.
     */
    jsPlumb.Overlays.PlainArrow = function(params) {
    	params = params || {};    	
    	var p = jsPlumb.extend(params, {foldback:1});
    	jsPlumb.Overlays.Arrow.call(this, p);
    	this.type = "PlainArrow";
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.PlainArrow, jsPlumb.Overlays.Arrow);
        
    /*
     * Class: Overlays.Diamond
     * 
	 * A diamond. Like PlainArrow, this is a concrete case of the more generic case of the tail points converging on some point...it just
	 * happens that in this case, that point is greater than the length of the the arrow.    
	 * 
	 *      this could probably do with some help with positioning...due to the way it reuses the Arrow paint code, what Arrow thinks is the
	 *      center is actually 1/4 of the way along for this guy.  but we don't have any knowledge of pixels at this point, so we're kind of
	 *      stuck when it comes to helping out the Arrow class. possibly we could pass in a 'transpose' parameter or something. the value
	 *      would be -l/4 in this case - move along one quarter of the total length.
	 */
    /*
     * Function: Constructor
     * See <Overlays.Arrow> for allowed parameters for this overlay.
     */
    jsPlumb.Overlays.Diamond = function(params) {
    	params = params || {};    	
    	var l = params.length || 40,
    	    p = jsPlumb.extend(params, {length:l/2, foldback:2});
    	jsPlumb.Overlays.Arrow.call(this, p);
    	this.type = "Diamond";
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.Diamond, jsPlumb.Overlays.Arrow);

    var _getDimensions = function(component) {
        if (component._jsPlumb.cachedDimensions == null)
            component._jsPlumb.cachedDimensions = component.getDimensions();
        return component._jsPlumb.cachedDimensions;
    };      
	
	// abstract superclass for overlays that add an element to the DOM.
    var AbstractDOMOverlay = function(params) {
		jsPlumb.DOMElementComponent.apply(this, arguments);
    	AbstractOverlay.apply(this, arguments);
		
		var jpcl = jsPlumb.CurrentLibrary;		
		this.id = params.id;
        this._jsPlumb.div = null;		
        this._jsPlumb.initialised = false;
        this._jsPlumb.component = params.component;
        this._jsPlumb.cachedDimensions = null;
        this._jsPlumb.create = params.create;
		
		this.getElement = function() {
			if (this._jsPlumb.div == null) {
                var div = this._jsPlumb.div = jpcl.getDOMElement(this._jsPlumb.create(this._jsPlumb.component));                
                div.style.position   =   "absolute";     
                var clazz = params._jsPlumb.overlayClass + " " + 
                    (this.cssClass ? this.cssClass : 
                    params.cssClass ? params.cssClass : "");        
                div.className = clazz;
                this._jsPlumb.instance.appendElement(div, this._jsPlumb.component.parent);
                this._jsPlumb.instance.getId(div);      
                this.attachListeners(div, this);
                this.canvas = div;
			}
    		return this._jsPlumb.div;
    	};
				
		this.draw = function(component, currentConnectionPaintStyle, absolutePosition) {
	    	var td = _getDimensions(this);
	    	if (td != null && td.length == 2) {
				var cxy = { x:0,y:0 };

                // absolutePosition would have been set by a call to connection.setAbsoluteOverlayPosition.
                if (absolutePosition) {
                    cxy = { x:absolutePosition[0], y:absolutePosition[1] };
                }
                else if (component.pointOnPath) {
                    var loc = this.loc, absolute = false;
                    if (jsPlumbUtil.isString(this.loc) || this.loc < 0 || this.loc > 1) {
                        loc = parseInt(this.loc, 10);
                        absolute = true;
                    }
                    cxy = component.pointOnPath(loc, absolute);  // a connection
                }
                else {
                    var locToUse = this.loc.constructor == Array ? this.loc : this.endpointLoc;
                    cxy = { x:locToUse[0] * component.w,
                            y:locToUse[1] * component.h };      
                } 
                           
				var minx = cxy.x - (td[0] / 2),
				    miny = cxy.y - (td[1] / 2);

                return {
                    component:component, 
                    d:{ minx:minx, miny:miny, td:td, cxy:cxy },
                    minX:minx, 
                    maxX:minx + td[0], 
                    minY:miny, 
                    maxY:miny + td[1]
                };								
        	}
	    	else return {minX:0,maxX:0,minY:0,maxY:0};
	    };	   	   		
	};
    jsPlumbUtil.extend(AbstractDOMOverlay, [jsPlumb.DOMElementComponent, AbstractOverlay], {
        getDimensions : function() {            
            return jsPlumb.CurrentLibrary.getSize(jsPlumb.CurrentLibrary.getElementObject(this.getElement()));            
        },
        setVisible : function(state) {
            this._jsPlumb.div.style.display = state ? "block" : "none";
        },
        /*
         * Function: clearCachedDimensions
         * Clears the cached dimensions for the label. As a performance enhancement, label dimensions are
         * cached from 1.3.12 onwards. The cache is cleared when you change the label text, of course, but
         * there are other reasons why the text dimensions might change - if you make a change through CSS, for
         * example, you might change the font size.  in that case you should explicitly call this method.
         */
        clearCachedDimensions : function() {
            this._jsPlumb.cachedDimensions = null;
        },
        cleanup : function() {
            if (this._jsPlumb.div != null) 
                jsPlumb.CurrentLibrary.removeElement(this._jsPlumb.div);
        },
        computeMaxSize : function() {
            var td = _getDimensions(this);
            return Math.max(td[0], td[1]);
        },
        reattachListeners : function(connector) {
            if (this._jsPlumb.div) {
                this.reattachListenersForElement(this._jsPlumb.div, this, connector);
            }
        },
        paint : function(p, containerExtents) {
            if (!this._jsPlumb.initialised) {
                this.getElement();
                p.component.appendDisplayElement(this._jsPlumb.div);
                this.attachListeners(this._jsPlumb.div, p.component);
                this._jsPlumb.initialised = true;
            }
            this._jsPlumb.div.style.left = (p.component.x + p.d.minx) + "px";
            this._jsPlumb.div.style.top = (p.component.y + p.d.miny) + "px";            
        }
    });
	
	/*
     * Class: Overlays.Custom
     * A Custom overlay. You supply a 'create' function which returns some DOM element, and jsPlumb positions it.
     * The 'create' function is passed a Connection or Endpoint.
     */
    /*
     * Function: Constructor
     * 
     * Parameters:
     * 	create - function for jsPlumb to call that returns a DOM element.
     * 	location - distance (as a decimal from 0 to 1 inclusive) marking where the label should sit on the connector. defaults to 0.5.
     * 	id - optional id to use for later retrieval of this overlay.
     * 	
     */
    jsPlumb.Overlays.Custom = function(params) {
    	this.type = "Custom";    	
    	AbstractDOMOverlay.apply(this, arguments);		    	        		    	    		
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.Custom, AbstractDOMOverlay);

    jsPlumb.Overlays.GuideLines = function() {
        var self = this;
        self.length = 50;
        self.lineWidth = 5;
        this.type = "GuideLines";
        AbstractOverlay.apply(this, arguments);
        jsPlumb.jsPlumbUIComponent.apply(this, arguments);
        this.draw = function(connector, currentConnectionPaintStyle) {

            var head = connector.pointAlongPathFrom(self.loc, self.length / 2),
                mid = connector.pointOnPath(self.loc),
                tail = jsPlumbGeom.pointOnLine(head, mid, self.length),
                tailLine = jsPlumbGeom.perpendicularLineTo(head, tail, 40),
                headLine = jsPlumbGeom.perpendicularLineTo(tail, head, 20);

            return {
                connector:connector,
                head:head,
                tail:tail,
                headLine:headLine,
                tailLine:tailLine,                
                minX:Math.min(head.x, tail.x, headLine[0].x, headLine[1].x), 
                minY:Math.min(head.y, tail.y, headLine[0].y, headLine[1].y), 
                maxX:Math.max(head.x, tail.x, headLine[0].x, headLine[1].x), 
                maxY:Math.max(head.y, tail.y, headLine[0].y, headLine[1].y)
            };
        };

       // this.cleanup = function() { };  // nothing to clean up for GuideLines
    };
    
    /*
     * Class: Overlays.Label
     
     */
    /*
     * Function: Constructor
     * 
     * Parameters:
     * 	cssClass - optional css class string to append to css class. This string is appended "as-is", so you can of course have multiple classes
     *             defined.  This parameter is preferred to using labelStyle, borderWidth and borderStyle.
     * 	label - the label to paint.  May be a string or a function that returns a string.  Nothing will be painted if your label is null or your
     *         label function returns null.  empty strings _will_ be painted.
     * 	location - distance (as a decimal from 0 to 1 inclusive) marking where the label should sit on the connector. defaults to 0.5.
     * 	id - optional id to use for later retrieval of this overlay.
     * 
     * 	
     */
    jsPlumb.Overlays.Label =  function(params) {		   
		this.labelStyle = params.labelStyle;
        
        var labelWidth = null, labelHeight =  null, labelText = null, labelPadding = null;
		this.cssClass = this.labelStyle != null ? this.labelStyle.cssClass : null;
		var p = jsPlumb.extend({
            create : function() {
                return document.createElement("div");
            }}, params);
    	jsPlumb.Overlays.Custom.call(this, p);
		this.type = "Label";    	
        this.label = params.label || "";
        this.labelText = null;
        if (this.labelStyle) {
            var el = this.getElement();            
            this.labelStyle.font = this.labelStyle.font || "12px sans-serif";
            el.style.font = this.labelStyle.font;
            el.style.color = this.labelStyle.color || "black";
            if (this.labelStyle.fillStyle) el.style.background = this.labelStyle.fillStyle;
            if (this.labelStyle.borderWidth > 0) {
                var dStyle = this.labelStyle.borderStyle ? this.labelStyle.borderStyle : "black";
                el.style.border = this.labelStyle.borderWidth  + "px solid " + dStyle;
            }
            if (this.labelStyle.padding) el.style.padding = this.labelStyle.padding;            
        }

    };
    jsPlumbUtil.extend(jsPlumb.Overlays.Label, jsPlumb.Overlays.Custom, {
        cleanup:function() {
            this.div = null;
            this.label = null;
            this.labelText = null;
            this.cssClass = null;
            this.labelStyle = null;
        },
        getLabel : function() {
            return this.label;
        },
        /*
         * Function: setLabel
         * sets the label's, um, label.  you would think i'd call this function
         * 'setText', but you can pass either a Function or a String to this, so
         * it makes more sense as 'setLabel'. This uses innerHTML on the label div, so keep
         * that in mind if you need escaped HTML.
         */
        setLabel : function(l) {
            this.label = l;
            this.labelText = null;
            this.clearCachedDimensions();
            this.update();
            this.component.repaint();
        },
        getDimensions : function() {                
            this.update();
            return AbstractDOMOverlay.prototype.getDimensions.apply(this, arguments);
        },
        update : function() {
            if (typeof this.label == "function") {
                var lt = this.label(this);
                this.getElement().innerHTML = lt.replace(/\r\n/g, "<br/>");
            }
            else {
                if (this.labelText == null) {
                    this.labelText = this.label;
                    this.getElement().innerHTML = this.labelText.replace(/\r\n/g, "<br/>");
                }
            }
        }
    });		

 // ********************************* END OF OVERLAY DEFINITIONS ***********************************************************************
    
})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the 'flowchart' connectors, consisting of vertical and horizontal line segments.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (simon.porritt@gmail.com)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */
;(function() {
   
    /**
     * Function: Constructor
     * 
     * Parameters:
     * 	stub - minimum length for the stub at each end of the connector. This can be an integer, giving a value for both ends of the connections, 
     * or an array of two integers, giving separate values for each end. The default is an integer with value 30 (pixels). 
     *  gap  - gap to leave between the end of the connector and the element on which the endpoint resides. if you make this larger than stub then you will see some odd looking behaviour.  
                Like stub, this can be an array or a single value. defaults to 0 pixels for each end.     
     * cornerRadius - optional, defines the radius of corners between segments. defaults to 0 (hard edged corners).
     * alwaysRespectStubs - defaults to false. whether or not the connectors should always draw the stub, or, if the two elements
                            are in close proximity to each other (closer than the sum of the two stubs), to adjust the stubs.
     */
    var Flowchart = function(params) {
        this.type = "Flowchart";
        params = params || {};
        params.stub = params.stub == null ? 30 : params.stub;
        var self = this,
            _super =  jsPlumb.Connectors.AbstractConnector.apply(this, arguments),		
            midpoint = params.midpoint == null ? 0.5 : params.midpoint,
            points = [], segments = [],
            grid = params.grid,
            alwaysRespectStubs = params.alwaysRespectStubs,
            userSuppliedSegments = null,
            lastx = null, lasty = null, lastOrientation,	
            cornerRadius = params.cornerRadius != null ? params.cornerRadius : 0,	
            sgn = function(n) { return n < 0 ? -1 : n === 0 ? 0 : 1; },            
            /**
             * helper method to add a segment.
             */
            addSegment = function(segments, x, y, paintInfo) {
                if (lastx == x && lasty == y) return;
                var lx = lastx == null ? paintInfo.sx : lastx,
                    ly = lasty == null ? paintInfo.sy : lasty,
                    o = lx == x ? "v" : "h",
                    sgnx = sgn(x - lx),
                    sgny = sgn(y - ly);
                    
                lastx = x;
                lasty = y;				    		                
                segments.push([lx, ly, x, y, o, sgnx, sgny]);
            },
            segLength = function(s) {
                return Math.sqrt(Math.pow(s[0] - s[2], 2) + Math.pow(s[1] - s[3], 2));    
            },
            _cloneArray = function(a) { var _a = []; _a.push.apply(_a, a); return _a;},
            updateMinMax = function(a1) {
                self.bounds.minX = Math.min(self.bounds.minX, a1[2]);
                self.bounds.maxX = Math.max(self.bounds.maxX, a1[2]);
                self.bounds.minY = Math.min(self.bounds.minY, a1[3]);
                self.bounds.maxY = Math.max(self.bounds.maxY, a1[3]);    
            },
            writeSegments = function(conn, segments, paintInfo) {
                var current, next;                
                for (var i = 0; i < segments.length - 1; i++) {
                    
                    current = current || _cloneArray(segments[i]);
                    next = _cloneArray(segments[i + 1]);
                    if (cornerRadius > 0 && current[4] != next[4]) {
                        var radiusToUse = Math.min(cornerRadius, segLength(current), segLength(next));
                        // right angle. adjust current segment's end point, and next segment's start point.
                        current[2] -= current[5] * radiusToUse;
                        current[3] -= current[6] * radiusToUse;
                        next[0] += next[5] * radiusToUse;
                        next[1] += next[6] * radiusToUse;														                         			
                        var ac = (current[6] == next[5] && next[5] == 1) ||
                                 ((current[6] == next[5] && next[5] === 0) && current[5] != next[6]) ||
                                 (current[6] == next[5] && next[5] == -1),
                            sgny = next[1] > current[3] ? 1 : -1,
                            sgnx = next[0] > current[2] ? 1 : -1,
                            sgnEqual = sgny == sgnx,
                            cx = (sgnEqual && ac || (!sgnEqual && !ac)) ? next[0] : current[2],
                            cy = (sgnEqual && ac || (!sgnEqual && !ac)) ? current[3] : next[1];                                                        
                        
                        _super.addSegment(conn, "Straight", {
                            x1:current[0], y1:current[1], x2:current[2], y2:current[3]
                        });
                            
                        _super.addSegment(conn, "Arc", {
                            r:radiusToUse, 
                            x1:current[2], 
                            y1:current[3], 
                            x2:next[0], 
                            y2:next[1],
                            cx:cx,
                            cy:cy,
                            ac:ac
                        });	                                            
                    }
                    else {                 
                        // dx + dy are used to adjust for line width.
                        var dx = (current[2] == current[0]) ? 0 : (current[2] > current[0]) ? (paintInfo.lw / 2) : -(paintInfo.lw / 2),
                            dy = (current[3] == current[1]) ? 0 : (current[3] > current[1]) ? (paintInfo.lw / 2) : -(paintInfo.lw / 2);
                        _super.addSegment(conn, "Straight", {
                            x1:current[0]- dx, y1:current[1]-dy, x2:current[2] + dx, y2:current[3] + dy
                        });
                    }                    
                    current = next;
                }
                // last segment
                _super.addSegment(conn, "Straight", {
                    x1:next[0], y1:next[1], x2:next[2], y2:next[3]
                });                             
            };
        
        this.setSegments = function(s) {
            userSuppliedSegments = s;
        };
        
        this.isEditable = function() { return true; };
        
        /*
            Function: getOriginalSegments
            Gets the segments before the addition of rounded corners. This is used by the flowchart
            connector editor, since it only wants to concern itself with the original segments.
        */
        this.getOriginalSegments = function() {
            return userSuppliedSegments || segments;
        };
        
        this._compute = function(paintInfo, params) {
            
            if (params.clearEdits)
                userSuppliedSegments = null;
            
            if (userSuppliedSegments != null) {
                writeSegments(this, userSuppliedSegments, paintInfo);                
                return;
            }
            
            segments = [];
            lastx = null; lasty = null;
            lastOrientation = null;          
            
            var midx = paintInfo.startStubX + ((paintInfo.endStubX - paintInfo.startStubX) * midpoint),
                midy = paintInfo.startStubY + ((paintInfo.endStubY - paintInfo.startStubY) * midpoint);                                                                                                    
    
            var findClearedLine = function(start, mult, anchorPos, dimension) {
                    return start + (mult * (( 1 - anchorPos) * dimension) + _super.maxStub);
                },
                orientations = { x:[ 0, 1 ], y:[ 1, 0 ] },
                commonStubCalculator = function(axis) {
                    return [ paintInfo.startStubX, paintInfo.startStubY, paintInfo.endStubX, paintInfo.endStubY ];                    
                },
                stubCalculators = {
                    perpendicular:commonStubCalculator,
                    orthogonal:commonStubCalculator,
                    opposite:function(axis) {  
                        var pi = paintInfo,
                            idx = axis == "x" ? 0 : 1, 
                            areInProximity = {
                                "x":function() {                                    
                                    return ( (pi.so[idx] == 1 && ( 
                                        ( (pi.startStubX > pi.endStubX) && (pi.tx > pi.startStubX) ) ||
                                        ( (pi.sx > pi.endStubX) && (pi.tx > pi.sx))))) ||

                                        ( (pi.so[idx] == -1 && ( 
                                            ( (pi.startStubX < pi.endStubX) && (pi.tx < pi.startStubX) ) ||
                                            ( (pi.sx < pi.endStubX) && (pi.tx < pi.sx)))));
                                },
                                "y":function() {                                     
                                    return ( (pi.so[idx] == 1 && ( 
                                        ( (pi.startStubY > pi.endStubY) && (pi.ty > pi.startStubY) ) ||
                                        ( (pi.sy > pi.endStubY) && (pi.ty > pi.sy))))) ||

                                        ( (pi.so[idx] == -1 && ( 
                                        ( (pi.startStubY < pi.endStubY) && (pi.ty < pi.startStubY) ) ||
                                        ( (pi.sy < pi.endStubY) && (pi.ty < pi.sy)))));
                                }
                            };

                        if (!alwaysRespectStubs && areInProximity[axis]()) {                   
                            return {
                                "x":[(paintInfo.sx + paintInfo.tx) / 2, paintInfo.startStubY, (paintInfo.sx + paintInfo.tx) / 2, paintInfo.endStubY],
                                "y":[paintInfo.startStubX, (paintInfo.sy + paintInfo.ty) / 2, paintInfo.endStubX, (paintInfo.sy + paintInfo.ty) / 2]
                            }[axis];
                        }
                        else {
                            return [ paintInfo.startStubX, paintInfo.startStubY, paintInfo.endStubX, paintInfo.endStubY ];   
                        }
                    }
                },
                lineCalculators = {
                    perpendicular : function(axis, ss, oss, es, oes) {
                        var pi = paintInfo, 
                            sis = {
                                x:[ [ [ 1,2,3,4 ], null, [ 2,1,4,3 ] ], null, [ [ 4,3,2,1 ], null, [ 3,4,1,2 ] ] ],
                                y:[ [ [ 3,2,1,4 ], null, [ 2,3,4,1 ] ], null, [ [ 4,1,2,3 ], null, [ 1,4,3,2 ] ] ]
                            },
                            stubs = { 
                                x:[ [ pi.startStubX, pi.endStubX ] , null, [ pi.endStubX, pi.startStubX ] ],
                                y:[ [ pi.startStubY, pi.endStubY ] , null, [ pi.endStubY, pi.startStubY ] ]
                            },
                            midLines = {
                                x:[ [ midx, pi.startStubY ], [ midx, pi.endStubY ] ],
                                y:[ [ pi.startStubX, midy ], [ pi.endStubX, midy ] ]
                            },
                            linesToEnd = {
                                x:[ [ pi.endStubX, pi.startStubY ] ],
                                y:[ [ pi.startStubX, pi.endStubY ] ]
                            },
                            startToEnd = {
                                x:[ [ pi.startStubX, pi.endStubY ], [ pi.endStubX, pi.endStubY ] ],        
                                y:[ [ pi.endStubX, pi.startStubY ], [ pi.endStubX, pi.endStubY ] ]
                            },
                            startToMidToEnd = {
                                x:[ [ pi.startStubX, midy ], [ pi.endStubX, midy ], [ pi.endStubX, pi.endStubY ] ],
                                y:[ [ midx, pi.startStubY ], [ midx, pi.endStubY ], [ pi.endStubX, pi.endStubY ] ]
                            },
                            otherStubs = {
                                x:[ pi.startStubY, pi.endStubY ],
                                y:[ pi.startStubX, pi.endStubX ]                                    
                            },
                            soIdx = orientations[axis][0], toIdx = orientations[axis][1],
                            _so = pi.so[soIdx] + 1,
                            _to = pi.to[toIdx] + 1,
                            otherFlipped = (pi.to[toIdx] == -1 && (otherStubs[axis][1] < otherStubs[axis][0])) || (pi.to[toIdx] == 1 && (otherStubs[axis][1] > otherStubs[axis][0])),
                            stub1 = stubs[axis][_so][0],
                            stub2 = stubs[axis][_so][1],
                            segmentIndexes = sis[axis][_so][_to];

                        if (pi.segment == segmentIndexes[3] || (pi.segment == segmentIndexes[2] && otherFlipped)) {
                            return midLines[axis];       
                        }
                        else if (pi.segment == segmentIndexes[2] && stub2 < stub1) {
                            return linesToEnd[axis];
                        }
                        else if ((pi.segment == segmentIndexes[2] && stub2 >= stub1) || (pi.segment == segmentIndexes[1] && !otherFlipped)) {
                            return startToMidToEnd[axis];
                        }
                        else if (pi.segment == segmentIndexes[0] || (pi.segment == segmentIndexes[1] && otherFlipped)) {
                            return startToEnd[axis];  
                        }                                
                    },
                    orthogonal : function(axis, startStub, otherStartStub, endStub, otherEndStub) {                    
                        var pi = paintInfo,                                            
                            extent = {
                                "x":pi.so[0] == -1 ? Math.min(startStub, endStub) : Math.max(startStub, endStub),
                                "y":pi.so[1] == -1 ? Math.min(startStub, endStub) : Math.max(startStub, endStub)
                            }[axis];
                                                
                        return {
                            "x":[ [ extent, otherStartStub ],[ extent, otherEndStub ], [ endStub, otherEndStub ] ],
                            "y":[ [ otherStartStub, extent ], [ otherEndStub, extent ], [ otherEndStub, endStub ] ]
                        }[axis];                    
                    },
                    opposite : function(axis, ss, oss, es, oes) {                                                
                        var pi = paintInfo,
                            otherAxis = {"x":"y","y":"x"}[axis], 
                            dim = {"x":"height","y":"width"}[axis],
                            comparator = pi["is" + axis.toUpperCase() + "GreaterThanStubTimes2"];

                        if (params.sourceEndpoint.elementId == params.targetEndpoint.elementId) {
                            var _val = oss + ((1 - params.sourceEndpoint.anchor[otherAxis]) * params.sourceInfo[dim]) + _super.maxStub;
                            return {
                                "x":[ [ ss, _val ], [ es, _val ] ],
                                "y":[ [ _val, ss ], [ _val, es ] ]
                            }[axis];
                            
                        }                                                        
                        else if (!comparator || (pi.so[idx] == 1 && ss > es) || (pi.so[idx] == -1 && ss < es)) {                                            
                            return {
                                "x":[[ ss, midy ], [ es, midy ]],
                                "y":[[ midx, ss ], [ midx, es ]]
                            }[axis];
                        }
                        else if ((pi.so[idx] == 1 && ss < es) || (pi.so[idx] == -1 && ss > es)) {
                            return {
                                "x":[[ midx, pi.sy ], [ midx, pi.ty ]],
                                "y":[[ pi.sx, midy ], [ pi.tx, midy ]]
                            }[axis];
                        }                        
                    }
                };

            var stubs = stubCalculators[paintInfo.anchorOrientation](paintInfo.sourceAxis),
                idx = paintInfo.sourceAxis == "x" ? 0 : 1,
                oidx = paintInfo.sourceAxis == "x" ? 1 : 0,                            
                ss = stubs[idx],
                oss = stubs[oidx],
                es = stubs[idx + 2],
                oes = stubs[oidx + 2];

            // add the start stub segment.
            addSegment(segments, stubs[0], stubs[1], paintInfo);           

            // compute the rest of the line
            var p = lineCalculators[paintInfo.anchorOrientation](paintInfo.sourceAxis, ss, oss, es, oes);            
            if (p) {
                for (var i = 0; i < p.length; i++) {                	
                    addSegment(segments, p[i][0], p[i][1], paintInfo);
                }
            }          
            
            // line to end stub
            addSegment(segments, stubs[2], stubs[3], paintInfo);
    
            // end stub to end
            addSegment(segments, paintInfo.tx, paintInfo.ty, paintInfo);               
            
            writeSegments(this, segments, paintInfo);                            
        };	

        this.getPath = function() {
            var _last = null, _lastAxis = null, s = [], segs = userSuppliedSegments || segments;
            for (var i = 0; i < segs.length; i++) {
                var seg = segs[i], axis = seg[4], axisIndex = (axis == "v" ? 3 : 2);
                if (_last != null && _lastAxis === axis) {
                    _last[axisIndex] = seg[axisIndex];                            
                }
                else {
                    if (seg[0] != seg[2] || seg[1] != seg[3]) {
                        s.push({
                            start:[ seg[0], seg[1] ],
                            end:[ seg[2], seg[3] ]
                        });                    
                        _last = seg;
                        _lastAxis = seg[4];
                    }
                }
            }
            return s;
        };	

        this.setPath = function(path) {
            userSuppliedSegments = [];
            for (var i = 0; i < path.length; i++) {
                 var lx = path[i].start[0],
                    ly = path[i].start[1],
                    x = path[i].end[0],
                    y = path[i].end[1],
                    o = lx == x ? "v" : "h",
                    sgnx = sgn(x - lx),
                    sgny = sgn(y - ly);

                userSuppliedSegments.push([lx, ly, x, y, o, sgnx, sgny]);
            }
        };
    };

    jsPlumbUtil.extend(Flowchart, jsPlumb.Connectors.AbstractConnector);
    jsPlumb.registerConnectorType(Flowchart, "Flowchart");
})();
/*
 * jsPlumb
 *
 * Title:jsPlumb 1.5.5
 *
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.
 *
 * This file contains the state machine connectors.
 *
 * Thanks to Brainstorm Mobile Solutions for supporting the development of these.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (simon.porritt@gmail.com)
 *
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 *
 * Dual licensed under the MIT and GPL2 licenses.
 */

;(function() {

	var Line = function(x1, y1, x2, y2) {

		this.m = (y2 - y1) / (x2 - x1);
		this.b = -1 * ((this.m * x1) - y1);
	
		this.rectIntersect = function(x,y,w,h) {
			var results = [], xInt, yInt;
		
			// 	try top face
			// 	the equation of the top face is y = (0 * x) + b; y = b.
			xInt = (y - this.b) / this.m;
			// test that the X value is in the line's range.
			if (xInt >= x && xInt <= (x + w)) results.push([ xInt, (this.m * xInt) + this.b ]);
		
			// try right face
			yInt = (this.m * (x + w)) + this.b;
			if (yInt >= y && yInt <= (y + h)) results.push([ (yInt - this.b) / this.m, yInt ]);
		
			// 	bottom face
			xInt = ((y + h) - this.b) / this.m;
			// test that the X value is in the line's range.
			if (xInt >= x && xInt <= (x + w)) results.push([ xInt, (this.m * xInt) + this.b ]);
		
			// try left face
			yInt = (this.m * x) + this.b;
			if (yInt >= y && yInt <= (y + h)) results.push([ (yInt - this.b) / this.m, yInt ]);

			if (results.length == 2) {
				var midx = (results[0][0] + results[1][0]) / 2, midy = (results[0][1] + results[1][1]) / 2;
				results.push([ midx,midy ]);
				// now calculate the segment inside the rectangle where the midpoint lies.
				var xseg = midx <= x + (w / 2) ? -1 : 1,
					yseg = midy <= y + (h / 2) ? -1 : 1;
				results.push([xseg, yseg]);
				return results;
			}
		
			return null;

		};
	},
	_segment = function(x1, y1, x2, y2) {
		if (x1 <= x2 && y2 <= y1) return 1;
		else if (x1 <= x2 && y1 <= y2) return 2;
		else if (x2 <= x1 && y2 >= y1) return 3;
		return 4;
	},
		
		// the control point we will use depends on the faces to which each end of the connection is assigned, specifically whether or not the
		// two faces are parallel or perpendicular.  if they are parallel then the control point lies on the midpoint of the axis in which they
		// are parellel and varies only in the other axis; this variation is proportional to the distance that the anchor points lie from the
		// center of that face.  if the two faces are perpendicular then the control point is at some distance from both the midpoints; the amount and
		// direction are dependent on the orientation of the two elements. 'seg', passed in to this method, tells you which segment the target element
		// lies in with respect to the source: 1 is top right, 2 is bottom right, 3 is bottom left, 4 is top left.
		//
		// sourcePos and targetPos are arrays of info about where on the source and target each anchor is located.  their contents are:
		//
		// 0 - absolute x
		// 1 - absolute y
		// 2 - proportional x in element (0 is left edge, 1 is right edge)
		// 3 - proportional y in element (0 is top edge, 1 is bottom edge)
		// 	
	_findControlPoint = function(midx, midy, segment, sourceEdge, targetEdge, dx, dy, distance, proximityLimit) {
        // TODO (maybe)
        // - if anchor pos is 0.5, make the control point take into account the relative position of the elements.
        if (distance <= proximityLimit) return [midx, midy];

        if (segment === 1) {
            if (sourceEdge[3] <= 0 && targetEdge[3] >= 1) return [ midx + (sourceEdge[2] < 0.5 ? -1 * dx : dx), midy ];
            else if (sourceEdge[2] >= 1 && targetEdge[2] <= 0) return [ midx, midy + (sourceEdge[3] < 0.5 ? -1 * dy : dy) ];
            else return [ midx + (-1 * dx) , midy + (-1 * dy) ];
        }
        else if (segment === 2) {
            if (sourceEdge[3] >= 1 && targetEdge[3] <= 0) return [ midx + (sourceEdge[2] < 0.5 ? -1 * dx : dx), midy ];
            else if (sourceEdge[2] >= 1 && targetEdge[2] <= 0) return [ midx, midy + (sourceEdge[3] < 0.5 ? -1 * dy : dy) ];
            else return [ midx + (1 * dx) , midy + (-1 * dy) ];
        }
        else if (segment === 3) {
            if (sourceEdge[3] >= 1 && targetEdge[3] <= 0) return [ midx + (sourceEdge[2] < 0.5 ? -1 * dx : dx), midy ];
            else if (sourceEdge[2] <= 0 && targetEdge[2] >= 1) return [ midx, midy + (sourceEdge[3] < 0.5 ? -1 * dy : dy) ];
            else return [ midx + (-1 * dx) , midy + (-1 * dy) ];
        }
        else if (segment === 4) {
            if (sourceEdge[3] <= 0 && targetEdge[3] >= 1) return [ midx + (sourceEdge[2] < 0.5 ? -1 * dx : dx), midy ];
            else if (sourceEdge[2] <= 0 && targetEdge[2] >= 1) return [ midx, midy + (sourceEdge[3] < 0.5 ? -1 * dy : dy) ];
            else return [ midx + (1 * dx) , midy + (-1 * dy) ];
        }

	};	
	
	/**
     * Class: Connectors.StateMachine
     * Provides 'state machine' connectors.
     */
	/*
	 * Function: Constructor
	 * 
	 * Parameters:
	 * curviness -	measure of how "curvy" the connectors will be.  this is translated as the distance that the
     *                Bezier curve's control point is from the midpoint of the straight line connecting the two
     *              endpoints, and does not mean that the connector is this wide.  The Bezier curve never reaches
     *              its control points; they act as gravitational masses. defaults to 10.
	 * margin	-	distance from element to start and end connectors, in pixels.  defaults to 5.
	 * proximityLimit  -   sets the distance beneath which the elements are consider too close together to bother
	 *						with fancy curves. by default this is 80 pixels.
	 * loopbackRadius	-	the radius of a loopback connector.  optional; defaults to 25.
	 * showLoopback   -   If set to false this tells the connector that it is ok to paint connections whose source and target is the same element with a connector running through the element. The default value for this is true; the connector always makes a loopback connection loop around the element rather than passing through it.
	*/
	var StateMachine = function(params) {
		params = params || {};
		this.type = "StateMachine";

		var self = this,
			_super =  jsPlumb.Connectors.AbstractConnector.apply(this, arguments),
			curviness = params.curviness || 10,
			margin = params.margin || 5,
			proximityLimit = params.proximityLimit || 80,
			clockwise = params.orientation && params.orientation === "clockwise",
			loopbackRadius = params.loopbackRadius || 25,
			showLoopback = params.showLoopback !== false;
		
		this._compute = function(paintInfo, params) {
			var w = Math.abs(params.sourcePos[0] - params.targetPos[0]),
				h = Math.abs(params.sourcePos[1] - params.targetPos[1]),
				x = Math.min(params.sourcePos[0], params.targetPos[0]),
				y = Math.min(params.sourcePos[1], params.targetPos[1]);				
		
			if (!showLoopback || (params.sourceEndpoint.elementId !== params.targetEndpoint.elementId)) {                            
				var _sx = params.sourcePos[0] < params.targetPos[0] ? 0  : w,
					_sy = params.sourcePos[1] < params.targetPos[1] ? 0:h,
					_tx = params.sourcePos[0] < params.targetPos[0] ? w : 0,
					_ty = params.sourcePos[1] < params.targetPos[1] ? h : 0;
            
				// now adjust for the margin
				if (params.sourcePos[2] === 0) _sx -= margin;
            	if (params.sourcePos[2] === 1) _sx += margin;
            	if (params.sourcePos[3] === 0) _sy -= margin;
            	if (params.sourcePos[3] === 1) _sy += margin;
            	if (params.targetPos[2] === 0) _tx -= margin;
            	if (params.targetPos[2] === 1) _tx += margin;
            	if (params.targetPos[3] === 0) _ty -= margin;
            	if (params.targetPos[3] === 1) _ty += margin;

            	//
	            // these connectors are quadratic bezier curves, having a single control point. if both anchors 
    	        // are located at 0.5 on their respective faces, the control point is set to the midpoint and you
        	    // get a straight line.  this is also the case if the two anchors are within 'proximityLimit', since
           	 	// it seems to make good aesthetic sense to do that. outside of that, the control point is positioned 
           	 	// at 'curviness' pixels away along the normal to the straight line connecting the two anchors.
	            // 
   	        	// there may be two improvements to this.  firstly, we might actually support the notion of avoiding nodes
            	// in the UI, or at least making a good effort at doing so.  if a connection would pass underneath some node,
            	// for example, we might increase the distance the control point is away from the midpoint in a bid to
            	// steer it around that node.  this will work within limits, but i think those limits would also be the likely
            	// limits for, once again, aesthetic good sense in the layout of a chart using these connectors.
            	//
            	// the second possible change is actually two possible changes: firstly, it is possible we should gradually
            	// decrease the 'curviness' as the distance between the anchors decreases; start tailing it off to 0 at some
            	// point (which should be configurable).  secondly, we might slightly increase the 'curviness' for connectors
            	// with respect to how far their anchor is from the center of its respective face. this could either look cool,
            	// or stupid, and may indeed work only in a way that is so subtle as to have been a waste of time.
            	//

				var _midx = (_sx + _tx) / 2, _midy = (_sy + _ty) / 2, 
            	    m2 = (-1 * _midx) / _midy, theta2 = Math.atan(m2),
            	    dy =  (m2 == Infinity || m2 == -Infinity) ? 0 : Math.abs(curviness / 2 * Math.sin(theta2)),
				    dx =  (m2 == Infinity || m2 == -Infinity) ? 0 : Math.abs(curviness / 2 * Math.cos(theta2)),
				    segment = _segment(_sx, _sy, _tx, _ty),
				    distance = Math.sqrt(Math.pow(_tx - _sx, 2) + Math.pow(_ty - _sy, 2)),			
	            	// calculate the control point.  this code will be where we'll put in a rudimentary element avoidance scheme; it
	            	// will work by extending the control point to force the curve to be, um, curvier.
					_controlPoint = _findControlPoint(_midx,
                                                  _midy,
                                                  segment,
                                                  params.sourcePos,
                                                  params.targetPos,
                                                  curviness, curviness,
                                                  distance,
                                                  proximityLimit);

				_super.addSegment(this, "Bezier", {
					x1:_tx, y1:_ty, x2:_sx, y2:_sy,
					cp1x:_controlPoint[0], cp1y:_controlPoint[1],
					cp2x:_controlPoint[0], cp2y:_controlPoint[1]
				});				
            }
            else {
            	// a loopback connector.  draw an arc from one anchor to the other.            	
        		var x1 = params.sourcePos[0], x2 = params.sourcePos[0], y1 = params.sourcePos[1] - margin, y2 = params.sourcePos[1] - margin, 				
					cx = x1, cy = y1 - loopbackRadius,				
					// canvas sizing stuff, to ensure the whole painted area is visible.
					_w = 2 * loopbackRadius, 
					_h = 2 * loopbackRadius,
					_x = cx - loopbackRadius, 
					_y = cy - loopbackRadius;

				paintInfo.points[0] = _x;
				paintInfo.points[1] = _y;
				paintInfo.points[2] = _w;
				paintInfo.points[3] = _h;
				
				// ADD AN ARC SEGMENT.
				_super.addSegment(this, "Arc", {
					loopback:true,
					x1:(x1 - _x) + 4,
					y1:y1 - _y,
					startAngle:0,
					endAngle: 2 * Math.PI,
					r:loopbackRadius,
					ac:!clockwise,
					x2:(x1 - _x) - 4,
					y2:y1 - _y,
					cx:cx - _x,
					cy:cy - _y
				});
            }                           
        };                        
	};
	jsPlumb.registerConnectorType(StateMachine, "StateMachine");
})();

/*
    	// a possible rudimentary avoidance scheme, old now, perhaps not useful.
        //      if (avoidSelector) {
		//		    var testLine = new Line(sourcePos[0] + _sx,sourcePos[1] + _sy,sourcePos[0] + _tx,sourcePos[1] + _ty);
		//		    var sel = jsPlumb.getSelector(avoidSelector);
		//		    for (var i = 0; i < sel.length; i++) {
		//			    var id = jsPlumb.getId(sel[i]);
		//			    if (id != sourceEndpoint.elementId && id != targetEndpoint.elementId) {
		//				    o = jsPlumb.getOffset(id), s = jsPlumb.getSize(id);
//
//						    if (o && s) {
//							    var collision = testLine.rectIntersect(o.left,o.top,s[0],s[1]);
//							    if (collision) {
								    // set the control point to be a certain distance from the midpoint of the two points that
								    // the line crosses on the rectangle.
								    // TODO where will this 75 number come from?
					//			    _controlX = collision[2][0] + (75 * collision[3][0]);
				//	/			    _controlY = collision[2][1] + (75 * collision[3][1]);
//							    }
//						    }
					//  }
	//			    }
              //}
    */

;(function() {

	var Bezier = function(params) {
        params = params || {};

    	var self = this,
			_super =  jsPlumb.Connectors.AbstractConnector.apply(this, arguments),
            stub = params.stub || 50,
            majorAnchor = params.curviness || 150,
            minorAnchor = 10;            

        this.type = "Bezier";	
        this.getCurviness = function() { return majorAnchor; };	
        
        this._findControlPoint = function(point, sourceAnchorPosition, targetAnchorPosition, sourceEndpoint, targetEndpoint) {
        	// determine if the two anchors are perpendicular to each other in their orientation.  we swap the control 
        	// points around if so (code could be tightened up)
        	var soo = sourceEndpoint.anchor.getOrientation(sourceEndpoint), 
        		too = targetEndpoint.anchor.getOrientation(targetEndpoint),
        		perpendicular = soo[0] != too[0] || soo[1] == too[1],
            	p = [];                
            	
            if (!perpendicular) {
                if (soo[0] === 0) // X
                    p.push(sourceAnchorPosition[0] < targetAnchorPosition[0] ? point[0] + minorAnchor : point[0] - minorAnchor);
                else p.push(point[0] - (majorAnchor * soo[0]));
                                 
                if (soo[1] === 0) // Y
                	p.push(sourceAnchorPosition[1] < targetAnchorPosition[1] ? point[1] + minorAnchor : point[1] - minorAnchor);
                else p.push(point[1] + (majorAnchor * too[1]));
            }
             else {
                if (too[0] === 0) // X
                	p.push(targetAnchorPosition[0] < sourceAnchorPosition[0] ? point[0] + minorAnchor : point[0] - minorAnchor);
                else p.push(point[0] + (majorAnchor * too[0]));
                
                if (too[1] === 0) // Y
                	p.push(targetAnchorPosition[1] < sourceAnchorPosition[1] ? point[1] + minorAnchor : point[1] - minorAnchor);
                else p.push(point[1] + (majorAnchor * soo[1]));
             }

            return p;                
        };        

        this._compute = function(paintInfo, p) {                                
			var sp = p.sourcePos,
				tp = p.targetPos,				
                _w = Math.abs(sp[0] - tp[0]),
                _h = Math.abs(sp[1] - tp[1]),            
                _sx = sp[0] < tp[0] ? _w : 0,
                _sy = sp[1] < tp[1] ? _h : 0,
                _tx = sp[0] < tp[0] ? 0 : _w,
                _ty = sp[1] < tp[1] ? 0 : _h,
                _CP = self._findControlPoint([_sx, _sy], sp, tp, p.sourceEndpoint, p.targetEndpoint),
                _CP2 = self._findControlPoint([_tx, _ty], tp, sp, p.targetEndpoint, p.sourceEndpoint);

			_super.addSegment(this, "Bezier", {
				x1:_sx, y1:_sy, x2:_tx, y2:_ty,
				cp1x:_CP[0], cp1y:_CP[1], cp2x:_CP2[0], cp2y:_CP2[1]
			});                    
        }; 
	};

	jsPlumb.registerConnectorType(Bezier, "Bezier");

})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the HTML5 canvas renderers.  Support for canvas was dropped in 1.4.2.
 * This is being kept around because canvas might make a comeback as a single-page solution
 * that also supports node rendering.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */

;(function() {

	
// ********************************* CANVAS RENDERERS FOR CONNECTORS AND ENDPOINTS *******************************************************************
		
	// TODO refactor to renderer common script.  put a ref to jsPlumb.sizeCanvas in there too.
	var _connectionBeingDragged = null,
	    _hasClass = function(el, clazz) { return jsPlumb.CurrentLibrary.hasClass(_getElementObject(el), clazz); },
	    _getElementObject = function(el) { return jsPlumb.CurrentLibrary.getElementObject(el); },
	    _getOffset = function(el) { return jsPlumb.CurrentLibrary.getOffset(_getElementObject(el)); },
	    _pageXY = function(el) { return jsPlumb.CurrentLibrary.getPageXY(el); },
	    _clientXY = function(el) { return jsPlumb.CurrentLibrary.getClientXY(el); };
	
	/*
	 * Class:CanvasMouseAdapter
	 * Provides support for mouse events on canvases.  
	 */
	var CanvasMouseAdapter = window.CanvasMouseAdapter = function() {
		var self = this;
		this.overlayPlacements = [];
		jsPlumb.jsPlumbUIComponent.apply(this, arguments);
		jsPlumbUtil.EventGenerator.apply(this, arguments);
		/**
		 * returns whether or not the given event is ojver a painted area of the canvas. 
		 */
	    this._over = function(e) {		    			  		    	
			var o = _getOffset(_getElementObject(self.canvas)),
				pageXY = _pageXY(e),
				x = pageXY[0] - o.left, y = pageXY[1] - o.top;
			if (x > 0 && y > 0 && x < self.canvas.width && y < self.canvas.height) {
				// first check overlays
				for ( var i = 0; i < self.overlayPlacements.length; i++) {
					var p = self.overlayPlacements[i];
					if (p && (p[0] <= x && p[1] >= x && p[2] <= y && p[3] >= y))
						return true;
				}		    	
				// then the canvas
				var d = self.canvas.getContext("2d").getImageData(parseInt(x, 10), parseInt(y, 10), 1, 1);
				return d.data[0] !== 0 || d.data[1] !== 0 || d.data[2] !== 0 || d.data[3] !== 0;		  
			}
			return false;
	    };
	    
	    var _mouseover = false, _mouseDown = false, _posWhenMouseDown = null, _mouseWasDown = false,
		    _nullSafeHasClass = function(el, clazz) {
		    	return el !== null && _hasClass(el, clazz);
		    };
	    this.mousemove = function(e) {		    
	    	var pageXY = _pageXY(e), clientXY = _clientXY(e),	   
	    	ee = document.elementFromPoint(clientXY[0], clientXY[1]),
	    	eventSourceWasOverlay = _nullSafeHasClass(ee, "_jsPlumb_overlay");	    	
			var _continue = _connectionBeingDragged === null && (_nullSafeHasClass(ee, "_jsPlumb_endpoint") || _nullSafeHasClass(ee, "_jsPlumb_connector"));
			if (!_mouseover && _continue && self._over(e)) {
				_mouseover = true;
				self.fire("mouseenter", self, e);		
				return true;
			}
			// TODO here there is a remote chance that the overlay the mouse moved onto
			// is actually not an overlay for the current component. a more thorough check would
			// be to ensure the overlay belonged to the current component.  
			else if (_mouseover && (!self._over(e) || !_continue) && !eventSourceWasOverlay) {
				_mouseover = false;
				self.fire("mouseexit", self, e);				
			}
			self.fire("mousemove", self, e);
	    };
	    		    		    
	    this.click = function(e) {	    		
			if (_mouseover && self._over(e) && !_mouseWasDown) 
	    		self.fire("click", self, e);		    	
	    	_mouseWasDown = false;
	    };
	    
	    this.dblclick = function(e) {
	    	if (_mouseover && self._over(e) && !_mouseWasDown) 
	    		self.fire("dblclick", self, e);		    	
	    	_mouseWasDown = false;
	    };
	    
	    this.mousedown = function(e) {
	    	if(self._over(e) && !_mouseDown) {
	    		_mouseDown = true;	    		
	    		_posWhenMouseDown = _getOffset(_getElementObject(self.canvas));
	    		self.fire("mousedown", self, e);
	    	}
	    };
	    
	    this.mouseup = function(e) {
	    	_mouseDown = false;
	    	self.fire("mouseup", self, e);
	    };

        this.contextmenu = function(e) {
          if (_mouseover && self._over(e) && !_mouseWasDown)
            self.fire("contextmenu", self, e);
          _mouseWasDown = false;
        };
	};
	jsPlumbUtil.extend(CanvasMouseAdapter, [ jsPlumb.jsPlumbUIComponent, jsPlumbUtil.EventGenerator ]);		
	
	var _newCanvas = function(params) {
		var canvas = document.createElement("canvas");
		params._jsPlumb.instance.appendElement(canvas, params.parent);
		canvas.style.position = "absolute";
		if (params["class"]) canvas.className = params["class"];
		// set an id. if no id on the element and if uuid was supplied it
		// will be used, otherwise we'll create one.
		params._jsPlumb.instance.getId(canvas, params.uuid);
		if (params.tooltip) canvas.setAttribute("title", params.tooltip);

		return canvas;
	};	

	var CanvasComponent = window.CanvasComponent = function(params) {
		CanvasMouseAdapter.apply(this, arguments);

		var displayElements = [ ];
		this.getDisplayElements = function() { return displayElements; };
		this.appendDisplayElement = function(el) { displayElements.push(el); };
	};
	jsPlumbUtil.extend(CanvasComponent, CanvasMouseAdapter, {
		setVisible:function(state) { 			
			this.canvas.style.display = state ? "block" : "none";
		}
	});
	
	var segmentMultipliers = [null, [1, -1], [1, 1], [-1, 1], [-1, -1] ];
	var maybeMakeGradient = function(ctx, style, gradientFunction) {
		if (style.gradient) {
			var g = gradientFunction();
			for ( var i = 0; i < style.gradient.stops.length; i++)
				g.addColorStop(style.gradient.stops[i][0], style.gradient.stops[i][1]);
			ctx.strokeStyle = g;
		}
	};
	var segmentRenderer = function(segment, ctx, style, dx, dy) {	
		({
			"Straight":function(segment, ctx, style, dx, dy) {
				var d = segment.params;
				ctx.save();
				maybeMakeGradient(ctx, style, function() { return ctx.createLinearGradient(d.x1, d.y1, d.x2, d.y2); });
				ctx.beginPath();
				ctx.translate(dx, dy);				
				if (style.dashstyle && style.dashstyle.split(" ").length === 2) {			
					// only a very simple dashed style is supported - having two values, which define the stroke length 
					// (as a multiple of the stroke width) and then the space length (also as a multiple of stroke width). 
					var ds = style.dashstyle.split(" ");
					if (ds.length !== 2) ds = [2, 2];
					var dss = [ ds[0] * style.lineWidth, ds[1] * style.lineWidth ],
						m = (d.x2- d.x1) / (d.y2 - d.y1),
						s = jsPlumbUtil.segment([d.x1, d.y1], [ d.x2, d.y2 ]),
						sm = segmentMultipliers[s],
						theta = Math.atan(m),
						l = Math.sqrt(Math.pow(d.x2 - d.x1, 2) + Math.pow(d.y2 - d.y1, 2)),
						repeats = Math.floor(l / (dss[0] + dss[1])),
						curPos = [d.x1, d.y1];

					
					// TODO: the question here is why could we not support this in all connector types? it's really
					// just a case of going along and asking jsPlumb for the next point on the path a few times, until it
					// reaches the end. every type of connector supports that method, after all.  but right now its only the
					// bezier connector that gives you back the new location on the path along with the x,y coordinates, which
					// we would need. we'd start out at loc=0 and ask for the point along the path that is dss[0] pixels away.
					// we then ask for the point that is (dss[0] + dss[1]) pixels away; and from that one we need not just the
					// x,y but the location, cos we're gonna plug that location back in in order to find where that dash ends.
					//
					// it also strikes me that it should be trivial to support arbitrary dash styles (having more or less than two
					// entries). you'd just iterate that array using a step size of 2, and generify the (rss[0] + rss[1])
					// computation to be sum(rss[0]..rss[n]).					

					for (var i = 0; i < repeats; i++) {
						ctx.moveTo(curPos[0], curPos[1]);

						var nextEndX = curPos[0] + (Math.abs(Math.sin(theta) * dss[0]) * sm[0]),
							nextEndY = curPos[1] + (Math.abs(Math.cos(theta) * dss[0]) * sm[1]),
							nextStartX = curPos[0] + (Math.abs(Math.sin(theta) * (dss[0] + dss[1]))  * sm[0]),
							nextStartY = curPos[1] + (Math.abs(Math.cos(theta) * (dss[0] + dss[1])) * sm[1]);

						ctx.lineTo(nextEndX, nextEndY);
						curPos = [nextStartX, nextStartY];					
					}

					// now draw the last bit
					ctx.moveTo(curPos[0], curPos[1]);
					ctx.lineTo(d.x2, d.y2);							

				}	        
		        else {
					ctx.moveTo(d.x1, d.y1);
					ctx.lineTo(d.x2, d.y2);
		        }				

				ctx.stroke();

				ctx.restore();
			},
			"Bezier":function(segment, ctx, style, dx, dy) {				
				var d = segment.params;
				ctx.save();
				maybeMakeGradient(ctx, style, function() { return ctx.createLinearGradient(d.x2 + dx, d.y2 + dy, d.x1 + dx, d.y1 + dy); });
				ctx.beginPath();
				ctx.translate(dx, dy);
				ctx.moveTo(d.x1, d.y1);
				ctx.bezierCurveTo(d.cp1x, d.cp1y, d.cp2x, d.cp2y, d.x2, d.y2);
				ctx.stroke();
				ctx.restore();
			},
			"Arc":function(segment, ctx, style, dx, dy) {
				var d = segment.params;
				ctx.save();
				ctx.beginPath();
				ctx.translate(dx, dy);				
				ctx.arc(d.cx, d.cy, d.r, segment.startAngle, segment.endAngle, d.ac);
				ctx.stroke();
				ctx.restore();
			}
		})[segment.type](segment, ctx, style, dx, dy);	
	};
	
	/**
	 * Class:CanvasConnector
	 * Superclass for Canvas Connector renderers.
	 */
	var CanvasConnector = jsPlumb.ConnectorRenderers.canvas = function(params) {
		CanvasComponent.apply(this, arguments);
		
		var _paintOneStyle = function(aStyle, dx, dy) {
			this.ctx.save();
			jsPlumb.extend(this.ctx, aStyle);

			var segments = this.getSegments();				
			for (var i = 0; i < segments.length; i++) {
				segmentRenderer(segments[i], this.ctx, aStyle, dx, dy);
			}
			this.ctx.restore();
		}.bind(this);

		var clazz = this._jsPlumb.instance.connectorClass + " " + (params.cssClass || "");
		this.canvas = _newCanvas({ 
			"class":clazz, 
			_jsPlumb:this._jsPlumb,
			parent:params.parent
		});	
		this.ctx = this.canvas.getContext("2d");
		
		this.appendDisplayElement(this.canvas);
		
		this.paint = function(style, anchor, extents) {						
			if (style != null) {							

				var xy = [ this.x, this.y ], wh = [ this.w, this.h ], p,
					dx = 0, dy = 0;

				if (extents != null) {
					if (extents.xmin < 0) {
						xy[0] += extents.xmin;
						dx = -extents.xmin;
					}
					if (extents.ymin < 0) {
						xy[1] += extents.ymin;
						dy = -extents.ymin;
					}
					wh[0] = extents.xmax + ((extents.xmin < 0) ? -extents.xmin : 0);
					wh[1] = extents.ymax + ((extents.ymin < 0) ? -extents.ymin : 0);
				}

				this.translateX = dx;
				this.translateY = dy;
				
				jsPlumbUtil.sizeElement(this.canvas, xy[0], xy[1], wh[0], wh[1]);				
				
				if (style.outlineColor != null) {
					var outlineWidth = style.outlineWidth || 1,
					outlineStrokeWidth = style.lineWidth + (2 * outlineWidth),
					outlineStyle = {
						strokeStyle:style.outlineColor,
						lineWidth:outlineStrokeWidth
					};
					_paintOneStyle(outlineStyle, dx, dy);
				}
				_paintOneStyle(style, dx, dy);
			}
		};				
	};		
	jsPlumbUtil.extend(CanvasConnector, CanvasComponent);
		
	
	/**
	 * Class:CanvasEndpoint
	 * Superclass for Canvas Endpoint renderers.
	 */
	var CanvasEndpoint = function(params) {
		CanvasComponent.apply(this, arguments);		
		var clazz = this._jsPlumb.instance.endpointClass + " " + (params.cssClass || ""),
			canvasParams = { 
			"class":clazz, 
			_jsPlumb:this._jsPlumb,
			parent:params.parent,
			tooltip:self.tooltip
		};
		this.canvas = _newCanvas(canvasParams);	
		this.ctx = this.canvas.getContext("2d");

		this.appendDisplayElement(this.canvas);
		
		this.paint = function(style, anchor, extents) {
			jsPlumbUtil.sizeElement(this.canvas, this.x, this.y, this.w, this.h);			
			if (style.outlineColor != null) {
				var outlineWidth = style.outlineWidth || 1,
				outlineStrokeWidth = style.lineWidth + (2 * outlineWidth);
				var outlineStyle = {
					strokeStyle:style.outlineColor,
					lineWidth:outlineStrokeWidth
				};
			}
			
			this._paint.apply(this, arguments);
		};
	};
	jsPlumbUtil.extend(CanvasEndpoint, CanvasComponent);
	
	jsPlumb.Endpoints.canvas.Dot = function(params) {		
		jsPlumb.Endpoints.Dot.apply(this, arguments);
		CanvasEndpoint.apply(this, arguments);
		var self = this,		
		parseValue = function(value) {
			try { return parseInt(value, 10); }
			catch(e) {
				if (value.substring(value.length - 1) == '%')
					return parseInt(value.substring(0, value - 1), 10);
			}
		},					    	
		calculateAdjustments = function(gradient) {
			var offsetAdjustment = self.defaultOffset, innerRadius = self.defaultInnerRadius;
			if (gradient.offset) offsetAdjustment = parseValue(gradient.offset);
        	if (gradient.innerRadius) innerRadius = parseValue(gradient.innerRadius);
        	return [offsetAdjustment, innerRadius];
		};
		this._paint = function(style) {
			if (style != null) {			
				var ctx = self.canvas.getContext('2d'), 
					orientation = params.endpoint.anchor.getOrientation(params.endpoint);

				jsPlumb.extend(ctx, style);							
	            if (style.gradient) {            	
	            	var adjustments = calculateAdjustments(style.gradient), 
	            	yAdjust = orientation[1] == 1 ? adjustments[0] * -1 : adjustments[0],
	            	xAdjust = orientation[0] == 1 ? adjustments[0] * -1:  adjustments[0],
	            	g = ctx.createRadialGradient(self.radius, self.radius, self.radius, self.radius + xAdjust, self.radius + yAdjust, adjustments[1]);
		            for (var i = 0; i < style.gradient.stops.length; i++)
		            	g.addColorStop(style.gradient.stops[i][0], style.gradient.stops[i][1]);
		            ctx.fillStyle = g;
	            }				
				ctx.beginPath();    
				//ctx.translate(dx, dy);						
				ctx.arc(self.radius, self.radius, self.radius, 0, Math.PI*2, true);
				ctx.closePath();				
				if (style.fillStyle || style.gradient) ctx.fill();
				if (style.strokeStyle) ctx.stroke();
			}
    	};
	};	
	jsPlumbUtil.extend(jsPlumb.Endpoints.canvas.Dot, [ jsPlumb.Endpoints.Dot, CanvasEndpoint ]);
		
	jsPlumb.Endpoints.canvas.Rectangle = function(params) {
		
		var self = this;
		jsPlumb.Endpoints.Rectangle.apply(this, arguments);
		CanvasEndpoint.apply(this, arguments);				
		
    	this._paint = function(style) {
				
			var ctx = self.canvas.getContext("2d"), 
				orientation = params.endpoint.anchor.getOrientation(params.endpoint);

			jsPlumb.extend(ctx, style);
			
			/* canvas gradient */
		    if (style.gradient) {
		    	// first figure out which direction to run the gradient in (it depends on the orientation of the anchors)
		    	var y1 = orientation[1] == 1 ? self.h : orientation[1] === 0 ? self.h / 2 : 0;
				var y2 = orientation[1] == -1 ? self.h : orientation[1] === 0 ? self.h / 2 : 0;
				var x1 = orientation[0] == 1 ? self.w : orientation[0] === 0 ? self.w / 2 : 0;
				var x2 = orientation[0] == -1 ? self.w : orientation[0] === 0 ? self.w / 2 : 0;
			    var g = ctx.createLinearGradient(x1,y1,x2,y2);
			    for (var i = 0; i < style.gradient.stops.length; i++)
	            	g.addColorStop(style.gradient.stops[i][0], style.gradient.stops[i][1]);
	            ctx.fillStyle = g;
		    }
			
			ctx.beginPath();
			ctx.rect(0, 0, self.w, self.h);
			ctx.closePath();				
			if (style.fillStyle || style.gradient) ctx.fill();
			if (style.strokeStyle) ctx.stroke();
    	};
	};		
	jsPlumbUtil.extend(jsPlumb.Endpoints.canvas.Rectangle, [ jsPlumb.Endpoints.Rectangle, CanvasEndpoint ]);
	
	jsPlumb.Endpoints.canvas.Triangle = function(params) {
	        			
		var self = this;
		jsPlumb.Endpoints.Triangle.apply(this, arguments);
		CanvasEndpoint.apply(this, arguments);			
		
    	this._paint = function(style) {    					
			var ctx = self.canvas.getContext('2d'),
				offsetX = 0, offsetY = 0, angle = 0,
				orientation = params.endpoint.anchor.getOrientation(params.endpoint);
			
			if( orientation[0] == 1 ) {
				offsetX = self.width;
				offsetY = self.height;
				angle = 180;
			}
			if( orientation[1] == -1 ) {
				offsetX = self.width;
				angle = 90;
			}
			if( orientation[1] == 1 ) {
				offsetY = self.height;
				angle = -90;
			}
			
			ctx.fillStyle = style.fillStyle;
			
			ctx.translate(offsetX, offsetY);
			ctx.rotate(angle * Math.PI/180);

			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(self.width/2, self.height/2);
			ctx.lineTo(0, self.height);
			ctx.closePath();
			if (style.fillStyle || style.gradient) ctx.fill();
			if (style.strokeStyle) ctx.stroke();				
    	};
	};	
	jsPlumbUtil.extend(jsPlumb.Endpoints.canvas.Triangle, [ jsPlumb.Endpoints.Triangle, CanvasEndpoint ]);
	
	/*
	 * Canvas Image Endpoint: uses the default version, which creates an <img> tag.
	 */
	jsPlumb.Endpoints.canvas.Image = jsPlumb.Endpoints.Image;
	
	/*
	 * Blank endpoint in all renderers is just the default Blank endpoint.
	 */
	jsPlumb.Endpoints.canvas.Blank = jsPlumb.Endpoints.Blank;
		
// ********************************* END OF CANVAS RENDERERS *******************************************************************    
    
    jsPlumb.Overlays.canvas.Label = jsPlumb.Overlays.Label;
	jsPlumb.Overlays.canvas.Custom = jsPlumb.Overlays.Custom;
    
    /**
     * a placeholder right now, really just exists to mirror the fact that there are SVG and VML versions of this. 
     */
    var CanvasOverlay = function() { 
    	jsPlumb.jsPlumbUIComponent.apply(this, arguments);
    };
    jsPlumbUtil.extend(CanvasOverlay, jsPlumb.jsPlumbUIComponent, {
    	setVisible : function(state) {
    	    this.visible = state;
    	    this.component.repaint();
    	}
    });
    
    var AbstractCanvasArrowOverlay = function(superclass, originalArgs) {
    	superclass.apply(this, originalArgs);
    	CanvasOverlay.apply(this, originalArgs);
    	this.paint = function(params, containerExtents) {
    		var ctx = params.component.ctx, d = params.d;
    		
    		if (d) {
    			ctx.save();
				ctx.lineWidth = params.lineWidth;
				ctx.beginPath();
				ctx.translate(params.component.translateX, params.component.translateY);
				ctx.moveTo(d.hxy.x, d.hxy.y);
				ctx.lineTo(d.tail[0].x, d.tail[0].y);
				ctx.lineTo(d.cxy.x, d.cxy.y);
				ctx.lineTo(d.tail[1].x, d.tail[1].y);
				ctx.lineTo(d.hxy.x, d.hxy.y);
				ctx.closePath();						
							
				if (params.strokeStyle) {
					ctx.strokeStyle = params.strokeStyle;
					ctx.stroke();
				}
				if (params.fillStyle) {
					ctx.fillStyle = params.fillStyle;			
					ctx.fill();
				}
				ctx.restore();
			}
    	};
    }; 
    
    jsPlumb.Overlays.canvas.Arrow = function() {
    	AbstractCanvasArrowOverlay.apply(this, [jsPlumb.Overlays.Arrow, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.canvas.Arrow, [ jsPlumb.Overlays.Arrow, CanvasOverlay ] );
    
    jsPlumb.Overlays.canvas.PlainArrow = function() {
    	AbstractCanvasArrowOverlay.apply(this, [jsPlumb.Overlays.PlainArrow, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.canvas.PlainArrow, [ jsPlumb.Overlays.PlainArrow, CanvasOverlay ] );
    
    jsPlumb.Overlays.canvas.Diamond = function() {
    	AbstractCanvasArrowOverlay.apply(this, [jsPlumb.Overlays.Diamond, arguments]);    	
    };		
    jsPlumbUtil.extend(jsPlumb.Overlays.canvas.Diamond, [ jsPlumb.Overlays.Diamond, CanvasOverlay ] );
})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the SVG renderers.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */

/**
 * SVG support for jsPlumb.
 * 
 * things to investigate:
 * 
 * gradients:  https://developer.mozilla.org/en/svg_in_html_introduction
 * css:http://tutorials.jenkov.com/svg/svg-and-css.html
 * text on a path: http://www.w3.org/TR/SVG/text.html#TextOnAPath
 * pointer events: https://developer.mozilla.org/en/css/pointer-events
 *
 * IE9 hover jquery: http://forum.jquery.com/topic/1-6-2-broke-svg-hover-events
 *
 */
;(function() {
	
// ************************** SVG utility methods ********************************************	
	
	var svgAttributeMap = {
		"joinstyle":"stroke-linejoin",
		"stroke-linejoin":"stroke-linejoin",		
		"stroke-dashoffset":"stroke-dashoffset",
		"stroke-linecap":"stroke-linecap"
	},
	STROKE_DASHARRAY = "stroke-dasharray",
	DASHSTYLE = "dashstyle",
	LINEAR_GRADIENT = "linearGradient",
	RADIAL_GRADIENT = "radialGradient",
	FILL = "fill",
	STOP = "stop",
	STROKE = "stroke",
	STROKE_WIDTH = "stroke-width",
	STYLE = "style",
	NONE = "none",
	JSPLUMB_GRADIENT = "jsplumb_gradient_",
	LINE_WIDTH = "lineWidth",
	ns = {
		svg:"http://www.w3.org/2000/svg",
		xhtml:"http://www.w3.org/1999/xhtml"
	},
	_attr = function(node, attributes) {
		for (var i in attributes)
			node.setAttribute(i, "" + attributes[i]);
	},	
	_node = function(name, attributes) {
		var n = document.createElementNS(ns.svg, name);
		attributes = attributes || {};
		attributes.version = "1.1";
		attributes.xmlns = ns.xhtml;
		_attr(n, attributes);
		return n;
	},
	_pos = function(d) { return "position:absolute;left:" + d[0] + "px;top:" + d[1] + "px"; },	
	_clearGradient = function(parent) {
		for (var i = 0; i < parent.childNodes.length; i++) {
			if (parent.childNodes[i].tagName == LINEAR_GRADIENT || parent.childNodes[i].tagName == RADIAL_GRADIENT)
				parent.removeChild(parent.childNodes[i]);
		}
	},		
	_updateGradient = function(parent, node, style, dimensions, uiComponent) {
		var id = JSPLUMB_GRADIENT + uiComponent._jsPlumb.instance.idstamp();
		// first clear out any existing gradient
		_clearGradient(parent);
		// this checks for an 'offset' property in the gradient, and in the absence of it, assumes
		// we want a linear gradient. if it's there, we create a radial gradient.
		// it is possible that a more explicit means of defining the gradient type would be
		// better. relying on 'offset' means that we can never have a radial gradient that uses
		// some default offset, for instance.
		// issue 244 suggested the 'gradientUnits' attribute; without this, straight/flowchart connectors with gradients would
		// not show gradients when the line was perfectly horizontal or vertical.
		var g;
		if (!style.gradient.offset) {
			g = _node(LINEAR_GRADIENT, {id:id, gradientUnits:"userSpaceOnUse"});
		}
		else {
			g = _node(RADIAL_GRADIENT, {
				id:id
			});			
		}
		
		parent.appendChild(g);
		
		// the svg radial gradient seems to treat stops in the reverse 
		// order to how canvas does it.  so we want to keep all the maths the same, but
		// iterate the actual style declarations in reverse order, if the x indexes are not in order.
		for (var i = 0; i < style.gradient.stops.length; i++) {
			var styleToUse = uiComponent.segment == 1 ||  uiComponent.segment == 2 ? i: style.gradient.stops.length - 1 - i,			
				stopColor = jsPlumbUtil.convertStyle(style.gradient.stops[styleToUse][1], true),
				s = _node(STOP, {"offset":Math.floor(style.gradient.stops[i][0] * 100) + "%", "stop-color":stopColor});

			g.appendChild(s);
		}
		var applyGradientTo = style.strokeStyle ? STROKE : FILL;
        //document.location.toString()
		//node.setAttribute(STYLE, applyGradientTo + ":url(#" + id + ")");
        node.setAttribute(STYLE, applyGradientTo + ":url(" + document.location.toString() + "#" + id + ")");
	},
	_applyStyles = function(parent, node, style, dimensions, uiComponent) {
		
		if (style.gradient) {
			_updateGradient(parent, node, style, dimensions, uiComponent);			
		}
		else {
			// make sure we clear any existing gradient
			_clearGradient(parent);
			node.setAttribute(STYLE, "");
		}
		
		node.setAttribute(FILL, style.fillStyle ? jsPlumbUtil.convertStyle(style.fillStyle, true) : NONE);
		node.setAttribute(STROKE, style.strokeStyle ? jsPlumbUtil.convertStyle(style.strokeStyle, true) : NONE);		
		if (style.lineWidth) {
			node.setAttribute(STROKE_WIDTH, style.lineWidth);
		}
	
		// in SVG there is a stroke-dasharray attribute we can set, and its syntax looks like
		// the syntax in VML but is actually kind of nasty: values are given in the pixel
		// coordinate space, whereas in VML they are multiples of the width of the stroked
		// line, which makes a lot more sense.  for that reason, jsPlumb is supporting both
		// the native svg 'stroke-dasharray' attribute, and also the 'dashstyle' concept from
		// VML, which will be the preferred method.  the code below this converts a dashstyle
		// attribute given in terms of stroke width into a pixel representation, by using the
		// stroke's lineWidth. 
		if (style[DASHSTYLE] && style[LINE_WIDTH] && !style[STROKE_DASHARRAY]) {
			var sep = style[DASHSTYLE].indexOf(",") == -1 ? " " : ",",
			parts = style[DASHSTYLE].split(sep),
			styleToUse = "";
			parts.forEach(function(p) {
				styleToUse += (Math.floor(p * style.lineWidth) + sep);
			});
			node.setAttribute(STROKE_DASHARRAY, styleToUse);
		}		
		else if(style[STROKE_DASHARRAY]) {
			node.setAttribute(STROKE_DASHARRAY, style[STROKE_DASHARRAY]);
		}
		
		// extra attributes such as join type, dash offset.
		for (var i in svgAttributeMap) {
			if (style[i]) {
				node.setAttribute(svgAttributeMap[i], style[i]);
			}
		}
	},
	_decodeFont = function(f) {
		var r = /([0-9].)(p[xt])\s(.*)/, 
			bits = f.match(r);

		return {size:bits[1] + bits[2], font:bits[3]};		
	},
	_classManip = function(el, add, clazz) {
		var classesToAddOrRemove = clazz.split(" "),
			className = el.className,
			curClasses = className.baseVal.split(" ");
			
		for (var i = 0; i < classesToAddOrRemove.length; i++) {
			if (add) {
				if (curClasses.indexOf(classesToAddOrRemove[i]) == -1)
					curClasses.push(classesToAddOrRemove[i]);
			}
			else {
				var idx = curClasses.indexOf(classesToAddOrRemove[i]);
				if (idx != -1)
					curClasses.splice(idx, 1);
			}
		}
		
		el.className.baseVal = curClasses.join(" ");
	},
	_addClass = function(el, clazz) { _classManip(el, true, clazz); },
	_removeClass = function(el, clazz) { _classManip(el, false, clazz); },
	_appendAtIndex = function(svg, path, idx) {
		if (svg.childNodes.length > idx) {
			svg.insertBefore(path, svg.childNodes[idx]);
		}
		else svg.appendChild(path);
	};
	
	/**
		utility methods for other objects to use.
	*/
	jsPlumbUtil.svg = {
		addClass:_addClass,
		removeClass:_removeClass,
		node:_node,
		attr:_attr,
		pos:_pos
	};
	
 // ************************** / SVG utility methods ********************************************	
	
	/*
	 * Base class for SVG components.
	 */	
	var SvgComponent = function(params) {
		var pointerEventsSpec = params.pointerEventsSpec || "all", renderer = {};
			
		jsPlumb.jsPlumbUIComponent.apply(this, params.originalArgs);
		this.canvas = null;this.path = null;this.svg = null; 
	
		var clazz = params.cssClass + " " + (params.originalArgs[0].cssClass || ""),		
			svgParams = {
				"style":"",
				"width":0,
				"height":0,
				"pointer-events":pointerEventsSpec,
				"position":"absolute"
			};				
		this.svg = _node("svg", svgParams);
		if (params.useDivWrapper) {
			this.canvas = document.createElement("div");
			this.canvas.style.position = "absolute";
			jsPlumbUtil.sizeElement(this.canvas,0,0,1,1);
			this.canvas.className = clazz;
		}
		else {
			_attr(this.svg, { "class":clazz });
			this.canvas = this.svg;
		}
			
		params._jsPlumb.appendElement(this.canvas, params.originalArgs[0].parent);
		if (params.useDivWrapper) this.canvas.appendChild(this.svg);
		
		// TODO this displayElement stuff is common between all components, across all
		// renderers.  would be best moved to jsPlumbUIComponent.
		var displayElements = [ this.canvas ];
		this.getDisplayElements = function() { 
			return displayElements; 
		};
		
		this.appendDisplayElement = function(el) {
			displayElements.push(el);
		};	
		
		this.paint = function(style, anchor, extents) {	   			
			if (style != null) {
				
				var xy = [ this.x, this.y ], wh = [ this.w, this.h ], p;
				if (extents != null) {
					if (extents.xmin < 0) xy[0] += extents.xmin;
					if (extents.ymin < 0) xy[1] += extents.ymin;
					wh[0] = extents.xmax + ((extents.xmin < 0) ? -extents.xmin : 0);
					wh[1] = extents.ymax + ((extents.ymin < 0) ? -extents.ymin : 0);
				}

				if (params.useDivWrapper) {					
					jsPlumbUtil.sizeElement(this.canvas, xy[0], xy[1], wh[0], wh[1]);
					xy[0] = 0; xy[1] = 0;
					p = _pos([ 0, 0 ]);
				}
				else
					p = _pos([ xy[0], xy[1] ]);
                
                renderer.paint.apply(this, arguments);		    			    	
                
		    	_attr(this.svg, {
	    			"style":p,
	    			"width": wh[0],
	    			"height": wh[1]
	    		});		    		    		    	
			}
	    };
		
		return {
			renderer:renderer
		};
	};
	jsPlumbUtil.extend(SvgComponent, jsPlumb.jsPlumbUIComponent, {
		cleanup:function() {
			jsPlumbUtil.removeElement(this.canvas);            
			this.svg = null;
			this.canvas = null;
			this.path = null;			
		},
		setVisible:function(v) {
			if (this.canvas) {
				this.canvas.style.display = v ? "block" : "none";
			}
			if (this.bgCanvas) {
				this.bgCanvas.style.display = v ? "block" : "none";
			}
		}
	});
	
	/*
	 * Base class for SVG connectors.
	 */ 
	var SvgConnector = jsPlumb.ConnectorRenderers.svg = function(params) {
		var self = this,
			_super = SvgComponent.apply(this, [ { 
				cssClass:params._jsPlumb.connectorClass, 
				originalArgs:arguments, 
				pointerEventsSpec:"none", 
				_jsPlumb:params._jsPlumb
			} ]);	

		/*this.pointOnPath = function(location, absolute) {
			if (!self.path) return [0,0];
			var p = absolute ? location : location * self.path.getTotalLength();
			return self.path.getPointAtLength(p);
		};*/			

		_super.renderer.paint = function(style, anchor, extents) {
			
			var segments = self.getSegments(), p = "", offset = [0,0];			
			if (extents.xmin < 0) offset[0] = -extents.xmin;
			if (extents.ymin < 0) offset[1] = -extents.ymin;			
			
			// create path from segments.	
			for (var i = 0; i < segments.length; i++) {
				p += jsPlumb.Segments.svg.SegmentRenderer.getPath(segments[i]);
				p += " ";
			}			
			
			var a = { 
					d:p,
					transform:"translate(" + offset[0] + "," + offset[1] + ")",
					"pointer-events":params["pointer-events"] || "visibleStroke"
				}, 
                outlineStyle = null,
                d = [self.x,self.y,self.w,self.h];						
			
			// outline style.  actually means drawing an svg object underneath the main one.
			if (style.outlineColor) {
				var outlineWidth = style.outlineWidth || 1,
					outlineStrokeWidth = style.lineWidth + (2 * outlineWidth);
				outlineStyle = jsPlumb.CurrentLibrary.extend({}, style);
				outlineStyle.strokeStyle = jsPlumbUtil.convertStyle(style.outlineColor);
				outlineStyle.lineWidth = outlineStrokeWidth;
				
				if (self.bgPath == null) {
					self.bgPath = _node("path", a);
			    	_appendAtIndex(self.svg, self.bgPath, 0);
		    		self.attachListeners(self.bgPath, self);
				}
				else {
					_attr(self.bgPath, a);
				}
				
				_applyStyles(self.svg, self.bgPath, outlineStyle, d, self);
			}			
			
	    	if (self.path == null) {
		    	self.path = _node("path", a);
		    	_appendAtIndex(self.svg, self.path, style.outlineColor ? 1 : 0);
	    		self.attachListeners(self.path, self);	    		    		
	    	}
	    	else {
	    		_attr(self.path, a);
	    	}
	    		    	
	    	_applyStyles(self.svg, self.path, style, d, self);
		};
		
		this.reattachListeners = function() {
			if (this.bgPath) this.reattachListenersForElement(this.bgPath, this);
			if (this.path) this.reattachListenersForElement(this.path, this);
		};
	};
	jsPlumbUtil.extend(jsPlumb.ConnectorRenderers.svg, SvgComponent);

// ******************************* svg segment renderer *****************************************************	
		
	jsPlumb.Segments.svg = {
		SegmentRenderer : {		
			getPath : function(segment) {
				return ({
					"Straight":function() {
						var d = segment.getCoordinates();
						return "M " + d.x1 + " " + d.y1 + " L " + d.x2 + " " + d.y2;	
					},
					"Bezier":function() {
						var d = segment.params;
						return "M " + d.x1 + " " + d.y1 + 
							" C " + d.cp1x + " " + d.cp1y + " " + d.cp2x + " " + d.cp2y + " " + d.x2 + " " + d.y2;			
					},
					"Arc":function() {
						var d = segment.params,
							laf = segment.sweep > Math.PI ? 1 : 0,
							sf = segment.anticlockwise ? 0 : 1;			

						return "M" + segment.x1 + " " + segment.y1 + " A " + segment.radius + " " + d.r + " 0 " + laf + "," + sf + " " + segment.x2 + " " + segment.y2;
					}
				})[segment.type]();	
			}
		}
	};
	
// ******************************* /svg segments *****************************************************
   
    /*
	 * Base class for SVG endpoints.
	 */
	var SvgEndpoint = window.SvgEndpoint = function(params) {
		var _super = SvgComponent.apply(this, [ {
				cssClass:params._jsPlumb.endpointClass, 
				originalArgs:arguments, 
				pointerEventsSpec:"all",
				useDivWrapper:true,
				_jsPlumb:params._jsPlumb
			} ]);
			
		_super.renderer.paint = function(style) {
			var s = jsPlumb.extend({}, style);
			if (s.outlineColor) {
				s.strokeWidth = s.outlineWidth;
				s.strokeStyle = jsPlumbUtil.convertStyle(s.outlineColor, true);
			}
			
			if (this.node == null) {
				this.node = this.makeNode(s);
				this.svg.appendChild(this.node);
				this.attachListeners(this.node, this);
			}
			else if (this.updateNode != null) {
				this.updateNode(this.node);
			}
			_applyStyles(this.svg, this.node, s, [ this.x, this.y, this.w, this.h ], this);
			_pos(this.node, [ this.x, this.y ]);
		}.bind(this);
				
	};
	jsPlumbUtil.extend(SvgEndpoint, SvgComponent, {
		reattachListeners : function() {
			if (this.node) this.reattachListenersForElement(this.node, this);
		}
	});
	
	/*
	 * SVG Dot Endpoint
	 */
	jsPlumb.Endpoints.svg.Dot = function() {
		jsPlumb.Endpoints.Dot.apply(this, arguments);
		SvgEndpoint.apply(this, arguments);		
		this.makeNode = function(style) { 
			return _node("circle", {
                "cx"	:	this.w / 2,
                "cy"	:	this.h / 2,
                "r"		:	this.radius
            });			
		};
		this.updateNode = function(node) {
			_attr(node, {
				"cx":this.w / 2,
				"cy":this.h  / 2,
				"r":this.radius
			});
		};
	};
	jsPlumbUtil.extend(jsPlumb.Endpoints.svg.Dot, [jsPlumb.Endpoints.Dot, SvgEndpoint]);
	
	/*
	 * SVG Rectangle Endpoint 
	 */
	jsPlumb.Endpoints.svg.Rectangle = function() {
		jsPlumb.Endpoints.Rectangle.apply(this, arguments);
		SvgEndpoint.apply(this, arguments);		
		this.makeNode = function(style) {
			return _node("rect", {
				"width"     :   this.w,
				"height"    :   this.h
			});
		};
		this.updateNode = function(node) {
			_attr(node, {
				"width":this.w,
				"height":this.h
			});
		};			
	};		
	jsPlumbUtil.extend(jsPlumb.Endpoints.svg.Rectangle, [jsPlumb.Endpoints.Rectangle, SvgEndpoint]);
	
	/*
	 * SVG Image Endpoint is the default image endpoint.
	 */
	jsPlumb.Endpoints.svg.Image = jsPlumb.Endpoints.Image;
	/*
	 * Blank endpoint in svg renderer is the default Blank endpoint.
	 */
	jsPlumb.Endpoints.svg.Blank = jsPlumb.Endpoints.Blank;	
	/*
	 * Label overlay in svg renderer is the default Label overlay.
	 */
	jsPlumb.Overlays.svg.Label = jsPlumb.Overlays.Label;
	/*
	 * Custom overlay in svg renderer is the default Custom overlay.
	 */
	jsPlumb.Overlays.svg.Custom = jsPlumb.Overlays.Custom;
		
	var AbstractSvgArrowOverlay = function(superclass, originalArgs) {
    	superclass.apply(this, originalArgs);
    	jsPlumb.jsPlumbUIComponent.apply(this, originalArgs);
        this.isAppendedAtTopLevel = false;
    	var self = this;
    	this.path = null;
    	this.paint = function(params, containerExtents) {
    		// only draws on connections, not endpoints.
    		if (params.component.svg && containerExtents) {
	    		if (this.path == null) {
	    			this.path = _node("path", {
	    				"pointer-events":"all"	
	    			});
	    			params.component.svg.appendChild(this.path);
	    			
	    			this.attachListeners(this.path, params.component);
	    			this.attachListeners(this.path, this);
	    		}
	    		var clazz = originalArgs && (originalArgs.length == 1) ? (originalArgs[0].cssClass || "") : "",
	    			offset = [0,0];

	    		if (containerExtents.xmin < 0) offset[0] = -containerExtents.xmin;
	    		if (containerExtents.ymin < 0) offset[1] = -containerExtents.ymin;
	    		
	    		_attr(this.path, { 
	    			"d"			:	makePath(params.d),
	    			"class" 	:	clazz,
	    			stroke 		: 	params.strokeStyle ? params.strokeStyle : null,
	    			fill 		: 	params.fillStyle ? params.fillStyle : null,
	    			transform	: 	"translate(" + offset[0] + "," + offset[1] + ")"
	    		});    		
	    	}
    	};
    	var makePath = function(d) {
    		return "M" + d.hxy.x + "," + d.hxy.y +
    				" L" + d.tail[0].x + "," + d.tail[0].y + 
    				" L" + d.cxy.x + "," + d.cxy.y + 
    				" L" + d.tail[1].x + "," + d.tail[1].y + 
    				" L" + d.hxy.x + "," + d.hxy.y;
    	};
    	this.reattachListeners = function() {
			if (this.path) this.reattachListenersForElement(this.path, this);
		};		
    };
    jsPlumbUtil.extend(AbstractSvgArrowOverlay, [jsPlumb.jsPlumbUIComponent, jsPlumb.Overlays.AbstractOverlay], {
    	cleanup : function() {
    		if (this.path != null) jsPlumb.CurrentLibrary.removeElement(this.path);
    	},
    	setVisible:function(v) {
    		if(this.path != null) (this.path.style.display = (v ? "block" : "none"));
    	}
    });
    
    jsPlumb.Overlays.svg.Arrow = function() {
    	AbstractSvgArrowOverlay.apply(this, [jsPlumb.Overlays.Arrow, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.svg.Arrow, [ jsPlumb.Overlays.Arrow, AbstractSvgArrowOverlay ]);
    
    jsPlumb.Overlays.svg.PlainArrow = function() {
    	AbstractSvgArrowOverlay.apply(this, [jsPlumb.Overlays.PlainArrow, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.svg.PlainArrow, [ jsPlumb.Overlays.PlainArrow, AbstractSvgArrowOverlay ]);
    
    jsPlumb.Overlays.svg.Diamond = function() {
    	AbstractSvgArrowOverlay.apply(this, [jsPlumb.Overlays.Diamond, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.svg.Diamond, [ jsPlumb.Overlays.Diamond, AbstractSvgArrowOverlay ]);

    // a test
    jsPlumb.Overlays.svg.GuideLines = function() {
        var path = null, self = this, p1_1, p1_2;        
        jsPlumb.Overlays.GuideLines.apply(this, arguments);
        this.paint = function(params, containerExtents) {
    		if (path == null) {
    			path = _node("path");
    			params.connector.svg.appendChild(path);
    			self.attachListeners(path, params.connector);
    			self.attachListeners(path, self);

                p1_1 = _node("path");
    			params.connector.svg.appendChild(p1_1);
    			self.attachListeners(p1_1, params.connector);
    			self.attachListeners(p1_1, self);

                p1_2 = _node("path");
    			params.connector.svg.appendChild(p1_2);
    			self.attachListeners(p1_2, params.connector);
    			self.attachListeners(p1_2, self);
    		}

    		var offset =[0,0];
    		if (containerExtents.xmin < 0) offset[0] = -containerExtents.xmin;
    		if (containerExtents.ymin < 0) offset[1] = -containerExtents.ymin;

    		_attr(path, {
    			"d"		:	makePath(params.head, params.tail),
    			stroke 	: 	"red",
    			fill 	: 	null,
    			transform:"translate(" + offset[0] + "," + offset[1] + ")"
    		});

            _attr(p1_1, {
    			"d"		:	makePath(params.tailLine[0], params.tailLine[1]),
    			stroke 	: 	"blue",
    			fill 	: 	null,
    			transform:"translate(" + offset[0] + "," + offset[1] + ")"
    		});

            _attr(p1_2, {
    			"d"		:	makePath(params.headLine[0], params.headLine[1]),
    			stroke 	: 	"green",
    			fill 	: 	null,
    			transform:"translate(" + offset[0] + "," + offset[1] + ")"
    		});
    	};

        var makePath = function(d1, d2) {
            return "M " + d1.x + "," + d1.y +
                   " L" + d2.x + "," + d2.y;
        };        
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.svg.GuideLines, jsPlumb.Overlays.GuideLines);
})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the VML renderers.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */

;(function() {
	
	// http://ajaxian.com/archives/the-vml-changes-in-ie-8
	// http://www.nczonline.net/blog/2010/01/19/internet-explorer-8-document-and-browser-modes/
	// http://www.louisremi.com/2009/03/30/changes-in-vml-for-ie8-or-what-feature-can-the-ie-dev-team-break-for-you-today/
	
	var vmlAttributeMap = {
		"stroke-linejoin":"joinstyle",
		"joinstyle":"joinstyle",		
		"endcap":"endcap",
		"miterlimit":"miterlimit"
	},
	jsPlumbStylesheet = null;
	
	if (document.createStyleSheet && document.namespaces) {			
		
		var ruleClasses = [
				".jsplumb_vml", "jsplumb\\:textbox", "jsplumb\\:oval", "jsplumb\\:rect", 
				"jsplumb\\:stroke", "jsplumb\\:shape", "jsplumb\\:group"
			],
			rule = "behavior:url(#default#VML);position:absolute;";

		jsPlumbStylesheet = document.createStyleSheet();

		for (var i = 0; i < ruleClasses.length; i++)
			jsPlumbStylesheet.addRule(ruleClasses[i], rule);

		// in this page it is also mentioned that IE requires the extra arg to the namespace
		// http://www.louisremi.com/2009/03/30/changes-in-vml-for-ie8-or-what-feature-can-the-ie-dev-team-break-for-you-today/
		// but someone commented saying they didn't need it, and it seems jsPlumb doesnt need it either.
		// var iev = document.documentMode;
		//if (!iev || iev < 8)
			document.namespaces.add("jsplumb", "urn:schemas-microsoft-com:vml");
		//else
		//	document.namespaces.add("jsplumb", "urn:schemas-microsoft-com:vml", "#default#VML");
	}
	
	jsPlumb.vml = {};
	
	var scale = 1000,

    _groupMap = {},
    _getGroup = function(container, connectorClass) {
        var id = jsPlumb.getId(container),
            g = _groupMap[id];
        if(!g) {
            g = _node("group", [0,0,scale, scale], {"class":connectorClass});
            //g.style.position=absolute;
            //g["coordsize"] = "1000,1000";
            g.style.backgroundColor="red";
            _groupMap[id] = g;
            //jsPlumb.appendElement(g, container);  // todo if this gets reinstated, remember to use the current jsplumb instance.
            //jsPlumb.CurrentLibrary.getDOMElement(container).appendChild(g);
            //document.body.appendChild(g);
        }
        return g;
    },
	_atts = function(o, atts) {
		for (var i in atts) { 
			// IE8 fix: setattribute does not work after an element has been added to the dom!
			// http://www.louisremi.com/2009/03/30/changes-in-vml-for-ie8-or-what-feature-can-the-ie-dev-team-break-for-you-today/
			//o.setAttribute(i, atts[i]);

			/*There is an additional problem when accessing VML elements by using get/setAttribute. The simple solution is following:

			if (document.documentMode==8) {
			ele.opacity=1;
			} else {
			ele.setAttribute(‘opacity’,1);
			}
			*/

			o[i] = atts[i];
		}
	},
	_node = function(name, d, atts, parent, _jsPlumb, deferToJsPlumbContainer) {
		atts = atts || {};
		var o = document.createElement("jsplumb:" + name);
		if (deferToJsPlumbContainer)
			_jsPlumb.appendElement(o, parent);
		else
			jsPlumb.CurrentLibrary.appendElement(o, parent);
		o.className = (atts["class"] ? atts["class"] + " " : "") + "jsplumb_vml";
		_pos(o, d);
		_atts(o, atts);
		return o;
	},
	_pos = function(o,d, zIndex) {
		o.style.left = d[0] + "px";		
		o.style.top =  d[1] + "px";
		o.style.width= d[2] + "px";
		o.style.height= d[3] + "px";
		o.style.position = "absolute";
		if (zIndex)
			o.style.zIndex = zIndex;
	},
	_conv = jsPlumb.vml.convertValue = function(v) {
		return Math.floor(v * scale);
	},	
	// tests if the given style is "transparent" and then sets the appropriate opacity node to 0 if so,
	// or 1 if not.  TODO in the future, support variable opacity.
	_maybeSetOpacity = function(styleToWrite, styleToCheck, type, component) {
		if ("transparent" === styleToCheck)
			component.setOpacity(type, "0.0");
		else
			component.setOpacity(type, "1.0");
	},
	_applyStyles = function(node, style, component, _jsPlumb) {
		var styleToWrite = {};
		if (style.strokeStyle) {
			styleToWrite.stroked = "true";
			var strokeColor = jsPlumbUtil.convertStyle(style.strokeStyle, true);
			styleToWrite.strokecolor = strokeColor;
			_maybeSetOpacity(styleToWrite, strokeColor, "stroke", component);
			styleToWrite.strokeweight = style.lineWidth + "px";
		}
		else styleToWrite.stroked = "false";
		
		if (style.fillStyle) {
			styleToWrite.filled = "true";
			var fillColor = jsPlumbUtil.convertStyle(style.fillStyle, true);
			styleToWrite.fillcolor = fillColor;
			_maybeSetOpacity(styleToWrite, fillColor, "fill", component);
		}
		else styleToWrite.filled = "false";
		
		if(style.dashstyle) {
			if (component.strokeNode == null) {
				component.strokeNode = _node("stroke", [0,0,0,0], { dashstyle:style.dashstyle }, node, _jsPlumb);				
			}
			else
				component.strokeNode.dashstyle = style.dashstyle;
		}					
		else if (style["stroke-dasharray"] && style.lineWidth) {
			var sep = style["stroke-dasharray"].indexOf(",") == -1 ? " " : ",",
			parts = style["stroke-dasharray"].split(sep),
			styleToUse = "";
			for(var i = 0; i < parts.length; i++) {
				styleToUse += (Math.floor(parts[i] / style.lineWidth) + sep);
			}
			if (component.strokeNode == null) {
				component.strokeNode = _node("stroke", [0,0,0,0], { dashstyle:styleToUse }, node, _jsPlumb);				
			}
			else
				component.strokeNode.dashstyle = styleToUse;
		}
		
		_atts(node, styleToWrite);
	},
	/*
	 * Base class for Vml endpoints and connectors. Extends jsPlumbUIComponent. 
	 */
	VmlComponent = function() {				
		var self = this, renderer = {};
		jsPlumb.jsPlumbUIComponent.apply(this, arguments);	

		this.opacityNodes = {
			"stroke":null,
			"fill":null
		};
		this.initOpacityNodes = function(vml) {
			self.opacityNodes.stroke = _node("stroke", [0,0,1,1], {opacity:"0.0"}, vml, self._jsPlumb.instance);
			self.opacityNodes.fill = _node("fill", [0,0,1,1], {opacity:"0.0"}, vml, self._jsPlumb.instance);							
		};
		this.setOpacity = function(type, value) {
			var node = self.opacityNodes[type];
			if (node) node.opacity = "" + value;
		};
		var displayElements = [ ];
		this.getDisplayElements = function() { 
			return displayElements; 
		};
		
		this.appendDisplayElement = function(el, doNotAppendToCanvas) {
			if (!doNotAppendToCanvas) self.canvas.parentNode.appendChild(el);
			displayElements.push(el);
		};
	};
	jsPlumbUtil.extend(VmlComponent, jsPlumb.jsPlumbUIComponent, {
		cleanup:function() {			
			if (this.bgCanvas) jsPlumbUtil.removeElement(this.bgCanvas);
			jsPlumbUtil.removeElement(this.canvas);            				
		}
	});

	/*
	 * Base class for Vml connectors. extends VmlComponent.
	 */
	var VmlConnector = jsPlumb.ConnectorRenderers.vml = function(params) {		
		this.strokeNode = null;
		this.canvas = null;
		VmlComponent.apply(this, arguments);
		var clazz = this._jsPlumb.instance.connectorClass + (params.cssClass ? (" " + params.cssClass) : "");
		this.paint = function(style) {		
			if (style !== null) {			

				// we need to be at least 1 pixel in each direction, because otherwise coordsize gets set to
				// 0 and overlays cannot paint.
				this.w = Math.max(this.w, 1);
				this.h = Math.max(this.h, 1);

				var segments = this.getSegments(), p = { "path":"" },
                    d = [this.x, this.y, this.w, this.h];
				
				// create path from segments.	
				for (var i = 0; i < segments.length; i++) {
					p.path += jsPlumb.Segments.vml.SegmentRenderer.getPath(segments[i]);
					p.path += " ";
				}

                //*
				if (style.outlineColor) {
					var outlineWidth = style.outlineWidth || 1,
					outlineStrokeWidth = style.lineWidth + (2 * outlineWidth),
					outlineStyle = {
						strokeStyle : jsPlumbUtil.convertStyle(style.outlineColor),
						lineWidth : outlineStrokeWidth
					};
					for (var aa in vmlAttributeMap) outlineStyle[aa] = style[aa];
					
					if (this.bgCanvas == null) {						
						p["class"] = clazz;
						p.coordsize = (d[2] * scale) + "," + (d[3] * scale);
						this.bgCanvas = _node("shape", d, p, params.parent, this._jsPlumb.instance, true);						
						_pos(this.bgCanvas, d);
						this.appendDisplayElement(this.bgCanvas, true);	
						this.attachListeners(this.bgCanvas, this);					
						this.initOpacityNodes(this.bgCanvas, ["stroke"]);		
					}
					else {
						p.coordsize = (d[2] * scale) + "," + (d[3] * scale);
						_pos(this.bgCanvas, d);
						_atts(this.bgCanvas, p);
					}
					
					_applyStyles(this.bgCanvas, outlineStyle, this);
				}
				//*/
				
				if (this.canvas == null) {										
					p["class"] = clazz;
					p.coordsize = (d[2] * scale) + "," + (d[3] * scale);					
					this.canvas = _node("shape", d, p, params.parent, this._jsPlumb.instance, true);					                
                    //var group = _getGroup(params.parent);                   // test of append everything to a group
                    //group.appendChild(self.canvas);                           // sort of works but not exactly;
					//params["_jsPlumb"].appendElement(self.canvas, params.parent);    //before introduction of groups

					this.appendDisplayElement(this.canvas, true);										
					this.attachListeners(this.canvas, this);					
					this.initOpacityNodes(this.canvas, ["stroke"]);		
				}
				else {
					p.coordsize = (d[2] * scale) + "," + (d[3] * scale);
					_pos(this.canvas, d);
					_atts(this.canvas, p);
				}
				
				_applyStyles(this.canvas, style, this, this._jsPlumb.instance);
			}
		};	
				
	};
	jsPlumbUtil.extend(VmlConnector, VmlComponent, {
		reattachListeners : function() {
			if (this.canvas) this.reattachListenersForElement(this.canvas, this);
		},
		setVisible:function(v) {
			if (this.canvas) {
				this.canvas.style.display = v ? "block" : "none";
			}
			if (this.bgCanvas) {
				this.bgCanvas.style.display = v ? "block" : "none";
			}
		}
	});	
	
	/*
	 * 
	 * Base class for Vml Endpoints. extends VmlComponent.
	 * 
	 */
	var VmlEndpoint = window.VmlEndpoint = function(params) {
		VmlComponent.apply(this, arguments);
		this._jsPlumb.vml = null;//, opacityStrokeNode = null, opacityFillNode = null;
		this.canvas = document.createElement("div");
		this.canvas.style.position = "absolute";
		this._jsPlumb.clazz = this._jsPlumb.instance.endpointClass + (params.cssClass ? (" " + params.cssClass) : "");

		// TODO vml endpoint adds class to VML at constructor time.  but the addClass method adds VML
		// to the enclosing DIV. what to do?  seems like it would be better to just target the div.
		// HOWEVER...vml connection has no containing div.  why not? it feels like it should.

		//var group = _getGroup(params.parent);
        //group.appendChild(self.canvas);
		params._jsPlumb.appendElement(this.canvas, params.parent);

		this.paint = function(style, anchor) {
			var p = { }, vml = this._jsPlumb.vml;				
			
			jsPlumbUtil.sizeElement(this.canvas, this.x, this.y, this.w, this.h);
			if (this._jsPlumb.vml == null) {
				p["class"] = this._jsPlumb.clazz;
				vml = this._jsPlumb.vml = this.getVml([0,0, this.w, this.h], p, anchor, this.canvas, this._jsPlumb.instance);				
				this.attachListeners(vml, this);

				this.appendDisplayElement(vml, true);
				this.appendDisplayElement(this.canvas, true);
				
				this.initOpacityNodes(vml, ["fill"]);			
			}
			else {				
				_pos(vml, [0,0, this.w, this.h]);
				_atts(vml, p);
			}
			
			_applyStyles(vml, style, this);
		};		
	};
	jsPlumbUtil.extend(VmlEndpoint, VmlComponent, {
		reattachListeners : function() {
			if (this._jsPlumb.vml) this.reattachListenersForElement(this._jsPlumb.vml, this);
		}
	});
	
// ******************************* vml segments *****************************************************	
		
	jsPlumb.Segments.vml = {
		SegmentRenderer : {		
			getPath : function(segment) {
				return ({
					"Straight":function(segment) {
						var d = segment.params;
						return "m" + _conv(d.x1) + "," + _conv(d.y1) + " l" + _conv(d.x2) + "," + _conv(d.y2) + " e";
					},
					"Bezier":function(segment) {
						var d = segment.params;
						return "m" + _conv(d.x1) + "," + _conv(d.y1) + 
				   			" c" + _conv(d.cp1x) + "," + _conv(d.cp1y) + "," + _conv(d.cp2x) + "," + _conv(d.cp2y) + "," + _conv(d.x2) + "," + _conv(d.y2) + " e";
					},
					"Arc":function(segment) {					
						var d = segment.params,
							xmin = Math.min(d.x1, d.x2),
							xmax = Math.max(d.x1, d.x2),
							ymin = Math.min(d.y1, d.y2),
							ymax = Math.max(d.y1, d.y2),														
							sf = segment.anticlockwise ? 1 : 0,
							pathType = (segment.anticlockwise ? "at " : "wa "),
							makePosString = function() {
								if (d.loopback)
									return "0,0," + _conv(2*d.r) + "," + _conv(2 * d.r);

								var xy = [
										null,
										[ function() { return [xmin, ymin ];}, function() { return [xmin - d.r, ymin - d.r ];}],
										[ function() { return [xmin - d.r, ymin ];}, function() { return [xmin, ymin - d.r ];}],
										[ function() { return [xmin - d.r, ymin - d.r ];}, function() { return [xmin, ymin ];}],
										[ function() { return [xmin, ymin - d.r ];}, function() { return [xmin - d.r, ymin ];}]
									][segment.segment][sf]();

								return _conv(xy[0]) + "," + _conv(xy[1]) + "," + _conv(xy[0] + (2*d.r)) + "," + _conv(xy[1] + (2*d.r));
							};

						return pathType + " " + makePosString() + "," + _conv(d.x1) + "," + _conv(d.y1) + "," + _conv(d.x2) + "," + _conv(d.y2) + " e";												
					}
						
				})[segment.type](segment);	
			}
		}
	};
	
// ******************************* /vml segments *****************************************************	

// ******************************* vml endpoints *****************************************************
	
	jsPlumb.Endpoints.vml.Dot = function() {
		jsPlumb.Endpoints.Dot.apply(this, arguments);
		VmlEndpoint.apply(this, arguments);
		this.getVml = function(d, atts, anchor, parent, _jsPlumb) { return _node("oval", d, atts, parent, _jsPlumb); };
	};
	jsPlumbUtil.extend(jsPlumb.Endpoints.vml.Dot, VmlEndpoint);
	
	jsPlumb.Endpoints.vml.Rectangle = function() {
		jsPlumb.Endpoints.Rectangle.apply(this, arguments);
		VmlEndpoint.apply(this, arguments);
		this.getVml = function(d, atts, anchor, parent, _jsPlumb) { return _node("rect", d, atts, parent, _jsPlumb); };
	};
	jsPlumbUtil.extend(jsPlumb.Endpoints.vml.Rectangle, VmlEndpoint);
	
	/*
	 * VML Image Endpoint is the same as the default image endpoint.
	 */
	jsPlumb.Endpoints.vml.Image = jsPlumb.Endpoints.Image;
	
	/**
	 * placeholder for Blank endpoint in vml renderer.
	 */
	jsPlumb.Endpoints.vml.Blank = jsPlumb.Endpoints.Blank;
	
// ******************************* /vml endpoints *****************************************************	

// ******************************* vml overlays *****************************************************
	
	/**
	 * VML Label renderer. uses the default label renderer (which adds an element to the DOM)
	 */
	jsPlumb.Overlays.vml.Label  = jsPlumb.Overlays.Label;
	
	/**
	 * VML Custom renderer. uses the default Custom renderer (which adds an element to the DOM)
	 */
	jsPlumb.Overlays.vml.Custom = jsPlumb.Overlays.Custom;
	
	/**
	 * Abstract VML arrow superclass
	 */
	var AbstractVmlArrowOverlay = function(superclass, originalArgs) {
    	superclass.apply(this, originalArgs);
    	VmlComponent.apply(this, originalArgs);
    	var self = this, path = null;
    	self.canvas = null; 
    	self.isAppendedAtTopLevel = true;
    	var getPath = function(d) {    		
    		return "m " + _conv(d.hxy.x) + "," + _conv(d.hxy.y) +
    		       " l " + _conv(d.tail[0].x) + "," + _conv(d.tail[0].y) + 
    		       " " + _conv(d.cxy.x) + "," + _conv(d.cxy.y) + 
    		       " " + _conv(d.tail[1].x) + "," + _conv(d.tail[1].y) + 
    		       " x e";
    	};
    	this.paint = function(params, containerExtents) {
    		// only draws for connectors, not endpoints.
    		if (params.component.canvas && containerExtents) {
	    		var p = {}, d = params.d, connector = params.component;
				if (params.strokeStyle) {
					p.stroked = "true";
					p.strokecolor = jsPlumbUtil.convertStyle(params.strokeStyle, true);    				
				}
				if (params.lineWidth) p.strokeweight = params.lineWidth + "px";
				if (params.fillStyle) {
					p.filled = "true";
					p.fillcolor = params.fillStyle;
				}			

				var xmin = Math.min(d.hxy.x, d.tail[0].x, d.tail[1].x, d.cxy.x),
					ymin = Math.min(d.hxy.y, d.tail[0].y, d.tail[1].y, d.cxy.y),
					xmax = Math.max(d.hxy.x, d.tail[0].x, d.tail[1].x, d.cxy.x),
					ymax = Math.max(d.hxy.y, d.tail[0].y, d.tail[1].y, d.cxy.y),
					w = Math.abs(xmax - xmin),
					h = Math.abs(ymax - ymin),
					dim = [xmin, ymin, w, h];

				// for VML, we create overlays using shapes that have the same dimensions and
				// coordsize as their connector - overlays calculate themselves relative to the
				// connector (it's how it's been done since the original canvas implementation, because
				// for canvas that makes sense).
				p.path = getPath(d);
				p.coordsize = (connector.w * scale) + "," + (connector.h * scale);			
				
				dim[0] = connector.x;
				dim[1] = connector.y;
				dim[2] = connector.w;
				dim[3] = connector.h;
				
	    		if (self.canvas == null) {
	    			var overlayClass = connector._jsPlumb.overlayClass || "";
	    			var clazz = originalArgs && (originalArgs.length == 1) ? (originalArgs[0].cssClass || "") : "";
	    			p["class"] = clazz + " " + overlayClass;
					self.canvas = _node("shape", dim, p, connector.canvas.parentNode, connector._jsPlumb.instance, true);								
					connector.appendDisplayElement(self.canvas, true);
					self.attachListeners(self.canvas, connector);
					self.attachListeners(self.canvas, self);
				}
				else {				
					_pos(self.canvas, dim);
					_atts(self.canvas, p);
				}    		
			}
    	};
    	
    	this.reattachListeners = function() {
			if (self.canvas) self.reattachListenersForElement(self.canvas, self);
		};

		this.cleanup = function() {
    		if (self.canvas != null) jsPlumb.CurrentLibrary.removeElement(self.canvas);
    	};
    };
    jsPlumbUtil.extend(AbstractVmlArrowOverlay, [VmlComponent, jsPlumb.Overlays.AbstractOverlay], {
    	setVisible : function(state) {
    	    this.canvas.style.display = state ? "block" : "none";
    	}
    });
	
	jsPlumb.Overlays.vml.Arrow = function() {
    	AbstractVmlArrowOverlay.apply(this, [jsPlumb.Overlays.Arrow, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.vml.Arrow, [ jsPlumb.Overlays.Arrow, AbstractVmlArrowOverlay ]);
    
    jsPlumb.Overlays.vml.PlainArrow = function() {
    	AbstractVmlArrowOverlay.apply(this, [jsPlumb.Overlays.PlainArrow, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.vml.PlainArrow, [ jsPlumb.Overlays.PlainArrow, AbstractVmlArrowOverlay ]);
    
    jsPlumb.Overlays.vml.Diamond = function() {
    	AbstractVmlArrowOverlay.apply(this, [jsPlumb.Overlays.Diamond, arguments]);    	
    };
    jsPlumbUtil.extend(jsPlumb.Overlays.vml.Diamond, [ jsPlumb.Overlays.Diamond, AbstractVmlArrowOverlay ]);
    
// ******************************* /vml overlays *****************************************************    
    
})();
/*
 * jsPlumb
 * 
 * Title:jsPlumb 1.5.5
 * 
 * Provides a way to visually connect elements on an HTML page, using either SVG, Canvas
 * elements, or VML.  
 * 
 * This file contains the jQuery adapter.
 *
 * Copyright (c) 2010 - 2013 Simon Porritt (http://jsplumb.org)
 * 
 * http://jsplumb.org
 * http://github.com/sporritt/jsplumb
 * http://code.google.com/p/jsplumb
 * 
 * Dual licensed under the MIT and GPL2 licenses.
 */ 
/* 
 * the library specific functions, such as find offset, get id, get attribute, extend etc.  
 * the full list is:
 * 
 * addClass				adds a class to the given element
 * animate				calls the underlying library's animate functionality
 * appendElement		appends a child element to a parent element.
 * bind					binds some event to an element
 * dragEvents			a dictionary of event names
 * extend				extend some js object with another.  probably not overly necessary; jsPlumb could just do this internally.
 * getDragObject		gets the object that is being dragged, by extracting it from the arguments passed to a drag callback
 * getDragScope			gets the drag scope for a given element.
 * getDropScope			gets the drop scope for a given element.
 * getElementObject		turns an id or dom element into an element object of the underlying library's type.
 * getOffset			gets an element's offset
 * getOriginalEvent     gets the original browser event from some wrapper event
 * getPageXY			gets the page event's xy location.
 * getParent			gets the parent of some element.
 * getScrollLeft		gets an element's scroll left.  TODO: is this actually used?  will it be?
 * getScrollTop			gets an element's scroll top.  TODO: is this actually used?  will it be?
 * getSize				gets an element's size.
 * getUIPosition		gets the position of some element that is currently being dragged, by extracting it from the arguments passed to a drag callback.
 * hasClass				returns whether or not the given element has the given class.
 * initDraggable		initializes an element to be draggable 
 * initDroppable		initializes an element to be droppable
 * isDragSupported		returns whether or not drag is supported for some element.
 * isDropSupported		returns whether or not drop is supported for some element.
 * removeClass			removes a class from a given element.
 * removeElement		removes some element completely from the DOM. 
 * setDragFilter		sets a filter for some element that indicates areas of the element that should not respond to dragging.
 * setDraggable			sets whether or not some element should be draggable.
 * setDragScope			sets the drag scope for a given element.
 * setOffset			sets the offset of some element.
 * trigger				triggers some event on an element.
 * unbind				unbinds some listener from some element.
 */
(function($) {	
	
	//var getBoundingClientRectSupported = "getBoundingClientRect" in document.documentElement;

	var _getElementObject = function(el) {			
		return typeof(el) == "string" ? $("#" + el) : $(el);
	};

	jsPlumb.CurrentLibrary = {					        
		
		/**
		 * adds the given class to the element object.
		 */
		addClass : function(el, clazz) {
			el = _getElementObject(el);
			try {
				if (el[0].className.constructor == SVGAnimatedString) {
					jsPlumbUtil.svg.addClass(el[0], clazz);                    
				}
			}
			catch (e) {
				// SVGAnimatedString not supported; no problem.
			}
            try {                
                el.addClass(clazz);
            }
            catch (e) {
                // you probably have jQuery 1.9 and Firefox.  
            }
		},
		
		/**
		 * animates the given element.
		 */
		animate : function(el, properties, options) {
			el.animate(properties, options);
		},				
		
		/**
		 * appends the given child to the given parent.

TODO: REMOVE!

		 */
		appendElement : function(child, parent) {
			_getElementObject(parent).append(child);			
		},   

		/**
		* executes an ajax call.
		*/
		ajax : function(params) {
			params = params || {};
			params.type = params.type || "get";
			$.ajax(params);
		},
		
		/**
		 * event binding wrapper.  it just so happens that jQuery uses 'bind' also.  yui3, for example,
		 * uses 'on'.
		 */
		bind : function(el, event, callback) {
			el = _getElementObject(el);
			el.bind(event, callback);
		},

		destroyDraggable : function(el) {
			if ($(el).data("draggable"))
				$(el).draggable("destroy");
		},

		destroyDroppable : function(el) {
			if ($(el).data("droppable"))
				$(el).droppable("destroy");
		},
		
		/**
         * mapping of drag events for jQuery
         */
		dragEvents : {
			'start':'start', 'stop':'stop', 'drag':'drag', 'step':'step',
			'over':'over', 'out':'out', 'drop':'drop', 'complete':'complete'
		},
				
		/**
		 * wrapper around the library's 'extend' functionality (which it hopefully has.
		 * otherwise you'll have to do it yourself). perhaps jsPlumb could do this for you
		 * instead.  it's not like its hard.
		 */
		extend : function(o1, o2) {
			return $.extend(o1, o2);
		},		
		
		getClientXY : function(eventObject) {
			return [eventObject.clientX, eventObject.clientY];
		},
		
		/**
		 * takes the args passed to an event function and returns you an object representing that which is being dragged.
		 */
		getDragObject : function(eventArgs) {
			return eventArgs[1].draggable || eventArgs[1].helper;
		},
		
		getDragScope : function(el) {
			return $(el).draggable("option", "scope");
		},

		getDropEvent : function(args) {
			return args[0];
		},
		
		getDropScope : function(el) {
			return $(el).droppable("option", "scope");		
		},

		/**
		* gets a DOM element from the given input, which might be a string (in which case we just do document.getElementById),
		* a selector (in which case we return el[0]), or a DOM element already (we assume this if it's not either of the other
		* two cases).  this is the opposite of getElementObject below.
		*/
		getDOMElement : function(el) {
			if (el == null) return null;
			if (typeof(el) == "string") return document.getElementById(el);
			else if (el.context || el.length != null) return el[0];
			else return el;
		},
	
		/**
		 * gets an "element object" from the given input.  this means an object that is used by the
		 * underlying library on which jsPlumb is running.  'el' may already be one of these objects,
		 * in which case it is returned as-is.  otherwise, 'el' is a String, the library's lookup 
		 * function is used to find the element, using the given String as the element's id.
		 * 
		 */		
		getElementObject : _getElementObject,
		
		/**
		  * gets the offset for the element object.  this should return a js object like this:
		  *
		  * { left:xxx, top: xxx }
		 */
		getOffset : function(el) {
			return el.offset();
		},

		getOriginalEvent : function(e) {
			return e.originalEvent;
		},
		
		getPageXY : function(eventObject) {
			return [eventObject.pageX, eventObject.pageY];
		},
		
		getParent : function(el) {
			return _getElementObject(el).parent();
		},
														
		getScrollLeft : function(el) {
			return el.scrollLeft();
		},
		
		getScrollTop : function(el) {
			return el.scrollTop();
		},
		
		getSelector : function(context, spec) {
            if (arguments.length == 2)
                return _getElementObject(context).find(spec);
            else
                return $(context);
		},
		
		/**
		 * gets the size for the element object, in an array : [ width, height ].
		 */
		getSize : function(el) {
			el = $(el);
			return [el.outerWidth(), el.outerHeight()];
		},

        getTagName : function(el) {
            var e = _getElementObject(el);
            return e.length > 0 ? e[0].tagName : null;
        },
		
		/**
		 * takes the args passed to an event function and returns you an object that gives the
		 * position of the object being moved, as a js object with the same params as the result of
		 * getOffset, ie: { left: xxx, top: xxx }.
		 * 
		 * different libraries have different signatures for their event callbacks.  
		 * see getDragObject as well
		 */
		getUIPosition : function(eventArgs, zoom) {
			
			zoom = zoom || 1;
			// this code is a workaround for the case that the element being dragged has a margin set on it. jquery UI passes
			// in the wrong offset if the element has a margin (it doesn't take the margin into account).  the getBoundingClientRect
			// method, which is in pretty much all browsers now, reports the right numbers.  but it introduces a noticeable lag, which
			// i don't like.
            
			/*if ( getBoundingClientRectSupported ) {
				var r = eventArgs[1].helper[0].getBoundingClientRect();
				return { left : r.left, top: r.top };
			} else {*/
			if (eventArgs.length == 1) {
				ret = { left: eventArgs[0].pageX, top:eventArgs[0].pageY };
			}
			else {
				var ui = eventArgs[1],
				  _offset = ui.offset;
				  
				ret = _offset || ui.absolutePosition;
				
				// adjust ui position to account for zoom, because jquery ui does not do this.
				ui.position.left /= zoom;
				ui.position.top /= zoom;
			}
            return { left:ret.left / zoom, top: ret.top / zoom };
		},		
		
		hasClass : function(el, clazz) {
			return el.hasClass(clazz);
		},
		
		/**
		 * initialises the given element to be draggable.
		 */
		initDraggable : function(el, options, isPlumbedComponent, _jsPlumb) {
			options = options || {};
			el = $(el);

			options.start = jsPlumbUtil.wrap(options.start, function() {
				$("body").addClass(_jsPlumb.dragSelectClass);
			}, false);

			options.stop = jsPlumbUtil.wrap(options.stop, function() {
				$("body").removeClass(_jsPlumb.dragSelectClass);
			});

			// remove helper directive if present and no override
			if (!options.doNotRemoveHelper)
				options.helper = null;
			if (isPlumbedComponent)
				options.scope = options.scope || jsPlumb.Defaults.Scope;
			el.draggable(options);
		},
		
		/**
		 * initialises the given element to be droppable.
		 */
		initDroppable : function(el, options) {
			options.scope = options.scope || jsPlumb.Defaults.Scope;
			$(el).droppable(options);
		},
		
		isAlreadyDraggable : function(el) {
			return $(el).hasClass("ui-draggable");
		},
		
		/**
		 * returns whether or not drag is supported (by the library, not whether or not it is disabled) for the given element.
		 */
		isDragSupported : function(el, options) {
			return $(el).draggable;
		},				
						
		/**
		 * returns whether or not drop is supported (by the library, not whether or not it is disabled) for the given element.
		 */
		isDropSupported : function(el, options) {
			return $(el).droppable;
		},							
		
		/**
		 * removes the given class from the element object.
		 */
		removeClass : function(el, clazz) {
			el = _getElementObject(el);
			try {
				if (el[0].className.constructor == SVGAnimatedString) {
					jsPlumbUtil.svg.removeClass(el[0], clazz);
                    return;
				}
			}
			catch (e) {
				// SVGAnimatedString not supported; no problem.
			}
			el.removeClass(clazz);
		},
		
		removeElement : function(element) {			
			_getElementObject(element).remove();
		},		

		setDragFilter : function(el, filter) {
			if (jsPlumb.CurrentLibrary.isAlreadyDraggable(el))
				el.draggable("option", "cancel", filter);
		},
		
		setDraggable : function(el, draggable) {
			el.draggable("option", "disabled", !draggable);
		},
		
		setDragScope : function(el, scope) {
			el.draggable("option", "scope", scope);
		},
		
		setOffset : function(el, o) {
			_getElementObject(el).offset(o);
		},
		
		/**
		 * note that jquery ignores the name of the event you wanted to trigger, and figures it out for itself.
		 * the other libraries do not.  yui, in fact, cannot even pass an original event.  we have to pull out stuff
		 * from the originalEvent to put in an options object for YUI. 
		 * @param el
		 * @param event
		 * @param originalEvent
		 */
		trigger : function(el, event, originalEvent) {
			var h = jQuery._data(_getElementObject(el)[0], "handle");
            h(originalEvent);
		},
		
		unbind : function(el, event, callback) {
			el = _getElementObject(el);
			el.unbind(event, callback);
		}
	};
	
	$(document).ready(jsPlumb.init);
	
})(jQuery);

/*
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

})(jQuery);(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Vamonos = {
    handleArguments: function(_arg) {
      var arg, argName, defaultValue, description, givenArgs, ignoreExtraArgs, specs, type, widgetName, widgetObject, _ref, _ref1, _results;
      widgetObject = _arg.widgetObject, givenArgs = _arg.givenArgs, ignoreExtraArgs = _arg.ignoreExtraArgs;
      if (ignoreExtraArgs == null) {
        ignoreExtraArgs = false;
      }
      widgetName = widgetObject.constructor.name;
      if (widgetName == null) {
        throw Error("handleArguments: widgetName required");
      }
      if (widgetObject == null) {
        throw Error("handleArguments: widgetObject required for " + widgetName + " widget");
      }
      if (givenArgs == null) {
        throw Error("handleArguments: givenArgs required for " + widgetName + " widget");
      }
      if (widgetObject.constructor.spec == null) {
        throw Error("handleArguments: no spec for " + widgetName + " widget");
      }
      _ref = widgetObject.constructor.spec;
      for (argName in _ref) {
        specs = _ref[argName];
        type = specs.type, description = specs.description, defaultValue = specs.defaultValue;
        if (type == null) {
          throw Error("handleArguments: no type provided for " + widgetName + "." + argName);
        }
        if (type === "jQuery Selector") {
          type = "";
        }
        type = this.arrayify(type);
        if (givenArgs[argName] != null) {
          if (_ref1 = givenArgs[argName].constructor.name, __indexOf.call(type, _ref1) < 0) {
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
        _results.push($('<style>.' + prefix + i + ' { background: ' + cs(i) + '; }</style>').appendTo($('html > head')));
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
      return "" + lname + "<sub>" + subscript + "</sub> ";
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
      $editor = $("<input class='inline-input'>").hide().width($elem.width()).val(oldVal).on("keydown.vamonos-graph", function(event) {
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
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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
      var k, newVtx, v, _ref, _ref1;
      if (vtx == null) {
        vtx = {};
      }
      if (this.vertices[vtx.id] != null) {
        return vtx.id;
      }
      newVtx = {};
      newVtx.type = 'Vertex';
      newVtx.name = (_ref = vtx.name) != null ? _ref : this.nextVertexName();
      newVtx.id = (_ref1 = vtx.id) != null ? _ref1 : this.nextVertexId();
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
      var _ref, _ref1;
      if ((_ref = this._customVertexNum) == null) {
        this._customVertexNum = 0;
      }
      return "" + ((_ref1 = this.prefix) != null ? _ref1 : "custom-") + "vertex-" + (this._customVertexNum++);
    };

    Graph["interface"].returnVertexName = {
      args: [["n", "string"]],
      description: "adds `n` to the list of available vertex names"
    };

    Graph.prototype.returnVertexName = function(n) {
      this._initAvailableNames();
      this.availableNames.unshift(n);
      return this.availableNames.sort();
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
      return (_ref = this.availableNames) != null ? _ref : this.availableNames = "abcdefghijklmnopqrstuvwxyz".split("");
    };

    Graph["interface"].edge = {
      args: [["source", "a vertex object containing an id field, or an id"], ["target", "a vertex object containing an id field, or an id"]],
      description: "if there is an edge from `source` to `target`, returns it. " + "understands undirected graphs."
    };

    Graph.prototype.edge = function(source, target) {
      var sourceId, targetId, _ref, _ref1;
      sourceId = this.idify(source);
      targetId = this.idify(target);
      return ((_ref = this.edges[sourceId]) != null ? _ref[targetId] : void 0) || !this.directed && ((_ref1 = this.edges[targetId]) != null ? _ref1[sourceId] : void 0);
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
      args: [["e", "an edge of the graph to collapse"]],
      description: "collapses `e`, creating a new vertex. By default " + "vertex names are concatenations of the collapsed vertices' " + "names, vertices' positions are averaged, and overlapping " + "edges take the min weight. only works on undirected graphs."
    };

    Graph.prototype.collapse = function(edge) {
      var affectedEdges, existingEdge, newVtx, outEdge, sid, target, tid, v1, v2, _i, _len, _ref, _ref1;
      if (this.directed) {
        throw "collapse called on directed graph";
      }
      if ((_ref = this.collapsedVertices) == null) {
        this.collapsedVertices = {};
      }
      if ((_ref1 = this.collapsedEdges) == null) {
        this.collapsedEdges = {};
      }
      v1 = edge.source;
      v2 = edge.target;
      if (!((v1 != null) && (v2 != null))) {
        return;
      }
      console.log("collapse " + v1.name + "-" + v2.name);
      newVtx = this.addVertex({
        name: (v1.name + v2.name).split("").sort().join(""),
        id: v1.id + v2.id,
        x: Math.floor((v1.x + v2.x) / 2),
        y: Math.floor((v1.y + v2.y) / 2)
      });
      this.collapsedVertices[newVtx.id] = [v1, v2];
      affectedEdges = this.outgoingEdges(v1);
      this.outgoingEdges(v2).map(function(e) {
        if (__indexOf.call(affectedEdges, e) < 0) {
          return affectedEdges.push(e);
        }
      });
      this.removeVertex(v1);
      this.removeVertex(v2);
      for (_i = 0, _len = affectedEdges.length; _i < _len; _i++) {
        outEdge = affectedEdges[_i];
        sid = outEdge.source.id;
        tid = outEdge.target.id;
        if (sid === v1.id || sid === v2.id) {
          target = tid;
        } else {
          target = sid;
        }
        if (!this.vertex(target)) {
          continue;
        }
        existingEdge = this.edge(newVtx, target);
        if (!(existingEdge != null)) {
          this.addEdge(newVtx, target, outEdge);
        } else if (outEdge.w < existingEdge.w) {
          this.removeEdge(newVtx, target);
          this.addEdge(newVtx, target, outEdge);
        }
      }
      return this.collapsedEdges[newVtx.id] = affectedEdges;
    };

    Graph.prototype.collapseEdgesBy = function(attr, func) {
      var e, _results;
      _results = [];
      while (e = this.nextEdgeMatching(attr)) {
        func(e);
        _results.push(this.collapse(e));
      }
      return _results;
    };

    Graph.prototype.nextEdgeMatching = function(attr) {
      var edges;
      edges = this.getEdges();
      if (edges.length) {
        return edges.reduce(function(a, b) {
          if (a != null ? a[attr] : void 0) {
            return a;
          } else if (b[attr]) {
            return b;
          }
        });
      }
    };

    Graph.prototype.uncollapse = function(vtx) {
      var edge, restoredVertices, savedEdges, savedVertices, v, _i, _len, _ref, _ref1;
      if (!((((_ref = this.collapsedEdges) != null ? _ref[vtx.id] : void 0) != null) && (((_ref1 = this.collapsedVertices) != null ? _ref1[vtx.id] : void 0) != null))) {
        return;
      }
      savedVertices = this.collapsedVertices[vtx.id];
      savedEdges = this.collapsedEdges[vtx.id];
      console.log(savedVertices);
      console.log(savedEdges);
      restoredVertices = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = savedVertices.length; _i < _len; _i++) {
          v = savedVertices[_i];
          console.log("adding " + v.name);
          _results.push(this.addVertex(v));
        }
        return _results;
      }).call(this);
      for (_i = 0, _len = savedEdges.length; _i < _len; _i++) {
        edge = savedEdges[_i];
        this.addEdge(edge.source, edge.target, edge);
      }
      this.removeVertex(vtx);
      delete this.collapsedVertices[vtx.id];
      delete this.collapsedEdges[vtx.id];
      return restoredVertices;
    };

    Graph.prototype.getCollapsedVertices = function() {
      var _this = this;
      return this.getVertices().filter(function(v) {
        var _ref, _ref1;
        return ((_ref = _this.collapsedVertices) != null ? _ref[v.id] : void 0) && ((_ref1 = _this.collapsedEdges) != null ? _ref1[v.id] : void 0);
      });
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
        defaultValue: true,
        description: "whether the visualizer will update the location with " + "the updated input after leaving edit mode every time"
      }
    };

    function Visualizer(args) {
      var _this = this;
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
      this.setupWidgets(function() {
        _this.tellWidgets("setupEnd");
        _this.tellWidgets("externalInput", _this["import"]());
        if (_this.autoStart) {
          return _this.runAlgorithm();
        } else {
          return _this.editMode();
        }
      });
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
      if (++this.numCallsToLine > 10000) {
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
      this["export"]();
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
        switch (err) {
          case "too many frames":
            alert("Too many frames. You may have an infinite loop, or you may " + "want to consider setting fewer breakpoints. " + "Visualization has been truncated to the first " + ("" + this.maxFrames + " frames."));
            break;
          case "too many lines":
            alert("Your algorithm has executed for over 10000 instructions. " + "You may have an infinite loop. " + "Visualization has been truncated.");
            break;
          default:
            throw err;
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

    Visualizer.prototype.setupWidgets = function(stuffToDo) {
      var makeCont,
        _this = this;
      makeCont = function(accumulator, widget) {
        return function() {
          return widget.event("setup", _this, accumulator);
        };
      };
      return this.widgets.reduceRight(makeCont, stuffToDo)();
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
      window.history.replaceState({}, "", window.location.href + "#" + Vamonos.encode(save));
      return "ok";
    };

    Visualizer.prototype["import"] = function() {
      var s;
      if (this._alreadyImported != null) {
        console.log("import returning since it's already been called");
        return {};
      }
      s = window.location.hash;
      if (!(s.length > 1 && s[0] === "#")) {
        return {};
      }
      this._alreadyImported = true;
      return Vamonos.decode(s.substr(1));
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
      var done, event, options, viz, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      (_ref = this.guts).event.apply(_ref, arguments);
      if (event === 'setup') {
        viz = options[0], done = options[1];
        if (done != null) {
          return done();
        }
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
      if (this.showCellNumber) {
        this.$rowIndices.hide();
      }
      this.container.append(this.$rowIndices, this.$rowCells, this.$rowAnnotations);
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
        return this.container.css("min-height", this.maxHeight);
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
      var done, event, frame, options, type;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          if (done != null) {
            return done();
          }
          break;
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
      return $tr.html("<td class='callstack-args'>" + ("" + (this.argStr(scope)) + "</td><td class='callstack-return'>") + ("" + (this.retStr(scope)) + "</td>"));
    };

    CallStack.prototype.setProcRow = function($tr, scope) {
      var procName, _ref;
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
      var done, event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'setup') {
        this.viz = options[0], done = options[1];
        if (done != null) {
          done();
        }
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
      expandWidth: {
        type: "Boolean",
        defaultValue: false,
        description: "whether to expand the controls to fill its parent"
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
          keyboardShortcuts: this.keyboardShortcuts
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
      var done, event, options, viz, _ref, _ref1, _ref2;
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
          viz = options[0], done = options[1];
          if (done != null) {
            return done();
          }
          break;
        case "setupEnd":
          if (this.expandWidth) {
            return this.$container.width(this.$container.parent().width() + 1);
          }
          break;
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
      container = _arg.container, runStopButton = _arg.runStopButton, this.autoPlay = _arg.autoPlay, this.keyboardShortcuts = _arg.keyboardShortcuts;
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
            return $("body").on("keydown.controlbuttons", function(e) {
              return _this.keyDownHandler(e);
            });
          }
          break;
        case "editStart":
          this.$runStopButton.html(RUN);
          this.$runStopButton.prop("title", "Execute the algorithm with current inputs/breakpoints/etc [shortcut: enter]");
          this.prevButtonActive(false);
          this.nextButtonActive(false);
          this.playPauseButtonActive(false);
          this.$container.addClass("controls-disabled");
          return this.mode = "edit";
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
        example: "new Vamonos.Widget.Error({\n    conditions: [\n        function(viz){ \n            var s = viz.getVariable(\"s\");\n            var t = viz.getVariable(\"t\");\n            if (s.id === t.id) {\n                return \"Ford-Fulkerson says: s and t must be different!\";\n            }\n        }\n    ]\n})"
      }
    };

    function Error(args) {
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
    }

    Error.prototype.event = function() {
      var c, done, event, options, s, viz, _i, _len, _ref, _ref1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'setup') {
        viz = options[0], done = options[1];
        if (done != null) {
          return done();
        }
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
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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
      colorEdges: {
        type: "Array",
        defaultValue: [],
        description: "provides a way to set edge coloring based on vertex variables " + "or edge properties. takes an array of doubles of the form  " + "`[ edge-predicate, color, [optional weight] ]`, where color is a hex color and edge-" + "predicate is either a string of the form `'vertex1->vertex2'` or " + "a function that takes an edge and returns a boolean. Also for added " + "complexity and enjoyment, the color string can also be a function taking " + "an edge and returning a color string or a color string and a width (if " + "it returns an array).",
        example: "colorEdges: [\n    ['u->v', '#FF7D7D'],\n    [ function(edge){\n        return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)\n            || (edge.source.pred ? edge.source.pred.id === edge.target.id : false) }\n    , '#92E894' ],\n    [ 'w->t', function(e){ if (e.f > 10) return \"blue\"; } ],\n    [ 'w->x', function(e){ if (e.f < 10) return [\"blue\",10]; } ],\n]"
      },
      vertexCssAttributes: {
        type: "Object",
        defaultValue: {},
        description: "provides a way to change CSS classes of vertices based on " + "vertex attributes. takes an object of the form `{ attribute: " + "value | [list of values] }`. in the case of a single value,  " + "the vertex will simply get a class with the same name as " + "the attribute. in the case of a list of values, the css " + "class will be of the form 'attribute-value' when its value " + "matches. You can also provide a function that takes a vertex " + "and returns a class to apply to it.",
        example: "vertexCssAttributes: { \n    done: true, \n    color: ['white', 'gray', 'black'],\n    magic: function(vtx){ return \"class-\" + vtx.magicAttr },\n},"
      },
      containerMargin: {
        type: "Number",
        defaultValue: 30,
        description: "how close nodes can get to the container edge"
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
        description: "whether nodes can be moved"
      },
      highlightChanges: {
        type: "Boolean",
        defaultValue: true,
        description: "whether nodes will get the css class 'changed' when they are modified"
      }
    };

    function GraphDisplay(args) {
      var _ref;
      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: args
      });
      this.connections = {};
      this.nodes = {};
      this.$outer = Vamonos.jqueryify(this.container);
      this.$inner = $("<div>", {
        "class": "graph-inner-container"
      });
      if (((_ref = this.edgeLabel) != null ? _ref.constructor.name : void 0) !== 'Object') {
        this.edgeLabel = {
          edit: this.edgeLabel,
          display: this.edgeLabel
        };
      }
      this.$outer.append(this.$inner);
      this.$outer.disableSelection();
      if (this.resizable) {
        this.$outer.resizable({
          handles: "se",
          minWidth: this.minX,
          minHeight: this.minY
        });
      }
    }

    GraphDisplay.prototype.event = function() {
      var done, e, event, label, options, v, values, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          _ref = this.colorEdges;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            if (typeof e[0] === 'string') {
              _ref1 = e[0].split(/<?->?/);
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                v = _ref1[_j];
                this.viz.registerVariable(v);
              }
            }
          }
          _ref2 = this.vertexLabels;
          for (label in _ref2) {
            values = _ref2[label];
            for (_k = 0, _len2 = values.length; _k < _len2; _k++) {
              v = values[_k];
              if (typeof v === 'string') {
                this.viz.registerVariable(v);
              }
            }
          }
          return jsPlumb.ready(function() {
            _this.jsPlumbInstance = jsPlumb.getInstance({
              Connector: ["Straight"],
              PaintStyle: _this.normalPaintStyle,
              Endpoint: "Blank",
              Anchor: [
                "Perimeter", {
                  shape: "Circle"
                }
              ]
            });
            if (done != null) {
              return done();
            }
          });
      }
    };

    GraphDisplay.prototype.draw = function(graph, frame) {
      var edge, vertex, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4,
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
      this.directed = graph.directed;
      this.$outer.find(".changed").removeClass("changed");
      _ref1 = graph.getVertices();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        vertex = _ref1[_i];
        if (this.nodes[vertex.id] != null) {
          continue;
        }
        this.addNode(vertex);
      }
      _ref2 = graph.getEdges();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        edge = _ref2[_j];
        if (((_ref3 = this.connections[edge.source.id]) != null ? _ref3[edge.target.id] : void 0) != null) {
          continue;
        }
        if (!this.directed && (((_ref4 = this.connections[edge.target.id]) != null ? _ref4[edge.source.id] : void 0) != null)) {
          continue;
        }
        this.addConnection(edge.source.id, edge.target.id);
      }
      this.eachConnection(function(sourceId, targetId) {
        if (!graph.edge(sourceId, targetId)) {
          return _this.removeConnection(sourceId, targetId);
        }
      });
      this.eachNode(function(vid, node) {
        if (graph.vertex(vid)) {
          return _this.updateNode(node, graph.vertex(vid), frame);
        } else {
          return _this.removeNode(vid);
        }
      });
      this.updateConnections(graph, frame);
      return this.previousGraph = graph;
    };

    GraphDisplay.prototype.fitGraph = function(graph, animate) {
      var max_x, max_y, nodes, vertex, xVals, yVals, _i, _len, _ref;
      if (animate == null) {
        animate = false;
      }
      if (graph != null) {
        nodes = $("div.vertex-contents");
        if (!((this._vertexWidth != null) && (this._vertexHeight != null))) {
          this.getVertexDimensions(nodes);
        }
        xVals = [];
        yVals = [];
        _ref = graph.getVertices();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          vertex = _ref[_i];
          xVals.push(vertex.x + this._vertexWidth + this.containerMargin);
          yVals.push(vertex.y + this._vertexHeight + this.containerMargin);
        }
        max_x = Math.max.apply(Math, __slice.call(xVals).concat([this.minX]));
        max_y = Math.max.apply(Math, __slice.call(yVals).concat([this.minY]));
      } else {
        max_x = 0;
        max_y = 0;
      }
      if (animate) {
        this.$outer.animate({
          width: max_x,
          height: max_y
        }, 500);
      } else {
        this.$outer.width(max_x);
        this.$outer.height(max_y);
      }
      if (this.resizable) {
        this.$outer.resizable("option", "minWidth", max_x);
        return this.$outer.resizable("option", "minHeight", max_y);
      }
    };

    GraphDisplay.prototype.getVertexDimensions = function(nodes) {
      var fakeNode;
      if (!nodes.length) {
        fakeNode = this.addNode({
          id: "FAKER"
        }, false);
        nodes = fakeNode;
      }
      this._vertexHeight = nodes.height();
      this._vertexWidth = nodes.width();
      if (fakeNode != null) {
        return this.removeNode("FAKER");
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
      this.jsPlumbInstance.reset();
      this.$inner.html("");
      this.connections = {};
      this.nodes = {};
      return this.previousGraph = void 0;
    };

    GraphDisplay.prototype.eachNode = function(f) {
      var node, vid, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (vid in _ref) {
        node = _ref[vid];
        _results.push(f(vid, node));
      }
      return _results;
    };

    GraphDisplay.prototype.eachConnection = function(f) {
      var con, seen, sourceId, targetId, targets, _ref, _results;
      if (!this.directed) {
        seen = [];
      }
      _ref = this.connections;
      _results = [];
      for (sourceId in _ref) {
        targets = _ref[sourceId];
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (targetId in targets) {
            con = targets[targetId];
            if (!this.directed) {
              if (__indexOf.call(seen, con) >= 0) {
                continue;
              }
              seen.push(con);
            }
            _results1.push(f(sourceId, targetId, con));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    GraphDisplay.prototype.addNode = function(vertex, show) {
      var $contents, $v, style, type, _ref,
        _this = this;
      if (show == null) {
        show = true;
      }
      $v = $("<div>", {
        "class": 'vertex',
        id: vertex.id
      }).hide();
      $v.css({
        left: vertex.x,
        top: vertex.y,
        position: "absolute"
      });
      $contents = $("<div>", {
        "class": "vertex-contents"
      });
      _ref = this.vertexLabels;
      for (type in _ref) {
        style = _ref[type];
        if (type === "ne" || type === "nw" || type === "se" || type === "sw") {
          $("<div>", {
            "class": "vertex-" + type + "-label"
          }).appendTo($v);
        }
      }
      if (this.draggable) {
        this.jsPlumbInstance.draggable($v, {
          containment: "parent",
          start: function(event, ui) {
            return Vamonos.moveToTop($v);
          },
          stop: function(event, ui) {
            $v.css("z-index", "auto");
            if (_this.mode === 'edit') {
              vertex.x = ui.position.left;
              return vertex.y = ui.position.top;
            }
          }
        });
      }
      $v.append($contents);
      this.$inner.append($v);
      if (show) {
        $v.fadeIn(100);
      }
      this.nodes[vertex.id] = $v;
      return $v;
    };

    GraphDisplay.prototype.removeNode = function(vid) {
      var node;
      node = this.nodes[vid];
      delete this.nodes[vid];
      this.jsPlumbInstance.removeAllEndpoints(node);
      return node.fadeOut(100, function() {
        return node.remove();
      });
    };

    GraphDisplay.prototype.updateNode = function($node, vertex, frame) {
      if ($node == null) {
        $node = this.nodes[vid];
      }
      if (!(($node != null) && (vertex != null))) {
        return;
      }
      this.updateNodeLabels($node, vertex, frame);
      this.updateNodeClasses($node, vertex, frame);
      return this.updateNodePosition($node, vertex, frame);
    };

    GraphDisplay.prototype.updateNodePosition = function($node, vertex) {
      var pos;
      pos = $node.position();
      if (pos.left === vertex.x && pos.top === vertex.y) {
        return;
      }
      return this.jsPlumbInstance.animate(vertex.id, {
        left: vertex.x,
        top: vertex.y
      }, {
        duration: 500
      });
    };

    GraphDisplay.prototype.updateNodeLabels = function($node, vertex, frame) {
      var $target, res, style, type, v, _ref;
      _ref = this.vertexLabels;
      for (type in _ref) {
        style = _ref[type];
        $target = type === "inner" ? $node.children("div.vertex-contents") : type === "ne" || type === "nw" || type === "se" || type === "sw" ? $node.children("div.vertex-" + type + "-label") : void 0;
        if ($target == null) {
          return;
        }
        $target.html((function() {
          var _i, _len, _ref1;
          if (style.constructor.name === "Function") {
            return Vamonos.rawToTxt(style(vertex));
          } else if (style.constructor.name === "Array") {
            res = [];
            for (_i = 0, _len = style.length; _i < _len; _i++) {
              v = style[_i];
              if (((_ref1 = frame[v]) != null ? _ref1.id : void 0) === vertex.id) {
                res.push(Vamonos.resolveSubscript(Vamonos.removeNamespace(v)));
              }
            }
            return res.join(",");
          } else if (style.constructor.name === "Object") {
            return Vamonos.rawToTxt(style[this.mode](vertex));
          } else {
            return style;
          }
        }).call(this));
      }
    };

    GraphDisplay.prototype.updateNodeClasses = function($node, vertex) {
      var attr, kind, newClass, val, _base, _i, _len, _name, _ref, _ref1, _ref2, _ref3, _results;
      if (this.highlightChanges && this.mode === 'display' && this.vertexChanged(vertex)) {
        $node.addClass("changed");
      }
      _ref = this.vertexCssAttributes;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        if (val.constructor.name === "Function") {
          if ((_ref1 = (_base = ((_ref2 = this.appliedNodeClasses) != null ? _ref2 : this.appliedNodeClasses = {}))[_name = vertex.id]) == null) {
            _base[_name] = {};
          }
          newClass = val(vertex);
          if (newClass === this.appliedNodeClasses[vertex.id][attr]) {
            continue;
          }
          if (this.appliedNodeClasses[vertex.id][attr] != null) {
            $node.removeClass(this.appliedNodeClasses[vertex.id][attr]);
          }
          if (newClass != null) {
            $node.addClass(newClass);
            _results.push(this.appliedNodeClasses[vertex.id][attr] = newClass);
          } else {
            _results.push(delete this.appliedNodeClasses[vertex.id][attr]);
          }
        } else if (val.constructor.name === "Array") {
          for (_i = 0, _len = val.length; _i < _len; _i++) {
            kind = val[_i];
            $node.removeClass("" + attr + "-" + kind);
          }
          if (_ref3 = vertex[attr], __indexOf.call(val, _ref3) >= 0) {
            _results.push($node.addClass("" + attr + "-" + vertex[attr]));
          } else {
            _results.push(void 0);
          }
        } else {
          if (vertex[attr] === val) {
            _results.push($node.addClass(attr));
          } else {
            _results.push($node.removeClass(attr));
          }
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
        if (k[0] !== "_") {
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
      }
      for (k in oldv) {
        v = oldv[k];
        if (k[0] !== "_") {
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
      }
    };

    GraphDisplay.prototype.addConnection = function(sourceId, targetId) {
      var con, _base, _base1, _ref, _ref1, _ref2, _ref3;
      if (((_ref = this.connections[sourceId]) != null ? _ref[targetId] : void 0) != null) {
        return;
      }
      if (this.directed && (((_ref1 = this.connections[targetId]) != null ? _ref1[sourceId] : void 0) != null)) {
        con = this.connections[targetId][sourceId];
        this.addBackArrow(con);
        con.backEdgeSource = sourceId;
      } else {
        con = this.jsPlumbInstance.connect({
          source: sourceId,
          target: targetId,
          deleteEndpointsOnDetach: false
        });
        if (this.directed) {
          this.addForwardArrow(con);
          con.forwardEdgeSource = sourceId;
        }
      }
      ((_ref2 = (_base = this.connections)[sourceId]) != null ? _ref2 : _base[sourceId] = {})[targetId] = con;
      if (!this.directed) {
        ((_ref3 = (_base1 = this.connections)[targetId]) != null ? _ref3 : _base1[targetId] = {})[sourceId] = con;
      }
      return con;
    };

    GraphDisplay.prototype.removeConnection = function(sourceId, targetId) {
      var con, _ref;
      con = (_ref = this.connections[sourceId]) != null ? _ref[targetId] : void 0;
      if (con == null) {
        return;
      }
      if (!this.directed) {
        this.jsPlumbInstance.detach(con);
        delete this.connections[sourceId][targetId];
        delete this.connections[targetId][sourceId];
        return con;
      }
      if (con.forwardEdgeSource === sourceId && con.backEdgeSource === targetId) {
        this.removeForwardArrow(con);
        delete con.forwardEdgeSource;
      }
      if (con.forwardEdgeSource === sourceId && !(con.backEdgeSource != null)) {
        this.jsPlumbInstance.detach(con);
      }
      if (con.forwardEdgeSource === targetId && con.backEdgeSource === sourceId) {
        this.removeBackArrow(con);
        delete con.backEdgeSource;
      }
      if (!(con.forwardEdgeSource != null) && con.backEdgeSource === sourceId) {
        this.jsPlumbInstance.detach(con);
      }
      delete this.connections[sourceId][targetId];
      return con;
    };

    GraphDisplay.prototype.addForwardArrow = function(con) {
      return con.addOverlay([
        "PlainArrow", {
          id: "forwardArrow",
          location: -1.000001,
          width: 12,
          length: 8
        }
      ]);
    };

    GraphDisplay.prototype.removeForwardArrow = function(con) {
      return con.removeOverlay("forwardArrow");
    };

    GraphDisplay.prototype.addBackArrow = function(con) {
      return con.addOverlay([
        "PlainArrow", {
          id: "backArrow",
          location: 1.000001,
          direction: -1,
          width: 12,
          length: 8
        }
      ]);
    };

    GraphDisplay.prototype.removeBackArrow = function(con) {
      return con.removeOverlay("backArrow");
    };

    GraphDisplay.prototype.setStyle = function(con, edge, color, width) {
      var res;
      if (color.constructor.name === 'String') {
        return con.setPaintStyle(this.customStyle(color, width));
      } else if (color.constructor.name === 'Function') {
        res = color(edge);
        if (res.constructor.name === 'String') {
          return con.setPaintStyle(this.customStyle(res));
        } else if (res.constructor.name === 'Array') {
          return con.setPaintStyle(this.customStyle(res[0], res[1]));
        }
      }
    };

    GraphDisplay.prototype.updateConnections = function(graph, frame) {
      var con, edge, source, style, target, _i, _len, _ref, _ref1, _ref2, _results,
        _this = this;
      this.eachConnection(function(sourceId, targetId, con) {
        _this.resetConnectionStyle(con);
        if (_this.mode === 'display') {
          return _this.setLabel(con, graph);
        }
      });
      if (this.colorEdges == null) {
        return;
      }
      _ref = this.colorEdges;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        style = _ref[_i];
        if (typeof style[0] === 'string') {
          _ref1 = style[0].split(/->/).map(function(v) {
            return frame[v];
          }), source = _ref1[0], target = _ref1[1];
          if (!((source != null) && (target != null))) {
            continue;
          }
          con = (_ref2 = this.connections[source.id]) != null ? _ref2[target.id] : void 0;
          edge = graph.edge(source.id, target.id);
          if (!((con != null) && (edge != null))) {
            continue;
          }
          _results.push(this.setStyle(con, edge, style[1], style[2]));
        } else if (typeof style[0] === 'function') {
          _results.push((function() {
            var _j, _len1, _ref3, _ref4, _results1;
            _ref3 = graph.getEdges();
            _results1 = [];
            for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
              edge = _ref3[_j];
              if (style[0](edge)) {
                con = (_ref4 = this.connections[edge.source.id]) != null ? _ref4[edge.target.id] : void 0;
                _results1.push(this.setStyle(con, edge, style[1], style[2]));
              } else {
                _results1.push(void 0);
              }
            }
            return _results1;
          }).call(this));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    GraphDisplay.prototype.resetConnectionStyle = function(con) {
      if ((con != null ? con.connector : void 0) == null) {
        return;
      }
      return con.setPaintStyle(this.normalPaintStyle);
    };

    GraphDisplay.prototype.setLabel = function(con, graph) {
      var attr, backEdge, backLoc, backVal, edge, loc, val, _ref, _ref1,
        _this = this;
      if (this.edgeLabel[this.mode] == null) {
        return;
      }
      con.removeOverlay("edgeLabel");
      con.removeOverlay("edgeLabel");
      if (this.directed) {
        loc = 0.70;
      }
      if (this.directed && graph.edge(con.targetId, con.sourceId)) {
        backEdge = graph.edge(con.targetId, con.sourceId);
        backLoc = 0.30;
      }
      edge = graph.edge(con.sourceId, con.targetId);
      if (this.edgeLabel[this.mode].constructor.name === 'Function') {
        val = this.edgeLabel[this.mode](edge);
        if (backEdge != null) {
          backVal = this.edgeLabel[this.mode](backEdge);
        }
      } else if (this.edgeLabel[this.mode].constructor.name === 'String') {
        attr = this.edgeLabel[this.mode];
        val = Vamonos.rawToTxt((_ref = edge[attr]) != null ? _ref : "");
        if (backEdge != null) {
          backVal = Vamonos.rawToTxt((_ref1 = backEdge[attr]) != null ? _ref1 : "");
        }
      } else {
        return;
      }
      con.addOverlay([
        "Custom", {
          create: function() {
            var $label;
            $label = $("<div class='graph-label'>" + val + "</div>");
            return $("<div>").append($label);
          },
          id: "edgeLabel",
          location: loc != null ? loc : 0.5
        }
      ]);
      if (backEdge != null) {
        return con.addOverlay([
          "Custom", {
            create: function() {
              var $label;
              $label = $("<div class='graph-label'>" + backVal + "</div>");
              return $("<div>").append($label);
            },
            id: "edgeLabel",
            location: backLoc
          }
        ]);
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

    GraphDisplay.editColor = "#92E894";

    GraphDisplay.lightEdgeColor = "#cccccc";

    GraphDisplay.darkEdgeColor = "#aaaaaa";

    GraphDisplay.deletionColor = "#FF7D7D";

    GraphDisplay.lineWidth = 4;

    GraphDisplay.prototype.normalPaintStyle = {
      dashstyle: "0",
      lineWidth: GraphDisplay.lineWidth,
      strokeStyle: GraphDisplay.lightEdgeColor
    };

    GraphDisplay.prototype.potentialEdgePaintStyle = {
      dashstyle: "1 1",
      strokeStyle: GraphDisplay.editColor,
      lineWidth: GraphDisplay.lineWidth + 1
    };

    GraphDisplay.prototype.selectedPaintStyle = {
      lineWidth: GraphDisplay.lineWidth,
      strokeStyle: GraphDisplay.editColor
    };

    GraphDisplay.prototype.hoverPaintStyle = {
      lineWidth: GraphDisplay.lineWidth,
      strokeStyle: GraphDisplay.darkEdgeColor
    };

    GraphDisplay.prototype.customStyle = function(color, width) {
      return {
        lineWidth: width != null ? width : GraphDisplay.lineWidth,
        strokeStyle: color
      };
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
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Graph = (function() {

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
        description: "a mapping of variable names to vertex ids of the form                 `{ var1: 'node1' }` for displaying variables that contain                 vertices."
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
      tooltips: {
        type: "Boolean",
        defaultValue: true,
        description: "whether to display tooltips"
      },
      defaultEdgeAttrs: {
        type: "Object",
        defaultValue: void 0,
        description: "A mapping of attribute names to default values for " + "new edges created in edit mode."
      }
    };

    function Graph(_args) {
      var a, k, v, _base, _base1, _base2, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
      this._args = _args;
      this.stopEditingLabel = __bind(this.stopEditingLabel, this);

      this.editAttribute = __bind(this.editAttribute, this);

      this.createEditableEdgeLabel = __bind(this.createEditableEdgeLabel, this);

      this.removePotentialEdge = __bind(this.removePotentialEdge, this);

      this.potentialEdgeTo = __bind(this.potentialEdgeTo, this);

      Vamonos.handleArguments({
        widgetObject: this,
        givenArgs: this._args,
        ignoreExtraArgs: true
      });
      this.showChanges = Vamonos.arrayify(this.showChanges);
      _ref = ["defaultEdgeAttrs", "showChanges", "tooltips", "varName", "defaultGraph", "inputVars", "editable"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        a = _ref[_i];
        delete this._args[a];
      }
      if (this.editable) {
        this.theGraph = (_ref1 = this.defaultGraph) != null ? _ref1 : new Vamonos.DataStructure.Graph();
        _ref2 = this.inputVars;
        for (k in _ref2) {
          v = _ref2[k];
          this.inputVars[k] = this.theGraph.vertex(v);
        }
      } else {
        if ((_ref3 = (_base = this._args).minX) == null) {
          _base.minX = 0;
        }
        if ((_ref4 = (_base1 = this._args).minY) == null) {
          _base1.minY = 0;
        }
        if ((_ref5 = (_base2 = this._args).resizable) == null) {
          _base2.resizable = false;
        }
      }
      this.edgeLabel = (_ref6 = (_ref7 = this._args.edgeLabel) != null ? _ref7.edit : void 0) != null ? _ref6 : this._args.edgeLabel;
      this.displayWidget = new Vamonos.Widget.GraphDisplay(this._args);
    }

    Graph.prototype.event = function() {
      var done, event, frame, inp, newg, oldVal, options, type, varName, _ref, _ref1, _ref2, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          this.registerVariables();
          this.updateVariables();
          return this.displayWidget.event("setup", this.viz, done);
        case "render":
          frame = options[0], type = options[1];
          if (__indexOf.call(this.showChanges, type) >= 0) {
            this.displayWidget.highlightChanges = true;
          } else {
            this.displayWidget.highlightChanges = false;
          }
          if (frame[this.varName] != null) {
            this.displayWidget.fitGraph(frame[this.varName]);
            return this.displayWidget.draw(frame[this.varName], frame);
          } else {
            this.displayWidget.hideGraph();
            return this.displayWidget.fitGraph();
          }
          break;
        case "displayStart":
          this.displayWidget.mode = "display";
          if (this.tooltips) {
            return this.setDisplayToolTips();
          }
          break;
        case "displayStop":
          if (!this.editable) {
            this.displayWidget.clearDisplay();
            return this.displayWidget.fitGraph();
          }
          break;
        case "editStart":
          if (this.editable) {
            this.displayWidget.mode = "edit";
            return this.startEditing();
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

    Graph.prototype.setEditToolTips = function() {
      this.displayWidget.$inner.prop("title", "Click on whitespace to add vertices, edges to modify them.");
      this.displayWidget.$inner.children(".vertex").prop("title", "Click a vertex to modify vertex attributes and edges.");
      return this.displayWidget.$inner.children(".graph-label").prop("title", "Click an edge attribute to modify it.");
    };

    Graph.prototype.setNodeSelectionToolTips = function() {
      this.displayWidget.$inner.prop("title", "Click on white space to deselect.");
      return this.displayWidget.$inner.children(".vertex").prop("title", "Click a vertex to add an edge or change selected vertex.");
    };

    Graph.prototype.setConnectionSelectionToolTips = function() {
      this.displayWidget.$inner.prop("title", "Click on white space to deselect. Click on another edge to select it.");
      return this.displayWidget.$inner.children(".vertex").prop("title", "Click a vertex to select it.");
    };

    Graph.prototype.setDisplayToolTips = function() {
      this.displayWidget.$inner.prop("title", "Drag a vertex to move it.");
      this.displayWidget.$inner.children(".vertex").removeAttr("title");
      return this.displayWidget.$inner.children(".graph-label").removeAttr("title");
    };

    Graph.prototype.startEditing = function() {
      this.displayWidget.fitGraph(this.theGraph);
      this.displayWidget.draw(this.theGraph, this.inputVars);
      if (this.editable) {
        this.setContainerEditBindings();
        this.setConnectionEditBindings();
        if (this.tooltips) {
          return this.setEditToolTips();
        }
      }
    };

    Graph.prototype.stopEditing = function() {
      if (this.editable) {
        this.deselect();
        this.unsetConnectionEditBindings();
        this.unsetContainerEditBindings();
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
      var graph, k, v, _ref;
      graph = Vamonos.clone(this.theGraph);
      this.viz.setVariable(this.varName, graph);
      _ref = this.inputVars;
      for (k in _ref) {
        v = _ref[k];
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
          if (!(v != null)) {
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
      var newv, node;
      newv = this.theGraph.addVertex(vertex);
      this.displayWidget.draw(this.theGraph, this.inputVars);
      node = this.displayWidget.nodes[newv.id];
      this.selectNode(node);
      return node;
    };

    Graph.prototype.removeVertex = function(vid) {
      var k, v, _ref;
      this.deselect();
      this.theGraph.removeVertex(vid);
      _ref = this.inputVars;
      for (k in _ref) {
        v = _ref[k];
        if ((v != null) && v.id === vid) {
          this.inputVars[k] = void 0;
        }
      }
      return this.displayWidget.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.addEdge = function(sourceId, targetId) {
      var attrs, k, v, _ref;
      attrs = {};
      if (this.defaultEdgeAttrs != null) {
        _ref = this.defaultEdgeAttrs;
        for (k in _ref) {
          v = _ref[k];
          attrs[k] = v;
        }
      }
      this.theGraph.addEdge(sourceId, targetId, attrs);
      this.displayWidget.draw(this.theGraph, this.inputVars);
      return this.setConnectionEditBindings();
    };

    Graph.prototype.removeEdge = function(sourceId, targetId) {
      if ('edge' === this.selected()) {
        this.deselect();
      }
      this.theGraph.removeEdge(sourceId, targetId);
      return this.displayWidget.draw(this.theGraph, this.inputVars);
    };

    Graph.prototype.setContainerEditBindings = function() {
      var _this = this;
      return this.displayWidget.$outer.on("click.vamonos-graph", function(e) {
        var $target, dwH, dwW, height, sourceId, targetId, width, x, y, _ref, _ref1, _ref2, _ref3;
        $target = $(e.target);
        if (!_this.selected()) {
          if ($target.is("div.vertex-contents")) {
            _this.selectNode($target.parent());
          }
          if ($target.is(_this.displayWidget.$inner)) {
            x = (_ref = e.offsetX) != null ? _ref : e.pageX - _this.displayWidget.$outer.offset().left;
            y = (_ref1 = e.offsetY) != null ? _ref1 : e.pageY - _this.displayWidget.$outer.offset().top;
            width = (_ref2 = _this.displayWidget._vertexWidth) != null ? _ref2 : 24;
            height = (_ref3 = _this.displayWidget._vertexHeight) != null ? _ref3 : 24;
            dwH = _this.displayWidget.$inner.height();
            dwW = _this.displayWidget.$inner.width();
            if ((y - (height / 2) > 0) && (y + (height / 2) < dwH) && (x - (width / 2) > 0) && (x + (width / 2) < dwW)) {
              _this.addVertex({
                x: x - (width / 2),
                y: y - (height / 2)
              });
            }
          }
        } else {
          if ($target.is("div.vertex-contents") && 'vertex' === _this.selected()) {
            sourceId = _this.$selectedNode.attr("id");
            targetId = $target.parent().attr("id");
            if (sourceId === targetId) {
              _this.deselect();
            } else if (_this.theGraph.edge(sourceId, targetId)) {
              _this.selectNode(_this.displayWidget.nodes[targetId]);
            } else {
              _this.addEdge(sourceId, targetId);
              _this.removePotentialEdge();
            }
          } else if ($target.is("div.vertex-contents") && 'edge' === _this.selected()) {
            _this.selectNode($target.parent());
          } else if ($target.is(_this.displayWidget.$inner)) {
            _this.deselect();
          }
        }
        return true;
      });
    };

    Graph.prototype.unsetContainerEditBindings = function() {
      return this.displayWidget.$outer.off("click.vamonos-graph");
    };

    Graph.prototype.setConnectionEditBindings = function() {
      var _this = this;
      return this.displayWidget.eachConnection(function(sourceId, targetId, con) {
        return _this.connectionBindings(con);
      });
    };

    Graph.prototype.connectionBindings = function(con) {
      var backLoc, loc,
        _this = this;
      con.bind("click", function(c) {
        return _this.selectConnection(c);
      });
      con.bind("mouseenter", function(c) {
        var _ref;
        if (c.id === ((_ref = _this.$selectedConnection) != null ? _ref.id : void 0)) {
          return;
        }
        return c.setPaintStyle(_this.displayWidget.hoverPaintStyle);
      });
      con.bind("mouseexit", function(c) {
        var _ref;
        if (c.id === ((_ref = _this.$selectedConnection) != null ? _ref.id : void 0)) {
          return;
        }
        return _this.displayWidget.resetConnectionStyle(c);
      });
      if (this.edgeLabel != null) {
        con.removeOverlay("editableEdgeLabel");
        con.removeOverlay("editableEdgeLabel-back");
        con.removeOverlay("edgeLabel");
        if (this.theGraph.directed) {
          loc = 0.70;
        } else {
          loc = 0.5;
        }
        if (this.theGraph.directed && this.theGraph.edge(con.targetId, con.sourceId)) {
          backLoc = 0.30;
        }
        con.addOverlay([
          "Custom", {
            create: function() {
              var edge;
              edge = _this.theGraph.edge(con.sourceId, con.targetId);
              return _this.createEditableEdgeLabel(edge, con);
            },
            id: "editableEdgeLabel",
            cssClass: "graph-label",
            location: loc
          }
        ]);
        if (backLoc != null) {
          return con.addOverlay([
            "Custom", {
              create: function() {
                var backEdge;
                backEdge = _this.theGraph.edge(con.targetId, con.sourceId);
                return _this.createEditableEdgeLabel(backEdge, con);
              },
              id: "editableEdgeLabel-back",
              cssClass: "graph-label",
              location: backLoc
            }
          ]);
        }
      }
    };

    Graph.prototype.unsetConnectionEditBindings = function() {
      var _this = this;
      return this.displayWidget.eachConnection(function(sourceId, targetId, con) {
        con.unbind("click");
        con.unbind("mouseenter");
        con.unbind("mouseexit");
        con.removeOverlay("editableEdgeLabel");
        return con.removeOverlay("editableEdgeLabel-back");
      });
    };

    Graph.prototype.selected = function() {
      if (this.$selectedNode != null) {
        return 'vertex';
      }
      if (this.$selectedConnection != null) {
        return 'edge';
      }
      return false;
    };

    Graph.prototype.selectNode = function(node) {
      var _this = this;
      this.stopEditingLabel();
      if ('vertex' === this.selected()) {
        this.deselectNode();
      }
      if ('edge' === this.selected()) {
        this.deselectConnection();
      }
      this.$selectedNode = node;
      this.$selectedNode.addClass("selected");
      this.$selectedNode.removeClass('hovering');
      this.$others = this.$selectedNode.siblings("div.vertex").children("div.vertex-contents");
      this.$others.on("mouseenter.vamonos-graph", function(e) {
        return _this.potentialEdgeTo($(e.target).parent());
      });
      this.$others.on("mouseleave.vamonos-graph", this.removePotentialEdge);
      this.openDrawer();
      if (this.tooltips) {
        return this.setNodeSelectionToolTips();
      }
    };

    Graph.prototype.selectConnection = function(con) {
      if ('vertex' === this.selected()) {
        this.deselectNode();
      }
      if ('edge' === this.selected()) {
        this.deselectConnection();
      }
      this.$selectedConnection = con;
      this.$selectedConnection.setPaintStyle(this.displayWidget.selectedPaintStyle);
      this.openDrawer();
      if (this.tooltips) {
        return this.setConnectionSelectionToolTips();
      }
    };

    Graph.prototype.deselect = function() {
      this.deselectNode();
      this.deselectConnection();
      this.closeDrawer();
      if (this.tooltips) {
        return this.setEditToolTips();
      }
    };

    Graph.prototype.deselectNode = function() {
      if (this.$selectedNode == null) {
        return;
      }
      this.$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph");
      this.$selectedNode.removeClass("selected");
      return this.$selectedNode = void 0;
    };

    Graph.prototype.deselectConnection = function() {
      if (this.$selectedConnection == null) {
        return;
      }
      this.displayWidget.resetConnectionStyle(this.$selectedConnection);
      this.$selectedConnection = void 0;
      return this.removePotentialEdge();
    };

    Graph.prototype.potentialEdgeTo = function(node) {
      var potentialEdge, sourceId, targetId, _ref;
      sourceId = this.$selectedNode.attr("id");
      targetId = node.attr("id");
      if (((_ref = this.displayWidget.connections[sourceId]) != null ? _ref[targetId] : void 0) != null) {
        return;
      }
      potentialEdge = this.displayWidget.addConnection(sourceId, targetId);
      potentialEdge.setPaintStyle(this.displayWidget.potentialEdgePaintStyle);
      return this.potentialEdge = {
        sourceId: sourceId,
        targetId: targetId
      };
    };

    Graph.prototype.removePotentialEdge = function() {
      var con, edge, sourceId, targetId, _ref;
      if (this.potentialEdge == null) {
        return;
      }
      _ref = this.potentialEdge, sourceId = _ref.sourceId, targetId = _ref.targetId;
      edge = this.theGraph.edge(sourceId, targetId);
      if (edge) {
        con = this.displayWidget.connections[sourceId][targetId];
      } else {
        con = this.displayWidget.removeConnection(sourceId, targetId);
      }
      if (con != null) {
        return this.displayWidget.resetConnectionStyle(con);
      }
    };

    Graph.prototype.openDrawer = function() {
      var arr, buttons, edge, label, nametag, sourceId, targetId, type, v, vtx, _fn,
        _this = this;
      type = this.selected();
      if (type === 'vertex') {
        vtx = this.theGraph.vertex(this.$selectedNode.attr("id"));
        label = "vertex&nbsp;&nbsp;" + vtx.name + "&nbsp;&nbsp;";
        buttons = [];
        _fn = function(v, vtx, buttons, inputVars, displayWidget, theGraph) {
          var $b, vName,
            _this = this;
          vName = Vamonos.resolveSubscript(v);
          $b = $("<button>", {
            text: "" + vName,
            title: "Set " + vName + "=" + vtx.name
          });
          $b.on("click.vamonos-graph", function(e) {
            inputVars[v] = vtx;
            return displayWidget.draw(theGraph, inputVars);
          });
          return buttons.push($b);
        };
        for (v in this.inputVars) {
          _fn(v, vtx, buttons, this.inputVars, this.displayWidget, this.theGraph);
        }
        buttons.push($("<button>", {
          text: "del",
          title: "Delete " + vtx.name
        }).on("click.vamonos-graph", function(e) {
          return _this.removeVertex(vtx.id);
        }));
      } else if (type === 'edge') {
        sourceId = this.$selectedConnection.sourceId;
        targetId = this.$selectedConnection.targetId;
        edge = this.theGraph.edge(sourceId, targetId);
        if (this.theGraph.directed && !this.theGraph.edge(targetId, sourceId)) {
          arr = "&rarr;";
        } else {
          arr = "-";
        }
        nametag = edge.source.name + "&nbsp;" + arr + "&nbsp;" + edge.target.name;
        label = "edge&nbsp;&nbsp;" + nametag + "&nbsp;&nbsp;";
        buttons = [
          $("<button>", {
            text: "del",
            title: "Delete " + edge.source.name + "->" + edge.target.name
          }).on("click.vamonos-graph", function(e) {
            if (_this.theGraph.directed && _this.theGraph.edge(targetId, sourceId)) {
              _this.removeEdge(edge.target.id, edge.source.id);
            }
            return _this.removeEdge(edge.source.id, edge.target.id);
          })
        ];
      } else {
        return;
      }
      return this.displayWidget.openDrawer({
        buttons: buttons,
        label: label
      });
    };

    Graph.prototype.closeDrawer = function() {
      return this.displayWidget.closeDrawer();
    };

    Graph.prototype.createEditableEdgeLabel = function(edge, con) {
      var $label, val, _ref,
        _this = this;
      if (this.edgeLabel.constructor.name !== 'String') {
        return;
      }
      val = Vamonos.rawToTxt((_ref = edge[this.edgeLabel]) != null ? _ref : "");
      return $label = $("<div>" + val + "</div>").on("click", function() {
        _this.selectConnection(con);
        return _this.editAttribute($label, edge);
      });
    };

    Graph.prototype.editAttribute = function($label, edge) {
      var returnFunc, valFunc,
        _this = this;
      valFunc = function() {
        var _ref;
        return (_ref = edge[_this.edgeLabel]) != null ? _ref : "";
      };
      returnFunc = function(newVal) {
        var val;
        val = Vamonos.txtToRaw(newVal);
        if (val != null) {
          edge[_this.edgeLabel] = val;
        }
        return Vamonos.rawToTxt(val);
      };
      return Vamonos.editableValue($label, valFunc, returnFunc);
    };

    Graph.prototype.stopEditingLabel = function() {
      return this.displayWidget.$inner.find("input.inline-input").trigger("something-was-selected");
    };

    return Graph;

  })();

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
      var done, event, name, options, value, _ref, _ref1, _results;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          _ref = this.args;
          for (name in _ref) {
            value = _ref[name];
            if (name === "breakpoints") {
              this.setBreakpoints(value);
            } else if (name === "watch") {
              this.setWatchVars(value);
            } else {
              this.viz.setVariable(name, value, true);
            }
          }
          if (done != null) {
            return done();
          }
          break;
        case "editStop":
          _ref1 = this.args;
          _results = [];
          for (name in _ref1) {
            value = _ref1[name];
            if (name !== "breakpoints" && name !== "watch") {
              _results.push(this.viz.setVariable(name, value, true));
            }
          }
          return _results;
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
      var done, event, i, options, v, _, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
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
          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            _ref4 = _ref3[_k], _ = _ref4[0], i = _ref4[1];
            _ref5 = this.virtualIndexDependents(i);
            for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
              v = _ref5[_l];
              this.viz.registerVariable(v);
            }
          }
          if (done != null) {
            return done();
          }
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
      var done, event, options, viz;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0], done = options[1];
          if (done != null) {
            return done();
          }
          break;
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
      var b, done, event, frame, options, type, _i, _len, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          _ref = this.breakpoints;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            b = _ref[_i];
            this.viz.setBreakpoint(b, this.procedureName);
          }
          if (done != null) {
            return done();
          }
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
        return this.getLine(frame._nextLine).find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint");
      }
    };

    Pseudocode.prototype.clear = function() {
      this.$tbl.find("tr").removeClass("pseudocode-next");
      this.$tbl.find("tr").removeClass("pseudocode-previous");
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
  var DIRS, QTipTutorial,
    __slice = [].slice;

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

    QTipTutorial.prototype.event = function() {
      var done, event, options, viz;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (event === 'setup') {
        viz = options[0], done = options[1];
        if (done != null) {
          return done();
        }
      }
    };

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
      var done, event, frame, newFrame, options, type, viz, _ref, _ref1;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          viz = options[0], done = options[1];
          viz.registerVariable(this.varName);
          return this.arrayWidget.event(event, viz, done);
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
      var done, event, options, type, _ref;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.visualizer = options[0], done = options[1];
          $("body").append(this.$dialog);
          if (done != null) {
            return done();
          }
          break;
        case "displayStart":
          this.currentAnswer = null;
          this.currentFrame = null;
          this.framesPassed = [];
          this.wrongTimeout = null;
          return this.log = [];
        case "render":
          this.currentFrame = options[0], type = options[1];
          if (!(type === "next" && this.condition(this.currentFrame) && (_ref = this.currentFrame._frameNumber, __indexOf.call(this.framesPassed, _ref) < 0))) {
            return;
          }
          this.$dialog.attr("title", this.title(this.currentFrame));
          this.$question.html(this.question(this.currentFrame));
          this.$answer.val("");
          this.$feedback.html("");
          this.$feedback.removeClass("correct-answer", "wrong-answer");
          this.currentAnswer = this.answer(this.currentFrame);
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
      var done, event, options;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          this.viz.registerVariable(this.varName);
          if (done != null) {
            return done();
          }
          break;
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
      var done, event, frame, options, _ref,
        _this = this;
      event = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      switch (event) {
        case "setup":
          this.viz = options[0], done = options[1];
          this.viz.registerVariable(this.varName);
          if (this.watching) {
            this.viz.setWatchVar(this.varName);
          }
          if (done != null) {
            return done();
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
