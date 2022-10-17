# vite-plugin-libfile

![Npm Version](https://img.shields.io/npm/v/vite-plugin-libfile)
![GitHub License](https://img.shields.io/github/license/Ten-K/vite-plugin-libfile)

**中文** | [English](./README.en-US.md)

此插件将使用如下`import`语句将指定的文件注入到入口文件:

```md
|-- dist  // 打包输出的文件夹
    |-- assets
    |   |-- index.xx.js
    |-- style.css
    |-- index.js // 入口文件
```

```js
// index.js
import './style.css'; 
import './assets/index.xx.js'; 
// 源代码 // ...
```

## 📦 安装

```bash
npm i vite-plugin-libfile -D
```

## 🚗 使用

```js
// vite.config.js 
import libFile from 'vite-plugin-libfile'; 
// https://vitejs.dev/config/ 
export default defineConfig({ 
  plugins: [ 
    // 任何其他插件
    libFile({
      paths: ['style.css', 'assets/index.xx.js'] // 指定文件路径（以打包输出文件夹为根路径）
    }) 
  ]
});
```

## ⚠️ 警告

此插件仅适用于库模式和es格式构建.

## 💫 致谢

此插件的灵感来源于[vite-plugin-libcss](https://github.com/wxsms/vite-plugin-libcss)，是它的增强版。
