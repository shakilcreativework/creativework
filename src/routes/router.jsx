// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);

import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home/Home';
import Backgrounds from '../pages/Backgrounds/Backgrounds';
import Mockups from '../pages/Mockups/Mockups';
import Typography from '../pages/Typography/Typography';
import Branding from '../pages/Branding/Branding';
import Icons from '../pages/Icons/Icons';
import Abstract from '../pages/Abstract/Abstract';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/backgrounds',
                element: <Backgrounds />
            },
            {
                path: '/mockups',
                element: <Mockups />
            },
            {
                path: '/typography',
                element: <Typography />
            },
            {
                path: '/branding',
                element: <Branding />
            },
            {
                path: '/icons',
                element: <Icons />
            },
            {
                path: '/abstract',
                element: <Abstract />
            },
        ]
    }
]);

export default router;