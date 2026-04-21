
import { useContext, useState } from "react";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import AppContexts from "../../context/AppContexts";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import PinterestExclusive from "../../components/PinterestExclusive/PinterestExclusive";

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
    const { categories } = useContext(AppContexts);
    const [currentTab, setCurrentTab] = useState("All");

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
            {/* design card */}
            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6 py-10">
                    <Card type='new' image={"https://i.ibb.co.com/QFvw8JCY/Resources-silhouette-1.jpg"} />
                    <Card type='popular' image={"https://i.ibb.co.com/tp0k7VpM/Resources-silhouette-2.jpg"} />
                    <Card type='trending' image={"https://i.ibb.co.com/ynNMBm6F/Resources-silhouette-3.jpg"} />
                    <Card type='new' image={"https://i.ibb.co.com/JFxkNL41/Resources-silhouette-4.jpg"} />
                    <Card type='popular' image={"https://i.ibb.co.com/YFHjJvVH/Resources-silhouette-5.jpg"} />
                    <Card type='new' image={"https://i.ibb.co.com/Xk2h48S4/Resources-silhouette-6.jpg"} />
                    <Card type='trending' image={"https://i.ibb.co.com/p6phxq9d/Resources-silhouette-7.jpg"} />
                    <Card type='new' image={"https://i.ibb.co.com/qMHM2BgN/Resources-silhouette-8.jpg"} />
                    <Card type='popular' image={"https://i.ibb.co.com/SbRjTCb/Resources-silhouette-9.jpg"} />
                </div>
            </Container>
        </div>
    );
};

export default Home;