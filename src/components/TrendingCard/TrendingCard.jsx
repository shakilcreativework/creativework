
import MagneticButton from "../../shared/buttons/MagneticWrapper";
import SoundButton from "../../shared/buttons/SoundButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { Gift } from '@gravity-ui/icons';
import { FaCrown } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { TiCloudStorage } from "react-icons/ti";

const TrendingCard = ({ image, value, resoures}) => {
    const valueStyles = {
        popular: "text-yellow-500 bg-yellow-100",
        trending: "text-orange-500 bg-orange-100",
        new: "text-amber-600 bg-amber-100",
    };

    const resourceStyles = {
        free: "text-green-500 bg-green-100",
        premium: "text-purple-500 bg-purple-100",
    };

    return (
        <div className={`group border border-gray-200 p-5 rounded-xl transition-all duration-300 hover:-translate-y-2  shadow-xs hover:shadow-lg`}>
            <div className="relative bg-white overflow-hidden rounded-lg">
                <img
                    className="rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt=""
                />

                <span className="absolute top-3 left-3 capitalize">
                    {value && valueStyles[value.toLowerCase()] && (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold animate-pulse ${valueStyles[value.toLowerCase()]}`}>
                            {value.toLowerCase() === 'trending' ? <IoMdTrendingUp className="w-4 h-4" /> : value.toLowerCase() === 'popular' ? <BsFire className="w-4 h-4" /> :  <TiCloudStorage className="w-4 h-4" />}
                            {value}
                        </span>
                    )}
                </span>

                <span className="absolute top-3 right-3 capitalize">
                    {resoures && resourceStyles[resoures.toLowerCase()] && (
                        <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold animate-pulse ${resourceStyles[resoures.toLowerCase()]}`}
                        >
                            {resoures.toLowerCase() === 'free' ? <Gift className="w-4 h-4" /> : <FaCrown className="w-4 h-4" />}
                            {resoures}
                        </span>
                    )}
                </span>
                {resoures.toLowerCase() === 'free' ? (
                    <span className="absolute bottom-3 w-full text-center z-20 animate-pulse">
                        <span className="flex items-center justify-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 w-fit mx-auto py-1 px-3 rounded-full shadow-sm">
                            <Gift />
                            Free • Clean EPS Included
                        </span>
                    </span>)
                    :
                    (<span className="absolute bottom-3 w-full text-center z-20 animate-pulse">
                        <span className="flex items-center justify-center gap-1.5 text-xs font-medium text-purple-500 bg-purple-50 w-fit mx-auto py-1 px-3 rounded-full shadow-sm">
                            <Gift />
                            Premium Pack • Clean EPS Ready
                        </span>
                    </span>)
                }
            </div>
            <div className="mt-4">
                <MagneticButton children={'See Full Design'} rightIcon={<FaArrowRightLong />} className={`w-full bg-black text-white/80 group-hover:text-white  font-semibold`} />
            </div>
        </div>
    );
};

export default TrendingCard;