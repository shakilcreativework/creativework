import React, { useContext, useState } from "react";
import AppContexts from "../../context/AppContexts";
import { Link, NavLink } from "react-router";
import { GrSearch } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Container from "../Container/Container";
import Shark from "../../components/Logo/Shark";
import useColorCycle from "../../hooks/useColorCycle";

const Navbar = () => {
    const { navLinks } = useContext(AppContexts);
    const [open, setOpen] = useState(false);

    // const colorHexList = [
    //     "#E07A5F",
    //     "#FF9720",
    //     "#FDCD85",
    //     "#C62828",
    //     "#F08FA2",
    //     "#875094",
    //     "#87A9AB",
    //     "#6CB8A6",
    //     "#00897B",
    //     "#778863"
    // ];

    // to variation colors
    var { color, opacity } = useColorCycle([
        "#E07A5F", "#FF9720", "#FDCD85", "#C62828", "#F08FA2",
        "#875094", "#87A9AB", "#6CB8A6", "#00897B", "#778863"
    ], 2500, 0.3);

    // menu open and close for small devices
    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        // ✅ CHANGE 1
        <div className="bg-[#FAF8F5CC] backdrop-blur-md sticky top-0 py-4 z-50 shadow-xs">
            {/* ✅ CHANGE 2 */}
            <nav className="relative">
                <Container>
                    <div className="flex justify-between items-center w-full">

                        {/* Logo */}
                        <Link to={'/'}>
                            <div className="flex items-center dm-sans">
                                <Shark style={{
                                    color: color,
                                    opacity: opacity,
                                    transition: "opacity 1s ease-in-out"
                                }} className="w-10" />
                                <span className="-ml-1 text-xl text-[#1F1B16] font-medium dm-serif">reativedesign</span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-4 lg:gap-6 items-center">
                            {navLinks.map((nav) => (
                                <li key={nav.name}>
                                    <NavLink
                                        to={nav.path}
                                        className="dm-sans text-sm text-[#6F665C] hover:text-[#E07A5F] transition-all font-medium"
                                    >
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu */}
                        {/* ✅ CHANGE 3 (BIG FIX) */}
                        <ul
                            className={`absolute md:hidden w-full left-0 top-full bg-[#FAF8F5] py-6 flex flex-col
                        transform transition-all duration-300 ease-in-out

                        ${open
                                    ? "translate-y-3.5 opacity-100"
                                    : "-translate-y-4 opacity-0 pointer-events-none"
                                }`}
                        >
                            {navLinks.map((nav) => (
                                // ✅ CHANGE 4
                                <li key={nav.name} className="w-full text-left px-6 py-2">
                                    <NavLink
                                        to={nav.path}
                                        onClick={() => setOpen(false)}
                                        className="block dm-sans text-sm text-[#91877d] hover:text-gray-700 transition-all font-medium"
                                    >
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Icons */}
                        <div className="flex items-center gap-4">
                            <div className="rounded-full hover:bg-white text-[#6F665C] active:text-[#E07A5F] hover:text-[#E07A5F] transition-all p-2">
                                <GrSearch className="text-lg" />
                            </div>

                            <div
                                onClick={handleMenu}
                                className="block md:hidden rounded-full hover:bg-white text-[#1F1B16] active:text-[#E07A5F] hover:text-[#E07A5F] p-2 transition-colors duration-200"
                            >
                                <div className="relative w-6 h-6">
                                    <IoClose
                                        className={`absolute text-xl transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                                            }`}
                                    />
                                    <AiOutlineMenu
                                        className={`absolute text-xl transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </nav>
        </div>
    );
};

export default Navbar;