// https://d3js.org/d3-array/ v3.0.2 Copyright 2010-2021 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).d3=t.d3||{})}(this,(function(t){"use strict";function n(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function r(t){let r=t,e=t,o=t;function f(t,n,r=0,f=t.length){if(r<f){if(0!==e(n,n))return f;do{const e=r+f>>>1;o(t[e],n)<0?r=e+1:f=e}while(r<f)}return r}return 1===t.length&&(r=(n,r)=>t(n)-r,e=n,o=(r,e)=>n(t(r),e)),{left:f,center:function(t,n,e=0,o=t.length){const i=f(t,n,e,o-1);return i>e&&r(t[i-1],n)>-r(t[i],n)?i-1:i},right:function(t,n,r=0,f=t.length){if(r<f){if(0!==e(n,n))return f;do{const e=r+f>>>1;o(t[e],n)<=0?r=e+1:f=e}while(r<f)}return r}}}function e(t){return null===t?NaN:+t}const o=r(n),f=o.right,i=o.left,u=r(e).center;var l=f;function s(t,n){let r=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&++r;else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(o=+o)>=o&&++r}return r}function c(t){return 0|t.length}function a(t){return!(t>0)}function h(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function d(t,n){let r,e=0,o=0,f=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(r=n-o,o+=r/++e,f+=r*(n-o));else{let i=-1;for(let u of t)null!=(u=n(u,++i,t))&&(u=+u)>=u&&(r=u-o,o+=r/++e,f+=r*(u-o))}if(e>1)return f/(e-1)}function p(t,n){const r=d(t,n);return r?Math.sqrt(r):r}function y(t,n){let r,e;if(void 0===n)for(const n of t)null!=n&&(void 0===r?n>=n&&(r=e=n):(r>n&&(r=n),e<n&&(e=n)));else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(void 0===r?f>=f&&(r=e=f):(r>f&&(r=f),e<f&&(e=f)))}return[r,e]}class v{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let e=0;e<this._n&&e<32;e++){const o=n[e],f=t+o,i=Math.abs(t)<Math.abs(o)?t-(f-o):o-(f-t);i&&(n[r++]=i),t=f}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n,r,e,o=this._n,f=0;if(o>0){for(f=t[--o];o>0&&(n=f,r=t[--o],f=n+r,e=r-(f-n),!e););o>0&&(e<0&&t[o-1]<0||e>0&&t[o-1]>0)&&(r=2*e,n=f+r,r==n-f&&(f=n))}return f}}class m extends Map{constructor(t,n=A){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(M(this,t))}has(t){return super.has(M(this,t))}set(t,n){return super.set(w(this,t),n)}delete(t){return super.delete(b(this,t))}}class g extends Set{constructor(t,n=A){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const n of t)this.add(n)}has(t){return super.has(M(this,t))}add(t){return super.add(w(this,t))}delete(t){return super.delete(b(this,t))}}function M({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):r}function w({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):(t.set(e,r),r)}function b({_intern:t,_key:n},r){const e=n(r);return t.has(e)&&(r=t.get(r),t.delete(e)),r}function A(t){return null!==t&&"object"==typeof t?t.valueOf():t}function x(t){return t}function S(t,...n){return j(t,x,x,n)}function _(t,...n){return j(t,Array.from,x,n)}function N(t,n){for(let r=1,e=n.length;r<e;++r)t=t.flatMap((t=>t.pop().map((([n,r])=>[...t,n,r]))));return t}function k(t,n,...r){return j(t,x,n,r)}function T(t,n,...r){return j(t,Array.from,n,r)}function E(t){if(1!==t.length)throw new Error("duplicate key");return t[0]}function j(t,n,r,e){return function t(o,f){if(f>=e.length)return r(o);const i=new m,u=e[f++];let l=-1;for(const t of o){const n=u(t,++l,o),r=i.get(n);r?r.push(t):i.set(n,[t])}for(const[n,r]of i)i.set(n,t(r,f));return n(i)}(t,0)}function q(t,n){return Array.from(n,(n=>t[n]))}function F(t,...n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);let[r]=n;if(r&&1===r.length||n.length>1){const e=Uint32Array.from(t,((t,n)=>n));return n.length>1?(n=n.map((n=>t.map(n))),e.sort(((t,r)=>{for(const e of n){const n=O(e[t],e[r]);if(n)return n}}))):(r=t.map(r),e.sort(((t,n)=>O(r[t],r[n])))),q(t,e)}return t.sort(void 0===r?O:I(r))}function I(t){if("function"!=typeof t)throw new TypeError("compare is not a function");return(n,r)=>{const e=t(n,r);return e||0===e?e:(0===t(r,r))-(0===t(n,n))}}function O(t,n){return(null==t||!(t>=t))-(null==n||!(n>=n))||(t<n?-1:t>n?1:0)}var L=Array.prototype.slice;function P(t){return()=>t}var R=Math.sqrt(50),z=Math.sqrt(10),C=Math.sqrt(2);function D(t,n,r){var e,o,f,i,u=-1;if(r=+r,(t=+t)===(n=+n)&&r>0)return[t];if((e=n<t)&&(o=t,t=n,n=o),0===(i=G(t,n,r))||!isFinite(i))return[];if(i>0){let r=Math.round(t/i),e=Math.round(n/i);for(r*i<t&&++r,e*i>n&&--e,f=new Array(o=e-r+1);++u<o;)f[u]=(r+u)*i}else{i=-i;let r=Math.round(t*i),e=Math.round(n*i);for(r/i<t&&++r,e/i>n&&--e,f=new Array(o=e-r+1);++u<o;)f[u]=(r+u)/i}return e&&f.reverse(),f}function G(t,n,r){var e=(n-t)/Math.max(0,r),o=Math.floor(Math.log(e)/Math.LN10),f=e/Math.pow(10,o);return o>=0?(f>=R?10:f>=z?5:f>=C?2:1)*Math.pow(10,o):-Math.pow(10,-o)/(f>=R?10:f>=z?5:f>=C?2:1)}function U(t,n,r){let e;for(;;){const o=G(t,n,r);if(o===e||0===o||!isFinite(o))return[t,n];o>0?(t=Math.floor(t/o)*o,n=Math.ceil(n/o)*o):o<0&&(t=Math.ceil(t*o)/o,n=Math.floor(n*o)/o),e=o}}function B(t){return Math.ceil(Math.log(s(t))/Math.LN2)+1}function H(){var t=x,n=y,r=B;function e(e){Array.isArray(e)||(e=Array.from(e));var o,f,i=e.length,u=new Array(i);for(o=0;o<i;++o)u[o]=t(e[o],o,e);var s=n(u),c=s[0],a=s[1],h=r(u,c,a);if(!Array.isArray(h)){const t=a,r=+h;if(n===y&&([c,a]=U(c,a,r)),(h=D(c,a,r))[h.length-1]>=a)if(t>=a&&n===y){const t=G(c,a,r);isFinite(t)&&(t>0?a=(Math.floor(a/t)+1)*t:t<0&&(a=(Math.ceil(a*-t)+1)/-t))}else h.pop()}for(var d=h.length;h[0]<=c;)h.shift(),--d;for(;h[d-1]>a;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:c,p.x1=o<d?h[o]:a;for(o=0;o<i;++o)null!=(f=u[o])&&c<=f&&f<=a&&v[l(h,f,0,d)].push(e[o]);return v}return e.value=function(n){return arguments.length?(t="function"==typeof n?n:P(n),e):t},e.domain=function(t){return arguments.length?(n="function"==typeof t?t:P([t[0],t[1]]),e):n},e.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?P(L.call(t)):P(t),e):r},e}function J(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r<n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r<o||void 0===r&&o>=o)&&(r=o)}return r}function K(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r>n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r>o||void 0===r&&o>=o)&&(r=o)}return r}function Q(t,n,r=0,e=t.length-1,o){for(o=void 0===o?O:I(o);e>r;){if(e-r>600){const f=e-r+1,i=n-r+1,u=Math.log(f),l=.5*Math.exp(2*u/3),s=.5*Math.sqrt(u*l*(f-l)/f)*(i-f/2<0?-1:1);Q(t,n,Math.max(r,Math.floor(n-i*l/f+s)),Math.min(e,Math.floor(n+(f-i)*l/f+s)),o)}const f=t[n];let i=r,u=e;for(V(t,r,n),o(t[e],f)>0&&V(t,r,e);i<u;){for(V(t,i,u),++i,--u;o(t[i],f)<0;)++i;for(;o(t[u],f)>0;)--u}0===o(t[r],f)?V(t,r,u):(++u,V(t,u,e)),u<=n&&(r=u+1),n<=u&&(e=u-1)}return t}function V(t,n,r){const e=t[n];t[n]=t[r],t[r]=e}function W(t,n,r){if(e=(t=Float64Array.from(function*(t,n){if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(yield n);else{let r=-1;for(let e of t)null!=(e=n(e,++r,t))&&(e=+e)>=e&&(yield e)}}(t,r))).length){if((n=+n)<=0||e<2)return K(t);if(n>=1)return J(t);var e,o=(e-1)*n,f=Math.floor(o),i=J(Q(t,f).subarray(0,f+1));return i+(K(t.subarray(f+1))-i)*(o-f)}}function X(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r<n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r<f||void 0===r&&f>=f)&&(r=f,e=o);return e}function Y(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r>n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r>f||void 0===r&&f>=f)&&(r=f,e=o);return e}function Z(t,n){return[t,n]}function $(t,r=n){if(1===r.length)return Y(t,r);let e,o=-1,f=-1;for(const n of t)++f,(o<0?0===r(n,n):r(n,e)<0)&&(e=n,o=f);return o}var tt=nt(Math.random);function nt(t){return function(n,r=0,e=n.length){let o=e-(r=+r);for(;o;){const e=t()*o--|0,f=n[o+r];n[o+r]=n[e+r],n[e+r]=f}return n}}function rt(t){if(!(o=t.length))return[];for(var n=-1,r=K(t,et),e=new Array(r);++n<r;)for(var o,f=-1,i=e[n]=new Array(o);++f<o;)i[f]=t[f][n];return e}function et(t){return t.length}function ot(t){return t instanceof Set?t:new Set(t)}function ft(t,n){const r=t[Symbol.iterator](),e=new Set;for(const t of n){if(e.has(t))continue;let n,o;for(;({value:n,done:o}=r.next());){if(o)return!1;if(e.add(n),Object.is(t,n))break}}return!0}t.Adder=v,t.InternMap=m,t.InternSet=g,t.ascending=n,t.bin=H,t.bisect=l,t.bisectCenter=u,t.bisectLeft=i,t.bisectRight=f,t.bisector=r,t.count=s,t.cross=function(...t){const n="function"==typeof t[t.length-1]&&function(t){return n=>t(...n)}(t.pop()),r=(t=t.map(h)).map(c),e=t.length-1,o=new Array(e+1).fill(0),f=[];if(e<0||r.some(a))return f;for(;;){f.push(o.map(((n,r)=>t[r][n])));let i=e;for(;++o[i]===r[i];){if(0===i)return n?f.map(n):f;o[i--]=0}}},t.cumsum=function(t,n){var r=0,e=0;return Float64Array.from(t,void 0===n?t=>r+=+t||0:o=>r+=+n(o,e++,t)||0)},t.descending=function(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=p,t.difference=function(t,...n){t=new Set(t);for(const r of n)for(const n of r)t.delete(n);return t},t.disjoint=function(t,n){const r=n[Symbol.iterator](),e=new Set;for(const n of t){if(e.has(n))return!1;let t,o;for(;({value:t,done:o}=r.next())&&!o;){if(Object.is(n,t))return!1;e.add(t)}}return!0},t.every=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(!n(e,++r,t))return!1;return!0},t.extent=y,t.fcumsum=function(t,n){const r=new v;let e=-1;return Float64Array.from(t,void 0===n?t=>r.add(+t||0):o=>r.add(+n(o,++e,t)||0))},t.filter=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");const r=[];let e=-1;for(const o of t)n(o,++e,t)&&r.push(o);return r},t.flatGroup=function(t,...n){return N(_(t,...n),n)},t.flatRollup=function(t,n,...r){return N(T(t,n,...r),r)},t.fsum=function(t,n){const r=new v;if(void 0===n)for(let n of t)(n=+n)&&r.add(n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&r.add(o)}return+r},t.greatest=function(t,r=n){let e,o=!1;if(1===r.length){let f;for(const i of t){const t=r(i);(o?n(t,f)>0:0===n(t,t))&&(e=i,f=t,o=!0)}}else for(const n of t)(o?r(n,e)>0:0===r(n,n))&&(e=n,o=!0);return e},t.greatestIndex=function(t,r=n){if(1===r.length)return X(t,r);let e,o=-1,f=-1;for(const n of t)++f,(o<0?0===r(n,n):r(n,e)>0)&&(e=n,o=f);return o},t.group=S,t.groupSort=function(t,r,e){return(1===r.length?F(k(t,r,e),(([t,r],[e,o])=>n(r,o)||n(t,e))):F(S(t,e),(([t,e],[o,f])=>r(e,f)||n(t,o)))).map((([t])=>t))},t.groups=_,t.histogram=H,t.index=function(t,...n){return j(t,x,E,n)},t.indexes=function(t,...n){return j(t,Array.from,E,n)},t.intersection=function(t,...n){t=new Set(t),n=n.map(ot);t:for(const r of t)for(const e of n)if(!e.has(r)){t.delete(r);continue t}return t},t.least=function(t,r=n){let e,o=!1;if(1===r.length){let f;for(const i of t){const t=r(i);(o?n(t,f)<0:0===n(t,t))&&(e=i,f=t,o=!0)}}else for(const n of t)(o?r(n,e)<0:0===r(n,n))&&(e=n,o=!0);return e},t.leastIndex=$,t.map=function(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");if("function"!=typeof n)throw new TypeError("mapper is not a function");return Array.from(t,((r,e)=>n(r,e,t)))},t.max=J,t.maxIndex=X,t.mean=function(t,n){let r=0,e=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++r,e+=n);else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(f=+f)>=f&&(++r,e+=f)}if(r)return e/r},t.median=function(t,n){return W(t,.5,n)},t.merge=function(t){return Array.from(function*(t){for(const n of t)yield*n}(t))},t.min=K,t.minIndex=Y,t.mode=function(t,n){const r=new m;if(void 0===n)for(let n of t)null!=n&&n>=n&&r.set(n,(r.get(n)||0)+1);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&o>=o&&r.set(o,(r.get(o)||0)+1)}let e,o=0;for(const[t,n]of r)n>o&&(o=n,e=t);return e},t.nice=U,t.pairs=function(t,n=Z){const r=[];let e,o=!1;for(const f of t)o&&r.push(n(e,f)),e=f,o=!0;return r},t.permute=q,t.quantile=W,t.quantileSorted=function(t,n,r=e){if(o=t.length){if((n=+n)<=0||o<2)return+r(t[0],0,t);if(n>=1)return+r(t[o-1],o-1,t);var o,f=(o-1)*n,i=Math.floor(f),u=+r(t[i],i,t);return u+(+r(t[i+1],i+1,t)-u)*(f-i)}},t.quickselect=Q,t.range=function(t,n,r){t=+t,n=+n,r=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+r;for(var e=-1,o=0|Math.max(0,Math.ceil((n-t)/r)),f=new Array(o);++e<o;)f[e]=t+e*r;return f},t.reduce=function(t,n,r){if("function"!=typeof n)throw new TypeError("reducer is not a function");const e=t[Symbol.iterator]();let o,f,i=-1;if(arguments.length<3){if(({done:o,value:r}=e.next()),o)return;++i}for(;({done:o,value:f}=e.next()),!o;)r=n(r,f,++i,t);return r},t.reverse=function(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).reverse()},t.rollup=k,t.rollups=T,t.scan=function(t,n){const r=$(t,n);return r<0?void 0:r},t.shuffle=tt,t.shuffler=nt,t.some=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(n(e,++r,t))return!0;return!1},t.sort=F,t.subset=function(t,n){return ft(n,t)},t.sum=function(t,n){let r=0;if(void 0===n)for(let n of t)(n=+n)&&(r+=n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&(r+=o)}return r},t.superset=ft,t.thresholdFreedmanDiaconis=function(t,n,r){return Math.ceil((r-n)/(2*(W(t,.75)-W(t,.25))*Math.pow(s(t),-1/3)))},t.thresholdScott=function(t,n,r){return Math.ceil((r-n)/(3.5*p(t)*Math.pow(s(t),-1/3)))},t.thresholdSturges=B,t.tickIncrement=G,t.tickStep=function(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),o=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),f=e/o;return f>=R?o*=10:f>=z?o*=5:f>=C&&(o*=2),n<t?-o:o},t.ticks=D,t.transpose=rt,t.union=function(...t){const n=new Set;for(const r of t)for(const t of r)n.add(t);return n},t.variance=d,t.zip=function(){return rt(arguments)},Object.defineProperty(t,"__esModule",{value:!0})}));