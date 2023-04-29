type Props = {
	title: string;
	detail: string;
	img: string;
};

export default function WorkLayout({ title, detail, img }: Props) {
	return (
		<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:max-h-[300px]">
			<div className="group-hover:bg-black/70 w-full h-full absolute z-1 transition-all duration-300"></div>
			<img
				className="w-full h-full group-hover:scale-125 transition-transform duration-300"
				src={img}
				alt=""
			/>
			<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10">
				<span className="text-gradient">{title}</span>
			</div>
			<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
				<span className="text-3xl text-gray-500">{detail}</span>
			</div>
		</div>
	);
}
