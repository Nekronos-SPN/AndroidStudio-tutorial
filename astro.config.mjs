import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://nekronos-spn.github.io',
	base: '/AndroidStudio-tutorial',
	integrations: [
		starlight({
			title: 'Android Chronometer',
			sidebar: [
				{
					label: 'Android Studio IDE',
					items: [
						{ label: 'Installation', link: './guides/installation/' },
						{ label: 'IDE layout', link: './guides/layout/' },
						{ label: 'Project structure', link: './guides/structure/' },
					],
				},
				{
					label: 'Running Your Program',
					items: [
						{ label: 'Compilation', link: './guides/compilation/' },
						{ label: 'Execution', link: './guides/execution/' },
					],
				},
				{
					label: 'Developing The App',
					items: [
					],
				},
				{
					label: 'Next Steps',
					items: [
						{ label: 'Recommended readings', link: './additional/readings/' },
						{ label: 'Cool projects', link: './additional/installation/' },
					],
				},
			],
		}),
	],
});
