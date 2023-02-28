import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	Flex,
	Image,
	Text,
	Container,
	createStyles,
	Space,
	keyframes,
} from "@mantine/core";

type Props = {};

const clipText = keyframes({
	"0%": {
		clipPath: "inset(0 100% 0 0)",
	},
	"100%": {
		clipPath: "inset(0 0 0 0)",
	},
});

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

	developEffect: {
		animation: `${clipText} 3s ease infinite`,
	},

	abouteMeEffect: {
		animation: `${clipText} 3s ease 1`,
	},
}));

export default function index({}: Props) {
	const { classes, cx } = useStyles();

	return (
		<section
			id="about"
			data-aos="fade-right"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
		>
			<Flex
				gap="md"
				justify="center"
				align="center"
				direction="column"
				className={classes.root}
			>
				<Text fw={700} size="xl" className={classes.developEffect}>
					Developer
				</Text>

				<Container size={"xs"}>
					<Image radius="xl" src="./assets/profile.jpg" fit="cover" />
				</Container>

				<Container size={"sm"}>
					<Text fw={700} className={classes.myName} fz={50}>
						Natdanai Thannin
					</Text>
					<Container size={"sm"} className={cx(classes.box)}>
						<span className={classes.abouteMeEffect}>
							Two years ago, I develop FiveM game on my passion and passionate
							about coding and software development, I love to develop myself
							and my skills all the time. I'm always ready for learning any new
							programming languages and I have the courage to face the problem.
						</span>
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
