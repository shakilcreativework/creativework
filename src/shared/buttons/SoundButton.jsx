import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function SoundButton({
  children,
  text,
  className,
  to,
  href,
  onClick,
  as = "button", // "button" | "link" | "a"
  leftIcon,
  rightIcon,
  animationBgOne,
  animationBgTwo,
}) {

  const baseStyles = twMerge(
    clsx(
      "relative inline-flex items-center justify-center capitalize",
      "px-8 py-3 rounded-full font-medium",
      "transition-all duration-300 ease-in-out",
      "transform hover:scale-105 active:scale-95",
      "overflow-hidden",

      // default gradient
      !className?.includes("bg-") &&
      "bg-gradient-to-r from-orange-400 to-red-500 text-white",
      !className?.includes("gap-") &&
      "gap-3",

      className
    )
  );

  // overlay one
  const animationBgOneStyles = twMerge(
    clsx(
      "absolute inset-0 rounded-full bg-orange-300 opacity-40 animate-bounce", // animate-ping || animate-pulse || animate-spin
      animationBgOne 
    )
  );

  // overlay two
  const animationBgTwoStyles = twMerge(
    clsx(
      "absolute inset-0 rounded-full bg-orange-400 opacity-20 blur-xl scale-110",
      animationBgTwo
    )
  );


  const content = (
    <>
      {/* 🔊 Pulse layer */}
      <span className={animationBgOneStyles}></span>

      {/* 🌊 Soft glow layer */}
      <span className={animationBgTwoStyles}></span>

      {/* 🎯 Actual content */}
      <span className="relative z-10 flex items-center gap-3">
        {leftIcon}
        {children || text}
        {rightIcon}
      </span>
    </>
  );

  if (as === "link" && to) {
    return (
      <Link to={to} className={baseStyles}>
        {content}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}