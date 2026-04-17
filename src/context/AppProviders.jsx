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
        { name: "Icons", path: "/icons" },
        { name: "Abstract", path: "/abstract" },
    ];

    // trending categories

    // resources
    const resources = [
        { name: "Adobestock", path: "https://stock.adobe.com" },
        { name: "Shutterstock", path: "https://www.shutterstock.com/" },
    ];

    // trending categories
    const categories = [
        "All",
        "Backgrounds",
        "Mockups",
        "Typography",
        "Branding",
        "Abstract",
        "Minimal",
        "Icons"
    ];

    // all values pass by object
    const value = {
        posts,
        categories,
        navLinks,
        resources,
    };
    return (
        <AppContexts.Provider value={value}>
            {children}
        </AppContexts.Provider>
    );
};

export default AppProviders;