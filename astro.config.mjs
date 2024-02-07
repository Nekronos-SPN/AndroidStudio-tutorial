import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://nekronos-spn.github.io/AndroidStudio-tutorial/',
	base: '/AndroidStudio-tutorial/',
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
					{label: 'Creating components', link: './guides/development/components/'},
					{label: 'Styling the components', link: './guides/development/style/'},
					{label: 'Creating functionality', link: './guides/development/functionality/'}
					],
				},
				{
					label: 'Next Steps',
					items: [
						{ label: 'Recommended readings', link: './guides/additional/readings/' },
						{ label: 'Cool projects', link: './guides/additional/projects/' },
					],
				},
				{
					label: 'College Scheduler',
					items: [
						{ label: 'Calendar and To Do list', link: './scheduler/calendar' },
						{ label: 'Video', link: './scheduler/video' },
					],
				},
			],
		}),
	],
});
