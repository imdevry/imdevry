import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";

import { HiOutlineHome } from "react-icons/hi";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-medium tracking-wide">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/" className="flex items-center">
					<HiOutlineHome size={18} />
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/projects" className="flex items-center">
					Projects
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/experience" className="flex items-center">
					Experience
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/connect" className="flex items-center">
					Connect
				</Link>
			</Typography>
		</ul>
	);

	return (
		<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-sm">
			<div className="flex items-center justify-between lg:justify-around text-gray-900">
				<Typography
					as="a"
					href="/"
					className="mr-4 cursor-pointer py-1.5 font-medium"
				>
					Rayan R.
				</Typography>
				<div className="flex items-center gap-4">
					<div className="mr-4 hidden lg:block">{navList}</div>
					<IconButton
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-6 w-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</IconButton>
				</div>
			</div>
			<Collapse open={openNav}>{navList}</Collapse>
		</Navbar>
	);
}

export default Header;
