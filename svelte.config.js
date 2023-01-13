import {resolve} from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

const IS_DEV = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			includePaths: ['src/scss', resolve('./node_modules')]
		},
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},
	}
};

export default config;
