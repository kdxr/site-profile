import { Flex, Title, Container, createStyles, Space } from "@mantine/core";
import SkillCard from "./skillCard";

type Props = {};

const useStyles = createStyles((theme) => ({
	root: {},
}));

export default function index({}: Props) {
	const { classes } = useStyles();

	return (
		<section id="skill">
			<Container size={"xl"} className={classes.root}>
				<Flex
					direction={{ base: "column" }}
					align={{ base: "center", lg: "flex-start" }}
				>
					<Title order={2}>My Skills</Title>
				</Flex>
				<Space h="md" />
				<Flex
					direction={{ base: "column", md: "row" }}
					gap={{ base: "sm", md: "lg" }}
					justify={{ sm: "center", lg: "space-between" }}
					align={{ base: "center", md: "flex-start" }}
				>
					<SkillCard
						title="Front End"
						label="creating and custom, web designs on a core design principles by requirement"
						imgSrc={
							"https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png"
						}
						tools={[
							"React.js",
							"Next.js",
							"Svelte",
							"HTML5",
							"CSS",
							"Tailwind CSS",
							"Windi CSS",
							"Mantine",
						]}
					/>
					<SkillCard
						title="Back End"
						label="Design the server side and database to ensure performance by requirement of the web application on a api"
						imgSrc={
							"https://kinsta.com/wp-content/uploads/2021/11/back-end-developer-1024x512.png"
						}
						tools={[
							"Node.js",
							"Nest.js",
							"Mysql",
							"Postgres SQL",
							"Lua",
							"C#",
							"C++",
							"JAVA",
							"PHP",
						]}
					/>
					<SkillCard
						title="Tools"
						label="My tools use on start a project and collaboration tools for streamlined teamwork"
						imgSrc={
							"https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20tools.jpg?itok=p-t96ODv"
						}
						tools={[
							"Git",
							"Sourcetree",
							"Postman",
							"VS Code",
							"Figma",
							"Navicat",
							"Heidisql",
						]}
					/>
				</Flex>
			</Container>
		</section>
	);
}
