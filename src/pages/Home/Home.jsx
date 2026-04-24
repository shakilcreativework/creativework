
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
import DesignersChoose from "../../components/DesignersChoose/DesignersChoose";
import { BsFire } from "react-icons/bs";



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
            <div>
                <Container>
                    <div className="space-y-4">
                        <div className="space-y-2.5">
                            <h1 className="mt-4 flex justify-start items-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1F1B16] plus-jakarta font-extrabold">
                                <BsFire className="text-4xl md:text-5xl text-orange-500 drop-shadow-[0_2px_6px_rgba(255,115,0,0.5)]" />
                                Trending Vector Designs
                            </h1>
                            <p className="text-base lg:text-lg text-[#62748e] font-normal">Most downloaded this week.</p>
                        </div>


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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mt-10">
                        <Card image={'https://i.ibb.co.com/QFvw8JCY/Resources-silhouette-1.jpg'} />
                        <Card image={'https://i.ibb.co.com/tp0k7VpM/Resources-silhouette-2.jpg'} />
                        <Card image={'https://i.ibb.co.com/ynNMBm6F/Resources-silhouette-3.jpg'} />
                        <Card image={'https://i.ibb.co.com/JFxkNL41/Resources-silhouette-4.jpg'} />
                        <Card image={'https://i.ibb.co.com/YFHjJvVH/Resources-silhouette-5.jpg'} />
                        <Card image={'https://i.ibb.co.com/Xk2h48S4/Resources-silhouette-6.jpg'} />
                        <Card image={'https://i.ibb.co.com/p6phxq9d/Resources-silhouette-7.jpg'} />
                        <Card image={'https://i.ibb.co.com/qMHM2BgN/Resources-silhouette-8.jpg'} />
                        <Card image={'https://i.ibb.co.com/SbRjTCb/Resources-silhouette-9.jpg'} />
                    </div>
                </Container>
            </div>

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