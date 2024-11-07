(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ja(a,a)}
function ja(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var oa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if(typeof Object.setPrototypeOf=="function")qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function z(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function va(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.R=this.j=null}
function wa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
va.prototype.H=function(a){this.i=a};
function xa(a,b){a.j={exception:b,gd:!0};a.h=a.o||a.D}
va.prototype.return=function(a){this.j={return:a};this.h=this.D};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.F=function(a){this.h=a};
function ya(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function za(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.gd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ba(a){this.h=new va;this.i=a}
function Ca(a,b){wa(a.h);var c=a.h.u;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Ea(a)}a.h.u=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.gd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Ea(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u["throw"],b,a.h.H):(xa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ga(new Fa(new Ba(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return pa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.D)}};
b.prototype.Z=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.u(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.sa(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.R()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Wb(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(v){try{l(r(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Wb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).Wb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){r[v]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||da});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&la(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
function Ia(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ia(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ja=Ja||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ka(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Na(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Pa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(Math.random()*1E9>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Ya(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var bb=globalThis.trustedTypes,db;function eb(){var a=null;if(!bb)return a;try{var b=function(c){return c};
a=bb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function fb(){db===void 0&&(db=eb());return db}
;function gb(a){this.h=a}
gb.prototype.toString=function(){return this.h+""};
function hb(a){var b=fb();return new gb(b?b.createScriptURL(a):a)}
function ib(a){if(a instanceof gb)return a.h;throw Error("");}
;var jb=ha([""]),kb=ja(["\x00"],["\\0"]),lb=ja(["\n"],["\\n"]),mb=ja(["\x00"],["\\u0000"]);function nb(a){return a.toString().indexOf("`")===-1}
nb(function(a){return a(jb)})||nb(function(a){return a(kb)})||nb(function(a){return a(lb)})||nb(function(a){return a(mb)});function ob(a){this.h=a}
ob.prototype.toString=function(){return this.h};
var pb=new ob("about:invalid#zClosurez");function qb(a){this.ue=a}
function rb(a){return new qb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var sb=[rb("data"),rb("http"),rb("https"),rb("mailto"),rb("ftp"),new qb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],tb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function ub(a){if(a instanceof ob)if(a instanceof ob)a=a.h;else throw Error("");else a=tb.test(a)?a:void 0;return a}
;function wb(a,b){b=ub(b);b!==void 0&&(a.href=b)}
;function xb(){this.h=yb[0].toLowerCase()}
xb.prototype.toString=function(){return this.h};function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){var b="true".toString(),c=[new xb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof xb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Bb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Cb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Db(a,b){if(b instanceof gb)a.href=ib(b).toString(),a.rel="stylesheet";else{if(Cb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ub(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Eb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){var b=Eb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Hb(a,b){if(b instanceof Fb)b=b.h;else throw Error("");a.textContent=b;Gb(a)}
function Ib(a,b){a.src=ib(b);Gb(a)}
;var Jb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Kb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Lb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Mb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Nb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Kb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ob(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Pb(a,b){b=Jb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Rb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Sb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Tb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ub[c])c=Ub[c];else{c=String(c);if(!Ub[c]){var f=/function\s+([^\(]+)/m.exec(c);Ub[c]=f?f[1]:"[Anonymous]"}c=Ub[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Tb(a,b){b||(b={});b[Vb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Vb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Tb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Vb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Tb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Vb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ub={};function Wb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a,b){return b.match(Xb)[a]||null}
function $b(a){return Yb(Zb(3,a))}
function ac(a){var b=a.match(Xb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function bc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){b=dc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function fc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var hc=/#|$/,ic=/[?&]($|#)/;function jc(a,b){for(var c=a.search(hc),d=0,e,f=[];(e=fc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(ic,"$1")}
;function kc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)<=b&&c.push(Number(nc(e,1)))}return c}
function oc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)>b&&c.push(Number(nc(e,1)))}return c}
;function pc(a){return{fieldType:2,fieldName:a}}
function G(a){return{fieldType:3,fieldName:a}}
;function qc(a){this.h=a;a.Na("/client_streamz/bg/fic",G("ke"))}
function rc(a){this.h=a;a.Na("/client_streamz/bg/fiec",G("ke"),pc("ec"))}
function sc(a){this.h=a;a.jb("/client_streamz/bg/fil",G("ke"))}
sc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function tc(a){this.h=a;a.Na("/client_streamz/bg/fcc",pc("ph"),G("ke"))}
function uc(a){this.h=a;a.jb("/client_streamz/bg/fcd",pc("ph"),G("ke"))}
uc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function vc(a){this.h=a;a.Na("/client_streamz/bg/fsc",G("ke"))}
function wc(a){this.h=a;a.jb("/client_streamz/bg/fsl",G("ke"))}
wc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};
function xc(a){this.h=a;a.jb("/client_streamz/bg/frs",G("ke"))}
xc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function yc(a){this.h=a;a.jb("/client_streamz/bg/wrl",G("mn"),pc("ac"),pc("sc"),G("rk"),G("mk"))}
yc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function zc(a){this.h=a;a.jb("/client_streamz/bg/el",G("en"),G("rk"),G("mk"))}
zc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Ac(a){this.h=a;a.Na("/client_streamz/bg/cec",pc("ec"),G("rk"),G("mk"))}
function Bc(a){a.Na("/client_streamz/bg/po/csc",pc("cs"),G("rk"),G("mk"))}
function Cc(a){a.Na("/client_streamz/bg/po/ctav",G("av"),G("rk"),G("mk"))}
function Dc(a){a.Na("/client_streamz/bg/po/cwsc",G("su"),G("rk"),G("mk"))}
;function Ec(a){C.setTimeout(function(){throw a;},0)}
;var Fc=Ka(610401301,!1),Gc=Ka(653718497,Ka(1,!0));function Hc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ic,Jc=C.navigator;Ic=Jc?Jc.userAgentData||null:null;function Kc(a){return Fc?Ic?Ic.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function H(a){return Hc().indexOf(a)!=-1}
;function Lc(){return Fc?!!Ic&&Ic.brands.length>0:!1}
function Mc(){return Lc()?!1:H("Opera")}
function Nc(){return H("Firefox")||H("FxiOS")}
function Oc(){return Lc()?Kc("Chromium"):(H("Chrome")||H("CriOS"))&&!(Lc()?0:H("Edge"))||H("Silk")}
;function Pc(){return Fc?!!Ic&&!!Ic.platform:!1}
function Qc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;var Rc=Mc(),Sc=Lc()?!1:H("Trident")||H("MSIE"),Tc=H("Edge"),Uc=H("Gecko")&&!(Hc().toLowerCase().indexOf("webkit")!=-1&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Vc=Hc().toLowerCase().indexOf("webkit")!=-1&&!H("Edge");Vc&&H("Mobile");Pc()||H("Macintosh");Pc()||H("Windows");(Pc()?Ic.platform==="Linux":H("Linux"))||Pc()||H("CrOS");var Wc=Pc()?Ic.platform==="Android":H("Android");Qc();H("iPad");H("iPod");Qc()||H("iPad")||H("iPod");Hc().toLowerCase().indexOf("kaios");Nc();var Xc=Qc()||H("iPod"),Yc=H("iPad");!H("Android")||Oc()||Nc()||Mc()||H("Silk");Oc();var Zc=H("Safari")&&!(Oc()||(Lc()?0:H("Coast"))||Mc()||(Lc()?0:H("Edge"))||(Lc()?Kc("Microsoft Edge"):H("Edg/"))||(Lc()?Kc("Opera"):H("OPR"))||Nc()||H("Silk")||H("Android"))&&!(Qc()||H("iPad")||H("iPod"));var $c={},ad=null;function bd(a,b){Oa(a);b===void 0&&(b=0);cd();b=$c[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function dd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;ed(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ed(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=ad[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
cd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function cd(){if(!ad){ad={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));$c[c]=d;for(var e=0;e<d.length;e++){var f=d[e];ad[f]===void 0&&(ad[f]=e)}}}}
;var fd=typeof Uint8Array!=="undefined",gd=!Sc&&typeof btoa==="function";function hd(a){if(!gd)return bd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var id=/[-_.]/g,jd={"-":"+",_:"/",".":"="};function kd(a){return jd[a]||""}
function ld(a){return fd&&a!=null&&a instanceof Uint8Array}
var md={};function nd(a,b){od(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
nd.prototype.sizeBytes=function(){od(md);var a=this.h;if(a!=null&&!ld(a))if(typeof a==="string")if(gd){id.test(a)&&(a=a.replace(id,kd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=dd(a);else Na(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var pd;function od(a){if(a!==md)throw Error("illegal external caller");}
;var qd;function rd(){var a=Error();Rb(a,"incident");Ec(a)}
function sd(a){a=Error(a);Rb(a,"warning");return a}
;function td(){return typeof BigInt==="function"}
;function ud(a){return Array.prototype.slice.call(a)}
;var vd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function wd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var xd=wd(),yd=wd("2ex"),zd=wd("1oa");Math.max.apply(Math,ka(Object.values({bh:1,Zg:2,Yg:4,fh:8,eh:16,dh:32,Gf:64,hh:128,Xg:256,Wg:512,ah:1024,Mf:2048,gh:4096,Nf:8192,Hf:16384})));var Ad=vd?function(a,b){a[xd]|=b}:function(a,b){a.Qa!==void 0?a.Qa|=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Bd=vd?function(a){return a[xd]|0}:function(a){return a.Qa|0},Cd=vd?function(a){return a[xd]}:function(a){return a.Qa},Dd=vd?function(a,b){a[xd]=b}:function(a,b){a.Qa!==void 0?a.Qa=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ed(a,b){Dd(b,(a|0)&-30975)}
function Fd(a,b){Dd(b,(a|34)&-30941)}
;var Gd={},Hd={};function Id(a){return!(!a||typeof a!=="object"||a.h!==Hd)}
function Jd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Kd(a){return!Array.isArray(a)||a.length?!1:Bd(a)&1?!0:!1}
var Ld,Md=[];Dd(Md,55);Ld=Object.freeze(Md);function Nd(a){if(a&2)throw Error();}
var Od=Object.freeze({}),Pd=Object.freeze({}),Qd=Object.freeze({});function Rd(a){a.th=!0;return a}
;var Sd=Rd(function(a){return typeof a==="number"}),Td=Rd(function(a){return typeof a==="string"}),Ud=Rd(function(a){return typeof a==="boolean"});
function Vd(){var a=Wd;return Rd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Xd=Rd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var Yd=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Zd(a){var b=a;if(Td(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Sd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Yd?BigInt(a):a=Ud(a)?a?"1":"0":Td(a)?a.trim()||"0":String(a)}
var ee=Rd(function(a){return Yd?a>=$d&&a<=ae:a[0]==="-"?be(a,ce):be(a,de)}),ce=Number.MIN_SAFE_INTEGER.toString(),$d=Yd?BigInt(Number.MIN_SAFE_INTEGER):void 0,de=Number.MAX_SAFE_INTEGER.toString(),ae=Yd?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function be(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var fe=0,ge=0;function he(a){var b=a>>>0;fe=b;ge=(a-b)/4294967296>>>0}
function ie(a){if(a<0){he(0-a);var b=w(je(fe,ge));a=b.next().value;b=b.next().value;fe=a>>>0;ge=b>>>0}else he(a)}
function ke(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else td()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+le(c)+le(a));return c}
function le(a){a=String(a);return"0000000".slice(a.length)+a}
function me(){var a=fe,b=ge;b&2147483648?td()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(je(a,b)),a=b.next().value,b=b.next().value,a="-"+ke(a,b)):a=ke(a,b);return a}
function je(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ne(a){return a.displayName||a.name||"unknown type name"}
function oe(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var pe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function qe(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:pe.test(a)}
function re(a){if(typeof a!=="number")throw sd("int32");if(!Number.isFinite(a))throw sd("int32");return a|0}
function se(a){return a==null?a:re(a)}
function te(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function ue(a){var b=0;b=b===void 0?0:b;if(!qe(a))throw sd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return ve(a);case "bigint":return String(BigInt.asIntN(64,a));default:return we(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Zd(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=td()?Zd(BigInt.asIntN(64,BigInt(a))):Zd(xe(a))),a;case "bigint":return Zd(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?Zd(ye(a)):Zd(we(a))}case 0:switch(c){case "string":return ve(a);
case "bigint":return Zd(BigInt.asIntN(64,a));default:return ye(a)}default:return Bb(b,"Unknown format requested type for int64")}}
function ze(a){return a==null?a:ue(a)}
function Ae(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function xe(a){a.indexOf(".");if(Ae(a))return a;if(a.length<16)ie(Number(a));else if(td())a=BigInt(a),fe=Number(a&BigInt(4294967295))>>>0,ge=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");ge=fe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ge*=1E6,fe=fe*1E6+d,fe>=4294967296&&(ge+=Math.trunc(fe/4294967296),ge>>>=0,fe>>>=0);b&&(b=w(je(fe,ge)),a=b.next().value,b=b.next().value,fe=a,ge=b)}return me()}
function ye(a){qe(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){ie(a);var b=fe,c=ge;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function we(a){qe(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Ae(b)?a=b:(ie(a),a=me())}return a}
function ve(a){qe(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return xe(a)}
function Be(a){if(a==null)return a;if(typeof a==="bigint")return ee(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=ee(a)?Number(a):String(a)),a;if(qe(a))return typeof a==="number"?ye(a):ve(a)}
function Ce(a){if(typeof a!=="string")throw Error();return a}
function De(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ee(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ne(b)+" but got "+(a&&ne(a.constructor)));}
function Fe(a,b,c){if(a!=null&&typeof a==="object"&&a.Ec===Gd)return a;if(Array.isArray(a)){var d=Bd(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Dd(a,e);return new b(a)}}
;function Ge(a){He===void 0&&(He=typeof Proxy==="function"?Ie(Proxy):null);if(!He||!Je())return a;var b=Ke(a);if(b)return b;if(Math.random()>.01)return a;Le(a);b=new He(a,{set:function(c,d,e){Me();c[d]=e;return!0}});
Ne(a,b);return b}
function Me(){rd()}
var Oe=void 0,Pe=void 0;function Ke(a){var b;return(b=Oe)==null?void 0:b.get(a)}
function Qe(a){var b;return((b=Pe)==null?void 0:b.get(a))||a}
function Ne(a,b){(Oe||(Oe=new Re)).set(a,b);(Pe||(Pe=new Re)).set(b,a)}
var He=void 0,Re=void 0;function Je(){Re===void 0&&(Re=typeof WeakMap==="function"?Ie(WeakMap):null);return Re}
function Ie(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Se=void 0;function Le(a){if(Se===void 0){var b=new He([],{});Se=Array.prototype.concat.call([],b).length===1}Se&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
function Te(a,b,c){if(Je()){if(Ue(a,b)){if(c)return}else if(Math.random()>.01)return;var d=a.length;c={length:d};for(var e=0;e<Math.min(d,10);e++){if(d<=10)var f=e;else{f=d/10;var g=Math.floor(e*f);f=g+Math.floor(Math.random()*(Math.floor((e+1)*f)-g))}c[f]=a[f]}Ve(a,c)?(d=We||(We=new Re),e=d.get(b),e||(e=new Re,d.set(b,e)),e.set(a,c)):(rd(),Xe(a,b))}}
function Ye(a,b){var c=Ue(a,b);c&&!Ve(a,c)&&(Ze(),Xe(a,b))}
function Ve(a,b){if(a.length!==b.length)return!1;for(var c in b){var d=Number(c),e;if(e=Number.isInteger(d))e=a[d],d=b[d],e=!(Number.isNaN(e)?Number.isNaN(d):e===d);if(e)return!1}return!0}
function $e(a){var b;if(a&&(b=We)!=null&&b.has(a)&&(b=a.G))for(var c=0;c<b.length;c++){var d=b[c];if(c===b.length-1&&Jd(d))for(var e in d){var f=d[e];Array.isArray(f)&&Ye(f,a)}else Array.isArray(d)&&Ye(d,a)}}
function Ze(){rd()}
var We=void 0;function Ue(a,b){var c,d;return(c=We)==null?void 0:(d=c.get(b))==null?void 0:d.get(a)}
function Xe(a,b){var c,d;(c=We)==null||(d=c.get(b))==null||d.delete(a)}
;var af;function bf(a,b){Bd(b);af=b;a=new a(b);af=void 0;return a}
function J(a,b,c){var d=d!=null?d:0;a==null&&(a=af);af=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=Bd(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Jd(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");
e=e&-33521665|(b&1023)<<15}}}Dd(a,e);return a}
;function cf(a,b){return df(b)}
function df(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ee(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Kd(a))return}else{if(ld(a))return hd(a);if(a instanceof nd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=hd(b)}}}return a}
;function ef(a,b,c){a=ud(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function ff(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Kd(a)?void 0:e&&Bd(a)&2?a:gf(a,b,c,d!==void 0,e);else if(Jd(a)){var f={},g;for(g in a)f[g]=ff(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function gf(a,b,c,d,e){var f=d||c?Bd(a):0;d=d?!!(f&32):void 0;a=ud(a);for(var g=0;g<a.length;g++)a[g]=ff(a[g],b,c,d,e);c&&c(f,a);return a}
function hf(a){return a.Ec===Gd?a.toJSON():df(a)}
;function jf(a,b,c){c=c===void 0?Fd:c;if(a!=null){if(fd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Bd(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Dd(a,(d|34)&-12293),a):gf(a,jf,d&4?Fd:c,!0,!0)}a.Ec===Gd&&(c=a.G,d=Cd(c),a=d&2?a:kf(a,c,d,!0));return a}}
function kf(a,b,c,d){$e(a);return bf(a.constructor,lf(b,c,d))}
function lf(a,b,c){var d=c||b&2?Fd:Ed,e=!!(b&32);a=ef(a,b,function(f){return jf(f,e,d)});
Ad(a,32|(c?2:0));return a}
function mf(a){var b=a.G,c=Cd(b);return c&2?kf(a,b,c,!1):a}
;function nf(a,b){a=a.G;return of(a,Cd(a),b)}
function pf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function of(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(pf(a,b,e,c)&&yd!=null){var g;a=(g=qd)!=null?g:qd={};g=a[yd]||0;g>=4||(a[yd]=g+1,rd())}return d}return pf(a,b,e,c)}}
function qf(a,b,c){var d=a.G,e=Cd(d);Nd(e);rf(d,e,b,c);return a}
function rf(a,b,c,d){Jd(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Dd(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function sf(a){return tf(a,uf,11,!1)!==void 0}
function vf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function wf(a,b,c){var d=a.G,e=Cd(d);Nd(e);if(b==null)return rf(d,e,3),a;b=Qe(b);if(!Array.isArray(b))throw sd();var f=Bd(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Qd||void 0!==Pd);if(!(4&f)){f=21;h&&(b=ud(b),g=0,f=xf(f,e),f=yf(f,e,!0));for(var l=0;l<b.length;l++)b[l]=c(b[l])}k?(b=ud(b),g=0,f=xf(f,e),f=yf(f,e,!0)):h||Te(b,a);f!==g&&Dd(b,f);rf(d,e,3,b);return a}
function zf(a,b,c,d){a=a.G;var e=Cd(a);Nd(e);if(d==null){var f=Af(a);if(Bf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Af(a);var g=Bf(f,a,e,c);g!==b&&(g&&(e=rf(a,e,g)),f.set(c,b))}rf(a,e,b,d)}
function Af(a){if(vd){var b;return(b=a[zd])!=null?b:a[zd]=new Map}if(zd in a)return a[zd];b=new Map;Object.defineProperty(a,zd,{value:b});return b}
function Bf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];of(b,c,g)!=null&&(e!==0&&(c=rf(b,c,e)),e=g)}a.set(d,e);return e}
function tf(a,b,c,d){a=a.G;var e=Cd(a);d=of(a,e,c,d);b=Fe(d,b,e);b!==d&&b!=null&&rf(a,e,c,b);return b}
function Cf(a,b,c,d){b=tf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Cd(a);if(!(d&2)){var e=mf(b);e!==b&&(b=e,rf(a,d,c,b))}return b}
function lc(a,b,c){var d=void 0===Od?2:Gc?4:5;var e=Cd(a.G),f=e,g=!(2&e);e=a.G;var h=!!(2&f);d=h?1:d;g&&(g=!h);h=of(e,f,c);h=Array.isArray(h)?h:Ld;var k=Bd(h),l=h;Ye(l,a);d!==2&&d!==1||Xe(l,a);l=!!(4&k);if(!l){var m=k;m===0&&(m=xf(m,f));k=h;m|=1;var n=f,r=!!(2&m);r&&(n|=2);for(var t=!r,v=!0,x=0,y=0;x<k.length;x++){var F=Fe(k[x],b,n);if(F instanceof b){if(!r){var I=!!(Bd(F.G)&2);t&&(t=!I);v&&(v=I)}k[y++]=F}}y<x&&(k.length=y);m|=4;m=v?m|16:m&-17;m=t?m|8:m&-9;Dd(k,m);r&&Object.freeze(k);k=m}if(g&&!(8&
k||!h.length&&(d===1||d===4&&32&k))){vf(k)?(h=ud(h),k=xf(k,f),f=rf(e,f,c,h)):Xe(h,a);b=h;g=k;for(k=0;k<b.length;k++)m=b[k],n=mf(m),m!==n&&(b[k]=n);g|=8;g=b.length?g&-17:g|16;Dd(b,g);k=g}if(d===1||d===4&&32&k)vf(k)||(a=k,f=!!(32&k),k|=!h.length||16&k&&(!l||f)?2:2048,k!==a&&Dd(h,k),Object.freeze(h));else if(l=d!==5?!1:!!(32&k)||vf(k)||!!Ke(h),(d===2||l)&&vf(k)&&(h=ud(h),k=xf(k,f),k=yf(k,f,!1),Dd(h,k),f=rf(e,f,c,h)),vf(k)||(c=k,k=yf(k,f,!1),k!==c&&Dd(h,k)),l){var O=Ge(h);Te(h,a,!0)}else if(d===2){var V;
(V=Oe)==null||V.delete(h)}return O||h}
function Df(a,b,c,d){d!=null?Ee(d,b):d=void 0;return qf(a,c,d)}
function Ef(a,b,c,d){var e=a.G,f=Cd(e);Nd(f);if(d==null)return rf(e,f,c),a;d=Qe(d);if(!Array.isArray(d))throw sd();for(var g=Bd(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Qd||void 0!==Pd),n=!0,r=!0,t=0;t<d.length;t++){var v=d[t];Ee(v,b);k||(v=!!(Bd(v.G)&2),n&&(n=!v),r&&(r=v))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);m||l&&g!==h?(d=ud(d),h=0,g=xf(g,f),g=yf(g,f,!0)):l||Te(d,a);g!==h&&Dd(d,g);rf(e,f,c,d);return a}
function xf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function yf(a,b,c){32&b&&c||(a&=-33);return a}
function Ff(a){a=nf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):qe(a)?c==="string"?ve(a):b?we(a):ye(a):void 0;return b}
function Gf(a,b){return a!=null?a:b}
function Hf(a){var b=b===void 0?!1:b;a=nf(a,4);return Gf(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function nc(a,b,c){c=c===void 0?0:c;return Gf(te(nf(a,b)),c)}
function If(a,b){var c=c===void 0?"":c;a=nf(a,b);return Gf(a==null||typeof a==="string"?a:void 0,c)}
function Jf(a){var b=0;b=b===void 0?0:b;a=nf(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Gf(a,b)}
function Kf(a,b,c){return qf(a,b,De(c))}
function Lf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw sd("enum");c|=0}return qf(a,b,c)}
;function Mf(a){return a}
function Nf(a){return a}
function Of(a,b,c,d){return Pf(a,b,c,d,Qf,Rf)}
function Sf(a,b,c,d){return Pf(a,b,c,d,Tf,Uf)}
function Pf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Vf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var F=e(y,t)+f(n,r,v);F<l&&(a=1+y,l=F);n++;t--;v+=Vf(y);r=Math.max(r,y)}}b=e(0,0)+f(n,r,v);b<l&&(a=0,l=b);if(d){n=h;r=g;v=m;t=k;for(var I in d)d=+I,isNaN(d)||d>=
1024||(n--,t++,v-=I.length,g=e(d,t)+f(n,r,v),g<l&&(a=1+d,l=g))}return a}
function Uf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Tf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Rf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Qf(a){return 40+4*a}
function Vf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Wf,Xf;function K(a,b,c){this.G=J(a,b,c)}
p=K.prototype;p.toJSON=function(){return Yf(this)};
p.serialize=function(a){try{return Xf=!0,a&&(Wf=a===Nf||a!==Mf&&a!==Of&&a!==Sf?Nf:a),JSON.stringify(Yf(this),cf)}finally{a&&(Wf=void 0),Xf=!1}};
function Zf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Ad(b,32);return bf(a,b)}
p.clone=function(){var a=this.G;return kf(this,a,Cd(a),!1)};
p.Ec=Gd;p.toString=function(){try{return Xf=!0,Yf(this).toString()}finally{Xf=!1}};
function Yf(a){$e(a);var b;Xf?b=a.G:b=gf(a.G,hf,void 0,void 0,!1);var c=!Xf,d=Cd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Jd(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Wf&&!(d&512);var k,l=(k=Wf)!=null?k:Nf;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var r;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Kd(t)||Id(t)&&t.size===0||(f=m[l]=void 0,((f=r)!=null?f:r={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,
((l=r)!=null?l:r={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Kd(t)||Id(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=r)!=null?l:r={})[x]=t);f||(r=n);if(r)for(var y in r){n=r;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){r=d[a-1];if(!(r==null||Kd(r)||Id(r)&&r.size===0))break;var F=!0}if(d!==b||m||F){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(F||m||n)d.length=a;n&&d.push(n)}F=
d}else F=b;return F}
;function $f(a){return function(b){return Zf(a,b)}}
;function ag(a){this.G=J(a)}
z(ag,K);function bg(a,b){return wf(a,b,re)}
;function cg(a){this.G=J(a)}
z(cg,K);var dg=[1,2,3];function eg(a){this.G=J(a)}
z(eg,K);var fg=[1,2,3];function gg(a){this.G=J(a)}
z(gg,K);function hg(a){this.G=J(a)}
z(hg,K);function ig(a){this.G=J(a)}
z(ig,K);function jg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function kg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],F=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=y^v&(x^y);var O=1518500249}else I=v^x^y,O=1859775393;else t<60?(I=v&x|y&(v|x),O=2400959708):(I=v^x^y,O=3395469782);I=((n<<5|n>>>27)&4294967295)+I+F+O+r[t]&4294967295;F=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+F&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var v=24;v>=0;v-=8)n[r++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ud:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function lg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,mg(jg(d),a,c||null)].join(" "):null}
function mg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Kb(d,function(h){e.push(h)}),ng(e.join(" "));
var f=[],g=[];Kb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Kb(d,function(h){e.push(h)});
a=ng(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function ng(a){var b=kg();b.update(a);return b.Ud().toLowerCase()}
;var og={};function pg(a){this.h=a||{cookie:""}}
p=pg.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Pe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ab(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Jb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ab(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var qg=new pg(typeof document=="undefined"?null:document);function rg(a){return!!og.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function sg(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;rg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new pg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");rg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function tg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new pg(document)).get(b));return a?lg(a,c,d):null}
function ug(a,b){b=b===void 0?!1:b;var c=jg(String(C.location.href)),d=[];if(sg(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new pg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?lg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&rg(b)&&((b=tg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=tg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function vg(){}
vg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
vg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function wg(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function xg(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?xg.apply(null,d):wg(d)}}
;function L(){this.ea=this.ea;this.D=this.D}
L.prototype.ea=!1;L.prototype.dispose=function(){this.ea||(this.ea=!0,this.aa())};
L.prototype[Symbol.dispose]=function(){this.dispose()};
function yg(a,b){a.addOnDisposeCallback(Wa(wg,b))}
L.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
L.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function zg(a){this.G=J(a)}
z(zg,K);function Ag(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Xa()};
this.i=this.h()}
Ag.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ag.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Ag.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ag.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Bg(a){this.G=J(a)}
z(Bg,K);function Cg(a){this.G=J(a)}
z(Cg,K);function Dg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Dg.prototype;p.clone=function(){return new Dg(this.x,this.y)};
p.equals=function(a){return a instanceof Dg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Eg(a,b){this.width=a;this.height=b}
p=Eg.prototype;p.clone=function(){return new Eg(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Fg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Gg(a){var b=Hg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ig(a){for(var b in a)return!1;return!0}
function Jg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Kg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Lg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Mg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ng(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ng(a[c]);return b}
var Og="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Og.length;f++)c=Og[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Qg(a,b){this.h=a===Rg&&b||""}
Qg.prototype.toString=function(){return this.h};
var Rg={};new Qg(Rg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Sg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Tg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Ug(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Vg=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Wg(a){this.h=this.i=this.j=a}
Wg.prototype.reset=function(){this.h=this.i=this.j};
Wg.prototype.getValue=function(){return this.i};function Xg(a){this.G=J(a)}
z(Xg,K);Xg.prototype.ac=function(){return Jf(this)};function Yg(a){this.G=J(a)}
z(Yg,K);function ah(a){this.G=J(a)}
z(ah,K);function bh(a,b){Ef(a,Yg,1,b)}
;function uf(a){this.G=J(a)}
z(uf,K);var ch=["platform","platformVersion","architecture","model","uaFullVersion"],dh=new ah,eh=null;function fh(a,b){b=b===void 0?ch:b;if(!eh){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Yg;f=Kf(f,1,e.brand);return Kf(f,2,e.version)});
bh(qf(dh,2,oe(a.mobile)),c);eh=a.getHighEntropyValues(b)}var d=new Set(b);return eh.then(function(e){var f=dh.clone();d.has("platform")&&Kf(f,3,e.platform);d.has("platformVersion")&&Kf(f,4,e.platformVersion);d.has("architecture")&&Kf(f,5,e.architecture);d.has("model")&&Kf(f,6,e.model);d.has("uaFullVersion")&&Kf(f,7,e.uaFullVersion);return f}).catch(function(){return dh.clone()})}
;function gh(a){this.G=J(a)}
z(gh,K);function hh(a){this.G=J(a,4)}
z(hh,K);function ih(a){this.G=J(a,36)}
z(ih,K);function jh(a){this.G=J(a,19)}
z(jh,K);jh.prototype.Mb=function(a){return Lf(this,2,a)};function kh(a){this.G=J(a,8)}
z(kh,K);var lh=$f(kh);function mh(a){this.G=J(a)}
z(mh,K);var nh=new function(){this.ctor=mh;this.isRepeated=0;this.h=Cf;this.defaultValue=void 0};function oh(a){L.call(this);var b=this;this.componentId="";this.j=[];this.ga="";this.pageId=null;this.ia=this.X=-1;this.B=this.experimentIds=null;this.U=this.u=0;this.sa=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new ph(a.logSource,a.Za);this.network=a.network;this.ub=a.ub||null;this.bufferSize=1E3;this.H=a.sf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.logger=null;this.withCredentials=!a.Wc;this.Za=a.Za||!1;this.R=typeof URLSearchParams!=="undefined"&&!!(new URL(qh())).searchParams&&!!(new URL(qh())).searchParams.set;var c=Lf(new gh,1,1);rh(this.i,c);this.o=new Wg(1E4);a=sh(this,a.Rc);this.h=new Ag(this.o.getValue(),a);this.Z=new Ag(6E5,a);this.Db||this.Z.start();this.Za||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.vc()}),document.addEventListener("pagehide",this.vc.bind(this)))}
z(oh,L);function sh(a,b){return a.R?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=oh.prototype;p.aa=function(){this.vc();this.h.stop();this.Z.stop();L.prototype.aa.call(this)};
p.log=function(a){if(this.R){a=a.clone();var b=this.sa++;a=qf(a,21,ze(b));this.componentId&&Kf(a,26,this.componentId);if(Ff(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";qf(b,1,ze(c))}Be(nf(a,15))==null&&qf(a,15,ze((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Df(b,zg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ia>d&&this.X<d)b&&b("throttled");else{this.network&&(typeof this.network.ac==="function"?th(this.i,this.network.ac()):th(this.i,0));var e=uh(this.i,this.j,this.u,this.U,this.ub);d={};var f=this.Fb();f&&(d.Authorization=f);this.H||(this.H=qh());try{var g=(new URL(this.H)).toString()}catch(t){g=(new URL(this.H,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ga===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g.toString(),body:h,Md:1,lc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},m=function(t){c.o.reset();
c.h.setInterval(c.o.getValue());if(t){var v=null;try{var x=JSON.stringify(JSON.parse(t.replace(")]}'\n","")));v=lh(x)}catch(y){}v&&(t=Number,x="-1",x=x===void 0?"0":x,x=Gf(Ff(v),x),t=t(x),t>0&&(c.X=Date.now(),c.ia=c.X+t),v=nh.ctor?nh.h(v,nh.ctor,175237375,!0):nh.h(v,175237375,null,!0),v=v===null?void 0:v)&&(v=nc(v,1,-1),v!==-1&&(c.o=new Wg(v<1?1:v),c.h.setInterval(c.o.getValue())))}a&&a();c.U=0},n=function(t,v){var x=lc(e,ih,3);
var y=Be(nf(e,14));y=y==null?void 0:y;var F=c.o;F.h=Math.min(3E5,F.h*2);F.i=Math.min(3E5,F.h+Math.round(.1*(Math.random()-.5)*2*F.h));c.h.setInterval(c.o.getValue());t===401&&f&&(c.ga=f);y&&(c.u+=y);v===void 0&&(v=c.isRetryable(t));v&&(c.j=x.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",t);++c.U},r=function(){c.network&&c.network.send(l,m,n)};
k?k.then(function(t){l.lc["Content-Encoding"]="gzip";l.lc["Content-Type"]="application/binary";l.body=t;l.Md=2;r()},function(){r()}):r()}}}};
p.vc=function(){vh(this.i,!0);this.flush();vh(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function qh(){return"https://play.google.com/log?format=json&hasfast=true"}
function ph(a,b){this.Za=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new jh;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));rh(this,new gh)}
ph.prototype.Mb=function(a){this.h.Mb(a);return this};
function rh(a,b){Df(a.h,gh,1,b);Jf(b)||Lf(b,1,1);a.Za||(b=wh(a),If(b,5)||Kf(b,5,a.locale));a.i&&(b=wh(a),Cf(b,ah,9)||Df(b,ah,9,a.i))}
function th(a,b){sf(xh(a))&&(a=yh(a),Lf(a,1,b))}
function vh(a,b){sf(xh(a))&&(a=yh(a),qf(a,2,oe(b)))}
function xh(a){return Cf(a.h,gh,1)}
function zh(a){var b=b===void 0?ch:b;var c=a.Za?void 0:window;c?fh(c,b).then(function(d){a.i=d;d=wh(a);Df(d,ah,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function wh(a){a=xh(a);var b=Cf(a,uf,11);b||(b=new uf,Df(a,uf,11,b));return b}
function yh(a){a=wh(a);var b=Cf(a,Xg,10);b||(b=new Xg,qf(b,2,oe(!1)),Df(a,Xg,10,b));return b}
function uh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(sf(xh(a))){var h=yh(a);qf(h,3,se(d))}sf(xh(a))&&(d=yh(a),qf(d,4,se(f)));sf(xh(a))&&(f=yh(a),qf(f,5,se(g)));a=a.h.clone();g=Date.now().toString();a=qf(a,4,ze(g));b=b.slice();b=Ef(a,ih,3,b);e&&(a=new Bg,e=qf(a,13,se(e)),a=new Cg,e=Df(a,Bg,2,e),a=new hh,e=Df(a,Cg,1,e),e=Lf(e,2,9),Df(b,hh,18,e));c&&qf(b,14,ze(c));return b}
;function Ah(){this.Hd=typeof AbortController!=="undefined"}
Ah.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Hd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.lc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.F(3);break}if((l=b)==null){v.F(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.R=[v.j];v.o=0;v.D=0;clearTimeout(f);Aa(v);break;case 2:m=za(v);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}v.F(3)}})};
Ah.prototype.ac=function(){return 4};function Bh(a,b){L.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.h=this.ub=null}
z(Bh,L);function Ch(a,b){a.i=b;return a}
function Dh(a,b){a.network=b;return a}
function Eh(a,b){a.h=b}
Bh.prototype.Wc=function(){this.u=!0;return this};
function Fh(a){a.network||(a.network=new Ah);var b=new oh({logSource:a.logSource,Fb:a.Fb?a.Fb:ug,sessionIndex:a.sessionIndex,sf:a.j,Za:a.o,Db:!1,Wc:a.u,Rc:a.Rc,network:a.network});yg(a,b);if(a.i){var c=a.i,d=wh(b.i);Kf(d,7,c)}Math.random()<.01&&(b.B=new vg);a.componentId&&(b.componentId=a.componentId);a.ub&&(b.ub=a.ub);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new zg),c=b.experimentIds,d=d.serialize(),Kf(c,4,d)):b.experimentIds&&qf(b.experimentIds,4));zh(b.i);
a.network.Mb&&a.network.Mb(a.logSource);a.network.af&&a.network.af(b);return b}
;function Gh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;L.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Bh(a,"0"),a.componentId=b,yg(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&Ch(a,e),g&&Dh(a,g),b=Fh(a));this.h=b}
z(Gh,L);
Gh.prototype.flush=function(a){var b=a||[];if(b.length){a=new ig;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new hg;f=Kf(f,1,e.i);var g=Hh(e);f=wf(f,g,Ce);g=[];var h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.wc(l)||[],r=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new eg;switch(m){case 3:x=Number(x);Number.isFinite(x)&&zf(v,1,fg,ze(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);zf(v,2,fg,x)}r.push(v)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new gg;r=Df(t,eg,2,r);t=l;v=[];x=Ih(e);for(var y=0;y<x.length;y++){var F=x[y],I=t[y],O=new cg;switch(F){case 3:zf(O,1,dg,De(String(I)));break;case 2:F=Number(I);Number.isFinite(F)&&zf(O,2,dg,se(F));break;case 1:zf(O,3,dg,oe(I==="true"))}v.push(O)}Ef(r,cg,1,v);g.push(r)}}Ef(f,gg,4,g);c.push(f);e.clear()}Ef(a,hg,1,c);b=this.h;b.R&&(a instanceof ih?b.log(a):(c=new ih,a=a.serialize(),a=Kf(c,8,a),b.log(a)));this.h.flush()}};function Jh(a){this.h=a}
;function Kh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Ih(a){return a.fields.map(function(b){return b.fieldType})}
function Hh(a){return a.fields.map(function(b){return b.fieldName})}
p=Kh.prototype;p.Id=function(a){var b=B.apply(1,arguments),c=this.wc(b);c?c.push(new Jh(a)):this.td(a,b)};
p.td=function(a){var b=this.Qc(B.apply(1,arguments));this.h.set(b,[new Jh(a)])};
p.wc=function(){var a=this.Qc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.ee=function(){var a=this.wc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Qc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Lh(a,b){Kh.call(this,a,3,b)}
z(Lh,Kh);Lh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ee(b);d&&(c=d.h);this.td(c+a,b)};function Mh(a,b){Kh.call(this,a,2,b)}
z(Mh,Kh);Mh.prototype.record=function(a){this.Id(a,B.apply(1,arguments))};function Nh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Nh.prototype.stopPropagation=function(){this.j=!0};
Nh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Oh(a,b){Nh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Oh,Nh);
Oh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Oh.Aa.preventDefault.call(this)};
Oh.prototype.stopPropagation=function(){Oh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Oh.prototype.preventDefault=function(){Oh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ph="closure_listenable_"+(Math.random()*1E6|0);var Qh=0;function Rh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++Qh;this.Lb=this.Vb=!1}
function Sh(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function Th(a){this.src=a;this.listeners={};this.h=0}
Th.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Uh(a,b,d,e);g>-1?(b=a[g],c||(b.Vb=!1)):(b=new Rh(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
Th.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Uh(e,b,c,d);return b>-1?(Sh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Vh(a,b){var c=b.type;c in a.listeners&&Pb(a.listeners[c],b)&&(Sh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Uh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var Wh="closure_lm_"+(Math.random()*1E6|0),Xh={},Yh=0;function Zh(a,b,c,d,e){if(d&&d.once)$h(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Zh(a,b[f],c,d,e);else c=ai(c),a&&a[Ph]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):bi(a,b,c,!1,d,e)}
function bi(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=ci(a);h||(a[Wh]=h=new Th(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=di();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Vg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ei(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Yh++}}
function di(){function a(c){return b.call(a.src,a.listener,c)}
var b=fi;return a}
function $h(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$h(a,b[f],c,d,e);else c=ai(c),a&&a[Ph]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):bi(a,b,c,!0,d,e)}
function gi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)gi(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=ai(c),a&&a[Ph])?a.h.remove(String(b),c,d,e):a&&(a=ci(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Uh(b,c,d,e)),(c=a>-1?b[a]:null)&&hi(c))}
function hi(a){if(typeof a!=="number"&&a&&!a.Lb){var b=a.src;if(b&&b[Ph])Vh(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ei(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Yh--;(c=ci(b))?(Vh(c,a),c.h==0&&(c.src=null,b[Wh]=null)):Sh(a)}}}
function ei(a){return a in Xh?Xh[a]:Xh[a]="on"+a}
function fi(a,b){if(a.Lb)a=!0;else{b=new Oh(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&hi(a);a=c.call(d,b)}return a}
function ci(a){a=a[Wh];return a instanceof Th?a:null}
var ii="__closure_events_fn_"+(Math.random()*1E9>>>0);function ai(a){if(typeof a==="function")return a;a[ii]||(a[ii]=function(b){return a.handleEvent(b)});
return a[ii]}
;function ji(){L.call(this);this.h=new Th(this);this.sa=this;this.Z=null}
Ya(ji,L);ji.prototype[Ph]=!0;p=ji.prototype;p.addEventListener=function(a,b,c,d){Zh(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){gi(this,a,b,c,d)};
function ki(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.sa;c=b.type||b;typeof b==="string"?b=new Nh(b,a):b instanceof Nh?b.target=b.target||a:(e=b,b=new Nh(c,a),Pg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=li(g,c,!0,b)&&e}b.j||(g=b.h=a,e=li(g,c,!0,b)&&e,b.j||(e=li(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=li(g,c,!1,b)&&e}
p.aa=function(){ji.Aa.aa.call(this);this.removeAllListeners();this.Z=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Sh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function li(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&Vh(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function mi(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
mi.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ni(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function oi(){this.i=this.h=null}
oi.prototype.add=function(a,b){var c=pi.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
oi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var pi=new mi(function(){return new qi},function(a){return a.reset()});
function qi(){this.next=this.scope=this.h=null}
qi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
qi.prototype.reset=function(){this.next=this.scope=this.h=null};var ri,si=!1,ti=new oi;function ui(a,b){ri||vi();si||(ri(),si=!0);ti.add(a,b)}
function vi(){var a=Promise.resolve(void 0);ri=function(){a.then(wi)}}
function wi(){for(var a;a=ti.remove();){try{a.h.call(a.scope)}catch(b){Ec(b)}ni(pi,a)}si=!1}
;function xi(){}
function yi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function zi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=xi)try{var b=this;a.call(void 0,function(c){Ai(b,2,c)},function(c){Ai(b,3,c)})}catch(c){Ai(this,3,c)}}
function Bi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Bi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ci=new mi(function(){return new Bi},function(a){a.reset()});
function Di(a,b,c){var d=Ci.get();d.i=a;d.h=b;d.context=c;return d}
function Ei(a){return new zi(function(b,c){c(a)})}
zi.prototype.then=function(a,b,c){return Fi(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
zi.prototype.$goog_Thenable=!0;p=zi.prototype;p.oc=function(a,b){return Fi(this,null,a,b)};
p.catch=zi.prototype.oc;p.cancel=function(a){if(this.h==0){var b=new Gi(a);ui(function(){Hi(this,b)},this)}};
function Hi(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?Hi(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Ii(c),Ji(c,e,3,b)))}a.j=null}else Ai(a,3,b)}
function Ki(a,b){a.i||a.h!=2&&a.h!=3||Li(a);a.o?a.o.next=b:a.i=b;a.o=b}
function Fi(a,b,c,d){var e=Di(null,null,null);e.child=new zi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Gi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Ki(a,e);return e.child}
p.qf=function(a){this.h=0;Ai(this,2,a)};
p.rf=function(a){this.h=0;Ai(this,3,a)};
function Ai(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.qf,f=a.rf;if(d instanceof zi){Ki(d,Di(e||xi,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){Mi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,Li(a),b!=3||c instanceof Gi||Ni(a,c))}}
function Mi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Li(a){a.u||(a.u=!0,ui(a.Zd,a))}
function Ii(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Zd=function(){for(var a;a=Ii(this);)Ji(this,a,this.h,this.B);this.u=!1};
function Ji(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Oi(b,c,d);else try{b.j?b.i.call(b.context):Oi(b,c,d)}catch(e){Pi.call(null,e)}ni(Ci,b)}
function Oi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ni(a,b){a.D=!0;ui(function(){a.D&&Pi.call(null,b)})}
var Pi=Ec;function Gi(a){Za.call(this,a)}
Ya(Gi,Za);Gi.prototype.name="cancel";function Qi(a,b){ji.call(this);this.j=a||1;this.i=b||C;this.o=Va(this.mf,this);this.u=Xa()}
Ya(Qi,ji);p=Qi.prototype;p.enabled=!1;p.Da=null;p.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
p.mf=function(){if(this.enabled){var a=Xa()-this.u;a>0&&a<this.j*.8?this.Da=this.i.setTimeout(this.o,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),ki(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.o,this.j),this.u=Xa())};
p.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
p.aa=function(){Qi.Aa.aa.call(this);this.stop();delete this.i};function Ri(a){L.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Qi(this.flushInterval);this.h.listen("tick",this.xb,!1,this);yg(this,this.h)}
z(Ri,L);p=Ri.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Si(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.xb()}
p.xb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Ti(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Na=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Lh(a,b))};
p.jb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Mh(a,b))};
function Ui(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.wb=function(a){this.Gd(a,1,B.apply(1,arguments))};
p.Gd=function(a,b){var c=B.apply(2,arguments),d=Ui(this,a);d&&d instanceof Lh&&(d.j(b,c),Si(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=Ui(this,a);d&&d instanceof Mh&&(d.record(b,c),Si(this))};
function Ti(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Vi(){}
Vi.prototype.serialize=function(a){var b=[];Wi(this,a,b);return b.join("")};
function Wi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Wi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Xi(d,c),c.push(":"),Wi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Yi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Zi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Xi(a,b){b.push('"',a.replace(Zi,function(c){var d=Yi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Yi[c]=d);return d}),'"')}
;function $i(){ji.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.X="";this.j=this.U=this.B=this.R=!1;this.H=0;this.u=null;this.ia="";this.ga=!1}
Ya($i,ji);var aj=/^https?$/i,bj=["POST","PUT"],cj=[];function dj(a,b,c,d,e,f,g){var h=new $i;cj.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Qd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
p=$i.prototype;p.Qd=function(){this.dispose();Pb(cj,this)};
p.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.R=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=Va(this.md,this);try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();ej(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Jb(bj,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ia&&(this.K.responseType=this.ia);"withCredentials"in this.K&&this.K.withCredentials!==this.ga&&(this.K.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.H>0&&(this.getStatus(),this.u=setTimeout(this.pf.bind(this),this.H)),
this.getStatus(),this.B=!0,this.K.send(a),this.B=!1}catch(g){this.getStatus(),ej(this,g)}};
p.pf=function(){typeof Ja!="undefined"&&this.K&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),ki(this,"timeout"),this.abort(8))};
function ej(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;fj(a);gj(a)}
function fj(a){a.R||(a.R=!0,ki(a,"complete"),ki(a,"error"))}
p.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,ki(this,"complete"),ki(this,"abort"),gj(this))};
p.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),gj(this,!0));$i.Aa.aa.call(this)};
p.md=function(){this.ea||(this.U||this.B||this.j?hj(this):this.De())};
p.De=function(){hj(this)};
function hj(a){if(a.i&&typeof Ja!="undefined")if(a.B&&(a.K?a.K.readyState:0)==4)setTimeout(a.md.bind(a),0);else if(ki(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ij(a))ki(a,"complete"),ki(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";fj(a)}}finally{gj(a)}}}
function gj(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||ki(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.K};
p.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function ij(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=Zb(1,String(a.X)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!aj.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function jj(){}
jj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
dj(a.url,function(d){d=d.target;if(ij(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.lc,a.timeoutMillis,a.withCredentials)};
jj.prototype.ac=function(){return 1};var kj={wa:"_",pc:"",Yc:[],hd:0};function lj(a,b){this.logger=a;this.event=b;this.startTime=mj()}
lj.prototype.done=function(){this.logger.Ib(this.event,mj()-this.startTime)};
function nj(){L.apply(this,arguments)}
z(nj,L);function oj(a,b){var c=mj();b=b();a.Ib("n",mj()-c);return b}
function pj(){nj.apply(this,arguments)}
z(pj,nj);p=pj.prototype;p.jd=function(){};
p.Ac=function(){};
p.Bc=function(){};
p.Ib=function(){};
p.Ea=function(){};
p.Qb=function(){};
p.yd=function(){};
function qj(a){return{le:new qc(a),oe:new sc(a),ne:new rc(a),gf:new vc(a),hf:new wc(a),jf:new xc(a),Nd:new tc(a),Od:new uc(a),errorCount:new Ac(a),Yd:new zc(a),Lh:new yc(a),Nh:new Bc(a),lh:new Cc(a),Mh:new Dc(a)}}
function rj(a){var b=Dh(Ch(new Bh(1828,"0"),"33"),new jj);(a==null?0:a.length)&&Eh(b,bg(new ag,a));a=new Gh(1828,"","",!1,"",Fh(b));yg(a,b);var c=new Ri(a);c.addOnDisposeCallback(function(){return void c.xb()});
yg(c,a);c.o=1E5;c.flushInterval=3E4;c.h.setInterval(3E4);return c}
function sj(a,b){L.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;b&&this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
z(sj,L);function tj(a){if(a.timer===void 0){var b=mj(),c=a.h+a.i-b;c>0?a.timer=setTimeout(function(){a.timer=void 0;tj(a)},c):(a.h=b,a.callback())}}
function uj(a,b,c){nj.call(this);this.metrics=a;this.wa=b;this.pc=c;this.i=new Map;this.h=new Map;this.i.set("h",1);this.i.set("u",2);this.i.set("k",3);this.h.set(25,1);this.h.set(26,2);this.h.set(27,3);this.h.set(28,4)}
z(uj,nj);p=uj.prototype;p.jd=function(){this.metrics.le.h.wb("/client_streamz/bg/fic",this.wa)};
p.Ac=function(){this.metrics.gf.h.wb("/client_streamz/bg/fsc",this.wa)};
p.Bc=function(a){this.metrics.jf.record(a,this.wa)};
p.Ib=function(a,b){if(a==="t")this.metrics.oe.record(b,this.wa);else if(a==="n")this.metrics.hf.record(b,this.wa);else if(a==="h"||a==="u"||a==="k"){if(a=this.i.get(a))this.metrics.Nd.h.wb("/client_streamz/bg/fcc",a,this.wa),this.metrics.Od.record(b,a,this.wa)}else this.metrics.Yd.record(b,a,this.pc,this.wa)};
p.Ea=function(a){var b=this.h.get(a);b?this.metrics.ne.h.wb("/client_streamz/bg/fiec",this.wa,b):this.metrics.errorCount.h.wb("/client_streamz/bg/cec",a,this.pc,this.wa)};
function vj(a,b){b=b===void 0?[]:b;a=Object.assign({},kj,a);b=rj(a.Yc.concat(b));uj.call(this,qj(b),a.wa,a.pc);var c=this;this.options=a;this.service=b;this.j=new sj(function(){return void c.service.xb()},a.hd);
this.addOnDisposeCallback(function(){c.j.dispose();c.service.dispose()})}
z(vj,uj);vj.prototype.yd=function(a){var b=this;this.j.dispose();this.service.dispose();this.service=rj(this.options.Yc.concat(a));this.j=new sj(function(){return void b.service.xb()},this.options.hd);
this.metrics=qj(this.service)};
vj.prototype.Qb=function(){tj(this.j)};
function mj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mc(a){this.G=J(a)}
z(mc,K);function wj(a){this.G=J(a)}
z(wj,K);var xj=$f(wj);function yj(a){this.G=J(a,0,"bfkj")}
z(yj,K);var zj=function(a){return Rd(function(b){return b instanceof a&&!(Bd(b.G)&2)})}(yj);function Aj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bj(a){function b(y,F,I,O){Promise.resolve().then(function(){m.done();d.logger.Qb();l.resolve({Kd:y,df:F,Ah:I,nh:O})})}
function c(y,F,I,O){if(!d.logger.ea){var V="k";F?V="h":I&&(V="u");V!=="k"?O!==0&&d.logger.Ib(V,y):d.j<=0?(d.logger.Ib(V,y),d.j=Math.floor(Math.random()*200)):d.j--}}
L.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&zj(a.challenge)){var e=If(a.challenge,4);var f=If(a.challenge,5);If(a.challenge,7).length?this.h=xj(If(a.challenge,7)):this.h=Cf(a.challenge,wj,6)}else e=a.program,f=a.he;var g=new L;this.addOnDisposeCallback(function(){var y,F,I;return A(function(O){if(O.h==1)return O.yield(d.o,2);if(O.h!=3)return y=O.i,F=y.df,O.yield(Promise.all(d.i),3);d.i=[];(I=F)==null||I();g.dispose();O.h=0})});
if(a.Je!==!1){var h,k=((h=this.h)==null?0:Hf(h))?kc(this.h):[];a.Rd?(this.logger=a.Rd,k.length&&this.logger.yd(k)):yg(g,this.logger=new vj(a.Be||{},k))}else yg(g,this.logger=new pj);var l=new Aj;this.o=l.promise;var m=new lj(this.logger,"t");this.logger.jd();if(!C[f])throw this.logger.Ea(25),Error("EGOU");if(!C[f].a)throw this.logger.Ea(26),Error("ELIU");try{var n=C[f].a;f=[];h=[];var r;if((r=this.h)==null?0:Hf(r)){var t=kc(this.h);for(r=0;r<t.length;r++)f.push(t[r]),h.push(1);var v=oc(this.h);for(t=
0;t<v.length;t++)f.push(v[t]),h.push(2)}var x;this.u=w(n(e,b,!0,a.Kh,c,[f,h],(x=this.h)==null?void 0:If(x,5))).next().value;this.cf=l.promise.then(function(){})}catch(y){throw this.logger.Ea(28),y;
}}
z(Bj,L);Bj.prototype.snapshot=function(a){var b=this;if(this.ea)throw Error("Already disposed");var c=new Aj;this.i.push(c.promise);this.logger.Ac();return this.o.then(function(d){var e=d.Kd;return new Promise(function(f){var g=new lj(b.logger,"n");e(function(h){g.done();b.logger.Bc(h.length);b.logger.Qb();f(h)},[a.Vc,
a.ef,a.uf,a.ff])})}).finally(function(){return void c.resolve()})};
Bj.prototype.vd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Ac();var c=oj(this.logger,function(){return b.u([a.Vc,a.ef,a.uf,a.ff])});
this.logger.Bc(c.length);this.logger.Qb();return c};
Bj.prototype.getLogger=function(){return this.logger};var Cj=window;function Dj(a){var b=Ej;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Fj(){var a=[];Dj(function(b){a.push(b)});
return a}
var Ej={vf:"allow-forms",wf:"allow-modals",xf:"allow-orientation-lock",yf:"allow-pointer-lock",zf:"allow-popups",Af:"allow-popups-to-escape-sandbox",Bf:"allow-presentation",Cf:"allow-same-origin",Df:"allow-scripts",Ef:"allow-top-navigation",Ff:"allow-top-navigation-by-user-activation"},Gj=yi(function(){return Fj()});
function Hj(){var a=Ij(),b={};Kb(Gj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ij(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Jj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Kj=(new Date).getTime();function Lj(a){ji.call(this);var b=this;this.B=this.j=0;this.Ca=a!=null?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Mj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Nj(this)}
z(Lj,ji);function Oj(){var a=Pj;Lj.h||(Lj.h=new Lj(a));return Lj.h}
Lj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.pa(this.B);delete Lj.h};
Lj.prototype.va=function(){return this.i};
function Nj(a){a.B=a.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Mj(a),3):c.yield(Mj(a),3);Nj(a);c.h=0})},3E4)}
function Mj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ca.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ca.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ki(a,"networkstatus-online"):ki(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.F(3)}})})}
;function Qj(){this.data=[];this.h=-1}
Qj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Qj.prototype.get=function(a){return!!this.data[a]};
function Rj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Sj(){this.blockSize=-1}
;function Tj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Ya(Tj,Sj);Tj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Uj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Tj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Uj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Uj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Uj(this,e);f=0;break}}this.i=f;this.o+=b}};
Tj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Uj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Vj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Wj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Xj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Vj(a).match(/\S+/g)||[],b=Jb(a,b)>=0);return b}
function Yj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Xj(a,"inverted-hdpi")&&Wj(a,Array.prototype.filter.call(a.classList?a.classList:Vj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Zj(){}
Zj.prototype.next=function(){return ak};
var ak={done:!0,value:void 0};Zj.prototype.ib=function(){return this};function bk(a){if(a instanceof ck||a instanceof dk||a instanceof ek)return a;if(typeof a.next=="function")return new ck(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new ck(function(){return a[Symbol.iterator]()});
if(typeof a.ib=="function")return new ck(function(){return a.ib()});
throw Error("Not an iterator or iterable.");}
function ck(a){this.h=a}
ck.prototype.ib=function(){return new dk(this.h())};
ck.prototype[Symbol.iterator]=function(){return new ek(this.h())};
ck.prototype.i=function(){return new ek(this.h())};
function dk(a){this.h=a}
z(dk,Zj);dk.prototype.next=function(){return this.h.next()};
dk.prototype[Symbol.iterator]=function(){return new ek(this.h)};
dk.prototype.i=function(){return new ek(this.h)};
function ek(a){ck.call(this,function(){return a});
this.j=a}
z(ek,ck);ek.prototype.next=function(){return this.j.next()};function M(a){L.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
Ya(M,L);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Pb(a)}return!1};
p.Pb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Pb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.hb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],fk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Pb(c)}}return f!=0}return!1};
function fk(a,b,c){ui(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Pb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.aa=function(){M.Aa.aa.call(this);this.clear();this.j.length=0};function gk(a){this.h=a}
gk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Vi).serialize(b))};
gk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
gk.prototype.remove=function(a){this.h.remove(a)};function hk(a){this.h=a}
Ya(hk,gk);function ik(a){this.data=a}
function jk(a){return a===void 0||a instanceof ik?a:new ik(a)}
hk.prototype.set=function(a,b){hk.Aa.set.call(this,a,jk(b))};
hk.prototype.i=function(a){a=hk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
hk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function kk(a){this.h=a}
Ya(kk,hk);kk.prototype.set=function(a,b,c){if(b=jk(b)){if(c){if(c<Xa()){kk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}kk.Aa.set.call(this,a,b)};
kk.prototype.i=function(a){var b=kk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())kk.prototype.remove.call(this,a);else return b}};function lk(){}
;function mk(){}
Ya(mk,lk);mk.prototype[Symbol.iterator]=function(){return bk(this.ib(!0)).i()};
mk.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function nk(a){this.h=a;this.i=null}
Ya(nk,mk);p=nk.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){ok(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){ok(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){ok(this);this.h.removeItem(a)};
p.ib=function(a){ok(this);var b=0,c=this.h,d=new Zj;d.next=function(){if(b>=c.length)return ak;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){ok(this);this.h.clear()};
p.key=function(a){ok(this);return this.h.key(a)};
function ok(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Ec(Error("Storage mechanism: Storage unavailable"))}
;function pk(){var a=null;try{a=C.localStorage||null}catch(b){}nk.call(this,a)}
Ya(pk,nk);function qk(a,b){this.i=a;this.h=b+"::"}
Ya(qk,mk);qk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
qk.prototype.get=function(a){return this.i.get(this.h+a)};
qk.prototype.remove=function(a){this.i.remove(this.h+a)};
qk.prototype.ib=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Zj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},rk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Mc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var sk={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Zc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},tk={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Zc:function(a){return[].concat.apply([],a)}};
N.bf=function(){rk?(N.gb=Uint8Array,N.Ga=Uint16Array,N.Fd=Int32Array,N.assign(N,sk)):(N.gb=Array,N.Ga=Array,N.Fd=Array,N.assign(N,tk))};
N.bf();var uk=!0;try{new Uint8Array(1)}catch(a){uk=!1}
function vk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.gb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var wk={};wk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var xk={},yk,zk=[],Ak=0;Ak<256;Ak++){yk=Ak;for(var Bk=0;Bk<8;Bk++)yk=yk&1?3988292384^yk>>>1:yk>>>1;zk[Ak]=yk}xk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^zk[(a^b[d])&255];return a^-1};var Ck={};Ck={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Dk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ek=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Gk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Hk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ik=Array(576);Dk(Ik);var Jk=Array(60);Dk(Jk);var Kk=Array(512);Dk(Kk);var Lk=Array(256);Dk(Lk);var Mk=Array(29);Dk(Mk);var Nk=Array(30);Dk(Nk);function Ok(a,b,c,d,e){this.wd=a;this.ce=b;this.be=c;this.Vd=d;this.Ae=e;this.dd=a&&a.length}
var Pk,Qk,Rk;function Sk(a,b){this.Xc=a;this.rb=0;this.Ta=b}
function Tk(a,b){a.Y[a.pending++]=b&255;a.Y[a.pending++]=b>>>8&255}
function Uk(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Tk(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Vk(a,b,c){Uk(a,c[b*2],c[b*2+1])}
function Wk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Xk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Wk(d[e]++,e))}
function Yk(a){var b;for(b=0;b<286;b++)a.qa[b*2]=0;for(b=0;b<30;b++)a.Xa[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.qa[512]=1;a.Ma=a.vb=0;a.ya=a.matches=0}
function Zk(a){a.ha>8?Tk(a,a.na):a.ha>0&&(a.Y[a.pending++]=a.na);a.na=0;a.ha=0}
function $k(a,b,c){Zk(a);Tk(a,c);Tk(a,~c);N.kb(a.Y,a.window,b,c,a.pending);a.pending+=c}
function al(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function bl(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.Ka;){e<a.Ka&&al(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(al(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function cl(a,b,c){var d=0;if(a.ya!==0){do{var e=a.Y[a.Cb+d*2]<<8|a.Y[a.Cb+d*2+1];var f=a.Y[a.zc+d];d++;if(e===0)Vk(a,f,b);else{var g=Lk[f];Vk(a,g+256+1,b);var h=Ek[g];h!==0&&(f-=Mk[g],Uk(a,f,h));e--;g=e<256?Kk[e]:Kk[256+(e>>>7)];Vk(a,g,c);h=Fk[g];h!==0&&(e-=Nk[g],Uk(a,e,h))}}while(d<a.ya)}Vk(a,256,b)}
function dl(a,b){var c=b.Xc,d=b.Ta.wd,e=b.Ta.dd,f=b.Ta.Vd,g,h=-1;a.Ka=0;a.nb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.Ka]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ka<2;){var k=a.ba[++a.Ka]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ma--;e&&(a.vb-=d[k*2+1])}b.rb=h;for(g=a.Ka>>1;g>=1;g--)bl(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.Ka--],bl(a,c,1),d=a.ba[1],a.ba[--a.nb]=g,a.ba[--a.nb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,bl(a,c,1);while(a.Ka>=
2);a.ba[--a.nb]=a.ba[1];g=b.Xc;k=b.rb;d=b.Ta.wd;e=b.Ta.dd;f=b.Ta.ce;var l=b.Ta.be,m=b.Ta.Ae,n,r=0;for(n=0;n<=15;n++)a.Ha[n]=0;g[a.ba[a.nb]*2+1]=0;for(b=a.nb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ha[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Ma+=x*(n+v);e&&(a.vb+=x*(d[t*2+1]+v))}}if(r!==0){do{for(n=m-1;a.Ha[n]===0;)n--;a.Ha[n]--;a.Ha[n+1]+=2;a.Ha[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ha[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Ma+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Xk(c,h,a.Ha)}
function el(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function fl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Vk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Vk(a,l,a.ja),g--),Vk(a,16,a.ja),Uk(a,g-3,2)):g<=10?(Vk(a,17,a.ja),Uk(a,g-3,3)):(Vk(a,18,a.ja),Uk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function gl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.qa[c*2]!==0)return 0;if(a.qa[18]!==0||a.qa[20]!==0||a.qa[26]!==0)return 1;for(c=32;c<256;c++)if(a.qa[c*2]!==0)return 1;return 0}
var hl=!1;function il(a,b,c){a.Y[a.Cb+a.ya*2]=b>>>8&255;a.Y[a.Cb+a.ya*2+1]=b&255;a.Y[a.zc+a.ya]=c&255;a.ya++;b===0?a.qa[c*2]++:(a.matches++,b--,a.qa[(Lk[c]+256+1)*2]++,a.Xa[(b<256?Kk[b]:Kk[256+(b>>>7)])*2]++);return a.ya===a.Hb-1}
;function jl(a,b){a.msg=Ck[b];return b}
function kl(a){for(var b=a.length;--b>=0;)a[b]=0}
function ll(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.kb(a.output,b.Y,b.Kb,c,a.sb),a.sb+=c,b.Kb+=c,a.Nc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Kb=0))}
function ml(a,b){var c=a.ta>=0?a.ta:-1,d=a.v-a.ta,e=0;if(a.level>0){a.M.uc===2&&(a.M.uc=gl(a));dl(a,a.ec);dl(a,a.Yb);el(a,a.qa,a.ec.rb);el(a,a.Xa,a.Yb.rb);dl(a,a.Sc);for(e=18;e>=3&&a.ja[Hk[e]*2+1]===0;e--);a.Ma+=3*(e+1)+5+5+4;var f=a.Ma+3+7>>>3;var g=a.vb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Uk(a,b?1:0,3),$k(a,c,d);else if(a.strategy===4||g===f)Uk(a,2+(b?1:0),3),cl(a,Ik,Jk);else{Uk(a,4+(b?1:0),3);c=a.ec.rb+1;d=a.Yb.rb+1;e+=1;Uk(a,c-257,5);Uk(a,d-1,5);Uk(a,e-4,4);for(f=0;f<e;f++)Uk(a,
a.ja[Hk[f]*2+1],3);fl(a,a.qa,c-1);fl(a,a.Xa,d-1);cl(a,a.qa,a.Xa)}Yk(a);b&&Zk(a);a.ta=a.v;ll(a.M)}
function P(a,b){a.Y[a.pending++]=b}
function nl(a,b){a.Y[a.pending++]=b>>>8&255;a.Y[a.pending++]=b&255}
function ol(a,b){var c=a.kd,d=a.v,e=a.xa,f=a.ld,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Ua,l=a.Fa,m=a.v+258,n=h[d+e-1],r=h[d+e];a.xa>=a.cd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.qb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function pl(a){var b=a.la,c;do{var d=a.Dd-a.A-a.v;if(a.v>=b+(b-262)){N.kb(a.window,a.window,b,b,0);a.qb-=b;a.v-=b;a.ta-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,N.kb(c,e.input,e.cb,g,f),e.state.wrap===1?e.J=wk(e.J,c,g,f):e.state.wrap===2&&(e.J=xk(e.J,c,g,f)),e.cb+=g,e.fb+=g,c=g);a.A+=c;if(a.A+a.ra>=3)for(d=a.v-a.ra,a.P=a.window[d],
a.P=(a.P<<a.Ja^a.window[d+1])&a.Ia;a.ra&&!(a.P=(a.P<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ua]=a.head[a.P],a.head[a.P]=d,d++,a.ra--,a.A+a.ra<3););}while(a.A<262&&a.M.ma!==0)}
function ql(a,b){for(var c;;){if(a.A<262){pl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,c=a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=ol(a,c));if(a.T>=3)if(c=il(a,a.v-a.qb,a.T-3),a.A-=a.T,a.T<=a.Cc&&a.A>=3){a.T--;do a.v++,a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Ja^a.window[a.v+1])&a.Ia;else c=il(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(ml(a,!1),a.M.S===0))return 1}a.ra=a.v<2?a.v:2;return b===4?(ml(a,!0),a.M.S===0?3:4):a.ya&&(ml(a,!1),a.M.S===0)?1:2}
function rl(a,b){for(var c,d;;){if(a.A<262){pl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,c=a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);a.xa=a.T;a.od=a.qb;a.T=2;c!==0&&a.xa<a.Cc&&a.v-c<=a.la-262&&(a.T=ol(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.qb>4096)&&(a.T=2));if(a.xa>=3&&a.T<=a.xa){d=a.v+a.A-3;c=il(a,a.v-1-a.od,a.xa-3);a.A-=a.xa-1;a.xa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);
while(--a.xa!==0);a.ab=0;a.T=2;a.v++;if(c&&(ml(a,!1),a.M.S===0))return 1}else if(a.ab){if((c=il(a,0,a.window[a.v-1]))&&ml(a,!1),a.v++,a.A--,a.M.S===0)return 1}else a.ab=1,a.v++,a.A--}a.ab&&(il(a,0,a.window[a.v-1]),a.ab=0);a.ra=a.v<2?a.v:2;return b===4?(ml(a,!0),a.M.S===0?3:4):a.ya&&(ml(a,!1),a.M.S===0)?1:2}
function sl(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){pl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=il(a,1,a.T-3),a.A-=a.T,a.v+=a.T,a.T=0):(c=il(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(ml(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(ml(a,!0),a.M.S===0?3:4):
a.ya&&(ml(a,!1),a.M.S===0)?1:2}
function tl(a,b){for(var c;;){if(a.A===0&&(pl(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=il(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(ml(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(ml(a,!0),a.M.S===0?3:4):a.ya&&(ml(a,!1),a.M.S===0)?1:2}
function ul(a,b,c,d,e){this.je=a;this.ze=b;this.Ce=c;this.ye=d;this.de=e}
var vl;vl=[new ul(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.A<=1){pl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.ta+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,ml(a,!1),a.M.S===0)return 1;if(a.v-a.ta>=a.la-262&&(ml(a,!1),a.M.S===0))return 1}a.ra=0;if(b===4)return ml(a,!0),a.M.S===0?3:4;a.v>a.ta&&ml(a,!1);return 1}),
new ul(4,4,8,4,ql),new ul(4,5,16,8,ql),new ul(4,6,32,32,ql),new ul(4,4,16,16,rl),new ul(8,16,32,32,rl),new ul(8,16,128,128,rl),new ul(8,32,128,256,rl),new ul(32,128,258,1024,rl),new ul(32,258,258,4096,rl)];
function wl(){this.M=null;this.status=0;this.Y=null;this.wrap=this.pending=this.Kb=this.za=0;this.I=null;this.Ba=0;this.method=8;this.pb=-1;this.Ua=this.Pc=this.la=0;this.window=null;this.Dd=0;this.head=this.Fa=null;this.ld=this.cd=this.strategy=this.level=this.Cc=this.kd=this.xa=this.A=this.qb=this.v=this.ab=this.od=this.T=this.ta=this.Ja=this.Ia=this.xc=this.dc=this.P=0;this.qa=new N.Ga(1146);this.Xa=new N.Ga(122);this.ja=new N.Ga(78);kl(this.qa);kl(this.Xa);kl(this.ja);this.Sc=this.Yb=this.ec=
null;this.Ha=new N.Ga(16);this.ba=new N.Ga(573);kl(this.ba);this.nb=this.Ka=0;this.depth=new N.Ga(573);kl(this.depth);this.ha=this.na=this.ra=this.matches=this.vb=this.Ma=this.Cb=this.ya=this.Hb=this.zc=0}
function xl(a,b){if(!a||!a.state||b>5||b<0)return a?jl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return jl(a,a.S===0?-5:-2);c.M=a;var d=c.pb;c.pb=b;if(c.status===42)if(c.wrap===2)a.J=0,P(c,31),P(c,139),P(c,8),c.I?(P(c,(c.I.text?1:0)+(c.I.Pa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),P(c,c.I.time&255),P(c,c.I.time>>8&255),P(c,c.I.time>>16&255),P(c,c.I.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(P(c,c.I.extra.length&255),P(c,c.I.extra.length>>8&255)),c.I.Pa&&(a.J=xk(a.J,c.Y,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.Pc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;nl(c,e+(31-e%31));c.v!==0&&(nl(c,a.J>>>16),nl(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Pa&&c.pending>e&&(a.J=xk(a.J,c.Y,c.pending-e,e)),ll(a),e=c.pending,c.pending!==c.za));)P(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Pa&&c.pending>e&&(a.J=xk(a.J,c.Y,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Pa&&c.pending>e&&(a.J=xk(a.J,c.Y,c.pending-e,e)),ll(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Pa&&c.pending>
e&&(a.J=xk(a.J,c.Y,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Pa&&c.pending>e&&(a.J=xk(a.J,c.Y,c.pending-e,e)),ll(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Pa&&c.pending>e&&(a.J=xk(a.J,c.Y,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Pa?(c.pending+2>c.za&&ll(a),c.pending+2<=c.za&&(P(c,a.J&
255),P(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(ll(a),a.S===0)return c.pb=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return jl(a,-5);if(c.status===666&&a.ma!==0)return jl(a,-5);if(a.ma!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?tl(c,b):c.strategy===3?sl(c,b):vl[c.level].de(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.pb=-1),0;if(d===2&&(b===1?(Uk(c,2,3),Vk(c,256,Ik),c.ha===16?(Tk(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.Y[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Uk(c,0,3),$k(c,0,0),b===3&&(kl(c.head),c.A===0&&(c.v=0,c.ta=0,c.ra=0))),ll(a),a.S===0))return c.pb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.J&255),P(c,a.J>>8&255),P(c,a.J>>16&255),P(c,a.J>>24&255),P(c,a.fb&255),P(c,a.fb>>8&255),P(c,a.fb>>16&255),P(c,a.fb>>24&255)):(nl(c,a.J>>>16),nl(c,a.J&65535));ll(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var yl={};yl=function(){this.input=null;this.fb=this.ma=this.cb=0;this.output=null;this.Nc=this.S=this.sb=0;this.msg="";this.state=null;this.uc=2;this.J=0};var zl=Object.prototype.toString;
function Al(a){if(!(this instanceof Al))return new Al(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new yl;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=jl(b,-2);else{e===8&&(e=9);var k=new wl;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Pc=e;k.la=1<<k.Pc;k.Ua=k.la-1;k.xc=f+7;k.dc=1<<k.xc;k.Ia=k.dc-1;k.Ja=~~((k.xc+3-1)/3);k.window=new N.gb(k.la*2);k.head=new N.Ga(k.dc);k.Fa=new N.Ga(k.la);k.Hb=1<<f+6;k.za=k.Hb*4;k.Y=new N.gb(k.za);k.Cb=1*k.Hb;k.zc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.fb=b.Nc=0;b.uc=2;c=b.state;c.pending=0;c.Kb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.pb=0;if(!hl){d=Array(16);for(f=g=0;f<28;f++)for(Mk[f]=g,e=0;e<1<<Ek[f];e++)Lk[g++]=f;Lk[g-1]=f;for(f=g=0;f<16;f++)for(Nk[f]=g,e=0;e<1<<Fk[f];e++)Kk[g++]=f;for(g>>=7;f<30;f++)for(Nk[f]=g<<7,e=0;e<1<<Fk[f]-7;e++)Kk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Ik[e*2+1]=8,e++,d[8]++;for(;e<=255;)Ik[e*2+1]=9,e++,d[9]++;for(;e<=279;)Ik[e*2+1]=7,e++,d[7]++;for(;e<=287;)Ik[e*2+1]=8,e++,d[8]++;Xk(Ik,287,d);for(e=0;e<30;e++)Jk[e*2+1]=5,Jk[e*2]=Wk(e,5);Pk=new Ok(Ik,Ek,257,286,15);Qk=new Ok(Jk,
Fk,0,30,15);Rk=new Ok([],Gk,0,19,7);hl=!0}c.ec=new Sk(c.qa,Pk);c.Yb=new Sk(c.Xa,Qk);c.Sc=new Sk(c.ja,Rk);c.na=0;c.ha=0;Yk(c);c=0}else c=jl(b,-2);c===0&&(b=b.state,b.Dd=2*b.la,kl(b.head),b.Cc=vl[b.level].ze,b.cd=vl[b.level].je,b.ld=vl[b.level].Ce,b.kd=vl[b.level].ye,b.v=0,b.ta=0,b.A=0,b.ra=0,b.T=b.xa=2,b.ab=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(Ck[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=vk(a.dictionary):
zl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=wk(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(kl(l.head),l.v=0,l.ta=0,l.ra=0),c=new N.gb(l.la),N.kb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.cb;e=a.input;a.ma=g;a.cb=0;a.input=f;for(pl(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.Ja^l.window[f+3-1])&l.Ia,l.Fa[f&l.Ua]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;pl(l)}l.v+=l.A;l.ta=l.v;l.ra=l.A;l.A=0;l.T=l.xa=2;l.ab=0;a.cb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Ck[b]);this.ih=!0}}
Al.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=vk(a):zl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.cb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new N.gb(d),c.sb=0,c.S=d);a=xl(c,e);if(a!==1&&a!==0)return Bl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Mc(c.output,c.sb);b=f;f=f.length;if(f<65537&&(b.subarray&&uk||!b.subarray))b=
String.fromCharCode.apply(null,N.Mc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Mc(c.output,c.sb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=jl(c,-2):(c.state=null,a=d===113?jl(c,-3):0)):a=-2,Bl(this,a),this.ended=!0,a===0;e===2&&(Bl(this,0),c.S=0);return!0};
function Bl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.Zc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function Cl(a,b){b=b||{};b.gzip=!0;b=new Al(b);b.push(a,!0);if(b.err)throw b.msg||Ck[b.err];return b.result}
;function Dl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=hb(a):b=null;return b}
;function El(a){return hb(a===null?"null":a===void 0?"undefined":a)}
;function Fl(a){this.name=a}
;var Gl=new Fl("rawColdConfigGroup");var Hl=new Fl("rawHotConfigGroup");function Il(a){this.G=J(a)}
z(Il,K);function Jl(a){this.G=J(a)}
z(Jl,K);Jl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new nd(a,md):pd||(pd=new nd(null,md));else if(a.constructor!==nd)if(ld(a))a=a.length?new nd(new Uint8Array(a),md):pd||(pd=new nd(null,md));else throw Error();return qf(this,1,a)};var Kl=new Fl("continuationCommand");var Ll=new Fl("webCommandMetadata");var Ml=new Fl("signalServiceEndpoint");var Nl={Lf:"EMBEDDED_PLAYER_MODE_UNKNOWN",If:"EMBEDDED_PLAYER_MODE_DEFAULT",Kf:"EMBEDDED_PLAYER_MODE_PFP",Jf:"EMBEDDED_PLAYER_MODE_PFL"};var Ol=new Fl("feedbackEndpoint");var Wd={Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED"};var Pl=new Fl("shareEndpoint"),Ql=new Fl("shareEntityEndpoint"),Rl=new Fl("shareEntityServiceEndpoint"),Sl=new Fl("webPlayerShareEntityServiceEndpoint");var Tl=new Fl("playlistEditEndpoint");var Ul=new Fl("modifyChannelNotificationPreferenceEndpoint");var Vl=new Fl("unsubscribeEndpoint");var Wl=new Fl("subscribeEndpoint");function Xl(){var a=Yl;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Zl(a){D("yt.ads.biscotti.lastId_",a)}
;function $l(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var am=C.window,bm,cm,dm=(am==null?void 0:(bm=am.yt)==null?void 0:bm.config_)||(am==null?void 0:(cm=am.ytcfg)==null?void 0:cm.data_)||{};D("yt.config_",dm);function em(){$l(dm,arguments)}
function R(a,b){return a in dm?dm[a]:b}
function fm(a){var b=dm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var gm=[];function hm(a){gm.forEach(function(b){return b(a)})}
function im(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jm(b)}}:a}
function jm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),em("ERRORS",b));hm(a)}
function km(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),em("ERRORS",f))}
;var lm=/^[\w.]*$/,mm={q:!0,search_query:!0};function nm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=om(f[0]||""),h=om(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Qb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(nm);l.args=[{key:m,value:f[1],query:a,method:pm===n?"unchanged":n}];mm.hasOwnProperty(m)||km(l)}}return c}
var pm=String(nm);function qm(a){var b=[];Fg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Kb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function rm(a){a.charAt(0)==="?"&&(a=a.substring(1));return nm(a,"&")}
function sm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),rm(a.length>1?a[1]:a[0])):{}}
function tm(a,b){return um(a,b||{},!0)}
function um(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=rm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ec(a,e)+d}
function wm(a){if(!b)var b=window.location.href;var c=Zb(1,a),d=$b(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)===d&&(Number(Zb(4,b))||null)===(Number(Zb(4,a))||null):!0;return a}
function om(a){return a&&a.match(lm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function xm(a){var b=ym;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Kj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(La){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Cj:g;try{var h=g.history.length}catch(La){h=0}e.u_his=h;var k;e.u_h=(k=Cj.screen)==null?void 0:k.height;var l;e.u_w=(l=Cj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Cj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Cj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=Cj.screen)==null?void 0:r.colorDepth}catch(La){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(La){}try{var x=h.outerWidth;var y=h.outerHeight}catch(La){}try{var F=h.innerWidth;var I=h.innerHeight}catch(La){}try{var O=h.screenLeft;var V=h.screenTop}catch(La){}try{F=h.innerWidth,I=h.innerHeight}catch(La){}try{var cb=h.screen.availWidth;var vb=h.screen.availTop}catch(La){}t=[O,V,t,v,cb,vb,x,y,F,I];try{var ea=(b.h.top||window).document,Z=ea.compatMode==
"CSS1Compat"?ea.documentElement:ea.body;var na=(new Eg(Z.clientWidth,Z.clientHeight)).round()}catch(La){na=new Eg(-12245933,-12245933)}ea=na;na={};var Ma=Ma===void 0?C:Ma;Z=new Qj;"SVGElement"in Ma&&"createElementNS"in Ma.document&&Z.set(0);v=Hj();v["allow-top-navigation-by-user-activation"]&&Z.set(1);v["allow-popups-to-escape-sandbox"]&&Z.set(2);Ma.crypto&&Ma.crypto.subtle&&Z.set(3);"TextDecoder"in Ma&&"TextEncoder"in Ma&&Z.set(4);Ma=Rj(Z);na.bc=Ma;na.bih=ea.height;na.biw=ea.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!Cj.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ym=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return qm(xm(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");var zm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Am(){if(!zm)return null;var a=zm();return"open"in a?a:null}
function Bm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Cm(a,b){typeof a==="function"&&(a=im(a));return window.setTimeout(a,b)}
;var Dm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(Dm),["client_dev_set_cookie"]);function S(a){a=Em(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Fm(a,b){a=Em(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Em(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Gm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Hm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Im="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Dm)),Jm=!1;function Km(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&im(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Am();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Lm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Mm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){km(n)}}l.send(d);return l}
function Mm(a,b){b=b===void 0?{}:b;var c=wm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in Hm){var g=R(Hm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||($b(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=$b(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Yb(Zb(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=qm(xm()));return b}
function Nm(a,b){b.method="POST";b.postParams||(b.postParams={});return Om(a,b)}
function Om(a,b){var c=b.format||"JSON";a=Pm(a,b);var d=Qm(a,b),e=!1,f=Rm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Bm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Sm(a,c,k,b.convertToSafeHtml);l&&(l=Tm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Cm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Pm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=tm(a,b);return a}
function Qm(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=rm(e),Pg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):dc(e));f=e||f&&!Ig(f);!Jm&&f&&b.method!=="POST"&&(Jm=!0,jm(Error("AJAX request with postData should use POST")));return e}
function Sm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,km(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Um(a):null)e={},Kb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Vm(g)})}d&&Wm(e);
return e}
function Wm(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=fb();d=new zb(e?e.createHTML(d):d);a[c]=d}else Wm(a[b])}}
function Tm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Um(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Vm(a){var b="";Kb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Lm(a){var b=window.location.search,c=$b(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&wm(a)&&(c=document.location.hostname);var d=Yb(Zb(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=rm(b),f={};Kb(Im,function(g){e[g]&&(f[g]=e[g])});
return um(a,f||{},!1)}
var Rm=Km;var Xm=[{Dc:function(a){return"Cannot read property '"+a.key+"'"},
fc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Dc:function(a){return"Cannot call '"+a.key+"'"},
fc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Dc:function(a){return a.key+" is not defined"},
fc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Zm={Sa:[],Oa:[{callback:Ym,weight:500}]};function Ym(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function $m(){this.Oa=[];this.Sa=[]}
var an;function bn(){if(!an){var a=an=new $m;a.Sa.length=0;a.Oa.length=0;Zm.Sa&&a.Sa.push.apply(a.Sa,Zm.Sa);Zm.Oa&&a.Oa.push.apply(a.Oa,Zm.Oa)}return an}
;var cn=new M;function dn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=en(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=en(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=en(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function en(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function fn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=gn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=dn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?gn(f+".ve",g,h,k):0;d+=f;d+=gn(e,a[e],b,c);if(d>500)break}}else c[b]=hn(a),d+=c[b].length;else c[b]=hn(a),d+=c[b].length;return d}
function gn(a,b,c,d){c+="."+a;a=hn(b);d[c]=a;return c.length+a.length}
function hn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function jn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function kn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function ln(){this.kf=!0}
function mn(){ln.h||(ln.h=new ln);return ln.h}
function nn(a,b){a={};var c=[],d=S("enable_first_party_auth_v2");"USER_SESSION_ID"in dm&&d&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=ug(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in dm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in dm&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var on={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function pn(a,b,c,d,e){qg.set(""+a,b,{Jb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function qn(a){return qg.get(""+a,void 0)}
function rn(a,b,c){qg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function sn(){if(S("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!qg.isEnabled())return!1;if(qg.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?qg.set("TESTCOOKIESENABLED","1",{Jb:60,Pe:"none",secure:!0}):qg.set("TESTCOOKIESENABLED","1",{Jb:60});if(qg.get("TESTCOOKIESENABLED")!=="1")return!1;qg.remove("TESTCOOKIESENABLED");return!0}
;var tn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",tn);function un(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=qn(this.h);a&&this.parse(a)}
var vn;function wn(){vn||(vn=new un);return vn}
p=un.prototype;p.get=function(a,b){xn(a);yn(a);a=tn[a]!==void 0?tn[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){xn(a);yn(a);if(b==null)throw Error("ExpectedNotNull");tn[a]=b.toString()};
function zn(a){return!!((An("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){xn(a);yn(a);delete tn[a]};
p.clear=function(){for(var a in tn)delete tn[a]};
function yn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function xn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function An(a){a=tn[a]!==void 0?tn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tn[d]=c.toString())}};var Bn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Cn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Dn(){var a=C.navigator;return a?a.connection:void 0}
function En(){var a=Dn();if(a){var b=Bn[a.type||"unknown"]||"CONN_UNKNOWN";a=Bn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Fn(){var a=Dn();if(a!=null&&a.effectiveType)return Cn.hasOwnProperty(a.effectiveType)?Cn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
z(T,Error);function Gn(){try{return Hn(),!0}catch(a){return!1}}
function Hn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function In(){}
function Jn(a,b){return Pj.Wa(a,0,b)}
In.prototype.oa=function(a,b){return this.Wa(a,1,b)};
In.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Kn=Fm("web_emulated_idle_callback_delay",300),Ln=1E3/60-3,Mn=[8,5,4,3,2,1,0];
function Nn(a){a=a===void 0?{}:a;L.call(this);this.i=[];this.j={};this.Z=this.h=0;this.X=this.u=!1;this.R=[];this.U=this.ga=!1;for(var b=w(Mn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.sc=a.timeout||1;this.H=Ln;this.B=0;this.sa=this.Ee.bind(this);this.qc=this.nf.bind(this);this.yb=this.Jd.bind(this);this.zb=this.ke.bind(this);this.Rb=this.Ie.bind(this);this.Va=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.sa)}
z(Nn,L);p=Nn.prototype;p.Ab=function(a){var b=Xa();On(this,a);a=Xa()-b;this.u||(this.H-=a)};
p.Wa=function(a,b,c){++this.Z;if(b===10)return this.Ab(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.u||(this.h!==0&&Pn(this)!==this.B&&this.stop(),this.start()));return d};
p.pa=function(a){delete this.j[a]};
function Qn(a){a.R.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Rn(a){return!a.isHidden()&&a.ia}
function Pn(a){if(a.i[8].length){if(a.U)return 4;if(Rn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Rn(a)?3:2:1;return 0}
p.Ea=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function On(a,b){try{b()}catch(c){a.Ea(c)}}
function Sn(a){for(var b=w(Mn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ke=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Tn(this,b);this.ga=!1};
p.nf=function(){Tn(this)};
p.Jd=function(){Un(this)};
p.Ie=function(a){this.U=!0;var b=Pn(this);b===4&&b!==this.B&&(this.stop(),this.start());Tn(this,void 0,a);this.U=!1};
p.Ee=function(){this.isHidden()||Un(this);this.h&&(this.stop(),this.start())};
function Un(a){a.stop();a.u=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&On(a,e)}Vn(a);a.u=!1;Sn(a)&&a.start();b=Xa()-b;a.H-=b}
function Vn(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Tn(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Xa()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ea(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&On(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&On(a,c)}while(c&&Xa()<b)}a.u=!1;Vn(a);a.H=Ln;Sn(a)&&a.start()}
p.start=function(){this.X=!1;if(this.h===0)switch(this.B=Pn(this),this.B){case 1:var a=this.zb;this.h=this.Va?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Kn);break;case 2:this.h=window.setTimeout(this.qc,this.sc);break;case 3:this.h=window.requestAnimationFrame(this.Rb);break;case 4:this.h=window.setTimeout(this.yb,0)}};
p.pause=function(){this.stop();this.X=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Va?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.aa=function(){Qn(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.sa);L.prototype.aa.call(this)};var Wn=E("yt.scheduler.instance.timerIdMap_")||{},Xn=Fm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Yn=0,Zn=0;function $n(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Nn(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function ao(){bo();var a=E("ytglobal.schedulerInstanceInstance_");a&&(wg(a),D("ytglobal.schedulerInstanceInstance_",null))}
function bo(){Qn($n());for(var a in Wn)Wn.hasOwnProperty(a)&&delete Wn[Number(a)]}
function co(a,b,c){if(!c)return c=c===void 0,-$n().Wa(a,b,c);var d=window.setTimeout(function(){var e=$n().Wa(a,b);Wn[d]=e},c);
return d}
function eo(a){$n().Ab(a)}
function fo(a){var b=$n();if(a<0)b.pa(-a);else{var c=Wn[a];c?(b.pa(c),delete Wn[a]):window.clearTimeout(a)}}
function go(){ho()}
function ho(){window.clearTimeout(Yn);$n().start()}
function io(){$n().pause();window.clearTimeout(Yn);Yn=window.setTimeout(go,Xn)}
function jo(){window.clearTimeout(Zn);Zn=window.setTimeout(function(){ko(0)},Xn)}
function ko(a){jo();var b=$n();b.o=a;b.start()}
function lo(a){jo();var b=$n();b.o>a&&(b.o=a,b.start())}
function mo(){window.clearTimeout(Zn);var a=$n();a.o=0;a.start()}
;function no(){In.apply(this,arguments)}
z(no,In);function oo(){no.h||(no.h=new no);return no.h}
no.prototype.Wa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Cm(a,c||0)};
no.prototype.pa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
no.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
no.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Pj=oo();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",ao),D("yt.scheduler.instance.addJob",co),D("yt.scheduler.instance.addImmediateJob",eo),D("yt.scheduler.instance.cancelJob",fo),D("yt.scheduler.instance.cancelAllJobs",bo),D("yt.scheduler.instance.start",ho),D("yt.scheduler.instance.pause",io),D("yt.scheduler.instance.setPriorityThreshold",ko),D("yt.scheduler.instance.enablePriorityThreshold",lo),D("yt.scheduler.instance.clearPriorityThreshold",mo),D("yt.scheduler.initialized",
!0));function po(a){var b=new pk;this.h=(a=b.isAvailable()?a?new qk(b,a):b:null)?new kk(a):null;this.i=document.domain||window.location.hostname}
po.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Vi).serialize(b))}catch(f){return}else e=escape(b);pn(a,e,c,this.i)};
po.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=qn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
po.prototype.remove=function(a){this.h&&this.h.remove(a);rn(a,"/",this.i)};var qo=function(){var a;return function(){a||(a=new po("ytidb"));return a}}();
function ro(){var a;return(a=qo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var so=[],to,uo=!1;function vo(){var a={};for(to=new wo(a.handleError===void 0?xo:a.handleError,a.logEvent===void 0?yo:a.logEvent);so.length>0;)switch(a=so.shift(),a.type){case "ERROR":to.Ea(a.payload);break;case "EVENT":to.logEvent(a.eventType,a.payload)}}
function zo(a){uo||(to?to.Ea(a):(so.push({type:"ERROR",payload:a}),so.length>10&&so.shift()))}
function Ao(a,b){uo||(to?to.logEvent(a,b):(so.push({type:"EVENT",eventType:a,payload:b}),so.length>10&&so.shift()))}
;function Bo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Co(a){return a.substr(0,a.indexOf(":"))||a}
;var Do=Xc||Yc;function Eo(a){var b=Hc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Fo={},Go=(Fo.AUTH_INVALID="No user identifier specified.",Fo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Fo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Fo.MISSING_INDEX="Index not created.",Fo.MISSING_OBJECT_STORES="Object stores not created.",Fo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Fo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Fo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Fo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Fo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Fo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Fo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Fo),Ho={},Io=(Ho.AUTH_INVALID="ERROR",Ho.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ho.EXPLICIT_ABORT="IGNORED",Ho.IDB_NOT_SUPPORTED="ERROR",Ho.MISSING_INDEX=
"WARNING",Ho.MISSING_OBJECT_STORES="ERROR",Ho.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ho.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ho.QUOTA_EXCEEDED="WARNING",Ho.QUOTA_MAYBE_EXCEEDED="WARNING",Ho.UNKNOWN_ABORT="WARNING",Ho.INCOMPATIBLE_DB_VERSION="WARNING",Ho),Jo={},Ko=(Jo.AUTH_INVALID=!1,Jo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Jo.EXPLICIT_ABORT=!1,Jo.IDB_NOT_SUPPORTED=!1,Jo.MISSING_INDEX=!1,Jo.MISSING_OBJECT_STORES=!1,Jo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Jo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Jo.QUOTA_EXCEEDED=!1,Jo.QUOTA_MAYBE_EXCEEDED=!0,Jo.UNKNOWN_ABORT=!0,Jo.INCOMPATIBLE_DB_VERSION=!1,Jo);function Lo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Go[a]:c;d=d===void 0?Io[a]:d;e=e===void 0?Ko[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Lo.prototype)}
z(Lo,T);function Mo(a,b){Lo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Go.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Mo.prototype)}
z(Mo,Lo);function No(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,No.prototype)}
z(No,Error);var Oo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Po(a,b,c,d){b=Co(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Lo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Lo("QUOTA_EXCEEDED",a);if(Zc&&e.name==="UnknownError")return new Lo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof No)return new Lo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Oo.some(function(f){return e.message.includes(f)}))return new Lo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Lo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",nd:e.name})];e.level="WARNING";return e}
function Qo(a,b,c){var d=ro();return new Lo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Ro(a){if(!a)throw Error();throw a;}
function So(a){return a}
function To(a){this.h=a}
function Uo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Uo.all=function(a){return new Uo(new To(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)Uo.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Uo.resolve=function(a){return new Uo(new To(function(b,c){a instanceof Uo?a.then(b,c):b(a)}))};
Uo.reject=function(a){return new Uo(new To(function(b,c){c(a)}))};
Uo.prototype.then=function(a,b){var c=this,d=a!=null?a:So,e=b!=null?b:Ro;return new Uo(new To(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Vo(c,c,d,f,g)}),c.i.push(function(){Wo(c,c,e,f,g)})):c.state.status==="FULFILLED"?Vo(c,c,d,f,g):c.state.status==="REJECTED"&&Wo(c,c,e,f,g)}))};
Uo.prototype.catch=function(a){return this.then(void 0,a)};
function Vo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Uo?Xo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Wo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Uo?Xo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Uo?Xo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Yo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Zo(a){return new Promise(function(b,c){Yo(a,b,c)})}
function $o(a){return new Uo(new To(function(b,c){Yo(a,b,c)}))}
;function ap(a,b){return new Uo(new To(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var bp=window,U=bp.ytcsi&&bp.ytcsi.now?bp.ytcsi.now:bp.performance&&bp.performance.timing&&bp.performance.now&&bp.performance.timing.navigationStart?function(){return bp.performance.timing.navigationStart+bp.performance.now()}:function(){return(new Date).getTime()};function cp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
p=cp.prototype;p.add=function(a,b,c){return dp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return dp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return dp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function ep(a,b,c){a=a.h.createObjectStore(b,c);return new fp(a)}
p.delete=function(a,b){return dp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return dp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function gp(a,b,c){return dp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return $o(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function dp(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,v,x;return A(function(y){switch(y.h){case 1:var F={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(U());ya(y,5);l=a.h.transaction(b,e.mode);F=y.yield;var I=new hp(l);I=ip(I,d);return F.call(y,I,7);case 7:return m=y.i,n=Math.round(U()),jp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:r=za(y);t=Math.round(U());v=Po(r,
a.h.name,b.join(),a.h.version);if((x=v instanceof Lo&&!v.h)||g>=f)jp(a,k,t,g,v,b.join(),e),h=v;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function jp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Lo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Ao("QUOTA_EXCEEDED",{dbName:Co(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Lo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Ao("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),kp(a,!1,d,f,b,g.tag),zo(e)):kp(a,!0,d,f,b,g.tag)}
function kp(a,b,c,d,e,f){Ao("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function fp(a){this.h=a}
p=fp.prototype;p.add=function(a,b){return $o(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return $o(this.h.clear()).then(function(){})};
function lp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return $o(this.h.count(a))};
function mp(a,b){return np(a,{query:b},function(c){return c.delete().then(function(){return op(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?mp(this,a):$o(this.h.delete(a))};
p.get=function(a){return $o(this.h.get(a))};
p.index=function(a){try{return new pp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new No(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function np(a,b,c){a=a.h.openCursor(b.query,b.direction);return qp(a).then(function(d){return ap(d,c)})}
function hp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Lo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ip(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
hp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Lo("EXPLICIT_ABORT");};
hp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new fp(a),this.i.set(a,b));return b};
function pp(a){this.h=a}
p=pp.prototype;p.count=function(a){return $o(this.h.count(a))};
p.delete=function(a){return rp(this,{query:a},function(b){return b.delete().then(function(){return op(b)})})};
p.get=function(a){return $o(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function rp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return qp(a).then(function(d){return ap(d,c)})}
function sp(a,b){this.request=a;this.cursor=b}
function qp(a){return $o(a).then(function(b){return b?new sp(a,b):null})}
function op(a){a.cursor.continue(void 0);return qp(a.request)}
sp.prototype.delete=function(){return $o(this.cursor.delete()).then(function(){})};
sp.prototype.getValue=function(){return this.cursor.value};
sp.prototype.update=function(a){return $o(this.cursor.update(a))};function tp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new cp(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ld,k=c.blocking,l=c.lf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Ao("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Co(a)});var v=f(),x=new hp(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Ao("IDB_UNEXPECTEDLY_CLOSED",{dbName:Co(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function up(a,b,c){c=c===void 0?{}:c;return tp(a,b,c)}
function vp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ld)&&c.addEventListener("blocked",function(){e()}),g.yield(Zo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=za(g),Po(f,a,"",-1);})}
;function wp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
wp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return up(a,b,c)};
wp.prototype.delete=function(a){a=a===void 0?{}:a;return vp(this.name,a)};
function xp(a,b){return new Lo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function yp(a,b){if(!b)throw Qo("openWithToken",Co(a.name));return a.open()}
wp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,F=c.options,I=[],O=w(Object.keys(F.tb)),V=O.next();!V.done;V=O.next()){V=V.value;var cb=F.tb[V],vb=cb.Ke===void 0?Number.MAX_VALUE:cb.Ke;!(y.h.version>=cb.Bb)||y.h.version>=vb||y.h.objectStoreNames.contains(V)||I.push(V)}k=I;if(k.length===0){x.F(5);break}l=Object.keys(c.options.tb);
m=h.objectStoreNames();if(c.D<Fm("ytidb_reopen_db_retries",0))return c.D++,h.close(),zo(new Lo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Fm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return zo(new Lo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Mo(m,l);case 5:return x.return(h);case 2:n=za(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,xp(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Po(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw xp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,lf:b,upgrade:this.options.upgrade};return this.h=d=a()};var zp=new wp("YtIdbMeta",{tb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&ep(a,"databases",{keyPath:"actualName"})}});
function Ap(a,b){var c;return A(function(d){if(d.h==1)return d.yield(yp(zp,b),2);c=d.i;return d.return(dp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return $o(f.h.put(a,void 0)).then(function(){})})}))})}
function Bp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(yp(zp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Cp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(yp(zp,b),2)):e.h!=3?(d=e.i,e.yield(dp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return np(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return op(g)})}),3)):e.return(c)})}
function Dp(a){return Cp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Ep(a,b,c){return Cp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Fp(a){var b,c;return A(function(d){if(d.h==1)return b=Hn("YtIdbMeta hasAnyMeta other"),d.yield(Cp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Gp,Hp=new function(){}(new function(){});
function Ip(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=ro();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Do)f=/WebKit\/([0-9]+)/.exec(Hc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Hc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Tc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Ap(d,Hp),4);case 4:return e.yield(Bp("yt-idb-test-do-not-use",Hp),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Jp(){if(Gp!==void 0)return Gp;uo=!0;return Gp=Ip().then(function(a){uo=!1;var b;if((b=qo())!=null&&b.h){var c;b={hasSucceededOnce:((c=ro())==null?void 0:c.hasSucceededOnce)||a};var d;(d=qo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Kp(){return E("ytglobal.idbToken_")||void 0}
function Lp(){var a=Kp();return a?Promise.resolve(a):Jp().then(function(b){(b=b?Hp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Mp=0;function Np(a,b){Mp||(Mp=Pj.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Lp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(Ep(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(vp(f.actualName),7);case 7:return h.yield(Bp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=za(h),zo(g),d=!1;case 4:Pj.pa(Mp),Mp=0,d&&Np(a,b),h.h=0}})}))}
function Op(){var a;return A(function(b){return b.h==1?b.yield(Lp(),2):(a=b.i)?b.return(Fp(a)):b.return(!1)})}
new Aj;function Pp(a){if(!Gn())throw a=new Lo("AUTH_INVALID",{dbName:a}),zo(a),a;var b=Hn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Qp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Lp(),2);case 2:g=m.i;if(!g)throw h=Qo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),zo(h),h;Bo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Pp(a);ya(m,3);return m.yield(Ap(k,g),5);case 5:return m.yield(up(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),ya(m,7),m.yield(Bp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:za(m);case 8:throw l;}})}
function Rp(a,b,c){c=c===void 0?{}:c;return Qp(a,b,!1,c)}
function Sp(a,b,c){c=c===void 0?{}:c;return Qp(a,b,!0,c)}
function Tp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Lp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Bo(a);d=Pp(a);return e.yield(vp(d.actualName,b),3)}return e.yield(Bp(d.actualName,c),0)})}
function Up(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(vp(d.actualName,b),2):e.yield(Bp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Vp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Lp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Bo("LogsDatabaseV2");return d.yield(Dp(b),3)}c=d.i;return d.yield(Up(c,a,b),0)})}
function Wp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Lp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Bo(a);return d.yield(vp(a,b),3)}return d.yield(Bp(a,c),0)})}
;function Xp(a,b){wp.call(this,a,b);this.options=b;Bo(a)}
z(Xp,wp);function Yp(a,b){var c;return function(){c||(c=new Xp(a,b));return c}}
Xp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Sp:Rp)(a,b,Object.assign({},c))};
Xp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Wp:Tp)(this.name,a)};
function Zp(a,b){return Yp(a,b)}
;var $p={},aq=Zp("ytGcfConfig",{tb:($p.coldConfigStore={Bb:1},$p.hotConfigStore={Bb:1},$p),shared:!1,upgrade:function(a,b){b(1)&&(lp(ep(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),lp(ep(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function bq(a){return yp(aq(),a)}
function cq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(bq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(gp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function dq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(bq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(gp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function eq(a){var b,c;return A(function(d){return d.h==1?d.yield(bq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(dp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return rp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function fq(a){var b,c;return A(function(d){return d.h==1?d.yield(bq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(dp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return rp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function gq(){L.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
z(gq,L);gq.prototype.aa=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;L.prototype.aa.call(this)};function hq(){this.h=0;this.i=new gq}
function iq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function jq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Kp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(fq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(cq(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function kq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Kp())?c?h.F(4):h.yield(eq(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(dq(c,b,g,d),0)})}
function lq(){if(!hq.h){var a=new hq;hq.h=a}a=hq.h;var b=U()-a.h;if(!(a.h!==0&&b<Fm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
hq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function mq(){return"INNERTUBE_API_KEY"in dm&&"INNERTUBE_API_VERSION"in dm}
function nq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),pe:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ed:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),rh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),re:R("INNERTUBE_CONTEXT_HL"),qe:R("INNERTUBE_CONTEXT_GL"),se:R("INNERTUBE_HOST_OVERRIDE")||"",te:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),sh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function oq(a){var b={client:{hl:a.re,gl:a.qe,clientName:a.ed,clientVersion:a.innertubeContextClientVersion,configInfo:a.pe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Gm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.ed;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=kn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=En())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=Fn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=lq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=w(Object.entries(rm(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=w(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function pq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().jh:(a=nn(mn()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var qq=typeof TextEncoder!=="undefined"?new TextEncoder:null,rq=qq?function(a){return qq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function sq(a,b){this.version=a;this.args=b}
sq.prototype.serialize=function(){return{version:this.version,args:this.args}};function tq(a,b){this.topic=a;this.h=b}
tq.prototype.toString=function(){return this.topic};var uq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.hb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",uq);var vq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",vq);var wq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",wq);var xq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",xq);
D("ytPubsub2Pubsub2SkipSubKey",null);function yq(a,b){var c=zq();c&&c.publish.call(c,a.toString(),a,b)}
function Aq(a){var b=Bq,c=zq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(vq[d])try{if(f&&b instanceof tq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Bd){var l=new h;h.Bd=l.version}var m=h.Bd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=r[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){jm(y)}},xq[b.toString()]?E("yt.scheduler.instance")?Pj.oa(g):Cm(g,0):g())});
vq[d]=!0;wq[b.toString()]||(wq[b.toString()]=[]);wq[b.toString()].push(d);return d}
function Cq(){var a=Dq,b=Aq(function(c){a.apply(void 0,arguments);Eq(b)});
return b}
function Eq(a){var b=zq();b&&(typeof a==="number"&&(a=[a]),Kb(a,function(c){b.unsubscribeByKey(c);delete vq[c]}))}
function zq(){return E("ytPubsub2Pubsub2Instance")}
;function Fq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&yq("meta_logging_csi_event",{timerName:a,Jh:b})}
;var Gq=void 0,Hq=void 0;function Iq(){Hq||(Hq=Dl(R("WORKER_SERIALIZATION_URL")));return Hq||void 0}
function Jq(){var a=Iq();Gq||a===void 0||(Gq=new Worker(ib(a),void 0));return Gq}
;var Kq=Fm("max_body_size_to_compress",5E5),Lq=Fm("min_body_size_to_compress",500),Mq=!0,Nq=0,Oq=0,Pq=Fm("compression_performance_threshold_lr",250),Qq=Fm("slow_compressions_before_abandon_count",4),Rq=!1,Sq=new Map,Tq=1,Uq=!0;function Vq(){if(typeof Worker==="function"&&Iq()&&!Rq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Sq.get(c.key);d&&(Wq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Sq.delete(c.key))}},b=Jq();
b&&(b.addEventListener("message",a),b.onerror=function(){Sq.clear()},Rq=!0)}}
function Xq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Mq)try{var g=Yq(b);if(g!=null&&(g>Kq||g<Lq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Uq||!S("initial_gzip_use_main_thread"))){Rq||Vq();var h=Jq();if(h&&!e){Sq.set(Tq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Tq});Tq++;return}}var k=Cl(rq(b));Wq(k,f,a,c,d)}}catch(l){km(l),d(a,c)}else d(a,c)}
function Wq(a,b,c,d,e){Uq=!1;var f=U();b.ticks.gelc=f;Oq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Pq&&(Nq++,S("abandon_compression_after_N_slow_zips")?Oq===Fm("compression_disable_point")&&Nq>Qq&&(Mq=!1):Mq=!1);Zq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function $q(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Mq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Yq(g);if(h!=null&&(h>Kq||h<Lq))return a;c=b?{level:1}:void 0;f=Cl(rq(g),c);var k=U();e.ticks.gelc=k;if(b){Oq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Pq)if(Nq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Nq/Oq;var l=Qq/Fm("compression_disable_point");Oq>0&&Oq%Fm("compression_disable_point")===0&&b>=l&&(Mq=!1)}else Mq=!1;Zq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return km(m),a}}else return a}
function Yq(a){try{return(new Blob(a.split(""))).size}catch(b){return km(b),null}}
function Zq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Fq("gel_compression",a,{sampleRate:.1})}
;function ar(a){a=Object.assign({},a);delete a.Authorization;var b=ug();if(b){var c=new Tj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=bd(c.digest(),3)}return a}
;var br;function cr(){br||(br=new po("yt.innertube"));return br}
function dr(a,b,c,d){if(d)return null;d=cr().get("nextId",!0)||1;var e=cr().get("requests",!0)||{};e[d]={method:a,request:b,authState:ar(c),requestTime:Math.round(U())};cr().set("nextId",d+1,86400,!0);cr().set("requests",e,86400,!0);return d}
function er(a){var b=cr().get("requests",!0)||{};delete b[a];cr().set("requests",b,86400,!0)}
function fr(a){var b=cr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=ar(pq(!1));Lg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),gr(a,d.method,e,{}));delete b[c]}}cr().set("requests",b,86400,!0)}}
;function hr(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.mb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.xd=(b=a.xd)!=null?b:100;var c;this.sd=(c=a.sd)!=null?c:1;var d;this.qd=(d=a.qd)!=null?d:2592E6;var e;this.pd=(e=a.pd)!=null?e:12E4;var f;this.rd=(f=a.rd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=(h=a.Xb)!=null?h:.1;var k;this.ic=(k=a.ic)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.mb&&(this.mb=a.mb);a.Eb&&(this.Eb=a.Eb);a.Ub&&(this.Ub=a.Ub);this.W=a.W;this.Ca=a.Ca;this.fa=a.fa;this.da=a.da;this.sendFn=a.sendFn;
this.Jc=a.Jc;this.Gc=a.Gc;ir(this)&&(!this.W||this.W("networkless_logging"))&&jr(this)}
function jr(a){ir(a)&&!a.Eb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.fa.Pd(a.V),kr(a),a.da.va()&&a.Ob(),a.da.listen(a.Jc,a.Ob.bind(a)),a.da.listen(a.Gc,a.Tc.bind(a)))}
p=hr.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ir(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.da.va()&&lr(c,d)}).catch(function(e){lr(c,d);
mr(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ir(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.da.va()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){mr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
mr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ir(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.lb(d.id,c.V):e=!0;c.da.bb&&c.W&&c.W("vss_network_hint")&&c.da.bb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.lb(d.id,c.V)}).catch(function(g){mr(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Ob=function(){var a=this;if(!ir(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.bd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(lr(a,b),3):(a.Tc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.xd))};
p.Tc=function(){this.Ca.pa(this.i);this.i=0};
function lr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!ir(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.fa.xe(b.id,a.V),3);case 3:(c=d.i)||a.mb(Error("The request cannot be found in the database."));case 2:if(nr(a,b,a.qd)){d.F(4);break}a.mb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.fa.lb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=or(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.fa.lb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function or(a,b){if(!ir(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=pr(f);(h=qr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ic)){m.F(2);break}if(!a.da.nc){m.F(3);break}return m.yield(a.da.nc(),3);case 3:if(a.da.va()){m.F(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.fa.Kc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.ic)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.sd?m.yield(a.fa.Kc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.lb(b.id,a.V),8);case 12:a.Ca.oa(function(){a.da.va()&&a.Ob()},a.rd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.fa.lb(b.id,a.V),2);a.da.bb&&a.W&&a.W("vss_network_hint")&&a.da.bb(!0);d(e,f);h.h=0})};
return b}
function nr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function kr(a){if(!ir(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.bd("QUEUED",a.V).then(function(b){b&&!nr(a,b,a.pd)?a.Ca.oa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.fa.Kc(b.id,a.V),2);kr(a);c.h=0})}):a.da.va()&&a.Ob()})}
function mr(a,b){a.Ed&&!a.da.va()?a.Ed(b):a.handleError(b)}
function ir(a){return!!a.V||a.Ub}
function pr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function qr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var rr;
function sr(){if(rr)return rr();var a={};rr=Zp("LogsDatabaseV2",{tb:(a.LogsRequestsStore={Bb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ep(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),lp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return rr()}
;function tr(a){return yp(sr(),a)}
function ur(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(tr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(gp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();vr(c);return g.return(f)})}
function wr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(tr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(dp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return rp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=U();vr(c);return m.return(l)})}
function xr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(tr(b),2);c=d.i;return d.return(dp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",$o(f.h.put(g,void 0)).then(function(){return g})})}))})}
function yr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(tr(b),2);e=f.i;return f.return(dp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),$o(h.h.put(k,void 0)).then(function(){return k})):Uo.resolve(void 0)})}))})}
function zr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(tr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Ar(a){var b,c;return A(function(d){if(d.h==1)return d.yield(tr(a),2);b=d.i;c=U()-2592E6;return d.yield(dp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return op(f)})})}),0)})}
function Br(){A(function(a){return a.yield(Vp(),0)})}
function vr(a){S("nwl_csi_killswitch")||Fq("networkless_performance",a,{sampleRate:1})}
;var Cr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506};var Dr={},Er=Zp("ServiceWorkerLogsDatabase",{tb:(Dr.SWHealthLog={Bb:1},Dr),shared:!0,upgrade:function(a,b){b(1)&&lp(ep(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Fr(a){return yp(Er(),a)}
function Gr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Fr(a),2);b=d.i;c=U()-2592E6;return d.yield(dp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return op(f)})})}),0)})}
function Hr(a){var b;return A(function(c){if(c.h==1)return c.yield(Fr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Ir={},Jr=0;function Kr(a){var b=new Image,c=""+Jr++;Ir[c]=b;b.onload=b.onerror=function(){delete Ir[c]};
b.src=a}
;var Lr;function Mr(){Lr||(Lr=new po("yt.offline"));return Lr}
function Nr(a){if(S("offline_error_handling")){var b=Mr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Mr().set("errors",b,2592E3,!0)}}
;function Or(){this.h=new Map;this.i=!1}
function Pr(){if(!Or.h){var a=E("yt.networkRequestMonitor.instance")||new Or;D("yt.networkRequestMonitor.instance",a);Or.h=a}return Or.h}
Or.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Or.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Or.prototype.removeParams=function(a){return a.split("?")[0]};
Or.prototype.removeParams=Or.prototype.removeParams;Or.prototype.isEndpointCFR=Or.prototype.isEndpointCFR;Or.prototype.requestComplete=Or.prototype.requestComplete;Or.getInstance=Pr;function Qr(){ji.call(this);var a=this;this.j=!1;this.i=Oj();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Mr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;jm(d)}Mr().set("errors",{},2592E3,!0)}}})}
z(Qr,ji);function Rr(){if(!Qr.h){var a=E("yt.networkStatusManager.instance")||new Qr;D("yt.networkStatusManager.instance",a);Qr.h=a}return Qr.h}
p=Qr.prototype;p.va=function(){return this.i.va()};
p.bb=function(a){this.i.i=a};
p.ge=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Wd=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.nc=function(a){a=Mj(this.i,a);a.then(function(b){S("use_cfr_monitor")&&Pr().requestComplete("generate_204",b)});
return a};
Qr.prototype.sendNetworkCheckRequest=Qr.prototype.nc;Qr.prototype.listen=Qr.prototype.listen;Qr.prototype.enableErrorFlushing=Qr.prototype.Wd;Qr.prototype.getWindowStatus=Qr.prototype.ge;Qr.prototype.networkStatusHint=Qr.prototype.bb;Qr.prototype.isNetworkAvailable=Qr.prototype.va;Qr.getInstance=Rr;function Sr(a){a=a===void 0?{}:a;ji.call(this);var b=this;this.i=this.u=0;this.j=Rr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Tr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Tr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ki(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ki(b,"publicytnetworkstatus-offline")})))}
z(Sr,ji);Sr.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Sr.prototype.bb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Sr.prototype.nc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Pr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.bb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Tr(a,b){a.rateLimit?a.i?(Pj.pa(a.u),a.u=Pj.oa(function(){a.o!==b&&(ki(a,b),a.o=b,a.i=U())},a.rateLimit-(U()-a.i))):(ki(a,b),a.o=b,a.i=U()):ki(a,b)}
;var Yr;function Zr(){var a=hr.call;Yr||(Yr=new Sr({xh:!0,ph:!0}));a.call(hr,this,{fa:{Pd:Ar,lb:zr,bd:wr,xe:xr,Kc:yr,set:ur},da:Yr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;km(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else jm(b)},
mb:km,sendFn:$r,now:U,Ed:Nr,Ca:oo(),Jc:"publicytnetworkstatus-online",Gc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,ic:Fm("potential_esf_error_limit",10),W:S,Eb:!(Gn()&&as())});this.j=new Aj;S("networkless_immediately_drop_all_requests")&&Br();Wp("LogsDatabaseV2")}
z(Zr,hr);function bs(){var a=E("yt.networklessRequestController.instance");a||(a=new Zr,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&Lp().then(function(b){a.V=b;jr(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.V&&Gr(a.V);S("networkless_immediately_drop_sw_health_store")&&cs(a)}));
return a}
Zr.prototype.writeThenSend=function(a,b){b||(b={});b=ds(a,b);Gn()||(this.h=!1);hr.prototype.writeThenSend.call(this,a,b)};
Zr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=ds(a,b);Gn()||(this.h=!1);hr.prototype.sendThenWrite.call(this,a,b,c)};
Zr.prototype.sendAndWrite=function(a,b){b||(b={});b=ds(a,b);Gn()||(this.h=!1);hr.prototype.sendAndWrite.call(this,a,b)};
Zr.prototype.awaitInitialization=function(){return this.j.promise};
function cs(a){var b;A(function(c){if(!a.V)throw b=Qo("clearSWHealthLogsDb"),b;return c.return(Hr(a.V).catch(function(d){a.handleError(d)}))})}
function $r(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&es(a,b);if(S("use_request_time_ms_header"))b.headers&&wm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Km(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Km(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.j&&k.i||k.o){var l=Yb(Zb(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(hc),r=fc(a,0,"ri",n);if(r<0)var t=null;else{var v=a.indexOf("&",r);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(r+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(F){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(F){}y=!1}c=y?!0:!1}else c=
!1;c||Kr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Xq(a,b.postBody,b,Om,d)):Xq(a,JSON.stringify(b.postParams),b,Nm,d):Om(a,b)}
function ds(a,b){S("use_event_time_ms_header")&&wm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function es(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Pr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Pr().requestComplete(a,!0);d(e,f)}}
function as(){return $b(document.location.toString())!=="www.youtube-nocookie.com"}
;var gs=!1,hs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:gs};D("ytNetworklessLoggingInitializationOptions",hs);function is(){var a;A(function(b){if(b.h==1)return b.yield(Lp(),2);a=b.i;if(!a||!Gn()&&!S("nwl_init_require_datasync_id_killswitch")||!as())return b.F(0);gs=!0;hs.isNwlInitialized=gs;return b.yield(bs().awaitInitialization(),0)})}
;function js(a){var b=this;this.config_=null;a?this.config_=a:mq()&&(this.config_=nq());Jn(function(){fr(b)},5E3)}
js.prototype.isReady=function(){!this.config_&&mq()&&(this.config_=nq());return!!this.config_};
function gr(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=dr(b,c,l,k)),r)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(F,I){er(r);t(F,I)};
c.onFetchSuccess=function(F,I){er(r);v(F,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?bs().writeThenSend(m,g):bs().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Xq(m,y,g,Om,x)}else Xq(m,JSON.stringify(g.postParams),g,Nm,x)}else S("web_all_payloads_via_jspb")?Om(m,g):Nm(m,g)}catch(F){if(F.name==="InvalidAccessError")r&&(er(r),r=0),km(Error("An extension is blocking network request."));else throw F;}r&&Jn(function(){fr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&km(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);jm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.se)&&(h=f);var k=a.config_.te||!1,l=pq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=tm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?hs.isNwlInitialized:gs)?Jp().then(function(n){e(n)}):e(!1)}
;var ks=0,ls=Vc?"webkit":Uc?"moz":Sc?"ms":Rc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++ks});var ms={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ns(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ms||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ps(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ns.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ns.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ns.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Hg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Hg);var qs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",qs);
function rs(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Gg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&Lg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ss(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=rs(a,b,c,d);if(e)return e;e=++qs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ns(h);if(!Ug(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ns(h);
h.currentTarget=a;return c.call(a,h)};
g=im(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ts()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Hg[e]=[a,b,c,g,d];return e}
function us(a){a&&(typeof a=="string"&&(a=[a]),Kb(a,function(b){if(b in Hg){var c=Hg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ts()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Hg[b]}}))}
var ts=yi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function vs(a){this.H=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=ss(window,"mousemove",Va(this.X,this));a=Va(this.R,this);typeof a==="function"&&(a=im(a));this.Z=window.setInterval(a,25)}
Ya(vs,L);vs.prototype.X=function(a){a.h===void 0&&ps(a);var b=a.h;a.i===void 0&&ps(a);this.h=new Dg(b,a.i)};
vs.prototype.R=function(){if(this.h){var a=U();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
vs.prototype.aa=function(){window.clearInterval(this.Z);us(this.U)};var ws={};
function xs(a){var b=a===void 0?{}:a;a=b.Ge===void 0?!1:b.Ge;b=b.Xd===void 0?!0:b.Xd;if(E("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&ys();ss(document,"keydown",ys);ss(document,"keyup",ys);ss(document,"mousedown",ys);ss(document,"mouseup",ys);a?ss(window,"touchmove",function(){zs("touchmove",200)},{passive:!0}):(ss(window,"resize",function(){zs("resize",200)}),b&&ss(window,"scroll",function(){zs("scroll",200)}));
new vs(function(){zs("mouse",100)});
ss(document,"touchstart",ys,{passive:!0});ss(document,"touchend",ys,{passive:!0})}}
function zs(a,b){ws[a]||(ws[a]=!0,Pj.oa(function(){ys();ws[a]=!1},b))}
function ys(){E("_lact",window)==null&&xs();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function As(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Bs=C.ytPubsubPubsubInstance||new M,Cs=C.ytPubsubPubsubSubscribedKeys||{},Ds=C.ytPubsubPubsubTopicToKeys||{},Es=C.ytPubsubPubsubIsSynchronous||{};function Fs(a,b){var c=Gs();if(c&&b){var d=c.subscribe(a,function(){function e(){Cs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Es[a]?e():Cm(e,0)}catch(g){jm(g)}},void 0);
Cs[d]=!0;Ds[a]||(Ds[a]=[]);Ds[a].push(d);return d}return 0}
function Hs(a){var b=Gs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Kb(a,function(c){b.unsubscribeByKey(c);delete Cs[c]}))}
function Is(a,b){var c=Gs();c&&c.publish.apply(c,arguments)}
function Js(a){var b=Gs();if(b)if(b.clear(a),a)Ks(a);else for(var c in Ds)Ks(c)}
function Gs(){return C.ytPubsubPubsubInstance}
function Ks(a){Ds[a]&&(a=Ds[a],Kb(a,function(b){Cs[b]&&delete Cs[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.hb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Bs);D("ytPubsubPubsubTopicToKeys",Ds);D("ytPubsubPubsubIsSynchronous",Es);D("ytPubsubPubsubSubscribedKeys",Cs);var Ls=Symbol("injectionDeps");function Ms(a){this.name=a}
Ms.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ns(a){this.key=a}
function Os(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ps(a,b){a.i.set(b.kc,b);var c=a.j.get(b.kc);if(c)try{c.Fh(a.resolve(b.kc))}catch(d){c.Dh(d)}}
Os.prototype.resolve=function(a){return a instanceof Ns?Qs(this,a.key,[],!0):Qs(this,a,[])};
function Qs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ad!==void 0)var e=d.Ad;else if(d.tf)e=d[Ls]?Rs(a,d[Ls],c):[],e=d.tf.apply(d,ka(e));else if(d.zd){e=d.zd;var f=e[Ls]?Rs(a,e[Ls],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ih||a.h.set(b,e);return e}
function Rs(a,b,c){return b?b.map(function(d){return d instanceof Ns?Qs(a,d.key,c,!0):Qs(a,d,c)}):[]}
;var Ss;function Ts(){Ss||(Ss=new Os);return Ss}
;var Us=window;function Vs(){var a,b;return"h5vcc"in Us&&((a=Us.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Us.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Us&&Us.performance.mark&&Us.performance.measure?2:0}
function Ws(a){var b=Vs();switch(b){case 1:Us.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Us.performance.mark(a+"-start");break;case 0:break;default:Bb(b,"unknown trace type")}}
function Xs(a){var b=Vs();switch(b){case 1:Us.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Us.performance.mark(c);Us.performance.measure(a,b,c);break;case 0:break;default:Bb(b,"unknown trace type")}}
;var Ys=S("web_enable_lifecycle_monitoring")&&Vs()!==0,Zs=S("web_enable_lifecycle_monitoring");function $s(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function at(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?oo():d;this.j=c;this.scheduler=d;this.i=new Aj;this.h=a;for(a={Ya:0};a.Ya<this.h.length;a={hc:void 0,Ya:a.Ya},a.Ya++)a.hc=this.h[a.Ya],c=function(e){return function(){e.hc.yc();b.h[e.Ya].jc=!0;b.h.every(function(f){return f.jc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.hc),d=this.scheduler.Wa(c,d),this.h[a.Ya]=Object.assign({},a.hc,{yc:c,
jobId:d})}
function bt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.jc||(a.scheduler.pa(c.jobId),a.scheduler.Wa(c.yc,10))}
at.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.jc||this.scheduler.pa(b.jobId),b.jc=!0;this.i.resolve()};
at.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function ct(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Ys&&Ws(this.state)}
p=ct.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Ys&&Xs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(bt(this.j),this.j=void 0);dt(this,a,b);this.state=a;Ys&&Ws(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(et(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function et(a,b){var c=b.filter(function(e){return ft(a,e)===10}),d=b.filter(function(e){return ft(a,e)!==10});
return a.B.Hh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Ne.apply(a,[c].concat(ka(e))),2);a.ud.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Oe.apply(a,[c].concat(ka(e)));a.ud.apply(a,[d].concat(ka(e)))}}
p.Oe=function(a){for(var b=B.apply(1,arguments),c=oo(),d=w(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){gt(g.Gb.name);ht(function(){return g.Gb.callback.apply(g.Gb,ka(b))});
jt(g.Gb.name)}}(f))};
p.Ne=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=oo(),d=w(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.Ra=e.value;f.Sb=void 0;g=function(k){return function(){gt(k.Ra.name);var l=ht(function(){return k.Ra.callback.apply(k.Ra,ka(b))});
Xd(l)?k.Sb=S("web_lifecycle_error_handling_killswitch")?l.then(function(){jt(k.Ra.name)}):l.then(function(){jt(k.Ra.name)},function(m){$s(m);
jt(k.Ra.name)}):jt(k.Ra.name)}}(f);
c.Ab(g);return f.Sb?h.yield(f.Sb,3):h.F(3)}f={Ra:void 0,Sb:void 0};e=d.next();return h.F(2)})};
p.ud=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{yc:function(){gt(e.name);ht(function(){return e.callback.apply(e,ka(b))});
jt(e.name)},
priority:ft(c,e)}});
d.length&&(this.j=new at(d))};
function ft(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function gt(a){Ys&&a&&Ws(a)}
function jt(a){Ys&&a&&Xs(a)}
function dt(a,b,c){Zs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(ct.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function ht(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){$s(b)}}
;function kt(a){ct.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var lt;z(kt,ct);kt.prototype.i=function(a,b){var c=this;this.h=Jn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
kt.prototype.D=function(a,b){this.h&&(Pj.pa(this.h),this.h=null);a(b==null?void 0:b.event)};
function mt(){lt||(lt=new kt);return lt}
;var nt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return nt});function ot(){this.store={};this.h={}}
ot.prototype.storePayload=function(a,b){a=pt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ot.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=qt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
ot.prototype.extractMatchingEntries=function(a){a=qt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
ot.prototype.getSequenceCount=function(a){a=qt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function qt(a,b){var c=pt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&pt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(rt(b.auth,g[0])){var h=b.isJspb;rt(h===void 0?"undefined":h?"true":"false",g[1])&&rt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),rt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function rt(a,b){return a===void 0||a==="undefined"?!0:a===b}
ot.prototype.getSequenceCount=ot.prototype.getSequenceCount;ot.prototype.extractMatchingEntries=ot.prototype.extractMatchingEntries;ot.prototype.smartExtractMatchingEntries=ot.prototype.smartExtractMatchingEntries;ot.prototype.storePayload=ot.prototype.storePayload;function pt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function st(a,b){if(a)return a[b.name]}
;var tt=Fm("initial_gel_batch_timeout",2E3),ut=Fm("gel_queue_timeout_max_ms",6E4),vt=Fm("gel_min_batch_size",5),wt=void 0;function xt(){this.o=this.h=this.i=0;this.j=!1}
var zt=new xt,At=new xt,Bt=new xt,Ct=new xt,Dt,Et=!0,Ft=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Ft);var Gt={};function Ht(){var a=E("yt.logging.ims");a||(a=new ot,D("yt.logging.ims",a));return a}
function It(a,b){if(a.endpoint==="log_event"){Jt();var c=Kt(a),d=Lt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Cr[d||""];var f,g,h,k=Ts().resolve(new Ns(hq))==null?void 0:(f=iq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=Mt(e.tier);if(k===400){Nt(a,b);return}}Gt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Ht().storePayload(e,a.payload);Ot(b,c,e,d==="gelDebuggingEvent")}}
function Ot(a,b,c,d){function e(){Pt({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(wt=new a);a=Fm("tvhtml5_logging_max_batch_ads_fork")||Fm("tvhtml5_logging_max_batch")||Fm("web_logging_max_batch")||100;var g=U(),h=Qt(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=Ht().getSequenceCount(c));d>=1E3?e():d>=a?Dt||(Dt=Rt(function(){e();Dt=void 0},0)):g-k>=10&&(St(f,c.tier),h.o=g)}
function Nt(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&Ht().storePayload({isJspb:!1},a.payload);Jt();var c=Kt(a),d=new Map;d.set(c,[a.payload]);var e=Lt(a.payload)||"";b&&(wt=new b);return new zi(function(f,g){wt&&wt.isReady()?Tt(d,wt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Kt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Ft[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Pt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new zi(function(e,f){var g=Qt(c,d),h=g.j;g.j=!1;Ut(g.i);Ut(g.h);g.h=0;wt&&wt.isReady()?d===void 0&&S("enable_web_tiered_gel")?Vt(e,f,a,b,c,300,h):Vt(e,f,a,b,c,d,h):(St(c,d),e())})}
function Vt(a,b,c,d,e,f,g){var h=wt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?Ht().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ht().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(Gt)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Ht().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ht().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Gt[l];Tt(k,h,a,b,c,!1,g)}
function St(a,b){function c(){Pt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Qt(a,b),e=d===Ct||d===Bt?5E3:ut;S("web_gel_timeout_cap")&&!d.h&&(e=Rt(function(){c()},e),d.h=e);
Ut(d.i);e=R("LOGGING_BATCH_TIMEOUT",Fm("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Et&&(e=tt);e=Rt(function(){Fm("gel_min_batch_size")>0?Ht().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=vt&&c():c()},e);
d.i=e}
function Tt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var m=a.next();for(g={};!m.done;g={Fc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ic:void 0,Hc:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Ng({context:oq(b.config_||nq())});if(!Oa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Ft[m])&&
Wt(g.batchRequest,m,n);delete Ft[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Xt(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Ic=function(r){S("start_client_gcf")&&Pj.oa(function(){return A(function(t){return t.yield(Yt(r),0)})});
k--;k||c()};
g.Fc=0;g.Hc=function(r){return function(){r.Fc++;if(e.bypassNetworkless&&r.Fc===1)try{gr(b,l,r.batchRequest,Zt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Ic,r.Hc,f)),Et=!1}catch(t){jm(t),d()}k--;k||c()}}(g);
try{gr(b,l,g.batchRequest,Zt(e,g.dangerousLogToVisitorSession,g.Ic,g.Hc,f)),Et=!1}catch(r){jm(r),d()}}}
function Zt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,kh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};$t()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Xt(a,b,c){$t()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),em("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Wt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Jt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Em("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(nt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",nt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function $t(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Rt(a,b){return S("transport_use_scheduler")===!1?Cm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Jn(function(){if(mt().currentState==="none")a();else{var c={};mt().install((c.none={callback:a},c))}},b):Jn(a,b)}
function Ut(a){S("transport_use_scheduler")?Pj.pa(a):window.clearTimeout(a)}
function Yt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=st(d,Hl),g=(f=d)==null?void 0:f.hotHashData,h=st(d,Gl),l=(k=d)==null?void 0:k.coldHashData,(m=Ts().resolve(new Ns(hq)))?g?e?n.yield(jq(m,g,e),2):n.yield(jq(m,g),2):n.F(2):n.return()):l?h?n.yield(kq(m,l,h),0):n.yield(kq(m,l),0):n.F(0)})}
function Qt(a,b){b=b===void 0?200:b;return a?b===300?Ct:At:b===300?Bt:zt}
function Lt(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Cr[b])return b}
function Mt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var au=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",au);
function bu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=As();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,au[b]=b in au?au[b]+1:0,a.sequence={index:au[b],groupKey:b},d.endOfSequence&&delete au[d.sequenceGroup]);(d.sendIsolatedPayload?Nt:It)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function yo(a,b,c){c=c===void 0?{}:c;var d=js;R("ytLoggingEventsDefaultDisabled",!1)&&js===js&&(d=null);bu(a,b,d,c)}
;function cu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var du=new Set,eu=0,fu=0,gu=0,hu=[],iu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function xo(a){ju(a)}
function ku(a){ju(a,"WARNING")}
function lu(a){a instanceof Error?ju(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",ku(a))}
function ju(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(eu>=5))){d=hu;var k=Sb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=fn(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var v="params."+r,x=hn(t[r]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=hn(t)}if(d.length)for(r=0;r<d.length&&!(n=fn(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=bn();c=w(a.Sa);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.yh)){a=d.weight;break a}a=w(a.Oa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=w(Xm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.fc[r.name])for(e=w(c.fc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Dc(f);break}r.params||(r.params={});a=bn();r.params["params.errorServiceSignature"]="msg="+a.Sa.length+"&cb="+a.Oa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Qg(Rg,"sample")).constructor!==Qg&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(r);if(r.sampleWeight!==0&&!du.has(r.message)){if(g&&S("web_enable_error_204"))mu(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(cn.hb("handleError",r),S("record_app_crashed_web")&&gu===0&&r.sampleWeight===1&&(gu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),yo("appCrashed",g)),fu++):b==="WARNING"&&cn.hb("handleWarning",r);if(S("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=w(iu);for(c=a.next();!c.done;c=a.next())if(Eo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!fm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=w(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(yo("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Pt(void 0,void 0,!1))}S("suppress_error_204_logging")||mu(b,r)}try{du.add(r.message)}catch(y){}eu++}}}
function mu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Om(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function nu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ka(b))}
;function ou(){this.register=new Map}
function pu(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ch("ABORTED")}
ou.prototype.clear=function(){pu(this);this.register.clear()};
var qu=new ou;var ru=Date.now().toString();
function su(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(ru)for(a=1,b=0;b<ru.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ru.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var tu,uu=C.ytLoggingDocDocumentNonce_;uu||(uu=su(),D("ytLoggingDocDocumentNonce_",uu));tu=uu;function vu(a){this.h=a}
p=vu.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Jl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&qf(a,2,se(this.h.veType)),this.h.veCounter!==void 0&&qf(a,6,se(this.h.veCounter)),this.h.elementIndex!==void 0&&qf(a,3,se(this.h.elementIndex)),this.h.isCounterfactual&&qf(a,5,oe(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Df(a,Jl,7,b)}this.h.youtubeData!==void 0&&Df(a,Il,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function wu(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function xu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},em("client-screen-nonce-store",c));c[b]=a}
function yu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function zu(a){return R(yu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",zu);function Au(){var a=R("csn-to-ctt-auth-info");a||(a={},em("csn-to-ctt-auth-info",a));return a}
function Bu(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Cu(a){a=wu(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Cu);function Du(a,b,c){var d=Au();(c=Cu(c))&&delete d[c];b&&(d[a]=b)}
function Eu(a){return Au()[a]}
D("yt_logging_screen.getCttAuthInfo",Eu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==wu(c)||b!==R(yu(c)))if(Du(a,d,c),xu(a,c),em(yu(c),b),b=function(){setTimeout(function(){a&&yo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:tu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Fu(){var a=Mg(Gu),b;return(new zi(function(c,d){a.onSuccess=function(e){Bm(e)?c(new Hu(e)):d(new Iu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Iu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Iu("Request timed out","net.timeout",e))};
b=Om("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof Gi){var d;
(d=b)==null||d.abort()}return Ei(c)})}
function Iu(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
z(Iu,Za);function Hu(a){this.xhr=a}
;function Ju(){this.h=0;this.i=null}
Ju.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Ku(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Lu(a):this};
Ju.prototype.getValue=function(){return this.i};
Ju.prototype.isRejected=function(){return this.h==2};
Ju.prototype.$goog_Thenable=!0;function Lu(a){var b=new Ju;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Ku(a){var b=new Ju;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Mu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:wm(a)?"same-origin":"cors",credentials:wm(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Nu(){return sg()||(Xc||Yc)&&Eo("applewebkit")&&!Eo("version")&&(!Eo("safari")||Eo("gsa/"))||Wc&&Eo("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ou(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Nl)if(Nl[d]==c.embeddedPlayerMode){b=Nl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Pu(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Qu;this.isTimeout=a instanceof Iu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Gi}
z(Pu,Za);Pu.prototype.name="BiscottiError";function Qu(){Za.call(this,"Biscotti ID is missing from server")}
z(Qu,Za);Qu.prototype.name="BiscottiMissingError";var Gu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ru=null;function Su(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Nu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(Kg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Ou(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Yl(){var a=Su();if(a!==void 0)return Ei(a);Ru||(Ru=Fu().then(Tu).oc(function(b){return Uu(2,b)}));
return Ru}
function Tu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Qu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Qu;a=a.id;Zl(a);Ru=Ku(a);Vu(18E5,2);return a}
function Uu(a,b){b=new Pu(b);Zl("");Ru=Lu(b);a>0&&Vu(12E4,a-1);throw b;}
function Vu(a,b){Cm(function(){Fu().then(Tu,function(c){return Uu(b,c)}).oc(xi)},a)}
function Wu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Yl()}catch(b){return Ei(b)}}
;var yb=ha(["data-"]);function Xu(a){a&&(a.dataset?a.dataset[Yu()]="true":Ab(a))}
function Zu(a){return a?a.dataset?a.dataset[Yu()]:a.getAttribute("data-loaded"):null}
var $u={};function Yu(){return $u.loaded||($u.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function av(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Mg(b);this.assets=a.assets||{};this.attrs=a.attrs||Mg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
av.prototype.clone=function(){var a=new av,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Na(c)=="object"?a[b]=Mg(c):a[b]=c}return a};var bv=["share/get_share_panel"],cv=["share/get_web_player_share_panel"],dv=["feedback"],ev=["notification/modify_channel_preference"],fv=["browse/edit_playlist"],gv=["subscription/subscribe"],hv=["subscription/unsubscribe"];var iv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",iv);function jv(a){$l(iv,arguments)}
;function kv(a,b,c){lv(a,b,c===void 0?null:c)}
function mv(a){a=nv(a);var b=document.getElementById(a);b&&(Js(a),b.parentNode.removeChild(b))}
function ov(a,b){a&&b&&(a=""+Qa(b),(a=pv[a])&&Hs(a))}
function lv(a,b,c){c=c===void 0?null:c;var d=nv(a),e=document.getElementById(d),f=e&&Zu(e),g=e&&!f;f?b&&b():(b&&(f=Fs(d,b),b=""+Qa(b),pv[b]=f),g||(e=qv(a,d,function(){Zu(e)||(Xu(e),Is(d),Cm(function(){Js(d)},0))},c)))}
function qv(a,b,c,d){d=d===void 0?null:d;var e=Tg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ib(e,El(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function nv(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wb(a)}
var pv={};function rv(a){var b=sv(a),c=document.getElementById(b),d=c&&Zu(c);d||c&&!d||(c=tv(a,b,function(){if(!Zu(c)){Xu(c);Is(b);var e=Wa(Js,b);Cm(e,0)}}))}
function tv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=El(a);Db(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sv(a){var b=Tg("A");wb(b,new ob(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wb(a)}
;function uv(a){var b=B.apply(1,arguments);if(!vv(a)||b.some(function(d){return!vv(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())wv(a,c.value)}
function wv(a,b){for(var c in b)if(vv(b[c])){if(c in a&&!vv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});wv(a[c],b[c])}else if(xv(b[c])){if(c in a&&!xv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);yv(a[c],b[c])}else a[c]=b[c];return a}
function yv(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,vv(c)?a.push(wv({},c)):xv(c)?a.push(yv([],c)):a.push(c);return a}
function vv(a){return typeof a==="object"&&!Array.isArray(a)}
function xv(a){return typeof a==="object"&&Array.isArray(a)}
;var zv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Av(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=$b(window.location.href);e&&d.push(e);e=$b(a);if(Jb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),wb(d,a),a=d.href)if(a=ac(a),a=bc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Cu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Bv(a,b,f)}else Bv(a,b)}
function Bv(a,b,c){a=Cv(a);b=b?dc(b):"";c=c||5;Nu()&&pn(a,b,c)}
function Cv(a){for(var b=w(zv),c=b.next();!c.done;c=b.next())a=jc(a,c.value);return"ST-"+Wb(a).toString(36)}
;function Dv(a){sq.call(this,1,arguments);this.csn=a}
z(Dv,sq);var Bq=new tq("screen-created",Dv),Ev=[],Fv=0,Gv=new Map,Hv=new Map,Iv=new Map;
function Jv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Kv({cttAuthInfo:Eu(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Ig(k)||!k.trackingParams&&!k.veType)&&ku(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Lv(h,b);if(k.veType&&!Hv.has(l)&&!Iv.has(l)&&!e){if(!S("il_attach_cache_limit")||Gv.size<1E3){Gv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&Gv.size>1E3&&ku(new T("IL Attach cache exceeded limit"))}h=Lv(c,b);Gv.has(h)?
Mv(c,b):Iv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Mb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Nv("visualElementAttached",f,c):a?bu("visualElementAttached",c,a,f):yo("visualElementAttached",c,f)}
function Nv(a,b,c){Ev.push({Fe:a,payload:c,uh:void 0,options:b});Fv||(Fv=Cq())}
function Dq(a){if(Ev){for(var b=w(Ev),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,yo(c.Fe,c.payload,c.options));Ev.length=0}Fv=0}
function Lv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Mv(a,b){a=Lv(a,b);Gv.has(a)&&(b=Gv.get(a)||[],Jv(b[0],b[1],b[2],[b[3]],!0),Gv.delete(a))}
function Kv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Ov(){try{return!!self.localStorage}catch(a){return!1}}
;function Pv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Qv(a){if(Ov()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Pv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Rv(){if(!Ov())return!1;var a=Hn(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Pv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Sv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Tv(a){if(R("LOGGED_IN",!0)&&Sv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=$b(window.location.href);c&&b.push(c);c=$b(a);Jb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ac(a),(b=bc(b))?(b=Cv(b),b=(b=qn(b)||null)?rm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Sv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Av(a,b)}}
;function Uv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Av(a,b);if(c)return!1;Tv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ec(a,e);Tv(a);f=a+f;var h=h===void 0?sb:h;a:if(h=h===void 0?sb:h,f instanceof ob)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof qb&&b.ue(f)){h=new ob(f);break a}h=void 0}g=g.location;h=ub(h||pb);h!==void 0&&(g.href=h);return!0}
;function Vv(a){if(Kg(R("PLAYER_VARS",{}))!="1"){a&&Xl();try{Wu().then(function(){},function(){}),Cm(Vv,18E5)}catch(b){jm(b)}}}
;var Wv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Xv(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=Yb(Zb(5,a));if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=sm(a).theme;return Wv.get(c)||null}catch(d){}return null}
;function Yv(){this.h={};if(this.i=sn()){var a=qn("CONSISTENCY");a&&Zv(this,{encryptedTokenJarContents:a})}}
Yv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.La.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Zv(this,a)}};
function Zv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&pn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var $v=window.location.hostname.split(".").slice(-2).join(".");function aw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=bw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var cw;function dw(){cw=E("yt.clientLocationService.instance");cw||(cw=new aw,D("yt.clientLocationService.instance",cw));return cw}
p=aw.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=bw(this))&&this.h.set("yt-location-playability-token",a,15552E3):pn("YT_CL",JSON.stringify({loctok:a}),15552E3,$v,!0))};
function bw(a){return a.h===void 0?new po("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=bw(this))&&this.h.remove("yt-location-playability-token"):rn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function ew(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function fw(){this.h={}}
fw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
fw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
fw.prototype.set=function(a,b){this.h[a]=b};
fw.prototype.remove=function(a){delete this.h[a]};function gw(){this.mappings=new fw}
gw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
gw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Bb(b)}}return a};
new gw;function hw(a){return function(){return new a}}
;var iw={},jw=(iw.WEB_UNPLUGGED="^unplugged/",iw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",iw.WEB_UNPLUGGED_OPS="^unplugged/",iw.WEB_UNPLUGGED_PUBLIC="^unplugged/",iw.WEB_CREATOR="^creator/",iw.WEB_KIDS="^kids/",iw.WEB_EXPERIMENTS="^experiments/",iw.WEB_MUSIC="^music/",iw.WEB_REMIX="^music/",iw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",iw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",iw);
function kw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=jw[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(jw).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function lw(){}
lw.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?on:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=Ng(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;wn();var l="USER_INTERFACE_THEME_LIGHT";zn(165)?l="USER_INTERFACE_THEME_DARK":zn(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Xv()||l;h.userInterfaceTheme=k;if(!f){if(k=En())h.connectionType=k;S("web_log_effective_connection_type")&&(k=Fn())&&(g.client.effectiveConnectionType=k)}var m;if(S("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}S("web_gcf_hashes_innertube")&&(k=lq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=sm(C.location.href);!S("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&jn.h&&(n=jn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=kn(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(n=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}r=
void 0}r&&(h.timeZone=r)}(r=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=Gm();Yv.h||(Yv.h=new Yv);h=Yv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!S("web_prequest_context_killswitch")&&(t=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=wn();t=zn(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);S("warm_op_csn_cleanup")?e&&(f=Cu())&&(g.clientScreenNonce=f):!f&&(f=Cu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;dw().setLocationOnInnerTubeContext(g);try{var v=xm(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=w(Object.entries(v));for(var F=y.next();!F.done;F=y.next()){var I=w(F.value),O=I.next().value,V=I.next().value;v=O;x=V;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var cb,vb;if(((cb=g.client)==null?void 0:cb.clientName)==="TVHTML5"||((vb=g.client)==null?void 0:vb.clientName)==="TVHTML5_UNPLUGGED"&&S("add_ifa_to_tvh5_requests")){var ea=R("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(na){ju(na)}y=g}else ju(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(F=this.i(a)){this.h(y,F,b);var Z;b="/youtubei/v1/"+kw(this.j());(F=(Z=st(a.commandMetadata,Ll))==null?void 0:Z.apiUrl)&&(b=F);Z=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String(ac(Z)));b={};S("json_condensed_response")&&(b.prettyPrint="false");Z=um(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,eb:Mu(Z),La:y,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}ju(new T("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(lw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function mw(){}
z(mw,lw);function nw(){}
z(nw,mw);nw.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",eb:Mu("/getDatasyncIdsEndpoint","GET"),La:{}}};
nw.prototype.j=function(){return[]};
nw.prototype.i=function(){};
nw.prototype.h=function(){};var ow={},pw=(ow.GET_DATASYNC_IDS=hw(nw),ow);function qw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function rw(){var a=qw();a.info||(a.info={});return a.info}
function sw(a){a=qw(a);a.metadata||(a.metadata={});return a.metadata}
function tw(a){a=qw(a);a.tick||(a.tick={});return a.tick}
function uw(a){a=qw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function vw(a){a=uw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ww(a){var b=qw(a).nonce;b||(b=su(),qw(a).nonce=b);return b}
;function xw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function yw(a){a=a||"";var b=E("ytcsi.reference");b||(xw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=xw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},zw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},Aw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",
X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
X);Object.assign(Aw,zw);function Bw(a,b){sq.call(this,1,arguments);this.timer=b}
z(Bw,sq);var Cw=new tq("aft-recorded",Bw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Dw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Dw);function Ew(){this.h=0}
function Fw(){Ew.h||(Ew.h=new Ew);return Ew.h}
Ew.prototype.tick=function(a,b,c,d){Gw(this,"tick_"+a+"_"+b)||yo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Ew.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Gw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,yo("latencyActionInfo",a,{cttAuthInfo:c}))};
Ew.prototype.jspbInfo=function(){};
Ew.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Gw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,yo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Gw(a,b){Dw[b]=Dw[b]||{count:0};var c=Dw[b];c.count++;c.time=U();a.h||(a.h=Jn(function(){var d=U(),e;for(e in Dw)Dw[e]&&d-Dw[e].time>6E4&&delete Dw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||ku(c)),!0):!1}
;var Hw=window;function Iw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Jw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Kw(e.requestStart),e.responseEnd=Kw(e.responseEnd),e.redirectStart=Kw(e.redirectStart),e.redirectEnd=Kw(e.redirectEnd),e.domainLookupEnd=Kw(e.domainLookupEnd),e.connectStart=Kw(e.connectStart),e.connectEnd=
Kw(e.connectEnd),e.responseStart=Kw(e.responseStart),e.secureConnectionStart=Kw(e.secureConnectionStart),e.domainLookupStart=Kw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Kw(a){return Math.round(Lw()+a)}
function Lw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Hw.performance||Hw.mozPerformance||Hw.msPerformance||Hw.webkitPerformance||new Iw;var Mw=!1,Nw=!1,Ow={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||xi,Y);function Pw(a,b){if(!S("web_csi_action_sampling_enabled")||!qw(b).actionDisabled){var c=yw(b||"");uv(c.info,a);a.loadType&&(c=a.loadType,sw(b).loadType=c);uv(vw(b),a);c=ww(b);b=qw(b).cttAuthInfo;Fw().info(a,c,b)}}
function Qw(){var a,b,c,d;return((d=Ts().resolve(new Ns(hq))==null?void 0:(a=iq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Rw(a,b,c){if(!S("web_csi_action_sampling_enabled")||!qw(c).actionDisabled){var d=ww(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Ts().resolve(new Ns(hq))==null?0:iq())&&!Nw&&(Nw=!0,Rw("gcfl",U(),c));var f,g,h;e=(Ts().resolve(new Ns(hq))==null?void 0:(f=iq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Qw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+
d.charCodeAt(g),g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;qw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Pw(f,c));qw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);
try{Y.mark(e,{startTime:f})}catch(k){}}e=yw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=uw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=tw(c);e=b||U();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=qw(c).cttAuthInfo;a==="_start"?(a=Fw(),Gw(a,"baseline_"+d)||yo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Fw().tick(a,d,b,f);Sw(c);return e}}}
function Tw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ls+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Uw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Vw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Eb(window)&&a.setAttribute("nonce",Eb(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Lw(),Rw("rsf_"+b,c+Math.round(a.fetchStart)),Rw("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Ww(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Lb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Nb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Rw("wffs",Kw(b.startTime)),Rw("wffe",Kw(b.responseEnd)))}
function Xw(a){var b=Yw("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Yw(b[d],a);if(e)return e}return NaN}
function Yw(a,b){if(a=tw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Sw(a){var b=Yw("_start",a),c=Xw(a),d=S("enable_cow_info_csi")||!Mw;b&&c&&d&&(yq(Cw,new Bw(Math.round(c-b),a)),Mw=!0)}
function Zw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Ob(a,function(c){return c.name==="first-paint"}))return Kw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.zh;return b?Math.max(0,b):0}
;function $w(a,b){im(function(){yw("").info.actionType=a;b&&em("TIMING_AFT_KEYS",b);em("TIMING_ACTION",a);var c=Uw();Object.keys(c).length>0&&Pw(c);c={isNavigation:!0,actionType:Aw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=Aw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Cu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Tw();if(d===1||d===-1)c.isVisible=!0;sw();rw();
c.loadType="cold";d=rw();var e=Jw(),f=Lw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Rw("srt",e.responseStart),d.prerender!==1&&Rw("_start",f,void 0));d=Zw();d>0&&Rw("fpt",d);d=Jw();d.isPerformanceNavigationTiming&&Pw({performanceNavigationTiming:!0},void 0);Rw("nreqs",d.requestStart,void 0);Rw("nress",d.responseStart,void 0);Rw("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Rw("nrs",d.redirectStart,void 0),Rw("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Rw("ndnss",d.domainLookupStart,void 0),Rw("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Rw("ntcps",d.connectStart,void 0),Rw("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Lw()&&d.connectEnd-d.secureConnectionStart>0&&(Rw("nstcps",d.secureConnectionStart,void 0),Rw("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Ww();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Ow)Ow.hasOwnProperty(h)&&
(e=Ow[h],Vw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Pw(c);c=uw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=vw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(sw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=tw();e=uw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Rw(k,Yw(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Rw(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,uv(c,d),uv(k,d),d=!0;d&&Pw(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&ax()&&Xw()&&Sw()})()}
function ax(){return im(function(){return bx()})()}
function cx(a,b,c){im(Pw)(a,b,c===void 0?!1:c)}
function dx(a,b,c){return im(Rw)(a,b,c)}
function bx(){return im(function(){return"_start"in tw()})()}
function ex(){im(function(){var a=ww();requestAnimationFrame(function(){setTimeout(function(){a===ww()&&dx("ol",void 0,void 0)},0)})})()}
var fx=window;fx.ytcsi&&(fx.ytcsi.infoGel=cx,fx.ytcsi.tick=dx);var gx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),hx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ix(a,b,c,d){this.D=a;this.da=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},pw,a.Nb)}
function jx(a,b,c,d){if(ix.h!==void 0){if(d=ix.h,a=[a!==d.D,b!==d.da,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else ix.h=new ix(a,b,c,d)}
function kx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?on:c;var d=lx(a,b);return d?new zi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.F(0);break}Tv(h.input);l=((k=h.eb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.kf){var r=h.config,t;r=r==null?void 0:(t=r.Tb)==null?void 0:t.sessionIndex;t=nn(0,{sessionIndex:r});m=Object.assign({},
ew(l),t);n.F(4);break}return n.yield(mx(h.config,l),5);case 5:m=n.i;case 4:e(nx(a,h,m)),n.h=0}})}):Ei(new T("Error: No request builder found for command.",b))}
function ox(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=w(gx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function nx(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,v,x,y,F,I,O,V,cb,vb,ea,Z,na,Ma,La,Zg,$g,Ur,Vr,Wr,Xr;return A(function(ia){switch(ia.h){case 1:ia.F(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.La)==null?0:g.context)){ia.F(4);break}h=b.La.context;ia.F(5);break;case 5:k=w([]),l=k.next();case 8:if(l.done){ia.F(4);break}m=l.value;return ia.yield(m.Bh(h),9);case 9:l=k.next();ia.F(8);break;case 4:if((n=a.i)==null||!n.Gh(b.input,b.La)){ia.F(12);break}return ia.yield(a.i.wh(b.input,
b.La),13);case 13:return r=ia.i,ox(a,r,b),ia.return(r);case 12:return(x=(v=b.config)==null?void 0:v.Eh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.La),O=(I=(F=b.eb)==null?void 0:F.headers)!=null?I:{},b.eb=Object.assign({},b.eb,{headers:Object.assign({},O,c)}),V=Object.assign({},b.eb),b.eb.method==="POST"&&(V=Object.assign({},V,{body:y})),((cb=b.config)==null?0:cb.Le)&&dx(b.config.Le),vb=function(){return a.da.fetch(b.input,V,b.config)},t=vb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ea=ia.i)&&"error"in ea&&((Z=ea)==null?0:(na=Z.error)==null?0:na.details))for(Ma=ea.error.details,La=w(Ma),Zg=La.next();!Zg.done;Zg=La.next())$g=Zg.value,(Ur=$g["@type"])&&hx.indexOf(Ur)>-1&&(delete $g["@type"],ea=$g);x&&a.h.has(x)&&a.h.delete(x);((Vr=b.config)==null?0:Vr.Me)&&dx(b.config.Me);if(ea||(Wr=a.i)==null||!Wr.mh(b.input,b.La)){ia.F(15);break}return ia.yield(a.i.vh(b.input,b.La),16);case 16:ea=ia.i;case 15:return ox(a,ea,b),((Xr=b.config)==null?0:Xr.He)&&dx(b.config.He),d(),ia.return(ea||
void 0)}})}
function lx(a,b){a:{a=a.D;var c,d=(c=st(b,Ml))==null?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=(f=st(b,Kl))==null?void 0:f.request)&&a.Td&&(f=a.Td[c])){e=f();break a}for(e in b)if(a.Uc[e]&&(b=a.Uc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function mx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Tb)==null?void 0:d.sessionIndex;var h=g.yield;var k=nn(0,{sessionIndex:e});if(!(k instanceof zi)){var l=new zi(xi);Ai(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},ew(b),f)))})}
;var px=new Ms("INNERTUBE_TRANSPORT_TOKEN");function qx(){}
z(qx,mw);qx.prototype.j=function(){return gv};
qx.prototype.i=function(a){return st(a,Wl)||void 0};
qx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(qx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function rx(){}
z(rx,mw);rx.prototype.j=function(){return hv};
rx.prototype.i=function(a){return st(a,Vl)||void 0};
rx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(rx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var sx=new Ms("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function tx(a){this.u=a}
z(tx,mw);tx.prototype.j=function(){return bv};
tx.prototype.i=function(a){return st(a,Ql)||st(a,Rl)||st(a,Pl)};
tx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
tx[Ls]=[sx];function ux(){}
z(ux,mw);ux.prototype.j=function(){return dv};
ux.prototype.i=function(a){return st(a,Ol)||void 0};
ux.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ux.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vx(){}
z(vx,mw);vx.prototype.j=function(){return ev};
vx.prototype.i=function(a){return st(a,Ul)||void 0};
vx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function wx(){}
z(wx,mw);wx.prototype.j=function(){return fv};
wx.prototype.i=function(a){return st(a,Tl)||void 0};
wx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function xx(){}
z(xx,mw);xx.prototype.j=function(){return cv};
xx.prototype.i=function(a){return st(a,Sl)};
xx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var yx=new Ms("FETCH_FN_TOKEN"),zx=new Ms("PARSE_FN_TOKEN");function Ax(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
z(Ax,T);var Bx=new Ms("NETWORK_SLI_TOKEN");function Cx(a,b,c){this.h=a;this.i=b;this.j=c}
Cx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=Dx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){ku(k);
if((c==null?0:c.ae)&&k instanceof Ax&&k.errorType===1)return Promise.reject(k)}))})};
function Dx(a,b,c){if(a.h){var d=Yb(Zb(5,jc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=$q(c));return new window.Request(b,a)}
Cx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.we)&&a.ok)return Zf(b.we,e);e=e.replace(")]}'","");if((b==null?0:b.ae)&&e)try{var f=d(e)}catch(h){throw new Ax(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.qh(),c=c.then(function(e){ku(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Cx[Ls]=[new Ns(Bx),new Ns(yx),new Ns(zx)];var Ex=new Ms("NETWORK_MANAGER_TOKEN");var Fx;function Gx(){var a,b,c;return A(function(d){if(d.h==1)return a=Ts().resolve(px),a?d.yield(kx(a),2):(ku(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ku(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.oh;return d.return(c)}ku(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Hx(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Ix=C.caches,Jx;function Kx(a){var b=a.indexOf(":");return b===-1?{nd:a}:{nd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Lx(){return A(function(a){if(Jx!==void 0)return a.return(Jx);Jx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(Ix.open("test-only"),4);case 4:return d.yield(Ix.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=za(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Jx)})}
function Mx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Lx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Ix.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Kx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ix.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Nx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Lx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Hn("cache contains other");return h.yield(Ix.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Kx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ox(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Px(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Qx(a){if(Ox()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Px(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Rx(){if(!Ox())return!1;var a=Hn(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Px(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Sx(){Gx().then(function(a){a&&(Np(a),Mx(a),Qv(a),Qx(a))})}
function Tx(){var a=new Sr;Pj.oa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=Hn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Np(h);Mx(h);Qv(h);Qx(h);return g.return()}c=Rv();d=Rx();return g.yield(Nx(),3);case 3:return e=g.i,g.yield(Op(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?Sx():a.h.add("publicytnetworkstatus-online",Sx,!0,void 0,void 0),g.h=0}})})}
;function Ux(){this.state=1;this.h=null}
p=Ux.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new Fb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Dl(a.interpreterSafeUrl).toString());Vx(this,d,e,a.program,b,c)}else ku(Error("Cannot initialize botguard without program"))};
function Vx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,kv(c,function(){window[g]?Wx(a,d,g,e):(a.state=3,mv(c),ku(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Tg("SCRIPT"),b instanceof Fb?Hb(f,b):f.textContent=b,f.nonce=Eb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Wx(a,d,g,e):(a.state=4,ku(new T("Unable to load Botguard from JS")))):ku(new T("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function Wx(a,b,c,d){a.state=5;try{var e=new Bj({program:b,he:c,Je:S("att_web_record_metrics"),Be:{wa:"aGIf"}});e.cf.then(function(){a.state=6;d&&d(b)});
a.Lc(e)}catch(f){a.state=7,f instanceof Error&&ku(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Oc()?this.Cd({Vc:a}):null};
p.dispose=function(){this.Lc(null);this.state=8};
p.Oc=function(){return!!this.h};
p.Cd=function(a){return this.h.vd(a)};
p.Lc=function(a){wg(this.h);this.h=a};var Xx=[],Yx=!1;function Zx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Nu()){var a=R("PLAYER_VARS",{});if(Kg(a)!="1"&&!Ou(a)){var b=function(){Yx=!0;"google_ad_status"in window?em("DCLKSTAT",1):em("DCLKSTAT",2)};
try{kv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Xx.push(Pj.oa(function(){if(!(Yx||"google_ad_status"in window)){try{ov("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Yx=!0;em("DCLKSTAT",3)}},5E3))}}}
function $x(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function ay(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function by(){Ux.apply(this,arguments)}
z(by,Ux);by.prototype.Lc=function(a){var b;(b=ay())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.vd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
by.prototype.Oc=function(){return!!ay()};
by.prototype.Cd=function(a){return ay().bgvmc(a)};function cy(a){ct.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
z(cy,ct);cy.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
cy.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
cy.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
cy.prototype.i=function(){this.h=new Map};function dy(a){ct.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
z(dy,ct);dy.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
dy.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
dy.prototype.D=function(a,b){a(b==null?void 0:b.event)};
dy.prototype.u=function(a,b){a(b==null?void 0:b.event)};function ey(){this.o=new cy;this.D=new dy}
ey.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function fy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
fy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Cu(c===void 0?0:c)){a=this.client;d=new vu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Lv(d,c);Hv.set(f,!0);Mv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Kv({cttAuthInfo:Eu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Nv("visualElementGestured",f,d):a?bu("visualElementGestured",d,a,f):yo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
fy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new vu({trackingParams:a}),b,c===void 0?0:c)};
fy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Cu(d);a||(a=(a=zu(d===void 0?0:d))?new vu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Kv({cttAuthInfo:Eu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Nv("visualElementStateChanged",d,b):a?bu("visualElementStateChanged",b,a,d):yo("visualElementStateChanged",b,d))}};
function gy(a,b){if(b===void 0)for(var c=Bu(),d=0;d<c.length;d++)c[d]!==void 0&&gy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Jv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function hy(){ey.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||Jn(iy)}
z(hy,ey);hy.prototype.j=function(){yo("finalPayload",{csn:Cu()})};
hy.prototype.h=function(){pu(qu)};
hy.prototype.i=function(){var a=gy;fy.h||(fy.h=new fy);a(fy.h)};
function iy(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Vd();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&yo("genericClientExperimentEvent",{eventType:c});delete dm.CLIENT_EXPERIMENT_EVENTS}}
;function jy(){}
function ky(){var a=E("ytglobal.storage_");a||(a=new jy,D("ytglobal.storage_",a));return a}
jy.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(ly()):d.return()})};
function ly(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",jy);function wo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
wo.prototype.Ea=function(a){this.handleError(a)};
wo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":my(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function my(a,b){ky().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:ny(c==null?void 0:c.usage),deviceStorageQuotaMbytes:ny(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ny(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var oy={},py=(oy["api.invalidparam"]=2,oy.auth=150,oy["drm.auth"]=150,oy["heartbeat.net"]=150,oy["heartbeat.servererror"]=150,oy["heartbeat.stop"]=150,oy["html5.unsupportedads"]=5,oy["fmt.noneavailable"]=5,oy["fmt.decode"]=5,oy["fmt.unplayable"]=5,oy["html5.missingapi"]=5,oy["html5.unsupportedlive"]=5,oy["drm.unavailable"]=5,oy["mrm.blocked"]=151,oy["embedder.identity.denied"]=152,oy);var qy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function ry(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function sy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(qy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function ty(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function uy(a){L.call(this);var b=this;this.api=a;this.X=this.u=!1;this.B=[];this.R={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.X=!0;b.u=!1;b.sendMessage("initialDelivery",vy(b));b.sendMessage("onReady");e=w(b.B);for(d=e.next();!d.done;d=e.next())wy(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.R[e]||e==="onReady"||
(c=xy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.R[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&ry(e)){var f=d;if(Pa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=sy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=sy(g);break;case "loadPlaylist":case "cuePlaylist":g=ty(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);ry(e)&&yy(b,vy(b))}}}};
zy.addEventListener("message",this.H);if(a=R("WIDGET_ID"))this.sessionId=a;Ay(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?py[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Ay(this,"onVideoProgress",this.Xe.bind(this));Ay(this,"onVolumeChange",this.Ye.bind(this));Ay(this,"onApiChange",this.Qe.bind(this));Ay(this,"onPlaybackQualityChange",this.Ue.bind(this));Ay(this,"onPlaybackRateChange",this.Ve.bind(this));Ay(this,"onStateChange",this.We.bind(this));Ay(this,"onWebglSettingsChanged",this.Ze.bind(this));Ay(this,"onCaptionsTrackListChanged",this.Re.bind(this));Ay(this,"captionssettingschanged",this.Se.bind(this))}
z(uy,L);function yy(a,b){a.sendMessage("infoDelivery",b)}
p=uy.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.X?wy(this,a):this.B.push(a)};
function xy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Ay(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function vy(a){if(!a.api)return null;var b=a.api.getApiInterface();Pb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.We=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());yy(this,a)};
p.Ue=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());yy(this,a)};
p.Ve=function(a){yy(this,{playbackRate:a})};
p.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Ye=function(){yy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Xe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());yy(this,a)};
p.Ze=function(){yy(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Re=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};yy(this,a)}};
p.Se=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};yy(this,a)}};
function wy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){ku(d)}}}
p.aa=function(){L.prototype.aa.call(this);zy.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var zy=window;function By(a,b,c){L.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Cy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Dy(g,f))&&Ey(d,g,f))}}}}}};
Fy.addEventListener("message",this.i);Ey(this,"RECEIVING")}
z(By,L);p=By.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.Te.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.Te=function(a,b){this.ea||Ey(this,a,Gy(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Cy(a,b){switch(a){case "loadVideoById":return[sy(b)];case "cueVideoById":return[sy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[ty(b)];case "cuePlaylist":return[ty(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Dy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Gy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Ey(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),Hy.postMessage(JSON.stringify(b),a.origin))}
p.aa=function(){Fy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);L.prototype.aa.call(this)};
var Fy=window,Hy=window.parent;var Iy=new by;function Jy(){return Iy.Oc()}
function Ky(a){a=a===void 0?{}:a;return Iy.invoke(a)}
;function Ly(a,b,c,d,e){L.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.qc=e;this.yb=!1;this.api={};this.ia=this.u=null;this.U=new M;this.h={};this.Z=this.sa=this.elementId=this.zb=this.config=null;this.X=!1;this.j=this.H=null;this.Va={};this.sc=["onReady"];this.lastError=null;this.Rb=NaN;this.R={};this.ga=0;this.i=this.o=a;yg(this,this.U);My(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Ny(this),Oy(this))}
z(Ly,L);p=Ly.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.ea){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof av||(b=new av(b));this.config=b;this.setConfig(a);Oy(this);this.isReady()&&Py(this)}};
function Ny(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.zb=a;this.config=Qy(a);Ny(this);if(!this.sa){var b;this.sa=Ry(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Jj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Jj(Number(a)||a))};
function Py(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Sy(a){var b=!0,c=Ty(a);c&&a.config&&(b=c.dataset.version===Uy(a));return b&&!!E("yt.player.Application.create")}
function Oy(a){if(!a.ea&&!a.X){var b=Sy(a);if(b&&(Ty(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Vy(a);else if(Wy(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Vy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Xy(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Qy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.qc);Vy(a)};
a.X=!0;b?a.H():(kv(Uy(a),a.H),(b=Yy(a))&&rv(b||""),Zy(a)&&!c&&D("yt.player.Application.create",null))}}}
function Ty(a){var b=Sg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Vy(a){if(!a.ea){var b=Ty(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Xy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}$y(a)}else a.Rb=setTimeout(function(){Vy(a)},50)}}
function $y(a){My(a);a.yb=!0;var b=Ty(a);if(b){a.u=az(a,b,"addEventListener");a.ia=az(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=az(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Py(a);a.sa&&a.sa(a.api);a.U.hb("onReady",a.api)}
function az(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function My(a){a.yb=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.zb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.yb};
p.addEventListener=function(a,b){var c=this,d=Ry(this,b);d&&(Jb(this.sc,a)>=0||this.h[a]||(b=bz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ea||(b=Ry(this,b))&&this.U.unsubscribe(a,b)};
function Ry(a,b){var c=b;if(typeof b==="string"){if(a.Va[b])return a.Va[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Va[b]=c}return c?c:null}
function bz(a,b){function c(d){function e(){if(!a.ea)try{a.U.hb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Sd});g.level="WARNING";throw g;}}
if(Xy(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.R,h=String(f);h in g&&delete g[h]},0);
Jg(a.R,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Z||(Ty(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function Wy(a){a.cancel();My(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Ty(a);b&&(Sy(a)||!Zy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.H&&ov(Uy(this),this.H);clearTimeout(this.Rb);this.X=!1};
p.aa=function(){Wy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Va=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.zb=this.config=this.api=null;delete this.o;delete this.i;L.prototype.aa.call(this)};
function Zy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Uy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Yy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Xy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Qy(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Mg(e):e}return b}
;var cz={},dz="player_uid_"+(Math.random()*1E9>>>0);function ez(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Sg(c):c;var e=dz+"_"+Qa(c),f=cz[e];if(f&&d)return fz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Ly(c,e,a,b,void 0);cz[e]=f;f.addOnDisposeCallback(function(){delete cz[f.getId()]});
return f.api}
function fz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var gz=null,hz=null;
function iz(){ex();var a=wn(),b=zn(119),c=window.devicePixelRatio>1;if(document.body&&Xj(document.body,"exp-invert-logo"))if(c&&!Xj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Xj(d,"inverted-hdpi")){var e=Vj(d);Wj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Xj(document.body,"inverted-hdpi")&&Yj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=An(b)||0;d=c?d|67108864:d&-67108865;d===0?delete tn[b]:(c=d.toString(16),tn[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in tn)tn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(tn[f])));var f=d.join("&");pn(b,f,63072E3,a.i,c)}}
function jz(){kz()}
function lz(){dx("ep_init_pr");kz()}
function kz(){var a=gz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function mz(){gz&&gz.sendAbandonmentPing&&gz.sendAbandonmentPing();R("PL_ATT")&&Iy.dispose();for(var a=Pj,b=0,c=Xx.length;b<c;b++)a.pa(Xx[b]);Xx.length=0;mv("//static.doubleclick.net/instream/ad_status.js");Yx=!1;em("DCLKSTAT",0);xg(hz);gz&&(gz.removeEventListener("onVideoDataChange",jz),gz.destroy())}
;D("yt.setConfig",em);D("yt.config.set",em);D("yt.setMsg",jv);D("yt.msgs.set",jv);D("yt.logging.errors.log",ju);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Vv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);$w("embed",["ol"]);c=Hx();if(!c.serializedForcedExperimentIds){var d=sm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&$w("watch",["pbs","pbu","pbp"]);gz=ez(a,c);gz.addEventListener("onVideoDataChange",jz);gz.addEventListener("onReady",lz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?hz=new uy(gz):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(hz=new By(gz,a,b));Zx();S("ytidb_create_logger_embed_killswitch")||vo();a={};hy.h||(hy.h=new hy);hy.h.install((a.flush_logs={callback:function(){Pt()}},a));
is();S("ytidb_clear_embedded_player")&&Pj.oa(function(){var f,g;if(!Fx){var h=Ts();Ps(h,{kc:Ex,zd:Cx});var k={Uc:{feedbackEndpoint:hw(ux),modifyChannelNotificationPreferenceEndpoint:hw(vx),playlistEditEndpoint:hw(wx),shareEntityEndpoint:hw(tx),subscribeEndpoint:hw(qx),unsubscribeEndpoint:hw(rx),webPlayerShareEntityServiceEndpoint:hw(xx)}},l=dw(),m={};l&&(m.client_location=l);f===void 0&&(f=mn());g===void 0&&(g=h.resolve(Ex));jx(k,g,f,m);Ps(h,{kc:px,Ad:ix.h});Fx=h.resolve(px)}Tx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Jy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Ky);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||$x);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Uv);D("yt.util.activity.init",E("yt.util.activity.init")||xs);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||As);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||ys);window.addEventListener("load",im(function(){iz()}));
window.addEventListener("pageshow",im(function(a){a.persisted||iz()}));
window.addEventListener("pagehide",im(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?mz():a.persisted||mz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=fm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Sd)f||(f={}),f.componentStack=cu(m)}f&&nu(e,f);g?ju(e):ku(e)}};
Pi=lu;window.addEventListener("unhandledrejection",function(a){lu(a.reason)});
Kb(R("ERRORS")||[],function(a){ju.apply(null,a)});
em("ERRORS",[]);}).call(this);