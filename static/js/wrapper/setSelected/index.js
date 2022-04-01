!function(n){function s(s){for(var a,p,c=s[0],r=s[1],u=s[2],i=0,f=[];i<c.length;i++)p=c[i],Object.prototype.hasOwnProperty.call(e,p)&&e[p]&&f.push(e[p][0]),e[p]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a]);for(l&&l(s);f.length;)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var n,s=0;s<o.length;s++){for(var t=o[s],a=!0,c=1;c<t.length;c++){var r=t[c];0!==e[r]&&(a=!1)}a&&(o.splice(s--,1),n=p(p.s=t[0]))}return n}var a={},e={45:0,104:0},o=[];function p(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return n[s].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(){return Promise.resolve()},p.m=n,p.c=a,p.d=function(n,s,t){p.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:t})},p.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},p.t=function(n,s){if(1&s&&(n=p(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var a in n)p.d(t,a,function(s){return n[s]}.bind(null,a));return t},p.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return p.d(s,"a",s),s},p.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},p.p="/san-test-utils/";var c=window.webpackJsonp=window.webpackJsonp||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var u=0;u<c.length;u++)s(c[u]);var l=r;o.push([179,0]),t()}({120:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="setselected">setSelected</h1> <hr/> <p>选择一个 option 元素。</p> <ul> <li><strong>示例</strong>：</li> </ul> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>attach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">attach</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'select\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">\'option\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\noptions<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '},179:function(n,s,t){var a=t(1),e=t(120),o=t(48).default;n.exports=t(48),n.exports.default=a(o,e,[])},48:function(n,s,t){"use strict";t.r(s),function(n){t.d(s,"default",(function(){return c}));var a,e,o,p=t(0);class c extends p.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}o={},(e="components")in(a=c)?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o}.call(this,t(2))}});