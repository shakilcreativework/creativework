
import { GrDownload } from "react-icons/gr";
import Container from "../../shared/Container/Container";
import SoundButton from "../../shared/buttons/SoundButton";

const FreeBundle = () => {
    return (
        <div className="py-20">
            <Container>
                <div className="bg-[#0c121a] rounded-2xl text-white plus-jakarta grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                    <div className=" p-5 lg:p-16 xl:p-20 md:pr-0 space-y-5">
                        <span className="py-1.5 px-4 rounded-full text-xs font-bold uppercase text-orange-500 bg-orange-100">
                            free bundle
                        </span>
                        <h1 className="flex gap-2 items-center lg:gap-2 xl:gap-1 text-[22px] sm:text-5xl font-bold lg:font-extrabold mt-5"> <img className="w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24" src="https://i.ibb.co.com/Hpf5bLht/bonfire.png" alt="" /> Get 50+ Free <br /> Animal Silhouettes</h1>
                        <p className="text-[#fdfcf8b3] text-sm lg:text-base">Download a curated bundle of high-quality animal vectors — perfect for logos, t-shirts, and creative projects.</p>
                        <SoundButton leftIcon={<GrDownload />} text={"Download Bundle Now"} to={'/branding'} as="link" />
                    </div>
                    <div>
                        <img className="w-full h-75 sm:h-62.5 lg:h-full object-cover" src="https://i.ibb.co.com/sdsSMJhH/animal-bundle.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FreeBundle;