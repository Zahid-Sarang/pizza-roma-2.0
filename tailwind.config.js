/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Base colors
				white: "#FFFFFF",
				black: "#222222",
				lavenderPurple: "#b591ef",
				lightGray: "#f5f6f7",
				outlineGray: "#E8E6E6",
				darkIndigo: "#2d1e69",
				charcoalBlack: "#262626",
				charcoalGray: "#4A5256",
				lightCharcoal: "#8A9296",
				lightGreen: "#D9F3E9",
				primaryBg: "#f3f2f7",
				greenText: "#21BA87",
				tomatoRed: "#FD4955",
				tomatoRedBg: "#F5DCE0",

				// Toasts
				error: "#EE4D3C",
				warning: "#FFC048",
				success: "#1DA045",
				info: "#2196F3",

				// Status
				greenStatus: "#52c41a",
				greenStatusBg: "#f6ffed",
				greenStatusBorder: "#b7eb8f",
				blueStatus: "#1677ff",
				blueStatusBg: "#e6f4ff",
				blueStatusBorder: "#91caff",
				redStatus: "#cf1322",
				redStatusBg: "#fff1f0",
				redStatusBorder: "#ffa39e",
				draft: "#5E6C93",
				draftBg: "#DEDEE8",
			},
		},
	},
	plugins: [],
};
