import create, { GetState, SetState } from "zustand";
import { ColorScheme } from "@mantine/core";

interface ThemeStore {
	theme: ColorScheme;
	getTheme: () => void;
	toggleTheme: () => void;
}

export const themeStore = create<ThemeStore>(
	(set: SetState<ThemeStore>, get: GetState<ThemeStore>) => ({
		theme: (localStorage.getItem("theme") as ColorScheme) || "dark",
		getTheme: () => {
			return get().theme;
		},
		toggleTheme: () => {
			const theme = get().theme === "dark" ? "light" : "dark";

			set({ theme: theme });

			localStorage.setItem("theme", theme);
		},
	})
);
