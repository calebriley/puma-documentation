// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PUMA Docs',
			sidebar: [
				{
					label: 'Grammar',
					items: [{ autogenerate: { directory: 'grammar' }}],
				},
				{
					label: 'Proto-Language',
					items: [{ autogenerate: { directory: 'protolanguage' }}],
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/styles.css',
			],
		}),
	],
});
