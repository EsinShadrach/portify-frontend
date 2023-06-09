import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/c++.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
	ArrowRightOnRectangleIcon,
	Cog6ToothIcon,
	UserIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
	const [isOpened, setIsOpened] = useState(false);
	const [showUserOptions, setShowUserOptions] = useState(false);

	const navLinks = [
		{
			text: "Home",
			href: "/home",
		},
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Projects",
			href: "/projects",
		},
		{
			text: "Docs",
			href: "/docs",
		},
		{
			text: "Portfolio",
			href: "/portfolio",
		},
	];

	return (
		<header className="bg-white/50 w-full font-sans relative z-50">
			<nav className="container mx-auto p-3 relative z-50">
				<div className="flex items-center justify-between">
					<div className="md:hidden max-md:block relative z-10">
						<button
							className="space-y-1.5"
							onClick={() => setIsOpened(!isOpened)}
						>
							<div
								className={`transition-all duration-300 bg-fluorescent_cyan h-1 w-7 rounded-full ${
									isOpened
										? "rotate-45 translate-y-[0.28rem]"
										: "translate-y-0 rotate-0"
								}`}
							/>
							<div
								className={`transition-all duration-300 bg-prussian_blue/70 h-1 w-7 rounded-full ${
									isOpened ? "hidden" : "block"
								}`}
							/>
							<div
								className={`transition-all duration-300 h-1 w-7 rounded-full ${
									isOpened
										? "-rotate-45 -translate-y-[0.34rem] bg-prussian_blue/80"
										: "translate-y-0 rotate-0 bg-fluorescent_cyan"
								}`}
							/>
						</button>
					</div>
					<Link to="/" className="flex items-center gap-2">
						<img src={logo} alt="" className="h-10 w-10" />
						<div className="font-bold text-prussian_blue text-lg hidden md:block">
							PortIfy
						</div>
					</Link>
					<ul className="text-prussian_blue text-sm hidden items-center gap-10 md:flex">
						{navLinks.map((navLink) => (
							<li className="relative group" key={navLink.text}>
								<NavLink to={navLink.href}>
									{({ isActive }) => (
										<>
											{navLink.text}
											<div
												className={`w-full ${
													isActive
														? "h-2"
														: "group-hover:h-2 h-0"
												} bg-fluorescent_cyan absolute bottom-0 -z-10 transition-all duration-300`}
											/>
										</>
									)}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="relative">
						<button
							onClick={() => setShowUserOptions(!showUserOptions)}
						>
							<img
								src={userIcon}
								alt=""
								className="h-10 w-10 object-cover rounded-full"
								draggable={false}
							/>
						</button>
						{showUserOptions && (
							<div className="absolute bg-fluorescent_cyan/10 rounded-lg border-fluorescent_cyan border-2 p-3s right-3 divide-y-2 divide-black/10 text-prussian_blue animate-fadeIn">
								<Link
									to="/profile"
									className="flex items-center gap-2 p-2 hover:bg-fluorescent_cyan/20 transition-all duration-300"
								>
									<UserIcon className="h-6 w-6" />
									<div className="font-bold">Profile</div>
								</Link>
								<Link
									to="/profile-edit"
									className="flex items-center gap-2 p-2 hover:bg-fluorescent_cyan/20 transition-all duration-300"
								>
									<Cog6ToothIcon className="h-6 w-6" />
									<div className="font-bold whitespace-nowrap">
										Edit User
									</div>
								</Link>
								<Link
									to="/logout"
									className="flex items-center gap-2 p-2 hover:bg-fluorescent_cyan/20 transition-all duration-300"
								>
									<ArrowRightOnRectangleIcon className="h-6 w-6" />
									<div>Logout</div>
								</Link>
							</div>
						)}
					</div>
				</div>
			</nav>
			<div
				className={`z-20 absolute w-full md:hidden bg-white/20 border-y-2 py-3 ${
					isOpened
						? "translate-y-0 opacity-100"
						: "-translate-y-full opacity-0"
				} transition-all duration-300`}
			>
				<div className="gap-1 text-sm text-gray-700 px-2 flex flex-col">
					{navLinks.map((link) => (
						<NavLink to={link.href} className="" key={link.text}>
							{({ isActive }) => (
								<div
									className="group flex items-center gap-1"
									onClick={() => setIsOpened(!isOpened)}
								>
									<div
										className={`${
											isActive ? "h-9" : "group-hover:h-9"
										} bg-fluorescent_cyan w-1 rounded-full h-1 transition-all duration-300`}
									/>
									<div
										className={`${
											isActive
												? "bg-fluorescent_cyan/20"
												: "hover:bg-fluorescent_cyan/20"
										} p-3 rounded-lg text-prussian_blue font-bold transition-all duration-300 w-full`}
									>
										{link.text}
									</div>
								</div>
							)}
						</NavLink>
					))}
				</div>
			</div>
		</header>
	);
}
