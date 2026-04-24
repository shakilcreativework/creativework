
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function SoundButton({
  children,
  text,
  mobileText,
  tabletText,
  desktopText,
  className,
  to,
  href,
  onClick,
  as = "button",
  leftIcon,
  rightIcon,
  animationBgOne,
  animationBgTwo,
}) {

  const baseStyles = twMerge(
    clsx(
      "relative inline-flex items-center justify-center capitalize",

      // ✅ FIXED RESPONSIVE SIZE
      "rounded-full font-medium",
      "text-sm md:text-base",

      // ✅ SMOOTH UX
      "transition-all duration-300 ease-in-out",
      "transform hover:scale-105 active:scale-95",

      // ✅ CLEAN LAYOUT
      "overflow-hidden whitespace-nowrap",

      // ✅ DEFAULT STYLE
      !className?.includes("bg-") &&
      "bg-gradient-to-r from-orange-400 to-red-500 text-white",

      !className?.includes("py-") &&
      "py-2.5 md:py-3 px-5 md:px-6",

      className
    )
  );

  // 🔊 Bounce layer (kept as you want)
  const animationBgOneStyles = twMerge(
    clsx(
      "absolute inset-0 rounded-full bg-orange-300 opacity-30 animate-bounce",
      animationBgOne
    )
  );

  // 🌊 Glow layer (softened)
  const animationBgTwoStyles = twMerge(
    clsx(
      "absolute inset-0 rounded-full bg-orange-400 opacity-20 blur-lg scale-110",
      animationBgTwo
    )
  );

  const content = (
    <>
      {/* 🔊 Bounce layer */}
      <span className={animationBgOneStyles}></span>

      {/* 🌊 Glow layer */}
      <span className={animationBgTwoStyles}></span>

      {/* 🎯 Content */}
      <span className="relative z-10 flex items-center gap-2">

        {/* LEFT ICON (always visible) */}
        {leftIcon && (
          <span className="flex items-center shrink-0">
            {leftIcon}
          </span>
        )}

        {/* RESPONSIVE TEXT */}
        <span className="flex items-center">
          {mobileText || tabletText || desktopText ? (
            <>
              <span className="sm:hidden">
                {mobileText || text}
              </span>
              <span className="hidden sm:inline md:hidden">
                {tabletText || text}
              </span>
              <span className="hidden md:inline">
                {desktopText || text}
              </span>
            </>
          ) : (
            children || text
          )}
        </span>

        {/* RIGHT ICON (always visible) */}
        {rightIcon && (
          <span className="flex items-center shrink-0">
            {rightIcon}
          </span>
        )}

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