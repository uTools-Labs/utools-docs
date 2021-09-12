<template><h1 id="模板插件"><a class="header-anchor" href="#模板插件">#</a> 模板插件</h1>
<p>uTools 的插件开发给予了开发者最大的自由度，你可以随心所欲的设计页面结构、样式、交互，对于特别擅长前端开发的同学，这没有什么问题，但对于非前端开发者，要做出漂亮的、高质量的前端 UI 是一件困难的事情。</p>
<p>我们发现在 uTools 使用环境中，很多插件的场景都有其共性，所以我们抽象出一套体验统一、高质量、高性能的通用模版，如果你想开发的插件场景适合使用此模版，那么你只需提供数据并提供一些回调函数即可。</p>
<h2 id="plugin-json-文件"><a class="header-anchor" href="#plugin-json-文件">#</a> plugin.json 文件</h2>
<p>要使用 uTools 模版，首先第一步就是删除 <code>plugin.json</code> 文件中的 <code>main</code> 属性。</p>
<p><s><code>&quot;main&quot;: &quot;index.html&quot;</code></s></p>
<h2 id="preload-js-文件"><a class="header-anchor" href="#preload-js-文件">#</a> preload.js 文件</h2>
<p>你可以在 <code>preload.js</code> 文件中增加一段代码，这段代码通过为 <code>window</code> 对象添加 <code>exports</code> 属性的方式来实现模版插件功能， <code>exports</code> 对象用于描述插件的模版模式，以及为模版行为设置回调。</p>
<h3 id="无-ui-模式"><a class="header-anchor" href="#无-ui-模式">#</a> 无 UI 模式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string">"features.code"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 注意：键对应的是 plugin.json 中的 features.code</span>
      mode<span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>  <span class="token comment">// 用于无需 UI 显示，执行一些简单的代码</span>
      args<span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token comment">// 进入插件时调用</span>
         <span class="token function-variable function">enter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// action = { code, type, payload }</span>
            window<span class="token punctuation">.</span>utools<span class="token punctuation">.</span><span class="token function">hideMainWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// do some thing</span>
            window<span class="token punctuation">.</span>utools<span class="token punctuation">.</span><span class="token function">outPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span> 
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="列表模式"><a class="header-anchor" href="#列表模式">#</a> 列表模式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string">"features.code"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 注意：键对应的是 plugin.json 中的 features.code</span>
      mode<span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span>  <span class="token comment">// 列表模式</span>
      args<span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token comment">// 进入插件时调用（可选）</span>
         <span class="token function-variable function">enter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> callbackSetList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果进入插件就要显示列表数据</span>
            <span class="token function">callbackSetList</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                     title<span class="token operator">:</span> <span class="token string">'这是标题'</span><span class="token punctuation">,</span>
                     description<span class="token operator">:</span> <span class="token string">'这是描述'</span><span class="token punctuation">,</span>
                     icon<span class="token operator">:</span><span class="token string">''</span> <span class="token comment">// 图标(可选)</span>
                  <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// 子输入框内容变化时被调用 可选 (未设置则无搜索)</span>
         <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> searchWord<span class="token punctuation">,</span> callbackSetList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取一些数据</span>
            <span class="token comment">// 执行 callbackSetList 显示出来</span>
            <span class="token function">callbackSetList</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
               <span class="token punctuation">{</span>
                  title<span class="token operator">:</span> <span class="token string">'这是标题'</span><span class="token punctuation">,</span>
                  description<span class="token operator">:</span> <span class="token string">'这是描述'</span><span class="token punctuation">,</span>
                  icon<span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 图标</span>
                  url<span class="token operator">:</span> <span class="token string">'https://yuanliao.info'</span>
               <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// 用户选择列表中某个条目时被调用</span>
         <span class="token function-variable function">select</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> itemData<span class="token punctuation">,</span> callbackSetList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>utools<span class="token punctuation">.</span><span class="token function">hideMainWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> url <span class="token operator">=</span> itemData<span class="token punctuation">.</span>url
            <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shell<span class="token punctuation">.</span><span class="token function">openExternal</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
            window<span class="token punctuation">.</span>utools<span class="token punctuation">.</span><span class="token function">outPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// 子输入框为空时的占位符，默认为字符串"搜索"</span>
         placeholder<span class="token operator">:</span> <span class="token string">"搜索"</span>
      <span class="token punctuation">}</span> 
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="文档模式"><a class="header-anchor" href="#文档模式">#</a> 文档模式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string">"features.code"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 注意：键对应的是 plugin.json 中的 features.code</span>
      mode<span class="token operator">:</span> <span class="token string">"doc"</span><span class="token punctuation">,</span> <span class="token comment">// 文档模式</span>
      args<span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token comment">// 索引集合</span>
         <span class="token comment">// indexes: require('./indexes.json')</span>
         indexes<span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               t<span class="token operator">:</span> <span class="token string">'这是标题'</span><span class="token punctuation">,</span>
               d<span class="token operator">:</span> <span class="token string">'这是描述'</span><span class="token punctuation">,</span>
               p<span class="token operator">:</span> <span class="token string">'doc/xxx.html'</span> <span class="token comment">//页面, 只能是相对路径</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token comment">// 子输入框为空时的占位符，默认为字符串"搜索"</span>
         placeholder<span class="token operator">:</span> <span class="token string">"搜索"</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="示例项目"><a class="header-anchor" href="#示例项目">#</a> 示例项目</h2>
<h3 id="无-ui-列表模式"><a class="header-anchor" href="#无-ui-列表模式">#</a> 无 UI + 列表模式</h3>
<ul>
<li>Chrome 小助手  <a href="https://github.com/in3102/utools-chrome_helper" target="_blank" rel="noopener noreferrer">https://github.com/in3102/utools-chrome_helper<OutboundLink/></a></li>
</ul>
<h3 id="文档模式-1"><a class="header-anchor" href="#文档模式-1">#</a> 文档模式</h3>
<ul>
<li>MDN 文档（包含 JavaScript、Html、CSS、Web API/DOM、HTTP） <a href="https://github.com/in3102/utools-mdn-doc" target="_blank" rel="noopener noreferrer">https://github.com/in3102/utools-mdn-doc<OutboundLink/></a></li>
<li>Python 文档 <a href="https://github.com/in3102/utools-python-doc" target="_blank" rel="noopener noreferrer">https://github.com/in3102/utools-python-doc<OutboundLink/></a></li>
<li>Linux 命令文档 <a href="https://github.com/in3102/utools-linux-doc" target="_blank" rel="noopener noreferrer">https://github.com/in3102/utools-linux-doc<OutboundLink/></a></li>
<li>PHP 文档 <a href="https://github.com/in3102/utools-php-doc" target="_blank" rel="noopener noreferrer">https://github.com/in3102/utools-php-doc<OutboundLink/></a></li>
</ul>
<h2 id="ui-展示"><a class="header-anchor" href="#ui-展示">#</a> UI 展示</h2>
<p><img src="https://res.u-tools.cn/website/docs.png" alt="docs.png"></p>
</template>