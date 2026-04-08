import React, { use } from 'react';
import AppContexts from './AppContexts';

const postsPromise = fetch('/posts.json').then(res => res.json());

const AppProviders = ({ children }) => {
    // posts array
    const posts = use(postsPromise);

    // navbar categories
    const navLinks = [
        { name: "Backgrounds", path: "/backgrounds" },
        { name: "Mockups", path: "/mockups" },
        { name: "Typography", path: "/typography" },
        { name: "Branding", path: "/branding" },
        { name: "Abstract", path: "/abstract" },
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