import React, { useContext, useState } from "react";
import AppContexts from "../../context/AppContexts";
import { NavLink } from "react-router"; // fixed import
import { GrSearch } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Container from "../Container/Container";

const Navbar = () => {
    const { navLinks } = useContext(AppContexts);
    // toggle menu
    const [open, setOpen] = useState(false);

    // const handle menu icon click
    const handleMenu = () => {
        setOpen(!open);
        console.log(open)
    };

    return (
        <div className="bg-[#faf8f5cc] sticky py-4">
            <Container>
                <nav className="flex justify-between items-center w-full z-50 ">
                    <h2 className="text-[20px] text-[#2a2622] font-medium dm-serif">
                        .Creative<span>d</span>esign
                    </h2>
                    {/* large devices */}
                    <ul
                        className="hidden md:flex md:flex-row gap-4 lg:gap-6 items-center"
                    >
                        {navLinks.map((nav) => (
                            <li key={nav.name}>
                                <NavLink
                                    to={nav.path}
                                    className="dm-sans text-sm text-[#91877d] hover:text-gray-700 transition-all font-medium"
                                >
                                    {nav.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* small devices */}
                    <ul
                        className={`absolute md:hidden w-full flex flex-col bg-[#faf8f5cc] gap-2 items-center left-0 py-6 transform transition-all duration-300 ease-in-out

                    ${open
                                ? "top-16 opacity-100 -z-40"
                                : "-top-60 opacity-0 -z-40"
                            }`}
                    >
                        {navLinks.map((nav) => (
                            <li key={nav.name}>
                                <NavLink
                                    to={nav.path}
                                    className="dm-sans text-sm text-[#91877d] hover:text-gray-700 transition-all font-medium"
                                >
                                    {nav.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <div className="rounded-full hover:bg-white text-[#91877d] hover:text-gray-700 transition-all p-2">
                            <GrSearch className="dm-sans text-lg font-medium" />
                        </div>
                        <div onClick={() => { handleMenu() }} className="block md:hidden rounded-full hover:bg-white text-[#91877d] hover:text-gray-700 transition-all p-2">
                            {
                                open ?
                                    <IoClose className="dm-sans text-xl font-medium" />
                                    :
                                    <AiOutlineMenu className="dm-sans text-xl font-medium" />
                            }
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;