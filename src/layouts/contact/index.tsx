import { Container, Flex, Title, Space, createStyles } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const useStyles = createStyles((theme) => ({
	root: {},

	contactText: {
		color: "#fff",
		marginLeft: "5px",
	},

	mailText: {
		marginLeft: "5px",
		textDecoration: "none",
		color: "#fff",
	},
}));

export default function index({}: Props) {
	const { classes } = useStyles();

	return (
		<section id="contact">
			<Container size={"xl"} mt={30} className={classes.root}>
				<Flex
					direction={{ base: "column" }}
					align={{ base: "center", lg: "flex-start" }}
				>
					<Title order={2}>Contact</Title>
				</Flex>
				<Space h="md" />
				<Flex
					direction={{ base: "column" }}
					align={{ base: "center", lg: "flex-start" }}
				>
					<Title order={5}>
						<FontAwesomeIcon icon={faPhone} />
						<span className={classes.contactText}>+66 63 516 4850</span>
					</Title>
					<Title order={5}>
						<FontAwesomeIcon icon={faEnvelope} />
						<a
							className={classes.mailText}
							href="mailto: natdanaitnn@gmail.com"
						>
							natdanaitnn@gmail.com
						</a>
					</Title>
				</Flex>
			</Container>
		</section>
	);
}
