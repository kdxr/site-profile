import { themeStore } from "./store";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	createStyles,
	Box,
	Space,
} from "@mantine/core";
import { customTheme } from "./theme";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderMenu from "./layouts/header";
import Home from "./layouts/home";

const useStyles = createStyles((theme) => ({
	container: {
		width: "100%",
		height: "100%",
	},
}));

function App() {
	const { classes } = useStyles();
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		themeStore.getState().theme
	);

	const menus = [
		{
			label: "About me",
			link: "#about",
		},
		{
			label: "Skills",
			link: "#skill",
		},
		{
			label: "Portfolio",
			link: "#port",
		},
		{
			label: "Education",
			link: "#edu",
		},
		{
			label: "Contact",
			link: "#contact",
		},
	];

	useEffect(() => {
		themeStore.subscribe((state) => {
			setColorScheme(state.theme);
		});

		AOS.init();
	}, []);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={themeStore.getState().toggleTheme}
		>
			<MantineProvider
				theme={{ ...customTheme, colorScheme: colorScheme }}
				withNormalizeCSS
				withGlobalStyles
			>
				<Box className={classes.container}>
					<HeaderMenu links={menus} />
					<Space h={50} />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Box>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
