import React from 'react';
import Container from '../../shared/Container/Container';
import { IoIosFlash, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Shark from '../Logo/Shark';
import { Link } from 'react-router';
import { FaRegImage } from 'react-icons/fa';
import { SlBadge } from "react-icons/sl";

const DesignersChoose = () => {

    return (
        <div className='py-20'>
            <Container>
                <div>
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#1F1B16] plus-jakarta font-extrabold">
                        Why Designers Choose Creativedesign
                    </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-10'>
                        <div className='group shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 bg-white p-6 rounded-lg space-y-2'>
                            <div className='w-12 h-12 bg-[#fff1ee] text-[#E07A5F] flex justify-center items-center rounded-full mb-4 transition-all group-hover:scale-110'>
                                <IoMdCheckmarkCircleOutline className='text-2xl' />
                            </div>
                            <h3 className='font-bold text-sm md:text-base plus-jakarta'>Commercial Use Ready</h3>
                            <p className='text-[#62748e] text-xs md:text-sm plus-jakarta'>Use in client work & products.</p>
                        </div>

                        <div className='group shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 bg-white p-6 rounded-lg space-y-2'>
                            <div className='w-12 h-12 bg-[#fff1ee] text-[#E07A5F] flex justify-center items-center rounded-full mb-4 transition-all group-hover:scale-110'>
                                <FaRegImage className='text-2xl' />
                            </div>
                            <h3 className='font-bold text-sm md:text-base plus-jakarta'>High-Quality Vector Files</h3>
                            <p className='text-[#62748e] text-xs md:text-sm plus-jakarta'>Crisp SVG / EPS / AI formats.</p>
                        </div>

                        <div className='group shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 bg-white p-6 rounded-lg space-y-2'>
                            <div className='w-12 h-12 bg-[#fff1ee] text-[#E07A5F] flex justify-center items-center rounded-full mb-4 transition-all group-hover:scale-110'>
                                <IoIosFlash className='text-2xl' />
                            </div>
                            <h3 className='font-bold text-sm md:text-base plus-jakarta'>Instant Download</h3>
                            <p className='text-[#62748e] text-xs md:text-sm plus-jakarta'>No signup. One click access.</p>
                        </div>

                        <div className='group shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 bg-white p-6 rounded-lg space-y-2'>
                            <div className='w-12 h-12 bg-[#fff1ee] text-[#E07A5F] flex justify-center items-center rounded-full mb-4 transition-all group-hover:scale-110'>
                                <SlBadge className='text-2xl' />
                            </div>
                            <h3 className='font-bold text-sm md:text-base plus-jakarta'>Free + Premium Options</h3>
                            <p className='text-[#62748e] text-xs md:text-sm plus-jakarta'>Start free, upgrade anytime.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DesignersChoose;