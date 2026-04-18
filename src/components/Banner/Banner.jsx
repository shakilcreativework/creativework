import React from 'react';
import Container from '../../shared/Container/Container';
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import { FaArrowRightLong } from "react-icons/fa6";

// <div className="bg-[linear-gradient(to_right,rgba(120,53,15,0.85),rgba(234,88,12,0.55),rgba(251,146,60,0.35)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.85),rgba(224,122,95,0.55),rgba(224,122,95,0.25)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">                
// <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.75),rgba(224,122,95,0.45),rgba(224,122,95,0.15)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(250,248,245,0.9),rgba(224,122,95,0.4),rgba(224,122,95,0.1)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.9),rgba(240,143,162,0.6),rgba(253,205,133,0.3)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.2)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">

const Banner = () => {
    return (
        <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(224,122,95,0.35),rgba(255,255,255,0.05)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
            <Container className={"h-full"}>
                <div className="flex flex-col gap-2 md:gap-4 justify-center items-start h-full">
                    <h1 className=" text-[28px] md:text-5xl lg:text-6xl text-black/80 dm-serif text-shadow-lg">Curated Design Resources</h1>
                    <p className=" text-sm md:text-base lg:text-lg text-black/80 text-shadow-lg">Discover premium backgrounds, mockups, and design assets for your creative projects.</p>
                    <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
                        <MagneticWrapper text={"Explore Designs"} className={'bg-black text-white'} rightIcon={<FaArrowRightLong />} to={'/branding'} as="link" />
                        <MagneticWrapper text={"Browse Backgrounds"} className={'text-black'} to={'/backgrounds'} as="link" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;