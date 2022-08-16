import{r as t,o,c as p,a as n,b as l,w as c,F as r,d as s,e as a}from"./app.d970ef26.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=s(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h1><p>hey\uFF0C\u5F00\u53D1\u8005\uFF0C\u7EC8\u4E8E\u548C\u4F60\u89C1\u9762\u4E86\u3002</p><p>\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u4F60\u5C06\u4E86\u89E3\u5982\u4F55\u4ECE\u96F6\u5F00\u59CB\u521B\u9020\u4E00\u4E2A uTools \u63D2\u4EF6\u3002\u8FD9\u662F\u975E\u5E38\u5BB9\u6613\u7684\u4E8B\u60C5\uFF0C\u4F60\u4E0D\u5FC5\u5B66\u4E60\u4E00\u4E9B\u7279\u6709\u7684\u65E0\u6CD5\u5E94\u7528\u5728\u5176\u4ED6\u9886\u57DF\u7684\u77E5\u8BC6\uFF0C\u53EA\u9700\u8981\u4F7F\u7528\u4F60\u5DF2\u7ECF\u719F\u6089\u7684\u6280\u672F\uFF08 Javascript\u3001HTML\u3001CSS \uFF09\uFF0C\u5982\u679C\u4F60\u4E86\u89E3\u4E00\u4E9B Nodejs \u7684\u76F8\u5173 API\uFF0C\u90A3\u5C06\u518D\u597D\u4E0D\u8FC7\uFF0C\u5B83\u80FD\u591F\u4E0E\u672C\u5730\u64CD\u4F5C\u7CFB\u7EDF\u6709\u66F4\u591A\u7684\u4EA4\u4E92\uFF0C\u5B9E\u73B0\u66F4\u4E3A\u5F3A\u5927\u7684\u529F\u80FD\u3002</p><h2 id="plugin-json" tabindex="-1"><a class="header-anchor" href="#plugin-json" aria-hidden="true">#</a> plugin.json</h2><p>\u5728\u4F60\u89C9\u5F97\u5408\u9002\u7684\u5730\u65B9\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u5E76\u521B\u5EFA <code>plugin.json</code> \u6587\u4EF6\u3002\u8FD9\u662F\u6700\u91CD\u8981\u7684\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7528\u6765\u8BF4\u660E\u8FD9\u4E2A\u63D2\u4EF6\u5C06\u5982\u4F55\u4E0E uTools \u96C6\u6210\uFF0C\u6700\u57FA\u672C\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;logo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logo.png&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
		  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
		  <span class="token property">&quot;explain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;cmds&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4F60\u597D&quot;</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> \u5B57\u6BB5\u8BF4\u660E</h4>`,7),h=n("code",null,"main",-1),m=a(" : \u5165\u53E3\u6587\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u5165\u53E3\u6587\u4EF6\uFF0C\u6B64\u63D2\u4EF6\u5C06\u53D8\u6210\u4E00\u4E2A"),k=a("\u6A21\u7248\u63D2\u4EF6"),g=s(`<p><code>logo</code> : \u63D2\u4EF6\u7684\u56FE\u6807</p><p><code>features </code> : \u552F\u4E00\u6BD4\u8F83\u590D\u6742\u7684\u5C31\u662F features \u4E86\uFF0C\u9996\u5148\u5B83\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u7528\u6765\u63CF\u8FF0\u8FD9\u4E2A\u63D2\u4EF6\u63D0\u4F9B\u7684\u4E00\u4E2A\u76F8\u5BF9\u72EC\u7ACB\u7684\u529F\u80FD\uFF0C\u4F8B\u5982uTools\u4E2D\u7684\u300C\u7F16\u7801\u5C0F\u52A9\u624B\u300D\u63D2\u4EF6\uFF0C\u63D0\u4F9B\u4E86<code>md5</code> \u3001 <code>\u65F6\u95F4\u6233</code> \u3001 <code>\u968F\u673A\u6570</code> \u7B49\u529F\u80FD\u3002</p><p><code>features.code</code> : \u63D2\u4EF6\u67D0\u4E2A\u529F\u80FD\u7684\u8BC6\u522B\u7801\uFF0C\u5728\u8FDB\u5165\u63D2\u4EF6\u65F6\u4F1A\u4F20\u9012\u7ED9\u4F60\u7684\u4EE3\u7801\uFF0C\u53EF\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u529F\u80FD\uFF0C\u663E\u793A\u4E0D\u540C\u7684 UI</p><p><code>features.cmds</code> : \u901A\u8FC7\u54EA\u4E9B\u65B9\u5F0F\u53EF\u4EE5\u8FDB\u5165\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4E2D\u6587\u4F1A\u81EA\u52A8\u652F\u6301 <code>\u62FC\u97F3</code>\u53CA<code>\u62FC\u97F3\u9996\u5B57\u6BCD</code>\uFF0C\u65E0\u987B\u91CD\u590D\u6DFB\u52A0</p><h4 id="\u521B\u5EFA\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u5165\u53E3\u6587\u4EF6</h4><p>\u6839\u636E <code>main</code> \u4E2D\u7684\u5B9A\u4E49\uFF0C\u5728 plugin.json \u7684\u540C\u7EA7\u76EE\u5F55\uFF0C\u521B\u5EFA\u4E00\u4E2A <code>index.html</code> \u6587\u4EF6\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5F00\u53D1\u8005\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8005\u4E2D\u5FC3" aria-hidden="true">#</a> \u5F00\u53D1\u8005\u4E2D\u5FC3</h2><p>\u597D\u4E86\uFF0C\u4E00\u4E2A hello world \u63D2\u4EF6\u5DF2\u7ECF\u5F00\u53D1\u597D\u4E86\uFF0C\u6211\u4EEC\u8BA9\u5B83\u96C6\u6210\u5230 uTools \u4E2D\u3002</p><ol><li><p>\u5B89\u88C5 \u300CuTools \u5F00\u53D1\u8005\u5DE5\u5177\u300D\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u5E76\u9009\u62E9\u521A\u521A\u521B\u5EFA\u7684 <code>plugin.json</code> \u6587\u4EF6\u3002 <img src="https://res.u-tools.cn/website/developer.png" alt="create.png"></p></li><li><p>\u70B9\u51FB \u5F00\u542F\u8FD0\u884C\u3002</p></li></ol><p><img src="https://res.u-tools.cn/website/developer2.png" alt="manage.png"></p><ol start="3"><li><p>\u9000\u51FA\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5728 uTools \u4E2D\u8F93\u5165<code>hello</code>\uFF0C <code>\u4F60\u597D</code>\uFF0C<code>nh</code> \u5747\u53EF\u4EE5\u5230\u8FBE\u4F60\u7684\u63D2\u4EF6 <img src="https://res.u-tools.cn/website/open.png" alt="open.png"><img src="https://res.u-tools.cn/website/hello.png" alt="hello.png"></p></li><li><p>\u5F53\u4F60\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u63D2\u4EF6\u6240\u9700\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u300C\u5F00\u53D1\u8005\u5DE5\u5177\u300D\u7BA1\u7406\u754C\u9762\uFF0C\u70B9\u51FB\u300C\u6253\u5305\u300D\uFF0C\u5C31\u53EF\u4EE5\u83B7\u5F97\u4E00\u4E2A\u6253\u5305\u597D\u7684 <code>.upx</code> \u6587\u4EF6\uFF0C\u590D\u5236\u6216\u62D6\u5165 uTools \u4E3B\u8F93\u5165\u6846\u4E2D\u5373\u53EF\u4EE5\u8FDB\u884C\u5B89\u88C5\u3002 <img src="https://res.u-tools.cn/website/install.png" alt="AslhIx.png"></p></li><li><p>\u5982\u679C\u4F60\u60F3\u4E0E\u5176\u4ED6\u7528\u6237\u5206\u4EAB\u4F60\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u9009\u62E9\u300C\u63D2\u4EF6\u53D1\u5E03\u300D\u5C06\u63D2\u4EF6\u63D0\u4EA4\u7ED9 uTools\uFF0C\u5BA1\u6838\u901A\u8FC7\u540E\u7528\u6237\u53EF\u5728\u63D2\u4EF6\u5E02\u573A\u4E2D\u4E0B\u8F7D\u5B89\u88C5\u3002\u300C\u5F00\u53D1\u8005\u5DE5\u5177\u300D\u8FD8\u63D0\u4F9B\u4E86\u652F\u4ED8\u80FD\u529B\u3001\u6570\u636E\u7EDF\u8BA1\u3001\u9519\u8BEF\u5206\u6790\u7B49\u529F\u80FD\uFF0C\u4F9B\u4F60\u4F7F\u7528\u3002</p></li></ol>`,12);function b(q,_){const e=t("RouterLink");return o(),p(r,null,[d,n("p",null,[h,m,l(e,{to:"/developer/template.html"},{default:c(()=>[k]),_:1})]),g],64)}var v=u(i,[["render",b]]);export{v as default};
