import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],

	// daisyui: {
	// 	themes: [
	// 		"light",
	// 		{
	// 			black: {
	// 				...daisyUIThemes["black"],
	// 				primary: "rgb(29, 155, 240)",
	// 				secondary: "rgb(24, 24, 24)",
	// 			},
	// 		},
	// 	],
	// },
	daisyui: {
		themes: [
			{
				"retroArcade": {
					...daisyUIThemes["dark"],
					primary: "#FF4081", // Pink
					secondary: "#00BCD4", // Cyan
					accent: "#FFEB3B", // Yellow
					neutral: "#212121",
					"base-100": "#000000",
					"base-200": "#222222",
					"base-300": "#333333",
					info: "#03A9F4",
					success: "#4CAF50",
					warning: "#FFC107",
					error: "#F44336",
				},
			},
		]
	}
}
