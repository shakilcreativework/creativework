import React from 'react';
import Container from '../../shared/Container/Container';
import MagneticButton from '../../shared/buttons/MagneticWrapper';
import {Gift} from '@gravity-ui/icons';

const PinterestExclusive = () => {
    return (
        <div className='py-10 md:py-16 lg:py-20'>
            <Container>
                <div className='text-center'>
                    <div className='space-y-3'>
                        
                        <MagneticButton leftIcon={<Gift />} className={'py-1 px-3 font-bold text-red-500 text-sm shadow-sm uppercase mx-auto '} children={'Pinterest Exclusive'} />
                        

                        <h1 className=" mt-5 flex flex-col sm:flex-row gap-3 justify-center items-center text-2xl md:text-4xl lg:text-5xl text-[#1F1B16] plus-jakarta font-extrabold">
                            <img src="https://i.ibb.co.com/dwMysmgg/shopping-cart-1.png" className='w-20 sm:w-10 lg:w-16' alt="Gift" /> Free Downloads for Pinterest Visitors
                        </h1>
                        <p className="text-base lg:text-lg text-[#62748e] font-normal">Limited free access — download now and explore the full collection.</p>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default PinterestExclusive;