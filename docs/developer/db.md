# uTools DB API

传统的 B/S 结构的程序中，除了前端的开发之外，可能还需要有一台服务器、一门后端语言和一个数据库来处理和存储用户数据，这会带来很大的维护成本和可用性的问题。

uTools 的很多插件就像是一个轻型的应用程序，总是会碰到一些数据需要持久化存储的场景，为了解决这个问题，我们提供了一个 nosql 数据库系统，它可以很方便的使用，数据存储在本地计算机系统，如果用户开启同步，可在多个设备之间实现秒级同步。

数据库设计为离线优先，在没有网络时程序依然可以提供完整的服务。但在多个设备编辑同一个文档时，将产生冲突，数据库会统一选择一个版本作为最终版本，为了尽可能避免冲突，应该将内容合理的分散在多个文档，而不是都存放在一个文档中。

而且数据库以文档为最小单位，每次变更，都会触发同步。合理设计的文档结构，可以减少需要同步的文档数据量，提高性能。

## 本地数据库


### `utools.db.put(doc)`

- `doc` Object  
- `返回` Object

> 执行该方法将会创建或更新数据库文档，文档内容不超过 1M

```js
// 创建请求
utools.db.put({
  _id: "demo",
  data: "demo"
})
// 返回 {id: "demo", ok: true, rev: "1-05c9b92e6f24287dc1f4ec79d9a34fa8"}

// 更新请求
utools.db.put({
  _id: "demo",
  data: "demo",
  _rev: "1-05c9b92e6f24287dc1f4ec79d9a34fa8"
})
```

`_id` 代表这个文档在数据库中唯一值，如果值不存在，则会创建一个新的文档，如果值已经存在，则会进行更新。你可能已经注意到，返回对象中包含一个 `rev` 属性，这是代表此文档的版本，每次对文档进行更新时，都要带上最新的版本号，否则更新将失败，版本化的意义在于解决同步时数据冲突。

另外需要注意，每次更新时都要传入完整的文档数据，无法对单个字段进行更新。

::: danger 注意
在 uTools 的生命周期里， `onPluginReady` **事件回调执行前无法操作所有和数据库相关的操作**，如果在 `onPluginReady` 执行完成前调用了数据库相关的 API，代码将会抛出一个异常

```
Uncaught Error: called after onPluginReady event
    at Object.get (/Applications/uTools.app/Contents/Resources/app.asar/dist/apisdk.js:273)
    at window.get (/Users/lanyuanxiaoyao/Project/squirrel-old/utools-server/dist/preload.js:160)
    at Xi.fetch (app.82c75e58.js:8)
    at lo.Ze (app.82c75e58.js:8)
    at new lo (app.82c75e58.js:8)
    at app.82c75e58.js:8
    at Object.<anonymous> (app.82c75e58.js:8)
    at n (app.82c75e58.js:1)
    at Object.<anonymous> (app.82c75e58.js:8)
    at n (app.82c75e58.js:1)
```

建议将数据库初始化的操作放在 `onPluginReady` 函数内。
:::

### `utools.db.get(id)`

- `id` String  
- `返回` Object

> 执行该方法将会根据文档 ID 获取数据

```js
utools.db.get("demo")
// 返回 {_id: "demo", _rev: "3-9836c5c68af5aef618e17d615882942a", data: "demo"}
```

### `utools.db.remove(doc)`

- `doc` String | Object 
- `返回` Object

> 执行该方法将会删除数据库文档，可以传入文档对象或文档 id 进行操作。

```js
utools.db.remove("demo")
// 返回 {id: "demo", ok: true, rev: "2-effe5dbc23dffc180d8411b23f3108fb"}
```

### `utools.db.bulkDocs(docs)`

- `docs` Array  
- `返回` Array

> 执行该方法将会批量更新数据库文档，传入需要更改的文档对象合并成数组进行批量更新。

```js
utools.db.bulkDocs([{
  _id: "demo1",
  data: "demo",
  _rev: "1-c8817a74e292eda4cba1a45924853af6"
}, {
  _id: "demo2",
  data: "demo",
  _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7"
}])
/* 返回
[{
  id: "demo1", ok: true, rev: "2-7857b2801bc0303d2cc0bb82e8afd796"
}, {
  id: "demo2", ok: true, rev: "2-7857b2801bc0303d2cc0bb82e8afd796"
}]
*/
```

### `utools.db.allDocs(key)`

- `key` String | Array
- `返回` Array

> 执行该方法将会获取所有数据库文档，如果传入字符串，则会返回以字符串开头的文档，也可以传入指定 ID 的数组，不传入则为获取所有文档。

```js
// 获取所有文档
utools.db.allDocs()

// 传入字符串，则返回id以 demo 开头的文档
utools.db.allDocs("demo")
/* 返回
[{
  _id: "demo/123", _rev: "2-7857b2801bc0303d2cc0bb82e8afd796", data: "demo"
}, {
  _id: "demo/124", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"
}, {
  _id: "demo/125", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"
}]
*/
// 根据id数组请求
utools.db.allDocs([
  "demo1",
  "demo2"
])
/* 返回
[{
  _id: "demo1", _rev: "2-7857b2801bc0303d2cc0bb82e8afd796", data: "demo"
}, {
  _id: "demo2", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"
}]
*/
```

### `utools.db.postAttachment(docId, attachment, type)`

- `docId` String

  > 文档 ID

- `attachment` Buffer | Uint8Array

  > 附件，最大 20M

- `type` String

  > 附件类型，比如：image/png, text/plain

- `返回` Object

> 存储附件到新文档，只能新建存储附件不能用于更新，附件最大不超过 20M

```js
  const testTxtBuffer = require('fs').readFileSync('/path/to/test.txt')
  utools.db.postAttachment('demo', testTxtBuffer, 'text/plain')
  // 返回 {id: "demo", ok: true, rev: "1-44055137915c41c080fc920a8470e14b"}
```

### `utools.db.getAttachment(docId)`

- `docId` String

  > 文档 ID

- `返回` Unit8Array

> 获取附件

```js
  const buf = utools.db.getAttachment('demo')
  console.log(buf)
```

### `utools.db.getAttachmentType(docId)`

- `docId` String

  > 文档 ID 

- `返回` String

> 获取附件类型

```js
  utools.db.getAttachmentType('demo')
  // 返回 'text/plain'
```

## dbStorage

在 本地数据库 api 基础上封装的值键对存储方式，供快速使用。

### `utools.db.setItem(key, value)`

- `key` String 

  > 键名(同时为文档ID)

- `value` Any

  > 键值(任意类型)

> 键值对存储，如果键名存在，则更新其对应的值

```js
utools.db.setItem('pai', 3.1415926)
```

### `utools.db.getItem(key)`

- `key` String 

  > 键名(同时为文档ID)

- `返回` Any

> 获取键名对应的值

```js
utools.db.getItem('pai')
// 返回 3.1415926
```

### `utools.db.removeItem(key)`

- `key` String 

  > 键名(同时为文档ID)

> 删除键值对(删除文档)

```js
utools.db.removeItem('pai')
```
