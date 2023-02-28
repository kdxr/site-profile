import { Card, Image, Text, Group } from "@mantine/core";

interface Props {
	title: string;
	label: string;
	imgSrc: string;
	tools?: string[];
}

export default function skillCard({ title, label, imgSrc, tools }: Props) {
	const myTools =
		tools &&
		tools.map((value, index) => (
			<Text size="md" align="center" key={index}>
				{value}
			</Text>
		));

	return (
		<Card
			shadow="sm"
			p="sm"
			radius="md"
			withBorder
			miw={300}
			maw={350}
			mih={400}
			pb={5}
			mb={5}
		>
			<Card.Section>
				<Image src={imgSrc} height={150} />
			</Card.Section>

			<Group position="center" mt="xs" mb="xs">
				<Text weight={500} size="lg">
					{title}
				</Text>
			</Group>

			<Text size="md" color="dimmed" align="center">
				{label}
			</Text>

			<Card.Section mt="sm">
				<Text weight={400} size="md" mb={3} align="center">
					What Tool I Use
				</Text>
				<Group position="center" mt="xs" mb="xs">
					{myTools ?? "..."}
				</Group>
			</Card.Section>
		</Card>
	);
}
