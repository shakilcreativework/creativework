
import { useContext, useState } from "react";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import AppContexts from "../../context/AppContexts";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import PinterestExclusive from "../../components/PinterestExclusive/PinterestExclusive";
import DesignCard from "../../components/DesignCard/DesignCard";
import FreeCard from "../../components/FreeCard/FreeCard";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import DontLeave from "../../components/DontLeave/DontLeave";


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
    const { posts, categories } = useContext(AppContexts);
    const [currentTab, setCurrentTab] = useState("All");
    console.log('from home', posts);

    // categories handle click function
    const selectCategories = (category) => {
        setCurrentTab(category)
    };

    return (
        <div>
            {/* banner */}
            <Banner />

            {/* Pinterest Exclusive */}
            <PinterestExclusive />

            {/* trending categories button */}
            <div className=" pt-10 md:pt-14 lg:pt-20">
                <Container>
                    <div className="space-y-4">
                        <h3 className="text-[#2a2622] text-base md:text-lg lg:text-xl xl:text-2xl dm-serif">
                            Trending Designs
                        </h3>

                        <div className="bg-white shadow-xs p-2 rounded-sm">
                            <div className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth">
                                {categories.map((category, idx) => (
                                    <div key={idx} className="shrink-0 py-1 ">
                                        <MagneticWrapper onClick={() => selectCategories(category)} className={`z-50 shadow-sm hover:shadow-md py-1 px-5 ${currentTab.toLocaleLowerCase() === category.toLocaleLowerCase() ? 'bg-black text-white hover:text-white active:text-white' : ''}`}>
                                            {category}
                                        </MagneticWrapper>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* dont leave */}
            <div>
                <DontLeave />
            </div>
        </div>
    );
};

export default Home;