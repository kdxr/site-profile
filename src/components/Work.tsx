import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import WorkLayout from "./layout/WorkLayout";

type Props = {};

function Work({}: Props) {
	return (
		<section className="min-h-[85vh] lg:min-h-[78vh] pb-32" id="work">
			<div className="container px-3 sm:mx-auto text-white">
				<motion.div
					variants={fadeIn("right", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}
					className="flex flex-col gap-y-12 mb-10 lg:mb-0"
				>
					<div>
						<h2 className="text-5xl leading-tight font-bold mb-3">
							My Latest Work.
						</h2>
						<p className="max-w-sm mb-10">
							This is my simple project work of all experience
						</p>
						<button className="btn btn-sm">
							<a
								href="https://github.com/kdxr?tab=repositories"
								target="_blank"
							>
								View all projects
							</a>
						</button>
					</div>
					{/* <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-1 transition-all duration-300"></div>
							<img
								className="group-hover:scale-125 transition-transform duration-300"
								src={Project1}
								alt=""
							/>
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10">
								<span className="text-gradient">FiveM</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
								<span className="text-3xl">Game Inventory</span>
							</div>
						</div> */}
				</motion.div>
				<motion.div
					// variants={fadeIn("left", 0.5)}
					// initial="hidden"
					// whileInView={"show"}
					// viewport={{ once: false, amount: 1 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 mt-5"
				>
					<WorkLayout
						title="https://find-movie-two.vercel.app/"
						detail="Integate to tmdb api"
						img="./projects/find_movie.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Website stock management herb"
						img="./projects/herb_store.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Stock Nest.JS + Next.JS + Redis"
						img="./projects/next_stock.jpg"
					/>
					<WorkLayout
						title="Enchance"
						detail="Car rental web"
						img="./projects/car_rent.jpg"
					/>
					<WorkLayout
						title="Develop"
						detail="Website Game hopecity-th.com"
						img="./projects/hope_site.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Game Inventory Svelte, Scss, Typescript"
						img="./projects/fivem_1.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Game Emote Svelte, Scss, Typescript"
						img="./projects/fivem_2.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Game Shop Svelte, Scss, Typescript"
						img="./projects/fivem_3.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Listen music from youtube api"
						img="./projects/fivem_4.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Topup game point on gateway api"
						img="./projects/fivem_5.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Css 3D In Game"
						img="./projects/fivem_6.png"
					/>
					<WorkLayout
						title="Develop"
						detail="Crafting Table"
						img="./projects/fivem_7.png"
					/>
				</motion.div>
			</div>
		</section>
	);
}

export default Work;
