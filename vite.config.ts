import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import UnocssPlugin from '@unocss/vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url)).replace(/\/+$/,'')

export default defineConfig({
	plugins: [
		solidPlugin(),
		UnocssPlugin({
			// your config or in uno.config.ts
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/index.tsx'),
			name: 'jBChat',
			formats: ['es', 'iife'],
			// the proper extensions will be added
			fileName: 'jbchat',
		},
		target: 'esnext',
		minify: 'esbuild',
	},
})
