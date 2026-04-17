
import { useContext } from "react";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import AppContexts from "../../context/AppContexts";

// https://i.ibb.co.com/GQBkDmKC/arts-60.jpg
// https://i.ibb.co.com/rG12Rd6G/arts-41.jpg
// https://i.ibb.co.com/CKqjh9hj/arts-42.jpg
// https://i.ibb.co.com/RkjJPWMM/arts-43.jpg
// https://i.ibb.co.com/Xx72939R/arts-44.jpg

const Home = () => {
    const { categories } = useContext(AppContexts);
    // console.log(categories);

    return (
        <div>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url('https://i.ibb.co.com/RkjJPWMM/arts-43.jpg')] bg-cover bg-center h-100 md:h-108.75 lg:h-134 xl:h-140 w-full ">
                <Container className={"h-full"}>
                    <div className="flex flex-col gap-4 justify-center items-start h-full">
                        <h1 className=" text-3xl md:text-5xl lg:text-6xl text-white/80 dm-serif text-shadow-white">Curated Design Resources</h1>
                        <p className=" text-sm md:text-base lg:text-lg text-white/80 text-shadow-white">Discover premium backgrounds, mockups, and design assets for your creative projects.</p>
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
                                        <MagneticWrapper className="z-50 shadow-sm hover:shadow-md py-1 px-5">
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