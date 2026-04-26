
import { useContext } from "react";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import AppContexts from "../../context/AppContexts";
import Banner from "../../components/Banner/Banner";
import PinterestExclusive from "../../components/PinterestExclusive/PinterestExclusive";
import DesignCard from "../../components/DesignCard/DesignCard";
import FreeCard from "../../components/FreeCard/FreeCard";
import DontLeave from "../../components/DontLeave/DontLeave";
import DesignersChoose from "../../components/DesignersChoose/DesignersChoose";
import { BsFire } from "react-icons/bs";
import TrendingPost from "../../components/TrendingPost/TrendingPost";



// https://i.ibb.co.com/QFvw8JCY/Resources-silhouette-1.jpg
// https://i.ibb.co.com/tp0k7VpM/Resources-silhouette-2.jpg
// https://i.ibb.co.com/ynNMBm6F/Resources-silhouette-3.jpg
// https://i.ibb.co.com/JFxkNL41/Resources-silhouette-4.jpg
// https://i.ibb.co.com/YFHjJvVH/Resources-silhouette-5.jpg
// https://i.ibb.co.com/Xk2h48S4/Resources-silhouette-6.jpg
// https://i.ibb.co.com/p6phxq9d/Resources-silhouette-7.jpg
// https://i.ibb.co.com/qMHM2BgN/Resources-silhouette-8.jpg
// https://i.ibb.co.com/SbRjTCb/Resources-silhouette-9.jpg

const Home = () => {
    const { posts } = useContext(AppContexts);
    console.log('from home', posts);

    return (
        <div>
            {/* banner */}
            <Banner />

            {/* Pinterest Exclusive */}
            <PinterestExclusive />

            {/* trending categories button */}
            <TrendingPost />

            {/* why designers choose */}
            <DesignersChoose />

            {/* dont leave */}
            <div>
                <DontLeave />
            </div>
        </div>
    );
};

export default Home;