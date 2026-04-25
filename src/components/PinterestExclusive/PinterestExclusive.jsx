import React from 'react';
import Container from '../../shared/Container/Container';
import MagneticButton from '../../shared/buttons/MagneticWrapper';
import { Gift } from '@gravity-ui/icons';
import SoundButton from '../../shared/buttons/SoundButton';
import IconCard from '../IconCard/IconCard';

// https://i.ibb.co.com/Lh1pwJ2J/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-8.jpg
// https://i.ibb.co.com/GfgdShqY/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-6.jpg
// https://i.ibb.co.com/3y9T1MmM/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-5.jpg
// https://i.ibb.co.com/6cGSHKTf/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-4.jpg
// https://i.ibb.co.com/6cqyXHn2/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-3.jpg
// https://i.ibb.co.com/fR0HX4G/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-2.jpg
// https://i.ibb.co.com/7xrg1kkc/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-1.jpg
// https://i.ibb.co.com/WvDPFPfP/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-7.jpg
// https://i.ibb.co.com/XxrKRJpC/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-10.jpg
// https://i.ibb.co.com/rR6PvgCw/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-9.jpg

const PinterestExclusive = () => {
    return (
        <div className='py-20'>
            <Container>
                <div className='text-center'>
                    <div className='space-y-3'>
                        <MagneticButton leftIcon={<Gift />} className={'py-1 px-3 font-bold text-red-500 hover:text-[#1F1B16] text-sm shadow-sm uppercase mx-auto '} children={'Pinterest Exclusive'} />
                        <h1 className=" mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center text-3xl md:text-4xl lg:text-5xl text-[#1F1B16] plus-jakarta font-extrabold">
                            <img src="https://i.ibb.co.com/dwMysmgg/shopping-cart-1.png" className='w-28 sm:w-10 lg:w-16' alt="Gift" /> Free Downloads for Pinterest Visitors
                        </h1>
                        <p className="text-base lg:text-lg text-[#62748e] font-normal">Limited free access — download now and explore the full collection.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mt-10 md:mt-14'>
                    <IconCard image={'https://i.ibb.co.com/Lh1pwJ2J/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-8.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/GfgdShqY/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-6.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/3y9T1MmM/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-5.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/6cGSHKTf/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-4.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/6cqyXHn2/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-3.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/fR0HX4G/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-2.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/7xrg1kkc/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-1.jpg'} />
                    <IconCard image={'https://i.ibb.co.com/WvDPFPfP/golden-crown-icons-set-of-royalty-luxury-design-vector-for-perfect-graphics-elements-7.jpg'} />
                </div>
            </Container>
        </div>
    );
};

export default PinterestExclusive;