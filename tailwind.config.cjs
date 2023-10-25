const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				obstacles: 'repeat(auto-fill, minmax(350px, 2fr))',
			},
			fontFamily: {
				sans: ["Oswald Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
		},
	},
	plugins: [
		plugin( ({ addVariant }) => {
		  addVariant('mo', "@media screen and (max-width: theme('screens.sm'))")
		}),
		plugin( ({ matchUtilities, theme }) => {
			matchUtilities(
			  {
				'text-shadow': (value) => ({
				  textShadow: value,
				}),
			  },
			  { values: theme('textShadow') }
			)
		}),
	  ],
}
