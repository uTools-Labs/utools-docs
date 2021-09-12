<template><h1 id="utools-server-api"><a class="header-anchor" href="#utools-server-api">#</a> uTools Server API</h1>
<p>通过 uTools 的服务端 API，可以将你的应用和 uTools 用户关联，实现帐号互通、接收支付通知、查询用户支付记录等，为保护密钥安全，请仅在服务端调用接口。</p>
<h2 id="获取用户基础信息接口"><a class="header-anchor" href="#获取用户基础信息接口">#</a> 获取用户基础信息接口</h2>
<p>此接口用于获取 uTools 用户的基础信息、验证用户真实性，与第三方系统进行帐号打通，实现系统间免登录跳转等。</p>
<h3 id="_1-1-接口说明"><a class="header-anchor" href="#_1-1-接口说明">#</a> 1.1 接口说明</h3>
<p><strong>调用地址</strong>：<code>https://open.u-tools.cn/baseinfo </code></p>
<p><strong>请求方式</strong>：<code>get</code></p>
<p><strong>Header</strong>： <code>Accept:application/json</code>  请求头中须添加此项，否则请求将失败</p>
<p><strong>请求参数</strong>：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:center">是否必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">plugin_id</td>
<td style="text-align:center">是</td>
<td style="text-align:left">插件 ID</td>
</tr>
<tr>
<td style="text-align:left">access_token</td>
<td style="text-align:center">是</td>
<td style="text-align:left">uTools 用户的 access_token</td>
</tr>
<tr>
<td style="text-align:left">timestamp</td>
<td style="text-align:center">是</td>
<td style="text-align:left">时间戳（秒），误差需小于 10 分钟</td>
</tr>
<tr>
<td style="text-align:left">sign</td>
<td style="text-align:center">是</td>
<td style="text-align:left">签名</td>
</tr>
</tbody>
</table>
<h3 id="_1-2-获取当前用户临时-access-token"><a class="header-anchor" href="#_1-2-获取当前用户临时-access-token">#</a> 1.2 获取当前用户临时 access_token</h3>
<p>在 uTools 客户端中调用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取用户服务端临时令牌，2 小时内有效</span>
utools<span class="token punctuation">.</span><span class="token function">fetchUserServerTemporaryToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> access_token <span class="token operator">=</span> res<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-3-签名方法"><a class="header-anchor" href="#_1-3-签名方法">#</a> 1.3 签名方法</h3>
<ol>
<li>
<p>对请求参数按参数名升序排序</p>
</li>
<li>
<p>对参数内容进行 <code>url_encode</code> 编码后，组合成 URL 参数形式的字符串，如：<code>access_token=aaaaaaa&amp;plugin_id=ccccc&amp;timestamp=1624329435</code></p>
</li>
<li>
<p>使用 HMAC 方法对字符串生成带有密钥的哈希值，得到签名</p>
</li>
</ol>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">// 以下为 php 代码演示签名过程</span>
<span class="token comment">// 参数</span>
<span class="token variable">$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string double-quoted-string">"plugin_id"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"zueadppw"</span><span class="token punctuation">,</span> <span class="token comment">// 可在开发者插件中获得</span>
  <span class="token string double-quoted-string">"access_token"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"user access_token 32位"</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">"timestamp"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"1624329435"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">// 1. 按照键名对数组进行升序排序</span>
<span class="token function">ksort</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 生成 URL-encode 之后的请求字符串</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 使用 HMAC 方法生成带有密钥的哈希值</span>
<span class="token variable">$secret</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"your secret 32位"</span><span class="token punctuation">;</span> <span class="token comment">// secret 在开发者插件中通过重置获取</span>
<span class="token variable">$sign</span> <span class="token operator">=</span> <span class="token function">hash_hmac</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"sha256"</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">,</span> <span class="token variable">$secret</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_1-4-返回值"><a class="header-anchor" href="#_1-4-返回值">#</a> 1.4 返回值</h3>
<p>若调用成功（http 状态码 200），将返回如下信息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"avatar"</span><span class="token operator">:</span> <span class="token string">"https://res.u-tools.cn/assets/avatars/eZCBIawAkspLw8Xg.png"</span><span class="token punctuation">,</span>
        <span class="token property">"member"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 是否 uTools 会员（0: 否，1: 是）</span>
        <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"却步."</span><span class="token punctuation">,</span>
        <span class="token property">"open_id"</span><span class="token operator">:</span> <span class="token string">"00a50cd81c37c4e381e8161b2d762158"</span><span class="token punctuation">,</span> <span class="token comment">// uTools 用户 ID, 对于此插件不变且唯一</span>
        <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token number">1624329616</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"4dbf21a9d5a0f0e3906a0180522fd6393b4e91f738d57cafddf309afc6c547bb"</span> <span class="token comment">// 签名算法与 1.3 相同</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>若调用失败，将返回如下信息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"The given data was invalid."</span><span class="token punctuation">,</span> <span class="token comment">// message 字段始终存在</span>
    <span class="token property">"errors"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 可能没有详细错误信息</span>
        <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"access token 必须是 32 个字符。"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>HTTP 状态码说明</p>
<table>
<thead>
<tr>
<th style="text-align:center">http 状态码</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">200</td>
<td style="text-align:center">成功返回</td>
</tr>
<tr>
<td style="text-align:center">400</td>
<td style="text-align:center">客户端错误</td>
</tr>
<tr>
<td style="text-align:center">401</td>
<td style="text-align:center">未知用户（sign 错误，access_token 错误等）</td>
</tr>
<tr>
<td style="text-align:center">403</td>
<td style="text-align:center">无权限访问（access_token 过期）</td>
</tr>
<tr>
<td style="text-align:center">404</td>
<td style="text-align:center">未找到用户（不存在此用户或违反 uTools 相关协议被禁用）</td>
</tr>
<tr>
<td style="text-align:center">422</td>
<td style="text-align:center">请求的参数未通过验证</td>
</tr>
<tr>
<td style="text-align:center">500</td>
<td style="text-align:center">uTools 暂时无法提供服务</td>
</tr>
</tbody>
</table>
<h2 id="用户支付成功回调接口"><a class="header-anchor" href="#用户支付成功回调接口">#</a> 用户支付成功回调接口</h2>
<p>当用户通过 uTools 在你的插件内完成支付，且在开发者工具中配置了回调地址，在收到付款时，会将信息推送到配置的回调地址。</p>
<h3 id="_2-1-接口说明"><a class="header-anchor" href="#_2-1-接口说明">#</a> 2.1 接口说明</h3>
<p><strong>请求方式</strong>：<code>post</code></p>
<p><strong>Header</strong>：<code>contentType: application/json</code></p>
<p><strong>请求参数</strong>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"attach"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 附加数据</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token string">"会员1年"</span><span class="token punctuation">,</span> <span class="token comment">// 支付内容</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2021-06-18 16:42:16"</span><span class="token punctuation">,</span> <span class="token comment">// 订单生成时间</span>
        <span class="token property">"goods_id"</span><span class="token operator">:</span> <span class="token string">"6n193s7P95p9gA13786YkwQ5oxHpVW4f"</span><span class="token punctuation">,</span> <span class="token comment">// 商品ID</span>
        <span class="token property">"open_id"</span><span class="token operator">:</span> <span class="token string">"a331127d654761ac91d086b942aae7b6"</span><span class="token punctuation">,</span> <span class="token comment">// uTools 用户 ID</span>
        <span class="token property">"order_id"</span><span class="token operator">:</span> <span class="token string">"KMFSOZt5cMe5A0ClkdCAAyPasyXZJzP6"</span><span class="token punctuation">,</span> <span class="token comment">// uTools 订单号</span>
        <span class="token property">"out_order_id"</span><span class="token operator">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span> <span class="token comment">// 外部订单号</span>
        <span class="token property">"paid_at"</span><span class="token operator">:</span> <span class="token string">"2021-06-18 16:42:36"</span><span class="token punctuation">,</span> <span class="token comment">// 用户支付时间</span>
        <span class="token property">"pay_fee"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 支付金额（分）</span>
        <span class="token property">"plugin_id"</span><span class="token operator">:</span> <span class="token string">"FFFFFFFF"</span><span class="token punctuation">,</span> 
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 是否支付（0: 未支付，10: 已支付）</span>
        <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token number">1624346603</span> <span class="token comment">// 请求发送时间戳</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"53e8ab69b940483abd04427fdaf2de9b5294509943df5393b7bf1913af9055fa"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_2-2-注意事项"><a class="header-anchor" href="#_2-2-注意事项">#</a> 2.2 注意事项</h3>
<ol>
<li>当处理完成后，请返回字符串 <code>SUCCESS</code></li>
<li>如果返回值为其他，uTools 会延时后再次通知，最多通知 5 次，时间间隔 [15, 30, 60, 300, 600] 秒。</li>
<li>通知最长等待 10 秒。</li>
<li>避免消息伪造，请务必验证 sign，签名方式与获取用户基础信息接口 1.3 一致</li>
</ol>
<h2 id="支付订单查询接口"><a class="header-anchor" href="#支付订单查询接口">#</a> 支付订单查询接口</h2>
<p>此接口用于主动查询订单支付状态。</p>
<h4 id="_3-1-接口说明"><a class="header-anchor" href="#_3-1-接口说明">#</a> 3.1 接口说明</h4>
<p><strong>调用地址</strong>: <code>https://open.u-tools.cn/payments/record</code></p>
<p><strong>请求方式</strong>: <code>get</code></p>
<p><strong>Header</strong>: <code>Accept:application/json</code>  请求头中须添加此项，否则请求将失败</p>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:center">是否必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">plugin_id</td>
<td style="text-align:center">是</td>
<td style="text-align:left">插件ID</td>
</tr>
<tr>
<td style="text-align:left">out_order_id</td>
<td style="text-align:center">是</td>
<td style="text-align:left">第三方订单号</td>
</tr>
<tr>
<td style="text-align:left">timestamp</td>
<td style="text-align:center">是</td>
<td style="text-align:left">时间戳（秒），误差需小于 10 分钟</td>
</tr>
<tr>
<td style="text-align:left">sign</td>
<td style="text-align:center">是</td>
<td style="text-align:left">签名，与 1.3 签名方法一致</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-返回值"><a class="header-anchor" href="#_3-2-返回值">#</a> 3.2 返回值</h3>
<p>若调用成功（http 状态码 200），将返回如下信息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"attach"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 附加数据</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token string">"会员1年"</span><span class="token punctuation">,</span> <span class="token comment">// 支付内容</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2021-06-18 16:42:16"</span><span class="token punctuation">,</span> <span class="token comment">// 订单生成时间</span>
        <span class="token property">"goods_id"</span><span class="token operator">:</span> <span class="token string">"6n193s7P95p9gA13786YkwQ5oxHpVW4f"</span><span class="token punctuation">,</span> <span class="token comment">// 商品ID</span>
        <span class="token property">"open_id"</span><span class="token operator">:</span> <span class="token string">"a331127d654761ac91d086b942aae7b6"</span><span class="token punctuation">,</span> <span class="token comment">// uTools 用户 ID</span>
        <span class="token property">"order_id"</span><span class="token operator">:</span> <span class="token string">"KMFSOZt5cMe5A0ClkdCAAyPasyXZJzP6"</span><span class="token punctuation">,</span> <span class="token comment">// uTools 订单号</span>
        <span class="token property">"out_order_id"</span><span class="token operator">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span> <span class="token comment">// 外部订单号</span>
        <span class="token property">"paid_at"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 用户支付时间</span>
        <span class="token property">"pay_fee"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 支付金额（分）</span>
        <span class="token property">"plugin_id"</span><span class="token operator">:</span> <span class="token string">"FFFFFFFF"</span><span class="token punctuation">,</span> 
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 是否支付（0: 未支付，10: 已支付）</span>
        <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token number">1624346603</span> <span class="token comment">// 请求发送时间戳</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"dbb3d05f6e794ca3b2bc2fa7ef45c3f7cd6a3b20c601b37317863b67998d535e"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>HTTP 状态码说明</p>
<table>
<thead>
<tr>
<th style="text-align:center">http 状态码</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">200</td>
<td style="text-align:center">成功返回</td>
</tr>
<tr>
<td style="text-align:center">400</td>
<td style="text-align:center">客户端错误</td>
</tr>
<tr>
<td style="text-align:center">401</td>
<td style="text-align:center">未知用户（sign 错误）</td>
</tr>
<tr>
<td style="text-align:center">403</td>
<td style="text-align:center">无权限访问（timestamp 已过期）</td>
</tr>
<tr>
<td style="text-align:center">404</td>
<td style="text-align:center">未找到插件</td>
</tr>
<tr>
<td style="text-align:center">422</td>
<td style="text-align:center">请求的参数未通过验证</td>
</tr>
<tr>
<td style="text-align:center">500</td>
<td style="text-align:center">uTools 暂时无法提供服务</td>
</tr>
</tbody>
</table>
<h2 id="创建商品接口"><a class="header-anchor" href="#创建商品接口">#</a> 创建商品接口</h2>
<p>此接口用于动态创建商品，主要解决不固定金额商品问题，一般为一次性使用，通过此 API 创建的商品不会出现在开发者工具的商品列表中。</p>
<h4 id="_3-1-接口说明-1"><a class="header-anchor" href="#_3-1-接口说明-1">#</a> 3.1 接口说明</h4>
<p><strong>调用地址</strong>: <code>https://open.u-tools.cn/goods</code></p>
<p><strong>请求方式</strong>: <code>post</code></p>
<p><strong>Header</strong>: <code>Accept:application/json</code>  请求头中须添加此项，否则请求将失败</p>
<p>请求参数：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:center">是否必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">plugin_id</td>
<td style="text-align:center">是</td>
<td style="text-align:left">插件ID</td>
</tr>
<tr>
<td style="text-align:left">total_fee</td>
<td style="text-align:center">是</td>
<td style="text-align:left">商品总金额（分）</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:center">是</td>
<td style="text-align:left">商品名称</td>
</tr>
<tr>
<td style="text-align:left">timestamp</td>
<td style="text-align:center">是</td>
<td style="text-align:left">时间戳（秒），误差需小于 10 分钟</td>
</tr>
<tr>
<td style="text-align:left">sign</td>
<td style="text-align:center">是</td>
<td style="text-align:left">签名，与 1.3 签名方法一致</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-返回值-1"><a class="header-anchor" href="#_3-2-返回值-1">#</a> 3.2 返回值</h3>
<p>若调用成功（http 状态码 200），将返回如下信息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ZyxrbSpWBH360pSWG0ueYI3rKSWXMcic"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>返回内容为goods_id，可在 <RouterLink to="/developer/api.html#openpayment-options-callback">openPayment</RouterLink> 中使用</p>
</blockquote>
<p>HTTP 状态码说明</p>
<table>
<thead>
<tr>
<th style="text-align:center">http 状态码</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">200</td>
<td style="text-align:center">成功返回</td>
</tr>
<tr>
<td style="text-align:center">400</td>
<td style="text-align:center">客户端错误</td>
</tr>
<tr>
<td style="text-align:center">401</td>
<td style="text-align:center">未知用户（sign 错误）</td>
</tr>
<tr>
<td style="text-align:center">403</td>
<td style="text-align:center">无权限访问（timestamp 已过期）</td>
</tr>
<tr>
<td style="text-align:center">404</td>
<td style="text-align:center">未找到插件</td>
</tr>
<tr>
<td style="text-align:center">422</td>
<td style="text-align:center">请求的参数未通过验证</td>
</tr>
<tr>
<td style="text-align:center">500</td>
<td style="text-align:center">uTools 暂时无法提供服务</td>
</tr>
</tbody>
</table>
</template>