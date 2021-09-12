<template><h1 id="preload-js"><a class="header-anchor" href="#preload-js">#</a> preload.js</h1>
<p>当你在 <code>plugin.json</code> 中配置了 <code>preload</code> 属性，将载入对应的预加载脚本。</p>
<p>在传统的 web 开发中，所有的 javascript 脚本都在浏览器沙盒中运行，权限被严格限制，所能实现的功能非常有限。</p>
<p>通过 <code>preload.js</code> 能够帮你突破沙盒限制，进入一个崭新的 JavaScript 世界。</p>
<p><code>preload.js</code> 是一个特殊且单独的文件，不需要与其他业务代码编译在一起，在此文件中可以访问 <code>nodejs</code>、<code>electron</code>、<code>uTools</code> 提供的 api，并挂载到 <code>window</code> 对象中，你其他的普通 javascript 代码就可以访问这些 api。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// 开发者可以暴露自定义 API 供后加载脚本使用</span>

<span class="token comment">// preload.js 中使用 nodejs</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> readFileSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function-variable function">readConfig</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./config.json'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>	


<span class="token comment">// index.html 后加载的内容可以使用 window.readConfig() 方法，但不能使用 Node.js 特性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">readConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 正常执行</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./config.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>通过这种机制可以获得强大的底层能力，配合 html、css 丰富的表现力，完全可以按你理想中的样子去设计程序。</p>
<p>但是，更强大的能力如果不受约束就会伴随着更大风险，在使用预加载脚本时，应该时刻注意只提供必要且最小权限的 api 供后加载脚本使用。</p>
<p>（如果你想把插件提交到 utools 插件市场供其他用户下载使用，<code>preload.js</code> 必须是明文代码，且精简清晰可读）</p>
</template>