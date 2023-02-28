import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	Flex,
	Image,
	Text,
	Container,
	createStyles,
	Space,
} from "@mantine/core";

type Props = {};

const useStyles = createStyles((theme) => ({
	root: {
		textAlign: "center",
		padding: "2.5rem",
		gap: "2.5rem",
	},

	box: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		textAlign: "center",
		padding: theme.spacing.xl,
		borderRadius: theme.radius.sm,
		cursor: "pointer",

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[5]
					: theme.colors.gray[1],
		},
	},

	myName: {
		color: theme.colorScheme === "dark" ? "#e3ceeb" : "#201e21",
	},

	gitIcon: {
		transition: "color 0.5s",
		cursor: "pointer",

		"&:hover": {
			color: "#e3d5a6",
		},
	},

	github: {
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? "#fff" : "#000",
	},
}));

export default function index({}: Props) {
	const { classes } = useStyles();

	return (
		<section id="about">
			<Flex
				gap="md"
				justify="center"
				align="center"
				direction="column"
				className={classes.root}
			>
				<Text fw={700} size="xl">
					Developer
				</Text>

				<Container size={"xs"}>
					<Image radius="xl" src="./assets/profile.jpg" fit="cover" />
				</Container>

				<Container size={"sm"}>
					<Text fw={700} className={classes.myName} fz={50}>
						Natdanai Thannin
					</Text>
					<Container size={"sm"} className={classes.box}>
						Two years ago, I develop FiveM game on my passion and passionate
						about coding and software development, I love to develop myself and
						my skills all the time. I'm always ready for learning any new
						programming languages and I have the courage to face the problem.
					</Container>
					<Space h="md" />
					<a
						href="https://github.com/kdxr"
						target={"_blank"}
						className={classes.github}
					>
						<FontAwesomeIcon
							icon={faGithub}
							size={"xl"}
							className={classes.gitIcon}
						/>
					</a>
				</Container>
			</Flex>
		</section>
	);
}
