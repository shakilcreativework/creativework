
import { useContext, useState } from "react";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import AppContexts from "../../context/AppContexts";
import Banner from "../../components/Banner/Banner";

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
            <div className=" py-10 md:py-14 lg:py-20">
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
        </div>
    );
};

export default Home;