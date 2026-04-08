import React, { use } from 'react';
import PostsContext from './PostsContext';

const postsPromise = fetch('/posts.json').then(res => res.json());

const PostsProvider = ({children}) => {
    const posts = use(postsPromise);

    const value = {
        posts
    };
    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsProvider;