import { useContext } from "react";
import PostsContext from "../../context/posts/PostsContext";

const Home = () => {
    const {posts} = useContext(PostsContext);
    console.log(posts);
    return (
        <>
            Home
        </>
    );
};

export default Home;