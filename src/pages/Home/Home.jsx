
import Panda from "../../components/Logo/Panda";
import Container from "../../shared/Container/Container";


const Home = () => {

    return (
        <div>
            <Container>
                <p className="dm-serif font-normal text-sm">Home</p>
                <Panda className="w-10 text-green-300" />
            </Container>
        </div>
    );
};

export default Home;