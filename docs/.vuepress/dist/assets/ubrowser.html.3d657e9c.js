import{r as c,o as s,c as l,a as e,b as t,F as r,d as a,e as o}from"./app.541dccd3.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=a(`<h1 id="ubrowser-api" tabindex="-1"><a class="header-anchor" href="#ubrowser-api" aria-hidden="true">#</a> ubrowser API</h1><p>uTools browser \u7B80\u79F0 ubrowser\uFF0C\u662F\u6839\u636E uTools \u7684\u7279\u6027\uFF0C\u91CF\u8EAB\u6253\u9020\u7684\u4E00\u4E2A\u53EF\u7F16\u7A0B\u6D4F\u89C8\u5668\u3002\u5229\u7528 ubrowser \u53EF\u4EE5\u8F7B\u800C\u6613\u4E3E\u8FDE\u63A5\u4E00\u5207\u4E92\u8054\u7F51\u670D\u52A1\uFF0C\u4E14\u4E0E uTools \u5B8C\u7F8E\u7ED3\u5408\u3002</p><p>ubrowser \u62E5\u6709\u4F18\u96C5\u7684\u94FE\u5F0F\u8C03\u7528\u63A5\u53E3\uFF0C\u53EF\u4EE5\u7528\u53E3\u8BED\u5316\u7684\u6570\u884C\u4EE3\u7801\uFF0C\u5B9E\u73B0\u4E00\u7CFB\u5217\u532A\u5937\u6240\u601D\u7684\u64CD\u4F5C\u3002\u4F8B\u5982\uFF1A</p><p>1\u3001\u81EA\u52A8\u5316\u6D4B\u8BD5\uFF08\u81EA\u52A8\u6253\u5F00\u9875\u9762\u3001\u70B9\u51FB\u3001\u5224\u65AD\uFF0C\u5F7B\u5E95\u89E3\u653E\u6D4B\u8BD5\u4EBA\u5458\u3002\uFF09</p><p>2\u3001\u81EA\u52A8\u62A2\u7968</p><p>3\u3001\u81EA\u52A8\u53BB\u9664\u641C\u7D22\u5F15\u64CE\u5E7F\u544A</p><p>4\u3001\u81EA\u52A8\u5C06\u9009\u4E2D\u7684\u6587\u5B57\u3001\u56FE\u7247\u4FDD\u5B58\u5230\u5404\u7C7B\u4E91\u7B14\u8BB0</p><p>\u57FA\u672C demo\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6253\u5F00&quot;\u5FC5\u5E94&quot; \u5E76\u641C\u7D22 &quot;uTools&quot;</span>
utools<span class="token punctuation">.</span>ubrowser<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;https://cn.bing.com&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&#39;#sb_form_q&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;uTools&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&#39;#sb_form_go&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#api-\u5217\u8868" aria-hidden="true">#</a> API \u5217\u8868</h2><h3 id="useragent-useragent" tabindex="-1"><a class="header-anchor" href="#useragent-useragent" aria-hidden="true">#</a> <code>useragent(userAgent)</code></h3><ul><li><code>userAgent</code> String</li></ul><blockquote><p>\u8BBE\u7F6E User-Agent</p></blockquote><h3 id="goto-url-headers-timeout" tabindex="-1"><a class="header-anchor" href="#goto-url-headers-timeout" aria-hidden="true">#</a> <code>goto(url, headers, timeout)</code></h3><ul><li><p><code>url</code> String</p></li><li><p><code>headers</code> Object (\u53EF\u9009)</p><blockquote><p>{ Referer: string, userAgent: string }</p></blockquote></li><li><p><code>timeout</code> Integer (\u53EF\u9009)</p><blockquote><p>\u8D85\u65F6 \u9ED8\u8BA4 60000 ms</p></blockquote></li></ul><blockquote><p>\u524D\u5F80</p></blockquote><h3 id="viewport-width-height" tabindex="-1"><a class="header-anchor" href="#viewport-width-height" aria-hidden="true">#</a> <code>viewport(width, height)</code></h3><ul><li><code>width</code> Integer</li><li><code>height</code> Integer</li></ul><blockquote><p>\u9875\u9762\u5927\u5C0F</p></blockquote><h3 id="hide" tabindex="-1"><a class="header-anchor" href="#hide" aria-hidden="true">#</a> <code>hide()</code></h3><blockquote><p>\u9690\u85CF ubrowser \u7A97\u53E3</p></blockquote><h3 id="show" tabindex="-1"><a class="header-anchor" href="#show" aria-hidden="true">#</a> <code>show()</code></h3><blockquote><p>\u663E\u793A ubrowser \u7A97\u53E3</p></blockquote><h3 id="css-csscode" tabindex="-1"><a class="header-anchor" href="#css-csscode" aria-hidden="true">#</a> <code>css(cssCode)</code></h3><ul><li><code>cssCode</code> String</li></ul><blockquote><p>\u6CE8\u5165\u6837\u5F0F</p></blockquote><h3 id="press-key-modifier" tabindex="-1"><a class="header-anchor" href="#press-key-modifier" aria-hidden="true">#</a> <code>press(key, ...modifier)</code></h3><ul><li><p><code>key</code> String</p></li><li><p><code>modifier</code> String (\u53EF\u9009)</p><blockquote><p>control | ctrl | shift | meta | alt | command | cmd</p></blockquote></li></ul><blockquote><p>\u952E\u76D8\u6309\u952E</p></blockquote><h3 id="paste-text" tabindex="-1"><a class="header-anchor" href="#paste-text" aria-hidden="true">#</a> <code>paste(text)</code></h3><ul><li><p><code>text</code> String (\u53EF\u9009)</p><blockquote><p>\u6587\u672C\u5B57\u7B26\u4E32 | \u56FE\u7247 base64</p></blockquote></li></ul><blockquote><p>\u6267\u884C\u7C98\u8D34</p></blockquote><h3 id="screenshot-arg-savepath" tabindex="-1"><a class="header-anchor" href="#screenshot-arg-savepath" aria-hidden="true">#</a> <code>screenshot(arg, savePath)</code></h3><ul><li><code>arg</code> String | Object (\u53EF\u9009)</li></ul><blockquote><p>String - \u8981\u622A\u53D6\u7684 DOM \u5143\u7D20</p></blockquote><blockquote><p>Object - \u622A\u56FE\u4F4D\u7F6E\u548C\u5927\u5C0F { x: Integer, y: Integer, width: Integer, height: Integer }</p></blockquote><blockquote><p>\u4E3A\u7A7A \u622A\u53D6\u6574\u4E2A\u7A97\u53E3</p></blockquote><ul><li><p><code>savePath</code> String (\u53EF\u9009)</p><blockquote><p>\u56FE\u7247\u4FDD\u5B58\u8DEF\u5F84,\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B8C\u6574PNG\u6587\u4EF6\u8DEF\u5F84\uFF08\u9ED8\u8BA4\u5B58\u50A8\u5728\u4E34\u65F6\u76EE\u5F55\uFF09</p></blockquote></li></ul><blockquote><p>\u90E8\u5206\u7F51\u9875\u622A\u56FE</p></blockquote><h3 id="pdf-options-savepath" tabindex="-1"><a class="header-anchor" href="#pdf-options-savepath" aria-hidden="true">#</a> <code>pdf(options, savePath)</code></h3>`,40),d=e("p",null,[e("code",null,"options"),o(" Object (\u53EF\u9009)")],-1),h=e("p",null,"{ marginsType: 0 | 1 | 2, pageSize: ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid') | { width: Integer, height: Integer } }",-1),b=o("\u4E0E "),k={href:"https://www.electronjs.org/docs/api/web-contents#contentsprinttopdfoptions",target:"_blank",rel:"noopener noreferrer"},g=o("Electron API"),q=o(" \u4E00\u81F4"),m=e("li",null,[e("p",null,[e("code",null,"savePath"),o(" String (\u53EF\u9009)")]),e("blockquote",null,[e("p",null,"\u56FE\u7247\u4FDD\u5B58\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B8C\u6574pdf\u6587\u4EF6\u8DEF\u5F84\uFF08\u9ED8\u8BA4\u5B58\u50A8\u5728\u4E34\u65F6\u76EE\u5F55\uFF09")])],-1),f=a(`<blockquote><p>\u4FDD\u5B58\u9875\u9762\u4E3APDF</p></blockquote><h3 id="device-arg" tabindex="-1"><a class="header-anchor" href="#device-arg" aria-hidden="true">#</a> <code>device(arg)</code></h3><ul><li><p><code>arg</code> String | Object</p><blockquote><p>String - &#39;iPhone 11&#39; | &#39;iPhone X&#39; | &#39;iPad&#39; | &#39;iPhone 6/7/8 Plus&#39; | &#39;iPhone 6/7/8&#39; | &#39;iPhone 5/SE&#39; | &#39;HUAWEI Mate10&#39; | &#39;HUAWEI Mate20&#39; | &#39;HUAWEI Mate30&#39; | &#39;HUAWEI Mate30 Pro&#39;</p></blockquote><blockquote><p>Object - { size: { width: Integer, height: Integer }, useragent: String }</p></blockquote></li></ul><blockquote><p>\u6A21\u62DF\u8BBE\u5907</p></blockquote><h3 id="cookies-name" tabindex="-1"><a class="header-anchor" href="#cookies-name" aria-hidden="true">#</a> <code>cookies(name)</code></h3><ul><li><code>name</code> String (\u53EF\u9009)</li></ul><blockquote><p>\u4E3A\u7A7A\u83B7\u53D6\u5168\u90E8 cookie \u83B7\u53D6cookie</p></blockquote><h3 id="setcookies-name-value" tabindex="-1"><a class="header-anchor" href="#setcookies-name-value" aria-hidden="true">#</a> <code>setCookies(name, value)</code></h3><ul><li><code>name</code> String</li><li><code>value</code> String</li></ul><blockquote><p>\u8BBE\u7F6E cookie</p></blockquote><h3 id="setcookies-cookies" tabindex="-1"><a class="header-anchor" href="#setcookies-cookies" aria-hidden="true">#</a> <code>setCookies(cookies)</code></h3><ul><li><p><code>cookies</code> Array</p><blockquote><p>[{ name: String, value: String }, { name: String1, value: String1 }]</p></blockquote></li></ul><blockquote><p>\u8BBE\u7F6E cookie</p></blockquote><h3 id="removecookies-name" tabindex="-1"><a class="header-anchor" href="#removecookies-name" aria-hidden="true">#</a> <code>removeCookies(name)</code></h3><ul><li><code>name</code> String</li></ul><blockquote><p>\u5220\u9664 cookie</p></blockquote><h3 id="clearcookies-url" tabindex="-1"><a class="header-anchor" href="#clearcookies-url" aria-hidden="true">#</a> <code>clearCookies(url)</code></h3><ul><li><p><code>url</code> String (\u53EF\u9009)</p><blockquote><p>\u5982\u679C\u5728\u6267\u884C&quot;goto&quot;\u524D\u6267\u884C url \u53C2\u6570\u5FC5\u9700</p></blockquote></li></ul><blockquote><p>\u6E05\u7A7A cookie</p></blockquote><h3 id="devtools-mode" tabindex="-1"><a class="header-anchor" href="#devtools-mode" aria-hidden="true">#</a> <code>devTools(mode)</code></h3><ul><li><p><code>mode</code> String (\u53EF\u9009)</p><blockquote><p>&#39;right&#39; | &#39;bottom&#39; | &#39;undocked&#39; | &#39;detach&#39; \u9ED8\u8BA4\u4E3A &#39;detach&#39;</p></blockquote></li></ul><blockquote><p>\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177</p></blockquote><h3 id="evaluate-func-params" tabindex="-1"><a class="header-anchor" href="#evaluate-func-params" aria-hidden="true">#</a> <code>evaluate(func, ...params)</code></h3><ul><li><p><code>func</code> Function</p><blockquote><p>\u5728\u7F51\u9875\u5185\u6267\u884C\u7684\u51FD\u6570</p></blockquote></li><li><p><code>param</code> Any (\u53EF\u9009)</p><blockquote><p>\u4F20\u9012\u7ED9 func \u7684\u53C2\u6570</p></blockquote></li></ul><blockquote><p>\u6267\u884C JS \u51FD\u6570\uFF0C\u5982\u679C\u6709\u8FD4\u56DE\u503C\u5C06\u52A0\u5165\u5230\u8FD4\u56DE\u7ED3\u679C\u4E2D</p></blockquote><h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;param1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;param2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="wait-ms" tabindex="-1"><a class="header-anchor" href="#wait-ms" aria-hidden="true">#</a> <code>wait(ms)</code></h3><ul><li><p><code>ms</code> Integer</p><blockquote><p>\u7B49\u5F85\u7684\u6BEB\u79D2\u6570</p></blockquote></li></ul><blockquote><p>\u7B49\u5F85</p></blockquote><h3 id="wait-selector-timeout" tabindex="-1"><a class="header-anchor" href="#wait-selector-timeout" aria-hidden="true">#</a> <code>wait(selector, timeout)</code></h3><ul><li><p><code>selector</code> String</p><blockquote><p>DOM \u5143\u7D20</p></blockquote></li><li><p><code>timeout</code> Integer (\u53EF\u9009)</p><blockquote><p>\u8D85\u65F6 \u9ED8\u8BA4 60000 ms</p></blockquote></li></ul><blockquote><p>\u7B49\u5F85 DOM \u5143\u7D20\u51FA\u73B0</p></blockquote><h3 id="wait-func-timeout-params" tabindex="-1"><a class="header-anchor" href="#wait-func-timeout-params" aria-hidden="true">#</a> <code>wait(func, timeout\uFF0C...params)</code></h3><ul><li><p><code>func</code> Function</p><blockquote><p>\u5728\u7F51\u9875\u5185\u6267\u884C\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE true \u7ED3\u675F\u7B49\u5F85</p></blockquote></li><li><p><code>timeout</code> Integer (\u53EF\u9009)</p><blockquote><p>\u8D85\u65F6 \u9ED8\u8BA4 60000 ms</p></blockquote></li><li><p><code>param</code> Any (\u53EF\u9009)</p><blockquote><p>\u4F20\u9012\u7ED9 func \u7684\u53C2\u6570</p></blockquote></li></ul><blockquote><p>\u7B49\u5F85JS\u51FD\u6570\u6267\u884C\u8FD4\u56DE true</p></blockquote><h3 id="when-selector" tabindex="-1"><a class="header-anchor" href="#when-selector" aria-hidden="true">#</a> <code>when(selector)</code></h3><ul><li><p><code>selector</code> String</p><blockquote><p>DOM \u5143\u7D20</p></blockquote></li></ul><blockquote><p>\u5F53\u5143\u7D20\u5B58\u5728\u65F6\u6267\u884C\u76F4\u5230\u78B0\u5230 end() \u65B9\u6CD5</p></blockquote><h3 id="when-func-params" tabindex="-1"><a class="header-anchor" href="#when-func-params" aria-hidden="true">#</a> <code>when(func, ...params)</code></h3><ul><li><p><code>func</code> Function</p><blockquote><p>\u5728\u7F51\u9875\u5185\u6267\u884C\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE true \u6267\u884C</p></blockquote></li><li><p><code>param</code> Any (\u53EF\u9009)</p><blockquote><p>\u4F20\u9012\u7ED9 func \u7684\u53C2\u6570</p></blockquote></li></ul><blockquote><p>\u5F53 JS \u51FD\u6570\u6267\u884C\u8FD4\u56DE true \u65F6\u6267\u884C, \u76F4\u5230\u78B0\u5230 end() \u65B9\u6CD5</p></blockquote><h3 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> <code>end()</code></h3><blockquote><p>\u4E0E when \u914D\u5957\u4F7F\u7528</p></blockquote><h3 id="click-selector" tabindex="-1"><a class="header-anchor" href="#click-selector" aria-hidden="true">#</a> <code>click(selector)</code></h3><ul><li><code>selector</code> String</li></ul><blockquote><p>\u5355\u51FB\u5143\u7D20</p></blockquote><h3 id="mousedown-selector" tabindex="-1"><a class="header-anchor" href="#mousedown-selector" aria-hidden="true">#</a> <code>mousedown(selector)</code></h3><ul><li><code>selector</code> String</li></ul><blockquote><p>\u5143\u7D20\u89E6\u53D1\u6309\u4E0B\u9F20\u6807\u5DE6\u952E</p></blockquote><h3 id="mouseup-selector" tabindex="-1"><a class="header-anchor" href="#mouseup-selector" aria-hidden="true">#</a> <code>mouseup(selector)</code></h3><ul><li><code>selector</code> String</li></ul><blockquote><p>\u5143\u7D20\u89E6\u53D1\u91CA\u653E\u9F20\u6807\u5DE6\u952E</p></blockquote><h3 id="file-selector-payload" tabindex="-1"><a class="header-anchor" href="#file-selector-payload" aria-hidden="true">#</a> <code>file(selector, payload)</code></h3><ul><li><p><code>selector</code> String</p><blockquote><p>input type=&#39;file&#39; \u5143\u7D20</p></blockquote></li><li><p><code>payload</code> String | Array | Buffer</p><blockquote><p>\u6587\u4EF6\u8DEF\u5F84 \u6216 \u8DEF\u5F84\u96C6\u5408 \u6216 \u6587\u4EF6 Buffer</p></blockquote></li></ul><blockquote><p>\u4E3A\u7F51\u9875\u4E2D\u7684 file input \u8D4B\u503C</p></blockquote><h3 id="value-selector-val" tabindex="-1"><a class="header-anchor" href="#value-selector-val" aria-hidden="true">#</a> <code>value(selector, val)</code></h3><ul><li><p><code>selector</code> String</p><blockquote><p>input textarea select \u5143\u7D20</p></blockquote></li><li><p><code>val</code> String</p></li></ul><blockquote><p>\u4E3A\u7F51\u9875\u4E2D\u7684 input textarea select \u5143\u7D20\u8D4B\u503C</p></blockquote><h3 id="check-selector-checked" tabindex="-1"><a class="header-anchor" href="#check-selector-checked" aria-hidden="true">#</a> <code>check(selector, checked)</code></h3><ul><li><p><code>selector</code> String</p><blockquote><p>checkbox radio \u5143\u7D20</p></blockquote></li><li><p><code>checked</code> Boolean</p><blockquote><p>\u662F\u5426\u9009\u4E2D</p></blockquote></li></ul><blockquote><p>checkbox radio \u5143\u7D20\u9009\u4E2D\u6216\u53D6\u6D88\u9009\u4E2D</p></blockquote><h3 id="focus-selector" tabindex="-1"><a class="header-anchor" href="#focus-selector" aria-hidden="true">#</a> <code>focus(selector)</code></h3><ul><li><code>selector</code> String</li></ul><blockquote><p>\u5143\u7D20\u83B7\u5F97\u7126\u70B9</p></blockquote><h3 id="scroll-selector" tabindex="-1"><a class="header-anchor" href="#scroll-selector" aria-hidden="true">#</a> <code>scroll(selector)</code></h3><ul><li><code>selector</code> String</li></ul><blockquote><p>\u6EDA\u52A8\u5230\u5143\u7D20\u4F4D\u7F6E</p></blockquote><h3 id="scroll-y" tabindex="-1"><a class="header-anchor" href="#scroll-y" aria-hidden="true">#</a> <code>scroll(y)</code></h3><ul><li><code>y</code> Integer</li></ul><blockquote><p>Y\u8F74\u6EDA\u52A8</p></blockquote><h3 id="scroll-x-y" tabindex="-1"><a class="header-anchor" href="#scroll-x-y" aria-hidden="true">#</a> <code>scroll(x, y)</code></h3><ul><li><code>x</code> Integer</li><li><code>y</code> Integer</li></ul><blockquote><p>X\u8F74\u548CY\u8F74\u6EDA\u52A8</p></blockquote><h3 id="run-ubrowserid" tabindex="-1"><a class="header-anchor" href="#run-ubrowserid" aria-hidden="true">#</a> <code>run(ubrowserId)</code></h3><ul><li><p><code>ubrowserId</code> Integer</p><blockquote><p>utools.getIdleUBrowsers() \u4E2D\u83B7\u5F97</p></blockquote></li><li><p><code>\u8FD4\u56DE</code> Promise</p></li></ul><blockquote><p>\u8FD0\u884C\u5728\u95F2\u7F6E\u7684 ubrowser \u4E0A</p></blockquote><h3 id="run-options" tabindex="-1"><a class="header-anchor" href="#run-options" aria-hidden="true">#</a> <code>run(options)</code></h3><ul><li><p><code>options</code> Object</p><ul><li><code>Object</code><ul><li>show Boolean (\u53EF\u9009) \u662F\u5426\u663E\u793A</li><li>width Integer (\u53EF\u9009) \u5BBD\u5EA6 \u9ED8\u8BA4\u4E3A 800</li><li>height Integer (\u53EF\u9009) \u9AD8\u5EA6 \u9ED8\u8BA4\u4E3A 600</li><li>x Integer (\u53EF\u9009) \u4F4D\u7F6E X</li><li>y Integer (\u53EF\u9009) \u4F4D\u7F6E Y</li><li>center Boolean (\u53EF\u9009) \u7A97\u53E3\u5728\u5C4F\u5E55\u5C45\u4E2D</li><li>minWidth Integer (\u53EF\u9009) \u7A97\u53E3\u7684\u6700\u5C0F\u5BBD\u5EA6\u3002\u9ED8\u8BA4\u503C\u4E3A 0</li><li>minHeight Integer (\u53EF\u9009) \u7A97\u53E3\u7684\u6700\u5C0F\u9AD8\u5EA6\u3002\u9ED8\u8BA4\u503C\u4E3A 0</li><li>maxWidth Integer (\u53EF\u9009) \u7A97\u53E3\u7684\u6700\u5927\u5BBD\u5EA6\u3002\u9ED8\u8BA4\u65E0\u9650\u5236</li><li>maxHeight Integer (\u53EF\u9009) \u7A97\u53E3\u7684\u6700\u5927\u9AD8\u5EA6\u3002\u9ED8\u8BA4\u65E0\u9650\u5236</li><li>resizable Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u53EF\u4EE5\u6539\u53D8\u5C3A\u5BF8\u3002\u9ED8\u8BA4\u503C\u4E3A true</li><li>movable Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u53EF\u4EE5\u79FB\u52A8\uFF0C\u5728 Linux \u4E2D\u65E0\u6548\u3002\u9ED8\u8BA4\u503C\u4E3A true</li><li>minimizable Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u53EF\u4EE5\u6700\u5C0F\u5316\uFF0C\u5728 Linux \u4E2D\u65E0\u6548\u3002\u9ED8\u8BA4\u503C\u4E3A true</li><li>maximizable Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u53EF\u4EE5\u6700\u5927\u5316\u52A8\uFF0C\u5728 Linux \u4E2D\u65E0\u6548\u3002\u9ED8\u8BA4\u503C\u4E3A true</li><li>alwaysOnTop Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u6C38\u8FDC\u7F6E\u9876\u3002\u9ED8\u8BA4\u503C\u4E3A false</li><li>fullscreen Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u5168\u5C4F\u3002\u9ED8\u8BA4\u503C\u4E3A false</li><li>fullscreenable Boolean (\u53EF\u9009) \u7A97\u53E3\u662F\u5426\u53EF\u4EE5\u8FDB\u5165\u5168\u5C4F\u72B6\u6001\u3002\u9ED8\u8BA4\u503C\u4E3A true</li><li>enableLargerThanScreen Boolean (\u53EF\u9009) \u662F\u5426\u5141\u8BB8\u6539\u53D8\u7A97\u53E3\u7684\u5927\u5C0F\u4F7F\u4E4B\u5927\u4E8E\u5C4F\u5E55\u7684\u5C3A\u5BF8\uFF0C\u4EC5\u9002\u7528\u4E8E macOS\uFF0C\u56E0\u4E3A\u5176\u5B83\u64CD\u4F5C\u7CFB\u7EDF\u9ED8\u8BA4\u5141\u8BB8 \u5927\u4E8E\u5C4F\u5E55\u7684\u7A97\u53E3\u3002 \u9ED8\u8BA4\u503C\u4E3A false</li><li>opacity Number (\u53EF\u9009) \u8BBE\u7F6E\u7A97\u53E3\u521D\u59CB\u7684\u4E0D\u900F\u660E\u5EA6\uFF0C\u4ECB\u4E8E 0.0 (\u5B8C\u5168\u900F\u660E) \u548C 1.0 (\u5B8C\u5168\u4E0D\u900F\u660E) \u4E4B\u95F4\u3002\u4EC5\u652F\u6301 Windows \u548C macOS \u3002</li></ul></li></ul></li><li><p><code>\u8FD4\u56DE</code> Promise</p></li></ul><blockquote><p>\u542F\u52A8\u4E00\u4E2A ubrowser \u8FD0\u884C</p></blockquote><h2 id="ubrowser-\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#ubrowser-\u7BA1\u7406" aria-hidden="true">#</a> ubrowser \u7BA1\u7406</h2><h3 id="getidleubrowsers" tabindex="-1"><a class="header-anchor" href="#getidleubrowsers" aria-hidden="true">#</a> <code>getIdleUBrowsers()</code></h3><ul><li><code>\u8FD4\u56DE</code> Array</li></ul><blockquote><p>\u83B7\u53D6\u95F2\u7F6E\u7684 ubrowser</p></blockquote><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>utools<span class="token punctuation">.</span><span class="token function">getIdleUBrowsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [{ id: number, title: string, url: string }]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="setubrowserproxy-config" tabindex="-1"><a class="header-anchor" href="#setubrowserproxy-config" aria-hidden="true">#</a> <code>setUBrowserProxy(config)</code></h3>`,87),x=e("p",null,[e("code",null,"config"),o(" Object")],-1),w=o("\u4E0E "),v={href:"https://www.electronjs.org/docs/api/session#sessetproxyconfig",target:"_blank",rel:"noopener noreferrer"},_=o("Electron API"),S=o(" \u4E00\u81F4"),y=e("li",null,[e("p",null,[e("code",null,"\u8FD4\u56DE"),o(" Boolean")])],-1),I=a(`<blockquote><p>\u8BBE\u7F6E ubrowser \u4EE3\u7406</p></blockquote><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">setUBrowserProxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">proxyRules</span><span class="token operator">:</span> <span class="token string">&#39;http=foopy:80;ftp=foopy2&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="clearubrowsercache" tabindex="-1"><a class="header-anchor" href="#clearubrowsercache" aria-hidden="true">#</a> <code>clearUBrowserCache()</code></h3><ul><li><code>\u8FD4\u56DE</code> Boolean</li></ul><blockquote><p>\u6E05\u7A7A ubrowser \u7F13\u5B58</p></blockquote><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span><span class="token function">clearUBrowserCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8);function j(B,P){const n=c("ExternalLinkIcon");return s(),l(r,null,[p,e("ul",null,[e("li",null,[d,e("blockquote",null,[h,e("p",null,[b,e("a",k,[g,t(n)]),q])])]),m]),f,e("ul",null,[e("li",null,[x,e("blockquote",null,[e("p",null,[w,e("a",v,[_,t(n)]),S])])]),y]),I],64)}var T=i(u,[["render",j]]);export{T as default};
