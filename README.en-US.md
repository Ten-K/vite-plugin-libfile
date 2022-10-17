# vite-plugin-libfile

![Npm Version](https://img.shields.io/npm/v/vite-plugin-libfile)
![GitHub License](https://img.shields.io/github/license/Ten-K/vite-plugin-libfile)

**English** | [中文](./README.md)

This plugin will inject specified file into bundled js file using `import` statement like this:

```md
|-- dist  // packed output folder
    |-- assets
    |   |-- index.xx.js
    |-- style.css
    |-- index.js // entry file
```

```js
// bundled js file, with import specified file at top (if any) 
import './style.css'; 
import './assets/index.xx.js'; 
// rest of the file // ...
```

## 📦 Install

```bash
npm i vite-plugin-libfile -D
```

## 🚗 Usage

```js
// vite.config.js 
import libFile from 'vite-plugin-libfile'; 
// https://vitejs.dev/config/ 
export default defineConfig({ 
  plugins: [ 
    // any other plugins 
    libFile({
      paths: ['style.css', 'assets/index.xx.js'] // specified file path
    }) 
  ]
});
```

## ⚠️ Warning

Note that this plugin will only work with library-mode and es format build.

## 💫 Thanks

This plugin was inspired by [vite-plugin-libcss](https://github.com/wxsms/vite-plugin-libcss), it's an enhanced version of it.
