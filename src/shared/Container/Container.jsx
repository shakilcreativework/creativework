import React from 'react';
import clsx from "clsx";

const Container = ({children, className}) => {
    return (
        <div className={clsx("max-w-350 mx-auto px-6 lg:px-0", className)}>
            {children}
        </div>
    );
};

export default Container;