import "@/styles/globals.scss";
import "@unocss/reset/tailwind.css";
import "uno.css";
import { Kanit } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "./components/NavBar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const kanit = Kanit({
	weight: ["200", "400", "600", "900"],
	subsets: ["thai"],
	variable: "--font-kanit",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main
				className={`${kanit.className} ${kanit.variable} font-kanit bg-dark w-full min-h-screen`}
			>
				<NavBar />
				<Component {...pageProps} />
			</main>
		</>
	);
}
