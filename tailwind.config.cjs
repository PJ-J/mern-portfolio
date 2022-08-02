const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'dark': '#171717',
				'offWhite': '#E7E1C5',
			},
			fontFamily: {
				'shrikhard': ['"Shrikhand"', 'cursive']
			}
		}
	},

	plugins: []
};

module.exports = config;
