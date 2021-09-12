<template><h1 id="ubrowser-api"><a class="header-anchor" href="#ubrowser-api">#</a> ubrowser API</h1>
<p>uTools browser 简称 ubrowser，是根据 uTools 的特性，量身打造的一个可编程浏览器。利用 ubrowser 可以轻而易举连接一切互联网服务，且与 uTools 完美结合。</p>
<p>ubrowser 拥有优雅的链式调用接口，可以用口语化的数行代码，实现一系列匪夷所思的操作。例如：</p>
<p>1、自动化测试（自动打开页面、点击、判断，彻底解放测试人员。）</p>
<p>2、自动抢票</p>
<p>3、自动去除搜索引擎广告</p>
<p>4、自动将选中的文字、图片保存到各类云笔记</p>
<p>基本 demo：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 打开"必应" 并搜索 "uTools"</span>
utools<span class="token punctuation">.</span>ubrowser<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'https://cn.bing.com'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">'#sb_form_q'</span><span class="token punctuation">,</span> <span class="token string">'uTools'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">'#sb_form_go'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api-列表"><a class="header-anchor" href="#api-列表">#</a> API 列表</h2>
<h3 id="useragent-useragent"><a class="header-anchor" href="#useragent-useragent">#</a> <code>useragent(userAgent)</code></h3>
<ul>
<li><code>userAgent</code> String</li>
</ul>
<blockquote>
<p>设置 User-Agent</p>
</blockquote>
<h3 id="goto-url-headers"><a class="header-anchor" href="#goto-url-headers">#</a> <code>goto(url, headers)</code></h3>
<ul>
<li>
<p><code>url</code> String</p>
</li>
<li>
<p><code>headers</code> Object (可选)</p>
<blockquote>
<p>{ Referer: string, userAgent: string }</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>前往</p>
</blockquote>
<h3 id="goto-mdtext-title"><a class="header-anchor" href="#goto-mdtext-title">#</a> <code>goto(mdText, title)</code></h3>
<ul>
<li>
<p><code>mdText</code> String</p>
<blockquote>
<p>Markdown 文本</p>
</blockquote>
</li>
<li>
<p><code>title</code> String (可选)</p>
<blockquote>
<p>窗口标题</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>Markdown 转 Html 并显示</p>
</blockquote>
<h3 id="viewport-width-height"><a class="header-anchor" href="#viewport-width-height">#</a> <code>viewport(width, height)</code></h3>
<ul>
<li><code>width</code> Integer</li>
<li><code>height</code> Integer</li>
</ul>
<blockquote>
<p>页面大小</p>
</blockquote>
<h3 id="hide"><a class="header-anchor" href="#hide">#</a> <code>hide()</code></h3>
<blockquote>
<p>隐藏 ubrowser 窗口</p>
</blockquote>
<h3 id="show"><a class="header-anchor" href="#show">#</a> <code>show()</code></h3>
<blockquote>
<p>显示 ubrowser 窗口</p>
</blockquote>
<h3 id="css-csscode"><a class="header-anchor" href="#css-csscode">#</a> <code>css(cssCode)</code></h3>
<ul>
<li><code>cssCode</code> String</li>
</ul>
<blockquote>
<p>注入样式</p>
</blockquote>
<h3 id="press-key-modifier"><a class="header-anchor" href="#press-key-modifier">#</a> <code>press(key, ...modifier)</code></h3>
<ul>
<li>
<p><code>key</code> String</p>
</li>
<li>
<p><code>modifier</code> String (可选)</p>
<blockquote>
<p>control | ctrl | shift | meta | alt | command | cmd</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>键盘按键</p>
</blockquote>
<h3 id="paste-text"><a class="header-anchor" href="#paste-text">#</a> <code>paste(text)</code></h3>
<ul>
<li>
<p><code>text</code> String (可选)</p>
<blockquote>
<p>文本字符串 | 图片 base64</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>执行粘贴</p>
</blockquote>
<h3 id="screenshot-arg-savepath"><a class="header-anchor" href="#screenshot-arg-savepath">#</a> <code>screenshot(arg, savePath)</code></h3>
<ul>
<li><code>arg</code> String | Object (可选)</li>
</ul>
<blockquote>
<p>String - 要截取的 DOM 元素</p>
</blockquote>
<blockquote>
<p>Object - 截图位置和大小 { x: Integer, y: Integer, width: Integer, height: Integer }</p>
</blockquote>
<blockquote>
<p>为空 截取整个窗口</p>
</blockquote>
<ul>
<li>
<p><code>savePath</code> String (可选)</p>
<blockquote>
<p>图片保存路径,，也可以是完整PNG文件路径（默认存储在临时目录）</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>部分网页截图</p>
</blockquote>
<h3 id="pdf-options-savepath"><a class="header-anchor" href="#pdf-options-savepath">#</a> <code>pdf(options, savePath)</code></h3>
<ul>
<li>
<p><code>options</code> Object (可选)</p>
<blockquote>
<p>{ marginsType: 0 | 1 | 2, pageSize: ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid') | { width: Integer, height: Integer } }</p>
<p>与 <a href="https://www.electronjs.org/docs/api/web-contents#contentsprinttopdfoptions" target="_blank" rel="noopener noreferrer">Electron API<OutboundLink/></a> 一致</p>
</blockquote>
</li>
<li>
<p><code>savePath</code> String (可选)</p>
<blockquote>
<p>图片保存路径，也可以是完整pdf文件路径（默认存储在临时目录）</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>保存页面为PDF</p>
</blockquote>
<h3 id="device-arg"><a class="header-anchor" href="#device-arg">#</a> <code>device(arg)</code></h3>
<ul>
<li>
<p><code>arg</code> String | Object</p>
<blockquote>
<p>String - 'iPhone 11' | 'iPhone X' | 'iPad' | 'iPhone 6/7/8 Plus' | 'iPhone 6/7/8' | 'iPhone 5/SE' | 'HUAWEI Mate10' | 'HUAWEI Mate20' | 'HUAWEI Mate30' | 'HUAWEI Mate30 Pro'</p>
</blockquote>
<blockquote>
<p>Object - { size: { width: Integer, height: Integer }, useragent: String }</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>模拟设备</p>
</blockquote>
<h3 id="cookies-name"><a class="header-anchor" href="#cookies-name">#</a> <code>cookies(name)</code></h3>
<ul>
<li><code>name</code> String (可选)</li>
</ul>
<blockquote>
<p>为空获取全部 cookie
获取cookie</p>
</blockquote>
<h3 id="setcookies-name-value"><a class="header-anchor" href="#setcookies-name-value">#</a> <code>setCookies(name, value)</code></h3>
<ul>
<li><code>name</code> String</li>
<li><code>value</code> String</li>
</ul>
<blockquote>
<p>设置 cookie</p>
</blockquote>
<h3 id="setcookies-cookies"><a class="header-anchor" href="#setcookies-cookies">#</a> <code>setCookies(cookies)</code></h3>
<ul>
<li>
<p><code>cookies</code> Array</p>
<blockquote>
<p>[{ name: String, value: String }, { name: String1, value: String1 }]</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>设置 cookie</p>
</blockquote>
<h3 id="removecookies-name"><a class="header-anchor" href="#removecookies-name">#</a> <code>removeCookies(name)</code></h3>
<ul>
<li><code>name</code> String</li>
</ul>
<blockquote>
<p>删除 cookie</p>
</blockquote>
<h3 id="clearcookies-url"><a class="header-anchor" href="#clearcookies-url">#</a> <code>clearCookies(url)</code></h3>
<ul>
<li>
<p><code>url</code> String (可选)</p>
<blockquote>
<p>如果在执行&quot;goto&quot;前执行 url 参数必需</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>清空 cookie</p>
</blockquote>
<h3 id="devtools-mode"><a class="header-anchor" href="#devtools-mode">#</a> <code>devTools(mode)</code></h3>
<ul>
<li>
<p><code>mode</code> String (可选)</p>
<blockquote>
<p>'right' | 'bottom' | 'undocked' | 'detach' 默认为 'detach'</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>打开开发者工具</p>
</blockquote>
<h3 id="evaluate-func-params"><a class="header-anchor" href="#evaluate-func-params">#</a> <code>evaluate(func, ...params)</code></h3>
<ul>
<li>
<p><code>func</code> Function</p>
<blockquote>
<p>在网页内执行的函数</p>
</blockquote>
</li>
<li>
<p><code>param</code> Any (可选)</p>
<blockquote>
<p>传递给 func 的参数</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>执行 JS 函数，如果有返回值将加入到返回结果中</p>
</blockquote>
<h4 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'param1'</span><span class="token punctuation">,</span> <span class="token string">'param2'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="wait-ms"><a class="header-anchor" href="#wait-ms">#</a> <code>wait(ms)</code></h3>
<ul>
<li>
<p><code>ms</code> Integer</p>
<blockquote>
<p>等待的毫秒数</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>等待</p>
</blockquote>
<h3 id="wait-selector-timeout"><a class="header-anchor" href="#wait-selector-timeout">#</a> <code>wait(selector, timeout)</code></h3>
<ul>
<li>
<p><code>selector</code> String</p>
<blockquote>
<p>DOM 元素</p>
</blockquote>
</li>
<li>
<p><code>timeout</code> Integer (可选)</p>
<blockquote>
<p>超时 默认 10000 ms</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>等待 DOM 元素出现</p>
</blockquote>
<h3 id="wait-func-timeout-params"><a class="header-anchor" href="#wait-func-timeout-params">#</a> <code>wait(func, timeout，...params)</code></h3>
<ul>
<li>
<p><code>func</code> Function</p>
<blockquote>
<p>在网页内执行的函数，返回 true 结束等待</p>
</blockquote>
</li>
<li>
<p><code>timeout</code> Integer (可选)</p>
<blockquote>
<p>超时 默认 10000 ms</p>
</blockquote>
</li>
<li>
<p><code>param</code> Any (可选)</p>
<blockquote>
<p>传递给 func 的参数</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>等待JS函数执行返回 true</p>
</blockquote>
<h3 id="when-selector"><a class="header-anchor" href="#when-selector">#</a> <code>when(selector)</code></h3>
<ul>
<li>
<p><code>selector</code> String</p>
<blockquote>
<p>DOM 元素</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>当元素存在时执行直到碰到 end() 方法</p>
</blockquote>
<h3 id="when-func-params"><a class="header-anchor" href="#when-func-params">#</a> <code>when(func, ...params)</code></h3>
<ul>
<li>
<p><code>func</code> Function</p>
<blockquote>
<p>在网页内执行的函数，返回 true 执行</p>
</blockquote>
</li>
<li>
<p><code>param</code> Any (可选)</p>
<blockquote>
<p>传递给 func 的参数</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>当 JS 函数执行返回 true 时执行, 直到碰到 end() 方法</p>
</blockquote>
<h3 id="end"><a class="header-anchor" href="#end">#</a> <code>end()</code></h3>
<blockquote>
<p>与 when 配套使用</p>
</blockquote>
<h3 id="click-selector"><a class="header-anchor" href="#click-selector">#</a> <code>click(selector)</code></h3>
<ul>
<li><code>selector</code> String</li>
</ul>
<blockquote>
<p>单击元素</p>
</blockquote>
<h3 id="mousedown-selector"><a class="header-anchor" href="#mousedown-selector">#</a> <code>mousedown(selector)</code></h3>
<ul>
<li><code>selector</code> String</li>
</ul>
<blockquote>
<p>元素触发按下鼠标左键</p>
</blockquote>
<h3 id="mouseup-selector"><a class="header-anchor" href="#mouseup-selector">#</a> <code>mouseup(selector)</code></h3>
<ul>
<li><code>selector</code> String</li>
</ul>
<blockquote>
<p>元素触发释放鼠标左键</p>
</blockquote>
<h3 id="file-selector-payload"><a class="header-anchor" href="#file-selector-payload">#</a> <code>file(selector, payload)</code></h3>
<ul>
<li>
<p><code>selector</code> String</p>
<blockquote>
<p>input type='file' 元素</p>
</blockquote>
</li>
<li>
<p><code>payload</code> String | Array | Buffer</p>
<blockquote>
<p>文件路径 或 路径集合 或 文件 Buffer</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>为网页中的 file input 赋值</p>
</blockquote>
<h3 id="value-selector-val"><a class="header-anchor" href="#value-selector-val">#</a> <code>value(selector, val)</code></h3>
<ul>
<li>
<p><code>selector</code> String</p>
<blockquote>
<p>input textarea select 元素</p>
</blockquote>
</li>
<li>
<p><code>val</code> String</p>
</li>
</ul>
<blockquote>
<p>为网页中的 input textarea select 元素赋值</p>
</blockquote>
<h3 id="check-selector-checked"><a class="header-anchor" href="#check-selector-checked">#</a> <code>check(selector, checked)</code></h3>
<ul>
<li>
<p><code>selector</code> String</p>
<blockquote>
<p>checkbox radio 元素</p>
</blockquote>
</li>
<li>
<p><code>checked</code> Boolean</p>
<blockquote>
<p>是否选中</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>checkbox radio 元素选中或取消选中</p>
</blockquote>
<h3 id="focus-selector"><a class="header-anchor" href="#focus-selector">#</a> <code>focus(selector)</code></h3>
<ul>
<li><code>selector</code> String</li>
</ul>
<blockquote>
<p>元素获得焦点</p>
</blockquote>
<h3 id="scroll-selector"><a class="header-anchor" href="#scroll-selector">#</a> <code>scroll(selector)</code></h3>
<ul>
<li><code>selector</code> String</li>
</ul>
<blockquote>
<p>滚动到元素位置</p>
</blockquote>
<h3 id="scroll-y"><a class="header-anchor" href="#scroll-y">#</a> <code>scroll(y)</code></h3>
<ul>
<li><code>y</code> Integer</li>
</ul>
<blockquote>
<p>Y轴滚动</p>
</blockquote>
<h3 id="scroll-x-y"><a class="header-anchor" href="#scroll-x-y">#</a> <code>scroll(x, y)</code></h3>
<ul>
<li><code>x</code> Integer</li>
<li><code>y</code> Integer</li>
</ul>
<blockquote>
<p>X轴和Y轴滚动</p>
</blockquote>
<h3 id="run-ubrowserid"><a class="header-anchor" href="#run-ubrowserid">#</a> <code>run(ubrowserId)</code></h3>
<ul>
<li>
<p><code>ubrowserId</code> Integer</p>
<blockquote>
<p>utools.getIdleUBrowsers() 中获得</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Promise</p>
</li>
</ul>
<blockquote>
<p>运行在闲置的 ubrowser 上</p>
</blockquote>
<h3 id="run-options"><a class="header-anchor" href="#run-options">#</a> <code>run(options)</code></h3>
<ul>
<li>
<p><code>options</code> Object</p>
<ul>
<li><code>Object</code>
<ul>
<li>show Boolean (可选) 是否显示</li>
<li>width Integer (可选) 宽度 默认为 800</li>
<li>height Integer (可选) 高度 默认为 600</li>
<li>x Integer (可选) 位置 X</li>
<li>y Integer (可选) 位置 Y</li>
<li>center Boolean (可选) 窗口在屏幕居中</li>
<li>minWidth Integer (可选) 窗口的最小宽度。默认值为 0</li>
<li>minHeight Integer (可选) 窗口的最小高度。默认值为 0</li>
<li>maxWidth Integer (可选) 窗口的最大宽度。默认无限制</li>
<li>maxHeight Integer (可选) 窗口的最大高度。默认无限制</li>
<li>resizable Boolean (可选) 窗口是否可以改变尺寸。默认值为 true</li>
<li>movable Boolean (可选) 窗口是否可以移动，在 Linux 中无效。默认值为 true</li>
<li>minimizable Boolean (可选) 窗口是否可以最小化，在 Linux 中无效。默认值为 true</li>
<li>maximizable Boolean (可选) 窗口是否可以最大化动，在 Linux 中无效。默认值为 true</li>
<li>alwaysOnTop Boolean (可选) 窗口是否永远置顶。默认值为 false</li>
<li>fullscreen Boolean (可选) 窗口是否全屏。默认值为 false</li>
<li>fullscreenable Boolean (可选) 窗口是否可以进入全屏状态。默认值为 true</li>
<li>enableLargerThanScreen Boolean (可选) 是否允许改变窗口的大小使之大于屏幕的尺寸，仅适用于 macOS，因为其它操作系统默认允许 大于屏幕的窗口。 默认值为 false</li>
<li>opacity Number (可选) 设置窗口初始的不透明度，介于 0.0  (完全透明) 和 1.0 (完全不透明) 之间。仅支持 Windows 和 macOS 。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code>返回</code> Promise</p>
</li>
</ul>
<blockquote>
<p>启动一个 ubrowser 运行</p>
</blockquote>
<h2 id="ubrowser-管理"><a class="header-anchor" href="#ubrowser-管理">#</a> ubrowser 管理</h2>
<h3 id="getidleubrowsers"><a class="header-anchor" href="#getidleubrowsers">#</a> <code>getIdleUBrowsers()</code></h3>
<ul>
<li><code>返回</code> Array</li>
</ul>
<blockquote>
<p>获取闲置的 ubrowser</p>
</blockquote>
<h4 id="示例-1"><a class="header-anchor" href="#示例-1">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">getIdleUBrowsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [{ id: number, title: string, url: string }]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="setubrowserproxy-config"><a class="header-anchor" href="#setubrowserproxy-config">#</a> <code>setUBrowserProxy(config)</code></h3>
<ul>
<li>
<p><code>config</code> Object</p>
<blockquote>
<p>与 <a href="https://www.electronjs.org/docs/api/session#sessetproxyconfig" target="_blank" rel="noopener noreferrer">Electron API<OutboundLink/></a> 一致</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Boolean</p>
</li>
</ul>
<blockquote>
<p>设置 ubrowser 代理</p>
</blockquote>
<h4 id="示例-2"><a class="header-anchor" href="#示例-2">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">setUBrowserProxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  proxyRules<span class="token operator">:</span> <span class="token string">'http=foopy:80;ftp=foopy2'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="clearubrowsercache"><a class="header-anchor" href="#clearubrowsercache">#</a> <code>clearUBrowserCache()</code></h3>
<ul>
<li><code>返回</code> Boolean</li>
</ul>
<blockquote>
<p>清空 ubrowser 缓存</p>
</blockquote>
<h4 id="示例-3"><a class="header-anchor" href="#示例-3">#</a> 示例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">clearUBrowserCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>