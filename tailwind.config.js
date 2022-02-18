const withOpacity = variableName => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgba(var${variableName})`;
	};
};

module.exports = {
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['open-sans', 'sans-serif']
		},
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
			},
			backgroundColor: {
				primary: withOpacity('--color-bg-primary'),
				secondary: withOpacity('--color-bg-secondary'),
				hover: withOpacity('--color-bg-hover'),
				fill: withOpacity('--color-bg-fill')
			},
			textColor: {
				primary: withOpacity('--color-text-primary'),
				secondary: withOpacity('--color-text-secondary'),
				accent: withOpacity('--color-text-accent'),
				paragraph: withOpacity('--color-text-paragraph')
			},
			borderColor: {
				primary: withOpacity('--color-border-primary'),
				secondary: withOpacity('--color-border-secondary'),
				accent: withOpacity('--color-border-accent')
			},
			fontSize: {
				conH1: 'clamp(3.94rem, 3.7533vw, 4.5rem)',
				conH2: 'clamp(2.95rem, 2.8067vw, 3.38rem)',
				conH3: 'clamp(1.97rem, 1.8767vw, 2.25rem)',
				conH4: 'clamp(1rem, 0.95883vw, 1.125rem)',
				conPara: 'clamp(1rem, 0.95vw, 1.25rem )'
			}
		}
	},
	variants: {},
	plugins: [require('daisyui'), require('@tailwindcss/line-clamp')]
};
