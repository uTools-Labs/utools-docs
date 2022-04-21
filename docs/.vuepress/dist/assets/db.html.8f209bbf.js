import{d as n}from"./app.541dccd3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="utools-db-api" tabindex="-1"><a class="header-anchor" href="#utools-db-api" aria-hidden="true">#</a> uTools DB API</h1><p>\u4F20\u7EDF\u7684 B/S \u7ED3\u6784\u7684\u7A0B\u5E8F\u4E2D\uFF0C\u9664\u4E86\u524D\u7AEF\u7684\u5F00\u53D1\u4E4B\u5916\uFF0C\u53EF\u80FD\u8FD8\u9700\u8981\u6709\u4E00\u53F0\u670D\u52A1\u5668\u3001\u4E00\u95E8\u540E\u7AEF\u8BED\u8A00\u548C\u4E00\u4E2A\u6570\u636E\u5E93\u6765\u5904\u7406\u548C\u5B58\u50A8\u7528\u6237\u6570\u636E\uFF0C\u8FD9\u4F1A\u5E26\u6765\u5F88\u5927\u7684\u7EF4\u62A4\u6210\u672C\u548C\u53EF\u7528\u6027\u7684\u95EE\u9898\u3002</p><p>uTools \u7684\u5F88\u591A\u63D2\u4EF6\u5C31\u50CF\u662F\u4E00\u4E2A\u8F7B\u578B\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u603B\u662F\u4F1A\u78B0\u5230\u4E00\u4E9B\u6570\u636E\u9700\u8981\u6301\u4E45\u5316\u5B58\u50A8\u7684\u573A\u666F\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A nosql \u6570\u636E\u5E93\u7CFB\u7EDF\uFF0C\u5B83\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u4F7F\u7528\uFF0C\u6570\u636E\u5B58\u50A8\u5728\u672C\u5730\u8BA1\u7B97\u673A\u7CFB\u7EDF\uFF0C\u5982\u679C\u7528\u6237\u5F00\u542F\u540C\u6B65\uFF0C\u53EF\u5728\u591A\u4E2A\u8BBE\u5907\u4E4B\u95F4\u5B9E\u73B0\u79D2\u7EA7\u540C\u6B65\u3002</p><p>\u6570\u636E\u5E93\u8BBE\u8BA1\u4E3A\u79BB\u7EBF\u4F18\u5148\uFF0C\u5728\u6CA1\u6709\u7F51\u7EDC\u65F6\u7A0B\u5E8F\u4F9D\u7136\u53EF\u4EE5\u63D0\u4F9B\u5B8C\u6574\u7684\u670D\u52A1\u3002\u4F46\u5728\u591A\u4E2A\u8BBE\u5907\u7F16\u8F91\u540C\u4E00\u4E2A\u6587\u6863\u65F6\uFF0C\u5C06\u4EA7\u751F\u51B2\u7A81\uFF0C\u6570\u636E\u5E93\u4F1A\u7EDF\u4E00\u9009\u62E9\u4E00\u4E2A\u7248\u672C\u4F5C\u4E3A\u6700\u7EC8\u7248\u672C\uFF0C\u4E3A\u4E86\u5C3D\u53EF\u80FD\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u8BE5\u5C06\u5185\u5BB9\u5408\u7406\u7684\u5206\u6563\u5728\u591A\u4E2A\u6587\u6863\uFF0C\u800C\u4E0D\u662F\u90FD\u5B58\u653E\u5728\u4E00\u4E2A\u6587\u6863\u4E2D\u3002</p><p>\u800C\u4E14\u6570\u636E\u5E93\u4EE5\u6587\u6863\u4E3A\u6700\u5C0F\u5355\u4F4D\uFF0C\u6BCF\u6B21\u53D8\u66F4\uFF0C\u90FD\u4F1A\u89E6\u53D1\u540C\u6B65\u3002\u5408\u7406\u8BBE\u8BA1\u7684\u6587\u6863\u7ED3\u6784\uFF0C\u53EF\u4EE5\u51CF\u5C11\u9700\u8981\u540C\u6B65\u7684\u6587\u6863\u6570\u636E\u91CF\uFF0C\u63D0\u9AD8\u6027\u80FD\u3002</p><h2 id="\u672C\u5730\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6570\u636E\u5E93" aria-hidden="true">#</a> \u672C\u5730\u6570\u636E\u5E93</h2><h3 id="utools-db-put-doc" tabindex="-1"><a class="header-anchor" href="#utools-db-put-doc" aria-hidden="true">#</a> <code>utools.db.put(doc)</code></h3><ul><li><code>doc</code> Object</li><li><code>\u8FD4\u56DE</code> Object</li></ul><blockquote><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u521B\u5EFA\u6216\u66F4\u65B0\u6570\u636E\u5E93\u6587\u6863\uFF0C\u6587\u6863\u5185\u5BB9\u4E0D\u8D85\u8FC7 1M</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.put(doc)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE {id: &quot;demo&quot;, ok: true, rev: &quot;1-05c9b92e6f24287dc1f4ec79d9a34fa8&quot;}</span>

<span class="token comment">// \u66F4\u65B0</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_rev</span><span class="token operator">:</span> <span class="token string">&quot;1-05c9b92e6f24287dc1f4ec79d9a34fa8&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F02\u6B65\u65B9\u5F0F\u66F4\u65B0</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span>promises<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_rev</span><span class="token operator">:</span> <span class="token string">&quot;1-05c9b92e6f24287dc1f4ec79d9a34fa8&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>_id</code> \u4EE3\u8868\u8FD9\u4E2A\u6587\u6863\u5728\u6570\u636E\u5E93\u4E2D\u552F\u4E00\u503C\uFF0C\u5982\u679C\u503C\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6587\u6863\uFF0C\u5982\u679C\u503C\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u4F1A\u8FDB\u884C\u66F4\u65B0\u3002\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\uFF0C\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u5305\u542B\u4E00\u4E2A <code>rev</code> \u5C5E\u6027\uFF0C\u8FD9\u662F\u4EE3\u8868\u6B64\u6587\u6863\u7684\u7248\u672C\uFF0C\u6BCF\u6B21\u5BF9\u6587\u6863\u8FDB\u884C\u66F4\u65B0\u65F6\uFF0C\u90FD\u8981\u5E26\u4E0A\u6700\u65B0\u7684\u7248\u672C\u53F7\uFF0C\u5426\u5219\u66F4\u65B0\u5C06\u5931\u8D25\uFF0C\u7248\u672C\u5316\u7684\u610F\u4E49\u5728\u4E8E\u89E3\u51B3\u540C\u6B65\u65F6\u6570\u636E\u51B2\u7A81\u3002</p><p>\u53E6\u5916\u9700\u8981\u6CE8\u610F\uFF0C\u6BCF\u6B21\u66F4\u65B0\u65F6\u90FD\u8981\u4F20\u5165\u5B8C\u6574\u7684\u6587\u6863\u6570\u636E\uFF0C\u65E0\u6CD5\u5BF9\u5355\u4E2A\u5B57\u6BB5\u8FDB\u884C\u66F4\u65B0\u3002</p><h3 id="utools-db-get-id" tabindex="-1"><a class="header-anchor" href="#utools-db-get-id" aria-hidden="true">#</a> <code>utools.db.get(id)</code></h3><ul><li><code>id</code> String</li><li><code>\u8FD4\u56DE</code> Object</li></ul><blockquote><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u6839\u636E\u6587\u6863 ID \u83B7\u53D6\u6570\u636E</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.get(id)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE {_id: &quot;demo&quot;, _rev: &quot;3-9836c5c68af5aef618e17d615882942a&quot;, data: &quot;demo&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-db-remove-doc" tabindex="-1"><a class="header-anchor" href="#utools-db-remove-doc" aria-hidden="true">#</a> <code>utools.db.remove(doc)</code></h3><ul><li><code>doc</code> String | Object</li><li><code>\u8FD4\u56DE</code> Object</li></ul><blockquote><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u5220\u9664\u6570\u636E\u5E93\u6587\u6863\uFF0C\u53EF\u4EE5\u4F20\u5165\u6587\u6863\u5BF9\u8C61\u6216\u6587\u6863 id \u8FDB\u884C\u64CD\u4F5C\u3002</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.remove(doc)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE {id: &quot;demo&quot;, ok: true, rev: &quot;2-effe5dbc23dffc180d8411b23f3108fb&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-db-bulkdocs-docs" tabindex="-1"><a class="header-anchor" href="#utools-db-bulkdocs-docs" aria-hidden="true">#</a> <code>utools.db.bulkDocs(docs)</code></h3><ul><li><code>docs</code> Array</li><li><code>\u8FD4\u56DE</code> Array</li></ul><blockquote><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u6279\u91CF\u66F4\u65B0\u6570\u636E\u5E93\u6587\u6863\uFF0C\u4F20\u5165\u9700\u8981\u66F4\u6539\u7684\u6587\u6863\u5BF9\u8C61\u5408\u5E76\u6210\u6570\u7EC4\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u3002</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.bulkDocs(docs)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">bulkDocs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&quot;demo1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_rev</span><span class="token operator">:</span> <span class="token string">&quot;1-c8817a74e292eda4cba1a45924853af6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&quot;demo2&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_rev</span><span class="token operator">:</span> <span class="token string">&quot;1-f0399b42cc6123a9cc8503632ba7b3a7&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">/* \u8FD4\u56DE
[{
  id: &quot;demo1&quot;, ok: true, rev: &quot;2-7857b2801bc0303d2cc0bb82e8afd796&quot;
}, {
  id: &quot;demo2&quot;, ok: true, rev: &quot;2-7857b2801bc0303d2cc0bb82e8afd796&quot;
}]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="utools-db-alldocs-key" tabindex="-1"><a class="header-anchor" href="#utools-db-alldocs-key" aria-hidden="true">#</a> <code>utools.db.allDocs(key)</code></h3><ul><li><code>key</code> String | Array</li><li><code>\u8FD4\u56DE</code> Array</li></ul><blockquote><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u83B7\u53D6\u6240\u6709\u6570\u636E\u5E93\u6587\u6863\uFF0C\u5982\u679C\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4EE5\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u6587\u6863\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u6307\u5B9A ID \u7684\u6570\u7EC4\uFF0C\u4E0D\u4F20\u5165\u5219\u4E3A\u83B7\u53D6\u6240\u6709\u6587\u6863\u3002</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.allDocs(key)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F02\u6B65\u65B9\u5F0F\u83B7\u53D6\u6240\u6709\u6587\u6863</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span>promises<span class="token punctuation">.</span><span class="token function">allDocs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">docs</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>docs<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD4\u56DEid\u4EE5 demo \u5F00\u5934\u7684\u6587\u6863</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">allDocs</span><span class="token punctuation">(</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">)</span>
<span class="token comment">/* \u8FD4\u56DE
[{
  _id: &quot;demo/123&quot;, _rev: &quot;2-7857b2801bc0303d2cc0bb82e8afd796&quot;, data: &quot;demo&quot;
}, {
  _id: &quot;demo/124&quot;, _rev: &quot;1-f0399b42cc6123a9cc8503632ba7b3a7&quot;, data: &quot;demo&quot;
}, {
  _id: &quot;demo/125&quot;, _rev: &quot;1-f0399b42cc6123a9cc8503632ba7b3a7&quot;, data: &quot;demo&quot;
}]
*/</span>
<span class="token comment">// \u6839\u636Eid\u6570\u7EC4\u8BF7\u6C42</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">allDocs</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&quot;demo1&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;demo2&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">/* \u8FD4\u56DE
[{
  _id: &quot;demo1&quot;, _rev: &quot;2-7857b2801bc0303d2cc0bb82e8afd796&quot;, data: &quot;demo&quot;
}, {
  _id: &quot;demo2&quot;, _rev: &quot;1-f0399b42cc6123a9cc8503632ba7b3a7&quot;, data: &quot;demo&quot;
}]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="utools-db-postattachment-docid-attachment-type" tabindex="-1"><a class="header-anchor" href="#utools-db-postattachment-docid-attachment-type" aria-hidden="true">#</a> <code>utools.db.postAttachment(docId, attachment, type)</code></h3><ul><li><p><code>docId</code> String</p><blockquote><p>\u6587\u6863 ID</p></blockquote></li><li><p><code>attachment</code> Buffer | Uint8Array</p><blockquote><p>\u9644\u4EF6\uFF0C\u6700\u5927 10M</p></blockquote></li><li><p><code>type</code> String</p><blockquote><p>\u9644\u4EF6\u7C7B\u578B\uFF0C\u6BD4\u5982\uFF1Aimage/png, text/plain</p></blockquote></li><li><p><code>\u8FD4\u56DE</code> Object</p></li></ul><blockquote><p>\u5B58\u50A8\u9644\u4EF6\u5230\u65B0\u6587\u6863\uFF0C\u53EA\u80FD\u65B0\u5EFA\u5B58\u50A8\u9644\u4EF6\u4E0D\u80FD\u7528\u4E8E\u66F4\u65B0\uFF0C\u9644\u4EF6\u6700\u5927\u4E0D\u8D85\u8FC7 10M</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.postAttachment(docId, attachment, type)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> testTxtBuffer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;/path/to/test.txt&#39;</span><span class="token punctuation">)</span>
  utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">postAttachment</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> testTxtBuffer<span class="token punctuation">,</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8FD4\u56DE {id: &quot;demo&quot;, ok: true, rev: &quot;1-44055137915c41c080fc920a8470e14b&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="utools-db-getattachment-docid" tabindex="-1"><a class="header-anchor" href="#utools-db-getattachment-docid" aria-hidden="true">#</a> <code>utools.db.getAttachment(docId)</code></h3><ul><li><p><code>docId</code> String</p><blockquote><p>\u6587\u6863 ID</p></blockquote></li><li><p><code>\u8FD4\u56DE</code> Unit8Array</p></li></ul><blockquote><p>\u83B7\u53D6\u9644\u4EF6</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.getAttachment(docId)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> buf <span class="token operator">=</span> utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">getAttachment</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-db-getattachmenttype-docid" tabindex="-1"><a class="header-anchor" href="#utools-db-getattachmenttype-docid" aria-hidden="true">#</a> <code>utools.db.getAttachmentType(docId)</code></h3><ul><li><p><code>docId</code> String</p><blockquote><p>\u6587\u6863 ID</p></blockquote></li><li><p><code>\u8FD4\u56DE</code> String</p></li></ul><blockquote><p>\u83B7\u53D6\u9644\u4EF6\u7C7B\u578B</p><p>\u5F02\u6B65\u65B9\u5F0F\uFF1A<code>utools.db.promises.getAttachmentType(docId)</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">getAttachmentType</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8FD4\u56DE &#39;text/plain&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="dbstorage" tabindex="-1"><a class="header-anchor" href="#dbstorage" aria-hidden="true">#</a> dbStorage</h2><p>\u5728 \u672C\u5730\u6570\u636E\u5E93 api \u57FA\u7840\u4E0A\u5C01\u88C5\u7684\u503C\u952E\u5BF9\u5B58\u50A8\u65B9\u5F0F\uFF0C\u4F9B\u5FEB\u901F\u4F7F\u7528\u3002</p><h3 id="utools-dbstorage-setitem-key-value" tabindex="-1"><a class="header-anchor" href="#utools-dbstorage-setitem-key-value" aria-hidden="true">#</a> <code>utools.dbStorage.setItem(key, value)</code></h3><ul><li><p><code>key</code> String</p><blockquote><p>\u952E\u540D(\u540C\u65F6\u4E3A\u6587\u6863ID)</p></blockquote></li><li><p><code>value</code> Any</p><blockquote><p>\u952E\u503C(\u4EFB\u610F\u7C7B\u578B)</p></blockquote></li></ul><blockquote><p>\u952E\u503C\u5BF9\u5B58\u50A8\uFF0C\u5982\u679C\u952E\u540D\u5B58\u5728\uFF0C\u5219\u66F4\u65B0\u5176\u5BF9\u5E94\u7684\u503C</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;pai&#39;</span><span class="token punctuation">,</span> <span class="token number">3.1415926</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="utools-dbstorage-getitem-key" tabindex="-1"><a class="header-anchor" href="#utools-dbstorage-getitem-key" aria-hidden="true">#</a> <code>utools.dbStorage.getItem(key)</code></h3><ul><li><p><code>key</code> String</p><blockquote><p>\u952E\u540D(\u540C\u65F6\u4E3A\u6587\u6863ID)</p></blockquote></li><li><p><code>\u8FD4\u56DE</code> Any</p></li></ul><blockquote><p>\u83B7\u53D6\u952E\u540D\u5BF9\u5E94\u7684\u503C</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;pai&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE 3.1415926</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-dbstorage-removeitem-key" tabindex="-1"><a class="header-anchor" href="#utools-dbstorage-removeitem-key" aria-hidden="true">#</a> <code>utools.dbStorage.removeItem(key)</code></h3><ul><li><p><code>key</code> String</p><blockquote><p>\u952E\u540D(\u540C\u65F6\u4E3A\u6587\u6863ID)</p></blockquote></li></ul><blockquote><p>\u5220\u9664\u952E\u503C\u5BF9(\u5220\u9664\u6587\u6863)</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;pai&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,54);function t(o,p){return e}var u=s(a,[["render",t]]);export{u as default};
