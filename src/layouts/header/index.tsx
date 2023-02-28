import { useEffect, useState } from "react";
import {
	createStyles,
	Header,
	Container,
	Group,
	Paper,
	Transition,
	Text,
	Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HashLink } from "react-router-hash-link";
import ColorScheme from "./colorScheme";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	root: {
		position: "fixed",
		zIndex: 1,
	},

	dropdown: {
		position: "absolute",
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: "hidden",

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		textTransform: "capitalize",

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
				.color,
		},
	},
}));

interface HeaderResponsiveProps {
	links: { link: string; label: string }[];
}

export default function HeaderMenu({ links }: HeaderResponsiveProps) {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();

	useEffect(() => {
		function handleScroll() {
			const sections = document.querySelectorAll("section");

			sections.forEach((section) => {
				const { top } = section.getBoundingClientRect();
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const id = section.getAttribute("id");

				if (scrollY >= top && scrollY < sectionTop + sectionHeight) {
					return setActive(id ? `#${id}` : "");
				}
			});

			// sections.forEach((section) => {
			// 	const top = section.offsetTop - scrollY;
			// 	const bottom = top + section.clientHeight;
			// 	const id = section.getAttribute("id");

			// 	if (scrollY >= top && screenY <= bottom) {
			// 		setActive(id ? `#${id}` : "");
			// 	}
			// });
		}

		window.addEventListener("scroll", handleScroll);

		// Remove the listener as soon as the component is unmounted
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollY]);

	const items = links.map((link) => (
		<HashLink
			key={link.link}
			smooth
			to={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: active === link.link,
			})}
			onClick={(event) => {
				setActive(link.link);
				close();
			}}
		>
			{link.label}
		</HashLink>
	));

	return (
		<Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
			<Container className={classes.header} fluid>
				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
				/>

				<Transition transition="pop-top-right" duration={200} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
						</Paper>
					)}
				</Transition>

				<Group>
					<Text size="lg" tt="capitalize">
						kaydoosy
					</Text>
				</Group>

				<Group spacing={5} className={classes.links}>
					{items}
				</Group>
				<ColorScheme />
			</Container>
		</Header>
	);
}
