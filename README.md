# vite-plugin-libfile

This plugin will inject specified file into bundled js file using `import` statement like this:

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
import libFile from 'vite-plugin-libfile'; // https://vitejs.dev/config/ 
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
