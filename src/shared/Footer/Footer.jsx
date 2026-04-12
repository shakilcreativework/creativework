import React, { useContext } from 'react';
import Container from '../Container/Container';
import AppContexts from '../../context/AppContexts';
import { Link, NavLink } from 'react-router';
import Shark from '../../components/Logo/Shark';
import useColorCycle from '../../hooks/useColorCycle';

const Footer = () => {
    const { navLinks, resources } = useContext(AppContexts);
    // console.log(resources);

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

    return (
        <div className='bg-[#F3EEE8] pt-10 pb-5'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-4 lg:gap-7'>
                    <div className=' space-y-2'>
                        <Link to={'/'}>
                            <div className="flex items-center dm-sans">
                                <Shark style={{
                                    color: color,
                                    opacity: opacity,
                                    transition: "opacity 1s ease-in-out"
                                }} className="w-10" />
                                <span className="-ml-1 text-xl font-medium text-[#1F1B16] dm-serif">reativedesign</span>
                            </div>
                        </Link>
                        <p className="dm-sans text-sm text-[#6F665C] font-medium">Curated design resources, aesthetic backgrounds, and premium mockups for creators.

                        </p>
                    </div>
                    <div className='flex justify-between gap-6 md:gap-4 lg:gap-7 md:w-2/7'>
                        <div className=' space-y-2'>
                            <h4 className="text-[20px] text-[#1F1B16] font-medium dm-serif">
                                Explore
                            </h4>
                            <ul
                                className={`flex flex-col gap-1`}
                            >
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
                        </div>
                        <div className=' space-y-2'>
                            <h4 className="text-[20px] text-[#1F1B16] font-medium dm-serif">
                                Resources
                            </h4>
                            <ul
                                className={`flex flex-col gap-1`}
                            >
                                {resources.map((nav) => (
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
                        </div>
                    </div>

                </div>
            </Container>
            <hr className='text-[#E8E2DA] my-5' />
            <div className='text-center'>
                <p className='flex items-center justify-center gap-1 text-sm text-[#8A8178]'>&copy; Creativedesign. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;