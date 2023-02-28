import React from "react";
import {
	Flex,
	Text,
	Title,
	Container,
	createStyles,
	Space,
	SimpleGrid,
} from "@mantine/core";
import PortLayout from "./portLayout";

type Props = {};

const useStyles = createStyles((theme) => ({
	root: {},

	github: {
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? "#7580d1" : "#7580d1",
		transition: "color 0.6s",

		"&:hover": {
			color: "#5fedaf",
		},
	},
}));

export default function index({}: Props) {
	const { classes } = useStyles();

	return (
		<section id="port">
			<Container size={"xl"} mt={30} className={classes.root}>
				<Flex
					direction={{ base: "column" }}
					align={{ base: "center", lg: "flex-start" }}
				>
					<Title order={2}>Portfolio</Title>
				</Flex>
				<Space h="md" />
				<Text>
					On my mind, I develop ur self, I have gained experience by building a
					project using differect resources, The project listed below are
					examples , More project can watch on my{" "}
					<a
						href="https://github.com/kdxr"
						target={"_blank"}
						className={classes.github}
					>
						Github
					</a>
				</Text>
				<SimpleGrid
					cols={2}
					spacing="lg"
					verticalSpacing="lg"
					mt={"lg"}
					pb={30}
				>
					<PortLayout
						project="fivem game [Lua, Svelte, Typescript]"
						imgSrc={"/assets/project/fivem.png"}
					/>
					<PortLayout
						project="Stock Management [PHP]"
						imgSrc={"/assets/project/stockmn.png"}
						site={"https://github.com/kdxr/StockMN"}
					/>
					<PortLayout
						project="Shop system [education project]"
						imgSrc={"/assets/project/shope.png"}
						site={"https://github.com/kdxr/phpshoptest"}
					/>
					<PortLayout
						project="Pimdeed [education project]"
						imgSrc={"/assets/project/pimdeed.png"}
						site={"https://github.com/kdxr/pimdeed"}
					/>
				</SimpleGrid>
			</Container>
		</section>
	);
}
