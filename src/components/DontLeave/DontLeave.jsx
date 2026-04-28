
import MagneticButton from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";
import SoundButton from "../../shared/buttons/SoundButton";
import { GrDownload } from "react-icons/gr";
// import { IoGiftOutline } from "react-icons/io5";


const DontLeave = () => {
    return (
        <div className="my-20">
            <Container>
                <div className=" rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">

                    <div className=" bg-[linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url('https://i.ibb.co.com/W45FYjjF/arts-51.jpg')] bg-cover bg-center h-120 sm:h-100 md:h-108.75 w-full">
                        <div className=" h-full text-center flex flex-col justify-center items-center space-y-3">
                            {/* <IoGiftOutline className="hidden sm:inline text-6xl text-white" /> */}
                            <img src="https://i.ibb.co.com/dwMysmgg/shopping-cart-1.png" className='hidden sm:inline sm:w-32 lg:w-16' alt="Shoping Gift" />
                            <div className='flex flex-col sm:flex-row w-full sm:w-fit gap-4 justify-center items-center'>
                                <div>
                                    <img src="https://i.ibb.co.com/YBrX64Y6/gift.png" className='w-20 sm:w-10 lg:w-15' alt="Gift Box" />
                                </div>
                                <h1 className=" plus-jakarta text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold">Get Free Designs Before You Leave</h1>

                            </div>
                            <p className="text-base lg:text-lg text-white font-normal">Download free designs and explore our premium collections — all in one click.</p>
                            <SoundButton leftIcon={<GrDownload />} text={"Get Free Designs"} to={'/branding'} as="link" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DontLeave;