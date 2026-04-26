import MagneticButton from "../../shared/buttons/MagneticWrapper";
import SoundButton from "../../shared/buttons/SoundButton";

const TrendingCard = ({ image, value, resoures }) => {
    const valueStyles = {
        popular: "text-yellow-500 bg-yellow-100",
        trending: "text-orange-500 bg-orange-100",
        new: "text-blue-500 bg-blue-100",
    };

    const resourceStyles = {
        free: "text-green-500 bg-green-100",
        premium: "text-purple-500 bg-purple-100",
    };

    return (
        <div className="group border border-gray-100 p-5 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="relative bg-white overflow-hidden rounded-lg">
                <img
                    className="rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt=""
                />

                <span className="absolute top-3 left-3 capitalize">
                    {value && valueStyles[value.toLowerCase()] && (
                        <span className={`py-1 px-3 rounded-full text-xs font-semibold ${valueStyles[value.toLowerCase()]}`}>
                            {value}
                        </span>
                    )}
                </span>

                <span className="absolute top-3 right-3 capitalize">
                    {resoures && resourceStyles[resoures.toLowerCase()] && (
                        <span className={`py-1 px-3 rounded-full text-xs font-semibold ${resourceStyles[resoures.toLowerCase()]}`}>
                            {resoures}
                        </span>
                    )}
                </span>
            </div>
            <div className="mt-4">
                <MagneticButton children={'See Full Design →'} className={'w-full bg-black text-white/80 group-hover:text-white font-semibold'} />
            </div>
        </div>
    );
};

export default TrendingCard;