// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
} from "unocss";

export default defineConfig({
	theme: {
		fontFamily: {
			kanit: "var(--font-kanit)",
		},
		colors: {
			dark: "#1b1b1b",
			light: "#f5f5f5",
			primary: "#bf1004",
			primaryDark: "#58e6da",
			secondary: "#ed4040",
			secondaryDark: "#80d9a6",
		},
	},
	presets: [
		presetUno(),
		presetAttributify(),
		// ...
	],
});
