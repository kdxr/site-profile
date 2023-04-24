import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

const Layout = ({ children, className = "" }: Props) => {
	return (
		<div className={`${className} w-full h-full inline-block z-0 p-32`}>
			{children}
		</div>
	);
};

export default Layout;
