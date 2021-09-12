<template><h1 id="faq"><a class="header-anchor" href="#faq">#</a> FAQ</h1>
<p>本文档收集了部分用户在使用 uTools 过程中遇到的问题，如果这里没有你遇到的问题，可以在 uTools 官方论坛里发帖寻求帮助。</p>
<h3 id="安装时遇到了「无法打开-utools-因为-apple-无法检查是否包含恶意软体」的情况怎么办"><a class="header-anchor" href="#安装时遇到了「无法打开-utools-因为-apple-无法检查是否包含恶意软体」的情况怎么办">#</a> 安装时遇到了「无法打开 uTools，因为 Apple 无法检查是否包含恶意软体」的情况怎么办？<Badge text="macOS"/></h3>
<p>依次打开「系统偏好设置」→「安全性与隐私」→「通用」，在页面底部选择「仍要安装」即可。</p>
<h3 id="如何使用「管理员」权限打开软件"><a class="header-anchor" href="#如何使用「管理员」权限打开软件">#</a> 如何使用「管理员」权限打开软件？<Badge text="Windows"/></h3>
<p>在 uTools 列表里选中要打开的软件，使用快捷键 <code>Ctrl + 回车（Enter）</code>打开即可。</p>
<h3 id="utools-搜不到绿色软件"><a class="header-anchor" href="#utools-搜不到绿色软件">#</a> uTools 搜不到绿色软件？</h3>
<p>找到该绿色软件的主程序，复制后呼出 uTools 输入框或拖动该文件到 uTools 输入框中，即可看到「加入到 uTools 搜索启动」的选项，确认后可在 uTools 列表中搜索到该软件。（文件和文件夹也可以添加）</p>
<h3 id="utools-会收费吗"><a class="header-anchor" href="#utools-会收费吗">#</a> uTools 会收费吗？</h3>
<p>uTools 目前采用会员付费制，基础功能永久免费使用。会员用户可以享受到包括「数据同步」、「超级面板」等功能。</p>
<h3 id="可以在公司环境使用吗"><a class="header-anchor" href="#可以在公司环境使用吗">#</a> 可以在公司环境使用吗？</h3>
<p>可以在任意环境使用 uTools 官网提供的公开版本，无须获得额外的授权。</p>
<p>如果您的公司有以下需求，可联系 <code>service@u.tools</code> 获得定制化方案。</p>
<blockquote>
<p>企业版：私有插件仅在企业内分发、定制开发插件等。</p>
</blockquote>
<blockquote>
<p>私有部署：如果您的公司处在离线环境，或因为安全要求需要离线部署。</p>
</blockquote>
<h3 id="为什么任务管理器中会有这么多名为「utools」的进程"><a class="header-anchor" href="#为什么任务管理器中会有这么多名为「utools」的进程">#</a> 为什么任务管理器中会有这么多名为「uTools」的进程？</h3>
<p>这些进程大部分为 uTools 的插件进程，uTools 的每个插件都会创建一个独立的进程来运行，目的是为了避免一个插件运行出错后导致其他插件甚至整个软件无法使用。</p>
<blockquote>
<p>在uTools主输入框输入<code>clear</code>，可以清理所有正在运行的插件.</p>
</blockquote>
<h3 id="安装时遇到了「进度条卡在一半」的情况怎么办"><a class="header-anchor" href="#安装时遇到了「进度条卡在一半」的情况怎么办">#</a> 安装时遇到了「进度条卡在一半」的情况怎么办？<Badge text="Windows"/></h3>
<p>导致这个问题的原因可能是由于旧版本的 uTools 未卸载干净，可尝试按照以下步骤进行处理。</p>
<ol>
<li>检查「程序与功能」界面中是否还有旧版本 uTools 安装项存在，如果存在旧版本，先卸载旧版本再重新安装新版本 uTools。</li>
<li>注册表残留问题 参考 <a href="https://yuanliao.info/d/2030" target="_blank" rel="noopener noreferrer">https://yuanliao.info/d/2030<OutboundLink/></a></li>
<li>检查 uTools 安装程序是否被「360」、「火绒」等杀毒软件阻止安装，请将 uTools 安装程序放入杀毒软件白名单后再重新安装新版本 uTools。</li>
</ol>
<h3 id="安装时遇到了「a-javascript-error-occurred-in-the-main-process」的情况怎么办"><a class="header-anchor" href="#安装时遇到了「a-javascript-error-occurred-in-the-main-process」的情况怎么办">#</a> 安装时遇到了「A JavaScript error occurred in the main process」的情况怎么办？<Badge text="Linux"/></h3>
<p>参考 <a href="https://yuanliao.info/u/51376" target="_blank" rel="noopener noreferrer">Aksuru<OutboundLink/></a>、<a href="https://yuanliao.info/u/51839" target="_blank" rel="noopener noreferrer">littlezhong<OutboundLink/></a> 和 <a href="https://yuanliao.info/u/34323" target="_blank" rel="noopener noreferrer">microcheiria<OutboundLink/></a> 在 uTools 论坛中提出的 <a href="https://yuanliao.info/d/1865" target="_blank" rel="noopener noreferrer">解决方案<OutboundLink/></a>。</p>
<h3 id="utools-是否会开源"><a class="header-anchor" href="#utools-是否会开源">#</a> uTools 是否会开源？</h3>
<p>uTools 为商业软件，暂无开源计划。</p>
</template>