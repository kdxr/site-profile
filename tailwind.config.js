module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	theme: {
		fontFamily: {
			kanit: "Kanit",
		},
		container: {
			padding: {
				default: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: "#B809C3",
				hover: "#dfd",
			},
			backgroundImage: {
				site: "url('./assets/site-bg.jpg')",
				about: "url('./assets/about.png')",
				services: "url('./assets/services.png')",
			},
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					primary: "#6567f0",
					secondary: "#c7c7c7",
				},
			},
		],
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	},
};
