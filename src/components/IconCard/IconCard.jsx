
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

import { SiWpexplorer } from "react-icons/si";
import MagneticButton from "../../shared/buttons/MagneticWrapper";
import SoundButton from "../../shared/buttons/SoundButton";
import { FaLock } from "react-icons/fa";


const IconCard = ({ image }) => {
    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-sm transition-all">

            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt="Golden crown icons set"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 space-y-3">

                <h3 className="line-clamp-2 plus-jakarta font-semibold text-sm text-[#1F1B16]">
                    Running Ferret Black Line Animal Illustration White Background
                </h3>

                {/* badge Bottom row */}
                <div className="flex items-center justify-between">
                    <MagneticButton className="bg-[#E07A5F]/10 text-[#E07A5F] px-3 py-1 rounded-full text-xs font-semibold plus-jakarta" text={'Icons'} />
                    <MagneticButton className="bg-green-200 text-green-400 px-3 py-1 rounded-full text-xs font-semibold hover:text-green-400 plus-jakarta" text={'Free'} />
                </div>
                {/* cta btn */}

                <div className="flex justify-center items-center mx-auto mt-5">
                    <SoundButton children="Unlock Full Design" className={'py-2 px-4 w-full'} leftIcon={<FaLock />} />
                </div>
            </div>
        </div>
    );
};

export default IconCard;