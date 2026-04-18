
import { useContext, useState } from "react";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import AppContexts from "../../context/AppContexts";

// https://i.ibb.co.com/Sw1GcJyf/arts-1.jpg 0k type better 
// https://i.ibb.co.com/cXZkF17T/arts-2.jpg
// https://i.ibb.co.com/p7XTDCn/arts-3.jpg
// https://i.ibb.co.com/21XZBYTR/arts-4.jpg
// https://i.ibb.co.com/RpYvrg4x/arts-5.jpg 0k type better
// https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg 0k type better done
// https://i.ibb.co.com/vxmzQLNP/arts-11.jpg ok type better done
// https://i.ibb.co.com/hRwmmNXx/arts-7.jpg
// https://i.ibb.co.com/FqKMkCj2/arts-8.jpg ok type
// https://i.ibb.co.com/Z6Mgkh8B/arts-9.jpg
// https://i.ibb.co.com/kgyJ9sTD/arts-10.jpg ok type
// https://i.ibb.co.com/L7ZhY4T/arts-12.jpg ok
// https://i.ibb.co.com/6csVwMDn/arts-13.jpg ok
// https://i.ibb.co.com/GQBkDmKC/arts-60.jpg
// https://i.ibb.co.com/rG12Rd6G/arts-41.jpg
// https://i.ibb.co.com/CKqjh9hj/arts-42.jpg
// https://i.ibb.co.com/RkjJPWMM/arts-43.jpg
// https://i.ibb.co.com/Xx72939R/arts-44.jpg

const Home = () => {
    const { categories } = useContext(AppContexts);
    const [currentTab, setCurrentTab] = useState("All");

    // categories handle click function
    const selectCategories = (category) => {
        setCurrentTab(category)
    };

    return (
        // <div className="bg-[linear-gradient(to_right,rgba(120,53,15,0.85),rgba(234,88,12,0.55),rgba(251,146,60,0.35)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
        // <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.85),rgba(224,122,95,0.55),rgba(224,122,95,0.25)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">                
        // <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.75),rgba(224,122,95,0.45),rgba(224,122,95,0.15)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
        // <div className="bg-[linear-gradient(to_right,rgba(250,248,245,0.9),rgba(224,122,95,0.4),rgba(224,122,95,0.1)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
        // <div className="bg-[linear-gradient(to_right,rgba(224,122,95,0.9),rgba(240,143,162,0.6),rgba(253,205,133,0.3)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
        // <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.2)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
        <div>
            <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(224,122,95,0.35),rgba(255,255,255,0.05)),url('https://i.ibb.co.com/7dZ65ZpV/arts-6.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full">
                <Container className={"h-full"}>
                    <div className="flex flex-col gap-4 justify-center items-start h-full">
                        <h1 className=" text-3xl md:text-5xl lg:text-6xl text-black/80 dm-serif text-shadow-lg">Curated Design Resources</h1>
                        <p className=" text-sm md:text-base lg:text-lg text-black/80 text-shadow-lg">Discover premium backgrounds, mockups, and design assets for your creative projects.</p>
                        <div className="flex flex-col md:flex-row gap-3">
                            <MagneticWrapper text={"Explore Designs"} className={'bg-black text-white'} rightIcon={<FaArrowRightLong />} to={'/branding'} as="link" />
                            <MagneticWrapper text={"Browse Backgrounds"} className={'text-black'} to={'/backgrounds'} as="link" />
                        </div>
                    </div>
                </Container>
            </div>
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