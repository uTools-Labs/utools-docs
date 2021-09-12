<template><h1 id="utools-api"><a class="header-anchor" href="#utools-api">#</a> uTools API</h1>
<p>在插件初始化完成时，uTools 会自动在你的 window 对象上挂载 utools 对象，它将提供一些特有的 api，使你的插件能够更好的与uTools 主窗口沟通，并获得一些有意义的底层能力。</p>
<h2 id="事件"><a class="header-anchor" href="#事件">#</a> 事件</h2>
<p>你可以根据需要，事先定义好一些回调函数，uTools 会在事件产生时主动调用它们。</p>
<h3 id="onpluginready-callback"><a class="header-anchor" href="#onpluginready-callback">#</a> <code>onPluginReady(callback)</code></h3>
<ul>
<li><code>callback</code> Function</li>
</ul>
<blockquote>
<p>当插件装载成功，uTools 将会主动调用这个方法（生命周期内仅调用一次），所有的 api 都应该在 onPluginReady 之后进行调用。</p>
</blockquote>
<h4 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">onPluginReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'插件装配完成，已准备好'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="onpluginenter-callback"><a class="header-anchor" href="#onpluginenter-callback">#</a> <code>onPluginEnter(callback)</code></h3>
<ul>
<li><code>callback</code> Function
<ul>
<li><code>Object</code>
<ul>
<li>
<p><code>code</code> String</p>
<blockquote>
<p>plugin.json 配置的 feature.code</p>
</blockquote>
</li>
<li>
<p><code>type</code> String</p>
<blockquote>
<p>plugin.json 配置的 feature.cmd.type，可以为 &quot;text&quot;、&quot;img&quot;、 &quot;files&quot;、 &quot;regex&quot;、 &quot;over&quot;、&quot;window&quot;</p>
</blockquote>
</li>
<li>
<p><code>payload</code> String | Object | Array</p>
<blockquote>
<p>feature.cmd.type 对应匹配的数据</p>
</blockquote>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>每当插件从后台进入到前台时，uTools 将会主动调用这个方法。</p>
</blockquote>
<h4 id="示例-1"><a class="header-anchor" href="#示例-1">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">onPluginEnter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>code<span class="token punctuation">,</span> type<span class="token punctuation">,</span> payload<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户进入插件'</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> type<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/* 
type 为 "files" 时， payload 值示例
[
	{
		"isFile": true,
		"isDirectory": false,
		"name": "demo.js",
		"path": "C:\\demo.js"
	}
]

type 为 "window" 时， payload 值示例
{
	"id": 264584,
	"class": "Chrome_WidgetWin_1",
	"title": "demo",
	"x": -8,
	"y": -8,
	"width": 1936,
	"height": 1056,
	"appPath": "C:\\demo.exe",
	"pid": 232,
	"app": "demo.exe"
}

type 为 "img" 时， payload 值示例
data:image/png;base64,...

type 为 "text"、"regex"、 "over" 时， payload 值为进入插件时的主输入框文本
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="onpluginout-callback"><a class="header-anchor" href="#onpluginout-callback">#</a> <code>onPluginOut(callback)</code></h3>
<ul>
<li><code>callback</code> Function</li>
</ul>
<blockquote>
<p>每当插件从前台进入到后台时，uTools 将会主动调用这个方法。</p>
</blockquote>
<h4 id="示例-2"><a class="header-anchor" href="#示例-2">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">onPluginOut</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户退出插件'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="onplugindetach-callback"><a class="header-anchor" href="#onplugindetach-callback">#</a> <code>onPluginDetach(callback)</code></h3>
<ul>
<li><code>callback</code> Function</li>
</ul>
<blockquote>
<p>用户对插件进行分离操作时，uTools 将会主动调用这个方法。</p>
</blockquote>
<h4 id="示例-3"><a class="header-anchor" href="#示例-3">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">onPluginDetach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'插件被分离'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="ondbpull-callback"><a class="header-anchor" href="#ondbpull-callback">#</a> <code>onDbPull(callback)</code></h3>
<ul>
<li><code>callback</code> Function</li>
</ul>
<blockquote>
<p>当此插件的数据在其他设备上被更改后同步到此设备时，uTools 将会主动调用这个方法</p>
</blockquote>
<h4 id="示例-4"><a class="header-anchor" href="#示例-4">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">onDbPull</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onDbPull'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="窗口交互"><a class="header-anchor" href="#窗口交互">#</a> 窗口交互</h2>
<h3 id="hidemainwindow-isrestoreprewindow"><a class="header-anchor" href="#hidemainwindow-isrestoreprewindow">#</a> <code>hideMainWindow(isRestorePreWindow)</code></h3>
<ul>
<li>
<p><code>isRestorePreWindow</code> Boolean</p>
<blockquote>
<p>是否焦点回归到前面的活动窗口，默认 true</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Boolean</p>
</li>
</ul>
<blockquote>
<p>执行该方法将会隐藏 uTools 主窗口，包括此时正在主窗口运行的插件，分离的插件不会被隐藏。</p>
</blockquote>
<h4 id="示例-5"><a class="header-anchor" href="#示例-5">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">hideMainWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="showmainwindow"><a class="header-anchor" href="#showmainwindow">#</a> <code>showMainWindow()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>执行该方法将会显示 uTools 主窗口，包括此时正在主窗口运行的插件。</p>
</blockquote>
<h4 id="示例-6"><a class="header-anchor" href="#示例-6">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">showMainWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="setexpendheight-height"><a class="header-anchor" href="#setexpendheight-height">#</a> <code>setExpendHeight(height)</code></h3>
<ul>
<li><code>height</code> Integer</li>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>执行该方法将会修改插件窗口的高度。</p>
</blockquote>
<h4 id="示例-7"><a class="header-anchor" href="#示例-7">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">setExpendHeight</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="setsubinput-onchange-placeholder-isfocus"><a class="header-anchor" href="#setsubinput-onchange-placeholder-isfocus">#</a> <code>setSubInput(onChange, placeholder, isFocus)</code></h3>
<ul>
<li>
<p><code>onChange</code> Function</p>
<ul>
<li><code>Object</code>
<ul>
<li><code>text</code> String</li>
</ul>
</li>
</ul>
<blockquote>
<p>子输入框文本修改时触发</p>
</blockquote>
</li>
<li>
<p><code>placeholder</code> String (可选)</p>
<blockquote>
<p>子输入框占位符</p>
</blockquote>
</li>
<li>
<p><code>isFocus</code> Boolean (可选)</p>
<blockquote>
<p>子输入框是否获得焦点，默认 true</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Boolean</p>
</li>
</ul>
<blockquote>
<p>设置子输入框，进入插件后，原本 uTools 的搜索条主输入框将会变成子输入框，子输入框可以为插件所使用。</p>
</blockquote>
<p><img src="https://res.u-tools.cn/website/main.png" alt="main.png"></p>
<p align="center">主输入框</p>
![main.png](https://res.u-tools.cn/website/subInput.png)
<p align="center">子输入框</p>
#### 示例
```js
utools.setSubInput(({ text }) => {
  console.log(text)
}, '搜索')
```
<h3 id="removesubinput"><a class="header-anchor" href="#removesubinput">#</a> <code>removeSubInput()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>移除已经设置的子输入框，在插件切换到其他页面时可以重新设置子输入框为其所用。</p>
</blockquote>
<h4 id="示例-8"><a class="header-anchor" href="#示例-8">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">removeSubInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="setsubinputvalue-value"><a class="header-anchor" href="#setsubinputvalue-value">#</a> <code>setSubInputValue(value)</code></h3>
<ul>
<li><code>value</code> String</li>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>直接对子输入框的值进行设置。</p>
</blockquote>
<h4 id="示例-9"><a class="header-anchor" href="#示例-9">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">setSubInputValue</span><span class="token punctuation">(</span><span class="token string">'uTools'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="subinputfocus"><a class="header-anchor" href="#subinputfocus">#</a> <code>subInputFocus()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>子输入框获得焦点</p>
</blockquote>
<h4 id="示例-10"><a class="header-anchor" href="#示例-10">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">subInputFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="subinputselect"><a class="header-anchor" href="#subinputselect">#</a> <code>subInputSelect()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>子输入框获得焦点并选中</p>
</blockquote>
<h4 id="示例-11"><a class="header-anchor" href="#示例-11">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">subInputSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="subinputblur"><a class="header-anchor" href="#subinputblur">#</a> <code>subInputBlur()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>子输入框失去焦点，插件获得焦点</p>
</blockquote>
<h4 id="示例-12"><a class="header-anchor" href="#示例-12">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">subInputBlur</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="outplugin"><a class="header-anchor" href="#outplugin">#</a> <code>outPlugin()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>执行该方法将会退出当前插件。（插件进入后台，进程并未结束）</p>
</blockquote>
<h4 id="示例-13"><a class="header-anchor" href="#示例-13">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">outPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="redirect-label-payload"><a class="header-anchor" href="#redirect-label-payload">#</a> <code>redirect(label, payload)</code></h3>
<ul>
<li>
<p><code>label</code> String</p>
<blockquote>
<p>feature.cmd.label 名称</p>
</blockquote>
</li>
<li>
<p><code>payload</code> String | Object</p>
<blockquote>
<p>feature.cmd.type 对应的数据</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Boolean</p>
</li>
</ul>
<blockquote>
<p>该方法可以携带数据，跳转到另一个插件进行处理，如果用户未安装对应的插件，uTools 会弹出提醒并引导进入插件市场下载。</p>
</blockquote>
<h4 id="示例-14"><a class="header-anchor" href="#示例-14">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//content 为string类型</span>
utools<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'翻译'</span><span class="token punctuation">,</span> <span class="token string">'hello world'</span><span class="token punctuation">)</span>

<span class="token comment">//content 为object类型</span>
utools<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'翻译'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token string">'type'</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
	<span class="token string">'data'</span><span class="token operator">:</span> <span class="token string">'hello world'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//传递图片</span>
utools<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'图片识别'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token string">'type'</span><span class="token operator">:</span> <span class="token string">'img'</span><span class="token punctuation">,</span>
	<span class="token comment">// data 可以是本地图片路径、base64编码的图片、Buffer对象</span>
	<span class="token string">'data'</span><span class="token operator">:</span> <span class="token string">'/path/to/img.jpg(支持jpeg|png|bmp)'</span> <span class="token comment">//filePath、base64、Buffer</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//传递文件、文件夹</span>
utools<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'图片压缩'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token string">'type'</span><span class="token operator">:</span> <span class="token string">'files'</span><span class="token punctuation">,</span>
	<span class="token comment">// data 可以是本地文件、文件夹路径</span>
	<span class="token string">'data'</span><span class="token operator">:</span> <span class="token string">'/path/to/img.jpg'</span> <span class="token comment">//filePath、array</span>
	<span class="token comment">//'data': ['path1', 'path2'] //支持数组</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="showopendialog-options"><a class="header-anchor" href="#showopendialog-options">#</a> <code>showOpenDialog(options)</code></h3>
<ul>
<li>
<p><code>options</code> Object</p>
<blockquote>
<p>与 <a href="https://www.electronjs.org/docs/api/dialog#dialogshowopendialogsyncbrowserwindow-options" target="_blank" rel="noopener noreferrer">Electron API dialog.showOpenDialogSync<OutboundLink/></a> options 一致</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Array | undefined</p>
<blockquote>
<p>返回选择的文件数组，用户取消返回 undefined</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>弹出文件选择框</p>
</blockquote>
<h4 id="示例-15"><a class="header-anchor" href="#示例-15">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
  filters<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string">'name'</span><span class="token operator">:</span> <span class="token string">'plugin.json'</span><span class="token punctuation">,</span> extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'json'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  properties<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'openFile'</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="showsavedialog-options"><a class="header-anchor" href="#showsavedialog-options">#</a> <code>showSaveDialog(options)</code></h3>
<ul>
<li>
<p><code>options</code> Object</p>
<blockquote>
<p>与 <a href="https://www.electronjs.org/docs/api/dialog#dialogshowsavedialogsyncbrowserwindow-options" target="_blank" rel="noopener noreferrer">Electron API dialog.showSaveDialogSync<OutboundLink/></a> options 一致</p>
</blockquote>
</li>
<li>
<p><code>返回</code> String | undefined</p>
<blockquote>
<p>返回选择的路径，用户取消返回 undefined</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>弹出文件保存框</p>
</blockquote>
<h4 id="示例-16"><a class="header-anchor" href="#示例-16">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">showSaveDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
  title<span class="token operator">:</span> <span class="token string">'保存位置'</span><span class="token punctuation">,</span> 
  defaultPath<span class="token operator">:</span> utools<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token string">'downloads'</span><span class="token punctuation">)</span>
  buttonLabel<span class="token operator">:</span> <span class="token string">'保存'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="showmessagebox-options"><a class="header-anchor" href="#showmessagebox-options">#</a> <code>showMessageBox(options)</code></h3>
<ul>
<li>
<p><code>options</code> Object</p>
<blockquote>
<p>与 <a href="https://www.electronjs.org/docs/api/dialog#dialogshowmessageboxsyncbrowserwindow-options" target="_blank" rel="noopener noreferrer">Electron API dialog.showMessageBoxSync<OutboundLink/></a> options 一致</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Integer</p>
<blockquote>
<p>返回点击按钮的索引</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>弹出消息框</p>
</blockquote>
<h4 id="示例-17"><a class="header-anchor" href="#示例-17">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">'question'</span><span class="token punctuation">,</span>
  buttons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'取消'</span><span class="token punctuation">,</span> <span class="token string">'关机'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'关机确认'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'电脑确定要关机?'</span><span class="token punctuation">,</span>
  defaultId<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="findinpage-text-options"><a class="header-anchor" href="#findinpage-text-options">#</a> <code>findInPage(text, options)</code></h3>
<ul>
<li>
<p><code>text</code> String</p>
<blockquote>
<p>要搜索的内容(必填)</p>
</blockquote>
</li>
<li>
<p><code>options</code> Object (可选)</p>
<blockquote>
<p>与 <a href="https://www.electronjs.org/docs/api/web-contents#contentsfindinpagetext-options" target="_blank" rel="noopener noreferrer">Electron API contentsfindinpagetext-options<OutboundLink/></a> options 一致</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>插件页面中查找内容</p>
</blockquote>
<h4 id="示例-18"><a class="header-anchor" href="#示例-18">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">findInPage</span><span class="token punctuation">(</span><span class="token string">'utools'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="stopfindinpage-action"><a class="header-anchor" href="#stopfindinpage-action">#</a> <code>stopFindInPage(action)</code></h3>
<ul>
<li>
<p><code>action</code> String</p>
<blockquote>
<p>&quot;clearSelection&quot; | &quot;keepSelection&quot; | &quot;activateSelection&quot;, 默认 &quot;clearSelection&quot;</p>
<p>与 <a href="https://www.electronjs.org/docs/api/web-contents#contentsstopfindinpageaction" target="_blank" rel="noopener noreferrer">Electron API contentsstopfindinpageaction<OutboundLink/></a> 一致</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>停止插件页面中查找</p>
</blockquote>
<h4 id="示例-19"><a class="header-anchor" href="#示例-19">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">stopFindInPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="startdrag-file"><a class="header-anchor" href="#startdrag-file">#</a> <code>startDrag(file)</code></h3>
<ul>
<li>
<p><code>file</code> String | Array</p>
<blockquote>
<p>文件路径 或 文件路径集合</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>原生拖拽文件到其他窗口</p>
</blockquote>
<h4 id="示例-20"><a class="header-anchor" href="#示例-20">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">startDrag</span><span class="token punctuation">(</span><span class="token string">'/path/to/file'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="createbrowserwindow-url-options-callback"><a class="header-anchor" href="#createbrowserwindow-url-options-callback">#</a> <code>createBrowserWindow(url, options, callback)</code></h3>
<ul>
<li>
<p><code>url</code> String</p>
<blockquote>
<p>相对路径的 html 文件</p>
</blockquote>
</li>
<li>
<p><code>options</code> Object</p>
<blockquote>
<p>与 <a href="https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions" target="_blank" rel="noopener noreferrer">Electron API new BrowserWindow<OutboundLink/></a> 参数一样，注意：preload 需配置相对位置</p>
</blockquote>
</li>
<li>
<p><code>callback</code> Function (可选)</p>
<blockquote>
<p><code>url</code> 加载完成时回调</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Object</p>
<blockquote>
<p>返回 uTools API 构建的 <a href="https://www.electronjs.org/docs/api/browser-window" target="_blank" rel="noopener noreferrer">BrowserWindow<OutboundLink/></a> 对象。 <em>保留了大部分实例方法</em></p>
</blockquote>
</li>
</ul>
<blockquote>
<p>创建浏览器窗口</p>
</blockquote>
<h4 id="示例-21"><a class="header-anchor" href="#示例-21">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ubWindow <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">createBrowserWindow</span><span class="token punctuation">(</span><span class="token string">'test.html'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'测试窗口'</span><span class="token punctuation">,</span>
  webPreferences<span class="token operator">:</span> <span class="token punctuation">{</span>
    preload<span class="token operator">:</span> <span class="token string">'preload.js'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 显示</span>
  ubWindow<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 置顶</span>
  ubWindow<span class="token punctuation">.</span><span class="token function">setAlwaysOnTop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token comment">// 窗口全屏</span>
  ubWindow<span class="token punctuation">.</span><span class="token function">setFullScreen</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token comment">// 向子窗口传递数据</span>
  ubWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'ping'</span><span class="token punctuation">)</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ipcRenderer<span class="token punctuation">.</span><span class="token function">sendTo</span><span class="token punctuation">(</span>ubWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token string">'ping'</span><span class="token punctuation">)</span>
  <span class="token comment">// 执行脚本</span>
  ubWindow<span class="token punctuation">.</span><span class="token function">executeJavaScript</span><span class="token punctuation">(</span><span class="token string">'fetch("https://jsonplaceholder.typicode.com/users/1").then(resp => resp.json())'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// Will be the JSON object from the fetch call</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ubWindow<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在新建窗口 JavaScript 中接收父窗口传递过来的数据</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> ipcRenderer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ping'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="isdarkcolors"><a class="header-anchor" href="#isdarkcolors">#</a> <code>isDarkColors()</code></h3>
<blockquote>
<p>是否深色模式</p>
</blockquote>
<h4 id="示例-22"><a class="header-anchor" href="#示例-22">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">onPluginEnter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>code<span class="token punctuation">,</span> type<span class="token punctuation">,</span> payload<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">isDarkColors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">'dark-mode'</span> <span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="动态增减功能"><a class="header-anchor" href="#动态增减功能">#</a> 动态增减功能</h2>
<p>很多时候，插件中会提供一些功能供用户进行个性化设置（例如：<code>网页快开</code>插件），这部分配置无法在 <code>plugin.json</code> 事先定义好，所以我们提供了以下方法对插件功能进行动态增减。</p>
<h3 id="getfeatures"><a class="header-anchor" href="#getfeatures">#</a> <code>getFeatures()</code></h3>
<ul>
<li><code>返回</code> Array</li>
</ul>
<blockquote>
<p>返回本插件所有动态增加的功能。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> features <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>features<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="setfeature-feature"><a class="header-anchor" href="#setfeature-feature">#</a> <code>setFeature(feature)</code></h3>
<ul>
<li>
<p><code>feature</code> Object</p>
<blockquote>
<p>格式与 <code>plugin.json</code> 中配置的格式一致</p>
</blockquote>
<ul>
<li><code>code</code> String</li>
<li><code>explain</code> String</li>
<li><code>icon</code> String (可选)</li>
<li><code>platform</code> Array (可选)</li>
<li><code>cmds</code> Array</li>
</ul>
</li>
<li>
<p><code>返回</code> Boolean</p>
</li>
</ul>
<blockquote>
<p>为本插件动态新增某个功能。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">setFeature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">"code"</span><span class="token operator">:</span> <span class="token string">"hosts"</span><span class="token punctuation">,</span>
  <span class="token string">"explain"</span><span class="token operator">:</span> <span class="token string">"hosts切换"</span><span class="token punctuation">,</span>
  <span class="token comment">// "icon": "res/xxx.png",</span>
  <span class="token comment">// "icon": "data:image/png;base64,xxx...",</span>
  <span class="token comment">// "platform": ["win32", "darwin", "linux"]</span>
  <span class="token string">"cmds"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"hosts"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="removefeature-code"><a class="header-anchor" href="#removefeature-code">#</a> <code>removeFeature(code)</code></h3>
<ul>
<li><code>code</code> String</li>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>动态删除本插件的某个功能。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">removeFeature</span><span class="token punctuation">(</span><span class="token string">'code'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="用户"><a class="header-anchor" href="#用户">#</a> 用户</h2>
<p>获取当前用户头像、昵称</p>
<h3 id="getuser"><a class="header-anchor" href="#getuser">#</a> <code>getUser()</code></h3>
<ul>
<li>
<p><code>返回</code> Object</p>
<blockquote>
<p>{ avatar: String, nickname: String, type: 'member' | 'user' } | null</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取当前用户，未登录帐号返回 <code>null</code></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="fetchuserservertemporarytoken"><a class="header-anchor" href="#fetchuserservertemporarytoken">#</a> <code>fetchUserServerTemporaryToken()</code></h3>
<ul>
<li>
<p><code>返回</code> Promise</p>
<blockquote>
<p>Promise&lt;{ token: string, expired_at: number }&gt;</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取用户服务端临时令牌，用于<RouterLink to="/developer/server-api.html#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF%E6%8E%A5%E5%8F%A3">获取用户基础信息接口</RouterLink></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">fetchUserServerTemporaryToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ret</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="支付"><a class="header-anchor" href="#支付">#</a> 支付</h2>
<h3 id="openpayment-options-callback"><a class="header-anchor" href="#openpayment-options-callback">#</a> <code>openPayment(options, callback)</code></h3>
<ul>
<li>
<p><code>options</code></p>
<ul>
<li>
<p><code>goodsId</code> String</p>
<blockquote>
<p>商品 ID，在 “ uTools 开发者工具” 插件中创建</p>
</blockquote>
</li>
<li>
<p><code>outOrderId</code> String  (可选)</p>
<blockquote>
<p>第三方服务生成的订单号（6 - 64 字符）</p>
</blockquote>
</li>
<li>
<p><code>attach</code> String (可选)</p>
<blockquote>
<p>第三方服务附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用（最多 256 字符）</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p><code>callback</code></p>
<blockquote>
<p>支付成功后回调</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>打开支付</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">openPayment</span><span class="token punctuation">(</span><span class="token punctuation">{</span> goodsId<span class="token operator">:</span> <span class="token string">'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 用户完成支付，继续业务代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="fetchuserpayments"><a class="header-anchor" href="#fetchuserpayments">#</a> <code>fetchUserPayments()</code></h3>
<ul>
<li>
<p><code>返回</code> Promise</p>
<blockquote>
<p>Promise&lt;{ order_id: string, out_order_id: string, open_id:string,  pay_fee: number, body: string, attach: string, goods_id: string, paid_at: string,created_at }[]&gt;</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取用户支付记录</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">fetchUserPayments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ret</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断如果存在支付记录则继续相关业务</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
  	    <span class="token punctuation">{</span>
        "order_id": "ZsVSwEDoR7PPs6vWdAGplEpEpNjn8xb4", // utools 订单号
        "out_order_id": "", // 外部订单号
        "open_id": "a331127d654761ac91d086b942aae7b6", uTools 用户 ID, 对于此插件不变且唯一
        "pay_fee": 1, // 支付金额（分）
        "body": "会员1年", // 支付内容
        "attach": "", // 附加数据
        "goods_id": "6n193s7P95p9gA13786YkwQ5oxHpVW4f", // 商品 ID
        "paid_at": "2021-06-18 16:55:26", // 支付时间
        "created_at": "2021-06-18 16:55:11" // 订单生成时间
    <span class="token punctuation">}</span>
  */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="工具"><a class="header-anchor" href="#工具">#</a> 工具</h2>
<p>屏幕取色 &amp; 屏幕截图</p>
<h3 id="screencolorpick-callback"><a class="header-anchor" href="#screencolorpick-callback">#</a> <code>screenColorPick(callback)</code></h3>
<ul>
<li><code>callback</code> Function
<blockquote>
<p>取色结束回调</p>
</blockquote>
<ul>
<li><code>Object</code>
<ul>
<li><code>hex</code> String</li>
<li><code>rgb</code> String</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>屏幕取色</p>
</blockquote>
<h4 id="示例-23"><a class="header-anchor" href="#示例-23">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">screenColorPick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>hex<span class="token punctuation">,</span> rgb<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hex<span class="token punctuation">)</span> <span class="token comment">// #FFFFFF</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rgb<span class="token punctuation">)</span> <span class="token comment">// RGB(0, 0, 0)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="screencapture-callback"><a class="header-anchor" href="#screencapture-callback">#</a> <code>screenCapture(callback)</code></h3>
<ul>
<li><code>callback</code> Function
<blockquote>
<p>截图结束回调</p>
</blockquote>
<ul>
<li>
<p><code>String</code></p>
<blockquote>
<p>图片的 Base64 字符串</p>
</blockquote>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>屏幕截图</p>
</blockquote>
<h4 id="示例-24"><a class="header-anchor" href="#示例-24">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">screenCapture</span><span class="token punctuation">(</span><span class="token parameter">base64Str</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  utools<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'识别图片中文字'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'img'</span><span class="token punctuation">,</span> data<span class="token operator">:</span> base64Str <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="模拟"><a class="header-anchor" href="#模拟">#</a> 模拟</h2>
<p>模拟敲击键盘 和 鼠标点击</p>
<h3 id="simulatekeyboardtap-key-modifier"><a class="header-anchor" href="#simulatekeyboardtap-key-modifier">#</a> <code>simulateKeyboardTap(key, ...modifier)</code></h3>
<ul>
<li>
<p><code>key</code> String</p>
<blockquote>
<p>键值</p>
</blockquote>
</li>
<li>
<p><code>modifier</code> String (可选)</p>
<blockquote>
<p>功能键</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>模拟键盘按键</p>
</blockquote>
<h4 id="示例-25"><a class="header-anchor" href="#示例-25">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 模拟键盘敲击 Enter</span>
utools<span class="token punctuation">.</span><span class="token function">simulateKeyboardTap</span><span class="token punctuation">(</span><span class="token string">'enter'</span><span class="token punctuation">)</span>
<span class="token comment">// windows linux 模拟粘贴</span>
utools<span class="token punctuation">.</span><span class="token function">simulateKeyboardTap</span><span class="token punctuation">(</span><span class="token string">'v'</span><span class="token punctuation">,</span> <span class="token string">'ctrl'</span><span class="token punctuation">)</span>
<span class="token comment">// macos 模拟粘贴</span>
utools<span class="token punctuation">.</span><span class="token function">simulateKeyboardTap</span><span class="token punctuation">(</span><span class="token string">'v'</span><span class="token punctuation">,</span> <span class="token string">'command'</span><span class="token punctuation">)</span>
<span class="token comment">// 模拟 Ctrl + Alt + A</span>
utools<span class="token punctuation">.</span><span class="token function">simulateKeyboardTap</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'ctrl'</span><span class="token punctuation">,</span> <span class="token string">'alt'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="simulatemousemove-x-y"><a class="header-anchor" href="#simulatemousemove-x-y">#</a> <code>simulateMouseMove(x, y)</code></h3>
<ul>
<li><code>x</code> Integer</li>
<li><code>y</code> Integer</li>
</ul>
<blockquote>
<p>模拟鼠标移动</p>
</blockquote>
<h4 id="示例-26"><a class="header-anchor" href="#示例-26">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">simulateMouseMove</span><span class="token punctuation">(</span><span class="token number">100</span>，<span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="simulatemouseclick-x-y"><a class="header-anchor" href="#simulatemouseclick-x-y">#</a> <code>simulateMouseClick(x, y)</code></h3>
<ul>
<li><code>x</code> Integer (可选)</li>
<li><code>y</code> Integer (可选)</li>
</ul>
<blockquote>
<p>模拟鼠标左键单击</p>
</blockquote>
<h4 id="示例-27"><a class="header-anchor" href="#示例-27">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">simulateMouseClick</span><span class="token punctuation">(</span><span class="token number">100</span>，<span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="simulatemouserightclick-x-y"><a class="header-anchor" href="#simulatemouserightclick-x-y">#</a> <code>simulateMouseRightClick(x, y)</code></h3>
<ul>
<li><code>x</code> Integer (可选)</li>
<li><code>y</code> Integer (可选)</li>
</ul>
<blockquote>
<p>模拟鼠标右键单击</p>
</blockquote>
<h4 id="示例-28"><a class="header-anchor" href="#示例-28">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">simulateMouseRightClick</span><span class="token punctuation">(</span><span class="token number">100</span>，<span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="simulatemousedoubleclick-x-y"><a class="header-anchor" href="#simulatemousedoubleclick-x-y">#</a> <code>simulateMouseDoubleClick(x, y)</code></h3>
<ul>
<li><code>x</code> Integer (可选)</li>
<li><code>y</code> Integer (可选)</li>
</ul>
<blockquote>
<p>模拟鼠标双击</p>
</blockquote>
<h4 id="示例-29"><a class="header-anchor" href="#示例-29">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">simulateMouseDoubleClick</span><span class="token punctuation">(</span><span class="token number">100</span>，<span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="屏幕"><a class="header-anchor" href="#屏幕">#</a> 屏幕</h2>
<h3 id="getcursorscreenpoint"><a class="header-anchor" href="#getcursorscreenpoint">#</a> <code>getCursorScreenPoint()</code></h3>
<ul>
<li>
<p><code>返回</code> Object</p>
<blockquote>
<p>{ x: Integer, y: Integer }</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取鼠标绝对位置</p>
</blockquote>
<h4 id="示例-30"><a class="header-anchor" href="#示例-30">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> point <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getCursorScreenPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">,</span> point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="getprimarydisplay"><a class="header-anchor" href="#getprimarydisplay">#</a> <code>getPrimaryDisplay()</code></h3>
<ul>
<li>
<p><code>返回</code> Object</p>
<blockquote>
<p><a href="https://www.electronjs.org/docs/api/structures/display" target="_blank" rel="noopener noreferrer">Display对象<OutboundLink/></a></p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取主显示器</p>
</blockquote>
<h4 id="示例-31"><a class="header-anchor" href="#示例-31">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> display <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getPrimaryDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="getalldisplays"><a class="header-anchor" href="#getalldisplays">#</a> <code>getAllDisplays()</code></h3>
<ul>
<li>
<p><code>返回</code> Array</p>
<blockquote>
<p><a href="https://www.electronjs.org/docs/api/structures/display" target="_blank" rel="noopener noreferrer">Display对象<OutboundLink/></a> 集合</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取所有显示器</p>
</blockquote>
<h4 id="示例-32"><a class="header-anchor" href="#示例-32">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> displays <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getAllDisplays</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>displays<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="getdisplaynearestpoint-point"><a class="header-anchor" href="#getdisplaynearestpoint-point">#</a> <code>getDisplayNearestPoint(point)</code></h3>
<ul>
<li>
<p><code>point</code> Object</p>
</li>
<li>
<p><code>返回</code> Object</p>
<blockquote>
<p><a href="https://www.electronjs.org/docs/api/structures/display" target="_blank" rel="noopener noreferrer">Display对象<OutboundLink/></a></p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取位置所在的显示器</p>
</blockquote>
<h4 id="示例-33"><a class="header-anchor" href="#示例-33">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> display <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getDisplayNearestPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="getdisplaymatching-rect"><a class="header-anchor" href="#getdisplaymatching-rect">#</a> <code>getDisplayMatching(rect)</code></h3>
<ul>
<li>
<p><code>rect</code> Object</p>
</li>
<li>
<p><code>返回</code> Object</p>
<blockquote>
<p><a href="https://www.electronjs.org/docs/api/structures/display" target="_blank" rel="noopener noreferrer">Display对象<OutboundLink/></a></p>
</blockquote>
</li>
</ul>
<blockquote>
<p>获取矩形所在的显示器</p>
</blockquote>
<h4 id="示例-34"><a class="header-anchor" href="#示例-34">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> display <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getDisplayMatching</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="复制"><a class="header-anchor" href="#复制">#</a> 复制</h2>
<h3 id="copyfile-file"><a class="header-anchor" href="#copyfile-file">#</a> <code>copyFile(file)</code></h3>
<ul>
<li><code>file</code> String | Array</li>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>复制文件到系统剪贴板</p>
</blockquote>
<h4 id="示例-35"><a class="header-anchor" href="#示例-35">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 复制单个文件</span>
utools<span class="token punctuation">.</span><span class="token function">copyFile</span><span class="token punctuation">(</span><span class="token string">'/path/to/file'</span><span class="token punctuation">)</span>
<span class="token comment">// 复制多个文件</span>
utools<span class="token punctuation">.</span><span class="token function">copyFile</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/path/to/file1'</span><span class="token punctuation">,</span> <span class="token string">'/path/to/file2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="copyimage-img"><a class="header-anchor" href="#copyimage-img">#</a> <code>copyImage(img)</code></h3>
<ul>
<li><code>img</code> String | Buffer</li>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>复制图片到系统剪贴板</p>
</blockquote>
<h4 id="示例-36"><a class="header-anchor" href="#示例-36">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 路径</span>
utools<span class="token punctuation">.</span><span class="token function">copyImage</span><span class="token punctuation">(</span><span class="token string">'/path/to/img.png'</span><span class="token punctuation">)</span>
<span class="token comment">// base64</span>
utools<span class="token punctuation">.</span><span class="token function">copyImage</span><span class="token punctuation">(</span><span class="token string">'data:image/png;base64,xxxxxxxxx'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="copytext-text"><a class="header-anchor" href="#copytext-text">#</a> <code>copyText(text)</code></h3>
<ul>
<li><code>text</code> String</li>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>复制文本</p>
</blockquote>
<h4 id="示例-37"><a class="header-anchor" href="#示例-37">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">copyText</span><span class="token punctuation">(</span><span class="token string">'Hi, uTools'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="getcopyedfiles"><a class="header-anchor" href="#getcopyedfiles">#</a> <code>getCopyedFiles()</code></h3>
<ul>
<li><code>返回</code> Array</li>
</ul>
<blockquote>
<p>获取复制的文件或文件夹</p>
</blockquote>
<h4 id="示例-38"><a class="header-anchor" href="#示例-38">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">getCopyedFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 返回 [{ isFile: true, isDirectory: false, name: 'test.png', path: '/path/to/test.png' }]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="系统"><a class="header-anchor" href="#系统">#</a> 系统</h2>
<h3 id="shownotification-body-clickfeaturecode"><a class="header-anchor" href="#shownotification-body-clickfeaturecode">#</a> <code>showNotification(body, clickFeatureCode)</code></h3>
<ul>
<li>
<p><code>body</code> String</p>
</li>
<li>
<p><code>clickFeatureCode</code> String (可选)</p>
<blockquote>
<p>plugin.json 配置的 feature.code，点击通知进入插件功能(该 feature.cmds 至少包含一个搜索字符串关键字)</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>显示系统通知</p>
</blockquote>
<h4 id="示例-39"><a class="header-anchor" href="#示例-39">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">showNotification</span><span class="token punctuation">(</span><span class="token string">'Hi, uTools'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="shellopenpath-fullpath"><a class="header-anchor" href="#shellopenpath-fullpath">#</a> <code>shellOpenPath(fullPath)</code></h3>
<ul>
<li><code>fullPath</code> String</li>
</ul>
<blockquote>
<p>系统默认方式打开给定的文件</p>
</blockquote>
<h4 id="示例-40"><a class="header-anchor" href="#示例-40">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">shellOpenPath</span><span class="token punctuation">(</span><span class="token string">'/path/to/file'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="shellshowiteminfolder-fullpath"><a class="header-anchor" href="#shellshowiteminfolder-fullpath">#</a> <code>shellShowItemInFolder(fullPath)</code></h3>
<ul>
<li><code>fullPath</code> String</li>
</ul>
<blockquote>
<p>系统文件管理器中显示给定的文件</p>
</blockquote>
<h4 id="示例-41"><a class="header-anchor" href="#示例-41">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">shellShowItemInFolder</span><span class="token punctuation">(</span><span class="token string">'/path/to/file'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="shellopenexternal-url"><a class="header-anchor" href="#shellopenexternal-url">#</a> <code>shellOpenExternal(url)</code></h3>
<ul>
<li><code>url</code> String</li>
</ul>
<blockquote>
<p>系统默认的协议打开URL</p>
</blockquote>
<h4 id="示例-42"><a class="header-anchor" href="#示例-42">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 浏览器打开</span>
utools<span class="token punctuation">.</span><span class="token function">shellOpenExternal</span><span class="token punctuation">(</span><span class="token string">'https://u.tools'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="shellbeep"><a class="header-anchor" href="#shellbeep">#</a> <code>shellBeep()</code></h3>
<blockquote>
<p>播放哔哔声</p>
</blockquote>
<h4 id="示例-43"><a class="header-anchor" href="#示例-43">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">shellBeep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="getnativeid"><a class="header-anchor" href="#getnativeid">#</a> <code>getNativeId()</code></h3>
<ul>
<li><code>返回</code> String</li>
</ul>
<blockquote>
<p>获取本地 ID</p>
</blockquote>
<h4 id="示例-44"><a class="header-anchor" href="#示例-44">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 存储只与当前设备相关的信息</span>
<span class="token keyword">const</span> nativeId <span class="token operator">=</span> utools<span class="token punctuation">.</span><span class="token function">getNativeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>nativeId <span class="token operator">+</span> <span class="token string">'/key'</span><span class="token punctuation">,</span> <span class="token string">'native value'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="getappversion"><a class="header-anchor" href="#getappversion">#</a> <code>getAppVersion()</code></h3>
<ul>
<li><code>返回</code> String</li>
</ul>
<blockquote>
<p>获取软件版本</p>
</blockquote>
<h4 id="示例-45"><a class="header-anchor" href="#示例-45">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">getAppVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="getpath-name"><a class="header-anchor" href="#getpath-name">#</a> <code>getPath(name)</code></h3>
<ul>
<li><code>name</code> String
<blockquote>
<p>你可以通过名称请求以下的路径:</p>
</blockquote>
<ul>
<li><code>home</code> 用户的 home 文件夹（主目录）</li>
<li><code>appData</code> 当前用户的应用数据文件夹，默认对应：
<ul>
<li><code>%APPDATA%</code> Windows 中</li>
<li><code>~/Library/Application Support</code> macOS 中</li>
</ul>
</li>
<li><code>userData</code> 储存你应用程序设置文件的文件夹，默认是 appData 文件夹附加应用的名称</li>
<li><code>temp</code> 临时文件夹</li>
<li><code>exe</code> 当前的可执行文件</li>
<li><code>desktop</code> 当前用户的桌面文件夹</li>
<li><code>documents</code> 用户文档目录的路径</li>
<li><code>downloads</code> 用户下载目录的路径</li>
<li><code>music</code> 用户音乐目录的路径</li>
<li><code>pictures</code> 用户图片目录的路径</li>
<li><code>videos</code> 用户视频目录的路径</li>
<li><code>logs</code> 应用程序的日志文件夹</li>
</ul>
</li>
<li><code>返回</code> String</li>
</ul>
<blockquote>
<p>获取路径</p>
</blockquote>
<h4 id="示例-46"><a class="header-anchor" href="#示例-46">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取下载路径</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token string">'downloads'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="getfileicon-filepath"><a class="header-anchor" href="#getfileicon-filepath">#</a> <code>getFileIcon(filePath)</code></h3>
<ul>
<li>
<p><code>filePath</code> String</p>
<blockquote>
<p>文件路径、文件扩展名、&quot;folder&quot;</p>
</blockquote>
</li>
<li>
<p><code>返回</code> String</p>
</li>
</ul>
<blockquote>
<p>获取文件图标</p>
</blockquote>
<h4 id="示例-47"><a class="header-anchor" href="#示例-47">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取扩展名为 "txt" 的文件图标</span>
utools<span class="token punctuation">.</span><span class="token function">getFileIcon</span><span class="token punctuation">(</span><span class="token string">'.txt'</span><span class="token punctuation">)</span>
<span class="token comment">// 获取文件夹图标</span>
utools<span class="token punctuation">.</span><span class="token function">getFileIcon</span><span class="token punctuation">(</span><span class="token string">'folder'</span><span class="token punctuation">)</span>
<span class="token comment">// 获取文件图标</span>
utools<span class="token punctuation">.</span><span class="token function">getFileIcon</span><span class="token punctuation">(</span><span class="token string">'D:\\test.url'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="readcurrentfolderpath"><a class="header-anchor" href="#readcurrentfolderpath">#</a> <code>readCurrentFolderPath()</code></h3>
<ul>
<li><code>返回</code> Promise</li>
</ul>
<blockquote>
<p>读取当前文件管理器窗口路径 (linux 不支持)</p>
</blockquote>
<h4 id="示例-48"><a class="header-anchor" href="#示例-48">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">readCurrentFolderPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="readcurrentbrowserurl"><a class="header-anchor" href="#readcurrentbrowserurl">#</a> <code>readCurrentBrowserUrl()</code></h3>
<ul>
<li><code>返回</code> Promise</li>
</ul>
<blockquote>
<p>读取当前浏览器窗口 URL (linux 不支持)</p>
</blockquote>
<blockquote>
<p>MacOS 支持浏览器 Safari、Chrome、Microsoft Edge、Opera、Vivaldi、Brave</p>
</blockquote>
<blockquote>
<p>Windows 支持浏览器 Chrome、Firefox、Edge、IE、Opera、Brave</p>
</blockquote>
<h4 id="示例-49"><a class="header-anchor" href="#示例-49">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">readCurrentBrowserUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="ismacos"><a class="header-anchor" href="#ismacos">#</a> <code>isMacOs()</code></h3>
<blockquote>
<p>是否 MacOS 操作系统</p>
</blockquote>
<h4 id="示例-50"><a class="header-anchor" href="#示例-50">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">isMacOs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mac'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="iswindows"><a class="header-anchor" href="#iswindows">#</a> <code>isWindows()</code></h3>
<blockquote>
<p>是否 Windows 操作系统</p>
</blockquote>
<h4 id="示例-51"><a class="header-anchor" href="#示例-51">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">isWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'windows'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="islinux"><a class="header-anchor" href="#islinux">#</a> <code>isLinux()</code></h3>
<blockquote>
<p>是否 Linux 操作系统</p>
</blockquote>
<h4 id="示例-52"><a class="header-anchor" href="#示例-52">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">isLinux</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'linux'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>