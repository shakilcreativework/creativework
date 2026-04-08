import React, { useContext, useState } from "react";
import AppContexts from "../../context/AppContexts";
import { NavLink } from "react-router"; // fixed import
import { GrSearch } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

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
        <div className="bg-[#faf8f5cc] relative py-4">
            <nav className="max-w-350 mx-auto px-4 lg:px-0 flex justify-between items-center 
                      w-full z-50">
                <h2 className="text-[20px] font-medium dm-serif">
                    Creative<span>w</span>ork
                </h2>
                {
                    !open ?

                        <ul className="absolute md:relative w-full md:w-auto 
               flex flex-col md:flex-row 
               bg-[#faf8f5cc] md:bg-transparent 
               gap-6 md:gap-4 lg:gap-6 
               items-center 
               top-16 md:top-0 left-0 py-6 md:py-0">
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
                        :
                        ""
                }
                <div className="flex items-center gap-4">
                    <div className="rounded-full hover:bg-white text-[#91877d] hover:text-gray-700 transition-all p-2">
                        <GrSearch className="dm-sans text-lg font-medium" />
                    </div>
                    <div onClick={() => {handleMenu()}} className="block md:hidden rounded-full hover:bg-white text-[#91877d] hover:text-gray-700 transition-all p-2">
                        {
                            open ?
                                <AiOutlineMenu className="dm-sans text-xl font-medium" />
                                :
                                <IoClose className="dm-sans text-xl font-medium" />
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;