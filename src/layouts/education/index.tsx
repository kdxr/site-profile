import { Container, Flex, Title, Space, createStyles } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const useStyles = createStyles((theme) => ({
	root: {},

	eduText: {
		marginLeft: "5px",
		textTransform: "capitalize",
	},
}));

export default function index({}: Props) {
	const { classes } = useStyles();

	return (
		<section id="edu">
			<Container size={"xl"} mt={30} className={classes.root}>
				<Flex
					direction={{ base: "column" }}
					align={{ base: "center", lg: "flex-start" }}
				>
					<Title order={2}>Education</Title>
				</Flex>
				<Space h="md" />
				<Flex
					direction={{ base: "column" }}
					align={{ base: "center", lg: "flex-start" }}
				>
					<Title order={5}>
						<FontAwesomeIcon icon={faSchool} />
						<span className={classes.eduText}>
							king mongkut's university of technology north bangkok
						</span>
					</Title>
					<Title order={5}>
						<FontAwesomeIcon icon={faGraduationCap} />
						<span className={classes.eduText}>
							bachelor degree of information technology
						</span>
					</Title>
				</Flex>
			</Container>
		</section>
	);
}
