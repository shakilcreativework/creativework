import React, { useContext } from 'react';
import Container from '../Container/Container';
import AppContexts from '../../context/AppContexts';
import { NavLink } from 'react-router';

const Footer = () => {
    const { navLinks, resources } = useContext(AppContexts);
    console.log(resources);

    return (
        <div className='bg-[#faf8f5cc] py-10'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-4 lg:gap-7'>
                    <div className=' space-y-2'>
                        <h2 className="text-lg font-normal text-[#2a2622] dm-serif">
                            Creative<span>w</span>ork
                        </h2>
                        <p className="dm-sans text-sm text-[#91877d] font-medium">Curated design resources, aesthetic backgrounds, and premium mockups for creators.

                        </p>
                    </div>
                    <div className='flex justify-between gap-6 md:gap-4 lg:gap-7 md:w-2/7'>
                        <div className=' space-y-2'>
                        <h4 className="text-[20px] text-[#2a2622] font-medium dm-serif">
                            Explore
                        </h4>
                        <ul
                            className={`flex flex-col bg-[#faf8f5cc] gap-1`}
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
                    </div>
                    <div className=' space-y-2'>
                        <h4 className="text-[20px] text-[#2a2622] font-medium dm-serif">
                            Resources
                        </h4>
                        <ul
                            className={`flex flex-col bg-[#faf8f5cc] gap-1`}
                        >
                            {resources.map((nav) => (
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
                    </div>
                    </div>

                </div>
            </Container>
            <hr className='text-gray-200 my-10' />
            <div className='text-center'>
                            <span className='flex items-center justify-center gap-1 text-sm text-[#91877d]'><span className='text-lg font-bold'>&copy;</span> Creativedesign. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;