import fs from 'fs'
import { resolve } from 'path'
import type { Plugin, ResolvedConfig } from 'vite'

interface Params {
  paths: string[]
}

let viteConfig: ResolvedConfig

module.exports = function libFile(params: Params): Plugin {
	return {
		name: 'lib-file',
		apply: 'build',
		enforce: 'post',

		configResolved(resolvedConfig: ResolvedConfig) {
			viteConfig = resolvedConfig
		},

		writeBundle(option, bundle) {
			if (!params) {
				// must have at least one parameter
				console.warn('must have at least one parameter.')
				return
			}
			if (!viteConfig.build || !viteConfig.build.lib) {
				// only for lib build
				console.warn('vite-plugin-lifile only works in lib mode.')
				return
			}
			if (option.format !== 'es') {
				// only for es built
				return
			}
			const files = Object.keys(bundle)
			const paths = files.filter((v) => params.paths.includes(v))
			if (!paths.length) {
				console.info('No specified file is found')
				return
			}
			for (const file of files) {
        // @ts-ignore
				if (!bundle[file].isEntry) {
					// only for entry
					continue
				}
				const outDir = viteConfig.build.outDir || 'dist'
				const filePath = resolve(viteConfig.root, outDir, file)
				const data = fs.readFileSync(filePath, {
					encoding: 'utf8'
				})
				let modeules = ''
				paths.forEach((path) => {
					modeules
						? (modeules += `import './${path}';\n`)
						: (modeules = `import './${path}';\n`)
				})
				fs.writeFileSync(filePath, `${modeules}\n${data}`)
			}
		}
	}
}

module.exports.default = module.exports;
