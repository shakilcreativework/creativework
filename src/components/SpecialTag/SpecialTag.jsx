import clsx from "clsx";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import AppContexts from "../../context/AppContexts";

export default function SpecialTag({ type = "popular", className }) {
    const { specialTagStyles } = useContext(AppContexts);
    return (
        <span
            className={twMerge(
                clsx(
                    "absolute top-3 left-3 z-10",
                    "text-[11px] font-medium",
                    "px-3 py-1 rounded-full",
                    "shadow-sm backdrop-blur-sm",
                    specialTagStyles[type]
                ),
                className
            )}
        >
            {type}
        </span>
    );
}