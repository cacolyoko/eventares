/** @type {import('tailwindcss').Config} */

import animations from "@midudev/tailwind-animations"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'noto-serif': ['Noto Serif SC', 'serif'],
		},
		extend: {
			colors: {
				"accent": "var(--color-accent)",
			},
			transitionProperty: {
				"max-height": "max-height",
			},
		},
	},
	plugins: [animations],
}
