import { sveltekit } from '@sveltejs/kit/vite';
import graphql from '@rollup/plugin-graphql';
import svg from '@poppanator/sveltekit-svg';
import svgoConfig from './svgo.config.js';
import strip from "@rollup/plugin-strip";

const IS_DEV = process.env.NODE_ENV === 'development';

/** @type {import('vite').UserConfig} */
export default ({mode}) => {
	return {
		plugins: [
			sveltekit(),
			graphql(),
			svg({
				svgoOptions: svgoConfig,
				includePaths: ["src/lib/assets/icons/", "src/lib/assets/logos/"]
			}),

			// Strip console.log and assert statements from production builds
			...(mode !== "development" ? [
				strip({
					functions: ['console.log', 'assert.*'],
					include: ['**/*.js', '**/*.svelte']
				})
			] : [])
		]
	};
}