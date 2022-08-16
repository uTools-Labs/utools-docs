import{r as e,o as p,c as o,a as s,b as l,w as r,F as c,d as t,e as n}from"./app.d970ef26.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=t(`<h1 id="utools-server-api" tabindex="-1"><a class="header-anchor" href="#utools-server-api" aria-hidden="true">#</a> uTools Server API</h1><p>\u901A\u8FC7 uTools \u7684\u670D\u52A1\u7AEF API\uFF0C\u53EF\u4EE5\u5C06\u4F60\u7684\u5E94\u7528\u548C uTools \u7528\u6237\u5173\u8054\uFF0C\u5B9E\u73B0\u5E10\u53F7\u4E92\u901A\u3001\u63A5\u6536\u652F\u4ED8\u901A\u77E5\u3001\u67E5\u8BE2\u7528\u6237\u652F\u4ED8\u8BB0\u5F55\u7B49\uFF0C\u4E3A\u4FDD\u62A4\u5BC6\u94A5\u5B89\u5168\uFF0C\u8BF7\u4EC5\u5728\u670D\u52A1\u7AEF\u8C03\u7528\u63A5\u53E3\u3002</p><h2 id="\u83B7\u53D6\u7528\u6237\u57FA\u7840\u4FE1\u606F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u57FA\u7840\u4FE1\u606F\u63A5\u53E3" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u57FA\u7840\u4FE1\u606F\u63A5\u53E3</h2><p>\u6B64\u63A5\u53E3\u7528\u4E8E\u83B7\u53D6 uTools \u7528\u6237\u7684\u57FA\u7840\u4FE1\u606F\u3001\u9A8C\u8BC1\u7528\u6237\u771F\u5B9E\u6027\uFF0C\u4E0E\u7B2C\u4E09\u65B9\u7CFB\u7EDF\u8FDB\u884C\u5E10\u53F7\u6253\u901A\uFF0C\u5B9E\u73B0\u7CFB\u7EDF\u95F4\u514D\u767B\u5F55\u8DF3\u8F6C\u7B49\u3002</p><h3 id="_1-1-\u63A5\u53E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-1-\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a> 1.1 \u63A5\u53E3\u8BF4\u660E</h3><p><strong>\u8C03\u7528\u5730\u5740</strong>\uFF1A<code>https://open.u-tools.cn/baseinfo </code></p><p><strong>\u8BF7\u6C42\u65B9\u5F0F</strong>\uFF1A<code>get</code></p><p><strong>Header</strong>\uFF1A <code>Accept:application/json</code> \u8BF7\u6C42\u5934\u4E2D\u987B\u6DFB\u52A0\u6B64\u9879\uFF0C\u5426\u5219\u8BF7\u6C42\u5C06\u5931\u8D25</p><p><strong>\u8BF7\u6C42\u53C2\u6570</strong>\uFF1A</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">plugin_id</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u63D2\u4EF6 ID</td></tr><tr><td style="text-align:left;">access_token</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">uTools \u7528\u6237\u7684 access_token</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u65F6\u95F4\u6233\uFF08\u79D2\uFF09\uFF0C\u8BEF\u5DEE\u9700\u5C0F\u4E8E 10 \u5206\u949F</td></tr><tr><td style="text-align:left;">sign</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u7B7E\u540D</td></tr></tbody></table><h3 id="_1-2-\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4E34\u65F6-access-token" tabindex="-1"><a class="header-anchor" href="#_1-2-\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4E34\u65F6-access-token" aria-hidden="true">#</a> 1.2 \u83B7\u53D6\u5F53\u524D\u7528\u6237\u4E34\u65F6 access_token</h3><p>\u5728 uTools \u5BA2\u6237\u7AEF\u4E2D\u8C03\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u7528\u6237\u670D\u52A1\u7AEF\u4E34\u65F6\u4EE4\u724C\uFF0C2 \u5C0F\u65F6\u5185\u6709\u6548</span>
utools<span class="token punctuation">.</span><span class="token function">fetchUserServerTemporaryToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> access_token <span class="token operator">=</span> res<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-3-\u7B7E\u540D\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u7B7E\u540D\u65B9\u6CD5" aria-hidden="true">#</a> 1.3 \u7B7E\u540D\u65B9\u6CD5</h3><ol><li><p>\u5BF9\u8BF7\u6C42\u53C2\u6570\u6309\u53C2\u6570\u540D\u5347\u5E8F\u6392\u5E8F</p></li><li><p>\u5BF9\u53C2\u6570\u5185\u5BB9\u8FDB\u884C <code>url_encode</code> \u7F16\u7801\u540E\uFF0C\u7EC4\u5408\u6210 URL \u53C2\u6570\u5F62\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\uFF1A<code>access_token=aaaaaaa&amp;plugin_id=ccccc&amp;timestamp=1624329435</code></p></li><li><p>\u4F7F\u7528 HMAC \u65B9\u6CD5\u5BF9\u5B57\u7B26\u4E32\u751F\u6210\u5E26\u6709\u5BC6\u94A5\u7684\u54C8\u5E0C\u503C\uFF0C\u5F97\u5230\u7B7E\u540D</p></li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u4EE5\u4E0B\u4E3A php \u4EE3\u7801\u6F14\u793A\u7B7E\u540D\u8FC7\u7A0B</span>
<span class="token comment">// \u53C2\u6570</span>
<span class="token variable">$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string double-quoted-string">&quot;plugin_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;zueadppw&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u5728\u5F00\u53D1\u8005\u63D2\u4EF6\u4E2D\u83B7\u5F97</span>
  <span class="token string double-quoted-string">&quot;access_token&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;user access_token 32\u4F4D&quot;</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;timestamp&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;1624329435&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">// 1. \u6309\u7167\u952E\u540D\u5BF9\u6570\u7EC4\u8FDB\u884C\u5347\u5E8F\u6392\u5E8F</span>
<span class="token function">ksort</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u751F\u6210 URL-encode \u4E4B\u540E\u7684\u8BF7\u6C42\u5B57\u7B26\u4E32</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. \u4F7F\u7528 HMAC \u65B9\u6CD5\u751F\u6210\u5E26\u6709\u5BC6\u94A5\u7684\u54C8\u5E0C\u503C</span>
<span class="token variable">$secret</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;your secret 32\u4F4D&quot;</span><span class="token punctuation">;</span> <span class="token comment">// secret \u5728\u5F00\u53D1\u8005\u63D2\u4EF6\u4E2D\u901A\u8FC7\u91CD\u7F6E\u83B7\u53D6</span>
<span class="token variable">$sign</span> <span class="token operator">=</span> <span class="token function">hash_hmac</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;sha256&quot;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">,</span> <span class="token variable">$secret</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_1-4-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_1-4-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 1.4 \u8FD4\u56DE\u503C</h3><p>\u82E5\u8C03\u7528\u6210\u529F\uFF08http \u72B6\u6001\u7801 200\uFF09\uFF0C\u5C06\u8FD4\u56DE\u5982\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://res.u-tools.cn/assets/avatars/eZCBIawAkspLw8Xg.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;member&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426 uTools \u4F1A\u5458\uFF080: \u5426\uFF0C1: \u662F\uFF09</span>
        <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5374\u6B65.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;open_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00a50cd81c37c4e381e8161b2d762158&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uTools \u7528\u6237 ID, \u5BF9\u4E8E\u6B64\u63D2\u4EF6\u4E0D\u53D8\u4E14\u552F\u4E00</span>
        <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1624329616</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4dbf21a9d5a0f0e3906a0180522fd6393b4e91f738d57cafddf309afc6c547bb&quot;</span> <span class="token comment">// \u7B7E\u540D\u7B97\u6CD5\u4E0E 1.3 \u76F8\u540C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u82E5\u8C03\u7528\u5931\u8D25\uFF0C\u5C06\u8FD4\u56DE\u5982\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The given data was invalid.&quot;</span><span class="token punctuation">,</span> <span class="token comment">// message \u5B57\u6BB5\u59CB\u7EC8\u5B58\u5728</span>
    <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u53EF\u80FD\u6CA1\u6709\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F</span>
        <span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;access token \u5FC5\u987B\u662F 32 \u4E2A\u5B57\u7B26\u3002&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>HTTP \u72B6\u6001\u7801\u8BF4\u660E</p><table><thead><tr><th style="text-align:center;">http \u72B6\u6001\u7801</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">200</td><td style="text-align:center;">\u6210\u529F\u8FD4\u56DE</td></tr><tr><td style="text-align:center;">400</td><td style="text-align:center;">\u5BA2\u6237\u7AEF\u9519\u8BEF</td></tr><tr><td style="text-align:center;">401</td><td style="text-align:center;">\u672A\u77E5\u7528\u6237\uFF08sign \u9519\u8BEF\uFF0Caccess_token \u9519\u8BEF\u7B49\uFF09</td></tr><tr><td style="text-align:center;">403</td><td style="text-align:center;">\u65E0\u6743\u9650\u8BBF\u95EE\uFF08access_token \u8FC7\u671F\uFF09</td></tr><tr><td style="text-align:center;">404</td><td style="text-align:center;">\u672A\u627E\u5230\u7528\u6237\uFF08\u4E0D\u5B58\u5728\u6B64\u7528\u6237\u6216\u8FDD\u53CD uTools \u76F8\u5173\u534F\u8BAE\u88AB\u7981\u7528\uFF09</td></tr><tr><td style="text-align:center;">422</td><td style="text-align:center;">\u8BF7\u6C42\u7684\u53C2\u6570\u672A\u901A\u8FC7\u9A8C\u8BC1</td></tr><tr><td style="text-align:center;">500</td><td style="text-align:center;">uTools \u6682\u65F6\u65E0\u6CD5\u63D0\u4F9B\u670D\u52A1</td></tr></tbody></table><h2 id="\u7528\u6237\u652F\u4ED8\u6210\u529F\u56DE\u8C03\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u652F\u4ED8\u6210\u529F\u56DE\u8C03\u63A5\u53E3" aria-hidden="true">#</a> \u7528\u6237\u652F\u4ED8\u6210\u529F\u56DE\u8C03\u63A5\u53E3</h2><p>\u5F53\u7528\u6237\u901A\u8FC7 uTools \u5728\u4F60\u7684\u63D2\u4EF6\u5185\u5B8C\u6210\u652F\u4ED8\uFF0C\u4E14\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u914D\u7F6E\u4E86\u56DE\u8C03\u5730\u5740\uFF0C\u5728\u6536\u5230\u4ED8\u6B3E\u65F6\uFF0C\u4F1A\u5C06\u4FE1\u606F\u63A8\u9001\u5230\u914D\u7F6E\u7684\u56DE\u8C03\u5730\u5740\u3002</p><h3 id="_2-1-\u63A5\u53E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a> 2.1 \u63A5\u53E3\u8BF4\u660E</h3><p><strong>\u8BF7\u6C42\u65B9\u5F0F</strong>\uFF1A<code>post</code></p><p><strong>Header</strong>\uFF1A<code>contentType: application/json</code></p><p><strong>\u8BF7\u6C42\u53C2\u6570</strong>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">&quot;resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;attach&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9644\u52A0\u6570\u636E</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4F1A\u54581\u5E74&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u4ED8\u5185\u5BB9</span>
        <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-06-18 16:42:16&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BA2\u5355\u751F\u6210\u65F6\u95F4</span>
        <span class="token property">&quot;goods_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6n193s7P95p9gA13786YkwQ5oxHpVW4f&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5546\u54C1ID</span>
        <span class="token property">&quot;open_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a331127d654761ac91d086b942aae7b6&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uTools \u7528\u6237 ID</span>
        <span class="token property">&quot;order_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;KMFSOZt5cMe5A0ClkdCAAyPasyXZJzP6&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uTools \u8BA2\u5355\u53F7</span>
        <span class="token property">&quot;out_order_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5916\u90E8\u8BA2\u5355\u53F7</span>
        <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-06-18 16:42:36&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u652F\u4ED8\u65F6\u95F4</span>
        <span class="token property">&quot;pay_fee&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u4ED8\u91D1\u989D\uFF08\u5206\uFF09</span>
        <span class="token property">&quot;plugin_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FFFFFFFF&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u652F\u4ED8\uFF080: \u672A\u652F\u4ED8\uFF0C10: \u5DF2\u652F\u4ED8\uFF09</span>
        <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1624346603</span> <span class="token comment">// \u8BF7\u6C42\u53D1\u9001\u65F6\u95F4\u6233</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53e8ab69b940483abd04427fdaf2de9b5294509943df5393b7bf1913af9055fa&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_2-2-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 2.2 \u6CE8\u610F\u4E8B\u9879</h3><ol><li>\u5F53\u5904\u7406\u5B8C\u6210\u540E\uFF0C\u8BF7\u8FD4\u56DE\u5B57\u7B26\u4E32 <code>SUCCESS</code></li><li>\u5982\u679C\u8FD4\u56DE\u503C\u4E3A\u5176\u4ED6\uFF0CuTools \u4F1A\u5EF6\u65F6\u540E\u518D\u6B21\u901A\u77E5\uFF0C\u6700\u591A\u901A\u77E5 5 \u6B21\uFF0C\u65F6\u95F4\u95F4\u9694 [15, 30, 60, 300, 600] \u79D2\u3002</li><li>\u901A\u77E5\u6700\u957F\u7B49\u5F85 10 \u79D2\u3002</li><li>\u907F\u514D\u6D88\u606F\u4F2A\u9020\uFF0C\u8BF7\u52A1\u5FC5\u9A8C\u8BC1 sign\uFF0C\u7B7E\u540D\u65B9\u5F0F\u4E0E\u83B7\u53D6\u7528\u6237\u57FA\u7840\u4FE1\u606F\u63A5\u53E3 1.3 \u4E00\u81F4</li></ol><h2 id="\u652F\u4ED8\u8BA2\u5355\u67E5\u8BE2\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u8BA2\u5355\u67E5\u8BE2\u63A5\u53E3" aria-hidden="true">#</a> \u652F\u4ED8\u8BA2\u5355\u67E5\u8BE2\u63A5\u53E3</h2><p>\u6B64\u63A5\u53E3\u7528\u4E8E\u4E3B\u52A8\u67E5\u8BE2\u8BA2\u5355\u652F\u4ED8\u72B6\u6001\u3002</p><h4 id="_3-1-\u63A5\u53E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-1-\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a> 3.1 \u63A5\u53E3\u8BF4\u660E</h4><p><strong>\u8C03\u7528\u5730\u5740</strong>: <code>https://open.u-tools.cn/payments/record</code></p><p><strong>\u8BF7\u6C42\u65B9\u5F0F</strong>: <code>get</code></p><p><strong>Header</strong>: <code>Accept:application/json</code> \u8BF7\u6C42\u5934\u4E2D\u987B\u6DFB\u52A0\u6B64\u9879\uFF0C\u5426\u5219\u8BF7\u6C42\u5C06\u5931\u8D25</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">plugin_id</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u63D2\u4EF6ID</td></tr><tr><td style="text-align:left;">out_order_id</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u7B2C\u4E09\u65B9\u8BA2\u5355\u53F7</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u65F6\u95F4\u6233\uFF08\u79D2\uFF09\uFF0C\u8BEF\u5DEE\u9700\u5C0F\u4E8E 10 \u5206\u949F</td></tr><tr><td style="text-align:left;">sign</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u7B7E\u540D\uFF0C\u4E0E 1.3 \u7B7E\u540D\u65B9\u6CD5\u4E00\u81F4</td></tr></tbody></table><h3 id="_3-2-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 3.2 \u8FD4\u56DE\u503C</h3><p>\u82E5\u8C03\u7528\u6210\u529F\uFF08http \u72B6\u6001\u7801 200\uFF09\uFF0C\u5C06\u8FD4\u56DE\u5982\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;attach&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9644\u52A0\u6570\u636E</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4F1A\u54581\u5E74&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u4ED8\u5185\u5BB9</span>
        <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-06-18 16:42:16&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BA2\u5355\u751F\u6210\u65F6\u95F4</span>
        <span class="token property">&quot;goods_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6n193s7P95p9gA13786YkwQ5oxHpVW4f&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5546\u54C1ID</span>
        <span class="token property">&quot;open_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a331127d654761ac91d086b942aae7b6&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uTools \u7528\u6237 ID</span>
        <span class="token property">&quot;order_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;KMFSOZt5cMe5A0ClkdCAAyPasyXZJzP6&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uTools \u8BA2\u5355\u53F7</span>
        <span class="token property">&quot;out_order_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5916\u90E8\u8BA2\u5355\u53F7</span>
        <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u652F\u4ED8\u65F6\u95F4</span>
        <span class="token property">&quot;pay_fee&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u4ED8\u91D1\u989D\uFF08\u5206\uFF09</span>
        <span class="token property">&quot;plugin_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FFFFFFFF&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u652F\u4ED8\uFF080: \u672A\u652F\u4ED8\uFF0C10: \u5DF2\u652F\u4ED8\uFF09</span>
        <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1624346603</span> <span class="token comment">// \u8BF7\u6C42\u53D1\u9001\u65F6\u95F4\u6233</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbb3d05f6e794ca3b2bc2fa7ef45c3f7cd6a3b20c601b37317863b67998d535e&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>HTTP \u72B6\u6001\u7801\u8BF4\u660E</p><table><thead><tr><th style="text-align:center;">http \u72B6\u6001\u7801</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">200</td><td style="text-align:center;">\u6210\u529F\u8FD4\u56DE</td></tr><tr><td style="text-align:center;">400</td><td style="text-align:center;">\u5BA2\u6237\u7AEF\u9519\u8BEF</td></tr><tr><td style="text-align:center;">401</td><td style="text-align:center;">\u672A\u77E5\u7528\u6237\uFF08sign \u9519\u8BEF\uFF09</td></tr><tr><td style="text-align:center;">403</td><td style="text-align:center;">\u65E0\u6743\u9650\u8BBF\u95EE\uFF08timestamp \u5DF2\u8FC7\u671F\uFF09</td></tr><tr><td style="text-align:center;">404</td><td style="text-align:center;">\u672A\u627E\u5230\u63D2\u4EF6</td></tr><tr><td style="text-align:center;">422</td><td style="text-align:center;">\u8BF7\u6C42\u7684\u53C2\u6570\u672A\u901A\u8FC7\u9A8C\u8BC1</td></tr><tr><td style="text-align:center;">500</td><td style="text-align:center;">uTools \u6682\u65F6\u65E0\u6CD5\u63D0\u4F9B\u670D\u52A1</td></tr></tbody></table><h2 id="\u521B\u5EFA\u5546\u54C1\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5546\u54C1\u63A5\u53E3" aria-hidden="true">#</a> \u521B\u5EFA\u5546\u54C1\u63A5\u53E3</h2><p>\u6B64\u63A5\u53E3\u7528\u4E8E\u52A8\u6001\u521B\u5EFA\u5546\u54C1\uFF0C\u4E3B\u8981\u89E3\u51B3\u4E0D\u56FA\u5B9A\u91D1\u989D\u5546\u54C1\u95EE\u9898\uFF0C\u4E00\u822C\u4E3A\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u901A\u8FC7\u6B64 API \u521B\u5EFA\u7684\u5546\u54C1\u4E0D\u4F1A\u51FA\u73B0\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u5546\u54C1\u5217\u8868\u4E2D\u3002</p><h4 id="_3-1-\u63A5\u53E3\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#_3-1-\u63A5\u53E3\u8BF4\u660E-1" aria-hidden="true">#</a> 3.1 \u63A5\u53E3\u8BF4\u660E</h4><p><strong>\u8C03\u7528\u5730\u5740</strong>: <code>https://open.u-tools.cn/goods</code></p><p><strong>\u8BF7\u6C42\u65B9\u5F0F</strong>: <code>post</code></p><p><strong>Header</strong>: <code>Accept:application/json</code> \u8BF7\u6C42\u5934\u4E2D\u987B\u6DFB\u52A0\u6B64\u9879\uFF0C\u5426\u5219\u8BF7\u6C42\u5C06\u5931\u8D25</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">plugin_id</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u63D2\u4EF6ID</td></tr><tr><td style="text-align:left;">total_fee</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u5546\u54C1\u603B\u91D1\u989D\uFF08\u5206\uFF09</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u5546\u54C1\u540D\u79F0</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u65F6\u95F4\u6233\uFF08\u79D2\uFF09\uFF0C\u8BEF\u5DEE\u9700\u5C0F\u4E8E 10 \u5206\u949F</td></tr><tr><td style="text-align:left;">sign</td><td style="text-align:center;">\u662F</td><td style="text-align:left;">\u7B7E\u540D\uFF0C\u4E0E 1.3 \u7B7E\u540D\u65B9\u6CD5\u4E00\u81F4</td></tr></tbody></table><h3 id="_3-2-\u8FD4\u56DE\u503C-1" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8FD4\u56DE\u503C-1" aria-hidden="true">#</a> 3.2 \u8FD4\u56DE\u503C</h3><p>\u82E5\u8C03\u7528\u6210\u529F\uFF08http \u72B6\u6001\u7801 200\uFF09\uFF0C\u5C06\u8FD4\u56DE\u5982\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ZyxrbSpWBH360pSWG0ueYI3rKSWXMcic&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,56),k=n("\u8FD4\u56DE\u5185\u5BB9\u4E3Agoods_id\uFF0C\u53EF\u5728 "),b=n("openPayment"),g=n(" \u4E2D\u4F7F\u7528"),m=t('<p>HTTP \u72B6\u6001\u7801\u8BF4\u660E</p><table><thead><tr><th style="text-align:center;">http \u72B6\u6001\u7801</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">200</td><td style="text-align:center;">\u6210\u529F\u8FD4\u56DE</td></tr><tr><td style="text-align:center;">400</td><td style="text-align:center;">\u5BA2\u6237\u7AEF\u9519\u8BEF</td></tr><tr><td style="text-align:center;">401</td><td style="text-align:center;">\u672A\u77E5\u7528\u6237\uFF08sign \u9519\u8BEF\uFF09</td></tr><tr><td style="text-align:center;">403</td><td style="text-align:center;">\u65E0\u6743\u9650\u8BBF\u95EE\uFF08timestamp \u5DF2\u8FC7\u671F\uFF09</td></tr><tr><td style="text-align:center;">404</td><td style="text-align:center;">\u672A\u627E\u5230\u63D2\u4EF6</td></tr><tr><td style="text-align:center;">422</td><td style="text-align:center;">\u8BF7\u6C42\u7684\u53C2\u6570\u672A\u901A\u8FC7\u9A8C\u8BC1</td></tr><tr><td style="text-align:center;">500</td><td style="text-align:center;">uTools \u6682\u65F6\u65E0\u6CD5\u63D0\u4F9B\u670D\u52A1</td></tr></tbody></table>',2);function h(y,q){const a=e("RouterLink");return p(),o(c,null,[d,s("blockquote",null,[s("p",null,[k,l(a,{to:"/developer/api.html#openpayment-options-callback"},{default:r(()=>[b]),_:1}),g])]),m],64)}var f=i(u,[["render",h]]);export{f as default};
