<template><h1 id="快速上手"><a class="header-anchor" href="#快速上手">#</a> 快速上手</h1>
<p>hey，开发者，终于和你见面了。</p>
<p>从这里开始，你将了解如何从零开始创造一个 uTools 插件。这是非常容易的事情，你不必学习一些特有的无法应用在其他领域的知识，只需要使用你已经熟悉的技术（ Javascript、HTML、CSS ），如果你了解一些 Nodejs 的相关 API，那将再好不过，它能够与本地操作系统有更多的交互，实现更为强大的功能。</p>
<h2 id="plugin-json"><a class="header-anchor" href="#plugin-json">#</a> plugin.json</h2>
<p>在你觉得合适的地方新建一个文件夹，并创建 <code>plugin.json</code> 文件。这是最重要的一个文件，用来说明这个插件将如何与 uTools 集成，最基本的格式如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.html"</span><span class="token punctuation">,</span>
	<span class="token property">"logo"</span><span class="token operator">:</span> <span class="token string">"logo.png"</span><span class="token punctuation">,</span>
	<span class="token property">"features"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
		  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>
		  <span class="token property">"explain"</span><span class="token operator">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span>
			<span class="token property">"cmds"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"你好"</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="字段说明"><a class="header-anchor" href="#字段说明">#</a> 字段说明</h4>
<p><code>main</code> : 入口文件，如果没有定义入口文件，此插件将变成一个[模版插件</p>
<p><code>logo</code> : 插件的图标</p>
<p><code>features </code> : 唯一比较复杂的就是 features 了，首先它是一个数组，每个数组元素用来描述这个插件提供的一个相对独立的功能，例如uTools中的「编码小助手」插件，提供了<code>md5</code> 、 <code>时间戳</code> 、 <code>随机数</code> 等功能。</p>
<p><code>features.code</code> : 插件某个功能的识别码，在进入插件时会传递给你的代码，可用于区分不同的功能，显示不同的 UI</p>
<p><code>features.cmds</code> : 通过哪些方式可以进入这个功能，中文会自动支持 <code>拼音</code>及<code>拼音首字母</code>，无须重复添加</p>
<h4 id="创建入口文件"><a class="header-anchor" href="#创建入口文件">#</a> 创建入口文件</h4>
<p>根据 <code>main</code> 中的定义，在 plugin.json 的同级目录，创建一个 <code>index.html</code> 文件：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="开发者中心"><a class="header-anchor" href="#开发者中心">#</a> 开发者中心</h2>
<p>好了，一个 hello world 插件已经开发好了，我们让它集成到 uTools 中。</p>
<ol>
<li>
<p>安装 「uTools 开发者工具」，新建一个项目，并选择刚刚创建的 <code>plugin.json</code> 文件。
<img src="https://res.u-tools.cn/website/developer.png" alt="create.png"></p>
</li>
<li>
<p>点击 开启运行。</p>
</li>
</ol>
<p><img src="https://res.u-tools.cn/website/developer2.png" alt="manage.png"></p>
<ol start="3">
<li>
<p>退出开发者工具，在 uTools 中输入<code>hello</code>， <code>你好</code>，<code>nh</code> 均可以到达你的插件
<img src="https://res.u-tools.cn/website/open.png" alt="open.png">
<img src="https://res.u-tools.cn/website/hello.png" alt="hello.png"></p>
</li>
<li>
<p>当你已经实现了插件所需的功能，通过「开发者工具」管理界面，点击「打包」，就可以获得一个打包好的 <code>.upx</code> 文件，复制或拖入 uTools 主输入框中即可以进行安装。
<img src="https://res.u-tools.cn/website/install.png" alt="AslhIx.png"></p>
</li>
<li>
<p>如果你想与其他用户分享你的插件，可以选择「插件发布」将插件提交给 uTools，审核通过后用户可在插件市场中下载安装。「开发者工具」还提供了支付能力、数据统计、错误分析等功能，供你使用。</p>
</li>
</ol>
</template>