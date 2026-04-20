
import { Link } from 'react-router';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import Container from '../../shared/Container/Container';
import Panda from '../../components/Logo/Panda';
import useColorCycle from '../../hooks/useColorCycle';
import SoundButton from '../../shared/buttons/SoundButton';
import { HiHome } from "react-icons/hi2";

// import MagneticWrapper from '../../shared/buttons/MagneticWrapper';

const ErrorPage = () => {

    // const colorHexList = [
    //     "#E07A5F",
    //     "#FF9720",
    //     "#FDCD85",
    //     "#C62828",
    //     "#F08FA2",
    //     "#875094",
    //     "#87A9AB",
    //     "#6CB8A6",
    //     "#00897B",
    //     "#778863"
    // ];

    // to variation colors
    var { color, opacity } = useColorCycle([
        "#E07A5F", "#FF9720", "#FDCD85", "#C62828", "#F08FA2",
        "#875094", "#87A9AB", "#6CB8A6", "#00897B", "#778863"
    ], 2500, 0.3);

    return (
        <div className="min-h-dvh flex flex-col">

            <Navbar />

            <div className='flex justify-center items-center px-6 flex-1 bg-[#FAF8F5] py-6 lg:py-10'>

                <Container>
                    <div className='text-center'>

                        {/* Error Code */}
                        <h1 className="text-8xl font-extrabold btn-c dm-sans">
                            404
                        </h1>

                        {/* Title */}
                        <h2 className=" text-xl md:text-3xl font-semibold mt-4 text-[#1F1B16] dm-sans">
                            Oops! Page not found
                        </h2>

                        {/* Description */}
                        <p className="text-[#6F665C] mt-3">
                            The page you're looking for doesn’t exist or has been moved.
                        </p>

                        {/* Button */}
                        <div className="mt-6">
                            {/* <MagneticWrapper to="/" as="link" className="" children={'Go Home'} /> */}
                            <SoundButton leftIcon={<HiHome />} to="/" as="link" className="" children={'Go Home'} />
                        </div>

                        {/* Illustration */}
                        <div style={{
                            color: color,
                            opacity: opacity,
                            transition: "opacity 1s ease-in-out"
                        }} className="mt-10">
                            <Panda />
                        </div>

                    </div>
                </Container>
            </div>

            <Footer />

        </div>
    );
};

export default ErrorPage;