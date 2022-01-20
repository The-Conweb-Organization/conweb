module.exports = {
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				conOrange: {
					50: '#F8B1A0',
					100: '#F69279',
					200: '#F46F4E',
					300: '#F2542C',
					400: '#E63A0F',
					500: '#C0300C',
					600: '#99270A',
					700: '#731D07',
					800: '#4D1304'
				},
				conBlueGreen: {
					50: '#A9D5DA',
					100: '#8DC8CE',
					200: '#70BAC2',
					300: '#54ACB6',
					400: '#43949D',
					500: '#377A81',
					600: '#255256',
					700: '#173436',
					800: '#0C1B1D'
				},
				conBlue: '#F1F8F9'
			}
		}
	},
	variants: {},
	plugins: [require('daisyui')]
};
