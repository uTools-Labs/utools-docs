<template><h1 id="utools-db-api"><a class="header-anchor" href="#utools-db-api">#</a> uTools DB API</h1>
<p>传统的 B/S 结构的程序中，除了前端的开发之外，可能还需要有一台服务器、一门后端语言和一个数据库来处理和存储用户数据，这会带来很大的维护成本和可用性的问题。</p>
<p>uTools 的很多插件就像是一个轻型的应用程序，总是会碰到一些数据需要持久化存储的场景，为了解决这个问题，我们提供了一个 nosql 数据库系统，它可以很方便的使用，数据存储在本地计算机系统，如果用户开启同步，可在多个设备之间实现秒级同步。</p>
<p>数据库设计为离线优先，在没有网络时程序依然可以提供完整的服务。但在多个设备编辑同一个文档时，将产生冲突，数据库会统一选择一个版本作为最终版本，为了尽可能避免冲突，应该将内容合理的分散在多个文档，而不是都存放在一个文档中。</p>
<p>而且数据库以文档为最小单位，每次变更，都会触发同步。合理设计的文档结构，可以减少需要同步的文档数据量，提高性能。</p>
<h2 id="本地数据库"><a class="header-anchor" href="#本地数据库">#</a> 本地数据库</h2>
<h3 id="utools-db-put-doc"><a class="header-anchor" href="#utools-db-put-doc">#</a> <code>utools.db.put(doc)</code></h3>
<ul>
<li><code>doc</code> Object</li>
<li><code>返回</code> Object</li>
</ul>
<blockquote>
<p>执行该方法将会创建或更新数据库文档，文档内容不超过 1M</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建请求</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  _id<span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token string">"demo"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 返回 {id: "demo", ok: true, rev: "1-05c9b92e6f24287dc1f4ec79d9a34fa8"}</span>

<span class="token comment">// 更新请求</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  _id<span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
  _rev<span class="token operator">:</span> <span class="token string">"1-05c9b92e6f24287dc1f4ec79d9a34fa8"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>_id</code> 代表这个文档在数据库中唯一值，如果值不存在，则会创建一个新的文档，如果值已经存在，则会进行更新。你可能已经注意到，返回对象中包含一个 <code>rev</code> 属性，这是代表此文档的版本，每次对文档进行更新时，都要带上最新的版本号，否则更新将失败，版本化的意义在于解决同步时数据冲突。</p>
<p>另外需要注意，每次更新时都要传入完整的文档数据，无法对单个字段进行更新。</p>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p>在 uTools 的生命周期里， <code>onPluginReady</code> <strong>事件回调执行前无法操作所有和数据库相关的操作</strong>，如果在 <code>onPluginReady</code> 执行完成前调用了数据库相关的 API，代码将会抛出一个异常</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Uncaught Error: called after onPluginReady event
    at Object.get (/Applications/uTools.app/Contents/Resources/app.asar/dist/apisdk.js:273)
    at window.get (/Users/lanyuanxiaoyao/Project/squirrel-old/utools-server/dist/preload.js:160)
    at Xi.fetch (app.82c75e58.js:8)
    at lo.Ze (app.82c75e58.js:8)
    at new lo (app.82c75e58.js:8)
    at app.82c75e58.js:8
    at Object.&lt;anonymous> (app.82c75e58.js:8)
    at n (app.82c75e58.js:1)
    at Object.&lt;anonymous> (app.82c75e58.js:8)
    at n (app.82c75e58.js:1)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>建议将数据库初始化的操作放在 <code>onPluginReady</code> 函数内。</p>
</div>
<h3 id="utools-db-get-id"><a class="header-anchor" href="#utools-db-get-id">#</a> <code>utools.db.get(id)</code></h3>
<ul>
<li><code>id</code> String</li>
<li><code>返回</code> Object</li>
</ul>
<blockquote>
<p>执行该方法将会根据文档 ID 获取数据</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span>
<span class="token comment">// 返回 {_id: "demo", _rev: "3-9836c5c68af5aef618e17d615882942a", data: "demo"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-db-remove-doc"><a class="header-anchor" href="#utools-db-remove-doc">#</a> <code>utools.db.remove(doc)</code></h3>
<ul>
<li><code>doc</code> String | Object</li>
<li><code>返回</code> Object</li>
</ul>
<blockquote>
<p>执行该方法将会删除数据库文档，可以传入文档对象或文档 id 进行操作。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span>
<span class="token comment">// 返回 {id: "demo", ok: true, rev: "2-effe5dbc23dffc180d8411b23f3108fb"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-db-bulkdocs-docs"><a class="header-anchor" href="#utools-db-bulkdocs-docs">#</a> <code>utools.db.bulkDocs(docs)</code></h3>
<ul>
<li><code>docs</code> Array</li>
<li><code>返回</code> Array</li>
</ul>
<blockquote>
<p>执行该方法将会批量更新数据库文档，传入需要更改的文档对象合并成数组进行批量更新。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">bulkDocs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
  _id<span class="token operator">:</span> <span class="token string">"demo1"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
  _rev<span class="token operator">:</span> <span class="token string">"1-c8817a74e292eda4cba1a45924853af6"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  _id<span class="token operator">:</span> <span class="token string">"demo2"</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
  _rev<span class="token operator">:</span> <span class="token string">"1-f0399b42cc6123a9cc8503632ba7b3a7"</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">/* 返回
[{
  id: "demo1", ok: true, rev: "2-7857b2801bc0303d2cc0bb82e8afd796"
}, {
  id: "demo2", ok: true, rev: "2-7857b2801bc0303d2cc0bb82e8afd796"
}]
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="utools-db-alldocs-key"><a class="header-anchor" href="#utools-db-alldocs-key">#</a> <code>utools.db.allDocs(key)</code></h3>
<ul>
<li><code>key</code> String | Array</li>
<li><code>返回</code> Array</li>
</ul>
<blockquote>
<p>执行该方法将会获取所有数据库文档，如果传入字符串，则会返回以字符串开头的文档，也可以传入指定 ID 的数组，不传入则为获取所有文档。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取所有文档</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">allDocs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 传入字符串，则返回id以 demo 开头的文档</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">allDocs</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span>
<span class="token comment">/* 返回
[{
  _id: "demo/123", _rev: "2-7857b2801bc0303d2cc0bb82e8afd796", data: "demo"
}, {
  _id: "demo/124", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"
}, {
  _id: "demo/125", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"
}]
*/</span>
<span class="token comment">// 根据id数组请求</span>
utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">allDocs</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">"demo1"</span><span class="token punctuation">,</span>
  <span class="token string">"demo2"</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">/* 返回
[{
  _id: "demo1", _rev: "2-7857b2801bc0303d2cc0bb82e8afd796", data: "demo"
}, {
  _id: "demo2", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"
}]
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="utools-db-postattachment-docid-attachment-type"><a class="header-anchor" href="#utools-db-postattachment-docid-attachment-type">#</a> <code>utools.db.postAttachment(docId, attachment, type)</code></h3>
<ul>
<li>
<p><code>docId</code> String</p>
<blockquote>
<p>文档 ID</p>
</blockquote>
</li>
<li>
<p><code>attachment</code> Buffer | Uint8Array</p>
<blockquote>
<p>附件，最大 20M</p>
</blockquote>
</li>
<li>
<p><code>type</code> String</p>
<blockquote>
<p>附件类型，比如：image/png, text/plain</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Object</p>
</li>
</ul>
<blockquote>
<p>存储附件到新文档，只能新建存储附件不能用于更新，附件最大不超过 20M</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> testTxtBuffer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'/path/to/test.txt'</span><span class="token punctuation">)</span>
  utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">postAttachment</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">,</span> testTxtBuffer<span class="token punctuation">,</span> <span class="token string">'text/plain'</span><span class="token punctuation">)</span>
  <span class="token comment">// 返回 {id: "demo", ok: true, rev: "1-44055137915c41c080fc920a8470e14b"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="utools-db-getattachment-docid"><a class="header-anchor" href="#utools-db-getattachment-docid">#</a> <code>utools.db.getAttachment(docId)</code></h3>
<ul>
<li>
<p><code>docId</code> String</p>
<blockquote>
<p>文档 ID</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Unit8Array</p>
</li>
</ul>
<blockquote>
<p>获取附件</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> buf <span class="token operator">=</span> utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">getAttachment</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-db-getattachmenttype-docid"><a class="header-anchor" href="#utools-db-getattachmenttype-docid">#</a> <code>utools.db.getAttachmentType(docId)</code></h3>
<ul>
<li>
<p><code>docId</code> String</p>
<blockquote>
<p>文档 ID</p>
</blockquote>
</li>
<li>
<p><code>返回</code> String</p>
</li>
</ul>
<blockquote>
<p>获取附件类型</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  utools<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">getAttachmentType</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">)</span>
  <span class="token comment">// 返回 'text/plain'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="dbstorage"><a class="header-anchor" href="#dbstorage">#</a> dbStorage</h2>
<p>在 本地数据库 api 基础上封装的值键对存储方式，供快速使用。</p>
<h3 id="utools-dbstorage-setitem-key-value"><a class="header-anchor" href="#utools-dbstorage-setitem-key-value">#</a> <code>utools.dbStorage.setItem(key, value)</code></h3>
<ul>
<li>
<p><code>key</code> String</p>
<blockquote>
<p>键名(同时为文档ID)</p>
</blockquote>
</li>
<li>
<p><code>value</code> Any</p>
<blockquote>
<p>键值(任意类型)</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>键值对存储，如果键名存在，则更新其对应的值</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'pai'</span><span class="token punctuation">,</span> <span class="token number">3.1415926</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="utools-dbstorage-getitem-key"><a class="header-anchor" href="#utools-dbstorage-getitem-key">#</a> <code>utools.dbStorage.getItem(key)</code></h3>
<ul>
<li>
<p><code>key</code> String</p>
<blockquote>
<p>键名(同时为文档ID)</p>
</blockquote>
</li>
<li>
<p><code>返回</code> Any</p>
</li>
</ul>
<blockquote>
<p>获取键名对应的值</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'pai'</span><span class="token punctuation">)</span>
<span class="token comment">// 返回 3.1415926</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="utools-dbstorage-removeitem-key"><a class="header-anchor" href="#utools-dbstorage-removeitem-key">#</a> <code>utools.dbStorage.removeItem(key)</code></h3>
<ul>
<li>
<p><code>key</code> String</p>
<blockquote>
<p>键名(同时为文档ID)</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>删除键值对(删除文档)</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>utools<span class="token punctuation">.</span>dbStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'pai'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>