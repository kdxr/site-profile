import Head from "next/head";
import Layout from "./components/Layout";
import Image from "next/image";
import ProfileImage from "../../public/profile.jpg";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Natdanai Thannin</title>
				<meta
					name="description"
					content="natdanai thannin, portfolio developer"
				/>
			</Head>
			<main className="flex w-full ">
				<Layout>
					<div className="flex items-center gap-10">
						<Image src={ProfileImage} alt="" className="w-120 rounded"></Image>
						<div className="w-auto">
							<h1 className="text-white text-5xl mb-2">Developer</h1>
							<p className="w-full">
								I develop FiveM game on my passion and passionate about coding
								and software development, I love to develop myself and my skills
								all the time. I'm always ready for learning any new programming
								languages and I have the courage to face the problem.
							</p>
							<button className="bg-[#bf1004] hover:bg-[#912121] mt-5 px-3 py-1 rounded-2 transition duration-500">
								<Link href="./CV.pdf" target="_blank">
									Resume
								</Link>
							</button>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
