(window.webpackJsonp=window.webpackJsonp||[]).push([[91,32],{110:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="find">find</h1> <hr/> <p>返回匹配选择器的第一个 DOM 节点或 San 组件的 <code>Wrapper</code>。</p> <p>可以使用任何有效的<a href="/san-test-utils/api/selector/">选择器</a>。</p> <ul> <li> <p><strong>参数</strong>：</p> <ul> <li><code>{string|Component} selector</code></li> </ul> </li> <li> <p><strong>返回值</strong>：<code>{Wrapper}</code></p> </li> <li> <p><strong>示例</strong>：</p> </li> </ul> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>attach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">\'./bar\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">attach</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> div <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bar <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> fooRef <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token string">\'foo\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>fooRef<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '},169:function(n,s,a){var p=a(1),t=a(110),o=a(38).default;n.exports=a(38),n.exports.default=p(o,t,[])},38:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return e}));var p,t,o,c=a(0);class e extends c.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}o={},(t="components")in(p=e)?Object.defineProperty(p,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):p[t]=o}.call(this,a(2))}}]);