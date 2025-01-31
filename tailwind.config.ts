import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'space-background': '#0F1317',
				'space-border': '#30373D',
				'space-button': '#161c21',
				'space-button-hover': '#1b2228',
				'space-button-active': '#222a32',
				'space-text': 'white',
				'space-text-secondary': '#9EB2BA'
			},
			fontFamily: {
				montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
				ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
} satisfies Config;
