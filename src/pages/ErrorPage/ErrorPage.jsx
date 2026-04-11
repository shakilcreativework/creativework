import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center text-[#6F665C] bg-[#FAF8F5CC] px-6">
                <div className="text-center max-w-lg">

                    {/* Error Code */}
                    <h1 className="text-8xl font-extrabold text-indigo-500 drop-shadow-lg">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl font-semibold mt-4 dm-sans text-[#1F1B16]">
                        Oops! Page not found
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mt-3">
                        The page you're looking for doesn’t exist or has been moved.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                        <Link
                            to="/"
                            className="px-6 py-3 transition rounded-md shadow-lg dm-serif hover:bg-[#FAF8F5CC]"
                        >
                            Go Home
                        </Link>
                    </div>

                    {/* Optional Illustration */}
                    <div className="mt-10">
                        <img
                            src="https://i.ibb.co.com/wrQmyYPT/alert.png"
                            alt="Error illustration"
                            className="w-full max-w-xs mx-auto opacity-80"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;