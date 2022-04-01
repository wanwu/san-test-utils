!function(e){function t(t){for(var o,i,c=t[0],a=t[1],u=t[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(p&&p(t);d.length;)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={37:0,96:0},l=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/san-test-utils/";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=a;l.push([158,0]),n()}({158:function(e,t,n){var o=n(1),r=n(99),l=n(27).default;e.exports=n(27),e.exports.default=o(l,r,[])},27:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return c}));var o,r,l,i=n(0);class c extends i.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0,children:[{level:3,title:"`vm`",hash:"vm"},{level:3,title:"`el`",hash:"el"},{level:3,title:"`options`",hash:"options"}]})}}l={},(r="components")in(o=c)?Object.defineProperty(o,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[r]=l}.call(this,n(2))},99:function(e,t){e.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E5%B1%9E%E6%80%A7">属性</h1> <hr/> <p>San Test Utils 是一个基于包裹器的 API。</p> <p>一个 <code>Wrapper</code> 是一个包括了一个挂载组件，以及可用于该组件测试的方法。</p> <h3 id="vm"><strong><code>vm</code></strong></h3> <p><code>Component</code>：这是个 San 实例。你可以通过 wrapper.vm 访问一个实例所有的方法和属性。只有 San 组件包裹器或绑定了 San 组件包裹器的 HTMLElement 中才有该属性。</p> <h3 id="el"><strong><code>el</code></strong></h3> <p><code>HTMLElement</code>：包裹器的根 DOM 节点</p> <h3 id="options"><strong><code>options</code></strong></h3> <p><code>options.attachedToDocument&lt;boolean&gt;</code>：如果组件在渲染之后被添加到了文档上则为真</p> </div></div> '}});