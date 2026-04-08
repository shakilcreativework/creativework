import React, { use } from 'react';
import AppContexts from './AppContexts';

const postsPromise = fetch('/posts.json').then(res => res.json());

const AppProviders = ({ children }) => {
    // posts array
    const posts = use(postsPromise);

    // navbar categories
    const navLinks = [
        "Backgrounds",
        "Mockups",
        "Typography",
        "Branding",
        "Abstract",
    ];

    // categories
    const categories = [
        "All",
        "Backgrounds",
        "Mockups",
        "Typography",
        "Branding",
        "Abstract",
        "Minimal"
    ];

    // all values pass by object
    const value = {
        posts,
        categories,
        navLinks,
    };
    return (
        <AppContexts.Provider value={value}>
            {children}
        </AppContexts.Provider>
    );
};

export default AppProviders;