import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface CustomLinkDTO {
	href: string;
	label: string;
	className?: string;
}

const CustomLink = ({ href, label, className }: CustomLinkDTO) => {
	const router = useRouter();

	return (
		<Link href={href} className={`${className ?? ""} relative group`}>
			{label}
			<span
				className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? "w-full" : "w-0"
				}`}
			/>
		</Link>
	);
};

const NavBar = () => {
	return (
		<>
			<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
				<nav>
					<CustomLink href="/" label="Home" className="mr-4" />
					{/* <CustomLink href="/about" label="About" className="mx-4" />
					<CustomLink href="/projects" label="Projects" className="mx-4" />
					<CustomLink href="/contact" label="Contact" className="mx-4" /> */}
				</nav>
				<nav className="flex items-center gap-x-3">
					<motion.a
						href="https://www.facebook.com/ndntnng/"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 1.2, y: 0 }}
					>
						<FontAwesomeIcon icon={faFacebook} size={"lg"} />
					</motion.a>
					<motion.a
						href="https://github.com/kdxr"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 1.2, y: 0 }}
					>
						<FontAwesomeIcon icon={faGithub} size={"lg"} />
					</motion.a>
				</nav>

				<Logo />
			</header>
		</>
	);
};

export default NavBar;