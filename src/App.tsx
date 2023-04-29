import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";

function App() {
	return (
		<div className="w-full min-h-screen bg-site bg-no-repeat bg-cover overflow-hidden">
			<Banner></Banner>
			<Nav />
			<About />
			<Work />
		</div>
	);
}

export default App;
