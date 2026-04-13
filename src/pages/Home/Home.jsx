
import MagneticWrapper from "../../shared/buttons/MagneticWrapper";
import Container from "../../shared/Container/Container";


const Home = () => {

    return (
        <div className="py-5">
            <Container>
                <p className="dm-serif font-normal text-sm">Home</p>
                <div className="flex flex-col justify-center items-center space-y-5">
                    <MagneticWrapper as="link" to="/branding" children="Unlock the Design Experience ✨" />
                </div>
                {/* buttons */}
                <div>
                </div>
            </Container>
        </div>
    );
};

export default Home;