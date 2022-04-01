!function(n){function t(t){for(var s,p,r=t[0],c=t[1],u=t[2],i=0,f=[];i<r.length;i++)p=r[i],Object.prototype.hasOwnProperty.call(e,p)&&e[p]&&f.push(e[p][0]),e[p]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(n[s]=c[s]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var n,t=0;t<o.length;t++){for(var a=o[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==e[c]&&(s=!1)}s&&(o.splice(t--,1),n=p(p.s=a[0]))}return n}var s={},e={9:0,69:0},o=[];function p(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,p),a.l=!0,a.exports}p.e=function(){return Promise.resolve()},p.m=n,p.c=s,p.d=function(n,t,a){p.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},p.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},p.t=function(n,t){if(1&t&&(n=p(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(p.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)p.d(a,s,function(t){return n[t]}.bind(null,s));return a},p.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return p.d(t,"a",t),t},p.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},p.p="/san-test-utils/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;o.push([197,0]),a()}({138:function(n,t){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="data">data</h1> <hr/> <ul> <li><strong>类型</strong>：<code>Object</code></li> </ul> <p>在组件被挂载时设置组件实例的 data。</p> <ul> <li><strong>示例</strong>：</li> </ul> <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">\'&lt;div>&#123;&#123;msg}}&lt;/div>\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">attach</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">\'aBC\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'aBC\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '},197:function(n,t,a){var s=a(1),e=a(138),o=a(66).default;n.exports=a(66),n.exports.default=s(o,e,[])},66:function(n,t,a){"use strict";a.r(t),function(n){a.d(t,"default",(function(){return r}));var s,e,o,p=a(0);class r extends p.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}o={},(e="components")in(s=r)?Object.defineProperty(s,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[e]=o}.call(this,a(2))}});