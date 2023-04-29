type Props = {};

import Avatar from "../assets/avatar.png";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Banner({}: Props) {
	return (
		<>
			<section
				className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
				id="home"
			>
				<div className="container mx-auto text-white">
					<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
						<div className="flex-1 text-center lg:text-left">
							<motion.h1
								variants={fadeIn("up", 0.5)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="text-[55px] font-bold leading-[1.5] lg:text-[60px]"
							>
								NATDANAI
							</motion.h1>
							<motion.div
								variants={fadeIn("up", 0.5)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="mb-6 text-[36px] lg:text-[30px] font-semibold uppercase leading-[1]"
							>
								<p>I am a</p>
								<p>
									<TypeAnimation
										className="text-accent"
										sequence={[
											"Frontend",
											10000,
											"Backend",
											10000,
											"Full Stack",
											10000,
										]}
										wrapper="span"
										speed={50}
										cursor={true}
										repeat={Infinity}
									/>
									Developer
								</p>
							</motion.div>
							<motion.p
								variants={fadeIn("up", 0.6)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="mb-8 px-3 sm:px-0"
							>
								A junior developer with 2 years of experience in frontend and
								backend developments who is passionate about working in any
								challenge opportunities. I spend every single day with coding
								and learning new programming languages and new technologies. I’m
								not afraid of any problems but I push my effort to solve them
								for being pleased with success and growing up with failure.
							</motion.p>
							<motion.div
								variants={fadeIn("up", 0.7)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
							>
								<button className="btn sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary glass mr-3">
									<a href="mailto: natdanaitnn@gmail.com">Contact Me</a>
								</button>
								<label
									htmlFor="my-modal-3"
									className="btn sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary glass mx-3"
								>
									Resume
								</label>
							</motion.div>
							<motion.div
								variants={fadeIn("up", 0.8)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mt-12"
							>
								<a href="https://www.facebook.com/ndntnng/" target="_blank">
									<FaFacebook />
								</a>
								<a href="https://github.com/kdxr" target="_blank">
									<FaGithub />
								</a>
							</motion.div>
						</div>
						<motion.div
							variants={fadeIn("down", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="hidden flex-1 max-w-[370px] lg:flex  lg:max-w-[480px]"
						>
							<img src={Avatar} alt="" />
						</motion.div>
					</div>
				</div>
			</section>

			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="text-lg font-bold">It private document</h3>
					<p className="py-4">Please send email to me</p>
				</div>
			</div>
		</>
	);
}

export default Banner;
