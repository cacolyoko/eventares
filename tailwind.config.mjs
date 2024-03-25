/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'noto-serif': ['Noto Serif SC', 'serif'],
		},
		extend: {
			colors: {
				accent: "var(--color-accent)",
			},
		},
	},
	plugins: [],
}
