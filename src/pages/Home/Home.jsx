import { useContext } from "react";
import PostsContext from "../../context/AppContexts";

const Home = () => {
    const {posts, categories} = useContext(PostsContext);
    console.log(posts, categories);
    return (
        <>
            Home
        </>
    );
};

export default Home;