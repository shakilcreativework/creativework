import Logo from "../../components/Logo/Logo";
// import Shark from "../../components/Logo/Shark";
import Container from "../../shared/Container/Container";


const Home = () => {

    return (
        <>
            <Container>
                <Logo className="w-10 text-amber-300" />
                {/* <div className="flex items-end dm-sans">
                    <Shark className="w-10 text-green-300" />
                    <span className="-ml-1 -mb-1 text-[20px] text-[#1F1B16] font-medium dm-serif">reativedesign</span>
                </div> */}
            </Container>
        </>
    );
};

export default Home;