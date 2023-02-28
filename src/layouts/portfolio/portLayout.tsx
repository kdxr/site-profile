import { createStyles, Text, Image, Button, Flex } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		width: "100%",
	},

	title: {
		textTransform: "uppercase",
		background: theme.colorScheme === "dark" ? "#262322" : "#b5b5b5",
		color: theme.colorScheme === "dark" ? "#adadad" : "#3d341c",
		borderRadius: "5px",
	},

	link: {
		textDecoration: "none",
		color: "#fff",
	},
}));

interface Props {
	project: string;
	site?: string;
	imgSrc?: string;
}

export default function portLayout({ project, site, imgSrc }: Props) {
	const { classes } = useStyles();

	return (
		<div className={classes.root}>
			<Text align="center" className={classes.title}>
				{project}
			</Text>

			{imgSrc && (
				<div
					style={{
						width: "100%",
						height: "300px",
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "10px",
					}}
				>
					<Image radius="md" src={imgSrc} fit="cover" height={300} />
				</div>
			)}

			{site && (
				<Flex justify={"center"} mt={10}>
					<Button color="lime" uppercase size="xs" radius={"xl"}>
						<a href={site} target="_blank" className={classes.link}>
							View code
						</a>
					</Button>
				</Flex>
			)}
		</div>
	);
}
