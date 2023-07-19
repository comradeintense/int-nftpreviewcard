/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				soft_blue: 'hsl(215, 51%, 70%)',
				soft_cyan: 'hsl(178, 100%, 50%)',
				soft_cyan_overlay: 'hsla(178, 100%, 50%, 0.5)',
				very_dark_blue_main: 'hsl(217, 54%, 11%)',
				very_dark_blue_card: 'hsl(216, 50%, 16%)',
				very_dark_blue_line: 'hsl(215, 32%, 27%)',
			},
			fontFamily: {
				Outfit: ['Outfit', 'sans-serif'],
			},
			boxShadow: {
				myshadow: '0px 25px 50px 0px rgba(0, 0, 0, 0.10)',
			},
		},
	},
	plugins: [],
};
