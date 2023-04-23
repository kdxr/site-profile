import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className="absolute left-[50%] top-2 translate-x-[-50%] flex items-center justify-center mt-2">
			<MotionLink
				href="/"
				className="min-w-16 min-h-16 px-3 bg-light text-dark flex items-center justify-center rounded-full text-2xl font-600"
				whileHover={{
					scale: 1.15,
					transition: {
						duration: 1,
						repeat: Infinity,
						repeatType: "mirror",
						ease: "linear",
					},
				}}
			>
				Natdanai
			</MotionLink>
		</div>
	);
};

export default Logo;
