
import Panda from "../../components/Logo/Panda";
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import PremiumButton from "../../shared/buttons/PremiumButton";
import Container from "../../shared/Container/Container";


const Home = () => {

    return (
        <div>
            <Container>
                <p className="dm-serif font-normal text-sm">Home</p>
                <Panda className="w-10 text-green-300" />

                {/* buttons */}
                <div className="flex flex-col justify-center items-center space-y-5 my-10">
                    <PremiumButton />
                    <MagneticWrapper children="Unlock the Design Experience ✨" />
                </div>
            </Container>
        </div>
    );
};

export default Home;