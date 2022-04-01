(window.webpackJsonp=window.webpackJsonp||[]).push([[67,7],{152:function(n,s,a){var t=a(1),p=a(93),o=a(21).default;n.exports=a(21),n.exports.default=t(o,p,[])},21:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return e}));var t,p,o,c=a(0);class e extends c.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}o={},(p="components")in(t=e)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(2))},93:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="shallowattach()">shallowAttach()</h1> <hr/> <ul> <li> <p><strong>参数</strong>：</p> <ul> <li><code>{Component} component</code></li> <li><code>{Object} options</code> <ul> <li><code>{boolean} attachToDocument</code></li> <li><code>{Object} slots</code> <ul> <li><code>{Array&lt;Component|Object&gt;|Component|string} default</code></li> <li><code>{Array&lt;Component|Object&gt;|Component|string} named</code></li> </ul> </li> <li><code>{Object|Array&lt;string&gt;} stubs</code></li> <li><code>{Object} data</code></li> <li><code>{Object|Component} parentComponent</code></li> <li><code>{Object} methods</code></li> </ul> </li> </ul> </li> <li> <p><strong>返回值</strong>：<code>{Wrapper}</code></p> </li> <li> <p><strong>选项</strong>：移步 <a href="/san-test-utils/attachOptions/index/">挂载选项</a></p> </li> <li> <p><strong>用法</strong>：</p> </li> </ul> <p>和 <code>attach</code> 一样，创建一个包含被挂载和渲染的 San 组件的 <code>Wrapper</code>，不同的是子组件会被存根。</p> <h4 id="%E4%B8%8D%E4%BD%BF%E7%94%A8options%E9%80%89%E9%A1%B9">不使用options选项</h4> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>shallowAttach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders a div\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowAttach</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h4 id="%E4%BD%BF%E7%94%A8options%E9%80%89%E9%A1%B9">使用options选项</h4> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>shallowAttach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders a div\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowAttach</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">\'red\'</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'red\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h4 id="%E5%9B%BA%E5%AE%9A%E5%9C%A8dom%E4%B8%8A">固定在DOM上</h4> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>shallowAttach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders a div\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowAttach</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">attachToDocument</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h4 id="%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E5%92%8C%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD">默认插槽和具名插槽</h4> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>shallowAttach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">\'./bar\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> fooBar <span class="token keyword">from</span> <span class="token string">\'./fooBar\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders a div\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowAttach</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">slots</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span>bar<span class="token punctuation">,</span> fooBar<span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">fooBar</span><span class="token operator">:</span> fooBar<span class="token punctuation">,</span> <span class="token comment">// 将匹配 `&lt;slot name="fooBar" />`。</span>\n                <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">\'&lt;div />\'</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '}}]);