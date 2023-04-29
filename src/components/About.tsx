import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

type Props = {};

const About = ({}: Props) => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section className="min-h-[50vh] lg:min-h-[50vh]" id="about" ref={ref}>
			<motion.div
				variants={fadeIn("right", 0.8)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.3 }}
				className="container mx-3 sm:mx-auto text-white"
			>
				<h2 className="text-5xl font-bold text-gray-300 mb-3">About me.</h2>
				<h3 className="text-xl mb-4">
					I'm a Freelance Front-end, Back-end Developer with over 2 years of
					experience
				</h3>
				<p className="mb-3">
					Hi. my name is natdanai thannin (gun) i'm just a freelance developer
					now am interest for experience on company
				</p>
				<p className="mb-6">
					My skills Svelte, NodeJs, React.Js, Next.Js, Nest.js, Express, PHP,
					C#, C++, Lua
				</p>
				<div className="flex gap-x-6 lg:gap-x-10 mb-12">
					<div>
						<div className="text-[40px] text-gradient mb-2">
							{inView && <CountUp start={0} end={2} duration={2} />}
						</div>
						<div className="text-sm tracking-[2px]">
							Year of <br /> Experience
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
