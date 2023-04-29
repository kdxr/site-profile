import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { Link } from "react-scroll";

type Props = {};

function Nav({}: Props) {
	return (
		<>
			<nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
				<div className="container mx-auto">
					<div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
						<Link
							className="[&.active]:bg-blue-400 rounded-full cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-hover transition-colors duration-500"
							activeClass="active"
							to="home"
							smooth
							spy
							offset={-200}
							// onClick={() => handleSetActive("home")}
						>
							<BiHomeAlt />
						</Link>
						<Link
							className="[&.active]:bg-blue-400 rounded-full cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-hover transition-colors duration-500"
							activeClass="active"
							to="about"
							smooth
							spy
							offset={-150}
							// onClick={() => handleSetActive("about")}
						>
							<BiUser />
						</Link>
						<Link
							className="[&.active]:bg-blue-400 rounded-full cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-hover transition-colors duration-500"
							activeClass="active"
							to="work"
							smooth
							spy
							offset={-150}
							// onClick={() => handleSetActive("work")}
						>
							<BsFillClipboardDataFill />
						</Link>
						{/* <Link
							className="[&.active]:bg-blue-400 rounded-full cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-hover transition-colors duration-500"
							activeClass="active"
							to="contact"
							smooth
							spy
							// onClick={() => handleSetActive("contact")}
						>
							<BsBriefcase />
						</Link> */}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Nav;
