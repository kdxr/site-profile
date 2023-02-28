import { MantineThemeOverride } from "@mantine/core";

export const customTheme: MantineThemeOverride = {
	fontFamily: "Kanit",
	components: {
		Container: {
			defaultProps: {
				sizes: {
					xs: 340,
					sm: 720,
					md: 960,
					lg: 1140,
					xl: 1320,
				},
			},
		},
	},
};
