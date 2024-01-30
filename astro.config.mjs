import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://nekronos-spn.github.io',
	integrations: [
		starlight({
			title: 'Android Chronometer',
			sidebar: [
				{
					label: 'Android Studio IDE',
					items: [
						{ label: 'Installation', link: './guides/setup/installation/' },
						{ label: 'IDE layout', link: './guides/setup/layout/' },
						{ label: 'Project structure', link: './guides/setup/structure/' },
					],
				},
				{
					label: 'Developing The App',
					items: [
					{label: 'Components', link: './guides/development/components/'},
					{label: 'Style', link: './guides/development/style/'},
					{label: 'Functionality', link: './guides/development/functionality/'}
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
