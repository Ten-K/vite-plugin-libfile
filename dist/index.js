'use strict';

var a = require('fs');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var a__default = /*#__PURE__*/_interopDefaultLegacy(a);

var e;function p(n){return {name:"lib-file",apply:"build",enforce:"post",configResolved(t){e=t;},writeBundle(t,r){if(!n){console.warn("must have at least one parameter.");return}if(!e.build||!e.build.lib){console.warn("vite-plugin-lifile only works in lib mode.");return}if(t.format!=="es")return;let l=Object.keys(r),f=l.filter(i=>n.paths.includes(i));if(!f.length){console.info("No specified file is found");return}for(let i of l){if(!r[i].isEntry)continue;let c=e.build.outDir||"dist",s=path.resolve(e.root,c,i),d=a__default["default"].readFileSync(s,{encoding:"utf8"}),o="";f.forEach(u=>{o?o+=`import './${u}';
`:o=`import './${u}';
`;}),a__default["default"].writeFileSync(s,`${o}
${d}`);}}}}

module.exports = p;
