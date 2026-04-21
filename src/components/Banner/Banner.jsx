import React from 'react';
import Container from '../../shared/Container/Container';
import SoundButton from '../../shared/buttons/SoundButton';
import MagneticButton from '../../shared/buttons/MagneticWrapper';
import { FaMagic } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";



// https://i.ibb.co.com/Sw1GcJyf/arts-1.jpg 0k type better 
// https://i.ibb.co.com/cXZkF17T/arts-2.jpg
// https://i.ibb.co.com/p7XTDCn/arts-3.jpg
// https://i.ibb.co.com/21XZBYTR/arts-4.jpg
// https://i.ibb.co.com/RpYvrg4x/arts-5.jpg 0k type better
// https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg 0k type better done
// https://i.ibb.co.com/vxmzQLNP/arts-11.jpg ok type better done
// https://i.ibb.co.com/hRwmmNXx/arts-7.jpg
// https://i.ibb.co.com/FqKMkCj2/arts-8.jpg ok type
// https://i.ibb.co.com/Z6Mgkh8B/arts-9.jpg
// https://i.ibb.co.com/kgyJ9sTD/arts-10.jpg ok type
// https://i.ibb.co.com/L7ZhY4T/arts-12.jpg ok
// https://i.ibb.co.com/6csVwMDn/arts-13.jpg ok
// https://i.ibb.co.com/GQBkDmKC/arts-60.jpg
// https://i.ibb.co.com/rG12Rd6G/arts-41.jpg
// https://i.ibb.co.com/CKqjh9hj/arts-42.jpg
// https://i.ibb.co.com/RkjJPWMM/arts-43.jpg
// https://i.ibb.co.com/Xx72939R/arts-44.jpg

// <div className="bg-[linear-gradient(to_right,rgba(120,53,15,0.85),rgba(234,88,12,0.55),rgba(251,146,60,0.35)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.85),rgba(224,122,95,0.55),rgba(224,122,95,0.25)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">                
// <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.75),rgba(224,122,95,0.45),rgba(224,122,95,0.15)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(250,248,245,0.9),rgba(224,122,95,0.4),rgba(224,122,95,0.1)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.9),rgba(240,143,162,0.6),rgba(253,205,133,0.3)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
// <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.2)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">

const Banner = () => {
    return (
        <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(224,122,95,0.35),rgba(255,255,255,0.05)),url('https://i.ibb.co.com/RpYvrg4x/arts-5.jpg')] bg-cover bg-center h-104 md:h-108.75 lg:h-134 xl:h-140 w-full">
            <Container className={"h-full"}>
                <div className="flex flex-col gap-2 md:gap-4 justify-center items-start h-full">
                    <MagneticButton leftIcon={<FaMagic />} className={'py-1 px-3 font-medium hover:text-red-500 hidden sm:flex sm:mb-2'} children={'1,000+ designs ready'} />
                    <div className='flex gap-4 justify-center items-center'>
                        <div>
                            <img src="https://i.ibb.co.com/YBrX64Y6/gift.png" className='w-20 sm:w-10 lg:w-16' alt="Gift" />
                        </div>
                        <h1 className=" text-2xl md:text-5xl lg:text-6xl text-black/80 dm-serif text-shadow-lg font-bold">Free Vector Downloads <span className='bg-linear-to-r from-orange-400 to-red-500 bg-clip-text bg-transparent text-transparent'>Available Now</span></h1>
                    </div>
                    <p className="text-base lg:text-lg text-black/80 text-shadow-lg font-medium mt-1 md:mt-0">Get free + premium designs for logos, branding, t-shirts & commercial use — all in one hub.</p>
                    <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
                        <SoundButton leftIcon={<GrDownload />} text={"Download Free Designs"} to={'/branding'} as="link" />
                        <SoundButton rightIcon={<FaArrowRightLong />} animationBgOne={'bg-white/30'} animationBgTwo={'bg-white/40'} text={"Explore Collection"} className={'from-black/70 to-black text-white'} to={'/backgrounds'} as="link" />
                    </div>

                    <div className='flex flex-wrap font-semibold justify-center gap-2 md:h-5 lg:gap-10 items-center w-full mt-3 sm:mt-4 lg:mt-10'>
                        <p className='flex justify-center items-center gap-2 text-sm md:text-base text-shadow-lg'><IoMdCheckmarkCircleOutline className="text-red-600" /> No signup</p>
                        <p className='flex justify-center items-center gap-2 text-sm md:text-base text-shadow-lg'><IoMdCheckmarkCircleOutline className="text-red-600" /> Commercial use</p>
                        <p className='flex justify-center items-center gap-2 text-sm md:text-base text-shadow-lg'><IoMdCheckmarkCircleOutline className="text-red-600" /> Instant download</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;