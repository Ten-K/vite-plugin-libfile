import a from 'fs';
import { resolve } from 'path';

var e;function p(n){return {name:"lib-file",apply:"build",enforce:"post",configResolved(t){e=t;},writeBundle(t,r){if(!n){console.warn("must have at least one parameter.");return}if(!e.build||!e.build.lib){console.warn("vite-plugin-lifile only works in lib mode.");return}if(t.format!=="es")return;let l=Object.keys(r),f=l.filter(i=>n.paths.includes(i));if(!f.length){console.info("No specified file is found");return}for(let i of l){if(!r[i].isEntry)continue;let c=e.build.outDir||"dist",s=resolve(e.root,c,i),d=a.readFileSync(s,{encoding:"utf8"}),o="";f.forEach(u=>{o?o+=`import './${u}';
`:o=`import './${u}';
`;}),a.writeFileSync(s,`${o}
${d}`);}}}}

export { p as default };
