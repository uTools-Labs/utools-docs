# 完整配置

## 基本配置

### `main`

- 类型： `String`

入口文件，当该配置为空时，表示插件为[模板插件](./template.html)。 `main` 与 `preload` 至少存在其一

```json
"main": "index.html"
```

### `version`

- 类型： `String`

插件的版本，需要符合 [Semver](https://semver.org/lang/zh-CN/)（语义化版本）规范。一般情况下形如：`主.次.修订`即可。此为`必选项`

```json
"version": "0.0.1"
```



### `preload`

- 类型： `String`

这是一个关键文件，你可以在此文件内调用 uTools、 nodejs、 electron 提供的 api。 `main` 与 `preload` 至少存在其一

```json
"preload": "preload.js"
```

### `logo`

- 类型： `String`

此插件的图标，此为`必选项`

```json
"logo": "logo.png"
```

### `platform`

- 类型： `Array`
- 可选值： `win32`, `darwin`, `linux`

插件支持的平台，此为`可选项`，默认为全平台支持

```json
"platform": ["win32", "darwin", "linux"]
```

## 开发模式

### `development`

- 类型： `Object`

在开发模式下，可使用 `development` 配置覆盖 `main`的值，在打包时，此字段会被删除

### `development.main`

- 类型： `String`

在开发模式下，入口文件可以是 http 协议，可以配合 webpack 等工具，在开发阶段进行热更新。

> preload.js 代码变更后无法自动热更新，可以将插件设置成「隐藏插件后完全退出」，再次进入插件就可以应用最新的 preload.js 代码

```json
"development": {
    "main": "http://127.0.0.1:8000/index.html"
}
```

## 插件设置

### `pluginSetting`

- 类型： `Object`

插件设置，此为`可选项`

### `pluginSetting.single`

- 类型： `Boolean`
- 默认： `true`

插件是否允许多开（默认不允许）。多开方式：分离插件后，再次创建

```json
"pluginSetting": {
    "single": false
}
```

### `pluginSetting.height`

- 类型： `Number`

插件高度。可动态修改（[参考](./api.html#setexpendheight-height)），该项被设置后，用户则不能再调整高度

```json
"pluginSetting": {
    "height": 0
}
```

## 插件功能

### `features`

- 类型： `Array<Object>`

features 描述了当 uTools 主输入框内容产生变化时，此插件是否显示在搜索结果列表中，一个插件可以有多个功能，一个功能可以提供多个命令供用户搜索

### `features.code`

- 类型： `String`

插件提供的某个功能的唯一标示，此为`必选项`，且插件内不可重复

### `features.explain`

- 类型： `String`

对此功能的说明，将在搜索列表对应位置中显示

### `features.icon`

- 类型： `String`

功能图标, 相对路径。支持 png、jpg、svg 格式，此为`可选项`

### `features.platform`

- 类型： `Array`
- 可选值： `win32`,  `darwin`,  `linux`

功能适配平台 `["win32", "darwin", "linux"]`，此为`可选项`

### `features.cmds`

- 类型： `Array<String|Object>`

该功能下可响应的命令集，支持 6 种类型，由 `cmds` 的类型或 `cmds.type` 决定，包括如下类型：

#### 简单文本

该模式下将直接匹配 uTools 输入框中输入的文本

- 结构：

```json
"cmds": [ "文本", "text" ]
```

#### 正则文本

通过正则模式匹配输入框中的文本

- 结构：

```json
"cmds": [
    {
        // 类型（必须）
        "type": "regex",
        // 文字说明，在搜索列表中出现（必须）
        "label": "文本正则匹配",
        // 正则表达式字符串
        "match": "/xxx/i",
        // 长度限制（主输入框中的字符不少于） (可选)
        "minLength": 1,
        // 长度限制（不多于） (可选)
        "maxLength": 1
    }
]
```

#### 图片

当拖拽到 uTools 窗口的文件或剪贴板数据（文件路径或截图）为图片格式时触发

- 结构：

```json
"cmds": [
    {
        // 类型（必须）
        "type": "img",
        // 文字说明，在搜索列表中出现（必须）
        "label": "图片匹配"
    }
]
```

#### 文件、文件夹

当剪贴板中为文件、文件夹路径或将文件、文件夹拖拽到 uTools 窗口时触发

- 结构：

```json
"cmds": [
    {
        // 类型（必须）
        "type": "files",
        // 文字说明，在搜索列表中出现（必须）
        "label": "文件匹配",
        // 支持 file 或 directory (可选)
        "fileType": "file",
        // 文件名称正则匹配  (可选)
        "match": "/xxx/",
        // 文件数量限制（不少于） (可选)
        "minLength": 1,
        // 文件数量限制（不多于） (可选)
        "maxLength": 1
    },
]
```

#### 窗口

根据呼出 uTools 前的活动窗口匹配 

:::tip
可使用 uTools `窗口信息` 关键字查看窗口信息 
:::

- 结构：

```json
"cmds": [
    {
        // 类型（必须）
        "type": "window",
        // 文字说明，在搜索列表中出现（必须）
        "label": "窗口动作",
        // 窗口匹配规则
        "match": {
            // 应用 (可选)
            "app": ["xxx.app", "xxx.exe"],
            // 匹配窗口标题的正则 (有配置时应用也必须配置) (可选)
            "title": "/xxxx/",
            // 窗口类 Windows 专有 (可选)
            "class": ["xxx"]
        }
    }
]
```

#### 无匹配

当 uTools 主输入框中的关键字无任何匹配项时触发

- 结构：

```json
"cmds": [
    {
        // 类型（必须）
        "type": "over",
        // 文字说明，在搜索列表中出现（必须）
        "label": "无匹配时",
        // 排除的正则 (可选)
        "exclude": "/xxx/i",
        // 长度限制（主输入框中的字符不少于） (可选)
        "minLength": 1,
        // 长度限制（不多于） (可选)
        "maxLength": 1
    }
]
```

## 完整配置下载

完整配置文件[下载](../plugin.json)