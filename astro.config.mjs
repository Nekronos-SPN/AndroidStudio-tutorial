import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://nekronos-spn.github.io/AndroidStudio-tutorial/',
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
					{label: 'Creating Components', link: './guides/development/components/'},
					{label: 'Styling The Components', link: './guides/development/style/'},
					{label: 'Creating Functionality', link: './guides/development/functionality/'}
					],
				},
				{
					label: 'Next Steps',
					items: [
						{ label: 'Recommended readings', link: './guides/additional/readings/' },
						{ label: 'Cool projects', link: './guides/additional/projects/' },
					],
				},
			],
		}),
	],
});
