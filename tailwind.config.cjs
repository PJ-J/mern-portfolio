const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
		},
		fontSize: {
			prettyBig: ['120px', {
				lineHeight: '130px',
			}],
			veryBig: ['180px', {
				lineHeight: '150px',
			}],
		},
		extend: {
			colors: {
				'dark': '#171717',
				'offWhite': '#E7E1C5',
				'coral': '#F57B7B',
				'dblue': '#242E63',
			},
			fontFamily: {
				'shrikhard': ['"Shrikhand"', 'cursive'],
				'bebas': ['"Bebas Neue"', 'cursive'],
			}
		}
	},

	plugins: []
};

module.exports = config;
