import React from "react";
import AbouteMe from "../aboutme";
import Skill from "../skill";
import PortFolio from "../portfolio";
import Education from "../education";
import Contact from "../contact";

type Props = {};

export default function index({}: Props) {
	return (
		<>
			<AbouteMe />
			<Skill />
			<PortFolio />
			<Education />
			<Contact />
		</>
	);
}
