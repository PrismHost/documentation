import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Prism Host Knowledgebase',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			social: {
				discord: 'https://discord.gg/prismhost',
			},
			editLink: {
				baseUrl: 'https://github.com/PrismHost/documentation/tree/main/',
			},
			sidebar: [
				{
					label: 'Frequently Asked Questions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'FAQ', link: '/faq/' },
					],
				},
				{
					label: 'Guides',
					collapsed: false,
					autogenerate: { directory: 'guides', collapsed: true, },
				},
				{ label: 'Website', link: 'https://prism-host.com' },
				{ label: 'Client Portal', link: 'https://client.prism-host.com' },
				{ label: 'Discord', link: 'https://discord.gg/prism' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			favicon: './src/assets/favicon.png'
		}),
	],
});
