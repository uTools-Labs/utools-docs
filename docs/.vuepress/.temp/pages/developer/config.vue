<template><h1 id="完整配置"><a class="header-anchor" href="#完整配置">#</a> 完整配置</h1>
<h2 id="基本配置"><a class="header-anchor" href="#基本配置">#</a> 基本配置</h2>
<h3 id="main"><a class="header-anchor" href="#main">#</a> <code>main</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>入口文件，当该配置为空时，表示插件为<RouterLink to="/developer/template.html">模板插件</RouterLink>。 <code>main</code> 与 <code>preload</code> 至少存在其一</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.html"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="preload"><a class="header-anchor" href="#preload">#</a> <code>preload</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>这是一个关键文件，你可以在此文件内调用 uTools、 nodejs、 electron 提供的 api。 <code>main</code> 与 <code>preload</code> 至少存在其一</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"preload"</span><span class="token operator">:</span> <span class="token string">"preload.js"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="logo"><a class="header-anchor" href="#logo">#</a> <code>logo</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>此插件的图标，此为<code>必选项</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"logo"</span><span class="token operator">:</span> <span class="token string">"logo.png"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="platform"><a class="header-anchor" href="#platform">#</a> <code>platform</code></h3>
<ul>
<li>类型： <code>Array</code></li>
<li>可选值： <code>win32</code>, <code>darwin</code>, <code>linux</code></li>
</ul>
<p>插件支持的平台，此为<code>可选项</code>，默认为全平台支持</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"platform"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"win32"</span><span class="token punctuation">,</span> <span class="token string">"darwin"</span><span class="token punctuation">,</span> <span class="token string">"linux"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="开发模式"><a class="header-anchor" href="#开发模式">#</a> 开发模式</h2>
<h3 id="development"><a class="header-anchor" href="#development">#</a> <code>development</code></h3>
<ul>
<li>类型： <code>Object</code></li>
</ul>
<p>在开发模式下，可使用 <code>development</code> 配置覆盖 <code>main</code>的值，在打包时，此字段会被删除</p>
<h3 id="development-main"><a class="header-anchor" href="#development-main">#</a> <code>development.main</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>在开发模式下，入口文件可以是 http 协议，可以配合 webpack 等工具，在开发阶段进行热更新。</p>
<blockquote>
<p>preload.js 代码变更后无法自动热更新，可以将插件设置成「隐藏插件后完全退出」，再次进入插件就可以应用最新的 preload.js 代码</p>
</blockquote>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"development"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:8000/index.html"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="插件设置"><a class="header-anchor" href="#插件设置">#</a> 插件设置</h2>
<h3 id="pluginsetting"><a class="header-anchor" href="#pluginsetting">#</a> <code>pluginSetting</code></h3>
<ul>
<li>类型： <code>Object</code></li>
</ul>
<p>插件设置，此为<code>可选项</code></p>
<h3 id="pluginsetting-single"><a class="header-anchor" href="#pluginsetting-single">#</a> <code>pluginSetting.single</code></h3>
<ul>
<li>类型： <code>Boolean</code></li>
<li>默认： <code>true</code></li>
</ul>
<p>插件是否允许多开（默认不允许）。多开方式：分离插件后，再次创建</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"pluginSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"single"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="pluginsetting-height"><a class="header-anchor" href="#pluginsetting-height">#</a> <code>pluginSetting.height</code></h3>
<ul>
<li>类型： <code>Number</code></li>
</ul>
<p>插件高度。可动态修改（<RouterLink to="/developer/api.html#setexpendheight-height">参考</RouterLink>），该项被设置后，用户则不能再调整高度</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"pluginSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="插件功能"><a class="header-anchor" href="#插件功能">#</a> 插件功能</h2>
<h3 id="features"><a class="header-anchor" href="#features">#</a> <code>features</code></h3>
<ul>
<li>类型： <code>Array&lt;Object&gt;</code></li>
</ul>
<p>features 描述了当 uTools 主输入框内容产生变化时，此插件是否显示在搜索结果列表中，一个插件可以有多个功能，一个功能可以提供多个命令供用户搜索</p>
<h3 id="features-code"><a class="header-anchor" href="#features-code">#</a> <code>features.code</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>插件提供的某个功能的唯一标示，此为<code>必选项</code>，且插件内不可重复</p>
<h3 id="features-explain"><a class="header-anchor" href="#features-explain">#</a> <code>features.explain</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>对此功能的说明，将在搜索列表对应位置中显示</p>
<h3 id="features-icon"><a class="header-anchor" href="#features-icon">#</a> <code>features.icon</code></h3>
<ul>
<li>类型： <code>String</code></li>
</ul>
<p>功能图标, 相对路径。支持 png、jpg、svg 格式，此为<code>可选项</code></p>
<h3 id="features-platform"><a class="header-anchor" href="#features-platform">#</a> <code>features.platform</code></h3>
<ul>
<li>类型： <code>Array</code></li>
<li>可选值： <code>win32</code>,  <code>darwin</code>,  <code>linux</code></li>
</ul>
<p>功能适配平台 <code>[&quot;win32&quot;, &quot;darwin&quot;, &quot;linux&quot;]</code>，此为<code>可选项</code></p>
<h3 id="features-cmds"><a class="header-anchor" href="#features-cmds">#</a> <code>features.cmds</code></h3>
<ul>
<li>类型： <code>Array&lt;String|Object&gt;</code></li>
</ul>
<p>该功能下可响应的命令集，支持 6 种类型，由 <code>cmds</code> 的类型或 <code>cmds.type</code> 决定，包括如下类型：</p>
<h4 id="简单文本"><a class="header-anchor" href="#简单文本">#</a> 简单文本</h4>
<p>该模式下将直接匹配 uTools 输入框中输入的文本</p>
<ul>
<li>结构：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"文本"</span><span class="token punctuation">,</span> <span class="token string">"text"</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="正则文本"><a class="header-anchor" href="#正则文本">#</a> 正则文本</h4>
<p>通过正则模式匹配输入框中的文本</p>
<ul>
<li>结构：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 类型（必须）</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"regex"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字说明，在搜索列表中出现（必须）</span>
        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"文本正则匹配"</span><span class="token punctuation">,</span>
        <span class="token comment">// 正则表达式字符串</span>
        <span class="token property">"match"</span><span class="token operator">:</span> <span class="token string">"/xxx/i"</span><span class="token punctuation">,</span>
        <span class="token comment">// 长度限制（主输入框中的字符不少于） (可选)</span>
        <span class="token property">"minLength"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 长度限制（不多于） (可选)</span>
        <span class="token property">"maxLength"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="图片"><a class="header-anchor" href="#图片">#</a> 图片</h4>
<p>当拖拽到 uTools 窗口的文件或剪贴板数据（文件路径或截图）为图片格式时触发</p>
<ul>
<li>结构：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 类型（必须）</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"img"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字说明，在搜索列表中出现（必须）</span>
        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"图片匹配"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="文件、文件夹"><a class="header-anchor" href="#文件、文件夹">#</a> 文件、文件夹</h4>
<p>当剪贴板中为文件、文件夹路径或将文件、文件夹拖拽到 uTools 窗口时触发</p>
<ul>
<li>结构：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 类型（必须）</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"files"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字说明，在搜索列表中出现（必须）</span>
        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"文件匹配"</span><span class="token punctuation">,</span>
        <span class="token comment">// 支持 file 或 directory (可选)</span>
        <span class="token property">"fileType"</span><span class="token operator">:</span> <span class="token string">"file"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文件名称正则匹配  (可选)</span>
        <span class="token property">"match"</span><span class="token operator">:</span> <span class="token string">"/xxx/"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文件数量限制（不少于） (可选)</span>
        <span class="token property">"minLength"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 文件数量限制（不多于） (可选)</span>
        <span class="token property">"maxLength"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="窗口"><a class="header-anchor" href="#窗口">#</a> 窗口</h4>
<p>根据呼出 uTools 前的活动窗口匹配</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>可使用 uTools <code>窗口信息</code> 关键字查看窗口信息</p>
</div>
<ul>
<li>结构：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 类型（必须）</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"window"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字说明，在搜索列表中出现（必须）</span>
        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"窗口动作"</span><span class="token punctuation">,</span>
        <span class="token comment">// 窗口匹配规则</span>
        <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 应用 (可选)</span>
            <span class="token property">"app"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"xxx.app"</span><span class="token punctuation">,</span> <span class="token string">"xxx.exe"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 匹配窗口标题的正则 (有配置时应用也必须配置) (可选)</span>
            <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"/xxxx/"</span><span class="token punctuation">,</span>
            <span class="token comment">// 窗口类 Windows 专有 (可选)</span>
            <span class="token property">"class"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="无匹配"><a class="header-anchor" href="#无匹配">#</a> 无匹配</h4>
<p>当 uTools 主输入框中的关键字无任何匹配项时触发</p>
<ul>
<li>结构：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 类型（必须）</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"over"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字说明，在搜索列表中出现（必须）</span>
        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"无匹配时"</span><span class="token punctuation">,</span>
        <span class="token comment">// 排除的正则 (可选)</span>
        <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token string">"/xxx/i"</span><span class="token punctuation">,</span>
        <span class="token comment">// 长度限制（主输入框中的字符不少于） (可选)</span>
        <span class="token property">"minLength"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 长度限制（不多于） (可选)</span>
        <span class="token property">"maxLength"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="完整配置下载"><a class="header-anchor" href="#完整配置下载">#</a> 完整配置下载</h2>
<p>完整配置文件<a href="../plugin.json">下载</a></p>
</template>