import React, { useContext } from 'react';
import AppContexts from '../../context/AppContexts';
import { NavLink } from 'react-router';
import { GrSearch } from "react-icons/gr";

const Navbar = () => {
    const { navLinks } = useContext(AppContexts);
    // console.log(navLinks);
    return (
        <div className='bg-[#faf8f5cc]'>
            <nav className=' max-w-350 mx-auto px-4 lg:px-0 flex justify-between items-center py-6'>
                <h2 className='text-[20px] font-medium dm-serif'>Creative<span>w</span>ork</h2>
                <ul className='flex gap-6 md:gap-4 lg:gap-6 items-center'>
                    {
                        navLinks.map(li => <li key={li}><NavLink className={`dm-sans text-sm text-[#91877d] hover:text-gray-700 transition-all font-medium`}>{li}</NavLink></li>)
                    }
                </ul>
                <div>
                    <GrSearch className={`dm-sans text-lg text-[#91877d] hover:text-gray-700 transition-all font-medium`} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;