<template><h1 id="注意事项"><a class="header-anchor" href="#注意事项">#</a> 注意事项</h1>
<ol>
<li>uTools 插件中不受跨域影响，可以访问任意网址。</li>
<li>无需网页考虑兼容性问题，基于（Chromium 91 和 Node 14）</li>
<li>在插件开发模式中，可以使用 http 协议加载远程资源（ js、css ）。当打包成 uTools 插件后，所有的静态资源都应该在包内，否则会加载失败。</li>
<li>在打包目录中，请勿包含 <code>.git</code> <code>.js.map</code> <code>.css.map</code> 文件。</li>
</ol>
</template>