import { useContext, useState } from "react";
import AppContexts from "../../context/AppContexts";
import Container from "../../shared/Container/Container";
import { BsFire } from "react-icons/bs";
import MagneticButton from "../../shared/buttons/MagneticWrapper";
import TrendingCard from "../TrendingCard/TrendingCard";

const TrendingPost = () => {
    const { categories } = useContext(AppContexts);
    const [currentTab, setCurrentTab] = useState("All");

    // categories handle click function
    const selectCategories = (category) => {
        setCurrentTab(category)
    };

    return (
        <div className='py-20'>
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
                                    <MagneticButton onClick={() => selectCategories(category)} className={`z-50 shadow-sm hover:shadow-md py-1 px-5 ${currentTab.toLocaleLowerCase() === category.toLocaleLowerCase() ? 'bg-black text-white hover:text-white active:text-white' : ''}`}>
                                        {category}
                                    </MagneticButton>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mt-10">
                    {/* <Card image={'https://i.ibb.co.com/QFvw8JCY/Resources-silhouette-1.jpg'} />
                    <Card image={'https://i.ibb.co.com/tp0k7VpM/Resources-silhouette-2.jpg'} />
                    <Card image={'https://i.ibb.co.com/ynNMBm6F/Resources-silhouette-3.jpg'} />
                    <Card image={'https://i.ibb.co.com/JFxkNL41/Resources-silhouette-4.jpg'} />
                    <Card image={'https://i.ibb.co.com/YFHjJvVH/Resources-silhouette-5.jpg'} />
                    <Card image={'https://i.ibb.co.com/Xk2h48S4/Resources-silhouette-6.jpg'} />
                    <Card image={'https://i.ibb.co.com/p6phxq9d/Resources-silhouette-7.jpg'} />
                    <Card image={'https://i.ibb.co.com/qMHM2BgN/Resources-silhouette-8.jpg'} />
                    <Card image={'https://i.ibb.co.com/SbRjTCb/Resources-silhouette-9.jpg'} /> */}
                    <TrendingCard value={'popular'} resoures={'free'} image={'https://i.ibb.co.com/QFvw8JCY/Resources-silhouette-1.jpg'} />
                    <TrendingCard value={'new'} resoures={'premium'} image={'https://i.ibb.co.com/tp0k7VpM/Resources-silhouette-2.jpg'} />
                    <TrendingCard value={'trending'} resoures={'free'} image={'https://i.ibb.co.com/ynNMBm6F/Resources-silhouette-3.jpg'} />
                    <TrendingCard value={'popular'} resoures={'free'} image={'https://i.ibb.co.com/p6phxq9d/Resources-silhouette-7.jpg'} />
                    <TrendingCard value={'trending'} resoures={'premium'} image={'https://i.ibb.co.com/Xk2h48S4/Resources-silhouette-6.jpg'} />
                    <TrendingCard value={'new'} resoures={'free'} image={'https://i.ibb.co.com/qMHM2BgN/Resources-silhouette-8.jpg'} />
                    <TrendingCard value={'popular'} resoures={'premium'} image={'https://i.ibb.co.com/SbRjTCb/Resources-silhouette-9.jpg'} />
                </div>
            </Container>
        </div>
    );
};

export default TrendingPost;