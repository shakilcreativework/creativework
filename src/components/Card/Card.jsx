import React from 'react';
import SpecialTag from '../SpecialTag/SpecialTag';
import MagneticButton from '../../shared/buttons/MagneticWrapper';

// https://i.ibb.co.com/tp0k7VpM/Resources-silhouette-2.jpg
// https://i.ibb.co.com/ynNMBm6F/Resources-silhouette-3.jpg
// https://i.ibb.co.com/JFxkNL41/Resources-silhouette-4.jpg
// https://i.ibb.co.com/YFHjJvVH/Resources-silhouette-5.jpg
// https://i.ibb.co.com/Xk2h48S4/Resources-silhouette-6.jpg
// https://i.ibb.co.com/p6phxq9d/Resources-silhouette-7.jpg
// https://i.ibb.co.com/qMHM2BgN/Resources-silhouette-8.jpg
// https://i.ibb.co.com/SbRjTCb/Resources-silhouette-9.jpg
// https://i.ibb.co.com/QFvw8JCY/Resources-silhouette-1.jpg


const Card = ({ image, type }) => {

    return (
        <div>
            <div className="group bg-white rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">

                <div className="relative">
                    {/* <span className="absolute top-3 left-3 text-xs bg-[#FAF8F5] text-[#6F665C] px-3 py-1 rounded-full z-10">
                        branding
                    </span> */}

                    <SpecialTag type={type} />



                    <div className="bg-white p-4 flex items-center justify-center">
                        <img
                            src={image}
                            alt="deer"
                            className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="p-4 space-y-1">
                    <h3 className="text-[#1F1B16] text-sm dm-serif font-medium line-clamp-1">
                        Curated design resources, aesthetic backgrounds, and premium mockups for creators.
                    </h3>
                    <span className="text-xs bg-[#FAF8F5] text-[#6F665C] px-3 py-1 rounded-full shadow-sm">
                        Branding
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Card;